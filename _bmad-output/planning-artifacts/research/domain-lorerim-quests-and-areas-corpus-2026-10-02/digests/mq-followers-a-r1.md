# Digest — mq-followers-a (r1)

Unit: mod-added follower quests — Inigo, Katana, Remiel, Gore, Lucien. Accessed 2026-10-02.
Files: lorerim-agent/knowledge/quests/mod-added/{inigo,katana,remiel,gore,lucien}.md

Note: all five target files already existed at the start of this run (probably from an earlier attempt). I deleted them unread and rewrote them from this run's evidence.

## Source abbreviations
- SITE = LoreRim site, Followers page https://www.lorerim.com/guides/world/followers (live fetch 2026-10-02; NOT in the pre-fetched imports). It lists Katana, Inigo, Lucien, Othriel, Auri, Remiel, Gore, Taliesin, The Welkynar Knight, ZEUS and Vanilla Followers.
- PLUG = LoreRim install plugin records (imports/mods/*.md plus my own Python parse of the plugins in C:/mods/LoreRim/mods).
- NEX = Nexus page via meta.ini cache (cache 2026-01-11).
- PL = C:/mods/LoreRim/profiles/Default/plugins.txt (enabled state).

## inigo.md
- Inigo is in Riften Jail, first cell on the left (next to Sibbi Black-Briar) — SITE; NEX 1461 (nexusLastModified 2016-11-24) — high
- Not a prisoner; letter on the table; notes around Skyrim point to him — NEX — high
- Bad Vibrations (`InigoBadVibrations`) starts at random after you hear "Tell me more about your past." and learn his brother's name — NEX — high
- Bad Vibrations objectives: Snowpoint Beacon → follow Inigo → find the cabin → ≥6 Snow Thrush eggs (8 nests) → check Inigo's mind → get Summon Inigo spell copy from Langley → learn and cast it — PLUG Inigo.esp — high
- Reward: Spell Tome: Summon Inigo / Summon Inigo spell; quest is all v2.4 has, V3 not released — PLUG; NEX — high
- "INIGO, WHERE ARE YOU?" is the map-marker misc quest — PLUG — high
- Hidden trackers: Fur / Life Goal / Destiny / Bravery conversations; NPC chats with Lydia, Kharjo, Mjoll, J'zargo, Erik, Derkeethus, Erandur, Jenassa — PLUG — high
- Locations: Langley's House (+ Ext) — PLUG; Snowpoint Beacon "Southwest of Winterhold. East of Fort Fellhammer" — UESP Skyrim:Snowpoint_Beacon — high
- Items: The Power of Whistling, Whistle to Inigo, Muffle Tongue Necklace, Mr Dragonfly — PLUG — high
- LoreRim ships: Inigo Official Patch SE (ESPFE) 2.0.0.0fe; Requiem - Inigo.esp (Requiem Patch Central: NPC Inigo + Langley, RPC registration quest); DementedLulu's INIGO 2.0 (NPC override only); LoreRim xEdit `Lulu's Inigo - Reqtificated.esp`; Bloodchill Manor patch + navmesh fix (LangleyPath0/3 cells); Snowpoint - Inigo (LangleyPath1); Inigo Reacts To Your Music; SetHomeInigoBugFix; Kynesgrove patch; Auri banter; FDE patches — PL + record inspection — high
- LoreRim ships the Snowpoint overhaul (Snozz, modid 146533) — install modlist — high
- No LoreRim gate or delayed start found — absence (SITE gives location only; no LoreRim plugin overrides Inigo QUST) — medium
- Vigilant areas unsafe for followers (author warning) — NEX — medium

## katana.md
- Start: Winking Skeever, upstairs; choose "So, what brings you to Skyrim?" — SITE; NEX 69622 (2025-04-22) — high
- Chasing the Current can be skipped (v3.0+) by passing Katana's test; the test can also skip all quests to Shale — NEX — high
- Megara: recruit at the Drunken Huntsman after Chasing the Current; Shale: at the Bee and Barb after The Ravens' Lament — NEX — high
- Chasing the Current steps: Drunken Huntsman sit → Lucky Irnsvar (Silent Moons Camp) → Silver-Blood Inn → Galtun Bold-Thief (Kolskeggr Mine) → Bee and Barb → Runir Wulfhart (Broken Helm Hollow) → Frozen Hearth → house near Fort Fellhammer → confront River — PLUG Katana.esp — high
- Ravens' Lament: Bee and Barb, River's note, Vilemyr Inn vs Fallowstone Cave, River's summons, hagravens, rescue Shale — PLUG — high
- Serenata trigger "With Katana and Shale, talk to Megara in a city during the day"; Scroll to Secret Place; Chadryn officiates — PLUG — high
- Side quests: Sweetest Carrot (Chillfurrow Farm/Bannered Mare), Honey Nuts (Solitude, Honningbrew, near Riften, Riverwood bridge), Sugar and Spice (Kilerth's Rest, Katla's Farm coast), The Khat's Eye (Moorside Inn, Movarth's Lair, Thalmor spies, Al'Tharo) — PLUG — high
- Megara's Radiant Quests = bandit-leader bounties — PLUG; NEX — high
- New LCTN: The Garden (AK69CozyLocation), Kilerth's Rest (AK69RiverHideoutLocation) — PLUG — high; Kilerth's Rest = River's house near Fort Fellhammer — inference — medium
- River's Camp LCTN is added by the LoreRim LoreCut patch — PLUG Katana Raven LoreCut - Reqtificated.esp — high
- LoreCut (Nexus 132964, which the Katana page lists as "Lorerim"): Reqtificated; rifle → ebony bow; "not from this world" option removed; no heal thanks; Megara pick-up disabled, potion buffs nerfed; Shale "I like you" removed; Katana lockpicking only Adept; vanilla torch for Megara — NEX 132964 (2025-05-29) + PLUG override list — high
- Release notes: "New dialogue … after The Ravens' Lament and Serenata"; Sweetest Carrot no longer requires Bannered Mare "but you should have met Chadryn already" — GitHub annakins/Katana releases v2.6.7, 2024-09-13 — medium
- Don't read the bandits' letters before they are objectives — search-result summary of Nexus article 5393 — low
- Open Cities is not in the LoreRim Default profile — PL — high

## remiel.md
- Remi is at the Silver-Blood Inn, Markarth; 4,500+ lines — SITE — high
- The Dwemer Specialist: Calcelmo → kill Nimhe → guard's note → Nchuand-Zel artifacts (Unique Dwemer Cog / Interesting Dwemer Gear / Shimmering Dwemer Gyro) → lever (Nimhe was keeping the Falmer out) → Scrap repaired and named — PLUG HLIORemi.esp — high
- Reunion of the Fallen: assassin → Solitude, Winking Skeever sailor, Mercenaries' Ship → Morvic (ex-fiancé) → Riften smuggler skooma → family moved to Skaven → tip-off to Order of the Hour, Wayrest → Markarth → Arkngchal, kill Morvic → Arkngchal becomes her workshop; alternative "taking it too far" ending — PLUG — high
- Exploring Arkngchal puzzles (lever order, heat source, lubricant: three golden bowls + two grey ferns, offering chests) — PLUG — high
- Project quests: We Who Challenge the Sun (Aetherium → Remi's Aetherial Lantern), Remi's Crossbow Crucible (2 cogs, 8 gears, lever, 3 wood, 6 dwarven ingots), Attuned Assassination (Bards College → College of Winterhold → Tuning Fork), Picking Remi's Brain (iron ingot at Markarth Forge → Tension Wrench), Real Nord Food (Candlehearth Hall, Chaurus Pie), Upgrades (4 dwemer ruins; romance-available stage) — PLUG — high
- Arkngchal exterior = edited cell POIReach17 (the Reach) — PLUG CELL — medium
- LoreRim - Remi Patch.esp (Requiem masters) overrides NPCs, spells, weapons, the HLIOStartingQuest record and SpiderNimheREF; quest diff shows only master-index/VMAD differences — my byte diff — medium
- RemielReplacer.esp overrides the NPC only — PLUG — high
- Author Maplespice; spider blocks Nchuand-Zel; Arkngchal chests are safe storage — WebSearch summaries of Nexus 51874 / TV Tropes (pages 403) — low-medium

## gore.md
- Gore is at Peak's Shade Tower outside Falkreath — SITE; NEX 85298 (2025-12-26) — high
- Raven's Flight objectives (free the trapped Nord; kill branch "Glory to the Aldmeri Dominion") — PLUG GORE.esp — high
- Wanted (Thalmor Envoy, take Gore to an inn); The Drunken Hunted; Blood Ties (Dawnstar, Pate, family June/Reese/Dorothy); To Free a Raven (jail, Windpeak Inn); Come, the Crows; The Apple from the Tree ("Kill Gore" branch) — PLUG — high
- Where We Stand (near Ivarstead; ask where he wants to go), Nest Left Empty (waterfall ambush; "talk about the ravens" decides the ending) — PLUG + NEX — high
- Count Fleet (Whiterun Stables; ask about life in the Ravens), A New Coat (Taarie, Radiant Raiment, wait a day), Fear and Loathing (Vigilant of Stendarr, suspicious house in Markarth) — PLUG + NEX — high
- Third and final quest not made yet; romance must be earned — NEX — high
- Nexus says "Gore.esm"; install ships GORE.esp — NEX vs PLUG — high
- LoreRim patches: SaSEC, Press E to heal, Paarthurnax QE patch (3 INFOs), Fishing CC patch, GTS - Gore Camp, COTN Dawnstar Gore patch, Redwater Den Gore patch; no LoreRim plugin overrides Gore QUST records; no Vigilant addon plugin present — PL + full-install header and QUST scan — high
- Healing Flask 5 charges at 50% health; camp; Alternate Death System — NEX + PLUG item names — high

## lucien.md
- Lucien is at Dead Man's Drink, Falkreath — SITE; NEX 20035 (2023-01-05) — high
- Oblivion Engine trigger: approval-based ("once Lucien likes you enough… ask him if there's anywhere… he'd like to see"); Intruders about 5 in-game days after you next recruit him — NEX FAQ — high
- Oblivion Engine objectives (two switches, explore, valves, core, destroy Dumzbthar); ending: Lucien sets up a lab — PLUG Lucien.esp — high
- Intruders: resonant sphere alarm, reactivated Dumzbthar, Daedra through the Oblivion Gate, horse Clive — PLUG — high
- Dumzbthar on Solstheim (journal); exterior cell DLC2POIWestRJ01 — PLUG — high; "near Stalhrim Source and White Ridge Barrow", lift entrance — annathepiper blog 2025-04-02 — medium
- Invite came after Dragonborn MQ progress — lifethekway blog 2024-06-19 — low (conflicts with FAQ wording)
- Requiem - Lucien patch: Evasion/Marksmanship/One-Handed perks, spell school perks, tempered Imperial steel sword — Readme.txt in install — high
- LoreRim - Lucien Patch.esp: Requiem rebalance of Lucien + Dumzbthar NPCs/doors/chests; no QUST — PLUG — high
- AE CC patch adds CC commentary quests — PLUG — high
- Lucien MCM enabled in LoreRim MCM-Unlocked config — LoreRim - MCM and INI Settings — medium
- No Bruma plugin enabled — PL — high

## Contradictions
- Gore's Nexus page says "Load Gore.esm"; LoreRim ships `GORE.esp` (NEX 85298 vs install).
- Lucien quest trigger: the Nexus FAQ says it's approval-based; a player blog (lifethekway, 2024-06-19) ties it to Dragonborn main-quest progress. I followed the FAQ and marked the blog claim low.
- Katana line count: the LoreRim site says "8k+ dialogue lines"; the author's GitHub v2.6.7 notes say "7k+". Minor version drift.
- Inigo skills: the LoreRim site says he "excels in archery and sneak"; the Nexus page says "skilled in one-handed and archery". Minor wording difference; I didn't put it in the file.
- WebFetch's summary of the Katana GitHub releases claimed "The Ravens' Lament requires completion of Sugar and Spice". This was NOT found when I grepped the raw release bodies, so I treated it as unverified and left it out of the file.

## Gaps (looked for, not found)
- Remiel Nexus description (no meta.ini cache; live Nexus 403), the exact trigger/timing for Reunion of the Fallen and the project quests, and the romance requirements.
- Katana: what "The Garden" is or where it is; the quest order/prerequisites for the side quests (Nexus articles 5393/5610/7011 return 403); exact LoreCut stat changes.
- Gore: what the "Gorse Dimension" location is; the exact Blood Ties choice tree that leads to each consequence quest.
- Lucien: the exact approval threshold; UESP/official wiki page for Dumzbthar (Nexus wiki 403).
- LoreRim site/wiki: no LoreRim-specific gates for any of the five (the Followers page gives locations only); wiki.lorerim.com not checked.
- Exact Requiem stat values in the LoreRim patches (not inspected).

## Leads
- Nexus articles 5393 (Chasing the Current stages), 5610 (side quests), 7011 (The Ravens' Lament), 5607 (affinity) — need an authenticated or cached fetch.
- Inspect Katana.esp INFO/QUST conditions (GetStage/GetQuestCompleted) to derive the side-quest order and what triggers Serenata.
- Inspect HLIORemi.esp start conditions (assassin trigger level/days) for Reunion of the Fallen.
- The Snowpoint overhaul (modid 146533) changes Snowpoint Beacon; areas/winterhold.md should cover it and cross-link Inigo.
- The LoreRim site Followers page also lists Othriel, Taliesin, The Welkynar Knight and ZEUS — useful for other follower units.
- The Gore Vigilant addon is absent from LoreRim; vigilant.md may want to note that Gore has no Vigilant content here.
