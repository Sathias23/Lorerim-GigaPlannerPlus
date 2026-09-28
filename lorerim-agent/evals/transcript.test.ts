import { mkdirSync, writeFileSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { TranscriptBuilder } from "./testTranscripts.ts";
import { defaultProjectsDir, parseTranscript, projectSlug, promptText, readSessions } from "./transcript.ts";

const FOLDER = "C:\\Users\\me\\lorerim-evals\\skill";

describe("projectSlug", () => {
  it("replaces every non-alphanumeric character with a dash, as Claude Code does", () => {
    expect(projectSlug("C:\\Users\\Sathias\\lorerim-evals\\skill")).toBe("C--Users-Sathias-lorerim-evals-skill");
    expect(projectSlug("/home/me/lorerim_evals/baseline")).toBe("-home-me-lorerim-evals-baseline");
  });

  it("honors CLAUDE_CONFIG_DIR", () => {
    expect(defaultProjectsDir({ CLAUDE_CONFIG_DIR: join("x", "cfg") })).toBe(join("x", "cfg", "projects"));
  });
});

describe("promptText", () => {
  it("reads a slash command as /name args, and plain text as typed", () => {
    expect(promptText("<command-message>lorerim-build</command-message>\n<command-name>/lorerim-build</command-name>\n<command-args>a lich</command-args>")).toBe(
      "/lorerim-build a lich",
    );
    expect(promptText("  a lich  ")).toBe("a lich");
  });
});

describe("parseTranscript", () => {
  it("collects prompts, tool calls, results, and the final answer, ignoring meta and sidechain records", () => {
    const builder = new TranscriptBuilder(FOLDER, "s1")
      .localCommand("model", "sonnet", "Set model to sonnet")
      .command("lorerim-build", "stealth archer vampire, level 40", "Base directory for this skill: … lorerim_get_entity …")
      .tool("mcp__lorerim__lorerim_get_entity", { kind: "skill" }, { structured: { kind: "skill", rows: [] } })
      .sidechain("subagent chatter")
      .say("Which race?")
      .prompt("Use your own assumptions.")
      .tool("mcp__lorerim__lorerim_apply_changes", { ops: [] }, { text: "boom", isError: true })
      .say("Final build: 3.abc");
    const session = parseTranscript(`${builder.toJsonl()}not json\n`, "s1");

    expect(session.cwd).toBe(FOLDER);
    expect(session.startedAt).toBe("2026-09-28T10:00:01.000Z");
    expect(session.firstPrompt).toBe("/lorerim-build stealth archer vampire, level 40");
    expect(session.finalAnswer).toBe("Final build: 3.abc");
    expect(session.malformedLines).toBe(1);
    expect(session.events.map((event) => event.type)).toEqual([
      "prompt",
      "prompt",
      "tool_use",
      "tool_result",
      "text",
      "prompt",
      "tool_use",
      "tool_result",
      "text",
    ]);
    const results = session.events.filter((event) => event.type === "tool_result");
    expect(results[0]).toMatchObject({ isError: false, structured: { kind: "skill", rows: [] } });
    expect(results[1]).toMatchObject({ isError: true, text: "boom", structured: undefined });
  });

  it("counts each response once for turns, tokens, and the model", () => {
    const builder = new TranscriptBuilder(FOLDER, "s2", "claude-a").prompt("hi").say("one");
    builder.model = "claude-b";
    builder.say("two");
    builder.model = "claude-b";
    builder.say("three");
    builder.model = "<synthetic>";
    builder.say("API error");
    const session = parseTranscript(builder.toJsonl(), "s2");

    expect(session.assistantMessages).toBe(4);
    expect(session.usage).toEqual({ input: 40, cacheCreation: 400, cacheRead: 4000, output: 200, total: 4640 });
    expect(session.model).toBe("claude-b");
    expect(session.models).toEqual(["claude-b", "claude-a"]);
  });

  it("keeps the final answer when a local command is typed after it", () => {
    const builder = new TranscriptBuilder(FOLDER, "s5")
      .prompt("stealth archer vampire, level 40")
      .tool("mcp__lorerim__lorerim_apply_changes", { ops: [] }, { structured: { code: "3.abc" } })
      .say("Final build: 3.abc")
      .localCommand("cost", "", "Total cost: $0.10");
    expect(parseTranscript(builder.toJsonl(), "s5").finalAnswer).toBe("Final build: 3.abc");
  });

  it("has no first prompt when nothing was answered", () => {
    const builder = new TranscriptBuilder(FOLDER, "s3").localCommand("model", "opus").prompt("unanswered");
    expect(parseTranscript(builder.toJsonl(), "s3").firstPrompt).toBeNull();
  });

  it("reads tool results recorded as plain strings", () => {
    const line = JSON.stringify({
      type: "user",
      cwd: FOLDER,
      message: { content: [{ type: "tool_result", tool_use_id: "t1", content: '{"code":"3.x"}' }] },
    });
    const [event] = parseTranscript(line, "s4").events;
    expect(event).toEqual({ type: "tool_result", toolUseId: "t1", isError: false, text: '{"code":"3.x"}', structured: undefined });
  });
});

describe("readSessions", () => {
  let projectsDir: string;

  beforeAll(async () => {
    projectsDir = await mkdtemp(join(tmpdir(), "lorerim-evals-transcripts-"));
  });

  afterAll(async () => {
    await rm(projectsDir, { recursive: true, force: true });
  });

  it("keeps only the folder's sessions, by start time", () => {
    new TranscriptBuilder(FOLDER, "b-later", "m", 100).prompt("second").say("ok").write(projectsDir);
    new TranscriptBuilder(FOLDER, "a-earlier", "m", 10).prompt("first").say("ok").write(projectsDir);
    // Same slug, different cwd (e.g. "lorerim-evals/skill" vs "lorerim_evals/skill").
    const stranger = new TranscriptBuilder("C:\\Users\\me\\lorerim_evals\\skill", "c-other").prompt("x").say("ok");
    const dir = join(projectsDir, projectSlug(FOLDER));
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "c-other.jsonl"), stranger.toJsonl());
    writeFileSync(join(dir, "notes.txt"), "ignored");

    expect(readSessions(FOLDER, projectsDir).map((session) => session.sessionId)).toEqual(["a-earlier", "b-later"]);
    expect(readSessions("C:\\nowhere", projectsDir)).toEqual([]);
  });
});
