---
id: granite-hill-quests
title: Granite Hill — A Plea From Granite Hill
kind: mod-added
category: town-quests
summary: Granite Hill restores the cut town of Granite Hill in Falkreath Hold and adds one quest, A Plea From Granite Hill. A courier letter (sent once Dragon Rising is complete) leads to a draugr ruin and a dragon under a shop. The reward is the Crossway Cottage player home.
mods:
  - name: Granite Hill - ESLIFIED LUX PATCH
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/14658
    version: 6.7.1.0
  - name: Granite Hill - Lux Via Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/14658
    version: 1.0.0.0
  - name: Granite Hill - Ryn's Dragon Mounds Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/14658
    version: 1.0.0.0
plugins: [aaaGraniteHill.esp, aaaGraniteHill - Lux Patch.esp, Granite Hill - Lux Via Patch.esp, Granite Hill - Ryn's Dragon Mounds Patch.esp, Granite Hill - Navmesh Fixes.esp]
quests: [A Plea From Granite Hill]
locations: [Granite Hill, Granite Hill Crawl Space, Crossway Cottage, Sheepshead Inn, Oddities & Curiosities, Crossroads Goods]
region: Falkreath Hold (vanilla GraniteHillLocation)
start: After you complete the main quest "Dragon Rising" (MQ104 — kill the dragon at the Western Watchtower), the next time you change location a courier delivers a "Letter from Granite Hill". No extra LoreRim gate; but if you never do Dragon Rising, the quest never starts (the non-Dragonborn level-10 variant is not the version LoreRim ships).
related: [areas/falkreath-hold.md, vanilla-changes/main-quest-and-alternate-start.md, mod-added/arena-markarth-side-quests.md, areas/new-dungeons.md]
sources: [1, 2, 3, 4, 5]
confidence: high
updated: 2026-10-02
---

# Granite Hill — A Plea From Granite Hill

Granite Hill restores a town that was "cut from the base game" [2]. It adds custom NPCs, an inn, shops, a fully equipped player home, and one quest that solves "the mystery plaguing the town in exchange for a new home" [2]. The mod reuses the vanilla `GraniteHillLocation`, a location record in `Skyrim.esm` whose parent is Falkreath Hold [3][5]. LoreRim ships it as *Granite Hill - ESLIFIED LUX PATCH*, version 6.7.1 of the main file plus the author's Lux lighting patch [1][4].

## Starting in LoreRim
- **Trigger:** The plugin's Story Manager node `GraniteHillSM` fires on a change-location event. Its one condition is `GetQuestCompleted` on `Skyrim.esm` quest `0002610C`, which is **MQ104 "Dragon Rising"** [3][5]. The quest stage then has the courier (WICourier) bring you a *Letter from Granite Hill*, addressed "Dragonborn!" [3].
- **In practice:** After you finish Dragon Rising, the Western Watchtower dragon quest, a courier will find you soon after your next change of location [2][3].
- **Not the non-Dragonborn version:** The Nexus page describes a separate version for non-Dragonborn playthroughs that starts after level 10 [2]. LoreRim's plugin carries the Dragon Rising condition, so that variant is **not** what LoreRim ships [3].
- **No LoreRim gate:** The LoreRim site does not mention Granite Hill [4], and no LoreRim plugin overrides the quest or its Story Manager node [4]. If your LoreRim start skips or delays the main quest, this quest waits until Dragon Rising is completed. See [main quest and alternate start](../vanilla-changes/main-quest-and-alternate-start.md).

## Quests
### A Plea From Granite Hill
- **Giver / trigger:** A courier hands you a note from John in Granite Hill [1][3]. The letter says John and his friend Privious found a crawl space under Privious' shop, *Oddities and Curiosities*. Behind a false wall it leads to an old Nordic chamber full of draugr and "something big… alive" [3].
- **Where:** Granite Hill, Falkreath Hold. The **Granite Hill Crawl Space** lies under the shop [1][3].
- **Steps:**
  1. Read the courier's note [1].
  2. Speak with John in Granite Hill ("I got this letter from you. What's going on?"). He gives you the crawl-space key [1][3].
  3. Explore the crawl space under the shop. It opens into an ancient ruin full of draugr [1].
  4. Speak with John about your journey through the ruins [1].
- **Twist:** At the bottom of the tomb you find and kill a dragon [1]. The *Crawl Space Note* explains that the ruin predates the dragon burial mound outside town, and that the town was built over a site of ancient dragon worship [3]. A script enables the dragon when you enter a trigger in the ruin [3]. John's dialogue also has a line about finding "your missing adventurer" [3].
- **Rewards:** John and the townsfolk give you the key to **Crossway Cottage**, a home in Granite Hill [1][3].

## Locations
- **Granite Hill** — the restored town on the vanilla `GraniteHillLocation` in Falkreath Hold [3][5]. A *Letter from Jarl Siddgeir* about late taxes confirms it falls under Falkreath [3].
- **Sheepshead Inn** — the town inn [1].
- **Oddities & Curiosities** — Privious' shop, with the crawl space beneath it [3].
- **Crossroads Goods** — a general store [3].
- **Granite Hill Crawl Space** — the quest dungeon: a Nordic ruin with draugr and a dragon [1].
- **Crossway Cottage** — the player home and quest reward [1]. The Nexus page says it is fully loaded and lets you move your family in [2].
- Lore background is in the readable book *The Traveler's Guide to Granite Hill* [3].

## Rewards & notable items
- Crossway Cottage and its key [1][3].
- The quest also gives you a dragon kill [1]. Whether the dragon drops a soul or bones was not checked.

## LoreRim notes
- **Patches:** LoreRim loads the author's Lux, Lux Via and Ryn's Dragon Mounds patches. It also loads Northern Roads patches, an eFPS occlusion patch, and its own `Granite Hill - Navmesh Fixes.esp` [4]. None of them overrides the quest or Story Manager records [4].
- **Adoption:** The Nexus page says that children and spouses living in the home need *Hearthfire Multiple Adoptions* [2]. No mod by that name was found in LoreRim's modlist [4].

## Related
- [Falkreath Hold](../areas/falkreath-hold.md)
- [Main quest and alternate start](../vanilla-changes/main-quest-and-alternate-start.md) (Dragon Rising timing)
- [Arena - Markarth Side quests](arena-markarth-side-quests.md) (same author)
- [New dungeons](../areas/new-dungeons.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest name, objectives, journal stages, new locations | LoreRim install: `aaaGraniteHill.esp` QUST/LCTN records (profile Default), via imports/mods/granite-hill-eslified-lux-patch.md | mod v6.7.1.0 | 2026-10-02 |
| 2 | mod features, published start conditions, non-DB variant, adoption note | [Nexus mod page 14658](https://www.nexusmods.com/skyrimspecialedition/mods/14658) via meta.ini cache | 2025-11-25 (nexusLastModified) | 2026-01-12 cache |
| 3 | actual start trigger (SMQN `GraniteHillSM`, GetQuestCompleted 0002610C), letter and note texts, dialogue, scripts | LoreRim install: `aaaGraniteHill.esp` SMQN/BOOK/DIAL records + bundled `Source/Scripts/*.psc`, parsed this run | mod v6.7.1.0 | 2026-10-02 |
| 4 | patches shipped, no overrides, no LoreRim gate | LoreRim install: profile Default modlist/plugins + scan of enabled plugins mastering `aaaGraniteHill.esp`; LoreRim site pre-fetch (no mention) | n/a | 2026-10-02 |
| 5 | 0002610C = MQ104 "Dragon Rising"; GraniteHillLocation parent = FalkreathHoldLocation | imports/official-quests.json; LoreRim install `Skyrim.esm` LCTN records | n/a | 2026-10-02 |
