import * as z from "zod";
import type { AppData, GameData } from "@/data/schemas";
import {
  getStoredSkillLevel,
  isAllocatableSkill,
  type Attributes,
  type BuildState,
} from "@/engine/buildEngine";
import {
  findRef,
  formatEntityRef,
  getEntityName,
  perkRef,
  resolveOptionLabel,
  skillRef,
  type EntityRef,
  type OptionLabels,
} from "./ids";
import { getOptionLabels } from "./tools/getEntity";

const refSchema = z.object({ id: z.string(), name: z.string() });

/** A scalar's value: a level or count, a text, a named id, training counts per tier, or nothing. */
export const diffValueSchema = z.union([
  z.number(),
  z.string(),
  refSchema,
  z.array(z.number()),
  z.null(),
]);

export type DiffValue = z.infer<typeof diffValueSchema>;

/** One changed field: scalars carry `from`/`to`, lists carry `added`/`removed` (order is ignored). */
export const diffRowSchema = z.object({
  field: z.string(),
  from: diffValueSchema.optional(),
  to: diffValueSchema.optional(),
  added: z.array(refSchema).optional(),
  removed: z.array(refSchema).optional(),
  message: z.string(),
});

export type DiffRow = z.infer<typeof diffRowSchema>;

/** Every list field of `BuildState`, as diff field names. */
export const LIST_FIELDS = ["traits", "majorSkills", "minorSkills", "oghmaSkills", "perks"] as const;

export type ListField = (typeof LIST_FIELDS)[number];

const LIST_LABELS: Record<ListField, string> = {
  traits: "Traits",
  majorSkills: "Major skills",
  minorSkills: "Minor skills",
  oghmaSkills: "Oghma Infinium skills",
  perks: "Perks",
};

const ATTRIBUTE_STATS = ["health", "magicka", "stamina"] as const satisfies readonly (keyof Attributes)[];

export function isListField(field: string): field is ListField {
  return (LIST_FIELDS as readonly string[]).includes(field);
}

function listIds(state: BuildState, field: ListField): string[] {
  switch (field) {
    case "traits":
      return state.traitIds ?? [];
    case "majorSkills":
      return state.majorSkillIds ?? [];
    case "minorSkills":
      return state.minorSkillIds ?? [];
    case "oghmaSkills":
      return state.oghmaSkillIds ?? [];
    case "perks":
      return state.selectedPerkIds ?? [];
  }
}

/** `{id, name}` for an item of a list field; unknown ids name themselves. */
export function listItemRef(game: GameData, field: ListField, id: string): EntityRef {
  if (field === "traits") return findRef(game.traits, id)!;
  if (field === "perks") return perkRef(game, id);
  return skillRef(game, id);
}

function formatValue(value: DiffValue): string {
  if (value === null) return "(none)";
  if (Array.isArray(value)) return value.length === 0 ? "(none)" : `[${value.join(", ")}]`;
  if (typeof value === "object") return value.name;
  if (typeof value === "string") return value === "" ? "(empty)" : JSON.stringify(value);
  return String(value);
}

function scalarRow(field: string, label: string, from: DiffValue, to: DiffValue): DiffRow {
  return { field, from, to, message: `${label}: ${formatValue(from)} → ${formatValue(to)}.` };
}

/** A list row for `field`: what was added and what was removed. */
export function listRow(field: ListField, added: EntityRef[], removed: EntityRef[]): DiffRow {
  const parts: string[] = [];
  if (added.length > 0) parts.push(`added ${added.map(formatEntityRef).join(", ")}`);
  if (removed.length > 0) parts.push(`removed ${removed.map(formatEntityRef).join(", ")}`);
  return { field, added, removed, message: `${LIST_LABELS[field]}: ${parts.join("; ")}.` };
}

/**
 * Multiset difference in list order (stackable perks may repeat). Order alone
 * is not a change: the share code stores every list in its own order.
 */
function diffLists(before: readonly string[], after: readonly string[]) {
  const remaining = new Map<string, number>();
  for (const id of before) remaining.set(id, (remaining.get(id) ?? 0) + 1);
  const added: string[] = [];
  for (const id of after) {
    const count = remaining.get(id) ?? 0;
    if (count > 0) remaining.set(id, count - 1);
    else added.push(id);
  }
  const removed: string[] = [];
  for (const id of before) {
    const count = remaining.get(id) ?? 0;
    if (count > 0) {
      removed.push(id);
      remaining.set(id, count - 1);
    }
  }
  return { added, removed };
}

function diffListField(game: GameData, field: ListField, before: BuildState, after: BuildState): DiffRow | null {
  const { added, removed } = diffLists(listIds(before, field), listIds(after, field));
  if (added.length === 0 && removed.length === 0) return null;
  const toRef = (id: string) => listItemRef(game, field, id);
  return listRow(field, added.map(toRef), removed.map(toRef));
}

function sameValue(a: DiffValue, b: DiffValue): boolean {
  if (a === null || b === null) return a === b;
  if (Array.isArray(a) || Array.isArray(b)) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((value, index) => value === b[index])
    );
  }
  if (typeof a === "object" || typeof b === "object") {
    return typeof a === "object" && typeof b === "object" && a.id === b.id;
  }
  return a === b;
}

function pushScalar(rows: DiffRow[], field: string, label: string, from: DiffValue, to: DiffValue): void {
  if (!sameValue(from, to)) rows.push(scalarRow(field, label, from, to));
}

function optionValue(
  game: GameData,
  state: BuildState,
  optionId: string,
  labels: OptionLabels,
): DiffValue {
  const option = game.characterOptions.find((entry) => entry.id === optionId);
  const choices = state.characterOptionChoices ?? {};
  const choiceId = Object.hasOwn(choices, optionId) ? choices[optionId]! : option?.defaultChoice;
  if (choiceId === undefined) return null;
  const choice = option?.choices.find((entry) => entry.id === choiceId);
  return { id: choiceId, name: choice ? resolveOptionLabel(choice.label, labels) : choiceId };
}

/**
 * The level the engine counts for a skill: the stored level clamped to its
 * floor and the maximum (`getStoredSkillLevel`), so an absent key and an
 * explicit floor value compare equal. Keys the engine never reads (unknown or
 * non-allocatable skills) compare raw.
 */
function skillLevelValue(game: GameData, state: BuildState, skillId: string): DiffValue {
  if (game.manifest.skills.includes(skillId) && isAllocatableSkill(game, skillId)) {
    return getStoredSkillLevel(game, state, skillId);
  }
  const levels = state.skillLevels ?? {};
  return Object.hasOwn(levels, skillId) ? levels[skillId]! : null;
}

/** Training counts per tier, holes as 0 and trailing zeros dropped, so padded and short arrays compare equal. */
function trainingValue(state: BuildState, skillId: string): DiffValue {
  const ranges = state.skillTrainingRanges ?? {};
  const raw = Object.hasOwn(ranges, skillId) ? ranges[skillId] ?? [] : [];
  // Decoded codes may be short or sparse (holes); reconciled builds are padded with zeros.
  const counts = Array.from(raw, (count) => (typeof count === "number" ? count : 0));
  while (counts.length > 0 && counts[counts.length - 1] === 0) counts.pop();
  return counts;
}

function orderedKeys(first: readonly string[], ...rest: Array<Record<string, unknown> | undefined>): string[] {
  const keys = [...first];
  const seen = new Set(keys);
  for (const record of rest) {
    for (const key of Object.keys(record ?? {})) {
      if (seen.has(key)) continue;
      seen.add(key);
      keys.push(key);
    }
  }
  return keys;
}

/**
 * Every field that differs between two builds, in a fixed field order: race,
 * birthsign, deity, traits, major/minor/Oghma skills, option choices,
 * attribute choices, player level, skill levels, training, perks, description.
 * Ids carry names; option choices carry labels.
 */
export function diffBuildStates(appData: AppData, before: BuildState, after: BuildState): DiffRow[] {
  const { game } = appData;
  const labels = getOptionLabels(appData);
  const rows: DiffRow[] = [];

  pushScalar(rows, "race", "Race", findRef(game.races, before.raceId), findRef(game.races, after.raceId));
  pushScalar(
    rows,
    "birthsign",
    "Birthsign",
    findRef(game.birthsigns, before.birthsignId),
    findRef(game.birthsigns, after.birthsignId),
  );
  pushScalar(rows, "deity", "Deity", findRef(game.deities, before.deityId), findRef(game.deities, after.deityId));

  for (const field of ["traits", "majorSkills", "minorSkills", "oghmaSkills"] as const) {
    const row = diffListField(game, field, before, after);
    if (row) rows.push(row);
  }

  const optionIds = orderedKeys(
    game.characterOptions.map((option) => option.id),
    before.characterOptionChoices,
    after.characterOptionChoices,
  );
  for (const optionId of optionIds) {
    const option = game.characterOptions.find((entry) => entry.id === optionId);
    const label = option ? getEntityName("option", option, labels) : optionId;
    pushScalar(
      rows,
      `options.${optionId}`,
      `Option ${label}`,
      optionValue(game, before, optionId, labels),
      optionValue(game, after, optionId, labels),
    );
  }

  for (const stat of ATTRIBUTE_STATS) {
    pushScalar(
      rows,
      `attributeBonus.${stat}`,
      `${stat[0]!.toUpperCase()}${stat.slice(1)} attribute choices`,
      before.attributeBonus?.[stat] ?? 0,
      after.attributeBonus?.[stat] ?? 0,
    );
  }

  pushScalar(rows, "playerLevel", "Player level", before.playerLevel, after.playerLevel);

  const skillIds = orderedKeys(game.manifest.skills, before.skillLevels, after.skillLevels);
  for (const skillId of skillIds) {
    pushScalar(
      rows,
      `skillLevels.${skillId}`,
      `${skillRef(game, skillId).name} level`,
      skillLevelValue(game, before, skillId),
      skillLevelValue(game, after, skillId),
    );
  }

  const trainedIds = orderedKeys(game.manifest.skills, before.skillTrainingRanges, after.skillTrainingRanges);
  for (const skillId of trainedIds) {
    pushScalar(
      rows,
      `skillTrainingRanges.${skillId}`,
      `${skillRef(game, skillId).name} training per tier`,
      trainingValue(before, skillId),
      trainingValue(after, skillId),
    );
  }

  const perkRow = diffListField(game, "perks", before, after);
  if (perkRow) rows.push(perkRow);

  pushScalar(rows, "description", "Description", before.description ?? "", after.description ?? "");
  return rows;
}
