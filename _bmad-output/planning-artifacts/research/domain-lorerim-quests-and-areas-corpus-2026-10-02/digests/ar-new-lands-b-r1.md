# Digest — unit ar-new-lands-b (areas), run r1 (resumed: no prior target files existed)

Accessed 2026-10-02 unless noted. "Install" = C:/mods/LoreRim, profile Default; plugin records parsed directly (SMQN/QUST/GLOB/CELL/LCTN/WRLD/COBJ/KEYM) with a throwaway Python ESP reader in addition to the imports/mods/*.md files.

## hammerfell-and-coldharbour-gray-cowl.md
- Gray Cowl base start node `manny_GF_Steal` = crime event + GetLevel >= 10 — Install: Gray Fox Cowl.esm SMQN (mod v1.4.0.0) — high
- LoreRim override: mod "Under New Management Start" (Nexus 145535 v1.0.0.0), `Gray Fox Cowl - Under New Management Start.esp`, replaces node conditions with only GetStage TGLeadership == 200 (no level check), enabled, loads after Gray Fox Cowl.esm — Install plugin records + plugins.txt — high
- TGLeadership = "Under New Management"; stages 50 and 200 are completion — UESP (n/a pub) — high
- LoreRim site: "complete the Thieves Guild faction questline and then steal an item" — lorerim.com New Lands — high (agrees with install)
- Quests (Gray Fox Cowl.esm): The Call of Gray Cowl of Nocturnal, Reward of Coldharbour, The Curse of Sadraaka, Time for the Farewells, Bury Valen Dreth, The Experiment, Memories of the Umbranox, Claim Shanta Filibb (+ objectives/journal) — Install — high
- Worldspaces: Coldharbour (mannyGFO), Alik'r Desert, Cave of Mora Sul, Lair of the Ancestral Cheetahs; ~68 LCTNs incl. Ben Erai, Al Shedim, Oasis of Mora Sul, Mausoleum, Forgotten City (Sadraaka), Hamunaptra, Khenzedum, Shanta Filibb, Moonlight Home, The Pit, Great Agyrion Breach, Imperial City Prison, Sancre Tor, Akavir — Install — high
- Mausoleum in Oasis of Mora Sul east side; key in Al Shedim north of Ben Erai; amulet far north; return via magic portal to Seviana — Install journal text — high
- Mod scale 8-15h; two lands incl. Coldharbour island; level 10 min / 15+ rec / 30-35 ideal; 10th-ed additions (Pit, home, shrines, shortcut exits, way back to Skyrim early, 4th Caio journal only in Coldharbour) — Nexus 141327 via meta.ini cache (2026-01-12) — high
- Hammerfell bundle: 31 quests, crime system, Vulstad, Salas Kazas, new inn; questgiver locations; DB chain after "Hail Sithis!"; Solstheim quest after Gray Cowl ending at Solitude docks — Nexus 89977 via meta.ini cache (2026-02-09) — high
- Bundle quest names/objectives + cells (Wind Scour Temple, Alik'r Desert Sanctuary, Penitus Oculatus Outpost, Cyrodilic Collections, Ancient Library, Soul Cavern, Soul Cairn Tower etc.) — Install BetalillesHammerfellQuestBundle.esp — high
- Bounty fix: starting bounty 500 non-violent per hold; can pay/jail — Nexus 94939 meta.ini (2023-07-03) — high
- Unmarked Locations Pack GC addon: 15+ new unmarked desert locations — Nexus 159443 meta.ini (2026-01-12) — high
- Missives Gray Cowl Map adds map to Alik'r Missives board — Nexus 107271 meta.ini — high
- Seviana's House north-west of Valthume; Seviana gives Arrow of Extraction + Key to Hall of the Initiation — TES Mods Fandom (search snippet; fandom labels it "the Reach") — low/medium

## vigilant-realms.md
- Delayed Start plugin: GLOB zzzVigilantMinLevel = 25; SMQN VigilantDelayedStart: GetLevel >= global AND DA10 (The House of Horrors) completed AND DLC1VQ08 (Kindred Judgment) completed — Install `Vigilant - Delayed Start.esp` (Nexus 57961 v2.3.0.0) — high
- = "Option 2" of the patch; Altano & Orlando absent from Windpeak Inn until met; new game needed; author recommends ~40, 25 absolute min — Nexus 57961 meta.ini (2025-08-23) — high
- LoreRim site: requires main quest, Dawnguard and House of Horrors; Altano recruits at Dawnstar inn — lorerim.com New Lands — medium (main-quest part contradicted)
- House of Horrors delayed: `House of Horrors - Delayed Start.esp` GLOB ANDR_HouseOfHorrorsLevelReq = 35 — Install — high (value), medium (effective in-game, MCM could change)
- LoreRim MCM preset: Vigilant.ini [BossDifficulty] iVigDiffLvl=50, iVigIncAttack=10; defaults 0/0; ranges -9..100 and 0..10 — Install `LoreRim - MCM and INI Settings/MCM/Settings/Vigilant.ini`, Settings Loader config.json/settings.ini — high
- Per VIGILANT text: +1 health level = +10% boss health; +1 attack = +20% — Nexus 11849 meta.ini (2025-08-19) — medium (mapping to slider is inference)
- Episodes 1-4 + Anatomancer epilogue; Ep2 starts after Act1, Ep3 after Act2, Ep4 immediately after Ep3; 8 board bounties + 5 dungeon radiants; Anvil of Zenithar locations; Debug Room paintings; Red Stone/Tree of Life; NG+ json — Nexus 11849 — high
- Quest names/objectives (Vigilant of Stendarr … The Landing; Empty Cells, Remnants, The Blood Matron; Child of Oblivion, Successor; Legacy of Belharza; Sacred Anatomancer; memory quests; bounties/radiance) and 11 worldspaces, ~175 LCTNs — Install Vigilant.esm (EN translation 1.8.0.0) — high
- Stuhn Ravine south of Nightcaller Temple; Temple of Stendarr is base/home — TES Mods Fandom (search snippet) — medium
- Stendarr Rising rebuilds vanilla Hall of the Vigilant — Nexus 49346 meta.ini (2023-06-16) — high

## the-forgotten-city-zenithar.md
- Base start node 000FCBeginQuest: GetLevel >= 5 — Install ForgottenCity.esp v1.8.0.0 — high
- LoreRim - World Fixes.esp (xEdit output) overrides 000FCBeginQuest to GetLevel >= 200; no later plugin overrides it; no Forgotten City delayed-start mod enabled — Install plugins.txt + record scan — high (record), medium (gameplay consequence "courier never comes")
- Site: delayed start raises to level 25, courier in any city, or go to Forgotten Ruins in SW — lorerim.com New Lands — contradicted
- Journal stage 15 "I've discovered some forgotten ruins on my own..." (manual start supported) — Install — high
- Ruins in the Reach, west of Purewater Run, ESE of Hag Rock Redoubt, between two waterfalls — UESP (n/a) — high
- Entrance behind waterfall, south of Markarth — TES Mods Fandom snippet — medium
- Quest names The Forgotten City / Forget-me-not; objectives/journal; cells (Forgotten Ruins, The Forgotten City, Citadel, Lakehouse, Golden Sentinel Tavern, Underground tunnels, Dwarven Dome, Abandoned Palace, Cave, houses/shops); NPC names — Install — high
- Music fixer + Cassia's Plea remover — Nexus 54019 meta.ini (2021-08-19) — high
- ToK–Forgotten Cities patch edits WICourierDeliveries INFO with item checks from both mods — Install — high
- No "Zenithar" string in ForgottenCity.esp — Install byte search — high

## undeath-dragontail-mountains.md
- Base Undeath: starts automatically at level 30 — Nexus 6180 meta.ini — high
- Classical Lichdom Immersive Start: note at Markarth Silver-Blood Inn at level 30; UndeathFixes.esp SMQN NecroQuestStart GetLevel >= 30 — Nexus 40802 meta.ini + Install — high
- LoreRim: UndeathQuestPrerequisiteNoLevel.esp (Nexus 121948 v1.2.0.0) replaces NecroQuestStart conditions: MS11 Blood on the Ice completed AND MS06 The Wolf Queen Awakened completed, quest not running/completed, no level — Install — high
- Quests: In their Footsteps, Exhuming Power, Arkay the Enemy, Infernal Alchemy, Scourg Barrow, Black Book: Whispers of the Veil, The Path of Transcendance (+objectives/journal) — Install Undeath.esp — high
- Cells/LCTN/WRLD: Dragontail Mountains, Scourg Barrow, Apocrypha, Ravenscorn Spire, Temple of Arkay, The Broker's Shack — Install — high
- Barrows of the Mountains book enables travel to/from Dragontail (base: fast travel only); Staff of the Worm Lord; altars 50 Ench/75 Conj; Lost Knowledge & radiant Black Book no longer send you to Undeath Apocrypha — Nexus 40802 — high
- Solitude Sewers entrances (Winking Skeever, Bards College, Castle Dour basements; SE & NE of city) — Nexus 6180 — high
- Ravenscorn Spire in Eastmarch; ritual hideout; deeds from Broker; Dragontail fast-travel marker in clouded west area — TES Mods Fandom snippets — medium
- Requiem - Undeath: removes spells, raises artifact value, rebalances NPCs, +150 health Lich Form — Nexus 69009 meta.ini (2023-02-08) — high
- Apocrypha only reachable on evil path — Nexus 128168 meta.ini (2024-12-06) — high
- [LoreRim] Undeath Apocrypha Skip edits Black Book activator/portal refs — Install — high (records), low (behaviour)

## frozen-heart-areas.md
- SMQN ksws07QuestNode: two fn-378 conditions on Skyrim.esm 00048AC9 and 0003F9EA — Install ksws07_quest.esm v0.6.5.0 — high
- 0003F9EA = Fire Breath shout internal ID; Slow Time words 00048ACA-CC — UESP — high; 00048AC9 = Slow Time shout — medium (inferred)
- Start: buy Snow Elf Mirror (Labyrinthian Passages) from Belethor's General Goods; read; Slow Time then equip; need 1 word each Slow Time & Fire Breath (FOMOD can drop the start check) — Nexus 159911 meta.ini (2026-02-18) — high
- Quests The Frozen Heart, Seeking Out Shards, A Book for Othriel, Another Book for Othriel; LCTNs Crag Spire Wastes, Othriel's Cabin, Whispering Walls, Frostskarn Vault, Wisp Light Crevasse, Whispering Walls Catacombs, Labyrinthine Passages, Gallery of Mirrors; 5 worldspaces — Install — high
- Walkthrough details (maze answers, 1189 code, Rimeweld, Gallery of Mirrors city portals, follower via disposition) — Nexus 159911 — high
- Not on LoreRim site — imports/lorerim-site — high

## gravewind-area.md
- LoreRim Gravewind Start Tweak.esp: KEYM "Cemetery Homestead Key", locked exterior door REFR (XLOC key), override of FreeformFalkreathQuest03B "Dark Ancestor" adding 1 key to Vighar alias — Install (LoreRim xEdit output) — high
- Site: "Get the key from Vighar the vampire (from the Falkreath quest)"; start NW of Roadside Ruins — lorerim.com New Quests — high
- Dark Ancestor given by Dengeir of Stuhn (Falkreath); Vighar at Bloodlet Throne SW of Helgen — UESP — high
- Quests In the Pines, Lost in the Woods, Lost to Oblivion; LCTNs/cells (Pine-shrouded Cemetery, Gravetender's House, Cemetery Homestead, Herrah's Catacombs, Gravewind Apothecary, Mausoleum Hall/Throne, Hall of Rebirth, Corpse Fissure, Vessel Incubation Hall, Sunken Hatching Grounds, Pit of Rejects, The Undercity, Gravewind Study, Gravewind Temple, The Way Home, The Void, Scuttling); WRLD Gravewind — Install FalkreathShades.esp v1.2.0.0 — high
- Guide, endings (Fingerbone Necklace choice), spells, level 25ish+, trapped on start, solo — Nexus 129582 meta.ini — high

## tools-of-kagrenac-areas.md
- Start: Keening via Arniel's Endeavor + The Way of the Voice; courier after a few days; MCM alternate start — LoreRim site + Nexus 14168 meta.ini — high
- No LoreRim override of start found; no LoreRim MCM preset — Install scan — medium
- Quest names Kagrenac's Tools, Lost Heritage, My Precious, Vivec's Trial of Wisdom, Darkest Depths; objectives/journal; LCTNs Atalatar, Aba-Malatar, Silent Passage, Rkulftzul Sealed Vault, Oio-Lalor, Silent Ruins; cells; NPCs Mathis Valen, Vonos Dreloth, Yassour Tansumiran, Ayleid Lich — Install Tools of Kagrenac.esp v1.62.0.0 — high
- Ayleid ruins along southern border with Cyrodiil; Aba-Malatar SE corner; Atalatar outdoors; lava vault; Blackreach portal → outdoor path to Dwemer ruin — Anna the Piper review (2025-11-16) — medium
- Stones retrievable; Oio-Lalor collision workaround — LotD Fandom snippet — medium
- Ring spots, vault code 348 — Nexus 14168 — high

## nightmare-and-dream-realms.md
- Sleepwalking start: Ralforn, Green-Tip Cabin NE of Ivarstead — LoreRim site + Nexus 141047 — high
- Sleepwalking quest/objectives/journal; WRLD The Nightmare, Nightmare Of Bereavement; cells/LCTNs; spells Detect Sleeping, Encase In Nightmare (L/N/G) — Install NightmarePlane.esp v1.0.9.0 — high
- Demon of Dream: unmarked; Idol of Vaermina in Cragwallow Slope; 3 dreams; level 15+; Dreamstride powers; Throne of Trade — Nexus 118719 meta.ini + LoreRim site — high
- Cragwallow Slope: Eastmarch, SE of Windhelm, S of Narzulbur — UESP — high
- LoreRim Dreamstride.esp (in LoreRim - MCM and INI Settings, loads after RuneDreamstrides.esp): Throne grants "Staff of Corruption Charges" = DA16SkullDreamCount; recipes priced in charges (10/15/15/15/5) + 7 Frostbitten Dreams tomes (15-30); removed recipes; renamed spells — Install plugin + psc — high
- LoreRim note lists Boulderfall Cave instead of Riverside Shack (original note text in RuneDreamstrides.esp lists Riverside Shack); patch edits both cells — Install — high (records), medium (in-game relocation)
- DA16 = Waking Nightmare — official-quests.json — high

## Contradictions
- Forgotten City start: LoreRim site says delayed start to level 25 (courier) vs install: no delayed-start mod, LoreRim - World Fixes.esp sets 000FCBeginQuest GetLevel >= 200 (courier effectively disabled). Both cited in file; manual travel to Forgotten Ruins recommended.
- Vigilant start: site says main quest + Dawnguard + House of Horrors vs install Delayed Start plugin: level 25 + House of Horrors + Kindred Judgment (no main-quest check).
- Demon of Dream Courier location: Nexus guide / original plugin note = Riverside Shack vs LoreRim patch note = Boulderfall Cave.
- Seviana's House: TES Mods Fandom says "north-west of Valthume in the Reach hold" — hold label not cross-checked; reported as low-confidence.

## Gaps (looked for, not found)
- Why the file slug says "zenithar": nothing Zenithar-related in ForgottenCity.esp; only "Anvil of Zenithar" in VIGILANT.
- Exact outside map location of Seviana's House, Hall of the Initiation, Rkulftzul, Stuhn Ravine entrance — not in local records read; web pages (fandom, Nexus) 402/403.
- In-game behaviour of `[LoreRim] Undeath Apocrypha Skip` and `Undeath - Phylactery Limits` (no descriptions).
- How Moonlight Home (Gray Cowl) is acquired.
- Whether LoreRim configures any ToK / Frozen Heart / Undeath MCM values (none found in LoreRim - MCM and INI Settings).
- LoreRim wiki (wiki.lorerim.com) pages for these mods — search returned only lorerim.com pages already imported.
- Level hints for ToK, Sleepwalking, Frozen Heart — none stated by sources.

## Leads
- Parse `LoreRim - World Fixes.esp` fully: it may override other delayed starts (it touched 000FCBeginQuest and many CC quests) — relevant to vanilla-changes/creation-club.md and other units.
- Check whether `Delayed Quest Starts - House of Horrors` has an MCM changing the 35 level; affects Vigilant availability.
- `Gray Fox Cowl - Under New Management Start.esp` source page (Nexus 145535) has an empty cached description — live page could confirm intent.
- Verify in-game: Demon of Dream courier body in Boulderfall Cave; Forgotten City courier never arriving.
- Vigilant's boss scaling script (zVigDifficultyLevel global use) to quantify LoreRim's 50/10 preset.
