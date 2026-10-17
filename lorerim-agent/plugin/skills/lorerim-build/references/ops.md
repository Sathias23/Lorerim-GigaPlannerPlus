# Op cheat sheet for `lorerim_apply_changes`

The tool's own description and input schema define each op. This sheet adds only what a
first draft needs: the order that keeps a batch from failing, and a template. Every `<...>`
below is a placeholder for an id you got from a tool result in this conversation.

## Draft order

Ops run one after another on the running build, and `take_perk` is strict (its requirements
must already be met). Order a fresh draft like this:

1. `set_player_level`: the user's level target, first, so perk points, skill caps, and
   player-level gates are all available to the ops after it.
2. `set_race`, `set_birthsign`, `set_deity`.
3. `set_option_choice` for a supernatural path or another character option. Read the
   option with `lorerim_get_entity` (kind `option`, its `id`) for valid choice ids.
4. `add_trait`, one op per trait.
5. `set_major_skills`, then `set_minor_skills`. Each replaces its whole list; a skill cannot
   be in both. `set_oghma_skills` only after the Oghma Infinium option is set to its claimed
   choice (step 3).
6. `set_attribute_bonus`, if the build wants a health / magicka / stamina split.
7. `set_skill_level`, one op per skill tree you take perks in, set to the highest
   `skillReq` among the perks you will take in that tree (read it from the search rows).
   Skip the op when no perk in the tree has a `skillReq`. If it is rejected because the
   level is below the skill's floor, the skill already starts high enough: drop the op. A
   level above the skill's growth cap at the target raises the player level instead of
   failing (see Leveling rules below).
8. `take_perk`, tree by tree, each perk after its prerequisites and each rank after the rank
   before it. `lorerim_search_perks` with `response_format: "detailed"` lists prerequisite
   ids; `lorerim_get_entity` (kind `perk`) names them.

## Template

```json
{
  "ops": [
    { "op": "set_player_level", "level": <level target> },
    { "op": "set_race", "id": "<race id>" },
    { "op": "set_birthsign", "id": "<birthsign id>" },
    { "op": "set_option_choice", "option": "<option id>", "choice": "<choice id>" },
    { "op": "add_trait", "id": "<trait id>" },
    { "op": "set_major_skills", "skills": ["<skill id>", "<skill id>"] },
    { "op": "set_minor_skills", "skills": ["<skill id>"] },
    { "op": "set_skill_level", "skill": "<skill id>", "level": <highest skillReq in that tree> },
    { "op": "take_perk", "id": "<perk id with no prerequisites>" },
    { "op": "take_perk", "id": "<perk id that needs the one above>" }
  ]
}
```

Omit `code` for a fresh build. To edit, pass the latest `code` and only the ops that change
something.

## Reading the result

- `diff` rows with cause `requested` are what your ops asked for; cause `engine` are what the
  engine did on top (a player-level raise, dependent perks removed with a prerequisite). Read
  every `engine` row: it is the engine telling you a side effect you did not ask for.
- `evaluation` is the `lorerim_evaluate_build` result for the new `code`.
- `plannerUrl` opens the new `code` in the web planner.
- `warnings` is always present and usually empty. A `player_level_raised` warning means the
  build ended above the level of the batch's last `set_player_level` (see below). `legal` can
  still be `true`: the build is legal, just not at the level you asked for.

## Leveling rules

The numbers live in the game data (`data/game/mechanics.json`, under `leveling`) and in the
evaluation. Outside a route draft ([routes.md](routes.md)), never work them out yourself;
read them from `evaluation.budgets` and `evaluation.skillCaps`. Skills rise **only** when skill points are spent on them, never by
use.

| Rule | Source, and where to read it |
|---|---|
| Skill points | `skillPointsPerLevel` for each player level above `baseLevel`, none at the base level; effects can add more. Read `budgets.skillPoints`. |
| Cost per skill level | `skillLevelCosts`: tiered by the level being bought, dearer each tier. Read `skillCaps.<skill>.nextLevelCost`. |
| Free levels | Levels up to the skill's floor cost nothing (`skillPointFreeThroughFloor`). The floor is the race's starting level plus the major or minor skill bonus (`skillFloorSources`); an untagged skill has only the race value. Read `skillCaps.<skill>.floor`. |
| Growth cap | Each player level above `baseLevel` lets a skill grow `skillLevelIncreasesPerPlayerLevel` levels above its floor (`playerLevelSkillBaseline`). Read `skillCaps.<skill>.growthCap`. |
| Global cap | `maxSkillAbovePlayerLevel` above the player level, never above `maxSkillLevel`. Read `budgets.skillLevels.maxAllowed`. |
| Training levels | Earned each player level and capped by `maxTrainingSkillLevel`, tracked in `budgets.trainingLevels`. The ops cannot spend them. |

Other budgets each level brings, all in `evaluation.budgets` (`used`, `available`,
`remaining`):

- `perkPoints`: `initialPerkPoints` at the base level, then `perkPointsPerLevel` per level,
  plus any that effects grant.
- `destinyPerkPoints`: a separate budget for Destiny perks, earned at set player levels.
- `attributeChoices`: one per level above the base level. `set_attribute_bonus` takes the
  running totals, and fails when they add up to more than are earned.

**`skillCaps`**, one entry per skill id, says what each skill can still take at the current
player level:

- `level`: the stored level (what skill points bought; `budgets.skillLevels.levels` adds
  grants on top), and `floor`, the lowest level it can be set to.
- `growthCap` (null when the data sets no growth limit) and `effectiveMax`, the lower of
  `growthCap` and `budgets.skillLevels.maxAllowed`. Never set a skill above its
  `effectiveMax`.
- `nextLevelCost`: the skill points the next level costs, or null at `effectiveMax`. It is
  the price only; compare it with `budgets.skillPoints.remaining` yourself.

**The growth cap does not fail an op.** A `set_skill_level` above a cap succeeds, and the
engine quietly raises the player level until the skill fits: an `engine` diff row on
`playerLevel` plus a `player_level_raised` warning. The warning carries `requestedLevel`
(the last `set_player_level`), `resultingLevel`, a `message`, and `skills`, one row per
skill over a cap at the requested level: `skill`, `level`, `cap` (`growth` or `global`),
`maxAtRequestedLevel` (the level to lower it to), and `requiredPlayerLevel`. An empty
`skills` list means perks or budgets forced the raise instead. The warning needs a
`set_player_level` in the batch; without one, only the `engine` row shows the raise.
