import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { MARKETPLACE_FILE as PACKAGED_MARKETPLACE_FILE, MARKETPLACE_NAME as PACKAGED_MARKETPLACE_NAME } from "../packaging/assemblePlugin";
import { REPO_ROOT } from "./common.ts";
import {
  DENIED_TOOLS,
  MARKETPLACE_FILE,
  MARKETPLACE_NAME,
  PLUGIN_ID,
  REQUIRED_DIST_FILES,
  buildBaselineMcpConfig,
  buildSettings,
  checkEvalRoot,
  pluginSkillDirs,
  setup,
  type CommandResult,
  type SetupDeps,
} from "./setup.ts";

let workDir: string;
let distDir: string;

beforeAll(async () => {
  workDir = await mkdtemp(join(tmpdir(), "lorerim-evals-setup-"));
  distDir = join(workDir, "dist");
  for (const file of REQUIRED_DIST_FILES) {
    mkdirSync(dirname(join(distDir, file)), { recursive: true });
    writeFileSync(join(distDir, file), "{}");
  }
});

afterAll(async () => {
  await rm(workDir, { recursive: true, force: true });
});

interface FakeClaude {
  deps: SetupDeps;
  calls: Array<{ args: readonly string[]; cwd: string }>;
  logs: string[];
}

function fakeClaude(respond: (args: readonly string[]) => CommandResult = () => ({ status: 0, stdout: "", stderr: "" }), dist = distDir): FakeClaude {
  const calls: FakeClaude["calls"] = [];
  const logs: string[] = [];
  return {
    calls,
    logs,
    deps: {
      distDir: dist,
      repoRoot: REPO_ROOT,
      run: (command, args, cwd) => {
        expect(command).toBe("claude");
        calls.push({ args, cwd });
        return respond(args);
      },
      log: (line) => logs.push(line),
    },
  };
}

function readJson(path: string): unknown {
  return JSON.parse(readFileSync(path, "utf8"));
}

describe("setup helpers", () => {
  it("names the marketplace the build writes", () => {
    expect(MARKETPLACE_NAME).toBe(PACKAGED_MARKETPLACE_NAME);
    expect(MARKETPLACE_FILE).toBe(PACKAGED_MARKETPLACE_FILE);
    expect(PLUGIN_ID).toBe("lorerim@lorerim-local");
  });

  it("refuses a root inside the repository", () => {
    expect(checkEvalRoot(REPO_ROOT)).toMatch(/inside the repository/);
    expect(checkEvalRoot(join(REPO_ROOT, "lorerim-agent", "evals", "results"))).toMatch(/inside the repository/);
    expect(checkEvalRoot(workDir)).toBeNull();
    expect(checkEvalRoot(dirname(REPO_ROOT))).toBeNull();
  });

  it("allows the plugin's lorerim tools in the skill folder and denies the rest", () => {
    expect(buildSettings("skill", ["/p/skills"])).toEqual({
      permissions: {
        allow: ["mcp__plugin_lorerim_lorerim"],
        deny: ["Bash", "PowerShell", "Write", "Edit", "WebFetch", "WebSearch"],
        additionalDirectories: ["/p/skills"],
      },
    });
    expect(DENIED_TOOLS).toEqual(["Bash", "PowerShell", "Write", "Edit", "WebFetch", "WebSearch"]);
  });

  it("pre-approves the baseline's .mcp.json server and allows its tools", () => {
    expect(buildSettings("baseline")).toEqual({
      enabledMcpjsonServers: ["lorerim"],
      permissions: { allow: ["mcp__lorerim"], deny: [...DENIED_TOOLS] },
    });
  });

  it("launches the baseline server with node by absolute path, never npx", () => {
    const config = buildBaselineMcpConfig(join(distDir, "server.js")) as { mcpServers: Record<string, { command: string; args: string[] }> };
    expect(config.mcpServers).toEqual({ lorerim: { command: "node", args: [join(distDir, "server.js")] } });
    expect(JSON.stringify(config)).not.toContain("npx");
  });

  it("finds the installed plugin's skill directories for this folder only", () => {
    const folder = join(workDir, "root", "skill");
    const list = JSON.stringify([
      { id: PLUGIN_ID, installPath: join(workDir, "cache", "0.1.0"), projectPath: folder },
      { id: PLUGIN_ID, installPath: join(workDir, "cache", "other"), projectPath: join(workDir, "elsewhere") },
      { id: "other@market", installPath: join(workDir, "x") },
    ]);
    expect(pluginSkillDirs(list, folder, distDir)).toEqual([join(distDir, "plugin", "skills"), join(workDir, "cache", "0.1.0", "skills")]);
    expect(pluginSkillDirs("not json", folder, distDir)).toEqual([join(distDir, "plugin", "skills")]);
  });
});

describe("setup", () => {
  it("creates both folders, installs the plugin in the skill folder only, and is idempotent", () => {
    const root = join(workDir, "root");
    const skillDir = join(root, "skill");
    const baselineDir = join(root, "baseline");
    const list = JSON.stringify([{ id: PLUGIN_ID, installPath: join(workDir, "cache"), projectPath: skillDir }]);
    const claude = fakeClaude((args) => ({ status: 0, stdout: args[1] === "list" ? list : "", stderr: "" }));

    expect(setup(root, claude.deps)).toBe(0);
    expect(claude.calls).toEqual([
      { args: ["plugin", "marketplace", "add", distDir, "--scope", "project"], cwd: skillDir },
      { args: ["plugin", "install", PLUGIN_ID, "--scope", "project"], cwd: skillDir },
      { args: ["plugin", "list", "--json"], cwd: skillDir },
    ]);
    const files = [
      join(skillDir, ".claude", "settings.local.json"),
      join(baselineDir, ".claude", "settings.local.json"),
      join(baselineDir, ".mcp.json"),
    ];
    const first = files.map((file) => readFileSync(file, "utf8"));
    expect(readJson(files[0]!)).toEqual(buildSettings("skill", [join(distDir, "plugin", "skills"), join(workDir, "cache", "skills")]));
    expect(readJson(files[1]!)).toEqual(buildSettings("baseline"));
    expect(existsSync(join(skillDir, ".mcp.json"))).toBe(false);

    expect(setup(root, claude.deps)).toBe(0);
    expect(files.map((file) => readFileSync(file, "utf8"))).toEqual(first);
  });

  it("Missing dist: exits 1 and says to run agent:build, before touching anything", () => {
    const root = join(workDir, "root-missing-dist");
    const claude = fakeClaude(undefined, join(workDir, "no-dist"));

    expect(setup(root, claude.deps)).toBe(1);
    expect(claude.logs.join("\n")).toContain("npm run agent:build");
    expect(claude.calls).toEqual([]);
    expect(existsSync(root)).toBe(false);
  });

  it("refuses a root inside the repository", () => {
    const claude = fakeClaude();
    expect(setup(join(REPO_ROOT, "lorerim-evals"), claude.deps)).toBe(1);
    expect(claude.logs.join("\n")).toMatch(/inside the repository/);
    expect(claude.calls).toEqual([]);
  });

  it("exits 1 with claude's output when a plugin command fails", () => {
    const claude = fakeClaude((args) =>
      args[1] === "install" ? { status: 1, stdout: "", stderr: "Plugin not found in marketplace" } : { status: 0, stdout: "", stderr: "" },
    );
    expect(setup(join(workDir, "root-failing"), claude.deps)).toBe(1);
    expect(claude.logs.join("\n")).toContain("Plugin not found in marketplace");
  });
});
