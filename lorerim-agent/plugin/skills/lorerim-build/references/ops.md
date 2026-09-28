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
   level is below the skill's floor, the skill already starts high enough: drop the op.
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
