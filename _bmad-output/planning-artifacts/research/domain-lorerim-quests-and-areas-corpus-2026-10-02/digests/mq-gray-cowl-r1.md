# Digest — mq-gray-cowl (round 1)

Unit: mq-gray-cowl (mod-added). Files written:
- lorerim-agent/knowledge/quests/mod-added/gray-cowl-of-nocturnal.md
- lorerim-agent/knowledge/quests/mod-added/hammerfell-quests-bundle.md

Web calls used: 8 (Nexus 145535 fetch → 403; 3 searches; tes-mods Fandom fetch → 402; 2 UESP fetches; 1 search on "There is no (CC) Gray Cowl").

## gray-cowl-of-nocturnal.md
- Main quest is "The Call of Gray Cowl of Nocturnal" (manny_GF_MQ, Gray Fox Cowl.esm v1.4.0.0). Objectives: Reach the place / Find the Hall of the Initiation / Reach the other side / Get the four keys / Follow Arenar / Speak with Arenar / Speak with Syloria / Find a way to enter the Mausoleum / Get into position and shoot the Arrow / Return to Seviana — LoreRim install plugin records (imports/mods/the-gray-cowl-of-nocturnal-10th-anniversary.md, accessed 2026-10-02) — high
- Other quests with journal text: Reward of Coldharbour, The Curse of Sadraaka, Time for the Farewells (escort Seviana and Luvien to Solitude docks), Bury Valen Dreth (Falkreath), The Experiment (Ilrav/Irlav; artifacts near Markarth, Falkreath, Windhelm, Dawnstar), Memories of the Umbranox (Caio's journals → 1000 gold OR spell tome OR keep; missing any → fail at stage 200), Claim Shanta Filibb (player home via Crassius) — plugin records — high
- LoreRim gate: LoreRim site says complete the Thieves Guild questline, then steal an item — LoreRim site New Lands (n/a, accessed 2026-10-02) — high
- The install agrees: Gray Fox Cowl - Under New Management Start.esp overrides SMQN manny_GF_Steal with a single condition, GetStage TGLeadership(000D7D69) == 200. The original node had GetEventData checks plus GetLevel >= 10. The patch also rewrites DIAL 0x034BFF from "Yes, it's happened after I've stolen something." to "Yes, it happened after I restored the Thieves Guild." — plugin bytes parsed this run (LoreRim install, v1.0.0.0, 2026-10-02) — high (record); medium (level check effectively gone in game)
- TGLeadership = "Under New Management"; stage 200 is a quest-finishing stage — UESP Under New Management (accessed 2026-10-02) + official-quests.json — high
- Default trigger: steal or pickpocket at level >= 10; recommends 15+, 30–35 ideal; 8–15+ hours; Sneak and Pickpocket matter — Nexus 141327 via meta.ini cache (nexusLastModified 2025-07-25, cache 2026-01-12) — high
- "Under New Management Start" is an optional file of Nexus 145535 "There is no (CC) Gray Cowl". The author says it makes Gray Cowl an endgame Thieves Guild quest. The main mod disables the CC Gray Cowl Returns; LoreRim does NOT ship that main plugin (ccbgssse020-graycowl.esl is in loadorder.txt) — web search summary (Nexus page 403, nexusLastModified 2025-05-11) + profile files — medium
- The CC quest "The Gray Cowl of Nocturnal" (ccBGSSSE020_Quest, Riften cemetery start) is a separate questline in LoreRim; LoreRim voices its NPCs (Voiced Narratives) — UESP + official-quests.json + LoreRim site Creation Club — high
- Seviana's House is NW of Valthume; the Eye of Cyrodiil is SW of Bloodlet Throne (Hall of the Initiation behind it) — tes-mods Fandom, search snippets only — low
- Endgame: Mausoleum in the Oasis of Mora Sul (east side); key in Al Shedim (north of Ben Erai); Alliance of Ancestral Cheetahs amulet at the far north; fire the Arrow of Extrication from the rug at the blue disc — plugin journal + AMMO record — high
- Requiem: LoreRim-authored "Gray Cowl of Nocturnal - Requiem Patch.esp" (LoreRim - xEdit64 Output) overrides ARMO/WEAP/SPEL/BOOK/CONT/FACT/COBJ — parsed this run — high
- Gray Cowl enchantment manny_GF_Ench_GrayCowl, as defined in the ESM: EnchFortifySneakConstantSelf 25, EnchFortifyCarryConstantSelf 200, Gray Cowl Detect Life — ESM + Skyrim.esm EDIDs parsed — medium (other plugins in a 3000-plugin list may override the ENCH; not checked)
- Unique items: Boots of Springheel Jak, Eagle Eye, Irlav's Penitence (resist fire/frost/shock + fortify conjuration), Sayara's Wisdom (muffle), Draukiir Mask, Jagged Crown, Yokuda, Blade of Yokuda, Umbra (Soul Trap), The Withdrawal, Ocato's Dagger, Bow of the Forgotten Chaos, Golden Scimitar; spells Mark/Recall, Unlock Container, Ancient Vision, etc. — records — high
- LoreRim artifact sacrifice script: manny_GF_Armor_GrayCowl maps to Nocturnal (ID 15), manny_GF_Weapon_Umbra to Clavicus (ID 29); OnForgeItemRemoved blocks that deity's worship and ends active worship — LoreRim - MCM and INI Settings/source/scripts/LoreRimArtifactSacrifice_Script.psc — high (script); medium (what "forge" UI triggers it)
- Ben Erai notice notes (Desert Wolf Pelts, Praetorian Dynamo Cores, Metilius amulet, Duneripper Blood, Shanta Filibb) are moved onto the Missives board and renamed "Missive: …" by GrayCowlMissivesNoNoticeBoard.esp; works only on a fresh save — plugin + Nexus 107288 cache (2025-02-24) — high
- Missives - Gray Cowl Patch adds a Missive Board to Ben Erai with 27 radiant Alik'r Basin templates — plugin + Nexus 26788 cache (2025-08-23) — high
- Bounty fix: 500 non-violent bounty per hold while cowled, merge on being seen equipping; scripts only — Nexus 94939 cache (2023-07-03) + folder listing — high
- SKYBLIVION - Umbra replaces the CC Umbra (Champion's Rest), not the Gray Cowl Umbra — Nexus 98487 cache — high
- Unmarked Locations add-on: 15+ unmarked desert locations — Nexus 159443 cache (2026-01-12) — high

## hammerfell-quests-bundle.md
- 32 named quests with journal/objective text in BetalillesHammerfellQuestBundle.esp; Nexus says 31 — plugin records + Nexus 89977 cache (nexusLastModified 2025-06-04, cache 2026-02-09) — high
- Five sub-mods: Hammerfell Blades, Desertic Dark Brotherhood, Cyrodilic Collections in Hammerfell, More to do in Hammerfell, Desert Lamias in Hammerfell; crime system, guards, Vulstad and Salas Kazas, inn — Nexus cache — high
- Givers: Duarelm on a Vulstad rooftop; Azita / Loremaster Za'kir after; DB: after "Hail Sithis!" an Unknown Initiate on an island N of the Dawnstar Sanctuary; anti-DB: having destroyed the DB, go to the Penitus Oculatus Outpost in Ben Erai; Collections: Jukka NW of Ben Erai; Lamias: N of the Ancient Alik'r Palace; Salas Kazas: talk to the new NPCs; Solstheim quest at the Retching Netch only after the Gray Cowl Solitude Docks ending; finale (Helping the Enemy) after the Ash'abah + library + necromancer quests — Nexus cache — high
- Quest list with objectives (A Lost Temple in Hammerfell, Dragonguard Archives + Book 1–6, Protecting What Was Lost, In need of Scouts, Sands of the Past, DB chain incl. Alik'r No More, Disappearing in the Dark, The Crimson Eviscerator (Soul Cairn), Crimson Scar Believers, Ending the Dark Brotherhood in Hammerfell again, Collections chain, Salas Kazas chain, Spectral Lamias in the Desert) — plugin records — high
- Prerequisite in LoreRim: the desert is only reachable via the Gray Cowl MQ, which is gated by Thieves Guild completion — inference from the Gray Cowl gate — medium-high
- Hotfix esp only edits Jonathan Seven-Swords' ACHR in the Tamriel worldspace — parsed — high (record) / medium (he hides in Skyrim)
- 10th Anniversary patch re-places REFR/NAVM in the desert; cells Dorian's House, Penitus Oculatus Outpost, Soul Cavern — parsed — high
- LoreRim-authored "The Gray Cowl - Betalilles LoreRim Patch.esp": 213 NPC_ + WEAP (Boneshaver Replica, Crimson Eviscerator), ARMO (guard armors), MGEF (Summon Death Hound, Conjure Spectral Lamia, Conjure Gritstone the Patriarch), BOOK (Spell Tome: Conjure Spectral Lamia) — parsed — high
- Lux patch active — plugins.txt — high

## Contradictions
- Nexus "Azir's Hideout" vs plugin journal "Azzin's Hideout" (the grandfather is Azzin). Went with the plugin.
- Nexus bundle says 31 quests; the plugin has 32 named quest records with text (Book 1–6 trackers counted).
- Bundle Nexus names the original SE Gray Cowl (mod 4509) as the requirement; LoreRim ships the 10th Anniversary (141327) plus the bundle's 10th Anniversary Patch. No conflict in practice, but the mod page lags.
- Gray Cowl journal spells the NPC "Irlav" while the NPC record is "Ilrav Baenius"; journal "Kazas Salas" vs location "Salas Kazas".
- Mod default (level 10 + any theft) vs LoreRim (Under New Management complete + theft): the site and install agree, so this is not a site/install contradiction.

## Gaps (looked for, not found)
- Live Nexus pages (403) and tes-mods Fandom walkthrough pages (402): no detailed step-by-step walkthrough, no exact enchantment magnitudes after all LoreRim overrides, no reward specifics for the bundle quests.
- How Moonlight Home (manny_GF_L_AlikrPlayerHome) is acquired.
- The Pit and the Sayara/Yokuda content: helper quests only, no journal text.
- Whether any later LoreRim plugin overrides manny_GF_Ench_GrayCowl or the SMQN again (only the dedicated patches were checked).
- Interaction between the bundle's DB/Penitus Oculatus routes and LoreRim's other DB mods.
- No LoreRim site mention of Betalille's bundle.

## Leads
- tes-mods.fandom.com has pages for Memories of Umbranox, Ben Erai, Seviana's House, Eye of Cyrodiil — a browser-capable fetch could verify locations.
- Check mods "Kanjs - Gray Fox Bust and Cowl Animated", "MBVUP - The Gray Cowl of Nocturnal", "Hammerfell-Themed Amren's House" (outside this unit's brief, probably other separators) for Gray Cowl ties.
- The areas file areas/hammerfell-and-coldharbour-gray-cowl.md should take the full 68-location LCTN list from imports/mods/the-gray-cowl-of-nocturnal-10th-anniversary.md.
- vanilla-changes/creation-club.md should cross-link the CC "The Gray Cowl of Nocturnal" quest to disambiguate.
