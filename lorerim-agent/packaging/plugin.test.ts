import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";
import { build } from "vite";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { getTestGameData } from "@/test/helpers";
import { version as packageVersion } from "../package.json";
import { SERVER_NAME } from "../server/createServer";
import { connectTestClient } from "../server/testClient";
import { PLANNER_URL_ENV } from "../server/plannerLink";
import { PLUGIN_SERVER_FILE, PLUGIN_SOURCE_DIR, assemblePlugin } from "./assemblePlugin";

const agentRoot = fileURLToPath(new URL("..", import.meta.url));
const PLUGIN_NAME = "lorerim";
const PLUGIN_ROOT_VAR = "${CLAUDE_PLUGIN_ROOT}";
const SKILL_DIR = join(PLUGIN_SOURCE_DIR, "skills", "lorerim-build");
/** Claude Code's name for a tool of this plugin's server. */
const FULL_TOOL_PREFIX = `mcp__plugin_${PLUGIN_NAME}_${SERVER_NAME}__`;

interface McpConfig {
  mcpServers: Record<string, { command: string; args?: string[]; env?: Record<string, string> }>;
}

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

/**
 * The skill's frontmatter as flat `key: value` pairs. Only single-line plain or
 * quoted scalars are accepted, so anything fancier fails loudly here.
 */
function parseSkill(path: string): { frontmatter: Record<string, string>; body: string } {
  const text = readFileSync(path, "utf8").replace(/\r\n/g, "\n");
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text);
  if (!match) throw new Error(`${path} has no frontmatter block`);
  const frontmatter: Record<string, string> = {};
  for (const line of match[1]!.split("\n")) {
    const field = /^([a-z][a-z0-9_-]*): (.+)$/.exec(line);
    if (!field) throw new Error(`unsupported frontmatter line: ${JSON.stringify(line)}`);
    const raw = field[2]!.trim();
    let value: string;
    if (raw.startsWith('"')) value = JSON.parse(raw) as string;
    else if (raw.startsWith("'")) value = raw.slice(1, -1).replace(/''/g, "'");
    else if (/: | #/.test(raw)) throw new Error(`plain scalar needs quoting: ${line}`);
    else value = raw;
    frontmatter[field[1]!] = value;
  }
  return { frontmatter, body: match[2]! };
}

/** SKILL.md plus every reference file, as [relative path, text]. */
function skillFiles(): Array<[string, string]> {
  const files: Array<[string, string]> = [["SKILL.md", readFileSync(join(SKILL_DIR, "SKILL.md"), "utf8")]];
  const referencesDir = join(SKILL_DIR, "references");
  for (const name of readdirSync(referencesDir).sort()) {
    files.push([`references/${name}`, readFileSync(join(referencesDir, name), "utf8")]);
  }
  return files;
}

/** Tool names a skill text mentions, bare (`lorerim_x`) or full (`mcp__plugin_…__lorerim_x`). */
function mentionedToolNames(text: string): string[] {
  const names = new Set<string>();
  const withoutFull = text.replace(/\bmcp__[A-Za-z0-9_-]+/g, (full) => {
    // A full name with the wrong prefix is kept whole so the check names it.
    names.add(full.startsWith(FULL_TOOL_PREFIX) ? full.slice(FULL_TOOL_PREFIX.length) : full);
    return "";
  });
  for (const match of withoutFull.matchAll(/\blorerim_[A-Za-z0-9_]+/g)) names.add(match[0]);
  return [...names];
}

describe("plugin source", () => {
  it("has a manifest named lorerim at the package version", () => {
    const manifest = readJson<Record<string, unknown>>(join(PLUGIN_SOURCE_DIR, ".claude-plugin", "plugin.json"));

    expect(manifest.name).toBe(PLUGIN_NAME);
    expect(manifest.version).toBe(packageVersion);
    expect(typeof manifest.description).toBe("string");
    expect((manifest.description as string).length).toBeGreaterThan(0);
  });

  it("launches the server as node ${CLAUDE_PLUGIN_ROOT}/server.js under the key lorerim", () => {
    const config = readJson<McpConfig>(join(PLUGIN_SOURCE_DIR, ".mcp.json"));

    expect(Object.keys(config.mcpServers)).toEqual([SERVER_NAME]);
    const server = config.mcpServers[SERVER_NAME]!;
    expect(server.command).toBe("node");
    expect(server.args).toEqual([`${PLUGIN_ROOT_VAR}/${PLUGIN_SERVER_FILE}`]);
    expect(JSON.stringify(config)).not.toContain("npx");
  });

  it("carries nothing but the manifest, the launch config, and skills", () => {
    expect(readdirSync(PLUGIN_SOURCE_DIR).sort()).toEqual([".claude-plugin", ".mcp.json", "skills"]);
    expect(readdirSync(join(PLUGIN_SOURCE_DIR, "skills"))).toEqual(["lorerim-build"]);
  });
});

describe("lorerim-build skill", () => {
  const { frontmatter, body } = parseSkill(join(SKILL_DIR, "SKILL.md"));

  it("is named after its folder, within the name limits", () => {
    expect(frontmatter.name).toBe(basename(SKILL_DIR));
    expect(frontmatter.name!.length).toBeLessThanOrEqual(64);
    expect(frontmatter.name).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  });

  it("keeps the description and when_to_use within the listing limits", () => {
    const description = frontmatter.description ?? "";
    const whenToUse = frontmatter.when_to_use ?? "";

    expect(description.length).toBeGreaterThan(0);
    expect(description.length).toBeLessThanOrEqual(1024);
    expect(description.length + whenToUse.length).toBeLessThanOrEqual(1536);
  });

  it("writes the description in the third person with trigger phrases first", () => {
    const description = frontmatter.description ?? "";

    expect(description).not.toMatch(/\b(I|me|my|we|our|you|your)\b/i);
    expect(description.slice(0, 60)).toContain("LoreRim");
  });

  it("keeps the body under 500 lines", () => {
    expect(body.split("\n").length).toBeLessThanOrEqual(500);
  });

  it("links every reference file, and every link resolves", () => {
    const files = skillFiles();
    const skill = files[0]![1];
    const links = [...skill.matchAll(/\]\((references\/[^)]+)\)/g)].map((match) => match[1]!);

    for (const link of links) expect(existsSync(join(SKILL_DIR, link)), link).toBe(true);
    expect([...new Set(links)].sort()).toEqual(files.slice(1).map(([path]) => path));
  });

  it("names only tools the server registers", async () => {
    const harness = await connectTestClient();
    try {
      const { tools } = await harness.client.listTools();
      const registered = new Set(tools.map((tool) => tool.name));

      const unknown = skillFiles().flatMap(([path, text]) =>
        mentionedToolNames(text)
          .filter((name) => !registered.has(name))
          .map((name) => `${path}: ${name}`),
      );
      expect(unknown).toEqual([]);
      expect(mentionedToolNames(skillFiles()[0]![1]).length).toBeGreaterThan(0);
    } finally {
      await harness.close();
    }
  });

  it("the grounding check catches an unregistered or mis-prefixed tool", () => {
    expect(mentionedToolNames("call lorerim_make_build then `lorerim_search_perks`").sort()).toEqual([
      "lorerim_make_build",
      "lorerim_search_perks",
    ]);
    expect(mentionedToolNames(`${FULL_TOOL_PREFIX}lorerim_get_entity and mcp__lorerim__lorerim_get_entity`)).toEqual([
      "lorerim_get_entity",
      "mcp__lorerim__lorerim_get_entity",
    ]);
    expect(mentionedToolNames("then lorerim_searchPerks or lorerim_get_entity2").sort()).toEqual([
      "lorerim_get_entity2",
      "lorerim_searchPerks",
    ]);
    expect(mentionedToolNames("LORERIM_PLANNER_URL and lorerim-build")).toEqual([]);
  });

  it("bundles no game data: no quoted token is a real entity id", () => {
    const game = getTestGameData();
    const ids = new Set<string>([
      ...Object.keys(game.perkById),
      ...game.races.map((entry) => entry.id),
      ...game.birthsigns.map((entry) => entry.id),
      ...game.deities.map((entry) => entry.id),
      ...game.traits.map((entry) => entry.id),
      ...game.skills.map((entry) => entry.id),
      ...game.characterOptions.flatMap((option) => [option.id, ...option.choices.map((choice) => choice.id)]),
    ]);

    const found = skillFiles().flatMap(([path, text]) =>
      [...text.matchAll(/`([^`\n]+)`|"([^"\n]+)"/g)]
        .map((match) => match[1] ?? match[2]!)
        .filter((token) => ids.has(token))
        .map((token) => `${path}: ${token}`),
    );
    expect(found).toEqual([]);
  });
});

describe("assemblePlugin", () => {
  let outDir: string;

  beforeAll(async () => {
    outDir = await mkdtemp(join(tmpdir(), "lorerim-agent-assemble-"));
  });

  afterAll(async () => {
    if (outDir) await rm(outDir, { recursive: true, force: true });
  });

  it("fails when the plugin source is missing", () => {
    writeFileSync(join(outDir, PLUGIN_SERVER_FILE), "// server\n");

    expect(() => assemblePlugin(outDir, join(outDir, "no-such-plugin"))).toThrow(/plugin source not found/);
  });

  it("fails when the plugin source lacks its launch config", () => {
    const source = join(outDir, "partial-plugin");
    mkdirSync(join(source, ".claude-plugin"), { recursive: true });
    writeFileSync(join(source, ".claude-plugin", "plugin.json"), "{}");

    expect(() => assemblePlugin(outDir, source)).toThrow(/\.mcp\.json/);
  });

  it("fails when server.js was not built", async () => {
    const empty = await mkdtemp(join(tmpdir(), "lorerim-agent-noserver-"));
    try {
      expect(() => assemblePlugin(empty)).toThrow(/was not built/);
    } finally {
      await rm(empty, { recursive: true, force: true });
    }
  });
});

describe("assembled plugin", () => {
  let outDir: string;
  let pluginDir: string;

  beforeAll(async () => {
    outDir = await mkdtemp(join(tmpdir(), "lorerim-agent-plugin-"));
    await build({
      configFile: join(agentRoot, "vite.config.ts"),
      mode: "production",
      logLevel: "silent",
      build: { outDir, emptyOutDir: true },
    });
    pluginDir = join(outDir, "plugin");
  });

  afterAll(async () => {
    if (outDir) await rm(outDir, { recursive: true, force: true });
  });

  it("holds the plugin source plus server.js", () => {
    expect(readdirSync(pluginDir).sort()).toEqual([".claude-plugin", ".mcp.json", PLUGIN_SERVER_FILE, "skills"]);
    expect(readFileSync(join(pluginDir, "skills", "lorerim-build", "SKILL.md"), "utf8")).toBe(
      readFileSync(join(SKILL_DIR, "SKILL.md"), "utf8"),
    );
  });

  it("starts from its .mcp.json command with CLAUDE_PLUGIN_ROOT set and lists the 4 tools", async () => {
    const config = readJson<McpConfig>(join(pluginDir, ".mcp.json"));
    const server = config.mcpServers[SERVER_NAME]!;
    const args = (server.args ?? []).map((arg) => arg.split(PLUGIN_ROOT_VAR).join(pluginDir));
    const localBase = "http://localhost:5173/Lorerim-GigaPlannerPlus/";

    const transport = new StdioClientTransport({
      command: server.command,
      args,
      // Somewhere unrelated, so nothing resolves relative to the repo.
      cwd: tmpdir(),
      env: { ...(process.env as Record<string, string>), [PLANNER_URL_ENV]: localBase },
      stderr: "pipe",
    });
    const client = new Client({ name: "lorerim-plugin-test", version: "0.0.0" });
    try {
      await client.connect(transport);
      const { tools } = await client.listTools();
      expect(tools.map((tool) => tool.name).sort()).toEqual([
        "lorerim_apply_changes",
        "lorerim_evaluate_build",
        "lorerim_get_entity",
        "lorerim_search_perks",
      ]);

      // The entry point reads the planner base from the environment.
      const applied = await client.callTool({
        name: "lorerim_apply_changes",
        arguments: { ops: [{ op: "set_player_level", level: getTestGameData().mechanics.leveling.baseLevel }] },
      });
      expect(applied.isError).not.toBe(true);
      const { code, plannerUrl } = applied.structuredContent as { code: string; plannerUrl: string };
      expect(plannerUrl.startsWith("http://localhost:5173/Lorerim-GigaPlannerPlus/planner?build=")).toBe(true);
      expect(new URL(plannerUrl).searchParams.get("build")).toBe(code);
    } finally {
      await client.close().catch(() => {});
    }
  });
});
