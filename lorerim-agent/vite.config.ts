import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";
import { assemblePlugin } from "./packaging/assemblePlugin";

const agentRoot = fileURLToPath(new URL(".", import.meta.url));
const plannerSrc = fileURLToPath(new URL("../src", import.meta.url));

/**
 * After `server.js` is written, assembles the Claude Code plugin next to it
 * (`<outDir>/plugin/`), in whatever outDir this build resolved.
 */
function lorerimPlugin(): Plugin {
  let outDir = "";
  return {
    name: "lorerim-assemble-plugin",
    apply: "build",
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    writeBundle(options) {
      assemblePlugin(options.dir ? resolve(options.dir) : outDir);
    },
  };
}

/**
 * Bundles the MCP server, the planner engine it imports through `@/`, and the
 * `data/` JSON into one self-contained ESM file: `dist/server.js`, then
 * assembles the Claude Code plugin around a copy of it in `dist/plugin/`.
 *
 * Deliberately independent of the root `vite.config.ts`, whose GitHub Pages
 * plugins write `404.html` into the web app's `dist/`.
 */
export default defineConfig({
  root: agentRoot,
  publicDir: false,
  plugins: [lorerimPlugin()],
  resolve: {
    alias: {
      "@": plannerSrc,
    },
  },
  ssr: {
    // Inline every dependency (SDK, zod, fflate) so no node_modules is needed at runtime.
    noExternal: true,
    target: "node",
  },
  build: {
    ssr: "server/index.ts",
    outDir: "dist",
    emptyOutDir: true,
    target: "node22",
    minify: false,
    sourcemap: false,
    copyPublicDir: false,
    reportCompressedSize: false,
    rolldownOptions: {
      output: {
        format: "es",
        entryFileNames: "server.js",
        codeSplitting: false,
      },
    },
  },
});
