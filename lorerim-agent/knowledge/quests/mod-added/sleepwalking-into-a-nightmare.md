---
id: sleepwalking-into-a-nightmare
title: Sleepwalking Into A Nightmare
kind: mod-added
category: new-quests
summary: A voiced Vaermina quest in which you track down Ralforn's missing wife Gretska, enter her nightmares, overcome three of them and defeat the Lotus. At the end you either save Gretska or kill her to become Vaermina's champion. Start it by speaking to Ralforn at Green-Tip Cabin, northeast of Ivarstead. LoreRim adds no start gate, but its Requiem patch always gives the top-tier reward items with reduced enchantments.
mods:
  - name: Sleepwalking Into A Nightmare - New Daedric Prince Quest
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/141047
    version: 1.0.9.0
  - name: Enigma - Sleep Walking Into A Nightmare Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/33084
    version: 1.5.0.0Patches
  - name: The Nightmare Paper Map for FWMF by Limon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/143113
    version: 1.0.0.0
  - name: LoreRim - xEdit64 Output (Sleepwalking - Requiem Patch.esp)
    nexus: n/a (LoreRim-authored)
    version: n/a
plugins: [NightmarePlane.esp, NightmarePlane0.esp, Sleepwalking - Requiem Patch.esp, Sleepwalking Into A Nightmare Occlusion Addon.esp, Lux - Sleepwalking into A Nightmare patch.esp, Lux Orbis - Sleepwalking into A Nightmare patch.esp]
quests: [Sleepwalking Into A Nightmare]
locations: [Green-Tip Cabin, The Nightmare, Nightmare Of Bereavement, Nightmare Of Anguish, Nightmare of Self Doubt, Awakening Chambers, Hall Of Awakening]
region: The Rift (Green-Tip Cabin, northeast of Ivarstead); most of the quest takes place in the Nightmare worldspaces
start: Speak to Ralforn at Green-Tip Cabin, a new location northeast of Ivarstead. He asks you to find his wife Gretska. There are no level or quest prerequisites, and LoreRim adds none.
related: [areas/nightmare-and-dream-realms.md, areas/the-rift-and-riften.md, mod-added/demon-of-dream.md, mod-added/heart-of-the-reach.md, mod-added/legends-of-aetherium.md, vanilla-changes/daedric-quests.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: high
updated: 2026-10-02
---

# Sleepwalking Into A Nightmare

A Daedric quest for **Vaermina** by TheLootist. You help **Ralforn** find his wife **Gretska**, who "has disappeared overnight". You then go into her nightmares and overcome them "to free her from the tendrils of a Daedric prince" [3]. The mod has one player quest, **Sleepwalking Into A Nightmare** (`aaaMBQuest`, Daedric type), and two new worldspaces: **The Nightmare** and the **Nightmare Of Bereavement** [1]. It is voiced, and the author says it has "multiple endings with different rewards" [3].

## Starting in LoreRim
- Speak to **Ralforn** at **Green-Tip Cabin**, "a new location north-east of Ivarstead". He asks you to help find Gretska [2][3]. The LoreRim site and the mod page give the same instruction [2][3].
- The quest is not start-game-enabled. Its only quest flag is "run once", so it begins through Ralforn's dialogue [1].
- **No LoreRim start gate.** None of the LoreRim plugins that touch the mod override the quest record. `Sleepwalking - Requiem Patch.esp` only changes items, NPCs, leveled lists, doors and one reference [4].
- No source states a recommended level.

## Quests
### Sleepwalking Into A Nightmare
- **Giver / trigger:** Ralforn, Green-Tip Cabin [1][3].
- **Where:** around Green-Tip Cabin, then a spot "somewhere in northern Skyrim" from Gretska's journal, then The Nightmare [1].
- **Steps (objective text):** [1]
  1. Find Gretska. Look for clues at her fishing spot, at her archery target and along the path. Search the knapsack and read her journal (the in-game title is misspelled *Gretska's Jounal*).
  2. Tell Ralforn you found the journal. Her nightmares "always start with falling asleep somewhere in northern Skyrim".
  3. Find the location from Gretska's nightmare. She is asleep there. Try to wake her, then find another way to wake her from the nightmare.
  4. Falling asleep there takes you into **The Nightmare**. Investigate the cave. In the **Awakening Chambers**, find a way to sleep on the bed.
  5. Loot the **Omen Of Anguish**, the **Omen Of Self Doubt** and the **Omen Of Bereavement**. All three are named enemies (NPC records). The plugin also defines a **Key To Anguish**, **Key To Self Doubt** and **Key To Bereavement**. That these keys come from the Omens is an inference.
  6. Overcome the three nightmares, in any order the objectives allow:
     - **Nightmare Of Bereavement:** kill the Werewolf that killed Gretska's father.
     - **Nightmare Of Anguish:** a prison nightmare with Guards of Anguish. It ends with "Tell Gretska's Mother you've fixed the Vase" and "Leave the nightmare".
     - **Nightmare Of Self Doubt.**
  7. Once "all the sconces in the awakening chambers are now lit", sleep on the Stone Bed.
  8. In the **Hall Of Awakening**, defeat **the Lotus**, a ghost. Speak with the statue, then accept or refuse Vaermina's offer.
- **Choices & outcomes:** [1]
  - **Accept:** "Kill Gretska". The journal reads "I have completed Vaermina's offer, becoming her champion." Vaermina tells you to "take my lullaby... And send Gretska to restless slumber". Her final line is "Now go, my champion, and let the nightmares of Tamriel become real." [1]
  - **Refuse:** wake Gretska. She meets you back at the cabin, where you speak with Ralforn and then with Gretska. Ralforn has no gold to give. Gretska gives you something that belonged to her father: "Take this, my father would have wanted you to have it." [1]
- **Rewards:** the mod page lists a bow and a ring as potential quest rewards [3]. The plugin has two reward leveled lists, `aaaMBLitemBowReward` (**Vaermina's Lullaby**) and `aaaMBLitemRingReward` (**Daybreak's Embrace**) [1]. That the bow goes to the Vaermina ending ("take my lullaby") and the ring to the Gretska ending is an inference from the dialogue (medium confidence) [1].

## Locations
- **Green-Tip Cabin:** a new home northeast of Ivarstead, where the quest starts [1][3].
- **The Nightmare** (worldspace `aaaMBWorld`): the main dream realm. It contains the **Awakening Chambers** and the boss room **The Hall Of Awakening** [1].
- **Nightmare Of Bereavement** (worldspace): the werewolf nightmare [1].
- **Nightmare Of Anguish** and **Nightmare Of Self Doubt:** interior nightmare cells [1].
- LoreRim ships *The Nightmare Paper Map for FWMF by Limon*, a paper world map for The Nightmare worldspace [5].

## Rewards & notable items
- **Vaermina's Lullaby** (bow): enchanted with *Vaermina's Nightmare*, a paralysis effect plus Shock Damage [1].
- **Daybreak's Embrace** (ring): Regenerate Health, Magicka and Stamina [1].
- **Helmets:** three lines, each in light and heavy versions [1]:
  - **Helm Of Night's Guard:** Fortify Light or Heavy Armor, Blocking and Health.
  - **Helm Of Night's Edge:** Fortify One-Handed, Two-Handed and Archery.
  - **Helm Of The Night Haunter:** Fortify Sneak, Pickpocket and Lockpicking.

  The plugin also has a **Hollow Essence Gem** and an **Essence** of each helmet line, which suggests you choose your helmet by filling the gem. That mechanism is not documented in the sources read (unverified) [1].
- **Spells:** *Detect Sleeping* and *Encase In Nightmare*, a soul-trap spell with Lesser and Greater versions [1]. This matches "2 new spells (one has three power levels)" [3].
- **Lotus gear** (worn by the boss): LotusHelm, Black Robes, Lotus Bow and Lotus Arrow [1][4].

## LoreRim notes
- **Requiem - unleveled rewards:** `Sleepwalking - Requiem Patch.esp` cuts the six helmet lists and the bow and ring reward lists to one entry each: the top tier (`…40`) item [4]. In the base mod these lists scale with level, with tiers at 1, 20/25, 30 and 40 [1].
- **Requiem - weaker enchantments:** the same patch lowers the top-tier helmet and ring enchantments to the base mod's level-1 magnitudes. For example, the ring's three regeneration effects drop from 80 to 30, and Heavy Night's Guard drops from Heavy Armor 100 / Block 30 / Health 50 to 50 / 15 / 20 [1][4]. The bow's top-tier enchantment is not overridden [4].
- **Other patch changes:** the patch also overrides the quest NPCs (Ralforn, Gretska, the Omens, the Lotus and Guard Of Anguish), the storm atronach leveled list and the Eldritch doors. These are presumably Requiem stat and lock changes; the individual values were not checked [4].
- **Enigma voice patch:** replaces 25 Vaermina voice lines with Enigma-series voice files. Sound only, no plugin [6].
- An Occlusion addon and Lux and Lux Orbis lighting patches also ship [5].

## Related
- [areas/nightmare-and-dream-realms.md](../areas/nightmare-and-dream-realms.md)
- [areas/the-rift-and-riften.md](../areas/the-rift-and-riften.md)
- [mod-added/demon-of-dream.md](demon-of-dream.md) (another Vaermina dream quest)
- [vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md) (vanilla Vaermina quest *Waking Nightmare*)
- [mod-added/heart-of-the-reach.md](heart-of-the-reach.md), [mod-added/legends-of-aetherium.md](legends-of-aetherium.md) (same author)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest name, flags, objectives, journal, dialogue lines, NPCs, cells, locations, worldspaces, items, enchantments, leveled lists | LoreRim install: `NightmarePlane.esp` QUST/INFO/LCTN/WRLD/CELL/ARMO/WEAP/ENCH/LVLI records (profile Default) | mod v1.0.9.0 | 2026-10-02 |
| 2 | LoreRim start instruction | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 3 | premise, endings, start location, reward list | [Nexus mod page 141047](https://www.nexusmods.com/skyrimspecialedition/mods/141047) via meta.ini cache | 2025-02-12 (nexusLastModified) | 2026-01-11 cache |
| 4 | Requiem patch scope: unleveled lists, enchantment values, NPC/door overrides | LoreRim install: `Sleepwalking - Requiem Patch.esp` (LoreRim - xEdit64 Output) records | file dated 2025-09-04 | 2026-10-02 |
| 5 | patches and add-ons shipped | LoreRim install: profile Default `plugins.txt` / `modlist.txt`; meta.ini of The Nightmare Paper Map for FWMF (Nexus 143113) | 2025-02-28 (nexusLastModified) | 2026-10-02 |
| 6 | Enigma voice patch contents | LoreRim install: `Enigma - Sleep Walking Into A Nightmare Patch/Sound/Voice/NightmarePlane.esp/aaaMBCrVaerminaVoice/` (25 .wav files); meta.ini (Nexus 33084) | 2026-01-25 (nexusLastModified) | 2026-10-02 |
