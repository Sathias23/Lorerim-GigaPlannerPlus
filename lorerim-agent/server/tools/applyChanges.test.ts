import { gzipSync } from "node:zlib";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { decodeBuild, decodeBuildPackage, encodeBuild } from "@/engine/buildCodec";
import {
  allocatePerk,
  applySkillTrainingRangeChange,
  areBuildStatesEqual,
  createInitialBuildState,
  getEarnedAttributeChoices,
  getMaxSkillLevel,
  getStoredSkillLevel,
  migrateBuildState,
  reconcileBuild,
  type BuildState,
} from "@/engine/buildEngine";
import { getTrainingTierDefinitions } from "@/lib/skillTraining";
import { createTestBuildState, getTestAppData, getTestGameData } from "@/test/helpers";
import { diffBuildStates, isListField } from "../diff";
import { MAX_OPS, applyOp, type Op } from "../ops";
import { DEFAULT_PLANNER_URL } from "../plannerLink";
import { connectTestClient, type TestClient, type ToolCallOutcome } from "../testClient";
import {
  APPLY_CHANGES_TOOL,
  applyChanges,
  type AppliedDiffRow,
  type ApplyChangesOutput,
} from "./applyChanges";
import { evaluateBuild, getActiveBuild } from "./evaluateBuild";

let harness: TestClient;

beforeAll(async () => {
  harness = await connectTestClient();
});

afterAll(async () => {
  await harness.close();
});

const appData = getTestAppData();
const game = getTestGameData();
const { baseLevel, maxPlayerLevel } = game.mechanics.leveling;

// The shared build link from src/engine/buildCodec.crossVersion.test.ts (v2, 59 perks, level 50).
const USER_BUILD_CODE_V2 =
  "2.H4sIABLeSWoAAz2RsU6EIRCEX8VQTy4ssMBeae8T_LlCY2NyZ4yeNsZ39-M_YzEZZnZYWPhOX-lYlC5Q8kM-1ENPSmekZ6V3SOljjzylY4Wu6biVKjspPbBs6rIlLggbsq4pywoNzMcV9qWtId-QIzSzpmlOzVBQygWErNKq0qLRvi2mk1NztDfZMEBmUBvUaGWBH3iBF6HC-aU14GCtB5iAGr2K4zu-4zu-4_ei2geYIFRHBQ3ghQE059RwsDxynNW4c7MCXK1kMNQa7M6sZ2bldSznk7auvmgyLhTyRbzKJLkZY-0pY86d-19gaPiJXlf-YVv5zIVvO-1_tYa6rfbtxJ9e-cz7z5fz811JP7_NaJMC4wEAAA";

/** A v3 code built from a raw payload, so it can carry packages and ids `encodeBuild` would drop. */
function encodeRawV3(payload: Record<string, unknown>): string {
  const json = JSON.stringify({ v: 3, mv: game.manifest.version, ...payload });
  return `3.${gzipSync(Buffer.from(json, "utf8")).toString("base64url")}`;
}

/** A legal code holding a prerequisite chain: Ranged Combat Training → Eagle Eye. */
function prerequisiteChainCode(): string {
  const state = reconcileBuild(
    game,
    createTestBuildState({ raceId: "nord", majorSkillIds: ["marksman"], playerLevel: 10 }),
  );
  return encodeBuild(allocatePerk(game, state, "marksman-eagle-eye")!, game);
}

const STEALTH_ARCHER_OPS: Op[] = [
  { op: "set_race", id: "nord" },
  { op: "set_major_skills", skills: ["marksman", "sneak", "evasion"] },
  { op: "set_skill_level", skill: "marksman", level: 30 },
  { op: "set_player_level", level: 12 },
  { op: "take_perk", id: "marksman-ranged-combat-training" },
  { op: "take_perk", id: "marksman-eagle-eye" },
];

/** The build the planner opens from `code` (or a fresh one), as the tool opens it. */
function openedBuild(code?: string): BuildState {
  if (code === undefined) return reconcileBuild(game, migrateBuildState(createInitialBuildState()));
  return reconcileBuild(game, migrateBuildState(getActiveBuild(decodeBuildPackage(code, game))));
}

/** Replays `ops` with `applyOp` alone, independent of the tool. */
function replay(code: string | undefined, ops: readonly Op[]): BuildState {
  let state = openedBuild(code);
  for (const op of ops) {
    const result = applyOp(appData, state, op);
    if (!result.ok) throw new Error(result.message);
    state = result.state;
  }
  return state;
}

async function applyOk(args: Record<string, unknown>): Promise<ApplyChangesOutput> {
  const result = await harness.call(APPLY_CHANGES_TOOL, args);
  expect(result.isError, result.text).toBe(false);
  expect(JSON.parse(result.text)).toEqual(result.structured);
  return result.structured as unknown as ApplyChangesOutput;
}

async function applyError(args: Record<string, unknown>): Promise<ToolCallOutcome> {
  const result = await harness.call(APPLY_CHANGES_TOOL, args);
  expect(result.isError).toBe(true);
  expect(result.structured).toBeUndefined();
  return result;
}

/** What an op targets, independently of `ops.ts`: whole fields, or single list items. */
function targetOf(op: Op): { fields: string[]; items: Array<[string, string]> } {
  switch (op.op) {
    case "set_race":
      return { fields: ["race"], items: [] };
    case "set_birthsign":
      return { fields: ["birthsign"], items: [] };
    case "set_deity":
      return { fields: ["deity"], items: [] };
    case "add_trait":
    case "remove_trait":
      return { fields: [], items: [["traits", op.id]] };
    case "set_major_skills":
      return { fields: ["majorSkills"], items: [] };
    case "set_minor_skills":
      return { fields: ["minorSkills"], items: [] };
    case "set_oghma_skills":
      return { fields: ["oghmaSkills"], items: [] };
    case "set_attribute_bonus":
      return {
        fields: (["health", "magicka", "stamina"] as const)
          .filter((stat) => op[stat] !== undefined)
          .map((stat) => `attributeBonus.${stat}`),
        items: [],
      };
    case "set_option_choice":
      return { fields: [`options.${op.option}`], items: [] };
    case "set_player_level":
      return { fields: ["playerLevel"], items: [] };
    case "set_skill_level":
      return { fields: [`skillLevels.${op.skill}`], items: [] };
    case "take_perk":
    case "remove_perk":
      return { fields: [], items: [["perks", op.id]] };
  }
}

/** A row is `requested` exactly when it changes its op's own target; every other row is `engine`. */
function expectCausesMatchTargets(ops: readonly Op[], diff: readonly AppliedDiffRow[]): void {
  for (const row of diff) {
    if (row.stage !== "op") {
      expect(row.op).toBeNull();
      expect(row.cause).toBe("engine");
      continue;
    }
    const target = targetOf(ops[row.op!]!);
    const itemIds = [...(row.added ?? []), ...(row.removed ?? [])].map((ref) => ref.id);
    const isTargetItem = (id: string) =>
      target.items.some(([field, itemId]) => field === row.field && itemId === id);
    if (target.fields.includes(row.field)) {
      expect(row.cause, row.message).toBe("requested");
    } else if (isListField(row.field) && itemIds.length > 0 && itemIds.every(isTargetItem)) {
      expect(row.cause, row.message).toBe("requested");
    } else {
      expect(row.cause, row.message).toBe("engine");
      expect(itemIds.some(isTargetItem), row.message).toBe(false);
    }
  }
}

/** Every net change from the opened build to the final build appears in the diff. */
function expectDiffCoversChanges(before: BuildState, after: BuildState, diff: readonly AppliedDiffRow[]): void {
  const net = diffBuildStates(appData, before, after);
  const fields = new Set(diff.map((row) => row.field));
  for (const change of net) {
    expect(fields.has(change.field), change.message).toBe(true);
    for (const ref of [...(change.added ?? [])]) {
      expect(diff.some((row) => row.field === change.field && row.added?.some((item) => item.id === ref.id))).toBe(true);
    }
    for (const ref of [...(change.removed ?? [])]) {
      expect(diff.some((row) => row.field === change.field && row.removed?.some((item) => item.id === ref.id))).toBe(true);
    }
  }
}

/** The returned code decodes to the replayed build, and its evaluation is `evaluateBuild(code)`. */
function expectRoundTrip(output: ApplyChangesOutput, code: string | undefined, ops: readonly Op[]): BuildState {
  const replayed = replay(code, ops);
  const final = decodeBuild(output.code, game);
  expect(areBuildStatesEqual(final, decodeBuild(encodeBuild(replayed, game), game))).toBe(true);
  if (!output.diff.some((row) => row.stage === "encode")) {
    // Nothing changed on encode, so the decoded code is the replayed build itself (up to list order).
    expect(diffBuildStates(appData, replayed, final)).toEqual([]);
  }
  const evaluated = evaluateBuild(appData, output.code);
  expect(evaluated.ok).toBe(true);
  expect(output.evaluation).toEqual(evaluated.ok ? evaluated.output : null);
  expect(output.dataVersion).toBe(game.manifest.version);
  return final;
}

describe(`${APPLY_CHANGES_TOOL} on a fresh build`, () => {
  it("builds from nothing: requested rows, engine level raises, the new code, and its evaluation", async () => {
    const output = await applyOk({ ops: STEALTH_ARCHER_OPS });

    expect(output.baseCode).toBeNull();
    expect(output.code.startsWith("3.")).toBe(true);
    expect(output.notes).toEqual([]);
    expect(output.evaluation.legal).toBe(true);
    expect(output.evaluation.build.race?.id).toBe("nord");
    expect(output.evaluation.build.perks.map((perk) => perk.id).sort()).toEqual([
      "marksman-eagle-eye",
      "marksman-ranged-combat-training",
    ]);

    expectCausesMatchTargets(STEALTH_ARCHER_OPS, output.diff);
    for (const row of output.diff.filter((entry) => entry.cause === "engine")) {
      expect(row.field === "playerLevel" || row.field.startsWith("skillLevels."), row.message).toBe(true);
    }
    const final = expectRoundTrip(output, undefined, STEALTH_ARCHER_OPS);
    expectDiffCoversChanges(openedBuild(), final, output.diff);
    expect(output.diff.filter((row) => row.cause === "requested").map((row) => row.op)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it("links the new code to the deployed planner, at the top level and in its evaluation", async () => {
    const output = await applyOk({ ops: STEALTH_ARCHER_OPS });

    const url = new URL(output.plannerUrl);
    expect(`${url.origin}${url.pathname}`).toBe(`${DEFAULT_PLANNER_URL}/planner`);
    expect(url.searchParams.get("build")).toBe(output.code);
    expect(output.evaluation.plannerUrl).toBe(output.plannerUrl);
  });

  it("links to a configured planner base", async () => {
    const local = await connectTestClient(appData, { plannerBaseUrl: "http://localhost:5173/Lorerim-GigaPlannerPlus" });
    try {
      const result = await local.call(APPLY_CHANGES_TOOL, { ops: STEALTH_ARCHER_OPS });

      const output = result.structured as ApplyChangesOutput;
      expect(output.plannerUrl.startsWith("http://localhost:5173/Lorerim-GigaPlannerPlus/planner?build=")).toBe(true);
      expect(new URL(output.plannerUrl).searchParams.get("build")).toBe(output.code);
      expect(output.evaluation.plannerUrl).toBe(output.plannerUrl);
    } finally {
      await local.close();
    }
  });

  it("ties the player-level raise from a skill level to that op as an engine row", async () => {
    const ops: Op[] = [{ op: "set_skill_level", skill: "marksman", level: 60 }];

    const output = await applyOk({ ops });

    const final = decodeBuild(output.code, game);
    expect(output.diff).toContainEqual(
      expect.objectContaining({
        op: 0,
        stage: "op",
        cause: "engine",
        field: "playerLevel",
        from: baseLevel,
        to: final.playerLevel,
      }),
    );
    expect(output.diff).toContainEqual(
      expect.objectContaining({ op: 0, cause: "requested", field: "skillLevels.marksman", to: 60 }),
    );
    expect(final.playerLevel).toBeGreaterThan(baseLevel);
    expectRoundTrip(output, undefined, ops);
  });

  it("covers every op in one batch and still round-trips", async () => {
    const trait = game.traits.find((entry) => !game.supernatural.incompatibleTraitIds.includes(entry.id))!;
    const ops: Op[] = [
      { op: "set_race", id: "breton" },
      { op: "set_birthsign", id: "lord" },
      { op: "set_deity", id: "akatosh" },
      { op: "set_major_skills", skills: ["block", "heavy-armor", "one-handed"] },
      { op: "set_minor_skills", skills: ["smithing"] },
      { op: "set_option_choice", option: "oghma-infinium", choice: "claimed" },
      { op: "set_oghma_skills", skills: ["block", "smithing"] },
      { op: "set_player_level", level: 20 },
      { op: "set_attribute_bonus", health: 10, stamina: 9 },
      { op: "add_trait", id: trait.id },
      { op: "set_skill_level", skill: "block", level: 40 },
      { op: "take_perk", id: "block-improved-blocking" },
      { op: "set_option_choice", option: "werewolf", choice: "claimed" },
      { op: "remove_trait", id: trait.id },
      { op: "remove_perk", id: "block-improved-blocking" },
    ];

    const output = await applyOk({ ops });

    expectCausesMatchTargets(ops, output.diff);
    const final = expectRoundTrip(output, undefined, ops);
    expectDiffCoversChanges(openedBuild(), final, output.diff);
    expect(final.oghmaSkillIds).toEqual(["block", "smithing"]);
    expect(final.attributeBonus).toEqual({ health: 10, magicka: 0, stamina: 9 });
  });
});

describe(`${APPLY_CHANGES_TOOL} on an existing build`, () => {
  it("removes a prerequisite and shows its dependents as engine rows", async () => {
    const code = prerequisiteChainCode();
    const ops: Op[] = [{ op: "remove_perk", id: "marksman-ranged-combat-training" }];

    const output = await applyOk({ code, ops });

    expect(output.baseCode).toBe(code);
    const perkRows = output.diff.filter((row) => row.field === "perks");
    expect(perkRows).toEqual([
      expect.objectContaining({
        op: 0,
        cause: "requested",
        removed: [{ id: "marksman-ranged-combat-training", name: "Ranged Combat Training" }],
      }),
      expect.objectContaining({
        op: 0,
        cause: "engine",
        removed: [{ id: "marksman-eagle-eye", name: "Eagle Eye" }],
      }),
    ]);
    expectCausesMatchTargets(ops, output.diff);
    const final = expectRoundTrip(output, code, ops);
    expectDiffCoversChanges(openedBuild(code), final, output.diff);
  });

  it("accepts the code with surrounding whitespace and echoes it trimmed", async () => {
    const code = prerequisiteChainCode();

    const output = await applyOk({ code: `  ${code}\n`, ops: [{ op: "set_player_level", level: 15 }] });

    expect(output.baseCode).toBe(code);
  });

  it("reports what the planner changed on open as open-stage engine rows", async () => {
    const code = encodeRawV3({ lv: 10, r: "nord", p: ["block-improved-blocking", "not-a-real-perk"] });

    const output = await applyOk({ code, ops: [{ op: "set_player_level", level: 12 }] });

    expect(output.diff[0]).toMatchObject({
      op: null,
      stage: "open",
      cause: "engine",
      field: "perks",
      removed: [{ id: "not-a-real-perk", name: "not-a-real-perk" }],
    });
    expect(output.notes.join(" ")).toContain('stage "open"');
    expect(output.evaluation.unknownIds).toEqual([]);
  });

  it.each([0, 1])("adds no open rows for a planner code with training only in tier %d", async (tierIndex) => {
    const tier = getTrainingTierDefinitions(game)[tierIndex]!;
    let state = reconcileBuild(game, createTestBuildState({ raceId: "nord", playerLevel: 30 }));
    state = applySkillTrainingRangeChange(game, state, "smithing", tierIndex, 2);
    expect(state.skillTrainingRanges.smithing?.[tierIndex]).toBe(2);
    expect(getStoredSkillLevel(game, state, "smithing")).toBeGreaterThanOrEqual(tier.minLevel);
    const code = encodeBuild(state, game);

    const output = await applyOk({ code, ops: [{ op: "set_player_level", level: 31 }] });

    expect(output.diff.filter((row) => row.stage === "open")).toEqual([]);
    expect(output.notes.join(" ")).not.toContain('stage "open"');
  });

  it("notes a code made with another data version", async () => {
    const output = await applyOk({
      code: USER_BUILD_CODE_V2,
      ops: [{ op: "set_player_level", level: 55 }],
    });

    const sourceVersion = decodeBuildPackage(USER_BUILD_CODE_V2, game).sourceModpackVersion!;
    expect(sourceVersion).not.toBe(game.manifest.version);
    expect(output.notes.join(" ")).toContain(sourceVersion);
    expect(output.evaluation.codeDataVersion).toBe(game.manifest.version);
  });

  it("keeps the widest realistic response under 10k tokens", async () => {
    const perkId = decodeBuild(USER_BUILD_CODE_V2, game).selectedPerkIds[0]!;
    const ops: Op[] = [
      { op: "set_minor_skills", skills: [] },
      { op: "set_major_skills", skills: ["alchemy", "speech", "enchanting"] },
      { op: "set_minor_skills", skills: ["smithing", "block", "one-handed", "two-handed", "heavy-armor", "evasion"] },
      { op: "set_race", id: "argonian" },
      { op: "set_player_level", level: 40 },
      { op: "remove_perk", id: perkId },
    ];

    const result = await harness.call(APPLY_CHANGES_TOOL, { code: USER_BUILD_CODE_V2, ops });

    expect(result.isError, result.text).toBe(false);
    const output = result.structured as unknown as ApplyChangesOutput;
    expect(output.diff.length).toBeGreaterThan(10);
    expect(output.evaluation.violations.length).toBeGreaterThan(0);
    expect(result.text.length / 4).toBeLessThan(10_000);
    expectCausesMatchTargets(ops, output.diff);
  });
});

describe(`${APPLY_CHANGES_TOOL} on a multi-variant package`, () => {
  it("edits the active variant and returns a single build, noting the dropped variants", async () => {
    const code = encodeRawV3({
      bn: "Package",
      lv: 5,
      r: "nord",
      ms: [["Level 12", { lv: 12, r: "breton", M: ["block"], l: [["block", 40]] }]],
      av: 1,
    });
    const ops: Op[] = [{ op: "set_player_level", level: 15 }];

    const output = await applyOk({ code, ops });

    const returned = decodeBuildPackage(output.code, game);
    expect(returned.shared).toBeUndefined();
    expect(returned.build.raceId).toBe("breton");
    expect(returned.build.playerLevel).toBe(15);
    expect(getStoredSkillLevel(game, returned.build, "block")).toBe(40);
    const note = output.notes.find((entry) => entry.includes("variants"));
    expect(note).toContain("2 variants");
    expect(note).toContain('"Level 12"');
    expect(note).toContain("the other 1 variant was not carried over");
    expectRoundTrip(output, code, ops);
  });

  it("edits the default variant when it is active, naming it variant 1 of N", async () => {
    const code = encodeRawV3({
      bn: "Package",
      dv: "Base build",
      lv: 5,
      r: "nord",
      ms: [
        ["Level 12", { lv: 12, r: "breton" }],
        ["Level 20", { lv: 20, r: "altmer" }],
      ],
      av: 0,
    });
    const ops: Op[] = [{ op: "set_player_level", level: 8 }];

    const output = await applyOk({ code, ops });

    const returned = decodeBuildPackage(output.code, game);
    expect(returned.shared).toBeUndefined();
    expect(returned.build.raceId).toBe("nord");
    expect(returned.build.playerLevel).toBe(8);
    const note = output.notes.find((entry) => entry.includes("variants"));
    // The planner names the default variant from `dv` (the package name `bn` is separate).
    expect(decodeBuildPackage(code, game).shared!.defaultVariantName).toBe("Base build");
    expect(note).toContain('"Base build" (variant 1 of 3)');
    expect(note).toContain("the other 2 variants were not carried over");
    expectRoundTrip(output, code, ops);
  });
});

describe(`${APPLY_CHANGES_TOOL} failures`, () => {
  it("rejects an unknown id by op index and applies nothing", async () => {
    const result = await applyError({
      ops: [
        { op: "set_race", id: "nord" },
        { op: "take_perk", id: "sneak-archery" },
      ],
    });

    expect(result.text).toContain("changed nothing: 1 of 2 ops failed");
    expect(result.text).toContain('op #1 (take_perk): perk id "sneak-archery" not found');
    expect(result.text).toContain("lorerim_search_perks");
    expect(result.text).not.toContain("op #0");
  });

  it("suggests close matches for a near-miss id", async () => {
    const result = await applyError({ ops: [{ op: "take_perk", id: "sneak-anatomical-lor" }] });

    expect(result.text).toContain("not found. Ids are exact");
    expect(result.text).toContain("Did you mean: sneak-anatomical-lore");
  });

  it("names the skill requirement of a strict take_perk: required, actual, shortfall", async () => {
    const required = game.perkById["marksman-eagle-eye"]!.skillReq;

    const result = await applyError({
      ops: [
        { op: "set_race", id: "nord" },
        { op: "take_perk", id: "marksman-ranged-combat-training" },
        { op: "take_perk", id: "marksman-eagle-eye" },
      ],
    });

    const marksman = getStoredSkillLevel(game, replay(undefined, [{ op: "set_race", id: "nord" }]), "marksman");
    expect(result.text).toContain(
      `op #2 (take_perk): cannot take marksman-eagle-eye (Eagle Eye): Eagle Eye needs Marksman ${required}; it is ${marksman} (${required - marksman} short).`,
    );
  });

  it("lists every failing op of a batch in one error", async () => {
    const result = await applyError({
      ops: [
        { op: "set_race", id: "nord" },
        { op: "set_race", id: "nordd" },
        { op: "set_player_level", level: 20 },
        { op: "add_trait", id: "not-a-trait" },
        { op: "set_skill_level", skill: "block", level: 30 },
        { op: "take_perk", id: "block-not-a-perk" },
      ],
    });

    expect(result.text).toContain("3 of 6 ops failed");
    expect(result.text).toContain("a later failure may follow from an earlier one");
    const failed = [...result.text.matchAll(/^op #(\d+) \((\w+)\)/gm)].map((match) => [Number(match[1]), match[2]]);
    expect(failed).toEqual([
      [1, "set_race"],
      [3, "add_trait"],
      [5, "take_perk"],
    ]);
  });

  it("rejects out-of-range levels and attributes, naming the valid range", async () => {
    const maxSkill = getMaxSkillLevel(game);

    const result = await applyError({
      ops: [
        { op: "set_player_level", level: 500 },
        { op: "set_skill_level", skill: "marksman", level: 150 },
        { op: "set_attribute_bonus", health: 5 },
      ],
    });

    expect(result.text).toContain(`op #0 (set_player_level): player level 500 is out of range; valid levels are ${baseLevel}–${maxPlayerLevel}.`);
    expect(result.text).toContain(`op #1 (set_skill_level): Marksman level 150 is out of range`);
    expect(result.text).toContain(`maxSkillLevel is ${maxSkill}`);
    expect(result.text).toContain("op #2 (set_attribute_bonus)");
    expect(result.text).toContain(`the valid total is 0–${getEarnedAttributeChoices(game, openedBuild())}`);
  });

  it.each([
    ["plain text", "hello"],
    ["whitespace", "   "],
    ["corrupt gzip", "3.AAAAAAAAAAAA"],
  ])("returns the decode error for %s", async (_label, code) => {
    const result = await applyError({ code, ops: [{ op: "set_player_level", level: 5 }] });

    expect(result.text).toContain("Could not decode");
    expect(result.text).toContain("build=");
  });

  it.each([
    ["no ops", { ops: [] }],
    ["missing ops", {}],
    ["too many ops", { ops: Array.from({ length: MAX_OPS + 1 }, () => ({ op: "set_player_level", level: 5 })) }],
    ["an unknown op", { ops: [{ op: "set_everything", id: "x" }] }],
    ["an extra key on an op", { ops: [{ op: "take_perk", id: "sneak-stealth", force: true }] }],
    ["an extra top-level key", { ops: [{ op: "set_player_level", level: 5 }], response_format: "detailed" }],
    ["an empty code", { code: "", ops: [{ op: "set_player_level", level: 5 }] }],
    ["a non-integer level", { ops: [{ op: "set_player_level", level: 5.5 }] }],
  ])("rejects %s before applying anything", async (_label, args) => {
    const result = await applyError(args);

    expect(result.text).toContain("Input validation error");
  });

  it("returns the same failure from the pure function", () => {
    const result = applyChanges(appData, { ops: [{ op: "set_player_level", level: 0 }] });

    expect(result.ok).toBe(false);
  });
});
