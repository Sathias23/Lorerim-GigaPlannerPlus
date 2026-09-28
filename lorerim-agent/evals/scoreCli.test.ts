import { readFileSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { loadScenarios, type Scenario } from "./common.ts";
import { OUTPUT_FILES, aggregate, buildPairs, orderSessions, renderReport, seededDraw, type JudgeSummary, type PairwiseKey, type ScoresFile } from "./report.ts";
import { TOOLS, type SessionScore } from "./score.ts";
import { checkScenarioIds, main, runScore } from "./scoreCli.ts";
import { activeChoice, entryPerk, startEvalServer, type EvalServer } from "./testServer.ts";
import { TranscriptBuilder } from "./testTranscripts.ts";

const scenarios = loadScenarios();
const archer = scenarios.find((scenario) => scenario.id === "stealth-archer-vampire")!;
const lich = scenarios.find((scenario) => scenario.id === "lich-no-destruction")!;
const BASELINE_LINE = "End with the final share code.";

let server: EvalServer;
let workDir: string;
let root: string;
let projectsDir: string;

async function legalArcherResult(): Promise<Record<string, unknown>> {
  const applied = await server.apply([
    { op: "set_option_choice", option: "vampire", choice: activeChoice("vampire") },
    { op: "set_player_level", level: archer.levelTarget },
    { op: "take_perk", id: entryPerk("marksman") },
  ]);
  return applied as unknown as Record<string, unknown>;
}

/** Two folders' worth of sessions covering repeats, an unmatched session, a contaminated baseline, and no build. */
async function writeFixtures(): Promise<void> {
  const skill = join(root, "skill");
  const baseline = join(root, "baseline");
  const archerBuild = await legalArcherResult();
  const lichBuild = (await server.apply([
    { op: "set_option_choice", option: "lich", choice: activeChoice("lich") },
    { op: "set_player_level", level: lich.levelTarget },
    { op: "take_perk", id: entryPerk(lich.forbiddenSkills[0]!) },
  ])) as unknown as Record<string, unknown>;

  new TranscriptBuilder(skill, "skill-archer-1", "claude-sonnet-test", 0)
    .command("lorerim-build", archer.prompt)
    .lorerim("skill", TOOLS.applyChanges, { ops: [] }, { structured: archerBuild })
    .say(String(archerBuild.plannerUrl))
    .write(projectsDir);
  new TranscriptBuilder(skill, "skill-archer-2", "claude-sonnet-test", 500)
    .command("lorerim-build", archer.prompt)
    .lorerim("skill", TOOLS.applyChanges, { ops: [] }, { structured: archerBuild })
    .say("Done.")
    .write(projectsDir);
  new TranscriptBuilder(skill, "skill-lich-1", "claude-sonnet-test", 1000)
    .command("lorerim-build", lich.prompt)
    .lorerim("skill", TOOLS.applyChanges, { ops: [] }, { structured: lichBuild })
    .say(String(lichBuild.code))
    .write(projectsDir);
  new TranscriptBuilder(skill, "skill-unmatched", "claude-sonnet-test", 1500).prompt("hello there").say("Hi!").write(projectsDir);

  new TranscriptBuilder(baseline, "base-archer-1", "claude-sonnet-test", 0)
    .prompt(`${archer.prompt}\n${BASELINE_LINE}`)
    .lorerim("baseline", TOOLS.applyChanges, { ops: [] }, { structured: archerBuild })
    .say(String(archerBuild.code))
    .write(projectsDir);
  new TranscriptBuilder(baseline, "base-archer-2", "claude-sonnet-test", 500)
    .prompt(`${archer.prompt}\n${BASELINE_LINE}`)
    .tool("Skill", { skill: "lorerim-build" }, { text: "Launching skill" })
    .say("…")
    .write(projectsDir);
  new TranscriptBuilder(baseline, "base-lich-1", "claude-sonnet-test", 1000)
    .prompt(`${lich.prompt}\n${BASELINE_LINE}`)
    .say("I cannot do that.")
    .write(projectsDir);
}

beforeAll(async () => {
  server = await startEvalServer();
  workDir = await mkdtemp(join(tmpdir(), "lorerim-evals-score-"));
  root = join(workDir, "evals-root");
  projectsDir = join(workDir, "projects");
  await writeFixtures();
});

afterAll(async () => {
  await server.harness.close();
  await rm(workDir, { recursive: true, force: true });
});

function readOut(outDir: string, file: string): string {
  return readFileSync(join(outDir, file), "utf8");
}

describe("runScore", () => {
  let outDir: string;
  let scores: ScoresFile;
  let key: PairwiseKey;

  beforeAll(async () => {
    outDir = join(workDir, "out-1");
    ({ scores, key } = await runScore({ root, outDir, projectsDir, seed: "test-seed", scenarios }, server.lookups));
  });

  it("Unmatched session: listed, not scored", () => {
    expect(scores.unmatched).toEqual([
      { variant: "skill", sessionId: "skill-unmatched", startedAt: "2026-09-28T10:25:01.000Z", firstPrompt: "hello there" },
    ]);
    expect(scores.sessions.map((score) => score.sessionId)).not.toContain("skill-unmatched");
    expect(readOut(outDir, OUTPUT_FILES.report)).toContain("skill-unmatched");
  });

  it("Repeats: two sessions of one scenario in a folder are separate runs", () => {
    const runs = scores.sessions.filter((score) => score.variant === "skill" && score.scenario === archer.id);
    expect(runs.map((score) => [score.sessionId, score.run])).toEqual([
      ["skill-archer-1", 1],
      ["skill-archer-2", 2],
    ]);
    expect(runs.map((score) => score.codeShown)).toEqual([true, false]);
    const row = scores.aggregates.find((entry) => entry.scenario === archer.id && entry.variant === "skill")!;
    expect(row).toMatchObject({ runs: 2, excluded: 0, legal: 2, allChecksPass: 2, codeShown: 1, meanViolations: 0 });
  });

  it("Contaminated baseline: scored and flagged, but left out of aggregates and pairs", () => {
    const contaminated = scores.sessions.find((score) => score.sessionId === "base-archer-2")!;
    expect(contaminated.contaminated).toBe(true);
    const row = scores.aggregates.find((entry) => entry.scenario === archer.id && entry.variant === "baseline")!;
    expect(row).toMatchObject({ runs: 1, excluded: 1, legal: 1 });
    expect(key.pairs.some((pair) => pair.A.sessionId === "base-archer-2" || pair.B.sessionId === "base-archer-2")).toBe(false);
    expect(key.unpaired).toEqual([
      { scenario: archer.id, model: "claude-sonnet-test", run: 2, variant: "skill", sessionId: "skill-archer-2" },
    ]);
  });

  it("No build: counted in the aggregate and shown as such in its pair", () => {
    const row = scores.aggregates.find((entry) => entry.scenario === lich.id && entry.variant === "baseline")!;
    expect(row).toMatchObject({ runs: 1, noBuild: 1, legal: 0, meanViolations: null });
    expect(readOut(outDir, OUTPUT_FILES.pairwise)).toContain("No build: the session ended without a share code.");
  });

  it("pairs each scenario's skill and baseline runs blind, with the key kept apart", () => {
    expect(key.pairs.map((pair) => [pair.pair, pair.scenario, pair.run])).toEqual([
      [1, archer.id, 1],
      [2, lich.id, 1],
    ]);
    for (const pair of key.pairs) {
      expect([pair.A.variant, pair.B.variant].sort()).toEqual(["baseline", "skill"]);
      const skillFirst = seededDraw("test-seed", `${pair.scenario}|${pair.model}|${pair.run}`) < 0.5;
      expect(pair.A.variant).toBe(skillFirst ? "skill" : "baseline");
    }
    const sheet = readOut(outDir, OUTPUT_FILES.pairwise);
    for (const score of scores.sessions) expect(sheet).not.toContain(score.sessionId);
    expect(sheet).not.toMatch(/\b(skill|baseline)\b/i);
    expect(sheet).toContain(`Request: "${archer.prompt}"`);
    expect(JSON.parse(readOut(outDir, OUTPUT_FILES.key))).toEqual(key);
  });

  it("writes identical files when run twice on the same transcripts", async () => {
    const again = join(workDir, "out-2");
    await runScore({ root, outDir: again, projectsDir, seed: "test-seed", scenarios }, server.lookups);
    for (const file of Object.values(OUTPUT_FILES)) expect(readOut(again, file), file).toBe(readOut(outDir, file));
  });

  it("orders pairs with the seed, independently per pair", () => {
    const flipped = buildPairs(scores.sessions, "another-seed");
    expect(flipped.pairs.map((pair) => pair.scenario)).toEqual(key.pairs.map((pair) => pair.scenario));
    const draws = ["a", "b", "c", "d", "e", "f", "g", "h"].map((seed) => seededDraw(seed, "x|m|1") < 0.5);
    expect(new Set(draws).size).toBe(2);
  });
});

/** A scored session with only the fields a test cares about set. */
function fakeScore(overrides: Partial<SessionScore>): SessionScore {
  return {
    variant: "skill",
    scenario: archer.id,
    sessionId: "s",
    startedAt: "2026-09-28T10:00:00.000Z",
    run: 1,
    model: "m",
    models: ["m"],
    contaminated: false,
    contamination: [],
    finalCode: "3.x",
    noBuild: false,
    evaluationError: null,
    codeShown: true,
    legal: true,
    violations: 0,
    perkPointsRemaining: 0,
    playerLevel: archer.levelTarget,
    levelTarget: archer.levelTarget,
    checks: [{ id: "level", pass: true, detail: "" }],
    allChecksPass: true,
    ids: { total: 0, hallucinated: [], ungrounded: [], hallucinatedRate: 0, ungroundedRate: 0 },
    turns: 1,
    toolCalls: 1,
    lorerimToolCalls: 1,
    failedToolCalls: 0,
    tokens: { input: 0, cacheCreation: 0, cacheRead: 0, output: 0, total: 0 },
    build: null,
    ...overrides,
  };
}

function tokens(total: number): SessionScore["tokens"] {
  return { input: total, cacheCreation: 0, cacheRead: 0, output: 0, total };
}

describe("report", () => {
  it("pools id rates over the row and averages only runs that built, leaving contaminated runs out", () => {
    const ids = (total: number, hallucinated: string[], ungrounded: string[]) => ({
      total,
      hallucinated,
      ungrounded,
      hallucinatedRate: hallucinated.length / total,
      ungroundedRate: ungrounded.length / total,
    });
    const rows = aggregate([
      fakeScore({ sessionId: "a", perkPointsRemaining: 10, violations: 2, tokens: tokens(1000), ids: ids(4, ["perk:x"], ["perk:y"]) }),
      fakeScore({
        sessionId: "b",
        perkPointsRemaining: 3,
        violations: 0,
        tokens: tokens(3000),
        checks: [{ id: "level", pass: false, detail: "" }],
        ids: ids(6, ["perk:p", "race:q"], []),
      }),
      fakeScore({ sessionId: "c", noBuild: true, legal: false, violations: null, perkPointsRemaining: null, tokens: tokens(500), checks: [{ id: "level", pass: false, detail: "no build" }] }),
      fakeScore({ sessionId: "d", contaminated: true, perkPointsRemaining: 99, tokens: tokens(99_999), ids: ids(10, Array.from({ length: 10 }, (_, i) => `perk:${i}`), []) }),
    ]);

    expect(rows).toHaveLength(1);
    expect(rows[0]).toMatchObject({
      runs: 3,
      excluded: 1,
      noBuild: 1,
      levelHit: 1,
      hallucinatedRate: 0.3,
      ungroundedRate: 0.1,
      meanViolations: 1,
      meanPerkPointsRemaining: 6.5,
      meanTokens: 1500,
    });
  });

  it("pairs clean runs by rank, so a redone contaminated baseline still pairs", () => {
    const ordered = orderSessions(
      [
        fakeScore({ sessionId: "skill-1", startedAt: "2026-01-01" }),
        fakeScore({ sessionId: "base-1", variant: "baseline", contaminated: true, startedAt: "2026-01-01" }),
        fakeScore({ sessionId: "base-2", variant: "baseline", startedAt: "2026-01-02" }),
      ],
      scenarios,
    );
    const key = buildPairs(ordered, "seed");

    expect(key.pairs).toHaveLength(1);
    expect([key.pairs[0]!.A.sessionId, key.pairs[0]!.B.sessionId].sort()).toEqual(["base-2", "skill-1"]);
    expect(key.pairs[0]!.run).toBe(1);
    expect(key.unpaired).toEqual([]);
  });

  it("adds the judge's fit per scenario × variant × model", async () => {
    const outDir = join(workDir, "out-judge");
    const { scores } = await runScore({ root, outDir, projectsDir, seed: "test-seed", scenarios }, server.lookups);
    const judge: JudgeSummary = {
      model: "haiku",
      pairs: [
        { pair: 1, scenario: archer.id, model: "claude-sonnet-test", run: 1, winner: "skill", reasons: ["A: fits", "B: fits"] },
        { pair: 2, scenario: lich.id, model: "claude-sonnet-test", run: 1, winner: "tie", reasons: ["A: x", "A: y"] },
      ],
    };
    const report = renderReport(scores, judge);
    const rowOf = (scenario: string, variant: string) =>
      report.split("\n").find((line) => line.startsWith(`| ${scenario} | ${variant} | claude-sonnet-test | `))!;

    expect(rowOf(archer.id, "skill").endsWith("| 1-0-0 |")).toBe(true);
    expect(rowOf(archer.id, "baseline").endsWith("| 0-1-0 |")).toBe(true);
    expect(rowOf(lich.id, "skill").endsWith("| 0-0-1 |")).toBe(true);
    expect(report).toContain("## Judge verdicts");
    expect(renderReport(scores)).not.toContain("## Judge verdicts");
  });

  it("numbers runs by start time within variant × scenario × model", () => {
    const base = { variant: "skill", scenario: archer.id, model: "m", contaminated: false } as const;
    const ordered = orderSessions(
      [
        { ...base, sessionId: "late", startedAt: "2026-01-02" },
        { ...base, sessionId: "early", startedAt: "2026-01-01" },
        { ...base, sessionId: "other-model", startedAt: "2026-01-03", model: "n" },
      ] as never,
      scenarios,
    );
    expect(ordered.map((score) => [score.sessionId, score.run])).toEqual([
      ["early", 1],
      ["late", 2],
      ["other-model", 1],
    ]);
  });
});

describe("scenario ids", () => {
  it("are all known to the server", async () => {
    expect(await checkScenarioIds(scenarios, server.lookups)).toEqual([]);
  });

  it("fail loudly when a scenario names an unknown skill", async () => {
    const bad: Scenario = { ...lich, id: "bad", forbiddenSkills: ["pyromancy"] };
    expect(await checkScenarioIds([bad], server.lookups)).toEqual(['bad: unknown skill "pyromancy"']);
    await expect(
      runScore({ root, outDir: join(workDir, "out-bad"), projectsDir, seed: "s", scenarios: [bad] }, server.lookups),
    ).rejects.toThrow(/pyromancy/);
  });
});

describe("main", () => {
  it("Missing dist: exits 1 and says to run agent:build", async () => {
    const emptyDist = join(workDir, "no-dist");
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      expect(await main([], emptyDist)).toBe(1);
      expect(errors.mock.calls.flat().join("\n")).toContain("npm run agent:build");
    } finally {
      errors.mockRestore();
    }
  });

  it("rejects unknown flags", async () => {
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      expect(await main(["--nope"], join(workDir, "no-dist"))).toBe(1);
    } finally {
      errors.mockRestore();
    }
  });
});
