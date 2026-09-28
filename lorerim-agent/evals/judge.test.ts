import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { loadScenarios, toJson } from "./common.ts";
import {
  DEFAULT_JUDGE_MODEL,
  JUDGE_FILE,
  JUDGE_RUBRIC,
  VERDICT_SCHEMA,
  judgeArgs,
  judgePairs,
  judgePrompt,
  main,
  parseVerdict,
  reconcile,
  type ClaudeRun,
  type JudgeFile,
  type RunClaude,
} from "./judge.ts";
import { OUTPUT_FILES, buildPairs, buildScoresFile, renderBuild, type PairKeyEntry } from "./report.ts";
import type { BuildView, SessionScore } from "./score.ts";

const scenarios = loadScenarios();
const archer = scenarios[0]!;

function claudeOutput(fields: Record<string, unknown>): string {
  return JSON.stringify({ type: "result", subtype: "success", is_error: false, total_cost_usd: 0.01, ...fields });
}

function view(race: string): BuildView {
  return {
    playerLevel: archer.levelTarget,
    race,
    birthsign: null,
    deity: null,
    traits: [],
    majorSkills: [],
    minorSkills: [],
    options: [],
    perksBySkill: [{ skill: "Marksman", perks: ["Eagle Eye"] }],
    perkPointsRemaining: 3,
    legal: true,
    violations: [],
  };
}

function session(variant: "skill" | "baseline", race: string): SessionScore {
  return {
    variant,
    scenario: archer.id,
    sessionId: `${variant}-1`,
    startedAt: "2026-09-28T10:00:00.000Z",
    run: 0,
    model: "claude-test",
    models: ["claude-test"],
    contaminated: false,
    contamination: [],
    finalCode: "3.x",
    noBuild: false,
    evaluationError: null,
    codeShown: true,
    legal: true,
    violations: 0,
    perkPointsRemaining: 3,
    playerLevel: archer.levelTarget,
    levelTarget: archer.levelTarget,
    checks: [],
    allChecksPass: true,
    ids: { total: 0, hallucinated: [], ungrounded: [], hallucinatedRate: 0, ungroundedRate: 0 },
    turns: 1,
    toolCalls: 1,
    lorerimToolCalls: 1,
    failedToolCalls: 0,
    tokens: { input: 0, cacheCreation: 0, cacheRead: 0, output: 0, total: 0 },
    build: view(race),
  };
}

const scores = buildScoresFile("/evals", { skill: "/evals/skill", baseline: "/evals/baseline" }, scenarios, [session("skill", "Bosmer"), session("baseline", "Nord")], []);
const key = buildPairs(scores.sessions, "judge-test");
const pair = key.pairs[0]!;
/** The race each side's build shows, which is how a fake judge tells them apart. */
const raceOf = { skill: "Bosmer", baseline: "Nord" } as const;

describe("judge prompt and arguments", () => {
  it("shows the request and both builds, labelled in the order given", () => {
    const prompt = judgePrompt("stealth archer", "BUILD ONE", "BUILD TWO");
    expect(prompt).toContain('Player request: "stealth archer"');
    expect(prompt.indexOf("## Build A")).toBeLessThan(prompt.indexOf("BUILD ONE"));
    expect(prompt.indexOf("BUILD ONE")).toBeLessThan(prompt.indexOf("## Build B"));
    expect(prompt.indexOf("## Build B")).toBeLessThan(prompt.indexOf("BUILD TWO"));
  });

  it("tells the judge to ignore position and allows a tie", () => {
    expect(JUDGE_RUBRIC).toMatch(/order in which the builds are shown means nothing/);
    expect(JUDGE_RUBRIC).toMatch(/tie/);
  });

  it("runs claude -p with no tools, no saved session, a verdict schema, and a budget cap", () => {
    const args = judgeArgs("haiku", 0.1);
    const flag = (name: string) => args[args.indexOf(name) + 1];

    expect(args[0]).toBe("-p");
    expect(flag("--model")).toBe("haiku");
    expect(flag("--tools")).toBe("");
    expect(args).toContain("--no-session-persistence");
    expect(flag("--output-format")).toBe("json");
    expect(JSON.parse(flag("--json-schema")!)).toEqual(VERDICT_SCHEMA);
    expect(flag("--max-budget-usd")).toBe("0.1");
    expect(flag("--system-prompt")).toBe(JUDGE_RUBRIC);
    expect(DEFAULT_JUDGE_MODEL).toBe("haiku");
  });
});

describe("parseVerdict", () => {
  it("reads structured_output, then the result text", () => {
    expect(parseVerdict(claudeOutput({ structured_output: { winner: "A", reason: "fits" } }))).toEqual({
      verdict: { winner: "A", reason: "fits" },
      costUsd: 0.01,
    });
    expect(parseVerdict(claudeOutput({ result: '{"winner":"tie","reason":"same"}' })).verdict).toEqual({ winner: "tie", reason: "same" });
  });

  it("returns no verdict for malformed, error, or out-of-schema output", () => {
    expect(parseVerdict("not json").verdict).toBeNull();
    expect(parseVerdict(claudeOutput({ result: "B is better" })).verdict).toBeNull();
    expect(parseVerdict(claudeOutput({ structured_output: { winner: "C", reason: "?" } })).verdict).toBeNull();
    expect(parseVerdict(claudeOutput({ structured_output: { winner: "A" } })).verdict).toBeNull();
    expect(parseVerdict(claudeOutput({ is_error: true, subtype: "error_max_budget_usd", structured_output: { winner: "A", reason: "x" } }))).toEqual({
      verdict: null,
      costUsd: 0.01,
    });
  });
});

describe("reconcile", () => {
  const entry: Pick<PairKeyEntry, "A" | "B"> = { A: { variant: "baseline", sessionId: "b" }, B: { variant: "skill", sessionId: "s" } };

  it("is a win when the same build wins both orders", () => {
    // Shown order: A = baseline. Swapped: A = skill.
    expect(reconcile(entry, { winner: "B", reason: "" }, { winner: "A", reason: "" })).toBe("skill");
    expect(reconcile(entry, { winner: "A", reason: "" }, { winner: "B", reason: "" })).toBe("baseline");
  });

  it("is a tie on a split (position bias), a tie verdict, or a malformed verdict", () => {
    expect(reconcile(entry, { winner: "A", reason: "" }, { winner: "A", reason: "" })).toBe("tie");
    expect(reconcile(entry, { winner: "B", reason: "" }, { winner: "tie", reason: "" })).toBe("tie");
    expect(reconcile(entry, null, { winner: "A", reason: "" })).toBe("tie");
    expect(reconcile(entry, { winner: "B", reason: "" }, null)).toBe("tie");
  });
});

/** A judge that always prefers the build with `race`, wherever it is shown. */
function preferring(race: string): { run: RunClaude; prompts: string[] } {
  const prompts: string[] = [];
  return {
    prompts,
    run: (_args, input): ClaudeRun => {
      prompts.push(input);
      const winner = input.indexOf(`Race: ${race}`) < input.indexOf("## Build B") ? "A" : "B";
      return { status: 0, stdout: claudeOutput({ structured_output: { winner, reason: `prefers ${race}` } }), stderr: "" };
    },
  };
}

describe("judgePairs", () => {
  it("asks both orders and credits the build that wins both", () => {
    const judge = preferring(raceOf.skill);
    const result = judgePairs(scores, key, "haiku", 0.1, judge.run);

    expect(judge.prompts).toHaveLength(2);
    const [shown, swapped] = judge.prompts;
    const a = renderBuild(scores.sessions.find((entry) => entry.sessionId === pair.A.sessionId)!.build);
    expect(shown!.indexOf(a)).toBeLessThan(shown!.indexOf("## Build B"));
    expect(swapped!.indexOf(a)).toBeGreaterThan(swapped!.indexOf("## Build B"));
    expect(result.pairs[0]).toMatchObject({ pair: 1, scenario: archer.id, winner: "skill" });
    expect(result.totals).toEqual({ skill: 1, baseline: 0, tie: 0 });
    expect(result.costUsd).toBe(0.02);
  });

  it("records a malformed call as an error and the pair as a tie", () => {
    const result = judgePairs(scores, key, "haiku", 0.1, () => ({ status: 1, stdout: "", stderr: "budget exceeded" }));

    expect(result.pairs[0]!.winner).toBe("tie");
    expect(result.pairs[0]!.calls.map((call) => call.error)).toEqual([
      "no valid verdict (exit 1): budget exceeded",
      "no valid verdict (exit 1): budget exceeded",
    ]);
  });
});

describe("main", () => {
  let outDir: string;

  beforeAll(async () => {
    outDir = await mkdtemp(join(tmpdir(), "lorerim-evals-judge-"));
  });

  afterAll(async () => {
    await rm(outDir, { recursive: true, force: true });
  });

  it("exits 1 when there is nothing to judge yet", () => {
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      expect(main(["--out", join(outDir, "empty")], preferring("x").run)).toBe(1);
      expect(errors.mock.calls.flat().join("\n")).toContain("agent:eval:score");
      expect(main(["--out", outDir, "--max-budget-usd", "0"], preferring("x").run)).toBe(1);
    } finally {
      errors.mockRestore();
    }
  });

  it("writes judge.json and adds the fit column to report.md", () => {
    writeFileSync(join(outDir, OUTPUT_FILES.scores), toJson(scores));
    writeFileSync(join(outDir, OUTPUT_FILES.key), toJson(key));
    const logs = vi.spyOn(console, "log").mockImplementation(() => {});
    try {
      expect(main(["--out", outDir, "--model", "sonnet"], preferring(raceOf.baseline).run)).toBe(0);
    } finally {
      logs.mockRestore();
    }

    const judged = JSON.parse(readFileSync(join(outDir, JUDGE_FILE), "utf8")) as JudgeFile;
    expect(judged).toMatchObject({ model: "sonnet", totals: { skill: 0, baseline: 1, tie: 0 } });
    const report = readFileSync(join(outDir, OUTPUT_FILES.report), "utf8");
    expect(report).toContain("Fit is the judge's (sonnet)");
    expect(report).toMatch(/\| stealth-archer-vampire \| baseline \| claude-test \|.*\| 1-0-0 \|/);
    expect(existsSync(join(outDir, OUTPUT_FILES.pairwise))).toBe(false);
  });
});
