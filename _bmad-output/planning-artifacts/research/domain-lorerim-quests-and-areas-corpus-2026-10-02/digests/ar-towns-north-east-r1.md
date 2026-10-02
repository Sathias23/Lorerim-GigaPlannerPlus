# Digest — ar-towns-north-east (r1)

Unit: areas — whiterun-hold, eastmarch-and-windhelm, winterhold, the-pale-and-dawnstar, hjaalmarch-and-morthal. Accessed 2026-10-02.

On resume, none of the five target files existed and there was no digest, so all five were written from scratch this run.

Method:
- Read the 10 unit import files.
- Read meta.ini files directly from C:/mods/LoreRim/mods for additional town mods active in the Default profile (modlist.txt / plugins.txt).
- Parsed the plugins with a small Python ESP reader (NPC_, KEYM, BOOK, CELL, DIAL, INFO records) for names, prices and vendors.
- Scanned every active plugin that overrides the Winterhold longhouse cell to find its final name.
- Made about 12 web calls: Nexus pages returned 403; search summaries and UESP pages worked.

## whiterun-hold.md
- Capital Whiterun Expansion is shipped as the base mod folder (37982 v1.3.0.0: BSAs plus two 49-byte stub ESPs) with Rob's replacer `SurWR.esp` (63355 v3.3.0.0). All three plugins are active. — LoreRim install (modlist/plugins.txt, folder listing) — high
- SurWR.esp journal quests: Ode To The Tundrastriders, Skirmish at Whitewatch, Running Wild, A Rat Problem, Bluesky Hall, Grace of Kynareth, Victory Celebrations, Farmland Saga. — LoreRim install: SurWR.esp QUST (import) — high
- Farmland Saga has design-note journal text, no objectives and type "none", so it may be unused. — same — low
- 19 new LCTN records: Bluesky Hall, The Roadhouse, Whiterun Customs Hall, Happy Homestead General Goods, Brightflour Bakery, Witch's Wisdoms, Igna's Basement, the Thane homes, etc. — SurWR.esp LCTN (import) — high
- Bluesky Hall's deed is sold by Quintus "by the well in the marketplace" (For Sale! note). The hall is behind the Hall of the Dead (journal). Price not found. — SurWR.esp BOOK/QUST — high
- Ode To The Tundrastriders: started by the "Jarl's Bounty: Giant" note or the "Anything new happening around town?" topic. Prices: cow 300 via Urik, blue dye 50, giant poison 100 (or 25 for supplies). The giant Hrungnir is in Bleakwind Basin. Outcomes: kill, poison, or truce plus giant trading. — SurWR.esp DIAL/NPC_/QUST — high
- Skirmish at Whitewatch: messenger note, Thane Hroa Hearth-Healer, two raid waves (War Mammoth, Trained Sabre Cat, Tundra Raider), report to the steward. — SurWR.esp — high. The trigger condition (thane?) is unverified.
- Running Wild: "A reward in gold!" notice. Choose Joslin (keep the horse plus an Imperial or Nord saddle) or Dragonsreach (gold). — SurWR.esp — high
- Merchants: Honditar (bows), Basil (Redguard trader), Urik, Vinopola Vlanarus. Shops: Elam (construction), Scylla (bakery), Jaeshe (alchemy). — SurWR.esp NPC_/INFO — high. The descriptions (Imperial wine, Nord fur, Altmer) come from a web search summary of Nexus 37982 — medium.
- CWE Lite (112964, Base Object Swapper) disables more than 200 CWE objects. — Nexus 112964 via meta.ini (2024-03-04) — high
- Roastlawyer's Restored Whiterun Defences rebuilds the walls and bailey and makes the barracks tower climbable. — Nexus 146898 via meta.ini (2026-05-25) — high
- The Western Watchtower is intact until "Dragon Rising", then reverts to the vanilla ruin; the Siberpunk's Cut rebuilds the walls afterwards. — Nexus 49305 (2025-07-16) / 76261 via meta.ini — high
- Whiterun Stables becomes a farm. — Nexus 41889 (2020-11-01) — high
- Kynareth Replaces Talos: after an Imperial win in the Battle for Whiterun, the Talos statue is removed after 2–5 days and a Kynareth statue goes up 5–7 days later. — Nexus 91440 (2024-09-19) — high
- Only the Whiterun Stables Scene piece of Cut Content Restoration ships (the Skulvar/Uthgerd scene). Barleydark Farm and the other restored farms are absent. — import + modlist — high
- TGC Rorikstead (Rob's) adds the Great Hall, its only new interior, public since v1.2. — plugin LCTN/CELL; web search summary of Nexus 20151 — medium-high
- Wyrmstooth's courier starts from the Bannered Mare after Way of the Voice and Rise in the East. — LoreRim site new-lands — high
- Riverwood: JK's Riverwood, Ryn's Riverwood Trader, and Riverwood Trader Is A Mess (help Lucan clean: 6 hours, gold and a random item). — meta.ini caches — high

## eastmarch-and-windhelm.md
- WindhelmSSE.esp quests: Collecting the Edda - Windhelm, Graystone, Kyne's Trial, Pit Fighter, Hunting Trip, Death Do Us Part, The Mead Must Flow (×2), Severed Cold, The Talos Mistake, A Night You Can't Remember, A Simple Delivery, Unusual Imports. — LoreRim install: WindhelmSSE.esp QUST (import) — high
- 32 new LCTN records plus WRLD "The Pit" and "Somewhere in the Mountains". — import — high
- Graystone home: the For Sale note says buy the deed from Sadri (Sadri's Used Wares), 1000 gold. LCTN "Graystone Lodge"; deed and dialogue "Graystone Hall"; quest "Graystone". — WindhelmSSE.esp BOOK/DIAL/LCTN — high
- Pit Fighter: Benkum sends you to Huki Seven-Swords in the Bloodworks; "I want to fight in an unranked match"; repeatable. — WindhelmSSE.esp DIAL — high
- Severed Cold: Frozen Caverns near the East Gate. Volkihar vampires turned the Dunmer. Report to Wuunferth. NPCs: Exiled Volkihar Warlord, Volkihar Brute. — QUST/NPC_ — high
- The Talos Mistake: Beorn hands you Hverung's Manifesto. Kill or warn the Thalmor agent in a Gray Quarter rooftop loft, or kill Hverung. — QUST/BOOK — high
- Kyne's Trial / Hunting Trip with Frida the Younger; pelt quotas as listed. — QUST — high
- CWE Lite (114087) disables more than 150 objects. — meta.ini (2024-03-15) — high
- The Capital Windhelm Expansion feature summary ("pit arena, some bakeries, a museum, three new merchants, 8 unique quests"; "fight as much as you want by talking to Huki") is not cached in meta.ini. — web search summary of Nexus 42990 — medium
- Kynesgrove (Rob's 70694 replacer of 42639): home "Kynesby" sold by Gala for 2000 (the LCTN is spelled "Kymesby"); blacksmith Herleif Knot-Beard; Eskil of the Keepers of the Grove; pilgrims; Hall of Kyne. — plugin DIAL/INFO/NPC_/KEYM; Nexus 42639 via meta.ini — high
- Mixwater Mill: Leif's and Kyne's Farm, family Leif, Kyne, Haukr. — plugin; Nexus 36350 — high
- Darkwater Crossing addon rebuilds Verner and Annekke's House. — Nexus 64266 — high
- Windhelm Bridge Revived adds a guardhouse and 8 guards whose gear changes with the civil war. ALT Defensive Towers are decorative. — meta.ini — high
- Windhelm Segregation: a Dunmer player rents at the New Gnisis Cornerclub instead. Dialogue Expansion - Windhelm adds 30 scenes and reactive greetings. — import meta.ini — high
- LoreRim gates: Rise in the East (EEC, Windhelm) is required for Wyrmstooth. Fists of Fury includes Windhelm brawl quests. — LoreRim site — high
- CFTO Eastmarch carriage destinations: Windhelm, Kynesgrove, Darkwater Crossing, Mixwater Mill. — Nexus 8379 via meta.ini (2020-11-16) — high

## winterhold.md
- TGC Winterhold v4 adds 10 LCTN records (Frostview Hall, Hall of Runes, Guard House, Docks, Warehouse, and the houses of Magnar, Magna, Frida, Runi and Chayim). It has no journal quests ("do not offer any quests"). — plugin import; Nexus 17127 via meta.ini (cache 2026-01-11) — high
- Frostview Hall: ask steward Malur Seloth "now that I am thane", then "I would like to buy Frostview Hall. (4000)"; you get the "Key to Frostview's Hall". — plugin DIAL/INFO/KEYM — high
- Blacksmith: Magnar Frost-Vein. The Hall of Runes is run by the Jhunal Cult (Jhunal = Julianos); Chayim says to talk to Skadi to buy. The Nexus page says the two vendors are a blacksmith and spellbooks. — plugin INFO; Nexus — high (that Skadi is the spellbook vendor: medium)
- The Jarl's longhouse cell 00013818 is named "Frostveil Fastness" by TGC v4 and "Stonecold Fortress" by COTN, TGCotN, the Requiem patch, Lux, LoreRim - World Fixes and Synthesis. Final name: Stonecold Fortress. — scan of all active plugins in plugins.txt order — high
- Immersive Winterhold Jail: The Chill gets a frost atronach boss and two ways to escape. — Nexus 84219 (2024-01-09) — high
- The CFTO fix adds a carriage to Winterhold. Winterhold is a north-coast ferry stop. — Nexus 40651 (2021-09-29), 8379 — high
- `TGCotN Winterhold - Requiem Patch.esp` is active. — plugins.txt — high
- Knight of the North: the author recommends starting near the Tower Stone in Winterhold. — LoreRim site creation-club — high

## the-pale-and-dawnstar.md
- TGC Dawnstar: fortifications, expanded port, a general goods merchant; only the Jarl's palace interior is altered. New LCTN Ulrik's House; new NPC Ulrik; CELL Dawnstar Warehouse. — Nexus 19491 via meta.ini; plugin — high (that Ulrik is the merchant: inferred, low)
- COTN Dawnstar gives every building a unique model and new interiors (cells listed). — Nexus 28952 (2023-11-20); plugin — high
- Breaking Dawn Cottage: near Silus Vesuius's House; key in a satchel in the Nightcaller Temple dorms after the miasma is dispersed. — Nexus 130643 via meta.ini — high
- Nightmares of Skyrim - Dawnstar Only: NPC nightmares until "Waking Nightmare" is complete; 50% default chance; console variable `jb1dreams`. — Nexus 113977 via meta.ini — high
- Nightgate Inn and Anga's Mill are in the Pale (UESP). Nightgate Inn Revived is a visual overhaul (outhouse, stables, butcher shack, two more rooms). The Anga's Mill COTN addon re-meshes the buildings and overhauls Aeri's House and the Common House. — UESP; Nexus 121244 (2025-06-14), 64398 (2022-05-08) — high
- Vigilant: Altano recruits at Dawnstar's inn after the main quest, Dawnguard and House of Horrors. Gift of Saturalia: a trader camps south of Dawnstar's main entrance. — LoreRim site — high
- CFTO adds a Dawnstar carriage. Pale destinations: Dawnstar, Heljarchen (Nightgate Inn), Heljarchen Hall. Dawnstar is on the north-coast ferry. — Nexus 8379 — high
- `COTN Dawnstar - Requiem Patch.esp` is active. — plugins.txt — high

## hjaalmarch-and-morthal.md
- TGC Morthal: new LCTN Erika's House, NPC Erika; no quests. It adds gates, watchtowers and a stockade (web summary; meta.ini has no description). — plugin; web search summary of Nexus 19592 / LE 93318 — medium-high
- COTN Morthal: new models and interiors (Highmoon Hall, Moorside Inn, Thaumaturgist's Hut, Falion's House, etc.). — Nexus 34168 (2023-11-20); plugin — high
- New Moon Cottage: near Falion's House; key in a satchel in Movarth's Lair near the hole with the bodies; no crafting stations. — Nexus 129512 — high
- LoreRim gate: the Dawnguard recruiter requires "Laid to Rest" (Sensible Quest Prerequisites), which starts by entering Morthal's burned house. — LoreRim site main — high
- Seeking the Cure COTN patch: the quest triggers in Falion's House while you are a vampire. — Nexus 89174 — high
- Environs - Hroggar's House: Eisa Blackthorn moves to Morthal after Frostmere Crypt, rebuilds the house after The Pale Lady and Laid to Rest, then becomes a follower. — Nexus 83457 (2024-05-23) — high
- Stonehills is in Hjaalmarch (UESP). Gonzeh ReRe-imagined adds a quarry that hit a Dwemer ruin, a mini tavern, crafting stations and a reworked Sorli's House; NPCs Betsa and Brisk. Stonehills Springs adds hot springs across the road. — UESP; Nexus 133572 (2026-01-04), 2503 — high
- CFTO adds a Morthal carriage. Hjaalmarch destinations: Morthal, Stonehills, Windstad Manor. — Nexus 8379 — high

## Cross-file (travel)
- Vanilla: only the five major capitals have carriages; minor capitals cost 50 to reach. — UESP Carriage — high
- LoreRim runs CFTO 2.0, the CFTO Fixes and Winterhold patch, Better Carriage Destinations (pick any map marker, dynamic price) and Wait Carriage in Inns. LoreRim's MCM preset for Better Carriage Destinations: fCostMult 0.4, iMaxCost 400, fDangerousCostMult 0.8, bTimePasses 1. — modlist; `LoreRim - MCM and INI Settings/MCM/Settings/Better Carriage Destinations.ini` — high

## Contradictions
- **Graystone naming:** quest "Graystone"; LCTN and journal "Graystone Lodge"; deed and purchase dialogue "Graystone Hall". All three are in the same plugin (WindhelmSSE.esp). The file reports all three.
- **Kynesgrove home spelling:** LCTN "Kymesby" vs. key and dialogue "Kynesby" (both in Rob's TGC Kynesgrove plugin).
- **Edda verse giver:** objective "Skulvar's verse", journal "Sulvar", NPC record "Sulvar the Steady" (WindhelmSSE.esp).
- **Winterhold Jarl's longhouse:** "Frostveil Fastness" (TGC Winterhold v4) vs. "Stonecold Fortress" (COTN and later overrides). The load-order winner is Stonecold Fortress.
- **Carriage pricing:** CFTO's fixed tariffs (40/60/80; Winterhold charged the higher rate) are superseded in practice by Better Carriage Destinations' dynamic pricing with LoreRim's ×0.4 / max-400 preset. Both are cited; the files say the preset applies.
- **Quest count:** the CWE web summary says "8 unique quests" for Windhelm and "four small quests" for Whiterun, while the plugins carry 13 and 8 journal QUST records (some are trackers or misc). The plugin records are used.

## Gaps (looked for, not found)
- Bluesky Hall's purchase price (no priced DIAL topic; probably Quintus's vendor inventory, not read).
- The trigger condition for Skirmish at Whitewatch (the courier) — conditions were not decoded; possibly thane status.
- Capital Windhelm Expansion and The Great City of Morthal have no cached Nexus description, and live Nexus pages return 403. Feature summaries come from search snippets (medium confidence).
- Which TGC Dawnstar NPC is the general goods merchant (Ulrik is inferred).
- Relic of Dawnstar - TESLORE: no description cached; content unknown.
- Level or danger hints: none sourced for any of these town mods (Severed Cold's vampire lord fight is undated by level).
- Winterhold hold's minor settlements: the UESP hold page 404'd (`Skyrim:Winterhold_(Hold)` / `(hold)`).
- Whether Granite Hill and Valtheim belong in Whiterun Hold — left to other units (granite-hill-quests, new-dungeons).

## Leads
- Decode CTDA conditions on `0WRThaneQ01` and on the courier, to state the exact Skirmish at Whitewatch gate.
- Read Quintus's merchant container in SurWR.esp for the Bluesky Hall deed price.
- UESP Mod: pages or the Nexus LE pages (skyrim/mods/108962 for Capital Windhelm Expansion LE, 93318 for Morthal) may be fetchable for full feature lists.
- "Capital Whiterun Expansion - Quest and Dialogue Addon" (Nexus 181606) is NOT in the LoreRim profile; don't attribute its 12 quests to LoreRim.
- Fortified-Morthal style mods (Skyfall's Fortified Morthal, 126871) are not installed; the New Moon Cottage page has a patch for it, which is irrelevant here.
