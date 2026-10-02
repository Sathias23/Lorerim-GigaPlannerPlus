# Verify — ar-towns-north-east (fresh-context verifier, 2026-10-02)

Mechanical pass on all 5 files: frontmatter has every template field; ids match file names; all inline [n] resolve to Sources rows; no orphan rows; frontmatter `sources` matches the table; quest names match imports/mods/*.md QUST records (SurWR.esp, WindhelmSSE.esp). No issues found.

## Claims checked
- whiterun-hold — Wyrmstooth courier gate (Way of the Voice + Rise in the East) — VERIFIED, with one correction: the default level-10 minimum was missing and has been added. Evidence: install `Wyrmstooth - Settings Loader/MCM/Config/Wyrmstooth/settings.ini` (iMainQuestList=4, iWTGeneralRequirementsMinimalLevel=10); `Sensible Wyrmstooth Prerequisite/source/scripts/WT_QF__02AC9830.psc` requires MS10 (= "Rise in the East" per official-quests.json) stage >= 100; no LoreRim override ini exists. The LoreRim site also says level 10.
- whiterun-hold — Skirmish at Whitewatch trigger (Thane gate) — UNVERIFIED (already marked inline). SurWR.esp courier topic `0WRThaneQ01FirstRaidDeliveryTopic` greets "How do you do, Thane?", but its CTDAs are only GetStage/GetIsID; the actual start condition was not found. A Nexus forum thread returned 403.
- whiterun-hold — Kynareth Replaces Talos timing (statue removed after 2–5 days, Kynareth statue 5–7 days later, Imperial win only) — VERIFIED: web search summary of the live Nexus 91440 page agrees. This is the same publisher as the meta.ini cache, but a fresh fetch.
- eastmarch-and-windhelm — Graystone deed from Sadri for 1000 gold; Graystone Lodge is a cheap Gray Quarter home — VERIFIED. The WindhelmSSE.esp strings ("You may buy the deed from Sadri… 1000 gold", "I'd like to buy Graystone Hall (1000 gold)") were re-read by the verifier, and a web search summary of Nexus 42990 confirms the cheap Gray Quarter home.
- eastmarch-and-windhelm — Kynesby sold by Gala for 2000 — VERIFIED. The Rob's TGC Kynesgrove plugin strings ("I'd sell it to you for 2000 septims", "I'd like to buy the home (2000)"), and the Nexus 42639 meta.ini cache confirms a buyable home from a nearby NPC with Gala voiced.
- eastmarch-and-windhelm / hjaalmarch — Fists of Fury starts by letter after vanilla brawl wins — VERIFIED. The `Fists of Fury - Skyrim/meta.ini` Nexus cache says three wins by default, then a letter a day later, with Windhelm, Riften and Morthal quests.
- winterhold — Frostview Hall: thane-only, 4000 gold, steward Malur Seloth — VERIFIED. Nexus 17127 meta.ini says the home is "available after achieving the position of thane", and the plugin strings say "I would like to buy Frostview Hall. (4000)" and "Talk to that rat in the keep, Malur Seloth".
- winterhold — Jarl's longhouse is named "Stonecold Fortress" in LoreRim — VERIFIED. The verifier parsed CELL 00013818 (EDID WinterholdJarlsLonghouse): FULL is "Frostveil Fastness" in TGC v4 and "Stonecold Fortress" in COTN - Winterhold, TGCotN Winterhold, the TGCotN Requiem Patch and LoreRim - World Fixes. The full load-order scan was not repeated.
- the-pale-and-dawnstar — Vigilant start gate — DISPUTED; both sides are now in the file. The LoreRim site (new-lands.md) says: main quest + Dawnguard + House of Horrors, with Altano at the Dawnstar inn. The install's `VIGILANT - Delayed Start/Vigilant - Delayed Start.esp` (verifier-decoded) has GLOB zzzVigilantMinLevel = 25.0, a GetLevel >= global condition, GetQuestCompleted DA10 "The House of Horrors" and GetQuestCompleted Dawnguard 007C25 (DLC1VQ08 "Kindred Judgment"), and no main-quest condition. The Nexus 57961 cache says every option requires level 25+. Source [14] was added.
- the-pale-and-dawnstar — Breaking Dawn Cottage key in a Nightcaller Temple satchel — VERIFIED: `photndawnstar.esp` defines container `00PTHONNightcallerSatchel` and KEYM "Breaking Dawn Cottage Key".
- hjaalmarch-and-morthal — New Moon Cottage key in a Movarth's Lair satchel — VERIFIED: `photnmorthal.esp` defines container `00MovarthSatchel` and KEYM "New Moon Cottage Key".
- hjaalmarch-and-morthal — "Laid to Rest" is a prerequisite for the Dawnguard recruiter (Sensible Quest Prerequisites) — VERIFIED: the `Sensible Dawnguard Prerequisite/meta.ini` Nexus 121948 cache says "the quest 'Laid to Rest' is now a prerequisite to starting Dawnguard" and that it is the Morthal burned-house quest.
- hjaalmarch-and-morthal — TGC Morthal adds gates, watchtowers and a stockade — UNVERIFIED. The only evidence found is another web search summary of the same Nexus page; meta.ini has no description. Marked "(unverified)" inline.

## Edits
- whiterun-hold.md: the Wyrmstooth gate now includes "reach level 10".
- the-pale-and-dawnstar.md: the Vigilant gate is marked disputed in the start frontmatter, Starting in LoreRim and LoreRim notes; Sources row 14 added; frontmatter sources updated.
- hjaalmarch-and-morthal.md: TGC Morthal defences line marked "(unverified)".

Web calls used: 6 (4 searches, 2 fetches returned 403).
