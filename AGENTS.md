<!-- bmad:context -->
<!-- Verified 2026-09-27 against 7ff3a0c. Managed by bmad-project-context; edits inside this block are replaced on refresh. Keep anything you want preserved outside the markers. -->

## Lorerim GigaPlanner Plus

Client-only character build planner for the LoreRim modpack: React 19, TypeScript, Vite, zustand. No backend — builds live in browser localStorage, share codes, and `.gpp` files; the site deploys to GitHub Pages from `main`. Game data is JSON under `data/`. Developer docs: `src/README.md`, `data/README.md`, `tools/import/README.md`, `extensions/README.md`, `e2e/README.md`, `.github/CI.md`.

## Policy

- Never push to `main`; open a PR.
- Every new feature, behavior change, or bug fix ships with unit tests; a bug fix adds a test that fails without the fix. If something truly can't be tested, say why in the PR — never omit tests silently.
- Tests are required for new or changed logic in `src/engine/`, `src/lib/`, `src/data/`, `src/layout/`, `tools/import/lib/`, and `tools/data-editor/`; optional for data-only JSON edits and pure UI/CSS/copy changes unless loader, engine, or accessibility behavior changes.
- Never rename an id in `data/` (perk, race, trait, skill, option, choice): share codes, `.gpp` backups, and saved builds store raw ids, and unknown ids are dropped silently. If a rename is unavoidable, add a legacy alias (pattern: `src/lib/oghmaLegacyChoices.ts`) plus a test decoding a real old code (`src/engine/buildCodec.crossVersion.test.ts`).
- Never edit or reorder `data/codec-registries/*.json`, or re-run `export:codec-registry` for a released version — v2 share links decode by their array order. A hand bump of `manifest.version` needs `npm run export:codec-registry`.

## Where things are

- Economy and rules engine: `src/engine/buildEngine.ts`. UI reads computed values from the store (`src/store/buildStore.ts`); never duplicate formulas in components.
- Share codec: `src/engine/buildCodec.ts`; `.gpp` backups: `src/lib/buildIO.ts`.
- Adding an extension: read `extensions/README.md` first. Perk extensions also need an entry in `data/game/extension-bindings.json`, or the next import drops them.
- Refreshing game data from a LoreRim install: `tools/import/README.md`.

## Running and verifying

- Use Node 22 (the CI version; `package.json` declares none).
- `npm run dev`, then open `http://localhost:5173/Lorerim-GigaPlannerPlus/` — the app is served under the base path, not `/`.
- Run `npm run build` as well as `npm test` before pushing: Vitest never typechecks, `tsc` skips `src/**` test files, and `noUnusedLocals`/`noUnusedParameters` fail the build on dead code. The >500 kB chunk warning is harmless.
- After editing `data/`, run `npm test` — Zod validation of the game JSON runs only there and at app startup; `npm run build` passes on invalid data.
- `npm run lint` exits non-zero on pre-existing errors in `src/` and `tools/data-editor/`; check only the files you touched.
- Playwright needs `npx playwright install chromium` once per machine before `npm run test:e2e`.
- `npm run dev:editor` (port 5174) writes straight to `data/` on disk — review the diff afterward.
- `npm run import:lorerim -- --install "<path>"` needs a full local LoreRim MO2 install (the folder with `ModOrganizer.exe`); it cannot run in CI or cloud sessions. Preview with `--dry-run`.

## Conventions that differ from defaults

- Three separate systems — never conflate them:
  - Skill level: `build.skillLevels`, capped by `getMaxAllowedSkillLevel()` = `min(maxSkillLevel, playerLevel + maxSkillAbovePlayerLevel)`, not a flat 100.
  - Perk points: spent on tree nodes, 1 per node unless `costsPerkPoint: false`; budget = `initialPerkPoints + (playerLevel − baseLevel) × perkPointsPerLevel`, plus effect-granted points.
  - Skill points: spent to raise skill levels at the tiered `skillLevelCosts`.
- Never hardcode economy numbers, level gates, or free-perk id lists in TypeScript or tests; read `data/game/mechanics.json` (`leveling.*`) and the perk JSON.
- Player level requirements live only in `data/game/perk-player-level-reqs.json`, merged at load as `playerLevelReq`. Never parse `[Requires Level N]` from descriptions, re-add `manifest.freePerkIds`, or strip `playerLevelReq` on regen without updating that file.
- Runtime requirement checks read `perk.skillReq` / `perk.playerLevelReq` (`src/lib/perkRequirements.ts`). Ranks are separate nodes (`<id>-r2`), not a field.
- The importer rebuilds perk names, descriptions, and `skillReq` from plugins, and `regen:effects` rewrites effects — hand-edit only the fields `tools/import/README.md` "Merge behavior" lists as preserved.
- A new `BuildState` field needs a default in `migrateBuildState` (`src/engine/buildEngine.ts`) — persisted builds carry no schema version. Encode saved builds with `tryEncodeSavedBuild`, which never throws during render.
- Co-locate tests: `foo.test.ts` (Vitest) in `src/`, `extensions/`, `tools/data-editor/src/`; `*.test.mjs` (Node runner) only in `tools/import/lib/`, `lib/effects/`, or `importers/` — no other directory is scanned.
- Use `getTestGameData()`, `getTestAppData()`, and `createTestBuildState()` from `src/test/helpers.ts`, not hand-rolled `GameData` mocks.
- Test behavior through public APIs (happy path, edge cases, regression); keep tests deterministic (no timers, network, or `localStorage` unless mocked); prefer extracting UI logic into pure functions and testing those; never merge `.skip` or `.todo`.
- Changing `buildEngine.ts` behavior means updating `buildEngine.test.ts`.

## Known pitfalls

- Write component tests as `*.test.ts`, never `*.test.tsx` — Vitest does not collect `.tsx`, and seven dead `.tsx` tests were added across PRs #36, #49, #50, #80.
- `npm install` on Windows can add platform-only packages (e.g. `@rolldown/binding-win32-x64-msvc`) to `package.json`, which breaks `npm ci` in CI. Prefer `npm ci`, and check the `package.json`/lockfile diff after any install.

<!-- /bmad:context -->
