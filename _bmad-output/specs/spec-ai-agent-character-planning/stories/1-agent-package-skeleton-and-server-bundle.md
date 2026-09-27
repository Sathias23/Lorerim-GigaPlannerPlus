---
title: 'Agent package skeleton and server bundle'
type: 'feature'
created: '2026-09-27'
status: 'done'
baseline_commit: '3b00ce3b92657f6a3bfcc41b6c5bd85e48de7063'
route: 'dispatch'
review_loop_iteration: 0
context:
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/SPEC.md'
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/brownfield.md'
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/stack.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Every later story (catalog, evaluate, edit tools, plugin, Desktop bundle) needs a runnable MCP server that reuses the planner's engine and data, but the engine depends on Vite-only constructs (`import.meta.glob`, `@/` alias, JSON imports) that plain Node cannot run.

**Approach:** Create a self-contained `lorerim-agent/` package whose own Vite SSR config bundles `server/index.ts` plus the engine, codec, loader, and inlined `data/` into one ESM `dist/server.js`. At startup it Zod-validates game data via `loadAppData()` and serves MCP over stdio with zero tools. Boundary tests prove no React/zustand code is bundled.

## Boundaries & Constraints

**Always:** MCP TypeScript SDK v2 (`@modelcontextprotocol/server`), stdio transport; stdout carries only protocol, all logs go to stderr. Import `src/` read-only through `@/`; compose existing exports, never copy engine logic. Output is one self-contained ESM file runnable as `node <abs>/dist/server.js` with no `node_modules` beside it. The agent package owns its `package.json`, lockfile, tsconfig, Vite, Vitest, and ESLint configs.

**Never:** Edit any existing file except those in the brownfield.md allowlist (root `package.json` delegating scripts, `AGENTS.md` pointer). No edits to `src/`, `data/`, `extensions/`, `tools/`, root configs, `.gitignore`, or CI. Do not reuse the root `vite.config.ts` (its Pages plugins write `404.html`). No tools, resources, or prompts in this story. Do not import `src/store/buildStore.ts` or call `buildShareUrl` / URL helpers.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Start | `node dist/server.js` | stderr: one ready line naming data version (`game.manifest.version`) and perk count; nothing on stdout until a client speaks | N/A |
| List tools | MCP client connects over stdio, calls tools/list | empty tools array (server declares `tools` capability) | N/A |
| Data invalid | `loadAppData` throws | message on stderr, process exits code 1, nothing on stdout | no retry |
| Client leaves | stdin closes | process exits code 0 | N/A |

</frozen-after-approval>

## Code Map

- `src/data/loader.ts:70` -- `loadAppData(): AppData`, sync, no args; eager `import.meta.glob` of `../../data/game/perks/*.json` (line 58). Validates with Zod.
- `src/data/codecRegistrySnapshots.ts:15`, `src/extensions/loadExtensions.ts:6,14` -- more eager globs reaching `data/` and `extensions/`; Vite handles them unchanged.
- `src/test/helpers.ts` -- `getTestAppData()` (cached `loadAppData`); use in tests for the expected manifest version and perk count.
- `data/game/manifest.json` -- `version` (now `5.0.4.2`), read as `appData.game.manifest.version`.
- Import graph: no runtime react/zustand/`import.meta.env`; only type-only imports `src/extension-api/types.ts:1` (react) and `src/lib/perkRequirements.ts:2` (`@/store/uiStore`). Runtime externals: `zod`, `fflate` (resolved from root `node_modules`; root `npm ci` is a prerequisite).
- Root `vite.config.ts` -- `@` alias to `./src`; do not reuse. Root `vitest.config.ts` includes only `src/`, `extensions/`, `tools/data-editor/src/`, `e2e/`; root `tsconfig.app.json` includes only `src`, `data`, `extensions`, so the root test and build ignore the new package.
- `tsconfig.app.json` -- options to extend: ES2022 + DOM lib, bundler resolution, `strict`, `noUnused*`, `erasableSyntaxOnly`, `verbatimModuleSyntax`, `allowImportingTsExtensions`, `resolveJsonModule`.
- `eslint.config.js` (ESLint 10.6, per-file config lookup) -- root `ignores: ["dist"]` does not cover `lorerim-agent/dist`; a nested config handles it.
- `.gitignore` -- bare `dist` already ignores `lorerim-agent/dist`; no edit.
- SDK 2.1.0: `McpServer` from `@modelcontextprotocol/server`; `StdioServerTransport` from `@modelcontextprotocol/server/stdio`; `new McpServer(info, { capabilities: { tools: {} } })` installs tools/list handlers. `@modelcontextprotocol/client` 2.1.0 exists for tests.

## Tasks & Acceptance

**Execution:**
- [x] `lorerim-agent/package.json` + `package-lock.json` -- private ESM package; dependency `@modelcontextprotocol/server@^2.1.0`; devDependencies `vite ^8.1.3`, `vitest ^4.1.10`, `typescript ~6.0.3`, `@types/node ^26.1.0`, `@modelcontextprotocol/client ^2.1.0`; scripts `typecheck`, `build` (typecheck then vite build), `test` -- own install; afterwards confirm no win32-only packages were added to `package.json`.
- [x] `lorerim-agent/tsconfig.json` -- repo compiler options, `types: ["node", "vite/client"]`, `paths` `@/*` → `../src/*`, include `server/**` and config files only (TS follows imports into `src/`) -- type-safety without type-checking the whole web app.
- [x] `lorerim-agent/vite.config.ts` -- SSR build of `server/index.ts` → `dist/server.js`, `ssr.noExternal: true`, target node22, single chunk, `@` alias -- self-contained runnable file.
- [x] `lorerim-agent/vitest.config.ts` -- include `server/**/*.test.ts`, `@` alias, node env, generous timeout for build tests.
- [x] `lorerim-agent/eslint.config.js` -- ignore `dist`, TS recommended, node globals, importing plugins from root deps -- keeps root `npm run lint` off the bundle without touching root config.
- [x] `lorerim-agent/server/createServer.ts` -- `createServer(appData)` returns an `McpServer` (name `lorerim`, version from package.json, `tools` capability, no tools) -- seam for later stories.
- [x] `lorerim-agent/server/main.ts` -- `run(deps)` with injectable `loadAppData`, transport, stderr writer, and exit: load, log ready line to stderr, connect, exit 0 on transport close, exit 1 on load failure -- testable startup.
- [x] `lorerim-agent/server/index.ts` -- entry: calls `run` with real deps.
- [x] `lorerim-agent/server/main.test.ts` -- unit tests for the ready line and the Data-invalid row, with fakes.
- [x] `lorerim-agent/server/bundle.test.ts` -- build to a temp outDir via Vite's `build()` API; assert single chunk, `moduleIds` contain no `react`/`react-dom`/`zustand` and do include `data/game/manifest.json`, `imports` are Node built-ins only; spawn `node` on the output and cover the Start, List tools, and Client leaves rows via `@modelcontextprotocol/client`.
- [x] root `package.json` -- scripts `agent:build`, `agent:test` delegating with `npm --prefix lorerim-agent`; no dependency changes.
- [x] `AGENTS.md` -- one pointer line: agent package location, `npm --prefix lorerim-agent ci` then `agent:test`/`agent:build`, root `npm ci` required first.
- [x] `_bmad-output/specs/spec-ai-agent-character-planning/stack.md` -- record the re-verification on 2026-09-27 (server/client 2.1.0, SDK v1 1.30.1, Claude Code 2.1.283; stdio transport import path).

**Acceptance Criteria:**
- Given a fresh clone after root `npm ci` and `npm --prefix lorerim-agent ci`, when `npm run agent:build` then `npm run agent:test`, then both pass and `lorerim-agent/dist/server.js` is the only emitted JS file.
- Given `dist/server.js` copied alone to an empty temp dir, when run with `node`, then it starts and prints the ready line.
- Given the change, when `git diff main --stat` is run, then only new files under `lorerim-agent/`, the spec folder, root `package.json` scripts, and `AGENTS.md` appear, and root `npm test` and `npm run build` pass unchanged.

## Implementation Notes

- **Stdio entry is `serveStdio(() => createServer(appData), { transport })`**, not a hand-wired `server.connect(transport)`. In SDK 2.1.0 a hand-wired stdio server serves only a 2025-era `initialize` opening; `serveStdio` (same `@modelcontextprotocol/server/stdio` subpath) serves both that and the 2026-07-28 opening from one `McpServer` factory. The injected transport is still a `StdioServerTransport`. `serveStdio` owns `transport.onclose`, so `run` chains onto it after the call to exit 0. `bundle.test.ts` covers both a v2 `Client` and a raw 2025 `initialize` → `tools/list` exchange.
- **The typecheck includes `../src/vite-env.d.ts`** besides `server/**` and the configs: it carries the ambient `declare module "@/lib/parseBonusEffects.mjs"` that `src/lib/resolveOptionEffects.ts` needs. Only that one declaration file is added; the web app is not typechecked wholesale.
- **Two zod copies are bundled on purpose:** `src/` code resolves the root's zod (4.4.3, the version the web app validates with) and the SDK resolves the agent's (4.6.5). No `resolve.dedupe`, so data validation behaves exactly as in the planner.
- **Exit path:** `index.ts` sets `process.exitCode` and exits in the callback of an empty `stderr.write`, so the ready/error line is flushed before exit on pipes that write asynchronously.
- `createServer(_appData)` takes the data but does not use it yet; the nested ESLint config allows `^_` unused args.
- `vite@^8.1.3` resolved to 8.3.1 and `vitest@^4.1.10` to 4.1.11 in the agent lockfile. `npm install` added no platform-only packages to `package.json`; the lockfile lists every `@rolldown/binding-*` platform as optional.
- Bundle: `dist/server.js` ≈1.5 MB unminified. Its only import is `node:process`. Smoke-tested copied alone to an empty temp dir on Node 24 and Node 22.

## Spec Change Log

## Review Triage Log

| # | Layer | Finding | Verdict | Evidence | Route |
|---|---|---|---|---|---|
| 1 | verification-gap, blind | `index.ts` exit adapter untested; process-level exit 1 on invalid data unverified (stdin-close exit 0 passes via natural exit) | medium | Pre-verified gap: fakes bypass `index.ts`; SDK doc says the process exits naturally once stdin listeners go | patch |
| 2 | blind | `main.test.ts` asserts `started` after one microtask | low | Depends on `serveStdio` calling `start()` synchronously; direct fix via `vi.waitFor` | patch |
| 3 | edge-case | Ready-line regex escapes only `.` | low | Any other metachar in `manifest.version` breaks the match; direct fix is exact string compare | patch |
| 4 | edge-case | `client.close()` in `finally` can mask the primary error | low | A throwing close replaces the connect/list error; direct fix `.catch` | patch |
| 5 | blind | AGENTS.md co-locate-tests rule and test-required dirs omit `lorerim-agent/` | low | Line 45 says no other directory is scanned; the new pointer line lists agent tests | defer (agent-context file) |
| 6 | blind, verification-gap | No CI job / Dependabot for the agent package | medium | Real, but the frozen Never excludes CI edits (user decision: no CI until release) | reject: out of scope by intent |
| 7 | blind | `zod`/`fflate` bundled from root, not declared by the agent | low | By design (Code Map): same zod as the web app; fix changes the design | reject |
| 8 | blind | `onclose` chaining relies on SDK internals; double exit; no SIGTERM path | false | SDK `serveStdio` sets `wire.onclose` synchronously before `wire.start()` (stdio.mjs:566-573); transport `close()` guards `_closed`, so onclose fires once; Node's default SIGTERM terminates | reject |
| 9 | edge-case | Injected transport closes synchronously in `start()` before the wrapper | false | Real `StdioServerTransport.start` defers an already-ended stdin via `setImmediate` (stdio.mjs:72) | reject |
| 10 | edge-case | `start()` rejection leaves the server hanging after the ready line | false | Only rejects when already started; `index.ts` always passes a fresh transport | reject |
| 11 | edge-case | Transport failure (stdout error) exits 0 like a normal leave | low | Real, but the host is already gone; the fix adds failure-state tracking | reject |
| 12 | edge-case | EPIPE on stderr during exit flush crashes with exit 1 | low | Only when the host already closed stderr; nobody observes the code; the fix adds a guard | reject |
| 13 | edge-case, blind | Spawn tests can hang to timeout, leak the child, throw on stdin EPIPE or non-JSON stdout | low | Only on an already-failing run; the test still fails; guards add complexity | reject |
| 14 | edge-case | `@types/node ^26` vs node22 target | low | Matches the root package and the spec task; Node-24-only API use is unlikely | reject |
| 15 | edge-case | tsconfig includes `../src/vite-env.d.ts` beyond "server/** and config files" | false | Required ambient module declaration for `parseBonusEffects.mjs`; does not typecheck the web app wholesale | reject |
| 16 | blind | Boundary filter misses `.tsx`, radix, lucide, uiStore | false | Each of those value-imports react or zustand, which the filter catches | reject |
| 17 | blind | DOM lib hides browser globals in server code | low | Required: `src/engine/buildCodec.ts` typechecks against `window`; cannot drop | reject |
| 18 | blind | No `engines`/`lint` script; stack.md due date stale | low | The root declares no engines either (AGENTS.md); due date still governs later stories | reject |

## Verification

**Commands:**
- `npm --prefix lorerim-agent ci && npm run agent:build && npm run agent:test` -- expected: all pass.
- `npm test && npm run build` (root) -- expected: pass unchanged.
- `npx eslint lorerim-agent` -- expected: no errors; `dist/` not linted.
