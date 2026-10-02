import type { McpServer } from "@modelcontextprotocol/server";
import * as z from "zod";
import { paginate } from "../format";
import { rankCloseMatches } from "../ids";
import { QUEST_INDEX, QUEST_KINDS, type QuestIndexEntry } from "../questIndex";
import { READ_ONLY_TOOL_ANNOTATIONS, errorResult, jsonResult } from "../toolResult";
import { MAX_TEXT_INPUT_LENGTH } from "./searchPerks";

export const SEARCH_QUESTS_TOOL = "lorerim_search_quests";

export const SEARCH_QUESTS_DEFAULT_LIMIT = 10;
export const SEARCH_QUESTS_MAX_LIMIT = 25;

/**
 * Question words and fillers dropped from the query, so "how do I start the
 * forgotten city" searches like "start forgotten city".
 */
const STOP_WORDS: ReadonlySet<string> = new Set([
  "a", "an", "and", "the", "of", "to", "in", "on", "at", "for", "from", "with",
  "how", "what", "where", "when", "who", "which", "do", "does", "can", "i", "is", "my",
]);

export const searchQuestsInputSchema = z.object({
  query: z
    .string()
    .max(MAX_TEXT_INPUT_LENGTH)
    .optional()
    .describe(
      "Names or keywords: a quest, mod, place, NPC, faction, or reward. Every word must appear somewhere in an entry's title, summary, start conditions, quest names, location names, region, or mod names; case, accents, and apostrophes are ignored, and filler words (the, of, how, where…) are dropped. Omit to list entries by filters alone.",
    ),
  kind: z
    .enum(QUEST_KINDS)
    .optional()
    .describe(
      '"mod-added": quests mods add; "vanilla-changes": one overlay per official questline (base game, DLC, Creation Club) saying what LoreRim changes; "area": new lands, dungeons, landmarks, and town expansions.',
    ),
  category: z
    .string()
    .max(MAX_TEXT_INPUT_LENGTH)
    .optional()
    .describe('Category id, e.g. "new-lands", "follower-quests", "questline", "radiant". An unknown value lists the valid ones.'),
  limit: z
    .number()
    .int()
    .min(1)
    .max(SEARCH_QUESTS_MAX_LIMIT)
    .default(SEARCH_QUESTS_DEFAULT_LIMIT)
    .describe("Page size."),
  offset: z.number().int().min(0).default(0).describe("Index of the first match to return."),
  response_format: z
    .enum(["concise", "detailed"])
    .default("concise")
    .describe(
      '"concise" rows carry the summary and how to start; "detailed" rows add every quest and location name, the region, the mods involved, and the research confidence.',
    ),
}).strict();

export type SearchQuestsInput = z.output<typeof searchQuestsInputSchema>;

const questRowSchema = z.object({
  id: z.string(),
  title: z.string(),
  kind: z.enum(QUEST_KINDS),
  category: z.string(),
  summary: z.string(),
  start: z.string(),
  matched: z.array(z.string()).optional(),
  quests: z.array(z.string()).optional(),
  locations: z.array(z.string()).optional(),
  region: z.string().optional(),
  mods: z.array(z.string()).optional(),
  confidence: z.string().optional(),
});

export type QuestRow = z.infer<typeof questRowSchema>;

export const searchQuestsOutputSchema = z.object({
  total: z.number().int(),
  offset: z.number().int(),
  limit: z.number().int(),
  nextOffset: z.number().int().nullable(),
  rows: z.array(questRowSchema),
  note: z.string().optional(),
});

export type SearchQuestsOutput = z.infer<typeof searchQuestsOutputSchema>;

/** Lowercase, accent-free, apostrophe-free words separated by single spaces. */
export function normalizeQuestText(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/['‘’`]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

export function getQuestSearchTokens(query: string): string[] {
  return normalizeQuestText(query)
    .split(" ")
    .filter((token) => token.length > 0 && !STOP_WORDS.has(token));
}

function containsAll(haystack: string, tokens: readonly string[]): boolean {
  return tokens.every((token) => haystack.includes(token));
}

/** Pre-normalized text of one entry, by how strongly a hit there signals relevance. */
interface SearchFields {
  /** The id and the title as query tokens, to spot an entry named by the query. */
  leads: string[];
  heading: string;
  names: string[];
  quests: string;
  locations: string;
  all: string;
}

function getSearchFields(entry: QuestIndexEntry): SearchFields {
  const heading = normalizeQuestText(`${entry.id} ${entry.title}`);
  const quests = entry.quests.map(normalizeQuestText).join(" ");
  const locations = entry.locations.map(normalizeQuestText).join(" ");
  const rest = normalizeQuestText(
    [entry.category, entry.summary, entry.start, entry.region, ...entry.mods].join(" "),
  );
  return {
    leads: [entry.id, entry.title].map((text) => getQuestSearchTokens(text).join(" ")),
    heading,
    names: [...entry.quests, ...entry.locations].map(normalizeQuestText),
    quests,
    locations,
    all: [heading, quests, locations, rest].join(" "),
  };
}

/**
 * Relevance of a matching entry: each token scores by the strongest field it
 * appears in (title > quest names > location names > the rest), plus a bonus
 * when the whole query is a phrase in the title or a quest or location name,
 * and another when the id or title starts with it (the entry is named by it).
 */
function scoreEntry(fields: SearchFields, tokens: readonly string[]): number {
  let score = 0;
  for (const token of tokens) {
    if (fields.heading.includes(token)) score += 4;
    else if (fields.quests.includes(token)) score += 3;
    else if (fields.locations.includes(token)) score += 2;
    else score += 1;
  }
  const phrase = tokens.join(" ");
  if (fields.heading.includes(phrase)) score += 10;
  else if (fields.names.some((name) => name.includes(phrase))) score += 6;
  if (fields.leads.some((lead) => lead === phrase || lead.startsWith(`${phrase} `))) score += 5;
  return score;
}

function compareText(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

function toRow(entry: QuestIndexEntry, tokens: readonly string[], detailed: boolean): QuestRow {
  const row: QuestRow = {
    id: entry.id,
    title: entry.title,
    kind: entry.kind,
    category: entry.category,
    summary: entry.summary,
    start: entry.start,
  };
  if (tokens.length > 0) {
    const matched = [...new Set([...entry.quests, ...entry.locations])].filter((name) =>
      containsAll(normalizeQuestText(name), tokens),
    );
    if (matched.length > 0) row.matched = matched;
  }
  if (detailed) {
    row.quests = entry.quests;
    row.locations = entry.locations;
    row.region = entry.region;
    row.mods = entry.mods;
    row.confidence = entry.confidence;
  }
  return row;
}

function listCategories(entries: readonly QuestIndexEntry[]): string[] {
  return [...new Set(entries.map((entry) => entry.category))].sort(compareText);
}

function formatUnknownCategory(value: string, categories: readonly string[]): string {
  const suggestions = rankCloseMatches(
    value,
    categories.map((category) => ({ id: category, name: category })),
  );
  const parts = [`category ${JSON.stringify(value)} is not a quest corpus category.`];
  if (suggestions.length > 0) {
    parts.push(`Did you mean: ${suggestions.map((ref) => ref.id).join(", ")}?`);
  }
  parts.push(`Valid category values: ${categories.join(", ")}.`);
  return parts.join(" ");
}

function describeBroadening(input: SearchQuestsInput, hasQuery: boolean): string {
  const moves: string[] = [];
  if (hasQuery) moves.push("use fewer or shorter words (every word must appear), or one distinctive name");
  if (input.kind !== undefined) moves.push("drop the kind filter");
  if (input.category !== undefined) moves.push("drop the category filter");
  const broaden = moves.length > 0 ? ` To broaden: ${moves.join("; ")}.` : "";
  return (
    `No corpus entries matched.${broaden} ` +
    "The corpus covers quests and areas mods add plus what LoreRim changes in official questlines; " +
    "it has no walkthroughs of unchanged vanilla quests, so say so rather than guessing LoreRim-specific details."
  );
}

function describeNarrowing(input: SearchQuestsInput, hasQuery: boolean): string {
  const moves = [hasQuery ? "add more words" : "add query words, e.g. a quest, place, or NPC name"];
  if (input.kind === undefined) moves.push(`set kind (${QUEST_KINDS.join(", ")})`);
  if (input.category === undefined) moves.push("set category");
  return moves.join("; ");
}

/** Runs a search; returns the page or the text of an actionable error. */
export function searchQuests(
  entries: readonly QuestIndexEntry[],
  input: SearchQuestsInput,
): { ok: true; output: SearchQuestsOutput } | { ok: false; message: string } {
  const categories = listCategories(entries);
  if (input.category !== undefined && !categories.includes(input.category)) {
    return { ok: false, message: formatUnknownCategory(input.category, categories) };
  }

  const tokens = getQuestSearchTokens(input.query ?? "");
  const hasQuery = tokens.length > 0;
  const kindOrder = (entry: QuestIndexEntry) => QUEST_KINDS.indexOf(entry.kind);

  const matches = entries
    .filter(
      (entry) =>
        (input.kind === undefined || entry.kind === input.kind) &&
        (input.category === undefined || entry.category === input.category),
    )
    .map((entry) => ({ entry, fields: getSearchFields(entry) }))
    .filter(({ fields }) => !hasQuery || containsAll(fields.all, tokens))
    .map(({ entry, fields }) => ({ entry, score: hasQuery ? scoreEntry(fields, tokens) : 0 }));

  matches.sort(
    (a, b) =>
      b.score - a.score ||
      kindOrder(a.entry) - kindOrder(b.entry) ||
      compareText(a.entry.title, b.entry.title) ||
      compareText(a.entry.id, b.entry.id),
  );

  const page = paginate(matches, input.offset, input.limit);
  const detailed = input.response_format === "detailed";
  const output: SearchQuestsOutput = {
    total: page.total,
    offset: page.offset,
    limit: page.limit,
    nextOffset: page.nextOffset,
    rows: page.items.map(({ entry }) => toRow(entry, tokens, detailed)),
  };

  if (page.total === 0) {
    output.note = describeBroadening(input, hasQuery);
  } else if (page.items.length === 0) {
    output.note = `offset ${page.offset} is past the last match; there are ${page.total} matches, so use an offset below ${page.total}.`;
  } else if (page.nextOffset !== null) {
    const first = page.offset + 1;
    const last = page.offset + page.items.length;
    output.note =
      `Showing matches ${first}-${last} of ${page.total}${hasQuery ? ", best first" : ""}. ` +
      `For the next page call again with offset ${page.nextOffset}. ` +
      `To narrow the search instead, ${describeNarrowing(input, hasQuery)}.`;
  }

  return { ok: true, output };
}

export function registerSearchQuestsTool(
  server: McpServer,
  entries: readonly QuestIndexEntry[] = QUEST_INDEX,
): void {
  server.registerTool(
    SEARCH_QUESTS_TOOL,
    {
      title: "Search LoreRim quests and areas",
      description:
        "Search the LoreRim quest and area corpus: quests added by mods, what LoreRim changes in official questlines (base game, DLC, Creation Club), and new lands, dungeons, and towns. " +
        "Each row says what the entry is and how to start it in LoreRim, including LoreRim-specific gates (level, prerequisite quests) that differ from the mod's or the wiki's defaults. " +
        "Use it for any question about a LoreRim quest, questline, quest mod, or place — where it starts, what it needs, what changed — instead of answering from vanilla Skyrim knowledge. " +
        "Search with names or keywords rather than a whole question; results are ranked best first and paginated with limit and offset. " +
        "The corpus was researched from a LoreRim install, where the install outranks the LoreRim website and mod pages; it does not walk through unchanged vanilla quests.",
      inputSchema: searchQuestsInputSchema,
      outputSchema: searchQuestsOutputSchema,
      annotations: READ_ONLY_TOOL_ANNOTATIONS,
    },
    (input) => {
      const result = searchQuests(entries, input);
      return result.ok ? jsonResult(result.output) : errorResult(result.message);
    },
  );
}
