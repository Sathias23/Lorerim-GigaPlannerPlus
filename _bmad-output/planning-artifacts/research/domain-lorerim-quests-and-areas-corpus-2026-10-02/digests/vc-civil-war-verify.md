# Verify — vc-civil-war (normal level, 2026-10-02)

Files: lorerim-agent/knowledge/quests/vanilla-changes/civil-war.md; digests/vc-civil-war-r1.md

## Claims checked
- verified — Message to Whiterun gated on Dragon Rising — UESP Skyrim:Message_to_Whiterun_(Imperial): "Balgruuf will not agree to read the message before Dragon Rising has been completed."; install objective "Assist Jarl Balgruuf with the dragon threat" present in official-quests.json.
- verified — Initiation objectives "Clear out Fort Hraggstad" / "Kill the Ice Wraith"; siege finals "Execute Ulfric Stormcloak" / "Execute General Tullius" — strings present in imports/official-quests.json.
- verified — Vanilla Season Unending trigger, skip conditions, disabled during Message to/Battle for Whiterun, hold exchanges, verbatim "on hold until the Main Quest is complete" — UESP Skyrim:Season_Unending fetched this run (also lists an 8-of-9-holds skip condition the file omits; omission, not error).
- verified — CWFO adds global CWFOisCivilWarFuckOff = 0.0 and overrides DIAL MQ301JarlTrapDragonA1 + MQ301JarlReadyToTrapTopic, Jarl line "Then... Whiterun will stand with you, Dragonborn…" — raw bytes of C:/mods/LoreRim/mods/Civil War F Off - No Season Unending/CWFO_TheFallen.esp (EDIDs, FLTV 00000000, string found).
- verified — Civil War Champions - Reduced Cut: CWCRQuest "Civil War Champion Armor", objective "Pick up champion armor from your commanding officer", overrides ccFFBSSE001_Quest/CorpseCheck; dialogue "I want to fight as your champion." + side-specific lines — LoreRim site creation-club.md ("Removes the dumb 'Battle of Champions' quest. Receive either champion set just before the final siege on Windhelm or Solitude instead.") + plugin strings grepped from the .esp.
- overturned (minor) — Vanilla CC Battle of the Champions "duel ... east of Whiterun" — UESP Skyrim:Battle_of_the_Champions: battle in "a clearing on the plains of Whiterun Hold directly west of Shimmermist Cave" vs opposing champion and soldiers. Text corrected, original noted in LoreRim notes. Start (Drunken Huntsman note / courier letter), candidacy methods, Imperial Dragon / Storm-Bear rewards verified on same page.
- verified — Repairing the Cities (CWRepairs) objectives, start 2–3 days after war if you left Solitude/Windhelm, donation table, completion on entering interior — plugin QUST objectives in imports/mods/after-the-civil-war-siege-damage-repairs.md match file; timings from Nexus cache (same source as cited; plugin records corroborate quest name/objectives only).
- verified — Dvs' Civil War Fixes = 10 loose Papyrus scripts, no plugin — install folder Scripts/ contains exactly 10 .pex files + TESTING_INSTRUCTIONS.txt ("Contains 10 patched Papyrus scripts").
- verified — Experience.ini iXPQuestCivilWar = 150 (Main/Daedric/DLC 200; Side/guilds 100) — C:/mods/LoreRim/mods/LoreRim - MCM and INI Settings/SKSE/Plugins/Experience.ini; "Experience" enabled in profiles/Default/modlist.txt.
- verified — No LoreRim-site gate for the Civil War: only one "civil war" mention across the six pre-fetched site pages (creation-club.md, the Champions entry).
- unverified (same-source only) — Neutral Whiterun Guards / Jagged Crown Tweaks / Kynareth Replaces Talos behaviour — re-read in each mod folder's meta.ini (same publisher as cited); plugins present in install (Kynareth Capital Whiterun Patch .esp present). No independent second source within budget; claims left as-is, consistent with source.

## Mechanical pass
- Frontmatter valid YAML with template fields (level_hint omitted — no source states one); id = file name.
- Sources [1]–[20] all cited inline; no orphan rows; no dangling refs.
- Quest names match plugin records (Civil War Champion Armor, Repairing the Cities, official names).

Web calls used: 3.
