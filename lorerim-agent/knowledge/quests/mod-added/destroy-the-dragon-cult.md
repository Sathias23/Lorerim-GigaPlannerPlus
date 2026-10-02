---
id: destroy-the-dragon-cult
title: Destroy the Dragon Cult (Defeat the Dragon Cult) and Destroy the Acolyte Priests
kind: mod-added
category: quest-expansion
summary: Midway through the main quest, Esbern sends a note telling you to kill the eight named Dragon Priests before facing Alduin. In LoreRim each one really does buff Alduin, via Cult of the World Eater. A Dragonborn counterpart, Destroy the Acolyte Priests, sends you after Miraak's three Acolyte Priests on Solstheim.
mods:
  - name: Defeat the Dragon Cult
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/86625
    version: 1.0.0.0
  - name: Cult of the World Eater - Dragon Priests Buff Alduin
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/83274
    version: 1.3.0.0
  - name: Destroy the Acolyte Priests
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/145580
    version: 1.0.0.0
  - name: Cult of the True Dragonborn - Immersive Miraak Difficulty
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/83458
    version: 1.0.1.0
plugins: [Defeat the Dragon Cult.esp, Destroy the Acolyte Priests.esp]
quests: [Destroy the Dragon Cult, Destroy the Acolyte Priests]
locations: [Labyrinthian, Skuldafn, Shearpoint, Valthume, Ragnvald, Forelhost, High Gate Ruins, Volskygge, White Ridge Barrow, Kolbjorn Barrow, Bloodskal Barrow]
region: Skyrim-wide (Dragon Priest lairs); Solstheim (Acolyte Priests)
start: '"Destroy the Dragon Cult" begins with a note from Esbern once Paarthurnax has told you to find an Elder Scroll. "Destroy the Acolyte Priests" begins with a courier note from Storn Crag-Strider after you free the Wind Stone and start The Path of Knowledge, or from Frea if the Dragonborn questline is already done.'
related: [vanilla-changes/main-quest-and-alternate-start.md, vanilla-changes/dragonborn.md, mod-added/storm-the-thalmor-embassy.md, mod-added/redeeming-fultheim.md, areas/solstheim.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9]
confidence: high
updated: 2026-10-02
---

# Destroy the Dragon Cult (Defeat the Dragon Cult) and Destroy the Acolyte Priests

The mod **Defeat the Dragon Cult** adds the quest **Destroy the Dragon Cult**. It gives the Dragonborn an in-story reason to hunt every named Dragon Priest before the final battle with Alduin [1][2]. On its own the mod is "entirely roleplaying" [2]. LoreRim pairs it with **Cult of the World Eater**, which makes each priest actually buff Alduin [3][4]. The LoreRim site says this "expands the later half of the main quest… and lengthens it with the added Dragon Cult" [4].

## Starting in LoreRim
- **Destroy the Dragon Cult:** "After Paarthurnax tells you that you need to find an Elder Scroll, Esbern will send you a note" [2]. The plugin attaches this to Paarthurnax's Elder Scroll line in The Throat of the World (topic "How does any of this help me?"), which sets the quest to stage 15 [9]. The quest record is start-game-enabled, and its first journal entry is stage 10 [1].
- In LoreRim the main quest itself starts differently: you rent a room at the Helgen inn under the alternate start. See the main-quest file [4].
- The quest marks every Dragon Priest and can be ignored entirely [2]. In LoreRim, ignoring it means facing a buffed Alduin [3].
- **Destroy the Acolyte Priests:** after you free the **Wind Stone** and start **The Path of Knowledge**, **Storn Crag-Strider** sends a note by courier [5].
  - If the Dragonborn questline is already finished, **Frea** sends the note instead [5].
  - The plugin's Story Manager node needs **The Fate of the Skaal** completed, plus either The Gardener of Men not past stage 500 or At the Summit of Apocrypha at stage 600 [9].
  - The author says you need *Better Courier* or similar for the courier to reach you on Solstheim. Better Courier (Nexus 40709) is not in the LoreRim install, so you may only receive the note back in Skyrim (unverified in play) [5][6].

## Quests
### Destroy the Dragon Cult
- **Giver / trigger:** Esbern's note [1][2].
- **Journal:** "Esbern has noted the location of several Dragon Priests, whose loyalty to Alduin means they must be killed before I face Alduin, less they join their strength with his." [1]
- **Objectives:**
  1. Defeat Hevnoraak
  2. Defeat Krosis
  3. Defeat Morokei
  4. Defeat Nahkriin
  5. Defeat Otar the Mad
  6. Defeat Rahgot
  7. Defeat Vokun
  8. Defeat Volsung
  9. Investigate Labyrinthian [1]
- The final objective points you to the **Wooden Mask** in Labyrinthian as a roleplaying lead [2].
- The quest advances once all eight priests are dead [7].
- **Where each priest is, and what killing it removes from Alduin** (Cult of the World Eater) [3]:
  - Morokei (Labyrinthian): −20% magic resistance
  - Nahkriin (Skuldafn): −500 health
  - Krosis (Shearpoint): −2 HP/s regeneration
  - Hevnoraak (Valthume): −2 HP/s regeneration
  - Otar the Mad (Ragnvald): −2 HP/s regeneration
  - Rahgot (Forelhost): −1,500 health
  - Vokun (High Gate Ruins): −20% magic resistance
  - Volsung (Volskygge): −1,500 health
- With all priests alive, Alduin has +3,500 health, regenerates 6 HP/s, and has 90% magic resistance (50% base + 40%) [3].
- Nahkriin's buff is deliberately weak because he cannot be reached before the first Alduin fight [3].

### Destroy the Acolyte Priests
- **Giver / trigger:** A courier note from Storn (or Frea). The quest adds map markers for White Ridge Barrow, Kolbjorn Barrow and Bloodskal Barrow [5][7].
- **Objectives:**
  1. Destroy Ahzidal
  2. Destroy Dukaan
  3. Destroy Zahkriisos [1]
- Priests already dead when the quest starts are completed automatically [7].
- **Completion:** "With their destruction, the land is closer to being completely cleansed of Miraak's influence." [1]
- **Effect in LoreRim:** *Cult of the True Dragonborn* buffs Miraak: +500 health, +500 magicka, +50% magic resistance, +25% fortify Destruction, +25% fortify shouts [6].
  - Dukaan holds +500 health and +25% magic resistance [6].
  - Zahkriisos holds +500 magicka and +25% magic resistance [6].
  - Ahzidal holds +25% Destruction and +25% shouts [6].
  - Killing **Vahlok the Jailor** instead *strengthens* Miraak (+1,000 health, +25% magic resistance, +75% Destruction, +25% One-handed) [6].
  - The quest gives Vahlok no marker [5].
  - The LoreRim site: "Kill Miraak's dragon priests to break his influence and weaken him… or kill his challenger to strengthen him." [4]

## Rewards & notable items
- Neither quest gives a scripted reward. The payoff is a weaker Alduin or Miraak, plus the priests' own masks and loot [2][3][6].

## LoreRim notes
- LoreRim's Dragon Priests are visually overhauled (e.g. Humanoid Dragon Priests). The list also includes "Unaggressive Dragon Priests Fix" [8].
- *Destroy the Acolyte Priests* loads in LoreRim's "Gameplay - Late Loaders" separator [8].

## Related
- [../vanilla-changes/main-quest-and-alternate-start.md](../vanilla-changes/main-quest-and-alternate-start.md)
- [../vanilla-changes/dragonborn.md](../vanilla-changes/dragonborn.md)
- [storm-the-thalmor-embassy.md](storm-the-thalmor-embassy.md)
- [redeeming-fultheim.md](redeeming-fultheim.md)
- [../areas/solstheim.md](../areas/solstheim.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal text | LoreRim install: `Defeat the Dragon Cult.esp` and `Destroy the Acolyte Priests.esp` QUST records (profile Default) | mods v1.0.0.0 | 2026-10-02 |
| 2 | start (Esbern note), roleplay framing, Wooden Mask | [Defeat the Dragon Cult Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/86625) via meta.ini cache | 2023-03-09 (nexusLastModified) | 2026-01-11 cache |
| 3 | Alduin buffs per priest, priest locations | [Cult of the World Eater Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/83274) via meta.ini cache | 2023-01-27 (nexusLastModified) | 2026-10-02 |
| 4 | LoreRim framing, main quest start, Miraak cult | [LoreRim site — Main Quests](https://www.lorerim.com/guides/quests/main) | n/a | 2026-10-02 |
| 5 | Acolyte start (Storn/Frea), courier caveat, Vahlok | [Destroy the Acolyte Priests Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/145580) via meta.ini cache | 2025-03-23 (nexusLastModified) | 2026-01-11 cache |
| 6 | Miraak buffs per priest; Better Courier absent | [Cult of the True Dragonborn Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/83458) via meta.ini cache (2023-01-27); LoreRim install modid search | 2023-01-27 | 2026-10-02 |
| 7 | completion logic, barrow map markers | LoreRim install: script sources `DCQuestScript.psc`, `QF_EnoAcolyteQuest_030036C8.psc` | n/a | 2026-10-02 |
| 8 | LoreRim modlist context | LoreRim install: `profiles/Default/modlist.txt`; unit brief separator data | n/a | 2026-10-02 |
| 9 | start triggers (Paarthurnax INFO 0003FA49 fragment; Acolyte SMQN conditions) | LoreRim install: `Defeat the Dragon Cult.esp` INFO/DIAL override + `TIF__0003FA49.psc`; `Destroy the Acolyte Priests.esp` SMQN `EnoAcolyteQuestNode` conditions (parsed; DLC2MQ03/05/06 resolved via official-quests.json) | mods v1.0.0.0 | 2026-10-02 |
