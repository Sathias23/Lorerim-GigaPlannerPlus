import { describe, expect, it } from "vitest";
import {
  computeSkillPointsSpentOnSkill,
  getEffectiveSkillFloor,
  getMaxAllowedSkillLevel,
  getMaxSkillLevel,
  getSkillLevelIncreaseCost,
  getSkillsExceedingSkillLevelIncreaseLimit,
  getStoredSkillLevel,
  isAllocatableSkill,
  reconcileBuild,
  type BuildState,
} from "@/engine/buildEngine";
import { getBypassSkillIncreaseGrantBonus } from "@/lib/skillLevelGrants";
import { createTestBuildState, getTestGameData } from "@/test/helpers";
import { describeSkillCaps, getSkillGrowthCap, skillCapsSchema } from "./skillCaps";

const game = getTestGameData();
const { leveling } = game.mechanics;
const { baseLevel, maxPlayerLevel, skillLevelIncreasesPerPlayerLevel, skillLevelCosts } = leveling;
const ALLOCATABLE = game.manifest.skills.filter((skillId) => isAllocatableSkill(game, skillId));

/** The growth cap from first principles: floor (the configured baseline), exempt grants, per-level increase. */
function expectedGrowthCap(state: BuildState, skillId: string, playerLevel: number): number {
  expect(leveling.playerLevelSkillBaseline).toBe("skillFloor");
  return (
    getEffectiveSkillFloor(game, state, skillId) +
    getBypassSkillIncreaseGrantBonus(game, state, skillId) +
    skillLevelIncreasesPerPlayerLevel * (playerLevel - baseLevel)
  );
}

/** A nord build with a major and a minor skill, and an untagged skill nord starts lowest in. */
function taggedBuild(playerLevel: number, skillLevels: Record<string, number> = {}): BuildState {
  return reconcileBuild(
    game,
    createTestBuildState({
      raceId: "nord",
      majorSkillIds: ["marksman"],
      minorSkillIds: ["sneak"],
      playerLevel,
      skillLevels,
    }),
  );
}

function lowestStartUntagged(): string {
  const nord = game.races.find((race) => race.id === "nord")!;
  return ALLOCATABLE.filter((id) => id !== "marksman" && id !== "sneak").sort(
    (a, b) => (nord.startingSkills[a] ?? 0) - (nord.startingSkills[b] ?? 0),
  )[0]!;
}

describe("getSkillGrowthCap", () => {
  it("is null when the data sets no per-level increase", () => {
    const flat = {
      ...game,
      mechanics: { ...game.mechanics, leveling: { ...leveling, skillLevelIncreasesPerPlayerLevel: 0 } },
    };
    expect(getSkillGrowthCap(flat, taggedBuild(10), "marksman", 10)).toBeNull();
  });

  it("matches the engine's skill-increase limit: the cap passes, one above it is flagged", () => {
    expect(skillLevelIncreasesPerPlayerLevel).toBeGreaterThan(0);
    const probe = taggedBuild(baseLevel);
    for (const skillId of ["marksman", "sneak", lowestStartUntagged()]) {
      const playerLevel = baseLevel + 2;
      const cap = getSkillGrowthCap(game, probe, skillId, playerLevel)!;
      expect(cap).toBe(expectedGrowthCap(probe, skillId, playerLevel));

      const atCap = { ...probe, skillLevels: { ...probe.skillLevels, [skillId]: cap } };
      expect(getStoredSkillLevel(game, atCap, skillId)).toBe(cap);
      const flaggedAtCap = getSkillsExceedingSkillLevelIncreaseLimit(game, atCap, playerLevel);
      expect(flaggedAtCap.map((row) => row.skillId)).not.toContain(skillId);

      const overCap = { ...probe, skillLevels: { ...probe.skillLevels, [skillId]: cap + 1 } };
      const flagged = getSkillsExceedingSkillLevelIncreaseLimit(game, overCap, playerLevel);
      expect(flagged).toContainEqual(
        expect.objectContaining({ skillId, skillLevel: cap + 1, requiredLevel: playerLevel + 1 }),
      );
    }
  });
});

describe("describeSkillCaps", () => {
  it("reports every allocatable skill in manifest order and fits its schema", () => {
    const caps = describeSkillCaps(game, taggedBuild(10));

    expect(Object.keys(caps)).toEqual(ALLOCATABLE);
    expect(skillCapsSchema.parse(caps)).toEqual(caps);
  });

  it("derives floor, growth cap, and effective max for a major, a minor, and an untagged skill", () => {
    const playerLevel = baseLevel + 3;
    const untagged = lowestStartUntagged();
    const build = taggedBuild(playerLevel);
    const caps = describeSkillCaps(game, build);
    const maxAllowed = getMaxAllowedSkillLevel(game, build);

    for (const skillId of ["marksman", "sneak", untagged]) {
      const growthCap = expectedGrowthCap(build, skillId, playerLevel);
      expect(caps[skillId]).toMatchObject({
        level: getStoredSkillLevel(game, build, skillId),
        floor: getEffectiveSkillFloor(game, build, skillId),
        growthCap,
        effectiveMax: Math.min(growthCap, maxAllowed),
      });
    }

    const nord = game.races.find((race) => race.id === "nord")!;
    expect(caps.marksman!.floor).toBe((nord.startingSkills.marksman ?? 0) + game.mechanics.majorSkillBonus);
    expect(caps.sneak!.floor).toBe((nord.startingSkills.sneak ?? 0) + game.mechanics.minorSkillBonus);
    expect(caps[untagged]!.floor).toBe(nord.startingSkills[untagged] ?? 0);
  });

  it("prices the next level from the tier that level falls in, across the first tier boundary", () => {
    const boundary = skillLevelCosts[0]!.maxLevel;
    const skillId = lowestStartUntagged();
    const playerLevel = maxPlayerLevel;

    const below = describeSkillCaps(game, taggedBuild(playerLevel, { [skillId]: boundary - 1 }))[skillId]!;
    const at = describeSkillCaps(game, taggedBuild(playerLevel, { [skillId]: boundary }))[skillId]!;

    expect(below.level).toBe(boundary - 1);
    expect(at.level).toBe(boundary);
    expect(below.floor).toBeLessThan(boundary - 1);
    expect(below.nextLevelCost).toBe(getSkillLevelIncreaseCost(game.mechanics, boundary));
    expect(below.nextLevelCost).toBe(skillLevelCosts[0]!.cost);
    expect(at.nextLevelCost).toBe(getSkillLevelIncreaseCost(game.mechanics, boundary + 1));
    expect(at.nextLevelCost).toBe(skillLevelCosts[1]!.cost);
  });

  it("matches the engine's own skill-point charge for the next level", () => {
    const build = taggedBuild(baseLevel + 10);
    const caps = describeSkillCaps(game, build);

    for (const skillId of ALLOCATABLE) {
      const cap = caps[skillId]!;
      if (cap.nextLevelCost === null) continue;
      const raised = { ...build, skillLevels: { ...build.skillLevels, [skillId]: cap.level + 1 } };
      expect(cap.nextLevelCost).toBe(
        computeSkillPointsSpentOnSkill(game, raised, skillId) - computeSkillPointsSpentOnSkill(game, build, skillId),
      );
    }
  });

  it("has no next level for any skill at the base player level", () => {
    expect(skillLevelIncreasesPerPlayerLevel).toBeGreaterThan(0);
    const caps = describeSkillCaps(game, taggedBuild(baseLevel));

    for (const skillId of ALLOCATABLE) {
      const cap = caps[skillId]!;
      expect(cap.level, skillId).toBeGreaterThanOrEqual(cap.effectiveMax);
      expect(cap.nextLevelCost, skillId).toBeNull();
    }
  });

  it("falls back to the global cap when the data sets no per-level increase", () => {
    const flat = {
      ...game,
      mechanics: { ...game.mechanics, leveling: { ...leveling, skillLevelIncreasesPerPlayerLevel: 0 } },
    };
    const skillId = lowestStartUntagged();
    const build = taggedBuild(baseLevel + 10);
    const maxAllowed = getMaxAllowedSkillLevel(flat, build);

    const cap = describeSkillCaps(flat, build)[skillId]!;

    expect(cap.growthCap).toBeNull();
    expect(cap.effectiveMax).toBe(maxAllowed);
    expect(cap.level).toBeLessThan(maxAllowed);
    expect(cap.nextLevelCost).not.toBeNull();
    expect(cap.nextLevelCost).toBe(getSkillLevelIncreaseCost(flat.mechanics, cap.level + 1));
  });

  it("clamps the effective max, not the growth cap, to maxSkillLevel", () => {
    const maxSkill = getMaxSkillLevel(game);
    const build = taggedBuild(maxPlayerLevel, { marksman: maxSkill });
    const cap = describeSkillCaps(game, build).marksman!;

    expect(cap.level).toBe(maxSkill);
    expect(cap.growthCap).toBe(expectedGrowthCap(build, "marksman", maxPlayerLevel));
    expect(cap.growthCap!).toBeGreaterThan(maxSkill);
    expect(cap.effectiveMax).toBe(maxSkill);
    expect(cap.nextLevelCost).toBeNull();
  });
});
