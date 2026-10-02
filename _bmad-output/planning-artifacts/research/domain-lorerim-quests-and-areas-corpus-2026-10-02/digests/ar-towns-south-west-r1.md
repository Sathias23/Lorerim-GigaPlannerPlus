# Digest — ar-towns-south-west (r1)

Unit kind: areas. Resumed attempt: no target files existed at start; all five written fresh this run. Accessed date for everything: 2026-10-02.

Method notes: besides the `imports/mods/*.md` files listed in the unit brief, hold placement was established by parsing LCTN records (EDID/FULL/PNAM) of the shipped plugins and of `Skyrim.esm`/`Dragonborn.esm` in `C:/mods/LoreRim/Stock Game/Data` with a small Python reader (script in %TEMP%/lr/lctn.py, not kept in repo). Enabled state checked in `C:/mods/LoreRim/profiles/Default/modlist.txt`. Several meta.ini files store `nexusdescription` in lowercase, which the importer missed ("no cached description" in imports) — read them directly from the install.

## haafingar-and-solitude.md
- RedBag's Solitude adds location records: upper city (parent SolitudeLocation) Solitude Merchant's House, The Solitude Sanctuary, Gundrud's Family House, Balmir's, Loviriil's, Oritius', Ulrenssen's, Thorleif's, Valtyr's, Rikvald's, Jurgarne's, Thormoor's House, Solitude Windmill; docks (parent SolitudeDocksLocation) The Leaning Cabin, Sverre's, Oyalf's, Qrvar's, Kodraug's, Gunnar's, Naspis', Dorte's, Laurircella's Cabin — LoreRim install `RedBag's Solitude.esp` LCTN (mod v1.51.0.0) — high
- RedBag's features: 20 new houses (11 city / 9 docks), 59 new citizens with no special dialog, real docks tunnel replacing teleport, new northern trail entrance to Castle Dour, docks 10 cabins + extra longboat + windmill — Nexus 42052 via meta.ini (nexusLastModified 2024-07-28) — high
- TGC Solitude (Rob's Bug Fixes plugin `The Great City of Solitude.esp`, replacer for TGC 2.02) adds The Empire Trader, Angeline's Aromatics (EDID SwampsideApothecary), Solitude Brewery, Aksels House, Digitus Quintus', Hjoldan's, Torbec's, Tahlen-Ra's, Freyja's, Toril's, Tilda's House, Jakob's Farm, Frederik's Farm — install LCTN + Nexus 72117 (2022-11-16) — high
- TGC Solitude author calls mod outdated, interiors "largely copy-pastes", incompatible with mods altering docks exterior — Nexus 22243 via meta.ini (2020-02-11) — high
- Dragon Bridge: TGC Dragon Bridge = fortress town guarding road to Solitude, adds blacksmith; Rob's plugin adds Guard House, Bjorn's House — Nexus 19962 (2018-10-13), install LCTN, Nexus 68412 (2022-05-23) — high
- No quests in these plugins (only background `DialoguePortSolitudeTGCoS`) — install QUST — high
- DragonBridgeLocation, ThalmorEmbassyLocation parent = HaafingarHoldLocation — Skyrim.esm LCTN — high
- Markarth Side is "south east of Dragon Bridge" but parented to HjaalmarchHoldLocation — Arena plugin + Nexus 114252 — high
- Enabled patches: RedBag's Solitude Patch Collection, mesh fix(es), Alternative Statue, TGC Solitude CC Fishing Patch — modlist.txt — high
- Linked quests: Unmasking Sybille, Revealing Rune (LoreRim New Quests page), Save the Icerunner alt routes (Quest Expansions page), Storm the Thalmor Embassy (Main page), Wyrmstooth north of Solitude (New Lands page) — LoreRim site — high

## the-reach-and-markarth.md
- SKY CITY locations: Vigdis' House, Sillia's Cookhouse, Borace's House, Hallar's House, Drahf's House (parent Markarth) — install `Sky City.esp` — high
- SKY CITY features: 3 upper levels, oil refinery, watchtowers, Dwemer lifts, mansion at peak, statue, no scripts — Nexus 22482 (2019-07-16) — high
- Markarth Outskirts (small update) locations: Markarth Outskirts, East Empire Dormitory (inn), East Empire Goods (Altmer EEC shop, hinted Thalmor), Waste Collector (Dwemer items, new levelled lists), Mill Maintenance, Mushroom Farm, Hilarius Farmhouse, Old Temple, Old Dam (EDID ThievesGuild; thieves living there), Old Observatory (conjurer) — install `Lux Via - Markarth Entrance and Farm Overhaul.esp` + Nexus 70213 (2024-11-07) — high
- Markarth Side: quests The Lost Family Relic (Varimo, magic shop; amulet of necromancy; 500 gold + amulet) and The Royal Relic (Grit-dar at inn; Morvunskar Crypts near Windhelm, parent EastmarchHold; 500 gold) — install `Arena - Markarth Side.esp` QUST records — high
- Markarth Side shops: The Kings Rest (inn), The Boiling Cauldron (magic), The Silverspoon Trading Company (general), Iron Maidens (blacksmith), Healers and Dealers (alchemy), The Splended Spool (clothing), Markarth Side Barracks, Cliffside Manor — install LCTN — high
- Cliffside Manor purchase 3000 gold; build options 800 gold each — plugin strings — high
- Karthwasten: Meredith's House, Sleepy Hags Inn, Maddock's House, Grokmar's House; new blacksmith, apothecary, farms, inn; 5 NPCs — install + Nexus 33032 (2021-07-08) — high
- Old Hroldan: two "Doughlas House" records (second EDID Tobias), Miner's House at Soljund's Sinkhole; inn exterior, 2 farmhouses, Talos statue — install + Nexus 33189 (2020-03-01) + 70764 — high
- Kolskeggr: TGC addon rebuilds house; Environs Kolskeggr dynamic change after Pavo Attius quest (rebuilt house, 2 miners, extra guard) — Nexus 64265 / 78477 via meta.ini — high
- Heart of the Reach start: Gwilym at Silver-Blood Inn — LoreRim New Quests — high

## the-rift-and-riften.md
- Riften Docks Overhaul: fish market, Honeyside deck pathway to player-owned small island, larger docks, pathways, Fishing CC required; location Soderberg's House; patch plugins incl. Shadowfoot (moves entrance), Song of the Green — install + Nexus 40021 (2024-03-14) — high
- Alternative Riften revived (new market mesh, navmesh redone) — Nexus 169108 (2026-02-04) — medium (no itemized content)
- Environs Riften Warehouse: after "Supply and Demand" warehouse becomes EEC general merchant with Dunmer merchant + Nord assistant, delayed — Nexus 88024 (2024-03-08) — high
- Ivarstead: Hall of Kyne, Henrik's House, Pilgrim's Needs; new Hall of Kyne (Kyne not Kynareth), new shop, new bridges; new game recommended or inn bed missing — install + Nexus 34505 (2025-08-12) — high (Pilgrim's Needs = shop is inference)
- Shor's Stone: Fallowstone Vault (x2), Emma's and Olafr's House, "Shor's Hall Location"; Fallowstone Hall = ESO Companions of the Rift HQ, vault treasure, new inn, farmland, Shor hall — install + Nexus 35977 (2020-10-05) + 70502 — high
- Rift Watchtower: Orc-held Imperial ruin, bandits, multiple entries — Nexus 136668 (2025-06-23) — high
- Sirenroot (Frissa Black-Briar, Elgrim's Elixirs), Sleepwalking into a Nightmare (Ralforn, green-tip cabin NE of Ivarstead), Fists of Fury — LoreRim New Quests — high

## falkreath-hold.md
- COTN Falkreath: unique model per building, 8 new interiors incl. Kust's and Valdr's homes; locations Falkreath Watchtower, Kust's House, Valdr's House; new save recommended — install + Nexus 56731 (2024-04-22) — high
- TGC Falkreath: fortifications, expanded graveyard, tomb, interiors unaltered — Nexus 19709 (2023-03-23) — high
- Granite Hill: GraniteHillLocation (Skyrim.esm cut location) parent FalkreathHoldLocation; adds Sheepshead Inn, Granite Hill Crawl Space, Crossway Cottage — install `aaaGraniteHill.esp` LCTN — high
- Granite Hill start: courier letter after Western Watchtower quest + first dragon (Dragonborn version) or level >10 (non-Dragonborn version); LoreRim's FOMOD choice = "Playthrough Style: Dragonborn" — Nexus 14658 (2025-11-25) + meta.ini [Plugins] FOMOD record — high
- Western Watchtower quest = Dragon Rising (MQ104) — official-quests.json — high
- A Plea From Granite Hill objectives/journal (John, Privious' shop Oddities and Curiosities, crawl space, dragon at bottom, home key reward) — install QUST — high; not start-game-enabled — high
- Inference: players skipping LoreRim's optional main quest never get the Granite Hill letter — derived from above + LoreRim Main page — medium
- Granite Hill lore: east of Sungard, far north of Falkreath, cut before release, map label near Fort Sungard — UESP Lore:Granite Hill — high; CK location on south shore of Lake Ilinalta near Vuljotnaak's mound — Fandom via search snippet — medium
- Half-Moon Mill COTN addon; Orc Exiles Cracked Tusk Keep and Bilegulch (Longhouse interior); Sunderstone Gorge rework (warlock, locked new area) — Nexus via meta.ini — high; all parent FalkreathHold — Skyrim.esm — high
- Helgen parent FalkreathHold; LoreRim main quest starts by renting a room at Helgen inn — Skyrim.esm + LoreRim Main page — high
- Gravewind start NW of Roadside Ruins (Falkreath Hold) — LoreRim New Quests + Skyrim.esm — high

## solstheim.md
- LoreRim Dragonborn start: after The Way of the Voice, Miraak's cultists attack — LoreRim Main page — high
- Northern Maiden, Gjalund Salt-Sage, Windhelm docks — UESP Skyrim:Dragonborn (quest) — high; DLC2MQ01 objectives incl. "Travel to Solstheim" — official-quests.json — high
- To Skyrim/To Solstheim markers; settlements Raven Rock/Skaal Village/Tel Mithryn — UESP Skyrim:Solstheim — high
- Raven Rock services (Retching Netch, Severin Manor after Served Cold, etc.) — UESP Skyrim:Raven Rock — high
- Skaal Village Overhaul: all houses except Greathall replaced; player home Vintrhus = location "Skaal Village Player House"; key in knapsack at Snowclad Ruins by altar with dead animals; basement/children buttons; NOT compatible with JK's — meta.ini lowercase nexusdescription (Nexus 53733, 2021-08-16) + install LCTN — high
- Skaal Fishing Camp west of Raven Rock, Haki and wife sell seafood/ingredients — Nexus 14450 (2018-01-05) — high
- Earthquakes: 5% per 120 s default, NPC stagger, player cowers, dragons immune; quest "Earthquakes" (mannyEQ) is an MCM helper (journal "Show settings"/"Test Quake") — install QUST + Nexus 22884 (2021-10-31) — high; LoreRim MCM list keeps "earthquake" menu enabled, no override found — MCM-Unlocked_UserData.json — medium
- Cannibal draugr (299 NPCs, Grave Tar) — Nexus 21238 — high; Abandoned Lodge new interior (A New Source of Stalhrim site) — Nexus 158503 — high; Missives board outside Morvayn Manor + "Kill Rieklings" — Nexus 26788 — high
- Raven Rock Building Tweaks = Redoran texture-path overrides; Rally's AIO contents; Subtleties lava/ships/mushrooms; Kanjs shrines — meta.ini caches — high
- Miasma: Haj-Xul in Retching Netch, level 20+ — LoreRim New Quests — high; Bow of Shadows static loot in Raven Rock/Morag Tong questline — LoreRim Creation Club page — high

## Contradictions
- Markarth Side: mod page "south east of Dragon Bridge" (Haafingar area by name "Markarth") vs plugin PNAM = HjaalmarchHoldLocation. Documented in reach file; both cited.
- Markarth Side quest giver spelled "Varimo" (objectives, stage 10) vs "Verimo" (stages 20/30) in the same plugin.
- Old Hroldan: two LCTN records both FULL-named "Doughlas House" (EDIDs Doughlas/Tobias) — likely mod naming slip.
- Kanjs - Dunmer Plinths Shrine Animated: import/meta.ini URL points to LE page skyrim/mods/119081 while modid is 130009.
- Solstheim Earthquakes is flagged by the import as a "new playable quest", but its journal text is MCM-only ("Show settings", "Test Quake").
- TGC Solitude author: incompatible with mods altering Solitude docks exterior; LoreRim ships it alongside RedBag's Solitude (which also rebuilds the docks) with RedBag's patch collection — reconciliation unverified.
- Missives patch page describes Bruma/Falskaar/etc. boards; LoreRim ships only the Solstheim plugin (consistent with install lacking Beyond Skyrim: Bruma).
- RedBag's page "11 houses in the city" vs 13 LCTN records parented to SolitudeLocation (includes windmill, merchant's house, sanctuary) — counting difference, not necessarily a conflict.

## Gaps (looked for, not found)
- Live Nexus pages (403) and Fandom (402) blocked; relied on meta.ini caches and UESP.
- Merchant inventories/vendor NPC names for TGC Solitude shops, Karthwasten inn/blacksmith, Ivarstead Pilgrim's Needs, Granite Hill shops — not in sources read.
- What "The Solitude Sanctuary" (RedBag's) is.
- Alternative Riften's concrete new buildings.
- What "BETA Great Village of Old Hroldan - Meridia's Order Patch" changes.
- Whether LoreRim uses Open Cities (affects RedBag's tunnel/load doors).
- LoreRim-specific earthquake MCM values (none found in LoreRim - MCM and INI Settings).
- Whether Hearthfire Multiple Adoptions is installed (needed for family in Crossway Cottage / Skaal player house).
- Exact map coordinates of Granite Hill and Markarth Side (only hold parents and prose directions).
- JK's Raven Rock / JK's Tel Mithryn / Snazzy Raven Rock / Tel Mithryn Overhaul content not reviewed (out of brief).

## Leads
- Parse CELL/REFR records (XCLC grid) of `aaaGraniteHill.esp` and `Arena - Markarth Side.esp` for exact Tamriel cell coordinates and map markers.
- Read Granite Hill / Markarth Side NPC (NPC_) and vendor faction records for merchant names.
- Check `Arena - Markarth Side.esp` script `MarkarthSidePlayerHomePurchaseCode` and Granite Hill's `MarkarthSideDragonEnable` for any extra gating.
- The importer misses lowercase `nexusdescription` keys in meta.ini (Skaal Village Overhaul, Rally's AIO, Raven Rock Building Tweaks, Brazier) — fix importer to be case-insensitive.
- Granite Hill quests also appear as `mod-added/granite-hill-quests.md` and Markarth Side quests in `mod-added/arena-markarth-side-quests.md` — cross-check consistency with this unit's facts (Dragonborn FOMOD gate; Hjaalmarch parent).
