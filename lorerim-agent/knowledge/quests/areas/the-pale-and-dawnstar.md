---
id: the-pale-and-dawnstar
title: The Pale and Dawnstar (Nightgate Inn, Anga's Mill) in LoreRim
kind: area
category: region
summary: LoreRim rebuilds Dawnstar with The Great City of Dawnstar (fortifications, an expanded port, a general goods merchant) plus Cities of the North - Dawnstar architecture. It adds the free player home Breaking Dawn Cottage, whose key is in Nightcaller Temple, and makes townsfolk actually have nightmares until "Waking Nightmare". Nightgate Inn and Anga's Mill get COTN-style overhauls, Dawnstar gets a carriage, and Vigilant and The Gift of Saturalia start here.
mods:
  - name: The Great City Of Dawnstar SSE Edition
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/19491
    version: 2.12.0.0
  - name: Cities of the North - Dawnstar
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/28952
    version: 1.4.0.0
  - name: COTN Dawnstar Patch Collection
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/30885
    version: 5.9.0.0
  - name: Breaking Dawn Cottage - A COTN Dawnstar Addon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/130643
    version: 1.0.0.0
  - name: Nightmares of Skyrim - Dawnstar Only
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/113977
    version: 1.1.0.0
  - name: Nightgate Inn Revived
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/121244
    version: 1.3.0.0
  - name: Immersive Nightgate Inn dialogue
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/158270
    version: 1.0.0.0
  - name: Anga's Mill - Cities of the North Addon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/64398
    version: 1.0.4.0
  - name: Relic of Dawnstar - TESLORE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/97460
    version: 1.0.1.0
plugins: [The Great City of Dawnstar.esp, COTN - Dawnstar.esp, COTN Dawnstar - The Great City of Dawnstar Patch.esp, COTN Dawnstar - Requiem Patch.esp, photndawnstar.esp, Nightmares of Skyrim.esp, Nightgate Inn Revived.esp, Nightgateinalternatedialogue.esp, COTN Addon - Anga's Mill.esp, Relic of Dawnstar - COTN.esp]
quests: []
locations: [Ulrik's House, Dawnstar Warehouse, Breaking Dawn Cottage, The White Hall, Windpeak Inn, The Mortar and Pestle, Dawnstar Barracks, Nightgate Inn, Aeri's House, Anga's Mill Common House]
region: The Pale (northern Skyrim); capital Dawnstar
start: Dawnstar is open from the start. Breaking Dawn Cottage's key is in a satchel in the Nightcaller Temple dorms (reached during "Waking Nightmare" once the miasma is dispersed). Vigilant's recruiter Altano waits at Dawnstar's inn after the main quest, Dawnguard and "House of Horrors" per the LoreRim site; the installed delayed-start plugin instead checks level 25+, House of Horrors and Kindred Judgment. The Gift of Saturalia starts with an old trader camped south of Dawnstar's main entrance.
related: [mod-added/vigilant.md, mod-added/the-gift-of-saturalia.md, mod-added/redeeming-fultheim.md, vanilla-changes/daedric-quests.md, vanilla-changes/dark-brotherhood.md, areas/vigilant-realms.md, areas/winterhold.md, areas/eastmarch-and-windhelm.md, areas/hjaalmarch-and-morthal.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
confidence: high
updated: 2026-10-02
---

# The Pale and Dawnstar (Nightgate Inn, Anga's Mill) in LoreRim

The Pale is a snowy northern hold whose capital is the port of Dawnstar. Its settlements include Anga's Mill, Nightgate Inn and Heljarchen Hall, plus the Dark Brotherhood's Dawnstar Sanctuary and the Hall of the Vigilant [10]. LoreRim combines **The Great City of Dawnstar**, which adds fortifications, an expanded port and "a general goods merchant", with **Cities of the North - Dawnstar**, which gives every building a new unique model and matching interiors [2][3]. Smaller mods add a free player home, give the town's dreaded nightmares an audible form, and overhaul Nightgate Inn and Anga's Mill in COTN style [5][6][7][9].

## Starting in LoreRim
- Dawnstar needs no unlock. The town mods are active from the start [13].
- **Breaking Dawn Cottage (free player home):** the door near Silus Vesuius's House is locked. The key is "inside a satchel in Nightcaller Temple, in the dorms. You will need to dissipate the miasma to get there" — that is, progress the vanilla Daedric quest "Waking Nightmare" [5].
- **Vigilant (LoreRim gate):** complete the main quest, Dawnguard and Molag Bal's "House of Horrors". Then a Vigilant named **Altano** recruits you "from the inn in Dawnstar" [12]. *Disputed:* the installed `Vigilant - Delayed Start.esp` checks player level ≥ 25 (global `zzzVigilantMinLevel` = 25), "The House of Horrors" and Dawnguard's finale "Kindred Judgment" completed, and has no main-quest condition [14]. See LoreRim notes.
- **The Gift of Saturalia:** find "a bearded old trader camping outside of Dawnstar, south of the main entrance" [12].
- **Nightmares:** until you complete "Waking Nightmare", sleeping Dawnstar NPCs randomly cry out in nightmares (50% chance per roll by default, configurable with the console variable `jb1dreams`), and others react. Completing the quest stops them [6].

## Quests
None of these town mods add journal quests. The Great City of Dawnstar and COTN Dawnstar have no QUST records with journal text, and Nightmares of Skyrim's records (`JB1Nightmares`, `JB1Reaction`, `JB1Dawnstar`) are background controllers [1][6]. Quests that start or run in the Pale are covered elsewhere: Vigilant (Dawnstar inn), The Gift of Saturalia (outside Dawnstar), the vanilla "Waking Nightmare" (Nightcaller Temple), and Redeeming Fultheim (Fultheim drinks at Nightgate Inn, per UESP) [10][12]. See Related.

## Locations
- **Ulrik's House** — new house from The Great City of Dawnstar. **Ulrik** is the plugin's only new NPC, with a "Key to Ulrik's House". The mod adds one general goods merchant, likely Ulrik (inferred, unverified) [1][2].
- **Dawnstar Warehouse** — new interior from The Great City of Dawnstar [1].
- **Upper and lower districts:** the mod contrasts the upper district (Jarl, guard barracks, defence) with the lower port area (trade), adds fortifications, and only alters the Jarl's palace interior [2].
- **Breaking Dawn Cottage** — near Silus Vesuius's House. It has a cooking station, a bookshelf for 54 books, two beds (you and a follower), a tanning rack, safe containers and a Shrine of Talos [5].
- **COTN interiors** (vanilla names, new models and interiors): **The White Hall** (Jarl's longhouse; COTN gives it major-city longhouse music), **Windpeak Inn**, **The Mortar and Pestle**, **Dawnstar Barracks**, **Dawnstar Jail**, **Silus Vesuius' House**, **Beitild's House**, **Brina's House**, **Fruki's House**, **Irgnir's House**, **Leigelf's House**, **Rustleif's House** [3].
- **Nightgate Inn** — in the Pale, west of Windhelm and east of Shrouded Grove, kept by **Hadring**, with Fultheim and the Orc Balagog gro-Nolob as residents [10]. Nightgate Inn Revived adds new Dawnstar/Windhelm-style building models, an outhouse, stables and a butcher shack, and a redesigned interior and cellar with two additional rooms. It is purely visual and does not edit NPCs or quests [7]. Immersive Nightgate Inn dialogue rewords Hadring's line about his customers into one about long-term residents, to suit crowded modded inns [8].
- **Anga's Mill** — in the Pale, west of Windhelm Stables, on the north bank of the River Yorgrim; Aeri owns the sawmill [10]. The COTN addon replaces the two farmhouses with COTN Dawnstar meshes and the lumber mill with a COTN Falkreath mesh, and overhauls **Aeri's House** and the **Anga's Mill Common House** interiors [9].

## Getting there
- **Carriage:** vanilla Dawnstar is a destination only, with no stationed carriage [11]. CFTO adds a carriage to Dawnstar. Its Pale destinations are Dawnstar, Heljarchen (Nightgate Inn) and Heljarchen Hall [11].
- **Ferry:** Dawnstar is a north-coast ferry stop between Windstad Manor and Frostflow Lighthouse [11]. The CFTO Bittercup fix moves Harlaug's ferry dialogue, for the Giant's Tooth trip, onto CFTO's Dawnstar ferryman [11].
- LoreRim's Better Carriage Destinations preset uses distance pricing (×0.4, maximum 400 gold, time passes) [11].
- **Wait Carriage in Inns** can summon a carriage at Windpeak Inn and other minor inns; Dawnstar is among its destinations [11].

## LoreRim notes
- `COTN Dawnstar - Requiem Patch.esp` is active. Other active COTN Dawnstar patches include Gore, Meridia's Order, Wintersun, the CC Staff of Sheogorath and Vigil Enforcer, AI Overhaul, Lux / Lux Orbis, and Northern Roads [4][13].
- The Great City of Dawnstar and COTN Dawnstar are reconciled by `COTN Dawnstar - The Great City of Dawnstar Patch.esp` [13].
- **Vigilant start gate (site vs install):** the LoreRim site says to finish the main quest, Dawnguard and "House of Horrors" [12]. The installed `VIGILANT - Delayed Start` (Nexus 57961 v2.3.0.0) plugin's conditions are: player level ≥ the global `zzzVigilantMinLevel` (25.0), `GetQuestCompleted` on "The House of Horrors" (Skyrim.esm DA10) and on "Kindred Judgment" (Dawnguard.esm DLC1VQ08). No main-quest condition appears in that plugin [14]. Plan for level 25 either way.
- **Relic of Dawnstar - TESLORE** (`Relic of Dawnstar - COTN.esp`, two records, plus Base Object Swapper INIs) is active, but no description is cached and its content was not determined [13].

## Related
- [mod-added/vigilant.md](../mod-added/vigilant.md), [areas/vigilant-realms.md](vigilant-realms.md)
- [mod-added/the-gift-of-saturalia.md](../mod-added/the-gift-of-saturalia.md), [mod-added/redeeming-fultheim.md](../mod-added/redeeming-fultheim.md)
- [vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md), [vanilla-changes/dark-brotherhood.md](../vanilla-changes/dark-brotherhood.md)
- [areas/winterhold.md](winterhold.md), [areas/eastmarch-and-windhelm.md](eastmarch-and-windhelm.md), [areas/hjaalmarch-and-morthal.md](hjaalmarch-and-morthal.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | LCTN/CELL/NPC/KEYM names | LoreRim install: `The Great City of Dawnstar.esp` records | mod v2.12.0.0 | 2026-10-02 |
| 2 | TGC Dawnstar features | [Nexus 19491](https://www.nexusmods.com/skyrimspecialedition/mods/19491) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 3 | COTN architecture, interiors | [Nexus 28952](https://www.nexusmods.com/skyrimspecialedition/mods/28952) via meta.ini cache; `COTN - Dawnstar.esp` CELL/LCTN records | 2023-11-20 | 2026-10-02 |
| 4 | patch collection | [Nexus 30885](https://www.nexusmods.com/skyrimspecialedition/mods/30885) via meta.ini cache | n/a | 2026-10-02 |
| 5 | Breaking Dawn Cottage | [Nexus 130643](https://www.nexusmods.com/skyrimspecialedition/mods/130643) via meta.ini cache; plugin LCTN | cache 2026-01-11 | 2026-10-02 |
| 6 | nightmares | [Nexus 113977](https://www.nexusmods.com/skyrimspecialedition/mods/113977) via meta.ini cache; plugin QUST records | cache 2026-01-11 | 2026-10-02 |
| 7 | Nightgate Inn overhaul | [Nexus 121244](https://www.nexusmods.com/skyrimspecialedition/mods/121244) via meta.ini cache | 2025-06-14 | 2026-10-02 |
| 8 | Hadring dialogue | [Nexus 158270](https://www.nexusmods.com/skyrimspecialedition/mods/158270) via meta.ini cache | n/a | 2026-10-02 |
| 9 | Anga's Mill overhaul | [Nexus 64398](https://www.nexusmods.com/skyrimspecialedition/mods/64398) via meta.ini cache; plugin CELL | 2022-05-08 | 2026-10-02 |
| 10 | hold geography; Nightgate Inn and Anga's Mill locations/residents | UESP — [The Pale](https://en.uesp.net/wiki/Skyrim:The_Pale), [Nightgate Inn](https://en.uesp.net/wiki/Skyrim:Nightgate_Inn), [Anga's Mill](https://en.uesp.net/wiki/Skyrim:Anga%27s_Mill) | n/a | 2026-10-02 |
| 11 | carriages/ferries; LoreRim preset; inn carriages | [UESP — Carriage](https://en.uesp.net/wiki/Skyrim:Carriage); Nexus [8379 CFTO](https://www.nexusmods.com/skyrimspecialedition/mods/8379), [60974 CFTO Bittercup fix](https://www.nexusmods.com/skyrimspecialedition/mods/60974), [164485](https://www.nexusmods.com/skyrimspecialedition/mods/164485), [83044](https://www.nexusmods.com/skyrimspecialedition/mods/83044) via meta.ini; `LoreRim - MCM and INI Settings/MCM/Settings/Better Carriage Destinations.ini` | 2020-11-16 (CFTO) | 2026-10-02 |
| 12 | Vigilant and Saturalia starts | LoreRim site — New Lands / Creation Club (imports/lorerim-site/new-lands.md, creation-club.md) | n/a | 2026-10-02 |
| 13 | active mods/plugins | LoreRim install: `profiles/Default/modlist.txt`, `plugins.txt`, mod folders | n/a | 2026-10-02 |
| 14 | Vigilant delayed-start conditions | LoreRim install: `VIGILANT - Delayed Start/Vigilant - Delayed Start.esp` GLOB/CTDA records (decoded by verifier); [Nexus 57961](https://www.nexusmods.com/skyrimspecialedition/mods/57961) via meta.ini cache (all options require level 25+) | mod v2.3.0.0 | 2026-10-02 |
