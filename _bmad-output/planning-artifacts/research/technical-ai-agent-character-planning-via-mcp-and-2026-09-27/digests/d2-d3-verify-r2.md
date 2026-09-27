# D2 + D3 landing verification and round-2 lead checks (lead, 2026-09-27)

## D2
- Stateless/explicit-handle guidance: two independent MCP-project publications agree (spec 2026-07-28 tools page, via D1; MCP blog 2026-07-28 post, via D2). Same org but separate documents; treated as verified primary.
- Lead 1 (tool-name format contradiction): code.claude.com/docs/en/skills gives NO guidance on how skills name MCP tools; the `ServerName:tool_name` advice exists only in platform.claude.com best-practices. Claude Code exposes `mcp__<server>__<tool>` (plugin: `mcp__plugin_<plugin>_<server>__<tool>`). Unresolved -> open question; practical mitigation: name tools in skill by both the bare tool name and the server.
- Lead 2 (description budget): current code.claude.com skills doc mentions only the 1,536-char per-skill truncation of description+when_to_use; no global SLASH_COMMAND_TOOL_CHAR_BUDGET mentioned. Dec-2025 pain point treated as possibly fixed/stale -> claim status unverified (not overturned).
- Lead 3 (Desktop skills): Claude Desktop manages skills under Customize > Skills with ZIP upload; enabled skills available across Claude apps (support.claude.com "Use skills in Claude"; secondary adventuresincre.com / limitededitionjonathan substack). Skills there need code execution (D2 finding 9) -> they run in Anthropic's sandbox, not locally. Verified (two publishers).

## D3
- pob-mcp: fetched github.com/ianderse/pob-mcp directly: drives PoB HeadlessWrapper.lua against unmodified checkout; optimize_tree, find_best_anointment, validate_build present; 99 tools with all integrations. VERIFIED (primary re-read). Last-commit date not visible -> freshness unknown.
- Absence of Skyrim character-build MCP: independent WebSearch ("Skyrim character build planner MCP server") returned only web planners (nukesdragons, skyrimcalc) and the Creation Kit MCP (PulseMCP listing). Absence corroborated (two searches, two surfaces).
- Self-correction needs external feedback (two-source class, "pattern failed"): Kamoi et al. TACL 2024 survey + Huang et al. "LLMs Cannot Self-Correct Reasoning Yet" ICLR 2024 (arXiv 2310.01798) — performance can degrade without external feedback. VERIFIED.
- SMT/solver 93.9% vs LLM-Modulo 20.6%: single papers each, different base models; kept as medium confidence, "indicative not controlled".
