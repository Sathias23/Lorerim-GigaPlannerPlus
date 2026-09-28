import { copyFileSync, cpSync, existsSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

/** The plugin source: manifest, launch config, and skills. Everything but the server. */
export const PLUGIN_SOURCE_DIR = fileURLToPath(new URL("../plugin", import.meta.url));

/** The file the plugin's `.mcp.json` launches, relative to the plugin root. */
export const PLUGIN_SERVER_FILE = "server.js";

/** Files the plugin source must carry for Claude Code to load it. */
export const REQUIRED_PLUGIN_FILES = [
  ".claude-plugin/plugin.json",
  ".mcp.json",
  "skills/lorerim-build/SKILL.md",
] as const;

/**
 * Assembles the self-contained Claude Code plugin at `<outDir>/plugin/`: a copy
 * of the plugin source plus the `server.js` the build just wrote to `outDir`.
 * Throws, failing the build, when the source or the server is missing.
 * Returns the plugin directory.
 */
export function assemblePlugin(outDir: string, sourceDir: string = PLUGIN_SOURCE_DIR): string {
  if (!existsSync(sourceDir) || !statSync(sourceDir).isDirectory()) {
    throw new Error(`lorerim plugin source not found at ${sourceDir}`);
  }
  for (const file of REQUIRED_PLUGIN_FILES) {
    if (!existsSync(join(sourceDir, file))) {
      throw new Error(`lorerim plugin source is missing ${file} (looked in ${sourceDir})`);
    }
  }
  const serverPath = join(outDir, PLUGIN_SERVER_FILE);
  if (!existsSync(serverPath)) {
    throw new Error(`cannot assemble the lorerim plugin: ${serverPath} was not built`);
  }

  const pluginDir = join(outDir, "plugin");
  rmSync(pluginDir, { recursive: true, force: true });
  cpSync(sourceDir, pluginDir, { recursive: true });
  copyFileSync(serverPath, join(pluginDir, PLUGIN_SERVER_FILE));
  return pluginDir;
}
