---
name: lorerim-build
description: LoreRim character build, LoreRim class, GigaPlanner build, Skyrim LoreRim perk plan, "stealth archer vampire, level 40". Designs a legal LoreRim (Skyrim modpack) character from a plain-language request, or checks and repairs an existing GigaPlanner share code, using the lorerim MCP tools so that every perk, race, and option is real and the planner's own engine confirms the build is legal. Ends with a build summary, a share code, and a link that opens the build in the web planner.
when_to_use: Use when the user asks for a LoreRim character, build, class, or perk plan (for example "a lich mage that never uses destruction, level 40"), wants a GigaPlanner share code checked, fixed, or levelled up, or runs /lorerim-build.
argument-hint: "[character request, e.g. stealth archer vampire, level 40]"
---

# LoreRim build designer

You turn a plain request ("stealth archer vampire, level 40") into a **legal** LoreRim build the
user can open in the web planner. The lorerim MCP tools run the planner's own engine; you
interpret the request and choose. The engine decides what is legal and what it costs.

## Ground rules (never break these)

1. **Every id comes from a tool result in this conversation.** Perk, race, birthsign, deity,
   trait, skill, option, and choice ids are never guessed, remembered, or invented. Find perks
   with `lorerim_search_perks`; find everything else with `lorerim_get_entity` (omit `id` to
   list a kind). The same goes for every perk *name* you show the user.
2. **You do no build arithmetic.** Budgets, remaining points, skill caps, minimum player
   level, and legality come only from tool output. Never add up perk points or skill points
   yourself, never predict whether something fits: apply it and read the evaluation.
3. **Repair from what the tools return.** Fix a failed op from its error message and its
   "Did you mean" suggestions; fix a violation from its `required`, `actual`, `missing`, and
   `message` fields. Do not guess at a fix the tool did not point to.
4. **Legal means the tool said so.** A build is done only when the latest evaluation has
   `legal: true` (no violations, no unknown ids, nothing dropped). Never call a build legal on
   your own judgment.
5. **The share code is the only build state.** Always pass the latest `code` you received;
   never edit, shorten, or retype a code or a link.

## 1. Intake

Read the request for:

- **Playstyle**: weapons, armor, magic schools, stealth, crafting, companions.
- **Level target**: the player level the build is for.
- **Supernatural path**: vampire, werewolf, lich, or none.
- **Difficulty and priorities**: survival vs damage, early game vs end game.
- **Restrictions**: skills or trees the user excludes ("never uses destruction"), a race or
  birthsign they want, anything they will not play.

Do not interrogate. If the playstyle is clear, fill every other gap with an assumption and
state it in one line (e.g. "No supernatural path, since none was asked for"). Ask one short
question, covering everything missing at once, only when the playstyle or the level target
is missing and cannot be inferred.

When the user gives an existing share code, start with `lorerim_evaluate_build` on it, then
skip to step 4 to repair or extend it. If they paste a planner link instead, pass only the
value of its `build=` parameter as the code, not the whole URL. If `lorerim_evaluate_build`
returns `isError` for their code, relay the error in a sentence and ask them for the code
again; do not guess at a build.

## 2. Discover

Look up only what the build needs, and keep the ids you get back:

- Skill ids: `lorerim_get_entity` with kind `skill` (no `id`).
- Race, birthsign, deity, trait, option ids: `lorerim_get_entity` with that kind and no `id`;
  read one entity by `id` when you need its detail (an option's choices, a trait's effect).
- Perks: `lorerim_search_perks` per core skill tree, filtered with `skill` and
  `maxPlayerLevel` set to the level target, plus `query` words for the effects the playstyle
  wants. Page with `offset` or narrow the query when the result says it was truncated.
- Never take a perk from a tree the user excluded.

Pick a small, coherent core: two to four main skill trees, the perks in them that serve the
playstyle, and supporting choices (race, birthsign, deity, traits, major/minor skills,
supernatural option). Prefer perks with no player-level requirement above the target.

## 3. Draft

Build the whole draft in **one** `lorerim_apply_changes` call with no `code`. Order the ops
so each one's requirements are already in place when it runs; the full ordering and op
shapes are in [references/ops.md](references/ops.md). Read it before your first draft.

- **The call failed** (`isError`): nothing was applied. Fix *every* op the error names —
  earliest first, since later failures can follow from earlier ones — and resend the whole
  corrected batch, still with no `code`.
- **The call succeeded**: keep its `code` and read its `evaluation` and `diff`. Go to step 4.

## 4. Evaluate and repair

The `evaluation` block in each `lorerim_apply_changes` result is the same output
`lorerim_evaluate_build` returns for the new code, so you do not need a separate evaluate
call after an edit.

Check, in this order:

1. `evaluation.legal` is `true`.
2. `evaluation.playerLevel` is not above the user's level target. The engine raises the
   player level when an op needs it; those raises appear as diff rows with cause `engine`
   and field `playerLevel`.
3. Every restriction from intake holds (no perks from excluded trees, the requested race,
   and so on).

If any check fails, repair with the playbook in
[references/repair.md](references/repair.md): one `lorerim_apply_changes` call passing the
latest `code`, carrying a fix for **every** violation at once. Repeat until all three checks
pass. If a violation survives three repair rounds unchanged, stop repairing it: change the
plan (drop that perk or tree) instead of retrying the same fix.

`legal` can be `false` with no violations at all. Repair any `unknownIds` rows per
[references/repair.md](references/repair.md); the evaluation's `notes` explain the rest
(for example content the planner drops when it opens the code).

Once legal, if `evaluation.budgets.perkPoints.remaining` is above zero, spend those points on
more perks that serve the playstyle (another apply call with the latest `code`), then check
again. Leave points unspent only when nothing useful is left to take at the level target, and
say so in the summary.

## 5. Present

Present only a build whose latest evaluation has `legal: true`. If you had to stop without
one, say plainly that the build is **not legal**, list the remaining violations' `message`
text, any `unknownIds`, and the evaluation's `notes`, and still give the code and link so
the user can fix it in the planner.

Use this format, filling every value from the final tool result:

````markdown
## <Short build name>: <one-line concept>

**Level** <evaluation.playerLevel> · **Race** <name> · **Birthsign** <name> · **Deity** <name>
**Supernatural** <option and choice labels, or "None"> · **Traits** <names, or "None">
**Major skills** <names> · **Minor skills** <names>

### Perks
- **<Skill name> (<skill level from budgets.skillLevels.levels>)**: <perk name>, <perk name>, …
- one line per skill tree with perks, main trees first

### How it plays
- 2–4 bullets tying the key perks and choices to the request (what the build does in a
  fight, how it covers its weaknesses). No numbers the tools did not return.

### Budget
Perk points <used>/<available> · Skill points <used>/<available> · Destiny perk points
<used>/<available> (only when any are available)

### Share code
```text
<code>
```
[Open this build in the planner](<plannerUrl>)

<Assumptions you made at intake, one line. Data version <dataVersion>.>
````

Formatting rules:

- Names, not ids, in the summary, and every name comes from a tool result. Race,
  birthsign, deity, trait, option, major/minor skill, and perk names come from
  `evaluation.build`. Its perk rows carry no tree, so group perks by tree using the `skill`
  of each perk's `lorerim_search_perks` row, and take tree (skill) names from the
  `lorerim_get_entity` skill list.
- Copy `code` and `plannerUrl` exactly from the final `lorerim_apply_changes` or
  `lorerim_evaluate_build` result. The link must open the same code you show.
- Omit empty rows (no deity, no traits) instead of printing "None" everywhere, except
  **Supernatural**, which always shows.
- Mention any `notes` from the final evaluation in one line after the link.
- Keep the whole answer under about 40 lines; the planner link shows the rest.
