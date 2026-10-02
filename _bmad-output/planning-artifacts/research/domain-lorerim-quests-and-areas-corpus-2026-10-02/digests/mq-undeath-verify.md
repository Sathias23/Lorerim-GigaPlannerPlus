# Verify — mq-undeath (normal level)

Files checked: `lorerim-agent/knowledge/quests/mod-added/undeath.md`, `digests/mq-undeath-r1.md`. Web calls: 0. Every check below used the install directly.

## Claims
- VERIFIED: LoreRim start gate is MS11 + MS06 completed, NecroQuest01 not running or completed, and there is no level check. Evidence: I parsed `UndeathQuestPrerequisiteNoLevel.esp` myself. SMQN `NecroQuestStart` has 4 CTDAs: func 56 (GetQuestRunning) 0x011E225A ==0, func 543 (GetQuestCompleted) 0x011E225A ==0, 543 0x0001F7A3 ==1, 543 0x00026C4D ==1, and no GetLevel. official-quests.json maps 01f7a3 to MS11 "Blood on the Ice" and 026c4d to MS06 "The Wolf Queen Awakened".
- VERIFIED: the prerequisite plugin wins the override. Evidence: `profiles/Default/plugins.txt` puts UndeathQuestPrerequisiteNoLevel.esp at line 1042, after UndeathFixes.esp at line 99.
- VERIFIED: the author says the mod hijacks Classical Lichdom's story-manager node, removes level 30 in the No Level version, and doesn't touch immersive start. Evidence: I read `C:/mods/LoreRim/mods/Sensible Undeath Prerequisite - No Level/meta.ini` nexusdescription myself (nexuslastmodified 2026-01-29). Note: the import file reports "(no cached description)", but the meta.ini does carry it.
- VERIFIED: the global `NecroUCLImmersiveStart` = 1.0 and the start note BOOK `NecroUCL_QuestStartNote` is "Torn Page from Traveler's Diary". Evidence: I parsed the UndeathFixes.esp GLOB and BOOK records. "LoreRim - MCM and INI Settings" has no Undeath or Necro MCM config (I grepped MCM/ and MCM-Unlocked_UserData.json).
- VERIFIED: the default start is at level 30, the note appears in Markarth's Silver-Blood Inn, and the start fires on a skill-increase event. Evidence: the Classical Lichdom meta.ini cache (lines 114 and 261 of the import file), consistent with the author's account in the Sensible Prerequisite meta.ini.
- VERIFIED: altar requirement is 80 Enchanting / 80 Conjuration in LoreRim (Classical Lichdom default 50/75). Evidence: I parsed the GLOBs myself. `LoreRim - Undeath Patches.esp` sets NecroAltarEnchanting/ConjurationRequirement to 80.0, and UndeathFixes.esp sets 50.0/75.0. The patch loads at plugins.txt line 3365. The Classical Lichdom cache says "configurable in the MCM".
- VERIFIED: the Apocrypha Skip sets NecroBlackBookQuest01 to stages 10 and 20 and gives Ritual Notes. Evidence: `[LoreRim] Undeath Apocrypha Skip/Scripts/Source/necroblackbookscript.psc` OpenBook() calls setStage(10), setStage(20), additem(NecroRitualJournal01). The gameplay inference stays at medium-high, as the file already says.
- VERIFIED: the winning quest name is "The Path of Transcendence". Evidence: the strings in UndeathFixes.esp are "The Path of Transcendence" (x2), and neither Requiem - Undeath.esp nor LoreRim - Undeath Patches.esp contains "Transcendance". The other quest names match the import QUST records.
- VERIFIED: Phylactery Limits health message and no resurrection in Oblivion/Dreamstride. Evidence: the esp contains the string "It's too dangerous to unbind your soul at your current health level (less than 1…". `necrotrackingquestscript.psc` contains "You can't reach your phylactery from this location" and the inDreamstride/inOblivion checks.
- VERIFIED: Requiem - Undeath removes spells (pointing to Expanded Grimoire) and gives Lich Form +150 health. Evidence: I read `Requiem - Undeath/meta.ini` nexusdescription myself.
- VERIFIED: the LoreRim site lists Undeath under New Quests with no start gate. Evidence: lorerim-site/new-quests.md lines 41-44.
- VERIFIED: Undeath needs Dawnguard and Dragonborn, and LoreRim ships both. Evidence: `C:/mods/LoreRim/Stock Game/Data` contains Dawnguard.esm and Dragonborn.esm. This sentence had no citation before; it now cites the new Sources row [16].

## Mechanical pass
- The frontmatter `sources` listed 1-14, but the Sources table and the inline citations use [15]. Fixed: it now lists 1-16.
- "LoreRim includes both" had no citation. Fixed: it now cites [16] (new row: Stock Game/Data DLC masters).
- YAML is valid and has the template fields. The id matches the file name. Every inline [n] resolves to a Sources row, and there are no orphan rows. Quest names match the plugin records.
- Minor, left as is: the r1 digest describes the Sensible Prerequisite source as a "meta.ini Nexus cache", while the import file says no description is cached. The meta.ini itself does have one, so the citation holds.
