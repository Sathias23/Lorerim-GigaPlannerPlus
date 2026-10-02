# Digest — mq-wyrmstooth (round 1)

File written: `lorerim-agent/knowledge/quests/mod-added/wyrmstooth.md`

## Load-bearing claims

- The LoreRim site says Wyrmstooth starts by default at level 10 after "Way of the Voice", and that LoreRim additionally requires "Rise in the East" (East Empire Company, Windhelm). — LoreRim site, New Lands (lorerim.com, n.d., accessed 2026-10-02) — high
- `Rise of Wyrmstooth.esp` (Sensible Wyrmstooth Prerequisite v1.2.0.0) overrides the QUST `WTWyrmstoothStarter` from Wyrmstooth.esp. Its fragment script requires `MS10.GetStage() >= 100` in all 15 MCM branches, "Immediately" included. — LoreRim install: plugin + `source/scripts/WT_QF__02AC9830.psc` (accessed 2026-10-02) — high
- MS10 = "Rise in the East"; MQ105 = "The Way of the Voice". — `imports/official-quests.json` (Skyrim.esm) — high
- Rise in the East is given by Orthus Endario at the East Empire Company office in Windhelm; stage 100 finishes it. — UESP Skyrim:Rise_in_the_East (accessed 2026-10-02) — high
- The default MQ gate is option 4, Way of the Voice (`MQ105` stage ≥ 160). The MCM can pick any milestone from Unbound to Dragonslayer, or Immediately. — Settings Loader config.json/settings.ini + starter script (install) — high
- Wyrmstooth.esp GLOB `WTStartLevel` = 10.0 and `WTQuestSelectGlobal` = 4.0. — LoreRim install: Wyrmstooth.esp records (parsed 2026-10-02) — high
- Requiem - Wyrmstooth.esp overrides GLOB `WTStartLevel` to 20.0. The Nexus description says "Player level requirement from 10 to 20". — install plugin + Nexus 116468 meta.ini cache (2026-01-11) — high
- Wyrmstooth - Settings Loader (modid 56504, v2.0.1.0, enabled in Default) has settings.ini `iWTGeneralRequirementsMinimalLevel=10`. Its WT_MCMScript calls `LoadSettings()` → `Load()` → `WTStartLevel.SetValue(...)` in `OnConfigInit`. The effective level is therefore probably 10 and the Requiem 20 is overridden. — install (inference from script, not tested in game) — medium
- No `MCM/Settings/Wyrmstooth.ini` user override exists in the install, and LoreRim's "MCM and INI Settings" mod has no Wyrmstooth values. — install file search — high
- The Settings Loader enables boss health scaling (`bWTGeneralMiscellaneousScaleBossHealth=1`, multiplier 12). The plugin default `WTBossHealth` is 0, and the author's 1.20.2 note says it was not supposed to be on by default. — install settings.ini + readme — medium-high
- Theodyn Bienne tracks you down starting from the Bannered Mare. Since 1.19.1 a location encounter brings him to the nearest town once requirements are met. You can also speak to Lurius Liore directly. — readme v1.20.3 (install) + Nexus 45565 cache 2026-01-12 — high
- Quest names, objectives and journal entries for the 20 player-facing quests: Wyrmstooth (`WTDragonHunt`), Barrow of the Wyrm, Reclaiming the Past, Stickler in the Mud, Unwanted Guests, Retrieving Embersunder, Repaying a Debt, Robbed Blind, A Howl Load of Trouble, Someone with Backbone, A Priceless Commodity, Bandit/Animal/Vampire/Warlock Bounty, Wrap Me Up, The Naked Nord, A Debt Unpaid, Noticeboard Pointer, Blind Robber's Cache. — install plugin records (imports/mods/wyrmstooth.md) — high
- Finishing the intro starts Barrow of the Wyrm, and finishing Barrow starts WTRebuild (Stonehollow rebuild). — readme 1.19 changelog — high
- A Debt Unpaid (Signy) is only available after Barrow of the Wyrm; Athir, Daenlit and Shargam are hireable after Vulthurkrah is defeated. — readme 1.19.8 / 1.04 — high
- Reclaiming the Past starts when you enter any building at Fort Valus. — readme — high
- The deed costs 30,000 gold. — Tuxborn overview (third party, n.d.) + annathepiper blog (2023-12-30) — medium
- All upgrades cost about 10,000 gold. — annathepiper blog only — low
- The mod adds the shout Fiik Lo Sah (Phantom Form) and 3 new word walls. — readme 1.07 — high
- Word wall locations are Fort Valus (first word) and Haetar's Cave (last word). — WebSearch summary of fan wiki/walkthrough, page not read directly — low
- Wyrmstooth Barrow and Dimfrost have a minimum encounter-zone level of 24; mercenaries' maximum level is 40. — readme 1.19.x — high
- The Stonehollow Missives board requires the main quest to be completed and the town fully rebuilt; it may produce few jobs. — Missives patch Nexus cache (2026-01-11) — high
- The Requiem patch rebalances many items and NPCs, replaces or removes spells, and renames NPCs. — Nexus 116468 cache — high
- The LoreRim Player Homes page says Fort Valus is purchased from Lurius Liore "after completing Wyrmstooth's main quest". — LoreRim Google Sites player-homes page (web, accessed 2026-10-02) — medium

## Contradictions
- **Start level:** the Requiem patch sets 20 (plugin + Nexus page). The Settings Loader's settings.ini sets 10 and applies it at MCM init. The LoreRim site says 10, describing it as the mod default. The effective value is probably 10; this needs an in-game check (`help WTStartLevel` / MCM).
- **Fort Valus purchase timing:** the readme says Reclaiming the Past starts on entering a Fort Valus building. Tuxborn says you can buy on arrival at Stonehollow. The LoreRim Player Homes page says after completing the main quest. Not resolved.
- **Site vs install:** the LoreRim site calls it "expansion-sized" and makes no mention of the Requiem level change. No other conflict.

## Gaps (looked for, not found)
- Lurius Liore's reward amount for Barrow of the Wyrm. The Steam guide was rate-limited (429) and the Nexus walkthrough article returned 403.
- Exact word-wall locations, verified from primary sources.
- A Wyrmstooth page on wiki.lorerim.com or a UESP Mod: page (not searched exhaustively).
- Whether the bounty misc quests are notice-board driven (inferred only, so it is not stated as fact).
- Upgrade prices for Fort Valus from primary data (not parsed from plugin dialogue).

## Leads
- Parse the Wyrmstooth.esp dialogue (INFO) records for the deed and upgrade prices and Lurius's reward.
- Read the Wyrmstooth Official Guide (Google Drive link in the Nexus description) or Steam guide 2462837874 for rewards and word walls.
- Test the effective `WTStartLevel` in game, or check the MCM Helper ordering.
- Stonehollow Overhaul for Wyrmstooth, Ferries - Wyrmstooth Addon and GTS - Wyrmstooth Adoption are enabled outside this separator and may add content worth covering in areas/wyrmstooth-island.md.
