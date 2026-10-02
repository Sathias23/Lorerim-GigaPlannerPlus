---
id: arena-markarth-side-quests
title: Arena - Markarth Side (town quests)
kind: mod-added
category: town-quests
summary: 'Arena - Markarth Side adds the town of Markarth Side (from TES: Arena) south-east of Dragon Bridge, with eight shops, a buyable player home (Cliffside Manor, 3000 gold) and two short voiced side quests, The Lost Family Relic and The Royal Relic. No LoreRim-specific gates.'
mods:
  - name: Arena - Markarth Side Town
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/114252
    version: 1.7.0.0
  - name: Arena - Markarth Side Lux Patch - ESLIFIED - UNDELETED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/114252
    version: 1.0.0.0
plugins: [Arena - Markarth Side.esp, Arena - Markarth Side Lux Patch.esp, Northern Roads - Markarth Side Town Patch.esp]
quests: [The Lost Family Relic, The Royal Relic]
locations: [Markarth Side, The Kings Rest, The Boiling Cauldron, The Silverspoon Trading Company, Iron Maidens, Healers and Dealers, The Splended Spool, Markarth Side Barracks, Cliffside Manor, Morvunskar Crypts]
region: Hjaalmarch (south-east of Dragon Bridge); Morvunskar Crypts in Eastmarch
start: No LoreRim gate. The Lost Family Relic — talk to Varimo at The Boiling Cauldron magic shop ("You seem a bit upset…"). The Royal Relic — talk to the Khajiit Grit-dar behind/at The Kings Rest inn ("What are you doing creeping around back here?").
related: [areas/hjaalmarch-and-morthal.md, areas/eastmarch-and-windhelm.md, areas/new-dungeons.md, mod-added/granite-hill-quests.md]
sources: [1, 2, 3, 4, 5]
confidence: high
updated: 2026-10-02
---

# Arena - Markarth Side (town quests)

*Arena - Markarth Side*, by the author behind the Skyland community and Granite Hill, recreates Markarth Side, a town from *The Elder Scrolls: Arena*, south-east of Dragon Bridge [2]. It has eight shops, a barracks and guards, an inn with a bard, custom NPCs, and a player home you furnish through a menu [2]. Version 1.5 added two quests with custom-voiced NPCs and a quest dungeon [2]. The plugin's town location sits under Hjaalmarch Hold, and the quest dungeon sits under Eastmarch [3][5].

## Starting in LoreRim
- No LoreRim-specific gate was found. The LoreRim site does not mention the mod [4], and no LoreRim plugin overrides its quests [4]. Both quests are start-game-enabled and begin through dialogue [1][3].
- **The Lost Family Relic:** talk to Varimo at The Boiling Cauldron, using the topic "You seem a bit upset, anything I can help you with?" [1][3]
- **The Royal Relic:** talk to Grit-dar at the Markarth Side inn. The opening topic is "What are you doing creeping around back here?" [1][3]

## Quests
### The Lost Family Relic
- **Giver:** Varimo, owner of the magic shop in Markarth Side. Journal entries also spell him "Verimo" [1].
- **Steps:** 1. Find the missing employee who ran off with an old family relic, and retrieve the relic [1]. 2. Return the amulet to Varimo [1].
- **Twist:** You find the employee as a dead draugr carrying an *amulet of necromancy*. You can confront Varimo with "I've found your amulet of necromancy. We need to talk." and threaten to turn him in [1][3].
- **Outcome:** Varimo confesses an interest in necromancy and swears never to practice again. He gives you the amulet and gold in exchange for your discretion [1]. Where the employee is found is not named in the journal (unverified).

### The Royal Relic
- **Giver:** Grit-dar, "a strange Khajiit" at the Markarth Side inn. He is not a skooma dealer, though the dialogue lets you accuse him of being one [1][3].
- **Where:** **Morvunskar Crypts**, near Windhelm. This is a new dungeon added for this quest [1][2].
- **Steps:** 1. Find the missing royal relic in Morvunskar Crypts [1]. 2. Return to Grit-dar at the inn [1].
- **Rewards:** 500 gold, and Grit-dar says you can use him as a recommendation for future work [1]. The turn-in line "I have returned with your third piece" suggests the relic is one piece of a larger set [3]. The quest script names it a crown (`MarkarthSideGritDarQuestCrown`), which is inferred from the script filename only (unverified).

## Locations
- **Markarth Side** — the town, south-east of Dragon Bridge [2]. Its parent location is Hjaalmarch Hold [3][5].
- **The Kings Rest** — the inn. Version 1.5 unblocked its side door [1][2].
- **Shops:**
  - The Boiling Cauldron (magic)
  - The Silverspoon Trading Company (general store)
  - Iron Maidens (blacksmith)
  - Healers and Dealers (alchemy)
  - The Splended Spool (clothing)

  [1]
- **Markarth Side Barracks** [1].
- **Cliffside Manor** — the player home. Buy it for 3000 gold, then add rooms from a ledger at 800 gold each [3]. The Nexus page lists all crafting stations, a garden, and room for 2 children, a spouse and a follower [2].
- **Morvunskar Crypts** — the quest dungeon. Its parent location is Eastmarch Hold [3][5].

## Rewards & notable items
- The Lost Family Relic gives the amulet of necromancy and gold [1].
- The Royal Relic gives 500 gold [1].

## LoreRim notes
- LoreRim ships the ESL-flagged Lux lighting patch, *Arena - Markarth Side Lux Patch*, and *Northern Roads - Markarth Side Town Patch* [4]. Neither touches quest records [4].
- The mod is listed under LoreRim's "Locations - New and Vanilla Overhauls" separator [1].

## Related
- [Hjaalmarch and Morthal](../areas/hjaalmarch-and-morthal.md)
- [Eastmarch and Windhelm](../areas/eastmarch-and-windhelm.md) (Morvunskar Crypts)
- [New dungeons](../areas/new-dungeons.md)
- [Granite Hill quests](granite-hill-quests.md) (same author's other town)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal stages, location names | LoreRim install: `Arena - Markarth Side.esp` QUST/LCTN records (profile Default), via imports/mods/arena-markarth-side-town.md | mod v1.7.0.0 | 2026-10-02 |
| 2 | town features, 1.5 update notes, location | [Nexus mod page 114252](https://www.nexusmods.com/skyrimspecialedition/mods/114252) via meta.ini cache | 2025-10-24 (nexusLastModified) | 2026-01-11 cache |
| 3 | dialogue prompts, house price, location parents | LoreRim install: `Arena - Markarth Side.esp` DIAL/MESG/LCTN records and script filenames, parsed this run | mod v1.7.0.0 | 2026-10-02 |
| 4 | patches shipped, no quest overrides, no LoreRim gate | LoreRim install: profile Default modlist/plugins + scan of enabled plugins mastering the mod; LoreRim site pre-fetch (no mention) | n/a | 2026-10-02 |
| 5 | resolving parent location IDs (HjaalmarchHoldLocation, EastmarchHoldLocation) | LoreRim install: `Skyrim.esm` LCTN records (Stock Game) | n/a | 2026-10-02 |
