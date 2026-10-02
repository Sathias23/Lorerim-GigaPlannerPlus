# mq-wyrmstooth — verification (fresh context, 2026-10-02, level: normal)

Files: lorerim-agent/knowledge/quests/mod-added/wyrmstooth.md; digests/mq-wyrmstooth-r1.md

## Claims checked
- VERIFIED — Rise in the East (MS10) stage >= 100 required for every start option incl. "Immediately": read `C:/mods/LoreRim/mods/Sensible Wyrmstooth Prerequisite/source/scripts/WT_QF__02AC9830.psc` (all 15 branches AND `MS10.GetStage() >= 100`); `Rise of Wyrmstooth.esp` contains EDID `WTWyrmstoothStarter`. LoreRim site new-lands.md independently states the extra Rise in the East requirement.
- VERIFIED — Rise in the East giver Orthus Endario (EEC office, Windhelm); stage 100 finishes the quest: UESP Skyrim:Rise_in_the_East (fetched this run). MS10 = "Rise in the East", MQ105 = "The Way of the Voice": imports/official-quests.json.
- VERIFIED — MCM default milestone = Way of the Voice (option 4 → `MQ105` stage >= 160): Settings Loader `settings.ini` `iMainQuestList=4`; script branch 4 checks `MQ105.GetStage() >= 160`. Mod default (level 10 + Way of the Voice) also stated on LoreRim site.
- VERIFIED — Level gate contradiction: GLOB `WTStartLevel` FLTV = 20.0 in `Requiem - Wyrmstooth.esp`, 10.0 in `Wyrmstooth.esp` (binary read this run); Requiem patch meta.ini says "level requirement from 10 to 20".
- VERIFIED (inference holds, untested in game) — Settings Loader resets to 10: `WT_MCMScript.psc` OnConfigInit → LoadSettings() → (bEnabled=1, iLoadingDelay=0 in settings.ini) → Load() → `WTStartLevel.SetValue(iWTGeneralRequirementsMinimalLevel)`; settings.ini `iWTGeneralRequirementsMinimalLevel=10`. No Wyrmstooth file in "LoreRim - MCM and INI Settings". Medium-confidence wording in the corpus file kept.
- VERIFIED — Notify on start off; boss health scaling on, multiplier 12: settings.ini `bWTGeneralRequirementsNotifyOnStart=0`, `bWTGeneralMiscellaneousScaleBossHealth=1`, `iWTGeneralMiscellaneousBossHealthMultiplier=12`. Author's "not supposed to be enabled by default" note and boss list confirmed in WyrmstoothReadme.txt (lines ~952, ~1246).
- VERIFIED — Encounter-zone min level 24 for Wyrmstooth Barrow and Dimfrost: WyrmstoothReadme.txt (~line 1091). (An older 1.12 entry set zones to 10; the later 24 entry supersedes it.)
- VERIFIED — Theodyn Bienne / Bannered Mare start; nearest-town location encounter since 1.19.1: plugin journal stage 10 of `WTDragonHunt` (imports/mods/wyrmstooth.md) + readme 1.19.1 entry.
- VERIFIED — Exact quest names: all 20 names in frontmatter `quests` match QUST records in imports/mods/wyrmstooth.md; Barrow of the Wyrm / Wyrmstooth stage outlines match objective + journal text.
- VERIFIED — Location names in frontmatter all present as LCTN records in imports/mods/wyrmstooth.md; island "north of Solitude across the Sea of Ghosts" matches both the Nexus cache and the LoreRim site.
- VERIFIED (same publisher only) — Missives board requires main quest completed and town rebuilt: Missives - Wyrmstooth Patch meta.ini; no independent second source checked.

## Mechanical pass
- Frontmatter valid; all template fields present; id = file name.
- All inline refs [1]–[14] resolve; no orphan Sources rows.
- All 16 listed plugins exist in the install (incl. `[LM] IcefloesSolid01_noslush.esp` in Icy Mesh Remaster - Tweak).
- Fix: shout word-wall location sentence had no Sources-table citation → marked "(unverified)".
- Note: the third-party prices (30,000 / ~10,000 gold) were already marked unverified by the writer; left as is.
