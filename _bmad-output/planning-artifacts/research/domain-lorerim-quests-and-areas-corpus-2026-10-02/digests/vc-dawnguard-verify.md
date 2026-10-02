# Verify — vc-dawnguard (normal)

Files: lorerim-agent/knowledge/quests/vanilla-changes/dawnguard.md; digests/vc-dawnguard-r1.md. Web calls: 3 (UESP fetch, 1 search, 1 Nexus fetch 403).

- VERIFIED — Laid to Rest prerequisite on DLC1VQ00Node + rumor INFO: parsed DawnguardQuestPrerequisite.esp myself; SMQN 0x0100D911 EDID DLC1VQ00Node has CTDA GetQuestCompleted(543) on 0x025F3E (= MS14 "Laid to Rest" per official-quests.json); INFO 0x0100D057 rumor carries same condition. Also Nexus 121948 meta.ini cache: "Laid to Rest" is now a prerequisite, "doesn't change the minimum level requirement".
- VERIFIED — Node also requires GetLevel(80) >= global 0x0100D912 (DLC1VQMinLevel): same parse.
- VERIFIED — DLC1VQMinLevel = 30 in Requiem.esp and LoreRim - Global Modifiers.esp, 10 in TimingIsEverything.esp: GLOB FLTV parsed from each plugin.
- VERIFIED (inference stays medium) — TIE Settings Loader resets the global from MCM on OnConfigInit/OnGameReload, default 10, >100 -> 999: tie_mcmscript.psc Load()/Default(), MCM/Config settings.ini iTIE_DawnguardRecruitment=10; no MCM/Settings/TimingIsEverything.ini anywhere under C:/mods/LoreRim; loader + TIE enabled in modlist.txt; TimingIsEverything.esp references tie_mcmscript.
- VERIFIED — Dayspring Canyon shortcut: TIE translation "You can still begin the quest prior to this level by visiting Dayspring Canyon" (independent of LoreRim site main.md, which also says it).
- VERIFIED — Vanilla baseline (level 10, Durak, rumor text, Rift bounty, bypass to Awakening): UESP Skyrim:Dawnguard (quest) fetched 2026-10-02.
- VERIFIED — Skip Vampire Lord Tutorial overrides DLC1VampireTutorial "Power of the Blood"; skip on accepting Harkon's gift: import file plugin records + meta.ini cache; plugin enabled in plugins.txt.
- VERIFIED — SeranaCureQuestPlus (~2 days with Falion, swamp summoning circle, completes after a day, setstage DLC1SeranaCureSelfQuest 10): import file meta.ini cache; LoreRim site main.md confirms the mod ships.
- VERIFIED — Seeking The Cure renames VC01 to "Seeking A Cure", Urag/Falion start, find own Black Soul Gem, ritual fails: import plugin records (VC01 name) + LoreRim site main.md ("Falion's ritual to cure your vampirism fails").
- VERIFIED (same publisher only) — Serana's Tomb Blood Curse details: re-read install meta.ini nexusDescription; text matches (no independent second source).
- VERIFIED — Requiem DLC1VQ01MiscObjective text "Speak with the leader of the Dawnguard, located within Fort Dawnguard, which is southeast of Riften and inside of Dayspring Canyon.": string found in Requiem.esp.
- DISPUTED (partial) — Vigilant requires main quest + Dawnguard + House of Horrors: LoreRim site new-lands.md says all three; Vigilant - Delayed Start.esp SMQN VigilantDelayedStart checks GetLevel>=global, GetQuestCompleted DA10 (House of Horrors) and DLC1VQ08 (Kindred Judgment) only, no main-quest condition. Dawnguard part verified. Added inline note + source [23].
- UPDATED (was unverified) — The Choice is Yours Durak behavior: web-search summary of Nexus article 52: rumors don't add the objective, talking to Durak doesn't start the quest until you agree, Durak reappears 20% of the time if declined; matches plugin property DurakFollowChance=20. Rewrote the "most likely" sentence, added source [22]. The Laid to Rest acceptance claim is marked (unverified).

Mechanical: YAML valid, id = file name, all [n] resolve, no orphan rows, frontmatter sources match the table. Fixes: added A Forlorn Hope and VIGILANT - Delayed Start to mods (both cited); added daedric-quests.md to the Related section to match frontmatter `related`.
