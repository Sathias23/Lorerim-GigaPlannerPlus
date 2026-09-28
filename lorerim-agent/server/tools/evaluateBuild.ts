import type { McpServer } from "@modelcontextprotocol/server";
import * as z from "zod";
import type { AppData, GameData, Perk } from "@/data/schemas";
import {
  decodeBuildPackage,
  decodeUnreconciledBuild,
  type DecodedBuildPackage,
} from "@/engine/buildCodec";
import {
  arePrerequisitesMet,
  computeBuild,
  computeDestinyPerkPointsSpent,
  getEarnedAttributeChoices,
  getEarnedDestinyPerkPoints,
  getEarnedPerkPoints,
  getEarnedSkillPoints,
  getEarnedTrainingLevels,
  getMaxAllowedSkillLevel,
  getRemainingAttributePoints,
  getUsedAttributeChoices,
  migrateBuildState,
  reconcileBuild,
  type BuildState,
  type ComputedBuild,
} from "@/engine/buildEngine";
import { normalizeCharacterOptionChoices } from "@/lib/characterOptions";
import {
  ENTITY_KINDS,
  findRef,
  formatEntityRef,
  getEntityName,
  perkRef,
  rankCloseMatches,
  resolveEntity,
  resolveOptionLabel,
  skillRef,
  type EntityKind,
  type EntityRef,
  type OptionLabels,
} from "../ids";
import { READ_ONLY_TOOL_ANNOTATIONS, errorResult, jsonResult } from "../toolResult";
import { getOptionLabels } from "./getEntity";

export const EVALUATE_BUILD_TOOL = "lorerim_evaluate_build";

/** Real share codes are a few hundred to a few thousand characters. */
export const MAX_CODE_LENGTH = 20_000;

export const evaluateBuildInputSchema = z.object({
  code: z
    .string()
    .min(1)
    .max(MAX_CODE_LENGTH)
    .describe(
      'A planner share code: the value of the planner link\'s build= parameter, starting with "3." (or "2." for older links). Not the whole URL.',
    ),
}).strict();

export type EvaluateBuildInput = z.output<typeof evaluateBuildInputSchema>;

/** Fixed category order of the violation list; rows keep engine order within a category. */
export const VIOLATION_TYPES = [
  "perk_points",
  "destiny_perk_points",
  "skill_points",
  "training_levels",
  "skill_requirement",
  "skill_level_cap",
  "skill_increase_limit",
  "player_level_requirement",
  "attribute_choices",
  "prerequisite",
] as const;

export type ViolationType = (typeof VIOLATION_TYPES)[number];

/** Fixed kind order of the unknown-id list; "choice" is an option's choice id. */
export const UNKNOWN_ID_KINDS = [
  "race",
  "birthsign",
  "deity",
  "trait",
  "skill",
  "option",
  "choice",
  "perk",
] as const;

export type UnknownIdKind = (typeof UNKNOWN_ID_KINDS)[number];

const refSchema = z.object({ id: z.string(), name: z.string() });

const budgetSchema = z.object({
  used: z.number(),
  available: z.number(),
  remaining: z.number(),
});

const violationSchema = z.object({
  type: z.enum(VIOLATION_TYPES),
  entity: z.object({ kind: z.enum(ENTITY_KINDS), id: z.string(), name: z.string() }).nullable(),
  skill: refSchema.optional(),
  required: z.number(),
  actual: z.number(),
  shortfall: z.number(),
  missing: z.array(refSchema).optional(),
  message: z.string(),
});

export type Violation = z.infer<typeof violationSchema>;

const unknownIdSchema = z.object({
  kind: z.enum(UNKNOWN_ID_KINDS),
  id: z.string(),
  /** For a "choice": the option it was set on. */
  option: refSchema.optional(),
  suggestions: z.array(refSchema),
});

export type UnknownId = z.infer<typeof unknownIdSchema>;

const buildBlockSchema = z.object({
  playerLevel: z.number(),
  race: refSchema.nullable(),
  birthsign: refSchema.nullable(),
  deity: refSchema.nullable(),
  traits: z.array(refSchema),
  majorSkills: z.array(refSchema),
  minorSkills: z.array(refSchema),
  oghmaSkills: z.array(refSchema),
  options: z.array(
    z.object({
      option: refSchema,
      choice: z.object({ id: z.string(), label: z.string() }),
    }),
  ),
  perks: z.array(refSchema),
});

export type EvaluatedBuildBlock = z.infer<typeof buildBlockSchema>;

export const evaluateBuildOutputSchema = z.object({
  code: z.string(),
  dataVersion: z.string(),
  codeDataVersion: z.string().nullable(),
  playerLevel: z.number(),
  minimumPlayerLevel: z.number(),
  legal: z.boolean(),
  build: buildBlockSchema,
  budgets: z.object({
    perkPoints: budgetSchema,
    destinyPerkPoints: budgetSchema,
    skillPoints: budgetSchema,
    trainingLevels: budgetSchema,
    attributeChoices: budgetSchema,
    skillLevels: z.object({
      maxAllowed: z.number(),
      levels: z.record(z.string(), z.number()),
    }),
  }),
  violations: z.array(violationSchema),
  unknownIds: z.array(unknownIdSchema),
  notes: z.array(z.string()),
});

export type EvaluateBuildOutput = z.infer<typeof evaluateBuildOutputSchema>;

type Budget = z.infer<typeof budgetSchema>;

export const DECODE_ERROR_MESSAGE =
  'Could not decode this as a planner share code. Share codes start with "3." (or "2." for older links). ' +
  "If you have a planner link, pass only the value after build=, not the whole URL.";

function getOwnPerk(game: GameData, perkId: string): Perk | undefined {
  return Object.hasOwn(game.perkById, perkId) ? game.perkById[perkId] : undefined;
}

/** The planner opens the active variant of a shared package (`buildStore` mirrors this). */
export function getActiveBuild(decoded: DecodedBuildPackage): BuildState {
  const activeVariantIndex = decoded.shared?.activeVariantIndex ?? 0;
  if (activeVariantIndex === 0) return decoded.build;
  return decoded.shared?.milestones[activeVariantIndex - 1]?.build ?? decoded.build;
}

function describeBuild(game: GameData, build: BuildState, labels: OptionLabels): EvaluatedBuildBlock {
  const options: EvaluatedBuildBlock["options"] = [];
  for (const option of game.characterOptions) {
    const selectedId = build.characterOptionChoices[option.id] ?? option.defaultChoice;
    if (selectedId === option.defaultChoice) continue;
    const choice = option.choices.find((entry) => entry.id === selectedId);
    options.push({
      option: { id: option.id, name: getEntityName("option", option, labels) },
      choice: {
        id: selectedId,
        label: choice ? resolveOptionLabel(choice.label, labels) : selectedId,
      },
    });
  }

  return {
    playerLevel: build.playerLevel,
    race: findRef(game.races, build.raceId),
    birthsign: findRef(game.birthsigns, build.birthsignId),
    deity: findRef(game.deities, build.deityId),
    traits: build.traitIds.map((id) => findRef(game.traits, id)!),
    majorSkills: build.majorSkillIds.map((id) => skillRef(game, id)),
    minorSkills: build.minorSkillIds.map((id) => skillRef(game, id)),
    oghmaSkills: build.oghmaSkillIds.map((id) => skillRef(game, id)),
    options,
    perks: build.selectedPerkIds.map((id) => perkRef(game, id)),
  };
}

function describeBudgets(
  game: GameData,
  build: BuildState,
  computed: ComputedBuild,
): EvaluateBuildOutput["budgets"] {
  return {
    perkPoints: {
      used: computed.perkPointsSpent,
      available: getEarnedPerkPoints(game, build),
      remaining: computed.perkPointsRemaining,
    },
    destinyPerkPoints: {
      used: computeDestinyPerkPointsSpent(game, build),
      available: getEarnedDestinyPerkPoints(game, build),
      remaining: computed.destinyPerkPointsRemaining,
    },
    skillPoints: {
      used: computed.skillPointsSpent,
      available: getEarnedSkillPoints(game, build),
      remaining: computed.skillPointsRemaining,
    },
    trainingLevels: {
      used: computed.trainingLevelsUsed,
      available: getEarnedTrainingLevels(game, build),
      remaining: computed.trainingLevelsRemaining,
    },
    attributeChoices: {
      used: getUsedAttributeChoices(build),
      available: getEarnedAttributeChoices(game, build),
      remaining: getRemainingAttributePoints(game, build),
    },
    skillLevels: {
      maxAllowed: getMaxAllowedSkillLevel(game, build),
      levels: computed.skillLevels,
    },
  };
}

function budgetViolation(
  type: ViolationType,
  label: string,
  budget: Budget,
  playerLevel: number,
  hint: string,
): Violation {
  const shortfall = budget.used - budget.available;
  return {
    type,
    entity: null,
    required: budget.used,
    actual: budget.available,
    shortfall,
    message: `${label} over budget: ${budget.used} used, ${budget.available} available at player level ${playerLevel} (${shortfall} over). ${hint}`,
  };
}

function perkEntity(perk: EntityRef): Violation["entity"] {
  return { kind: "perk", id: perk.id, name: perk.name };
}

function skillEntity(skill: EntityRef): Violation["entity"] {
  return { kind: "skill", id: skill.id, name: skill.name };
}

function findPrerequisiteViolations(game: GameData, build: BuildState): Violation[] {
  const violations: Violation[] = [];
  const checked = new Set<string>();
  const isSelected = (id: string) => build.selectedPerkIds.includes(id);

  for (const perkId of build.selectedPerkIds) {
    if (checked.has(perkId)) continue;
    checked.add(perkId);
    const perk = getOwnPerk(game, perkId);
    if (!perk || arePrerequisitesMet(game, build, perk)) continue;

    const missingAll = perk.prerequisites.filter((id) => !isSelected(id)).map((id) => perkRef(game, id));
    const anyOf = perk.prerequisitesAny ?? [];
    const anyOfUnmet = anyOf.length > 0 && !anyOf.some(isSelected);
    const missingAny = anyOfUnmet ? anyOf.map((id) => perkRef(game, id)) : [];
    const required = perk.prerequisites.length + (anyOf.length > 0 ? 1 : 0);
    const shortfall = missingAll.length + (anyOfUnmet ? 1 : 0);

    const needs: string[] = [];
    if (missingAll.length > 0) needs.push(missingAll.map(formatEntityRef).join(", "));
    if (anyOfUnmet) needs.push(`one of ${missingAny.map(formatEntityRef).join(", ")}`);
    const skillId = game.perkSkillIdByPerkId[perk.id];

    violations.push({
      type: "prerequisite",
      entity: perkEntity({ id: perk.id, name: perk.name }),
      ...(skillId !== undefined && { skill: skillRef(game, skillId) }),
      required,
      actual: required - shortfall,
      shortfall,
      missing: [...missingAll, ...missingAny],
      message: `${perk.name} needs prerequisite perk ${needs.join(" and ")}. Take it or remove ${perk.name}.`,
    });
  }

  return violations;
}

/**
 * Every violation of `build` exactly as `lorerim_evaluate_build` reports it,
 * computed on the build as given (callers reconcile first when the planner would).
 */
export function findBuildViolations(game: GameData, build: BuildState): Violation[] {
  const computed = computeBuild(game, build);
  return findViolations(game, build, computed, describeBudgets(game, build, computed));
}

function findViolations(
  game: GameData,
  build: BuildState,
  computed: ComputedBuild,
  budgets: EvaluateBuildOutput["budgets"],
): Violation[] {
  const { playerLevel } = build;
  const warnings = computed.playerLevelWarnings;
  const raiseLevel = `Raise player level (the engine's minimum for this build is ${computed.minimumPlayerLevel}) or spend less.`;
  const violations: Violation[] = [];

  if (computed.perkPointsRemaining < 0) {
    violations.push(
      budgetViolation("perk_points", "Perk points", budgets.perkPoints, playerLevel, raiseLevel),
    );
  }
  if (computed.destinyPerkPointsRemaining < 0) {
    const overBudget = warnings.destinyPerksOverBudget.map(formatEntityRef).join(", ");
    violations.push(
      budgetViolation(
        "destiny_perk_points",
        "Destiny perk points",
        budgets.destinyPerkPoints,
        playerLevel,
        overBudget
          ? `Destiny perks over budget: ${overBudget}. Raise player level or remove Destiny perks.`
          : "Raise player level or remove Destiny perks.",
      ),
    );
  }
  if (computed.skillPointsRemaining < 0) {
    violations.push(
      budgetViolation("skill_points", "Skill points", budgets.skillPoints, playerLevel, raiseLevel),
    );
  }
  if (computed.trainingLevelsRemaining < 0) {
    const requiredLevel = warnings.training?.requiredLevel;
    violations.push(
      budgetViolation(
        "training_levels",
        "Training levels",
        budgets.trainingLevels,
        playerLevel,
        requiredLevel !== undefined
          ? `Training needs player level ${requiredLevel}; raise it or train less.`
          : "Raise player level or train less.",
      ),
    );
  }

  for (const conflict of computed.skillReqConflicts) {
    const skill = skillRef(game, conflict.skillId);
    const actual = computed.skillLevels[conflict.skillId] ?? 0;
    const shortfall = conflict.skillReq - actual;
    violations.push({
      type: "skill_requirement",
      entity: perkEntity({ id: conflict.id, name: conflict.name }),
      skill,
      required: conflict.skillReq,
      actual,
      shortfall,
      message: `${conflict.name} needs ${skill.name} ${conflict.skillReq}; it is ${actual} (${shortfall} short). Raise ${skill.name} or remove the perk.`,
    });
  }

  for (const cap of warnings.skills) {
    const skill = skillRef(game, cap.skillId);
    const shortfall = cap.skillLevel - cap.maxAllowed;
    violations.push({
      type: "skill_level_cap",
      entity: skillEntity(skill),
      required: cap.maxAllowed,
      actual: cap.skillLevel,
      shortfall,
      message: `${skill.name} is ${cap.skillLevel}, above the cap of ${cap.maxAllowed} at player level ${playerLevel} (${shortfall} over). Raise player level or lower the skill.`,
    });
  }

  for (const increase of warnings.skillIncreases) {
    const skill = skillRef(game, increase.skillId);
    const shortfall = increase.requiredLevel - playerLevel;
    violations.push({
      type: "skill_increase_limit",
      entity: skillEntity(skill),
      required: increase.requiredLevel,
      actual: playerLevel,
      shortfall,
      message: `${skill.name} ${increase.skillLevel} needs player level ${increase.requiredLevel} under the skill-increase limit; the build is level ${playerLevel}. Raise player level or lower the skill.`,
    });
  }

  for (const perk of warnings.perks) {
    const shortfall = perk.playerLevelReq - playerLevel;
    violations.push({
      type: "player_level_requirement",
      entity: perkEntity({ id: perk.id, name: perk.name }),
      skill: skillRef(game, perk.skillId),
      required: perk.playerLevelReq,
      actual: playerLevel,
      shortfall,
      message: `${perk.name} needs player level ${perk.playerLevelReq}; the build is level ${playerLevel}. Raise player level or remove the perk.`,
    });
  }

  if (warnings.attributeChoicesOverBy > 0) {
    violations.push(
      budgetViolation(
        "attribute_choices",
        "Attribute choices",
        budgets.attributeChoices,
        playerLevel,
        "Raise player level or remove health/magicka/stamina choices.",
      ),
    );
  }

  violations.push(...findPrerequisiteViolations(game, build));
  return violations;
}

/** Ids in the code as written that the current data does not know, with did-you-mean. */
function findUnknownIds(game: GameData, raw: BuildState, labels: OptionLabels): UnknownId[] {
  const rows: UnknownId[] = [];
  const seen = new Set<string>();

  const check = (kind: EntityKind, id: string | null | undefined) => {
    if (id === null || id === undefined || id === "") return;
    const key = `${kind}\u0000${id}`;
    if (seen.has(key)) return;
    seen.add(key);
    const resolved = resolveEntity(game, kind, id, labels);
    if (!resolved.ok) rows.push({ kind, id, suggestions: resolved.suggestions });
  };

  check("race", raw.raceId);
  check("birthsign", raw.birthsignId);
  check("deity", raw.deityId);
  for (const id of raw.traitIds ?? []) check("trait", id);
  for (const id of [
    ...(raw.majorSkillIds ?? []),
    ...(raw.minorSkillIds ?? []),
    ...(raw.oghmaSkillIds ?? []),
    ...Object.keys(raw.skillLevels ?? {}),
    ...Object.keys(raw.skillTrainingRanges ?? {}),
  ]) {
    check("skill", id);
  }

  const rawChoices = raw.characterOptionChoices ?? {};
  for (const optionId of Object.keys(rawChoices)) check("option", optionId);
  for (const option of game.characterOptions) {
    if (!Object.hasOwn(rawChoices, option.id)) continue;
    const choiceId = rawChoices[option.id]!;
    if (choiceId === option.defaultChoice) continue;
    // A choice is unknown when the engine's own normalization falls back to the default.
    const normalized = normalizeCharacterOptionChoices(game, { [option.id]: choiceId });
    if (normalized[option.id] !== option.defaultChoice) continue;
    rows.push({
      kind: "choice",
      id: choiceId,
      option: { id: option.id, name: getEntityName("option", option, labels) },
      suggestions: rankCloseMatches(
        choiceId,
        option.choices.map((choice) => ({
          id: choice.id,
          name: resolveOptionLabel(choice.label, labels),
        })),
      ),
    });
  }

  for (const id of raw.selectedPerkIds ?? []) check("perk", id);

  const kindOrder = (kind: UnknownIdKind) => UNKNOWN_ID_KINDS.indexOf(kind);
  // Stable sort: within a kind, rows keep the order the code lists them in.
  return rows.sort((a, b) => kindOrder(a.kind) - kindOrder(b.kind));
}

/** Known ids the code carries that the planner still drops when it opens the build. */
function findDroppedKnownIds(game: GameData, raw: BuildState, build: BuildState): string[] {
  const dropped: string[] = [];
  const collect = (
    kind: EntityKind,
    rawIds: readonly string[] | undefined,
    keptIds: readonly string[],
    toRef: (id: string) => EntityRef,
  ) => {
    for (const id of new Set(rawIds ?? [])) {
      if (keptIds.includes(id) || !resolveEntity(game, kind, id).ok) continue;
      dropped.push(`${kind} ${formatEntityRef(toRef(id))}`);
    }
  };

  collect("trait", raw.traitIds, build.traitIds, (id) => findRef(game.traits, id)!);
  collect("skill", raw.majorSkillIds, build.majorSkillIds, (id) => skillRef(game, id));
  collect("skill", raw.minorSkillIds, build.minorSkillIds, (id) => skillRef(game, id));
  collect("skill", raw.oghmaSkillIds, build.oghmaSkillIds, (id) => skillRef(game, id));
  collect("perk", raw.selectedPerkIds, build.selectedPerkIds, (id) => perkRef(game, id));
  return dropped;
}

function describeVariant(decoded: DecodedBuildPackage): string | null {
  const shared = decoded.shared;
  if (!shared || shared.milestones.length === 0) return null;
  const count = shared.milestones.length + 1;
  const index = shared.activeVariantIndex;
  const name =
    index === 0 ? shared.defaultVariantName : (shared.milestones[index - 1]?.name ?? shared.defaultVariantName);
  return `The code holds ${count} variants; evaluated the one the planner opens: ${JSON.stringify(name)} (variant ${index + 1} of ${count}).`;
}

/**
 * Decodes `code` exactly as the web planner does, evaluates the build it opens
 * with the engine, and reports budgets, every violation, and unknown ids.
 */
export function evaluateBuild(
  appData: AppData,
  code: string,
): { ok: true; output: EvaluateBuildOutput } | { ok: false; message: string } {
  const { game } = appData;
  const labels = getOptionLabels(appData);
  const trimmed = code.trim();

  let decoded: DecodedBuildPackage;
  let raw: BuildState;
  try {
    decoded = decodeBuildPackage(trimmed, game);
    raw = decodeUnreconciledBuild(trimmed, game);
  } catch {
    return { ok: false, message: DECODE_ERROR_MESSAGE };
  }

  let output: EvaluateBuildOutput;
  try {
    output = evaluateDecoded(appData, labels, trimmed, decoded, raw);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    return {
      ok: false,
      message: `The share code decoded, but the planner engine could not evaluate it (${reason}). The code is probably corrupt or hand-edited; rebuild it from a known-good code.`,
    };
  }
  return { ok: true, output };
}

function evaluateDecoded(
  appData: AppData,
  labels: OptionLabels,
  code: string,
  decoded: DecodedBuildPackage,
  raw: BuildState,
): EvaluateBuildOutput {
  const { game } = appData;
  // What the planner's store does with a decoded build before computing it.
  const build = reconcileBuild(game, migrateBuildState(getActiveBuild(decoded)));
  const computed = computeBuild(game, build);
  const budgets = describeBudgets(game, build, computed);
  const violations = findViolations(game, build, computed, budgets);
  const unknownIds = findUnknownIds(game, raw, labels);

  const dataVersion = game.manifest.version;
  const codeDataVersion = decoded.sourceModpackVersion ?? null;
  const notes: string[] = [];
  const variantNote = describeVariant(decoded);
  if (variantNote) notes.push(variantNote);
  if (codeDataVersion !== null && codeDataVersion !== dataVersion) {
    notes.push(
      `The code was made with data version ${codeDataVersion}; this server has ${dataVersion}. Ids and numbers may differ from when it was made.`,
    );
  }
  if (unknownIds.length > 0) {
    notes.push(
      "The planner drops unknown ids when it opens the code; budgets and violations describe the build without them. Replace each with a suggestion or a valid id.",
    );
  }
  const dropped = findDroppedKnownIds(game, raw, build);
  if (dropped.length > 0) {
    notes.push(`Opening this code, the planner also drops: ${dropped.join(", ")}.`);
  }

  return {
    code,
    dataVersion,
    codeDataVersion,
    playerLevel: build.playerLevel,
    minimumPlayerLevel: computed.minimumPlayerLevel,
    // A code the planner cannot open as written is not legal, whether the ids are unknown or dropped.
    legal: violations.length === 0 && unknownIds.length === 0 && dropped.length === 0,
    build: describeBuild(game, build, labels),
    budgets,
    violations,
    unknownIds,
    notes,
  };
}

export function registerEvaluateBuildTool(server: McpServer, appData: AppData): void {
  server.registerTool(
    EVALUATE_BUILD_TOOL,
    {
      title: "Evaluate a LoreRim build",
      description:
        "Check a LoreRim build, given as a planner share code, with the planner's own engine. " +
        "Returns what the build contains, perk-point, skill-point, training, and attribute budgets used vs available, skill levels against the level cap, " +
        "every violation (budget overruns, unmet skill or player-level requirements, missing prerequisite perks) with the entity, required vs actual, and shortfall, " +
        "and every id the current data does not know with did-you-mean suggestions. legal is true only when there are no violations, no unknown ids, and the planner opens the code without dropping anything (see notes). " +
        "Use it after every change to a build and trust its numbers over your own arithmetic.",
      inputSchema: evaluateBuildInputSchema,
      outputSchema: evaluateBuildOutputSchema,
      annotations: READ_ONLY_TOOL_ANNOTATIONS,
    },
    (input) => {
      const result = evaluateBuild(appData, input.code);
      return result.ok ? jsonResult(result.output) : errorResult(result.message);
    },
  );
}
