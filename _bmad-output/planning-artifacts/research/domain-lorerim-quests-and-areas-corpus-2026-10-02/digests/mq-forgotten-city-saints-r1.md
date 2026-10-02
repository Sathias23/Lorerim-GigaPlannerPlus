# Digest — mq-forgotten-city-saints (r1)

Accessed 2026-10-02 unless noted. Plugin parsing was done this run with a minimal TES4 record reader over files in C:/mods/LoreRim/mods (profile Default).

## the-forgotten-city.md

- Quests "The Forgotten City" (000FCQuest01) and "Forget-me-not" (000FCQuest02, start-game-enabled); objectives and journal stages as listed — LoreRim install ForgottenCity.esp QUST via imports/mods/the-forgotten-city.md (mod v1.8.0.0) — high
- Author start method: courier at level 5+ on entering any city, or go to "Forgotten Ruins" in SW Skyrim; designed for level 5+, high level recommended; solo play; incompatible with M.H.A.R.P.I.N.; 6–8 hours — Nexus 1179 via meta.ini cache (Nick Pearce; nexusLastModified 2017-08-31; cache 2026-01-11) — high
- LoreRim site: "typically level 5 however Lorerim uses the delayed start mod which increases this to level 25" — lorerim.com New Lands (LoreRim team, n/a) — high that the site says this; low that it is current
- SMQN 000FCBeginQuest (ForgottenCity.esp 0x0DCA3A) starts 000FCQuestStart, with conditions GetQuestRunning(000FCQuest01)==0, GetQuestCompleted(000FCQuest01)==0, GetLevel(player) >= 5 — install, plugin parse — high
- LoreRim - World Fixes.esp (mod "LoreRim - xEdit64 Output", enabled, plugins.txt line 3142) overrides the same SMQN with GetLevel >= 200 — install, plugin parse — high
- No other plugin mastered on ForgottenCity.esp overrides that SMQN or the FC quests (checked the Requiem/Synthesis/xEdit outputs, Lux, ToK patch, Economy, Arcane Arsenal, Pronouns, Northern Roads) — install parse — high
- LoreRim max player level = 101 (LoreRim - MCM and INI Settings/SKSE/Plugins/Experience.ini iMaxPlayerLevel = 101); the optional "[Easy] Faster Leveling and Double Level Cap" (201) is disabled in the Default, Extreme and Ultra modlists — install — high
- Inference: the courier is unreachable under default settings, so the start is independent discovery of the Forgotten Ruins — derived from the two points above — medium-high
- Journal stage 15: "I've discovered some forgotten ruins on my own..."; UESP says you get the letter on arriving at the ruins — install / UESP quest page — high / medium
- Forgotten Ruins map marker REFR at x=-164000, y=-21568 (Tamriel cell -41,-6); "The Forgotten City" marker inside — install parse — high
- UESP: the ruins are "just west of Purewater Run and east-southeast of Hag Rock Redoubt, between two waterfalls", in the Reach — en.uesp.net Skyrim_Mod:The_Forgotten_City/The_Forgotten_City_(quest) — medium-high
- UESP: author Nick Pearce, released 2015-10-03, last updated 2017-08-31 — UESP Skyrim_Mod:The_Forgotten_City — high
- Named cells: Forgotten Ruins, The Forgotten City, Citadel, Lakehouse, Underground tunnels, Abandoned Palace, Dwarven Dome, The Golden Sentinel Tavern, Cave, Lonely tower, Chambers, Vernon's Fresh Produce, Firefly Finery, The Honest Trader, plus houses — install CELL FULL — high
- Items: the Immaculate Dwarven Armor/Helmet/Gauntlets/Boots set, The Arbiter's Helmet, Talisman of the Silver Tongue, Treasure Hunter's Talisman (000FCCassiaAmulet01), Gulvar's Axe, Habiq's Ring, Elixir of Acrobatics; spells Decree of the Arbiter and Radiation Poisoning — install — high (that Cassia's reward is the talisman: low/unverified)
- Journal stage 400: "travelled 20 years into the past, to 1 Last Seed 180E"; Dwarves' Law motto "The many shall suffer for the sins of the one" — install / UESP Forget-me-not — high
- Tools of Kagrenac - Forgotten Cities patch.esp overrides only vanilla DIAL WICourierDeliveries plus 1 INFO (courier delivery merge) — install — high
- The Forgotten City - NPC Patch.esp (LoreRim xEdit output): 66 NPC_ + 4 FACT overrides; Requiem for the Indifferent: 63 NPC_ + 1 WEAP; Lux - Forgotten City: 27 CELL / 455 REFR; LoreRim - Armor Merges: 12 ARMO — install — high
- Music Fixer removes the FC music when you first exit after completing the quest (needs SKSE); the Cassia's Plea Remover add-on also removes the stuck quest note — Nexus 54019 via meta.ini (2021-08-19) — high
- Modpocalypse NPCs v3 (KS hair) face overhaul — Nexus 56739 meta (2021-10-08) — high

## saints-and-seducers-extended-cut.md

- Quests: The Route of Madness (EC_SS_MQ100Int, misc), The Isle of Madness (EC_SS_MQ101, daedric), The Roots of Madness (EC_SS_MQ102, daedric), The Merchant's Masterpiece (EC_SS_TheodorQuest), The Lunatic's Treasure (EC_SS_LizardQuest); objectives and journals as listed — install via imports/mods/skyrim-extended-cut-saints-and-seducers.md (v1.1.1.0) — high
- Start: level 20+ and The Mind of Madness complete, then sleep 6 h or re-enter Solitude; new game required; replaces the Creation's stock quests; 1–3 hours; can return afterward — Nexus 72772 via meta.ini (ECSS Dev Group; nexusLastModified 2025-11-11; cache 2026-01-11) — high
- LoreRim site agrees: level 20 + Mind of Madness; integrates Shadowrend, Ruin's Edge and the Staff of Sheogorath — lorerim.com Creation Club — high
- GLOB EC_SS_StartLevel = 20; EC_SS_MQ100Int conditions include GetLevel(player) >= EC_SS_StartLevel; started by SMQN EC_SS_ChangeLocationNode — install parse — high
- No LoreRim plugin overrides the ECSS QUST, SMQN or GLOB records (full scan of plugins mastered on the ECSS esp; only the ECSS Staff of Sheogorath patch has an SMQN override) — install — high
- Delayed Quest Starts - Mind of Madness (Nexus 72751, v1.3.0.0): Mind of Madness requires ANDR_DA15_LevelReq (default 35), then a Winking Skeever innkeeper rumor about "a distressed man walking near the Blue Palace"; Dervenin forcegreets — meta.ini cache (nexusLastModified 2025-01-31) — high
- LoreRim - Global Modifiers.esp overrides ANDR_DA15_LevelReq = 20 (also House of Horrors, Taste of Death and Forsworn Conspiracy = 20) — install parse — high
- The quake leads into Solitude's sewers and then to the Isles — Tuxborn overview (aggregator); tunnel cell "Solitude Wasteworks" (ECSSRootToNirn01, location "Root to Nirn") — install — medium/high
- Locations (LCTN): Shivering Isles, Borogove, Xedex, Root Canal, The Near Corgi Shop, Decrepit House, Glimmering Hollow, Root Nexus, Root to Nirn, Borogove Outgrabe, Sees-the-Moon's Shack, Grove of Reflection; worldspace ECSSShiveringIsles; extra cells Impromptous Hall, Flesh Laboratory — install — high
- NPCs: Staada, Dylora, Theodor Gorlash, Sees-the-Moon, Exiled Priest/Apostle ranks; Thoron per the journal — install — high
- Items: Spell Tome: Teleport Pet: Potema/Pelagius, Amber Smithing Manual, Cast Iron Hat, Dylora's Helmet, Theodor's Apron, Heart of Disorder, Spell Tome: Conjure Hunger; the Wabbajack dialogue line — install — high
- CC overrides: Balance of Power, Restoring Order, Golden and Dark Smithing, Amber and Madness Smithing, Nerveshatter, My Pet Elytra (Mania/Dementia), Staada Quest, Revenge Hired Thugs, BGSSSE018 "Through a Glass, Darkly" — install import — high
- Armory Extended S&S + Patch for LoreRim (Nexus 167859, 2025-12-23): spears, pikes, halberds, shortswords and quarterstaffs for all four sets; crafting gates Golden/Dark = Daedric + Aureal/Mazken knowledge, Amber = Glass + quest, Madness = Ebony + quest — meta.ini — high
- Requiem Smithing Books Give Perks.esp overrides 89 ECSS COBJ; conditions are HasPerk Arcane Craftsmanship (86) and Daedric Smithing (44) — install parse — high (exact per-item mapping not done)
- OMEAR Addition supports ECSS 1.0.0.6–1.1.1 (replaces OnMagicEffectApply events, needs PO3 Papyrus Extender) — Nexus 67968 meta (2025-12-28) — high
- Enabled plugins: ECSS integration patches (Book Covers, Ruin's Edge, Shadowrend, Staff of Sheogorath), Gore - SaSEC.esp, Lucien.esp, ShiveringSky.esp, ECSS - 3D Grass, Lux / Lux Orbis ECSS patches, GKB waves — plugins.txt — high
- Aggregator claims: recommended 30+, Thoron is a shock mage, his final lair can't be revisited, main quest grants Golden/Dark smithing — tuxborn.org (n/a) — low-medium
- UESP lists the ECSS quests as main (Isle of Madness, Roots of Madness), misc (Lunatic's Treasure, Merchant's Masterpiece) and unmarked (Ruin's Edge, Shadowrend, Staff of Sheogorath) — en.uesp.net Skyrim_Mod:Saints_and_Seducers/Quests — medium

## Contradictions
- Forgotten City start level: the LoreRim site (New Lands) says the delayed start raises it to level 25. The install's LoreRim - World Fixes.esp sets the courier SMQN to GetLevel >= 200, above the default 101 level cap, and no FC-targeting delayed-start mod is installed. Both are reported in the file. The site probably lags the current build, or a later LoreRim version deliberately disabled the courier.

## Gaps (looked for, not found)
- Why LoreRim uses 200 (no changelog read; World Fixes has no description).
- What happens on the independent-discovery path in LoreRim (UESP says you get the letter on arrival; not verified in-game or in script).
- Exact FC rewards: UESP lists none; Cassia's reward item not confirmed.
- FC endings beyond the plugin journal (UESP pages are sparse).
- ECSS: whether completion gives a Staada summon spell (an aggregator mentions it; no such spell found in the ECSS plugin's SPEL/BOOK FULL names). Omitted from the file.
- ECSS: which recipes the 89 Requiem perk-gated COBJ overrides cover.
- wiki.lorerim.com: no page found for either mod.

## Leads
- Read the FC courier/start scripts (000FCQuestStart) inside forgottencity.bsa to confirm the discovery path.
- Check LoreRim changelogs or Discord for the World Fixes FC change (intentional disable?).
- Map the Requiem Smithing Books Give Perks ECSS COBJ overrides to items (crafting vs tempering).
- UESP Skyrim_Mod:Saints_and_Seducers/* subpages for per-quest rewards.
