---
id: heart-of-the-reach
title: Heart Of The Reach
kind: mod-added
category: new-quests
summary: A choice-based quest in the Ever-Bog, an underground swamp in the Reach. You either heal the "Heart" for the priest Gwilym or poison it for Vinillian. Start it by speaking to Gwilym at the Silver-Blood Inn in Markarth. In LoreRim, a Requiem patch unlevels it, with level 30 Forsworn bosses, a level 35 Hagraven and a level 55 spider queen.
mods:
  - name: Heart of the Reach - New Quest - Dungeon - Weapons - 3 Creature Variants - Ring - Spell
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/76494
    version: 1.0.7.0
  - name: Requiem - Heart of the Reach
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/76940
    version: f1.03
plugins: [HeartOfTheReach.esp, Requiem - Heart of the Reach.esp, Heart of the Reach Occlusion Addon.esp, Lux - Heart of the Reach.esp]
quests: [Heart Of The Reach]
locations: [Silver-Blood Inn, Ever-Bog, Ever-Bog Cave, Ever-Bog Chamber, Ever-Bog Caverns, Ever-Bog Glen, Ever-Bog Bowels, Ever-Bog Falls, Ever-Bog Heart Chamber]
region: The Reach (Ever-Bog map marker near the Reachcliff Secret Entrance)
start: Speak to Gwilym, a new NPC usually by the fireplace in the Silver-Blood Inn in Markarth. There is no LoreRim start gate, but Requiem - Heart of the Reach makes the encounters statically high level.
level_hint: "10-15+ (mod); LoreRim/Requiem bosses are level 30-55"
related: [areas/the-reach-and-markarth.md, areas/new-dungeons.md, mod-added/legends-of-aetherium.md, mod-added/sleepwalking-into-a-nightmare.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: high
updated: 2026-10-02
---

# Heart Of The Reach

Heart of the Reach "sends you into the Ever-Bog, an underground swamp in the reach in order to help a priest who is searching for help". You can side with or against the priest, and the rewards and ending depend on that choice [3]. The mod adds one quest, **Heart Of The Reach**, two NPCs (**Gwilym** the priest and **Vinillian**), Ever-Bog's seven cells, swamp creatures and new ingredients [1].

## Starting in LoreRim
- Talk to **Gwilym** in the **Silver-Blood Inn**, Markarth. He is "normally lingering around the fire place" [2][3].
- Unlike most mods in this list, the quest is not start-game-enabled. It begins through Gwilym's dialogue [1].
- **No LoreRim start gate.** However, **Requiem - Heart of the Reach** "unleveled all content". Enemies have static levels: "Level 30 forsworn bosses, Level 55 Spider Queen, Level 35 Hagraven". The patch author admits "this may seem overtuned" but says it is balanced for base Requiem [4]. The mod's own recommendation of 10–15+ [3] does not apply in LoreRim.
- **Location:** the Ever-Bog map marker is about 1.2 cells from the vanilla **Reachcliff Secret Entrance** marker, south of Karthwasten. This is derived from plugin coordinates [1][6].

## Quests
### Heart Of The Reach
- **Giver / trigger:** Gwilym, Silver-Blood Inn (`aaaHOTRQuest`) [1].
- **Where:** Ever-Bog: Ever-Bog Cave → Chamber → Caverns → Glen → Bowels → Falls → Heart Chamber [1].
- **Steps (objective text):** [1]
  1. Gwilym asks you to heal the "Heart" in a cave in the Reach, using a remedy he provides. Optional: confront Vinillian.
  2. Travel to Ever-Bog.
  3. Collect Imbued Algae (1), Bog Beacon (10), Swamp Spider Eggs (5) and Swamp Taproot (3).
  4. Find a cooking station. Create the remedy, or create the poison.
  5. Go to the heart.
  6. Tell the priest you've healed the heart, or tell Vinillian you've killed it.
- **Choices & outcomes:** [1]
  - **Gwilym's side (remedy):** "the remedy seemed to have worked". Gwilym then returns to the heart and "should be there in a day if I want to witness him go about his duties". The mod page says the **Ring of the Tree** is the reward for siding with Gwilym [3].
  - **Vinillian's side (poison):** Vinillian argues you should kill the heart and gives you a poisonous root. Afterwards, "he paid me and told me to be on my way". The quest script has a gold property [1].

## Locations
- **Silver-Blood Inn** (Markarth): the quest giver [1][3].
- **Ever-Bog:** an underground swamp with cells Ever-Bog Cave, Ever-Bog Chamber, Ever-Bog Caverns, Ever-Bog Glen, Ever-Bog Bowels, Ever-Bog Falls and Ever-Bog Heart Chamber [1].
- **Enemies:** Moss Spiders up to the **Moss Spider Brood Mother** variants, **Swamp Spriggans**, the **Hagraven Of The Glen**, and the Forsworn **Heart Sentinel** and **Forsworn Matriarch** [1].

## Rewards & notable items
- **Ring Of The Tree:** reward for siding with Gwilym [1][3].
- **Weapons:** Heart Sentinel Sword, Heart Sentinel Bow ("lower damage faster fire rate") and Antler Bow. Each has three level variants in the base plugin [1][3].
- **Spell:** Spell Tome: Conjure Swamp Spriggan (summons a Swamp Spriggan) [1][3].
- **Ingredients:** Bog Asco Beacon (a mushroom), Imbued Algae, Swamp Taproot, Swamp Spider Egg and Poison Swamp Root [1][3].

## LoreRim notes
- **Requiem - Heart of the Reach** (f1.03): unlevels all content and rebalances enemies, ingredients, spells, weapons and the ring. It was made for the Constellations modlist [4]. The optional Minor Arcana Forsworn add-on described on its page is not identified among the installed plugins [4][5].
- Occlusion and Lux lighting patches also ship [5].
- The author lists no known conflicts [3].

## Related
- [areas/the-reach-and-markarth.md](../areas/the-reach-and-markarth.md)
- [areas/new-dungeons.md](../areas/new-dungeons.md)
- [mod-added/legends-of-aetherium.md](legends-of-aetherium.md) and [mod-added/sleepwalking-into-a-nightmare.md](sleepwalking-into-a-nightmare.md) (same author, TheLootist)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest, objectives, journal, NPCs, cells, items, creatures, map marker | LoreRim install: `HeartOfTheReach.esp` records (profile Default) | mod v1.0.7.0 | 2026-10-02 |
| 2 | LoreRim start instruction | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 3 | premise, start, level, items, ring for Gwilym's side | [Nexus mod page 76494](https://www.nexusmods.com/skyrimspecialedition/mods/76494) via meta.ini cache; corroborated by [TheLootist — Heart of the Reach](https://www.thelootist.com/mods/heart-of-the-reach) | 2024-04-27 (nexusLastModified) | 2026-01-11 cache / 2026-10-02 |
| 4 | Requiem unleveling and static enemy levels | [Nexus 76940 — Requiem - Heart of the Reach](https://www.nexusmods.com/skyrimspecialedition/mods/76940) via meta.ini cache | 2023-01-25 (nexusLastModified) | 2026-01-11 cache |
| 5 | patches shipped | LoreRim install: profile Default `plugins.txt` / `modlist.txt` | n/a | 2026-10-02 |
| 6 | Ever-Bog position relative to vanilla markers | Derived: map-marker coordinates in `HeartOfTheReach.esp` vs `Skyrim.esm` markers | n/a | 2026-10-02 |
