---
id: vvardenfell-and-baan-malur
title: Baan Malur, Julan-Shar and Morrowind (Journey to Baan Malur)
kind: area
category: new-lands
summary: Journey to Baan Malur adds north-west Morrowind, the Julan-Shar region, to the Solstheim worldspace. The region is roughly the size of a Skyrim hold and holds the border town of Cormaris, the vast city of Baan Malur (100+ NPCs), forts, Daedric and Dwemer ruins, a kwama mine, and Morrowind-style quests. You reach it through the Dwemer ruin Kalbthurz east of Windhelm, or by ferry from Raven Rock. The plugin also defines a separate "Vvardenfell" worldspace.
mods:
  - name: Journey to Baan Malur and Morrowind
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/114518
    version: i1.1.9b
  - name: Journey to Baan Malur and Morrowind - LOD
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/114518
    version: i1.0.0
  - name: Baan Malur - A Landscape Overhaul - UNDELETED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/152707
    version: f0.04RC
plugins: [Journey to Baan Malur.esp, Journey to Baan Malur0.esp, Baan Malur Landscape Updates.esp, Journey to Baan Malur - Patched.esp, JKs Raven Rock - Journey to Baan Malur patch.esp]
quests: [The Struggle for Justice, Daedra and Deceit, Hlervan's Ashes, Morrowind Boat Travel System, The Bruska Pogrom, The Secrets of Oblivion, The New Temple, The Amulet of Old, A Grand Venture]
locations: [Baan Malur, Cormaris, Kalbthurz, Cormar Crossing, Fort Blacklight, Fort Tulis, Fort Dulan, The Rootspire, Arena Market, Saxhleel Camp, Dres Slaver's Camp, Ashimmidarum, Dunnashammipuri, Masvos Ruins, Gardmthar, Redeyn Ancestral Tomb, Llerush Kwama Mine, Monger Mill, Monger's Cave, Pryai, Baan Drol, Vvardenfell]
region: Julan-Shar, north-west Morrowind (in the Solstheim worldspace, east of Skyrim/Solstheim); plus a separate "Vvardenfell" worldspace
start: No quest gate. Walk east of Windhelm across the Velothi Mountains through the Dwemer ruin Kalbthurz, or take the ferry from Raven Rock on Solstheim. Quests are picked up in the region; they use no map markers.
related: [mod-added/journey-to-baan-malur.md, areas/solstheim.md, areas/eastmarch-and-windhelm.md, vanilla-changes/dragonborn.md, areas/new-dungeons.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
confidence: medium
updated: 2026-10-02
---

# Baan Malur, Julan-Shar and Morrowind (Journey to Baan Malur)

*Journey to Baan Malur and Morrowind* lets you "Explore north-west Morrowind in the Julan-Shar region". The region is "roughly the size of a Skyrim hold" [3][4]. It has two main areas [3]:
- **Cormar Valley**, with the colonial-style border town **Cormaris**.
- **Baan Malur**, further east on the edge of the Craglands. The city is described as "larger than any Skyrim city" and is home to over 100 fully voiced NPCs with daily schedules [3].

The new land is built inside the **Solstheim worldspace**: the plugin adds about 5,750 cells there and gives the worldspace the in-game name "Morrowind" [2][3]. The plugin also creates a second worldspace named **Vvardenfell**, with about 5,350 cells but no map markers [2]. Creatures include alits, kagoutis, guars, nix-hounds, scamps, daedroths and clannfears [3].

## Starting in LoreRim
- **No start gate:** the LoreRim site lists the mod under New Lands with no prerequisite [4], and the region's quests have no level gate in the sources read [1][3].
- **Over land:** head east of Windhelm and cross the Velothi Mountains through the Dwemer ruin **Kalbthurz** [3]. The "Western Kalbthurz" map marker is in Skyrim's worldspace. "Eastern Kalbthurz" and "Dunmeth Pass" are on the Morrowind side [2][6].
- **By sea:** take the ferry from **Raven Rock** [3]. The "Morrowind Ferry System" lets you pick a destination from the captain and pay gold. Ferries run from Cormaris, Baan Malur and Raven Rock [3]. The plugin's ferry dialogue offers Pryai, Raven Rock and Llethrin Fel at 30 Septims each [2]. LoreRim ships *JK's Raven Rock - Journey to Baan Malur patch* for the Raven Rock dock edit [9].
- **Quest style:** quests are "styled like Morrowind quests": "there will be no map markers to follow", so read the journal carefully [3].
- **Border regions:** the mod requires `bBorderRegionsEnabled=0` or a border-removal mod. If this is not set, the game teleports you back [3]. LoreRim already sets it: every LoreRim MO2 profile's `skyrim.ini` (Default, Extreme, Ultra) has `bBorderRegionsEnabled=0` under `[General]` [10].

## Quests
Full detail is in [mod-added/journey-to-baan-malur.md](../mod-added/journey-to-baan-malur.md). The mod page names these start points [3]:

### The Struggle for Justice
- **Start:** the **Saxhleel Camp** of Argonians in the Craglands south of Baan Malur, led by Kar-Jei [1][3].
- **Steps:** free slaves at the **Dres Slaver's Camp**, west of the nearby Daedric ruin → steal military documents from **Fort Blacklight** in Baan Malur without being seen (the guards are hostile) → return to Kar-Jei [1].
- **Choices:** you can betray the Saxhleel to the Redoran captain at Fort Blacklight or to the Dres captain. If you help them, Kar-Jei gives you his Naming-Knife [1].

### Daedra and Deceit
- **Start:** the "Seemingly Empty Hut" next to Baan Malur's East Gate [3]. You clear Daedra out of the scholar Llynelis's basement [1].
- **Steps:** bring her three Daedric keys from Ashimmidarum, Dunnashammipuri and Folivyn Dromas → explore the Daedric ruin under Baan Malur → confront Llynelis, who secretly worships Molag Bal. You can kill or spare her [1].

### Hlervan's Ashes
- **Start:** the ruined farmstead on the road to Baan Malur [3].
- **Task:** deliver Hlervan's Ashes to the Temple in Baan Malur [1].

### Other content
- **"Something in the rafters":** starts in the Scrambling Scrib cornerclub in Baan Malur [3]. It has no journal-text quest record; a helper record and a "The Scrambling Scrib Rafters" cell exist [1][2].
- **Bounty quests:** two can be taken from **Goyes Velen** in the **Drol Taverna**, next to the Rootspire [3]. The plugin has bounty and boss helper records [1].
- **More journal quests in the plugin under `DefunctQuest*` editor IDs:** The Bruska Pogrom (goblins beneath Fort Tulis), The New Temple (Sadren's temple in Cormaris), The Amulet of Old (Adimmisaru and Varanie, the Krettin), The Secrets of Oblivion (an older twin of Daedra and Deceit) and A Grand Venture [1]. The mod page does not list them [3], so whether they can be started in this version is **unverified**.

## Locations
Names come from the plugin's location records, map markers and interior cells [1][2]. The mod's CoMAP map-marker file confirms many of them [6].
- **Baan Malur (city):** the Arena Market; The Rootspire; Baan Drol, with the Drol Taverna and Drol Smithy; Fort Blacklight; the Bulwark and Bulwark Krettin, home of the Krettin, which is quest-relevant [1][2].
  - Temple of Reclamations; Bank of Baan Malur; Baan Malur Bathing Halls; Baan Malur Tombs.
  - Embassies of Dres, Indoril, Sadras and Telvanni.
  - Cornerclubs and inns: The Scrambling Scrib, The Cliffracer's Demise, Reaver's Regret Cornerclub, Crossroads Cornerclub.
  - Shops include Gretian's Goods, Suri's Wares, Oddities of Tamriel, The Bonesmith, The Needle and Thread, Fine Cladding, The Sepia Pages, The Spiced Yam, The Telvanni Tearoom, The Brass Brewery and Baan Malur Brews [2]. These are cell names; vendor inventories were not verified.
- **Cormaris and Cormar Valley:** Cormaris, with its barracks and fishery; Cormar Crossing with its cornerclub; Monger Mill; Monger's Cave; Feldrin's Cabin [1][2].
- **Forts:** Fort Blacklight, Fort Tulis (with prison, and Bruska Cave below it), Fort Dulan, Fort Pryai [1][2].
- **Daedric ruins:** Ashimmidarum, Dunnashammipuri, the Old Temple of Azura, the Shrine to Boet-hi-Ah [1][2].
- **Dwemer ruins:** Kalbthurz (the border crossing), Gardmthar, Maldbthamz [1][2][6].
- **Tombs:** Redeyn Ancestral Tomb, Urvis Tomb, Varlyn Tomb [2].
- **Other dungeons:** Llerush Kwama Mine, Jimel Kwama Mine, Masvos Ruins, Smuggler's Cave, Crag-drop Cave, Murmillakum, Collapsed Ruin [1][2].
- **Camps and landmarks:** Saxhleel Camp, Dres Slaver's Camp, The Reaver's Respite, Ink Lagoon, Forth Isle, Red Mountain Crater, the Redoran Warship, Tower of Barenziah [2].
- **Pryai and Llethrin Fel:** both are ferry destinations in the base mod. They have interiors such as the Pryai Cornerclub, Pryai Potions, Old Pryai Ruins and Llethrin Fel Caverns [2]. The separate add-ons that overhaul them (*The Sadrasi Town of Pryai*, *The Redoran Town of Llethrin Fel*) are **not** in LoreRim's install [3][9].
- **Vvardenfell worldspace:** it exists in the plugin, but no map markers are placed there [2]. A search snippet for the separate add-on *Vvardenfell: The New South* said its Vvardenfell worldspace "is already included in the Baan Malur mod" and is reached "by taking a boat near Baan Malur" (low confidence) [8]. That add-on is not installed in LoreRim [9], so expect little content there.

## Services, currency and travel
- **Scarabs:** a new currency found around Morrowind and sometimes given as a quest reward. Exchange them for septims at the Baan Malur bank [3].
- The mod page says it supports C.O.I.N. (its Daedric coins) and CoMAP (map markers) [3].

## LoreRim notes
- LoreRim adds *Baan Malur - A Landscape Overhaul* (f0.04RC). It reshapes the flat road "from Kalbthurz to the northern entrance of the city of Baan Malur". The author calls it "VERY incomplete", "beta", and "not fully navmeshed" [5].
- LoreRim's generated patch `Journey to Baan Malur - Patched.esp` (from "LoreRim - xEdit64 Output") loads after both mods. It sets the worldspace's in-game name back to "Solstheim" instead of "Morrowind" [2][7]. This is medium confidence, because later plugins were not exhaustively checked.
- The mod page recommends several add-ons that are not shipped: Blacklight, Silgrad, Vvardenfell: The New South, and the West Gash Projekt [3][9]. The paper map *Solstheim and Baan Malur Paper Map for FWMF* is shipped [9].
- The mod page reports a known map issue: being far south can make map markers hard to fast-travel to. Its fix is an optional "Morrowind Map Fix" file [3]. Whether LoreRim includes it was not verified.
- The mod's masters include CC Fishing and Rare Curios [2][3].

## Related
- [mod-added/journey-to-baan-malur.md](../mod-added/journey-to-baan-malur.md)
- [areas/solstheim.md](solstheim.md): Raven Rock ferry
- [areas/eastmarch-and-windhelm.md](eastmarch-and-windhelm.md): the overland route east of Windhelm
- [vanilla-changes/dragonborn.md](../vanilla-changes/dragonborn.md)
- [areas/new-dungeons.md](new-dungeons.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal text, LCTN names | LoreRim install: `Journey to Baan Malur.esp` QUST/LCTN records (profile Default), via imports/mods/journey-to-baan-malur-and-morrowind.md | mod vi1.1.9b | 2026-10-02 |
| 2 | worldspaces + cell counts, map markers, interior cell names, ferry dialogue, masters, Patched.esp WRLD name | LoreRim install: `Journey to Baan Malur.esp`, `Journey to Baan Malur - Patched.esp` records, parsed this run | mod vi1.1.9b | 2026-10-02 |
| 3 | overview, routes, quest starts, ferry/scarabs, add-ons, requirements | [Nexus: Journey to Baan Malur and Morrowind](https://www.nexusmods.com/skyrimspecialedition/mods/114518) via meta.ini cache | 2025-05-29 (nexusLastModified) | 2026-01-11 cache |
| 4 | LoreRim listing, no gate | [LoreRim site: New Lands](https://www.lorerim.com/guides/quests/new-lands) | n/a | 2026-10-02 |
| 5 | landscape overhaul scope/state | [Nexus: Baan Malur - A Landscape Overhaul](https://www.nexusmods.com/skyrimspecialedition/mods/152707) via meta.ini cache | n/a | 2026-01-11 cache |
| 6 | map marker names | LoreRim install: `Journey to Baan Malur and Morrowind/MapMarkers/*.json` (CoMAP) | n/a | 2026-10-02 |
| 7 | LoreRim generated patch | LoreRim install: mod "LoreRim - xEdit64 Output" (`Journey to Baan Malur - Patched.esp`) | n/a | 2026-10-02 |
| 8 | Vvardenfell worldspace access (secondary) | Web search snippet for [Nexus: Vvardenfell The New South](https://www.nexusmods.com/skyrimspecialedition/mods/129761) (page itself returned 403) | n/a | 2026-10-02 |
| 9 | which add-ons/patches are installed | LoreRim install: profile Default `modlist.txt` / `plugins.txt` | n/a | 2026-10-02 |
| 10 | border-regions INI setting | LoreRim install: `profiles/Default/skyrim.ini` (also Extreme, Ultra), `[General] bBorderRegionsEnabled=0` | n/a | 2026-10-02 |
