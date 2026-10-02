---
id: miasma
title: Miasma
kind: mod-added
category: new-quests
summary: A fully voiced Solstheim quest. You help Haj-Xul of the An-Xileel hunt the Telvanni fugitive Zirath Ryon through an Abandoned Mine and the Ashbound Prison, then defeat the dragon priest Durvith. Rewards are nine Miasma spells and powers, including the shout Miasmic Breath, and Haj-Xul's Bow. Start it by speaking to Haj-Xul in the Retching Netch in Raven Rock.
mods:
  - name: Miasma
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/149879
    version: 1.1.6.1
  - name: LoreRim - xEdit64 Output (LoreRim - Miasma Patch.esp)
    nexus: n/a (LoreRim-authored)
    version: n/a
plugins: [Miasma.esp, LoreRim - Miasma Patch.esp, Lux - Miasma patch.esp]
quests: [Miasma]
locations: [The Retching Netch, Abandoned Mine, Ashbound Prison, Ashbound Depths, Ashbound Sanctum]
region: Solstheim (Ashlands near Raven Rock)
start: Speak to Haj-Xul in the Retching Netch in Raven Rock (Solstheim; requires the Dragonborn DLC area). There is no LoreRim start gate. Recommended level 20+.
level_hint: "20+"
related: [areas/solstheim.md, vanilla-changes/dragonborn.md]
sources: [1, 2, 3, 4, 5]
confidence: high
updated: 2026-10-02
---

# Miasma

Miasma is a fully voiced quest set in the Ashlands of Solstheim. You help **Haj-Xul**, an Argonian of the An-Xileel, capture **Zirath Ryon**, "a Telvanni wizard on the run for his past crimes against the Argonians" [3]. It adds one player quest, **Miasma**, two new locations (**Abandoned Mine** and **Ashbound Prison**), and nine Miasma spells and powers [1][3]. The author estimates it takes "between an hour and an hour and a half" [3].

## Starting in LoreRim
- Speak to **Haj-Xul** at **The Retching Netch** in Raven Rock, Solstheim [1][2][3]. The journal opens with: "I met an Argonian called Haj-Xul at The Retching Netch in Raven Rock… hired me to assist him in capturing a criminal from House Telvanni" [1].
- **Level:** "at least level 20, as the quest is scaled accordingly to the rest of the Dragonborn DLC" [2][3].
- **No LoreRim start gate.** LoreRim's `LoreRim - Miasma Patch.esp` is a compatibility and balance patch (see LoreRim notes) and does not touch the quest record [4].
- You need to be able to reach Solstheim. See [vanilla-changes/dragonborn.md](../vanilla-changes/dragonborn.md) for how LoreRim handles that.

## Quests
### Miasma
- **Giver / trigger:** Haj-Xul, The Retching Netch (`RE01MiasmaQst`) [1].
- **Where:** Raven Rock → a wreck → a reaver hideout → Abandoned Mine → Ashbound Prison (with Ashbound Depths and Ashbound Sanctum) [1].
- **Steps (objective text):** [1]
  1. Follow Haj-Xul, then speak with him.
  2. Look for clues in the wreckage and show Haj-Xul what you've found.
  3. Investigate the reaver hideout and check on the Prisoner. The freed captive is the Argonian **Catches-Many-Fish** [1][3].
  4. Talk to Haj-Xul, search the cave, and bring the notes to Haj-Xul.
  5. Find Zirath Ryon, confront him, and defeat him.
  6. Find a way out. The exit locks behind you in the depths of the Ashbound Prison.
  7. Defeat **Durvith**, "the dragon priest who lured him to Solstheim in the first place".
  8. Return to Haj-Xul.
- **Outcome / rewards:** you secure "the power of Miasma". Haj-Xul gives you "his personal bow" (**Haj-Xul's Bow**) and names you "a friend of the An-Xileel" [1].
- **Boss fight:** the Durvith encounter (`RE01PriestFight`) teleports the priest to a balcony at two health breakpoints and spawns two waves of draugr [1].

## Locations
- **The Retching Netch** (Raven Rock): quest start [1].
- **Abandoned Mine:** a new location. Its map marker is near the vanilla Highpoint Tower marker (derived from coordinates) [1][5].
- **Ashbound Prison:** a "large nordic ruin previously buried under the ash". Its map marker is about 1.7 cells from Raven Rock's marker (derived). The interior includes **Ashbound Depths** and **Ashbound Sanctum** [1][3][5].
- **Named foes:** **Ulzaam, the Warden** (drops the Axe of the Warden), the **Sanctum Guardian**, Zirath Ryon and his Miasmic Thralls, and Durvith [1].

## Rewards & notable items
Spell locations are from the mod page [3]:
- **Miasmic Spray** (Novice Destruction): end of the Abandoned Mine, on Zirath Ryon's desk.
- **Miasmic Bolt** (Apprentice): a side room near the Ashbound Prison entrance.
- **Miasmic Rune** (Apprentice): the catacomb section of the Ashbound Prison.
- **Miasmic Cloud** and **Miasmic Stream** (Adept): in the Ashbound Depths.
- **Miasmic Cloak** (Adept): halfway through the Ashbound Sanctum.
- **Miasmic Missile** (Expert): a pedestal next to Durvith's sarcophagus.
- **Conjure Miasmic Thrall:** carried by Zirath Ryon.
- **Miasmic Breath** (shout): in Durvith's room. Its Words of Power are *Dur*, *Naak* and *Dir* [1][3].

Other notes and gear:
- "All Miasma damage stacks with itself… and is only reduced by magic resistance, not poison resistance" [3].
- **Gear:** Haj-Xul's Bow, Axe of the Warden, and the Durvith mask (an acolyte-mask armor named "Durvith", which can be tempered) [1][3].

## LoreRim notes
- **LoreRim - Miasma Patch.esp** overrides the mod's magic effects, spells, spell tomes, the Durvith mask and its tempering recipe, Haj-Xul, Zirath Ryon and Catches-Many-Fish. Its masters include Requiem and the Requiem Magic and Weapons/Armor Redone plugins, so these are presumably Requiem balance changes [4].
- The same patch also forwards compatibility with Striding Silt Strider (Raven Rock silt strider references) and Locked Chests Have Keys, and edits the `WICastDragonBornShouts` form list [4].
- The author's optional **Xelzaz** integration patch is not in LoreRim's mod list [3][4].
- A Lux lighting patch ships [4].

## Related
- [areas/solstheim.md](../areas/solstheim.md)
- [vanilla-changes/dragonborn.md](../vanilla-changes/dragonborn.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest, objectives, journal, NPCs, cells, locations, items, shout words, map markers | LoreRim install: `Miasma.esp` records (profile Default) | mod v1.1.6.1 | 2026-10-02 |
| 2 | LoreRim start instruction, level | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 3 | premise, start, level, spell locations, length, Xelzaz patch | [Nexus mod page 149879](https://www.nexusmods.com/skyrimspecialedition/mods/149879) via meta.ini cache | 2026-01-31 (nexusLastModified) | 2026-02-05 cache |
| 4 | LoreRim patch scope; mod list | LoreRim install: `LoreRim - Miasma Patch.esp` (LoreRim - xEdit64 Output) records; profile `modlist.txt` / `plugins.txt` | file dated 2025-09-04 | 2026-10-02 |
| 5 | marker positions relative to vanilla markers | Derived: map-marker coordinates in `Miasma.esp` vs `Dragonborn.esm` markers | n/a | 2026-10-02 |
