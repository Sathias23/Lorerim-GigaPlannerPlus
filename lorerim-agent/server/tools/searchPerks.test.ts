import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { getPerkNodeRequirements } from "@/lib/perkRequirements";
import { doesPerkMatchTokens, getPerkSearchTokens } from "@/lib/perkSearch";
import { getTestGameData } from "@/test/helpers";
import { SUMMARY_MAX_CHARS } from "../format";
import { connectTestClient, type TestClient } from "../testClient";
import {
  SEARCH_PERKS_DEFAULT_LIMIT,
  SEARCH_PERKS_TOOL,
  type PerkRow,
  type SearchPerksOutput,
} from "./searchPerks";

let harness: TestClient;

beforeAll(async () => {
  harness = await connectTestClient();
});

afterAll(async () => {
  await harness.close();
});

async function search(args: Record<string, unknown>): Promise<SearchPerksOutput> {
  const result = await harness.call(SEARCH_PERKS_TOOL, args);
  expect(result.isError, result.text).toBe(false);
  // The text block carries exactly the structured JSON.
  expect(JSON.parse(result.text)).toEqual(result.structured);
  return result.structured as unknown as SearchPerksOutput;
}

/** Every row across all pages of a search, following nextOffset. */
async function searchAll(args: Record<string, unknown>): Promise<PerkRow[]> {
  const rows: PerkRow[] = [];
  let offset: number | null = 0;
  while (offset !== null) {
    const page: SearchPerksOutput = await search({ ...args, limit: 50, offset });
    rows.push(...page.rows);
    offset = page.nextOffset;
  }
  return rows;
}

describe(`${SEARCH_PERKS_TOOL}`, () => {
  it("finds perks by text, keyed by real perk ids", async () => {
    const game = getTestGameData();
    const tokens = getPerkSearchTokens("sneak attack");

    const output = await search({ query: "sneak attack" });

    expect(output.total).toBeGreaterThan(0);
    expect(output.offset).toBe(0);
    expect(output.limit).toBe(SEARCH_PERKS_DEFAULT_LIMIT);
    expect(output).toHaveProperty("nextOffset");
    expect(output.rows.map((row) => row.id)).toContain("sneak-anatomical-lore");
    for (const row of output.rows) {
      const perk = game.perkById[row.id]!;
      expect(perk, row.id).toBeDefined();
      expect(doesPerkMatchTokens(perk, tokens)).toBe(true);
      expect(row.skill).toBe(game.perkSkillIdByPerkId[row.id]);
      expect(row.name).toBe(perk.name);
    }
    const expectedTotal = Object.values(game.perkById).filter((perk) =>
      doesPerkMatchTokens(perk, tokens),
    ).length;
    expect(output.total).toBe(expectedTotal);
  });

  it("returns concise rows with requirement values and a one-line summary", async () => {
    const output = await search({ query: "anatomical lore", skill: "sneak" });
    const row = output.rows.find((entry) => entry.id === "sneak-anatomical-lore")!;
    const perk = getTestGameData().perkById["sneak-anatomical-lore"]!;

    expect(Object.keys(row).sort()).toEqual(
      ["id", "name", "playerLevelReq", "skill", "skillReq", "summary"].sort(),
    );
    expect(row.skillReq).toBe(getPerkNodeRequirements(perk).skillReq);
    expect(row.playerLevelReq).toBe(getPerkNodeRequirements(perk).playerLevelReq);
    expect(row.summary.length).toBeLessThanOrEqual(SUMMARY_MAX_CHARS);
    expect(perk.description.startsWith(row.summary.replace(/…$/, ""))).toBe(true);
  });

  it("adds description, prerequisites, and perk-point cost in detailed format", async () => {
    const output = await search({ query: "anatomical lore", skill: "sneak", response_format: "detailed" });
    const row = output.rows.find((entry) => entry.id === "sneak-anatomical-lore")!;
    const perk = getTestGameData().perkById["sneak-anatomical-lore"]!;

    expect(row.description).toBe(perk.description);
    expect(row.prerequisites).toEqual(perk.prerequisites);
    expect(row.prerequisitesAny).toEqual(perk.prerequisitesAny ?? []);
    expect(row.costsPerkPoint).toBe(perk.costsPerkPoint);
  });

  it("lists every perk of a skill up to a skill requirement when given filters only", async () => {
    const game = getTestGameData();
    const expected = game.perkTrees.sneak!.perks
      .filter((perk) => (getPerkNodeRequirements(perk).skillReq ?? 0) <= 50)
      .map((perk) => perk.id)
      .sort();

    const rows = await searchAll({ skill: "sneak", maxSkillReq: 50 });

    expect(expected.length).toBeGreaterThan(0);
    expect(rows.map((row) => row.id).sort()).toEqual(expected);
    expect(rows.every((row) => row.skill === "sneak" && (row.skillReq ?? 0) <= 50)).toBe(true);
  });

  it("treats a blank query as no query", async () => {
    const withBlank = await search({ query: "   ", skill: "sneak" });
    const without = await search({ skill: "sneak" });

    expect(withBlank.total).toBe(getTestGameData().perkTrees.sneak!.perks.length);
    expect(withBlank).toEqual(without);
  });

  it("keeps perks with no player-level requirement or one within maxPlayerLevel", async () => {
    const perks = Object.values(getTestGameData().perkById);
    const allowed = perks.filter((perk) => {
      const level = getPerkNodeRequirements(perk).playerLevelReq;
      return level === null || level <= 10;
    });
    expect(allowed.length).toBeLessThan(perks.length); // the filter excludes something

    const rows = await searchAll({ maxPlayerLevel: 10 });

    expect(rows.map((row) => row.id).sort()).toEqual(allowed.map((perk) => perk.id).sort());
    expect(rows.every((row) => row.playerLevelReq === null || row.playerLevelReq <= 10)).toBe(true);
  });

  it("sorts by skill order, then skill requirement, then name", async () => {
    const skillOrder = new Map(getTestGameData().skills.map((skill, index) => [skill.id, index]));
    const rows = await searchAll({});

    expect(rows).toHaveLength(Object.keys(getTestGameData().perkById).length);
    for (let index = 1; index < rows.length; index += 1) {
      const previous = rows[index - 1]!;
      const current = rows[index]!;
      const bySkill = skillOrder.get(previous.skill)! - skillOrder.get(current.skill)!;
      const byReq = (previous.skillReq ?? 0) - (current.skillReq ?? 0);
      const byName = previous.name < current.name ? -1 : previous.name > current.name ? 1 : 0;
      const order = bySkill || byReq || byName;
      expect(order, `${previous.id} before ${current.id}`).toBeLessThanOrEqual(0);
    }
  });

  it("is deterministic", async () => {
    const first = await harness.call(SEARCH_PERKS_TOOL, { query: "damage", response_format: "detailed" });
    const second = await harness.call(SEARCH_PERKS_TOOL, { query: "damage", response_format: "detailed" });

    expect(second.text).toBe(first.text);
  });

  it("pages a truncated result and names a narrower query and the next offset", async () => {
    const first = await search({ query: "damage" });

    expect(first.total).toBeGreaterThan(SEARCH_PERKS_DEFAULT_LIMIT);
    expect(first.rows).toHaveLength(SEARCH_PERKS_DEFAULT_LIMIT);
    expect(first.nextOffset).toBe(SEARCH_PERKS_DEFAULT_LIMIT);
    expect(first.note).toContain(`offset ${SEARCH_PERKS_DEFAULT_LIMIT}`);
    // Expected top skill: the first skill (in skills.json order) holding the most matches.
    const game = getTestGameData();
    const tokens = getPerkSearchTokens("damage");
    const counts = game.skills.map((skill) => ({
      id: skill.id,
      count: (game.perkTrees[skill.id]?.perks ?? []).filter((perk) =>
        doesPerkMatchTokens(perk, tokens),
      ).length,
    }));
    const top = counts.reduce((best, entry) => (entry.count > best.count ? entry : best));
    expect(top.count).toBeLessThan(first.total);
    expect(first.note).toContain(`add skill: "${top.id}" (${top.count} of these matches)`);

    const second = await search({ query: "damage", offset: first.nextOffset });
    expect(second.offset).toBe(SEARCH_PERKS_DEFAULT_LIMIT);
    const firstIds = new Set(first.rows.map((row) => row.id));
    expect(second.rows.some((row) => firstIds.has(row.id))).toBe(false);
  });

  it("suggests narrower terms when a skill filter is already set", async () => {
    const output = await search({ skill: "destiny", limit: 5 });

    expect(output.nextOffset).toBe(5);
    expect(output.note).toContain("add query words");
    expect(output.note).toContain("set maxSkillReq");
    expect(output.note).toContain("set maxPlayerLevel");
    expect(output.note).not.toContain("add skill");
  });

  it("does not suggest a skill that already holds every match", async () => {
    const game = getTestGameData();
    const tokens = getPerkSearchTokens("anatomical");
    const matchSkills = new Set(
      Object.values(game.perkById)
        .filter((perk) => doesPerkMatchTokens(perk, tokens))
        .map((perk) => game.perkSkillIdByPerkId[perk.id]),
    );
    expect(matchSkills.size).toBe(1);

    const output = await search({ query: "anatomical", limit: 1 });

    expect(output.total).toBeGreaterThan(1);
    expect(output.note).not.toContain("add skill");
    expect(output.note).toContain("add more query words");
  });

  it("does not suggest requirement filters that are already set", async () => {
    const output = await search({ skill: "destiny", maxSkillReq: 1000, maxPlayerLevel: 1000, limit: 5 });

    expect(output.nextOffset).toBe(5);
    expect(output.note).not.toContain("maxSkillReq");
    expect(output.note).not.toContain("maxPlayerLevel");
    expect(output.note).toContain("add query words");
  });

  it("has no note and no next offset on a complete page", async () => {
    const output = await search({ query: "anatomical lore", skill: "sneak" });

    expect(output.nextOffset).toBeNull();
    expect(output.note).toBeUndefined();
  });

  it("returns an empty page with a broadening note when nothing matches", async () => {
    const output = await search({ query: "zzqxv nonexistent", skill: "sneak", maxSkillReq: 0 });

    expect(output).toMatchObject({ total: 0, rows: [], nextOffset: null });
    expect(output.note).toContain("No perks matched");
    expect(output.note).toContain("fewer or shorter query words");
    expect(output.note).toContain("drop the skill filter");
    expect(output.note).toContain("maxSkillReq");
  });

  it("explains an offset past the last match", async () => {
    const output = await search({ skill: "sneak", offset: 1000 });

    expect(output.rows).toEqual([]);
    expect(output.total).toBeGreaterThan(0);
    expect(output.note).toContain("past the last match");
  });

  it("rejects an unknown skill filter with valid skill ids, searching nothing", async () => {
    const result = await harness.call(SEARCH_PERKS_TOOL, { skill: "archery" });

    expect(result.isError).toBe(true);
    expect(result.structured).toBeUndefined();
    expect(result.text).toContain('skill "archery"');
    expect(result.text).toContain("marksman");
    expect(result.text).toContain("Valid skill values:");
  });

  it("suggests the closest skill id for a near-miss skill filter", async () => {
    const result = await harness.call(SEARCH_PERKS_TOOL, { skill: "sneek" });

    expect(result.isError).toBe(true);
    expect(result.text).toContain("Did you mean: sneak (Sneak)");
  });

  it("rejects a skill with no perk tree", async () => {
    const result = await harness.call(SEARCH_PERKS_TOOL, { skill: "traits" });

    expect(result.isError).toBe(true);
    expect(result.text).toContain("not a skill id with a perk tree");
  });

  it.each([
    [{ limit: 500 }],
    [{ limit: 0 }],
    [{ offset: -1 }],
    [{ response_format: "verbose" }],
    [{ maxSkillReq: "fifty" }],
    [{ query: "x".repeat(201) }],
    [{ skill: "x".repeat(201) }],
  ])("rejects malformed arguments %j through input validation", async (args) => {
    const result = await harness.call(SEARCH_PERKS_TOOL, args);

    expect(result.isError).toBe(true);
    expect(result.text).toContain("Input validation error");
  });

  it.each([[{ tree: "sneak" }], [{ query: "stealth", max_skill_req: 20 }]])(
    "rejects an unknown argument %j instead of ignoring it",
    async (args) => {
      const result = await harness.call(SEARCH_PERKS_TOOL, args);

      expect(result.isError).toBe(true);
      expect(result.structured).toBeUndefined();
      expect(result.text).toContain("Input validation error");
    },
  );

  it("keeps every default-limit page, even detailed and filter-free, under 10k tokens", async () => {
    let widest = 0;
    let offset: number | null = 0;
    while (offset !== null) {
      const result = await harness.call(SEARCH_PERKS_TOOL, { response_format: "detailed", offset });
      widest = Math.max(widest, result.text.length);
      offset = (result.structured as unknown as SearchPerksOutput).nextOffset;
    }

    expect(widest / 4).toBeLessThan(10_000);
  });
});
