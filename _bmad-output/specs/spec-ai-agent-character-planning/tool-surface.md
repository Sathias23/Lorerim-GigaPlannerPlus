# Tool surface

Small and workflow-shaped (consolidate over CRUD), every tool prefixed `lorerim_`, human-meaningful ids (real perk ids plus names), descriptions written as prompts. The specific tool set is a design inference from pob-mcp and Anthropic's tool-design guidance.

## Common response rules

- `structuredContent` conforming to `outputSchema`, plus the same JSON as text.
- `response_format: concise | detailed` where output size varies; default `concise`.
- Paginate with `limit`/`offset` and sensible defaults; a truncation note names a narrower query.
- Errors are `isError: true` tool results written as instructions: what was wrong, what is valid, closest matches.
- Build-returning tools include the data manifest version.

## Phase 1

| Tool | Input | Returns | CAP |
|---|---|---|---|
| `lorerim_search_perks` | `query`, `skill`, `maxSkillReq`, `maxPlayerLevel`, `limit`, `offset`, `response_format` | compact rows: id, name, skill, `skillReq`, `playerLevelReq`, one-line summary of the description (no `tree` filter: tree ids equal skill ids) | CAP-1 |
| `lorerim_get_entity` | `kind` (perk, race, trait, skill, option, birthsign, deity), `id` (optional), `limit`, `offset` | with `id`: full entity detail; unknown id → close-match suggestions. Without `id`: that kind's ids, names, and one-line summaries, paginated | CAP-2 |
| `lorerim_evaluate_build` | `code` | code; budgets used/available for perk points, skill points, skill levels; **all** violations; unknown ids with did-you-mean | CAP-3 |
| `lorerim_apply_changes` | `code` (optional; omitted = fresh build), `ops[]` | new code, readable diff, evaluation (as above) | CAP-4 |

**Violation shape:** entity id and name, the requirement it breaks (skill req, player-level req, prerequisite perk, budget), required vs actual, shortfall. Return every violation at once — combined critics beat any single critic type, and repair quality depends on feedback quality, not loop count.

**Ops batch:** atomic. Any invalid op → no change, and each failing op is explained. Ids are validated before the codec sees them. Ops are the only input language for build content; there is no partial-spec format.

**v1 op set** (mirrors `BuildState`; each op is an existing engine function or a field set followed by `reconcileBuild`):

| Op | Arguments | Engine path |
|---|---|---|
| `set_race`, `set_birthsign`, `set_deity` | id | field set + `reconcileBuild` |
| `add_trait`, `remove_trait` | id | field set + `reconcileBuild` |
| `set_major_skills`, `set_minor_skills` | skill ids | field set + `reconcileBuild` |
| `set_attribute_bonus` | health, magicka, stamina | field set + `reconcileBuild` |
| `set_option_choice` | option id, choice id | field set + `reconcileBuild` |
| `set_player_level` | level | `clampPlayerLevel` + `reconcileBuild` |
| `set_skill_level` | skill id, level | `applySkillLevelChange` |
| `take_perk`, `remove_perk` | perk id | `tryTakePerk` / removal + `reconcileBuild` |

Anything the engine adjusts beyond the requested ops shows up in the diff. Training-tier ops (`applySkillTrainingRangeChange`) are phase 2, added only if evals show the agent needs them. Oghma skill choices follow `set_option_choice` unless implementation finds they need their own op.

## Phase 2 (after evals show where the agent struggles)

| Tool | Input | Returns | CAP |
|---|---|---|---|
| `lorerim_suggest_perks` | `code`, `goals` | legal next perks, engine-ranked | CAP-6 |
| `lorerim_cost_to_reach` | `code`, `perk` (optionally target level) | skill levels, skill points, player level needed | CAP-7 |

The LLM chooses among engine-scored options; it never computes the scores.

## Skill (`lorerim-build`)

- Description puts trigger phrases first, third person; `name` matches folder, ≤64 chars; description plus `when_to_use` ≤1,536 chars. Invocable as `/lorerim-build` because auto-activation is reported unreliable.
- Body under ~500 lines: intake (playstyle, difficulty, supernatural path, level target) → draft → `lorerim_evaluate_build` → repair until zero violations → present.
- Rule: every perk named must come from a tool result in this conversation.
- Output: build summary, share code, planner link. Format rules live here only.
- LoreRim strategy notes go in `references/` (progressive disclosure).
