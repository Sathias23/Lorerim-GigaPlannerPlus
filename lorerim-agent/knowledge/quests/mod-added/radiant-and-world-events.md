---
id: radiant-and-world-events
title: Radiant hunts and world events (Hunter's Mark dens, Dragons Awaken, Solstheim Earthquakes)
kind: mod-added
category: radiant
summary: Three small systems — hunters and fishermen sell you an animal-den location for 10 gold ("Hunter Marks Animal Den"), Dragons Awaken puts unique named dragons on dragon mounds that open as the main quest advances, and Solstheim Earthquakes adds random quakes on Solstheim. Only the Hunter's Mark jobs show up in the journal.
mods:
  - name: Hunters Mark Animal Den on Map
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/128450
    version: f1.03
  - name: Dragons Awaken
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/44550
    version: 2.0.0.0
  - name: Solstheim Earthquakes SE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/22884
    version: 6.0.0.0
plugins: [Hunters Mark Animal Den on Map.esp, Dragons Awaken.esp, earthquakes - MCM.esp]
quests: [Hunter Marks Animal Den, Hunter Marks Animal Den 02]
locations: [Mzulft Foothills, Witchmist Burial, Karth River Forest, Robber's Gorge Bluffs, Great Henge, Karthspire Bluffs, Lone Mountain, Evergreen Woods, Bilegulch Ridge, Rorikstead Hills, Sea Shore Foothills, Shimmermist Hills, Reachwater Pass, Ragnvald Vale, Yorgrim, Isinfier, Dragon Roost Island]
region: Skyrim-wide (dens, dragon mounds); Solstheim (earthquakes, two dragon mounds)
start: Hunter's Mark — ask any hunter/fisherman "Do you know any animal dens nearby?" / "I take it you know some good places to hunt?" and pay 10 gold. Dragons Awaken — automatic as the main quest opens dragon mounds. Earthquakes — automatic on Solstheim.
related: [mod-added/missives.md, mod-added/dragon-hunting.md, areas/dragons-awaken-lairs.md, areas/solstheim.md, vanilla-changes/main-quest-and-alternate-start.md, vanilla-changes/dragonborn.md]
sources: [1, 2, 3, 4, 5, 6, 7]
confidence: medium
updated: 2026-10-02
---

# Radiant hunts and world events

This file groups three LoreRim mods that add repeatable or ambient content but no story questline [1][3][5]. **Hunters Mark Animal Den on Map** adds two radiant misc quests [1]. **Dragons Awaken** adds no journal quest; it places unique named dragons at the dragon mounds [3]. **Solstheim Earthquakes SE** adds random earthquakes; its only "quest" record is a settings/test controller [5].

## Starting in LoreRim
- **Hunter's Mark:**
  - Talk to a hunter or fisherman, meaning an NPC in the hunter or fisherman faction [2]. In vanilla these typically greet you with "I've been hunting and fishing in these parts for years." [2]
  - Ask "Do you know any animal dens nearby?" and then "Could you mark it on my map? (10 gold)", or "I take it you know some good places to hunt?" [1]
  - The price is a global set to 10 gold [1].
  - The dialogue only goes ahead if a valid animal den is available and you have the gold [2].
- **Dragons Awaken:** no action needed. Dragon mounds open in stages as the main quest advances, as in vanilla, and each opened mound gets its own named dragon [3][4]. The mod's text does not say which main-quest stage opens which mound.
- **Solstheim Earthquakes:** no action needed once you are on Solstheim. By default each 120-second cycle has a 5% chance of a quake. The plugin globals are `eq_Timing` = 120 and `eq_Percentage` = 5 [5][6]. LoreRim's MCM settings folder has no earthquake override [6].

## Quests
### Hunter Marks Animal Den (HMADQ01)
- **Giver / trigger:** an NPC in an area with location data. Such an NPC points only to an animal den in the **same hold**. The author knows of only three vanilla places like this: Hunter's Rest, Crabber's Shanty and Cliffside Retreat [2].
- **Steps:** (10) Hunt down animals at the den [1].
- **Completion:** the quest clears when the den's boss creature is killed [2].
- **Rewards:** none. You pay for the information instead of collecting a bounty [2].

### Hunter Marks Animal Den 02 (HMADQ02)
- **Giver / trigger:** a hunter in an area without location data. This covers most hunters you meet, including the one near the Guardian Stones. These NPCs point to a random animal den **anywhere in Skyrim** [2].
- **Steps:** (10) Clear out the den [1].
- **Limits:**
  - At most two Hunter's Mark quests can be active at once, one of each type [2].
  - When every den in the pool is cleared, the dialogue disappears until a den respawns [2].
  - Only dens with the `LocTypeAnimalDen` keyword and a boss-type enemy count [2].
  - Mod-added dens count if they meet these conditions, which is why the Reach hunter has no option in vanilla [2].

### Dragons Awaken (no journal quest)
- **What it does:**
  - Adds **unique named dragons** at the dragon mounds [4].
  - Gives every mound a map marker [4].
  - Makes mounds valid locations for radiant quests, such as bounties and Missives "Kill a Dragon" [4].
  - Marks a mound cleared when its dragon dies [4].
- **No respawn:** the named dragons do not come back once killed [4].
- **Scale:** 26 dragon mounds [4].
- **Difficulty:** v2 reset dragon encounter difficulties to vanilla and made Mirmulnir's encounter Easy [4]. The mod does not change dragon stats, so LoreRim's dragon overhauls still apply [3][4].
- **Example dragons from the mod's list** [3]:
  - Krilqolaasdaan (Mzulft Foothills, Eastmarch).
  - Lottoorvith (Lone Mountain, Whiterun).
  - Qostrunnah (Dragon Roost Island, Solstheim).
  - Ahbiilok (Isinfier, Solstheim).
  - The full table of dragon, mound and hold is in [Dragons Awaken lairs](../areas/dragons-awaken-lairs.md).
- **Vanilla quest override:** the only vanilla quest it overrides is `dunLabyrinthian`, for the Labyrinthian dragon [7].

### Earthquakes (mannyEQ) — not a player quest
- **What it is:** a start-game-enabled controller. Its journal stages are "Show settings" (100) and "Test Quake" (255) [5]. It may appear as a settings or test entry; it is not a quest.
- **During a quake:** standing NPCs nearby stagger and the player cowers. Jumping ends the cower [6].
- **Exceptions:** dragons are immune [6].
- **LoreRim build:** LoreRim installed the "With idles - With moving objects" variant [6].

## Locations
These are the new dragon-mound location records in `Dragons Awaken.esp` [3]:
- Mzulft Foothills, Witchmist Burial, Karth River Forest, Robber's Gorge Bluffs.
- Great Henge, Karthspire Bluffs, Lone Mountain, Evergreen Woods.
- Bilegulch Ridge, Rorikstead Hills, Sea Shore Foothills, Shimmermist Hills.
- Reachwater Pass, Ragnvald Vale, Yorgrim.
- Isinfier and Dragon Roost Island, both on Solstheim.

Five more records are tagged `UNUSED` in their EditorIDs: Bonestrewn Crest, Lost Tongue Pass, Autumnwatch Woods, Bloodlet Peaks and Labyrinthian Peaks [3]. The mod's dragon table still assigns dragons to Bonestrewn Crest, Lost Tongue Pass and Autumnwatch Woods [3]. Those mounds probably reuse other location data (inference).

## Rewards & notable items
- **Hunter's Mark:** no reward. The den's loot is the payoff [2].
- **Dragons Awaken:** the named dragons drop normal dragon loot. With [Dragon Hunting](dragon-hunting.md) installed, that includes the new dragon ingredients [3][4].
- **Earthquakes:** no rewards [6].

## LoreRim notes
- **Dragons Awaken in LoreRim patches:** LoreRim's own patches master `Dragons Awaken.esp`. These are *LoreRim - World Fixes*, two Synthesis outputs (NPC; Water & Vertex) and the DynDOLOD occlusion plugin, so the mound placements are integrated into LoreRim's world and LOD fixes [7].
- **Earthquakes in LoreRim patches:** `LoreRim - Spells and Magic Effects.esp` masters `earthquakes - MCM.esp` and adjusts its spell or effect records [7]. The exact change was not inspected.
- **Recommended pairing:** the Dragons Awaken author recommends *Timing Is Everything* to reduce random dragon encounters [4]. LoreRim ships a *Timing is Everything SE - Settings Loader* [7].
- **Plugin warning:** the Dragons Awaken author warns not to flag its plugin as ESL [4].

## Related
- [Dragon Hunting](dragon-hunting.md)
- [Missives](missives.md)
- [Dragons Awaken lairs](../areas/dragons-awaken-lairs.md)
- [Solstheim](../areas/solstheim.md)
- [Main quest & alternate start](../vanilla-changes/main-quest-and-alternate-start.md)
- [Dragonborn](../vanilla-changes/dragonborn.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Hunter's Mark quest names, objectives, dialogue, 10-gold global | LoreRim install: `Hunters Mark Animal Den on Map.esp` (QUST/DIAL/GLOB parsed) | mod v f1.03 | 2026-10-02 |
| 2 | Hunter's Mark conditions, two hunter types, limits | [Nexus page 128450](https://www.nexusmods.com/skyrimspecialedition/mods/128450) via meta.ini cache | 2024-09-14 (nexusLastModified) | 2026-01-12 cache |
| 3 | Dragons Awaken location records, dragon table | LoreRim install: `Dragons Awaken.esp` LCTN records + `Dragons Awaken.txt` readme | mod v2.0.0.0 | 2026-10-02 |
| 4 | Dragons Awaken mechanics, 26 mounds, no respawn, changelog | [Nexus page 44550](https://www.nexusmods.com/skyrimspecialedition/mods/44550) via meta.ini cache + readme | 2023-04-13 (nexusLastModified) | 2026-01-11 cache |
| 5 | Earthquakes quest record and globals | LoreRim install: `earthquakes - MCM.esp` (QUST/GLOB parsed) | mod v6.0.0.0 | 2026-10-02 |
| 6 | Earthquake mechanics, installed variant, no LoreRim MCM override | [Nexus page 22884](https://www.nexusmods.com/skyrimspecialedition/mods/22884) via meta.ini cache; install meta.ini; `LoreRim - MCM and INI Settings` folder listing | 2021-10-31 (nexusLastModified) | 2026-01-11 cache |
| 7 | LoreRim patches mastering these plugins; dunLabyrinthian override | LoreRim install: plugin master scan (Default profile); corpus import `vanilla-quest-overrides.json` | n/a | 2026-10-02 |
