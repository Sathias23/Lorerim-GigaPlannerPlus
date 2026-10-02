# Verify — vc-companions (fresh-context verifier, 2026-10-02)

File: lorerim-agent/knowledge/quests/vanilla-changes/companions.md

- verified — Shipped gates 3/5/4 (Proving Honor/Silver Hand/Blood's Honor): install `CompanionsProgressionReqs.json` = 3/5/4; meta.ini FOMOD choice "(3-5-4) More Radiant Quests for the Companions, Option 2"; plugin enabled in profiles/Default/plugins.txt; no other copy of the JSON in any mod (incl. LoreRim - MCM and INI Settings).
- verified — Values read once ~15 s after init: `scripts/source/CompanionsProgressionReqs.psc` OnInit RegisterForSingleUpdate(15.0), sets C00 RadiantQuestsUntilC01/C03/C04, then Stop().
- verified — Vanilla 1/1/2, first Blood's Honor job from Aela: UESP Skyrim:Companions (WebFetch 2026-10-02) + mod author's Nexus text in meta.ini ("one ... one ... two").
- verified — LoreRim site Factions wording (Improved Companions + Customizable Requirements; "back out of becoming a werewolf..."): imports/lorerim-site/factions.md lines 29-32.
- verified — Underforge refusal strings ("What if I don't want to be a werewolf?", "We will not force you", "No, I need more time.") and Proving Honor journal "the next steps": byte-grep of install `CompanionsTweaks.esp` (1 hit each); behaviour matches meta.ini description in imports/mods/improved-companions-questline-tweaks.md.
- verified — No Companions delayed start: install mods folder lists DQS mods only for CC Fishing, Forsworn Conspiracy, House of Horrors, Mind of Madness, Taste of Death (+ VIGILANT, Bleak Falls Barrow delays; none Companions).
- verified — Vilkas Spar Skip line "So you're supposed to train me?": present in `Vilkas Spar Skip.esp` (byte grep), enabled in plugins.txt.
- verified — Skyforge gate default: install meta.ini FOMOD choice "Skyforge cannot be used until it has been earned. (Default)"; "May I use the Skyforge?" in SkyforgeImmersionAddon.esp. Quest name corrected: record name is "Missing In Action" (official-quests.json), page said "Missing in Action" -> fixed in text.
- verified — Proving Honor fix is ESL with no quest edits: plugin header flags 0x0200 (light), 0 QUST records.
- verified (partial) — Dustman's Cairn boss (Requiem file): `Dustman's Cairn Boss - Requiem.esp` enabled; records DustmansCairnBoss* incl. flame atronach/familiar summons and honed mace, dunDustmansCairnDraugrDeath ref. Name "Thohild" not found as plain string (likely compressed NPC record) — name rests on Nexus cache.
- verified (partial) — NGCDT Dragon Seekers needs Unbound: overrides json confirms NGCDT overrides CR14; condition detail only from the mod author's Nexus text (meta.ini), conditions not decoded.
- verified — CAM Skjor line "Will the Companions offer aid": present in Companions at Mirmulnir.esp.
- verified — Requiem overrides C00, C01, C03Rampage, CR05, CR06, CR08; CDB + Improved Companions override C00GiantAttack: vanilla-quest-overrides.json.

Mechanical pass: frontmatter valid, id matches file name, sources 1-19 all cited, no orphans; quest names match official-quests.json. Fixes: added missing inline cites to 8 bullet sentences ([13],[10],[10],[16],[4],[1],[1],[1]); marked "Silver Hand choice weightier" as editorial inference; "Missing in Action" -> "Missing In Action" with LoreRim note; source row 18 extended to official-quests.json.
