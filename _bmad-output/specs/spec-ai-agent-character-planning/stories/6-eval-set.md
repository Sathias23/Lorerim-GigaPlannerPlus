---
title: 'Eval set'
type: 'feature'
created: '2026-09-28'
status: 'in-review'
baseline_commit: 'fa1b2f1e4a20190b8399a02af6f5d8494210f1d9'
route: 'dispatch'
review_loop_iteration: 0
context:
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/SPEC.md'
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/stack.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Nothing measures whether the `lorerim-build` skill makes Claude's builds better. Story 5 found a legal build that still left 11 perk points unspent, and SPEC open questions (hallucinated ids, whether Claude needs `references/strategy.md`) wait on data (CAP-9).

**Approach:** The owner runs the evals the way the plugin is meant to be used: interactive Claude Code sessions in two prepared folders, one with the plugin really installed and one with only the server. The package supplies the setup, a run sheet, and a scorer that reads the saved session transcripts, re-checks every final code through the real server, and writes `scores.json`, `report.md`, and a blind pairwise sheet.

## Boundaries & Constraints

**Decisions (2026-09-28, user):**
1. The owner installs and runs; the agent spends nothing on model calls. Sessions are interactive Claude Code, not `claude -p`. How many models and repeats is the owner's call at run time.
2. The built-in `claude plugin eval` is not used in this story (it mocks MCP servers by default and publishes reports to claude.ai); it is a candidate follow-up for automated repeats.
3. Fit is judged pairwise by the owner from a blind A/B sheet, plus an optional position-swapped LLM judge the owner starts (`eval:judge`); the owner is the final judge.
4. Measure only. Each finding (unspent points, strategy notes, grounding) becomes a deferred-work entry; the skill is not changed here.

**Always:**
- **Marketplace.** `npm run agent:build` also writes `dist/.claude-plugin/marketplace.json` (marketplace `lorerim-local`, plugin `lorerim`, source `./plugin`), so `dist/` installs like a real marketplace.
- **Setup** (`npm run eval:setup -- [--root <dir>]`, default `~/lorerim-evals`), no model calls:
  - `<root>/skill`: `claude plugin marketplace add <abs dist> --scope project` and `claude plugin install lorerim@lorerim-local --scope project`, run with that folder as cwd.
  - `<root>/baseline`: `.mcp.json` with server `lorerim` → `node <abs>/dist/server.js`; no plugin.
  - Both: `.claude/settings.local.json` pre-allows the lorerim tools (and the baseline's `.mcp.json` server) and denies `Bash`, `PowerShell`, `Write`, `Edit`, `WebFetch`, `WebSearch`, so neither variant can compute or look things up outside the tools. Setup is idempotent and refuses a root inside the repo.
- **Scenarios** (`evals/scenarios.json`): `stealth-archer-vampire` ("stealth archer vampire, level 40"), `lich-no-destruction` ("a lich mage that never uses destruction, level 40"), `werewolf-two-hander` ("a heavy-armor two-handed warrior who is a werewolf, level 30"), `spellsword-mortal` ("a light-armor spellsword using one-handed and restoration, no vampire, werewolf, or lich, level 25"). Each carries `levelTarget`, `forbiddenSkills`, and `supernatural` (`vampire`/`werewolf`/`lich`/`none`).
- **Run sheet** (`evals/RUN_SHEET.md`): one fresh session per scenario per folder; skill folder sends `/lorerim-build <prompt>`, baseline sends `<prompt>` plus one fixed line asking for the final share code; any follow-up question gets the fixed reply "Use your own assumptions."
- **Scoring** (`npm run eval:score -- [--root <dir>] [--out <dir>]`): reads `~/.claude/projects/<slug>/*.jsonl` for each folder, keeping sessions whose `cwd` equals it; matches a session to a scenario by the prompt text in its first user message, and lists unmatched sessions. All checks go through `dist/server.js` over stdio with `@modelcontextprotocol/client`: legality and budgets from `lorerim_evaluate_build`, id existence and perk skills from `lorerim_get_entity`. The eval code copies no game data, formula, or id list.
- **Metrics per session:** model; final code (last successful `lorerim_apply_changes`/`lorerim_evaluate_build` result) and whether the answer shows it; `legal`; violation count; perk points remaining; level vs target; each scenario check; distinct ids passed to tools, **hallucinated** (server says unknown) and **ungrounded** (valid, but absent from every earlier tool result), with rates; turns, tool calls, failed tool calls, tokens. A baseline session that calls the Skill tool or a plugin-prefixed tool is flagged `contaminated`.
- **Report:** aggregates per scenario × variant × model; `pairwise.md` shows each scenario's skill and baseline builds as A/B in a seeded random order, with the key in a separate `pairwise-key.json`.
- **Judge** (`npm run eval:judge -- [--out <dir>] [--model <m>]`, default `haiku`): per pair, two `claude -p` calls with A/B and then B/A, no tools (`--tools ""`), `--no-session-persistence`, `--json-schema` verdict `{winner: A|B|tie, reason}`, and a per-call `--max-budget-usd`. The same underlying build winning both orders is a win; anything else is a tie. It writes `judge.json` and adds a fit column to `report.md`.

**Never:**
- Edit files outside `lorerim-agent/`, this spec folder, SPEC.md, `_bmad-output/implementation-artifacts/deferred-work.md`, and root `package.json` scripts (`agent:eval:setup`, `agent:eval:score`, `agent:eval:judge`).
- Commit transcripts or results (`lorerim-agent/evals/results/` is ignored by a new `lorerim-agent/.gitignore`).
- Change the skill, the tools, or the server behavior in this story.
- Call Claude from `npm run agent:test` or from the scorer; only `eval:judge` calls it, and only when the owner runs it.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Legal run | session whose last apply result is legal, level = target | `legal: true`, all checks pass | N/A |
| No build | session with no successful build tool result | scored `noBuild`, counts as not legal | N/A |
| Hallucinated id | `take_perk` with an id the server rejects | id in `hallucinated`; rate > 0 | N/A |
| Ungrounded id | valid id used before any tool result mentioned it | in `ungrounded`, not `hallucinated` | N/A |
| Forbidden tree | Destruction perk in `lich-no-destruction` | check fails, names the perk | N/A |
| Unmatched session | first message matches no scenario | listed as unmatched, not scored | N/A |
| Repeats | two sessions for one scenario in a folder | both scored as separate runs | N/A |
| Contaminated baseline | baseline session called the Skill tool | scored and flagged `contaminated` | excluded from aggregates |
| Missing dist | `dist/server.js` absent | setup and score exit 1 | message says run `npm run agent:build` |

</frozen-after-approval>

## Code Map

- `lorerim-agent/packaging/assemblePlugin.ts` -- extend to write `dist/.claude-plugin/marketplace.json`; the vite `writeBundle` hook already calls it with the resolved outDir. Marketplace shape: see `~/.claude/plugins/marketplaces/artificial-planeswalker/.claude-plugin/marketplace.json` (`name`, `owner`, `plugins[{name, source, description}]`).
- `lorerim-agent/packaging/plugin.test.ts` -- add the marketplace assertions next to the manifest checks.
- `lorerim-agent/server/tools/evaluateBuild.ts:143` -- `evaluateBuildOutputSchema` (`legal`, `budgets.perkPoints.remaining`, `build.perks`, `build.options`, `violations`); import types only.
- `lorerim-agent/server/tools/getEntity.ts:129` -- perk detail carries `skill.id` for `forbiddenSkills`.
- `lorerim-agent/server/ops.ts:84` -- `opSchema`: which op fields hold ids (`id`, `skills[]`, `option`/`choice`) and their kind.
- Session transcripts: `~/.claude/projects/<cwd with every non-alphanumeric char replaced by "-">/<session>.jsonl`; lines carry `cwd`, `message.model`, `message.usage`, assistant `tool_use` and user `tool_result` blocks. Tool names: skill folder `mcp__plugin_lorerim_lorerim__lorerim_*`, baseline `mcp__lorerim__lorerim_*`; strip the prefix. A slash command appears as `<command-name>`/`<command-args>` text.
- `lorerim-agent/package.json`, `tsconfig.json` (`include`), `vitest.config.ts` (`include`) -- add `evals/**`; CLIs run with Node type stripping (Node ≥ 22.18).

## Tasks & Acceptance

**Execution:**
- [x] `lorerim-agent/packaging/assemblePlugin.ts` -- write the marketplace manifest.
- [x] `lorerim-agent/evals/scenarios.json`, `evals/RUN_SHEET.md` -- scenarios, checks, and the run procedure.
- [x] `lorerim-agent/evals/setup.ts` -- create both folders as above; pure helpers (settings JSON, `.mcp.json`, root check) exported for tests.
- [x] `lorerim-agent/evals/transcript.ts` -- find a folder's sessions and parse one into tool calls, tool results, final answer, model, usage.
- [x] `lorerim-agent/evals/score.ts` -- pure per-session scoring; server lookups passed in as functions.
- [x] `lorerim-agent/evals/report.ts`, `evals/scoreCli.ts` -- aggregate and write `scores.json`, `report.md`, `pairwise.md`, `pairwise-key.json`.
- [x] `lorerim-agent/evals/judge.ts` -- judge prompt and rubric, argument builder, verdict reconciliation (pure, tested), and the CLI that spawns `claude`.
- [x] Tests (`evals/*.test.ts`): hand-written transcript fixtures covering every matrix row; setup helpers; judge prompt, arguments, and reconciliation (both-orders win, split → tie, malformed verdict → tie); marketplace manifest in `plugin.test.ts`.
- [x] `lorerim-agent/README.md`, root `package.json` -- how to set up, run, score, and judge.
- [ ] Verify setup once for real (install succeeds, `claude plugin list` in `<root>/skill` shows `lorerim`), then hand the run sheet to the owner. After the owner's runs, score them, record the aggregate table and notable transcript findings in Implementation Notes, update SPEC.md's hallucinated-id and strategy open questions, and add one deferred-work entry per finding.

**Acceptance Criteria:**
- Given the fixtures, when `npm run agent:test` runs, then every matrix row is covered and nothing spawns `claude`.
- Given the same transcripts, when `eval:score` runs twice, then `scores.json` is identical.
- Given the change, when `npm run agent:build && npm run agent:test`, root `npm test && npm run build`, and `npx eslint lorerim-agent` run, then all pass and the diff touches only the allowed files.

## Implementation Notes

- **Status (2026-09-28):** everything up to the hand-off is done. Setup was verified for real; the owner's runs, and the scoring, SPEC.md, and deferred-work updates that follow them, are still to do (last task unchecked).
- **Marketplace.** `assemblePlugin` also writes `dist/.claude-plugin/marketplace.json` (`lorerim-local`, one plugin `lorerim`, `source: ./plugin`). Name, description, and version come from the plugin manifest, and `owner.name` from its `author`. `claude plugin validate lorerim-agent/dist` passes. `server/bundle.test.ts` now expects `.claude-plugin` in the outDir.
- **Setup, verified 2026-09-28** with Claude Code 2.1.283 and the default root `~/lorerim-evals`. `marketplace add` and `install` both exit 0 when run again ("already on disk" and "already installed"), so setup is idempotent. In `skill/`, `claude plugin list` shows `lorerim@lorerim-local`, project scope, enabled, and `claude mcp list` shows `plugin:lorerim:lorerim` connected. A directory marketplace loads the plugin in place from `dist/plugin`, so a rebuild takes effect without reinstalling. In `baseline/`, the plugin is disabled, and `claude mcp list` shows the `.mcp.json` server as "pending approval" despite `enabledMcpjsonServers`. Presumably that setting is not applied until the folder is trusted; this was not checked, because checking needs an interactive session. The run sheet tells the owner to accept trust and approve the server.
- **One addition to the settings:** the skill folder's `permissions.additionalDirectories` lists the plugin's `skills/` directories, both the in-place `dist/plugin/skills` and the cache path `claude plugin list --json` reports. Without them, reading `references/` prompts for permission (story 5), and runs would vary with whatever the owner answered. The grant is only `skills/`, not the plugin root, whose `server.js` inlines the game data.
- **Transcript parsing.** Claude Code writes one record per content block and repeats `usage` on each, so turns and tokens are deduplicated by `message.id`. `<synthetic>` responses count as turns but not as a model. Sidechain, meta, and compact-summary records are skipped. MCP `structuredContent` is read from the record's `mcpMeta`. A session's "first user message" is the first one the model answered, so a `/model` typed first is ignored. The final answer is the assistant text after the last prompt or tool result.
- **Id metrics.** Ids come from `take_perk`/`remove_perk`, `set_race`/`set_birthsign`/`set_deity` (except `none`), traits, skill lists, `set_skill_level`, `set_option_choice` (a choice is checked against its option's `choices`), `lorerim_get_entity` `id`, and `lorerim_search_perks` `skill`. A test checks that table against `opSchema`, so a new id field fails the test. An id counts as grounded when it appears as a whole token in any earlier tool result, from any tool, including the Skill body and `ToolSearch` schemas. **Caveat for reading the numbers:** an option id that is also a word in the prompt (`vampire`, `lich`) counts as ungrounded until a tool result names it.
- **Checks.** Only the three the spec lists: player level equals the target, no perk whose `lorerim_get_entity` skill is forbidden, and exactly the requested supernatural option in `evaluation.build.options` (or none of the three). Before scoring, the scorer asks the server whether every forbidden skill and supernatural option in `scenarios.json` exists, and exits 1 if one does not.
- **Report.** Aggregates are per scenario × variant × model. Contaminated runs are counted in `Excl.` but not scored. Hallucinated and ungrounded rates are pooled over each row's ids. Pairs match the n-th clean skill run with the n-th clean baseline run of the same scenario and model, so a redone contaminated run still pairs. Each pair's A/B order is a seeded draw on the pair's own identity (FNV-1a + mulberry32, `--seed`, default `lorerim-evals`), so adding runs never reshuffles existing pairs. `pairwise.md` shows only a name-level build view that is identical in shape for both folders; the key is in `pairwise-key.json`. `scores.json` holds no timestamps other than those from the transcripts. A test runs the scorer twice on the same fixtures and compares all four files byte for byte.
- **Judge** (not run; it spends). Two additions beyond the spec's flags. The rubric goes in `--system-prompt`, so Claude Code's coding prompt does not frame the verdict. The prompt goes in on stdin, and the cwd is the OS temp dir. `--max-budget-usd` is a flag, default 0.25 per call. The verdict is read from `structured_output` (the field exists in the 2.1.283 binary), else from `result` parsed as JSON. An `is_error` run, a malformed verdict, or a verdict outside the schema counts as a tie.
- **CLI paths.** `--root`/`--out` are resolved against `INIT_CWD`, so `npm run agent:eval:score -- --out x` from the repo root writes `./x`, not `lorerim-agent/x`.
- **Risks for the owner's runs.** The account's claude.ai connectors (Gmail, Drive, Hugging Face, Microsoft Learn, …) and user-level skills are available in both folders. None of them knows LoreRim. A baseline that calls the Skill tool, for any skill, is flagged `contaminated`. Subagent transcripts (sidechains) are not read, so a build made only inside a subagent would score as `noBuild`.

## Spec Change Log

## Review Triage Log

| # | Layer | Finding | Verdict | Evidence | Route |
|---|---|---|---|---|---|
| 1 | edge-case | A local command after the final answer (`/cost`, `/model`) resets `finalAnswer`, so `codeShown` is false | medium | Real transcripts record local commands as non-meta user records with `<command-name>`; `parseTranscript` makes them prompts and `lastInput` moves past the answer. `/exit` itself never appears in any saved transcript | patch |
| 2 | edge-case | Contaminated runs keep a run number, so a redone baseline never pairs with the clean skill run | medium | `orderSessions` numbers all sessions; `buildPairs` filters to eligible ones and then matches on `run` | patch |
| 3 | edge-case | Op named after an `Object.prototype` key makes `OP_ID_FIELDS[op.op]` a function, and `for…of` throws | low | `?? []` does not catch inherited members; the fix is a direct correction | patch |
| 4 | verification-gap | `findFinalCode` last-wins is untested | medium | Filed evidence: every fixture has one successful build result | patch |
| 5 | verification-gap | Pooled id rates, `levelHit`, and means never asserted with non-zero data | medium | Filed evidence: all `scoreCli.test.ts` fixtures use `ops: []` | patch |
| 6 | blind | Run sheet has the owner read `report.md` before judging `pairwise.md`, un-blinding the pairs | medium | The Sessions table shows perk points left and violations per variant; `pairwise.md` shows the same numbers per build | patch |
| 7 | blind | Verdicts written into `pairwise.md` are lost when scoring re-runs; pair numbers shift | low | `runScore` rewrites the file; a run-sheet line is the direct fix | patch |
| 8 | blind | Usage strings name `npm run eval:*`, which do not exist at the repo root | low | Root scripts are `agent:eval:*`; a direct string fix | patch |
| 9 | verification-gap | The eval CLIs never run as Node processes in tests (type stripping, `isMainModule`, stdio `connectServer`) | medium | Filed evidence: no test spawns `node evals/*.ts`; the implementer ran the scorer against the real dist only by hand | defer |
| 10 | blind | Skill-folder session that never loads the skill is not flagged | low | The run sheet always uses `/lorerim-build`; the fix adds a new flag and branches | reject |
| 11 | edge-case | Same as 10 | low | Same as 10 | reject |
| 12 | blind | Home-directory `AGENTS.md`, user settings, and connectors reach both variants and the judge | low | No `~/CLAUDE.md` or `~/.claude/CLAUDE.md` exists; connectors and user skills load equally in both folders; a baseline Skill call is already flagged | reject |
| 13 | blind | Deny list omits `Agent`/`NotebookEdit`, and `Read` is guarded only by prompts | low | Subagent use is unlikely in these sessions, and it surfaces as `noBuild` in the report; the fix changes the approved deny list | reject |
| 14 | blind | Only perk points are reported as unspent, not skill, destiny, or attribute points | low | The spec's metric set names perk points; the other budgets are in the evaluation if needed later | reject |
| 15 | blind | `forbiddenSkills` checks only perks, and there are no positive checks | low | The spec defines these checks; the playstyle fit goes to pairwise judging by design | reject |
| 16 | blind | No `dataVersion`, plugin version, or skill hash recorded in results | low | Runs and scoring happen on one commit in practice; the fix adds new fields | reject |
| 17 | blind | No per-variant rollup or spread in the report | low | Enhancement; the spec defines aggregates per scenario × variant × model | reject |
| 18 | blind | Judge shows no worst-case cost before spending | low | Each call is capped by `--max-budget-usd`, and the owner starts it | reject |
| 19 | blind | Final code is the last tool result, not the one the answer presents | false | This is the spec's definition of final code; `codeShown` reports the mismatch | reject |
| 20 | blind, verification-gap | Grounding treats the Skill tool body and the slash-command expansion differently; `ToolSearch` schemas ground ids | low | Both variants load deferred tools through `ToolSearch` alike; the skill body is not a tool result under the spec's definition; the fix would edit the spec's notes | reject |
| 21 | blind | `codeShown` is not like-for-like (only the baseline prompt asks for the code) | low | The skill itself instructs showing the code; the prompts are the approved ones | reject |
| 22 | blind | No Node version guard for type stripping | low | Documented in the README and run sheet (22.18+); the owner's machine runs Node 24 | reject |
| 23 | blind | `spawnSync("claude")` fails on Windows when the CLI is an npm `claude.cmd` | low | Setup ran for real on the owner's machine; `shell: true` would break quoting of the JSON-schema and system-prompt arguments | reject |
| 24 | edge-case | Same as 23 | low | Same as 23 | reject |
| 25 | blind | Story status is `in-review` with an unchecked task; the change log is empty | low | The fix edits this spec | reject |
| 26 | blind | A stale `judge.json` survives a re-score; `--out` can point inside the repo | low | The score does not read `judge.json`; `--out` is the owner's choice | reject |
| 27 | edge-case | `loadScenarios`/`connectServer` outside `try` print a raw stack | low | Fails loudly with a non-zero exit on a broken scenarios file or server | reject |
| 28 | edge-case | Malformed `scores.json`/key crashes the judge | low | Fails loudly before any spend | reject |
| 29 | edge-case | A key/scores mismatch renders "No build" and spends judge calls | low | Both files are written together by `runScore`; a mismatch needs a hand edit | reject |
| 30 | edge-case | Long root paths may get a truncated or hashed project slug | low | The default root is short; unverified truncation behavior | reject |
| 31 | edge-case | Root inside the repo through a symlink passes the check | low | Needs a deliberate junction; the fix adds realpath handling | reject |
| 32 | edge-case | `plugin list --json` returning an object wrapper would drop the skills grant | false | The real 2.1.283 output is an array, confirmed by the implementer's live setup run | reject |
| 33 | edge-case | Plugin manifest missing fields writes a bad marketplace | low | `plugin.json` is repository-owned, tested, and checked by `claude plugin validate` | reject |
| 34 | edge-case | Choice ids like `on` are grounded by unrelated text | low | Real choice ids are specific (`stage-2`, `claimed`, numbers are rare in prose); the fix adds a paired check | reject |
| 35 | edge-case | Choice grounding (same as 34, option+choice co-occurrence) | low | Duplicate of 34 | reject |

## Design Notes

- **Why the baseline keeps the tools:** without them it cannot produce a share code, so nothing could be scored. The comparison measures the skill's method, not tool access.
- **Hallucinated vs ungrounded:** hallucinated ids break ops; ungrounded ids work but were recalled from memory, which the grounding rule forbids. Both feed SPEC's grounding question without a second server variant.
- **Folders outside the repo:** the repo's `AGENTS.md`/`CLAUDE.md` would otherwise brief both variants on the engine.

## Verification

**Commands:**
- `npm run agent:build && npm run agent:test` -- expected: pass.
- `npm test && npm run build` (root) -- expected: pass.
- `npx eslint lorerim-agent` -- expected: clean.
- `npm run agent:eval:setup` then `claude plugin list` in `~/lorerim-evals/skill` -- expected: `lorerim@lorerim-local` enabled.
