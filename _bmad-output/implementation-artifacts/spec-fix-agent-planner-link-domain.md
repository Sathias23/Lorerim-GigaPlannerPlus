---
title: 'Point lorerim-agent planner links at the live watchis GitHub Pages site'
type: 'bugfix'
created: '2026-10-17'
status: 'done'
baseline_revision: '93824b84450886d0f6a9cf4564a0062072996b3f'
review_loop_iteration: 0
followup_review_recommended: false
context: []
warnings: []
deferred:
  - summary: >-
      Installed copies of the lorerim plugin may keep serving the old planner host until the plugin version is bumped or the server is rebuilt.
    evidence: |-
      plugin.json and package.json are still 0.1.0 and the host is compiled into the gitignored dist/server.js. Unverified: whether Claude Code refreshes a local-marketplace plugin without a version change. Settle by reinstalling or updating the plugin from a rebuilt dist/plugin and checking a returned plannerUrl.
    location: >-
      lorerim-agent/plugin/.claude-plugin/plugin.json:3
    severity: medium (unverified)
  - summary: >-
      CI never runs the lorerim-agent tests, so the README/default drift guard only runs when someone runs npm run agent:test by hand.
    evidence: |-
      .github/workflows/test.yml runs only npm ci and npm test; the root vitest config does not include lorerim-agent; no workflow mentions lorerim-agent. Pre-existing gap (SPEC.md assumes no agent CI job until release). Fix: add npm --prefix lorerim-agent ci and npm run agent:test to test.yml.
    location: >-
      .github/workflows/test.yml:22
    severity: medium
---

<intent-contract>

## Intent

**Problem:** `lorerim_evaluate_build` and `lorerim_apply_changes` return a `plannerUrl` on `https://sathias23.github.io/Lorerim-GigaPlannerPlus`, but the live planner is `https://watchis.github.io/Lorerim-GigaPlannerPlus` (root `README.md`, `.github/CI.md`). Users get links to the wrong host, and the `lorerim-build` skill's rule "never edit a link" forces agents to choose between a broken link and breaking the rule.

**Approach:** Change the default planner base to the watchis host, update the docs and test fixture that repeat the old host, and add a regression test that ties the default to the live-site link in the root README so the two cannot drift again.

## Boundaries & Constraints

**Always:** Keep the `LORERIM_PLANNER_URL` override and `resolvePlannerBase` / `buildPlannerUrl` behavior unchanged; the default stays without a trailing slash; link shape stays `<base>/planner?build=<code>`.

**Never:** Do not change `lorerim-agent/plugin/.claude-plugin/plugin.json` `homepage`/`repository` (they correctly point at the Sathias23 repo where the plugin source lives). Do not touch `lorerim-agent/knowledge/**`, `_bmad-output/**` research artifacts, or `lorerim-agent/dist/**` (gitignored build output). Do not edit the lorerim-build skill text in this change. Do not commit the untracked `docs/lorerim-build-lessons.md`.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Default base | `LORERIM_PLANNER_URL` unset | `plannerUrl` starts with `https://watchis.github.io/Lorerim-GigaPlannerPlus/planner?build=` | No error expected |
| Override | `LORERIM_PLANNER_URL=http://localhost:5173/Lorerim-GigaPlannerPlus/` | Unchanged: link on the override base | No error expected |
| Drift | Default no longer matches the README live-site link | Regression test fails | Test failure names both values |

</intent-contract>

## Code Map

- `lorerim-agent/server/plannerLink.ts:2` -- `DEFAULT_PLANNER_URL`, the only runtime source of the host; `resolvePlannerBase` falls back to it.
- `lorerim-agent/server/plannerLink.test.ts` -- unit tests for the link helpers; add the regression test here. Tests already import via `@/` aliases (vitest config in `lorerim-agent/vitest.config.ts`).
- `lorerim-agent/server/tools/evaluateBuild.test.ts:645` -- "a planner URL" fixture for the not-a-share-code error path; uses the old host purely as realistic input. Update to the new host for consistency (behavior under test is unaffected).
- `lorerim-agent/README.md:78` -- "Planner links" section states the default base; update the host.
- `README.md:7,11,19` -- root README; the live planner link `https://watchis.github.io/Lorerim-GigaPlannerPlus/` is the source of truth the regression test reads (read-only here).
- `.github/CI.md:5` -- also names the live site (read-only evidence).
- `src/lib/buildIO.ts:60` `buildShareUrl` and `vite.config.ts:8` base `/Lorerim-GigaPlannerPlus/` -- confirm the deployed app serves `<base>/planner?build=`; upstream/main has the same routing (read-only evidence).

## Tasks & Acceptance

**Execution:**
- `lorerim-agent/server/plannerLink.ts` -- set `DEFAULT_PLANNER_URL` to `https://watchis.github.io/Lorerim-GigaPlannerPlus` -- fix the wrong host.
- `lorerim-agent/server/plannerLink.test.ts` -- add a test that reads the repo-root `README.md` and asserts it links to `${DEFAULT_PLANNER_URL}/` (the live planner) -- regression test that fails on the old host.
- `lorerim-agent/server/tools/evaluateBuild.test.ts` -- replace the old host in the "a planner URL" fixture with the new host -- keep fixtures realistic.
- `lorerim-agent/README.md` -- update the default base in "Planner links" -- docs match code.

**Acceptance Criteria:**
- Given no `LORERIM_PLANNER_URL`, when `lorerim_evaluate_build` returns for a legal code, then its `plannerUrl` host is `watchis.github.io` and path starts `/Lorerim-GigaPlannerPlus/planner`.
- Given the old host is restored in `plannerLink.ts`, when `npm run agent:test` runs, then the new regression test fails.
- Given the change, when searching `lorerim-agent/server` and `lorerim-agent/README.md` for `sathias23.github.io`, then nothing is found.

## Spec Change Log

## Review Triage Log

### 2026-10-17 — Review pass
- verdicts: 15 findings — high 0, medium 1, low 10, false 2, maybe-false 2
- findings:
  - `[maybe-false]` `[defer]` Plugin version not bumped, so installed copies may keep the old host — whether Claude Code refreshes a local-marketplace plugin without a version bump is unverified; deferred as medium (unverified).
  - `[low]` `[patch]` README test uses `includes()`, so a stale host beside the right one passes — test now requires every README planner link to start with `DEFAULT_PLANNER_URL`.
  - `[low]` `[patch]` README test fails wrongly on a link with no trailing slash or an autolink `<...>` — `startsWith` makes the slash irrelevant; regex now also stops at `>` and backtick.
  - `[low]` `[patch]` Old host still stated as the default in `SPEC.md:82` and story 5 line 34 — both lines corrected; `.memlog.md` left as an append-only log.
  - `[low]` `[patch]` README doesn't say the default is the upstream deployment or when to override it — added two sentences to "Planner links".
  - `[false]` `[reject]` Tool-level tests can't catch a wrong host — they confirm the tools use `DEFAULT_PLANNER_URL`, and the new README test pins that constant to the live host; a wrong host fails the suite (verified by restoring the old host).
  - `[low]` `[reject]` Lessons doc §7 still describes the hand-edit workaround — the doc is the user's untracked notes, which the intent sends to PR 3 for folding into the skill and deletion; out of scope per intent.
  - `[low]` `[patch]` (edge) No-trailing-slash README link reports false drift — same fix as the trailing-slash row above.
  - `[low]` `[patch]` (edge) `<...>`, backticks or trailing punctuation leave stray characters in the match — regex excludes `>` and backtick; `startsWith` tolerates trailing punctuation.
  - `[low]` `[patch]` (edge) `includes()` passes on any match, so real drift goes undetected — same fix as the `includes()` row above.
  - `[low]` `[patch]` (edge) Codes from fork data could open on an upstream deploy with different data — `git diff upstream/main HEAD -- data` is empty today, so nothing is dropped now; README now says to set `LORERIM_PLANNER_URL` if they diverge.
  - `[low]` `[patch]` (edge, claim) "cannot drift again" was overstated — closed by the every-link assertion.
  - `[medium]` `[defer]` (verification gap) CI never runs lorerim-agent tests, so the drift guard isn't automatic — pre-existing gap; deferred with a suggested `test.yml` step.
  - `[false]` `[reject]` (intent) Tests exercise the constant and README, not tool output — the existing tool tests check `plannerUrl` against the constant, and the README test pins the constant, so together they cover tool output.
  - `[maybe-false]` `[defer]` (intent) The served `dist/server.js` isn't verified to be the build Claude Code loads — grouped with the plugin-version deferral; the local dist built at 12:07 contains only the watchis host.

## Design Notes

Share codes the agent emits are encoded with this fork's bundled data. They decode on the watchis site because the fork's `data/` and codec match upstream (the fork's `src/` differs from upstream/main only in four files, two of them tests). If the fork's data ever diverges, `LORERIM_PLANNER_URL` remains the escape hatch.

## Verification

**Commands:**
- `npm run agent:test` -- expected: all tests pass, including the new regression test.
- `npm run agent:build` -- expected: succeeds (typecheck + bundle).
- `npx eslint lorerim-agent/server/plannerLink.ts lorerim-agent/server/plannerLink.test.ts` (or the agent package's lint) -- expected: no new errors in touched files.

## Auto Run Result

Status: done

**Summary:** `lorerim_evaluate_build` and `lorerim_apply_changes` now default `plannerUrl` to the live planner, `https://watchis.github.io/Lorerim-GigaPlannerPlus`. A regression test ties the default to the root README's planner links, so the two can't silently diverge.

**Files changed:**
- `lorerim-agent/server/plannerLink.ts` -- `DEFAULT_PLANNER_URL` now uses the watchis host.
- `lorerim-agent/server/plannerLink.test.ts` -- new test: every README `*.github.io/Lorerim-GigaPlannerPlus` link must start with the default (fails with the old host).
- `lorerim-agent/server/tools/evaluateBuild.test.ts` -- "a planner URL" input fixture uses the new host.
- `lorerim-agent/README.md` -- "Planner links" names the new default, says it is the upstream deployment, and says when to set `LORERIM_PLANNER_URL`.
- `_bmad-output/specs/spec-ai-agent-character-planning/SPEC.md`, `.../stories/5-claude-code-plugin-and-lorerim-build-skill.md` -- corrected the stated default host.

**Review findings:** 15 findings in total, from 4 layers.
- **Patched (10, all low):** the README test's matching (`includes()` false pass, trailing slash, autolink), the stale spec lines, and README guidance on upstream vs fork.
- **Deferred (3 rows, 2 items):** plugin version / installed server refresh (medium, unverified) and CI not running agent tests (medium, pre-existing).
- **Rejected (3):** "tool tests can't catch a wrong host" (false: the README test pins the constant the tools use); "intent: tests miss tool output" (false, same reason); "lessons doc §7 workaround" (out of scope: the intent sends that doc to PR 3).

**Follow-up review recommendation:** false. Patched entries by verdict: high 0, medium 0, low 10.

**Verification:**
- `npm run agent:test`: 20 files, 361 tests passed.
- `npm run agent:build`: typecheck and bundle succeeded.
- `npx eslint` on the touched `.ts` files: clean.
- No `sathias23.github.io` remains in `lorerim-agent/server` or `lorerim-agent/README.md`.
- The implementer confirmed the regression test fails with the old host and passes with the fix.

**Residual risks:**
- Users with an installed plugin need a rebuilt and reinstalled server to get the new links.
- Agent tests aren't run in CI.
- Tests ran on Node 24, not CI's Node 22.
