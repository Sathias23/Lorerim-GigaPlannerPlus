// Per-session scoring. Pure apart from the server lookups passed in: every
// legality, budget, id, and perk-skill fact comes from the lorerim server.
import type { EntityKind } from "../server/ids.ts";
import type { EvaluateBuildOutput } from "../server/tools/evaluateBuild.ts";
import {
  SUPERNATURAL_OPTIONS,
  TOOL_PREFIX_BY_VARIANT,
  VARIANTS,
  normalizePrompt,
  type Scenario,
  type Variant,
} from "./common.ts";
import type { ParsedSession, TokenUsage, TranscriptEvent } from "./transcript.ts";

/** The server's tool names (`server/tools/*.ts`). */
export const TOOLS = {
  searchPerks: "lorerim_search_perks",
  getEntity: "lorerim_get_entity",
  evaluateBuild: "lorerim_evaluate_build",
  applyChanges: "lorerim_apply_changes",
} as const;

/** Tools whose successful result carries the build's share code. */
const BUILD_TOOLS: ReadonlySet<string> = new Set([TOOLS.applyChanges, TOOLS.evaluateBuild]);

/** The id `set_race` / `set_birthsign` / `set_deity` take to clear the field (`server/ops.ts` `NONE_ID`). */
export const CLEAR_ID = "none";

/** The tool Claude Code loads a skill with. */
export const SKILL_TOOL = "Skill";

export type IdKind = EntityKind | "choice";

export interface IdUse {
  kind: IdKind;
  id: string;
  /** For a choice: the option it belongs to. */
  option?: string;
}

/**
 * The id-bearing fields of every op in `server/ops.ts` `opSchema`
 * (`set_option_choice` is handled on its own: its choice belongs to its option).
 * `score.test.ts` checks this table against the schema.
 */
export const OP_ID_FIELDS: Record<string, ReadonlyArray<readonly [field: string, kind: EntityKind]>> = {
  set_race: [["id", "race"]],
  set_birthsign: [["id", "birthsign"]],
  set_deity: [["id", "deity"]],
  add_trait: [["id", "trait"]],
  remove_trait: [["id", "trait"]],
  set_major_skills: [["skills", "skill"]],
  set_minor_skills: [["skills", "skill"]],
  set_oghma_skills: [["skills", "skill"]],
  set_attribute_bonus: [],
  set_option_choice: [["option", "option"]],
  set_player_level: [],
  set_skill_level: [["skill", "skill"]],
  take_perk: [["id", "perk"]],
  remove_perk: [["id", "perk"]],
};

export function idKey(use: IdUse): string {
  return use.kind === "choice" ? `choice:${use.option ?? ""}/${use.id}` : `${use.kind}:${use.id}`;
}

/** `lorerim_*` for a lorerim tool under either folder's prefix, else null. */
export function bareToolName(name: string): string | null {
  for (const variant of VARIANTS) {
    const prefix = TOOL_PREFIX_BY_VARIANT[variant];
    if (name.startsWith(prefix)) return name.slice(prefix.length);
  }
  return null;
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : null;
}

function strings(value: unknown): string[] {
  if (typeof value === "string") return value === "" ? [] : [value];
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string" && item !== "") : [];
}

/** Models sometimes send a JSON array as a string; take it as the array it spells. */
function opsOf(value: unknown): unknown[] {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed: unknown = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}

/** Every entity id one lorerim tool call passes, with its kind. */
export function idsInToolCall(tool: string, input: unknown): IdUse[] {
  const args = asRecord(input);
  if (!args) return [];
  if (tool === TOOLS.getEntity) {
    return typeof args.kind === "string" && typeof args.id === "string" && args.id !== ""
      ? [{ kind: args.kind as EntityKind, id: args.id }]
      : [];
  }
  if (tool === TOOLS.searchPerks) return strings(args.skill).map((id) => ({ kind: "skill", id }));
  if (tool !== TOOLS.applyChanges) return [];

  const uses: IdUse[] = [];
  for (const rawOp of opsOf(args.ops)) {
    const op = asRecord(rawOp);
    if (!op || typeof op.op !== "string") continue;
    const fields = Object.hasOwn(OP_ID_FIELDS, op.op) ? OP_ID_FIELDS[op.op]! : [];
    for (const [field, kind] of fields) {
      for (const id of strings(op[field])) {
        if (id === CLEAR_ID && (kind === "race" || kind === "birthsign" || kind === "deity")) continue;
        uses.push({ kind, id });
      }
    }
    if (op.op === "set_option_choice" && typeof op.option === "string") {
      for (const id of strings(op.choice)) uses.push({ kind: "choice", id, option: op.option });
    }
  }
  return uses;
}

/** True when `token` appears in `text` as a whole id (not inside a longer one). */
export function mentionsId(text: string, token: string): boolean {
  const escaped = token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?<![A-Za-z0-9_-])${escaped}(?![A-Za-z0-9_-])`).test(text);
}

type ToolResultEvent = Extract<TranscriptEvent, { type: "tool_result" }>;

function resultHaystack(result: ToolResultEvent): string {
  return result.structured ? `${result.text}\n${JSON.stringify(result.structured)}` : result.text;
}

function codeFromResult(result: ToolResultEvent): string | null {
  const fromStructured = result.structured?.code;
  if (typeof fromStructured === "string" && fromStructured !== "") return fromStructured;
  try {
    const parsed = asRecord(JSON.parse(result.text));
    if (typeof parsed?.code === "string" && parsed.code !== "") return parsed.code;
  } catch {
    // Not JSON (e.g. a spilled large output); fall through to a textual match.
  }
  const match = /"code"\s*:\s*"([^"]+)"/.exec(result.text);
  return match ? match[1]! : null;
}

export type EvaluationLookup = { ok: true; output: EvaluateBuildOutput } | { ok: false; message: string };
export type EntityLookup = { ok: true; entity: Record<string, unknown> } | { ok: false; message: string };

/** Server lookups the scorer needs, backed by `lorerim_evaluate_build` and `lorerim_get_entity`. */
export interface Lookups {
  evaluate: (code: string) => Promise<EvaluationLookup>;
  entity: (kind: EntityKind, id: string) => Promise<EntityLookup>;
}

export interface ToolCallOutcome {
  isError: boolean;
  text: string;
  structured: Record<string, unknown> | undefined;
}

function describeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

/** Builds cached lookups over any way of calling the server's tools. */
export function createLookups(callTool: (name: string, args: Record<string, unknown>) => Promise<ToolCallOutcome>): Lookups {
  const evaluations = new Map<string, Promise<EvaluationLookup>>();
  const entities = new Map<string, Promise<EntityLookup>>();
  return {
    evaluate: (code) => {
      let pending = evaluations.get(code);
      if (!pending) {
        pending = callTool(TOOLS.evaluateBuild, { code }).then(
          (result): EvaluationLookup =>
            result.isError || !result.structured
              ? { ok: false, message: result.text }
              : { ok: true, output: result.structured as unknown as EvaluateBuildOutput },
          (error: unknown): EvaluationLookup => ({ ok: false, message: describeError(error) }),
        );
        evaluations.set(code, pending);
      }
      return pending;
    },
    entity: (kind, id) => {
      const key = `${kind}:${id}`;
      let pending = entities.get(key);
      if (!pending) {
        pending = callTool(TOOLS.getEntity, { kind, id }).then(
          (result): EntityLookup => {
            const entity = asRecord(result.structured?.entity);
            return result.isError || !entity ? { ok: false, message: result.text } : { ok: true, entity };
          },
          // A protocol error (e.g. an unknown kind the input schema rejects) means the id does not resolve.
          (error: unknown): EntityLookup => ({ ok: false, message: describeError(error) }),
        );
        entities.set(key, pending);
      }
      return pending;
    },
  };
}

export interface Check {
  id: "level" | "forbiddenSkills" | "supernatural";
  pass: boolean;
  detail: string;
}

/** A build as the blind pairwise sheet shows it: names only. */
export interface BuildView {
  playerLevel: number;
  race: string | null;
  birthsign: string | null;
  deity: string | null;
  traits: string[];
  majorSkills: string[];
  minorSkills: string[];
  options: string[];
  perksBySkill: Array<{ skill: string; perks: string[] }>;
  perkPointsRemaining: number;
  legal: boolean;
  violations: string[];
}

export interface SessionScore {
  variant: Variant;
  scenario: string;
  sessionId: string;
  startedAt: string | null;
  /** 1-based repeat number within variant × scenario × model, by start time (set by the report). */
  run: number;
  model: string | null;
  models: string[];
  contaminated: boolean;
  contamination: string[];
  finalCode: string | null;
  noBuild: boolean;
  /** Error text when the final code no longer evaluates. */
  evaluationError: string | null;
  codeShown: boolean;
  legal: boolean;
  violations: number | null;
  perkPointsRemaining: number | null;
  playerLevel: number | null;
  levelTarget: number;
  checks: Check[];
  allChecksPass: boolean;
  ids: {
    total: number;
    hallucinated: string[];
    ungrounded: string[];
    hallucinatedRate: number;
    ungroundedRate: number;
  };
  turns: number;
  toolCalls: number;
  lorerimToolCalls: number;
  failedToolCalls: number;
  tokens: TokenUsage;
  build: BuildView | null;
}

/** The scenario whose prompt the session's first answered message contains, if any. */
export function matchScenario(session: ParsedSession, scenarios: readonly Scenario[]): Scenario | null {
  if (session.firstPrompt === null) return null;
  const message = normalizePrompt(session.firstPrompt);
  const matches = scenarios.filter((scenario) => message.includes(normalizePrompt(scenario.prompt)));
  matches.sort((a, b) => b.prompt.length - a.prompt.length);
  return matches[0] ?? null;
}

/** Why a baseline session no longer measures the server alone. */
export function findContamination(session: ParsedSession, variant: Variant): string[] {
  if (variant !== "baseline") return [];
  const reasons = new Set<string>();
  for (const event of session.events) {
    if (event.type !== "tool_use") continue;
    if (event.name === SKILL_TOOL) reasons.add(`called the ${SKILL_TOOL} tool`);
    if (event.name.startsWith("mcp__plugin_")) reasons.add(`called plugin tool ${event.name}`);
  }
  return [...reasons].sort();
}

function round(value: number): number {
  return Math.round(value * 10_000) / 10_000;
}

function rate(part: number, whole: number): number {
  return whole === 0 ? 0 : round(part / whole);
}

interface FirstUse {
  use: IdUse;
  grounded: boolean;
}

/** Distinct ids by first use, and whether any earlier tool result (from any tool) mentioned each. */
function collectIds(session: ParsedSession): Map<string, FirstUse> {
  const seen = new Map<string, FirstUse>();
  const earlierResults: string[] = [];
  for (const event of session.events) {
    if (event.type === "tool_result") {
      earlierResults.push(resultHaystack(event));
      continue;
    }
    if (event.type !== "tool_use") continue;
    const tool = bareToolName(event.name);
    if (!tool) continue;
    for (const use of idsInToolCall(tool, event.input)) {
      const key = idKey(use);
      if (seen.has(key)) continue;
      seen.set(key, { use, grounded: earlierResults.some((text) => mentionsId(text, use.id)) });
    }
  }
  return seen;
}

async function idExists(use: IdUse, lookups: Lookups): Promise<boolean> {
  if (use.kind !== "choice") return (await lookups.entity(use.kind, use.id)).ok;
  const option = await lookups.entity("option", use.option ?? "");
  if (!option.ok) return false;
  const choices = Array.isArray(option.entity.choices) ? option.entity.choices : [];
  return choices.some((choice) => asRecord(choice)?.id === use.id);
}

/** The last successful build-tool result's code, in transcript order. */
export function findFinalCode(session: ParsedSession): string | null {
  const toolById = new Map<string, string>();
  let code: string | null = null;
  for (const event of session.events) {
    if (event.type === "tool_use") {
      const tool = bareToolName(event.name);
      if (tool) toolById.set(event.id, tool);
    } else if (event.type === "tool_result" && !event.isError && BUILD_TOOLS.has(toolById.get(event.toolUseId) ?? "")) {
      code = codeFromResult(event) ?? code;
    }
  }
  return code;
}

/** Whether the final answer shows the code, as is or URL-encoded inside a planner link. */
export function answerShowsCode(answer: string, code: string): boolean {
  return answer.includes(code) || answer.includes(encodeURIComponent(code));
}

interface PerkSkill {
  id: string;
  name: string;
}

async function perkSkill(perkId: string, lookups: Lookups): Promise<PerkSkill> {
  const found = await lookups.entity("perk", perkId);
  const skill = found.ok ? asRecord(found.entity.skill) : null;
  return {
    id: typeof skill?.id === "string" ? skill.id : "",
    name: typeof skill?.name === "string" ? skill.name : "(unknown skill)",
  };
}

function scenarioChecks(scenario: Scenario, output: EvaluateBuildOutput, skills: Map<string, PerkSkill>): Check[] {
  const checks: Check[] = [
    {
      id: "level",
      pass: output.playerLevel === scenario.levelTarget,
      detail: `level ${output.playerLevel}, target ${scenario.levelTarget}`,
    },
  ];
  if (scenario.forbiddenSkills.length > 0) {
    const offending = output.build.perks.filter((perk) =>
      scenario.forbiddenSkills.includes(skills.get(perk.id)?.id ?? ""),
    );
    checks.push({
      id: "forbiddenSkills",
      pass: offending.length === 0,
      detail:
        offending.length === 0
          ? `no perks from ${scenario.forbiddenSkills.join(", ")}`
          : `forbidden perks: ${offending.map((perk) => `${perk.id} (${perk.name})`).join(", ")}`,
    });
  }
  const active = output.build.options
    .filter((entry) => (SUPERNATURAL_OPTIONS as readonly string[]).includes(entry.option.id))
    .map((entry) => entry.option.id);
  const expected = scenario.supernatural === "none" ? [] : [scenario.supernatural];
  checks.push({
    id: "supernatural",
    pass: active.length === expected.length && expected.every((path) => active.includes(path)),
    detail: `expected ${scenario.supernatural}, build has ${active.length === 0 ? "none" : active.join(", ")}`,
  });
  return checks;
}

function noBuildChecks(scenario: Scenario): Check[] {
  const ids: Check["id"][] = ["level"];
  if (scenario.forbiddenSkills.length > 0) ids.push("forbiddenSkills");
  ids.push("supernatural");
  return ids.map((id) => ({ id, pass: false, detail: "no build" }));
}

function describeView(output: EvaluateBuildOutput, skills: Map<string, PerkSkill>): BuildView {
  const { build } = output;
  const groups = new Map<string, string[]>();
  for (const perk of build.perks) {
    const skill = skills.get(perk.id)?.name ?? "(unknown skill)";
    const list = groups.get(skill) ?? [];
    list.push(perk.name);
    groups.set(skill, list);
  }
  return {
    playerLevel: output.playerLevel,
    race: build.race?.name ?? null,
    birthsign: build.birthsign?.name ?? null,
    deity: build.deity?.name ?? null,
    traits: build.traits.map((trait) => trait.name),
    majorSkills: build.majorSkills.map((skill) => skill.name),
    minorSkills: build.minorSkills.map((skill) => skill.name),
    options: build.options.map((entry) => `${entry.option.name}: ${entry.choice.label}`),
    perksBySkill: [...groups.entries()].map(([skill, perks]) => ({ skill, perks })),
    perkPointsRemaining: output.budgets.perkPoints.remaining,
    legal: output.legal,
    violations: output.violations.map((violation) => violation.message),
  };
}

/** Scores one session for one scenario and folder. */
export async function scoreSession(
  session: ParsedSession,
  scenario: Scenario,
  variant: Variant,
  lookups: Lookups,
): Promise<SessionScore> {
  const toolUses = session.events.filter((event) => event.type === "tool_use");
  const toolResults = session.events.filter((event): event is ToolResultEvent => event.type === "tool_result");
  const contamination = findContamination(session, variant);

  const ids = collectIds(session);
  const hallucinated: string[] = [];
  const ungrounded: string[] = [];
  for (const [key, { use, grounded }] of ids) {
    if (!(await idExists(use, lookups))) hallucinated.push(key);
    else if (!grounded) ungrounded.push(key);
  }
  hallucinated.sort();
  ungrounded.sort();

  const finalCode = findFinalCode(session);
  const evaluation = finalCode === null ? null : await lookups.evaluate(finalCode);
  const output = evaluation?.ok ? evaluation.output : null;

  const skills = new Map<string, PerkSkill>();
  if (output) {
    for (const perk of output.build.perks) skills.set(perk.id, await perkSkill(perk.id, lookups));
  }
  const checks = output ? scenarioChecks(scenario, output, skills) : noBuildChecks(scenario);

  return {
    variant,
    scenario: scenario.id,
    sessionId: session.sessionId,
    startedAt: session.startedAt,
    run: 0,
    model: session.model,
    models: session.models,
    contaminated: contamination.length > 0,
    contamination,
    finalCode,
    noBuild: finalCode === null,
    evaluationError: evaluation && !evaluation.ok ? evaluation.message : null,
    codeShown: finalCode !== null && answerShowsCode(session.finalAnswer, finalCode),
    legal: output?.legal ?? false,
    violations: output ? output.violations.length : null,
    perkPointsRemaining: output ? output.budgets.perkPoints.remaining : null,
    playerLevel: output ? output.playerLevel : null,
    levelTarget: scenario.levelTarget,
    checks,
    allChecksPass: checks.every((check) => check.pass),
    ids: {
      total: ids.size,
      hallucinated,
      ungrounded,
      hallucinatedRate: rate(hallucinated.length, ids.size),
      ungroundedRate: rate(ungrounded.length, ids.size),
    },
    turns: session.assistantMessages,
    toolCalls: toolUses.length,
    lorerimToolCalls: toolUses.filter((event) => bareToolName(event.name) !== null).length,
    failedToolCalls: toolResults.filter((event) => event.isError).length,
    tokens: session.usage,
    build: output ? describeView(output, skills) : null,
  };
}
