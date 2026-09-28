import { afterAll, beforeAll, describe, expect, it } from "vitest";
import * as z from "zod";
import { SERVER_NAME } from "../server/createServer";
import { NONE_ID, opSchema } from "../server/ops";
import { APPLY_CHANGES_TOOL } from "../server/tools/applyChanges";
import { EVALUATE_BUILD_TOOL } from "../server/tools/evaluateBuild";
import { GET_ENTITY_TOOL } from "../server/tools/getEntity";
import { SEARCH_PERKS_TOOL } from "../server/tools/searchPerks";
import { TOOL_PREFIX_BY_VARIANT, loadScenarios, type Scenario } from "./common.ts";
import {
  CLEAR_ID,
  OP_ID_FIELDS,
  TOOLS,
  answerShowsCode,
  bareToolName,
  findContamination,
  idsInToolCall,
  matchScenario,
  mentionsId,
  scoreSession,
} from "./score.ts";
import { activeChoice, entryPerk, startEvalServer, type EvalServer } from "./testServer.ts";
import { TranscriptBuilder } from "./testTranscripts.ts";
import { parseTranscript } from "./transcript.ts";

const SKILL_DIR = "C:\\evals\\skill";
const BASELINE_DIR = "C:\\evals\\baseline";
const scenarios = loadScenarios();

function scenario(id: string): Scenario {
  const found = scenarios.find((entry) => entry.id === id);
  if (!found) throw new Error(`no scenario ${id}`);
  return found;
}

const archer = scenario("stealth-archer-vampire");
const lich = scenario("lich-no-destruction");

let server: EvalServer;

beforeAll(async () => {
  server = await startEvalServer();
});

afterAll(async () => {
  await server.harness.close();
});

function parse(builder: TranscriptBuilder) {
  return parseTranscript(builder.toJsonl(), builder.sessionId);
}

describe("constants that mirror the server", () => {
  it("names the server's tools, clear id, and Claude Code prefixes", () => {
    expect(TOOLS).toEqual({
      searchPerks: SEARCH_PERKS_TOOL,
      getEntity: GET_ENTITY_TOOL,
      evaluateBuild: EVALUATE_BUILD_TOOL,
      applyChanges: APPLY_CHANGES_TOOL,
    });
    expect(CLEAR_ID).toBe(NONE_ID);
    expect(TOOL_PREFIX_BY_VARIANT).toEqual({
      skill: `mcp__plugin_lorerim_${SERVER_NAME}__`,
      baseline: `mcp__${SERVER_NAME}__`,
    });
  });

  it("lists every op, and exactly the fields of each op that hold ids", () => {
    const fieldsByOp = Object.fromEntries(
      opSchema.options.map((option) => {
        const shape = option.shape as Record<string, z.ZodType>;
        const idFields = Object.entries(shape)
          .filter(([field, schema]) => field !== "op" && (schema instanceof z.ZodString || schema instanceof z.ZodArray))
          .map(([field]) => field)
          .sort();
        return [(shape.op as z.ZodLiteral<string>).value, idFields];
      }),
    );
    const listed = Object.fromEntries(
      Object.entries(OP_ID_FIELDS).map(([op, fields]) => [
        op,
        [...fields.map(([field]) => field), ...(op === "set_option_choice" ? ["choice"] : [])].sort(),
      ]),
    );

    expect(listed).toEqual(fieldsByOp);
  });
});

describe("idsInToolCall", () => {
  it("reads every id-bearing op field with its kind, skipping the clear id", () => {
    const uses = idsInToolCall(TOOLS.applyChanges, {
      ops: [
        { op: "set_race", id: "nord" },
        { op: "set_birthsign", id: CLEAR_ID },
        { op: "add_trait", id: "some-trait" },
        { op: "set_major_skills", skills: ["marksman", "sneak"] },
        { op: "set_option_choice", option: "vampire", choice: "stage-2" },
        { op: "set_skill_level", skill: "marksman", level: 30 },
        { op: "set_player_level", level: 40 },
        { op: "take_perk", id: "marksman-eagle-eye" },
      ],
    });

    expect(uses).toEqual([
      { kind: "race", id: "nord" },
      { kind: "trait", id: "some-trait" },
      { kind: "skill", id: "marksman" },
      { kind: "skill", id: "sneak" },
      { kind: "option", id: "vampire" },
      { kind: "choice", id: "stage-2", option: "vampire" },
      { kind: "skill", id: "marksman" },
      { kind: "perk", id: "marksman-eagle-eye" },
    ]);
  });

  it("reads ops sent as a JSON string, get_entity ids, and the search skill filter", () => {
    expect(idsInToolCall(TOOLS.applyChanges, { ops: JSON.stringify([{ op: "take_perk", id: "x-perk" }]) })).toEqual([
      { kind: "perk", id: "x-perk" },
    ]);
    expect(idsInToolCall(TOOLS.getEntity, { kind: "race", id: "nord" })).toEqual([{ kind: "race", id: "nord" }]);
    expect(idsInToolCall(TOOLS.getEntity, { kind: "race" })).toEqual([]);
    expect(idsInToolCall(TOOLS.searchPerks, { query: "bow", skill: "marksman" })).toEqual([{ kind: "skill", id: "marksman" }]);
    expect(idsInToolCall(TOOLS.evaluateBuild, { code: "3.abc" })).toEqual([]);
    expect(idsInToolCall(TOOLS.applyChanges, { ops: [{ op: "constructor", id: "x" }, { op: "toString" }] })).toEqual([]);
  });
});

describe("helpers", () => {
  it("strips either folder's prefix and ignores other tools", () => {
    expect(bareToolName(`${TOOL_PREFIX_BY_VARIANT.skill}lorerim_get_entity`)).toBe("lorerim_get_entity");
    expect(bareToolName(`${TOOL_PREFIX_BY_VARIANT.baseline}lorerim_get_entity`)).toBe("lorerim_get_entity");
    expect(bareToolName("Read")).toBeNull();
  });

  it("matches ids as whole tokens only", () => {
    expect(mentionsId('{"id":"marksman-eagle-eye"}', "marksman-eagle-eye")).toBe(true);
    expect(mentionsId('{"id":"marksman-eagle-eye"}', "marksman")).toBe(false);
    expect(mentionsId('"skill":"marksman"', "marksman")).toBe(true);
    expect(mentionsId("eagle-eye-r2", "eagle-eye")).toBe(false);
  });

  it("finds the code as is or URL-encoded in a link", () => {
    expect(answerShowsCode("Code: 3.a/b+c", "3.a/b+c")).toBe(true);
    expect(answerShowsCode("https://x/planner?build=3.a%2Fb%2Bc", "3.a/b+c")).toBe(true);
    expect(answerShowsCode("no code here", "3.a/b+c")).toBe(false);
  });

  it("matches a scenario by its prompt in the first answered message", () => {
    const skill = new TranscriptBuilder(SKILL_DIR, "s").localCommand("model", "sonnet").command("lorerim-build", archer.prompt).say("ok");
    const baseline = new TranscriptBuilder(BASELINE_DIR, "b").prompt(`${lich.prompt.toUpperCase()}\nEnd with the final share code.`).say("ok");
    const other = new TranscriptBuilder(BASELINE_DIR, "o").prompt("hello").say("hi").prompt(archer.prompt).say("ok");

    expect(matchScenario(parse(skill), scenarios)?.id).toBe(archer.id);
    expect(matchScenario(parse(baseline), scenarios)?.id).toBe(lich.id);
    expect(matchScenario(parse(other), scenarios)).toBeNull();
  });
});

describe("scoreSession (I/O matrix)", () => {
  it("Legal run: last apply result legal at the target level passes every check", async () => {
    const options = await server.call(TOOLS.getEntity, { kind: "option" });
    const vampire = await server.call(TOOLS.getEntity, { kind: "option", id: "vampire" });
    const skills = await server.call(TOOLS.getEntity, { kind: "skill" });
    const perk = entryPerk("marksman");
    const search = await server.call(TOOLS.searchPerks, { query: "", skill: "marksman" });
    const ops = [
      { op: "set_option_choice", option: "vampire", choice: activeChoice("vampire") },
      { op: "set_player_level", level: archer.levelTarget },
      { op: "take_perk", id: perk },
    ];
    const applied = await server.apply(ops);
    expect(applied.evaluation.legal).toBe(true);

    const builder = new TranscriptBuilder(SKILL_DIR, "legal")
      .command("lorerim-build", archer.prompt)
      .tool("Skill", { skill: "lorerim-build" }, { text: "Launching skill: lorerim-build" })
      .lorerim("skill", TOOLS.getEntity, { kind: "option" }, options)
      .lorerim("skill", TOOLS.getEntity, { kind: "option", id: "vampire" }, vampire)
      .lorerim("skill", TOOLS.getEntity, { kind: "skill" }, skills)
      .lorerim("skill", TOOLS.searchPerks, { query: "", skill: "marksman" }, search)
      .lorerim("skill", TOOLS.applyChanges, { ops }, { structured: applied as unknown as Record<string, unknown> })
      .say(`Here is your build.\n\n${applied.plannerUrl}`);
    const score = await scoreSession(parse(builder), archer, "skill", server.lookups);

    expect(score).toMatchObject({
      variant: "skill",
      scenario: archer.id,
      finalCode: applied.code,
      noBuild: false,
      legal: true,
      violations: 0,
      perkPointsRemaining: applied.evaluation.budgets.perkPoints.remaining,
      playerLevel: archer.levelTarget,
      codeShown: true,
      contaminated: false,
      allChecksPass: true,
      toolCalls: 6,
      lorerimToolCalls: 5,
      failedToolCalls: 0,
      model: "claude-sonnet-test",
    });
    expect(score.checks.map((check) => [check.id, check.pass])).toEqual([
      ["level", true],
      ["supernatural", true],
    ]);
    expect(score.ids).toMatchObject({ total: 4, hallucinated: [], ungrounded: [], hallucinatedRate: 0, ungroundedRate: 0 });
    expect(score.build?.options.length).toBe(1);
    expect(score.build?.perksBySkill.flatMap((group) => group.perks)).toHaveLength(1);
    // 7 responses: the Skill call, 5 lorerim calls, and the answer (whose two blocks share one id).
    expect(score.turns).toBe(7);
    expect(score.tokens.total).toBe(7 * 1160);
  });

  it("takes the final code from the last successful build result", async () => {
    const draft = await server.apply([{ op: "set_player_level", level: archer.levelTarget - 10 }]);
    const final = await server.apply([
      { op: "set_option_choice", option: "vampire", choice: activeChoice("vampire") },
      { op: "set_player_level", level: archer.levelTarget },
    ]);
    expect(final.code).not.toBe(draft.code);
    const builder = new TranscriptBuilder(BASELINE_DIR, "two-builds")
      .prompt(archer.prompt)
      .lorerim("baseline", TOOLS.applyChanges, { ops: [] }, { structured: draft as unknown as Record<string, unknown> })
      .lorerim("baseline", TOOLS.applyChanges, { ops: [] }, { structured: final as unknown as Record<string, unknown> })
      .lorerim("baseline", TOOLS.applyChanges, { ops: [] }, { text: "failed", isError: true })
      .say(final.code);
    const score = await scoreSession(parse(builder), archer, "baseline", server.lookups);

    expect(score).toMatchObject({ finalCode: final.code, legal: true, playerLevel: archer.levelTarget, codeShown: true });
    expect(score.checks.find((check) => check.id === "level")?.pass).toBe(true);
    expect(score.checks.find((check) => check.id === "supernatural")?.pass).toBe(true);
  });

  it("No build: no successful build-tool result is noBuild and not legal", async () => {
    const builder = new TranscriptBuilder(BASELINE_DIR, "nobuild")
      .prompt(archer.prompt)
      .lorerim("baseline", TOOLS.applyChanges, { ops: [{ op: "take_perk", id: "made-up" }] }, { text: "Perk made-up not found.", isError: true })
      .say("Which race do you want?");
    const score = await scoreSession(parse(builder), archer, "baseline", server.lookups);

    expect(score).toMatchObject({ noBuild: true, legal: false, finalCode: null, violations: null, codeShown: false, allChecksPass: false, failedToolCalls: 1 });
    expect(score.checks.every((check) => !check.pass && check.detail === "no build")).toBe(true);
    expect(score.build).toBeNull();
  });

  it("Hallucinated id: a take_perk id the server rejects is hallucinated, with a rate above 0", async () => {
    const perk = entryPerk("marksman");
    const applied = await server.apply([{ op: "take_perk", id: perk }]);
    const bogus = `${perk}-of-legend`;
    const builder = new TranscriptBuilder(BASELINE_DIR, "halluc")
      .prompt(archer.prompt)
      .lorerim("baseline", TOOLS.applyChanges, { ops: [{ op: "take_perk", id: bogus }] }, { text: `Perk ${bogus} not found. Did you mean: ${perk}?`, isError: true })
      .lorerim("baseline", TOOLS.applyChanges, { ops: [{ op: "take_perk", id: perk }] }, { structured: applied as unknown as Record<string, unknown> })
      .say(`Done: ${applied.code}`);
    const score = await scoreSession(parse(builder), archer, "baseline", server.lookups);

    expect(score.ids.hallucinated).toEqual([`perk:${bogus}`]);
    expect(score.ids.total).toBe(2);
    expect(score.ids.hallucinatedRate).toBe(0.5);
    // The real id was named by the error's suggestion before it was used.
    expect(score.ids.ungrounded).toEqual([]);
    expect(score.codeShown).toBe(true);
  });

  it("Ungrounded id: a valid id used before any tool result mentioned it is ungrounded, not hallucinated", async () => {
    const perk = entryPerk("marksman");
    const applied = await server.apply([{ op: "take_perk", id: perk }]);
    const builder = new TranscriptBuilder(BASELINE_DIR, "ungrounded")
      .prompt(archer.prompt)
      .lorerim("baseline", TOOLS.applyChanges, { ops: [{ op: "take_perk", id: perk }] }, { structured: applied as unknown as Record<string, unknown> })
      // A later use of the same id does not make its first use grounded.
      .lorerim("baseline", TOOLS.getEntity, { kind: "perk", id: perk }, await server.call(TOOLS.getEntity, { kind: "perk", id: perk }))
      .say("Done.");
    const score = await scoreSession(parse(builder), archer, "baseline", server.lookups);

    expect(score.ids.ungrounded).toEqual([`perk:${perk}`]);
    expect(score.ids.hallucinated).toEqual([]);
    expect(score.ids.ungroundedRate).toBe(1);
    expect(score.codeShown).toBe(false);
  });

  it("checks a choice id against its option's choices", async () => {
    const builder = new TranscriptBuilder(BASELINE_DIR, "choice")
      .prompt(archer.prompt)
      .lorerim("baseline", TOOLS.applyChanges, { ops: [{ op: "set_option_choice", option: "vampire", choice: "stage-99" }] }, { text: "bad choice", isError: true })
      .lorerim("baseline", TOOLS.applyChanges, { ops: [{ op: "set_option_choice", option: "no-such-option", choice: "on" }] }, { text: "bad option", isError: true });
    const score = await scoreSession(parse(builder), archer, "baseline", server.lookups);

    expect(score.ids.hallucinated).toEqual(["choice:no-such-option/on", "choice:vampire/stage-99", "option:no-such-option"]);
    expect(score.ids.ungrounded).toEqual(["option:vampire"]);
  });

  it("Forbidden tree: a Destruction perk fails lich-no-destruction and names the perk", async () => {
    const [forbidden] = lich.forbiddenSkills;
    const perk = entryPerk(forbidden!);
    const applied = await server.apply([
      { op: "set_option_choice", option: "lich", choice: activeChoice("lich") },
      { op: "set_player_level", level: lich.levelTarget },
      { op: "take_perk", id: perk },
    ]);
    const builder = new TranscriptBuilder(SKILL_DIR, "forbidden")
      .command("lorerim-build", lich.prompt)
      .lorerim("skill", TOOLS.evaluateBuild, { code: applied.code }, { structured: applied.evaluation as unknown as Record<string, unknown> })
      .say(applied.plannerUrl);
    const score = await scoreSession(parse(builder), lich, "skill", server.lookups);

    const check = score.checks.find((entry) => entry.id === "forbiddenSkills");
    expect(check?.pass).toBe(false);
    expect(check?.detail).toContain(perk);
    expect(score.checks.find((entry) => entry.id === "supernatural")?.pass).toBe(true);
    expect(score.allChecksPass).toBe(false);
    expect(score.finalCode).toBe(applied.code);
  });

  it("fails the supernatural check for the wrong path and for none when one is set", async () => {
    const applied = await server.apply([{ op: "set_option_choice", option: "werewolf", choice: activeChoice("werewolf") }]);
    const builder = new TranscriptBuilder(BASELINE_DIR, "werewolf")
      .prompt(archer.prompt)
      .lorerim("baseline", TOOLS.applyChanges, { ops: [] }, { structured: applied as unknown as Record<string, unknown> });
    const vampireScore = await scoreSession(parse(builder), archer, "baseline", server.lookups);
    const mortalScore = await scoreSession(parse(builder), scenario("spellsword-mortal"), "baseline", server.lookups);

    expect(vampireScore.checks.find((check) => check.id === "supernatural")).toMatchObject({ pass: false, detail: "expected vampire, build has werewolf" });
    expect(mortalScore.checks.find((check) => check.id === "supernatural")?.pass).toBe(false);
    expect(vampireScore.checks.find((check) => check.id === "level")?.pass).toBe(false);
  });

  it("records a final code that no longer evaluates", async () => {
    const builder = new TranscriptBuilder(BASELINE_DIR, "corrupt")
      .prompt(archer.prompt)
      .lorerim("baseline", TOOLS.evaluateBuild, { code: "3.nope" }, { text: JSON.stringify({ code: "3.nope", legal: true }) });
    const score = await scoreSession(parse(builder), archer, "baseline", server.lookups);

    expect(score.finalCode).toBe("3.nope");
    expect(score.noBuild).toBe(false);
    expect(score.legal).toBe(false);
    expect(score.evaluationError).toMatch(/decode/i);
  });

  it("Contaminated baseline: the Skill tool or a plugin tool flags the session", async () => {
    const builder = new TranscriptBuilder(BASELINE_DIR, "contaminated")
      .prompt(archer.prompt)
      .tool("Skill", { skill: "lorerim-build" }, { text: "Launching skill" })
      .lorerim("skill", TOOLS.getEntity, { kind: "skill" }, await server.call(TOOLS.getEntity, { kind: "skill" }));
    const session = parse(builder);
    const score = await scoreSession(session, archer, "baseline", server.lookups);

    expect(score.contaminated).toBe(true);
    expect(score.contamination).toEqual([
      "called plugin tool mcp__plugin_lorerim_lorerim__lorerim_get_entity",
      "called the Skill tool",
    ]);
    // The skill folder is supposed to use both.
    expect(findContamination(session, "skill")).toEqual([]);
  });
});
