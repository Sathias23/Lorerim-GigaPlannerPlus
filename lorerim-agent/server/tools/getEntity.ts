import type { McpServer } from "@modelcontextprotocol/server";
import * as z from "zod";
import type {
  AppData,
  CharacterOption,
  GameData,
  Perk,
  Skill,
  SupernaturalData,
} from "@/data/schemas";
import { getPerkNodeRequirements } from "@/lib/perkRequirements";
import { isSupernaturalOptionId, type SupernaturalOptionId } from "@/lib/supernatural";
import { paginate, summarize } from "../format";
import {
  ENTITY_KINDS,
  getEntityName,
  getSkillName,
  listEntities,
  perkRef,
  resolveEntity,
  resolveOptionLabel,
  type EntityByKind,
  type EntityKind,
  type OptionLabels,
} from "../ids";
import { READ_ONLY_TOOL_ANNOTATIONS, errorResult, jsonResult } from "../toolResult";
import { MAX_TEXT_INPUT_LENGTH, SEARCH_PERKS_TOOL } from "./searchPerks";

export const GET_ENTITY_TOOL = "lorerim_get_entity";

export const GET_ENTITY_DEFAULT_LIMIT = 50;
export const GET_ENTITY_MAX_LIMIT = 100;

/** The panel whose labels title and describe character options in the web app. */
const OPTION_LABEL_PANEL = "character-options";

export const getEntityInputSchema = z.object({
  kind: z
    .enum(ENTITY_KINDS)
    .describe(
      'Entity kind. "option" covers character options, including the vampire, werewolf, and lich supernatural options.',
    ),
  id: z
    .string()
    .max(MAX_TEXT_INPUT_LENGTH)
    .optional()
    .describe("Exact entity id. Omit to list this kind's ids, names, and one-line summaries."),
  limit: z
    .number()
    .int()
    .min(1)
    .max(GET_ENTITY_MAX_LIMIT)
    .default(GET_ENTITY_DEFAULT_LIMIT)
    .describe("Page size when listing (no id)."),
  offset: z
    .number()
    .int()
    .min(0)
    .default(0)
    .describe("Index of the first row when listing (no id)."),
}).strict();

export type GetEntityInput = z.output<typeof getEntityInputSchema>;

const entityRowSchema = z.object({
  id: z.string(),
  name: z.string(),
  summary: z.string(),
});

export type EntityRow = z.infer<typeof entityRowSchema>;

/** One object shape for both modes: `id` + `entity` when fetching, paging fields when listing. */
export const getEntityOutputSchema = z.object({
  kind: z.enum(ENTITY_KINDS),
  id: z.string().optional(),
  entity: z.record(z.string(), z.unknown()).optional(),
  total: z.number().int().optional(),
  offset: z.number().int().optional(),
  limit: z.number().int().optional(),
  nextOffset: z.number().int().nullable().optional(),
  rows: z.array(entityRowSchema).optional(),
  note: z.string().optional(),
});

export type GetEntityOutput = z.infer<typeof getEntityOutputSchema>;

type SupernaturalDataKey = Exclude<keyof SupernaturalData, "incompatibleTraitIds">;

const SUPERNATURAL_DATA_KEY_BY_OPTION: Record<SupernaturalOptionId, SupernaturalDataKey> = {
  vampire: "vampirism",
  werewolf: "lycanthropy",
  lich: "lichdom",
};

/** Labels that title and describe character options, as the web app shows them. */
export function getOptionLabels(appData: AppData): OptionLabels {
  return appData.ui.labels.panels[OPTION_LABEL_PANEL] ?? {};
}

function getEntitySummary<K extends EntityKind>(
  kind: K,
  entity: EntityByKind[K],
  labels: OptionLabels,
): string {
  switch (kind) {
    case "birthsign":
      return summarize((entity as EntityByKind["birthsign"]).bonus);
    case "deity":
      return summarize((entity as EntityByKind["deity"]).follower);
    case "skill":
      return summarize((entity as Skill).category);
    case "option": {
      const key = (entity as CharacterOption).descriptionLabel;
      return key ? summarize(resolveOptionLabel(key, labels)) : "";
    }
    case "trait": {
      // Some traits carry only a bonus line; an empty summary would tell the agent nothing.
      const trait = entity as EntityByKind["trait"];
      return summarize(trait.description.trim() ? trait.description : trait.bonus);
    }
    default:
      return summarize((entity as EntityByKind["race" | "perk"]).description);
  }
}

function describePerk(game: GameData, perk: Perk): Record<string, unknown> {
  const requirements = getPerkNodeRequirements(perk);
  const skillId = game.perkSkillIdByPerkId[perk.id] ?? "";
  return {
    ...perk,
    skill: { id: skillId, name: getSkillName(game, skillId) },
    skillReq: requirements.skillReq,
    playerLevelReq: requirements.playerLevelReq,
    prerequisites: perk.prerequisites.map((id) => perkRef(game, id)),
    prerequisitesAny: (perk.prerequisitesAny ?? []).map((id) => perkRef(game, id)),
  };
}

function describeOption(
  game: GameData,
  option: CharacterOption,
  labels: OptionLabels,
): Record<string, unknown> {
  const described: Record<string, unknown> = {
    id: option.id,
    name: resolveOptionLabel(option.titleLabel, labels),
    description: option.descriptionLabel
      ? resolveOptionLabel(option.descriptionLabel, labels)
      : "",
    defaultChoice: option.defaultChoice,
    ...(option.controlType !== undefined && { controlType: option.controlType }),
    ...(option.requiresTraitId !== undefined && { requiresTraitId: option.requiresTraitId }),
    ...(option.extension !== undefined && { extension: option.extension }),
    choices: option.choices.map((choice) => ({
      id: choice.id,
      label: resolveOptionLabel(choice.label, labels),
      ...(choice.effects !== undefined && { effects: choice.effects }),
    })),
  };
  if (isSupernaturalOptionId(option.id)) {
    described.supernatural = {
      ...game.supernatural[SUPERNATURAL_DATA_KEY_BY_OPTION[option.id]],
      incompatibleTraitIds: game.supernatural.incompatibleTraitIds,
    };
  }
  return described;
}

function describeEntity<K extends EntityKind>(
  game: GameData,
  kind: K,
  entity: EntityByKind[K],
  labels: OptionLabels,
): Record<string, unknown> {
  switch (kind) {
    case "perk":
      return describePerk(game, entity as Perk);
    case "skill": {
      const skill = entity as Skill;
      return { ...skill, perkCount: game.perkTrees[skill.id]?.perks.length ?? 0 };
    }
    case "option":
      return describeOption(game, entity as CharacterOption, labels);
    default:
      return { ...entity };
  }
}

function listKind(
  game: GameData,
  input: GetEntityInput,
  labels: OptionLabels,
): GetEntityOutput {
  const { kind } = input;
  const page = paginate(listEntities(game, kind), input.offset, input.limit);
  const output: GetEntityOutput = {
    kind,
    total: page.total,
    offset: page.offset,
    limit: page.limit,
    nextOffset: page.nextOffset,
    rows: page.items.map((entity) => ({
      id: entity.id,
      name: getEntityName(kind, entity, labels),
      summary: getEntitySummary(kind, entity, labels),
    })),
  };

  const notes: string[] = [];
  if (kind === "perk") {
    notes.push(
      `There are ${page.total} perks; find the ones you need with ${SEARCH_PERKS_TOOL} (text, skill, skill-requirement, and player-level filters) instead of paging this list.`,
    );
  }
  if (page.total > 0 && page.items.length === 0) {
    notes.push(`offset ${page.offset} is past the end; use an offset below ${page.total}.`);
  } else if (page.nextOffset !== null) {
    notes.push(`More rows: call again with offset ${page.nextOffset}.`);
  }
  if (notes.length > 0) output.note = notes.join(" ");
  return output;
}

/** Fetches one entity or lists a kind; returns the output or an actionable error. */
export function getEntity(
  appData: AppData,
  input: GetEntityInput,
): { ok: true; output: GetEntityOutput } | { ok: false; message: string } {
  const { game } = appData;
  const labels = getOptionLabels(appData);
  if (input.id === undefined) return { ok: true, output: listKind(game, input, labels) };

  const resolved = resolveEntity(game, input.kind, input.id, labels);
  if (!resolved.ok) return { ok: false, message: resolved.message };
  return {
    ok: true,
    output: {
      kind: input.kind,
      id: input.id,
      entity: describeEntity(game, input.kind, resolved.entity, labels),
    },
  };
}

export function registerGetEntityTool(server: McpServer, appData: AppData): void {
  server.registerTool(
    GET_ENTITY_TOOL,
    {
      title: "Get a LoreRim entity",
      description:
        "Read full detail for one LoreRim entity by exact id: a perk, race, trait, skill, character option (including the vampire, werewolf, and lich supernatural options), birthsign, or deity. " +
        "Omit id to list that kind's valid ids with names and one-line summaries, paginated — use this to discover race, trait, skill, option, birthsign, and deity ids. " +
        `Use it to confirm an id and its requirements or effects before putting it in a build. To find perks, use ${SEARCH_PERKS_TOOL}.`,
      inputSchema: getEntityInputSchema,
      outputSchema: getEntityOutputSchema,
      annotations: READ_ONLY_TOOL_ANNOTATIONS,
    },
    (input) => {
      const result = getEntity(appData, input);
      return result.ok ? jsonResult(result.output) : errorResult(result.message);
    },
  );
}
