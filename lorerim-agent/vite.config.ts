import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const agentRoot = fileURLToPath(new URL(".", import.meta.url));
const plannerSrc = fileURLToPath(new URL("../src", import.meta.url));

/**
 * Bundles the MCP server, the planner engine it imports through `@/`, and the
 * `data/` JSON into one self-contained ESM file: `dist/server.js`.
 *
 * Deliberately independent of the root `vite.config.ts`, whose GitHub Pages
 * plugins write `404.html` into the web app's `dist/`.
 */
export default defineConfig({
  root: agentRoot,
  publicDir: false,
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
