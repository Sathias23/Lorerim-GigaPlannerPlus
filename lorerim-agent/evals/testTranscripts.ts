// Test helper: hand-written Claude Code transcripts in the on-disk JSONL shape
// (one record per content block, usage repeated per block, MCP structured
// content under `mcpMeta`, slash commands as `<command-name>` text).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { TOOL_PREFIX_BY_VARIANT, type Variant } from "./common.ts";
import { projectSlug } from "./transcript.ts";

export interface ResultSpec {
  text?: string;
  structured?: Record<string, unknown>;
  isError?: boolean;
}

export class TranscriptBuilder {
  private readonly records: Record<string, unknown>[] = [];
  private messageCount = 0;
  private toolCount = 0;
  private clock = 0;
  model: string;
  readonly cwd: string;
  readonly sessionId: string;

  /** `startSecond` offsets the session clock, so sessions can start in a chosen order. */
  constructor(cwd: string, sessionId: string, model = "claude-sonnet-test", startSecond = 0) {
    this.cwd = cwd;
    this.sessionId = sessionId;
    this.model = model;
    this.clock = startSecond;
  }

  private push(record: Record<string, unknown>): void {
    this.clock++;
    this.records.push({
      ...record,
      cwd: this.cwd,
      sessionId: this.sessionId,
      isSidechain: record.isSidechain ?? false,
      timestamp: new Date(Date.UTC(2026, 8, 28, 10) + this.clock * 1000).toISOString(),
    });
  }

  private user(content: unknown, extra: Record<string, unknown> = {}): this {
    this.push({ type: "user", message: { role: "user", content }, ...extra });
    return this;
  }

  /** A typed prompt. */
  prompt(text: string): this {
    return this.user(text);
  }

  /** A slash command: the command message, then the expansion Claude Code adds as a meta message. */
  command(name: string, args: string, expansion = "Base directory for this skill: …"): this {
    this.user(`<command-message>${name}</command-message>\n<command-name>/${name}</command-name>\n<command-args>${args}</command-args>`);
    return this.user([{ type: "text", text: expansion }], { isMeta: true });
  }

  /** A local command such as `/model`: no model response follows. */
  localCommand(name: string, args = "", stdout = ""): this {
    this.user("<local-command-caveat>Caveat: …</local-command-caveat>", { isMeta: true });
    this.user(`<command-name>/${name}</command-name>\n            <command-message>${name}</command-message>\n            <command-args>${args}</command-args>`);
    this.push({ type: "system", subtype: "local_command", content: `<local-command-stdout>${stdout}</local-command-stdout>` });
    return this;
  }

  /** One model response; each block is written as its own record, repeating the usage. */
  assistant(blocks: Array<Record<string, unknown>>, usage = { input_tokens: 10, cache_creation_input_tokens: 100, cache_read_input_tokens: 1000, output_tokens: 50 }): this {
    const id = `msg_${this.sessionId}_${++this.messageCount}`;
    for (const block of blocks) {
      this.push({ type: "assistant", message: { id, model: this.model, role: "assistant", usage, content: [block] } });
    }
    return this;
  }

  say(text: string): this {
    return this.assistant([{ type: "thinking", thinking: "" }, { type: "text", text }]);
  }

  /** A tool call and its result. `name` is used as is (e.g. "Skill"); see `lorerim` for server tools. */
  tool(name: string, input: unknown, result: ResultSpec): this {
    const id = `toolu_${this.sessionId}_${++this.toolCount}`;
    this.assistant([{ type: "tool_use", id, name, input }]);
    const text = result.text ?? JSON.stringify(result.structured ?? {});
    return this.user(
      [{ type: "tool_result", tool_use_id: id, content: [{ type: "text", text }], ...(result.isError ? { is_error: true } : {}) }],
      result.structured ? { mcpMeta: { structuredContent: result.structured }, toolUseResult: [{ type: "text", text }] } : {},
    );
  }

  /** A lorerim tool call under the given folder's prefix. */
  lorerim(variant: Variant, tool: string, input: unknown, result: ResultSpec): this {
    return this.tool(`${TOOL_PREFIX_BY_VARIANT[variant]}${tool}`, input, result);
  }

  /** A record from a subagent; the scorer must ignore it. */
  sidechain(text: string): this {
    this.push({ type: "assistant", isSidechain: true, message: { id: `side_${++this.messageCount}`, model: this.model, content: [{ type: "text", text }] } });
    return this;
  }

  toJsonl(): string {
    return `${[
      JSON.stringify({ type: "queue-operation", operation: "enqueue" }),
      ...this.records.map((record) => JSON.stringify(record)),
      JSON.stringify({ type: "last-prompt", lastPrompt: "…" }),
    ].join("\n")}\n`;
  }

  /** Writes the transcript where Claude Code keeps it for `cwd`. */
  write(projectsDir: string): string {
    const dir = join(projectsDir, projectSlug(this.cwd));
    mkdirSync(dir, { recursive: true });
    const path = join(dir, `${this.sessionId}.jsonl`);
    writeFileSync(path, this.toJsonl());
    return path;
  }
}
