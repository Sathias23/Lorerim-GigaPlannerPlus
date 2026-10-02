---
id: frozen-heart-areas
title: The Frozen Heart — Crag Spire Wastes and the Snow Elf Mirror Realms
kind: area
category: new-lands
summary: The Frozen Heart adds a cursed frozen realm, the Crag Spire Wastes, reached through a Snow Elf mirror bought from Belethor's General Goods. It contains Othriel's Cabin (player home), the Whispering Walls maze, Frostskarn Vault, Wisp Light Crevasse, Whispering Walls Catacombs, Labyrinthine Passages and a Gallery of Mirrors fast-travel hub. Requires the Slow Time and Fire Breath shouts.
mods:
  - name: The Frozen Heart - Quest Mod
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/159911
    version: 0.6.5.0
  - name: The Frozen Heart - Quest Mod - 3BA
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/159911
    version: 0.4.2.0
plugins: [ksws07_quest.esm, ksws07_quest_shrubs.esp]
quests: [The Frozen Heart, Seeking Out Shards, A Book for Othriel, Another Book for Othriel]
locations: [Crag Spire Wastes, Othriel's Cabin, Whispering Walls, Frostskarn Vault, Wisp Light Crevasse, Whispering Walls Catacombs, Labyrinthine Passages, Gallery of Mirrors]
region: Crag Spire Wastes (separate worldspace) plus four dungeon worldspaces; entry via an inventory mirror, not a map location
start: Know the Slow Time and Fire Breath shouts, buy the "Snow Elf Mirror (Labyrinthian Passages)" from Belethor's General Goods, use Slow Time, then equip the mirror from your inventory.
related: [mod-added/the-frozen-heart.md, areas/whiterun-hold.md, vanilla-changes/main-quest-and-alternate-start.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: high
updated: 2026-10-02
---

# The Frozen Heart — Crag Spire Wastes and the Snow Elf Mirror Realms

The Frozen Heart is a 3-4 hour quest mod. You step through a magical mirror into a cursed frozen realm, solve puzzles, fight shadows and help the ancient Snow Elf warrior Othriel cure her curse [2]. It adds the **Crag Spire Wastes** worldspace and four dungeon worldspaces [1]. Rewards include a new follower, a fully exterior player home and a mirror-based fast-travel network [2]. The mod edits no existing Skyrim locations [2]. LoreRim files it under the "Gameplay - Followers" separator, and the LoreRim site does not mention it [1][3].

## Starting in LoreRim
- **Shout requirement:** the author says you must know at least one word each of **Slow Time** and **Fire Breath** to start; an FOMOD option removes the start check, "but these shouts are still needed to progress through the quest" [2].
  - LoreRim's installed plugin keeps the requirement. The story-manager node `ksws07QuestNode` has two condition-function-378 checks against Skyrim.esm `00048AC9` and `0003F9EA` [1].
  - UESP gives `0003F9EA` as the Fire Breath shout's internal form ID [4]. `Skyrim.esm` itself names the two records `SlowTimeShout` (`00048AC9`) and `FireBreathShout` (`0003F9EA`) [6].
  - Practical answer: learn both shouts first. Slow Time is also needed every time you enter a mirror [2].
- **Steps** [2]:
  1. Buy **Snow Elf Mirror (Labyrinthian Passages)** from **Belethor's General Goods** (the vanilla Whiterun store — location from general knowledge, unverified here). Journal: "I purchased a strange Snow Elf mirror from Belethor's General Goods" [1].
  2. Read the back of the mirror in your inventory.
  3. Shout Slow Time, then equip the mirror from the inventory. You are teleported to the Labyrinthine Passages.
- No LoreRim-specific gate beyond the shouts was found [1][3].

## Quests
Full walkthrough: `mod-added/the-frozen-heart.md`.

### The Frozen Heart
- **Objectives** [1]:
  1. Investigate the mirror.
  2. Find a way through the Labyrinthine Passages.
  3. Investigate the Crag Spire Wastes.
  4. Find a cure to Othriel's curse.
  5. Retrieve equipment from Frostskarn Vault and show it to her.
  6. Defeat the boss.
  7. Escape the Whispering Walls Catacombs.
  8. Defeat the boss again.
  9. Dispel the curse and speak to Othriel.
  - Alternate objective: "Kill <waifu>".
- **Key mechanics** [2]:
  - Fire Breath opens the Labyrinthine Passages door.
  - At the Whispering Walls maze, Siwe's ghost asks four questions. Fail and you wait 24 hours, or climb the walls.
  - Frostskarn Vault has a pillar puzzle and 2 Wisp Mothers; it holds the armor set and the Sword of Sealing.
  - The Catacombs pillar code is **1189**.
  - The Cursed Shadow is beaten by shattering its mirrors. Finish with Slow Time, then Fire Breath on Othriel's Frozen Heart.
- **Choices** [1][2]:
  - Refusing to help, or refusing to return her heart, leads to killing Othriel.
  - Enough disposition makes her a follower and opens all items in Othriel's Cabin.

### Seeking Out Shards
- Find 8 Snow Elf Mirror Shards plus the Shattered Snow Elf Mirror around the Wastes and Wisp Light Crevasse [1][2].
- Craft a frame and then the **Snow Elf Mirror (Gallery of Mirrors)** at a forge [1][2].
- Its portals travel to major cities you've discovered [2].

### A Book for Othriel / Another Book for Othriel
- One day after the main quest, Othriel asks for *Feyfolken III* [1][2].
- Next she asks for *The Armorer's Challenge*, then 5 Stalhrim Ores. After 1 day she gives you **Rimeweld** armor and weapons plus Rimeweld Armoury Plans (crafting needs Ebony Smithing) [1][2].

## Locations
LCTN and worldspace names from `ksws07_quest.esm` [1]:
- **Labyrinthine Passages** (worldspace): the entry dungeon. A shrine to Auri-El has an Offering Box; the passages need a forward/back walking trick [2].
- **Crag Spire Wastes** (worldspace): the cursed frozen realm. Frost Trolls guard one shard chest on the north path [2]. Also has a generic **Wilderness** location [1].
- **Whispering Walls**: the maze, reached by travelling west from the Labyrinthine Passages exit, with Siwe's ghost [2].
- **Othriel's Cabin**: Othriel's home and your new player home; "fully exterior home with windows and no loading screens" [2].
- **Frostskarn Vault** (worldspace): pillar-and-mirror puzzle vault with Wisp Mothers [2].
- **Whispering Walls Catacombs**: tomb where the curse is interred; first Cursed Shadow fight [1][2].
- **Wisp Light Crevasse** (worldspace): ice dungeon with a waterfall chasm (one chest needs Whirlwind Sprint), an orb puzzle and the second Cursed Shadow fight [2].
- **Gallery of Mirrors** (worldspace): fast-travel hub reached with the reforged mirror [1][2].

## Rewards & notable items
- **Othriel** as a follower, if her disposition is high enough [2].
- **Othriel's Cabin** as a home [2].
- The **Sword of Sealing** and the vault armor set [2].
- **Rimeweld** armor and weapons, with crafting plans [1][2].
- Gallery of Mirrors city portals [2].

## LoreRim notes
- LoreRim installs the main file and the 3BA body add-on (`The Frozen Heart - Quest Mod - 3BA`, no plugin) [3][5].
- The installed start node keeps the shout requirement, i.e. not the "no shout" FOMOD option [1].
- A paper map for Flat World Map Framework exists on the author's page [2]; it was not checked whether LoreRim installs it.
- The author asks players not to cheese the puzzles with paraglider or parkour mods [2]. LoreRim's movement mods were not checked against this.

## Related
- `mod-added/the-frozen-heart.md`
- `areas/whiterun-hold.md` (Belethor's General Goods)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal, LCTN/WRLD names, start-node shout conditions | LoreRim install: `ksws07_quest.esm` QUST/LCTN/WRLD/SMQN records (localized strings) | mod v0.6.5.0 | 2026-10-02 |
| 2 | features, start steps, walkthrough, puzzle answers, rewards | [Nexus 159911](https://www.nexusmods.com/skyrimspecialedition/mods/159911) via meta.ini cache | cache 2026-02-18 | 2026-10-02 |
| 3 | installed files and separator; LoreRim site silence | LoreRim install: `profiles/Default/modlist.txt`; LoreRim site pages under `imports/lorerim-site/` | n/a | 2026-10-02 |
| 4 | Fire Breath shout form ID 0003F9EA; Slow Time word IDs 00048ACA-CC | [UESP — Fire Breath](https://en.uesp.net/wiki/Skyrim:Fire_Breath), [UESP — Slow Time](https://en.uesp.net/wiki/Skyrim:Slow_Time) | n/a | 2026-10-02 |
| 5 | 3BA add-on version | LoreRim install: `The Frozen Heart - Quest Mod - 3BA/meta.ini` | v0.4.2.0 | 2026-10-02 |
| 6 | shout form IDs 00048AC9 = SlowTimeShout, 0003F9EA = FireBreathShout | LoreRim install: `Stock Game/Data/Skyrim.esm` SHOU records (EDID) | n/a | 2026-10-02 |
