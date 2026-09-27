import type {
  Birthsign,
  CharacterOption,
  Deity,
  GameData,
  Perk,
  Race,
  Skill,
  Trait,
} from "@/data/schemas";

/** Every entity kind an agent can name by id. */
export const ENTITY_KINDS = [
  "perk",
  "race",
  "trait",
  "skill",
  "option",
  "birthsign",
  "deity",
] as const;

export type EntityKind = (typeof ENTITY_KINDS)[number];

export interface EntityByKind {
  perk: Perk;
  race: Race;
  trait: Trait;
  skill: Skill;
  option: CharacterOption;
  birthsign: Birthsign;
  deity: Deity;
}

export interface EntityRef {
  id: string;
  name: string;
}

export interface UnknownEntity {
  ok: false;
  message: string;
  suggestions: EntityRef[];
}

export type ResolveResult<K extends EntityKind> =
  | { ok: true; entity: EntityByKind[K] }
  | UnknownEntity;

/** Option titles are label keys; the web app shows the raw key when a label is missing. */
export type OptionLabels = Readonly<Record<string, string>>;

export const MAX_SUGGESTIONS = 5;

/** Every perk in skill order (`skills.json`), then in its tree's file order. */
function listPerks(game: GameData): Perk[] {
  const perks: Perk[] = [];
  const seen = new Set<string>();
  const treeIds = [
    ...game.skills.map((skill) => skill.id),
    ...Object.keys(game.perkTrees),
  ];
  for (const treeId of treeIds) {
    if (seen.has(treeId)) continue;
    seen.add(treeId);
    perks.push(...(game.perkTrees[treeId]?.perks ?? []));
  }
  return perks;
}

/** Every entity of `kind`, in data-file order. */
export function listEntities<K extends EntityKind>(game: GameData, kind: K): EntityByKind[K][] {
  const lists: { [P in EntityKind]: () => EntityByKind[P][] } = {
    perk: () => listPerks(game),
    race: () => game.races,
    trait: () => game.traits,
    skill: () => game.skills,
    option: () => game.characterOptions,
    birthsign: () => game.birthsigns,
    deity: () => game.deities,
  };
  return lists[kind]();
}

/** Resolves an option label key; falls back to the key, as the web app does. */
export function resolveOptionLabel(key: string, labels: OptionLabels | undefined): string {
  return labels?.[key] ?? key;
}

/** Display name of an entity (options have a title label instead of a name). */
export function getEntityName<K extends EntityKind>(
  kind: K,
  entity: EntityByKind[K],
  optionLabels?: OptionLabels,
): string {
  if (kind === "option") {
    return resolveOptionLabel((entity as CharacterOption).titleLabel, optionLabels);
  }
  return (entity as Exclude<EntityByKind[EntityKind], CharacterOption>).name;
}

function findEntity<K extends EntityKind>(
  game: GameData,
  kind: K,
  id: string,
): EntityByKind[K] | undefined {
  if (kind === "perk") {
    // Own keys only: "constructor" or "__proto__" must not resolve through the prototype.
    return (Object.hasOwn(game.perkById, id) ? game.perkById[id] : undefined) as
      | EntityByKind[K]
      | undefined;
  }
  return listEntities(game, kind).find((entity) => entity.id === id);
}

/** Lowercases and drops everything but letters and digits, so "Heavy Armor" ~ "heavy-armor". */
export function normalizeForMatch(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  let previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    const current = [i];
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(previous[j]! + 1, current[j - 1]! + 1, previous[j - 1]! + cost);
    }
    previous = current;
  }
  return previous[b.length]!;
}

interface MatchScore {
  /** 0 exact (after normalizing), 1 containment, 2 edit distance. */
  tier: number;
  distance: number;
}

const MIN_CONTAINMENT_LENGTH = 3;

function scoreField(query: string, field: string): MatchScore | null {
  if (field.length === 0) return null;
  if (field === query) return { tier: 0, distance: 0 };
  if (
    (query.length >= MIN_CONTAINMENT_LENGTH && field.includes(query)) ||
    (field.length >= MIN_CONTAINMENT_LENGTH && query.includes(field))
  ) {
    return { tier: 1, distance: Math.abs(field.length - query.length) };
  }
  const distance = levenshtein(query, field);
  // Beyond a third of the longer string, an edit-distance "match" is noise.
  const limit = Math.max(2, Math.floor(Math.max(query.length, field.length) / 3));
  return distance <= limit ? { tier: 2, distance } : null;
}

function compareScores(a: MatchScore, b: MatchScore): number {
  return a.tier - b.tier || a.distance - b.distance;
}

/**
 * Ranks `candidates` by closeness to `query`: an exact match of the normalized
 * id or name first, then containment either way, then edit distance. Ties break
 * by id so the order is deterministic. Returns at most `max` entries.
 */
export function rankCloseMatches(
  query: string,
  candidates: readonly EntityRef[],
  max: number = MAX_SUGGESTIONS,
): EntityRef[] {
  const normalizedQuery = normalizeForMatch(query);
  if (normalizedQuery.length === 0) return [];

  const scored: Array<{ ref: EntityRef; score: MatchScore }> = [];
  for (const ref of candidates) {
    let best: MatchScore | null = null;
    for (const field of [ref.id, ref.name]) {
      const score = scoreField(normalizedQuery, normalizeForMatch(field));
      if (score && (!best || compareScores(score, best) < 0)) best = score;
    }
    if (best) scored.push({ ref, score: best });
  }

  scored.sort(
    (a, b) =>
      compareScores(a.score, b.score) ||
      (a.ref.id < b.ref.id ? -1 : a.ref.id > b.ref.id ? 1 : 0),
  );
  return scored.slice(0, max).map(({ ref }) => ({ id: ref.id, name: ref.name }));
}

/** `{id, name}` for every entity of a kind, in data-file order. */
export function listEntityRefs(
  game: GameData,
  kind: EntityKind,
  optionLabels?: OptionLabels,
): EntityRef[] {
  return listEntities(game, kind).map((entity) => ({
    id: entity.id,
    name: getEntityName(kind, entity, optionLabels),
  }));
}

export function formatEntityRef(ref: EntityRef): string {
  return ref.id === ref.name ? ref.id : `${ref.id} (${ref.name})`;
}

/**
 * The actionable "not found" text shared by every tool: what was wrong, what
 * ids look like, the closest matches, and where to list valid ids.
 */
export function formatUnknownIdMessage(
  kind: EntityKind,
  id: string,
  suggestions: readonly EntityRef[],
): string {
  const parts = [
    `${kind} id ${JSON.stringify(id)} not found. Ids are exact and case-sensitive; names are not accepted as ids.`,
  ];
  if (suggestions.length > 0) {
    parts.push(`Did you mean: ${suggestions.map(formatEntityRef).join(", ")}?`);
  }
  parts.push(
    kind === "perk"
      ? "Find perk ids with lorerim_search_perks."
      : `List valid ${kind} ids with lorerim_get_entity (kind "${kind}", no id).`,
  );
  return parts.join(" ");
}

/**
 * Resolves an id of the given kind, or explains why it cannot: never matches
 * names or near-miss ids silently — those come back as suggestions.
 */
export function resolveEntity<K extends EntityKind>(
  game: GameData,
  kind: K,
  id: string,
  optionLabels?: OptionLabels,
): ResolveResult<K> {
  const entity = findEntity(game, kind, id);
  if (entity) return { ok: true, entity };

  const suggestions = rankCloseMatches(id, listEntityRefs(game, kind, optionLabels));
  return {
    ok: false,
    message: formatUnknownIdMessage(kind, id, suggestions),
    suggestions,
  };
}
