---
id: leaps-of-faith
title: Leaps Of Faith
kind: mod-added
category: new-quests
summary: An always-active misc quest. Find 12 hidden high-dive spots across Skyrim and jump into the water below. Each jump gives fall-damage resistance, up to 50% for all twelve.
mods:
  - name: Leaps of Faith - A Misc Quest
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/53074
    version: f1.05
  - name: Valtheim 2.0 - Leaps Of Faith Patch
    nexus: null
    version: null
plugins: [LeapsOfFaith.esp, Valtheim-LeapsOfFaithPatch.esp]
quests: [Leaps Of Faith]
locations: []
region: Skyrim-wide (12 spots)
start: Nothing to do. The misc quest is start-game enabled. Find a high spot over water (look for feathers, nests, hawks, planks), wait for the message "I could probably land in the water from here...", then jump and land swimming in the water.
level_hint: "Late-game completionist (author)"
related: [mod-added/ascend-hidden-peaks.md, areas/new-landmarks-and-shrines.md]
sources: [1, 2, 3, 4]
confidence: medium
updated: 2026-10-02
---

# Leaps Of Faith

Leaps of Faith adds a misc quest, **Leaps Of Faith**, that tracks **12 high-dive spots** around Skyrim. When you jump from one of them, a custom jump-and-fall animation plays, and if you land in water the counter goes down [1][2]. The LoreRim site lists it under New Quests as "12 epic 'Leaps of Faith' across Skyrim for you to discover and complete as you play" [3].

## Starting in LoreRim
- The quest `Leap_MiscQuest` is **start-game enabled**, so nothing has to be done to start it [2].
- The author's intent is that you find the spots naturally. Clues include a few feathers, a nest, a hawk circling, a suspicious tree or a wooden plank by a cliff. When you stand at the edge of a real spot, a message appears: "I could probably land in the water from here..." [2]. The Nexus page quotes an older wording, "I could probably survive this fall" [1].
- LoreRim adds no extra gate [3][4].

## Quests
### Leaps Of Faith (`Leap_MiscQuest`)
- **Giver / trigger:** none (start-game enabled) [2].
- **Where:** 12 spots across Skyrim [1].
- **Steps:** the objective counts down from "Find and complete the remaining 11 Leaps of Faith." to "Find and complete the remaining 1 Leaps of Faith.", then "All Leaps of Faith completed." [2].
- **How a jump counts:** the mod checks two things. You must jump from the top, and you must land *swimming* in the water, not standing on it. There is a time window between jump and landing. If the quest does not advance, jump again and stay in the water for a second [1].
- **Difficulty:** the jumps vary, and all are doable at the default speed multiplier of 100. Mods that change movement speed can make some of them impossible [1].

## Locations
The Nexus page keeps the full list of 12 behind a spoiler that the cache does not include, and the live page was blocked (HTTP 403) [1]. The plugin edits these cells, which suggest where some of the spots are (medium confidence: an edited cell is not always a jump point) [2]:
- **Bard's Leap Summit** (cell `BardsLeapSummitExterior`). The author says the highest leap "is actually a VANILLA jump", almost twice as high as any other [1]. Bard's Leap Summit is probably that one, but this is unverified [2].
- **Valtheim Keep / Valtheim Towers** (cells `ValtheimKeepExterior01/02`). LoreRim ships a dedicated patch for Valtheim 2.0 [2][4].
- Cells near **Trevas Watch / Stalleo's Camp**, **Rockjoint Island**, the **Doomstone** area, the **Kagrenzel** interior, plus edits inside **Markarth** and **Solitude** worldspaces [2].

## Rewards & notable items
- Each completed jump gives a small, permanent **4% fall-damage resistance**. All 12 together reduce fall damage by 50% [1].

## LoreRim notes
- LoreRim ships **Valtheim 2.0 - Leaps Of Faith Patch** (`Valtheim-LeapsOfFaithPatch.esp`), so the Valtheim leap works with the Valtheim Towers overhaul [4].
- The custom animation needs Dynamic Animation Replacer or OAR. The quest works without them [1].
- Faster movement (sprint or speed buffs) changes jump distance [1].

## Related
- [ascend-hidden-peaks.md](ascend-hidden-peaks.md): a similar exploration activity (climb 10 hidden peaks)
- [../areas/new-landmarks-and-shrines.md](../areas/new-landmarks-and-shrines.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, reward, jump rules, FAQ | [Nexus mod page 53074](https://www.nexusmods.com/skyrimspecialedition/mods/53074) via meta.ini cache (live page HTTP 403) | n/a (cache refreshed 2026-01-11) | 2026-10-02 |
| 2 | quest name, start-game flag, objectives, message text, edited cells | LoreRim install: `LeapsOfFaith.esp` QUST/MESG/CELL records | mod vf1.05 | 2026-10-02 |
| 3 | LoreRim listing | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 4 | patch shipped, enabled plugins | LoreRim install: `mods/Valtheim 2.0 - Leaps Of Faith Patch/`, `profiles/Default/plugins.txt` | n/a | 2026-10-02 |
