# Digest — vc-civil-war (r1)

Unit: vc-civil-war (vanilla-changes). Earlier attempt left no target file and no digest; written fresh this run.

## File: lorerim-agent/knowledge/quests/vanilla-changes/civil-war.md

### Load-bearing claims
- Vanilla: join Legion in Solitude / Stormcloaks in Windhelm via initiation quest; Helgen companion only sets who recruits you; finals are Battle for Windhelm (Imperial) / Battle for Solitude (Stormcloak); achievements Taking Sides, War Hero, Hero of Skyrim — UESP Skyrim:Civil_War (UESP, n/a, accessed 2026-10-02) — high
- Shipped quest names/objectives: CW01A Joining the Legion (Clear out Fort Hraggstad / Report to Legate Rikke / Take the oath), CW01B Joining the Stormcloaks (Kill the Ice Wraith / Return to Galmar / Take the oath), CW02A/B The Jagged Crown, CW03 Message to Whiterun (incl. "Assist Jarl Balgruuf with the dragon threat"), CWMission03 A False Front, CWMission04 Rescue from <Alias=AttackPoint>, CWMission07 Compelling Tribute, CWFortSiegeFort/Capital The Battle for <Alias=Fort>, CWSiegeObj Battle for <Alias=City> (incl. Execute Ulfric Stormcloak / Execute General Tullius), CWObj hold campaign, MQ302 Season Unending, MQ301 The Fallen — LoreRim install official-quests.json (plugin records, accessed 2026-10-02) — high
- Message to Whiterun: Balgruuf won't read the message until Dragon Rising complete — UESP Skyrim:Message_to_Whiterun_(Imperial) (accessed 2026-10-02) — high
- All vanilla CW QUST overrides in LoreRim are USSEP (plus Cleaned Master Files on CWSiege; USCCCP on ccFFBSSE001_CorpseCheck) = fixes only — LoreRim install vanilla-quest-overrides.json — high
- Season Unending vanilla: Jarl refuses Dragonsreach trap while war ongoing → truce; always hold trades; skipped if Battle for Windhelm/Solitude done or that city the only one left; disabled during Message to/Battle for Whiterun; verbatim "Once Season Unending is complete, the Civil War will be on hold until the Main Quest is complete." — UESP Skyrim:Season_Unending + Skyrim:The_Fallen (accessed 2026-10-02) — high
- LoreRim: Civil War F Off - No Season Unending (CWFO_TheFallen.esp, v1.0.0.0) adds GLOB CWFOisCivilWarFuckOff (value 0) and edits DIAL MQ301JarlTrapDragonA1 + MQ301JarlReadyToTrapTopic (Jarl response "Then... Whiterun will stand with you, Dragonborn...") → negotiations never come up; Paarthurnax still starts; global can re-enable — plugin records parsed this run + Nexus 33067 via meta.ini cache (nexusLastModified 2020-02-26) — high
- Inference: no hold trades and no "civil war on hold" in LoreRim — derived from UESP + CWFO — medium
- CC Battle of the Champions (ccFFBSSE001_Quest) vanilla: Drunken Huntsman note/courier, Legate persuasion or 5 snow bear pelts to Yrsarald / steal Klija's; duel east of Whiterun; Imperial Dragon / Storm-Bear sets — UESP Skyrim:Battle_of_the_Champions + CC plugin objectives — high
- LoreRim: Civil War Champions - Reduced Cut (v2.0.0.0) removes Battle of the Champions (overrides ccFFBSSE001_Quest, CorpseCheck, Drunken Huntsman trigger REFR); new misc quest "Civil War Champion Armor" (CWCRQuest) objective "Pick up champion armor from your commanding officer", starts shortly after Battle for Solitude/Windhelm starts; dialogue "I want to fight as your champion."; v2 hidden chest with opposing set in Castle Dour / Palace of the Kings; console `setstage cwcrquest 10` — plugin records + bundled readme + Nexus 94999 cache (2023-07-04) + LoreRim site Creation Club page (accessed 2026-10-02) — high
- LoreRim: After the Civil War - Siege Damage Repairs adds "Repairing the Cities" (CWRepairs): starts 2–3 days post-war (Ulfric or Tullius dead) after leaving Solitude/Windhelm; donation box Temple of the Divines Solitude, 2 days; repair ~20/21d none, 15/16 at 5k, 10/11 at 10k, 5/6 at 15k, 30/31 if stolen; completes on entering an interior; repairs Solitude/Windhelm and Whiterun — CWRepairs.esp records + Nexus 20668 cache (2025-10-08) — high
- Military Camps Begone: camp removed 7–10 days after commander killed — Nexus 68520 cache (2025-10-25) — high
- The Jagged Crown Tweaks: crown displayed in Castle Dour or Palace of the Kings after quest — Nexus 85699 cache (2023-03-02) — high
- Kynareth Replaces Talos - Civil War Consequence: after Imperial Battle for Whiterun, Talos statue removed in 2–5 days, Kynareth up 5–7 days later; Danica 2 lines; Capital Whiterun patch shipped — Nexus 91440 cache (2024-09-19) + plugins.txt — high
- Dvs' Civil War Fixes: 10 loose scripts; respawn race fix, siege/fort softlock timeouts, Balgruuf speech 30s safety net (needs 10 defenders), Report for Duty fix, battle music loop fix — Nexus 172831 cache (2026-02-20) + TESTING_INSTRUCTIONS.txt — high
- Neutral Whiterun Guards: Whiterun Hold guards neutral to both sides until Balgruuf sides with Empire — Nexus 70197 cache (2024-11-30) — high
- Whiterun Imperial Camp Fixes: navmesh/object fixes — Nexus 96646 cache (2023-07-25) — high
- Civil War Lines Expansion (~500 conditional spliced lines), Dialogue Expansion - Imperial Soldiers (greets + 13 scenes), REBEL NORTH (≈500 AI-voiced lines, Galmar dialogue, Gray-Mane brothers role after "Missing in Action" + epilogue) — Nexus caches 77566 (2024-07-22), 113208 (2024-03-06), 178880 (2026-05-19) — high
- LoreRim Experience.ini iXPQuestCivilWar = 150 (main/Daedric/DLC 200, guilds/side 100) — LoreRim - MCM and INI Settings/SKSE/Plugins/Experience.ini — medium (not verified in game)
- Alternate Perspective: Helgen intro begins by renting a room at The Resting Pilgrim — Nexus 50307 cache (2025-12-10) — high; "no AP Legion/Stormcloak start" — absence of evidence — medium
- All the above mods enabled in profiles/Default modlist.txt/plugins.txt; ccffbsse001-imperialdragon.esl in loadorder.txt — LoreRim install — high

### Contradictions
- None between install and LoreRim site. The site's Champions text ("receive either champion set just before the final siege") is consistent with the mod readme ("shortly after starting Battle for Solitude/Windhelm"); slight wording difference only.

### Gaps (looked for, not found)
- Whether CWFO's dialogue edit also applies when Vignar (Stormcloak) is Jarl of Whiterun — mod page names Balgruuf; INFO conditions not decoded.
- Any Requiem-specific Civil War change; any LoreRim delayed-start gate for the questline (LoreRim site factions/quest-expansions pages have no Civil War section).
- Sons of Skyrim / Imperial Castles of Skyrim meta.ini have no cached description (treated as visual via name only, plus Medieval Towers/New Legion descriptions).
- DIS_Heavy_Legion.esp in LoreRim MCM settings — appears to be an Imperial armor distribution/replacer plugin (strings only); purpose unconfirmed, not written.
- wiki.lorerim.com not consulted (web budget used on UESP baselines).

### Leads
- Decode CWFO INFO CTDA conditions to confirm Jarl-identity coverage.
- Check Penitus Oculatus / After the Civil War corpus files for overlap with CWRepairs (mod-added/after-the-civil-war.md likely covers the same mod).
- Verify Experience mod is active and how it classifies CC/USSEP-modified CW quest types.
