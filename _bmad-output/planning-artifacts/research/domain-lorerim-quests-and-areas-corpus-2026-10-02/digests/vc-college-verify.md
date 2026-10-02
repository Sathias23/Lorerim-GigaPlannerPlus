# Verify — vc-college (fresh-context verifier, 2026-10-02)

Files: lorerim-agent/knowledge/quests/vanilla-changes/college-of-winterhold.md; digests/vc-college-r1.md

## Claims checked
- VERIFIED — 7 CoW Quest Expansion lessons must be done before Under Saarthal (cited Nexus 66666 cache [6]) — independent: PCGamesN article + web search summary ("requiring actual magical training before you proceed to Saarthal"); LoreRim site Factions confirms the mod ships ("actual lessons on each school").
- VERIFIED — Faralda does not sell the test spell (cited ICE Nexus [7]) — independent: CollegeEntry.esp GLOB MGI_FaraldaSellsSpells FLTV = 0.0 read from bytes this run. ("no later plugin overrides it" not re-checked.)
- VERIFIED — shout entry after The Way of the Voice (MQ105) (cited [7]) — independent: CollegeEntry.esp has one INFO record (0x0B811F, decompressed) referencing MQ105 FormID 0x0242BA (official-quests.json gives MQ105 = 0242ba "The Way of the Voice").
- VERIFIED — Savos Aren gives leveled Staff of Turning instead of Staff of Magelight (cited [7]) — independent: CollegeEntry.esp contains LVLI MGILItemStaffTurnUndead (3 entries); UESP Under Saarthal confirms vanilla reward is Staff of Magelight and next lead is Urag.
- VERIFIED — vanilla entry test spells (Firebolt/Conjure Flame Atronach/Fear/Healing Hands/Magelight), 30 gold, persuasion and Elder Knowledge shout bypass, Tolfdir gives Lesser Ward — UESP Skyrim:First_Lessons fetched this run.
- VERIFIED — College Curriculum (COW_CentralQuest) objectives and the seven lesson quest names match plugin records — imports/mods/college-of-winterhold-quest-expansion.md (Rapture of the Deep, A Test of Ice and Fire, Back-Stabbing Rodents, Enchanted To Meet You, I Choose You, Familiar, None Escape The Light, Reading Comprehension 101).
- VERIFIED — no Delayed Quest Starts module targets the College; Welcome Gift mod not shipped — install: mods/ folder list (5 DQS modules: CC Fishing, Forsworn Conspriracy, House of Horrors, Mind of Madness, Taste of Death); "welcome" absent from modlist.txt in all three profiles (Default/Extreme/Ultra); no "voucher" in CoWQE or Faction Ranks plugins.
- VERIFIED — iXPQuestCollege = 100, iXPQuestMisc = 0 — install: mods/LoreRim - MCM and INI Settings/SKSE/Plugins/Experience.ini lines 18/22; Experience enabled (modlist line 1316).
- VERIFIED — Tools of Kagrenac starts after Keening (Arniel's Endeavor) + The Way of the Voice, by courier letter a couple of days later (cited LoreRim site [12]) — independent: mods/The Tools of Kagrenac ESMIFIED/meta.ini Nexus description (modid 14168).
- VERIFIED — CYA edits Aftershock dialogue (cited [9]) — independent: CYA_ChooseYourOwnArchMage.esp has 2 DIAL records referencing MGR30 FormID 0C1E72 (QUST-level override map does not list CYA for MGR30 because the edit is at DIAL/INFO level, not a contradiction).
- VERIFIED — Quest Start Fixes overrides MG05/MG07/MG08/MGRArniel03; Economy Overhaul overrides MGRArniel01; Stonehills patch masters CoWQE — imports/vanilla-quest-overrides.json; Gonz - Stonehills ReRe - Jay College.esp masters include College Of Winterhold - Quest Expansion.esp (meta.ini modid 133572 "Adjusts NPC positions").
- VERIFIED — Obscure's College of Winterhold not in modlist — Default modlist.txt grep (only Obscure Animations / Obscure Magic).

## Fixes made
- LoreRim notes: Cleaned Plugins list was incomplete — added MGR20 (Fetch me that Book!) per vanilla-quest-overrides.json.
- LoreRim notes: added the missing LoreRim-specific overrides from the same map — [LoreRim] Economy Overhaul on MGR01 and MGR20B, Requiem on MGR22 (Shalidor's Insights Rewards), Dragon Hunting on MGRitual05 — content of those changes marked unverified.
- Sources row 16: named the actual file (imports/vanilla-quest-overrides.json).

## Mechanical pass
- YAML frontmatter parses; all template fields present (level_hint omitted — no source states one); id = file name.
- Every inline [n] resolves to a Sources row 1–19; no orphan rows.
- Quest names match plugin records / official catalog (MG01Pointer "College Objective Quest", MGR30 "Aftershock", etc.).
- Length ~2,600 tokens-by-whitespace including frontmatter and Sources table; body is near the ~2,500-word ceiling.
- Digest vc-college-r1.md: consistent with the corpus file; its gap "whether Requiem alters any College quest" is partly answered — Requiem overrides MGR22 (Shalidor's Insights Rewards).
