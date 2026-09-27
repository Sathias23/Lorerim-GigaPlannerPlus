# Stack, packaging, and runtime facts

Version facts below fall due for re-check on **2026-10-01**; refresh them if implementation starts later.

**Re-verified 2026-09-27** (story 1, against the npm registry and the local CLI): `@modelcontextprotocol/server` and `@modelcontextprotocol/client` latest are 2.1.0; `@modelcontextprotocol/sdk` (v1) latest is 1.30.1; Claude Code is 2.1.283. The stdio transport imports from the `@modelcontextprotocol/server/stdio` subpath (`StdioServerTransport`, and `serveStdio(factory, { transport })`, which serves both the 2026-07-28 opening and a 2025-era `initialize` from one `McpServer` factory); `McpServer` imports from `@modelcontextprotocol/server`. The client's stdio transport is `@modelcontextprotocol/client/stdio`.

## Runtime

- **SDK:** `@modelcontextprotocol/server` 2.1.0 (v2 GA 2026-07-27). v1 (`@modelcontextprotocol/sdk` 1.30.1) is maintenance-only. API: `new McpServer({ name, version })`, `server.registerTool(name, { description, inputSchema, outputSchema? }, handler)`, `server.connect(new StdioServerTransport())`. Schemas use Standard Schema, so the repo's Zod v4 works.
- **Spec 2026-07-28:** stateless, no initialize handshake, no protocol session; explicit handles for cross-call state. Deprecates Roots, Sampling, Logging (stdio servers log to stderr), HTTP+SSE; tools, resources, prompts, stdio remain.
- **Node:** 22 (repo CI version). Server ships as one ESM `dist/server.js` with engine, codec, and `data/` JSON inlined. `tsx` is fine for development.

## Packaging

- **Claude Code plugin:** `.claude-plugin/plugin.json`, `skills/lorerim-build/`, and `.mcp.json` or inline `mcpServers` running `node ${CLAUDE_PLUGIN_ROOT}/dist/server.js`. Develop with `--plugin-dir`. Plugin tools are named `mcp__plugin_<plugin>_<server>__<tool>`.
- **Alternative Code install:** `claude mcp add --scope local|project|user <name> -- node <abs>/dist/server.js` (the `--` is required).
- **Claude Desktop:** `.mcpb` (zip of `manifest.json` plus server) via `mcpb init` / `mcpb pack`; Desktop ships its own Node on macOS and Windows. Skill uploaded as a ZIP under *Customize > Skills*, which requires code execution enabled. Skills synced from claude.ai never run `!` shell injections locally.
- **Windows:** bare `npx` fails to spawn and `claude mcp add … cmd /c npx` was reported to mangle `/c`; calling `node` directly avoids both.

## Limits that shape design

- Claude Code warns at 10k tokens of MCP output and caps at 25k by default (`MAX_MCP_OUTPUT_TOKENS` raises it; overflow spills to a file). Enforcement was measured as inexact — do not rely on slack.
- Claude Code defers tool definitions via tool search by default, so tool count is cheap; it does not defer data.
- Resources and prompts work in Claude Code; only tools are reliable on claude.ai connectors; Desktop support unverified.
- Skills: `name` ≤64 chars matching the folder; `description` ≤1,024 chars; body ≲500 lines / 5k tokens; Claude Code listing truncates `description` + `when_to_use` at 1,536 chars.

## Evaluation method (CAP-9)

- At least three scenarios, compared against a no-skill baseline, across model sizes.
- Legality: automatic, via `lorerim_evaluate_build`. Also track hallucinated-id rate.
- Fit: pairwise comparison, positions swapped, several runs — LLM judges agree with humans only κ≈0.3–0.5 and show position bias. The user is final judge.
- Review transcripts, not only scores.
