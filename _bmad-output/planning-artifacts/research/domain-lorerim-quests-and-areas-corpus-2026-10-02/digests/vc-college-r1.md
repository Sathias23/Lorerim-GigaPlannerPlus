# Digest — vc-college (r1)

Unit: vc-college (vanilla-changes). Prior attempt left no target file and no digest; written fresh 2026-10-02.

## lorerim-agent/knowledge/quests/vanilla-changes/college-of-winterhold.md

- Vanilla order: College Objective Quest → First Lessons → Under Saarthal → Hitting the Books → Good Intentions → Revealing the Unseen → Containment → The Staff of Magnus → The Eye of Magnus; ends as Arch-Mage; Arniel's Endeavor requires Hitting the Books — UESP Skyrim:College of Winterhold (faction) (UESP, n/a, accessed 2026-10-02) — high
- Vanilla entry test: Faralda picks one of Firebolt / Conjure Flame Atronach / Fear / Healing Hands / Magelight, teaches it for 30 gold if missing; persuade bypass (Speech 100, or 70 with perk, or Amulet of Articulation); Dragonborn shout during Elder Knowledge; Mirabelle gives Novice Hood, Novice Robes, College Boots; Tolfdir teaches Lesser Ward — UESP Skyrim:First Lessons (accessed 2026-10-02) — high
- Vanilla Under Saarthal reward: Staff of Magelight from Savos Aren — UESP Skyrim:Under_Saarthal (accessed 2026-10-02) — high
- LoreRim site: college "now actually a college", Improved College Entry, "a welcome gift", CoW Quest Expansion lessons, Choose Your Own Arch-Mage — LoreRim site Factions (lorerim.com, n/a, accessed 2026-10-02) — high (as a statement of the site)
- College Curriculum (COW_CentralQuest) objectives: "Talk to Tolfdir for more lessons", "Learn Waterbreathing and talk to Tolfdir", "Complete lessons for all college scholars (1/7…6/7)", "Complete the last lesson", "Talk to Tolfdir" — LoreRim install: College Of Winterhold - Quest Expansion.esp QUST (v1.16.0.0, accessed 2026-10-02) — high
- Seven lessons, exact names: Rapture of the Deep (Cow_Breathing; Tolfdir/Arniel; Waterbreathing; sunken ruins north of College), A Test of Ice and Fire (Cow_Destruction; Faralda; Firebolt vs Ice Wraith), Back-Stabbing Rodents (Cow_illusion; Drevis; skeevers), Enchanted To Meet You (Cow_enchantment; Sergius; Gretilde in Stonehills; Adara escort), I Choose You, Familiar (Cow_Conjuration; Phinis), None Escape The Light (Cow_restoration; Colette; draugr in the Midden), Reading Comprehension 101 (Cow_Reading; Urag; "Olaf and the Dragon") — same plugin records — high
- Must complete the 7 quests before Under Saarthal; any order; most skippable via dialogue; Tolfdir marks missing scholars; Apprentice's Boon (3 days, +5% skill gain) only if none skipped and intended spells used; Illusion spell = Fury — Nexus 66666 via meta.ini cache (nexusLastModified 2025-04-13; cache 2026-01-11) — high
- Quest Expansion edits only one scene + one property of MG01; incompatible with Not So Fast - Mage Guild — same — high
- ICE: Faralda won't sell test spell (go to court wizards); favored school choice; shout entry after The Way of the Voice (MQ105); robes match entry test; skippable tour; Tolfdir lesson needs Mirabelle first; Savos gives leveled Staff of Turning instead of Staff of Magelight; MG04 blocks Arch-Mage's Quarters at quest start; Phinis lecture after MG02; Arch-Mage's Quarters can be lockpicked/pickpocketed — Nexus 22184 via meta.ini cache (nexusLastModified 2020-10-13) — high
- MGI_FaraldaSellsSpells GLOB FLTV = 0.0 in CollegeEntry.esp; no other plugin in mods/ references the EDID — LoreRim install byte inspection (accessed 2026-10-02) — high
- Choose Your Own Arch-Mage: abdicate to any College member (some refuse), successor gets robes + key, schedule change; permanent; Aftershock dialogue edited; Obscure's-College features — Nexus 30887 via meta.ini cache (2019-12-29) — high; Obscure's College not in modlist — install modlist.txt — high
- Quest Start Fixes: MG05, MG07, MG08, MGRArniel03 aliases (Arniel, Faralda, Winterhold location) made optional/allow-reserved so quests don't fail to start — Nexus 53817 via meta.ini cache (2022-07-30) — high
- Experience mod enabled; LoreRim Experience.ini: iXPQuestCollege = 100, iXPQuestMisc = 0, iXPQuestMain = 200 — LoreRim install: LoreRim - MCM and INI Settings — high; curriculum lessons count as College XP — inference from plugin type mages-guild — low/medium
- Faction Ranks (enabled): 5 ranks per guild in Stats menu; Mages Guild set Robes/Gloves/Hood/Boots effects, Mages Guild's Boon — Nexus 170776 via meta.ini cache (2026-06-26) — high
- [LoreRim] Economy Overhaul overrides MGRArniel01 (VMAD properties FavorRewardGoldSmall/FavorRewardSmall) — LoreRim install byte inspection — medium (that it overrides: high; what it changes: unverified)
- No Delayed Quest Starts module targets College (shipped: CC Fishing, Forsworn Conspiracy, House of Horrors, Mind of Madness, Taste of Death) — install mods folder list — high
- Keening from Arniel's quests hooks Tools of Kagrenac (after Way of the Voice, courier letter) — LoreRim site New Quests — high
- Finding Velehk Sain covers the Midden Dark gauntlet / four missing apprentices — LoreRim site Quest Expansions; Nexus cache — high
- Stonehills ReRe patch adjusts NPC positions for CoW Quest Expansion — Nexus 133572 via meta.ini cache (2026-01-04) — high
- USSEP / Cleaned Plugins overrides are fix-only (list in brief) — unit brief overrides — high

## Contradictions
- LoreRim Factions page says joining gives "a welcome gift"; the mod *College of Winterhold's Welcome Gift* (Nexus 127453, Mirabelle gives two spell vouchers for Urag; web search snippet 2026-10-02) is NOT in the Default modlist, no folder exists, and no plugin in mods/ contains "voucher". Faction Ranks' cached page mentions compatibility with it, which may be where the site author saw it. Caveat: strings in compressed records would not be found by the byte grep. Reported in file as "treat as absent".

## Gaps (looked for, not found)
- Exact effect of [LoreRim] Economy Overhaul's MGRArniel01 override (reward gold?) — needs xEdit.
- Specific ICE change to MGR21 Shalidor's Insights and MGCollegeLectureInfos beyond "lectures start at 2:00 PM".
- Whether Requiem itself alters any College quest or entry (no Requiem record in the override list for MG quests).
- Which in-game items Faction Ranks treats as the "Mages Guild" set.
- Vanilla reward details for Staff/Eye of Magnus beyond UESP faction summary not fetched (budget).

## Leads
- xEdit compare of LoreRim - Economy Overhaul.esp MGRArniel01 vs Skyrim.esm.
- Ask LoreRim maintainers / wiki.lorerim.com whether the Welcome Gift mod was removed in a later version.
- "Abyssal Tides Magic - Typography Training" in modlist — check if LoreRim magic mods tie spell tomes to college lessons.
