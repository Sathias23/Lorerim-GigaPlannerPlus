import type { McpServer } from "@modelcontextprotocol/server";
import * as z from "zod";
import type { AppData } from "@/data/schemas";
import {
  decodeBuild,
  decodeBuildPackage,
  decodeUnreconciledBuild,
  encodeBuild,
  type DecodedBuildPackage,
} from "@/engine/buildCodec";
import {
  createInitialBuildState,
  migrateBuildState,
  reconcileBuild,
  type BuildState,
} from "@/engine/buildEngine";
import {
  diffBuildStates,
  diffRowSchema,
  isListField,
  listRow,
  type DiffRow,
} from "../diff";
import { MAX_OPS, applyOp, opSchema, requestedItem, type Op } from "../ops";
import { READ_ONLY_TOOL_ANNOTATIONS, errorResult, jsonResult } from "../toolResult";
import {
  DECODE_ERROR_MESSAGE,
  MAX_CODE_LENGTH,
  evaluateBuild,
  evaluateBuildOutputSchema,
  getActiveBuild,
} from "./evaluateBuild";

export const APPLY_CHANGES_TOOL = "lorerim_apply_changes";

export const applyChangesInputSchema = z
  .object({
    code: z
      .string()
      .min(1)
      .max(MAX_CODE_LENGTH)
      .optional()
      .describe(
        'Share code of the build to edit: the value of the planner link\'s build= parameter, starting with "3." (or "2." for older links). Omit to start a fresh build.',
      ),
    ops: z
      .array(opSchema)
      .min(1)
      .max(MAX_OPS)
      .describe(
        "Changes to apply, in order, each to the build the previous ops produced. Set race, skills, options, and levels before the perks that need them.",
      ),
  })
  .strict();

export type ApplyChangesInput = z.output<typeof applyChangesInputSchema>;

/** Where a diff row comes from: opening the input code, an op, or encoding the result. */
export const DIFF_STAGES = ["open", "op", "encode"] as const;
export const DIFF_CAUSES = ["requested", "engine"] as const;

type DiffStage = (typeof DIFF_STAGES)[number];
type DiffCause = (typeof DIFF_CAUSES)[number];

const appliedDiffRowSchema = z.object({
  op: z.number().int().nullable(),
  stage: z.enum(DIFF_STAGES),
  cause: z.enum(DIFF_CAUSES),
  ...diffRowSchema.shape,
});

export type AppliedDiffRow = z.infer<typeof appliedDiffRowSchema>;

export const applyChangesOutputSchema = z.object({
  code: z.string(),
  baseCode: z.string().nullable(),
  dataVersion: z.string(),
  diff: z.array(appliedDiffRowSchema),
  evaluation: evaluateBuildOutputSchema,
  notes: z.array(z.string()),
});

export type ApplyChangesOutput = z.infer<typeof applyChangesOutputSchema>;

function tag(row: DiffRow, op: number | null, stage: DiffStage, cause: DiffCause): AppliedDiffRow {
  return { op, stage, cause, ...row };
}

/**
 * Marks each row of one op's diff: a change to the op's own target field (or
 * target list item) is `requested`; everything else the engine did is `engine`.
 * A list row mixing both is split, so a removed prerequisite's dependents
 * show up as their own `engine` row.
 */
export function classifyOpDiff(
  rows: readonly DiffRow[],
  requestedFields: readonly string[],
  opIndex: number,
): AppliedDiffRow[] {
  const requested = new Set(requestedFields);
  const tagged: AppliedDiffRow[] = [];
  for (const row of rows) {
    if (!isListField(row.field) || requested.has(row.field)) {
      tagged.push(tag(row, opIndex, "op", requested.has(row.field) ? "requested" : "engine"));
      continue;
    }
    const field = row.field;
    const isRequested = (ref: { id: string }) => requested.has(requestedItem(field, ref.id));
    const added = row.added ?? [];
    const removed = row.removed ?? [];
    const requestedAdded = added.filter(isRequested);
    const requestedRemoved = removed.filter(isRequested);
    const engineAdded = added.filter((ref) => !isRequested(ref));
    const engineRemoved = removed.filter((ref) => !isRequested(ref));

    if (requestedAdded.length > 0 || requestedRemoved.length > 0) {
      tagged.push(tag(listRow(field, requestedAdded, requestedRemoved), opIndex, "op", "requested"));
    }
    if (engineAdded.length > 0 || engineRemoved.length > 0) {
      tagged.push(tag(listRow(field, engineAdded, engineRemoved), opIndex, "op", "engine"));
    }
  }
  return tagged;
}

interface OpenedBuild {
  /** The build as the code encodes it (or the blank build), before the planner touches it. */
  raw: BuildState;
  /** The build the planner opens. */
  base: BuildState;
  decoded: DecodedBuildPackage | null;
}

function openBuild(appData: AppData, code: string | null): OpenedBuild {
  const { game } = appData;
  if (code === null) {
    const raw = createInitialBuildState();
    return { raw, base: reconcileBuild(game, migrateBuildState(raw)), decoded: null };
  }
  const decoded = decodeBuildPackage(code, game);
  const raw = migrateBuildState(decodeUnreconciledBuild(code, game));
  // What the planner's store does with a shared build before anything else.
  const base = reconcileBuild(game, migrateBuildState(getActiveBuild(decoded)));
  return { raw, base, decoded };
}

function describeDroppedVariants(decoded: DecodedBuildPackage | null): string | null {
  const shared = decoded?.shared;
  if (!shared || shared.milestones.length === 0) return null;
  const count = shared.milestones.length + 1;
  const index = shared.activeVariantIndex;
  const name =
    index === 0 ? shared.defaultVariantName : (shared.milestones[index - 1]?.name ?? shared.defaultVariantName);
  const others = count - 1;
  return `The input code holds ${count} variants; edited the one the planner opens: ${JSON.stringify(name)} (variant ${index + 1} of ${count}). The returned code holds only this build; the other ${others} ${others === 1 ? "variant was" : "variants were"} not carried over.`;
}

function formatFailures(failures: ReadonlyArray<{ index: number; op: Op; message: string }>, total: number): string {
  const lines = [
    `${APPLY_CHANGES_TOOL} changed nothing: ${failures.length} of ${total} ${total === 1 ? "op" : "ops"} failed, so no code was returned. ` +
      "Ops run in order on the running build and a failed op is skipped, so a later failure may follow from an earlier one; fix the earliest first. " +
      "Op numbers are 0-based indexes into ops.",
  ];
  for (const failure of failures) {
    lines.push(`op #${failure.index} (${failure.op.op}): ${failure.message}`);
  }
  return lines.join("\n");
}

type ApplyResult = { ok: true; output: ApplyChangesOutput } | { ok: false; message: string };

/**
 * Opens `code` as the planner does (or a fresh build), applies every op in
 * order, and either returns the new code with a diff and its evaluation, or
 * — when any op fails — an explanation of every failing op and no code.
 */
export function applyChanges(appData: AppData, input: { code?: string; ops: readonly Op[] }): ApplyResult {
  const baseCode = input.code === undefined ? null : input.code.trim();

  let opened: OpenedBuild;
  try {
    opened = openBuild(appData, baseCode);
  } catch {
    return { ok: false, message: DECODE_ERROR_MESSAGE };
  }

  try {
    return applyToOpened(appData, baseCode, opened, input.ops);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    return {
      ok: false,
      message: `The planner engine failed while applying the changes (${reason}). Nothing was changed. If a code was given it may be corrupt or hand-edited; rebuild it from a known-good code.`,
    };
  }
}

function applyToOpened(
  data: AppData,
  code: string | null,
  { raw, base, decoded }: OpenedBuild,
  ops: readonly Op[],
): ApplyResult {
  const { game } = data;
  const diff: AppliedDiffRow[] = diffBuildStates(data, raw, base).map((row) =>
    tag(row, null, "open", "engine"),
  );

  let state = base;
  const failures: Array<{ index: number; op: Op; message: string }> = [];
  ops.forEach((op, index) => {
    const result = applyOp(data, state, op);
    if (!result.ok) {
      failures.push({ index, op, message: result.message });
      return;
    }
    diff.push(...classifyOpDiff(diffBuildStates(data, state, result.state), result.requestedFields, index));
    state = result.state;
  });
  if (failures.length > 0) return { ok: false, message: formatFailures(failures, ops.length) };

  const newCode = encodeBuild(state, game);
  const final = decodeBuild(newCode, game);
  diff.push(...diffBuildStates(data, state, final).map((row) => tag(row, null, "encode", "engine")));

  const evaluated = evaluateBuild(data, newCode);
  if (!evaluated.ok) throw new Error(evaluated.message);

  const dataVersion = game.manifest.version;
  const notes: string[] = [];
  const variantNote = describeDroppedVariants(decoded);
  if (variantNote) notes.push(variantNote);
  const codeDataVersion = decoded?.sourceModpackVersion;
  if (codeDataVersion !== undefined && codeDataVersion !== dataVersion) {
    notes.push(
      `The input code was made with data version ${codeDataVersion}; the returned code uses this server's ${dataVersion}.`,
    );
  }
  if (diff.some((row) => row.stage === "open")) {
    notes.push(
      'Opening the input code, the planner changed it before any op ran (diff rows with stage "open"), e.g. dropping ids the current data does not know.',
    );
  }
  if (diff.some((row) => row.stage === "encode")) {
    notes.push('Encoding normalized the edited build (diff rows with stage "encode").');
  }

  return {
    ok: true,
    output: { code: newCode, baseCode: code, dataVersion, diff, evaluation: evaluated.output, notes },
  };
}

export function registerApplyChangesTool(server: McpServer, appData: AppData): void {
  server.registerTool(
    APPLY_CHANGES_TOOL,
    {
      title: "Create or edit a LoreRim build",
      description:
        "Create a LoreRim build from nothing (omit code) or edit one (pass its share code) by applying a batch of ops with the planner's own engine, " +
        "exactly as clicking through the web planner would. Ops apply in order to the running build: " +
        "set_race, set_birthsign, set_deity (id, \"none\" clears), add_trait, remove_trait, set_major_skills, set_minor_skills, set_oghma_skills (replace the whole list), " +
        "set_attribute_bonus, set_option_choice (character options incl. vampire, werewolf, lich, oghma-infinium), set_player_level, set_skill_level, take_perk, remove_perk. " +
        "Ids must be exact; find them with lorerim_search_perks and lorerim_get_entity. " +
        "take_perk is strict: its prerequisites, skill level, player level, and a free perk point must already be in place, so raise levels and take prerequisites in earlier ops. " +
        "Out-of-range levels are rejected, never clamped. If any op fails, nothing is returned but an error explaining every failing op by index. " +
        "On success returns the new share code, a diff of every change (cause \"requested\" for what an op asked for, \"engine\" for adjustments the engine made, such as player-level raises or dependent perks removed), " +
        "and the lorerim_evaluate_build evaluation of the new code. A code holding several variants is edited through the one the planner opens and comes back as a single build.",
      inputSchema: applyChangesInputSchema,
      outputSchema: applyChangesOutputSchema,
      annotations: READ_ONLY_TOOL_ANNOTATIONS,
    },
    (input) => {
      const result = applyChanges(appData, input);
      return result.ok ? jsonResult(result.output) : errorResult(result.message);
    },
  );
}
