- source_spec: `_bmad-output/specs/spec-ai-agent-character-planning/stories/1-agent-package-skeleton-and-server-bundle.md`
  summary: Update AGENTS.md "Co-locate tests" and the test-required directory list to include `lorerim-agent/server/` so they stop contradicting the new agent pointer line.
  evidence: AGENTS.md says Vitest tests live only in src/, extensions/, tools/data-editor/src/ and "no other directory is scanned", while story 1 adds tests under lorerim-agent/server/ (run by the agent package's own Vitest config).
- source_spec: `_bmad-output/specs/spec-ai-agent-character-planning/stories/3-build-evaluation-tool.md`
  summary: Add a test for lorerim_evaluate_build's second isError path ("decoded, but the planner engine could not evaluate it").
  evidence: Review found no test exercises the engine-error catch in evaluateBuild.ts; no realistic code is known that decodes and then makes the engine throw, so a fixture must be found first (e.g. a malformed `tr` or `a` shape).
- source_spec: `_bmad-output/specs/spec-ai-agent-character-planning/stories/4-build-editing-tool-with-v1-ops.md`
  summary: Add a test that makes lorerim_apply_changes emit `stage: "encode"` diff rows and the "Encoding normalized…" note.
  evidence: Review probes found no op sequence whose final state encodeBuild changes, so the encode-row path in applyChanges.ts is unverified; a reachable fixture (or an injected post-ops state that reconcileImportedBuild alters) must be found first.
- source_spec: `_bmad-output/specs/spec-ai-agent-character-planning/stories/5-claude-code-plugin-and-lorerim-build-skill.md`
  summary: Add a CI job that runs `npm --prefix lorerim-agent ci` then `npm run agent:test` (which also builds and assembles the plugin), so lorerim-agent regressions cannot merge green.
  evidence: `.github/workflows/test.yml` runs only root `npm test`, whose Vitest config never collects `lorerim-agent/**`; story 5's plannerUrl, env-var threading, and plugin-assembly tests run only by hand. SPEC assumes no CI job until release, so this needs the owner's go-ahead.
- source_spec: `_bmad-output/specs/spec-ai-agent-character-planning/stories/6-eval-set.md`
  summary: Add a test that runs an eval CLI as a real Node process (e.g. `node evals/scoreCli.ts` against a built dist with `CLAUDE_CONFIG_DIR` pointed at fixtures), covering type stripping, `isMainModule`, and the stdio `connectServer` path.
  evidence: All eval tests run inside Vitest, which resolves `@/` and does its own TS transform; no test spawns `node evals/*.ts` and `connectServer` is reached only by hand, so a runtime `@/` import or a broken main-module guard would pass `npm run agent:test`.
