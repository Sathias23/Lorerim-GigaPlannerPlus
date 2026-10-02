# Verify — ar-new-lands-b (normal), 2026-10-02

Fresh-context verifier. I checked 10 load-bearing claims. Each was checked against plugin records I re-parsed myself this run, or against a second source different from the one cited. My parser is a throwaway Python ESP reader that handles SMQN/GLOB/CTDA/BOOK/SHOU records. Override checks scanned every enabled plugin in `profiles/Default/plugins.txt` that masters the relevant plugin. Web calls used: 0. The install answered every check.

## Claims
- verified — the-forgotten-city-zenithar: `LoreRim - World Fixes.esp` overrides SMQN `000FCBeginQuest` (ForgottenCity.esp:0DCA3A) to `GetLevel >= 200`. The base plugin has `>= 5`. Of all enabled plugins that master ForgottenCity.esp, only those two contain the record, so no later override exists. The LoreRim site (new-lands.md l.32) says "delayed start … level 25". That site-vs-install contradiction stands and is reported in the file.
- verified — undeath-dragontail-mountains: `UndeathQuestPrerequisiteNoLevel.esp` (load idx 1040) replaces the conditions of `NecroQuestStart` (UndeathFixes.esp:0C622F). The new conditions are GetQuestCompleted Skyrim.esm:01F7A3 == 1 and 026C4D == 1, with no GetLevel. The base condition is GetLevel >= 30. No later plugin overrides the record; that includes `LoreRim - Undeath Patches.esp`. official-quests.json resolves 01F7A3 = MS11 "Blood on the Ice" and 026C4D = MS06 "The Wolf Queen Awakened".
- verified — vigilant-realms: the GLOB `zzzVigilantMinLevel` is 25.0. The SMQN `VigilantDelayedStart` checks GetLevel >= that global, GetQuestCompleted Skyrim.esm:022F08 (DA10 "The House of Horrors") and Dawnguard.esm:007C25 ("Kindred Judgment", per official-quests.json). There is no main-quest condition. No other enabled plugin overrides the record. The disagreement with the LoreRim site's "main quest" wording (new-lands.md l.25) stands as reported.
- verified + amended — vigilant-realms: `House of Horrors - Delayed Start.esp` has GLOB `ANDR_HouseOfHorrorsLevelReq` = 35.0, and its DA10StartNode is gated on a status global. The cached Nexus description (meta.ini) says "Level requirement: 35 … Can be changed by the following console command … Default is 35". The mod folder has no MCM. The text said "an MCM could change the value"; it now says console only, citing [7].
- verified — vigilant-realms: `LoreRim - MCM and INI Settings/MCM/Settings/Vigilant.ini` sets `iVigDiffLvl = 50` and `iVigIncAttack = 10`. The Settings Loader defaults are 0/0. Lead, not added to the file: `LoreRim - Vigilant Boss.esp` and `Lorerim - Vigilant Patch.esp` are also enabled, and the file does not mention them.
- verified — hammerfell-and-coldharbour-gray-cowl: `Gray Fox Cowl - Under New Management Start.esp` overrides SMQN `manny_GF_Steal` (Gray Fox Cowl.esm:0236BC). Its only CTDA is GetStage Skyrim.esm:0D7D69 == 200, and official-quests.json maps 0D7D69 to TGLeadership "Under New Management". The base record has two GetEventData crime checks plus GetLevel >= 10. The LoreRim site agrees ("complete the Thieves Guild faction questline and then steal an item").
- verified + amended — frozen-heart-areas: the start node `ksws07QuestNode` checks HasShout Skyrim.esm:048AC9 and HasShout Skyrim.esm:03F9EA. Stock Game `Skyrim.esm` SHOU EDIDs are `SlowTimeShout` and `FireBreathShout`. The file had called 00048AC9 = Slow Time an inference. It is now a fact backed by new source [6].
- verified — gravewind-area: `LoreRim Gravewind Start Tweak.esp` contains:
  - KEYM `GravewindShackKey` "Cemetery Homestead Key".
  - A door REFR with XLOC pointing at that key.
  - An override of QUST `FreeformFalkreathQuest03B` "Dark Ancestor" with a CNTO entry for the key.
  The LoreRim site (new-quests.md, Gravewind section) independently says "Get the key from Vighar the vampire".
- verified — nightmare-and-dream-realms: BOOK "On the Idol of Vaermina" (RuneDreamstrides.esp:27B00C) lists Riverside Shack in the original. `LoreRim Dreamstride.esp` overrides it to list Boulderfall Cave and loads later (plugins.txt 2172 vs 2167). The in-game body relocation is still unverified, as the file already says.
- verified — nightmare-and-dream-realms: the Sleepwalking start is Ralforn at Green-Tip Cabin. The LoreRim site gives it, and NightmarePlane.esp has CELL `aaaMBCabin01`, FULL "Green-Tip Cabin", plus Ralforn objectives and journal entries in the import file.
- verified (site + Nexus agree; no plugin gate found) — tools-of-kagrenac-areas: the start is Keening from Arniel's quests plus The Way of the Voice, then a courier letter. Tools of Kagrenac.esp has no SMQN start node, so the start is script-driven, and the gate could not be re-derived from records. The claim stays on [1][2].

## Mechanical pass
- YAML fix: in hammerfell-and-coldharbour-gray-cowl `quests:`, the bare `Is There a Necromancer in Town?` made the frontmatter invalid YAML (PyYAML ParserError). I quoted it.
- Orphan source fixed: frozen-heart-areas row 5 was never cited inline. It is now cited on the 3BA note. I also added row 6 and updated the frontmatter `sources`.
- All 8 files now pass these checks:
  - Frontmatter parses as YAML and has every template key.
  - `id` matches the file name.
  - Every inline [n] resolves to a Sources row, there are no orphan rows, and frontmatter `sources` equals the table rows.
  - Every frontmatter `quests` entry matches a QUST heading in imports/mods/*.md exactly.

## Residual risks
- A late plugin that masters only Skyrim.esm could still override `DA10StartNode`. I did not scan the whole load order for that record.
