import { gzipSync } from "node:zlib";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { Perk } from "@/data/schemas";
import { decodeBuild, decodeBuildPackage, encodeBuild } from "@/engine/buildCodec";
import {
  allocatePerk,
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
  reconcileBuild,
  type BuildState,
} from "@/engine/buildEngine";
import { createTestBuildState, getTestAppData, getTestGameData } from "@/test/helpers";
import { DEFAULT_PLANNER_URL } from "../plannerLink";
import { connectTestClient, type TestClient, type ToolCallOutcome } from "../testClient";
import {
  EVALUATE_BUILD_TOOL,
  MAX_CODE_LENGTH,
  UNKNOWN_ID_KINDS,
  VIOLATION_TYPES,
  evaluateBuild,
  type EvaluateBuildOutput,
  type Violation,
} from "./evaluateBuild";

let harness: TestClient;

beforeAll(async () => {
  harness = await connectTestClient();
});

afterAll(async () => {
  await harness.close();
});

const game = getTestGameData();
const { baseLevel } = game.mechanics.leveling;
const SPECIAL_TREES = new Set(["destiny", "vampire", "werewolf", "lich"]);

// The shared build link from src/engine/buildCodec.crossVersion.test.ts (v2, 59 perks, level 50).
const USER_BUILD_CODE_V2 =
  "2.H4sIABLeSWoAAz2RsU6EIRCEX8VQTy4ssMBeae8T_LlCY2NyZ4yeNsZ39-M_YzEZZnZYWPhOX-lYlC5Q8kM-1ENPSmekZ6V3SOljjzylY4Wu6biVKjspPbBs6rIlLggbsq4pywoNzMcV9qWtId-QIzSzpmlOzVBQygWErNKq0qLRvi2mk1NztDfZMEBmUBvUaGWBH3iBF6HC-aU14GCtB5iAGr2K4zu-4zu-4_ei2geYIFRHBQ3ghQE059RwsDxynNW4c7MCXK1kMNQa7M6sZ2bldSznk7auvmgyLhTyRbzKJLkZY-0pY86d-19gaPiJXlf-YVv5zIVvO-1_tYa6rfbtxJ9e-cz7z5fz811JP7_NaJMC4wEAAA";

/** A v3 code built from a raw payload, so it can carry ids `encodeBuild` would drop. */
function encodeRawV3(payload: Record<string, unknown>): string {
  const json = JSON.stringify({ v: 3, mv: game.manifest.version, ...payload });
  return `3.${gzipSync(Buffer.from(json, "utf8")).toString("base64url")}`;
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
        predicate(perk)
      );
    })
    .sort((a, b) => (a.id < b.id ? -1 : 1));
}

function encodeState(overrides: Partial<BuildState>): string {
  return encodeBuild(createTestBuildState(overrides), game);
}

/** A legal build made by the engine's own force-allocation (it raises levels as needed). */
function legalFixtureCode(): string {
  let build = reconcileBuild(
    game,
    createTestBuildState({ raceId: "nord", majorSkillIds: ["heavy-armor", "block"], playerLevel: 10 }),
  );
  for (const perkId of ["block-improved-blocking", "heavy-armor-juggernaut"]) {
    build = allocatePerk(game, build, perkId) ?? build;
  }
  return encodeBuild(build, game);
}

function overBudgetFixtureCode(): string {
  const count = game.mechanics.leveling.initialPerkPoints + 2;
  const perks = plainPerks((perk) => perk.skillReq === 0).slice(0, count);
  expect(perks).toHaveLength(count);
  return encodeState({
    raceId: "nord",
    playerLevel: baseLevel,
    selectedPerkIds: perks.map((perk) => perk.id),
  });
}

function lowLevelFixture(): { code: string; gatedPerk: Perk; cappedSkill: string } {
  const gatedPerk = Object.values(game.perkById)
    .filter(
      (perk) =>
        (perk.playerLevelReq ?? 0) > baseLevel + 1 &&
        perk.skillReq === 0 &&
        perk.prerequisites.length === 0 &&
        !SPECIAL_TREES.has(game.perkSkillIdByPerkId[perk.id] ?? ""),
    )
    .sort((a, b) => (a.id < b.id ? -1 : 1))[0]!;
  const cappedSkill = "smithing";
  const probe = createTestBuildState({ playerLevel: baseLevel });
  return {
    code: encodeState({
      raceId: "nord",
      playerLevel: baseLevel,
      skillLevels: { [cappedSkill]: getMaxAllowedSkillLevel(game, probe) + 5 },
      selectedPerkIds: [gatedPerk.id],
    }),
    gatedPerk,
    cappedSkill,
  };
}

async function evaluateOk(code: string): Promise<EvaluateBuildOutput> {
  const result = await harness.call(EVALUATE_BUILD_TOOL, { code });
  expect(result.isError, result.text).toBe(false);
  expect(JSON.parse(result.text)).toEqual(result.structured);
  return result.structured as unknown as EvaluateBuildOutput;
}

async function evaluateError(args: Record<string, unknown>): Promise<ToolCallOutcome> {
  const result = await harness.call(EVALUATE_BUILD_TOOL, args);
  expect(result.isError).toBe(true);
  expect(result.structured).toBeUndefined();
  return result;
}

function violationsOf(output: EvaluateBuildOutput, type: Violation["type"]): Violation[] {
  return output.violations.filter((violation) => violation.type === type);
}

/** Every budget number equals the engine's value for `decodeBuild(code)` (or the given build). */
function expectEngineParity(
  code: string,
  output: EvaluateBuildOutput,
  build: BuildState = decodeBuild(code, game),
): void {
  const computed = computeBuild(game, build);
  const { budgets } = output;

  expect(output.playerLevel).toBe(build.playerLevel);
  expect(output.minimumPlayerLevel).toBe(computed.minimumPlayerLevel);
  expect(budgets.perkPoints).toEqual({
    used: computed.perkPointsSpent,
    available: getEarnedPerkPoints(game, build),
    remaining: computed.perkPointsRemaining,
  });
  expect(budgets.destinyPerkPoints).toEqual({
    used: computeDestinyPerkPointsSpent(game, build),
    available: getEarnedDestinyPerkPoints(game, build),
    remaining: computed.destinyPerkPointsRemaining,
  });
  expect(budgets.skillPoints).toEqual({
    used: computed.skillPointsSpent,
    available: getEarnedSkillPoints(game, build),
    remaining: computed.skillPointsRemaining,
  });
  expect(budgets.trainingLevels).toEqual({
    used: computed.trainingLevelsUsed,
    available: getEarnedTrainingLevels(game, build),
    remaining: computed.trainingLevelsRemaining,
  });
  expect(budgets.attributeChoices.used).toBe(getUsedAttributeChoices(build));
  expect(budgets.attributeChoices.available).toBe(getEarnedAttributeChoices(game, build));
  expect(budgets.attributeChoices.remaining).toBe(getRemainingAttributePoints(game, build));
  expect(budgets.skillLevels).toEqual({
    maxAllowed: getMaxAllowedSkillLevel(game, build),
    levels: computed.skillLevels,
  });
  expect(output.build.perks.map((perk) => perk.id)).toEqual(build.selectedPerkIds);
}

describe(`${EVALUATE_BUILD_TOOL} on a legal build`, () => {
  it("reports legal with no violations or unknown ids and engine budgets", async () => {
    const code = legalFixtureCode();

    const output = await evaluateOk(code);

    expect(output.legal).toBe(true);
    expect(output.violations).toEqual([]);
    expect(output.unknownIds).toEqual([]);
    expect(output.notes).toEqual([]);
    expect(output.code).toBe(code);
    expect(output.dataVersion).toBe(game.manifest.version);
    expect(output.codeDataVersion).toBe(game.manifest.version);
    expectEngineParity(code, output);
  });

  it("links the code to the deployed planner", async () => {
    const code = legalFixtureCode();

    const output = await evaluateOk(`  ${code}
`);

    const url = new URL(output.plannerUrl);
    expect(`${url.origin}${url.pathname}`).toBe(`${DEFAULT_PLANNER_URL}/planner`);
    expect(url.searchParams.get("build")).toBe(code);
  });

  it("links to a configured planner base without doubling the slash", async () => {
    const code = legalFixtureCode();
    const local = await connectTestClient(getTestAppData(), {
      plannerBaseUrl: "http://localhost:5173/Lorerim-GigaPlannerPlus/",
    });
    try {
      const result = await local.call(EVALUATE_BUILD_TOOL, { code });

      const { plannerUrl } = result.structured as EvaluateBuildOutput;
      expect(plannerUrl.startsWith("http://localhost:5173/Lorerim-GigaPlannerPlus/planner?build=")).toBe(true);
      expect(new URL(plannerUrl).searchParams.get("build")).toBe(code);
    } finally {
      await local.close();
    }
  });

  it("echoes the code trimmed, never re-encoded", async () => {
    const code = legalFixtureCode();

    const output = await evaluateOk(`  ${code}\n`);

    expect(output.code).toBe(code);
  });

  it("describes what the build contains, with names", async () => {
    const code = encodeState({
      raceId: "nord",
      majorSkillIds: ["block"],
      minorSkillIds: ["one-handed"],
      playerLevel: 5,
      skillLevels: { block: 30 },
      selectedPerkIds: ["block-improved-blocking"],
      characterOptionChoices: { vampire: "stage-2" },
    });
    const labels = getTestAppData().ui.labels.panels["character-options"]!;
    const vampire = game.characterOptions.find((option) => option.id === "vampire")!;

    const { build } = await evaluateOk(code);

    expect(build.playerLevel).toBe(5);
    expect(build.race).toEqual({ id: "nord", name: "Nord" });
    expect(build.majorSkills).toEqual([{ id: "block", name: "Block" }]);
    expect(build.minorSkills).toEqual([{ id: "one-handed", name: "One-Handed" }]);
    expect(build.perks).toEqual([
      { id: "block-improved-blocking", name: game.perkById["block-improved-blocking"]!.name },
    ]);
    const stage2 = vampire.choices.find((choice) => choice.id === "stage-2")!;
    expect(build.options).toEqual([
      {
        option: { id: "vampire", name: labels[vampire.titleLabel] ?? vampire.titleLabel },
        choice: { id: "stage-2", label: labels[stage2.label] ?? stage2.label },
      },
    ]);
  });
});

describe(`${EVALUATE_BUILD_TOOL} violations`, () => {
  it("reports a perk-point overrun with used, available, and shortfall", async () => {
    const code = overBudgetFixtureCode();

    const output = await evaluateOk(code);

    expect(output.legal).toBe(false);
    const [row] = violationsOf(output, "perk_points");
    const { perkPoints } = output.budgets;
    expect(perkPoints.remaining).toBeLessThan(0);
    expect(row).toMatchObject({
      entity: null,
      required: perkPoints.used,
      actual: perkPoints.available,
      shortfall: perkPoints.used - perkPoints.available,
    });
    expect(row!.shortfall).toBe(-perkPoints.remaining);
    expectEngineParity(code, output);
  });

  /** A budget row's numbers are the budget's own engine numbers. */
  function expectBudgetRow(row: Violation | undefined, budget: { used: number; available: number; remaining: number }) {
    expect(budget.remaining).toBeLessThan(0);
    expect(row).toMatchObject({
      entity: null,
      required: budget.used,
      actual: budget.available,
      shortfall: -budget.remaining,
    });
  }

  it("reports a skill-point overrun", async () => {
    const code = encodeState({ raceId: "nord", playerLevel: baseLevel, skillLevels: { smithing: 40 } });

    const output = await evaluateOk(code);

    expectBudgetRow(violationsOf(output, "skill_points")[0], output.budgets.skillPoints);
    expectEngineParity(code, output);
  });

  it("reports a training overrun with the player level training needs", async () => {
    const code = encodeState({
      raceId: "nord",
      playerLevel: baseLevel,
      skillTrainingRanges: { smithing: [getEarnedTrainingLevels(game, createTestBuildState()) + 5] },
    });
    const training = computeBuild(game, decodeBuild(code, game)).playerLevelWarnings.training;
    expect(training).not.toBeNull();

    const output = await evaluateOk(code);

    const [row] = violationsOf(output, "training_levels");
    expectBudgetRow(row, output.budgets.trainingLevels);
    expect(row!.message).toContain(`Training needs player level ${training!.requiredLevel}`);
    expectEngineParity(code, output);
  });

  it("reports a Destiny perk-point overrun naming the perks over budget", async () => {
    const probe = createTestBuildState({ playerLevel: baseLevel });
    const count = getEarnedDestinyPerkPoints(game, probe) + 2;
    const destinyPerks = (game.perkTrees.destiny?.perks ?? []).filter(
      (perk) => perk.costsPerkPoint && perk.prerequisites.length === 0,
    );
    expect(destinyPerks.length).toBeGreaterThanOrEqual(count);
    const code = encodeState({
      raceId: "nord",
      playerLevel: baseLevel,
      selectedPerkIds: destinyPerks.slice(0, count).map((perk) => perk.id),
    });
    const overBudget = computeBuild(game, decodeBuild(code, game)).playerLevelWarnings.destinyPerksOverBudget;
    expect(overBudget.length).toBeGreaterThan(0);

    const output = await evaluateOk(code);

    const [row] = violationsOf(output, "destiny_perk_points");
    expectBudgetRow(row, output.budgets.destinyPerkPoints);
    for (const perk of overBudget) {
      expect(row!.message).toContain(perk.id);
      expect(row!.message).toContain(perk.name);
    }
    expectEngineParity(code, output);
  });

  it("does not claim the engine's minimum covers every budget", async () => {
    const output = await evaluateOk(overBudgetFixtureCode());

    const [row] = violationsOf(output, "perk_points");
    expect(row!.message).toContain(`the engine's minimum for this build is ${output.minimumPlayerLevel}`);
    expect(row!.message).not.toContain("covers every budget");
  });

  it("names the perk, skill, required and actual level for an unmet skill requirement", async () => {
    const perk = game.perkById["sneak-anatomical-lore"]!;
    const skillId = "sneak";
    const code = encodeState({
      raceId: "nord",
      playerLevel: 50,
      selectedPerkIds: [perk.id, ...perk.prerequisites],
    });
    const computed = computeBuild(game, decodeBuild(code, game));
    const actual = computed.skillLevels[skillId]!;
    expect(actual).toBeLessThan(perk.skillReq);

    const output = await evaluateOk(code);

    expect(violationsOf(output, "skill_requirement")).toContainEqual(
      expect.objectContaining({
        entity: { kind: "perk", id: perk.id, name: perk.name },
        skill: { id: skillId, name: game.skills.find((skill) => skill.id === skillId)!.name },
        required: perk.skillReq,
        actual,
        shortfall: perk.skillReq - actual,
      }),
    );
  });

  it("reports player-level gates, the skill cap, and the engine's minimum player level", async () => {
    const { code, gatedPerk, cappedSkill } = lowLevelFixture();
    const build = decodeBuild(code, game);
    const computed = computeBuild(game, build);

    const output = await evaluateOk(code);

    expect(violationsOf(output, "player_level_requirement")).toEqual([
      expect.objectContaining({
        entity: { kind: "perk", id: gatedPerk.id, name: gatedPerk.name },
        required: gatedPerk.playerLevelReq,
        actual: baseLevel,
        shortfall: gatedPerk.playerLevelReq! - baseLevel,
      }),
    ]);
    const cap = computed.playerLevelWarnings.skills.find((entry) => entry.skillId === cappedSkill)!;
    expect(violationsOf(output, "skill_level_cap")).toContainEqual(
      expect.objectContaining({
        entity: { kind: "skill", id: cappedSkill, name: "Smithing" },
        required: cap.maxAllowed,
        actual: cap.skillLevel,
        shortfall: cap.skillLevel - cap.maxAllowed,
      }),
    );
    expect(violationsOf(output, "skill_increase_limit").length).toBe(
      computed.playerLevelWarnings.skillIncreases.length,
    );
    expect(output.minimumPlayerLevel).toBe(computed.minimumPlayerLevel);
    expect(output.minimumPlayerLevel).toBeGreaterThan(output.playerLevel);
    expectEngineParity(code, output);
  });

  it("reports attribute choices beyond what the player level earns", async () => {
    const code = encodeState({
      raceId: "nord",
      playerLevel: 3,
      attributeBonus: { health: 3, magicka: 1, stamina: 0 },
    });

    const output = await evaluateOk(code);

    const [row] = violationsOf(output, "attribute_choices");
    expect(row).toMatchObject({
      entity: null,
      required: 4,
      actual: getEarnedAttributeChoices(game, decodeBuild(code, game)),
    });
    expect(row!.shortfall).toBe(
      computeBuild(game, decodeBuild(code, game)).playerLevelWarnings.attributeChoicesOverBy,
    );
  });

  it("lists the missing prerequisite perks by id and name", async () => {
    const perk = game.perkById["sneak-anatomical-lore"]!;
    expect(perk.prerequisites.length).toBeGreaterThan(0);
    const code = encodeState({
      raceId: "nord",
      playerLevel: 50,
      skillLevels: { sneak: perk.skillReq },
      selectedPerkIds: [perk.id],
    });

    const output = await evaluateOk(code);

    expect(violationsOf(output, "prerequisite")).toEqual([
      expect.objectContaining({
        entity: { kind: "perk", id: perk.id, name: perk.name },
        skill: { id: "sneak", name: "Sneak" },
        missing: perk.prerequisites.map((id) => ({ id, name: game.perkById[id]!.name })),
        shortfall: perk.prerequisites.length,
      }),
    ]);
    expect(output.legal).toBe(false);
  });

  it("names every prerequisitesAny option when none is taken", async () => {
    const perk = Object.values(game.perkById).find(
      (entry) => (entry.prerequisitesAny ?? []).length > 0 && entry.prerequisites.length === 0,
    )!;
    const code = encodeState({ raceId: "nord", playerLevel: 100, selectedPerkIds: [perk.id] });

    const output = await evaluateOk(code);

    const [row] = violationsOf(output, "prerequisite");
    expect(row!.missing).toEqual(
      perk.prerequisitesAny!.map((id) => ({ id, name: game.perkById[id]!.name })),
    );
    expect(row!.shortfall).toBe(1);
    expect(row!.message).toContain("one of");
  });

  it("returns every violation, in fixed category order then engine order", async () => {
    const decoded = decodeBuild(USER_BUILD_CODE_V2, game);
    const code = encodeBuild({ ...decoded, playerLevel: baseLevel }, game);
    const computed = computeBuild(game, decodeBuild(code, game));

    const output = await evaluateOk(code);

    const order = output.violations.map((violation) => VIOLATION_TYPES.indexOf(violation.type));
    expect(order).toEqual([...order].sort((a, b) => a - b));
    expect(violationsOf(output, "skill_requirement").map((row) => row.entity?.id)).toEqual(
      computed.skillReqConflicts.map((conflict) => conflict.id),
    );
    expect(violationsOf(output, "skill_level_cap").map((row) => row.entity?.id)).toEqual(
      computed.playerLevelWarnings.skills.map((skill) => skill.skillId),
    );
    expect(violationsOf(output, "player_level_requirement").map((row) => row.entity?.id)).toEqual(
      computed.playerLevelWarnings.perks.map((perk) => perk.id),
    );
    for (const violation of output.violations) {
      expect(violation.shortfall, violation.message).toBeGreaterThan(0);
    }
  });

  it("keeps the widest realistic illegal build under 10k tokens", async () => {
    const decoded = decodeBuild(USER_BUILD_CODE_V2, game);
    const code = encodeBuild({ ...decoded, playerLevel: baseLevel }, game);

    const result = await harness.call(EVALUATE_BUILD_TOOL, { code });

    expect(result.isError).toBe(false);
    expect((result.structured as unknown as EvaluateBuildOutput).violations.length).toBeGreaterThan(20);
    expect(result.text.length / 4).toBeLessThan(10_000);
  });
});

describe(`${EVALUATE_BUILD_TOOL} unknown ids`, () => {
  const code = encodeRawV3({
    lv: 20,
    r: "nordd",
    s: "the-atronachh",
    b: "akatoshh",
    t: ["not-a-real-trait"],
    M: ["blok"],
    // "blok" repeats here and must be reported once.
    l: [
      ["blok", 30],
      ["smithingg", 20],
    ],
    tr: [["alchemyy", 0, 2]],
    co: [
      ["vampire", "stage-9"],
      ["not-an-option", "x"],
    ],
    p: ["block-improved-blocking", "sneak-anatomical-lor"],
  });

  it("lists every unknown id with did-you-mean, in kind order, and is not legal", async () => {
    const output = await evaluateOk(code);

    expect(output.legal).toBe(false);
    expect(output.unknownIds.map((row) => [row.kind, row.id])).toEqual([
      ["race", "nordd"],
      ["birthsign", "the-atronachh"],
      ["deity", "akatoshh"],
      ["trait", "not-a-real-trait"],
      ["skill", "blok"],
      ["skill", "smithingg"],
      ["skill", "alchemyy"],
      ["option", "not-an-option"],
      ["choice", "stage-9"],
      ["perk", "sneak-anatomical-lor"],
    ]);
    const kinds = output.unknownIds.map((row) => UNKNOWN_ID_KINDS.indexOf(row.kind));
    expect(kinds).toEqual([...kinds].sort((a, b) => a - b));

    const byId = new Map(output.unknownIds.map((row) => [row.id, row]));
    expect(byId.get("nordd")!.suggestions[0]).toEqual({ id: "nord", name: "Nord" });
    expect(byId.get("blok")!.suggestions.map((ref) => ref.id)).toContain("block");
    expect(output.unknownIds.filter((row) => row.id === "blok")).toHaveLength(1);
    expect(byId.get("smithingg")!.suggestions[0]!.id).toBe("smithing");
    expect(byId.get("alchemyy")!.suggestions[0]!.id).toBe("alchemy");
    expect(byId.get("akatoshh")!.suggestions[0]!.id).toBe("akatosh");
    expect(byId.get("sneak-anatomical-lor")!.suggestions[0]!.id).toBe("sneak-anatomical-lore");
    expect(byId.get("stage-9")!.option?.id).toBe("vampire");
    expect(output.notes.join(" ")).toContain("drops unknown ids");
  });

  it("evaluates the rest of the build as the planner opens it", async () => {
    const output = await evaluateOk(code);

    expect(output.build.race).toEqual({ id: "none", name: "None" });
    expect(output.build.perks.map((perk) => perk.id)).toEqual(["block-improved-blocking"]);
    expect(output.build.options).toEqual([]);
    expectEngineParity(code, output);
  });

  it("flags nothing for a clean code", async () => {
    const output = await evaluateOk(legalFixtureCode());

    expect(output.unknownIds).toEqual([]);
  });

  it("marks a code made with another data version", async () => {
    const other = encodeRawV3({ mv: "0.0.0.1", lv: 5, r: "nord" });

    const output = await evaluateOk(other);

    expect(output.codeDataVersion).toBe("0.0.0.1");
    expect(output.notes.join(" ")).toContain("0.0.0.1");
  });
});

describe(`${EVALUATE_BUILD_TOOL} on known ids the planner drops`, () => {
  it("adds no drop note for a real planner code", async () => {
    const output = await evaluateOk(USER_BUILD_CODE_V2);

    expect(output.notes.join(" ")).not.toContain("also drops");
    expect(output.legal).toBe(true);
  });

  it("names a major skill past the limit and is not legal", async () => {
    const limit = game.manifest.limits.majorSkills;
    const majors = game.skills
      .map((skill) => skill.id)
      .filter((id) => !game.manifest.nonAllocatableSkills.includes(id))
      .slice(0, limit + 1);
    expect(majors).toHaveLength(limit + 1);
    const dropped = majors[limit]!;
    const code = encodeRawV3({ lv: 20, r: "nord", M: majors });

    const output = await evaluateOk(code);

    expect(output.build.majorSkills.map((skill) => skill.id)).toEqual(majors.slice(0, limit));
    expect(output.violations).toEqual([]);
    expect(output.unknownIds).toEqual([]);
    const note = output.notes.find((entry) => entry.includes("also drops"));
    expect(note).toContain(`skill ${dropped}`);
    expect(output.legal).toBe(false);
  });
});

describe(`${EVALUATE_BUILD_TOOL} on a multi-variant package`, () => {
  it("evaluates the active variant and names the variant count", async () => {
    const code = encodeRawV3({
      bn: "Package",
      lv: 5,
      r: "nord",
      ms: [["Level 12", { lv: 12, r: "breton", M: ["block"], l: [["block", 40]] }]],
      av: 1,
    });
    const active = decodeBuildPackage(code, game).shared!.milestones[0]!.build;

    const output = await evaluateOk(code);

    expect(output.build.race?.id).toBe("breton");
    expect(output.playerLevel).toBe(12);
    expect(output.notes[0]).toContain("2 variants");
    expect(output.notes[0]).toContain("Level 12");
    expectEngineParity(code, output, active);
  });
});

describe(`${EVALUATE_BUILD_TOOL} on input that is not a share code`, () => {
  const legal = legalFixtureCode();

  it.each([
    ["plain text", "hello"],
    ["corrupt base64", "3.!!!!not-base64!!!!"],
    ["corrupt gzip", "3.AAAAAAAAAAAA"],
    ["a planner URL", `https://sathias23.github.io/Lorerim-GigaPlannerPlus/?build=${legal}`],
    ["whitespace", "   "],
  ])("returns an actionable isError for %s", async (_label, code) => {
    const result = await evaluateError({ code });

    expect(result.text).toContain("Could not decode");
    expect(result.text).toContain('"3."');
    expect(result.text).toContain("build=");
  });

  it("returns the same error from the pure function", () => {
    const result = evaluateBuild(getTestAppData(), "hello");

    expect(result.ok).toBe(false);
  });
});

describe(`${EVALUATE_BUILD_TOOL} input validation`, () => {
  it.each([
    [{}],
    [{ code: "" }],
    [{ code: legalFixtureCode(), response_format: "detailed" }],
    [{ code: "3.".padEnd(MAX_CODE_LENGTH + 1, "A") }],
    [{ code: 42 }],
  ])("rejects %j before decoding", async (args) => {
    const result = await evaluateError(args);

    expect(result.text).toContain("Input validation error");
  });
});
