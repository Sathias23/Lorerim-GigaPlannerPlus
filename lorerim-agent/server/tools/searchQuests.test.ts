import { afterAll, beforeAll, describe, expect, it } from "vitest";
import rawQuestIndex from "../../knowledge/quests/index.json";
import { QUEST_INDEX, QUEST_KINDS, questIndexSchema, type QuestIndexEntry } from "../questIndex";
import { connectTestClient, type TestClient } from "../testClient";
import {
  SEARCH_QUESTS_DEFAULT_LIMIT,
  SEARCH_QUESTS_TOOL,
  getQuestSearchTokens,
  normalizeQuestText,
  searchQuests,
  searchQuestsInputSchema,
  type QuestRow,
  type SearchQuestsOutput,
} from "./searchQuests";

let harness: TestClient;

beforeAll(async () => {
  harness = await connectTestClient();
});

afterAll(async () => {
  await harness.close();
});

const entryById = new Map(QUEST_INDEX.map((entry) => [entry.id, entry]));

async function search(args: Record<string, unknown>): Promise<SearchQuestsOutput> {
  const result = await harness.call(SEARCH_QUESTS_TOOL, args);
  expect(result.isError, result.text).toBe(false);
  // The text block carries exactly the structured JSON.
  expect(JSON.parse(result.text)).toEqual(result.structured);
  return result.structured as unknown as SearchQuestsOutput;
}

/** Every row across all pages of a search, following nextOffset. */
async function searchAll(args: Record<string, unknown>): Promise<QuestRow[]> {
  const rows: QuestRow[] = [];
  let offset: number | null = 0;
  while (offset !== null) {
    const page: SearchQuestsOutput = await search({ ...args, limit: 25, offset });
    rows.push(...page.rows);
    offset = page.nextOffset;
  }
  return rows;
}

/** All of an entry's searchable text, normalized the way the tool normalizes queries. */
function entryText(entry: QuestIndexEntry): string {
  return normalizeQuestText(
    [
      entry.id,
      entry.title,
      entry.category,
      entry.summary,
      entry.start,
      entry.region,
      ...entry.quests,
      ...entry.locations,
      ...entry.mods,
    ].join(" "),
  );
}

function fixtureEntry(overrides: Partial<QuestIndexEntry> & Pick<QuestIndexEntry, "id">): QuestIndexEntry {
  return {
    title: overrides.id,
    kind: "mod-added",
    category: "new-quests",
    summary: "",
    quests: [],
    locations: [],
    region: "",
    start: "",
    mods: [],
    confidence: "high",
    ...overrides,
  };
}

describe("quest corpus index", () => {
  it("loads every entry of knowledge/quests/index.json", () => {
    expect(QUEST_INDEX.length).toBe((rawQuestIndex as unknown[]).length);
    expect(QUEST_INDEX.length).toBeGreaterThan(0);
    for (const kind of QUEST_KINDS) {
      expect(QUEST_INDEX.some((entry) => entry.kind === kind), kind).toBe(true);
    }
  });

  it("rejects duplicate ids", () => {
    const entry = fixtureEntry({ id: "dup" });
    const result = questIndexSchema.safeParse([entry, entry]);

    expect(result.success).toBe(false);
    expect(JSON.stringify(result.error?.issues)).toContain('duplicate id \\"dup\\"');
  });
});

describe("getQuestSearchTokens", () => {
  it("ignores case, accents, apostrophes, punctuation, and filler words", () => {
    expect(getQuestSearchTokens("How do I start Belethor’s SISTER?")).toEqual(["start", "belethors", "sister"]);
    expect(getQuestSearchTokens("Dagur's Mjǫll, the Lioness")).toEqual(["dagurs", "mjoll", "lioness"]);
    expect(getQuestSearchTokens("  the of where  ")).toEqual([]);
  });
});

describe("searchQuests ranking", () => {
  const entries = [
    fixtureEntry({ id: "summary-only", title: "Alpha", summary: "Mentions the frost tomb in passing." }),
    fixtureEntry({ id: "location-hit", title: "Beta", locations: ["Frost Tomb"] }),
    fixtureEntry({ id: "quest-hit", title: "Gamma", quests: ["Into the Frost Tomb"] }),
    fixtureEntry({ id: "title-hit", title: "The Frost Tomb" }),
    fixtureEntry({ id: "split-words", title: "Delta", summary: "A tomb.", start: "Frost falls." }),
    fixtureEntry({ id: "no-hit", title: "Epsilon", summary: "Nothing relevant." }),
  ];

  it("ranks title hits, then quest names, then locations, then other text, and drops non-matches", () => {
    const input = searchQuestsInputSchema.parse({ query: "frost tomb" });
    const result = searchQuests(entries, input);

    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.output.rows.map((row) => row.id)).toEqual([
      "title-hit",
      "quest-hit",
      "location-hit",
      "summary-only",
      "split-words",
    ]);
  });

  it("lists names that contain every query word as matched", () => {
    const input = searchQuestsInputSchema.parse({ query: "frost tomb" });
    const result = searchQuests(entries, input);
    if (!result.ok) throw new Error(result.message);
    const byId = new Map(result.output.rows.map((row) => [row.id, row]));

    expect(byId.get("quest-hit")?.matched).toEqual(["Into the Frost Tomb"]);
    expect(byId.get("location-hit")?.matched).toEqual(["Frost Tomb"]);
    expect(byId.get("title-hit")).not.toHaveProperty("matched");
  });

  it("puts the entry the query names ahead of one that only mentions it in its title", () => {
    const named = [
      fixtureEntry({ id: "contracts", title: "More Contracts for the Dark Brotherhood" }),
      fixtureEntry({ id: "dark-brotherhood", title: "Dark Brotherhood (LoreRim changes)", kind: "vanilla-changes" }),
    ];
    const result = searchQuests(named, searchQuestsInputSchema.parse({ query: "the dark brotherhood" }));
    if (!result.ok) throw new Error(result.message);

    expect(result.output.rows.map((row) => row.id)).toEqual(["dark-brotherhood", "contracts"]);
  });
});

describe(`${SEARCH_QUESTS_TOOL}`, () => {
  it("finds an entry by one of its quest names, and every row contains every query word", async () => {
    const tokens = getQuestSearchTokens("Barrow of the Wyrm");
    const output = await search({ query: "Barrow of the Wyrm" });

    expect(output.rows.map((row) => row.id)).toContain("wyrmstooth");
    expect(output.rows[0]!.matched).toContain("Barrow of the Wyrm");
    for (const row of output.rows) {
      const text = entryText(entryById.get(row.id)!);
      expect(tokens.every((token) => text.includes(token)), row.id).toBe(true);
    }
    const expectedTotal = QUEST_INDEX.filter((entry) =>
      tokens.every((token) => entryText(entry).includes(token)),
    ).length;
    expect(output.total).toBe(expectedTotal);
  });

  it("puts a title match first", async () => {
    const output = await search({ query: "forgotten city" });

    expect(output.rows[0]!.id).toBe("the-forgotten-city");
  });

  it("answers a question-shaped query like its keywords", async () => {
    const question = await search({ query: "Where is the Forgotten City?" });
    const keywords = await search({ query: "forgotten city" });

    expect(question).toEqual(keywords);
  });

  it("ignores case and apostrophes", async () => {
    const plain = await search({ query: "BELETHORS SISTER" });
    const apostrophe = await search({ query: "Belethor's sister" });

    expect(plain).toEqual(apostrophe);
    expect(plain.rows[0]!.id).toBe("belethors-sister");
  });

  it("returns concise rows with the summary and start conditions", async () => {
    const entry = entryById.get("belethors-sister")!;
    // No query, so no matched names either.
    const rows = await searchAll({ category: entry.category });
    const row = rows.find((candidate) => candidate.id === "belethors-sister")!;

    expect(Object.keys(row).sort()).toEqual(["category", "id", "kind", "start", "summary", "title"]);
    expect(row).toEqual({
      id: entry.id,
      title: entry.title,
      kind: entry.kind,
      category: entry.category,
      summary: entry.summary,
      start: entry.start,
    });
  });

  it("adds quest and location names, region, mods, and confidence in detailed format", async () => {
    const output = await search({ query: "belethors sister", response_format: "detailed" });
    const row = output.rows.find((entry) => entry.id === "belethors-sister")!;
    const entry = entryById.get("belethors-sister")!;

    expect(row.quests).toEqual(entry.quests);
    expect(row.locations).toEqual(entry.locations);
    expect(row.region).toBe(entry.region);
    expect(row.mods).toEqual(entry.mods);
    expect(row.confidence).toBe(entry.confidence);
  });

  it("lists every entry of a kind, ordered by title, when given filters only", async () => {
    const expected = QUEST_INDEX.filter((entry) => entry.kind === "area")
      .map((entry) => entry.title)
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

    const rows = await searchAll({ kind: "area" });

    expect(rows.map((row) => row.title)).toEqual(expected);
    expect(rows.every((row) => row.kind === "area" && row.matched === undefined)).toBe(true);
  });

  it("filters by category", async () => {
    const expected = QUEST_INDEX.filter((entry) => entry.category === "follower-quests").map((entry) => entry.id);
    expect(expected.length).toBeGreaterThan(0);

    const rows = await searchAll({ category: "follower-quests" });

    expect(rows.map((row) => row.id).sort()).toEqual(expected.sort());
  });

  it("lists the whole corpus in kind order with no query, and treats a filler-only query as none", async () => {
    const rows = await searchAll({});
    const fillerOnly = await searchAll({ query: "the of where" });

    expect(rows).toHaveLength(QUEST_INDEX.length);
    expect(fillerOnly).toEqual(rows);
    const kindIndexes = rows.map((row) => QUEST_KINDS.indexOf(row.kind));
    expect(kindIndexes).toEqual([...kindIndexes].sort((a, b) => a - b));
  });

  it("pages a truncated result and names the next offset and narrower filters", async () => {
    const first = await search({});

    expect(first.total).toBe(QUEST_INDEX.length);
    expect(first.rows).toHaveLength(SEARCH_QUESTS_DEFAULT_LIMIT);
    expect(first.nextOffset).toBe(SEARCH_QUESTS_DEFAULT_LIMIT);
    expect(first.note).toContain(`offset ${SEARCH_QUESTS_DEFAULT_LIMIT}`);
    expect(first.note).toContain("set kind");
    expect(first.note).toContain("set category");

    const second = await search({ offset: first.nextOffset });
    const firstIds = new Set(first.rows.map((row) => row.id));
    expect(second.rows.some((row) => firstIds.has(row.id))).toBe(false);
  });

  it("has no note and no next offset on a complete page", async () => {
    const output = await search({ query: "belethors sister" });

    expect(output.nextOffset).toBeNull();
    expect(output.note).toBeUndefined();
  });

  it("returns an empty page with a broadening note that states the corpus coverage", async () => {
    const output = await search({ query: "zzqxv nonexistent", kind: "area", category: "towns" });

    expect(output).toMatchObject({ total: 0, rows: [], nextOffset: null });
    expect(output.note).toContain("No corpus entries matched");
    expect(output.note).toContain("fewer or shorter words");
    expect(output.note).toContain("drop the kind filter");
    expect(output.note).toContain("drop the category filter");
    expect(output.note).toContain("no walkthroughs of unchanged vanilla quests");
  });

  it("explains an offset past the last match", async () => {
    const output = await search({ kind: "vanilla-changes", offset: 1000 });

    expect(output.rows).toEqual([]);
    expect(output.total).toBeGreaterThan(0);
    expect(output.note).toContain("past the last match");
  });

  it("rejects an unknown category with the closest and the valid values, searching nothing", async () => {
    const result = await harness.call(SEARCH_QUESTS_TOOL, { category: "follower" });

    expect(result.isError).toBe(true);
    expect(result.structured).toBeUndefined();
    expect(result.text).toContain('category "follower"');
    expect(result.text).toContain("Did you mean: follower-quests");
    expect(result.text).toContain("Valid category values:");
    expect(result.text).toContain("new-lands");
  });

  it("is deterministic", async () => {
    const first = await harness.call(SEARCH_QUESTS_TOOL, { query: "dawnstar", response_format: "detailed" });
    const second = await harness.call(SEARCH_QUESTS_TOOL, { query: "dawnstar", response_format: "detailed" });

    expect(second.text).toBe(first.text);
  });

  it.each([
    [{ limit: 26 }],
    [{ limit: 0 }],
    [{ offset: -1 }],
    [{ kind: "dungeon" }],
    [{ response_format: "verbose" }],
    [{ query: "x".repeat(201) }],
    [{ category: "x".repeat(201) }],
  ])("rejects malformed arguments %j through input validation", async (args) => {
    const result = await harness.call(SEARCH_QUESTS_TOOL, args);

    expect(result.isError).toBe(true);
    expect(result.text).toContain("Input validation error");
  });

  it("rejects an unknown argument instead of ignoring it", async () => {
    const result = await harness.call(SEARCH_QUESTS_TOOL, { query: "wyrmstooth", region: "Haafingar" });

    expect(result.isError).toBe(true);
    expect(result.structured).toBeUndefined();
    expect(result.text).toContain("Input validation error");
  });

  it("keeps every default-limit page, even detailed and filter-free, under 10k tokens", async () => {
    let widest = 0;
    let offset: number | null = 0;
    while (offset !== null) {
      const result = await harness.call(SEARCH_QUESTS_TOOL, { response_format: "detailed", offset });
      widest = Math.max(widest, result.text.length);
      offset = (result.structured as unknown as SearchQuestsOutput).nextOffset;
    }

    expect(widest / 4).toBeLessThan(10_000);
  });
});
