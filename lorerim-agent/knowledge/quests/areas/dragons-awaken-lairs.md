---
id: dragons-awaken-lairs
title: Dragons Awaken — Named Dragons at Dragon Mounds and Lairs
kind: area
category: dungeons
summary: Dragons Awaken places unique, named, non-respawning dragons at Skyrim's and Solstheim's dragon mounds and lairs. They appear as mounds open over the course of the main quest, each mound gets a map marker, and the mound is marked cleared when its dragon dies. In LoreRim the mounds themselves are reworked by Ryn's Dragon Mounds Collection.
mods:
  - name: Dragons Awaken
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/44550
    version: 2.0.0.0
  - name: Ryn's Dragon Mounds Collection
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/85647
    version: 1.1.1.0
plugins: [Dragons Awaken.esp, "Ryn's Dragon Mounds AIO.esp", "Nature of the Wildlands - Ryn's Dragon Mounds AIO.esp", "Granite Hill - Ryn's Dragon Mounds Patch.esp", "Lux Orbis - Ryn's Dragon Mounds.esp", "Northern Roads - Ryn's Dragon Mounds.esp"]
quests: [Labyrinthian]
locations: [Mzulft Foothills, Bonestrewn Crest, Witchmist Burial, Karth River Forest, Robber's Gorge Bluffs, Lost Tongue Pass, Autumnwatch Woods, Great Henge, Karthspire Bluffs, Lone Mountain, Bloodlet Peaks, Evergreen Woods, Bilegulch Ridge, Rorikstead Hills, Labyrinthian Peaks, Sea Shore Foothills, Shimmermist Hills, Reachwater Pass, Ragnvald Vale, Yorgrim, Isinfier, Dragon Roost Island]
region: All Skyrim holds and Solstheim
start: No quest. Progress the main quest. Mounds open at set main-quest stages (Dragon Rising through Alduin's Wall), and Dragons Awaken's named dragon is at the mound once it opens. Lair dragons sit at fixed vanilla dragon lairs.
related: [vanilla-changes/main-quest-and-alternate-start.md, mod-added/dragon-hunting.md, mod-added/destroy-the-dragon-cult.md, areas/new-dungeons.md, areas/new-landmarks-and-shrines.md, areas/solstheim.md]
sources: [1, 2, 3, 4, 5, 6, 7]
confidence: medium
updated: 2026-10-02
---

# Dragons Awaken — Named Dragons at Dragon Mounds and Lairs

In vanilla Skyrim, Alduin is implied to resurrect the dragons buried in the mounds, but apart from two scripted encounters this never actually happens [1]. *Dragons Awaken* (by Kamikaze) fixes that by placing unique named dragons that appear once each mound opens [1]. Every mound gets a map marker, counts as a possible radiant-quest location, and is marked cleared when its dragon dies [1]. The dragons do not respawn, so Skyrim can be cleared of them [1]. The mod is not a difficulty mod and does not change dragon stats [1]. LoreRim places it under the "Gameplay - Progression & Abilities" separator, and it is enabled in the Default profile [2].

## Starting in LoreRim
- **Trigger:** main-quest progress. Mounds do not all open at once [1]. Vanilla opening points per UESP [3]:
  - **Start of Dragon Rising:** Bonestrewn Crest, Mzulft Foothills.
  - **A Blade in the Dark:** Kynesgrove.
  - **The Way of the Voice:** Witchmist Grove.
  - **Diplomatic Immunity:** Karth River Forest, Robber's Gorge Bluffs, Autumnwatch Woods, Autumnshade Woods, Lost Tongue Pass, and Great Henge (after leaving Riverwood for Solitude).
  - **Elder Knowledge:** Labyrinthian Peaks, Sea Shore Foothills, Shimmermist Hills, Yorgrim, Reachwater Pass, Ragnvald Vale.
  - **Alduin's Wall:** Karthspire Bluffs, Lone Mountain, Bilegulch Ridge, Evergreen Woods, Bloodlet Peaks, and Rorikstead (after leaving Riverwood for Sky Haven Temple).
  - **End of Dragon Rising:** the Solstheim mounds Frozen Shoals and Temple Foothills.
- **LoreRim main-quest changes** (alternate start, Defeat the Dragon Cult, Paarthurnax expansion) affect *when* you reach these stages. See `vanilla-changes/main-quest-and-alternate-start.md` [4]. How they interact with mound timing was not separately verified.
- UESP warns that some mounds can spawn dragons of a much higher level than your character [3].

## Quests
No new journal quests [2]. The plugin overrides the vanilla misc quest `dunLabyrinthian` ("Labyrinthian") [2][5]. Its dragon table lists Krilotdiilvahlok, the vanilla Labyrinthian dragon, and the plugin carries an NPC record for him [1][2]. The override is probably related to that, but the exact change was not checked (unverified). Separately, LoreRim's *Dragon Hunting* mod adds dragon-hunting quests; see `mod-added/dragon-hunting.md`.

## Locations
Named dragons by mound or lair. The table is the author's own (README in the mod folder and Nexus description) [1][6]. An asterisk (*) means the dragon already exists in vanilla [1].

| Dragon | Meaning | Mound / lair | Hold |
|---|---|---|---|
| Mirmulnir (*) | Allegiance Strong Hunt | Whiterun Watchtower | Whiterun |
| Odahviing (*) | Snow Hunter Wing | Autumnshade Woods | The Rift |
| Krilqolaasdaan | Brave Herald Doom | Mzulft Foothills | Eastmarch |
| Beinfeldok | Foul Feral Hound | Bonestrewn Crest | Eastmarch |
| Tahrodiisvokunhahkun | Treacherous Shadow Axe | Witchmist Burial | Eastmarch |
| Sahloknir (*) | Phantom Sky Hunt | Kynesgrove | Eastmarch |
| Dwiinjotbahlok | Steel Maw Hunger | Karth River Forest | Hjaalmarch |
| Hunhevnograh | Hero Brutal Battle | Robber's Gorge Bluffs | Hjaalmarch |
| Midqoronaan | Loyal Lightning Archer | Lost Tongue Pass | The Rift |
| Felodkest | Ferocious Snow Tempest | Autumnwatch Woods | The Rift |
| Vuljotnaak (*) | Dark Maw Eat | Great Henge | Whiterun |
| Onikahjot | Wise Hunter Jaw | Karthspire Bluffs | The Reach |
| Lottoorvith | Great Inferno Serpent | Lone Mountain | Whiterun |
| Krahjotdaan | Cold Maw Doom | Ancient's Ascent | Falkreath |
| Vokulraandrog | Evil Animal Lord | Evergreen Woods | Falkreath |
| Munaxlumnaarvith | Cruel Valley Serpent | Bilegulch Ridge | Falkreath |
| Nahagliiv (*) | Fury Burn Wither | Rorikstead Hills | Whiterun |
| Faasnustrundrog | Fearless Storm Lord | Eldersblood Peak | Hjaalmarch |
| Beinahzidkriid | Foul Bitter Slayer | Sea Shore Foothills | The Pale |
| Noroklokkroniid | Fierce Sky Conqueror | Shimmermist Hills | The Pale |
| Dubahdaan | Devour Wrath Doom | Reachwater Pass | The Reach |
| Sahqonsosjot | Crimson Blood Maw | Ragnvald Vale | The Reach |
| Viinturuth (*) | Shine Hammer Rage | Yorgrim | The Pale |
| Bahzunyol | Wrath Weapon Fire | Northwind Summit | Eastmarch |
| Spaankrenkendov | Shield Break Warrior | Skyborn Altar | Hjaalmarch |
| Kromahved | Sorceror Fell Black | Dragontooth Crater | The Reach |
| Grahkrindrog | Battle Courageous Lord | Mount Anthor | Eastmarch |
| Vulgrahvol | Dark Battle Horror | Shearpoint | The Pale |
| Munaxqowuld | Cruel Lightning Whirlwind | Arcwind Point | The Rift |
| Qostrunnah | Lightning Storm Fury | Dragon Roost Island | Solstheim |
| Ahbiilok | Hunter Blue Sky | Isinfier | Solstheim |
| Kahsahqonruvaak | Prideful Crimson Raven | Saering's Watch | Solstheim |
| Vulthuryol (*) | Dark Overlord Fire | Blackreach | — |
| Naaslaarum (*) / Voslaarum (*) | (untranslatable) | Forgotten Vale | — |
| Krilotdiilvahlok (*) | Valiant Undead Guardian | Labyrinthian | — |
| Krosulhah (*) / Sahrotaar (*) | Sorceror Time Mind / Phantom Rot Servant | Apocrypha | — |

- **New dragon NPC records in the plugin (27):** Ahbiilok, Bahzunyol, Beinahzidkriid, Beinfeldok, Dubahdaan, Dwiinjotbahlok, Faasnustrundrog, Felodkest, Grahkrindrog, Hunhevnograh, Kahsahqonruvaak, Krahjotdaan, Krilotdiilvahlok, Krilqolaasdaan, Kromahved, Lottoorvith, Midqoronaan, Munaxlumnaarvith, Munaxqowuld, Noroklokkroniid, Onikahjot, Qostrunnah, Sahqonsosjot, Spaankrenkendov, Tahrodiisvokunhahkun, Vokulraandrog, Vulgrahvol [2].
- **New mound location records (22):** Mzulft Foothills, Witchmist Burial, Bonestrewn Crest, Karth River Forest, Robber's Gorge Bluffs, Lost Tongue Pass, Autumnwatch Woods, Great Henge, Karthspire Bluffs, Lone Mountain, Bloodlet Peaks, Evergreen Woods, Bilegulch Ridge, Rorikstead Hills, Labyrinthian Peaks, Sea Shore Foothills, Shimmermist Hills, Reachwater Pass, Ragnvald Vale, Yorgrim, Isinfier and Dragon Roost Island [2]. The plugin also overrides vanilla location records including Arcwind Point, Eldersblood Peak, Mount Anthor, Skyborn Altar, Granite Hill and Frost River Farm [2].
- **Naming differences from UESP:** Dragons Awaken calls the Eastmarch mound "Witchmist Burial" where UESP says "Witchmist Grove". It names the Solstheim mound locations "Isinfier" and "Dragon Roost Island", while UESP lists the Solstheim mounds as Frozen Shoals and Temple Foothills [2][3]. Which Solstheim record is which mound was not verified.
- **Mound appearance in LoreRim:** *Ryn's Dragon Mounds Collection* overhauls all 22 Skyrim dragon mounds. Their layouts are more consistent and "more exciting to explore", often with aspects that change along the main questline [7]. LoreRim also enables the *Nature of the Wildlands*, *Granite Hill*, *Lux Orbis*, *Northern Roads*, *Orc Exiles - Bilegulch* and *Unmarked Locations Pack* patches for those mounds, plus *Dragon Mounds - Better Collision and Mesh Fixes* [2].

## Rewards & notable items
No unique items are sourced [1][6]. Each kill permanently clears that mound, because the dragons do not respawn [1].

## LoreRim notes
- **Difficulty:** in version 2 the author reset dragon encounter difficulty to vanilla settings, "making most dragons easier to beat", and set Mirmulnir's encounter to Easy (it had been Very Hard) [6]. Dragons Awaken does not change dragon stats, so how hard each fight is depends on LoreRim's other dragon mods [1].
- **ESL flag — contradiction:** the author warns "Do not flag the plugin as ESL. I've tried it and it will cause crashes." [1]. LoreRim's copy of `Dragons Awaken.esp` has TES4 header flag 0x200 set [2], which UESP documents as "Light Master" [5]. No LoreRim-specific crash report was found. Treat the warning as relevant only if you rebuild or merge the plugin.
- **Random dragons:** the author recommends *Timing Is Everything* to reduce random dragon encounters [1]. LoreRim enables *Timing is Everything SE* and its Settings Loader, but LoreRim's dragon-attack settings were not verified [2].
- **Mound count — contradiction:** the author's text says "There are 26 dragon mounds" [1]. His own table names 38 dragons: 22 at mounds matching UESP's list (counting Isinfier and Dragon Roost Island as the Solstheim pair) and 16 at the Whiterun Watchtower and other lairs or areas. The plugin adds 22 mound locations, of which five have editor IDs ending in "UNUSED": Bonestrewn Crest, Lost Tongue Pass, Autumnwatch Woods, Bloodlet Peaks and Labyrinthian Peaks [2]. UESP lists 24 mounds, 22 in Skyrim and 2 on Solstheim [3]. Bloodlet Peaks has a location record but no dragon in the author's table [1][2].

## Related
- `vanilla-changes/main-quest-and-alternate-start.md`: how LoreRim's main quest runs; it gates mound opening.
- `mod-added/dragon-hunting.md`, `mod-added/destroy-the-dragon-cult.md`.
- `areas/new-landmarks-and-shrines.md`: Ascend's Mount Anthor peak shares a site with the dragon Grahkrindrog.
- `areas/solstheim.md`.

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Features, dragon table, ESL warning, 26-mound claim, TIE recommendation | [Nexus 44550](https://www.nexusmods.com/skyrimspecialedition/mods/44550) via meta.ini cache (LoreRim install: Dragons Awaken) | cache 2026-01-11 | 2026-10-02 |
| 2 | LCTN/NPC_ records, dunLabyrinthian override, ESL header flag, enabled mods/plugins, separator | LoreRim install: `Dragons Awaken.esp` records + TES4 header; `profiles/Default/modlist.txt`, `plugins.txt`; imports/mods/dragons-awaken.md | mod v2.0.0.0 | 2026-10-02 |
| 3 | Vanilla mound list, opening stages, high-level warning | [UESP — Skyrim:Dragon Mound](https://en.uesp.net/wiki/Skyrim:Dragon_Mound) | n/a | 2026-10-02 |
| 4 | LoreRim main-quest expansions | [LoreRim site — Main Quests](https://www.lorerim.com/guides/quests/main) | n/a | 2026-10-02 |
| 5 | dunLabyrinthian override listing; meaning of flag 0x200 | imports/vanilla-quest-overrides.json; [UESP — Skyrim Mod:Mod File Format/TES4](https://en.uesp.net/wiki/Skyrim_Mod:Mod_File_Format/TES4) | n/a | 2026-10-02 |
| 6 | Changelog (v2 difficulty reset, Mirmulnir Easy), README dragon table | LoreRim install: `Dragons Awaken/Dragons Awaken.txt` (author README) | mod v2 | 2026-10-02 |
| 7 | Ryn's 22 dragon-mound overhauls | LoreRim install: Ryn's Dragon Mounds Collection; [Nexus 85647](https://www.nexusmods.com/skyrimspecialedition/mods/85647) via meta.ini cache | 2023-04-10 (nexusLastModified) | 2026-10-02 |
