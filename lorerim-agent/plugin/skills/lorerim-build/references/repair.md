# Repair playbook

Two kinds of feedback come back from the tools. Fix both from the fields the tools return,
never from your own arithmetic, and fix **all** of them in one call rather than one per round.

## A. A `lorerim_apply_changes` call failed (`isError`)

Nothing was applied and no code came back. The error lists each failing op by its 0-based
index. Fix every listed op, earliest first, then resend the **whole** batch (with the same
`code`, or none for a fresh build).

| The error says | Fix |
|---|---|
| an id was not found, with "Did you mean" | Use one of the suggested ids if it is what you meant; otherwise look the id up again with `lorerim_search_perks` or `lorerim_get_entity`. Never retry the same id. |
| a choice is not a choice of that option | Use a choice id the error lists, or read the option with `lorerim_get_entity`. |
| `take_perk`: a prerequisite is missing | Add `take_perk` for each named prerequisite before it, or drop the perk. |
| `take_perk`: a skill level is short | Add or raise `set_skill_level` for that skill before it, to the required level the error names. |
| `take_perk`: a player level is short | If the required level is within the user's level target, raise `set_player_level` (first op); otherwise drop the perk. |
| `take_perk`: perk points over budget | The build has run out of perk points at this level: drop the least important perks (usually the last ones in the batch). |
| `take_perk`: a later rank | Take the rank the error names first, or drop the later rank. |
| a skill is over the major/minor limit or in both lists | Shorten the list or move the skill, as the error says. |
| a level or attribute is out of range | Use a value inside the range the error gives. |
| a trait is blocked or the trait limit is reached | Pick another trait, or drop one, as the error says. |

## B. The call succeeded but the evaluation has violations

Pass the latest `code` and one op batch that fixes every violation. Each violation has a
`type`, the `entity` it concerns, `required`, `actual`, `shortfall`, sometimes `missing`,
and a `message` that names its own fix.

| `type` | Fix |
|---|---|
| `perk_points` | Remove the perks that serve the playstyle least (`remove_perk`; perks that depend on a removed one go with it, shown as `engine` rows). Raise `set_player_level` only while it stays within the user's level target. |
| `destiny_perk_points` | Remove the Destiny perks the message names, or raise the player level within the target. |
| `skill_points` | Lower `set_skill_level` on skills that are higher than their perks need, or remove the high-requirement perks that forced them up. |
| `training_levels` | The ops cannot change training; raise the player level within the target, or tell the user this code's training needs the planner. |
| `skill_requirement` | `set_skill_level` for the violation's `skill` to its `required` value, or remove the perk (`entity`). |
| `skill_level_cap` | `set_skill_level` for that skill down to `required` (the cap), then remove perks whose `skillReq` no longer fits, or raise the player level within the target. |
| `skill_increase_limit` | Lower the skill, or raise the player level to `required` if that is within the target. |
| `player_level_requirement` | Raise the player level to `required` if within the target; otherwise remove the perk. |
| `attribute_choices` | `set_attribute_bonus` with a smaller split. |
| `prerequisite` | `take_perk` each perk in `missing` (for a "one of" list, pick one), or remove the perk. |

`unknownIds` rows (only for a code the user brought) name ids the current data does not
know, each with `suggestions`. Replace each with a suggestion that fits, or drop it.

## Staying on target

- The user's level target is a hard limit. When the engine has raised `playerLevel` above
  it (diff rows with cause `engine` and field `playerLevel`), undo the cause: lower the skill
  levels or remove the perks that forced the raise, then `set_player_level` back to the
  target.
- Prefer removing a perk over raising a level the user did not ask for.
- Removing a perk also removes the perks that depend on it. Read the `engine` rows in the
  `diff` so you know what else left the build.
- After three rounds that do not shrink the violation list, change the plan (drop a whole
  tree, pick a cheaper perk line) rather than repeating the same fix.
