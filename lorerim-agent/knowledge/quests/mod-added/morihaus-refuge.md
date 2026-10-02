---
id: morihaus-refuge
title: Morihaus' Refuge (Lord's Mail rework)
kind: mod-added
category: creation-club
summary: Not a quest. It is a new Ancient Imperial ruin dungeon in southern Skyrim whose boss wears the Lord's Mail. It replaces the Creation Club "Gift of Kynareth" quest (Alik'r mercenaries), which no longer starts in LoreRim.
mods:
  - name: Morihaus' Refuge - No Bruma Version
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/68558
    version: 1.0.1.0
  - name: Lux (patch hub)
    nexus: null
    version: null
plugins: [MorihausRefugeStandalone.esp, Lux - Morihaus' Refuge Standalone.esp]
quests: []
locations: [Morihaus' Refuge]
region: Falkreath Hold, beside Peak's Shade Tower (Tamriel exterior cell -5,-23)
start: No quest. Travel to Morihaus' Refuge, next to Peak's Shade Tower, and defeat the boss to take the Lord's Mail. The CC quest "Gift of Kynareth" never starts in LoreRim.
related: [vanilla-changes/creation-club.md, areas/new-dungeons.md, areas/falkreath-hold.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: medium
updated: 2026-10-02
---

# Morihaus' Refuge (Lord's Mail rework)

**Morihaus' Refuge** reworks how you get the Creation Club **Lord's Mail**. The CC's Redguard-thieves quest is removed. In its place is a new dungeon in **Ancient Imperial ruins** with a "moderately challenging boss who will use the full force of both their armor and their weapon". The Lord's Mail works on the boss, health-drain effect included [1]. The LoreRim site lists it among the Creation Club quest overhauls [2]. **This file covers a dungeon, not a journal quest.** The mod adds no player-facing quest of its own [3].

## Starting in LoreRim
- Nothing starts. Go to the dungeon and kill the boss [1].
- **The CC quest "Gift of Kynareth" is effectively disabled.** In vanilla CC, the hidden starter quest `ccBGSSSE021_SeedQuest` ("Seeding Redguard Armor") is start-game enabled (flags 0x119). Morihaus' Refuge overrides it with flags 0x0, so it no longer starts. It also overrides `ccBGSSSE021_LordsMailQuest` ("Gift of Kynareth") [3][4][5].
- Vanilla CC "Gift of Kynareth" baseline: Read the Emperor's Letter → Confront the Alik'r Mercenaries → Retrieve the Lord's Mail → Cleanse the Lord's Mail in Solitude [4].
- The LoreRim site says: "Changes the Lord's Mail's integration by removing the existing quest and instead adding an entirely new dungeon and equipping its boss with the Lord's Mail for a challenging fight to acquire it." [2].

## Quests
No player-facing quest. The two CC quest records are overridden to switch them off [3][5].

## Locations
- **Morihaus' Refuge** (location `JELMorihausRefugeLocation`, interior cell `JELMorihausRefuge01`) [3].
  - **Where:** the exterior cell `JELMorihausRefugeExterior01` is at Tamriel grid (−5, −23). That is directly next to the vanilla **Peak's Shade Tower** exterior (−5, −22), which the plugin also edits [3]. UESP places Peak's Shade Tower in **Falkreath Hold**, east of Falkreath and southwest of Pinewatch [6].
  - The map marker uses a minotaur camp icon (`MinotaurCampMarker`, from the mod's map-marker JSON) [3].
  - **Enemies:** minotaurs (minotaur faction and Minotaur Battleaxe records) and draugr. The **boss** wears the **Lord's Mail** with a working "Lord's Mail Absorb Health" effect. The plugin also adds an "Alessian Battleaxe" record [1][3].
- "No Bruma Version": the original mod was set in Beyond Skyrim: Bruma. LoreRim uses the standalone version placed in Skyrim [1][3].

## Rewards & notable items
- **Lord's Mail** (CC artifact), taken from the boss [1][2].
- The Redguard clothing from the Lord's Mail Creation is added to clothing leveled lists, as in the original CC [1].
- The Alessian Battleaxe is the boss weapon item. Whether it drops was not verified [3].

## LoreRim notes
- LoreRim ships **Lux - Morihaus' Refuge Standalone.esp**, a lighting patch from Lux's patch hub [5].
- **No Bruma:** the install has no Beyond Skyrim: Bruma mod folder. LoreRim ships only the **No Bruma** version of this mod, so the dungeon is in Skyrim's Tamriel worldspace [1][3][5].
- The plugin is not ESL-flagged. Its masters include `ccbgssse021-lordsmail.esl` and `ccBGSSSE037-Curios.esl` [3].
- The plugin also touches the Castle Dour cell in Solitude, where the CC quest's "Cleanse the Lord's Mail" step took place. What it changes there was not inspected [3].

## Related
- [../vanilla-changes/creation-club.md](../vanilla-changes/creation-club.md)
- [../areas/new-dungeons.md](../areas/new-dungeons.md), [../areas/falkreath-hold.md](../areas/falkreath-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, boss, removal of thieves quest, Bruma origin | [Nexus mod page 68558](https://www.nexusmods.com/skyrimspecialedition/mods/68558) via meta.ini cache | n/a (cache refreshed 2026-01-11) | 2026-10-02 |
| 2 | LoreRim description | [LoreRim site — Creation Club](https://www.lorerim.com/guides/quests/creation-club) | n/a | 2026-10-02 |
| 3 | location/cell records, exterior grid, map marker, quest flag overrides, masters | LoreRim install: `MorihausRefugeStandalone.esp` (CELL/LCTN/QUST records), `MapMarkers/MorihausRefugeStandalone.json` | mod v1.0.1.0 | 2026-10-02 |
| 4 | vanilla CC quest objectives and original flags | imports/official-quests.json; `ccbgssse021-lordsmail.esl` QUST DNAM (Official Master Files - Cleaned Plugins) | n/a | 2026-10-02 |
| 5 | override list; Lux patch enabled | imports/vanilla-quest-overrides.json; LoreRim install `profiles/Default/plugins.txt` | n/a | 2026-10-02 |
| 6 | Peak's Shade Tower location | [UESP — Peak's Shade Tower](https://en.uesp.net/wiki/Skyrim:Peak%27s_Shade_Tower) | n/a | 2026-10-02 |
