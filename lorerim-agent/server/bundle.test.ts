import { spawn } from "node:child_process";
import { mkdtemp, readdir, rm } from "node:fs/promises";
import { isBuiltin } from "node:module";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";
import { build } from "vite";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { encodeBuild } from "@/engine/buildCodec";
import { createTestBuildState, getTestAppData, getTestGameData } from "@/test/helpers";
import { formatReadyLine } from "./main";

const agentRoot = fileURLToPath(new URL("..", import.meta.url));

const EXPECTED_TOOL_NAMES = [
  "lorerim_apply_changes",
  "lorerim_evaluate_build",
  "lorerim_get_entity",
  "lorerim_search_perks",
];

interface BuiltChunk {
  type: "chunk";
  fileName: string;
  moduleIds: string[];
  imports: string[];
  dynamicImports: string[];
}

interface ProcessResult {
  code: number | null;
  stdout: string;
  stderr: string;
}

/**
 * Spawns the bundle, waits for the ready line, runs `interact` against the
 * child's stdin, and resolves once the process exits.
 */
function runServer(
  serverPath: string,
  cwd: string,
  interact: (stdin: NodeJS.WritableStream, stdout: NodeJS.ReadableStream) => void,
): Promise<ProcessResult> {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [serverPath], { cwd, stdio: ["pipe", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    let interacted = false;
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk: string) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk: string) => {
      stderr += chunk;
      if (!interacted && stderr.includes("\n")) {
        interacted = true;
        interact(child.stdin, child.stdout);
      }
    });
    child.on("error", reject);
    child.on("close", (code) => resolve({ code, stdout, stderr }));
  });
}

describe("dist/server.js bundle", () => {
  let outDir: string;
  let serverPath: string;
  let output: Array<{ type: string; fileName: string }>;
  let chunk: BuiltChunk;

  beforeAll(async () => {
    // A fresh temp dir with no node_modules anywhere above it proves the
    // bundle is self-contained when copied away from the repo.
    outDir = await mkdtemp(join(tmpdir(), "lorerim-agent-bundle-"));
    serverPath = join(outDir, "server.js");
    const result = await build({
      configFile: join(agentRoot, "vite.config.ts"),
      mode: "production",
      logLevel: "silent",
      build: { outDir, emptyOutDir: true },
    });
    if (Array.isArray(result) || !("output" in result)) {
      throw new Error("expected a single, non-watch build output");
    }
    output = result.output;
    chunk = output[0] as unknown as BuiltChunk;
  });

  afterAll(async () => {
    if (outDir) await rm(outDir, { recursive: true, force: true });
  });

  it("emits one self-contained ESM chunk and nothing else", async () => {
    expect(output).toHaveLength(1);
    expect(chunk.type).toBe("chunk");
    expect(chunk.fileName).toBe("server.js");
    expect(await readdir(outDir)).toEqual(["server.js"]);
  });

  it("imports only Node built-ins at runtime", () => {
    const external = [...chunk.imports, ...chunk.dynamicImports];
    expect(external.filter((id) => !isBuiltin(id))).toEqual([]);
  });

  it("inlines the game data but no React, react-dom, zustand, or the web store", () => {
    const ids = chunk.moduleIds.map((id) => id.replace(/\\/g, "/"));
    const forbidden = ids.filter(
      (id) =>
        /\/node_modules\/(react|react-dom|zustand)\//.test(id) ||
        id.includes("/src/store/buildStore"),
    );

    expect(forbidden).toEqual([]);
    expect(ids.some((id) => id.endsWith("/data/game/manifest.json"))).toBe(true);
    expect(ids.some((id) => id.endsWith("/src/data/loader.ts"))).toBe(true);
  });

  it("starts with one ready line on stderr, stays silent on stdout, and exits 0 when stdin closes", async () => {
    const result = await runServer(serverPath, outDir, (stdin) => stdin.end());

    expect(result.code).toBe(0);
    expect(result.stdout).toBe("");
    const lines = result.stderr.split("\n").filter((line) => line.length > 0);
    expect(lines).toHaveLength(1);
    expect(lines[0]).toBe(formatReadyLine(getTestAppData()).trimEnd());
  });

  it("answers tools/list with every tool over stdio", async () => {
    const transport = new StdioClientTransport({
      command: process.execPath,
      args: [serverPath],
      cwd: outDir,
      stderr: "pipe",
    });
    const client = new Client({ name: "lorerim-agent-bundle-test", version: "0.0.0" });
    try {
      await client.connect(transport);
      const { tools } = await client.listTools();
      expect(tools.map((tool) => tool.name).sort()).toEqual(EXPECTED_TOOL_NAMES);

      // Handler code runs from the bundle, not just the tool list.
      const search = await client.callTool({
        name: "lorerim_search_perks",
        arguments: { query: "sneak attack" },
      });
      expect(search.isError).not.toBe(true);
      expect((search.structuredContent as { rows: unknown[] }).rows.length).toBeGreaterThan(0);

      const unknown = await client.callTool({
        name: "lorerim_get_entity",
        arguments: { kind: "perk", id: "anatomical-lore" },
      });
      expect(unknown.isError).toBe(true);
      expect(JSON.stringify(unknown.content)).toContain("Did you mean");

      const game = getTestGameData();
      const code = encodeBuild(
        createTestBuildState({
          raceId: "nord",
          playerLevel: game.mechanics.leveling.baseLevel,
          selectedPerkIds: ["sneak-anatomical-lore"],
        }),
        game,
      );
      const evaluated = await client.callTool({
        name: "lorerim_evaluate_build",
        arguments: { code },
      });
      expect(evaluated.isError).not.toBe(true);
      const evaluation = evaluated.structuredContent as {
        code: string;
        legal: boolean;
        violations: Array<{ type: string }>;
      };
      expect(evaluation.code).toBe(code);
      expect(evaluation.legal).toBe(false);
      expect(evaluation.violations.map((violation) => violation.type)).toContain("prerequisite");

      const applied = await client.callTool({
        name: "lorerim_apply_changes",
        arguments: {
          ops: [
            { op: "set_race", id: "nord" },
            { op: "take_perk", id: "sneak-stealth" },
          ],
        },
      });
      expect(applied.isError).not.toBe(true);
      const change = applied.structuredContent as {
        code: string;
        baseCode: string | null;
        evaluation: { code: string; legal: boolean };
        diff: Array<{ field: string; cause: string }>;
      };
      expect(change.baseCode).toBeNull();
      expect(change.evaluation.code).toBe(change.code);
      expect(change.evaluation.legal).toBe(true);
      expect(change.diff).toContainEqual(expect.objectContaining({ field: "race", cause: "requested" }));

      const failedChange = await client.callTool({
        name: "lorerim_apply_changes",
        arguments: { code, ops: [{ op: "take_perk", id: "sneak-archery" }] },
      });
      expect(failedChange.isError).toBe(true);
      expect(JSON.stringify(failedChange.content)).toContain("op #0 (take_perk)");

      const notACode = await client.callTool({
        name: "lorerim_evaluate_build",
        arguments: { code: "hello" },
      });
      expect(notACode.isError).toBe(true);
    } finally {
      // Never let a failing close mask the connect/listTools failure.
      await client.close().catch(() => {});
    }
  });

  it("serves a 2025-era client that opens with initialize", async () => {
    const messages: Array<{ id?: number; result?: Record<string, unknown> }> = [];
    const result = await runServer(serverPath, outDir, (stdin, stdout) => {
      let buffer = "";
      const send = (message: object) => stdin.write(`${JSON.stringify(message)}\n`);
      stdout.on("data", (chunkText: string) => {
        buffer += chunkText;
        let newline = buffer.indexOf("\n");
        while (newline >= 0) {
          const message = JSON.parse(buffer.slice(0, newline)) as (typeof messages)[number];
          buffer = buffer.slice(newline + 1);
          messages.push(message);
          if (message.id === 1) {
            send({ jsonrpc: "2.0", method: "notifications/initialized" });
            send({ jsonrpc: "2.0", id: 2, method: "tools/list", params: {} });
          } else if (message.id === 2) {
            stdin.end();
          }
          newline = buffer.indexOf("\n");
        }
      });
      send({
        jsonrpc: "2.0",
        id: 1,
        method: "initialize",
        params: {
          protocolVersion: "2025-06-18",
          capabilities: {},
          clientInfo: { name: "legacy-client", version: "0.0.0" },
        },
      });
    });

    expect(result.code).toBe(0);
    const initialize = messages.find((message) => message.id === 1)?.result;
    expect(initialize?.serverInfo).toMatchObject({ name: "lorerim" });
    expect(initialize?.capabilities).toHaveProperty("tools");
    const listed = messages.find((message) => message.id === 2)?.result as
      | {
          tools: Array<{
            name: string;
            inputSchema?: { type?: string };
            outputSchema?: { type?: string };
          }>;
        }
      | undefined;
    expect(listed?.tools.map((tool) => tool.name).sort()).toEqual(EXPECTED_TOOL_NAMES);
    // 2025-era clients require object-root schemas.
    for (const tool of listed?.tools ?? []) {
      expect(tool.inputSchema?.type, tool.name).toBe("object");
      expect(tool.outputSchema?.type, tool.name).toBe("object");
    }
  });
});
