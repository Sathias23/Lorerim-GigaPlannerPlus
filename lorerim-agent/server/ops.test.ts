import { describe, expect, it } from "vitest";
import type { Perk } from "@/data/schemas";
import {
  allocatePerk,
  getEarnedAttributeChoices,
  getMaxSkillLevel,
  getMinimumPlayerLevelForBuild,
  getSkillFloor,
  getStoredSkillLevel,
  getTraitLimit,
  isAllocatableSkill,
  reconcileBuild,
  type BuildState,
} from "@/engine/buildEngine";
import { getOghmaSkillLimit, OGHMA_INFINIUM_CLAIMED_CHOICE, OGHMA_INFINIUM_OPTION_ID } from "@/lib/oghmaInfinium";
import { createTestBuildState, getTestAppData, getTestGameData } from "@/test/helpers";
import { applyOp, opSchema, requestedItem, violationsCausedByPerk, type Op } from "./ops";

const appData = getTestAppData();
const game = getTestGameData();
const { baseLevel, maxPlayerLevel } = game.mechanics.leveling;
const SPECIAL_TREES = new Set(["destiny", "vampire", "werewolf", "lich"]);
const allocatableSkills = game.skills.map((skill) => skill.id).filter((id) => isAllocatableSkill(game, id));
const nonAllocatableSkill = game.manifest.nonAllocatableSkills.find((id) =>
  game.skills.some((skill) => skill.id === id),
)!;

function build(overrides: Partial<BuildState> = {}): BuildState {
  return reconcileBuild(game, createTestBuildState(overrides));
}

function expectOk(state: BuildState, op: Op) {
  const before = structuredClone(state);
  const result = applyOp(appData, state, op);
  if (!result.ok) throw new Error(`expected ${op.op} to succeed: ${result.message}`);
  // Pure: the input state is never mutated.
  expect(state).toEqual(before);
  return result;
}

function expectFail(state: BuildState, op: Op): string {
  const result = applyOp(appData, state, op);
  if (result.ok) throw new Error(`expected ${op.op} to fail`);
  return result.message;
}

/** Ordinary skill-tree perks: no prerequisites, no player-level gate, one perk point, not stackable. */
function plainPerks(predicate: (perk: Perk) => boolean = () => true): Perk[] {
  return Object.values(game.perkById)
    .filter((perk) => {
      const skillId = game.perkSkillIdByPerkId[perk.id];
      return (
        skillId !== undefined &&
        !SPECIAL_TREES.has(skillId) &&
        perk.prerequisites.length === 0 &&
        (perk.prerequisitesAny ?? []).length === 0 &&
        (perk.playerLevelReq ?? 0) <= baseLevel &&
        perk.costsPerkPoint &&
        perk.allocation === undefined &&
        !/-r\d+$/.test(perk.id) &&
        predicate(perk)
      );
    })
    .sort((a, b) => (a.id < b.id ? -1 : 1));
}

describe("op schema", () => {
  it("rejects unknown ops and extra keys", () => {
    expect(opSchema.safeParse({ op: "set_race", id: "nord" }).success).toBe(true);
    expect(opSchema.safeParse({ op: "set_race", id: "nord", force: true }).success).toBe(false);
    expect(opSchema.safeParse({ op: "take_perk", id: "x", force: true }).success).toBe(false);
    expect(opSchema.safeParse({ op: "set_everything" }).success).toBe(false);
  });
});

describe("set_race", () => {
  it("sets the race and raises skill floors, requesting only the race", () => {
    const result = expectOk(build(), { op: "set_race", id: "nord" });

    expect(result.state.raceId).toBe("nord");
    expect(result.requestedFields).toEqual(["race"]);
    const nord = game.races.find((race) => race.id === "nord")!;
    for (const skillId of allocatableSkills) {
      expect(getStoredSkillLevel(game, result.state, skillId)).toBe(nord.startingSkills[skillId] ?? 0);
    }
  });

  it("keeps skill-point spend above the floor and raises the player level to the engine minimum", () => {
    const state = build({ raceId: "none", playerLevel: baseLevel, skillLevels: { smithing: 40 } });

    const result = expectOk(state, { op: "set_race", id: "nord" });

    expect(getStoredSkillLevel(game, result.state, "smithing")).toBe(40);
    expect(result.state.playerLevel).toBeGreaterThan(baseLevel);
    expect(result.state.playerLevel).toBe(getMinimumPlayerLevelForBuild(game, result.state));
  });

  it('clears the race with "none"', () => {
    expect(expectOk(build({ raceId: "nord" }), { op: "set_race", id: "none" }).state.raceId).toBe("none");
  });

  it("rejects an unknown race with did-you-mean", () => {
    const message = expectFail(build(), { op: "set_race", id: "nordd" });

    expect(message).toContain('race id "nordd" not found');
    expect(message).toContain("Did you mean: nord (Nord)");
  });
});

describe.each([
  ["set_birthsign", "birthsignId", game.birthsigns.find((entry) => entry.id !== "none")!.id],
  ["set_deity", "deityId", game.deities.find((entry) => entry.id !== "none")!.id],
] as const)("%s", (opName, field, validId) => {
  it("sets the field, and \"none\" clears it", () => {
    const set = expectOk(build(), { op: opName, id: validId });
    expect(set.state[field]).toBe(validId);
    expect(set.requestedFields).toEqual([opName === "set_birthsign" ? "birthsign" : "deity"]);

    expect(expectOk(set.state, { op: opName, id: "none" }).state[field]).toBe("none");
  });

  it("rejects an unknown id with did-you-mean", () => {
    const message = expectFail(build(), { op: opName, id: `${validId}x` });

    expect(message).toContain("not found");
    expect(message).toContain(`Did you mean: ${validId}`);
  });
});

describe("add_trait / remove_trait", () => {
  const traitIds = game.traits.map((trait) => trait.id).filter((id) => !game.supernatural.incompatibleTraitIds.includes(id));

  it("adds and removes a trait, requesting only that trait", () => {
    const added = expectOk(build(), { op: "add_trait", id: traitIds[0]! });
    expect(added.state.traitIds).toEqual([traitIds[0]]);
    expect(added.requestedFields).toEqual([requestedItem("traits", traitIds[0]!)]);

    const removed = expectOk(added.state, { op: "remove_trait", id: traitIds[0]! });
    expect(removed.state.traitIds).toEqual([]);
  });

  it("names the trait limit when every slot is filled", () => {
    let state = build();
    const limit = getTraitLimit(game, state);
    for (const id of traitIds.slice(0, limit)) state = expectOk(state, { op: "add_trait", id }).state;
    expect(state.traitIds).toHaveLength(limit);

    const message = expectFail(state, { op: "add_trait", id: traitIds[limit]! });

    expect(message).toContain("trait limit reached");
    expect(message).toContain(`${limit} of ${limit}`);
  });

  it("names the supernatural block", () => {
    const blocked = game.supernatural.incompatibleTraitIds[0]!;
    const state = build({ characterOptionChoices: { werewolf: "claimed" } });

    const message = expectFail(state, { op: "add_trait", id: blocked });

    expect(message).toContain("blocked by supernatural");
  });

  it("rejects a trait already selected, a trait not selected, and an unknown trait", () => {
    const state = build({ traitIds: [traitIds[0]!] });

    expect(expectFail(state, { op: "add_trait", id: traitIds[0]! })).toContain("already selected");
    expect(expectFail(state, { op: "remove_trait", id: traitIds[1]! })).toContain("is not selected");
    expect(expectFail(state, { op: "add_trait", id: "not-a-trait" })).toContain("not found");
  });
});

describe("set_major_skills / set_minor_skills", () => {
  const majorLimit = game.manifest.limits.majorSkills;

  it("replaces the list, raises floors, and raises the player level when needed", () => {
    const state = build({ raceId: "nord", majorSkillIds: ["smithing"] });
    const skills = allocatableSkills.slice(1, 1 + majorLimit);

    const result = expectOk(state, { op: "set_major_skills", skills });

    expect(result.state.majorSkillIds).toEqual(skills);
    expect(result.requestedFields).toEqual(["majorSkills"]);
    for (const skillId of skills) {
      expect(getStoredSkillLevel(game, result.state, skillId)).toBe(getSkillFloor(game, result.state, skillId));
    }
    expect(result.state.playerLevel).toBeGreaterThanOrEqual(getMinimumPlayerLevelForBuild(game, result.state));
  });

  it("clears the list with []", () => {
    const state = build({ majorSkillIds: ["smithing"] });
    expect(expectOk(state, { op: "set_major_skills", skills: [] }).state.majorSkillIds).toEqual([]);
  });

  it("names the limit", () => {
    const message = expectFail(build(), { op: "set_major_skills", skills: allocatableSkills.slice(0, majorLimit + 1) });

    expect(message).toContain(`at most ${majorLimit} major skills`);
  });

  it("names the other list and never moves a skill", () => {
    const state = build({ minorSkillIds: ["smithing"] });

    const message = expectFail(state, { op: "set_major_skills", skills: ["smithing"] });

    expect(message).toContain("remove it from minor skills first");
  });

  it("names a skill that is not eligible, a duplicate, and an unknown id", () => {
    expect(expectFail(build(), { op: "set_major_skills", skills: [nonAllocatableSkill] })).toContain(
      "not eligible as a major skill",
    );
    expect(expectFail(build(), { op: "set_minor_skills", skills: ["block", "block"] })).toContain("listed twice");
    expect(expectFail(build(), { op: "set_minor_skills", skills: ["blok"] })).toContain("Did you mean: block");
  });

  it("sets minor skills and rejects one that is a major skill", () => {
    const result = expectOk(build(), { op: "set_minor_skills", skills: ["alchemy", "speech"] });
    expect(result.state.minorSkillIds).toEqual(["alchemy", "speech"]);
    expect(result.requestedFields).toEqual(["minorSkills"]);

    const state = build({ majorSkillIds: ["alchemy"] });
    expect(expectFail(state, { op: "set_minor_skills", skills: ["alchemy"] })).toContain(
      "remove it from major skills first",
    );
  });
});

describe("set_oghma_skills", () => {
  const claimed = () =>
    expectOk(build(), {
      op: "set_option_choice",
      option: OGHMA_INFINIUM_OPTION_ID,
      choice: OGHMA_INFINIUM_CLAIMED_CHOICE,
    }).state;

  it("requires Oghma Infinium to be claimed first", () => {
    const message = expectFail(build(), { op: "set_oghma_skills", skills: ["block"] });

    expect(message).toContain("not claimed");
    expect(message).toContain(OGHMA_INFINIUM_OPTION_ID);
  });

  it("sets the Oghma skills once claimed, raising their floors", () => {
    const state = claimed();

    const result = expectOk(state, { op: "set_oghma_skills", skills: ["block"] });

    expect(result.state.oghmaSkillIds).toEqual(["block"]);
    expect(result.requestedFields).toEqual(["oghmaSkills"]);
    expect(getStoredSkillLevel(game, result.state, "block")).toBeGreaterThan(getStoredSkillLevel(game, state, "block"));
  });

  it("names the limit and a skill that is not eligible", () => {
    const limit = getOghmaSkillLimit(game);
    expect(expectFail(claimed(), { op: "set_oghma_skills", skills: allocatableSkills.slice(0, limit + 1) })).toContain(
      `at most ${limit} skills`,
    );
    expect(expectFail(claimed(), { op: "set_oghma_skills", skills: [nonAllocatableSkill] })).toContain("not eligible");
  });
});

describe("set_attribute_bonus", () => {
  it("sets the given stats and keeps the rest", () => {
    const state = build({ playerLevel: 20, attributeBonus: { health: 2, magicka: 3, stamina: 0 } });

    const result = expectOk(state, { op: "set_attribute_bonus", health: 5, stamina: 4 });

    expect(result.state.attributeBonus).toEqual({ health: 5, magicka: 3, stamina: 4 });
    expect(result.requestedFields).toEqual(["attributeBonus.health", "attributeBonus.stamina"]);
  });

  it("rejects a total over the earned choices, naming the valid range", () => {
    const state = build({ playerLevel: 10 });
    const earned = getEarnedAttributeChoices(game, state);

    const message = expectFail(state, { op: "set_attribute_bonus", health: earned + 1 });

    expect(message).toContain(`only ${earned} are earned at player level 10`);
    expect(message).toContain(`0–${earned}`);
  });

  it("rejects negatives and an empty op", () => {
    expect(expectFail(build({ playerLevel: 10 }), { op: "set_attribute_bonus", magicka: -1 })).toContain("negative");
    expect(expectFail(build(), { op: "set_attribute_bonus" })).toContain("at least one");
  });
});

describe("set_option_choice", () => {
  it("sets a regular option through the store's preserve-and-raise path", () => {
    const result = expectOk(build(), {
      op: "set_option_choice",
      option: OGHMA_INFINIUM_OPTION_ID,
      choice: OGHMA_INFINIUM_CLAIMED_CHOICE,
    });

    expect(result.state.characterOptionChoices[OGHMA_INFINIUM_OPTION_ID]).toBe(OGHMA_INFINIUM_CLAIMED_CHOICE);
    expect(result.requestedFields).toEqual([`options.${OGHMA_INFINIUM_OPTION_ID}`]);
  });

  it("claims a supernatural option and clears the other one, as the planner does", () => {
    const state = build({ characterOptionChoices: { vampire: "stage-2" } });

    const result = expectOk(state, { op: "set_option_choice", option: "werewolf", choice: "claimed" });

    expect(result.state.characterOptionChoices.werewolf).toBe("claimed");
    expect(result.state.characterOptionChoices.vampire).toBe("none");
  });

  it("rejects a choice that does not belong to the option, with did-you-mean", () => {
    const message = expectFail(build(), { op: "set_option_choice", option: "vampire", choice: "stage-9" });

    expect(message).toContain('choice "stage-9" is not a choice of option vampire');
    expect(message).toContain("Did you mean:");
    expect(message).toContain("stage-1");
  });

  it("rejects an unknown option", () => {
    expect(expectFail(build(), { op: "set_option_choice", option: "vampyre", choice: "none" })).toContain(
      "Did you mean: vampire",
    );
  });
});

describe("set_player_level", () => {
  it("sets the level", () => {
    const result = expectOk(build(), { op: "set_player_level", level: 30 });

    expect(result.state.playerLevel).toBe(30);
    expect(result.requestedFields).toEqual(["playerLevel"]);
  });

  it.each([baseLevel - 1, maxPlayerLevel + 1, 500])("rejects %d instead of clamping, naming the valid range", (level) => {
    const message = expectFail(build(), { op: "set_player_level", level });

    expect(message).toContain(`valid levels are ${baseLevel}–${maxPlayerLevel}`);
  });
});

describe("set_skill_level", () => {
  it("sets the level and lets the engine raise the player level", () => {
    const state = build({ raceId: "nord" });

    const result = expectOk(state, { op: "set_skill_level", skill: "marksman", level: 50 });

    expect(getStoredSkillLevel(game, result.state, "marksman")).toBe(50);
    expect(result.requestedFields).toEqual(["skillLevels.marksman"]);
    expect(result.state.playerLevel).toBeGreaterThan(baseLevel);
  });

  it("rejects a level above the maximum, naming the floor and maxSkillLevel", () => {
    const max = getMaxSkillLevel(game);

    const message = expectFail(build({ raceId: "nord" }), { op: "set_skill_level", skill: "marksman", level: max + 50 });

    expect(message).toContain(`would store ${max}`);
    expect(message).toContain("getSkillFloor");
    expect(message).toContain(`maxSkillLevel is ${max}`);
  });

  it("rejects a level below the floor", () => {
    const state = build({ raceId: "nord" });
    const floor = getSkillFloor(game, state, "two-handed");
    expect(floor).toBeGreaterThan(0);

    const message = expectFail(state, { op: "set_skill_level", skill: "two-handed", level: floor - 1 });

    expect(message).toContain(`would store ${floor}`);
    expect(message).toContain(`floor (getSkillFloor: race starting level plus major/minor bonus) is ${floor}`);
  });

  it("rejects a perk-tree-only skill and an unknown skill", () => {
    expect(expectFail(build(), { op: "set_skill_level", skill: nonAllocatableSkill, level: 10 })).toContain(
      "no skill level",
    );
    expect(expectFail(build(), { op: "set_skill_level", skill: "marksmann", level: 10 })).toContain(
      "Did you mean: marksman",
    );
  });
});

describe("take_perk", () => {
  it("takes a perk whose requirements are met", () => {
    const perk = plainPerks((entry) => entry.skillReq === 0)[0]!;

    const result = expectOk(build({ raceId: "nord" }), { op: "take_perk", id: perk.id });

    expect(result.state.selectedPerkIds).toEqual([perk.id]);
    expect(result.requestedFields).toEqual([requestedItem("perks", perk.id)]);
  });

  it("takes a stackable perk again, adding a second copy", () => {
    const stackable = Object.values(game.perkById)
      .filter((perk) => perk.allocation?.kind === "perkPointsBudget")
      .sort((a, b) => (a.id < b.id ? -1 : 1))[0]!;
    const allocated = allocatePerk(game, build({ raceId: "nord" }), stackable.id)!;
    // Leave perk points free for the second copy.
    const state = reconcileBuild(game, { ...allocated, playerLevel: maxPlayerLevel });
    expect(state.selectedPerkIds.filter((id) => id === stackable.id)).toHaveLength(1);

    const result = expectOk(state, { op: "take_perk", id: stackable.id });

    expect(result.state.selectedPerkIds.filter((id) => id === stackable.id)).toHaveLength(2);
    expect(result.requestedFields).toEqual([requestedItem("perks", stackable.id)]);
  });

  it("explains a skill too low with required, actual, and shortfall", () => {
    const state = build({ raceId: "nord", selectedPerkIds: ["marksman-ranged-combat-training"] });
    const required = game.perkById["marksman-eagle-eye"]!.skillReq;
    const actual = getStoredSkillLevel(game, state, "marksman");

    const message = expectFail(state, { op: "take_perk", id: "marksman-eagle-eye" });

    expect(message).toContain(`needs Marksman ${required}; it is ${actual} (${required - actual} short)`);
    expect(message).not.toContain("prerequisite");
  });

  it("explains a missing prerequisite", () => {
    const state = build({ raceId: "nord", playerLevel: 20, skillLevels: { marksman: 30 } });

    const message = expectFail(state, { op: "take_perk", id: "marksman-eagle-eye" });

    expect(message).toContain("needs prerequisite perk marksman-ranged-combat-training");
  });

  it("explains an exhausted perk-point budget", () => {
    const perks = plainPerks((entry) => entry.skillReq === 0);
    let state = build({ raceId: "nord" });
    const budget = game.mechanics.leveling.initialPerkPoints;
    for (const perk of perks.slice(0, budget)) state = expectOk(state, { op: "take_perk", id: perk.id }).state;

    const message = expectFail(state, { op: "take_perk", id: perks[budget]!.id });

    expect(message).toContain("Perk points over budget");
  });

  it("explains a player-level requirement", () => {
    const gated = Object.values(game.perkById)
      .filter(
        (perk) =>
          (perk.playerLevelReq ?? 0) > baseLevel + 1 &&
          perk.skillReq === 0 &&
          perk.prerequisites.length === 0 &&
          !SPECIAL_TREES.has(game.perkSkillIdByPerkId[perk.id] ?? ""),
      )
      .sort((a, b) => (a.id < b.id ? -1 : 1))[0]!;

    const message = expectFail(build({ raceId: "nord" }), { op: "take_perk", id: gated.id });

    expect(message).toContain(`needs player level ${gated.playerLevelReq}`);
  });

  it("rejects a perk already selected and a later rank taken out of order", () => {
    expect(
      expectFail(build({ raceId: "nord", selectedPerkIds: ["marksman-ranged-combat-training"] }), {
        op: "take_perk",
        id: "marksman-ranged-combat-training",
      }),
    ).toContain("already selected");

    const message = expectFail(build({ raceId: "nord", playerLevel: 10, skillLevels: { sneak: 30 } }), {
      op: "take_perk",
      id: "sneak-stealth-r2",
    });
    expect(message).toContain("later rank");
    expect(message).toContain("Take sneak-stealth first");
  });

  it("rejects an unknown perk id", () => {
    const message = expectFail(build(), { op: "take_perk", id: "sneak-anatomical-lor" });

    expect(message).toContain("not found");
    expect(message).toContain("Did you mean: sneak-anatomical-lore");
  });

  it("reports only violations the perk itself would cause", () => {
    const state = build({ raceId: "nord", playerLevel: baseLevel, skillLevels: { smithing: 40 } });

    const caused = violationsCausedByPerk(game, state, "marksman-eagle-eye");

    expect(caused.map((violation) => violation.type).sort()).toEqual(["prerequisite", "skill_requirement"]);
  });
});

describe("remove_perk", () => {
  it("removes the perk and, as the planner does, its dependents", () => {
    let state = build({ raceId: "nord", majorSkillIds: ["marksman"], playerLevel: 10 });
    state = allocatePerk(game, state, "marksman-eagle-eye")!;
    expect(state.selectedPerkIds).toEqual(
      expect.arrayContaining(["marksman-ranged-combat-training", "marksman-eagle-eye"]),
    );

    const result = expectOk(state, { op: "remove_perk", id: "marksman-ranged-combat-training" });

    expect(result.state.selectedPerkIds).not.toContain("marksman-ranged-combat-training");
    expect(result.state.selectedPerkIds).not.toContain("marksman-eagle-eye");
    expect(result.requestedFields).toEqual([requestedItem("perks", "marksman-ranged-combat-training")]);
  });

  it("rejects a perk that is not selected", () => {
    expect(expectFail(build(), { op: "remove_perk", id: "marksman-eagle-eye" })).toContain("is not selected");
  });
});
