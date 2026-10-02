# Digest — vc-companions (r1)

Resumed run: the target file `lorerim-agent/knowledge/quests/vanilla-changes/companions.md` already existed complete from an interrupted earlier attempt. This run re-verified the load-bearing claims against the install and imports, added Growl to the frontmatter `mods`/`plugins`, and added source 19 to frontmatter `sources`. No new web calls this run; UESP/web citations [1]-[4] and the Companions Radiant Expansion web summary [12] come from the earlier attempt.

## File: lorerim-agent/knowledge/quests/vanilla-changes/companions.md

- Vanilla questline = Take Up Arms, Proving Honor, The Silver Hand, Blood's Honor, Purity of Revenge, Glory of the Dead; vanilla radiant gates 1/1/2 (first of the 2 from Aela) — UESP Skyrim:Companions (UESP, n/a, accessed 2026-10-02) — high
- Joining is unchanged: talk to Kodlak Whitemane in Jorrvaskr; no Delayed Quest Starts mod targets the Companions (DQS mods present: CC Fishing, Forsworn Conspiracy, House of Horrors, Mind of Madness, Taste of Death) — LoreRim install mods folder listing (accessed 2026-10-02) — high
- LoreRim site: Companions tweaked with Improved Companions - Questline Tweaks + Customizable Companions Questline Progression Requirements; "increase and allows to customize the number of radiant quests"; "back out of becoming a werewolf without leaving Skjor and Aela stuck in the Underforge forever" — LoreRim site Factions page (lorerim.com, n/a, accessed 2026-10-02) — high
- Shipped gates: `SKSE/Plugins/StorageUtilData/CompanionsProgressionReqs.json` = {"proving honor": 3, "the silver hand": 5, "blood's honor": 4} — LoreRim install: Customizable Companions Questline Progression Requirements v1.3.0.0 (re-read this run) — high
- Values read once ~15 s after new game / first load; later JSON edits ignored on an initialised save — Nexus 78308 via meta.ini cache (nexusLastModified 2024-07-13) + script source (earlier attempt) — medium-high
- Underforge refusal dialogue strings present in `CompanionsTweaks.esp`: "What if I don't want to be a werewolf?", "That is your choice. We will not force you…", "No, I need more time.", Proving Honor journal "…speak to Skjor about 'the next steps.'" — LoreRim install: Improved Companions - Questline Tweaks v1.1.0.0 plugin (grep'd this run) — high
- Improved Companions: Aela can be Shield-Sibling observer if "favorite quest giver"; new dialogue to tell Skjor whether you are prepared; Skjor/Aela schedule fixes; radiants reopen while you're away — Nexus 22300 via meta.ini cache (2019-01-02) + plugin/scripts — high
- Improved Companions and Companions Dialogue Bundle override C00GiantAttack; Requiem overrides C00, C01, C03Rampage, CR05, CR06, CR08 (changes not determined) — vanilla-quest-overrides.json import (accessed 2026-10-02) — high
- Vilkas Spar Skip: yard dialogue "So you're supposed to train me?" gives the next objective with no fight — `Vilkas Spar Skip.esp` string (grep'd) + Nexus 127292 via meta.ini cache (2024-08-21) — high
- Proving Honor Companions Quest Progression Fix: entering Whiterun any way sets up the Vilkas ending; ESL, no quest edits — Nexus 66128 via meta.ini cache (2022-04-07) — medium-high
- Dustman's Cairn Boss - Thohild the Inferno (Requiem version) in the central coffin — Nexus 131502 via meta.ini cache (2024-10-14) — medium-high
- Skyforge Immersion Addon default "Skyforge cannot be used until it has been earned": Eorlund allows use after The Silver Hand or Missing in Action; 5%/10% improvement bonus — FOMOD choice + plugin + Nexus 144420 via meta.ini cache (2025-03-12) — medium-high
- Companions Radiant Expansion (Requiem file, v1.1.0.0) overrides CR03, CR05-CR14; multiple concurrent jobs, target shown before accepting; job-specific lines e.g. "I can intimidate <Alias=Brute> in <Alias=BruteTown>.", "I can kill the escaped prisioner in <Alias=LocationHold>." (sic) — plugin strings (grep'd) + meta.ini; Nexus 169920 page 403, summary via web search (2026-06-09) — high (strings) / medium (features)
- NGCDT: Dragon Seekers (CR14) requires Unbound complete instead of "dragons returned"; giant-encounter trigger shrunk; Farkas stat-gated lines (30+ in combat skills or 150+ Health/Stamina) — Nexus 64667 via meta.ini cache (2025-12-29) — medium
- CAM - Companions at Mirmulnir: ask Skjor during Dragon Rising after Jarl sends you to Western Watchtower; persuade or bribe; needs giant fight + Athis/Njada spar finished; automatic if Proving Honor done — Nexus 125920 via meta.ini cache (2025-04-07) + plugin records — high
- ArteFakes upgrades Aela's Shield and Vilkas's sword (redeemable after hand-over to Eorlund) — Nexus 41254 via meta.ini cache (2021-09-09) — medium
- HOUSE OF WARRIORS IDE Jorrvaskr: 463 AI-voiced lines, task assignment as Harbinger — Nexus 173134 via meta.ini cache (2026-02-22) — medium
- Growl - Werebeasts of Skyrim v3.7.2.0 installed (meta.ini version confirmed this run): Beast Form 150 s / 90 s cooldown, Call of the Blood forced night transformations, Hircine's Ring disables — Nexus 31245 via meta.ini cache (2026-06-08) — medium-high

## Contradictions
- None between the LoreRim site and the install: the site says radiant counts are "increased and customizable" without numbers; the install ships 3/5/4.
- Minor: vanilla Blood's Honor gate per UESP is 2 jobs (first from Aela); the mod's JSON sets 4 — whether the "first from Aela" requirement survives was not confirmed.

## Gaps (looked for, not found)
- What Requiem.esp changes in C00, C01, C03Rampage, CR05, CR06, CR08 (records not diffed).
- What Companions Dialogue Bundle changes inside C00/C00GiantAttack beyond its page feature list.
- Whether Customizable Progression Requirements overrides any QUST record directly (it does not appear in the overrides list; it works via script/JSON).
- wiki.lorerim.com page for the Companions (not checked this run).
- Exact Shield-Sibling selection logic for Aela ("favorite quest giver") not traced in scripts.

## Leads
- Diff Requiem.esp's C00/C01/CR quest records in xEdit to describe Requiem's Companions changes.
- Check the LoreRim MCM/INI settings mod for any Growl or Companions MCM overrides.
- FDE Aela the Huntress (follower-dialogue-expansions) and Fashions of the Companions / Axarien's Animations are installed but are cosmetic/dialogue; Gore - A Companion Mod is a follower, not the guild.
