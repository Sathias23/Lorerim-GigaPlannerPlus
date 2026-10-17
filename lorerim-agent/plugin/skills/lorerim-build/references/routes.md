# Level-by-level routes

Use this when the user wants the build levelled up one level at a time, not just the
finished build. One legal build at the level target does not prove the route: the growth
cap ("Leveling rules" in [ops.md](ops.md)) can break a level in the middle, and checkpoints
every few levels miss it. Only stepping one level at a time shows it.

## Plan offline, then verify

Draft the whole route before calling any tool, then have the engine check every level.
A greedy plan works:

1. **Perks with no `skillReq` first.** Take them in the first levels the perk points
   allow; they need no skill points, so early utility (basic potions, easy locks) comes
   at level 1.
2. **Each level, make the raises the route cannot skip.** A skill must be high enough now
   to reach a later perk's `skillReq` in time, given how far each level lets it grow.
3. **Spend the rest by priority**, round-robin within each priority group, one skill level
   at a time, never above either cap. Take the order from the user (see SKILL.md step 4).

Use the rules in [ops.md](ops.md) to draft. This plan is the one place you
do build arithmetic, and it is only a draft: a level is legal when the engine says so, and
the engine's budgets and `skillCaps` win over your numbers.

## Stepping

First draft level 1 as in SKILL.md step 3 (race, birthsign, traits, major and minor
skills, level-1 perks) and get it legal. Then make one `lorerim_apply_changes` call per
level, passing the previous step's `code`, with ops in this order:

1. `set_player_level` to this level.
2. `set_attribute_bonus` with the running totals (one more choice than the last level).
3. `set_skill_level` for each skill raised this level, to its route value.
4. `take_perk` for this level's perks.

A level passes only when all of these hold:

- `evaluation.legal` is `true`;
- `warnings` has no `player_level_raised` entry and the `diff` has no `engine` row on
  `playerLevel`; either one means the level **failed**, even with `legal: true`
  ([repair.md](repair.md) section C);
- skill points are fully spent: `evaluation.budgets.skillPoints.remaining` is below the
  lowest non-null `nextLevelCost` in `evaluation.skillCaps` (or every one is null).

Fix a failed level and re-run it before stepping on; every later level builds on it.

## Running batches in parallel

To check a long route faster, split it into batches of levels and run them side by side:

- Start each batch from a known-legal checkpoint `code` at the level before it, with that
  level's perks and attribute choices in place (from a coarser earlier pass, say).
- **Step 0** of each batch sets every skill to the route's value at that level, as
  `set_skill_level` ops only. It has no `set_player_level`, so no warning comes back:
  check its `diff` for an `engine` row on `playerLevel` instead. Then step forward as
  above.
- When the batches finish, check that each batch's final build matches the next batch's
  state after step 0 (see Comparing builds).

## Comparing builds

Never compare share codes: a code carries a timestamp, so the same build gives a
different string each time. Compare `evaluation.build` and `evaluation.budgets` instead.

## Presenting a route

Give one row per level: the skill raises, the perks taken, and the attribute choice. The
table may run past SKILL.md's 40-line limit; keep the rest of the summary to that format.
Give the share code and planner link for the final level, plus any checkpoint codes the
user asked for.
