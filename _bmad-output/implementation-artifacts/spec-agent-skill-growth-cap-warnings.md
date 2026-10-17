---
title: 'Report the skill growth cap from the lorerim-agent tools instead of hiding it'
type: 'feature'
created: '2026-10-17'
status: 'done'
baseline_revision: '93824b84450886d0f6a9cf4564a0062072996b3f'
review_loop_iteration: 0
followup_review_recommended: false
context: []
warnings: ['oversized']
deferred:
  - summary: >-
      CI never runs the lorerim-agent test suite, so the engine-parity tests added here only run when someone runs npm run agent:test by hand.
    evidence: |-
      .github/workflows/test.yml runs npm ci and npm test only; root vitest.config.ts excludes lorerim-agent/server/**, and nothing under .github/ mentions lorerim-agent. Pre-existing gap across the whole agent package.
    location: >-
      .github/workflows/test.yml
    severity: low
---

<intent-contract>

## Intent

**Problem:** When a batch raises a skill past its growth cap, `lorerim_apply_changes` quietly raises the player level (via `ensurePlayerLevelForBuild`) and still returns `legal: true`. The only trace is an `engine` playerLevel diff row. An agent stepping a route one level at a time (e.g. Marksman 0→15 at level 2 lands at level 4) reads that as a pass. Nothing reports per-skill caps or the cost of the next skill level, so the agent can't plan around the cap either.

**Approach:** Detect the raise in the agent layer and return a structured warning in `lorerim_apply_changes`. Add a per-skill `skillCaps` record (floor, growth cap, effective max, next-level cost) to `lorerim_evaluate_build`. Both are computed from existing engine helpers and `mechanics.leveling`.

## Boundaries & Constraints

**Always:** Read every number from `game.mechanics.leveling` or engine helpers. Keep output additions additive: no existing field is renamed, removed, or retyped. A raise keeps the call succeeding, keeps `legal` as the engine says, and keeps every existing diff row. Tests go in co-located `lorerim-agent/server/**/*.test.ts` and derive expected numbers from data and engine helpers, never literals.

**Never:** Change anything under `src/` (the web app relies on the engine). Edit `lorerim-agent/plugin/skills/**`. Hardcode economy numbers (5, 25, 50, 100, 10/5 bonuses). Push.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Raise forced by growth cap | ops: set_race dunmer, set_player_level 2, set_skill_level marksman 15 | Succeeds. `legal` true. The engine playerLevel diff row is still there. `warnings` holds one `player_level_raised` entry: requestedLevel 2, resultingLevel = final level (4 with current data), skills include marksman, cap `growth`, maxAtRequestedLevel = growth cap at level 2, requiredPlayerLevel = resulting level | No error |
| Requested level respected | set_skill_level, then a later set_player_level that is high enough (STEALTH_ARCHER_OPS) | `warnings` is `[]` | No error |
| No set_player_level | ops without set_player_level, even when the engine raises the level (set_skill_level marksman 60) | `warnings` is `[]`; diff unchanged from today | No error |
| Raise with no skill culprit | final level > last requested, but no skill exceeds either cap at the requested level | Warning still emitted with `skills: []`; message points at `evaluation.minimumPlayerLevel` | No error |
| skillCaps: major/minor/untagged | evaluate a build | Per allocatable skill (manifest order): `level` (stored), `floor` = getEffectiveSkillFloor, `growthCap`, `effectiveMax` = min(growthCap, budgets.skillLevels.maxAllowed), `nextLevelCost` | No error |
| Cost-tier boundary | stored level = first tier's maxLevel (25) vs one below | nextLevelCost = cost of the tier containing level+1 (26 → tier 2 cost; 25 → tier 1 cost) | No error |
| Skill at max | stored level ≥ effectiveMax (incl. every skill at player level 1, and a skill at maxSkillLevel) | nextLevelCost `null` | No error |

</intent-contract>

## Code Map

- `lorerim-agent/server/tools/applyChanges.ts` -- `applyChangesOutputSchema` (add `warnings`), `applyToOpened` (loop over ops; final `state`; `evaluated.output`), and the tool description in `registerApplyChangesTool`.
- `lorerim-agent/server/tools/evaluateBuild.ts` -- `evaluateBuildOutputSchema` (add top-level `skillCaps` next to `budgets`), `evaluateDecoded` (has `build`, `computed`, `budgets`), and the tool description.
- `lorerim-agent/server/ops.ts:452` `applySetPlayerLevel` -- reconciles only and never raises. Raises come from later ops: `applySetSkillLevel` → `applySkillLevelChange` → `ensurePlayerLevelForBuild` (skills + perks), or race/option/skill-list ops with `ENSURE_MINIMUM` (adds point budgets).
- `src/engine/buildEngine.ts` (read-only) -- `getMaxAllowedSkillLevel` (global cap, :216), `getSkillLevelBaseline` (:230; pass `mechanics.leveling.playerLevelSkillBaseline`), `getEffectiveSkillFloor` (:294), `getStoredSkillLevel` (:307), `isAllocatableSkill`, `computeSkillPointsSpentOnSkill` (:525, honours the free floor and grants), `getSkillsExceedingSkillLevelIncreaseLimit` (:1153, gives `requiredLevel` per skill at a given player level), `getSkillsExceedingPlayerLevelCap` (:1125).
- `src/lib/skillLevelGrants.ts:80` (read-only) `getBypassSkillIncreaseGrantBonus` -- grant levels exempt from the growth cap; the engine subtracts them before applying the limit.
- `lorerim-agent/server/tools/applyChanges.test.ts` -- harness `applyOk`, `replay`, `STEALTH_ARCHER_OPS` (set_player_level 12 after the skill raise), and the existing "ties the player-level raise…" test (no set_player_level). A 10k-token response test must still pass.
- `lorerim-agent/server/tools/evaluateBuild.test.ts` -- `evaluateOk`, `encodeState`, `expectEngineParity`, and a 10k-token test.
- `lorerim-agent/README.md` -- has no section describing tool outputs (only planner links and evals), so it needs no edit.

## Tasks & Acceptance

**Execution:**
- `lorerim-agent/server/skillCaps.ts` (new) -- export `getSkillGrowthCap(game, state, skillId, playerLevel): number | null`. It returns baseline + bypass grant + `skillLevelIncreasesPerPlayerLevel` × (playerLevel − baseLevel), or null when the per-level increase is ≤ 0. Also export `describeSkillCaps(game, build)`, which returns the `skillCaps` record. Its `nextLevelCost` is the `computeSkillPointsSpentOnSkill` delta for stored+1, or null when stored ≥ effectiveMax. Export the zod schema too. -- One place for the cap maths, shared by both tools.
- `lorerim-agent/server/skillCaps.test.ts` (new) -- unit tests for a major, a minor and an untagged skill, the tier boundary, a skill at max (player level 1, and maxSkillLevel), and parity with `getSkillsExceedingSkillLevelIncreaseLimit`: a stored level of growthCap passes and growthCap+1 is flagged.
- `lorerim-agent/server/tools/evaluateBuild.ts` -- add `skillCaps` to the schema and output, and mention it in the description.
- `lorerim-agent/server/tools/evaluateBuild.test.ts` -- assert `skillCaps` equals `describeSkillCaps` of the decoded build, through the tool.
- `lorerim-agent/server/tools/applyChanges.ts` -- track the last `set_player_level` level. After the ops, if `state.playerLevel` is higher, push a `player_level_raised` warning: `{ type, requestedLevel, resultingLevel, skills: [{ skill: ref, level, cap: "growth"|"global", maxAtRequestedLevel, requiredPlayerLevel }], message }`. Skills are those over either cap at the requested level, sorted by requiredPlayerLevel descending. Add `warnings` (always present) to the schema, and describe it in the tool description.
- `lorerim-agent/server/tools/applyChanges.test.ts` -- cover the three warning scenarios from the matrix through the MCP harness.

**Acceptance Criteria:**
- Given any existing caller, when it reads either tool's output, then every field it read before is unchanged in name, type and value.
- Given the dunmer Marksman 0→15 at level 2 batch, when applied, then the warning names requested level 2, the resulting level, and marksman with cap `growth`, and its message tells the agent to treat the level as failed or lower the skill to the growth cap.
- Given a mechanics change (different tiers or per-level increase), when tests run, then expectations follow the data because they are derived from it.

## Spec Change Log

## Review Triage Log

### 2026-10-17 — Review pass
- verdicts: 23 findings — high 0, medium 3, low 12, false 8, maybe-false 0
- findings:
  - blind-hunter
    - `[medium]` `[patch]` A skill over both caps keeps the row with the higher requiredPlayerLevel, so maxAtRequestedLevel can be the looser cap and the "lower to" advice still triggers a raise. — Reproduced by the verification-gap layer: nord major marksman 70 at level 2 reported global 52 while the growth cap is 15. Fixed: one row per skill with the lower cap as maxAtRequestedLevel, `cap` naming that cap, and the higher requiredPlayerLevel; test added.
    - `[false]` `[reject]` The warning reads the pre-encode `state`, so resultingLevel could disagree with evaluation.playerLevel. — Encode and decode only pass playerLevel through `clampPlayerLevel` (`reconcileBuild` in `reconcileImportedBuild`). The state is already clamped and reconciled by the ops, and `ensurePlayerLevelForBuild` is never called on that path.
    - `[low]` `[patch]` "The build is legal only at level X" is inaccurate. — Fixed: the message now says the skills need at least level X and makes no legality claim.
    - `[false]` `[reject]` The plugin skill docs don't mention the new fields. — The intent excludes `lorerim-agent/plugin/skills/**` ("a later PR does that"). The README has no tool-output sections, so its condition didn't fire.
    - `[low]` `[patch]` The `growthCap === null` path in describeSkillCaps is untested. — Fixed: test added with skillLevelIncreasesPerPlayerLevel 0.
    - `[false]` `[reject]` The global-cap test loop could pass if its setup failed. — If the condition never held, requestedLevel reaches maxPlayerLevel, so `level` exceeds maxSkillLevel and `expect(level).toBeLessThanOrEqual(maxSkill)` fails.
    - `[low]` `[patch]` No test covers the order of several skills or the both-caps tie-break. — Fixed: ordering test and both-caps test added (grouped with row 1).
    - `[low]` `[patch]` No test where a later set_player_level replaces an earlier one. — Fixed: test added.
    - `[low]` `[patch]` Nothing says nextLevelCost ignores the skill-point budget. — Fixed: the schema comment and the evaluate tool description now say it is the price only.
    - `[low]` `[reject]` describeSkillCaps repeats engine work. — It runs once per evaluation, over about 18 skills; the cost is negligible, and the fix adds parameters.
  - edge-case-hunter
    - `[medium]` `[patch]` Over-both-caps maxAtRequestedLevel. — Duplicate of blind-hunter row 1; same fix.
    - `[low]` `[reject]` Skills are listed but a perk or budget needs a level above max(requiredPlayerLevel), so the advice only partly works. — It only happens when a race, option or skill-list op runs after set_player_level, which is rare. The retry returns a new warning, so it corrects itself, and the fix adds a branch.
    - `[low]` `[patch]` The "legal only at level X" text. — Duplicate of blind-hunter row 3; same fix.
    - `[false]` `[reject]` Pre-encode state. — Duplicate of blind-hunter row 2; same refutation.
  - verification-gap
    - `[low]` `[patch]` No test for a skill over both caps. — Grouped with blind-hunter row 1; test added.
    - `[low]` `[patch]` No test for the warning-skill order. — Grouped with blind-hunter row 7; test added.
    - `[low]` `[defer]` CI never runs the lorerim-agent tests. — Pre-existing; `.github/workflows/test.yml` runs only the root `npm test`.
    - `[medium]` `[patch]` (other) The both-caps advice is wrong. — Duplicate of blind-hunter row 1.
    - `[false]` `[reject]` (other) Pre-encode state. — Duplicate of blind-hunter row 2.
  - intent-alignment
    - `[false]` `[reject]` growthCap adds bypass grants, so it departs from the literal floor + 5 × (L − 1). — The engine's limit subtracts bypass grants (`getSkillsExceedingSkillLevelIncreaseLimit`), so this is the cap the build is held to; with current data, which has no bypass grants, it equals the literal formula.
    - `[false]` `[reject]` nextLevelCost is null at the effective max rather than at maxSkillLevel. — "(null at max)" directly follows the definition of effective max. The Design Notes record this reading: it lets "remaining < min non-null cost" mean every buyable point is spent.
    - `[false]` `[reject]` The warning goes beyond growth-cap skills (global cap, no-skill raises). — The intent's trigger is level-based ("final player level … higher than the last requested value"); the extra rows are a tested superset and do no harm.
    - `[low]` `[patch]` The tool-level skillCaps values are only checked against describeSkillCaps itself. — Fixed: the evaluate tool test now also asserts values derived from data for the major, minor and untagged skills.

## Design Notes

`nextLevelCost` is null at the *effective* max: the next level can't be bought at this player level. So "skill points remaining < min non-null nextLevelCost" means every buyable point is spent. Caps apply to the stored level, which is what skill points buy. `budgets.skillLevels.levels` adds skill-level grants, so `skillCaps[id].level` is reported separately. `growthCap` is not clamped to `maxSkillLevel`; `effectiveMax` is.

## Verification

**Commands:**
- `npm run agent:test` -- expected: all pass, including the new tests.
- `npm run agent:build` -- expected: typecheck and bundle succeed.

## Auto Run Result

**Summary:** `lorerim_apply_changes` now always returns `warnings`. If the build ends above the last `set_player_level`, it holds a `player_level_raised` entry with `requestedLevel`, `resultingLevel`, the skills over a cap at the requested level, and a message. Each skill row gives the binding (lower) cap as `cap`/`maxAtRequestedLevel` and the player level the skill needs. `legal` and the diff rows are unchanged. `lorerim_evaluate_build` (and so `evaluation` inside apply) gains a top-level `skillCaps` record. Per allocatable skill it gives `level` (stored), `floor`, `growthCap`, `effectiveMax` and `nextLevelCost`, which is null at `effectiveMax` and is the price only. Every number comes from `mechanics.leveling` and engine helpers. Nothing under `src/` changed.

**Files changed:**
- `lorerim-agent/server/skillCaps.ts` (new): `getSkillGrowthCap`, `describeSkillCaps`, and the zod schema.
- `lorerim-agent/server/skillCaps.test.ts` (new): caps for major, minor and untagged skills, the tier boundary, skills at max, the null growth cap, and parity with the engine's increase limit.
- `lorerim-agent/server/tools/applyChanges.ts`: `warnings` in the schema and output, raise detection, and the tool description.
- `lorerim-agent/server/tools/applyChanges.test.ts`: tests for a growth-cap raise (Marksman 0→15 at level 2), a global-cap raise, a raise with no skill to blame, a skill over both caps, ordering, the last set_player_level winning, and the no-warning cases.
- `lorerim-agent/server/tools/evaluateBuild.ts`: `skillCaps` in the schema and output, and the description.
- `lorerim-agent/server/tools/evaluateBuild.test.ts`: engine parity, plus `skillCaps` values derived from data at the tool surface.

**Review findings:** 23 rows, of which 3 medium, 12 low and 8 false.
- **Patched:** 1 medium entry (a skill over both caps gave the wrong "lower to" value; 3 duplicate rows) and these low entries: the "legal only at level X" wording, the untested null growth-cap path, ordering and tie-break tests, the last set_player_level test, docs saying nextLevelCost is the price only, and data-derived tool-surface assertions.
- **Deferred:** CI does not run the lorerim-agent tests (pre-existing).
- **Rejected:**
  - Plugin skill docs: the intent excludes them.
  - Pre-encode state: encode and decode only clamp the player level.
  - Global-cap test loop: the existing guard catches a failed setup.
  - Repeated engine work: negligible.
  - Advice that only partly helps when perks also need a higher level: rare, corrects itself on retry, and the fix adds a branch.
  - Bypass grants in growthCap: this is the cap the engine enforces.
  - Null at effective max: the documented reading.
  - Warning goes beyond growth-cap skills: a harmless superset.

**Follow-up review recommended:** false. Patched entries: 1 medium and 6 low; none high.

**Verification:** `npm run agent:test` passed 21 files and 377 tests, and `npm run agent:build` typechecked and bundled `dist/server.js`. All tests ran on Node 24.20 locally, not CI's Node 22. ESLint was clean on the touched source files.

**Residual risks:** The bypass-grant term in `growthCap` is untested because no current data uses `bypassSkillIncreaseLimit`. The global-cap required level repeats the engine's formula (skill level − `maxSkillAbovePlayerLevel`), because the engine doesn't export one. The lorerim-build skill docs still describe the old behavior until the planned follow-up PR. `lorerim-agent/README.md` was not changed because it has no tool-output sections.
