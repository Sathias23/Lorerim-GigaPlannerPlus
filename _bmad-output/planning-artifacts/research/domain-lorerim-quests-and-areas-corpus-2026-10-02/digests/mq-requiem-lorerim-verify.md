# Verify: mq-requiem-lorerim (normal level, 2026-10-02)

## Claims checked
- VERIFIED — On Hogithum objectives/journal (stages 10/50/100/110/120, quest name exact): import requiem-*.md matches; independently, Requiem.esp strings (REQ_HogithumQuest INFO/QUST text) and Changelog.md lines 1818/1940 ("A Curious Quest", items moved to "more obvious places").
- VERIFIED — Six fragment sites + subtitles: Requiem.esp BOOK EDIDs REQ_Note_Hogithum_{PelagiusWing=Soft Applause, MorthalSwamp=Regretful Epiphany, DarklightTower=Pretended Dismay, RobbersCove=Odd Familiarity, FrostmereCrypt=Introductory Charm, WolfskullCave=Good Cheer}; Adonato's Report text names Brodir/Robber's Gorge, Pelagius, Frostmere Crypt, Darklight Tower. Web (Requiem Confluence search) has no location list.
- VERIFIED (with spelling note added) — Robber's Cove = Robber's Gorge interior, WSW of Morthal: UESP Skyrim:Robber's_Gorge (fetched) — interior cell spelled "Robbers' Cove"; note added inline.
- VERIFIED — Requiem version mismatch: meta.ini version=6.0.2.0, installationfile "Requiem 5.4.5 - Towers and Shadows Bugfix Pack 5-…7z", plus ignoredversion=6.0.2.0 (added); Changelog.md header "Requiem 5.4.5 - "Towers and Shadows" Bugfix Pack #5".
- VERIFIED — Requiem 4.0 install trigger on first inventory/magic close: Changelog.md line 1275.
- VERIFIED — Spells per perk defaults 2/2/2/2/1: CSPP esp GLOB Req_SpellsPerPerk{Novice,Apprentice,Adept,Expert}=2, Master=1. LoreRim MCM-Unlocked_UserData.json only orders the "Requiem - Spell Learning" menu (position 15); no values preset in MCM/Settings.
- VERIFIED (partial) — Profane Divinity: Trad esp has COBJ Trad_001_Smelter_Artifact_ProfaneHeart (smelter), "Profane Ritual" book, Divine Power messages "1 more time"/"2 more times" (consistent with 3 uses). Mask/heartstone/tool/Corpus requirements remain Nexus-cache only (not record-parsed).
- VERIFIED — Ghosts of the Tribunal = ccasvsse001-almsivi.esm ccASVSSE001_Quest; Legends Lost = ccbgssse008-wraithguard.esl with objective "Retrieve Sunder and Wraithguard": official-quests.json.
- VERIFIED (corrected/expanded) — Tools of Kagrenac start: LoreRim site New Quests says Keening from Arniel Gane AND completing "The Way of the Voice", then a courier letter after a few days; file previously omitted the main-quest gate — added.
- VERIFIED — "CC Quests Re-Enabled" not installed: no such folder under C:/mods/LoreRim/mods; Requiem - Creation Club.esp active (plugins.txt line 1616); Fozars Dragonborn patch active (line 1618).
- VERIFIED — LoreRim Startup Quest sequence: LoreRimStartUp.psc (RaceSex Menu close → welcome → inventory open/close → wait REQ setup stage 10 → SkySigns → StartingSkills → Wintersun free deity → Traits → mode msg → keybind spell). Mode message button 0 = "Naaktiid (New to LoreRim)", button 1 = "Konahrik (Classic LoreRim Experience)"; mode==0 sets bEnableLite and AddPerkPoints(Naaktiid_Extra_Perks); VMAD int value 3 in LoreRim Startup.esp; MCM/Settings/Requiem Lite.ini bEnableLite = 0; MESG includes "This can be customized at any time through the Mod Configuration menu."
- VERIFIED — Spirit Tutors gate Restoration 30: PERK ORD_Res30_SpiritTutors_Perk_30_OrdASISExclude CTDA GetBaseActorValue(22=Restoration) >= 30 in xEdit64 Output Ordinator esp (independent of Nexus cache). Reachability in LoreRim's tree still unverified.
- CORRECTED wording — "Both are active": plugins.txt lists Ordinator - Perks of Skyrim.esp once; modlist.txt shows LoreRim - xEdit64 Output (line 130) above Ordinator - Perks of Skyrim (line 406), so the xEdit copy wins. Text fixed.
- VERIFIED — Second Breath: LoreRim Second Breath.esp INFO "Zu'u unslaad! Zu'u nis oblaan!" with LoreRim_SecondBreathTopicScript; spell text "The fall of Alduin has reshaped your soul… This choice is final."
- VERIFIED — Oghma menu args: LoreRim_OghmaBookReward.psc args 6 minor skills, reward 5, value capped at 100.

## Mechanical pass
- Frontmatter valid, ids match file names, all template fields present.
- Stage markers written as "[10]", "[50]", "[0]" etc. collided with citation syntax (unresolved [n]); rewritten as "Stage N:" in both files. After fix, every [n] resolves and no orphan Sources rows.
- Added [3] to an uncited "Rewards: spell tomes" line.
- Quest names match plugin records in imports (On Hogithum, A Requiem of better times, Requiem - Spellchoices (PlayerCheck), Requiem - Improved Spell Learning, Profane Divinity, Spirit Tutors). "LoreRim Startup Quest" is not in the imports (LoreRim Startup.esp not covered by the imports) — taken from the esp directly by the writer; not re-checked.
