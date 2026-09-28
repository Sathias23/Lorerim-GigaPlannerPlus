---
title: 'Claude Code plugin and lorerim-build skill'
type: 'feature'
created: '2026-09-28'
status: 'done'
baseline_commit: 'ca6865261d522c0d49c8c447ad4a53ef6fc4a377'
route: 'dispatch'
review_loop_iteration: 0
context:
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/SPEC.md'
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/tool-surface.md'
  - '{project-root}/_bmad-output/specs/spec-ai-agent-character-planning/stack.md'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** The four tools exist, but nothing loads them into Claude Code or tells Claude how to turn "stealth archer vampire, level 40" into a legal build. Also, no tool returns the planner link that CAP-5 ends with.

**Approach:** `npm run agent:build` assembles a self-contained plugin at `lorerim-agent/dist/plugin/`. It contains the manifest, a `.mcp.json` that runs `node ${CLAUDE_PLUGIN_ROOT}/server.js`, a copy of that build's `dist/server.js`, and the `lorerim-build` skill. The skill runs intake → draft with `lorerim_apply_changes` → repair from its evaluation until there are zero violations → present the summary, code, and link. `lorerim_evaluate_build` and `lorerim_apply_changes` gain a `plannerUrl` field. Live Claude Code runs settle how the skill names the tools (CAP-5, and CAP-8 for Code).

## Boundaries & Constraints

**Decisions (2026-09-28, user):**
1. The agent runs the live test itself. It runs headless `claude -p --plugin-dir … --max-budget-usd <cap>` sessions: one with bare tool names, one with full `mcp__plugin_lorerim_lorerim__…` names, and one `/lorerim-build` end-to-end run. It reads the transcripts before the done checkpoint.
2. There is no `references/strategy.md` yet. The references hold only the op cheat sheet and the repair playbook, and story 6's evals decide whether strategy notes help.
3. Keep the full spec, about 1,650 tokens, as one story.

**Always:**
- **Plugin.** The plugin is named `lorerim` and the server key is `lorerim`. The plugin source lives in `lorerim-agent/plugin/`, and the build copies it into `dist/plugin/` together with the same `server.js`. It must load with `claude --plugin-dir lorerim-agent/dist/plugin` and pass `claude plugin validate`.
- **Skill limits** (`stack.md`): `name` equals the folder name. The description is at most 1,024 chars, is written in the third person, and puts trigger phrases first. The description plus `when_to_use` is at most 1,536 chars. The body is at most 500 lines.
- **Skill rules:** every perk, race, or other id the skill names comes from a tool result in the same conversation. The LLM does no build arithmetic, so budgets and legality come only from tool output. Repair uses the violations and did-you-mean suggestions the tools return. Output-format rules live only in the skill.
- **`plannerUrl`** = `<base>/planner?build=<encodeURIComponent(code)>`, the same shape as `buildShareUrl`. The base comes from the env var `LORERIM_PLANNER_URL` and defaults to `https://sathias23.github.io/Lorerim-GigaPlannerPlus`, with any trailing slash removed.

**Never:**
- Edit files outside `lorerim-agent/` and this spec folder.
- Use `npx` or a relative path in the launch config.
- Bundle game data in the skill.
- Put formatting instructions in tool descriptions.
- Call `buildShareUrl`.

## I/O & Edge-Case Matrix

| Scenario | Input / State | Expected Output / Behavior | Error Handling |
|----------|--------------|---------------------------|----------------|
| Build | `npm run agent:build` | `dist/server.js` and a `dist/plugin/` whose `server.js` is byte-identical to it | build fails if the plugin source is missing |
| Launch | `.mcp.json` command with `${CLAUDE_PLUGIN_ROOT}` set to the plugin dir | the server starts and lists the 4 tools | N/A |
| Link | a code from either tool | `plannerUrl` whose `build` param decodes to that code | N/A |
| Custom base | `LORERIM_PLANNER_URL=http://localhost:5173/Lorerim-GigaPlannerPlus/` | the link uses that base, with no doubled slash | N/A |
| Skill grounding | SKILL.md and references | every `lorerim_*` name the skill mentions is a registered tool | test fails and names the unknown tool |

</frozen-after-approval>

## Code Map

- `lorerim-agent/vite.config.ts` -- SSR build to `dist/server.js`. Add a `closeBundle`/`writeBundle` hook that calls the assembly with the resolved `outDir`, so the temporary-outDir build in `bundle.test.ts` also assembles.
- `lorerim-agent/server/createServer.ts` -- `SERVER_NAME = "lorerim"`. The tool full name is `mcp__plugin_lorerim_lorerim__<tool>`.
- `lorerim-agent/server/tools/evaluateBuild.ts` (`evaluateBuildOutputSchema`:142, `evaluateBuild`:540) and `tools/applyChanges.ts` (`applyChangesOutputSchema`:74, output :250) -- add `plannerUrl`. The nested `evaluation` block in apply's output inherits it.
- `lorerim-agent/server/main.ts` / `index.ts` -- `RunDeps` → `createServer(appData)`. Thread the planner base through as config, read from `process.env` only in `index.ts`.
- `src/lib/buildIO.ts:60` `buildShareUrl` -- read-only reference for the URL shape. `src/App.tsx:19` redirects `?build=` to `/planner`.
- Tool descriptions in `tools/*.ts` -- the skill must not repeat or contradict them. Read them to write the op cheat sheet.
- `~/.claude/plugins/cache/artificial-planeswalker/.../0.5.1/` -- the owner's working MCP plugin, used as a layout reference.
- `lorerim-agent/vitest.config.ts` -- `include` covers only `server/**`. Widen it if tests live under `packaging/`.

## Tasks & Acceptance

**Execution:**
- [x] `lorerim-agent/plugin/.claude-plugin/plugin.json`, `plugin/.mcp.json` -- the manifest (name `lorerim`, version equal to the package version, description) and the launch config.
- [x] `lorerim-agent/plugin/skills/lorerim-build/SKILL.md`, `references/ops.md`, `references/repair.md` -- the skill workflow, the grounding rule, and the output format. The references are loaded only when they are needed.
- [x] `lorerim-agent/packaging/assemblePlugin.ts` -- `assemblePlugin(outDir)` copies `plugin/` and `server.js` into `outDir/plugin/`, and is called from the vite hook.
- [x] `lorerim-agent/server/plannerLink.ts` -- `buildPlannerUrl(base, code)` and `DEFAULT_PLANNER_URL`. Wire it into both tools' outputs and schemas.
- [x] Tests: `plannerLink.test.ts` covers the matrix Link and Custom base rows. The evaluate and apply tests assert `plannerUrl`. `packaging/plugin.test.ts` checks the manifest fields, the skill frontmatter limits, and the grounding row, and spawns the assembled `.mcp.json` command with `CLAUDE_PLUGIN_ROOT` substituted to list the 4 tools. `bundle.test.ts` asserts the Build row.
- [x] `lorerim-agent/README.md` -- install with `--plugin-dir`, the alternative `claude mcp add … -- node <abs>`, and `LORERIM_PLANNER_URL`.

**Acceptance Criteria:**
- Given the built plugin, when `claude plugin validate lorerim-agent/dist/plugin` runs, then it reports no errors.
- Given the live runs, when the transcripts are read, then the chosen tool-name form resolves on the first call, and the result goes into this spec and into `SPEC.md`'s open question.
- Given the change, when `npm run agent:build && npm run agent:test` and root `npm test && npm run build` run, then all pass, `npx eslint lorerim-agent` is clean, and the diff adds only `lorerim-agent/` and spec-folder changes.

## Implementation Notes

- **Config threading.** `createServer(appData, config)` takes `ServerConfig { plannerBaseUrl }`, and `RunDeps.config` carries it. Only `server/index.ts` reads `LORERIM_PLANNER_URL`, through `resolvePlannerBase`: it trims the value, drops trailing slashes, and falls back to the default when the variable is unset or blank. `evaluateBuild` and `applyChanges` take the base as an optional last argument that defaults to `DEFAULT_PLANNER_URL`, so existing callers are unchanged. Apply's top-level `plannerUrl` is the one its nested evaluation computed. Both tool descriptions now mention `plannerUrl`; they describe content only and carry no formatting rules.
- **Assembly.** `packaging/assemblePlugin.ts` copies `plugin/` to `<outDir>/plugin/` and adds `server.js`. It throws when the source dir, `.claude-plugin/plugin.json`, `.mcp.json`, or the built `server.js` is missing. The vite plugin runs it in `writeBundle` with the resolved `outDir`, so the temp-dir builds in `bundle.test.ts` and `plugin.test.ts` assemble too. Renaming `plugin/` makes `vite build` exit 1.
- **Extra tests.** `plugin.test.ts` also checks four things:
  - No backticked or quoted token in the skill equals a real entity id, so no game data is bundled.
  - Every `references/` file is linked from SKILL.md.
  - The spawned server uses `LORERIM_PLANNER_URL`.
  - The frontmatter parser accepts only single-line scalars, so a block scalar fails loudly.
- **Live runs.** All runs used Claude Code 2.1.283 with `--model sonnet`, `--plugin-dir lorerim-agent/dist/plugin`, and `--allowedTools mcp__plugin_lorerim_lorerim`. The default model spent the whole $1 cap on its first turn, so every run used Sonnet.
  - *Bare names* ($2 cap, $0.57 spent): the model sent one `ToolSearch select:mcp__plugin_lorerim_lorerim__lorerim_search_perks,…`. Then `lorerim_search_perks` and `lorerim_get_entity` both succeeded on their first call.
  - *Full names* ($2 cap, $0.31 spent): the same sequence and the same result.
  - **Decision:** the skill keeps bare names. This confirms the Design Notes default for Code.
  - */lorerim-build a lich mage that never uses destruction, level 40* ($6 cap, $0.67 spent, 23 turns): the skill loaded through the Skill tool. Two draft batches failed on missing prerequisites and were fixed from the error text; the third batch was legal. An independent `evaluateBuild` check of the final code gave:
    - `legal: true`, 0 violations, player level 40.
    - 22 perks, all in `data/`, none from Destruction.
    - The link's `build` param equals the code.
    - 20 perk points were left unspent.
  - The references could not be read in that run. `Read` of `dist/plugin/skills/lorerim-build/references/*.md` needs permission because the files are outside the cwd, and `-p` denies it.
    - First fix tried: `allowed-tools` in the skill frontmatter, with a scoped `Read` and the four full tool names. In `-p` mode it made the Skill tool itself need permission. With the skill allowed, it still did not pre-approve `Read` or the MCP tools, so it was removed.
    - Instead, the README documents the permission prompts and the headless recipe (`--add-dir` plus `--allowedTools`).
  - */lorerim-build stealth archer vampire, level 40* with `--add-dir <plugin>` ($6 cap, $0.67 spent, 19 turns): both references were read, the first draft batch succeeded, and one extra round spent more points. The final code, checked independently: `legal: true`, level 40, 39 perks all in `data/`, vampire stage 2. It still left 11 perk points unspent even though the skill says to spend them; that is a quality question for story 6's evals.
  - With `LORERIM_PLANNER_URL=http://localhost:5173/Lorerim-GigaPlannerPlus/` set in the shell that runs Claude Code, the variable reached the plugin server: the returned `plannerUrl` used it, with no doubled slash.

## Spec Change Log

## Review Triage Log

| # | Layer | Finding | Verdict | Evidence | Route |
|---|---|---|---|---|---|
| 1 | blind, edge-case | Skill intake takes a "share code" but users paste the planner link (the skill's own output) | low | `DECODE_ERROR_MESSAGE` recovers on the second call; one wasted call per pasted link | patch |
| 2 | blind | No branch when `lorerim_evaluate_build` rejects a user's code | low | Error is actionable, but the skill never says to relay it and ask again; one-line fix | patch |
| 3 | blind, edge-case ×2 | `legal: false` with zero violations (unknownIds/notes only): step 4 has no fix, step 5 lists only violation messages | low | `legal` also requires no unknownIds and no dropped content; reachable with a user code | patch |
| 4 | edge-case | `LORERIM_PLANNER_URL="/"` strips to an empty base, giving a relative link | low | `resolvePlannerBase` checks emptiness before stripping slashes; direct reorder | patch |
| 5 | blind, edge-case | `assemblePlugin` does not require the skill; the build ships a skill-less plugin | low | `REQUIRED_PLUGIN_FILES` lists only the manifest and `.mcp.json`; one array entry | patch |
| 6 | blind | `vite.config.ts` recomputes the plugin source path that `PLUGIN_SOURCE_DIR` already exports | low | Two definitions can drift; fix is a deletion | patch |
| 7 | edge-case | Grounding regex skips tool names with uppercase or digits (`lorerim_searchPerks`) | low | `\blorerim_[a-z]+…\b` fails to match at all on a mixed-case token | patch |
| 8 | edge-case | SKILL.md says `evaluation.build` names skills and perks; perk rows carry no tree, so the per-tree grouping has no stated source | low | `buildBlockSchema.perks` is `{id,name}` only | patch |
| 9 | verification-gap | `lorerim-agent` tests (incl. new plannerUrl/plugin tests) never run in CI | medium | `.github/workflows/test.yml` runs only root `npm test`; pre-existing for the whole package; SPEC assumes no CI job until release | defer |
| 10 | blind | Skill never compares `codeDataVersion` with `dataVersion` | false | `evaluateBuild` already pushes a version-mismatch note, and the skill relays `notes` | reject |
| 11 | blind, edge-case | `LORERIM_PLANNER_URL` without a scheme or with query/hash gives a broken link | low | Owner-set variable; fix adds URL validation and a fallback branch | reject |
| 12 | blind | `buildPlannerUrl` silently falls back to the default on a blank base | low | A blank base only arrives through `resolvePlannerBase`, which already defaults it | reject |
| 13 | blind | `ops.md` names the Oghma option from memory | low | A mechanic named to match the op's own error; no id is used or invented | reject |
| 14 | blind | Plugin version duplicated in `plugin.json` | low | `plugin.test.ts` asserts it equals the package version | reject |
| 15 | blind | Spec does not record validate/eslint results | low | Fix edits this spec; both were run in step 3 and passed | reject |
| 16 | blind | `ops.md` has no Destiny-perk step | low | Destiny overspend is reported as `destiny_perk_points` and covered in `repair.md` | reject |
| 17 | blind | `repair.md` sets the level back before removing its causes | false | The text already orders it: "lower the skill levels or remove the perks … then `set_player_level`" | reject |
| 18 | blind | Literal newline inside a test template literal | low | Behaves as intended; formatters do not touch template contents | reject |
| 19 | edge-case | `--outDir .` would make `assemblePlugin` delete the plugin source | low | Needs a deliberate odd outDir; fix adds a guard | reject |
| 20 | edge-case | Test frontmatter parser accepts YAML indicator characters | low | No such value in the skill; fix adds branches | reject |
| 21 | verification-gap | Missing-`plugin.json` case of `assemblePlugin` untested | low | Same loop body as the tested `.mcp.json` case | reject |

## Design Notes

- **Why assemble instead of pointing into `lorerim-agent/`:** a marketplace install copies the plugin directory into a cache, so `${CLAUDE_PLUGIN_ROOT}/../dist/server.js` would break. Making `lorerim-agent/` itself the plugin root would ship `node_modules` and the sources. `dist/plugin/` is self-contained, and story 7 can zip it the same way.
- **Tool naming default:** the skill names tools by bare name (`lorerim_apply_changes`). That name is unique, and it is the same in Code and Desktop. The live test either confirms this or switches to the full prefix.

## Verification

**Commands:**
- `npm run agent:build && npm run agent:test` -- expected: pass.
- `npm test && npm run build` (root) -- expected: pass.
- `npx eslint lorerim-agent` -- expected: clean.
- `claude plugin validate lorerim-agent/dist/plugin` -- expected: no errors.
