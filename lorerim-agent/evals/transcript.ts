// Reads Claude Code session transcripts (`~/.claude/projects/<slug>/<session>.jsonl`).
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { homedir } from "node:os";
import { basename, join } from "node:path";
import { samePath } from "./common.ts";

export type TranscriptEvent =
  | { type: "prompt"; text: string }
  | { type: "text"; text: string }
  | { type: "tool_use"; id: string; name: string; input: unknown }
  | {
      type: "tool_result";
      toolUseId: string;
      isError: boolean;
      text: string;
      /** The MCP result's `structuredContent`, when Claude Code recorded it. */
      structured: Record<string, unknown> | undefined;
    };

export interface TokenUsage {
  input: number;
  cacheCreation: number;
  cacheRead: number;
  output: number;
  total: number;
}

export interface ParsedSession {
  sessionId: string;
  cwd: string | null;
  startedAt: string | null;
  events: TranscriptEvent[];
  /** The first user message the model answered (local commands such as `/model` get no answer). */
  firstPrompt: string | null;
  /** The assistant text after the last prompt or tool result. */
  finalAnswer: string;
  /** Most-used model, by API responses. */
  model: string | null;
  models: string[];
  /** Distinct API responses. */
  assistantMessages: number;
  usage: TokenUsage;
  malformedLines: number;
}

/** Claude Code's project folder name: every non-alphanumeric character becomes "-". */
export function projectSlug(folder: string): string {
  return folder.replace(/[^A-Za-z0-9]/g, "-");
}

/** `~/.claude/projects`, honoring `CLAUDE_CONFIG_DIR`. */
export function defaultProjectsDir(env: NodeJS.ProcessEnv = process.env): string {
  return join(env.CLAUDE_CONFIG_DIR || join(homedir(), ".claude"), "projects");
}

interface ContentBlock {
  type?: unknown;
  text?: unknown;
  id?: unknown;
  name?: unknown;
  input?: unknown;
  tool_use_id?: unknown;
  is_error?: unknown;
  content?: unknown;
}

interface TranscriptRecord {
  type?: unknown;
  cwd?: unknown;
  timestamp?: unknown;
  isMeta?: unknown;
  isSidechain?: unknown;
  isCompactSummary?: unknown;
  mcpMeta?: { structuredContent?: unknown };
  message?: { id?: unknown; model?: unknown; usage?: Record<string, unknown>; content?: unknown };
}

function blocksOf(content: unknown): ContentBlock[] {
  if (typeof content === "string") return [{ type: "text", text: content }];
  return Array.isArray(content) ? (content.filter((block) => block && typeof block === "object") as ContentBlock[]) : [];
}

function textOf(content: unknown): string {
  return blocksOf(content)
    .filter((block) => block.type === "text" && typeof block.text === "string")
    .map((block) => block.text as string)
    .join("\n");
}

function tagValue(text: string, tag: string): string | null {
  const match = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`).exec(text);
  return match ? match[1]!.trim() : null;
}

/** A slash command reads as `/<name> <args>`; anything else is the text as typed. */
export function promptText(raw: string): string {
  const name = tagValue(raw, "command-name");
  if (name === null) return raw.trim();
  const args = tagValue(raw, "command-args") ?? "";
  return `${name.startsWith("/") ? name : `/${name}`} ${args}`.trim();
}

function isLocalCommandOutput(text: string): boolean {
  return /^\s*<(local-command-stdout|local-command-stderr|local-command-caveat)>/.test(text);
}

function count(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

export function parseTranscript(content: string, sessionId: string): ParsedSession {
  const events: TranscriptEvent[] = [];
  const usageById = new Map<string, TokenUsage>();
  const modelCounts = new Map<string, number>();
  const prompts: Array<{ text: string; answered: boolean; eventIndex: number }> = [];
  let cwd: string | null = null;
  let startedAt: string | null = null;
  let malformedLines = 0;

  for (const line of content.split(/\r?\n/)) {
    if (line.trim() === "") continue;
    let record: TranscriptRecord;
    try {
      record = JSON.parse(line) as TranscriptRecord;
    } catch {
      malformedLines++;
      continue;
    }
    if (!record || typeof record !== "object") continue;
    if (cwd === null && typeof record.cwd === "string") cwd = record.cwd;
    if (startedAt === null && typeof record.timestamp === "string") startedAt = record.timestamp;
    if (record.isSidechain === true || !record.message) continue;

    if (record.type === "assistant") {
      const messageId = typeof record.message.id === "string" ? record.message.id : `line-${events.length}`;
      const model = typeof record.message.model === "string" ? record.message.model : null;
      if (!usageById.has(messageId)) {
        const usage = record.message.usage ?? {};
        const input = count(usage.input_tokens);
        const cacheCreation = count(usage.cache_creation_input_tokens);
        const cacheRead = count(usage.cache_read_input_tokens);
        const output = count(usage.output_tokens);
        usageById.set(messageId, {
          input,
          cacheCreation,
          cacheRead,
          output,
          total: input + cacheCreation + cacheRead + output,
        });
        if (model && model !== "<synthetic>") modelCounts.set(model, (modelCounts.get(model) ?? 0) + 1);
      }
      const lastPrompt = prompts[prompts.length - 1];
      if (lastPrompt) lastPrompt.answered = true;
      for (const block of blocksOf(record.message.content)) {
        if (block.type === "text" && typeof block.text === "string" && block.text.trim() !== "") {
          events.push({ type: "text", text: block.text });
        } else if (block.type === "tool_use" && typeof block.id === "string" && typeof block.name === "string") {
          events.push({ type: "tool_use", id: block.id, name: block.name, input: block.input });
        }
      }
      continue;
    }

    if (record.type !== "user" || record.isMeta === true || record.isCompactSummary === true) continue;
    const blocks = blocksOf(record.message.content);
    const results = blocks.filter((block) => block.type === "tool_result");
    if (results.length > 0) {
      const structured = record.mcpMeta?.structuredContent;
      for (const block of results) {
        events.push({
          type: "tool_result",
          toolUseId: typeof block.tool_use_id === "string" ? block.tool_use_id : "",
          isError: block.is_error === true,
          text: textOf(block.content),
          // One record can carry several results; the MCP metadata then belongs to none in particular.
          structured:
            results.length === 1 && structured && typeof structured === "object" && !Array.isArray(structured)
              ? (structured as Record<string, unknown>)
              : undefined,
        });
      }
      continue;
    }
    const raw = textOf(record.message.content);
    if (raw.trim() === "" || isLocalCommandOutput(raw)) continue;
    const text = promptText(raw);
    events.push({ type: "prompt", text });
    prompts.push({ text, answered: false, eventIndex: events.length - 1 });
  }

  // An unanswered prompt (a local command such as /cost typed after the answer) does not end the answer.
  const answeredPrompts = new Set(prompts.filter((prompt) => prompt.answered).map((prompt) => prompt.eventIndex));
  let lastInput = -1;
  events.forEach((event, index) => {
    if (event.type === "tool_result" || answeredPrompts.has(index)) lastInput = index;
  });
  const finalAnswer = events
    .slice(lastInput + 1)
    .filter((event): event is Extract<TranscriptEvent, { type: "text" }> => event.type === "text")
    .map((event) => event.text)
    .join("\n");

  const usage: TokenUsage = { input: 0, cacheCreation: 0, cacheRead: 0, output: 0, total: 0 };
  for (const entry of usageById.values()) {
    usage.input += entry.input;
    usage.cacheCreation += entry.cacheCreation;
    usage.cacheRead += entry.cacheRead;
    usage.output += entry.output;
    usage.total += entry.total;
  }
  const models = [...modelCounts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

  return {
    sessionId,
    cwd,
    startedAt,
    events,
    firstPrompt: prompts.find((prompt) => prompt.answered)?.text ?? null,
    finalAnswer,
    model: models[0]?.[0] ?? null,
    models: models.map(([model]) => model),
    assistantMessages: usageById.size,
    usage,
    malformedLines,
  };
}

/**
 * Every top-level session transcript Claude Code saved for `folder`, keeping
 * only sessions whose recorded `cwd` is that folder. Sorted by start time.
 */
export function readSessions(folder: string, projectsDir: string = defaultProjectsDir()): ParsedSession[] {
  const dir = join(projectsDir, projectSlug(folder));
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => name.endsWith(".jsonl"))
    .sort()
    .map((name) => parseTranscript(readFileSync(join(dir, name), "utf8"), basename(name, ".jsonl")))
    .filter((session) => session.cwd !== null && samePath(session.cwd, folder))
    .sort(
      (a, b) =>
        (a.startedAt ?? "").localeCompare(b.startedAt ?? "") || a.sessionId.localeCompare(b.sessionId),
    );
}
