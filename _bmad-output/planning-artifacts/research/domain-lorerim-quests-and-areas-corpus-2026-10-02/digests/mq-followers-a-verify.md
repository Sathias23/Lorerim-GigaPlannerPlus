# Verify — mq-followers-a (normal level), 2026-10-02

## Claims checked
- inigo: start location Riften Jail, first cell on the left (cited SITE+NEX) — VERIFIED — live LoreRim Followers page fetch 2026-10-02 ("He can be found in Riften Jail in the first cell on your left"); wiki.lorerim.com search snippet also says Riften Jail.
- inigo: Bad Vibrations trigger (hear his past + learn brother's name, then random) — VERIFIED against cited source only: Nexus cache (imports/mods/inigo.md l.394); UESP Skyrim_Mod:Inigo lists the quest but gives no trigger, so no independent second source. Text unchanged.
- katana: start Winking Skeever upstairs, "So, what brings you to Skyrim?", Megara/Shale recruit points, skip test — VERIFIED — LoreRim Followers page live fetch (Winking Skeever quote, 8k+ lines) + Nexus cache imports/mods/katana-journey-in-the-shadows.md l.210-217.
- katana: LoreCut patch change list (rifle -> ebony bow, no "from another world" option, Shale flirt removed, Adept lockpicking, vanilla torch) — VERIFIED — imports/mods/katana-raven-replacer-lorecut-reqtificated.md l.67-81 (Nexus 132964 cache); patch enabled in profiles/Default/plugins.txt l.2910; Katana Nexus cache l.370 lists 132964 under "Lorerim".
- katana: Open Cities not in LoreRim Default profile — VERIFIED — no Open Cities entry in C:/mods/LoreRim/profiles/Default/plugins.txt.
- remiel: Remi at the Silver-Blood Inn, Markarth; The Dwemer Specialist starts via Calcelmo/Nimhe — VERIFIED — HLIORemi.esp journal stage 10 ("I met a Breton named Remiel at the Silverblood Inn in Markarth...") in imports/mods/remiel-custom-voiced-follower.md, plus live LoreRim Followers page.
- gore: start Peak's Shade Tower outside Falkreath, Raven's Flight objectives/kill branch — VERIFIED — GORE.esp QUST HD1GoreMeet objectives/journal (imports/mods/gore-a-companion-mod.md l.51-65) + live LoreRim Followers page ("Go to Peak's Shade Tower and find Gore").
- gore: Nexus says Gore.esm, LoreRim ships GORE.esp — VERIFIED — mod folder C:/mods/LoreRim/mods/Gore - A Companion Mod contains GORE.esp (no .esm); plugins.txt l.72; Nexus cache l.226 says "Load Gore.esm".
- gore: no Gore Vigilant addon plugin in LoreRim — VERIFIED — no Gore/Vigilant addon plugin in plugins.txt or mod folders (only Vigilant.esm and its own patches; "GORECAP" folder is an unrelated blood texture, modid 16440).
- lucien: Dead Man's Drink; Oblivion Engine approval-based trigger; Intruders ~5 days after re-recruit — VERIFIED — live LoreRim Followers page (location); Lucien.esp journal stage 30 (letter + key to Dwemer ruin on Solstheim) independently confirms the in-game trigger; FAQ text in Nexus cache l.241.
- lucien: Lucien MCM enabled in LoreRim MCM-Unlocked config; no Bruma plugin enabled — VERIFIED — mods/LoreRim - MCM and INI Settings/SKSE/Plugins/MCM-Unlocked_UserData.json ("JR_LucienConfigMenu::Lucien" and "Lucien", Disabled: false); no Bruma entry in plugins.txt.
- all five: "no LoreRim-specific gate" — VERIFIED (absence) — live LoreRim Followers page lists location only, no level/delayed start for any; vanilla-quest-overrides.json has no entries for these mods; site imports mention none.

## Mechanical pass
- All five files: YAML parses, all template fields present, id = file name, every inline [n] resolves to a Sources row, no orphan rows, frontmatter `sources` lists match. Frontmatter quest names match QUST names in the import files (Inigo 2, Katana 12, Remiel 10, Gore 12, Lucien 4 — all present in the import QUST headings).
- FIX remiel.md: "Gore has about 320 lines with her [see gore.md]" had no numbered citation -> now quotes and cites new Sources row [6] (Gore Nexus page 85298 via meta.ini cache, imports/mods/gore-a-companion-mod.md l.171-172).
