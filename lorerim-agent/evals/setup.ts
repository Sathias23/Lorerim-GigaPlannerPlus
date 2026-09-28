// `npm run agent:eval:setup -- [--root <dir>]`: prepares the two eval folders. It
// makes no model calls; the only `claude` commands it runs install the plugin.
import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { parseArgs } from "node:util";
import {
  DEFAULT_EVAL_ROOT,
  DIST_DIR,
  PLUGIN_NAME,
  REPO_ROOT,
  SERVER_FILE,
  SERVER_KEY,
  TOOL_PREFIX_BY_VARIANT,
  checkDist,
  isInside,
  isMainModule,
  resolveCliPath,
  samePath,
  toJson,
  type Variant,
} from "./common.ts";

/** Marketplace name and manifest path written by `npm run agent:build` (`packaging/assemblePlugin.ts`). */
export const MARKETPLACE_NAME = "lorerim-local";
export const MARKETPLACE_FILE = ".claude-plugin/marketplace.json";
export const PLUGIN_ID = `${PLUGIN_NAME}@${MARKETPLACE_NAME}`;

/** Tools neither variant may use, so neither can compute or look anything up outside the lorerim tools. */
export const DENIED_TOOLS = ["Bash", "PowerShell", "Write", "Edit", "WebFetch", "WebSearch"] as const;

/** Files setup needs from `dist/`. */
export const REQUIRED_DIST_FILES = [SERVER_FILE, MARKETPLACE_FILE, "plugin/.claude-plugin/plugin.json"] as const;

/** Why `root` cannot hold the eval folders, or null when it can. */
export function checkEvalRoot(root: string, repoRoot: string = REPO_ROOT): string | null {
  if (isInside(root, repoRoot)) {
    return `The eval root ${resolve(root)} is inside the repository (${repoRoot}). Its AGENTS.md would brief both variants on the engine; pick a folder outside it, e.g. the default ~/lorerim-evals.`;
  }
  return null;
}

/**
 * `.claude/settings.local.json` for one folder: allow the lorerim tools, deny
 * the rest of the computing and lookup tools. The skill folder may also read
 * its plugin's skill directories (for `references/`); the baseline folder
 * pre-approves its `.mcp.json` server.
 */
export function buildSettings(variant: Variant, readableDirs: readonly string[] = []): Record<string, unknown> {
  const serverRule = TOOL_PREFIX_BY_VARIANT[variant].replace(/__$/, "");
  const permissions: Record<string, unknown> = {
    allow: [serverRule],
    deny: [...DENIED_TOOLS],
  };
  if (readableDirs.length > 0) permissions.additionalDirectories = [...readableDirs];
  return variant === "baseline"
    ? { enabledMcpjsonServers: [SERVER_KEY], permissions }
    : { permissions };
}

/** The baseline folder's `.mcp.json`: the bundled server alone, launched with node by absolute path. */
export function buildBaselineMcpConfig(serverPath: string): Record<string, unknown> {
  return { mcpServers: { [SERVER_KEY]: { command: "node", args: [resolve(serverPath)] } } };
}

export interface CommandResult {
  status: number | null;
  stdout: string;
  stderr: string;
}

export type RunCommand = (command: string, args: readonly string[], cwd: string) => CommandResult;

export interface SetupDeps {
  distDir: string;
  repoRoot: string;
  run: RunCommand;
  log: (line: string) => void;
}

interface InstalledPlugin {
  id?: string;
  scope?: string;
  installPath?: string;
  projectPath?: string;
}

/**
 * The plugin's skill directories as installed for `folder`: where Claude Code
 * reports the install, plus the marketplace copy a directory marketplace loads
 * in place. Only these get read access, not the whole plugin.
 */
export function pluginSkillDirs(listJson: string, folder: string, distDir: string): string[] {
  const dirs = [join(distDir, "plugin", "skills")];
  let installed: InstalledPlugin[] = [];
  try {
    const parsed: unknown = JSON.parse(listJson);
    if (Array.isArray(parsed)) installed = parsed as InstalledPlugin[];
  } catch {
    return dirs;
  }
  for (const entry of installed) {
    if (entry.id !== PLUGIN_ID || typeof entry.installPath !== "string") continue;
    if (entry.projectPath !== undefined && !samePath(entry.projectPath, folder)) continue;
    const dir = join(entry.installPath, "skills");
    if (!dirs.some((existing) => samePath(existing, dir))) dirs.push(dir);
  }
  return dirs;
}

function runChecked(deps: SetupDeps, args: readonly string[], cwd: string): string {
  const result = deps.run("claude", args, cwd);
  if (result.status !== 0) {
    const output = `${result.stdout}\n${result.stderr}`.trim();
    throw new Error(`claude ${args.join(" ")} failed in ${cwd} (exit ${result.status ?? "signal"}): ${output}`);
  }
  return result.stdout;
}

function writeSettings(folder: string, settings: Record<string, unknown>): void {
  mkdirSync(join(folder, ".claude"), { recursive: true });
  writeFileSync(join(folder, ".claude", "settings.local.json"), toJson(settings));
}

/** Creates or refreshes both folders under `root`. Returns the process exit code. */
export function setup(root: string, deps: SetupDeps): number {
  const distProblem = checkDist(deps.distDir, REQUIRED_DIST_FILES);
  if (distProblem) {
    deps.log(distProblem);
    return 1;
  }
  const rootProblem = checkEvalRoot(root, deps.repoRoot);
  if (rootProblem) {
    deps.log(rootProblem);
    return 1;
  }

  const skillDir = join(root, "skill");
  const baselineDir = join(root, "baseline");
  mkdirSync(skillDir, { recursive: true });
  mkdirSync(baselineDir, { recursive: true });

  try {
    // Both commands are no-ops when already done; a directory marketplace loads
    // the plugin in place, so a rebuilt dist/ needs no reinstall.
    runChecked(deps, ["plugin", "marketplace", "add", resolve(deps.distDir), "--scope", "project"], skillDir);
    runChecked(deps, ["plugin", "install", PLUGIN_ID, "--scope", "project"], skillDir);
    const listJson = runChecked(deps, ["plugin", "list", "--json"], skillDir);
    writeSettings(skillDir, buildSettings("skill", pluginSkillDirs(listJson, skillDir, deps.distDir)));
  } catch (error) {
    deps.log(error instanceof Error ? error.message : String(error));
    return 1;
  }

  writeFileSync(join(baselineDir, ".mcp.json"), toJson(buildBaselineMcpConfig(join(deps.distDir, SERVER_FILE))));
  writeSettings(baselineDir, buildSettings("baseline"));

  deps.log(`skill folder:    ${skillDir} (plugin ${PLUGIN_ID}, project scope)`);
  deps.log(`baseline folder: ${baselineDir} (server only, from .mcp.json)`);
  deps.log("Next: follow lorerim-agent/evals/RUN_SHEET.md, then run `npm run agent:eval:score`.");
  return 0;
}

export function main(argv: readonly string[]): number {
  let root = DEFAULT_EVAL_ROOT;
  try {
    const { values } = parseArgs({ args: [...argv], options: { root: { type: "string" } }, strict: true });
    if (values.root !== undefined) root = resolveCliPath(values.root);
  } catch (error) {
    console.error(`${error instanceof Error ? error.message : String(error)}\nUsage: npm run agent:eval:setup -- [--root <dir>]`);
    return 1;
  }
  return setup(root, {
    distDir: DIST_DIR,
    repoRoot: REPO_ROOT,
    run: (command, args, cwd) => {
      const result = spawnSync(command, [...args], { cwd, encoding: "utf8" });
      if (result.error) return { status: null, stdout: "", stderr: result.error.message };
      return { status: result.status, stdout: result.stdout, stderr: result.stderr };
    },
    log: (line) => console.log(line),
  });
}

if (isMainModule(import.meta.url)) {
  process.exitCode = main(process.argv.slice(2));
}
