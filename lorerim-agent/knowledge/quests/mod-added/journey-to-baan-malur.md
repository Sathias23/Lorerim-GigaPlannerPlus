---
id: journey-to-baan-malur
title: Journey to Baan Malur and Morrowind
kind: mod-added
category: new-lands
summary: A hold-sized new land in north-west Morrowind (the Julan-Shar region, with the border town of Cormaris and the city of Baan Malur), reached on foot through the Dwemer ruin of Kalbthurz east of Windhelm or by ferry from Raven Rock. It has Morrowind-style quests with no quest markers, Scarab currency, and a ferry network.
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
quests: [The Struggle for Justice, Daedra and Deceit, Hlervan's Ashes, Morrowind Boat Travel System]
locations: [Baan Malur, Cormaris, Kalbthurz, Saxhleel Camp, Dres Slaver's Camp, Fort Blacklight, The Rootspire, Arena Market, The Spiced Yam, Fort Tulis, Fort Dulan, Baan Drol, Redeyn Ancestral Tomb, Dunnashammipuri, Ashimmidarum, Monger's Cave, Monger Mill, Masvos Ruins, Gardmthar, Pryai, Vvardenfell]
region: North-west Morrowind (Julan-Shar region), east of Windhelm across the Velothi Mountains and reachable by sea from Raven Rock (Solstheim)
start: No quest gate. Walk east from Windhelm through the Dwemer ruin of Kalbthurz, or take the ferry at Raven Rock. Each quest then starts at its own place (Saxhleel Camp, the Seemingly Empty Hut by Baan Malur's East Gate, the ruined farmstead on the road, the Scrambling Scrib Cornerclub, or Goyes Velen in the Drol Taverna).
related: [areas/vvardenfell-and-baan-malur.md, areas/solstheim.md, areas/eastmarch-and-windhelm.md, vanilla-changes/dragonborn.md, mod-added/miasma.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8]
confidence: high
updated: 2026-10-02
---

# Journey to Baan Malur and Morrowind

Journey to Baan Malur adds north-west Morrowind's Julan-Shar region. It includes the colonial border town of Cormaris in the Cormar Valley and the provincial capital Baan Malur on the edge of the Craglands, along with Daedric ruins, a Kwama mine and Dwemer ruins [2]. The mod author describes the area as "roughly the size of a Skyrim hold" and Baan Malur as "larger than any Skyrim city", with over 100 fully voiced NPCs who keep daily schedules [2]. LoreRim lists it on its New Lands page [3]. The plugin defines a worldspace named **Vvardenfell** and 22 new locations [1].

## Starting in LoreRim
- **No quest or level gate is documented.** The LoreRim New Lands page describes the mod but gives no start condition [3], and no LoreRim plugin overrides this mod's quest records. A scan of the LoreRim xEdit, Synthesis, Reqtificator and MCM-settings plugins found no QUST overrides for `SOMR*`/`Defunct*` records [5].
- **Getting there:** cross the Velothi Mountains east of Windhelm through the Dwemer ruin of **Kalbthurz**, or take the ferry from **Raven Rock** [2]. Ferries run at Cormaris, Baan Malur and Raven Rock: you pick a destination with the captain, pay gold, and are teleported there [2].
- **Border regions:** the mod requires `bBorderRegionsEnabled=0`, or the game pushes you back at the border [2]. LoreRim's profile `skyrim.ini` already sets `bBorderRegionsEnabled=0` [5].
- **Quests have no map markers.** They are written in the Morrowind style, so you follow the journal and may need to search around [2].

## Quests
These are the quest names in the plugin records [1]. The start locations come from the mod page [2].

### The Struggle for Justice
- **Giver / trigger:** Kar-Jei, leader of the Argonian camp. Start by going to the **Saxhleel Camp** south of Baan Malur [2], in the Craglands [1].
- **Steps:** 1) Investigate the Dres Slaver's Camp, west of the nearby Daedric ruin, and free the captive Argonians. 2) Return to Kar-Jei. 3) Steal military documents from **Fort Blacklight** without being spotted, because the guards are hostile. 4) Return to Kar-Jei, then go to the Saxhleel Camp [1].
- **Choices & outcomes:** at the slaver camp you can kill the Dres Captain and free the slaves, or kill him without freeing them. The door guard may also simply let you in [1]. You can sell out the Saxhleel to the Redoran Captain at Fort Blacklight or to the Dres Captain [1]. If you deliver the documents, you come back to find the camp burning and under Redoran attack. Kar-Jei either survives and gives you his Naming-Knife, or dies in the raid [1].
- **Rewards:** **Kar-Jei's Naming Knife** (item record) [7].

### Daedra and Deceit
- **Giver / trigger:** Llynelis, a Dunmer scholar. Enter the **Seemingly Empty Hut next to the East Gate of Baan Malur** [2] and clear the Daedra out of her basement [1].
- **Steps:** 1–3) Bring Llynelis three keys from her list. They come from **Ashimmidarum**, **Dunnashammipuri**, and the Daedric hunter **Folivyn Dromas** [1]. The key items are *Kpollimminnass's Key*, *Pashattminnam's Key* and *Munntimmu's Key* [7]. 4) Explore the Daedric ruin under Baan Malur. 5) Confront Llynelis [1].
- **Choices & outcomes:** in the ruin you learn that Llynelis worships Molag Bal. You can kill her or spare her [1].

### Hlervan's Ashes
- **Trigger:** start at the **ruined farmstead on the road to Baan Malur** [2].
- **Steps:** deliver *Hlervan's Ashes* to the Temple in Baan Malur [1]. The plugin has two copies of this quest record (`SOMRHlervansAshesQuest` and `DefunctQuest05`), and both are flagged to start with the game [1].

### Something in the Rafters (mod-page name)
- **Trigger:** the **Scrambling Scrib Cornerclub** in Baan Malur [2].
- **Steps:** "Investigate the noises upstairs." Then "Return to Toldrys" [1]. The record (`SOMRScramblingScribQuest`) has no title string, so the in-game journal name may differ from the mod page or be blank (unverified) [1].

### Bounty quests (Goyes Velen)
- **Giver:** Goyes Velen in the **Drol Taverna**, next to the Rootspire. Two bounties are available [2].
- **Objectives:** "Kill Koemia and bring proof back to Goyes Velen." and "Kill Maighan and bring proof back to Goyes Velen." [1] These sit in an untitled questline record [1].
- **Loot:** the plugin has *Koemia's Ring* ("bolsters the wearer's magical capabilities") and a *Beast of Ink Lagoon Fin* misc item [7]. Linking the fin to the Maighan bounty is an inference (unverified).

### Morrowind Boat Travel System
- A misc helper with one objective: "Take a seat on the ferry bench." [1] This is the ferry system described above [2].

### Unused or cut records ("Defunct")
The plugin also contains titled quests whose EditorIDs begin with `Defunct` and which are not on the mod page's quest list [1][2]:
- **The Bruska Pogrom**: goblins under Fort Tulis and the Bruska Shaman.
- **The Amulet of Old**: Adimmisaru and Varanie in the market.
- **The New Temple**: Sadren's temple in Cormaris.
- **A Grand Venture**
- **The Secrets of Oblivion**: an older version of Daedra and Deceit with near-identical journal text.

None except the Hlervan's Ashes duplicate is flagged to start with the game [1]. Treat them as probably unreachable. Whether any can be triggered in-game is unverified.

## Locations
Location records from the plugin [1]:
- **Baan Malur**: the provincial capital, home to over 100 NPCs. Its districts and buildings include the **Arena Market**, **The Rootspire**, **Baan Drol** (the Drol Taverna is "next to the Rootspire") and **The Spiced Yam** [1][2]. You can exchange Scarabs and Septims at the Baan Malur bank [2].
- **Cormaris**: the border town in the Cormar Valley, built in a colonial style like Seyda Neen, with a ferry dock [2].
- **Kalbthurz**: the Dwemer ruin crossing the Velothi Mountains east of Windhelm. This is the overland route in [2]. Its location record is `KalbthurzSkyrimLocation` [1].
- **Saxhleel Camp** and **Dres Slaver's Camp**, both in the Craglands south of Baan Malur. **Fort Blacklight** is in Baan Malur [1].
- Daedric ruins: **Ashimmidarum** and **Dunnashammipuri** [1].
- Other locations: **Fort Tulis**, **Fort Dulan**, **Redeyn Ancestral Tomb** (the *Redeyn Amulet* grants access [7]), **Monger's Cave**, **Monger Mill**, **Masvos Ruins**, **Gardmthar** and **Pryai** [1].
- Worldspace: **Vvardenfell** (`VvardenfellWorld`) [1]. The mod page says its LOD is for the Solstheim worldspace, "as this is where the new region is" [2]. These two statements are reported as-is; this file does not reconcile them.

## Rewards & notable items
- **Scarabs** are a new currency found around Morrowind and sometimes given as quest rewards. You can convert them at the Baan Malur bank [2][7].
- Named items in the plugin [7]:
  - **Staff of Veloth**
  - **Staff of Almalexia's Mercy**
  - Ashlander amulets: **Madstone of the Ahemmusa**, **Thong of Zainab**, **Teeth of Urshilaku**
  - Daedric masks: **Mask of Kuhrl Kbal**, **Mask of Ma'ar Kranag**, **Mask of Voluptstan**
  - Redeyn ghost-boss gear: **Ebony Gauntlets of Extreme Wielding**, **Ebony Boots of Extreme Stamina**

  Where each item drops is not documented in the sources read.
- New creatures include Alits, Kagoutis, Guars, Nix-Hounds, Scamps, Daedroths and Clannfears [2].

## LoreRim notes
- **Requiem integration:** LoreRim generates `Journey to Baan Malur - Patched.esp` in its xEdit output. Its masters are `Journey to Baan Malur.esp`, `Requiem.esp` and the CC Requiem patch, and it overrides 163 armor, 158 recipe, 34 spell and 28 weapon records plus creature races and NPCs [6]. Expect Requiem-style stats, not the mod's defaults [6].
- **Landscape add-on:** LoreRim also ships *Baan Malur - A Landscape Overhaul - UNDELETED* (f0.04RC). Its author calls it "VERY incomplete", a beta that is "not fully navmeshed", and it currently covers the main road from Kalbthurz to Baan Malur's northern entrance [4].
- **Raven Rock:** the ferry adds a boat at Raven Rock [2]. LoreRim includes *JK's Raven Rock Patch Collection*'s `JKs Raven Rock - Journey to Baan Malur patch.esp` [8].
- **Map:** LoreRim enables *Solstheim and Baan Malur Paper Map for FWMF* [5].
- **Add-ons not in LoreRim:** the modlist has none of the mod page's add-ons. It has no Pryai or Llethrin Fel town overhaul, Silgrad, Vvardenfell: The New South, West Gash Projekt, or Blacklight - Baan Malur Overhaul [2][5]. The base mod still has location records named Pryai and Gardmthar [1].
- **Known incompatibility:** the mod page lists Worldspace Transition Tweaks as a "huge incompatibility" [2]. It is not in LoreRim's modlist [5]. LoreRim does include FSMP, which the mod needs [2][5].
- The LOD mod (i1.0.0) contains only terrain LOD meshes and textures, with no plugin [2][5].

## Related
- [areas/vvardenfell-and-baan-malur.md](../areas/vvardenfell-and-baan-malur.md)
- [areas/solstheim.md](../areas/solstheim.md)
- [areas/eastmarch-and-windhelm.md](../areas/eastmarch-and-windhelm.md)
- [vanilla-changes/dragonborn.md](../vanilla-changes/dragonborn.md)
- [mod-added/miasma.md](miasma.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal stages, locations, worldspace | LoreRim install: `Journey to Baan Malur.esp` QUST/LCTN/WRLD records (profile Default), via `imports/mods/journey-to-baan-malur-and-morrowind.md`, plus a direct record parse this run | mod v i1.1.9b | 2026-10-02 |
| 2 | overview, access routes, ferry, Scarabs, quest starts, compatibility, add-ons | [Nexus mod page 114518](https://www.nexusmods.com/skyrimspecialedition/mods/114518) via meta.ini cache (`Journey to Baan Malur and Morrowind` and `- LOD` folders) | 2025-05-29 (nexusLastModified) | 2026-01-11 cache |
| 3 | LoreRim lists the mod under New Lands, no start gate given | [LoreRim site — New Lands](https://www.lorerim.com/guides/quests/new-lands) | n/a | 2026-10-02 |
| 4 | landscape overhaul scope and beta status | [Nexus mod page 152707](https://www.nexusmods.com/skyrimspecialedition/mods/152707) via meta.ini cache | 2025-12-10 (nexusLastModified) | 2026-01-11 cache |
| 5 | `bBorderRegionsEnabled=0`, enabled mods and plugins, no LoreRim quest overrides | LoreRim install: `profiles/Default/skyrim.ini`, `modlist.txt`, `plugins.txt`; scan of LoreRim output plugins | LoreRim install | 2026-10-02 |
| 6 | Requiem patch contents | LoreRim install: `LoreRim - xEdit64 Output/Journey to Baan Malur - Patched.esp` (record-type survey) | LoreRim install | 2026-10-02 |
| 7 | item names (keys, rewards, uniques, Scarab) | LoreRim install: `Journey to Baan Malur.esp` WEAP/ARMO/MISC records | mod v i1.1.9b | 2026-10-02 |
| 8 | Raven Rock compatibility patch present | LoreRim install: `JK's Raven Rock Patch Collection` (v1.4.0.0) plugin list | LoreRim install | 2026-10-02 |
