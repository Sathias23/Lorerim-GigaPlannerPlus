---
title: 'Build evaluation tool'
type: 'feature'
created: '2026-09-27'
status: 'done'
baseline_commit: '6e5eecfe6dc4dcb4906a31463d763ff1ce7cfdf2'
route: 'dispatch'
review_loop_iteration: 0
context:
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/SPEC.md'
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/tool-surface.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** An agent can look up ids (story 2) but cannot learn whether a build is legal, so any repair loop would rest on the LLM's own arithmetic — the failure mode the engine-grounded design exists to remove.

**Approach:** Register `lorerim_evaluate_build(code)` (CAP-3). It decodes the code exactly as the web planner does, runs `computeBuild` once, and returns budgets used/available, **every** violation, and every id the current data does not know (with did-you-mean via story 2's `resolveEntity`). Unknown ids need the code's pre-reconcile contents, so add one new pure export to `src/engine/buildCodec.ts`.

## Boundaries & Constraints

**Decisions (2026-09-27, user):** (1) Keep the full spec in one story. (2) The response always includes a compact `build` block describing the evaluated build: race, birthsign, deity, traits, major/minor/oghma skills, non-default option choices, and selected perks, each as `{id, name}`, plus `playerLevel`. This is so an agent can repair a code someone pasted without guessing what it contains.

**Always:** Every number comes from an engine export (`computeBuild`, `getEarned*`, `getMaxAllowedSkillLevel`, `getUsedAttributeChoices`, `arePrerequisitesMet`, …); the agent package does no build arithmetic beyond sign checks and `used − available` shortfalls of engine values. Violations cover everything the planner's LevelBar alerts on (perk, destiny, skill-point and training budgets; skill-req conflicts; player-level warnings: skill cap, skill-increase limit, perk level req, attribute choices) plus unmet perk prerequisites. Output is deterministic (fixed category order, then engine order). `outputSchema` root is one object; `structuredContent` plus the same JSON as text. Response carries `dataVersion` (manifest) and `codeDataVersion` (from the code, when present). The new `src/` export has its own unit test and changes no existing export's behavior.

**Never:** Edit files outside `lorerim-agent/`, this spec folder, and the one new export (plus its test) in `src/engine/buildCodec.ts`. Import `src/store/**`. Call `buildShareUrl` or URL helpers. Re-encode or "fix" the code — the input code is echoed back trimmed. Truncate the violation list.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Legal build | code from `encodeBuild` of a reconciled fixture | `legal: true`, empty `violations`/`unknownIds`, budgets equal `computeBuild(decodeBuild(code))` | N/A |
| Over budget | more costing perks than earned points | `perk_points` violation: used, available, shortfall | N/A |
| Skill req unmet | perk selected, skill below `skillReq` | `skill_requirement` violation naming perk, skill, required, actual, shortfall | N/A |
| Player level too low | perk with `playerLevelReq` > level; skill above cap | `player_level_requirement` / `skill_level_cap` violations; `minimumPlayerLevel` from engine | N/A |
| Missing prerequisite | perk selected without its prerequisite(s) | `prerequisite` violation listing the missing `{id,name}` | N/A |
| Unknown ids | v3 code naming a perk/trait/race id not in data | `unknownIds` rows `{kind, id, suggestions}`; `legal: false`; rest evaluated as the planner would | N/A |
| Multi-variant code | shared package with milestones | evaluates the variant the planner opens (active variant); note names the variant count | N/A |
| Not a code | `"hello"`, corrupt base64/gzip, a planner URL | nothing evaluated | `isError`: could not decode; codes start with `3.`/`2.`; pass the `build=` value, not the URL |
| Bad arguments | missing `code`, extra keys, >20k chars | nothing evaluated | `isError` from SDK input validation (`.strict()`) |

</frozen-after-approval>

## Code Map

- `src/engine/buildCodec.ts:596` -- `decodeBuildPackage` returns `{build, shared?, sourceModpackVersion?}`; every path ends in `payloadToBuildState(…, game)` → `reconcileImportedBuild` → `sanitizeImportedBuildReferences` (`buildEngine.ts:903`), which silently drops unknown race/birthsign/deity/trait/skill/perk ids; `normalizeCharacterOptionChoices` (`src/lib/characterOptions.ts:24`) drops unknown choices. v3 payloads carry raw ids; v2 maps registry indexes through the source version's registry (ids may no longer exist); v1 is raw JSON.
- `src/engine/buildEngine.ts:1320` -- `computeBuild` gives `perkPointsSpent/Remaining`, `skillPointsSpent/Remaining`, `trainingLevelsUsed/Remaining`, `destinyPerkPointsRemaining`, `skillLevels`, `skillReqConflicts`, `playerLevelWarnings {skills, skillIncreases, training, perks, destinyPerksOverBudget, attributeChoicesOverBy}`, `minimumPlayerLevel`, `traitLimit`. Available totals: `getEarnedPerkPoints`, `getEarnedSkillPoints`, `getEarnedTrainingLevels`, `getEarnedDestinyPerkPoints` + `computeDestinyPerkPointsSpent`, `getEarnedAttributeChoices` + `getUsedAttributeChoices`, `getMaxAllowedSkillLevel`. Prerequisites: `arePrerequisitesMet` (`:1951`; all-of `prerequisites`, any-of `prerequisitesAny`); nothing else checks them.
- `src/components/LevelBar.tsx:790-860` -- the planner's alert set; read-only reference for which conditions count as violations.
- `src/store/buildStore.ts:99` -- private `getActiveBuildFromPackage`: `activeVariantIndex` 0 → `decoded.build`, else `shared.milestones[i-1].build`. Do not import; mirror the selection.
- `lorerim-agent/server/ids.ts` -- `resolveEntity(game, kind, id, optionLabels)` → `{ok:false, message, suggestions}`; kinds include `option`. Option labels: `appData.ui.labels.panels["character-options"]` (see `getEntity.ts:34`).
- `lorerim-agent/server/toolResult.ts` -- `jsonResult`, `errorResult`, `READ_ONLY_TOOL_ANNOTATIONS`. `server/createServer.ts` -- register here. `server/testClient.ts` -- `connectTestClient()` for tool tests. `server/bundle.test.ts` -- asserts tool names over `dist/server.js`.
- `src/test/helpers.ts` -- `getTestGameData()`, `getTestAppData()`, `createTestBuildState()`.

## Tasks & Acceptance

**Execution:**
- [x] `src/engine/buildCodec.ts` -- add `decodeUnreconciledBuild(code, game): BuildState`: the build the planner would open (active variant for packages), as the code encodes it, before sanitize/reconcile; internal refactor only (e.g. a reconcile flag threaded to `payloadToBuildState`), `decodeBuildPackage` output unchanged -- source of unknown ids without re-implementing the codec.
- [x] `src/engine/buildCodec.unreconciled.test.ts` -- a v3 code with an unknown perk/trait keeps them here while `decodeBuild` drops them; a clean code matches `decodeBuild` on ids; v2 code from `buildCodec.crossVersion.test.ts` decodes.
- [x] `lorerim-agent/server/tools/evaluateBuild.ts` -- input `{code}` (`.strict()`, 1–20000 chars); `evaluateBuild(appData, code)` pure function + `registerEvaluateBuildTool`; output `{code, dataVersion, codeDataVersion, playerLevel, minimumPlayerLevel, legal, build, budgets, violations, unknownIds, notes}` (`build` per Decision 2; option choices as `{option {id,name}, choice {id,label}}` with labels resolved like `getEntity.ts`); `budgets` = `perkPoints`, `destinyPerkPoints`, `skillPoints`, `trainingLevels`, `attributeChoices` each `{used, available, remaining}`, plus `skillLevels {maxAllowed, levels}`; violation rows `{type, entity {kind,id,name}|null, skill? {id,name}, required, actual, shortfall, missing?, message}`.
- [x] `lorerim-agent/server/tools/evaluateBuild.test.ts` -- every I/O row through `connectTestClient`; parity: for ≥3 fixtures (legal, over-budget, low-level) every `used`/`remaining` equals `computeBuild(game, decodeBuild(code, game))`; widest realistic illegal fixture serializes under 10k tokens (chars/4).
- [x] `lorerim-agent/server/createServer.ts`, `server/bundle.test.ts` -- register the tool; bundle test expects three names and calls `lorerim_evaluate_build` through `dist/server.js`.

**Acceptance Criteria:**
- Given any code, when evaluated, then every returned budget number equals the corresponding engine value for `decodeBuild(code)`, and `legal` is true only when `violations` and `unknownIds` are both empty.
- Given the change, when `npm run agent:build && npm run agent:test` and root `npm test && npm run build` run, then all pass, `npx eslint lorerim-agent src/engine/buildCodec.ts` is clean, and `git diff main --stat` shows only `lorerim-agent/`, this spec folder, and the two allowlisted `src/engine/` files.

## Implementation Notes

- **Codec refactor:** a `reconcile` flag (default `true`) threads from a private `decodeBuildPackageInternal` through `decodeBuildV2/V3`, the shared-package builders, and `payloadToBuildState`; `decodeBuildPackage` passes `true`, so its output is unchanged. `decodeUnreconciledBuild` passes `false` and picks the active variant with the same rule as `buildStore`'s private `getActiveBuildFromPackage`. v2 ids still go through the source version's registry (out-of-range indexes are lost there, before any id exists to report).
- **Evaluated build = planner's build:** `reconcileBuild(game, migrateBuildState(activeVariant))` of `decodeBuildPackage`, then one `computeBuild` — the exact steps `loadBuild`/`loadSharedBuild` take. For single-variant codes this equals `computeBuild(decodeBuild(code))` (parity-tested on legal, over-budget, low-level, and unknown-id fixtures).
- **Violation categories, fixed order:** `perk_points`, `destiny_perk_points`, `skill_points`, `training_levels`, `skill_requirement`, `skill_level_cap`, `skill_increase_limit`, `player_level_requirement`, `attribute_choices`, `prerequisite` (LevelBar's alert order, prerequisites last). Budget rows: `entity: null`, `required` = used, `actual` = available, `shortfall = used − available`. Requirement rows: `shortfall = required − actual`. Cap rows: `required` = cap, `actual` = level, `shortfall = actual − cap`. Prerequisite rows count conditions (each all-of perk is one, a non-empty any-of group is one); `missing` lists unmet all-of perks then every any-of perk when none is taken; one row per perk id even for stackable perks.
- **Unknown ids** come from `decodeUnreconciledBuild`, in kind order race, birthsign, deity, trait, skill (major/minor/Oghma lists and skill-level/training keys), option, choice, perk; deduped per kind. A **choice** is unknown when `normalizeCharacterOptionChoices` (the engine's own rule) resets a non-default raw value to the default; toggle options coerce any value to `claimed`, so they never report one. Choice rows add `option {id,name}`; suggestions rank the option's choices by id and label.
- **Notes (string array):** variant count and which variant was evaluated; data-version mismatch; unknown ids are dropped on open; known ids the planner still drops on open (e.g. perks removed by supernatural normalization, skills past the major/minor limit).
- **`legal`** also requires that the planner drops no known ids on open (same reason unknown ids fold in: the code does not open as written). The destiny row's message names the perks in `destinyPerksOverBudget`; budget hints state the engine's minimum player level without claiming it covers every budget (it clamps at the max level).
- **Errors:** any decode throw → `isError` "Could not decode … start with "3." … pass only the value after build=". A decoded code the engine then throws on → a separate `isError` naming the engine error.
- Moved `getSkillName`/`perkRef` from `getEntity.ts` into `ids.ts` and exported `getOptionLabels` from `getEntity.ts` for reuse.
- Widest realistic illegal fixture (the 59-perk v2 user build re-encoded at base level, 23 violations) serializes to ≈11.5k chars (≈2.9k tokens).
- `npx eslint lorerim-agent src/engine/buildCodec.ts` as one invocation fails with a typescript-eslint `tsconfigRootDir` parsing error on every file, including untouched ones (two tsconfig roots in one run; pre-existing). Run separately, `npx eslint lorerim-agent` and `npx eslint src/engine/buildCodec.ts src/engine/buildCodec.unreconciled.test.ts` are clean.

## Spec Change Log

## Review Triage Log

| # | Layer | Finding | Verdict | Evidence | Route |
|---|---|---|---|---|---|
| 1 | blind, edge-case | `legal` stays true when the planner drops known ids on open (traits past limit, surplus major/minor skills, supernatural resets) | low | Real: `findDroppedKnownIds` only feeds a note; contradicts Design Notes' reason for folding unknown ids into `legal`; fix is one condition | patch |
| 2 | blind | `raiseLevel` hint says the minimum level "covers every budget"; false when `getMinimumPlayerLevelForBuild` clamps at max level | low | Real: clamp at `buildEngine.ts:773`; fix is a text change | patch |
| 3 | blind | `destiny_perk_points` row names no perks though `playerLevelWarnings.destinyPerksOverBudget` lists them | low | Real: agent cannot tell which Destiny perks to drop; fix names them in the message | patch |
| 4 | blind, edge-case | Agent test imports `@/store/savedBuilds`, which the Never list forbids | low | Real in `evaluateBuild.test.ts`; fixture can be built from raw v3 payloads. The `src/` test is planner-side, where store imports are normal | patch |
| 5 | verification-gap, blind | No test triggers `skill_points`, `training_levels`, `destiny_perk_points` rows | medium | Pre-verified: deleting a branch fails nothing | patch |
| 6 | verification-gap, blind | Unknown birthsign/deity/`l`/`tr` ids and per-kind dedup never tested | low | Pre-verified: fixture lacks `s`,`b`,`l`,`tr` | patch |
| 7 | verification-gap, blind | "Planner also drops" note never produced in a test | low | Pre-verified: no test searches for it | patch |
| 8 | verification-gap, blind | `attributeChoices.remaining` not asserted; multi-variant test has no parity check | low | Pre-verified: `expectEngineParity` skips it | patch |
| 9 | verification-gap | `reconcile=false` only proven on top-level v3; v2/v1/milestone paths could reconcile and pass | medium | Pre-verified: every assertion holds for a reconciled build | patch |
| 10 | verification-gap | Engine-error `isError` path untested | low | Pre-verified; no realistic payload known that decodes then breaks the engine | defer |
| 11 | blind | `build` block lacks the attribute split (and stored skill levels/training) that violation messages tell the agent to change | low | Real, but Decision 2 enumerates the block's fields; adding surface belongs with story 4's `set_attribute_bonus` op, where the agent edits it | reject |
| 12 | blind | Active-variant selection copied in `buildStore`, `decodeUnreconciledBuild`, and `evaluateBuild` | low | Copies identical; both tested; single selector needs new public surface | reject |
| 13 | blind | Every call decodes twice | low | Negligible cost for codes ≤20k chars | reject |
| 14 | blind | Clamped player/skill levels on open are not reported | low | Planner and `encodeBuild` codes are already clamped; only hand-edited codes; fix adds comparisons | reject |
| 15 | blind, edge-case | AC 1 says parity with `decodeBuild(code)`, which differs for active variant > 0 | low | Fix is a spec edit; Implementation Notes already scope it | reject |
| 16 | blind | Single `eslint lorerim-agent src/...` run fails | low | Pre-existing two-tsconfig-root lint setup; split runs clean; fix is a spec edit | reject |
| 17 | blind, edge-case | Non-string ids / non-array lists in hand-edited payloads mis-reported (TypeError → engine error, per-char rows) | low | Only hand-edited codes; fix adds type guards | reject |
| 18 | blind | 10k-token test counts text only, not `structuredContent` too | false | Same measure as story 2 (text block is what the model reads); realistic codes are far below the 20k input cap | reject |
| 19 | edge-case | NaN/string numeric fields fail `outputSchema` | low | Hand-edited codes only; fix adds guards | reject |
| 20 | edge-case | Reconcile throw inside `decodeBuildPackage` reported as "Could not decode" | low | Hand-edited shapes only; fix restructures error paths | reject |
| 21 | edge-case | Out-of-range `av` gives "variant 6 of 2" note | low | Planner never writes it; fix adds a branch | reject |
| 22 | edge-case | Two supernatural options reset silently on open | low | Planner codes are reconciled before encoding; hand-edited only | reject |
| 23 | edge-case | Skill in both raw major and minor reported as dropped | low | Accurate: the minor slot is dropped on open; with #1 it makes `legal` false, which is correct | reject |
| 24 | edge-case | v2 out-of-range registry indexes dropped silently | low | No id exists to report; planner-written indexes are in range | reject |
| 25 | edge-case | Non-allocatable skill keys in `l`/`tr` dropped without a note | low | Encoder never writes them; hand-edited only | reject |

## Design Notes

- **Why a `src/` export:** the codec drops unknown ids during decode by design; re-parsing base64/gzip/v2 registries in the agent would copy the codec. The brownfield allowlist permits a new pure export.
- **`legal`** folds in unknown ids: the planner silently drops them, so a code containing them does not open as written.
- **No truncation:** CAP-3 says "all violations"; rows stay compact (one short `message` each). A realistic bad build is well under 10k tokens; only a pathological code (hundreds of illegal perks) could exceed client caps.
- **Shortfall** is always a positive "how far out of bounds": `used − available` for budgets, `required − actual` for requirements, `actual − limit` for caps.

## Verification

**Commands:**
- `npm run agent:build && npm run agent:test` -- expected: pass.
- `npm test && npm run build` (root) -- expected: pass.
- `npx eslint lorerim-agent src/engine/buildCodec.ts` -- expected: no new errors.
