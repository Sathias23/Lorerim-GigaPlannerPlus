# Verify — ar-new-lands-a (normal), 2026-10-02

Fresh-context verifier. Checked 10 load-bearing claims against a source independent of the one cited. Web calls used: 3.

## Claims
- verified — wyrmstooth-island: LoreRim also requires Rise in the East (MS10 stage >= 100) on every quest-select option, including 14 ("Immediately"). Cited: LoreRim site [5]. Independent: install `Sensible Wyrmstooth Prerequisite/source/scripts/WT_QF__02AC9830.psc`; lines 15–85 all AND `MS10.GetStage() >= 100`.
- verified — wyrmstooth-island: Settings Loader defaults are iMainQuestList=4 (Way of the Voice, MQ105 >= 160), min level 10, boss-health multiplier 12; LoreRim's MCM/INI Settings mod has no Wyrmstooth override. Independent: install `Wyrmstooth - Settings Loader/MCM/Config/Wyrmstooth/settings.ini`, plus a find over `LoreRim - MCM and INI Settings` (no wyrm* file).
- verified — wyrmstooth-island: Requiem patch GLOB WTStartLevel = 20.0 vs base 10.0; meta.ini says "level requirement from 10 to 20". Independent: GLOB FLTV parsed from both plugins this run.
- verified (medium) — wyrmstooth-island: the effective level is probably 10. WT_MCMScript OnConfigInit → LoadSettings → Load() sets WTStartLevel from the INI (10). LoadSettings runs only if `bEnabled:Maintenance`, and settings.ini has bEnabled=1, so it does run. In-game confirmation is still missing; the text already hedges.
- verified — wyrmstooth-island: the spiddal-stick swap to The Cause assets. Independent: the meta.ini of `Wyrmstooth - The Cause Patch` / `Rare Curios Patch` (shared modid 59459; JELWyrmstoothCausePatch.esp) says "Spiddal Stick plants and ingredients have been swapped to use the assets from The Cause".
- verified — wyrmstooth/hjorkvild/jtbm/ecss: exact quest names in frontmatter and headings match the QUST headings in imports/mods/*.md. Siege at Icemoth is start-game-enabled (HYORdunIcemothQST). The ECSS quests are EC_SS_MQ100Int/MQ101/MQ102/TheodorQuest/LizardQuest.
- verified — hjorkvild-isles: start at the Old Wooden Jetty, west of Northwatch Keep, by reading the waterlogged journal; no extra LoreRim gate. Cited: Nexus [3]. Independent: imports/lorerim-site/new-lands.md (same instructions, no gate).
- verified — vvardenfell-and-baan-malur: the Solstheim worldspace FULL is "Morrowind" in Journey to Baan Malur.esp and in Baan Malur Landscape Updates.esp, and "Solstheim" in `LoreRim - xEdit64 Output/Journey to Baan Malur - Patched.esp`. VvardenfellWorld FULL = "Vvardenfell". Independent: WRLD records re-parsed this run.
- overturned (gap filled) — vvardenfell-and-baan-malur: the file said "Whether LoreRim sets [bBorderRegionsEnabled=0] was not verified." Install `profiles/{Default,Extreme,Ultra}/skyrim.ini` `[General] bBorderRegionsEnabled=0`. The sentence was edited and source [10] added.
- verified — vvardenfell-and-baan-malur: routes through Kalbthurz east of Windhelm and the Raven Rock ferry; "size of a Skyrim hold". Independent check of the import's "(no cached description)": the JtBM meta.ini does contain these strings. The import-tool gap the writer flagged is confirmed.
- verified — shivering-isles: the start requires level 20. Cited: site [4] + Nexus [3]. Independent: plugin GLOB `EC_SS_StartLevel` = 20.0, and EC_SS_MQ100Int carries a GetLevel CTDA compared against a global. A citation was added. The Mind of Madness condition was not found in the QUST CTDAs (probably script-side, in the BSA). It stays supported by site + mod page agreement only.
- verified / added — shivering-isles: the Isle of Madness giver is Staada, per UESP The_Isle_of_Madness. UESP also lists a suggested level of 25. That was added to Dangers and level_hint with [6]. It does not contradict the level-20 requirement.

## Mechanical pass
- All 4 files: id matches the file name; required frontmatter keys present; every inline [n] resolves to a Sources row; no orphan rows; frontmatter `sources` equals the table rows.
- FIXED: shivering-isles-saints-and-seducers.md had invalid YAML (unquoted `title` containing ": "). It is now quoted.
- Digest (ar-new-lands-a-r1.md): consistent with the files; no edits needed.

## Not checked
- The Skyrim Ferries routes, the Fort Valus adoption details and the Vvardenfell worldspace content are hedged in the text as unverified already.
