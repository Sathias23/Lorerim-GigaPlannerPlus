- source_spec: `_bmad-output/specs/spec-ai-agent-character-planning/stories/1-agent-package-skeleton-and-server-bundle.md`
  summary: Update AGENTS.md "Co-locate tests" and the test-required directory list to include `lorerim-agent/server/` so they stop contradicting the new agent pointer line.
  evidence: AGENTS.md says Vitest tests live only in src/, extensions/, tools/data-editor/src/ and "no other directory is scanned", while story 1 adds tests under lorerim-agent/server/ (run by the agent package's own Vitest config).
- source_spec: `_bmad-output/specs/spec-ai-agent-character-planning/stories/3-build-evaluation-tool.md`
  summary: Add a test for lorerim_evaluate_build's second isError path ("decoded, but the planner engine could not evaluate it").
  evidence: Review found no test exercises the engine-error catch in evaluateBuild.ts; no realistic code is known that decodes and then makes the engine throw, so a fixture must be found first (e.g. a malformed `tr` or `a` shape).
