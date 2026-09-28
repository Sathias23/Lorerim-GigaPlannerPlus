# lorerim-agent

An MCP server and a Claude Code plugin that let Claude design LoreRim characters with the
GigaPlanner engine and `data/`. The engine decides legality and cost; Claude interprets the
request and chooses.

- `server/` — the MCP server (`lorerim_search_perks`, `lorerim_get_entity`,
  `lorerim_evaluate_build`, `lorerim_apply_changes`), bundled into one self-contained
  `dist/server.js` with the engine and game data inlined.
- `plugin/` — the Claude Code plugin source: `.claude-plugin/plugin.json`, `.mcp.json`, and
  the `lorerim-build` skill.
- `packaging/` — assembles `dist/plugin/` from `plugin/` plus a copy of `dist/server.js`.

## Build and test

From the repo root, after the root `npm ci`:

```sh
npm --prefix lorerim-agent ci
npm run agent:build   # dist/server.js and the self-contained plugin in dist/plugin/
npm run agent:test
```

Node 22 or later must be on `PATH` as `node`; the plugin launches the server with it.

## Install in Claude Code

Load the built plugin (server and skill) by absolute path:

```sh
claude --plugin-dir /abs/path/to/Lorerim-GigaPlannerPlus/lorerim-agent/dist/plugin
```

Then ask for a character in plain language, or run the skill directly:

```text
/lorerim-build a stealth archer vampire, level 40
```

Check the plugin with `claude plugin validate lorerim-agent/dist/plugin`. `dist/plugin/` is
self-contained, so it can be copied or zipped anywhere; the launch config runs
`node ${CLAUDE_PLUGIN_ROOT}/server.js`.

### Permissions

Claude Code asks before the first call to each `lorerim_*` tool, and before the skill reads
its own `references/` files (they live outside the project directory). All four tools only
read game data and share codes, so it is safe to allow them for the session. To skip the
prompts, allow them up front, e.g. for a headless run:

```sh
claude -p "/lorerim-build a stealth archer vampire, level 40" \
  --plugin-dir /abs/path/to/lorerim-agent/dist/plugin \
  --add-dir /abs/path/to/lorerim-agent/dist/plugin \
  --allowedTools mcp__plugin_lorerim_lorerim
```

`--add-dir` grants read access to the skill's reference files; `mcp__plugin_lorerim_lorerim`
allows every tool of the plugin's `lorerim` server. Without them a headless run cannot call
the tools (the skill then stops rather than guessing ids) or read the references.

### Server only

To add just the tools (no skill), register the bundled server directly. The `--` is required,
and the path must be absolute; never launch it through `npx`:

```sh
claude mcp add --scope user lorerim -- node /abs/path/to/Lorerim-GigaPlannerPlus/lorerim-agent/dist/server.js
```

## Planner links

`lorerim_evaluate_build` and `lorerim_apply_changes` return a `plannerUrl` that opens the
build in the web planner: `<base>/planner?build=<share code>`. The base defaults to the
deployed planner, `https://sathias23.github.io/Lorerim-GigaPlannerPlus`. Set
`LORERIM_PLANNER_URL` in the environment Claude Code runs in to point links elsewhere, such
as a local dev server (a trailing slash is fine):

```sh
LORERIM_PLANNER_URL=http://localhost:5173/Lorerim-GigaPlannerPlus/ claude --plugin-dir …
```

A code opens as the same build only when the planner and the server use the same data
version; every tool response carries `dataVersion`.
