import * as z from "zod";
import rawQuestIndex from "../knowledge/quests/index.json";

/** Corpus folders, in the order `knowledge/quests/README.md` lists them. */
export const QUEST_KINDS = ["mod-added", "vanilla-changes", "area"] as const;

export type QuestKind = (typeof QUEST_KINDS)[number];

export const questIndexEntrySchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  kind: z.enum(QUEST_KINDS),
  category: z.string().min(1),
  summary: z.string(),
  quests: z.array(z.string()),
  locations: z.array(z.string()),
  region: z.string(),
  start: z.string(),
  mods: z.array(z.string()),
  confidence: z.string(),
});

export type QuestIndexEntry = z.infer<typeof questIndexEntrySchema>;

export const questIndexSchema = z.array(questIndexEntrySchema).superRefine((entries, ctx) => {
  const seen = new Set<string>();
  for (const [index, entry] of entries.entries()) {
    if (seen.has(entry.id)) {
      ctx.addIssue({ code: "custom", message: `duplicate id ${JSON.stringify(entry.id)}`, path: [index, "id"] });
    }
    seen.add(entry.id);
  }
});

/**
 * The quest and area corpus index (`knowledge/quests/index.json`), validated
 * once at load. The bundle inlines it, so the corpus markdown is not needed at
 * runtime.
 */
export const QUEST_INDEX: readonly QuestIndexEntry[] = questIndexSchema.parse(rawQuestIndex);
