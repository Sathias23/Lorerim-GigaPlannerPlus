# LoreRim build lessons not yet in the `lorerim-build` skill

These notes come from building *Sepitaph, Mark 2* (a Dunmer thief and assassin, level 50) with the lorerim MCP tools on 2026-10-17. Each item is something the skill (`SKILL.md`, `references/ops.md`, `references/repair.md`) doesn't say, or says in a way that misled the work.

Each item gives its source:
- **[user]**: the user corrected me.
- **[data]**: read from `data/game/mechanics.json` or the engine source.
- **[engine]**: what `lorerim_apply_changes` or `lorerim_evaluate_build` returned.

## 1. Skills grow by spending points, and every point should be spent

- **[user]** **Skills don't level up with use in LoreRim.** They only rise when you spend skill points. Never write "level it by use" or "if a skill lags" in a guide.
- **[user]** **Banked skill points are a nerf.** A route that only raises each skill to its next perk requirement ended at level 50 with 630 of 1470 points unspent, and the user rejected it. The default should be to spend every skill point at the level it's earned. Use the user's priorities to decide where points beyond perk requirements go, and ask when the playstyle doesn't settle it.
- The skill's step 4 only covers *perk* points: "spend those points on more perks". It should give the same instruction for skill points.

## 2. Skill point rules

**[data]** From `data/game/mechanics.json` (`leveling`), confirmed by **[engine]** budgets:

| Rule | Value |
|---|---|
| Skill points | 30 per level from level 2. Level 1 has 0. |
| Cost per skill level | 1 up to 25, 2 for 26–50, 3 for 51–75, 6 for 76–100. The cost depends on the level being bought. |
| Floor (free levels) | Race starting value, +10 for a major skill, +5 for a minor skill. Levels up to the floor cost nothing (`skillPointFreeThroughFloor`). |
| Growth cap per skill | **floor + 5 × (player level − 1)**, from `skillLevelIncreasesPerPlayerLevel: 5` and `playerLevelSkillBaseline: "skillFloor"`. |
| Global cap | min(100, 50 + player level), from `maxSkillAbovePlayerLevel: 50`. |
| Training levels | 5 per level, tracked separately, with a training cap of 90. The ops can't spend them. |

Example floors for a Dunmer with Sneak, One-Handed and Evasion as majors and Finesse, Alchemy, Illusion and Wayfarer as minors:
- Sneak, One-Handed, Evasion: 20
- Illusion: 15
- Finesse, Alchemy, Wayfarer: 5
- Marksman: 0. It isn't tagged, so its levels aren't free.

**The growth cap is the trap.** The skill never mentions it.
- **[engine]** When a `set_skill_level` breaks the growth cap, `lorerim_apply_changes` doesn't fail and doesn't report a `skill_increase_limit` violation. It quietly raises the player level and adds a diff row with cause `engine` and field `playerLevel`.
- Example: Marksman 0→15 at level 2 pushed the build to level 4. The result still came back `legal: true`, just at the wrong level.
- `repair.md` lists `skill_increase_limit` as a violation type, but on the apply path the engine adjusts the level instead (`ensureMinimumPlayerLevel` in `src/engine/buildEngine.ts`).
- When planning a route, treat any `engine` playerLevel row as a failed level, not a pass.

## 3. Other per-level budgets

**[engine]**

- **Perk points:** 3 at level 1, then 1 per level, so 52 at level 50.
- **Destiny perk points:** 1 each at levels 1, 5, 10, 15, 20, 25 and 30, so 7 in total. They're a separate budget from perk points.
- **Attribute choices:** 1 per level from level 2, so player level − 1 in total. `set_attribute_bonus` fails if the split totals more than that, for example 2 choices at level 2.

## 4. Verifying a level-by-level route

- **One legal level-50 build doesn't prove the route.** Users want a level-by-level plan. Even checkpoints every 5 levels didn't catch the growth cap; only stepping one level at a time did.
- **How to step:** one `lorerim_apply_changes` call per level, with `set_player_level` first, then `set_attribute_bonus`, then that level's `set_skill_level` raises, then that level's `take_perk`.
- **Check every step for:** `legal: true`, no `engine` playerLevel rows, and skill points remaining below the cost of the next skill level.
- **Running batches in parallel:** start each batch from a known-legal checkpoint code. Its first call should set every skill to the route's value at that level, as `set_skill_level` ops only. Then step forward. Check that each batch's final skill levels match the next batch's starting state.
- **Compare builds, not share codes.** Codes include a gzip header timestamp, so identical builds produce different strings. Compare `evaluation.build` and the budgets.
- **Plan offline, then verify.** A greedy planner worked:
  - Each level, first make the raises the route can't skip. A skill needs at least `req − 5 × (byLevel − L)` now to reach a later requirement in time.
  - Then spend the rest by priority group, round-robin, one skill level at a time, within both caps.
  - Then have the engine verify every level.
- **Put no-requirement perks first.** Perks with no `skillReq` (Alchemical Lore, Cheap Tricks, Ranged Combat Training, Nimble Fingers, Novice Illusion) can go in the first levels. That made "basic potions and locks at level 1" possible.

## 5. Things the planner doesn't model, which a guide must say

- **[user]** **Fill every trait slot.** The user flagged a build with one trait ("there is only one trait listed"); builds have two slots by default. The Sovngarde Bonus Trait option adds a third.
- **Quest gates aren't modelled.** For example, the planner accepts Sithis as deity, but in game it needs *Innocence Lost* completed. Say so in the guide and suggest what to follow before then.
- **Start position.** LoreRim replaces the Helgen opening with **Alternate Perspective**. `lorerim_search_quests` has the start-menu list. For a Windhelm refugee the start is From Overseas → Windhelm Docks. Without a Dragonborn start the main quest waits until you rent a room at The Resting Pilgrim in Helgen ("Start Intro").
- **Data the tools don't have:**
  - which lock tier a given lockpicking expertise opens
  - spell lists
  - gear stats

  Mark claims about these as unverified.
- **Weapon-type limits in perk text.** Read them before recommending a perk. For example, Sniper only boosts heavy bows and crossbows; Ranger is the light-bow equivalent.

## 6. Trading perks in a full build

- **Freeing a point removes everything that depends on it.** At 52/52 perk points, removing a perk to free a point also removes its dependents. Removing Acrobatics also removed Shadowrunner, so the swap freed one point but lost two perks.
- **Pick swap candidates by effect.** Look up each candidate with `lorerim_get_entity` first: prerequisite-only perks can have their own value. Dexterity looked like filler but adds bow dodging.

## 7. Tool bug: planner link domain

- **[user]** `plannerUrl` uses the wrong domain. The tools return `https://sathias23.github.io/...`, but the correct host is `https://watchis.github.io/...`.
- The source is `DEFAULT_PLANNER_URL` in `lorerim-agent/server/plannerLink.ts`, and `server/tools/evaluateBuild.test.ts:645` uses the same domain.
- Until it's fixed, guides have been changing only the domain by hand. Rule 5 of the skill says never to edit a link, so this exception conflicts with it.

## Suggested skill changes

1. **`SKILL.md` step 4:** spend all skill points as well as perk points. Ask for, or infer, a priority order for the points beyond perk requirements.
2. **`ops.md`:** add a "Leveling rules" section with the table in §2, including the growth cap and its silent player-level raise.
3. **`repair.md`:** say that on the apply path, breaking the growth cap shows up as an `engine` playerLevel raise, not a `skill_increase_limit` violation, and how to undo it. Lower the skill to floor + 5 × (level − 1).
4. **New reference for level-by-level plans:** per-level stepping, the order of ops, the batch "step 0" pattern, comparing builds instead of codes, and the default attribute order. The order used here was Health, Stamina, Health, Stamina, Magicka in each 5-level block, with no Magicka in levels 2–5.
5. **`SKILL.md` step 5:** fill every trait slot, flag quest-gated choices such as deities, cover the start position, and never describe skills as levelling by use.
6. **`plannerLink.ts`:** fix the domain so the skill's "never edit a link" rule can hold.
