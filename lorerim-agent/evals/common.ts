// Shared by the eval CLIs, which run under Node's type stripping: runtime
// imports here and in every eval module must be relative `.ts` paths or
// packages, never the `@/` alias (only `import type` may reach into server/).
import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, posix, resolve, win32 } from "node:path";
import { fileURLToPath } from "node:url";
import * as z from "zod";

/** `lorerim-agent/`. */
export const AGENT_ROOT = fileURLToPath(new URL("..", import.meta.url));
/** The repository root, one level above the agent package. */
export const REPO_ROOT = resolve(AGENT_ROOT, "..");
/** Where `npm run agent:build` writes the server, the plugin, and the marketplace. */
export const DIST_DIR = join(AGENT_ROOT, "dist");
export const SERVER_FILE = "server.js";
export const DEFAULT_EVAL_ROOT = join(homedir(), "lorerim-evals");
export const DEFAULT_RESULTS_DIR = join(AGENT_ROOT, "evals", "results");
export const SCENARIOS_FILE = join(AGENT_ROOT, "evals", "scenarios.json");

/** The two prepared folders: the plugin really installed, and the server alone. */
export const VARIANTS = ["skill", "baseline"] as const;
export type Variant = (typeof VARIANTS)[number];

/** The plugin (`lorerim`) and its server key (`lorerim`); see `plugin/.claude-plugin/plugin.json`. */
export const PLUGIN_NAME = "lorerim";
export const SERVER_KEY = "lorerim";

/** Claude Code's tool-name prefix for the lorerim server in each folder. */
export const TOOL_PREFIX_BY_VARIANT: Record<Variant, string> = {
  skill: `mcp__plugin_${PLUGIN_NAME}_${SERVER_KEY}__`,
  baseline: `mcp__${SERVER_KEY}__`,
};

export const BUILD_FIRST_HINT = "Run `npm run agent:build` first.";

/** Why the eval CLIs cannot use `distDir`, or null when every required file is there. */
export function checkDist(distDir: string, requiredFiles: readonly string[] = [SERVER_FILE]): string | null {
  const missing = requiredFiles.filter((file) => !existsSync(join(distDir, file)));
  if (missing.length === 0) return null;
  return `${missing.map((file) => join(distDir, file)).join(", ")} not found. ${BUILD_FIRST_HINT}`;
}

/** True when `path` is `dir` or anywhere below it (case-insensitive on Windows). */
export function isInside(path: string, dir: string, platform: NodeJS.Platform = process.platform): boolean {
  const paths = platform === "win32" ? win32 : posix;
  const fold = (value: string) => (platform === "win32" ? paths.resolve(value).toLowerCase() : paths.resolve(value));
  const rel = paths.relative(fold(dir), fold(path));
  return rel === "" || (!rel.startsWith("..") && !paths.isAbsolute(rel));
}

/** Path equality as the filesystem sees it (case-insensitive on Windows, trailing separators ignored). */
export function samePath(a: string, b: string, platform: NodeJS.Platform = process.platform): boolean {
  return isInside(a, b, platform) && isInside(b, a, platform);
}

/**
 * A path given on the command line, resolved against the directory the user ran
 * npm from (`INIT_CWD`), not the package directory `npm --prefix` switches to.
 */
export function resolveCliPath(value: string, env: NodeJS.ProcessEnv = process.env): string {
  return resolve(env.INIT_CWD || process.cwd(), value);
}

/** True when this module is the script Node was started with. */
export function isMainModule(moduleUrl: string): boolean {
  const script = process.argv[1];
  return script !== undefined && samePath(fileURLToPath(moduleUrl), resolve(script));
}

export const SUPERNATURAL_PATHS = ["vampire", "werewolf", "lich", "none"] as const;
export type SupernaturalPath = (typeof SUPERNATURAL_PATHS)[number];

/** The supernatural paths that are character options (everything but "none"). */
export const SUPERNATURAL_OPTIONS = SUPERNATURAL_PATHS.filter(
  (path): path is Exclude<SupernaturalPath, "none"> => path !== "none",
);

const scenarioSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    prompt: z.string().min(1),
    levelTarget: z.number().int().positive(),
    forbiddenSkills: z.array(z.string().min(1)),
    supernatural: z.enum(SUPERNATURAL_PATHS),
  })
  .strict();

export type Scenario = z.infer<typeof scenarioSchema>;

const scenarioFileSchema = z.object({ scenarios: z.array(scenarioSchema).min(1) }).strict();

/** Lowercase with collapsed whitespace: how prompts are compared. */
export function normalizePrompt(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

/**
 * Validates the scenario file. Ids must be unique, and no prompt may contain
 * another, so a session's first message matches at most one scenario.
 */
export function parseScenarios(json: unknown): Scenario[] {
  const { scenarios } = scenarioFileSchema.parse(json);
  const ids = new Set<string>();
  for (const scenario of scenarios) {
    if (ids.has(scenario.id)) throw new Error(`duplicate scenario id: ${scenario.id}`);
    ids.add(scenario.id);
  }
  for (const a of scenarios) {
    for (const b of scenarios) {
      if (a !== b && normalizePrompt(a.prompt).includes(normalizePrompt(b.prompt))) {
        throw new Error(`scenario ${a.id}'s prompt contains ${b.id}'s, so matching would be ambiguous`);
      }
    }
  }
  return scenarios;
}

export function loadScenarios(path: string = SCENARIOS_FILE): Scenario[] {
  return parseScenarios(JSON.parse(readFileSync(path, "utf8")));
}

/** Stable JSON for files the evals write: two-space indent and a trailing newline. */
export function toJson(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`;
}
