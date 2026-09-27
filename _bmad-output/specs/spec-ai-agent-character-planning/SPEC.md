---
id: SPEC-ai-agent-character-planning
companions:
  - tool-surface.md
  - brownfield.md
  - stack.md
sources:
  - ../../planning-artifacts/research/technical-ai-agent-character-planning-via-mcp-and-2026-09-27/research.md
---

> **Canonical contract.** This SPEC and the files in `companions:` are the complete, preservation-validated contract for what to build, test, and validate. Source documents listed in frontmatter are for traceability — consult them only if you need narrative rationale or prose color this contract intentionally omits.

# AI agent character planning via MCP and a skill

## Why

A vision plus an opportunity, for personal use. The owner wants Claude Code and Claude Desktop to design LoreRim characters from a plain request ("stealth archer vampire, level 40"), and the planner's TypeScript engine and `data/` JSON already compute everything a build needs. LLMs alone fail at budgeted, constrained design: the best model produced a legal answer 65% of the time, with made-up entities and budget overshoots among the failures, while LLM-formulates/solver-searches reached 93.9%. So the engine decides legality and cost; the LLM interprets intent and chooses. No Skyrim or LoreRim build MCP exists to copy; the nearest template is pob-mcp for Path of Exile.

## Capabilities

- **CAP-1**
  - **intent:** An agent can find perks by text and filters (skill, tree, max skill requirement, max player level) without loading the catalog.
  - **success:** `lorerim_search_perks` returns compact rows keyed by real perk ids, paginated, with `concise|detailed` formats; a truncated result names a narrower query; a typical call stays under 10k tokens.
- **CAP-2**
  - **intent:** An agent can read full detail for any perk, race, trait, skill, or supernatural option by id.
  - **success:** `lorerim_get_entity` returns the entity; an unknown id returns `isError` with close-match suggestions, never an empty success.
- **CAP-3**
  - **intent:** An agent can check a build, given as a share code, and learn everything wrong with it in one call.
  - **success:** `lorerim_evaluate_build` returns the share code, perk-point / skill-point / skill-level budgets used vs available, **all** violations each naming entity, unmet requirement, and shortfall, plus unknown ids with did-you-mean — and its numbers match the web planner for the same code.
- **CAP-4**
  - **intent:** An agent can start a build from nothing or edit an existing one with a batch of changes, and see the result.
  - **success:** `lorerim_apply_changes(code?, ops[])` — omitted code means a fresh build — returns the new code, a readable diff that includes any adjustment the engine made beyond the requested ops, and the CAP-3 evaluation; a batch with any invalid op changes nothing and explains every failing op.
- **CAP-5**
  - **intent:** The user can ask for a character in plain language and get a legal build they can open in the web planner.
  - **success:** The `lorerim-build` skill (auto-triggered or `/lorerim-build`) runs intake → draft → evaluate → repair until zero violations, names only perks that came from tool results, and ends with a build summary, share code, and planner link that opens the same build.
- **CAP-6** *(phase 2)*
  - **intent:** An agent can ask the engine which legal next perks best serve stated goals.
  - **success:** `lorerim_suggest_perks(code, goals)` returns only perks that are legal to take next, ranked by the engine.
- **CAP-7** *(phase 2)*
  - **intent:** An agent can ask what it costs to reach a given perk.
  - **success:** `lorerim_cost_to_reach(code, perk)` returns the skill levels, skill points, and player level needed, computed by engine functions.
- **CAP-8**
  - **intent:** The owner can install the server and skill in Claude Code and Claude Desktop from one build.
  - **success:** One build produces a Claude Code plugin (skill + server) loadable with `--plugin-dir`, and a `.mcpb` bundle plus skill ZIP for Desktop; both start the same `dist/server.js` with `node`.
- **CAP-9**
  - **intent:** The owner can measure build quality from day one.
  - **success:** A set of 3–5 realistic prompts runs with and without the skill; legality is scored automatically through `lorerim_evaluate_build`; fit to the request is judged pairwise by the user or a position-swapped LLM judge.

## Constraints

- **Modularity (user direction):** all new code lives in one new top-level directory (see `brownfield.md` for layout). Existing files are touched only per the allowlist in `brownfield.md`; everything else in `src/`, `data/`, `extensions/`, and `tools/` stays byte-identical.
- The agent package imports engine, codec, loader, and lib modules read-only and composes their existing exports; it never copies or re-implements a formula, economy number, level gate, or requirement check (AGENTS.md). A missing computation is added to `src/` only as a new pure export with its own unit test and no behavior change to existing exports.
- The engine is the only authority for legality, budgets, and requirement checks. The LLM never does build arithmetic.
- Reject and explain; never silently normalize. Validate every id against loaded game data before encoding — the codec drops unknown ids silently, so a decode round-trip is not a check.
- The share code is the only build state. Every build tool takes a code and returns a code; no server-side drafts or sessions (MCP 2026-07-28 is sessionless).
- `ops[]` is the only way to describe build content; there is no second "partial spec" input format. The op set mirrors `BuildState` fields and maps each op onto an existing engine function (see `tool-surface.md`).
- Any change the engine makes beyond the requested ops (reconcile, player-level bumps) appears in the diff.
- Business-rule and input failures return as tool results with `isError: true` and actionable text ("X not found. Did you mean: …"), not protocol errors.
- Tools declaring `outputSchema` return conforming `structuredContent` plus the same JSON as text. Typical responses stay well under 10k tokens; no response dumps the catalog.
- All tools are prefixed `lorerim_`. Output-formatting instructions live in the skill only, never also in tool descriptions.
- MCP TypeScript SDK v2 (`@modelcontextprotocol/server`), not v1. Stdio transport; stdout carries only protocol, logs go to stderr.
- Every client config launches `node <abs path>/dist/server.js`; never `npx`.
- Before implementation starts, re-verify the SDK and Claude Code version facts in `stack.md` (due 2026-10-01).

## Non-goals

- Changes to the web planner's UI, store, or behavior.
- A hosted or remote (HTTP) server, claude.ai connector support, or multi-user use.
- Server-side sessions or draft ids.
- Exposing the catalog as a bulk resource as the primary surface (a Claude Code-only resource may be an extra).
- LLM-scored numeric build quality; measurable quality is scored by the engine, taste by the user.
- Live game state, save-file reading, or mod-authoring integration.
- Bundling game data inside the skill.

## Success signal

- In Claude Code, `/lorerim-build a lich mage that never uses destruction, level 40` ends with a share code that `lorerim_evaluate_build` reports as zero violations, that opens in the web planner as the same build, and every perk in the summary exists in `data/`.
- `git diff main --stat` for the feature shows new files under the agent directory plus only allowlisted edits, and `npm test` and `npm run build` for the web app pass unchanged.

## Assumptions

- The web planner's public base URL is `https://sathias23.github.io/Lorerim-GigaPlannerPlus/` (from the git remote and Vite `base`); the server takes it from config rather than calling `buildShareUrl`, which needs `window`.
- The directory name `lorerim-agent/` is a proposal.
- Setting skill levels directly (via `applySkillLevelChange`) is enough for v1; training-tier ops wait for phase 2 unless evals show the agent needs them.
- The agent package has no CI job; one is added only if the tool is released.
- A code from the server opens correctly in the deployed planner only when both use the same data version; every response carries the manifest version so drift is visible.
- Desktop skills run in Anthropic's code-execution sandbox, not locally (inferred from "skills require code execution"); the server-does-all-computing split rests on it.

## Open Questions

- How should the skill name tools: `ServerName:tool` or `mcp__plugin_<plugin>_<server>__<tool>`? Test both in Code and Desktop.
- Does Desktop support MCP resources/prompts and apply a 25k-style output cap?
- Where do Desktop skills actually execute? Test with a skill script that prints hostname and working directory; check Cowork mode too.
- Which grounding technique (search-then-select vs close-match errors) minimizes hallucinated ids? Measure in CAP-9 evals.
- Does Claude know LoreRim strategy without a `references/strategy.md`? Compare evals with and without.
