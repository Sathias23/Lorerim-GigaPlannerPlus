import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  root: fileURLToPath(new URL(".", import.meta.url)),
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("../src", import.meta.url)),
    },
  },
  test: {
    environment: "node",
    include: ["server/**/*.test.ts", "packaging/**/*.test.ts"],
    globals: false,
    // bundle.test.ts and plugin.test.ts run a full Vite build and spawn the bundled server.
    testTimeout: 120_000,
    hookTimeout: 180_000,
  },
});
