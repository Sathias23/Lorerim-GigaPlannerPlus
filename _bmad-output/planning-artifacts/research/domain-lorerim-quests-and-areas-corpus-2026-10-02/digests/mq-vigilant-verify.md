# Verify — mq-vigilant (normal level)

Verifier: fresh context, 2026-10-02. Web calls used: 0 (all checks resolved against the install).

## Checked claims
- verified — Delayed Start gate: level >= `zzzVigilantMinLevel` (25.0), DA10 completed, DLC1VQ08 completed, no main-quest condition. Evidence: own parse of `C:/mods/LoreRim/mods/VIGILANT - Delayed Start/Vigilant - Delayed Start.esp` — GLOB 0x800 FLTV 25.0; SMQN `VigilantDelayedStart` CTDAs = GetLevel(func 80) >= GLOB, GetQuestCompleted(543) 0x022F08 == 1, GetQuestCompleted 0x01007C25 (Dawnguard.esm) == 1. No other ini/json in mods/ references `zzzVigilantMinLevel`.
- verified — 022F08 = The House of Horrors, Dawnguard 007C25 = Kindred Judgment. Evidence: `imports/official-quests.json`.
- verified — Author's "25 absolute earliest, ~40 recommended" and "Option 2: MB + DG". Evidence: `VIGILANT - Delayed Start/meta.ini` nexusDescription.
- verified — LoreRim site says added in V4; requires main quest, Dawnguard and House of Horrors; Altano at the Dawnstar inn. Evidence: `imports/lorerim-site/new-lands.md`. Contradiction with plugin (no main-quest check) confirmed and correctly reported in the file.
- verified — House of Horrors delayed to level 35; ask Kleppr/Frabbi "Anything noteworthy happening?". Evidence: own parse of `House of Horrors - Delayed Start.esp` GLOB `ANDR_HouseOfHorrorsLevelReq` = 35.0 (load order 2622, Default profile); meta.ini description.
- verified — Dawnguard gated behind Laid to Rest. Evidence (independent of site): `Sensible Dawnguard Prerequisite/DawnguardQuestPrerequisite.esp` SMQN `DLC1VQ00Node` includes GetQuestCompleted Skyrim.esm 025F3E (= Laid to Rest per official-quests.json). Added to Sources row 11.
- verified — Immersion Tweaks: `zzzAoMgRate` = 30.0; anvil renamed "Anvil"; Spinner's Needle quests `zzzAoMqOwl`/`zzzCOqOwl` blanked. Evidence: own parse of `Vigilant Immersion Tweaks - All in One.esp`.
- verified — Anvil of Zenithar restored by LoreRim patch loading later. Evidence: `LoreRim - xEdit64 Output/Lorerim - Vigilant Patch.esp` FURN `zzzCHCraftingZenitharAnvil` FULL "Anvil of Zenithar"; Default plugins.txt order: Immersion Tweaks line 290, Lorerim - Vigilant Patch line 1652. Patch has no QUST/SMQN records.
- verified — Boss difficulty preset 50/10 vs defaults 0/0. Evidence: `LoreRim - MCM and INI Settings/MCM/Settings/Vigilant.ini` (iVigDiffLvl=50, iVigIncAttack=10); `VIGILANT SE - Settings Loader/MCM/Config/Vigilant/settings.ini` (0/0). NG+ `ElderScroll_Global.json` all counters 0 also confirmed.
- verified — Exact quest and location names (all 32 quests in frontmatter, all 17 locations, Spinner's Needle, Jo'vanni's Dream Theater, Mar'so Suicide) found in `imports/mods/vigilant-english-translation-plus-voiced-addon.md`.
- verified — Act I order (previously medium, fandom snippet only). Evidence (independent): EditorIDs `zzzAoMMq00`–`zzzAoMMq10` in the import file run Vigilant of Stendarr → Bloodsucker → He Who Cannot Be Touched → Lazy Afternoon → The Eye of Madness → Dine and Dash → Thus Spoke Khajiit → Old Regrets → No Mercy → The Endless Fall → The Landing; Art of Mercy = `zzzAoMMqGoodEnd`. Added a sentence citing [2].

## Mechanical pass
- Frontmatter: valid, all template fields present; id `vigilant` matches file name.
- Source [14] was orphaned (never cited inline) → now cited on the start-gate line (replacing an irrelevant [13] there).
- Uncited sentence "In practice, recruitment comes at level 35 or later…" → cited [4][10].
- All inline [n] resolve to Sources rows 1–14.

## Notes (not edited)
- Install also ships Vigilant-related mods not listed in `mods:` (e.g. "MBVUP - VIGILANT", "Stendarr Rising - The Hall of the Vigilant Rebuild", "Vigilant Paper Map for FWMF by Limon", "Vigil Enforcer Retexture SE", and plugins Vigilant Occlusion Addon / Lux / Northern Roads / Ryn's Alchemist Shack Vigilant patches). Mostly cosmetic/compat; a later pass may list them.
- Plugins frontmatter omits the location-patch plugins (Ivy Stendarr's Beacon, JK's Bee and Barb, Snazzy Palace, Lux, Northern Roads, Ryn's) — the digest already lists some as leads.
