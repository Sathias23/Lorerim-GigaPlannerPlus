---
id: haafingar-and-solitude
title: Haafingar and Solitude (LoreRim town expansions)
kind: area
category: towns
summary: In LoreRim, Solitude is expanded by two stacked overhauls — The Great City of Solitude (a larger port district with new homes and shops, via Rob's Bug Fixes plugin) and RedBag's Solitude (about 20 new houses, ~59 new citizens, nine new dock cabins, a walk-through docks tunnel and a trail to Castle Dour) — and Dragon Bridge is rebuilt as a fortress town. None of these town mods adds a quest; they are open from the start of the game.
mods:
  - name: RedBag's Solitude
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/42052
    version: 1.51.0.0
  - name: Rob's Bug Fixes - TGC Solitude
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/72117
    version: 2.0.0.0
  - name: The Great City of Solitude SSE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/22243
    version: f2.02
  - name: Rob's Bug Fixes - TGC Dragon Bridge
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/68412
    version: 1.2.0.0
  - name: The Great City of Dragon Bridge SSE Edition
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/19962
    version: 1.12.0.0
plugins: [RedBag's Solitude.esp, The Great City of Solitude.esp, The Great City of Dragon Bridge.esp]
quests: []
locations: [Solitude, Solitude Merchant's House, The Solitude Sanctuary, Solitude Windmill, The Leaning Cabin, The Empire Trader, Angeline's Aromatics, Solitude Brewery, Jakob's Farm, Frederik's Farm, Dragon Bridge, Guard House, Bjorn's House]
region: Haafingar Hold (Solitude, Solitude Docks, Dragon Bridge)
start: No start needed — the expanded districts and houses exist from a new game; walk or fast-travel to Solitude / Dragon Bridge.
related: [areas/the-reach-and-markarth.md, areas/hjaalmarch-and-morthal.md, areas/wyrmstooth-island.md, mod-added/unmasking-sybille.md, mod-added/revealing-rune.md, mod-added/storm-the-thalmor-embassy.md, mod-added/wyrmstooth.md, mod-added/bards-college-excavation.md, mod-added/arena-markarth-side-quests.md, vanilla-changes/civil-war.md, vanilla-changes/side-quests-and-misc.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
confidence: high
updated: 2026-10-02
---

# Haafingar and Solitude (LoreRim town expansions)

LoreRim stacks two Solitude overhauls: The Great City of Solitude (shipped as Archinatic's assets plus the "Rob's Bug Fixes" cleaned plugin) expands the port below the arch with new homes and shops, and RedBag's Solitude adds new houses in the upper city and docks, a docks tunnel and a new trail entrance [1][2][3][4][5]. Dragon Bridge, the other Haafingar town, is rebuilt as a fortified town by The Great City of Dragon Bridge [6][7]. These are world-space and interior additions only — none of the plugins carries a player-facing quest [1][3][6].

## Starting in LoreRim
- Nothing to unlock: the new districts, houses and NPCs are placed in the world from a new game; no quest, level or LoreRim-specific gate applies (the plugin records contain only a background dialogue record for TGC Solitude, `DialoguePortSolitudeTGCoS`, and no journal quests) [1][3].
- Solitude and Dragon Bridge are vanilla Haafingar Hold locations; the plugins parent `SolitudeLocation` and `DragonBridgeLocation` to Haafingar Hold [1][6][9].

## Quests
The town mods themselves add no quests [1][3][6]. Quests that LoreRim's site places in or around Solitude (covered in their own files):
- **Unmasking Sybille** — investigate the Court Wizard of Solitude, Sybille Stentor [10]. See `mod-added/unmasking-sybille.md`.
- **Revealing Rune** — help Rune of the Thieves Guild search for his past "along the coast of Solitude" [10]. See `mod-added/revealing-rune.md`.
- **Save the Icerunner – Lights Out Alternate Routes** — Jaree-Ra in Solitude plans the shipwreck; LoreRim adds alternate routes [11]. See `vanilla-changes/side-quests-and-misc.md`.
- **Storm the Thalmor Embassy** — lets you skip the party and go straight to the Thalmor Embassy during "Diplomatic Immunity" [12]; the Thalmor Embassy is a Haafingar Hold location [9]. See `mod-added/storm-the-thalmor-embassy.md`.
- **Wyrmstooth** — the island lies "north of Solitude across the Sea of Ghosts" [12]. See `areas/wyrmstooth-island.md`.

## Locations

### Solitude — RedBag's Solitude
Mod page features: 20 new houses (11 in the city, 9 in the docks), 59 new citizens with lore-friendly names but "no special dialog", overhauled/lowered walls so you can look down the cliff, a revamped docks tunnel that replaces the vanilla docks–windmill teleport with "a real tunnel you can actually go through", one extra entrance — "a narrow trail that will lead you to the Castle Dour" on the northern side of the city — and docks with "10 cabins (from vanilla 1), an extra longboat, and a windmill" [2]. New location records (exact in-game names) [1]:
- **Upper city** (parented to Solitude): Solitude Merchant's House, The Solitude Sanctuary, Gundrud's Family House, Balmir's House, Loviriil's House, Oritius' House, Ulrenssen's House, Thorleif's House, Valtyr's House, Rikvald's House, Jurgarne's House, Thormoor's House, Solitude Windmill [1].
- **Docks** (parented to Solitude Docks): The Leaning Cabin, Sverre's Cabin, Oyalf's Cabin, Qrvar's Cabin, Kodraug's Cabin, Gunnar's Cabin, Naspis' Cabin, Dorte's Cabin, Laurircella's Cabin [1].
- The plugin also re-records vanilla Solitude locations (e.g. The Katariah, Temple of the Divines) [1]. What "The Solitude Sanctuary" is beyond its name is not described in the sources read (unverified).

### Solitude Docks — The Great City of Solitude
The author describes it as transforming "Solitude's port into something truly worthy of Skyrim's capital city", with the port "greatly expanded with new homes, shops" [5]. The author also calls the mod outdated with "some small bugs" and says its new interiors are "still largely copy-pastes" [5]. LoreRim ships it with Rob's Bug Fixes, a cleaned replacement plugin for TGC Solitude v2.02 (improved navmeshes, forwarded USSEP changes) [4]. New location records [3]:
- **Shops/businesses:** The Empire Trader, Angeline's Aromatics (editor ID `SolitudeSwampsideApothecary…`, i.e. an apothecary), Solitude Brewery [3].
- **Homes:** Aksels House, Digitus Quintus' House, Hjoldan's House, Torbec's House, Tahlen-Ra's House, Freyja's House, Toril's House, Tilda's House [3].
- **Farms:** Jakob's Farm and Frederik's Farm (interior locations) [3].
- Which merchant sells what in these shops is not stated in the sources read (gap).

### Dragon Bridge — The Great City of Dragon Bridge
Dragon Bridge "is now a worthy fortress town guarding the road to Solitude" and "also adds a blacksmith"; the mod page notes the bridge is the only crossing of the Karth River into Haafingar [7]. LoreRim uses Rob's Bug Fixes' cleaned replacement plugin (for TGC Dragon Bridge 1.12), which forwards USSEP changes [6]. New location records: **Guard House** and **Bjorn's House** [6].

### Nearby: Markarth Side
The Arena-themed town **Markarth Side** sits "south east of Dragon Bridge" per its mod page, but its plugin assigns it to Hjaalmarch Hold, not Haafingar [8]. Full details (shops, Cliffside Manor, quests) are in `areas/the-reach-and-markarth.md`.

## Rewards & notable items
No unique rewards or player homes are added by these Haafingar town mods [1][3][6].

## LoreRim notes
- LoreRim enables both Solitude overhauls together with "RedBag's Solitude Patch Collection", "RedBag's Solitude mesh fix", "RedBag's Solitude - Alternative Statue" and "The Great City of Solitude CC Fishing Patch" [13]. The TGC Solitude author warns it is "incompatible with any mod that significantly alters the exterior area surrounding the Solitude Docks" [5], and RedBag's page lists a "Sprawling Solitude (The Great City of Solitude and Open Cities)" patch among its compatibility patches [2]; exactly how LoreRim reconciles the two docks layouts in-game is not documented in the sources read (unverified).
- RedBag's page says that with Open Cities the docks tunnel has no load doors and you can jump into the water below the walls [2]; whether LoreRim uses Open Cities was not checked here (unverified).
- Interiors and NPC content of vanilla Solitude are otherwise outside these mods' scope [2][7].

## Related
- `areas/the-reach-and-markarth.md` (Markarth Side), `areas/hjaalmarch-and-morthal.md`, `areas/wyrmstooth-island.md`
- `mod-added/unmasking-sybille.md`, `mod-added/revealing-rune.md`, `mod-added/storm-the-thalmor-embassy.md`, `mod-added/wyrmstooth.md`, `mod-added/bards-college-excavation.md`
- `vanilla-changes/civil-war.md`, `vanilla-changes/side-quests-and-misc.md`

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | RedBag's location names; parent locations (Solitude / Solitude Docks / Haafingar); no quests | LoreRim install: `RedBag's Solitude.esp` LCTN records (profile Default), incl. PNAM parent parse | mod v1.51.0.0 | 2026-10-02 |
| 2 | RedBag's features (20 houses, 59 citizens, tunnel, Castle Dour trail, docks cabins, patches) | [Nexus mod page 42052](https://www.nexusmods.com/skyrimspecialedition/mods/42052) via meta.ini cache | 2024-07-28 (nexusLastModified) | 2026-01-11 cache |
| 3 | TGC Solitude location names, parents; background dialogue quest only | LoreRim install: `The Great City of Solitude.esp` (Rob's Bug Fixes - TGC Solitude) LCTN/QUST records | mod v2.0.0.0 | 2026-10-02 |
| 4 | Rob's Bug Fixes = cleaned esp replacer for TGC Solitude 2.02 | [Nexus mod page 72117](https://www.nexusmods.com/skyrimspecialedition/mods/72117) via meta.ini cache | 2022-11-16 (nexusLastModified) | 2026-01-11 cache |
| 5 | TGC Solitude port expansion, author's "outdated"/copy-paste caveats, incompatibility note | [Nexus mod page 22243](https://www.nexusmods.com/skyrimspecialedition/mods/22243) via meta.ini cache (install folder "The Great City of Solitude SSE") | 2020-02-11 (nexusLastModified) | 2026-10-02 |
| 6 | Dragon Bridge new locations; Rob's replacer for TGC Dragon Bridge 1.12 | LoreRim install: `The Great City of Dragon Bridge.esp` LCTN records + [Nexus 68412](https://www.nexusmods.com/skyrimspecialedition/mods/68412) via meta.ini cache | 2022-05-23 (nexusLastModified) | 2026-10-02 |
| 7 | Dragon Bridge fortress town, blacksmith, Karth River crossing | [Nexus mod page 19962](https://www.nexusmods.com/skyrimspecialedition/mods/19962) via meta.ini cache | 2018-10-13 (nexusLastModified) | 2026-10-02 |
| 8 | Markarth Side "south east of Dragon Bridge"; parent = Hjaalmarch Hold | LoreRim install: `Arena - Markarth Side.esp` LCTN records + [Nexus 114252](https://www.nexusmods.com/skyrimspecialedition/mods/114252) via meta.ini cache | 2025-10-24 (nexusLastModified) | 2026-10-02 |
| 9 | DragonBridgeLocation and ThalmorEmbassyLocation parent = Haafingar Hold | Base game: `Skyrim.esm` LCTN records (PNAM), LoreRim Stock Game | n/a | 2026-10-02 |
| 10 | Unmasking Sybille, Revealing Rune descriptions | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 11 | Save the Icerunner alternate routes (Jaree-Ra in Solitude) | [LoreRim site — Quest Expansions](https://www.lorerim.com/guides/quests/quest-expansions) | n/a | 2026-10-02 |
| 12 | Storm the Thalmor Embassy; Wyrmstooth north of Solitude | [LoreRim site — Main Quests](https://www.lorerim.com/guides/quests/main) and [New Lands](https://www.lorerim.com/guides/quests/new-lands) | n/a | 2026-10-02 |
| 13 | Enabled Solitude patch mods | LoreRim install: `profiles/Default/modlist.txt` | n/a | 2026-10-02 |
