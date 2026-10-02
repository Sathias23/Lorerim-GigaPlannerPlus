# Digest — ar-dungeons-landmarks (r1)

Unit: ar-dungeons-landmarks (kind: areas). Resumed attempt: no target files existed at the start, so all three were written from scratch. Web calls used: 13 (Nexus pages returned 403; search snippets and UESP were used instead).

Files written:
- lorerim-agent/knowledge/quests/areas/new-dungeons.md
- lorerim-agent/knowledge/quests/areas/new-landmarks-and-shrines.md
- lorerim-agent/knowledge/quests/areas/dragons-awaken-lairs.md

Method: imports/mods/*.md for the brief's mods. Python parse of FULL subrecords (CELL/LCTN/NPC_/BOOK/WEAP/ARMO/SPEL/MESG/DIAL/INFO) directly from the plugins in C:/mods/LoreRim/mods. meta.ini FOMOD choices and Nexus caches. profiles/Default/modlist.txt and plugins.txt for enablement. LoreRim site imports. UESP.

## new-dungeons.md
- Every mod in the brief is enabled (+) in profiles/Default/modlist.txt — LoreRim install (modlist.txt, accessed 2026-10-02) — high
- Forsaken Crypt: Nordic ruin west of Whiterun, undead, radiant-eligible, requires Dawnguard; plugin adds LCTN/CELL "Forsaken Crypt", KEYM "Crypt Key", MISC "Silver Claw" — Nexus 139061 via meta.ini cache (2026-02-07) + ForsakenCrypt.esp records — high
- Dragon's Teeth Prison: ex-Legion prison just west of Falkreath at the base of the Dragon's Teeth mountains; Frosthide Tribe (Whelp/Tracker/Brute/Berserker/Shaman/Wolf/Chief), "Frosthide Beast Form"; books Vigilant's Orders, Legate Dratis' Diary, Interrogator's Journal, Elven Contraband — Nexus 111523 cache (2026-02-06) + Cannibal_Dung.esp — high
- Snowpoint Dungeon adds the cell "Snowpoint Bastion" to the vanilla LCTN Snowpoint Beacon (western edge of the mountains between Dawnstar and Winterhold; about 30 min) — Nexus 76186 cache + plugin — high
- "Snowpoint" (Nexus 146533, f1.01) also ships: extended lower level, more bandits, patrols, player-levelled loot; "Snowpoint - Snowpoint Dungeon" is its patch — meta.ini cache (nexusLastModified 2025-04-05) — high
- Ryn's Azura's Shrine: undercroft home (cell "Aranea Lenith's Home" — plugin spelling) plus the dungeon "Ven Fillaan Miin" (LCTN/CELL) and KEYM "Key to Ven Fillaan Miin"; "short but semi difficult dungeon" — Nexus 86592 cache (2026-01-11) + plugin — high
- Ryn's Snazzy Last Vigill: LCTN Ebony Keep, Ebony Warrior's Camp; CELL Ebony Keep, Ebony Keep Mine; NPC "Zruill - Dremora Housekeeper"; letters from Tullius, Ulfric, Kodlak, Stentus; EW gear: Ebonarm's Might, Savage Ebony Scimitar, Ebony Warrior's/Vitreous Ebony armor; Conjure Titanic Frost Atronach; Frost Cloak; FOMOD picks "The Ebony Keep" + "Ebony Warrior Overhaul" — plugin records + meta.ini FOMOD + Nexus 76385 cache — high
- Mr. Ebony... Get Lost (52510, v2.0.0.0) overrides DLC2EbonyWarriorQuest; adds refuse/accept dialogue — EbonyGetLost.esp DIAL + vanilla-quest-overrides.json + LoreRim site New Quests "Other Quests" — high
- Vanilla Ebony Warrior: level 80, approaches in a major city; Last Vigil is a camp northeast of Fort Greenwall — UESP Dragonborn:The Ebony Warrior — high
- Morihaus' Refuge (No Bruma): LCTN "Morihaus' Refuge"; NPC Minotaur, Minotaur Lord; Lord's Mail with absorb health; overrides CC quests "Gift of Kynareth" and "Seeding Redguard Armor"; removes the Redguard-thieves quest — plugin + Nexus 68558 cache + LoreRim site Creation Club — high
- No-Bruma entrance in the mountains near the Cyrodiil border — Nexus page via web-search snippet — low
- Redwater Brewery overhaul: CELL Redwater Den + new "Redwater Warehouse"; ex-brewery backstory; Core + Embers XD/Gore/Lux Orbis patches — plugin + FOMOD; backstory from a Nexus search snippet (2025-12-11) — medium
- Solstheim Abandoned Lodge: new interior (COTN Falkreath meshes), the lodge from A New Source of Stalhrim — Nexus 158503 cache — high
- Mara's Eye Den: visual and nature dressing only, no navmesh/landscape edits — Nexus 158728 cache — high
- Heart Of The Reach (aaaHOTRQuest): Gwilym at the Silver-Blood Inn; Ever-Bog cells (Cave, Caverns, Glen, Falls, Chamber, Bowels, Heart Chamber); remedy vs poison (Vinillian); Ring Of The Tree for siding with Gwilym — plugin + Nexus 76494 cache + LoreRim site — high
- LoreRim ships "Requiem - Heart of the Reach" (76940, f1.03): unlevelled; level 30 Forsworn bosses, level 55 Spider Queen, level 35 Hagraven — meta.ini cache (2023-01-25) — high
- Legends Of Aetherium: Hiring Notice at Bee and Barb, Frozen Hearth, Candlehearth, Bannered Mare; site south of Riften/Crystaldrift Cave; Itharzel cells; Aetherial Colossus; tiers Adorned/Enriched/Ascended — plugin + Nexus 69807 cache + LoreRim site — high
- Deluge of Deceit (Sirenroot): Frissa Black-Briar at Elgrim's Elixirs; cave under Lake Honrich north of the Riften docks by Merryfair Farm; Honrich * cells; story suits levels 3-15; enemies scale — plugin + Nexus 70917 cache + LoreRim site — high
- Miasma: Haj-Xul at the Retching Netch (Raven Rock); Abandoned Mine and Ashbound Prison/Depths/Sanctum; level 20+; FOMOD patches USSEP, TIE, LCHK, Striding Silt Striders — plugin + meta.ini + LoreRim site — high

## new-landmarks-and-shrines.md
- Environs triggers are invisible checkpoints outside the major city gates — Environs Nexus caches (88024, 72981, 78477; 83457 uses the Morthal road and bridge) — high
- LoreRim installed the Tundra Farmhouse "Vigilant Version": plugin header "v3.02 - Vigilant", master Vigilant.esm, FOMOD "Vigilant Version"; destruction happens during a VIGILANT act-1 quest — install + Nexus 72981 cache — high
- VIGILANT in LoreRim requires the main quest, Dawnguard and House of Horrors; Altano in Dawnstar inn — LoreRim site New Lands — high (from site)
- Laid to Rest gates Dawnguard in LoreRim (Sensible Quest Prerequisites) — LoreRim site main — high
- Storm-Hull Farm NPCs Olena/Ulf Storm-Hull, Aevar Storm-Hull, Elsun, Jond; rebuild after 10+ days, then 25-day stages; Aevar's death halts it — plugin + Nexus cache — high (family-role mapping medium)
- Shrines of Talos sites (Ilinalta, Thalmor HQ, Cradlecrush Pond, White River Valley after Torygg's War Horn, Weynon Stones, Riften shrine, Snow-Shod Manor basement, Markarth reopening, Windhelm Temple, hidden Rift cell, Darkwater road patrol) — Nexus 85141 description cached in "Environs - The Shrines of Talos - Patch Collection" meta.ini (nexusLastModified 2024-02-25) — high
- The hidden Rift cell is plausibly "Snow-Shod Farm Cellar" (LCTN ENVShrinesSnowShodCellarLocation; cells Snow-Shod Farm and Snow-Shod Farm Cellar) — plugin records (inference) — medium
- LoreRim ships the Taliesin patch: Taliesin appears only after the Ilinalta massacre, level requirement 5, auto-start finder quest disabled — patch esp present + description — high
- Riften Warehouse becomes the "East Empire Company Outpost" after Supply and Demand + 15 days; NPCs Bjens, Gelmir — plugin + Nexus 88024 cache — high
- Eisa's House: after The Pale Lady + Laid to Rest; stages about 18 days apart; follower and marriage candidate — Nexus 83457 cache (2024-06-01) — high
- Kolskeggr: Thorvar's House; NPCs Thorvar, Hunroor, Uthard; timing contradiction (see below) — plugin + Nexus 78477 cache — high
- Fort Dunstad (vanilla: the Pale, south of Dawnstar, bandits) becomes a settlement: LCTN Fort Dunstad Trader, Fort Dunstad Blacksmith Home Location, The Stumbling Sabrecat; NPCs Evelynn, Hillerica, Isgjaarn, Jolgvarr, Rolfkur — plugin records + UESP Fort Dunstad + Nexus search snippet — medium (no cached description)
- Dovahdein: Clear Skies-only vault on the Throat of the World; key on a skeleton near Paarthurnax's perch; displays; Greybeard's robes records — README + Nexus 42237 cache + plugin — high
- Ivy's Stendarr's Beacon: Vigilants relocate after the Hall is destroyed; shack rebuilt days later; lighthouse; helper IvyShackRebuildingQuest; LoreRim FOMOD patches including Vigilant, Meridia's Order, Knight of the North — Nexus page via search snippet + install — medium
- The Chantry: visual-only expansion of the Inner Sanctum exterior (Forgotten Vale WRLD) — Nexus 171886 cache — high
- Ascend: 10 peaks (4 Solstheim, 5 Skyrim plus optional Shrine to Kyne); Shrine to Kyne mod/patch not installed; spells Kyne's Warm Embrace/Storm Veil/Rainfall Ward; Frost Dagger of Self-Doubt, Ice-Breaker, Wayfarer Scarf — Nexus 120802 cache + plugin + folder listing — high (nine reachable peaks: medium)
- Also ships: Kynareth Replaces Talos (Whiterun statue swap after the Imperial Battle for Whiterun, 2-5 days then 5-7 days), Stendarr Rising (Hall of the Vigilant rebuild) — meta.ini caches — high

## dragons-awaken-lairs.md
- Dragons Awaken places named, non-respawning dragons at mounds as they open with main-quest progress; mounds get map markers, are radiant-eligible, and are marked cleared; not a difficulty mod — Nexus 44550 cache (2026-01-11) + mod README — high
- Dragon/mound/hold table (38 dragons) — author README and Nexus — high
- Plugin: 27 new dragon NPC records; 22 mound LCTN records (5 with UNUSED editor IDs); overrides vanilla LCTNs (Arcwind Point, Eldersblood Peak, Mount Anthor, Skyborn Altar, Granite Hill, Frost River Farm); overrides dunLabyrinthian — plugin parse + vanilla-quest-overrides.json — high
- Vanilla opening stages per mound — UESP Skyrim:Dragon Mound — high
- v2 reset encounter difficulty to vanilla; Mirmulnir set to Easy — README changelog — high
- LoreRim copy of Dragons Awaken.esp has TES4 flag 0x200 (Light Master per UESP) despite the author's "do not ESL-flag" warning — header read + UESP TES4 format — high (fact); impact unknown
- Ryn's Dragon Mounds Collection overhauls all 22 mounds (dynamic main-quest aspects); patches for NOTWL, Granite Hill, Lux Orbis, Northern Roads, Orc Exiles, Unmarked Locations; Dragon Mounds Better Collision — install + Nexus 85647 cache — high
- Timing is Everything SE + Settings Loader enabled; LoreRim dragon settings not verified — modlist — high/low

## Contradictions
- Dragons Awaken ESL: the author says do not ESL-flag (it crashes); LoreRim ships it with the light-master flag 0x200.
- Dragons Awaken mound count: author text says 26 mounds; the author table has 22 mound dragons + 16 elsewhere; the plugin adds 22 mound LCTNs (5 UNUSED); UESP lists 24 mounds. Bloodlet Peaks and Labyrinthian Peaks have records but no dragon in the table.
- Mound names: DA "Witchmist Burial" vs UESP "Witchmist Grove"; DA Solstheim "Isinfier"/"Dragon Roost Island" vs UESP "Frozen Shoals"/"Temple Foothills".
- Kolskeggr final stage: the description says quest + 12 days, then +20 days; its stage list says "player gains 7 additional levels" (likely stale from an older version).
- Tundra Farmhouse: the Nexus default trigger (Western Watchtower dragon) does not apply in LoreRim; the Vigilant version is installed.
- Heart of the Reach: Nexus recommends level 10-15+; LoreRim's Requiem patch makes enemies static level 30-55.
- Ryn's Azura shrine cell spells the priestess "Aranea Lenith" (vanilla name is Aranea Ienith — vanilla spelling not re-verified this run).

## Gaps (looked for, not found)
- No cached Nexus description for Fort Dunstad, Shrines of Talos (main folder; found via the Patch Collection), Redwater Brewery, Ivy's Beacon; Nexus pages return 403.
- Fort Dunstad: which NPC runs the trader, smithy or inn; whether it changes with the Civil War.
- How the Ebony Keep Key is obtained; whether the Keep requires killing the Ebony Warrior.
- The exact No-Bruma location of Morihaus' Refuge (only a search snippet).
- Map location of the Ever-Bog entrance and the Ashbound Prison; Abandoned Mine position on Solstheim.
- What the Dragons Awaken dunLabyrinthian override changes.
- LoreRim's Timing Is Everything dragon settings; whether LoreRim's main-quest mods change mound opening timing.
- Hold of Mara's Eye Pond and the Shrine of Azura (not sourced this run, so omitted).

## Leads
- Snozz's Patch Collection (Nexus 137446) and the French translation page (145649) may carry a full Fort Dunstad description.
- The Sirenroot walkthrough article (Nexus articles/5264) for exact reward conditions.
- Ryn's Skyrim Hub (Nexus 73778) for Ebony Keep details.
- An xEdit check of the dunLabyrinthian override and the Ebony Warrior NPC inventory (for the key).
- wiki.lorerim.com not consulted; it may document Requiem dragon levels at mounds.
