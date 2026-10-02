---
id: capital-whiterun-expansion-quests
title: Capital Whiterun Expansion — Quests
kind: mod-added
category: town-quests
summary: Capital Whiterun Expansion (plugin SurWR.esp, shipped in LoreRim via Rob's Bug Fixes) adds four small Whiterun quests (Running Wild, Ode To The Tundrastriders, A Rat Problem, Skirmish at Whitewatch), the Bluesky Hall player home, and quest-reactive town scenes. No LoreRim-specific gates.
mods:
  - name: Capital Whiterun Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/37982
    version: 1.3.0.0
  - name: Rob's Bug Fixes - Capital Whiterun Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/63355
    version: 3.3.0.0
  - name: A. Whiterun Expansion 1.5 Normal Version - Tweak Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/52622
    version: f1.01
  - name: More Capital Whiterun Expansion patches
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/85797
    version: 1.6.1.0
  - name: Capital Whiterun Expansion Lite
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/112964
    version: 1.1.0.0
  - name: Capital Whiterun Expansion - Bucket Fix
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/65422
    version: 1.0.0.0
plugins: [SurWR.esp, SurWR - Tweak Patch.esp, Capital Whiterun Expansion.esp, Capital Whiterun Expansion0.esp]
quests: [Running Wild, Ode To The Tundrastriders, A Rat Problem, Skirmish at Whitewatch, Bluesky Hall, Victory Celebrations, Grace of Kynareth, Farmland Saga]
locations: [Bluesky Hall, The Roadhouse, Igna's Basement, Igna's House, Whitewatch Tower, Happy Homestead General Goods, Witch's Wisdoms, Brightflour Bakery, Whiterun Customs Hall, Home of Thane Hearth-Healer, Home of Thane Valdemaar, Joslin's House]
region: Whiterun city and Whiterun Hold tundra
start: No LoreRim gate. Running Wild — read Joslin's note "The Palonimo Mare" (district behind the Bannered Mare) or the note by the Jarl's stables; Ode To The Tundrastriders — ask a Whiterun innkeeper "Anything new happening around town?"; A Rat Problem — talk to Igna; Skirmish at Whitewatch — a courier brings "Whiterun Calls on her Thanes" (addressed to Thanes of Whiterun).
related: [areas/whiterun-hold.md, vanilla-changes/thane-hearthfire-and-favors.md, mod-added/capital-windhelm-expansion-quests.md, mod-added/more-to-say-quests.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8]
confidence: medium
updated: 2026-10-02
---

# Capital Whiterun Expansion — Quests

Capital Whiterun Expansion (author Surjamte) adds 14 new buildings inside Whiterun's walls, about 22 NPCs, the Roadhouse tavern and merchants outside the gate, the Bluesky Hall player home, and small quests voiced with vanilla lines [2]. In LoreRim the main mod folder ships only the BSA archives with two 49-byte dummy plugins. The active quest plugin is `SurWR.esp` from *Rob's Bug Fixes - Capital Whiterun Expansion*, a cleaned replacement plugin for the CWE 1.5 "Normal" version [3][6].

## Starting in LoreRim
- No LoreRim-specific gate was found. The LoreRim site does not mention this mod [7], and no LoreRim-made plugin overrides its quest records [6].
- **Running Wild:** read the note *The Palonimo Mare* from Joslin in the new district behind the Bannered Mare, or the Jarl's note *A reward in gold!* by the stables outside Dragonsreach [2][4].
- **Ode To The Tundrastriders:** ask any innkeeper in the Whiterun area "Anything new happening around town?" The Nexus page says innkeepers added by other mods also work if they have the right faction [2][4]. A notice, *Jarl's Bounty: Giant*, also ties to this quest [4].
- **A Rat Problem:** speak to Igna in Whiterun [2][4].
- **Skirmish at Whitewatch:** the Nexus page says only "A courier will find you" [2]. The courier delivers *Whiterun Calls on her Thanes*, which is addressed to "all Thanes of Whiterun" [4]. So you most likely need to be Thane of Whiterun, but the exact trigger condition was not found in the records (unverified). The QUST record `0WRThaneQ01` is start-game-enabled and carries no start conditions of its own, so the trigger lives in a script [4].

## Quests
### Running Wild
- **Giver / trigger:** A white (or "palonimo") mare roams the fields of Whiterun. Both Joslin and the Jarl's stablemaster want her [1][4].
- **Steps:** 1. Catch the horse [1]. 2. Bring it to Whiterun's main gate [1]. 3. Talk to Joslin in the small stables behind the Bannered Mare, OR to the Stablemaster outside Dragonsreach [1].
- **Choices & outcomes:**
  - **Joslin:** you keep the horse, and she makes you a saddle in exchange for one ride. You choose an Imperial or Nord saddle [1][4].
  - **Stablemaster:** you are paid in gold, and the horse goes to the Jarl [1].
  - If the horse dies, the quest ends [1].

### Ode To The Tundrastriders
- **Giver / trigger:** The Jarl's bounty on a new giant chieftain who has been attacking caravans and travelers [1][4].
- **Where:** The giant camp at Bleakwind Basin [1].
- **Steps (three approaches):**
  - **Fight:** kill the giant chieftain, then claim the reward from the Jarl's steward in Dragonsreach [1].
  - **Poison:** buy a giant-strength poison from the alchemist (100 gold). If your Alchemy is high, you can buy supplies and brew it yourself (25 gold). Then poison the giants' food [1][4].
  - **Diplomacy:** follow Urik's advice (*Urik's Note on Giants*) [1][4]:
    1. Give Urik 300 gold for a cow.
    2. Buy a bucket of blue dye at the construction shop (50 gold).
    3. Bring a copy of the poem "Ode to the Tundrastriders".
    4. Paint Gertie the Cow. In LoreRim the "Get some Paint from the Bucket" step is skipped: after you hand Urik the dye, you just activate the cow [8].
    5. Have Gertie follow you, then speak to the Giant Chieftain.
- **Diplomacy answers:** The plugin labels these chieftain dialogue lines as the correct ones [4]:
  - "HOW YOU AND YOUR MIGHTY BEAST SILHOUETTE AGAINST THE GREAT ORANGE EXPANSE"
  - "HOW I LONG TO RUN ACROSS THE TUNDRA IN YOUR MIGHTY WAKE"
  - "TO GATHER DYES, TO PAINT THEIR HIDE, TO CARVE THEIR MIGHTY TUSKS, A GREAT HONOR"
  - "THUS, SHALL WE CALL A TRUCE…"
- **Outcomes:**
  - **Kill:** the court pays you in gold [1].
  - **Truce:** the giants stop harassing travelers who keep away from their camp, and the chieftain will trade with you from then on [1][4].
  - The Jarl would have preferred the giant dead. Depending on how you report (a Persuade option or leaning on your status), you get some gold or nothing [1][4].
  - If negotiations fail, you must kill the giant [1].

### A Rat Problem
- **Giver:** Igna in Whiterun. Ask "Looking for work." or "Looking to help…", or press "What's in it for me?" [1][4].
- **Steps:** 1. Deal with whatever is in **Igna's Basement** ("Sure wasn't a normal rat") [1]. 2. Report back to Igna [1].
- **Outcomes:** You can tell Igna there are at least two corpses down there, one of them a Khajiit. You can then suggest last rites, or simply take your reward. Igna may pay you, or refuse to deal with you further [1][4].
- **Possible reward:** The plugin defines a spell tome whose EditorID ties it to this quest (`SpellTomeConjureDremoraRatWRQuest`, "Conjure Skeever"). LoreRim renames it **Spell Tome (Novice): Conjure Skeever Familiar** [4][5]. How you obtain it is unverified.

### Skirmish at Whitewatch
- **Giver / trigger:** A courier's message from Thane Hroa Hearth-Healer [1][4].
- **Where:** **Whitewatch Tower**, which guards the road east of Whiterun [4].
- **Steps:**
  1. Read the message [1].
  2. Speak to Thane Hroa at Whitewatch Tower [1].
  3. Keep watch. Optionally make small talk with the other Thanes, Thane Steel-Arm and an old Thane [1][4].
  4. Defend the tower [1].
  5. Speak to Hroa [1].
  6. Defend against the final raid [1].
  7. Speak to Hroa again [1].
  8. Bring a report of the battle to the Steward in Dragonsreach [1].
- **Outcome:** The raiders brought wild beasts and siege equipment, including catapults. The journal hints that more of them may appear in the future [1][4].

### Bluesky Hall (player home)
- **Trigger:** Buying the deed (*Deed to Bluesky Hall*). The key is wrapped inside it [1][4].
- **Where:** The district behind the Hall of the Dead [1].
- **Notes:** The Nexus page says it is roomier than Breezehome and costs more [2]. The seller and price were not found in the records (unverified). LoreRim adds *Bluesky Hall and Fort Valus Allow Adoptions* (`GTS - Bluesky Hall Adoption.esp`) [6].

### Small scripted events
- **Victory Celebrations:** After Mirmulnir dies at the watchtower and you become Thane, excited guards celebrate by the statue of Talos. Talk to them for a small gift. Mirmulnir's skull is then mounted above Dragonsreach's entrance [1][2].
- **Grace of Kynareth:** After *The Blessings of Nature* (either ending), Gildergreen saplings grow around town [1][2].
- **Farmland Saga:** This record has only design-note text about rebuilding a war-wrecked farm. It is not start-game-enabled and has no objectives [1]. Treat it as unfinished and probably unreachable (unverified).
- **Other changes:** Battle for Whiterun (either side) and Glory of the Dead also change town decorations [2].

## Locations
- **Bluesky Hall** — the player home [1].
- **The Roadhouse** — a tavern outside the walls where the four roadside merchants sleep [1][2].
- **Igna's Basement** — the dungeon for A Rat Problem [1].
- **Whitewatch Tower** — the setting for Skirmish at Whitewatch [4].
- **Shops:** Happy Homestead General Goods (construction goods and blue dye), Witch's Wisdoms (alchemy and poison), Brightflour Bakery, Whiterun Customs Hall [1][2].
- **Homes:**
  - Home of Thane Hearth-Healer
  - Home of Thane Valdemaar
  - Joslin's House
  - Titus' House
  - Karlsten's House
  - Erundil's House
  - Ronja's House
  - Fine-Hair's House
  - Wanderer's House
  - Igna's House

  [1]

## Rewards & notable items
- An Imperial or Nord saddle and the horse, or gold, from Running Wild [1].
- Gold from Ode To The Tundrastriders, and trade with the giant chieftain if you reach a truce [1].
- A small gift from the celebrating guards [1][2].

## LoreRim notes
- **Plugin setup:** `SurWR.esp` is Rob's cleaned replacement. The main CWE folder only supplies assets through dummy `Capital Whiterun Expansion.esp` and `Capital Whiterun Expansion0.esp` [3][6]. *SurWR - Tweak Patch* and the More Capital Whiterun Expansion patches load on top [6].
- **Lite:** *Capital Whiterun Expansion Lite* is an INI for Base Object Swapper with no plugin. It disables more than 200 objects for performance [6].
- **Other patches:** Restored Whiterun Defences, Lux, Lux Orbis, Northern Roads and eFPS patches edit the worldspace, not the quests [6].
- **No plugin quest overrides:** Scanning every enabled plugin that masters `SurWR.esp` found no changes to these quest or dialogue records. Among plugins, only LoreRim's spell-tome rename touches quest-related data [5][6].
- **Bucket Fix (loose script):** LoreRim ships *Capital Whiterun Expansion - Bucket Fix*, a plugin-less replacement of the dialogue fragment `TIF__0531096E`. `SurWR.esp` attaches that fragment to the Ode To The Tundrastriders topic "All that's left is to paint the cow?" [8]. The fix sets stage 17 instead of 16, which skips the dye-bucket step that could fail to spawn and softlock the quest [8]. (Verifier note: this file originally said only the spell-tome rename touches quest-related data; the loose-script fix overturns that.)
- A separate *Capital Whiterun Expansion - Quest and Dialogue Addon* (Nexus 181606) exists on the web but is **not** shipped in LoreRim [6].

## Related
- [Whiterun Hold](../areas/whiterun-hold.md)
- [Thane, Hearthfire and favors](../vanilla-changes/thane-hearthfire-and-favors.md)
- [Capital Windhelm Expansion quests](capital-windhelm-expansion-quests.md) (same author)
- [More to Say quests](more-to-say-quests.md) (more Whiterun Hold radiant jobs)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal stages, locations | LoreRim install: `SurWR.esp` QUST/LCTN records (profile Default), via imports/mods/robs-bug-fixes-capital-whiterun-expansion.md | mod v3.3.0.0 | 2026-10-02 |
| 2 | features, quest start blurbs, town effects | [Capital Whiterun Expansion Nexus page 37982](https://www.nexusmods.com/skyrimspecialedition/mods/37982) via meta.ini cache in the LoreRim install | n/a (cache, v1.3.0.0) | 2026-10-02 |
| 3 | plugin is a replacer for CWE 1.5 Normal | [Rob's Bug Fixes Nexus page 63355](https://www.nexusmods.com/skyrimspecialedition/mods/63355) via meta.ini cache | 2023-02-12 (nexusLastModified) | 2026-01-11 cache |
| 4 | note texts, dialogue prompts, prices | LoreRim install: `SurWR.esp` BOOK/DIAL/INFO records, parsed this run | mod v3.3.0.0 | 2026-10-02 |
| 5 | spell tome rename | LoreRim install: `LoreRim - Spells and Magic Effects.esp` (LoreRim - xEdit64 Output) BOOK override | n/a | 2026-10-02 |
| 6 | what ships, patches, no quest overrides | LoreRim install: profile Default modlist.txt / plugins.txt, mod folder contents, scan of enabled plugins mastering `SurWR.esp`; Lite meta.ini (Nexus 112964); web search showing Nexus 181606 | 2024-03-04 (Lite nexusLastModified) | 2026-10-02 |
| 7 | no LoreRim-specific gate listed | LoreRim site pre-fetch (all six pages) — no mention | n/a | 2026-10-02 |
| 8 | Ode bucket-step skip in LoreRim | LoreRim install: *Capital Whiterun Expansion - Bucket Fix* (Nexus 65422) meta.ini description + loose `scripts/tif__0531096e.pex`; `SurWR.esp` INFO under DIAL `0WRGiantQuestBeforePaint` binds `TIF__0531096E`; profile Default modlist (enabled) | 2022-03-24 (nexusLastModified) | 2026-10-02 |
