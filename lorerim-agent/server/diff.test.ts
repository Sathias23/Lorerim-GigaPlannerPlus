import { describe, expect, it } from "vitest";
import { getStoredSkillLevel, reconcileBuild, type BuildState } from "@/engine/buildEngine";
import { createTestBuildState, getTestAppData, getTestGameData } from "@/test/helpers";
import { diffBuildStates, listRow } from "./diff";

const appData = getTestAppData();
const game = getTestGameData();
const labels = appData.ui.labels.panels["character-options"] ?? {};

function build(overrides: Partial<BuildState> = {}): BuildState {
  return reconcileBuild(game, createTestBuildState(overrides));
}

function fieldsOf(before: BuildState, after: BuildState): string[] {
  return diffBuildStates(appData, before, after).map((row) => row.field);
}

describe("diffBuildStates", () => {
  it("returns nothing for the same build", () => {
    const state = build({ raceId: "nord", selectedPerkIds: ["block-improved-blocking"] });

    expect(diffBuildStates(appData, state, structuredClone(state))).toEqual([]);
  });

  it("reports race, birthsign, and deity as named from/to", () => {
    const before = build();
    const after = { ...before, raceId: "nord", birthsignId: "lord", deityId: "akatosh" };

    const rows = diffBuildStates(appData, before, after);

    expect(rows[0]).toEqual({
      field: "race",
      from: { id: "none", name: "None" },
      to: { id: "nord", name: "Nord" },
      message: "Race: None → Nord.",
    });
    expect(rows.slice(0, 3).map((row) => row.field)).toEqual(["race", "birthsign", "deity"]);
    // Stored levels are compared as the engine counts them: Nord's starting skills raise floors.
    expect(rows.slice(3).every((row) => row.field.startsWith("skillLevels."))).toBe(true);
  });

  it("reports lists as named added/removed, ignoring order and keeping repeats", () => {
    const before = { ...build(), majorSkillIds: ["block", "smithing"], selectedPerkIds: ["a-perk"] };
    const after = {
      ...before,
      majorSkillIds: ["smithing", "block"],
      selectedPerkIds: ["a-perk", "a-perk", "block-improved-blocking"],
    };

    const rows = diffBuildStates(appData, before, after);

    expect(rows).toEqual([
      {
        field: "perks",
        added: [
          { id: "a-perk", name: "a-perk" },
          { id: "block-improved-blocking", name: game.perkById["block-improved-blocking"]!.name },
        ],
        removed: [],
        message: expect.stringContaining("Perks: added a-perk, block-improved-blocking"),
      },
    ]);
  });

  it("names traits and skills in list rows", () => {
    const trait = game.traits[0]!;
    const before = build();
    const after = { ...before, traitIds: [trait.id], minorSkillIds: ["alchemy"] };

    const rows = diffBuildStates(appData, before, after);

    expect(rows.find((row) => row.field === "traits")?.added).toEqual([{ id: trait.id, name: trait.name }]);
    expect(rows.find((row) => row.field === "minorSkills")?.added).toEqual([{ id: "alchemy", name: "Alchemy" }]);
  });

  it("compares skill levels as the engine counts them, per skill", () => {
    const blank = createTestBuildState({ raceId: "nord" });
    const reconciled = build({ raceId: "nord" });
    // An absent key and the explicit floor value are the same level.
    expect(fieldsOf(blank, reconciled)).toEqual([]);

    const raised = { ...reconciled, skillLevels: { ...reconciled.skillLevels, marksman: 40 } };
    expect(diffBuildStates(appData, reconciled, raised)).toEqual([
      {
        field: "skillLevels.marksman",
        from: getStoredSkillLevel(game, reconciled, "marksman"),
        to: 40,
        message: `Marksman level: ${getStoredSkillLevel(game, reconciled, "marksman")} → 40.`,
      },
    ]);
  });

  it("reports option choices with labels, treating an absent choice as the default", () => {
    const vampire = game.characterOptions.find((option) => option.id === "vampire")!;
    const before = createTestBuildState();
    const defaults = { ...before, characterOptionChoices: { vampire: vampire.defaultChoice } };
    expect(fieldsOf(before, defaults)).toEqual([]);

    const after = { ...before, characterOptionChoices: { vampire: "stage-2" } };
    const [row] = diffBuildStates(appData, before, after);
    const stage2 = vampire.choices.find((choice) => choice.id === "stage-2")!;

    expect(row).toMatchObject({
      field: "options.vampire",
      from: { id: vampire.defaultChoice },
      to: { id: "stage-2", name: labels[stage2.label] ?? stage2.label },
    });
  });

  it("reports attribute choices, player level, training, and description", () => {
    const before = build();
    const after = {
      ...before,
      attributeBonus: { health: 3, magicka: 0, stamina: 0 },
      playerLevel: 12,
      skillTrainingRanges: { smithing: [2] },
      description: "notes",
    };

    const rows = diffBuildStates(appData, before, after);

    expect(rows.map((row) => [row.field, row.from, row.to])).toEqual([
      ["attributeBonus.health", 0, 3],
      ["playerLevel", before.playerLevel, 12],
      ["skillTrainingRanges.smithing", [], [2]],
      ["description", "", "notes"],
    ]);
  });

  it("treats all-zero training as no training", () => {
    const before = build();

    expect(fieldsOf(before, { ...before, skillTrainingRanges: { smithing: [0, 0] } })).toEqual([]);
  });

  it("compares a short training array equal to its zero-padded form", () => {
    const before = build();

    expect(
      fieldsOf(
        { ...before, skillTrainingRanges: { smithing: [2] } },
        { ...before, skillTrainingRanges: { smithing: [2, 0, 0, 0] } },
      ),
    ).toEqual([]);
  });

  it("reads holes in a sparse training array as 0, so values are always numbers", () => {
    const before = build();
    const sparse: number[] = [];
    sparse[1] = 3;

    expect(
      fieldsOf(
        { ...before, skillTrainingRanges: { smithing: sparse } },
        { ...before, skillTrainingRanges: { smithing: [0, 3, 0, 0] } },
      ),
    ).toEqual([]);
    const [row] = diffBuildStates(appData, before, { ...before, skillTrainingRanges: { smithing: sparse } });
    expect(row).toMatchObject({ field: "skillTrainingRanges.smithing", from: [], to: [0, 3] });
  });

  it("names unknown ids by themselves", () => {
    const before = createTestBuildState({ raceId: "nordd", selectedPerkIds: ["not-a-perk"] });
    const after = build();

    const rows = diffBuildStates(appData, before, after);

    expect(rows.find((row) => row.field === "race")?.from).toEqual({ id: "nordd", name: "nordd" });
    expect(rows.find((row) => row.field === "perks")?.removed).toEqual([{ id: "not-a-perk", name: "not-a-perk" }]);
  });
});

describe("listRow", () => {
  it("writes added and removed in one message", () => {
    expect(listRow("perks", [{ id: "a", name: "A" }], [{ id: "b", name: "B" }]).message).toBe(
      "Perks: added a (A); removed b (B).",
    );
  });
});
