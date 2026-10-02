---
id: new-landmarks-and-shrines
title: New Landmarks, Shrines and Evolving Settlements in LoreRim
kind: area
category: dungeons
summary: The landmark-scale changes LoreRim makes to Skyrim. Talos shrines react to the Civil War and the Thalmor; the Environs settlements (Storm-Hull Farm, Eisa's House, Thorvar's House, the East Empire Company Outpost) rebuild over in-game days; Fort Dunstad becomes a settlement with an inn, trader and smith. Also covered are the Azura shrine undercroft, a Clear-Skies-only trophy vault on the Throat of the World, Stendarr's Beacon, the Chantry of Auriel, and Ascend's hidden peaks.
mods:
  - name: Environs - The Shrines of Talos
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/85141
    version: f3.02
  - name: Environs - Riften Warehouse
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/88024
    version: f2.01
  - name: Environs - Hroggar's House
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/83457
    version: f2.02
  - name: Environs - The Ruined Tundra Farmhouse
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/72981
    version: 3.0.2.0
  - name: Environs - Kolskeggr
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/78477
    version: f3.03
  - name: Fort Dunstad
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/144471
    version: f1.01
  - name: Ryn's Azura's Shrine
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/86592
    version: 1.3.0.0
  - name: Dovahkiin's Vault SSE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/42237
    version: 1.0.0.0
  - name: Ivy's Stendarr's Beacon Overhaul
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/156160
    version: 1.0.8.0
  - name: The Chantry - An Overhaul
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/171886
    version: 1.0.0.0
  - name: Ascend - Hidden Peaks of Skyrim
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/120802
    version: f1.01
  - name: VIGILANT - Delayed Start
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/57961
    version: 2.3.0.0
plugins: [Environs - Shrines of Talos.esp, Environs - The Shrines of Talos - Taliesin Patch.esp, Environs - Riften Warehouse.esp, Environs - Hroggars House.esp, Environs - Tundra Farmhouse.esp, Environs - Kolskeggr.esp, Fort Dunstad.esp, "Ryn's Azura's Shrine.esp", Eli_Dovah Vault.esp, Eli_CLBladeOfWoePatch.esp, Ivy Stendarrs Beacon Overhaul.esp, The Chantry.esp, Ascend - Hidden Peaks of Skyrim.esp]
quests: [Supply and Demand, The Pale Lady, Laid to Rest, Find The Hidden Peaks]
locations: [Shrine of Talos, Temple of Talos, Snow-Shod Manor, Snow-Shod Farm Cellar, East Empire Company Outpost, "Eisa's House", Storm-Hull Farm, "Thorvar's House", Kolskeggr Mine, Fort Dunstad, Fort Dunstad Trader, Fort Dunstad Blacksmith, The Stumbling Sabrecat, "Aranea Lenith's Home", Ven Fillaan Miin, Dovahdein, "Stendarr's Beacon", Inner Sanctum (Chantry of Auriel)]
region: Skyrim (all holds); Ascend also Solstheim
start: No quests to start. Most changes trigger on vanilla quest completion or Civil War outcome plus elapsed in-game days, checked when you pass through invisible triggers outside the major city gates. In LoreRim, Storm-Hull Farm uses the Vigilant-quest trigger. Dovahdein needs the Clear Skies shout.
related: [areas/new-dungeons.md, areas/dragons-awaken-lairs.md, mod-added/ascend-hidden-peaks.md, mod-added/taliesin-thalmors-shadow.md, mod-added/vigilant.md, vanilla-changes/civil-war.md, vanilla-changes/dawnguard.md, vanilla-changes/side-quests-and-misc.md, areas/the-rift-and-riften.md, areas/hjaalmarch-and-morthal.md, areas/whiterun-hold.md, areas/the-reach-and-markarth.md, areas/eastmarch-and-windhelm.md, areas/the-pale-and-dawnstar.md, areas/winterhold.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
confidence: medium
updated: 2026-10-02
---

# New Landmarks, Shrines and Evolving Settlements in LoreRim

This file covers the smaller, landmark-scale changes LoreRim makes to Skyrim's map. The *Environs* series makes places change over a playthrough: shrines, farms, a mine settlement, a Riften warehouse and a burned Morthal house all react to quest progress and the passage of in-game days [1][2][3][4][5]. The *Ryn's*, *Snozz'* and *Ivy's* overhauls rebuild existing landmarks: the Shrine of Azura, Fort Dunstad and Stendarr's Beacon [7][6][9]. Two further mods add a hidden trophy vault on the Throat of the World and ten climbable "hidden peaks" [8][11]. All listed mods are enabled in LoreRim's Default profile [12].

## Starting in LoreRim
- **How Environs triggers work:** invisible checkpoints sit just outside the gates of Whiterun, Solitude, Markarth, Windhelm and Riften, and only fire when you pass through them. Riften Warehouse uses the Riften gates, and Hroggar's House uses the Morthal road and bridge [2][3][4][5]. If a change has not appeared, travel through a city gate.
- **LoreRim-specific — Storm-Hull Farm:** LoreRim installed the *Vigilant Version* of The Ruined Tundra Farmhouse; its plugin lists `Vigilant.esm` as a master. With that version the farmhouse is destroyed during a quest in VIGILANT's first act, not after the Western Watchtower dragon as in the Default version [4]. The plugin's trigger points at a `Vigilant.esm` quest (stage 8), which confirms this [18]. When VIGILANT starts in LoreRim is disputed. The LoreRim site says it needs the main quest, Dawnguard and House of Horrors completed first [13]. The installed *VIGILANT - Delayed Start* FOMOD choice is "Option 2: MB + DG", which the mod page defines as level 25+, House of Horrors and Kindred Judgement (the Dawnguard finale), with no main-quest condition [18]. The farm will therefore stay intact, with its elderly couple, for much of a playthrough.
- **Hroggar's House** needs both "The Pale Lady" and "Laid to Rest" completed [3]. In LoreRim, "Laid to Rest" also gates the Dawnguard recruitment, through Sensible Quest Prerequisites [13].
- **Dovahdein** (the vault) can only be reached with the Clear Skies shout. Its key lies on a skeleton near Paarthurnax's perch [8].

## Quests
No new journal quests. Two helper records are involved: Ascend's "Find The Hidden Peaks" carries no journal text [11], and Ivy's Beacon runs `IvyShackRebuildingQuest` [9]. The vanilla quests that trigger changes are "Supply and Demand" (Riften Warehouse) [2], "The Pale Lady" and "Laid to Rest" (Hroggar's House) [3], Pavo Attius's quest "Kolskeggr Mine" (`FreeformKolskeggrA`; Kolskeggr) [5][18], and "Torygg's War Horn" (White River Valley shrine) [1].

## Locations

### Shrines of Talos (Environs - The Shrines of Talos)
Dynamic changes themed on the Thalmor and the Civil War [1]:
- **Shrine near Lake Ilinalta** (Falkreath Hold, unmarked): living Talos worshippers early on. Later, triggered by player level, you find the vanilla massacre scene. The Thalmor agent normally found dead there waits at the **Thalmor Headquarters** in Solitude until the massacre [1].
- **Cradlecrush Pond shrine** (Eastmarch): a pilgrim camps across the pond, triggered by player level [1].
- **White River Valley shrine** (Whiterun Hold): a lone worshipper appears after Torygg's War Horn is delivered [1].
- **Weynon Stones** (the Pale): murdered pilgrims appear by level and later fade to bones [1].
- **Riften Shrine of Talos**: under Imperial control the garden decays and the shrine is removed, and a Thalmor Justiciar arrives. **Snow-Shod Manor** then gains a secret basement shrine [1].
- **Markarth Shrine of Talos**: if the Stormcloaks take Markarth, it reopens with a new priest who sleeps in Understone Keep [1].
- **Temple of Talos, Windhelm**: if the Empire wins, the shrine is removed and priests Jora and Lortheim flee to a hidden new interior in the Rift [1]. The plugin adds the location "Snow-Shod Farm Cellar" and the cells "Snow-Shod Farm" and "Snow-Shod Farm Cellar". This is probably the hiding place, though the author keeps it secret (medium confidence) [1][12].
- **Road east of Darkwater Crossing**: a level-triggered dead Thalmor patrol [1].
- New books "Jarl's Decree", "Decree" and "To Torben" document the bans [12].

### Environs settlements
- **East Empire Company Outpost** (Riften docks warehouse): after "Supply and Demand" and at least 15 in-game days, the empty warehouse becomes a general-goods shop selling imports, including items from Solstheim. It has a Dunmer merchant and a Nord assistant [2]. Plugin NPCs are Bjens and Gelmir, and there is an East Empire Outpost Key [12]. The vanilla interior is untouched; a new cell replaces it [2].
- **Eisa's House** (Morthal): Eisa Blackthorn moves to the Moorside Inn after you meet her at Frostmere Crypt [3]. After "The Pale Lady" and "Laid to Rest" she rebuilds Hroggar's burned house in stages, each taking about 18 days [3]. Once it is done she can become a follower and a marriage candidate [3]. LoreRim ships the mod's Patch Collection [12].
- **Storm-Hull Farm** (between the Western Watchtower and Fort Greymoor, Whiterun Hold): the farm starts intact with two elderly residents, Olena and Ulf Storm-Hull [4][12]. It is then destroyed (in LoreRim, by the VIGILANT trigger, see above). After 10+ days Aevar Storm-Hull arrives to rebuild it, and later stages take 25 days each. He later settles with a wife and child, Elsun and Jond [4][12]. If Aevar dies, rebuilding stops permanently [4].
- **Kolskeggr Mine / Thorvar's House / Pavo's House** (the Reach): the mine starts burned and ransacked. After Pavo Attius's Forsworn-clearing quest, Thorvar repairs a house, and a second miner, an extra guard and a guard tower follow [5]. Plugin NPCs include Thorvar, Hunroor and Uthard [12]. The author gives two different timings for the final stage (see LoreRim notes) [5]. LoreRim also ships a *Kolskeggr TGC Addon - Environs Patch* [12].

### Other landmarks
- **Fort Dunstad** (the Pale, south of Dawnstar; bandits in vanilla) [14]: Snozz's mod turns it into a settlement with **Fort Dunstad Trader**, **Fort Dunstad Blacksmith** and the inn **The Stumbling Sabrecat**, plus Commander's Quarters and Prison cells [6]. Named NPCs are Evelynn, Hillerica, Isgjaarn, Jolgvarr and Rolfkur [6]. A web-search summary of the Nexus page mentions bandits, a general trader and a forge [15]. Who runs which service was not confirmed (unverified). LoreRim ships Lux, Lux Orbis, Medieval Towers and Imperial Castles patches for it [12].
- **Shrine of Azura** (Ryn's Azura's Shrine): reworked approach. An undercroft under the statue houses the priestess (the cell is "Aranea Lenith's Home"), and the dungeon Ven Fillaan Miin is attached [7][12]. See `areas/new-dungeons.md`.
- **Dovahdein** (Throat of the World): a small, lockable vault surrounded by freezing winds that need Clear Skies [8]. It has 8 mannequins, weapon racks, and displays for Dragon Priest masks, dragon claws, Daedric artifacts, Elder Scrolls, Black Books and the Thieves Guild trophies [8]. A strongbox supplies quest items you normally hand over, and there is an Akatosh shrine [8]. The plugin also adds Greybeard's Robes, Hood and Boots [12].
- **Stendarr's Beacon** (Ivy's overhaul): after the Hall of the Vigilant is destroyed, surviving Vigilants relocate here. A few days later the ruined shack is rebuilt and more Vigilants arrive. The overhaul adds a working lighthouse, new clutter and full navmesh [9]. LoreRim installed its Imperial Castles, Knight of the North, Lux Orbis, Meridia's Order, Solitude Temple Frescoes and Vigilant patches [9].
- **Chantry of Auriel** (Forgotten Vale, Inner Sanctum exterior): a visual-only expansion that makes the ruin look grander. It adds no new areas or navmesh [10][12].
- **Ascend's hidden peaks**: there are ten peaks [11]. On Solstheim they are Frykte Peak, Hvitkald Peak, Mortrag Peak and Mount Moesring. In Skyrim they are Brittleshin Hills, Mount Anthor, Forelhost Mountain, Skyborn Range and High Hrothgar, plus an optional Shrine to Kyne. Paths start at a small cairn with a red cloth, and wind shows the way [11]. Meditating at a summit grants about 5% fire (Solstheim) or frost/shock (Skyrim) resistance, capped at 15%, and only in cold areas [11]. Full write-up: `mod-added/ascend-hidden-peaks.md`.

## Rewards & notable items
- Ascend: the Kyne's Warm Embrace, Kyne's Storm Veil and Kyne's Rainfall Ward spells (resistance bonuses), the hidden Frost Dagger of Self-Doubt, the Ice-Breaker hammer and the Wayfarer Scarf [11][12].
- Eisa Blackthorn becomes a follower and marriage candidate [3].
- East Empire Company Outpost: a new general merchant [2].

## LoreRim notes
- **Taliesin patch:** LoreRim ships *Environs - The Shrines of Talos - Taliesin Patch*. With it, Taliesin (The Thalmor's Shadow) appears only after the Ilinalta massacre, his level requirement drops to 5, and his auto-start finder quest is disabled [1][12]. See `mod-added/taliesin-thalmors-shadow.md`.
- **Kolskeggr timing contradiction:** the author first says rebuilding begins after the quest plus 12 days, and the final state after another 20 days. The same page's stage list says the final stage needs "player gains 7 additional levels" [5]. The page notes an older version used levels, so the stage list may be stale. The installed plugin's trigger scripts check the quest "Kolskeggr Mine" (stage 98) and a days-passed array. Six triggers hold 12 and 42 days and one holds 12 and 32, and no level-requirement property was found [18]. That supports day-based timing. Reading 42 as "30 more days" rather than the page's "20 more days" is an inference from the raw property values.
- **Ascend:** the optional Shrine to Kyne patch is not installed. LoreRim's mod folder holds only the main plugin, and no "Shrine to Kyne" mod ships [12]. The main plugin still contains a "Shrine to Kyne Meditation" message, so expect nine reachable peaks (medium confidence) [12].
- **Whiterun Talos statue:** LoreRim also ships *Kynareth Replaces Talos - Civil War Consequence*. After an Imperial win at the Battle for Whiterun, the Talos statue is removed in 2-5 days and replaced by Kynareth's 5-7 days later [16].
- **Hall of the Vigilant:** LoreRim also ships *Stendarr Rising*, a "Hearthfire Lite" rebuild of the destroyed Hall [17]. This pairs with Stendarr's Beacon becoming the Vigilants' refuge [9].
- Environs mods require the *Environs - Master Plugin*, which is enabled [2][12].

## Related
- `areas/new-dungeons.md` (Ven Fillaan Miin, Ebony Keep); `areas/dragons-awaken-lairs.md`.
- `mod-added/ascend-hidden-peaks.md`, `mod-added/taliesin-thalmors-shadow.md`, `mod-added/vigilant.md`.
- `vanilla-changes/civil-war.md`, `vanilla-changes/dawnguard.md`, `vanilla-changes/side-quests-and-misc.md`.
- Hold files: `areas/the-rift-and-riften.md`, `areas/hjaalmarch-and-morthal.md`, `areas/whiterun-hold.md`, `areas/the-reach-and-markarth.md`, `areas/eastmarch-and-windhelm.md`, `areas/the-pale-and-dawnstar.md`, `areas/winterhold.md`.

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Talos shrine sites, triggers, Taliesin patch behaviour | [Nexus 85141](https://www.nexusmods.com/skyrimspecialedition/mods/85141) via meta.ini cache in LoreRim mod "Environs - The Shrines of Talos - Patch Collection" | 2024-02-25 (nexusLastModified) | 2026-10-02 |
| 2 | Riften Warehouse trigger (Supply and Demand + 15 days), merchant, gate triggers | LoreRim install: Environs - Riften Warehouse; [Nexus 88024](https://www.nexusmods.com/skyrimspecialedition/mods/88024) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 3 | Eisa's House stages, follower/marriage | LoreRim install: Environs - Hroggar's House; [Nexus 83457](https://www.nexusmods.com/skyrimspecialedition/mods/83457) via meta.ini cache | cache 2024-06-01 | 2026-10-02 |
| 4 | Storm-Hull Farm stages, file options, Vigilant version installed | LoreRim install: Environs - The Ruined Tundra Farmhouse (plugin header "v3.02 - Vigilant", master `Vigilant.esm`, meta.ini FOMOD "Vigilant Version"); [Nexus 72981](https://www.nexusmods.com/skyrimspecialedition/mods/72981) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 5 | Kolskeggr stages and contradictory timings | LoreRim install: Environs - Kolskeggr; [Nexus 78477](https://www.nexusmods.com/skyrimspecialedition/mods/78477) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 6 | Fort Dunstad new cells, services locations, NPCs | LoreRim install: Fort Dunstad (`Fort Dunstad.esp` LCTN/CELL/FACT/NPC_ records; no cached Nexus description) | mod f1.01 | 2026-10-02 |
| 7 | Azura shrine undercroft + dungeon | LoreRim install: Ryn's Azura's Shrine; [Nexus 86592](https://www.nexusmods.com/skyrimspecialedition/mods/86592) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 8 | Dovahdein vault access, key, displays | LoreRim install: Dovahkiin's Vault SSE (README.txt, meta.ini); [Nexus 42237](https://www.nexusmods.com/skyrimspecialedition/mods/42237) | cache 2026-01-11 | 2026-10-02 |
| 9 | Stendarr's Beacon dynamic Vigilant relocation; installed patches | [Nexus 156160](https://www.nexusmods.com/skyrimspecialedition/mods/156160) via web-search snippet (page 403); LoreRim install meta.ini FOMOD + helper quest record | n/a | 2026-10-02 |
| 10 | Chantry visual overhaul | LoreRim install: The Chantry - An Overhaul; [Nexus 171886](https://www.nexusmods.com/skyrimspecialedition/mods/171886) via meta.ini cache | cache 2026-02-06 | 2026-10-02 |
| 11 | Ascend peaks, rewards, path markers | LoreRim install: Ascend - Hidden Peaks of Skyrim; [Nexus 120802](https://www.nexusmods.com/skyrimspecialedition/mods/120802) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 12 | Plugin names: LCTN/CELL/NPC_/BOOK/KEYM/SPEL/MESG records; enabled mods and patches | LoreRim install: plugin records of all listed mods; `profiles/Default/modlist.txt`; mod folder listings | n/a | 2026-10-02 |
| 13 | VIGILANT start gate; Laid to Rest gates Dawnguard | [LoreRim site — New Lands](https://www.lorerim.com/guides/quests/new-lands); [LoreRim site — Main Quests](https://www.lorerim.com/guides/quests/main) | n/a | 2026-10-02 |
| 14 | Fort Dunstad vanilla location/occupants | [UESP — Skyrim:Fort Dunstad](https://en.uesp.net/wiki/Skyrim:Fort_Dunstad) | n/a | 2026-10-02 |
| 15 | Fort Dunstad as settlement (trader, forge) | [Nexus 144471](https://www.nexusmods.com/skyrimspecialedition/mods/144471) via web-search snippet (page 403) | n/a | 2026-10-02 |
| 16 | Kynareth replaces Whiterun's Talos statue | LoreRim install: Kynareth Replaces Talos - Civil War Consequence; [Nexus 91440](https://www.nexusmods.com/skyrimspecialedition/mods/91440) via meta.ini cache | mod v2.1.0.0 | 2026-10-02 |
| 17 | Stendarr Rising Hall rebuild | LoreRim install: Stendarr Rising - The Hall of the Vigilant Rebuild; [Nexus 49346](https://www.nexusmods.com/skyrimspecialedition/mods/49346) via meta.ini cache | mod v1.6.0.0 | 2026-10-02 |
| 18 | Trigger scripts (Tundra Farmhouse Vigilant quest stage 8; Kolskeggr days-passed values and trigger quest); installed VIGILANT start option | LoreRim install: `Environs - Tundra Farmhouse.esp` and `Environs - Kolskeggr.esp` VMAD script properties (verifier parse); imports/official-quests.json (FormID 01FD72 = FreeformKolskeggrA "Kolskeggr Mine"); `VIGILANT - Delayed Start` meta.ini (FOMOD "Option 2: MB + DG", [Nexus 57961](https://www.nexusmods.com/skyrimspecialedition/mods/57961) description cache) | mod f3.03 / 3.0.2.0 | 2026-10-02 |
