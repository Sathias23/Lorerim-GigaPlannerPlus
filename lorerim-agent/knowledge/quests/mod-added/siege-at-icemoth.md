---
id: siege-at-icemoth
title: Siege at Icemoth
kind: mod-added
category: new-lands
summary: "A small, vanilla-style new land called the Hjorkvild Isles, in the Sea of Ghosts far north of Solitude and Jehanna. You travel there to stop the necromancer Silas Marceau at the abandoned Fort Icemoth. It adds four quests, a dragon priest barrow, a Black Book, the Plague Breath shout, and items from The Elder Scrolls: Blades."
mods:
  - name: Siege at Icemoth
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/109541
    version: 1.4.2.0
  - name: Siege at Icemoth - Fishing Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/109541
    version: 1.0.1.0
  - name: Metallurgy - Siege at Icemoth
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/124223
    version: 1.0.0.0f
plugins: [Siege at Icemoth.esp, Siege at Icemoth0.esp, HYORFishingIntegrationPatch.esp, Ferries - Siege At Icemoth Addon.esp]
quests: [Siege at Icemoth, The Topaz Claw, Caches of Skorjan Iron-Beard, "Black Book: The Font of Memory"]
locations: [Hjorkvild Isles, Old Wooden Jetty, Fort Icemoth, Fjolgen, Hjaalskar's Point, Winter Shroud Sanctum, Abandoned Fishing Hut, Eyndis' Folly, Northern Grace, Frostcaller Cave, Rimewind Grotto, Ghoruun Hall, Saervild's Trench, East Empire Company Warehouse, Apocrypha]
region: Sea of Ghosts, north-west of Skyrim (far north of Solitude and Jehanna). The departure point is the Old Wooden Jetty at the far north-west corner of Haafingar.
start: Go west from Northwatch Keep to the Old Wooden Jetty on Skyrim's north-western beach. Find the dead mercenary beside the beached sailboat and read the Waterlogged Journal in his inventory. That starts "Siege at Icemoth" and makes the boat usable. LoreRim adds no level or quest gate.
related: [areas/hjorkvild-isles.md, areas/haafingar-and-solitude.md, mod-added/wyrmstooth.md]
sources: [1, 2, 3, 4, 5, 6, 7]
confidence: high
updated: 2026-10-02
---

# Siege at Icemoth

Siege at Icemoth adds the **Hjorkvild Isles**, a new worldspace of islands in the Sea of Ghosts [1]. You follow a mercenary band hired by Marus Antonius to find the **Band of the Wraith**, a ring now held by the necromancer **Silas Marceau**, who has taken over the long-abandoned imperial naval fort **Fort Icemoth** [2]. The mod adds new dungeons, a Black Book, a voiced shout, and items and a skeleton variant from *The Elder Scrolls: Blades* [2]. The LoreRim site calls it "a small scale vanilla-esque new lands mod" [3].

## Starting in LoreRim
- **How to start:** go to the **Old Wooden Jetty** on Skyrim's north-western beach, or head west from **Northwatch Keep** until you reach it [2][3]. Read the **Waterlogged Journal** in the dead mercenary's inventory. This starts *Siege at Icemoth* and makes the boat at the jetty usable [2][3].
- **LoreRim gates:** none. The LoreRim site gives the same start as the mod page with no extra prerequisite or level requirement [3]. No LoreRim plugin overrides the mod's quest records (`HYOR*`) [6].
- **Ferry access in LoreRim:** LoreRim enables *Skyrim Ferries*' `Ferries - Siege At Icemoth Addon.esp`. It places "Rowboat" and "Floating plank" activators in the Fjolgen and Fort Icemoth exterior cells [5]. This suggests a Ferries route to and from the isles, but the destinations and conditions are unverified.

## Quests
Quest names and objectives come from the plugin records [1].

### Siege at Icemoth
- **Trigger:** read the Waterlogged Journal on the mercenary's corpse by the beached sailboat [1][2]. The journal mentions an old abandoned Imperial fort "far north of Jehanna just over the horizon" and a large undead presence [1].
- **Steps:** 1) Travel to Fort Icemoth. 2) Deal with the source of undead at Fort Icemoth [1].
- **Outcome:** you defeat the necromancer **Silas Marceau** and his undead army [1]. He holds the Band of the Wraith [2].

### The Topaz Claw
- **Trigger:** Silas's journal mentions an ancient Nord dragon-claw key [1].
- **Steps:** 1) Obtain the **Topaz Dragon Claw**, a silver-and-topaz claw found among Silas's belongings. 2) Find a use for it: it opens a portcullis in an ancient Nord barrow on the main island. 3) Find the secret of **Winter Shroud Sanctum** [1].
- **Outcome:** you defeat the dragon priest **Tovinaan** at the end of Winter Shroud Sanctum [1]. A dragon priest mask named *Tovinaan* exists as an item [7].

### Caches of Skorjan Iron-Beard
- **Steps:** 1) Read *The Caches of Skorjan Iron-Beard*. 2) Travel to the Old Wooden Jetty. 3) (Optional) Investigate the dead mercenary. 4) Locate the hidden cache near the Old Wooden Jetty [1].
- **How you get the book:** a courier letter from **Lucan Valerius** delivers a copy: "Thank you again for retrieving the claw…" [7]. This implies it arrives after vanilla *The Golden Claw*, but the courier's exact trigger conditions are unverified. In the book, a pirate cache is rumoured to be "near an old wooden jetty to the far northwest corner of Haafingar Hold" [7].

### Black Book: The Font of Memory
- **Steps:** reading the book sends you to Hermaeus Mora's realm of **Apocrypha**. Uncover the hidden knowledge, or read the book again to escape [1].
- **Rewards:** the plugin defines three Black Book powers: **Omen of Warding**, **Omen of Immobility** and **Omen of Gluttony** [7]. Based on how vanilla Black Books work, you probably choose one, but that is unverified for this mod. Where the book is found is not stated in the sources read.

## Locations
Location records from the plugin [1]:
- **Hjorkvild Isles** (worldspace `BSKHyorkerIsle`): the archipelago [1]. UESP describes it as "far to the north of Solitude and Jehanna" [4].
- **Old Wooden Jetty**: the departure point on Skyrim's north-western beach, west of Northwatch Keep [2].
- **Fort Icemoth**: a small Imperial naval fort abandoned about 20 years ago. It once protected East Empire Company whale-product trade with the Nords of **Fjolgen** [2]. Interior cells include Fort Icemoth Dungeons and Storage Room [7].
- **Fjolgen**: the local Nord settlement [2].
- **Winter Shroud Sanctum**: the dragon priest barrow from *The Topaz Claw*. It has a Winter Shroud Catacombs cell [1][7].
- **East Empire Company Warehouse**, **Hjaalskar's Point**, **Abandoned Fishing Hut**, **Eyndis' Folly**, **Northern Grace**, **Frostcaller Cave**, **Rimewind Grotto**, **Ghoruun Hall**, **Saervild's Trench** [1].
- **Apocrypha**: the Black Book's realm (`HYORBook08DungeonLocation`) [1].
- *The Mearl Pearl* is Marus Antonius's small ship. It has its own cell [7].
- Shown in-game on the *Siege at Icemoth Paper Map for FWMF* in LoreRim [5].

## Rewards & notable items
- **Band of the Wraith**: the ring Silas carries [2]. In LoreRim the winning record (`LoreRim - ISC Patches.esp`) reads: "Magicka regenerates 50% faster. Conjuration spells cost 20% less to cast, and when health is low, has a chance to summon up to two Corrupted Shades." The base mod's value is 30% regeneration [7].
- **Crimson Kiss** (ring): "In a chest beside the rear end of Eyndis' Folly (in a small rock opening in the sea floor)" [2].
- **Cascadia** (ring), **Watcher's Blade**, **Watcher's Helm**, **Steel Soldier Shield**, **Iron Quarterstaff**: Blades-inspired items [4][7].
- **Plague Breath** shout: three Words of Power, *Su*, *P8k* and *V3r* in the plugin's dragon script ("Your breath is toxic, you Thu'um a plague.") [7]. The mod page calls it a properly voiced new shout [2]. UESP does not give the word wall locations [4].
- **Conjure Corrupted Shade** spell record [7].
- **Mithril Ingot**: LoreRim's *Metallurgy - Siege at Icemoth* retextures it (textures only, no plugin) [2].

## LoreRim notes
- **Item rebalance:** besides the Band of the Wraith change above, LoreRim's `LoreRim - Armor Merges.esp` overrides the Watcher's Helm, Steel Soldier Shield and Tovinaan mask. `Requiem for the Indifferent.esp` (Reqtificator) and the Synthesis outputs override the Watcher's Blade and Iron Quarterstaff [6]. Stats follow Requiem/LoreRim rather than the mod page.
- **Fishing:** `HYORFishingIntegrationPatch.esp` requires the CC Fishing master and adds about 67 references across 31 Hjorkvild Isles exterior cells, presumably fishing spots for CC Fishing (inferred from the masters and cell names) [5].
- Other LoreRim compatibility plugins for the isles: `Siege at Icemoth Occlusion addon.esp`, `GKBWavesRE-SiegeatIcemoth.esp` and a Lux patch [6].
- The mod page suggests enabling CC zombies and Arcane Archer content for extra challenge, and calls the isles fully navmeshed and follower friendly [2].
- **Not to be confused with Wyrmstooth.** Wyrmstooth is a separate island north of Solitude with its own LoreRim gates (see related) [3].

## Related
- [areas/hjorkvild-isles.md](../areas/hjorkvild-isles.md)
- [areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md)
- [mod-added/wyrmstooth.md](wyrmstooth.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal text, location and worldspace names | LoreRim install: `Siege at Icemoth.esp` QUST/LCTN/WRLD records (profile Default), via `imports/mods/siege-at-icemoth.md` | mod v1.4.2.0 | 2026-10-02 |
| 2 | premise, start method, lore, Crimson Kiss location, notes | [Nexus mod page 109541](https://www.nexusmods.com/skyrimspecialedition/mods/109541) via meta.ini cache (also the Fishing Patch and Metallurgy 124223 caches) | 2025-12-31 (nexusLastModified) | 2026-01-11 cache |
| 3 | LoreRim start instructions, no extra gate | [LoreRim site — New Lands](https://www.lorerim.com/guides/quests/new-lands) | n/a | 2026-10-02 |
| 4 | quest and location list, item list, Plague Breath has 3 words | [UESP — Skyrim Mod:Siege at Icemoth](https://en.uesp.net/wiki/Skyrim_Mod:Siege_at_Icemoth) | page states v1.4, updated 2025-11-25 | 2026-10-02 |
| 5 | Ferries addon, fishing patch, FWMF map, enabled plugins | LoreRim install: `Skyrim Ferries/Ferries - Siege At Icemoth Addon.esp`, `HYORFishingIntegrationPatch.esp` record surveys; `profiles/Default/plugins.txt`, `modlist.txt` | LoreRim install | 2026-10-02 |
| 6 | LoreRim item overrides, no quest overrides | LoreRim install: `LoreRim - xEdit64 Output` (Armor Merges, ISC Patches), `LoreRim - Reqtificator`, `LoreRim - Synthesis Output` plugin scans | LoreRim install | 2026-10-02 |
| 7 | item, book, word-of-power, perk, spell and cell names; book texts; Band of the Wraith before/after text | LoreRim install: `Siege at Icemoth.esp` BOOK/WEAP/ARMO/WOOP/SPEL/PERK/CELL records; `LoreRim - ISC Patches.esp` ARMO | mod v1.4.2.0 | 2026-10-02 |
