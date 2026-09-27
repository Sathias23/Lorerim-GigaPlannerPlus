# Brownfield notes: reuse without modifying

Findings from a codebase check on 2026-09-27, and the rules that keep the agent package a pure add-on.

## Proposed layout (all new)

```
lorerim-agent/
  package.json            own deps (@modelcontextprotocol/server v2, vite, vitest) and lockfile
  tsconfig.json           extends root options; `@/*` → ../src/*
  vite.config.ts          SSR/library build of server/index.ts → dist/server.js
  vitest.config.ts        collects lorerim-agent/**/*.test.ts
  server/                 tool handlers, id validation, diff, ops, planner link
  plugin/
    .claude-plugin/plugin.json
    .mcp.json             node ${CLAUDE_PLUGIN_ROOT}/dist/server.js
    skills/lorerim-build/SKILL.md, references/
  mcpb/manifest.json      Desktop bundle manifest
  evals/                  CAP-9 prompts and legality runner
```

## Original-file touch allowlist

Only these existing files may change, each only as stated:

| File | Allowed change |
|---|---|
| root `package.json` | convenience scripts delegating into `lorerim-agent/` (e.g. `agent:build`, `agent:test`); no dependency changes |
| `.gitignore` | ignore `lorerim-agent/dist/` and bundle outputs |
| `AGENTS.md` | a pointer to the agent package and its test location |
| `src/**` | new pure exports only when a needed computation does not exist; unit-tested; no change to existing exports' behavior |

Root `vitest.config.ts`, `tsconfig*.json`, `vite.config.ts`, `.github/workflows/`, `data/`, `extensions/`, and `tools/` are not edited. A CI job is added only if the tool is released later. Root `npm test` and `npm run build` must not depend on the agent package.

## Modules to reuse

| Need | Existing export |
|---|---|
| Load and Zod-validate game data | `loadAppData()` in `src/data/loader.ts` |
| Budgets, requirements, conflicts | `computeBuild`, `getRemainingPerkPoints`, `getRemainingSkillPoints`, `getSelectedPerksBelowSkillRequirement`, `getPerksRequiringHigherPlayerLevel`, `getBuildPlayerLevelWarnings`, `getMaxAllowedSkillLevel` in `src/engine/buildEngine.ts` |
| Edits | `tryTakePerk`, `allocatePerk`, `applySkillLevelChange`, `applySkillTrainingRangeChange`, `reconcileBuild` |
| Cost to reach (CAP-7) | `computeSkillPointsToReach`, `getRequiredPlayerLevel` |
| Evaluation summary | `createBuildEvaluation` in `src/lib/buildEvaluation.ts` |
| Perk text search | `getPerkSearchTokens`, `doesPerkMatchTokens` in `src/lib/perkSearch.ts` |
| Requirement labels | `getPerkNodeRequirements` in `src/lib/perkRequirements.ts` |
| Share code | `encodeBuild`, `decodeBuildPackage` in `src/engine/buildCodec.ts` |
| Fresh build | `createInitialBuildState` |

## Hazards found

- **`import.meta.glob`** in `src/data/loader.ts`, `src/data/codecRegistrySnapshots.ts`, `src/extensions/loadExtensions.ts`. Native Node type stripping and plain esbuild do not handle it. Building the server with Vite (SSR/library mode, the agent's own config) handles it, the `@/` alias, and JSON inlining with zero source edits — so the bundler is Vite, not esbuild/tsup as the research suggested.
- **Browser-only functions:** `buildShareUrl` (`src/lib/buildIO.ts`, uses `window` and `import.meta.env.BASE_URL`) and `getBuildFromUrl`/`setBuildInUrl`/`clearBuildFromUrl` (`src/engine/buildCodec.ts`). Safe to import (only called at runtime) but must not be called; the server builds the planner link itself.
- **`src/store/buildStore.ts`** uses `import.meta.env.VITEST` and zustand. The agent never imports `src/store/buildStore.ts`; `buildCodec.ts` imports only types/helpers from `src/store/savedBuilds.ts`, which is React-free.
- Engine, codec, and loader have no React or zustand imports; `tsconfig` already sets `erasableSyntaxOnly`.
- **Silent id drop:** the codec skips unknown ids by design (stale-library tolerance). The agent validates ids first.
- **Build-state defaults:** a new `BuildState` field needs a default in `migrateBuildState`; the agent adds none.

## Verification of the boundary

- The bundle contains no `react`, `react-dom`, or `zustand` code.
- A test decodes a code the server produced with the web app's `decodeBuild` and gets the same state.
- A test compares `lorerim_evaluate_build` budgets with `computeBuild` for fixtures from `getTestGameData()` / `createTestBuildState()`.
