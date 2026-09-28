import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/** The plugin source: manifest, launch config, and skills. Everything but the server. */
export const PLUGIN_SOURCE_DIR = fileURLToPath(new URL("../plugin", import.meta.url));

/** The file the plugin's `.mcp.json` launches, relative to the plugin root. */
export const PLUGIN_SERVER_FILE = "server.js";

/** The local marketplace the build outDir declares, so the plugin installs like a published one. */
export const MARKETPLACE_NAME = "lorerim-local";

/** The marketplace manifest, relative to the build outDir. */
export const MARKETPLACE_FILE = ".claude-plugin/marketplace.json";

/** Where the marketplace finds the plugin, relative to the outDir. */
export const MARKETPLACE_PLUGIN_SOURCE = "./plugin";

/** Files the plugin source must carry for Claude Code to load it. */
export const REQUIRED_PLUGIN_FILES = [
  ".claude-plugin/plugin.json",
  ".mcp.json",
  "skills/lorerim-build/SKILL.md",
] as const;

interface PluginManifest {
  name: string;
  version: string;
  description: string;
  author?: { name?: string };
}

/**
 * The marketplace manifest listing one plugin. Its name, description, and
 * version come from the plugin manifest, so the two cannot disagree.
 */
export function buildMarketplaceManifest(manifest: PluginManifest): Record<string, unknown> {
  return {
    name: MARKETPLACE_NAME,
    description: "Local marketplace for the lorerim plugin built from this repository.",
    owner: { name: manifest.author?.name ?? manifest.name },
    plugins: [
      {
        name: manifest.name,
        source: MARKETPLACE_PLUGIN_SOURCE,
        description: manifest.description,
        version: manifest.version,
      },
    ],
  };
}

/**
 * Assembles the self-contained Claude Code plugin at `<outDir>/plugin/`: a copy
 * of the plugin source plus the `server.js` the build just wrote to `outDir`.
 * Then writes `<outDir>/.claude-plugin/marketplace.json`, so `outDir` installs
 * as the `lorerim-local` marketplace.
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

  const manifest = JSON.parse(
    readFileSync(join(pluginDir, ".claude-plugin", "plugin.json"), "utf8"),
  ) as PluginManifest;
  const marketplacePath = join(outDir, MARKETPLACE_FILE);
  mkdirSync(dirname(marketplacePath), { recursive: true });
  writeFileSync(marketplacePath, `${JSON.stringify(buildMarketplaceManifest(manifest), null, 2)}\n`);
  return pluginDir;
}
