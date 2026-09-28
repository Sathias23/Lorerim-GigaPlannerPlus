---
title: 'Build editing tool with v1 ops'
type: 'feature'
created: '2026-09-28'
status: 'done'
baseline_commit: 'ba036c45b1ac05ee36c3a8a904261a5d10a40f91'
route: 'dispatch'
review_loop_iteration: 0
context:
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/SPEC.md'
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/tool-surface.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** An agent can read ids (story 2) and judge a build (story 3), but it cannot make or change one. Without an engine-backed editor it would have to write share codes by hand, which the codec cannot do safely because it drops unknown ids silently.

**Approach:** Register `lorerim_apply_changes(code?, ops[])` (CAP-4). It opens the code as the planner does, or starts a fresh build when there is no code. It applies the v1 ops in order, and each op makes the same engine and lib calls the planner's store action makes for it. If every op succeeds, it encodes the result and returns the new code, a diff that marks each change as requested or as an engine adjustment, and the story 3 evaluation. If any op fails, it returns `isError` and explains each failing op.

## Boundaries & Constraints

**Decisions (2026-09-28, user):**
1. Keep the full spec in one story.
2. `take_perk` is strict only. It maps to `tryTakePerk` and has no force flag.
3. A multi-variant input code is edited through its active variant, the one the planner opens. The tool returns a single-build code, and a note says how many other variants were not carried over.

**Always:**
- **Op set.** Use the v1 op set from `tool-surface.md`, plus `set_oghma_skills` (skill ids). Oghma skills are a separate `BuildState` field and not an option choice, so the surface's "unless implementation finds they need their own op" clause applies.
- **Op order and atomicity.** Ops apply in order to the running state. A failing op is recorded and skipped, and the remaining ops still run so that every failure is reported. Any failure means no code is returned, and the error text warns that later failures may follow from earlier ones.
- **Ids.** Every id goes through story 2's `resolveEntity` and gets did-you-mean suggestions on failure. `"none"` clears race, birthsign, or deity.
- **No silent clamping.** Out-of-range levels are rejected, not clamped. `set_player_level` fails when `clampPlayerLevel(level) !== level`. `set_skill_level` fails when the engine would store a different level than the one requested, and the error names `getSkillFloor` and `maxSkillLevel`.
- **Store-only rules are enforced here.** The op layer repeats the rules that live only in the store: a choice must belong to its option, Oghma must be claimed before `set_oghma_skills`, and attribute choices must be non-negative with a total of at most `getEarnedAttributeChoices`.
- **Selection ops use the engine predicates.** `set_*_skills` and `add_trait` decide with `canSelect*`. Failure text names the specific cause (limit, other list, not eligible, blocked by supernatural) using only data lookups.
- **`take_perk` failures.** A failed `take_perk` is explained by the story 3 violation rows that the perk would cause if it were added. It never guesses.
- **Engine adjustments appear in the diff.** This includes changes made on open (decoded vs unreconciled) and on encode (the decoded new code vs the final state).
- **Codes round-trip.** The returned code decodes with the web app's `decodeBuild` to the final state, as checked by `areBuildStatesEqual`.
- **Output format.** The tool declares an `outputSchema`, returns `structuredContent` plus the same JSON as text, and carries `dataVersion`.

**Never:**
- Edit files outside `lorerim-agent/` and this spec folder.
- Import `src/store/**`.
- Copy an engine formula, level gate, or requirement check.
- Return a code when an op failed.
- Truncate the diff or the failures.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Fresh build | no `code`; race, skills, level, perks ops | new code; diff rows are all `requested` except engine level raises; evaluation of the new code | N/A |
| Edit existing | legal code + `remove_perk` of a prerequisite | dependents removed and shown as `engine` rows | N/A |
| Engine side effect | `set_skill_level` above what the player level allows | the player-level raise is an `engine` row tied to that op | N/A |
| Unknown id | `take_perk "sneak-archery"` | nothing applied | `isError`: op index, "not found. Did you mean: …" |
| Strict perk | `take_perk` with the skill too low | nothing applied | `isError` naming the skill requirement: required, actual, shortfall |
| Multi-variant code | package with milestones, active variant 2 | ops applied to variant 2; single-build code; note names the dropped variant count | N/A |
| Several failures | 3 bad ops out of 6 | nothing applied | one `isError` listing all 3 by index |
| Out of range | level 500; skill 150; attributes over earned | nothing applied | `isError` naming the valid range |
| Bad code / args | `"hello"`; empty `ops`; unknown `op`; extra keys | nothing applied | decode `isError` as in story 3; SDK validation (`.strict()`, 1–200 ops) |

</frozen-after-approval>

## Code Map

- `lorerim-agent/server/tools/evaluateBuild.ts` -- `evaluateBuild(appData, code)` gives the evaluation block. `findViolations(game, build, computed, budgets)` and `describeBudgets` are private: export a `findBuildViolations(game, build)` wrapper so `take_perk` can explain itself, with no change to the output. Also reuse `getActiveBuild`, `DECODE_ERROR_MESSAGE`, `MAX_CODE_LENGTH`, and `describeBuild`'s `{id,name}` refs.
- `lorerim-agent/server/ids.ts` -- `resolveEntity`, `perkRef`, `getSkillName`. `getEntity.ts` -- `getOptionLabels`. `toolResult.ts` -- `jsonResult`, `errorResult`, `READ_ONLY_TOOL_ANNOTATIONS` (the tool is pure). `createServer.ts` registers the tool. `testClient.ts` is used for tool tests. `bundle.test.ts` asserts the tool names.
- `src/store/buildStore.ts:375-590` -- read-only reference for each op's call sequence. Do not import it.
  - `setRace`: reconcile, set the race, `preserveSkillPointAllocations`, reconcile, then `ensurePlayerLevelForBuild({ensureMinimumPlayerLevel:true})`.
  - Birthsign and deity: field set.
  - Option choice: supernatural ids go through `applySupernaturalOptionChange` (`src/lib/supernatural.ts:288`); every other option does preserve then ensure.
  - Trait: `canSelectTrait` then `reconcileBuild`.
  - Major, minor, and Oghma skills: `canSelect*`, then `commitPreservedBuildMutation` (preserve then ensure).
  - Attributes: bounds check, then a field set.
  - Player level: `clampPlayerLevel` then `reconcileBuild`.
  - Skill level: `applySkillLevelChange`.
  - Perks: `tryTakePerk` and `removePerk` (`removePerk` also drops dependents).
- `src/engine/buildEngine.ts` -- `createInitialBuildState` (2191), `reconcileBuild` (961), `migrateBuildState` (2064), `preserveSkillPointAllocations` (432), `ensurePlayerLevelForBuild` (792), `applySkillLevelChange` (812), `getSkillFloor` (1036), `tryTakePerk` (1779, `null` with no reason), `allocatePerk` (1747), `removePerk` (1875), `canSelectMajorSkill`/`Minor`/`Oghma`/`Trait` (2017-2054), `getTraitLimit`, `getEarnedAttributeChoices` (2007), `isAllocatableSkill` (226), `areBuildStatesEqual`.
- `src/lib/oghmaInfinium.ts` -- `isOghmaInfiniumActive`. `src/lib/supernatural.ts:201` -- `isTraitBlockedBySupernatural`, `isSupernaturalOptionId`.
- `src/engine/buildCodec.ts` -- `encodeBuild(state, game)` runs `reconcileImportedBuild` and writes the manifest version. `decodeBuildPackage`, `decodeBuild`, and `decodeUnreconciledBuild` handle decoding.
- `data/game/mechanics.json` `leveling.{baseLevel,maxPlayerLevel,maxSkillLevel}` and `manifest.limits` -- read through `game`, never as literals.

## Tasks & Acceptance

**Execution:**
- [x] `lorerim-agent/server/ops.ts` -- zod discriminated union of the ops (`.strict()` each), and `applyOp(appData, state, op)` returning `{ok, state, requestedFields} | {ok:false, message}` -- keeps op semantics testable apart from MCP.
- [x] `lorerim-agent/server/diff.ts` -- `diffBuildStates(appData, before, after)` returns rows per changed field: scalars as `from`/`to`, lists as `added`/`removed` `{id,name}`, skill levels per skill, and option choices with labels -- the readable part of CAP-4.
- [x] `lorerim-agent/server/tools/applyChanges.ts` -- input `{code?, ops}`. Output `{code, baseCode, dataVersion, diff, evaluation, notes}`. Diff rows are `{op: index|null, stage: "open"|"op"|"encode", cause: "requested"|"engine", field, …, message}`. The `evaluation` block is `evaluateBuild(newCode).output`. On failure it returns `isError` listing `op #i (<op>): <reason>` for every failing op.
- [x] `lorerim-agent/server/tools/evaluateBuild.ts` -- export `findBuildViolations`; output unchanged (existing tests still pass).
- [x] `lorerim-agent/server/ops.test.ts`, `diff.test.ts`, `tools/applyChanges.test.ts` -- every matrix row through `connectTestClient`. Each op has a success test and a failure test. Round-trip parity: `decodeBuild(newCode)` equals the final state, and `evaluation` equals `evaluateBuild(newCode)`. A widest realistic response stays under 10k tokens (chars/4).
- [x] `lorerim-agent/server/createServer.ts`, `bundle.test.ts` -- register the tool, and have the bundle test expect four names and call `lorerim_apply_changes` through `dist/server.js`.

**Acceptance Criteria:**
- Given a batch whose ops all succeed, when it is applied, then every state change between input and output appears in `diff`, and every row not caused by an op's own target field has `cause: "engine"`.
- Given the change, when `npm run agent:build && npm run agent:test` and root `npm test && npm run build` run, then all pass, `npx eslint lorerim-agent` is clean, and `git diff main --stat` adds only `lorerim-agent/` and spec-folder changes on top of story 3.

## Implementation Notes

- **Op shapes:** `set_race`/`set_birthsign`/`set_deity`/`add_trait`/`remove_trait`/`take_perk`/`remove_perk` take `id`; `set_major_skills`/`set_minor_skills`/`set_oghma_skills` take `skills` (full replacement list, `[]` clears); `set_attribute_bonus` takes optional `health`/`magicka`/`stamina` (omitted keeps the current value; none given fails); `set_option_choice` takes `option`, `choice`; `set_player_level` takes `level`; `set_skill_level` takes `skill`, `level`. Levels are `int` in the schema; ranges are checked by the op layer so every out-of-range op is reported in the one batch error.
- **Store mirroring:** `set_birthsign`/`set_deity` are plain field sets, supernatural options go through `applySupernaturalOptionChange` only, and `take_perk`/`remove_perk` do not reconcile, exactly as `buildStore` does; anything encode then normalizes shows up as `encode` rows.
- **`requestedFields`:** a diff field name (`race`, `majorSkills`, `skillLevels.<id>`, `attributeBonus.<stat>`, `options.<id>`) or `<listField>:<id>` for one list item (traits, perks). A list row mixing requested and other items is split into a `requested` row and an `engine` row; that is how a removed prerequisite's dependents appear.
- **`take_perk` strictness:** before `tryTakePerk`, the op resolves the planner's click target with the lib's `groupPerksByPosition` + `resolvePerkTakeTarget`. If that is a different rank than the id asked for, it fails ("already selected; the next rank is …" or "a later rank; take … first") instead of silently taking another perk. A `null` from `tryTakePerk` is explained by `violationsCausedByPerk`: `findBuildViolations` rows (type, entity, skill, shortfall) present with the perk added but not without it. If there are none, the error says so rather than guessing.
- **Diff semantics:** skill levels compare as `getStoredSkillLevel` (an absent key equals the floor), options treat an absent choice as the default, all-zero training equals none, and list order is ignored (the codec stores perks in its own order, so every encode would otherwise report a reorder). A race change therefore shows its skill-floor raises as `engine` rows.
- **Stages:** `open` = `migrateBuildState(decodeUnreconciledBuild)` vs the planner-opened build; `op` = each op's pre/post; `encode` = post-ops vs `decodeBuild(newCode)`. Notes cover dropped variants, an input data-version mismatch, and a pointer when open or encode rows exist.
- **Refactors:** `findRef`/`skillRef` moved from `evaluateBuild.ts` to `ids.ts`; `getActiveBuild` and the new `findBuildViolations` are exported. `evaluateBuild` output is unchanged (its tests pass untouched).
- `take_perk "sneak-archery"` gets no did-you-mean: story 2's `resolveEntity` finds no close match, so the error names the op, says "not found", and points to `lorerim_search_perks`. The near-miss case (`sneak-anatomical-lor`) is tested for suggestions.
- Widest realistic response (the 59-perk v2 user build re-raced, re-skilled, releveled, a root perk removed): about 11k chars (about 2.8k tokens).

## Spec Change Log

## Review Triage Log

| # | Layer | Finding | Verdict | Evidence | Route |
|---|---|---|---|---|---|
| 1 | edge-case | Training arrays compare raw (short/sparse) vs reconciled (padded): every code with training gets a fake `open` row and note; sparse holes put null into a number array, failing `outputSchema` | medium | Probe: `tr [["smithing",0,2]]` → `[2] → [2,0,0,0]`; `tr [["smithing",1,2]]` → `[null,2]` | patch |
| 2 | verification-gap, blind | Re-taking a stackable perk (`perkPointsBudget`) never tested | low | Pre-verified: every fixture filters stackables out | patch |
| 3 | verification-gap | Dropped-variants note untested with `av: 0` | low | Pre-verified: only `av: 1` fixture | patch |
| 4 | blind | Test hardcodes "0–0" earned attribute choices | low | AGENTS.md forbids economy numbers in tests; fix is direct | patch |
| 5 | verification-gap, blind | No test produces `encode` rows or the encode note | medium (unverified reachability) | Probes of every tested batch and all option/birthsign/deity tails gave zero encode rows; needs a reachable fixture | defer |
| 6 | blind | `take_perk` pre-check copies the engine's take-target lookup; a disagreement would silently add another rank | maybe-false | Both use the lib's `resolvePerkTakeTarget` over the perk's tree stack; no disagreement shown | reject |
| 7 | blind | `openBuild` reconcile throws reported as decode errors | low | Hand-edited codes only; same as story 3 #20 | reject |
| 8 | blind | Engine-failure text says "code may be corrupt" even when self-produced code fails evaluation | low | Unreachable in practice; wording only | reject |
| 9 | blind | Response repeats code/baseCode/dataVersion | low | Output fields are spec'd; ≈2.8k tokens | reject |
| 10 | blind | 10k-token test counts text only and is loose | false | Same measure as stories 2–3; text is what the model reads | reject |
| 11 | blind | Round-trip test compares against re-encoded replay, not `areBuildStatesEqual(final)` | low | Replay is independent of the tool; exact equality is order-sensitive while encode rows report real differences | reject |
| 12 | blind | Encode rows lose op attribution for non-reconciling ops | low | Mirrors the store; no encode rows observed | reject |
| 13 | blind | Untested rank branches, `add_trait` fallback, lich curse name | low | Defensive/message branches; rank-order path is tested | reject |
| 14 | blind | Test literals (`SPECIAL_TREES`, level 500, skill 150, startingSkills) | low | Not economy numbers; matrix values; bounds also asserted from mechanics | reject |
| 15 | blind | `ops.ts`/`diff.ts` import from `tools/*`; `ATTRIBUTE_STATS` duplicated | low | No cycle; same pattern as story 3; no named harm | reject |
| 16 | blind | No-op ops give no signal | low | An empty op contribution in the diff is the signal | reject |
| 17 | blind | Labels rebuilt per op/diff | low | Negligible for ≤200 ops | reject |
| 18 | blind | Spec cites line numbers; logs empty | false | Fix edits this spec | reject |
| 19 | edge-case | Lich choices share one label, so messages read "Phylactery souls → Phylactery souls" | low | Real; `from`/`to` ids ("2"→"3") are in the JSON the model reads | reject |
| 20 | edge-case | Package name/notes without milestones dropped without a note | low | Not build content; rare | reject |
| 21 | edge-case | Out-of-range `av` misnamed in note | low | Planner never writes it; same as story 3 #21 | reject |
| 22 | edge-case | New code over 20k chars can't be fed back | low | Ops cannot grow a build beyond its input size meaningfully | reject |
| 23 | edge-case | `set_oghma_skills []` fails while Oghma is unclaimed | low | Mirrors the spec's store rule; dormant list is inert | reject |
| 24 | edge-case | An op throwing replaces all per-op failures with one message | low | No realistic throwing op known | reject |
| 25 | edge-case | Hand-edited higher rank without lower gives a wrong message | low | Hand-edited codes only | reject |

## Design Notes

- **Mirror the store, not the literal surface table.** `tool-surface.md` summarises the non-perk ops as "field set + `reconcileBuild`". The store also preserves skill-point allocations and raises the player level after race, option, and skill-list changes. Mirroring the store means an agent's edit gives the same build a user clicking in the planner would get. Anything extra shows up as `engine` rows.
- **Requested vs engine:** for each op, diff its pre- and post-state. Changes to the op's own target field are `requested`, and everything else is `engine`. For example, `set_skill_level archery 50` gives `skillLevels.archery 15→50` as `requested` and `playerLevel 1→12` as `engine`.
- **`set_major_skills` / `set_minor_skills` / `set_oghma_skills`** replace the list. Ids are checked one by one against the accumulating list. A skill that sits in the other list fails ("remove it from minor skills first"); the op never moves it for you.

## Verification

**Commands:**
- `npm run agent:build && npm run agent:test` -- expected: pass.
- `npm test && npm run build` (root) -- expected: pass.
- `npx eslint lorerim-agent` -- expected: clean.
