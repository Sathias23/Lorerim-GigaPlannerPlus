---
id: falkreath-hold
title: Falkreath Hold (LoreRim town expansions, incl. Granite Hill)
kind: area
category: towns
summary: In LoreRim, Falkreath is rebuilt with Cities of the North architecture plus The Great City of Falkreath's walls and expanded graveyard; the restored cut town of Granite Hill (Sheepshead Inn, shops, Crossway Cottage player home) sits in northern Falkreath Hold and its quest "A Plea From Granite Hill" arrives by courier only after you finish the Western Watchtower dragon fight (Dragon Rising); Orc Exiles fortifies Cracked Tusk Keep and Bilegulch Mine, and Sunderstone Gorge is reworked. Helgen, where LoreRim's main quest begins, is also in this hold.
mods:
  - name: Cities of the North - Falkreath
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/56731
    version: 1.3.0.0
  - name: The Great City Of Falkreath SSE Edition
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/19709
    version: 1.22.0.0
  - name: COTN Falkreath Lite
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/117844
    version: 1.0.0.0
  - name: Granite Hill - ESLIFIED LUX PATCH
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/14658
    version: 6.7.1.0
  - name: Half-Moon Mill - Cities of the North Addon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/64360
    version: 1.4.0.0
  - name: Orc Exiles - The Cracked Tusk Keep
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/133489
    version: 1.6.0.0
  - name: Orc Exiles - Bilegulch Stronghold
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/130169
    version: 1.4.0.0
  - name: Sunderstone
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/135078
    version: 1.0.0.0
plugins: [COTN - Falkreath.esp, The Great City of Falkreath.esp, aaaGraniteHill.esp, aaaGraniteHill - Lux Patch.esp, Half-Moon Mill - COTNed.esp, Orc Exiles - The Cracked Tusk Keep.esp, Orc Exiles - Bilegulch.esp, Sunderstone.esp]
quests: [A Plea From Granite Hill]
locations: [Falkreath, Falkreath Watchtower, Kust's House, Valdr's House, Granite Hill, Sheepshead Inn, Granite Hill Crawl Space, Crossway Cottage, Half-Moon Mill, Cracked Tusk Keep, Bilegulch Mine, Sunderstone Gorge, Helgen]
region: Falkreath Hold (south-west Skyrim, bordering Cyrodiil)
start: Falkreath changes are present from a new game. Granite Hill can be visited any time, but its quest "A Plea From Granite Hill" starts only when a courier brings John's letter after you complete the Western Watchtower quest (Dragon Rising) and kill your first dragon — LoreRim installs the "Dragonborn" playthrough variant.
related: [mod-added/gravewind.md, areas/gravewind-area.md, areas/the-forgotten-city-zenithar.md, vanilla-changes/main-quest-and-alternate-start.md, mod-added/missives.md, mod-added/granite-hill-quests.md, mod-added/gray-cowl-of-nocturnal.md, areas/whiterun-hold.md, areas/the-reach-and-markarth.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
confidence: high
updated: 2026-10-02
---

# Falkreath Hold (LoreRim town expansions, incl. Granite Hill)

LoreRim gives Falkreath a unique architecture (Cities of the North - Falkreath) layered with The Great City of Falkreath's fortifications and larger graveyard [1][2][3]. The hold also gains Granite Hill, a town cut from the base game and restored with an inn, shops, a player home and one quest [4][5][6]. Several hostile sites are reworked: Orc Exiles turns Cracked Tusk Keep and Bilegulch Mine into Orc fortresses, and Sunderstone reworks Sunderstone Gorge [8][9][10]. Helgen — the town whose inn starts LoreRim's main quest — is a Falkreath Hold location [11][12].

## Starting in LoreRim
- Falkreath town, Half-Moon Mill, the Orc forts and Sunderstone Gorge are changed from a new game [1][7][8][9][10].
- **Granite Hill quest gate:** the mod page gives two starts — "A courier will deliver a letter to you once you complete the Western Watchtower quest and defeat your first dragon", or, in the non-Dragonborn version, once you exceed level 10 [5]. LoreRim's FOMOD choice is "Playthrough Style: Dragonborn", so the **Western Watchtower trigger applies** [4]. The plugin's story-manager node (`GraniteHillSM`) conditions the quest on `GetQuestCompleted` of `MQ104` (Dragon Rising), confirming the gate [15]. The Western Watchtower quest is "Dragon Rising" (objectives: Talk to Jarl Balgruuf; Meet Irileth near the Western Watchtower; Kill the dragon) [13].
- Because LoreRim's main quest is optional — you start it by renting a room at the inn in Helgen (unless you chose the Dragonborn start) [11] — players who skip the main quest will not receive the Granite Hill letter (inference from [4][5][11]).
- Unlike the Markarth Side quests, `aaaGraniteHillDungeonQuest` is not flagged start-game-enabled [6].

## Quests
### A Plea From Granite Hill
- **Giver / trigger:** A courier delivers a note from John in Granite Hill [6].
- **Where:** Granite Hill; Granite Hill Crawl Space beneath Privious' shop, Oddities and Curiosities, which opens into a draugr-filled ruin [6].
- **Steps:** 1. Read the courier's note. 2. Speak with John in Granite Hill. 3. Explore the crawl space under the shop. 4. Speak with John about your journey through the ruins [6].
- **Details:** John gives you the crawl space key; at the bottom of the tomb you find and kill a dragon [6]. In-plugin notes say the chambers "predate the burial mound outside", suggesting the dragon burial mound near town was placed there because of the ruin [6].
- **Rewards:** "I was given the keys to a home in Granite Hill as a reward" — Crossway Cottage [6].

Other quests in this hold (own files): **Gravewind** — "travel just northwest of the Roadside Ruins in Falkreath, and enter the abandoned homestead" [11][16]; Roadside Ruins is a Falkreath Hold location [12]. LoreRim's site adds "Get the key from Vighar the vampire (from the Falkreath quest)" [11], which the mod page does not mention; the mod page recommends level "25ish+" and warns you are trapped once it begins [16] (disputed: key requirement is site-only). See `mod-added/gravewind.md`.

## Locations

### Falkreath — Cities of the North - Falkreath + The Great City of Falkreath
- **COTN:** "New unique model for every building in Falkreath", matching new interiors, full navmesh and LOD, the Jarl's longhouse music changed to match major cities, and "A total of 8 new interiors, including homes for Kust and Valdr" [1]. New location records: **Falkreath Watchtower, Kust's House, Valdr's House** [3]. The author recommends a new save, "otherwise some objects may not be placed correctly in the interiors" [1].
- **TGC Falkreath:** "adds new fortifications", "expands the graveyard, adds more Nordic architecture" and "a tomb", aiming for a Cyrodiil-like medieval feel; interiors are left unaltered [2].
- **COTN Falkreath Lite** (no plugin; Base Object Swapper ini) disables "Almost 300 objects" for performance [14].

### Granite Hill (restored cut town)
- The plugin parents **Granite Hill** to Falkreath Hold and adds **Sheepshead Inn**, **Granite Hill Crawl Space** and **Crossway Cottage** [4].
- Lore: a region "east of Sungard and far north of the town of Falkreath" that came under Falkreath Hold; it was "cut before release", and the in-game map still shows "Granite Hill" near Fort Sungard [7]. A secondary source places the cut `GraniteHillLocation` on the southern shore of Lake Ilinalta near Vuljotnaak's burial mound (medium confidence) [7].
- Mod page: "a full town with custom NPCs, a quest, and a fully loaded player home with the ability to move your family in" [5]. Plugin keys name shops **General Goods** and **Potent Potables**, plus Privious' **Oddities and Curiosities** [6].
- **Crossway Cottage:** reward home; housing adopted children/spouse/followers there needs Hearthfire Multiple Adoptions per the mod page [5] (whether LoreRim ships it was not checked).

### Half-Moon Mill
Re-built with COTN Falkreath's buildings ("change Half-Moon Mill's house and mill") [8].

### Cracked Tusk Keep — Orc Exiles
"Overhauls The Cracked Tusk Keep ruin Into an Imposing fortress occupied by the Orcs": more Orc bandits behind the walls, more huts, multiple entry points; "The Interior cell Is untouched" [9]. Falkreath Hold location [12].

### Bilegulch Mine — Orc Exiles - Bilegulch Stronghold
Fortifies the Orc bandit camp: "Adds a Orc Longhouse with Interior", a huge gate, tall log walls, and "extra bandits to fight" [9]. Falkreath Hold location [12].

### Sunderstone Gorge — Sunderstone
Light overhaul of the entrance; "The Warlock is still Guarding the Main Entrance & an extra is patrolling the walkways above"; reworked interior with sleeping/bathing areas and a new walkway area "behind a locked door, maybe you could find a key somewhere" [10]. Falkreath Hold location [12].

### Helgen
A Falkreath Hold location [12]. In LoreRim, Helgen is not destroyed unless you pick the Dragonborn start; renting a room at its inn offers the main-quest start [11]. See `vanilla-changes/main-quest-and-alternate-start.md`.

## Rewards & notable items
- **Crossway Cottage** player home (A Plea From Granite Hill) [6].

## LoreRim notes
- LoreRim enables "Granite Hill - Lux Via Patch" and "Granite Hill - Ryn's Dragon Mounds Patch" (the mod page offers both) [5][14]; the Granite Hill plugin also contains a script named `MarkarthSideDragonEnable` (shared author with Markarth Side) [4].
- Falkreath extras enabled: "Cities of the North - Falkreath Patch Collection", "The Great City of Falkreath - Missives Patch", "COTN Falkreath Center Tree Replacer", "Blubbos Deity Tree of Kynareth for COTN Falkreath", "Nature of the Wildlands - COTN Falkreath", Orc Exiles Lux/NotWL/Imperial Castles patches, Sunderstone Lux/Landscape patches [14].
- COTN Falkreath lists Missives, The Gray Cowl of Nocturnal and Moonpath to Elsweyr as compatible out of the box [1].

## Related
- `mod-added/gravewind.md`, `areas/gravewind-area.md`, `areas/the-forgotten-city-zenithar.md`, `mod-added/granite-hill-quests.md`
- `vanilla-changes/main-quest-and-alternate-start.md`, `mod-added/missives.md`, `mod-added/gray-cowl-of-nocturnal.md`
- `areas/whiterun-hold.md`, `areas/the-reach-and-markarth.md`

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | COTN Falkreath features, new-save note, compatibility | [Nexus mod page 56731](https://www.nexusmods.com/skyrimspecialedition/mods/56731) via meta.ini cache | 2024-04-22 (nexusLastModified) | 2026-01-11 cache |
| 2 | TGC Falkreath fortifications, graveyard, tomb | [Nexus mod page 19709](https://www.nexusmods.com/skyrimspecialedition/mods/19709) via meta.ini cache | 2023-03-23 (nexusLastModified) | 2026-10-02 |
| 3 | COTN Falkreath new location names | LoreRim install: `COTN - Falkreath.esp` LCTN records | mod v1.3.0.0 | 2026-10-02 |
| 4 | Granite Hill locations (parent Falkreath Hold); FOMOD "Dragonborn" choice; script names | LoreRim install: `aaaGraniteHill.esp` LCTN records, meta.ini `[Plugins]` FOMOD record, Scripts folder | mod v6.7.1.0 | 2026-10-02 |
| 5 | Granite Hill start conditions, features, patches, adoption note | [Nexus mod page 14658](https://www.nexusmods.com/skyrimspecialedition/mods/14658) via meta.ini cache | 2025-11-25 (nexusLastModified) | 2026-01-12 cache |
| 6 | A Plea From Granite Hill objectives/journal; key and note strings | LoreRim install: `aaaGraniteHill.esp` QUST records + plugin strings | mod v6.7.1.0 | 2026-10-02 |
| 7 | Granite Hill lore location, cut status; Lake Ilinalta CK placement | [UESP — Lore:Granite Hill](https://en.uesp.net/wiki/Lore:Granite_Hill); Elder Scrolls Fandom "Granite Hill" (via search snippet) | n/a | 2026-10-02 |
| 8 | Half-Moon Mill COTN addon | [Nexus mod page 64360](https://www.nexusmods.com/skyrimspecialedition/mods/64360) via meta.ini cache | 2024-03-28 (nexusLastModified) | 2026-10-02 |
| 9 | Orc Exiles Cracked Tusk Keep / Bilegulch | [Nexus 133489](https://www.nexusmods.com/skyrimspecialedition/mods/133489) (2025-10-07) and [Nexus 130169](https://www.nexusmods.com/skyrimspecialedition/mods/130169) (2025-08-20) via meta.ini cache | see dates | 2026-10-02 |
| 10 | Sunderstone Gorge rework | [Nexus mod page 135078](https://www.nexusmods.com/skyrimspecialedition/mods/135078) via meta.ini cache | 2024-11-28 (nexusLastModified) | 2026-10-02 |
| 11 | Main quest start at Helgen inn; Gravewind start | [LoreRim site — Main Quests](https://www.lorerim.com/guides/quests/main); [New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 12 | Helgen, Roadside Ruins, Cracked Tusk Keep, Bilegulch Mine, Sunderstone Gorge, Half-Moon Mill parent = Falkreath Hold | Base game: `Skyrim.esm` LCTN records (PNAM), LoreRim Stock Game | n/a | 2026-10-02 |
| 13 | Dragon Rising (MQ104) objectives incl. Western Watchtower | `official-quests.json` (Skyrim.esm QUST records, strings resolved) | n/a | 2026-10-02 |
| 14 | COTN Falkreath Lite; enabled Falkreath/Granite Hill patches | [Nexus 117844](https://www.nexusmods.com/skyrimspecialedition/mods/117844) via meta.ini cache (2024-09-29); LoreRim install `profiles/Default/modlist.txt` | see dates | 2026-10-02 |
| 15 | Granite Hill quest start condition GetQuestCompleted(MQ104) | LoreRim install: `aaaGraniteHill.esp` SMQN record `GraniteHillSM` (CTDA) resolved against `Skyrim.esm` | mod v6.7.1.0 | 2026-10-02 |
| 16 | Gravewind start text, recommended level, no key mentioned | [Nexus mod page 129582 (Gravewind)](https://www.nexusmods.com/skyrimspecialedition/mods/129582) via meta.ini cache, install folder `Gravewind - ESMIFIED` | 2024-11-24 (nexusLastModified) | 2026-10-02 |
