- source_spec: `_bmad-output/specs/spec-ai-agent-character-planning/stories/1-agent-package-skeleton-and-server-bundle.md`
  summary: Update AGENTS.md "Co-locate tests" and the test-required directory list to include `lorerim-agent/server/` so they stop contradicting the new agent pointer line.
  evidence: AGENTS.md says Vitest tests live only in src/, extensions/, tools/data-editor/src/ and "no other directory is scanned", while story 1 adds tests under lorerim-agent/server/ (run by the agent package's own Vitest config).
