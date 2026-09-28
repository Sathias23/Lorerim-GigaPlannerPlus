import * as z from "zod";
import type { AppData, GameData } from "@/data/schemas";
import {
  applySkillLevelChange,
  canSelectMajorSkill,
  canSelectMinorSkill,
  canSelectOghmaSkill,
  canSelectTrait,
  clampPlayerLevel,
  ensurePlayerLevelForBuild,
  getEarnedAttributeChoices,
  getMaxSkillLevel,
  getPerkSkillId,
  getSkillFloor,
  getStoredSkillLevel,
  getTraitLimit,
  isAllocatableSkill,
  preserveSkillPointAllocations,
  reconcileBuild,
  removePerk,
  tryTakePerk,
  type Attributes,
  type BuildReconcileOptions,
  type BuildState,
} from "@/engine/buildEngine";
import {
  getOghmaSkillLimit,
  isOghmaInfiniumActive,
  OGHMA_INFINIUM_CLAIMED_CHOICE,
  OGHMA_INFINIUM_OPTION_ID,
} from "@/lib/oghmaInfinium";
import { groupPerksByPosition, resolvePerkTakeTarget } from "@/lib/perkTreeGrid";
import {
  applySupernaturalOptionChange,
  isLichActive,
  isSupernaturalOptionId,
  isTraitBlockedBySupernatural,
  isVampireActive,
  isWerewolfActive,
} from "@/lib/supernatural";
import {
  findRef,
  formatEntityRef,
  getEntityName,
  perkRef,
  rankCloseMatches,
  resolveEntity,
  resolveOptionLabel,
  skillRef,
  type EntityByKind,
  type EntityKind,
  type EntityRef,
  type OptionLabels,
} from "./ids";
import { getOptionLabels } from "./tools/getEntity";
import { findBuildViolations, type Violation } from "./tools/evaluateBuild";
import { MAX_TEXT_INPUT_LENGTH } from "./tools/searchPerks";

/** Most ops one batch may carry. */
export const MAX_OPS = 200;

/** Longest skill list one op may carry (the real limits are far lower and checked by the engine). */
export const MAX_SKILL_LIST = 50;

/** Clears race, birthsign, or deity. */
export const NONE_ID = "none";

const idString = z.string().min(1).max(MAX_TEXT_INPUT_LENGTH);

const skillList = (which: string) =>
  z
    .array(idString)
    .max(MAX_SKILL_LIST)
    .describe(`The complete new list of ${which} skill ids, replacing the current list. [] clears it.`);

const attributeCount = (stat: string) =>
  z
    .number()
    .int()
    .optional()
    .describe(`Attribute choices spent on ${stat}. Omit to keep the current value.`);

/** The v1 op set: one op per `BuildState` field, each mapped to the planner's own store action. */
export const opSchema = z.discriminatedUnion("op", [
  z.object({ op: z.literal("set_race"), id: idString.describe('Race id, or "none" to clear.') }).strict(),
  z
    .object({ op: z.literal("set_birthsign"), id: idString.describe('Birthsign id, or "none" to clear.') })
    .strict(),
  z.object({ op: z.literal("set_deity"), id: idString.describe('Deity id, or "none" to clear.') }).strict(),
  z.object({ op: z.literal("add_trait"), id: idString.describe("Trait id to add.") }).strict(),
  z.object({ op: z.literal("remove_trait"), id: idString.describe("Selected trait id to remove.") }).strict(),
  z.object({ op: z.literal("set_major_skills"), skills: skillList("major") }).strict(),
  z.object({ op: z.literal("set_minor_skills"), skills: skillList("minor") }).strict(),
  z
    .object({
      op: z.literal("set_oghma_skills"),
      skills: skillList('Oghma Infinium (needs option "oghma-infinium" set to "claimed" first)'),
    })
    .strict(),
  z
    .object({
      op: z.literal("set_attribute_bonus"),
      health: attributeCount("health"),
      magicka: attributeCount("magicka"),
      stamina: attributeCount("stamina"),
    })
    .strict(),
  z
    .object({
      op: z.literal("set_option_choice"),
      option: idString.describe("Character option id, e.g. a supernatural option."),
      choice: idString.describe("Choice id within that option."),
    })
    .strict(),
  z
    .object({ op: z.literal("set_player_level"), level: z.number().int().describe("Player level.") })
    .strict(),
  z
    .object({
      op: z.literal("set_skill_level"),
      skill: idString.describe("Skill id."),
      level: z.number().int().describe("Skill level to store."),
    })
    .strict(),
  z
    .object({
      op: z.literal("take_perk"),
      id: idString.describe("Perk id. Strict: its requirements must already be met."),
    })
    .strict(),
  z
    .object({
      op: z.literal("remove_perk"),
      id: idString.describe("Selected perk id. Perks that depend on it are removed too."),
    })
    .strict(),
]);

export type Op = z.infer<typeof opSchema>;
export type OpName = Op["op"];

export type OpResult =
  | {
      ok: true;
      state: BuildState;
      /**
       * What the op asked for: a diff field name (`race`, `majorSkills`,
       * `skillLevels.marksman`, …) when the whole field is its target, or
       * `requestedItem(field, id)` when only one list item is.
       */
      requestedFields: string[];
    }
  | { ok: false; message: string };

/** The requested-field key for one item of a list field. */
export function requestedItem(field: string, id: string): string {
  return `${field}:${id}`;
}

/** The store's `ensurePlayerLevelForBuild` options for race, option, and skill-list changes. */
const ENSURE_MINIMUM: BuildReconcileOptions = { ensureMinimumPlayerLevel: true };

const ATTRIBUTE_STATS = ["health", "magicka", "stamina"] as const satisfies readonly (keyof Attributes)[];

function fail(message: string): OpResult {
  return { ok: false, message };
}

function succeed(state: BuildState, requestedFields: string[]): OpResult {
  return { ok: true, state, requestedFields };
}

interface OpContext {
  game: GameData;
  labels: OptionLabels;
}

type Resolved<K extends EntityKind> = { ok: true; entity: EntityByKind[K] } | { ok: false; message: string };

function resolve<K extends EntityKind>(context: OpContext, kind: K, id: string): Resolved<K> {
  const resolved = resolveEntity(context.game, kind, id, context.labels);
  return resolved.ok ? resolved : { ok: false, message: resolved.message };
}

function listRefs(refs: readonly EntityRef[]): string {
  return refs.length === 0 ? "none" : refs.map(formatEntityRef).join(", ");
}

function setNamedId(
  context: OpContext,
  kind: "race" | "birthsign" | "deity",
  id: string,
): { ok: true } | { ok: false; message: string } {
  if (id === NONE_ID) return { ok: true };
  const resolved = resolve(context, kind, id);
  return resolved.ok ? { ok: true } : resolved;
}

/** The store's `setRace`: reconcile, set, keep skill-point spend, reconcile, raise the player level. */
function applySetRace(context: OpContext, state: BuildState, raceId: string): OpResult {
  const check = setNamedId(context, "race", raceId);
  if (!check.ok) return fail(check.message);
  const { game } = context;
  const reconciled = reconcileBuild(game, state);
  const preserved = preserveSkillPointAllocations(game, reconciled, { ...reconciled, raceId });
  return succeed(
    ensurePlayerLevelForBuild(game, reconcileBuild(game, preserved), ENSURE_MINIMUM),
    ["race"],
  );
}

/** The store's `commitPreservedBuildMutation`: keep skill-point spend, then raise the player level. */
function commitPreserved(game: GameData, state: BuildState, candidate: BuildState): BuildState {
  return ensurePlayerLevelForBuild(
    game,
    preserveSkillPointAllocations(game, state, candidate),
    ENSURE_MINIMUM,
  );
}

function describeChoices(context: OpContext, optionId: string): { refs: EntityRef[]; count: number } {
  const option = context.game.characterOptions.find((entry) => entry.id === optionId)!;
  const refs = option.choices.map((choice) => ({
    id: choice.id,
    name: resolveOptionLabel(choice.label, context.labels),
  }));
  return { refs, count: refs.length };
}

const MAX_LISTED_CHOICES = 10;

/** The store's `setCharacterOptionChoice`, including its rule that the choice belongs to the option. */
function applySetOptionChoice(
  context: OpContext,
  state: BuildState,
  optionId: string,
  choiceId: string,
): OpResult {
  const resolved = resolve(context, "option", optionId);
  if (!resolved.ok) return fail(resolved.message);
  const option = resolved.entity;
  const { game } = context;

  if (!option.choices.some((choice) => choice.id === choiceId)) {
    const optionName = formatEntityRef({ id: option.id, name: getEntityName("option", option, context.labels) });
    const { refs, count } = describeChoices(context, option.id);
    const parts = [`choice ${JSON.stringify(choiceId)} is not a choice of option ${optionName}.`];
    const suggestions = rankCloseMatches(choiceId, refs);
    if (suggestions.length > 0) parts.push(`Did you mean: ${suggestions.map(formatEntityRef).join(", ")}?`);
    parts.push(
      count <= MAX_LISTED_CHOICES
        ? `Valid choices: ${listRefs(refs)}.`
        : `It has ${count} choices; list them with lorerim_get_entity (kind "option", id "${option.id}").`,
    );
    return fail(parts.join(" "));
  }

  const requested = [`options.${option.id}`];
  if (isSupernaturalOptionId(option.id)) {
    return succeed(applySupernaturalOptionChange(game, state, option.id, choiceId), requested);
  }
  const withChoice: BuildState = {
    ...state,
    characterOptionChoices: { ...state.characterOptionChoices, [option.id]: choiceId },
  };
  return succeed(commitPreserved(game, state, withChoice), requested);
}

function activeCurseNames(context: OpContext, state: BuildState): string {
  const names: string[] = [];
  const add = (optionId: string) => {
    const option = context.game.characterOptions.find((entry) => entry.id === optionId);
    names.push(option ? getEntityName("option", option, context.labels) : optionId);
  };
  if (isVampireActive(state)) add("vampire");
  if (isWerewolfActive(state)) add("werewolf");
  if (isLichActive(state)) add("lich");
  return names.join(", ");
}

/** The store's `toggleTrait` (adding): `canSelectTrait`, then `reconcileBuild`. */
function applyAddTrait(context: OpContext, state: BuildState, traitId: string): OpResult {
  const resolved = resolve(context, "trait", traitId);
  if (!resolved.ok) return fail(resolved.message);
  const { game } = context;
  const trait = findRef(game.traits, traitId)!;

  if (state.traitIds.includes(traitId)) return fail(`trait ${formatEntityRef(trait)} is already selected.`);
  if (!canSelectTrait(game, state, traitId)) {
    if (isTraitBlockedBySupernatural(game, state, traitId)) {
      return fail(
        `trait ${formatEntityRef(trait)} is blocked by supernatural (${activeCurseNames(context, state)}): the data marks it incompatible with a supernatural curse. Clear the curse with set_option_choice first, or pick another trait.`,
      );
    }
    const limit = getTraitLimit(game, state);
    if (state.traitIds.length >= limit) {
      const selected = state.traitIds.map((id) => findRef(game.traits, id)!);
      return fail(
        `trait limit reached: the build already has ${state.traitIds.length} of ${limit} trait slots filled (${listRefs(selected)}). Remove one with remove_trait first.`,
      );
    }
    return fail(`the planner refuses trait ${formatEntityRef(trait)} for this build.`);
  }

  return succeed(reconcileBuild(game, { ...state, traitIds: [...state.traitIds, traitId] }), [
    requestedItem("traits", traitId),
  ]);
}

/** The store's `toggleTrait` (removing): drop it, then `reconcileBuild`. */
function applyRemoveTrait(context: OpContext, state: BuildState, traitId: string): OpResult {
  const resolved = resolve(context, "trait", traitId);
  if (!resolved.ok) return fail(resolved.message);
  const { game } = context;
  if (!state.traitIds.includes(traitId)) {
    const selected = state.traitIds.map((id) => findRef(game.traits, id)!);
    return fail(
      `trait ${formatEntityRef(findRef(game.traits, traitId)!)} is not selected. Selected traits: ${listRefs(selected)}.`,
    );
  }
  return succeed(
    reconcileBuild(game, { ...state, traitIds: state.traitIds.filter((id) => id !== traitId) }),
    [requestedItem("traits", traitId)],
  );
}

type SkillListKind = "major" | "minor" | "oghma";

const SKILL_LIST_FIELD = {
  major: "majorSkills",
  minor: "minorSkills",
  oghma: "oghmaSkills",
} as const;

function listKey(kind: SkillListKind): "majorSkillIds" | "minorSkillIds" | "oghmaSkillIds" {
  return kind === "major" ? "majorSkillIds" : kind === "minor" ? "minorSkillIds" : "oghmaSkillIds";
}

function canSelect(game: GameData, state: BuildState, kind: SkillListKind, skillId: string): boolean {
  if (kind === "major") return canSelectMajorSkill(game, state, skillId);
  if (kind === "minor") return canSelectMinorSkill(game, state, skillId);
  return canSelectOghmaSkill(game, state, skillId);
}

/** Names why `canSelect*` refused a skill, in the predicate's own order, from data lookups only. */
function explainSkillRefusal(
  game: GameData,
  accumulated: BuildState,
  kind: SkillListKind,
  skillId: string,
  position: number,
): string {
  const skill = skillRef(game, skillId);
  const name = formatEntityRef(skill);

  if (kind === "oghma") {
    if (!isAllocatableSkill(game, skillId)) {
      return `${name} is not eligible for Oghma Infinium: it has no skill level (perk tree only).`;
    }
    const limit = getOghmaSkillLimit(game);
    return `${name} (skill ${position + 1} in the list) is over the limit: Oghma Infinium takes at most ${limit} skills.`;
  }

  const limit = kind === "major" ? game.manifest.limits.majorSkills : game.manifest.limits.minorSkills;
  if (accumulated[listKey(kind)].length >= limit) {
    return `${name} (skill ${position + 1} in the list) is over the limit: at most ${limit} ${kind} skills.`;
  }
  const other: SkillListKind = kind === "major" ? "minor" : "major";
  if (accumulated[listKey(other)].includes(skillId)) {
    return `${name} is one of the ${other} skills; remove it from ${other} skills first (set_${other}_skills). The op never moves a skill for you.`;
  }
  const eligible = game.skills.find((entry) => entry.id === skillId)?.[
    kind === "major" ? "majorEligible" : "minorEligible"
  ];
  if (!eligible) return `${name} is not eligible as a ${kind} skill.`;
  return `the planner refuses ${name} as a ${kind} skill.`;
}

/**
 * The store's `toggleMajorSkill` / `toggleMinorSkill` / `toggleOghmaSkill`,
 * for a whole replacement list: each id is checked with `canSelect*` against
 * the list accumulated so far, then the store's preserve-and-raise commit runs once.
 */
function applySetSkillList(
  context: OpContext,
  state: BuildState,
  kind: SkillListKind,
  skillIds: readonly string[],
): OpResult {
  const { game } = context;
  if (kind === "oghma" && !isOghmaInfiniumActive(state)) {
    return fail(
      `Oghma Infinium is not claimed. Run set_option_choice with option "${OGHMA_INFINIUM_OPTION_ID}" and choice "${OGHMA_INFINIUM_CLAIMED_CHOICE}" before set_oghma_skills.`,
    );
  }

  const problems: string[] = [];
  const seen = new Set<string>();
  for (const skillId of skillIds) {
    const resolved = resolve(context, "skill", skillId);
    if (!resolved.ok) problems.push(resolved.message);
    else if (seen.has(skillId)) problems.push(`${formatEntityRef(skillRef(game, skillId))} is listed twice.`);
    seen.add(skillId);
  }
  if (problems.length > 0) return fail(problems.join(" "));

  const key = listKey(kind);
  let accumulated: BuildState = { ...state, [key]: [] };
  skillIds.forEach((skillId, position) => {
    if (!canSelect(game, accumulated, kind, skillId)) {
      problems.push(explainSkillRefusal(game, accumulated, kind, skillId, position));
      return;
    }
    accumulated = { ...accumulated, [key]: [...accumulated[key], skillId] };
  });
  if (problems.length > 0) return fail(problems.join(" "));

  return succeed(commitPreserved(game, state, { ...state, [key]: [...skillIds] }), [SKILL_LIST_FIELD[kind]]);
}

/** The store's `adjustAttribute` rules (non-negative, total within earned), then a field set. */
function applySetAttributeBonus(
  context: OpContext,
  state: BuildState,
  given: Partial<Record<keyof Attributes, number>>,
): OpResult {
  const { game } = context;
  const stats = ATTRIBUTE_STATS.filter((stat) => given[stat] !== undefined);
  if (stats.length === 0) return fail("give at least one of health, magicka, stamina.");

  const next: Attributes = { ...state.attributeBonus };
  for (const stat of stats) next[stat] = given[stat]!;

  const negative = stats.filter((stat) => next[stat] < 0);
  if (negative.length > 0) {
    return fail(`attribute choices cannot be negative (${negative.map((stat) => `${stat} ${next[stat]}`).join(", ")}).`);
  }
  const total = next.health + next.magicka + next.stamina;
  const earned = getEarnedAttributeChoices(game, state);
  if (total > earned) {
    return fail(
      `attribute choices total ${total} (health ${next.health}, magicka ${next.magicka}, stamina ${next.stamina}) but only ${earned} are earned at player level ${state.playerLevel}; the valid total is 0–${earned}. Raise the player level first (set_player_level) or spend fewer.`,
    );
  }
  return succeed(
    { ...state, attributeBonus: next },
    stats.map((stat) => `attributeBonus.${stat}`),
  );
}

/** The store's `setPlayerLevel`, except that an out-of-range level is rejected instead of clamped. */
function applySetPlayerLevel(context: OpContext, state: BuildState, level: number): OpResult {
  const { game } = context;
  if (clampPlayerLevel(game, level) !== level) {
    const { baseLevel, maxPlayerLevel } = game.mechanics.leveling;
    return fail(`player level ${level} is out of range; valid levels are ${baseLevel}–${maxPlayerLevel}.`);
  }
  return succeed(reconcileBuild(game, { ...state, playerLevel: level }), ["playerLevel"]);
}

/** The store's `setSkillLevel` (`applySkillLevelChange`), rejecting any level the engine would change. */
function applySetSkillLevel(context: OpContext, state: BuildState, skillId: string, level: number): OpResult {
  const resolved = resolve(context, "skill", skillId);
  if (!resolved.ok) return fail(resolved.message);
  const { game } = context;
  const skill = skillRef(game, skillId);
  if (!isAllocatableSkill(game, skillId)) {
    return fail(`${formatEntityRef(skill)} has no skill level to set: it is a perk tree only.`);
  }

  const next = applySkillLevelChange(game, state, skillId, level);
  const stored = getStoredSkillLevel(game, next, skillId);
  if (stored !== level) {
    const floor = getSkillFloor(game, state, skillId);
    const lowest = getStoredSkillLevel(game, applySkillLevelChange(game, state, skillId, 0), skillId);
    const max = getMaxSkillLevel(game);
    const raised = lowest > floor ? `, raised to ${lowest} by skill bonuses or training` : "";
    return fail(
      `${skill.name} level ${level} is out of range; the engine would store ${stored}. Valid levels are ${lowest}–${max}: the skill floor (getSkillFloor: race starting level plus major/minor bonus) is ${floor}${raised}, and maxSkillLevel is ${max}.`,
    );
  }
  return succeed(next, [`skillLevels.${skillId}`]);
}

/** The perk the planner takes when this perk's tree node is clicked (ranks share a node). */
function takeTargetId(game: GameData, state: BuildState, perkId: string): string {
  const skillId = getPerkSkillId(game, perkId);
  const tree = skillId === undefined ? undefined : game.perkTrees[skillId];
  if (!tree) return perkId;
  const stack = [...groupPerksByPosition(tree).values()].find((perks) =>
    perks.some((perk) => perk.id === perkId),
  );
  if (!stack || stack.length <= 1) return perkId;
  return resolvePerkTakeTarget(stack, state.selectedPerkIds);
}

function violationKey(violation: Violation): string {
  return JSON.stringify([
    violation.type,
    violation.entity?.id ?? null,
    violation.skill?.id ?? null,
    violation.shortfall,
  ]);
}

/** The violation rows adding `perkId` would cause: rows the build does not already have. */
export function violationsCausedByPerk(game: GameData, state: BuildState, perkId: string): Violation[] {
  const existing = new Set(findBuildViolations(game, state).map(violationKey));
  const withPerk: BuildState = { ...state, selectedPerkIds: [...state.selectedPerkIds, perkId] };
  return findBuildViolations(game, withPerk).filter((violation) => !existing.has(violationKey(violation)));
}

/** The store's `tryTakePerk`: strict, no prerequisites or skill levels taken for you. */
function applyTakePerk(context: OpContext, state: BuildState, perkId: string): OpResult {
  const resolved = resolve(context, "perk", perkId);
  if (!resolved.ok) return fail(resolved.message);
  const { game } = context;
  const perk = resolved.entity;
  const ref = formatEntityRef(perkRef(game, perkId));
  const selected = state.selectedPerkIds.includes(perkId);
  const stackable = perk.allocation?.kind === "perkPointsBudget";

  const targetId = takeTargetId(game, state, perkId);
  if (targetId !== perkId) {
    const target = formatEntityRef(perkRef(game, targetId));
    if (state.selectedPerkIds.includes(targetId)) {
      return fail(`perk ${ref} is already selected, as is every rank at its tree position.`);
    }
    if (selected) {
      return fail(`perk ${ref} is already selected; the next rank at its tree position is ${target}. Take that id instead.`);
    }
    return fail(
      `perk ${ref} is a later rank at its tree position; ranks are taken in order and the next one there is ${target}. Take ${targetId} first.`,
    );
  }
  if (selected && !stackable) return fail(`perk ${ref} is already selected.`);

  const next = tryTakePerk(game, state, perkId);
  if (!next) {
    const caused = violationsCausedByPerk(game, state, perkId);
    if (caused.length === 0) {
      return fail(
        `the planner refuses to take ${ref} here, and adding it would cause no violation lorerim_evaluate_build reports. Check its requirements with lorerim_get_entity.`,
      );
    }
    return fail(`cannot take ${ref}: ${caused.map((violation) => violation.message).join(" ")}`);
  }
  return succeed(next, [requestedItem("perks", perkId)]);
}

/** The store's `removePerk`: removes the perk and every selected perk that depends on it. */
function applyRemovePerk(context: OpContext, state: BuildState, perkId: string): OpResult {
  const resolved = resolve(context, "perk", perkId);
  if (!resolved.ok) return fail(resolved.message);
  const { game } = context;
  if (!state.selectedPerkIds.includes(perkId)) {
    return fail(`perk ${formatEntityRef(perkRef(game, perkId))} is not selected.`);
  }
  return succeed(removePerk(game, state, perkId), [requestedItem("perks", perkId)]);
}

/**
 * Applies one op to `state` with the same engine and lib calls the planner's
 * store action makes for it, plus the rules that live only in the store. A
 * failure changes nothing and explains itself.
 */
export function applyOp(appData: AppData, state: BuildState, op: Op): OpResult {
  const context: OpContext = { game: appData.game, labels: getOptionLabels(appData) };

  switch (op.op) {
    case "set_race":
      return applySetRace(context, state, op.id);
    case "set_birthsign":
    case "set_deity": {
      const kind = op.op === "set_birthsign" ? "birthsign" : "deity";
      const check = setNamedId(context, kind, op.id);
      if (!check.ok) return fail(check.message);
      // The store sets these fields without reconciling.
      return op.op === "set_birthsign"
        ? succeed({ ...state, birthsignId: op.id }, ["birthsign"])
        : succeed({ ...state, deityId: op.id }, ["deity"]);
    }
    case "add_trait":
      return applyAddTrait(context, state, op.id);
    case "remove_trait":
      return applyRemoveTrait(context, state, op.id);
    case "set_major_skills":
      return applySetSkillList(context, state, "major", op.skills);
    case "set_minor_skills":
      return applySetSkillList(context, state, "minor", op.skills);
    case "set_oghma_skills":
      return applySetSkillList(context, state, "oghma", op.skills);
    case "set_attribute_bonus":
      return applySetAttributeBonus(context, state, op);
    case "set_option_choice":
      return applySetOptionChoice(context, state, op.option, op.choice);
    case "set_player_level":
      return applySetPlayerLevel(context, state, op.level);
    case "set_skill_level":
      return applySetSkillLevel(context, state, op.skill, op.level);
    case "take_perk":
      return applyTakePerk(context, state, op.id);
    case "remove_perk":
      return applyRemovePerk(context, state, op.id);
  }
}
