---
title: 'Catalog tools — search perks and get entity'
type: 'feature'
created: '2026-09-27'
status: 'done'
baseline_commit: '2af7baadfcae394ad2ce1d4feb62e157f03863b0'
route: 'dispatch'
review_loop_iteration: 0
context:
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/SPEC.md'
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/tool-surface.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The MCP server from story 1 has no tools, so an agent cannot look up a single real perk, race, trait, skill, or option id and would fall back to invented ones — the failure the engine-grounded design exists to prevent.

**Approach:** Register `lorerim_search_perks` (CAP-1) and `lorerim_get_entity` (CAP-2) on `createServer`, both reading the already-loaded `AppData`. Add one shared id-validation module that resolves an id of a given kind or returns an actionable error with close-match suggestions; stories 3 and 4 reuse it unchanged.

## Boundaries & Constraints

**Always:** Reuse `getPerkSearchTokens`/`doesPerkMatchTokens` (`src/lib/perkSearch.ts`) for text matching and `getPerkNodeRequirements` (`src/lib/perkRequirements.ts`) for requirement values. Both tools declare `outputSchema` and return `structuredContent` plus the same JSON as one text block. Unknown ids and bad filter values return `isError: true` naming what was wrong, what is valid, and up to 5 closest ids with names. Output is deterministic (stable sort, no randomness). Tool descriptions say what the tool does and when to use it; no output-formatting instructions.

**Decisions (2026-09-27, user):** (1) `lorerim_get_entity` with `id` omitted lists that kind as compact paginated rows (`id`, `name`, one-line `summary`), so an agent can discover non-perk ids without a separate tool. (2) `kind` is `perk | race | trait | skill | option | birthsign | deity`, so story 4's `set_birthsign`/`set_deity` validation reuses it unchanged.

**Never:** Edit `src/`, `data/`, or any existing file outside `lorerim-agent/` and this spec folder. Silently normalize an id (a perk name or a near-miss id is rejected with suggestions, not resolved). Return the whole catalog in one response. Import `src/store/buildStore.ts`.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Text search | `query: "sneak attack"` | rows of matching perks, `total`, `offset`, `limit`, `nextOffset` | N/A |
| Filters only | `skill: "sneak", maxSkillReq: 50`, no query | every sneak perk with `skillReq ≤ 50` | N/A |
| Level filter | `maxPlayerLevel: 10` | perks with no player-level req or req ≤ 10 | N/A |
| Truncated | more matches than `limit` | page plus a note naming a narrower query and the next `offset` | N/A |
| No matches | query matches nothing | empty rows, `total: 0`, note suggesting a broader query | N/A |
| Unknown skill filter | `skill: "archery"` | nothing searched | `isError`, suggests `marksman` etc. |
| Get perk | `kind: perk, id: <real id>` | full perk incl. skill name and prerequisite names | N/A |
| Unknown id | `kind: perk, id: "anatomical-lore"` | no entity | `isError`: "not found", suggestions incl. `sneak-anatomical-lore` |
| List a kind | `kind: trait`, no `id` | page of `{id, name, summary}` rows with `total`/`nextOffset` | N/A |
| List perks | `kind: perk`, no `id` | first page only, note pointing to `lorerim_search_perks` | N/A |
| Bad arguments | `limit: 500` or unknown `kind` | nothing searched | `isError` from SDK input validation |

</frozen-after-approval>

## Code Map

- `lorerim-agent/server/createServer.ts` -- `createServer(_appData)`; register tools here (drop the `_` prefix). Seam established in story 1.
- `lorerim-agent/server/main.ts`, `index.ts` -- unchanged; `serveStdio` already builds the server per connection.
- `src/data/schemas/index.ts:344-378,151-183,215-340` -- `Skill`, `Perk`, `CharacterOption`, `Race`, `Trait`, `Birthsign`, `Deity`, `SupernaturalData`; `GameData` at `:551` (`perkById`, `perkSkillIdByPerkId`, `perkTrees` keyed by skill id).
- Data facts: 513 perks, descriptions ≤ 265 chars; perk-tree ids equal skill ids (`skills.json` also has a tree-less `traits` pseudo-skill); every non-perk entity serializes under ~2k tokens (largest: lich option + lichdom data).
- `src/lib/perkSearch.ts` -- `doesPerkMatchTokens` returns `false` for empty tokens, so a filters-only search must skip it rather than pass `[]`.
- `src/lib/perkRequirements.ts:19` -- `getPerkNodeRequirements(perk)` → `{skillReq|null, playerLevelReq|null}` (level 1 and skill 0 become null).
- `src/lib/supernatural.ts` -- `SUPERNATURAL_OPTION_IDS`, `isSupernaturalOptionId`; options `vampire`/`werewolf`/`lich` pair with `supernatural.vampirism`/`lycanthropy`/`lichdom`.
- Option labels: `titleLabel`, `descriptionLabel`, and choice `label` are keys into `appData.ui.labels.panels["character-options"]`; the web app falls back to the raw key.
- SDK 2.1.0 (`node_modules/@modelcontextprotocol/server/dist/mcp-*.mjs`): `registerTool(name, {description, inputSchema, outputSchema}, cb)` with `z.object` schemas; input-validation failures and thrown handler errors become `isError` results; output validation is skipped when `isError`. `InMemoryTransport` is exported for tests.
- `src/test/helpers.ts` -- `getTestAppData()` for tests.

## Tasks & Acceptance

**Execution:**
- [x] `lorerim-agent/package.json` + lockfile -- declare `zod` (the SDK's range, `^4.2.0`) as a dependency, since server code now imports it directly.
- [x] `lorerim-agent/server/ids.ts` -- entity kinds, `resolveEntity(game, kind, id)` → entity or `{message, suggestions[{id,name}]}`; close-match ranking over normalized ids and names (containment plus edit distance, top 5, stable tie-break by id); `formatUnknownIdMessage`. Exported for stories 3–4.
- [x] `lorerim-agent/server/toolResult.ts` -- `jsonResult(data)` (structuredContent + text) and `errorResult(text)`.
- [x] `lorerim-agent/server/tools/searchPerks.ts` -- input `query?`, `skill?`, `maxSkillReq?`, `maxPlayerLevel?`, `limit` (1–50, default 20), `offset` (default 0), `response_format` (`concise`|`detailed`); sort by skill order in `skills.json`, then `skillReq`, then name; concise rows `{id, name, skill, skillReq, playerLevelReq, summary}` (description cut to ≤120 chars at a word boundary); detailed adds full `description`, `prerequisites`, `prerequisitesAny`, `costsPerkPoint`.
- [x] `lorerim-agent/server/tools/getEntity.ts` -- input `kind`, `id?`, `limit` (1–100, default 50), `offset`; without `id` returns `{kind, total, offset, limit, nextOffset, rows}` in data-file order (summary ≤120 chars from the kind's main text: race/trait/perk `description`, birthsign `bonus`, deity `follower`, skill `category`, option description label); with `id` returns `{kind, id, entity}`; perk adds `skill {id,name}` and prerequisite `{id,name}` pairs; skill adds `perkCount`; option resolves labels and, for supernatural options, attaches the matching supernatural data.
- [x] `lorerim-agent/server/ids.test.ts`, `tools/searchPerks.test.ts`, `tools/getEntity.test.ts` -- cover every I/O matrix row through a real `Client` over `InMemoryTransport` against `createServer(getTestAppData())`, plus unit tests of close-match ranking.
- [x] `lorerim-agent/server/bundle.test.ts` -- tools/list now expects both tool names (was an empty array).

**Acceptance Criteria:**
- Given any search with default `limit`, when serialized, then the response is under 10k tokens (assert on the widest filter-free page in `detailed` format, chars/4).
- Given every perk id in `perkById`, when fetched with `lorerim_get_entity`, then each succeeds and returns its own id.
- Given the change, when `npm run agent:build && npm run agent:test` and root `npm test && npm run build` run, then all pass, and `git diff main --stat` shows only `lorerim-agent/` and this spec folder.

## Implementation Notes

- **`resolveEntity(game, kind, id, optionLabels?)`** takes an optional fourth argument: options have no `name`, only a `titleLabel` key into `ui.labels.panels["character-options"]`, so suggestions show the resolved title when labels are passed and the raw key otherwise (the web app's fallback). Stories 3–4 should pass the same labels. Result is a discriminated union: `{ok: true, entity}` or `{ok: false, message, suggestions}`. `ids.ts` also exports `listEntities`, `listEntityRefs`, `getEntityName`, `rankCloseMatches`, `formatUnknownIdMessage`, `ENTITY_KINDS`.
- **Close-match ranking:** ids and names are normalized (lowercase, letters and digits only), then scored exact → containment (either way, ≥3 chars, closer length first) → Levenshtein, capped at max(2, ⌊longer/3⌋) so unrelated ids are not suggested. Ties break by id; top 5.
- **Perk lookup uses own keys only** (`Object.hasOwn`), so `constructor`/`__proto__` are not found through `Object.prototype`.
- **`skill` filter errors** list every skill with a perk tree (22 ids) besides the close matches, because "archery" has no string similarity to `marksman`; `traits` (tree-less pseudo-skill) is rejected as "not a skill id with a perk tree".
- **Truncation note** names the skill with the most matches as the narrower query when no skill filter is set (`add skill: "<id>" (N of these matches)`), else suggests query words or requirement filters. An offset past the end gets its own note.
- **Trait summaries fall back to `bonus`** when `description` is empty (several traits, e.g. `autodidact`, have an empty description); every other kind uses the main text named in the task.
- **Perk entity** is the stored perk with `skillReq`/`playerLevelReq` from `getPerkNodeRequirements` (0 and level 1 → `null`, same as search rows), `skill {id,name}`, and `prerequisites`/`prerequisitesAny` as `{id,name}` pairs. Supernatural options carry `supernatural` = the matching `vampirism`/`lycanthropy`/`lichdom` block plus `incompatibleTraitIds`; the lich option is the largest entity at ≈9.5k chars (≈2.4k tokens).
- `get_entity`'s `outputSchema` is one object with `kind` required and the fetch/list fields optional (not a union), so the JSON Schema root stays an object for 2025-era clients.
- Shared helpers: `format.ts` (`summarize` ≤120 chars at a word boundary with `…`, `paginate`) and `testClient.ts` (real `Client` over `InMemoryTransport.createLinkedPair()` against `createServer`; not a test file, only imported by tests).
- **Review patches:** both input schemas are `.strict()` and cap `id`/`query`/`skill` at `MAX_TEXT_INPUT_LENGTH` (200); both tools carry a `title` and `READ_ONLY_TOOL_ANNOTATIONS` (`toolResult.ts`); the truncation note offers only moves that narrow (a skill only when it holds fewer than all matches, requirement filters only when unset); the bundle test calls both tools through `dist/server.js`.
- `zod` declared as `^4.2.0` (the SDK's range); the lockfile still resolves 4.6.5, so nothing new was installed.
- Verified: `npm run agent:build && npm run agent:test` (7 files, 109 tests after review patches), root `npm test` (78 files / 490 tests + 35 node tests) and `npm run build` pass, `npx eslint lorerim-agent` clean, and a stdio smoke call against `dist/server.js` returned search rows and a not-found error.

## Spec Change Log

## Review Triage Log

| # | Layer | Finding | Verdict | Evidence | Route |
|---|---|---|---|---|---|
| 1 | edge-case | Input schemas strip unknown keys (`tree`, misspelled `id`), so the call runs unfiltered or lists instead of fetching | medium | `z.object` strips by default; tool-surface.md itself advertised `tree`, so agents will send it — violates "never silently normalize" | patch |
| 2 | blind, edge-case | No length cap on `id`/`query`/`skill`; long unknown id runs ~1k O(n·m) Levenshtein calls on the single-threaded server | low | Real per `scoreField`; `.max(200)` is a one-line schema fix | patch |
| 3 | blind, edge-case | Truncation note suggests no-op moves: a skill that holds every match, or filters already set | low | `describeNarrowing` ignores `topCount === total` and set filters; direct fix mirrors `describeBroadening` | patch |
| 4 | blind | No `title`/`readOnlyHint`/`idempotentHint`/`openWorldHint` annotations on read-only tools | low | SDK 2.1.0 accepts `annotations`; clients use them for approval prompts; metadata-only fix | patch |
| 5 | blind | tool-surface.md still lists `tree`, the old `kind` list, and a required `id` | low | Stories 3–4 load it as context; fixed directly in the companion doc | patch |
| 6 | blind | Bundle test never calls a tool through `dist/server.js` | low | Only `tools/list` names are asserted; handler code paths unexercised in the bundle | patch |
| 7 | verification-gap | Truncation note's top skill and count never asserted | low | Pre-verified: test only regex-matches `add skill: "[a-z-]+"` | patch |
| 8 | verification-gap | Unknown-skill `Did you mean` clause never observed | low | Pre-verified: `archery` test finds `marksman` only in the valid-values list | patch |
| 9 | verification-gap | Object-root input/output schemas for 2025-era clients not pinned | low | Pre-verified: raw 2025 test asserts tool names only | patch |
| 10 | verification-gap (other) | `getEntity.test.ts` hardcodes `skillReq: 50` | low | AGENTS.md forbids hardcoded level gates in tests; direct fix | patch |
| 11 | verification-gap (other) | `skill: "archery"` error leads with `Did you mean: alchemy` | low | Real (distance 2 within cap), but the full 22-id valid list follows; fixing needs semantic matching | reject |
| 12 | blind | Tool names hardcoded in `ids.ts` messages and descriptions | low | Only a rename would break it; fix is a new constants module | reject |
| 13 | blind | `none` race/birthsign rows list with empty summaries | low | `None` entries exist with empty text; they are valid data values, fix adds per-kind fallbacks | reject |
| 14 | blind | Skill listing does not flag tree-less `traits`, which search rejects | low | Search error lists every valid skill, so the agent recovers in one call; fix adds a row field | reject |
| 15 | blind | `describeOption` copies an allowlist of fields | low | Only a future schema field would be missed; speculative | reject |
| 16 | blind | Missing `perkSkillIdByPerkId` entry yields empty skill id | false | `loadAppData` sets it for every perk it indexes (`src/data/loader.ts` perk loop) | reject |
| 17 | blind, edge-case | `id: ""` returns not-found instead of listing; `limit`/`offset` ignored with `id` | low | The not-found text already says to omit `id` to list; no misleading outcome | reject |
| 18 | blind | Sort recomputes requirements per comparison | low | 513 perks; negligible cost | reject |
| 19 | blind | `testClient.ts` sits beside production modules | low | Nothing production imports it; bundle test would catch test fixtures in `dist` | reject |
| 20 | edge-case | Non-ASCII queries normalize to empty, no suggestions | low | All ids and names in data are ASCII; unlikely input | reject |
| 21 | edge-case | Search rows omit perk `extension` | low | Only 2 perks carry one; `lorerim_get_entity` returns it; fix adds schema surface | reject |
| 22 | edge-case | Duplicate perk id across trees would list twice | false | Current data has 513 perks, 0 duplicate ids | reject |

## Design Notes

- **No `tree` filter:** tool-surface.md lists `skill` and `tree`, but perk-tree ids equal skill ids here, so a second name for the same value only invites contradictory input. The row field is `skill`.
- The SDK's own input-validation error text is acceptable for malformed arguments; hand-written guidance is for valid-shaped but unknown values.

## Verification

**Commands:**
- `npm run agent:build && npm run agent:test` -- expected: pass.
- `npm test && npm run build` (root) -- expected: pass unchanged.
- `npx eslint lorerim-agent` -- expected: no errors.
