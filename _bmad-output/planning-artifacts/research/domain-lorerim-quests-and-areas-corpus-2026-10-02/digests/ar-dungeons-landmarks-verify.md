# Verify — ar-dungeons-landmarks (normal level)

Verifier: fresh context, 2026-10-02. Web calls: 3. Independent checks used plugin parsing (VMAD script properties, NPC_ ACBS, TES4 header) and meta.ini FOMOD choices in C:/mods/LoreRim/mods.

- verified — Storm-Hull Farm uses the Vigilant Version (new-landmarks): Tundra Farmhouse meta.ini FOMOD "Vigilant Version"; plugin SNAM "v3.02 - Vigilant", master Vigilant.esm; TriggerQuest property points to a Vigilant.esm quest, stage 8; DaysPassedRequirements [0,9,34,59] matches "10+ days, then 25-day stages".
- disputed — VIGILANT start gate (new-landmarks): LoreRim site New Lands says main quest + Dawnguard + House of Horrors. The install's `VIGILANT - Delayed Start` (Nexus 57961 v2.3) FOMOD pick is "Option 2: MB + DG" = level 25+, House of Horrors, Kindred Judgement, with no main-quest condition. Both are now in the text (new source [18]).
- verified — Laid to Rest gates Dawnguard (new-landmarks): install has `Sensible Dawnguard Prerequisite` (DawnguardQuestPrerequisite.esp), whose description says "Laid to Rest" is now a prerequisite.
- verified — Riften Warehouse after Supply and Demand + 15 days: plugin VMAD DaysPassedRequirements=15, triggerQuest FormID 053305 = "Supply and Demand" (official-quests.json), stage 198.
- verified — Eisa's House after The Pale Lady + Laid to Rest, ~18-day stages: plugin TriggerQuestA 0CF915 = The Pale Lady (stage 98), TriggerQuestB 025F3E = Laid to Rest (stage 198); DaysPassedRequirements [0,18,36]/[0,18,38].
- overturned (minor) / disputed — Kolskeggr: the trigger quest edid is `FreeformKolskeggrA` "Kolskeggr Mine" (FormID 01FD72), not `freeformkolskeggr`; fixed. Timing: plugin DaysPassedRequirements [12,42] in 6 triggers and [12,32] in one, with no level property, which favours day-based timing over "7 additional levels". The 42-vs-32 discrepancy with the page's "+20 days" is noted in LoreRim notes.
- verified — Taliesin patch level requirement 5: `Environs - The Shrines of Talos - Taliesin Patch.esp` VMAD LevelRequirement=5 (masters include Taliesin.esp).
- verified — Ebony Warrior vanilla trigger level 80, Last Vigil NE of Fort Greenwall: Fandom "Last Vigil" / "The Ebony Warrior" pages via web search. vanilla-quest-overrides.json shows only EbonyGetLost.esp overrides DLC2EbonyWarriorQuest. Mr. Ebony dialogue strings confirmed verbatim in EbonyGetLost.esp.
- verified (with nuance) — Requiem HotR static levels: patch NPC_ ACBS are static; HeartSentinel bases 30, MossSpiderBoss 55, Hagraven 35; Matriarchs and one Sentinel 20. Nuance added to new-dungeons.
- verified — Miasma recommended level 20+: LoreRim site New Quests + Nexus cache both say it; Sirenroot "no level requirement, best ~3-15" in the Nexus cache.
- verified — LoA hiring-notice start and HotR Gwilym/Silver-Blood Inn start: LoreRim site New Quests matches the Nexus cache. Quest names Heart Of The Reach / Legends Of Aetherium / Deluge of Deceit / Miasma match the QUST records in the import files.
- verified — Dragons Awaken.esp TES4 flags = 0x200 (read directly); 0x200 = ESL/light in Skyrim per Ortham blog + ByroRedux issue (web search), consistent with UESP.
- minor fix — Last Vigill FOMOD also installed the "Immersive Sounds Compendium" patch (meta.ini); added to new-dungeons LoreRim notes.

Mechanical: all three files have valid YAML with the template fields; ids match file names; every [n] resolves and there are no orphan rows (after adding [18] to new-landmarks). The added mod `VIGILANT - Delayed Start` is in the frontmatter. Snowpoint folders/ids confirmed (Snowpoint & patch = 146533, Snowpoint Dungeon = 76186). Not flagged: a few advisory sentences without a citation ("travel through a city gate", "farm will stay intact") are inferences from cited facts.
