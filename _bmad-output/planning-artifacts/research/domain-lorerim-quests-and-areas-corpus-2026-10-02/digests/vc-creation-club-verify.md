# Verify — vc-creation-club (normal level)

Files: `lorerim-agent/knowledge/quests/vanilla-changes/creation-club.md`, `digests/vc-creation-club-r1.md`. Web calls: 4 (UESP x2, Fandom 402 x1, search x1).

## Claims checked
- The Cause vanilla start at level 46 via courier "Stranger's Plea" — verified — UESP re-fetch + independent web search snippets (Fandom "The Cause (Skyrim Creation Club Quest)", others) agree: level 46, courier, Stranger's Plea, ccBGSSSE067_Quest.
- The Cause LoreRim alt start: note on the dead Vigilant on the table at the back of the destroyed Hall of the Vigilant — verified — LoreRim site creation-club.md states it verbatim; install `CauseTweakAlternateStart.esp` strings contain Skorvild's note, "Shrine to Stendarr, located between Fort Greymoor and Rorikstead".
- Hall of the Vigilant destroyed at level 10 or when Dawnguard starts — verified — UESP Hall_of_the_Vigilant ("once you reach level 10 or start the quest Dawnguard"); install meta.ini of enabled "Stendarr Rising - The Hall of the Vigilant Rebuild" also says destroyed at level 10/Dawnguard start (rebuild mod; does not prevent destruction).
- Civil War Champion Armor (`CWCRQuest`), objective "Pick up champion armor from your commanding officer", after Battle for Solitude/Windhelm — verified — plugin QUST record in imports/mods/civil-war-champions-reduced-cut.md; LoreRim site ("Receive either champion set just before the final siege").
- Bow of Shadows in "Severin Family Chest" in Severin Manor — overturned (name only) — plugin `Bow of Shadows - Reduced Cut.esp` names the container "Severin Family Safe"; Nexus text says "Severin Family Chest inside Severin Mansion". Text corrected; original noted in LoreRim notes.
- CC Fishing delayed start: catch a fish, then ask Keerava "I'd like to learn about fishing. Could you help me?" — verified — dialogue string present in `CC Fishing - Delayed Start.esp`; mod overrides Angler Acquaintances/Catch of the Day/In A Pinch per vanilla-quest-overrides.json.
- Hendraheim summons gated by The Silver Hand + joining the Circle — disputed — LoreRim site + CCHR page state the gate; install: `Hendraheim - Tweaks and Enhancements.esp` (plugins.txt line 2523) masters only vanilla + cceejsse004-hall.esl, not CCHR (line 1264), and overrides the same ccEEJSSE004_Quest; CCHR author says TnE needs a separate patch not in the modlist. Marked "(disputed)" inline and in frontmatter `start`.
- Hendraheim TnE price 25,000 — verified — global `cceejsse004_HousePrice` FLTV = 25000.0 in the TnE plugin.
- Myrwatch: buy from Tolfdir after Shalidor's Maze / other convincing, 20,000 — verified — `MyrwatchTNE_Quest` journal stage 5 text (plugin records) + global `ccEEJSSE002_HousePrice` FLTV = 20000.0 in plugin.
- The Unquiet Dead level 15, innkeeper line "Are there any problems around town that need handling?" — verified — global `CCFarmingLevelReq` FLTV = 15.0 and the dialogue string in the CC Farming TnE plugin.
- The Wintersand Deception: Thalmor Dossier start; objectives Talk to the Jarl of Whiterun → Obtain additional evidence → Return to the Jarl of Whiterun — verified — plugin QUST record `THTE_Quest_WintersandDeception` (objectives 5/10/20, journal mentions dossier and letter to Elenwen); Whitestream Den LCTN present.
- CC pets run without journal entries (log-hiding optional, not full disable) — verified — meta.ini installationFile "CC Pets - Hide Quest Logs-169557-1-2-..."; LoreRim site ("quest entries hidden. You can still do the quest").
- Saints & Seducers EC needs level 20 + The Mind of Madness — verified — mod page cache in imports/mods/skyrim-extended-cut-saints-and-seducers.md (independent of the LoreRim site).

## Mechanical pass
- YAML frontmatter parses; all template fields present; id = file name.
- Inline citations [1]–[33] all resolve to Sources rows; no orphan rows.
- Quest names match plugin/override records. Note: `MyrwatchTNE_Quest` in `quests:` is an EditorID (record has no FULL name) — acceptable but flagged.
- Minor: LoreRim site spells the Stendarr's Hammer holder "Vigilant Tyrananus"; corpus writes "Vigilant Tyranus" (not checked against the plugin).
