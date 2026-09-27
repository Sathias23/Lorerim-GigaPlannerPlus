---
title: 'technical research: AI agent character planning via MCP and skill'
type: 'technical'
topic: 'AI agent character planning via MCP and skill'
decision: 'How to build an MCP server + companion skill so Claude Code/Desktop can design LoreRim characters from user input, reusing the planner TS engine and data (personal use)'
source: 'native run'
status: complete
preset: 'standard'
validation: 'normal'
created: '2026-09-27'
updated: '2026-09-27'
claims_verified: 12
claims_unverified: 9
---

# Technical research: AI agent character planning via MCP and a skill

**Decision:** How to build an MCP server and a companion skill so Claude Code and Claude Desktop can design LoreRim characters from what you ask for, reusing the planner's TypeScript engine and data. For personal use.

## Executive summary

**Build it.** The server does all the computing and the skill holds all the know-how. The server is a stdio MCP server on the official TypeScript SDK v2 (`@modelcontextprotocol/server` 2.1.0) [1][2]. It is bundled into one `server.js` with esbuild, together with the engine and the `data/` JSON. For Claude Code, ship it in a **Claude Code plugin** together with a `lorerim-build` skill [5]. For Claude Desktop, ship the same server as a `.mcpb` bundle and the skill as a ZIP upload [6][16].

Three findings drive this answer:

1. **Let the engine decide what is legal and what is best, including all budget arithmetic and requirement checks. The LLM should only interpret intent and choose.** When LLMs solved budgeted, constrained problems on their own, the best model produced a legal answer only 65% of the time. Structural misunderstanding caused most failures, but made-up entities and small budget overshoots were among them too [29]. By inference, those are exactly the risks in a perk-point build. On a different benchmark (TravelPlanner), an LLM proposing while critics pushed back reached a 20.6% success rate [27], and an LLM formulating the problem while a solver searched reached 93.9% [28]. Those two studies used different base models, so treat the gap as indicative, not controlled (medium confidence). The one mature build-planner MCP, pob-mcp for Path of Exile, follows this pattern: its engine lists and ranks options, and its validator reports each finding with a severity [24].
2. **The share code is the MCP "handle".** The current MCP spec (2026-07-28) has no sessions. It recommends passing an explicit handle back and forth between calls [3][21]. The planner's share code already is one. Each tool takes a code and returns the new code, a readable summary, the remaining budgets and every violation. Builds then survive a server restart, paste straight into the web app, and give repeatable eval results.
3. **Only the MCP server can reach your local engine from both clients.** Skills in Claude Desktop and claude.ai require code execution to be enabled [16]. From that I infer they run in Anthropic's code-execution sandbox, not on your machine; no source states this directly. Anthropic's own split puts data and connectivity in MCP and process in skills [17]. Following that (inference), the skill should be pure method: how to ask the user questions, the draft → validate → repair loop, archetype strategy and presentation. Everything that computes lives in the server.

**Biggest caveat:** nobody has published results on how good LLM-designed game builds are, including for pob-mcp. No Skyrim or LoreRim build MCP exists to learn from [26]. The strongest evidence comes from general benchmarks, each figure from a single paper [27][28][29]. Plan to measure quality with your own small set of eval tasks from day one [14][18].

## 1. Building the MCP server for Claude Code and Desktop

**SDK and spec.** The official TypeScript SDK went GA as v2 on 2026-07-27. The current version is `@modelcontextprotocol/server` 2.1.0, released 2026-09-23 [1]. The v1 line (`@modelcontextprotocol/sdk` 1.30.1) will keep receiving fixes for at least six months after v2 [1][2].

The v2 API looks like this [2]:

```ts
new McpServer({ name, version })
server.registerTool(name, { description, inputSchema: z.object(...), outputSchema? }, handler)
server.connect(new StdioServerTransport())
```

Schemas use Standard Schema, so Zod v4, Valibot and ArkType all work. The current MCP spec revision, 2026-07-28, is stateless: it has no initialize handshake [21] and states that "MCP has no protocol-level session" [3]. For state that must carry across calls, its non-normative guidance is to return an explicit handle from a create tool and pass it back as an argument [3].

Tools that declare `outputSchema` must return a conforming `structuredContent`, and should also return the same JSON as text [3]. Input and business-rule failures should be returned as tool errors (`isError: true`) rather than protocol errors, so the model can self-correct [3]. Tools, resources, prompts and stdio are all still supported. The revision deprecates Roots, Sampling, Logging (stdio servers are told to log to stderr instead) and HTTP+SSE [33].

**Install paths.**
- **Claude Code:** `claude mcp add --scope local|project|user <name> -- <command> [args]`. The `--` is required. Alternatively, commit a `.mcp.json` at the repo root [4].
- **Claude Desktop:** the one-click path is an MCPB (`.mcpb`) bundle, a zip of `manifest.json` plus the server, built with `mcpb init` and `mcpb pack`. Desktop ships its own Node on macOS and Windows, so the bundle should include the server's `node_modules` [6] (single source).
- **Plugins:** a Claude Code plugin can bundle **skills and MCP servers together**. The layout is `.claude-plugin/plugin.json` plus `skills/<name>/SKILL.md` plus a `.mcp.json` or inline `mcpServers`, and the MCP server entry can even point at a `.mcpb`. Paths use `${CLAUDE_PLUGIN_ROOT}`, and development loading uses `--plugin-dir` [5][10]. That makes one plugin the natural single artifact for Claude Code, with a `.mcpb` build of the same server for Desktop.

**Limits that affect design.**
- **Output size:** Claude Code warns at 10k tokens of MCP tool output and caps it at 25k tokens by default. `MAX_MCP_OUTPUT_TOKENS` raises the cap, and anything over the cap is spilled to a file and replaced by a path reference [4][11]. One measurement reports that a ~50k-token result slipped past the check, so enforcement may be imprecise; do not rely on that slack (low confidence) [12].
- **Tool count:** tool search, i.e. deferred loading of tool schemas, is on by default in Claude Code [4], which makes tool count cheaper in context. This run found no primary numeric guideline for how many tools is too many.
- **Windows:** a bare `npx` fails to spawn (it is `npx.cmd`), and `claude mcp add … cmd /c npx` has been reported to mangle `/c` into `C:/`. That issue was closed as not planned [7] (medium confidence; not re-checked against the current build). The recommended workaround (inference, unverified) is to point the config at `node <abs path>/dist/server.js` directly.

**Tools vs resources vs prompts.** Claude Code supports all three. Prompts appear as slash commands, and resources can be attached with `@server:uri` or read by the model through list/read resource tools [9] (secondary source, medium confidence). Outside Claude Code the picture is weaker: on claude.ai connectors, only tools are reliable [9]. Desktop-specific support was not verified.

For a dataset of several hundred perks, that uneven support argues for **narrow, filtered query tools** as the primary surface. An exposed resource can be a Claude Code-only extra.

**Reusing the Vite/React engine code in Node.** Node's native TypeScript type stripping (on by default from 22.18) handles only erasable syntax. It requires:
- no enums or parameter properties
- explicit `.ts` import specifiers
- `import type` for type-only imports
- **no tsconfig `paths`** aliases

The constraints above come from a single source [8] (medium confidence).

Typical Vite source violates some of these. Bundling the server entry point to a single `server.js` with esbuild or tsup avoids all of them: it resolves aliases, inlines the JSON data, and produces exactly the minimal artifact that MCPB and plugins want. tsx is fine for development. Vite-only constructs (`import.meta.env`, `import.meta.glob`) are the main hazard in shared modules. The statements in this paragraph are a belief, not a sourced finding.

_Research on this topic stopped once the first round covered it, plus spot-checks of key claims._

## 2. Skill and MCP working together, and designing tools for agents

**The skill format.** A skill is a folder containing a `SKILL.md`: YAML frontmatter followed by a Markdown body. Optional `scripts/`, `references/` and `assets/` folders can sit beside it. The format is an open spec published at agentskills.io [13].

Two frontmatter fields are required:
- `name`: up to 64 characters, lowercase letters and hyphens, and it must match the folder name.
- `description`: up to 1,024 characters, saying what the skill does and when to use it.

Loading is progressive. The name and description (about 100 tokens) are always in context. The body loads when the skill activates and should stay under about 500 lines or 5k tokens. Reference files and script output load only when used [13][14]. Descriptions should be written in the third person, because Claude uses them to pick among possibly 100+ skills [14].

In Claude Code, each skill is also a `/slash-command`. The skill listing truncates `description` plus `when_to_use` at 1,536 characters [15]. A December 2025 report said skills silently dropped out once a global description budget was exceeded. Current docs do not mention that budget, so the problem may be fixed (unverified) [22]. Practitioners report that auto-activation is unreliable. These reports come from secondary blogs and have no source in the appendix (low confidence), so the design should allow explicit `/lorerim-build` invocation.

Claude Desktop and claude.ai handle skills differently:
- Skills are ZIP uploads under *Customize > Skills* [16][23].
- They require code execution to be enabled.
- By inference, they therefore run in Anthropic's sandbox, **not on your machine**. No source states this directly; see Open questions.
- Skills synced from claude.ai never run their `!` shell injections locally [15].

**What goes where.** Anthropic's stated split [17]:
- **MCP server:** connectivity, data access, and correct use of its own tools.
- **Skill:** process — domain method, workflow order, orchestration and presentation.

Anthropic also names an anti-pattern: giving conflicting format instructions in both places [17].

Anthropic says to prefer bundled scripts for deterministic work, because only a script's output costs tokens [14]. So if you targeted only Claude Code, a skill that shells out to `node validate.js <code>` would work. In Desktop, though, skills need code execution [16] and so, by inference, run in the cloud sandbox. That makes the **MCP server the only way to bring the local TypeScript engine to both clients**, which settles the split:
- **Server:** catalog lookups, legality checks, budget arithmetic, share-code encode/decode.
- **Skill:** LoreRim build strategy, how to ask the user questions, the draft→validate→repair workflow, and how to present the final build.

**Tool design.** Anthropic's engineering guidance [18]:
- Build **workflow-shaped tools** rather than CRUD. One `schedule_event` beats `list_users` + `list_events` + `create_event`.
- **Namespace** tools with a consistent prefix; this measurably changes eval results.
- Return **human-meaningful identifiers**. Agents do "significantly" better with these than with opaque ids.
- Offer a `response_format` parameter with `concise` and `detailed` options.
- **Paginate, filter and truncate** with sensible defaults, and make truncation notes point to a narrower query.
- Write **errors as actionable instructions**, not error codes. The skills doc's own example is "Field X not found. Available fields: …" [14].
- Treat tool descriptions as prompts.
- Iterate against realistic multi-call evals, reviewing the transcripts [18].

The skills guidance adds evaluation-first development: at least 3 scenarios, compared against a baseline without the skill, and tested across model sizes [14].

**Searching several hundred perks cheaply.** Every Anthropic pattern avoids putting the whole catalog into context:
- **Search and filter tools** that return compact rows [18]. This is the portable option.
- **Code execution over tools exposed as files.** In one example this cut 150k tokens to 2k, but it needs a sandbox [19].
- **API-side Tool Search and Programmatic Tool Calling** [20]. These are Claude Developer Platform features that a local MCP server does not control.

Claude Code's MCP tool search defers only tool *definitions*, not data [4]. Given the 25k-token output cap [4], compact filtered queries plus a `get_perk` detail tool is the low-risk design.

**Stateful vs stateless.** MCP 2026-07-28 removed protocol sessions. It recommends minting an **explicit handle** and having the model pass it back, because "the model can see the handle and thread it between tools" [21][3].

The planner already has a natural handle: **the share code**. Tools that take a share code and return the updated code, plus a readable summary and diff, follow the spec. They also:
- survive a restart of the stdio server process;
- paste straight into the web planner;
- make evals deterministic.

A server-side `draft_id` saves tokens but loses the draft whenever the server restarts. This comparison is my inference; I found no A/B evidence either way.

**Open contradiction.** Anthropic's skills best practices say to reference MCP tools as `ServerName:tool_name` [14]. Claude Code actually names them `mcp__<server>__<tool>` [4], or `mcp__plugin_<plugin>_<server>__<tool>` inside a plugin [5]. Claude Code's skills doc gives no guidance either way [15]. This is unresolved; see Open questions.

_Research on this topic stopped after the first round plus targeted follow-up checks._

## 3. Prior art, and how an LLM does constrained design reliably

**Prior art.** Build-planner MCP servers exist and are actively maintained, but **only for Path of Exile**.

- **pob-mcp** is the most mature and the closest template [24]. It runs Path of Building's own headless calculation engine through a Lua bridge, so its numbers match the GUI. It exposes 99 tools across 10 categories. The most instructive are *engine-driven enumerate-and-rank* tools:
  - `optimize_tree` suggests nearby node allocations for a goal.
  - `find_best_anointment` simulates every option and ranks them by DPS/EHP change.
  - `validate_build` returns Critical/Warning/Info findings and a 0–10 health score [24].
- Its README flags two anti-patterns [24]:
  - Disconnected nodes are *silently dropped*, so an illegal edit looks as if it was accepted.
  - In-memory edits and on-disk files are two separate sources of truth.
- **poe2-mcp** grounds the model in a database extracted from game files: about 14k mods and 5k passives, with `inspect_*`, `list_*` and `search_*` lookups plus validators. It fingerprints the data schema so a game patch "fails loudly instead of serving silently-wrong data" [25] (medium confidence; from its README).

I found no user-reported measure of build quality for any of them.

**No Skyrim, LoreRim or other Bethesda character-build MCP exists.** Every Skyrim MCP I found targets mod authoring, load-order diagnostics or live game state [26]. A LoreRim planner MCP would appear to be the first of its kind.

**Generate → validate → repair works if the feedback is external.** Surveys and controlled studies agree: LLMs do not reliably self-correct from their own critique, and can get worse. They do improve when the feedback comes from a reliable outside source [30][31].

On the TravelPlanner benchmark, an LLM-Modulo loop lifted GPT-4-Turbo from 4.4% to 20.6%. In that loop, binary critics sent failures back to the model for up to 10 iterations, and using all critics together beat any single critic type [27]. That argues for returning **all** violations at once. Each should name the entity, the requirement it breaks, and by how much.

**Delegate optimization and feasibility to code, not the model.** When the LLM translated the request into an SMT problem and the Z3 solver did the search, success reached 93.9%, against about 10% for the LLM planning directly [28]. When LLMs solved constrained optimization problems themselves, the best model found a feasible answer 65% of the time and the optimal one 30.5% of the time. Feasibility, not objective quality, was the bottleneck [29]. The failures included made-up entities and small budget or threshold overshoots, which are exactly what a perk-budget planner would see [29].

Each figure comes from a single paper, and the papers used different base models (medium confidence). The direction is consistent across [27][28][29]. It also matches pob-mcp's design: the engine enumerates and scores options, and the LLM translates the user's intent and chooses among the ranked results [24].

**Grounding.** Hallucinated entities are a measured failure class [29]. The practice in prior art is to bind every name against the real database through search and inspect tools, and to fail loudly on unknown ids [25]. I found no study comparing grounding techniques (enum schemas vs search-then-select vs "did you mean" errors). With hundreds of perks, enum schemas are probably impractical, so strict id validation with close-match suggestions is the natural fit (inference).

**Judging whether a build is "good".** LLM judges agree with themselves far more than with humans. Their agreement with humans is only κ ≈ 0.38–0.51 on MT-Bench and 0.27–0.88 on JudgeBench. Position bias reaches 0.19, and their rankings are unstable across benchmarks. The recommended use is pairwise comparison with positions swapped, over several runs [32] (single source).

So anything measurable should be scored by the engine: budget use, defensive layers, how much slack each requirement has. An LLM or rubric judgment should be kept for qualitative fit to what the user asked for, and the user is the final judge.

_Research on this topic stopped after the first round plus verification. Grounding techniques remain an evidence gap._

## Insights that come from combining the three topics

- **One mechanism solves three problems at once.** Neither the protocol finding nor the prior art gives this on its own; it shows up when you put them together. The stateless MCP spec asks for a visible handle [3][21]. pob-mcp's worst pitfall is keeping in-memory state and on-disk state as two separate sources of truth [24]. The planner already has a canonical, portable build encoding: its share code. Using the share code as the only state removes the session problem, the drift problem, and the "how do I open what the agent made" problem in one move.
- **Three constraints push toward the same catalog design: where skills run in Desktop, the output cap, and hallucination risk.** Skills on Desktop most likely run in the cloud (inference from [16]), so they cannot read the data locally. Tool output is capped at 25k tokens [4]. Entity hallucination is a measured failure mode [29]. Together these rule out both "dump the catalog" and "bundle the data in the skill". What remains is filtered search tools, plus strict, fail-loud id validation with actionable errors [18][25]. Adding close-match suggestions to those errors is my inference.
- **Validator feedback quality matters more than how many repair loops you allow.** Critics help only because the feedback is external [30][31]. Combining all critic types beat any single one [27]. pob-mcp's silent-drop bug is the counter-example [24]. So `lorerim_evaluate_build` must reject and explain; it must never quietly normalize. _Project context, not research evidence:_ the planner's codec drops unknown ids silently by design. The MCP layer therefore has to check ids *before* encoding and must not rely on decode round-trips.

## Recommendations

These feed the **architecture spine** (tool surface, packaging, runtime) and the **brief** (feasibility, risks). They are listed in a sensible order of work. **Before implementing, re-check the SDK and Claude Code version facts**; they fall due for re-check on 2026-10-01 (see Staleness map).

1. **Tool surface: small, workflow-shaped, all prefixed `lorerim_`** (confidence: high on the pattern [18]; the specific tool set is my design inference):
   - **Catalog lookup:**
     - `lorerim_search_perks`: query, skill, tree, max skill requirement, max player level, limit/offset, and `response_format` concise|detailed. It returns compact rows keyed by real perk ids.
     - `lorerim_get_entity`: a perk, race, trait, skill or supernatural option, in detail.
   - **Build evaluation:** `lorerim_evaluate_build(code | partial spec)`. It returns:
     - the share code;
     - perk, skill-point and skill-level budgets, used vs available;
     - **all** violations at once, each naming the perk, the unmet requirement and the shortfall;
     - unknown ids, with "did you mean" suggestions.

     Check ids *before* encoding, and never rely on a decode round-trip, because the planner's codec drops unknown ids silently (project context). Reject and explain; never normalize quietly.
   - **Build editing:** `lorerim_apply_changes(code, ops[])`, applied as a batch. It returns the new code, a readable diff and the evaluation above. Every edit is stateless, with the share code as the handle [3][21].
   - **Ranked suggestions (phase 2, following pob-mcp [24]):**
     - `lorerim_suggest_perks(code, goals)`: the legal next perks, ranked by the engine.
     - `lorerim_cost_to_reach(code, perk, level)`: the skill levels and points needed to reach a perk.

     The LLM chooses among options the engine has scored, and never does the arithmetic itself [28][29].
   - Return `structuredContent` with an `outputSchema`, plus a text copy [3]. Keep typical responses well under 10k tokens [4].
2. **Evals before polish:** write three to five realistic prompts, for example "stealth archer vampire, level 40" or "a lich mage that never uses destruction". Measure legality automatically through `lorerim_evaluate_build`, and judge how well each build fits the request pairwise, yourself or with position-swapped LLM judging [14][18][32].
3. **Skill (`lorerim-build`):** put trigger phrases first in the description. Also make it invocable explicitly as `/lorerim-build` [15]. Explicit invocation matters because practitioners report auto-activation is unreliable (low confidence, secondary reports). The body covers:
   - intake questions: playstyle, difficulty, supernatural path, level target;
   - the draft → `lorerim_evaluate_build` → repair loop, until there are zero violations;
   - a rule that every perk named must come from a tool result;
   - the output format: build summary plus share code plus a planner link.

   Keep output formatting in the skill only [17]. Put any LoreRim strategy notes in `references/` (progressive disclosure) [13].
4. **Build path:** bundle with esbuild or tsup to a single ESM file, inlining the engine, codec and JSON data. This is inference: native type stripping has constraints that typical Vite source breaks [8], and I found no primary source on bundling practice. Log to stderr only, because stdout carries the protocol [33]. Use SDK v2, not v1; v1 is in maintenance [1][2].
5. **Packaging:**
   - **Claude Code:** a plugin with `.claude-plugin/plugin.json`, `skills/lorerim-build/`, and `mcpServers` pointing to `node ${CLAUDE_PLUGIN_ROOT}/dist/server.js` [5]. Develop with `--plugin-dir`.
   - **Claude Desktop:** a `.mcpb` of the same `dist/` [6], plus the skill as a ZIP [16].
   - Call `node` directly, never `npx`. This sidesteps the Windows `cmd /c` problem [7] (medium confidence; unverified in the current build).

## Open questions

- **How should a skill name MCP tools: `ServerName:tool` [14] or `mcp__…__tool` [4][5]?** To answer it, try both in a plugin skill in Claude Code and in Desktop.
- **Do Desktop's local MCP servers support resources and prompts, and does Desktop apply a 25k-style output cap?** No primary source was found. Test it directly, or do a deeper research pass.
- **Where do Claude Desktop skills actually execute?** The docs say only that skills need code execution [16]. The claim that they run in Anthropic's sandbox rather than locally is an inference, and the "only MCP reaches the local engine from Desktop" argument rests on it. To settle it, upload a test skill whose script prints its hostname and working directory. Also check whether Desktop's Cowork mode behaves differently.
- **Which grounding technique works best at the planner's scale?** No comparative study exists. The answer would come from an eval: search-then-select vs close-match errors, measured as the rate of hallucinated ids.
- **How well does Claude know LoreRim strategy (as opposed to vanilla Skyrim) without reference notes?** Unknown. Compare evals with and without a `references/strategy.md`.
- **Is the Windows `/c`→`C:/` mangling still present?** The report dates from 2026-01 and the issue was closed as not planned [7]. Moot if the config calls `node` directly.
- **Do the engine modules use Vite-only constructs (`import.meta.env`/`glob`)?** A codebase check, not research. A trial esbuild bundle answers it.

## Source appendix

| # | Claim/finding supported | Publisher | Pub date | Accessed | Confidence |
|---|---|---|---|---|---|
| 1 | TS SDK v2 GA 2026-07-27, 2.1.0 current; v1 1.30.1 maintained | [npm registry — @modelcontextprotocol/server](https://www.npmjs.com/package/@modelcontextprotocol/server) | 2026-09 | 2026-09-27 | high |
| 2 | v2 API shape (McpServer, registerTool, StdioServerTransport, Standard Schema); v1 support window | [modelcontextprotocol/typescript-sdk (GitHub)](https://github.com/modelcontextprotocol/typescript-sdk) | 2026-09 | 2026-09-27 | high |
| 3 | Spec 2026-07-28: no session, explicit-handle state, outputSchema/structuredContent, isError, deprecations | [MCP specification — tools](https://modelcontextprotocol.io/specification/2026-07-28/server/tools) | 2026-07 | 2026-09-27 | high |
| 4 | Claude Code MCP install/scopes, 10k/25k output limits, tool search default | [Claude Code docs — MCP](https://code.claude.com/docs/en/mcp) | 2026-09 | 2026-09-27 | high |
| 5 | Plugins bundle skills + MCP; `${CLAUDE_PLUGIN_ROOT}`; tool namespacing | [Claude Code docs — plugins reference](https://code.claude.com/docs/en/plugins-reference) | 2026-09 | 2026-09-27 | high |
| 6 | MCPB bundles for Desktop; Desktop ships Node | [modelcontextprotocol/mcpb (GitHub)](https://github.com/modelcontextprotocol/mcpb) | 2026 | 2026-09-27 | medium |
| 7 | Windows npx needs cmd /c; `/c` mangled by `claude mcp add` | [anthropics/claude-code #20061](https://github.com/anthropics/claude-code/issues/20061) | 2026-01 | 2026-09-27 | medium |
| 8 | Node type-stripping constraints (erasable syntax, .ts extensions, no paths) | [Node.js docs — TypeScript](https://nodejs.org/api/typescript.html) | 2026 | 2026-09-27 | medium |
| 9 | Resources/prompts supported in Claude Code; tools-only reliability on claude.ai connectors | [davidharting.com PR #221 (research note)](https://github.com/davidharting/davidharting.com/pull/221) | 2026-09 | 2026-09-27 | medium |
| 10 | Independent confirmation: plugins bundle skills and MCP servers | [hidekazu-konishi.com](https://hidekazu-konishi.com/entry/claude_code_plugins_complete_guide.html) | n.d. | 2026-09-27 | medium |
| 11 | Independent confirmation: 25k default, MAX_MCP_OUTPUT_TOKENS | [Xpoz Help Center](https://help.xpoz.ai/en/articles/12681842-claude-code-mcp-tool-exceeds-maximum-allowed-tokens-25000) | n.d. | 2026-09-27 | medium |
| 12 | 25k limit enforcement measured as inexact | [DEV Community — rulestack](https://dev.to/rulestack/claude-codes-25000-token-mcp-limit-let-a-49964-token-result-through-we-measured-both-checks-54nc) | n.d. | 2026-09-27 | low |
| 13 | Agent Skills open spec: fields, limits, progressive disclosure | [agentskills.io specification](https://agentskills.io/specification) | n.d. (live) | 2026-09-27 | high |
| 14 | Skill authoring best practices: third-person descriptions, scripts for deterministic ops, actionable errors, eval-first; `ServerName:tool` naming | [Claude Platform docs — skill best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices) | n.d. (live) | 2026-09-27 | high |
| 15 | Claude Code skill locations, slash commands, 1,536-char listing truncation | [Claude Code docs — skills](https://code.claude.com/docs/en/skills) | 2026-09 | 2026-09-27 | high |
| 16 | claude.ai/Desktop skills: ZIP upload, need code execution (sandbox) | [Claude Help Center — using skills](https://support.claude.com/en/articles/12512180-using-skills-in-claude) | 2026-09 | 2026-09-27 | high |
| 17 | Division of labor: MCP = connectivity/data; skills = process/presentation | [Claude blog — skills and MCP servers](https://claude.com/blog/extending-claude-capabilities-with-skills-mcp-servers) | 2025-12 | 2026-09-27 | high |
| 18 | Tool design: consolidation, namespacing, meaningful ids, response_format, pagination, actionable errors, evals | [Anthropic Engineering — writing tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents) | 2025-09 | 2026-09-27 | high |
| 19 | Code execution with MCP: 150k→2k tokens; needs sandbox | [Anthropic Engineering — code execution with MCP](https://www.anthropic.com/engineering/code-execution-with-mcp) | 2025-11 | 2026-09-27 | high |
| 20 | API-side Tool Search / Programmatic Tool Calling | [Anthropic Engineering — advanced tool use](https://www.anthropic.com/engineering/advanced-tool-use) | 2025-11 | 2026-09-27 | high |
| 21 | Explicit-handle state recommendation; sessions removed | [MCP blog — 2026-07-28 release](https://blog.modelcontextprotocol.io/posts/2026-07-28/) | 2026-07 | 2026-09-27 | high |
| 22 | Skills silently dropped past a global description budget (possibly fixed) | [fsck.com — Jesse Vincent](https://blog.fsck.com/2025/12/17/claude-code-skills-not-triggering/) | 2025-12 | 2026-09-27 | low |
| 23 | Independent confirmation: Desktop skills ZIP upload via Customize > Skills | [Adventures in CRE](https://www.adventuresincre.com/claude-skills-practical-guide/) | n.d. | 2026-09-27 | medium |
| 24 | pob-mcp: headless PoB engine, 99 tools, enumerate-and-rank, validate_build; silent-drop and dual-state pitfalls | [ianderse/pob-mcp (GitHub)](https://github.com/ianderse/pob-mcp) | 2026 (commit date not visible) | 2026-09-27 | high |
| 25 | poe2-mcp: game-file DB grounding, inspect/list/search, fail-loud schema fingerprints | [HivemindOverlord/poe2-mcp (GitHub)](https://github.com/HivemindOverlord/poe2-mcp) | n.d. | 2026-09-27 | medium |
| 26 | Skyrim MCPs target modding/runtime; no build-planner MCP | [Pyrhame/SkyrimCK-MCP (GitHub)](https://github.com/Pyrhame/SkyrimCK-MCP) + search absence check | 2026-09 | 2026-09-27 | medium |
| 27 | LLM-Modulo on TravelPlanner: 4.4%→20.6%; combined critics best | [arXiv 2405.20625 (Gundawar, Kambhampati et al.)](https://arxiv.org/abs/2405.20625) | 2024-05 | 2026-09-27 | medium |
| 28 | LLM→SMT + Z3: 93.9% vs ~10% direct planning | [arXiv 2404.11891 (Hao et al., NAACL 2025)](https://arxiv.org/abs/2404.11891) | 2025-01 | 2026-09-27 | medium |
| 29 | ConstraintBench: 65% feasible / 30.5% optimal; entity hallucination and budget overshoot failures | [arXiv 2602.22465](https://arxiv.org/abs/2602.22465) | 2026-02 | 2026-09-27 | medium |
| 30 | Self-correction works only with reliable external feedback (survey) | [arXiv 2406.01297 (Kamoi et al., TACL)](https://arxiv.org/abs/2406.01297) | 2024-12 | 2026-09-27 | high |
| 31 | LLMs cannot intrinsically self-correct reasoning; can degrade | [arXiv 2310.01798 (Huang et al., ICLR 2024)](https://arxiv.org/abs/2310.01798) | 2023-10 | 2026-09-27 | high |
| 32 | LLM-as-judge: κ≈0.3–0.5 vs humans, position bias, pairwise+swap recommended | [arXiv 2606.19544](https://arxiv.org/abs/2606.19544) | 2026-06 | 2026-09-27 | medium |
| 33 | Spec 2026-07-28 deprecations (Roots, Sampling, Logging → log to stderr for stdio, HTTP+SSE); tools/resources/prompts/stdio kept | [MCP specification — deprecated features](https://modelcontextprotocol.io/specification/2026-07-28/deprecated) | 2026-07 | 2026-09-27 | high |

## Staleness map

Re-check windows by claim class: version and compatibility 1 month, pain point 6 months, landscape 3 months, pattern 24 months.

| Claim | Class | Pub | Re-check by |
|---|---|---|---|
| [1] SDK v2.1.0 current | version | 2026-09 | 2026-10-01 |
| [4] Claude Code 25k/10k output limits | version | 2026-09 | 2026-10-01 |
| [5] Plugins bundle skills + MCP | version | 2026-09 | 2026-10-01 |
| [6] Desktop `.mcpb` install | version | 2026-09 | 2026-10-01 |
| [15] 1,536-char skill listing truncation | version | 2026-09 | 2026-10-01 |
| [16] Desktop skills run in sandbox | version | 2026-09 | 2026-10-01 |
| [3] Spec 2026-07-28 is current | version | 2026-07 | **stale** (2026-08-01) |
| [7] Windows `cmd /c` mangling | pain-point | 2026-01 | **stale** (2026-07-01) |
| [24][26] Prior art / no Skyrim MCP | landscape | 2026-09 | 2026-12-01 |
| [30][31] Self-correction needs external feedback | pattern | 2024-12 | 2026-12-01 |
| [28] LLM→SMT 93.9% | pattern | 2025-01 | 2027-01-01 |
| [27] LLM-Modulo 4.4%→20.6% | pattern | 2024-05 | **stale** (2026-05-01) |

Three claims are already past their window, and all three are low-risk:
- **[3]:** the next spec revision cannot remove the deprecated features before 2027-07.
- **[7]:** avoided by calling `node` directly.
- **[27]:** a benchmark result that [28] and [29] corroborate in direction.

The earliest re-check that matters is **2026-10-01**, for the Claude Code and SDK version facts. If implementation starts after 2026-10-01, refresh them first.
