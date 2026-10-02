---
id: saints-and-seducers-extended-cut
title: Saints and Seducers Extended Cut
kind: mod-added
category: creation-club
summary: A fully voiced overhaul of the Saints & Seducers Creation that replaces its quests with a new Daedric questline in the Asylum, a new region of the Shivering Isles, plus two smithing side quests. It starts with an earthquake in Solitude once you are level 20 and have finished The Mind of Madness.
mods:
  - name: Skyrim Extended Cut - Saints and Seducers
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/72772
    version: 1.1.1.0
  - name: OMEAR Addition - Skyrim Extended Cut S-and-S
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/67968
    version: 1.8.2.0
  - name: Extended Cut - Saints and Seducers 2K
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/80307
    version: 2.0.0.0
  - name: Skyrim Extended Cut - Saints and Seducers - My optimized textures by Xtudo
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/108519
    version: 1.0.0.0
  - name: Extended Cut Saints and Seducers - Tomato Complex Parallax Support - Standalone
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/127969
    version: 1.0.0.0
  - name: Skyking Signs - Saints and Seducers Extended Cut
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/112902
    version: 1.3.0.0
plugins: [Skyrim Extended Cut - Saints and Seducers.esp, ECSS - Book Covers Skyrim Patch.esp, ECSS - Ruin's Edge Patch.esp, ECSS - Shadowrend Patch.esp, ECSS - Staff of Sheogorath Patch.esp, Extended Cut - Saints and Seducers 2K.esp]
quests: [The Route of Madness, The Isle of Madness, The Roots of Madness, The Merchant's Masterpiece, The Lunatic's Treasure]
locations: [Shivering Isles, Solitude Wasteworks, Root to Nirn, Borogove, Borogove Outgrabe, Xedex, Root Canal, Root Nexus, The Near Corgi Shop, Decrepit House, Glimmering Hollow, Sees-the-Moon's Shack, Grove of Reflection, Impromptous Hall, Flesh Laboratory]
region: Solitude (Haafingar) entry; the Asylum region of the Shivering Isles (own worldspace)
start: Reach level 20 and complete The Mind of Madness, then sleep 6 in-game hours or re-enter Solitude. An earthquake starts "The Route of Madness" and leads you into the sewers. In LoreRim, The Mind of Madness itself is delayed until level 20 and starts from a rumor from the Winking Skeever innkeeper.
level_hint: "20+ (hard requirement); an aggregator guide recommends 30+ for the final boss"
related: [areas/shivering-isles-saints-and-seducers.md, vanilla-changes/daedric-quests.md, vanilla-changes/creation-club.md, areas/haafingar-and-solitude.md, mod-added/gore.md, mod-added/lucien.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
confidence: high
updated: 2026-10-02
---

# Saints and Seducers Extended Cut

Skyrim: Extended Cut – Saints and Seducers (ECSS) overhauls the official Saints & Seducers Creation. It **removes the Creation's stock quests** and replaces them with a new, fully voiced Daedric quest that continues the Sheogorath story after The Mind of Madness, plus two side quests [2]. The quests take place in the Asylum, a new region of the Shivering Isles "on the fringe of the Fringe", split between Mania and Dementia. The region has three new dungeons and two shops [2]. The author estimates 1–3 hours of play, and you can return to the realm after the story ends [2]. LoreRim lists it on its Creation Club page as an overhaul that also integrates Shadowrend, Ruin's Edge and the Staff of Sheogorath [3].

## Starting in LoreRim
- **Requirements:** player level 20 or higher **and** The Mind of Madness completed [2][3]. Once both are met, sleep 6 in-game hours or come back to Solitude later and re-enter it to trigger the events [2]. A small earthquake hits Solitude and you get an objective to investigate it, which leads you into the sewers [9].
- **The level gate as shipped:** the start quest `EC_SS_MQ100Int` checks player GetLevel >= global `EC_SS_StartLevel`, which is 20. No LoreRim plugin overrides that global or the ECSS start quests [4].
- **LoreRim-specific gate (The Mind of Madness):** LoreRim installs "Delayed Quest Starts - Mind of Madness" [5].
  - With that mod, The Mind of Madness only starts after you reach its level requirement. You then ask the **Winking Skeever innkeeper for rumors** until you hear about "a distressed man walking near the Blue Palace", and Dervenin forcegreets you there [5].
  - The mod's default level is 35 (`ANDR_DA15_LevelReq`), but LoreRim's `LoreRim - Global Modifiers.esp` sets it to **20** [5].
  - So in practice: reach level 20, get the rumor, finish The Mind of Madness, then return to Solitude for the quake [2][5].
  - See [vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md).
- **New game required:** the author says the mod needs a new game. Even an untouched save that already has Saints & Seducers can break [2]. This matters only if you add ECSS to an existing save. LoreRim ships it from the start [11].

## Quests
### The Route of Madness
- **Giver / trigger:** the Solitude earthquake (misc quest `EC_SS_MQ100Int`) [1][4].
- **Where:** Solitude → the sewers. The plugin's tunnel cell is "Solitude Wasteworks" (location "Root to Nirn") [4][9].
- **Steps:** 1. Investigate the source of the quake. 2. Investigate the strange tunnel [1]. At the end of the sewers you are taken to the Shivering Isles [9].

### The Isle of Madness
- **Giver / trigger:** Staada, after the tunnel [1].
- **Where:** the Asylum, Shivering Isles; Stopgap [1].
- **Steps:** [1]
  1. Enter the Asylum and follow Staada. She tells you about a riot in the Shivering Isles' prison and wants to stop it "before the Root does any more damage to Nirn".
  2. Rescue Dylora, her counterpart, who has been captured by the prisoners. Search Stopgap for signs of her.
  3. Defeat Thoron, the prisoners' leader, who is torturing Dylora. He escapes.
  4. Return to Staada. Dylora reveals that Thoron wants to take over the Root to force his way back into the Shivering Isles, and that he is hiding in the Root Nexus behind an amber barrier.

### The Roots of Madness
- **Giver / trigger:** continues straight from The Isle of Madness. Staada sends you for a weapon that can break the amber barrier [1].
- **Steps:** [1]
  1. Find an artifact from the Shivering Isles. The dialogue asks whether the Wabbajack could do it; Staada warns that it is "rather... unpredictable" [4].
  2. Optional objectives:
     - Retrieve Nerveshatter.
     - Talk to Dylora.
     - Burn the Grove of Insanity and/or the laboratory.
     - Steal a Soul Tomato from the Grove of Insanity or a Void Essence from the laboratory.
     - Frame the Priests for burning the Grove, or the Apostles for burning the laboratory.
  3. Return to Staada, destroy the barrier and enter the Nexus.
  4. Defeat Thoron. He flees into the Well of Inversion and creates copies of Staada and Dylora to fight you. Defeat him again; he calls out to his master and is turned into a crystal.
  5. Talk to Staada. She thanks you and tells you that you are welcome to return to the Asylum at your leisure.
- **Choices & outcomes:** the optional sabotage and framing objectives let you sabotage the Exile Priests and Apostles and blame each group for the other's damage [1][4]. Thoron is a strong shock-damage mage [10]. The same aggregator guide recommends finishing the side quests before beating him, because his final lair cannot be revisited (unverified) [10].

### The Merchant's Masterpiece
- **Giver / trigger:** Theodor Gorlash, "a strangely familiar merchant in the Shivering Isles" [1].
- **Steps:** find the Sheogorath-Shaped Amber in the Root Canal (in "a mysterious grove deep in the heart of the Root"), return it to Theodor, then read the Amber Smithing Manual [1].
- **Rewards:** the Amber Smithing Manual, which teaches amber smithing [1][4].

### The Lunatic's Treasure
- **Giver / trigger:** Sees-the-Moon, "a strange Argonian in the marsh", at Sees-the-Moon's Shack [1][4].
- **Steps:** retrieve the "treasure" from the Drowned Ruin (Xedex), return it to Sees-the-Moon, and read his journal. The treasure he actually wanted is the Cast Iron Pot you found the crystalline artifact under [1].
- **Choices & outcomes:** if Sees-the-Moon dies, the quest fails and "the secrets of madness smithing" are lost (stages 300–301) [1].
- **Rewards:** Sees-the-Moon's Journal, which teaches madness smithing. The pot is also a wearable "Cast Iron Hat" [1][4].

## Locations
- **Shivering Isles** — ECSS's own worldspace (`ECSSShiveringIsles`) [1].
- **Solitude Wasteworks / Root to Nirn** — the tunnel from Solitude's sewers into the Isles [4].
- **Borogove, Borogove Outgrabe** — an Asylum settlement area [1][4].
- **Xedex** — the Drowned Ruin from The Lunatic's Treasure [1][4].
- **Root Canal, Root Nexus, Grove of Reflection, Glimmering Hollow** — Root tunnels and dungeons. Thoron's final fight is in the Root Nexus [1][4].
- **The Near Corgi Shop, Decrepit House, Sees-the-Moon's Shack, Impromptous Hall, Flesh Laboratory** — named interiors [1][4].
- Full area write-up: [areas/shivering-isles-saints-and-seducers.md](../areas/shivering-isles-saints-and-seducers.md).

## Rewards & notable items
- **Gear sets and artifacts:** ECSS integrates the Creation's Amber, Madness, Golden and Dark item sets and the artifact Nerveshatter. Its FOMOD patches integrate Shadowrend, Ruin's Edge and the Staff of Sheogorath, and LoreRim enables all of those patches [2][11].
- **Smithing:** amber smithing comes from The Merchant's Masterpiece and madness smithing from The Lunatic's Treasure [1]. An aggregator says the main quest grants Golden and Dark smithing (unverified) [10]. ECSS overrides the Creation's "Golden and Dark Smithing" and "Amber and Madness Smithing" misc quests [1].
- **Pets:** "Spell Tome: Teleport Pet: Potema" and "Spell Tome: Teleport Pet: Pelagius" [4]. ECSS also overrides the Creation's "My Pet Elytra (Mania)" and "My Pet Elytra (Dementia)" quests [1].
- **Other items:** Dylora's Helmet, Theodor's Apron, the Heart of Disorder, "Spell Tome: Conjure Hunger", and Oblivion-era Shivering Isles books such as "The Shivering Bestiary, 2nd Edition" [4].
- **Creation Club quests it replaces or overrides:** "Balance of Power", "Restoring Order", "Staada Quest", "Nerveshatter", and the "Revenge, Hired Thugs" radiant attacks. It also touches Shadowrend's "Through a Glass, Darkly" [1]. See [vanilla-changes/creation-club.md](../vanilla-changes/creation-club.md).

## LoreRim notes
- **Extra weapons, gated by Requiem-style smithing:** "Armory Extended - Saints and Seducers" plus its "Patch for LoreRim" add Spears, Pikes, Halberds, Shortswords and Quarterstaffs for the Golden, Dark, Amber and Madness sets [6]. They appear in Shivering Isles leveled lists. To craft them you need:
  - Golden and Dark: Daedric smithing plus "Aureal and Mazken smithing knowledge".
  - Amber: Glass smithing plus the amber smithing quest.
  - Madness: Ebony smithing plus the madness smithing quest.

  The patch also blocks weapon types LoreRim doesn't use [6].
- **Recipe perk conditions:** `Requiem Smithing Books Give Perks.esp` (in "LoreRim - MCM and INI Settings") overrides 89 ECSS recipes. Their conditions check Requiem smithing perks, mostly Arcane Craftsmanship and Daedric Smithing [7]. (Which perk gates which item was not mapped.)
- **Script performance:** "OMEAR Addition" replaces ECSS's `OnMagicEffectApply` script events with PO3 Papyrus Extender code to reduce script-engine load. It explicitly supports ECSS 1.0.0.6–1.1.1 [8].
- **Visuals (no quest effect):**
  - Textures: 2K upscale, Xtudo's optimized creature textures, Tomato complex parallax, and Skyking Signs [8].
  - Also enabled: "Saints and Seducers Retexture SE", "New Madness 2.0 - Shivering Sky", ECSS 3D grass, Lux / Lux Orbis patches, GKB Waves, and a paper map for FWMF [11].
- **Follower integration:**
  - ECSS has dialogue integration for Lucien (`EC_SS_LucienDialogueQuest`), Shirley and Merlin the Corgi [1][2]. Lucien is installed in LoreRim [11].
  - `Gore - SaSEC.esp` patches the Gore companion for the Isles [11]. See [mod-added/lucien.md](lucien.md) and [mod-added/gore.md](gore.md).
- **No contradiction found:** the LoreRim site and the installed plugin agree on level 20 + The Mind of Madness [3][4]. The site does not mention that The Mind of Madness is itself delayed; that comes from the install [5].

## Related
- [areas/shivering-isles-saints-and-seducers.md](../areas/shivering-isles-saints-and-seducers.md)
- [vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md) — The Mind of Madness delayed start
- [vanilla-changes/creation-club.md](../vanilla-changes/creation-club.md)
- [areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md)
- [mod-added/lucien.md](lucien.md), [mod-added/gore.md](gore.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal text, new locations, CC quests overridden | LoreRim install: `Skyrim Extended Cut - Saints and Seducers.esp` QUST/LCTN records (profile Default) | mod v1.1.1.0 | 2026-10-02 |
| 2 | features, start conditions, new-game warning, integrations, playtime | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/72772) via meta.ini cache | 2025-11-11 (nexusLastModified) | 2026-01-11 cache |
| 3 | LoreRim's stated start gate, integrated CC items | [LoreRim site — Creation Club](https://www.lorerim.com/guides/quests/creation-club) | n/a | 2026-10-02 |
| 4 | `EC_SS_StartLevel` = 20 and `EC_SS_MQ100Int` conditions; no LoreRim override; cell, item and NPC names; Wabbajack dialogue | LoreRim install: plugin records parsed this run | n/a | 2026-10-02 |
| 5 | Mind of Madness delay (default 35, rumor start); LoreRim sets `ANDR_DA15_LevelReq` = 20 | LoreRim install: "Delayed Quest Starts - Mind of Madness" ([Nexus 72751](https://www.nexusmods.com/skyrimspecialedition/mods/72751) meta.ini cache, nexusLastModified 2025-01-31) and `LoreRim - Global Modifiers.esp` GLOB override | n/a | 2026-10-02 |
| 6 | Armory Extended weapons and crafting prerequisites | [Nexus 167859](https://www.nexusmods.com/skyrimspecialedition/mods/167859) ("Armory Extended - Saints and Seducers Patch for LoreRim") via meta.ini cache | 2025-12-23 (nexusLastModified) | 2026-10-02 |
| 7 | recipe overrides with Requiem perk conditions | LoreRim install: `Requiem Smithing Books Give Perks.esp` COBJ records parsed this run | n/a | 2026-10-02 |
| 8 | OMEAR script fix; texture add-ons | Nexus pages [67968](https://www.nexusmods.com/skyrimspecialedition/mods/67968), [80307](https://www.nexusmods.com/skyrimspecialedition/mods/80307), [108519](https://www.nexusmods.com/skyrimspecialedition/mods/108519), [112902](https://www.nexusmods.com/skyrimspecialedition/mods/112902) via meta.ini cache | 2023-01-17 – 2025-12-28 (nexusLastModified) | 2026-01-11 cache |
| 9 | quake leads into the sewers, then to the Isles; quest list | [UESP — Saints and Seducers/Quests](https://en.uesp.net/wiki/Skyrim_Mod:Saints_and_Seducers/Quests); [Tuxborn mod overview](https://tuxborn.org/wiki/quest-mod-overviews/mod-overview-saints-and-seducers-extended-cut/) | n/a | 2026-10-02 |
| 10 | 30+ recommendation, Thoron's lair not revisitable, Golden/Dark smithing via main quest (aggregator, unverified) | [Tuxborn mod overview](https://tuxborn.org/wiki/quest-mod-overviews/mod-overview-saints-and-seducers-extended-cut/) | n/a | 2026-10-02 |
| 11 | which mods and plugins ship and are enabled (patches, Lucien, Gore) | LoreRim install: `profiles/Default/modlist.txt`, `plugins.txt` | n/a | 2026-10-02 |
