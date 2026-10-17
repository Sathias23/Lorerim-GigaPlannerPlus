import * as z from "zod";
import type { GameData } from "@/data/schemas";
import {
  computeSkillPointsSpentOnSkill,
  getEffectiveSkillFloor,
  getMaxAllowedSkillLevel,
  getSkillLevelBaseline,
  getStoredSkillLevel,
  isAllocatableSkill,
  type BuildState,
} from "@/engine/buildEngine";
import { getBypassSkillIncreaseGrantBonus } from "@/lib/skillLevelGrants";

export const skillCapSchema = z.object({
  /** The stored skill level: what skill points buy (budgets.skillLevels.levels adds grants on top). */
  level: z.number(),
  /** The lowest level the skill can be set to (race start, major/minor bonus, floor-raising grants, Oghma). */
  floor: z.number(),
  /** Highest stored level the per-player-level growth limit allows; null when the data sets no such limit. */
  growthCap: z.number().nullable(),
  /** min(growthCap, budgets.skillLevels.maxAllowed): the highest stored level allowed at this player level. */
  effectiveMax: z.number(),
  /**
   * Skill points the next stored level costs; null when the skill is already at effectiveMax.
   * The price only: it does not check budgets.skillPoints.remaining, so a non-null cost does not mean the points are there.
   */
  nextLevelCost: z.number().nullable(),
});

export const skillCapsSchema = z.record(z.string(), skillCapSchema);

export type SkillCap = z.infer<typeof skillCapSchema>;
export type SkillCaps = z.infer<typeof skillCapsSchema>;

/**
 * Highest stored level of `skillId` the engine's skill-increase limit allows at
 * `playerLevel` (the rule behind `getSkillsExceedingSkillLevelIncreaseLimit`):
 * the baseline, plus grant levels exempt from the limit, plus the per-level
 * increase for every level above the base level. Null when the data sets no
 * per-level increase, so the limit does not apply. Not clamped to maxSkillLevel.
 */
export function getSkillGrowthCap(
  game: GameData,
  state: BuildState,
  skillId: string,
  playerLevel: number,
): number | null {
  const { baseLevel, playerLevelSkillBaseline, skillLevelIncreasesPerPlayerLevel } =
    game.mechanics.leveling;
  if (skillLevelIncreasesPerPlayerLevel <= 0) return null;

  const baseline = getSkillLevelBaseline(game, state, skillId, playerLevelSkillBaseline);
  const bypass = getBypassSkillIncreaseGrantBonus(game, state, skillId);
  return baseline + bypass + skillLevelIncreasesPerPlayerLevel * (playerLevel - baseLevel);
}

/** Skill points the stored level `stored + 1` adds, as the engine charges it (free floor, training, grants). */
function getNextLevelCost(game: GameData, build: BuildState, skillId: string, stored: number): number {
  const next: BuildState = { ...build, skillLevels: { ...build.skillLevels, [skillId]: stored + 1 } };
  return (
    computeSkillPointsSpentOnSkill(game, next, skillId) -
    computeSkillPointsSpentOnSkill(game, build, skillId)
  );
}

/** Per allocatable skill, in manifest order: stored level, floor, caps at the build's player level, and the next level's cost. */
export function describeSkillCaps(game: GameData, build: BuildState): SkillCaps {
  const maxAllowed = getMaxAllowedSkillLevel(game, build);
  const caps: SkillCaps = {};

  for (const skillId of game.manifest.skills) {
    if (!isAllocatableSkill(game, skillId)) continue;

    const level = getStoredSkillLevel(game, build, skillId);
    const growthCap = getSkillGrowthCap(game, build, skillId, build.playerLevel);
    const effectiveMax = growthCap === null ? maxAllowed : Math.min(growthCap, maxAllowed);
    caps[skillId] = {
      level,
      floor: getEffectiveSkillFloor(game, build, skillId),
      growthCap,
      effectiveMax,
      nextLevelCost: level >= effectiveMax ? null : getNextLevelCost(game, build, skillId, level),
    };
  }

  return caps;
}
