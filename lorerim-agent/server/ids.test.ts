import { describe, expect, it } from "vitest";
import { getTestAppData, getTestGameData } from "@/test/helpers";
import {
  ENTITY_KINDS,
  MAX_SUGGESTIONS,
  formatUnknownIdMessage,
  getEntityName,
  levenshtein,
  listEntities,
  listEntityRefs,
  normalizeForMatch,
  rankCloseMatches,
  resolveEntity,
  type EntityRef,
} from "./ids";

const optionLabels = () => getTestAppData().ui.labels.panels["character-options"];

describe("normalizeForMatch", () => {
  it("lowercases and drops separators so names and ids compare", () => {
    expect(normalizeForMatch("Heavy Armor")).toBe("heavyarmor");
    expect(normalizeForMatch("heavy-armor")).toBe("heavyarmor");
    expect(normalizeForMatch("  Two-Handed! ")).toBe("twohanded");
  });
});

describe("levenshtein", () => {
  it.each([
    ["", "", 0],
    ["abc", "", 3],
    ["", "abc", 3],
    ["kitten", "sitting", 3],
    ["archery", "alchemy", 2],
    ["same", "same", 0],
  ])("distance(%j, %j) = %i", (a, b, expected) => {
    expect(levenshtein(a, b)).toBe(expected);
    expect(levenshtein(b, a)).toBe(expected);
  });
});

describe("rankCloseMatches", () => {
  const refs: EntityRef[] = [
    { id: "sneak-advanced-anatomical-lore", name: "Advanced Anatomical Lore" },
    { id: "sneak-anatomical-lore", name: "Anatomical Lore" },
    { id: "alchemy-alchemical-lore", name: "Alchemical Lore" },
    { id: "speech-haggling", name: "Haggling" },
  ];

  it("ranks an exact normalized name or id first, then containment, then edit distance", () => {
    // exact name, containment, then edit distance ("anatomicallore" -> "alchemicallore" is 4).
    expect(rankCloseMatches("Anatomical Lore", refs).map((ref) => ref.id)).toEqual([
      "sneak-anatomical-lore",
      "sneak-advanced-anatomical-lore",
      "alchemy-alchemical-lore",
    ]);
    expect(rankCloseMatches("anatomical-lore", refs)[0]?.id).toBe("sneak-anatomical-lore");
    expect(rankCloseMatches("hagling", refs)).toEqual([
      { id: "speech-haggling", name: "Haggling" },
    ]);
  });

  it("breaks ties by id so the order never depends on input order", () => {
    const tied: EntityRef[] = [
      { id: "b-fire", name: "Fire" },
      { id: "a-fire", name: "Fire" },
      { id: "c-fire", name: "Fire" },
    ];
    const forward = rankCloseMatches("fire", tied);
    const backward = rankCloseMatches("fire", [...tied].reverse());

    expect(forward.map((ref) => ref.id)).toEqual(["a-fire", "b-fire", "c-fire"]);
    expect(backward).toEqual(forward);
  });

  it("returns at most five suggestions", () => {
    const many = Array.from({ length: 12 }, (_, index) => ({
      id: `fire-${String(index).padStart(2, "0")}`,
      name: `Fire ${index}`,
    }));

    expect(rankCloseMatches("fire", many)).toHaveLength(MAX_SUGGESTIONS);
  });

  it("returns nothing for an empty query or a string unlike every candidate", () => {
    expect(rankCloseMatches("  ", refs)).toEqual([]);
    expect(rankCloseMatches("zzzzzzzzzz", refs)).toEqual([]);
  });

  it("does not suggest unrelated perks for a near-miss perk id", () => {
    const suggestions = rankCloseMatches("anatomical-lore", listEntityRefs(getTestGameData(), "perk"));

    expect(suggestions[0]?.id).toBe("sneak-anatomical-lore");
    expect(suggestions.map((ref) => ref.id)).toContain("sneak-advanced-anatomical-lore");
    expect(suggestions.every((ref) => /lore/i.test(ref.id))).toBe(true);
  });
});

describe("listEntities", () => {
  it("lists every perk exactly once, in skill order then tree order", () => {
    const game = getTestGameData();
    const perks = listEntities(game, "perk");

    expect(perks.map((perk) => perk.id).sort()).toEqual(Object.keys(game.perkById).sort());
    const expected = game.skills.flatMap((skill) => game.perkTrees[skill.id]?.perks ?? []);
    expect(perks.map((perk) => perk.id)).toEqual(expected.map((perk) => perk.id));
  });

  it("keeps data-file order for the other kinds", () => {
    const game = getTestGameData();

    expect(listEntities(game, "race")).toBe(game.races);
    expect(listEntities(game, "trait")).toBe(game.traits);
    expect(listEntities(game, "skill")).toBe(game.skills);
    expect(listEntities(game, "option")).toBe(game.characterOptions);
    expect(listEntities(game, "birthsign")).toBe(game.birthsigns);
    expect(listEntities(game, "deity")).toBe(game.deities);
  });
});

describe("getEntityName", () => {
  it("resolves an option title through the labels and falls back to the raw key", () => {
    const option = getTestGameData().characterOptions.find((entry) => entry.id === "vampire")!;

    expect(getEntityName("option", option, optionLabels())).toBe(
      optionLabels()[option.titleLabel],
    );
    expect(getEntityName("option", option, {})).toBe(option.titleLabel);
  });
});

describe("resolveEntity", () => {
  it.each(ENTITY_KINDS)("resolves a real %s id to that entity", (kind) => {
    const game = getTestGameData();
    const first = listEntities(game, kind)[0]!;

    const result = resolveEntity(game, kind, first.id, optionLabels());

    expect(result).toEqual({ ok: true, entity: first });
  });

  it("rejects a near-miss perk id with suggestions, never resolving it", () => {
    const result = resolveEntity(getTestGameData(), "perk", "anatomical-lore");

    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.suggestions[0]).toEqual({ id: "sneak-anatomical-lore", name: "Anatomical Lore" });
    expect(result.message).toContain('perk id "anatomical-lore" not found');
    expect(result.message).toContain("sneak-anatomical-lore (Anatomical Lore)");
    expect(result.message).toContain("lorerim_search_perks");
  });

  it("rejects a perk name even when it matches exactly", () => {
    const result = resolveEntity(getTestGameData(), "perk", "Anatomical Lore");

    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.suggestions[0]?.id).toBe("sneak-anatomical-lore");
  });

  it("rejects ids that differ only by case", () => {
    expect(resolveEntity(getTestGameData(), "skill", "Sneak").ok).toBe(false);
  });

  it("does not resolve Object prototype keys as perks", () => {
    for (const id of ["constructor", "__proto__", "toString"]) {
      expect(resolveEntity(getTestGameData(), "perk", id).ok).toBe(false);
    }
  });

  it("suggests option ids by their resolved title", () => {
    const result = resolveEntity(getTestGameData(), "option", "vampirism", optionLabels());

    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.suggestions[0]?.id).toBe("vampire");
  });

  it("points non-perk kinds at the lorerim_get_entity listing", () => {
    const result = resolveEntity(getTestGameData(), "trait", "no-such-trait");

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.message).toContain('List valid trait ids with lorerim_get_entity (kind "trait", no id)');
    }
  });
});

describe("formatUnknownIdMessage", () => {
  it("omits the did-you-mean clause when nothing is close", () => {
    const message = formatUnknownIdMessage("deity", "xyz", []);

    expect(message).toBe(
      'deity id "xyz" not found. Ids are exact and case-sensitive; names are not accepted as ids. List valid deity ids with lorerim_get_entity (kind "deity", no id).',
    );
  });

  it("shows a bare id when the name equals the id", () => {
    expect(formatUnknownIdMessage("option", "x", [{ id: "lich", name: "lich" }])).toContain(
      "Did you mean: lich?",
    );
  });
});
