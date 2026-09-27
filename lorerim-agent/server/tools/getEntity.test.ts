import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { getPerkNodeRequirements } from "@/lib/perkRequirements";
import { getTestAppData, getTestGameData } from "@/test/helpers";
import { SUMMARY_MAX_CHARS } from "../format";
import { ENTITY_KINDS, listEntities } from "../ids";
import { connectTestClient, type TestClient, type ToolCallOutcome } from "../testClient";
import { GET_ENTITY_DEFAULT_LIMIT, GET_ENTITY_TOOL, type GetEntityOutput } from "./getEntity";
import { SEARCH_PERKS_TOOL } from "./searchPerks";

let harness: TestClient;

beforeAll(async () => {
  harness = await connectTestClient();
});

afterAll(async () => {
  await harness.close();
});

const optionLabels = () => getTestAppData().ui.labels.panels["character-options"]!;

async function getOk(args: Record<string, unknown>): Promise<GetEntityOutput> {
  const result = await harness.call(GET_ENTITY_TOOL, args);
  expect(result.isError, result.text).toBe(false);
  expect(JSON.parse(result.text)).toEqual(result.structured);
  return result.structured as unknown as GetEntityOutput;
}

async function getError(args: Record<string, unknown>): Promise<ToolCallOutcome> {
  const result = await harness.call(GET_ENTITY_TOOL, args);
  expect(result.isError).toBe(true);
  expect(result.structured).toBeUndefined();
  return result;
}

describe(`${GET_ENTITY_TOOL} with an id`, () => {
  it("returns a full perk with its skill name and prerequisite names", async () => {
    const perk = getTestGameData().perkById["sneak-anatomical-lore"]!;

    const output = await getOk({ kind: "perk", id: "sneak-anatomical-lore" });
    const entity = output.entity!;

    expect(output.kind).toBe("perk");
    expect(output.id).toBe("sneak-anatomical-lore");
    expect(entity).toMatchObject({
      id: perk.id,
      name: perk.name,
      description: perk.description,
      effects: perk.effects,
      costsPerkPoint: perk.costsPerkPoint,
      skill: { id: "sneak", name: "Sneak" },
      skillReq: getPerkNodeRequirements(perk).skillReq,
      playerLevelReq: getPerkNodeRequirements(perk).playerLevelReq,
    });
    expect(perk.prerequisites.length).toBeGreaterThan(0);
    expect(entity.prerequisites).toEqual(
      perk.prerequisites.map((id) => ({ id, name: getTestGameData().perkById[id]!.name })),
    );
    expect(entity.prerequisitesAny).toEqual([]);
  });

  it("names prerequisitesAny perks too", async () => {
    const game = getTestGameData();
    const perk = Object.values(game.perkById).find((entry) => (entry.prerequisitesAny ?? []).length > 0);
    expect(perk).toBeDefined();

    const output = await getOk({ kind: "perk", id: perk!.id });

    expect(output.entity!.prerequisitesAny).toEqual(
      perk!.prerequisitesAny!.map((id) => ({ id, name: game.perkById[id]!.name })),
    );
  });

  it("reports a perk's player-level requirement", async () => {
    const game = getTestGameData();
    const perk = Object.values(game.perkById).find((entry) => (entry.playerLevelReq ?? 1) > 1)!;

    const output = await getOk({ kind: "perk", id: perk.id });

    expect(output.entity!.playerLevelReq).toBe(perk.playerLevelReq);
  });

  it("fetches every perk id in perkById, each returning its own id", async () => {
    const ids = Object.keys(getTestGameData().perkById);
    expect(ids.length).toBeGreaterThan(500);

    const results = await Promise.all(
      ids.map((id) => harness.call(GET_ENTITY_TOOL, { kind: "perk", id })),
    );

    results.forEach((result, index) => {
      expect(result.isError, ids[index]).toBe(false);
      const output = result.structured as unknown as GetEntityOutput;
      expect(output.id).toBe(ids[index]);
      expect(output.entity!.id).toBe(ids[index]);
    });
  });

  it.each(ENTITY_KINDS.filter((kind) => kind !== "perk"))(
    "fetches every %s by id, each under 10k tokens",
    async (kind) => {
      for (const entity of listEntities(getTestGameData(), kind)) {
        const result = await harness.call(GET_ENTITY_TOOL, { kind, id: entity.id });
        expect(result.isError, `${kind} ${entity.id}`).toBe(false);
        expect((result.structured as unknown as GetEntityOutput).entity!.id).toBe(entity.id);
        expect(result.text.length / 4).toBeLessThan(10_000);
      }
    },
  );

  it("adds perkCount to a skill", async () => {
    const game = getTestGameData();

    const sneak = await getOk({ kind: "skill", id: "sneak" });
    const traits = await getOk({ kind: "skill", id: "traits" });

    expect(sneak.entity).toMatchObject({ id: "sneak", name: "Sneak", perkCount: game.perkTrees.sneak!.perks.length });
    expect(traits.entity).toMatchObject({ id: "traits", perkCount: 0 });
  });

  it("returns races, traits, birthsigns, and deities as stored", async () => {
    const game = getTestGameData();
    const cases = [
      ["race", game.races[1]!],
      ["trait", game.traits[0]!],
      ["birthsign", game.birthsigns[1]!],
      ["deity", game.deities[1]!],
    ] as const;

    for (const [kind, entity] of cases) {
      const output = await getOk({ kind, id: entity.id });
      expect(output.entity).toEqual(entity);
    }
  });

  it("resolves option labels and choice labels", async () => {
    const option = getTestGameData().characterOptions.find((entry) => entry.id === "oghma-infinium")!;

    const output = await getOk({ kind: "option", id: option.id });
    const entity = output.entity!;

    expect(entity.name).toBe(optionLabels()[option.titleLabel]);
    expect(entity.description).toBe(optionLabels()[option.descriptionLabel!]);
    expect(entity.defaultChoice).toBe(option.defaultChoice);
    expect(entity.choices).toEqual(
      option.choices.map((choice) => ({
        id: choice.id,
        label: optionLabels()[choice.label] ?? choice.label,
        ...(choice.effects !== undefined && { effects: choice.effects }),
      })),
    );
    expect(entity).not.toHaveProperty("supernatural");
  });

  it.each([
    ["vampire", "vampirism"],
    ["werewolf", "lycanthropy"],
    ["lich", "lichdom"],
  ] as const)("attaches supernatural data to the %s option", async (optionId, dataKey) => {
    const { supernatural } = getTestGameData();

    const output = await getOk({ kind: "option", id: optionId });

    expect(output.entity!.supernatural).toEqual({
      ...supernatural[dataKey],
      incompatibleTraitIds: supernatural.incompatibleTraitIds,
    });
  });

  it("rejects an unknown perk id as not found, with close matches", async () => {
    const result = await getError({ kind: "perk", id: "anatomical-lore" });

    expect(result.text).toContain("not found");
    expect(result.text).toContain("sneak-anatomical-lore (Anatomical Lore)");
    expect(result.text).toContain(SEARCH_PERKS_TOOL);
  });

  it("rejects a perk name instead of resolving it", async () => {
    const result = await getError({ kind: "perk", id: "Anatomical Lore" });

    expect(result.text).toContain("Did you mean: sneak-anatomical-lore");
  });

  it("rejects an id of the wrong kind", async () => {
    const result = await getError({ kind: "race", id: "sneak" });

    expect(result.text).toContain('race id "sneak" not found');
    expect(result.text).toContain('kind "race", no id');
  });
});

describe(`${GET_ENTITY_TOOL} without an id`, () => {
  it("lists a kind as compact paginated rows in data-file order", async () => {
    const traits = getTestGameData().traits;

    const output = await getOk({ kind: "trait" });

    expect(output).toMatchObject({
      kind: "trait",
      total: traits.length,
      offset: 0,
      limit: GET_ENTITY_DEFAULT_LIMIT,
      nextOffset: GET_ENTITY_DEFAULT_LIMIT,
    });
    expect(output.rows!.map((row) => row.id)).toEqual(
      traits.slice(0, GET_ENTITY_DEFAULT_LIMIT).map((trait) => trait.id),
    );
    expect(output.rows!.every((row) => Object.keys(row).sort().join() === "id,name,summary")).toBe(true);
    expect(output.note).toContain(`offset ${GET_ENTITY_DEFAULT_LIMIT}`);

    const rest = await getOk({ kind: "trait", offset: output.nextOffset });
    expect(rest.rows!.map((row) => row.id)).toEqual(
      traits.slice(GET_ENTITY_DEFAULT_LIMIT).map((trait) => trait.id),
    );
    expect(rest.nextOffset).toBeNull();
    expect(rest.note).toBeUndefined();
  });

  it("summarizes each kind from its main text in one line", async () => {
    const game = getTestGameData();
    const labels = optionLabels();

    const [races, birthsigns, deities, skills, options, traits] = await Promise.all(
      (["race", "birthsign", "deity", "skill", "option", "trait"] as const).map((kind) =>
        getOk({ kind, limit: 100 }),
      ),
    );

    expect(races!.rows![1]!.summary.length).toBeGreaterThan(0);
    expect(game.races[1]!.description.startsWith(races!.rows![1]!.summary.replace(/…$/, ""))).toBe(true);
    expect(game.birthsigns[1]!.bonus.startsWith(birthsigns!.rows![1]!.summary.replace(/…$/, ""))).toBe(true);
    expect(game.deities[1]!.follower.startsWith(deities!.rows![1]!.summary.replace(/…$/, ""))).toBe(true);
    expect(skills!.rows![0]!.summary).toBe(game.skills[0]!.category);
    const vampire = options!.rows!.find((row) => row.id === "vampire")!;
    expect(vampire.name).toBe(labels.vampireOption);
    expect(labels.vampireOptionDescription!.startsWith(vampire.summary.replace(/…$/, ""))).toBe(true);
    for (const output of [races, birthsigns, deities, skills, options, traits]) {
      for (const row of output!.rows!) {
        expect(row.summary.length, row.id).toBeLessThanOrEqual(SUMMARY_MAX_CHARS);
      }
    }
  });

  it("falls back to a trait's bonus when its description is empty", async () => {
    const trait = getTestGameData().traits.find((entry) => entry.description.trim() === "")!;
    expect(trait).toBeDefined();

    const output = await getOk({ kind: "trait", limit: 100 });
    const row = output.rows!.find((entry) => entry.id === trait.id)!;

    expect(row.summary.length).toBeGreaterThan(0);
    expect(trait.bonus.startsWith(row.summary.replace(/…$/, ""))).toBe(true);
  });

  it("lists perks one page at a time and points to the perk search", async () => {
    const game = getTestGameData();

    const output = await getOk({ kind: "perk" });

    expect(output.total).toBe(Object.keys(game.perkById).length);
    expect(output.rows).toHaveLength(GET_ENTITY_DEFAULT_LIMIT);
    expect(output.nextOffset).toBe(GET_ENTITY_DEFAULT_LIMIT);
    expect(output.note).toContain(SEARCH_PERKS_TOOL);
  });

  it("keeps every default-limit listing under 10k tokens", async () => {
    for (const kind of ENTITY_KINDS) {
      let offset: number | null = 0;
      while (offset !== null) {
        const result = await harness.call(GET_ENTITY_TOOL, { kind, offset });
        expect(result.text.length / 4, `${kind} @${offset}`).toBeLessThan(10_000);
        offset = (result.structured as unknown as GetEntityOutput).nextOffset ?? null;
      }
    }
  });

  it("explains an offset past the end", async () => {
    const output = await getOk({ kind: "deity", offset: 999 });

    expect(output.rows).toEqual([]);
    expect(output.note).toContain("past the end");
  });
});

describe(`${GET_ENTITY_TOOL} input validation`, () => {
  it("rejects an unknown argument instead of listing the kind", async () => {
    const result = await getError({ kind: "perk", ids: ["sneak-anatomical-lore"] });

    expect(result.text).toContain("Input validation error");
  });

  it.each([
    [{ kind: "spell" }],
    [{ kind: "perk", limit: 500 }],
    [{ kind: "perk", offset: -1 }],
    [{ id: "sneak" }],
    [{ kind: "perk", id: "x".repeat(201) }],
  ])("rejects %j before looking anything up", async (args) => {
    const result = await getError(args);

    expect(result.text).toContain("Input validation error");
  });
});
