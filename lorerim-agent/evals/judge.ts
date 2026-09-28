// `npm run agent:eval:judge -- [--out <dir>] [--model <m>] [--max-budget-usd <n>]`:
// an optional position-swapped LLM judge over the pairwise sheet. The only
// eval command that calls Claude, and only when the owner runs it.
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { DEFAULT_RESULTS_DIR, isMainModule, resolveCliPath, toJson, type Variant } from "./common.ts";
import {
  OUTPUT_FILES,
  pairBuilds,
  renderReport,
  type JudgeSummary,
  type PairKeyEntry,
  type PairWinner,
  type PairwiseKey,
  type ScoresFile,
} from "./report.ts";

export const DEFAULT_JUDGE_MODEL = "haiku";
export const DEFAULT_MAX_BUDGET_USD = 0.25;
export const JUDGE_FILE = "judge.json";

export type Winner = "A" | "B" | "tie";

export interface Verdict {
  winner: Winner;
  reason: string;
}

export const VERDICT_SCHEMA = {
  type: "object",
  properties: {
    winner: { type: "string", enum: ["A", "B", "tie"] },
    reason: { type: "string" },
  },
  required: ["winner", "reason"],
  additionalProperties: false,
} as const;

/** The rubric, sent as the system prompt of every judge call. */
export const JUDGE_RUBRIC = [
  "You judge two LoreRim (Skyrim modpack) character builds made for the same player request.",
  "Decide which build better fits the request. In order of weight:",
  "1. It honors every explicit requirement: the player level, the supernatural path (vampire, werewolf, lich, or none), skills or schools the player ruled out, and the named weapons, armor, and magic.",
  "2. Its perks go into the skills that playstyle actually uses, including the core perks of those trees.",
  "3. Its race, birthsign, deity, traits, major and minor skills, and options support the playstyle.",
  "4. It is legal and leaves few perk points unspent.",
  "The order in which the builds are shown means nothing, and neither does their length. Answer tie when neither is clearly better.",
  'Reply with winner "A", "B", or "tie" and a reason of one or two sentences.',
].join("\n");

/** The user message of one judge call: the request, then the builds in the order given. */
export function judgePrompt(request: string, buildA: string, buildB: string): string {
  return [`Player request: "${request}"`, "", "## Build A", "", buildA, "", "## Build B", "", buildB, ""].join("\n");
}

/** `claude` arguments for one judge call; the prompt goes on stdin. */
export function judgeArgs(model: string, maxBudgetUsd: number): string[] {
  return [
    "-p",
    "--model",
    model,
    "--tools",
    "",
    "--no-session-persistence",
    "--output-format",
    "json",
    "--json-schema",
    JSON.stringify(VERDICT_SCHEMA),
    "--max-budget-usd",
    String(maxBudgetUsd),
    "--system-prompt",
    JUDGE_RUBRIC,
  ];
}

function toVerdict(value: unknown): Verdict | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const { winner, reason } = value as Record<string, unknown>;
  if (winner !== "A" && winner !== "B" && winner !== "tie") return null;
  if (typeof reason !== "string") return null;
  return { winner, reason };
}

/**
 * The verdict in `claude -p --output-format json` output: its
 * `structured_output`, else its `result` text parsed as JSON. Null when
 * neither is a valid verdict (malformed, over budget, or an error run).
 */
export function parseVerdict(stdout: string): { verdict: Verdict | null; costUsd: number | null } {
  let output: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(stdout);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return { verdict: null, costUsd: null };
    output = parsed as Record<string, unknown>;
  } catch {
    return { verdict: null, costUsd: null };
  }
  const costUsd = typeof output.total_cost_usd === "number" ? output.total_cost_usd : null;
  if (output.is_error === true) return { verdict: null, costUsd };
  let verdict = toVerdict(output.structured_output);
  if (!verdict && typeof output.result === "string") {
    try {
      verdict = toVerdict(JSON.parse(output.result));
    } catch {
      verdict = null;
    }
  }
  return { verdict, costUsd };
}

/**
 * Both orders of one pair: the first call sees the sheet's A/B, the second
 * the same builds swapped. The same underlying build must win both for a
 * win; a split, a tie, or a missing verdict is a tie.
 */
export function reconcile(entry: Pick<PairKeyEntry, "A" | "B">, asShown: Verdict | null, swapped: Verdict | null): PairWinner {
  const winnerOf = (verdict: Verdict | null, first: Variant, second: Variant): PairWinner | null => {
    if (!verdict) return null;
    if (verdict.winner === "tie") return "tie";
    return verdict.winner === "A" ? first : second;
  };
  const one = winnerOf(asShown, entry.A.variant, entry.B.variant);
  const two = winnerOf(swapped, entry.B.variant, entry.A.variant);
  return one !== null && one !== "tie" && one === two ? one : "tie";
}

export interface ClaudeRun {
  status: number | null;
  stdout: string;
  stderr: string;
}

export type RunClaude = (args: string[], input: string) => ClaudeRun;

export interface JudgeCall {
  order: "A/B" | "B/A";
  verdict: Verdict | null;
  error: string | null;
  costUsd: number | null;
}

export interface JudgeFile extends JudgeSummary {
  maxBudgetUsd: number;
  pairs: Array<JudgeSummary["pairs"][number] & { calls: JudgeCall[] }>;
  totals: Record<PairWinner, number>;
  costUsd: number;
}

function callJudge(runClaude: RunClaude, args: string[], prompt: string, order: JudgeCall["order"]): JudgeCall {
  const result = runClaude(args, prompt);
  const { verdict, costUsd } = parseVerdict(result.stdout);
  const error = verdict
    ? null
    : `no valid verdict (exit ${result.status ?? "signal"})${result.stderr.trim() ? `: ${result.stderr.trim().slice(0, 300)}` : ""}`;
  return { order, verdict, error, costUsd };
}

/** Judges every pair in both orders. */
export function judgePairs(
  scores: ScoresFile,
  key: PairwiseKey,
  model: string,
  maxBudgetUsd: number,
  runClaude: RunClaude,
  log: (line: string) => void = () => {},
): JudgeFile {
  const args = judgeArgs(model, maxBudgetUsd);
  const pairs: JudgeFile["pairs"] = [];
  for (const entry of key.pairs) {
    const builds = pairBuilds(scores, entry);
    const asShown = callJudge(runClaude, args, judgePrompt(builds.request, builds.A, builds.B), "A/B");
    const swapped = callJudge(runClaude, args, judgePrompt(builds.request, builds.B, builds.A), "B/A");
    const winner = reconcile(entry, asShown.verdict, swapped.verdict);
    log(`pair ${entry.pair} (${entry.scenario}, ${entry.model}, run ${entry.run}): ${winner}`);
    pairs.push({
      pair: entry.pair,
      scenario: entry.scenario,
      model: entry.model,
      run: entry.run,
      winner,
      reasons: [asShown, swapped].map((call) => call.verdict ? `${call.verdict.winner}: ${call.verdict.reason}` : call.error ?? ""),
      calls: [asShown, swapped],
    });
  }
  const totals: Record<PairWinner, number> = { skill: 0, baseline: 0, tie: 0 };
  for (const pair of pairs) totals[pair.winner]++;
  const costUsd = pairs.flatMap((pair) => pair.calls).reduce((sum, call) => sum + (call.costUsd ?? 0), 0);
  return { model, maxBudgetUsd, pairs, totals, costUsd: Math.round(costUsd * 10_000) / 10_000 };
}

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

export function main(argv: readonly string[], runClaude?: RunClaude): number {
  let values: { out?: string; model?: string; "max-budget-usd"?: string };
  try {
    ({ values } = parseArgs({
      args: [...argv],
      options: { out: { type: "string" }, model: { type: "string" }, "max-budget-usd": { type: "string" } },
      strict: true,
    }));
  } catch (error) {
    console.error(`${error instanceof Error ? error.message : String(error)}\nUsage: npm run agent:eval:judge -- [--out <dir>] [--model <m>] [--max-budget-usd <n>]`);
    return 1;
  }
  const outDir = values.out === undefined ? DEFAULT_RESULTS_DIR : resolveCliPath(values.out);
  const maxBudgetUsd = values["max-budget-usd"] === undefined ? DEFAULT_MAX_BUDGET_USD : Number(values["max-budget-usd"]);
  if (!Number.isFinite(maxBudgetUsd) || maxBudgetUsd <= 0) {
    console.error("--max-budget-usd must be a positive number.");
    return 1;
  }
  const scoresPath = join(outDir, OUTPUT_FILES.scores);
  const keyPath = join(outDir, OUTPUT_FILES.key);
  if (!existsSync(scoresPath) || !existsSync(keyPath)) {
    console.error(`${scoresPath} or ${keyPath} not found. Run \`npm run agent:eval:score\` first.`);
    return 1;
  }

  const scores = readJson<ScoresFile>(scoresPath);
  const key = readJson<PairwiseKey>(keyPath);
  const run: RunClaude =
    runClaude ??
    ((args, input) => {
      // A neutral cwd, so no project instructions reach the judge.
      const result = spawnSync("claude", args, { input, cwd: tmpdir(), encoding: "utf8", timeout: 300_000, maxBuffer: 16 * 1024 * 1024 });
      if (result.error) return { status: null, stdout: "", stderr: result.error.message };
      return { status: result.status, stdout: result.stdout, stderr: result.stderr };
    });
  const judged = judgePairs(scores, key, values.model ?? DEFAULT_JUDGE_MODEL, maxBudgetUsd, run, (line) => console.log(line));
  writeFileSync(join(outDir, JUDGE_FILE), toJson(judged));
  writeFileSync(join(outDir, OUTPUT_FILES.report), renderReport(scores, judged));
  console.log(
    `Judged ${judged.pairs.length} pair(s): skill ${judged.totals.skill}, baseline ${judged.totals.baseline}, tie ${judged.totals.tie}; $${judged.costUsd}. Wrote ${JUDGE_FILE} and ${OUTPUT_FILES.report}.`,
  );
  return 0;
}

if (isMainModule(import.meta.url)) {
  process.exitCode = main(process.argv.slice(2));
}
