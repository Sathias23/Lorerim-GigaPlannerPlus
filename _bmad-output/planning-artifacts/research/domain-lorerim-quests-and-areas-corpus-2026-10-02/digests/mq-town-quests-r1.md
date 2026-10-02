# Digest — unit mq-town-quests (round 1, resumed attempt)

Resume check: none of the five target files existed when this run started, so all five were written fresh. The plugin-record claims marked "parsed this run" come from small throwaway Python parsers (not saved anywhere) that read the plugins directly. They read QUST, SMQN, BOOK, DIAL, INFO, GLOB and LCTN records, and diffed overrides in every enabled plugin that masters a unit plugin.

## capital-windhelm-expansion-quests.md
- WindhelmSSE.esp (Capital Windhelm Expansion, Nexus 42990, v1.0.0.0) has 13 QUST records with journal or objective text. The quest names are Collecting the Edda - Windhelm, Graystone, Kyne's Trial, Pit Fighter, Hunting Trip, Death Do Us Part, The Mead Must Flow (×2), Severed Cold, The Talos Mistake, A Night You Can't Remember, A Simple Delivery and Unusual Imports — LoreRim install plugin records (imports/mods/capital-windhelm-expansion.md, accessed 2026-10-02) — high
- Severed Cold: the player falls into the Frozen Caverns, can optionally kill the Volkhair Brute or run away, and reports to Wuunferth. Volkihar vampires took the Dunmer through the ice, and the Dunmer cannot be saved — plugin QUST records — high
- Severed Cold's lead-in is the BOOK "Report: Attack on the Camp" (signed Frost-veins), plus guard and Dunmer dialogue ("What happened here? There's blood all over.") — WindhelmSSE.esp BOOK/DIAL, parsed this run — high
- The Talos Mistake starts when Beorn hands over "Hverung's Manifesto". The player kills or warns the Thalmor agent in the Gray Quarter lofts, or kills Hverung. Siding with Hverung grants use of his HQ (Mustering Hall) — QUST + BOOK records — high
- Collecting the Edda: the giver is Higil, the list is "Writers of Windhelm", and there are 8 poets — QUST + BOOK — high. The Nexus cache names the giver "Hoki" — contradiction (see below)
- Kyne's Trial and Hunting Trip are given by Frida. Kyne's Trial runs on a carriage to the mini-worldspace "Somewhere in the Mountains" and you keep the bear pelt. Hunting Trip has pelt quotas of 6 wolf / 3 sabre / 3 bear / 4 ice wolf / 2 snow sabre / 2 snow bear / 3 cave bear — QUST — high
- Graystone: the "For Sale" note says to buy the deed from Sadri at Sadri's Used Wares for 1000 gold — BOOK 0WPlayerhomeSale — high
- Pit Fighter: ask Benkum, then Huki in the Bloodworks, for an "unranked match" — DIAL — high
- No LoreRim-specific gate exists: the LoreRim site does not mention the mod, and no LoreRim plugin overrides its quests — site pre-fetch + master scan — medium (absence)
- LoreRim ships "Capital Windhelm Expansion Eastern gate blackscreen and other fixes" (Nexus 93778, v1.3.9.0hotfix). It fixes the Graystone completion flag, blocks Benkum's unvoiced lines and removes the vanilla jail-arena leftovers. `CWE Taluri fix.esp` overrides 0WHQuestBuyHouse (script properties) plus Pit, Severed Cold and Talos dialogue — meta.ini description (nexusLastModified 2025-10-10) + record diff — high
- Capital Windhelm Expansion Lite (Nexus 114087) is a Base Object Swapper INI with no plugin that disables more than 150 objects — meta.ini (2024-03-15) — high
- Faction Pit Fighter is not in the LoreRim modlist — modlist grep — high

## capital-whiterun-expansion-quests.md
- The quest plugin is SurWR.esp from "Rob's Bug Fixes - Capital Whiterun Expansion" (Nexus 63355, v3.3.0.0, a replacer for CWE 1.5 Normal). The main mod folder (Nexus 37982, v1.3.0.0) ships BSAs plus 49-byte dummy plugins — install file listing + meta.ini (nexusLastModified 2023-02-12) — high
- The quests are Running Wild, Ode To The Tundrastriders, A Rat Problem, Skirmish at Whitewatch, Bluesky Hall, Victory Celebrations, Grace of Kynareth and Farmland Saga — SurWR.esp QUST — high
- Start triggers:
  - Running Wild: Joslin's note "The Palonimo Mare" (district behind the Bannered Mare) or the Jarl's note "A reward in gold!"
  - Ode To The Tundrastriders: ask an innkeeper "Anything new happening around town?"
  - A Rat Problem: talk to Igna
  - Skirmish at Whitewatch: a courier note

  Sources: CWE Nexus cache + BOOK/DIAL records — high
- Skirmish at Whitewatch's note "Whiterun Calls on her Thanes" is addressed to "all Thanes of Whiterun", so a Thane requirement is inferred. No explicit condition was found — BOOK DESC — medium
- Ode diplomacy:
  - Urik's cow costs 300 gold, blue dye 50 gold, giant poison 100 gold from the witch (or 25 gold for supplies with high Alchemy)
  - The "right" lines to the chieftain are labelled in the DIAL EditorIDs
  - Outcomes: gold for the kill; for a truce, the giants trade with you and the Jarl's reward varies (some gold or none)

  Sources: QUST/DIAL — high
- Running Wild: Joslin gives an Imperial or Nord saddle and you keep the horse, or the Stablemaster pays gold — QUST/DIAL — high
- LoreRim renames the SurWR BOOK `SpellTomeConjureDremoraRatWRQuest` from "Spell Tome: Conjure Skeever" to "Spell Tome (Novice): Conjure Skeever Familiar". This is in `LoreRim - Spells and Magic Effects.esp`, and Synthesis - World.esp also carries it — override diff — high. Its link to A Rat Problem comes from the EditorID only — low
- Farmland Saga has only design-note text, type none, and is not start-game-enabled. It is probably unreachable — QUST — medium
- Capital Whiterun Expansion Lite (Nexus 112964) is a BOS INI with no plugin that disables more than 200 objects — meta.ini (2024-03-04) — high
- "Bluesky Hall and Fort Valus Allow Adoptions" (GTS - Bluesky Hall Adoption.esp) is enabled — plugins.txt — high
- The web shows a "Capital Whiterun Expansion - Quest and Dialogue Addon" (Nexus 181606, "12 new side quests"), but it is NOT in the LoreRim modlist — WebSearch + modlist grep — high

## arena-markarth-side-quests.md
- The quests are The Lost Family Relic (Varimo/"Verimo", The Boiling Cauldron; the amulet of necromancy and gold buy your discretion) and The Royal Relic (the Khajiit Grit-dar; Morvunskar Crypts near Windhelm; 500 gold) — Arena - Markarth Side.esp QUST (v1.7.0.0) — high
- The town is south-east of Dragon Bridge, with 8 shops, a barracks and an inn with a bard. The 1.5 update added the 2 voiced quests and a dungeon — Nexus 114252 cache (nexusLastModified 2025-10-24) — high
- In the LCTN parents, MarkarthSideLocation sits under HjaalmarchHoldLocation and MorvunskarCryptsLocation under EastmarchHoldLocation — plugin LCTN PNAM + Skyrim.esm — high
- Cliffside Manor costs 3000 gold, and rooms cost 800 gold each from the ledger — MESG records — high
- The patches are the Lux patch (ESLIFIED, UNDELETED) and the Northern Roads patch. No quest overrides were found — master scan — high

## granite-hill-quests.md
- The quest is "A Plea From Granite Hill" (aaaGraniteHillDungeonQuest): courier note → John → crawl space under Privious' shop Oddities & Curiosities → draugr ruin with a dragon at the bottom → reward is the key to Crossway Cottage — QUST + DIAL + TIF scripts (v6.7.1.0) — high
- The actual trigger is the SMQN "GraniteHillSM": a change-location event with the condition GetQuestCompleted(Skyrim.esm 0002610C = MQ104 "Dragon Rising"). The quest stage script uses WICourier to deliver "Letter from Granite Hill", addressed "Dragonborn!" — plugin SMQN parse + official-quests.json + bundled .psc — high
- The Nexus page also offers a non-Dragonborn variant (starts above level 10). LoreRim's plugin is the Dragonborn variant — Nexus cache (2025-11-25) vs plugin — high
- The mod uses the vanilla GraniteHillLocation, whose parent is FalkreathHoldLocation. The plugin also has a "Letter from Jarl Siddgeir" about taxes — Skyrim.esm LCTN + BOOK — high
- The patches are Lux, Lux Via, Ryn's Dragon Mounds, Northern Roads ×2, Occ_Skyrim_Granite-Hill_patch (in the "LoreRim - MCM and INI Settings" folder) and LoreRim's Granite Hill - Navmesh Fixes. None overrides QUST or SMQN — master scan — high
- No mod named Hearthfire Multiple Adoptions (which the Nexus page says is needed for family in the home) was found in the modlist — modlist grep — medium

## more-to-say-quests.md
- More to Say - Main (Nexus 22622, v9.0.2.0) has 14 enabled plugins. Its player-facing quests are:
  - Bandits of Whiterun Hold (Belethor), Giants of Whiterun Hold (Severio Pelagia), Vampires of Whiterun Hold (Hulda)
  - Embershard Bandits (Lucan), Chaos in Falkreath (Solaf), Forsworn of Haafingar, Forsworn of the Reach
  - Shriekwind Bastion, Ingredient Collection (Zaria, 5 sabre cat eyes)
  - More to Say Find Angi (Legate Skulnar; archery training), More to Say Find Golldir (Lynly)
  - Birna's Shipment (Falmer), The Heart Will Go On, More to Say Winterhold Dialogue (Jarl Korir), The Secret of Rorikstead (Jouane Manette)

  Source: QUST records — high
- Start conditions from the Nexus FAQ: Riverwood needs The Golden Claw + A Lovely Letter. Rorikstead needs Before the Storm and talking to everyone; the secret starts with Erik the Slayer and the book in Rorik's Manor. Korir needs Arch-Mage + Tolfdir — Nexus cache (nexusLastModified 2023-02-14) — high
- Quests hang off per-town SMQN change-location nodes. The global ACFMTSShriekwindBastionMinLevel = 10 and ACFMTSJarlPayoff = 5000 — plugin parse — high (globals), low (what JarlPayoff does)
- moretodo.esp and moretosaywinterhold.esp override vanilla "A Bad Trade" (FreeformWinterholdA) — vanilla-quest-overrides.json — high (fact); the content of the change was not checked
- LoreRim - Dialogue Patch.esp overrides ACFMTSFreeformFalkreath001 (only the QTGL master index changes) and the Nelkir topics in moretosaywhiterun — diff — high
- Sissel's Book Quest is installed as a separate mod, "More To Say - Sissel's Book Quest" (sisselbookquest.esp) — modlist — high

## Contradictions
- The Collecting the Edda giver is "Hoki" in the cached Nexus description of Capital Windhelm Expansion, but "Higil" in the WindhelmSSE.esp journal, objectives and dialogue. The plugin is followed.
- The poet is spelled "Skulvar" in the objective text but "Sulvar" in the journal and book (WindhelmSSE.esp). The plugin is internally inconsistent.
- Granite Hill's Nexus page describes two start conditions (Dragonborn: after the Western Watchtower dragon; non-Dragonborn: level 10+). LoreRim's shipped plugin conditions only on MQ104 completion.
- Varimo is spelled "Verimo" in two journal stages (Arena - Markarth Side.esp).
- The CWE (Whiterun) main folder meta.ini says v1.3.0.0, while Rob's replacer targets "version 1.5 Normal". The asset BSAs may come from an older CWE file than the plugin targets (unverified mismatch).

## Gaps (looked for, not found)
- The exact trigger condition for Skirmish at Whitewatch (Thane flag? courier timing?). The Nexus forum thread was blocked (403).
- Who sells the Bluesky Hall deed, and at what price.
- Severed Cold rewards, and the "secret unmarked mini-quest" the Nexus page mentions.
- The Rat Problem reward (Conjure Skeever tome?).
- The content of More to Say's A Bad Trade override.
- Rewards for More to Say's radiant clears.
- Where the Lost Family Relic employee or draugr is found.
- Any wiki.lorerim.com or UESP coverage of these mods; none was found (UESP has no Skyrim:Granite_Hill page, 404; Fandom returned 402).

## Leads
- Read the CWE Whiterun BSA scripts (Capital Whiterun Expansion0.bsa) for the 0WRThaneQ01 start script and the Rat Problem reward.
- Nexus 22622's articles tab (article 3133) lists NPC coverage. Sissel's Book quest is covered in mod-added/sissels-book.md.
- The Nexus forum topic 9526188, "Puzzling new quest: Skirmish At Whiterun", may hold the trigger; it blocked automated fetch.
- The YouTube/Rutube "Capital Whiterun Expansion - Quest Guide / Walkthrough" (rutube.ru/video/15257c5ddd0afd279b2034b8c239da7f) may confirm the Whiterun quest flow.
