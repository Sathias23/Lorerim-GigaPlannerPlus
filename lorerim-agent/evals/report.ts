// Aggregates session scores and renders report.md and the blind pairwise sheet.
import { VARIANTS, type Scenario, type Variant } from "./common.ts";
import type { BuildView, SessionScore } from "./score.ts";

export interface UnmatchedSession {
  variant: Variant;
  sessionId: string;
  startedAt: string | null;
  firstPrompt: string | null;
}

export interface AggregateRow {
  scenario: string;
  variant: Variant;
  model: string;
  /** Scored runs, contaminated ones excluded. */
  runs: number;
  /** Contaminated runs left out of this row. */
  excluded: number;
  legal: number;
  allChecksPass: number;
  levelHit: number;
  noBuild: number;
  codeShown: number;
  /** Means over runs that produced a build; null when none did. */
  meanViolations: number | null;
  meanPerkPointsRemaining: number | null;
  /** Pooled over the row: all flagged ids / all distinct ids. */
  hallucinatedRate: number;
  ungroundedRate: number;
  meanTurns: number;
  meanToolCalls: number;
  meanFailedToolCalls: number;
  meanTokens: number;
}

export interface ScoresFile {
  root: string;
  folders: Record<Variant, string>;
  scenarios: Scenario[];
  sessions: SessionScore[];
  unmatched: UnmatchedSession[];
  aggregates: AggregateRow[];
}

export interface PairSide {
  variant: Variant;
  sessionId: string;
}

export interface PairKeyEntry {
  pair: number;
  scenario: string;
  model: string;
  /** The n-th clean (non-contaminated) run of each side, so a redone contaminated run still pairs. */
  run: number;
  A: PairSide;
  B: PairSide;
}

export interface PairwiseKey {
  seed: string;
  pairs: PairKeyEntry[];
  /** Runs with no counterpart from the other folder (same scenario, model, and run number). */
  unpaired: Array<{ scenario: string; model: string; run: number } & PairSide>;
}

export type PairWinner = Variant | "tie";

/** What `report.md` needs from the judge's `judge.json`. */
export interface JudgeSummary {
  model: string;
  pairs: Array<{ pair: number; scenario: string; model: string; run: number; winner: PairWinner; reasons: string[] }>;
}

export const DEFAULT_SEED = "lorerim-evals";

/** What `eval:score` writes to the results folder (`eval:judge` rewrites the report). */
export const OUTPUT_FILES = {
  scores: "scores.json",
  report: "report.md",
  pairwise: "pairwise.md",
  key: "pairwise-key.json",
} as const;
const NO_MODEL = "(unknown)";

export function modelOf(score: SessionScore): string {
  return score.model ?? NO_MODEL;
}

/**
 * Numbers repeats (1, 2, …) within variant × scenario × model by start time and
 * returns the sessions in report order: scenario file order, skill before
 * baseline, model, run.
 */
export function orderSessions(sessions: readonly SessionScore[], scenarios: readonly Scenario[]): SessionScore[] {
  const scenarioIndex = new Map(scenarios.map((scenario, index) => [scenario.id, index]));
  const byStart = [...sessions].sort(
    (a, b) => (a.startedAt ?? "").localeCompare(b.startedAt ?? "") || a.sessionId.localeCompare(b.sessionId),
  );
  const counters = new Map<string, number>();
  const numbered = byStart.map((score) => {
    const group = `${score.variant}|${score.scenario}|${modelOf(score)}`;
    const run = (counters.get(group) ?? 0) + 1;
    counters.set(group, run);
    return { ...score, run };
  });
  return numbered.sort(
    (a, b) =>
      (scenarioIndex.get(a.scenario) ?? Number.MAX_SAFE_INTEGER) - (scenarioIndex.get(b.scenario) ?? Number.MAX_SAFE_INTEGER) ||
      VARIANTS.indexOf(a.variant) - VARIANTS.indexOf(b.variant) ||
      modelOf(a).localeCompare(modelOf(b)) ||
      a.run - b.run,
  );
}

function mean(values: readonly number[]): number | null {
  if (values.length === 0) return null;
  return Math.round((values.reduce((sum, value) => sum + value, 0) / values.length) * 100) / 100;
}

function ratio(part: number, whole: number): number {
  return whole === 0 ? 0 : Math.round((part / whole) * 10_000) / 10_000;
}

/** One row per scenario × variant × model, from ordered sessions. Contaminated runs are counted, not scored. */
export function aggregate(ordered: readonly SessionScore[]): AggregateRow[] {
  const groups = new Map<string, SessionScore[]>();
  for (const score of ordered) {
    const key = `${score.scenario}|${score.variant}|${modelOf(score)}`;
    const list = groups.get(key) ?? [];
    list.push(score);
    groups.set(key, list);
  }
  return [...groups.values()].map((group) => {
    const first = group[0]!;
    const runs = group.filter((score) => !score.contaminated);
    const built = runs.filter((score) => score.violations !== null);
    const ids = runs.reduce((sum, score) => sum + score.ids.total, 0);
    const count = (predicate: (score: SessionScore) => boolean) => runs.filter(predicate).length;
    return {
      scenario: first.scenario,
      variant: first.variant,
      model: modelOf(first),
      runs: runs.length,
      excluded: group.length - runs.length,
      legal: count((score) => score.legal),
      allChecksPass: count((score) => score.allChecksPass),
      levelHit: count((score) => score.checks.some((check) => check.id === "level" && check.pass)),
      noBuild: count((score) => score.noBuild),
      codeShown: count((score) => score.codeShown),
      meanViolations: mean(built.map((score) => score.violations!)),
      meanPerkPointsRemaining: mean(built.map((score) => score.perkPointsRemaining!)),
      hallucinatedRate: ratio(runs.reduce((sum, score) => sum + score.ids.hallucinated.length, 0), ids),
      ungroundedRate: ratio(runs.reduce((sum, score) => sum + score.ids.ungrounded.length, 0), ids),
      meanTurns: mean(runs.map((score) => score.turns)) ?? 0,
      meanToolCalls: mean(runs.map((score) => score.toolCalls)) ?? 0,
      meanFailedToolCalls: mean(runs.map((score) => score.failedToolCalls)) ?? 0,
      meanTokens: mean(runs.map((score) => score.tokens.total)) ?? 0,
    };
  });
}

/** 32-bit FNV-1a. */
function hash(text: string): number {
  let value = 0x811c9dc5;
  for (let index = 0; index < text.length; index++) {
    value ^= text.charCodeAt(index);
    value = Math.imul(value, 0x01000193) >>> 0;
  }
  return value;
}

/** One mulberry32 draw in [0, 1), seeded by the seed and the pair's identity. */
export function seededDraw(seed: string, pairId: string): number {
  let state = hash(`${seed}|${pairId}`);
  state = (state + 0x6d2b79f5) >>> 0;
  let mixed = Math.imul(state ^ (state >>> 15), 1 | state);
  mixed = (mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed)) ^ mixed;
  return ((mixed ^ (mixed >>> 14)) >>> 0) / 4_294_967_296;
}

/**
 * Pairs the n-th clean skill run with the n-th clean baseline run of the same
 * scenario and model (contaminated runs are skipped, not counted). Each pair's A/B order is a seeded draw on its own identity, so adding
 * runs never reshuffles existing pairs.
 */
export function buildPairs(ordered: readonly SessionScore[], seed: string = DEFAULT_SEED): PairwiseKey {
  const eligible = ordered.filter((score) => !score.contaminated);
  // Rank among clean runs of variant × scenario × model; `ordered` is already in run order.
  const rankOf = new Map<SessionScore, number>();
  const counters = new Map<string, number>();
  for (const score of eligible) {
    const group = `${score.variant}|${score.scenario}|${modelOf(score)}`;
    const rank = (counters.get(group) ?? 0) + 1;
    counters.set(group, rank);
    rankOf.set(score, rank);
  }
  const find = (variant: Variant, scenario: string, model: string, rank: number) =>
    eligible.find(
      (score) => score.variant === variant && score.scenario === scenario && modelOf(score) === model && rankOf.get(score) === rank,
    );

  const pairs: PairKeyEntry[] = [];
  const unpaired: PairwiseKey["unpaired"] = [];
  for (const score of eligible) {
    const other: Variant = score.variant === "skill" ? "baseline" : "skill";
    const rank = rankOf.get(score)!;
    const partner = find(other, score.scenario, modelOf(score), rank);
    if (!partner) {
      unpaired.push({ scenario: score.scenario, model: modelOf(score), run: score.run, variant: score.variant, sessionId: score.sessionId });
      continue;
    }
    if (score.variant !== "skill") continue;
    const skill: PairSide = { variant: "skill", sessionId: score.sessionId };
    const baseline: PairSide = { variant: "baseline", sessionId: partner.sessionId };
    const skillFirst = seededDraw(seed, `${score.scenario}|${modelOf(score)}|${rank}`) < 0.5;
    pairs.push({
      pair: pairs.length + 1,
      scenario: score.scenario,
      model: modelOf(score),
      run: rank,
      A: skillFirst ? skill : baseline,
      B: skillFirst ? baseline : skill,
    });
  }
  return { seed, pairs, unpaired };
}

export function buildScoresFile(
  root: string,
  folders: Record<Variant, string>,
  scenarios: Scenario[],
  sessions: readonly SessionScore[],
  unmatched: UnmatchedSession[],
): ScoresFile {
  const ordered = orderSessions(sessions, scenarios);
  return { root, folders, scenarios, sessions: ordered, unmatched, aggregates: aggregate(ordered) };
}

function orNone(value: string | null, fallback = "none"): string {
  return value ?? fallback;
}

function list(values: readonly string[]): string {
  return values.length === 0 ? "none" : values.join(", ");
}

/** A build as plain Markdown lines, identical for both folders (names only, no ids or wording from the session). */
export function renderBuild(view: BuildView | null): string {
  if (!view) return "No build: the session ended without a share code.";
  const perkCount = view.perksBySkill.reduce((sum, group) => sum + group.perks.length, 0);
  const lines = [
    `- Player level: ${view.playerLevel}`,
    `- Race: ${orNone(view.race)}; birthsign: ${orNone(view.birthsign)}; deity: ${orNone(view.deity)}`,
    `- Traits: ${list(view.traits)}`,
    `- Major skills: ${list(view.majorSkills)}`,
    `- Minor skills: ${list(view.minorSkills)}`,
    `- Options: ${list(view.options)}`,
    `- Perks (${perkCount}):`,
    ...(view.perksBySkill.length === 0
      ? ["  - none"]
      : view.perksBySkill.map((group) => `  - ${group.skill}: ${group.perks.join(", ")}`)),
    `- Unspent perk points: ${view.perkPointsRemaining}`,
    `- Legal: ${view.legal ? "yes" : `no (${view.violations.length} violation(s))`}`,
    ...view.violations.map((message) => `  - ${message}`),
  ];
  return lines.join("\n");
}

function scenarioById(scores: ScoresFile, id: string): Scenario | undefined {
  return scores.scenarios.find((scenario) => scenario.id === id);
}

function sessionById(scores: ScoresFile, sessionId: string): SessionScore | undefined {
  return scores.sessions.find((score) => score.sessionId === sessionId);
}

/** The two builds of one pair, rendered, in A/B order. */
export function pairBuilds(scores: ScoresFile, entry: PairKeyEntry): { request: string; A: string; B: string } {
  return {
    request: scenarioById(scores, entry.scenario)?.prompt ?? entry.scenario,
    A: renderBuild(sessionById(scores, entry.A.sessionId)?.build ?? null),
    B: renderBuild(sessionById(scores, entry.B.sessionId)?.build ?? null),
  };
}

export function renderPairwise(scores: ScoresFile, key: PairwiseKey): string {
  const out = [
    "# Blind pairwise sheet",
    "",
    "Each pair shows two builds made for the same request by the same model, one from each eval folder, in a seeded random order.",
    "For each pair, decide which build better fits the request (or call it a tie) before opening `pairwise-key.json`.",
    "",
  ];
  if (key.pairs.length === 0) out.push("No pairs yet: a pair needs a scored run of the same scenario and model in both folders.", "");
  for (const entry of key.pairs) {
    const builds = pairBuilds(scores, entry);
    out.push(
      `## Pair ${entry.pair}: ${entry.scenario} (${entry.model}, run ${entry.run})`,
      "",
      `Request: "${builds.request}"`,
      "",
      "### Build A",
      "",
      builds.A,
      "",
      "### Build B",
      "",
      builds.B,
      "",
      "**Verdict:** A / B / tie. Reason:",
      "",
    );
  }
  return out.join("\n");
}

function fmt(value: number | null): string {
  return value === null ? "–" : String(value);
}

function pct(value: number): string {
  return `${Math.round(value * 1000) / 10}%`;
}

function cell(text: string): string {
  return text.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function fitFor(judge: JudgeSummary | undefined, row: AggregateRow): string {
  if (!judge) return "–";
  const pairs = judge.pairs.filter((pair) => pair.scenario === row.scenario && pair.model === row.model);
  if (pairs.length === 0) return "–";
  const wins = pairs.filter((pair) => pair.winner === row.variant).length;
  const ties = pairs.filter((pair) => pair.winner === "tie").length;
  return `${wins}-${pairs.length - wins - ties}-${ties}`;
}

export function renderReport(scores: ScoresFile, judge?: JudgeSummary): string {
  const scored = scores.sessions;
  const contaminated = scored.filter((score) => score.contaminated);
  const out = [
    "# LoreRim eval report",
    "",
    `Eval root: \`${scores.root}\``,
    "",
    `Scored sessions: ${scored.length} (skill ${scored.filter((s) => s.variant === "skill").length}, baseline ${scored.filter((s) => s.variant === "baseline").length}); contaminated: ${contaminated.length}; unmatched: ${scores.unmatched.length}.`,
    "",
    "## Aggregates",
    "",
    "Per scenario × variant × model; contaminated runs are excluded (the Excl. column counts them). Counts are out of Runs.",
    judge ? `Fit is the judge's (${judge.model}) position-swapped verdict for this variant: wins-losses-ties.` : "Fit is empty until `npm run agent:eval:judge` runs.",
    "",
    "| Scenario | Variant | Model | Runs | Excl. | Legal | All checks | Level hit | No build | Code shown | Violations (mean) | Perk pts left (mean) | Hallucinated | Ungrounded | Turns | Tool calls | Failed calls | Tokens | Fit |",
    "|---|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|",
    ...scores.aggregates.map(
      (row) =>
        `| ${row.scenario} | ${row.variant} | ${cell(row.model)} | ${row.runs} | ${row.excluded} | ${row.legal} | ${row.allChecksPass} | ${row.levelHit} | ${row.noBuild} | ${row.codeShown} | ${fmt(row.meanViolations)} | ${fmt(row.meanPerkPointsRemaining)} | ${pct(row.hallucinatedRate)} | ${pct(row.ungroundedRate)} | ${row.meanTurns} | ${row.meanToolCalls} | ${row.meanFailedToolCalls} | ${row.meanTokens} | ${fitFor(judge, row)} |`,
    ),
    "",
    "## Sessions",
    "",
    "| Scenario | Variant | Model | Run | Session | Legal | Violations | Perk pts left | Level | Checks | Ids | Hallucinated | Ungrounded | Code shown | Turns | Tool calls | Failed | Tokens | Flags |",
    "|---|---|---|---:|---|---|---:|---:|---|---|---:|---:|---:|---|---:|---:|---:|---:|---|",
    ...scored.map((score) => {
      const flags = [
        score.noBuild ? "noBuild" : "",
        score.contaminated ? "contaminated" : "",
        score.evaluationError ? "evaluationError" : "",
      ].filter(Boolean);
      return `| ${score.scenario} | ${score.variant} | ${cell(modelOf(score))} | ${score.run} | \`${score.sessionId}\` | ${score.legal ? "yes" : "no"} | ${fmt(score.violations)} | ${fmt(score.perkPointsRemaining)} | ${fmt(score.playerLevel)}/${score.levelTarget} | ${score.checks.filter((check) => check.pass).length}/${score.checks.length} | ${score.ids.total} | ${score.ids.hallucinated.length} (${pct(score.ids.hallucinatedRate)}) | ${score.ids.ungrounded.length} (${pct(score.ids.ungroundedRate)}) | ${score.codeShown ? "yes" : "no"} | ${score.turns} | ${score.toolCalls} | ${score.failedToolCalls} | ${score.tokens.total} | ${flags.join(", ")} |`;
    }),
    "",
  ];

  const details = scored.filter(
    (score) =>
      score.checks.some((check) => !check.pass) ||
      score.ids.hallucinated.length > 0 ||
      score.ids.ungrounded.length > 0 ||
      score.contaminated ||
      score.evaluationError,
  );
  if (details.length > 0) {
    out.push("## Details", "");
    for (const score of details) {
      out.push(`### ${score.scenario} / ${score.variant} / ${modelOf(score)} / run ${score.run} (\`${score.sessionId}\`)`, "");
      for (const check of score.checks.filter((entry) => !entry.pass)) out.push(`- Failed check ${check.id}: ${check.detail}`);
      if (score.ids.hallucinated.length > 0) out.push(`- Hallucinated ids: ${score.ids.hallucinated.join(", ")}`);
      if (score.ids.ungrounded.length > 0) out.push(`- Ungrounded ids: ${score.ids.ungrounded.join(", ")}`);
      if (score.contaminated) out.push(`- Contaminated: ${score.contamination.join("; ")}`);
      if (score.evaluationError) out.push(`- Final code did not evaluate: ${score.evaluationError}`);
      out.push("");
    }
  }

  if (judge && judge.pairs.length > 0) {
    out.push("## Judge verdicts", "", "| Pair | Scenario | Model | Run | Winner | Reasons (A/B order, then B/A) |", "|---:|---|---|---:|---|---|");
    for (const pair of judge.pairs) {
      out.push(`| ${pair.pair} | ${pair.scenario} | ${cell(pair.model)} | ${pair.run} | ${pair.winner} | ${cell(pair.reasons.join(" / "))} |`);
    }
    out.push("");
  }

  if (scores.unmatched.length > 0) {
    out.push("## Unmatched sessions (not scored)", "");
    for (const session of scores.unmatched) {
      out.push(`- ${session.variant} \`${session.sessionId}\`: ${session.firstPrompt === null ? "(no answered message)" : `"${cell(session.firstPrompt.slice(0, 200))}"`}`);
    }
    out.push("");
  }

  out.push(
    "## Legend",
    "",
    "- **Legal**: `lorerim_evaluate_build` on the session's final code (the last successful `lorerim_apply_changes` or `lorerim_evaluate_build` result) reports `legal: true`. A session with no such result is `noBuild` and not legal.",
    "- **Checks**: player level equals the scenario's target; no perk from a forbidden skill; exactly the requested supernatural path (or none).",
    "- **Hallucinated**: a distinct id passed to a lorerim tool that the server does not know. **Ungrounded**: a valid id that no earlier tool result in the session mentioned. Aggregate rates pool all ids of the row.",
    "- **Code shown**: the final answer contains the final code, as is or inside a planner link.",
    "- **Turns**: model responses; **Tokens**: input + cache writes + cache reads + output, summed over responses.",
    "- **Contaminated**: a baseline session that called the Skill tool or a plugin tool; scored, but left out of aggregates and pairs.",
    "",
  );
  return out.join("\n");
}
