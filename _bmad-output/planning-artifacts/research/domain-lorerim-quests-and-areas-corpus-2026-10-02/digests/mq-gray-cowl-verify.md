# Verify — mq-gray-cowl (normal level, fresh context, 2026-10-02)

Web calls: 3 (1 search on Nexus 145535, 1 Fandom fetch -> 402, 1 search on Seviana's House). Everything else checked against the LoreRim install by parsing plugin bytes this run.

## Claims checked
- VERIFIED — gray-cowl: LoreRim gate = finish Thieves Guild then steal. Site new-lands.md says "complete the Thieves Guild faction questline and then steal an item"; independently, `Gray Fox Cowl - Under New Management Start.esp` (mod "Under New Management Start") SMQN `manny_GF_Steal` (0x0236BC) has exactly one CTDA: func 58 GetStage, op ==, value 200, param Skyrim.esm 0x0D7D69.
- VERIFIED — gray-cowl: 0x0D7D69 = TGLeadership "Under New Management" (official-quests.json); stage 200 carries the complete-quest flag (QSDT flags 0x1) in Skyrim.esm (Stock Game/Data) parsed this run. (Stage 50 also has the flag; irrelevant to the condition.)
- VERIFIED — gray-cowl: mod default = level >= 10. Original SMQN in `Gray Fox Cowl.esm` has GetEventData x2 + GetLevel (func 80) op >= 10; matches Nexus 141327 cache text ("at least level 10"). Override load order: no other Gray Cowl separator plugin (GrayFoxCowlEdits, NAT Weather, Requiem Patch, Betalille x3, Betalille LoreRim patch) contains SMQN records. Whole-load-order override not checked.
- VERIFIED — gray-cowl: dialogue rewrite DIAL 0x034BFF FULL = "Yes, it happened after I restored the Thieves Guild." (plugin bytes).
- VERIFIED — gray-cowl: Under New Management Start comes from Nexus 145535 "There is no (CC) Gray Cowl"; meta.ini of the installed mod (modid 145535, nexusLastModified 2025-05-11, install file "Under New Management Start-145535-1-0-0") + web search of the Nexus page ("additional file makes the quest start after completing Under New Management"; endgame TG quest). Same publisher as the cited summary, but the meta.ini/plugin are independent.
- VERIFIED — gray-cowl: CC Gray Cowl still loaded. `ccbgssse020-graycowl.esl` is in profiles/Default/loadorder.txt; official-quests.json names ccBGSSSE020_Quest "The Gray Cowl of Nocturnal" (Riften cemetery start).
- VERIFIED — gray-cowl: 8 quest names in frontmatter match the `### ` headings in imports/mods/the-gray-cowl-of-nocturnal-10th-anniversary.md exactly; Mora Sul east side / Al Shedim north of Ben Erai / amulet at very north match journal stage 300.
- UNVERIFIED — gray-cowl: Seviana's House NW of Valthume; Hall of the Initiation behind Eye of Cyrodiil SW of Bloodlet Throne. Fandom page 402 again; search snippet is the same tes-mods Fandom source as cited, not independent. Marked "(low confidence; unverified)" inline.
- VERIFIED — hammerfell: DB start after "Hail Sithis!". Nexus cache says so; independently, BetalillesHammerfellQuestBundle.esp INFOs 0x0E71, 0x0E9A, 0x0E9B carry GetQuestCompleted (func 543) == 1 on Skyrim.esm 0x01EA59 = DB11 "Hail Sithis!".
- VERIFIED — hammerfell: Solstheim quest only after the Solitude Docks ending. Plugin INFOs 0x0D2C/0x0D3A/0x0D3B gated on GetQuestCompleted manny_GF_Farewell (= "Time for the Farewells") == 1 (0x0D3C the ==0 branch). Dialogue-to-quest mapping inferred from the gate itself, not from INFO text.
- VERIFIED — hammerfell: Hotfix touches only Jonathan Seven-Swords. BetalilleBundleHotfix040625.esp = WRLD Tamriel ("Skyrim") + 1 CELL + 1 ACHR whose base is NPC_ 0x000C4E HABLJonathanSevenSwords "Jonathan Seven-Swords".
- VERIFIED — hammerfell: 32 named quest records with text (32 `### ` headings in the import file; frontmatter quest list equals that set exactly); Nexus cache says 31.
- VERIFIED — hammerfell: Lux patch + all bundle plugins active in profiles/Default/plugins.txt. No LoreRim-site mention of Betalille/Hammerfell (grep of all six site files).

## Side observations (not corrected; not wrong, just incomplete)
- `Gray Cowl of Nocturnal - Requiem Patch.esp` also overrides MGEF(3), ACTI, DOOR(6), AMMO, LVLI, PERK, CELL/REFR(4) beyond the categories listed.
- `The Gray Cowl - Betalilles LoreRim Patch.esp` also touches DOOR, CELL(3), REFR(2), WRLD.
- Profile also has `Lux - The Gray Cowl of Nocturnal - 10th Anniversary patch.esp` and Snazzy Interiors CC Gray Cowl Returns patches (outside this unit's brief).

## Mechanical pass
- gray-cowl-of-nocturnal.md: YAML valid, id matches, all [n] resolve, no orphan rows, frontmatter sources = rows.
- hammerfell-quests-bundle.md: YAML INVALID — unquoted `Is There a Necromancer in Town?` in the quests flow list. FIXED by quoting. Then valid; id matches; citations clean.
