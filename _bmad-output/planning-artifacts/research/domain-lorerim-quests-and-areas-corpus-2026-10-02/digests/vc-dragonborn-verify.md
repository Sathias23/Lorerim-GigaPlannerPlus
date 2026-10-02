# Verify — vc-dragonborn (fresh-context verifier, 2026-10-02)

Files: lorerim-agent/knowledge/quests/vanilla-changes/dragonborn.md; digests/vc-dragonborn-r1.md

- verified — LoreRim site: Dragonborn starts after "The Way of the Voice" via cultist attack; "immersively delayed"; Miraak priest summary — imports/lorerim-site/main.md lines 19, 42-43 (direct read).
- verified — TIE shipped settings iStartingQuest=1, iTIE_MinimumLevel=25, iTIE_CultistAttackChance=5, iTIE_Deathbrand=36, iTIE_EbonyWarrior=40 — install `Timing is Everything SE - Settings Loader/MCM/Config/TimingIsEverything/settings.ini`; config.json option index 1 = $TIE_CultistAttackAfterVoice (9 MQ points + Unknown, defaultValue 1); tie_mcmscript.psc LoadSettings() on OnConfigInit/OnGameReload, reset default Ebony 80. No MCM/Settings/TimingIsEverything.ini override found in any mod (incl. LoreRim - MCM and INI Settings).
- verified — Winning DLC2WE09/SMQN DLC2CultistAmbushNode001 in `LoreRim - Global Modifiers.esp` (loadorder line 3438; TIE 1345, Requiem.esp 1679, Fozars 1698): parsed CTDAs = GetLevel>=TIE global 0xE53B, GetGlobalValue QuestStartSelection==1, not in Solstheim loc, GetStage MQ105(0x242BA, EDID confirmed in Skyrim.esm)>=160, DLC2MQ01<5, DLC2WE09 stage1 not done, GetRandomPercent<DLC2WE09Chance. No MQ106 condition.
- verified — Vanilla Dragonborn.esm: GLOB DLC2WE09Chance FLTV=100; DLC2WE09 has MQ105>=160, DLC2MQ06<550, GetLevel>=25 OR in DLC2SolstheimLocation — parsed Stock Game/Data/Dragonborn.esm.
- verified — TIE.esp globals DLC2WE09Chance=5, QuestStartSelection=1, CultistAttackMinLevel=25, EbonyWarriorMinLevel=80 — parsed TimingIsEverything.esp.
- verified — Requiem DB patch DLC2WE09 conditions GetStageDone 0x32926 stage 200; 0x32926 = MQ106 (EDID in Skyrim.esm) — parsed Fozars_Dragonborn_-_Requiem_Patch.esp; overridden by Global Modifiers as stated.
- verified — Ebony Warrior skip lines ("Very well, I'll be there." / "Sorry. You'll have to find some other way to stroke your ego." / "I have no time for trifles."), journal "…he looked quite dejected.", objective "Tell him to get lost" — strings grepped from EbonyGetLost.esp (import md carried only the Nexus text).
- verified — Vanilla Ebony Warrior level 80, Last Vigil NE of Fort Greenwall — UESP Dragonborn:The_Ebony_Warrior (fetched).
- verified — An Axe to Find opt-in topics "Sure." / "I don't have time for this." / Crescius "…more urgent matters to deal with." — strings in TheChoiceIsYours.esp.
- verified — Severin Manor price GLOB ANDR_SeverinManorPrice FLTV=10000; "Notice" ACTI, "Deed of Severin Manor", "Severin Manor Master Key", topic "I would like to buy Severin Manor? (<Global=ANDR_SeverinManorPrice> gold)" — parsed Severin Manor Has A Price.esp.
- verified — Bow of Shadows in Severin family chest, Mirri Severin's key via Served Cold — imports/mods/bow-of-shadows-reduced-cut.md (Nexus cache) + LoreRim site creation-club.md line 55.
- verified — Priest tombs Ahzidal/Kolbjorn Barrow, Dukaan/White Ridge Sanctum, Zahkriisos/Raven Rock Mine, Vahlok/Vahlok's Tomb — UESP Dragonborn:Dragon_Priest (fetched).
- disputed — Miraak "+25% fortify shouts": Nexus 83458 cache says 25%; ImmersiveMiraakDifficulty.esp SPEL Zam_MiraakBuff "Zam's Fortify Shouts" EFIT magnitude 20 (others match: 25/500, 25/500, 25 destr, Vahlok 25/1000/75/25 one-handed, gated by GetDeadCount on priests). Annotated inline in dragonborn.md.

Mechanical: frontmatter has all template fields; id=dragonborn matches file; [1]-[25] all used, no orphan rows; quest names present in official-quests.json; related paths exist (areas/solstheim.md seen). No other fixes.
