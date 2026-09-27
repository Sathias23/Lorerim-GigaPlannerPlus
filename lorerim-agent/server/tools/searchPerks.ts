import type { McpServer } from "@modelcontextprotocol/server";
import * as z from "zod";
import type { AppData, GameData, Perk } from "@/data/schemas";
import { getPerkNodeRequirements } from "@/lib/perkRequirements";
import { doesPerkMatchTokens, getPerkSearchTokens } from "@/lib/perkSearch";
import { paginate, summarize } from "../format";
import { formatEntityRef, rankCloseMatches, type EntityRef } from "../ids";
import { READ_ONLY_TOOL_ANNOTATIONS, errorResult, jsonResult } from "../toolResult";

export const SEARCH_PERKS_TOOL = "lorerim_search_perks";

export const SEARCH_PERKS_DEFAULT_LIMIT = 20;
export const SEARCH_PERKS_MAX_LIMIT = 50;

/** Caps free-text inputs so an absurd string cannot stall close-match ranking. */
export const MAX_TEXT_INPUT_LENGTH = 200;

export const searchPerksInputSchema = z.object({
  query: z
    .string()
    .max(MAX_TEXT_INPUT_LENGTH)
    .optional()
    .describe(
      "Words to look for. Every word must appear somewhere in the perk's id, name, description, requirements, or effects. Omit to list perks by filters alone.",
    ),
  skill: z
    .string()
    .max(MAX_TEXT_INPUT_LENGTH)
    .optional()
    .describe('Skill id whose perk tree to search, e.g. "sneak", "marksman", "destruction".'),
  maxSkillReq: z
    .number()
    .int()
    .min(0)
    .optional()
    .describe("Only perks whose skill-level requirement is at most this."),
  maxPlayerLevel: z
    .number()
    .int()
    .min(1)
    .optional()
    .describe("Only perks with no player-level requirement or one at most this."),
  limit: z
    .number()
    .int()
    .min(1)
    .max(SEARCH_PERKS_MAX_LIMIT)
    .default(SEARCH_PERKS_DEFAULT_LIMIT)
    .describe("Page size."),
  offset: z.number().int().min(0).default(0).describe("Index of the first match to return."),
  response_format: z
    .enum(["concise", "detailed"])
    .default("concise")
    .describe(
      '"concise" rows carry a one-line summary; "detailed" rows add the full description, prerequisite perk ids, and whether the perk costs a perk point.',
    ),
}).strict();

export type SearchPerksInput = z.output<typeof searchPerksInputSchema>;

const perkRowSchema = z.object({
  id: z.string(),
  name: z.string(),
  skill: z.string(),
  skillReq: z.number().nullable(),
  playerLevelReq: z.number().nullable(),
  summary: z.string(),
  description: z.string().optional(),
  prerequisites: z.array(z.string()).optional(),
  prerequisitesAny: z.array(z.string()).optional(),
  costsPerkPoint: z.boolean().optional(),
});

export type PerkRow = z.infer<typeof perkRowSchema>;

export const searchPerksOutputSchema = z.object({
  total: z.number().int(),
  offset: z.number().int(),
  limit: z.number().int(),
  nextOffset: z.number().int().nullable(),
  rows: z.array(perkRowSchema),
  note: z.string().optional(),
});

export type SearchPerksOutput = z.infer<typeof searchPerksOutputSchema>;

/** Skills that own a perk tree — the valid `skill` filter values, in skill order. */
function listPerkTreeSkills(game: GameData): EntityRef[] {
  return game.skills
    .filter((skill) => Object.hasOwn(game.perkTrees, skill.id))
    .map((skill) => ({ id: skill.id, name: skill.name }));
}

function formatUnknownSkillFilter(value: string, treeSkills: readonly EntityRef[]): string {
  const suggestions = rankCloseMatches(value, treeSkills);
  const parts = [`skill ${JSON.stringify(value)} is not a skill id with a perk tree.`];
  if (suggestions.length > 0) {
    parts.push(`Did you mean: ${suggestions.map(formatEntityRef).join(", ")}?`);
  }
  parts.push(`Valid skill values: ${treeSkills.map(formatEntityRef).join(", ")}.`);
  return parts.join(" ");
}

function toRow(game: GameData, perk: Perk, detailed: boolean): PerkRow {
  const requirements = getPerkNodeRequirements(perk);
  const row: PerkRow = {
    id: perk.id,
    name: perk.name,
    skill: game.perkSkillIdByPerkId[perk.id] ?? "",
    skillReq: requirements.skillReq,
    playerLevelReq: requirements.playerLevelReq,
    summary: summarize(perk.description),
  };
  if (detailed) {
    row.description = perk.description;
    row.prerequisites = perk.prerequisites;
    row.prerequisitesAny = perk.prerequisitesAny ?? [];
    row.costsPerkPoint = perk.costsPerkPoint;
  }
  return row;
}

function compareText(a: string, b: string): number {
  return a < b ? -1 : a > b ? 1 : 0;
}

function describeNarrowing(
  game: GameData,
  input: SearchPerksInput,
  hasQuery: boolean,
  matches: readonly Perk[],
): string {
  const moves: string[] = [];
  if (input.skill === undefined) {
    const counts = new Map<string, number>();
    for (const perk of matches) {
      const skill = game.perkSkillIdByPerkId[perk.id] ?? "";
      counts.set(skill, (counts.get(skill) ?? 0) + 1);
    }
    // Matches are sorted by skill order, so the first maximum is deterministic.
    let top = "";
    let topCount = 0;
    for (const [skill, count] of counts) {
      if (count > topCount) {
        top = skill;
        topCount = count;
      }
    }
    // A skill that already holds every match would narrow nothing.
    if (topCount < matches.length) {
      moves.push(`add skill: "${top}" (${topCount} of these matches) or another skill id`);
    }
  }
  moves.push(
    hasQuery ? "add more query words" : 'add query words, e.g. an effect such as "damage" or "cost"',
  );
  if (input.maxSkillReq === undefined) moves.push("set maxSkillReq");
  if (input.maxPlayerLevel === undefined) moves.push("set maxPlayerLevel");
  return moves.join("; ");
}

function describeBroadening(input: SearchPerksInput, hasQuery: boolean): string {
  const moves: string[] = [];
  if (hasQuery) moves.push("use fewer or shorter query words (every word must appear)");
  if (input.skill !== undefined) moves.push("drop the skill filter");
  if (input.maxSkillReq !== undefined) moves.push("raise or drop maxSkillReq");
  if (input.maxPlayerLevel !== undefined) moves.push("raise or drop maxPlayerLevel");
  return moves.length > 0 ? `No perks matched. To broaden: ${moves.join("; ")}.` : "No perks matched.";
}

/** Runs a search; returns the page or the text of an actionable error. */
export function searchPerks(
  game: GameData,
  input: SearchPerksInput,
): { ok: true; output: SearchPerksOutput } | { ok: false; message: string } {
  const treeSkills = listPerkTreeSkills(game);
  if (input.skill !== undefined && !treeSkills.some((skill) => skill.id === input.skill)) {
    return { ok: false, message: formatUnknownSkillFilter(input.skill, treeSkills) };
  }

  const tokens = getPerkSearchTokens(input.query ?? "");
  const hasQuery = tokens.length > 0;
  const skillOrder = new Map(game.skills.map((skill, index) => [skill.id, index]));
  const orderOf = (perk: Perk) =>
    skillOrder.get(game.perkSkillIdByPerkId[perk.id] ?? "") ?? Number.MAX_SAFE_INTEGER;

  const matches = Object.values(game.perkById).filter((perk) => {
    if (input.skill !== undefined && game.perkSkillIdByPerkId[perk.id] !== input.skill) {
      return false;
    }
    const requirements = getPerkNodeRequirements(perk);
    if (input.maxSkillReq !== undefined && (requirements.skillReq ?? 0) > input.maxSkillReq) {
      return false;
    }
    if (
      input.maxPlayerLevel !== undefined &&
      requirements.playerLevelReq !== null &&
      requirements.playerLevelReq > input.maxPlayerLevel
    ) {
      return false;
    }
    // doesPerkMatchTokens is false for no tokens, so a filters-only search skips it.
    return !hasQuery || doesPerkMatchTokens(perk, tokens);
  });

  matches.sort(
    (a, b) =>
      orderOf(a) - orderOf(b) ||
      (getPerkNodeRequirements(a).skillReq ?? 0) - (getPerkNodeRequirements(b).skillReq ?? 0) ||
      compareText(a.name, b.name) ||
      compareText(a.id, b.id),
  );

  const page = paginate(matches, input.offset, input.limit);
  const detailed = input.response_format === "detailed";
  const output: SearchPerksOutput = {
    total: page.total,
    offset: page.offset,
    limit: page.limit,
    nextOffset: page.nextOffset,
    rows: page.items.map((perk) => toRow(game, perk, detailed)),
  };

  if (page.total === 0) {
    output.note = describeBroadening(input, hasQuery);
  } else if (page.items.length === 0) {
    output.note = `offset ${page.offset} is past the last match; there are ${page.total} matches, so use an offset below ${page.total}.`;
  } else if (page.nextOffset !== null) {
    const first = page.offset + 1;
    const last = page.offset + page.items.length;
    output.note =
      `Showing matches ${first}-${last} of ${page.total}. ` +
      `For the next page call again with offset ${page.nextOffset}. ` +
      `To narrow the search instead, ${describeNarrowing(game, input, hasQuery, matches)}.`;
  }

  return { ok: true, output };
}

export function registerSearchPerksTool(server: McpServer, appData: AppData): void {
  server.registerTool(
    SEARCH_PERKS_TOOL,
    {
      title: "Search LoreRim perks",
      description:
        "Find LoreRim perks by text and filters and get their real perk ids, skill, skill-level requirement, and player-level requirement. " +
        "Use it whenever you need a perk id or want to know which perks exist for a goal, skill, or level — never guess a perk id. " +
        "Filter by skill tree (skill id), maximum skill requirement, and maximum player level; results are paginated with limit and offset. " +
        "For one perk's full detail (effects, prerequisite names) use lorerim_get_entity with kind \"perk\".",
      inputSchema: searchPerksInputSchema,
      outputSchema: searchPerksOutputSchema,
      annotations: READ_ONLY_TOOL_ANNOTATIONS,
    },
    (input) => {
      const result = searchPerks(appData.game, input);
      return result.ok ? jsonResult(result.output) : errorResult(result.message);
    },
  );
}
