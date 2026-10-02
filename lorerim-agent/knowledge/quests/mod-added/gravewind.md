---
id: gravewind
title: Gravewind
kind: mod-added
category: new-quests
summary: A three-quest undead dungeon crawl that starts at an abandoned homestead northwest of the Roadside Ruins in Falkreath. You are trapped in the realm of Gravewind until you finish it. In LoreRim the homestead door is locked, and the key is carried by the vampire Vighar from the vanilla quest Dark Ancestor.
mods:
  - name: Gravewind - ESMIFIED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/129582
    version: 1.2.0.0
  - name: Gravewind - Landscape Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/129582
    version: 1.0.0.0
  - name: Draugrs - SE by Xtudo - Gravewind - 2K
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/123225
    version: 4.9.0.0
  - name: LoreRim - xEdit64 Output (LoreRim Gravewind Start Tweak.esp, GravewindBetterSuitedPatch.esp)
    nexus: n/a (LoreRim-authored)
    version: n/a
plugins: [FalkreathShades.esp, FalkreathShades0.esp, GravewindLandscapePatch.esp, LoreRim Gravewind Start Tweak.esp, GravewindBetterSuitedPatch.esp, Lux - Gravewind patch.esp]
quests: [In the Pines, Lost in the Woods, Lost to Oblivion]
locations: [Cemetery Homestead, Pine-shrouded Cemetery, Gravetender's House, Gravewind Mausoleum, Gravewind Depths, Gravewind]
region: Falkreath Hold (northwest of the Roadside Ruins); the quest itself takes place in the Gravewind worldspace
start: "In LoreRim, first get the Cemetery Homestead Key from Vighar, the vampire you are sent to kill in the vanilla quest Dark Ancestor (from Dengeir of Stuhn in Falkreath, at Bloodlet Throne). Then unlock the Cemetery Homestead northwest of the Roadside Ruins and go inside. You are trapped as soon as you enter."
level_hint: "25+"
related: [areas/gravewind-area.md, areas/falkreath-hold.md, vanilla-changes/side-quests-and-misc.md, mod-added/undeath.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8]
confidence: high
updated: 2026-10-02
---

# Gravewind

Gravewind is a dungeon-crawl quest mod built around Orkey, Arkay's Law and a forgotten priestess, the Wraithmother. You enter the realm of Gravewind, a "multi-layered dungeon" of undead with homesteads, catacombs, traps and an underground city of ghosts and golems, and try to get home without your soul being enthralled [5]. It ships as three quests, In the Pines, Lost in the Woods and Lost to Oblivion, plus the Gravewind worldspace [1]. The quest has two endings: you either rule Gravewind as "a lord of lost undead" or collapse the realm and free the souls trapped in it [5].

## Starting in LoreRim
- **The mod's own start:** "Travel just northwest of the Roadside Ruins in Falkreath, and enter the abandoned homestead." The author warns that "you WILL be trapped from the moment the quest begins, so stock up on supplies beforehand." [5]
- **LoreRim gate: you need a key.** LoreRim's patch `LoreRim Gravewind Start Tweak.esp` locks the homestead's exterior door. The lock needs a new key, the **Cemetery Homestead Key**. The original `FalkreathShades.esp` door has no lock [1][2].
- **Where the key is:** the same patch adds the Cemetery Homestead Key to the **Vighar** alias of the vanilla quest **Dark Ancestor** (`FreeformFalkreathQuest03B`, objective "Destroy the vampire Vighar") [2]. The LoreRim site says the same thing: "Get the key from Vighar the vampire (from the Falkreath quest)." [4]
- **How to reach Vighar:** Dark Ancestor is given by **Dengeir of Stuhn** in Falkreath. You must first complete *Some Light Theft* for him. Vighar is at **Bloodlet Throne**, southwest of Helgen. UESP lists the required level as 10, and the quest becomes unavailable if Dengeir becomes Jarl of Falkreath [6].
- **Inference (medium confidence):** the key is attached to a quest alias rather than to Vighar's base inventory. Vighar most likely carries it only while Dark Ancestor is running, so take the quest from Dengeir before you kill him [2][6].
- **LoreRim warning note:** LoreRim also places a note titled **Scrawled Warning** outside the homestead. It reads: "The Order of Arkay has been authorized by the city of Falkreath to carry out research within this building… Do not enter." [3]
- **Recommended level:** "25ish+. Probably an emphasis on +." [5] LoreRim adds no level gate of its own [2].
- **Go alone:** the author says followers "have trouble keeping up with you throughout Gravewind" [5].

## Quests
### In the Pines
- **Giver / trigger:** entering the abandoned homestead (`GRVEMainQuest01`) [1].
- **Where:** Cemetery Homestead and its basement, which leads to a flooded catacomb [1][5].
- **Steps:** 1. Explore the strange homestead. 2. Find a way out. The front door locks behind you and the basement is a dead end, so you have to find a key [1]. The guide's route: read the book upstairs, take the basement door that appears, return upstairs to find the front door locked, go back down into the catacombs, pull the lever, defeat the boss and take the key [5].
- **Outcome:** you leave the house "only to discover a landscape that doesn't match the one I came from." [1]

### Lost in the Woods
- **Giver / trigger:** follows In the Pines (`GRVEMainQuest02`) [1].
- **Steps (objectives):** 1. Find a way home. 2. Catch up with the author of the notes. 3. Escape Gravewind [1].
- **Walkthrough outline:** [5]
  1. **Forest and Mausoleum:** in the Gravewind forest, the house with the wheat farm is an alchemy shop. The mausoleum is opposite the farm. Both of its wings must be cleared, in either order.
  2. **Right-hand path:** leads to the **Corpse Fissure**. Kill the **Walking Mound** and take the **Token of Rebirth**.
  3. **Left-hand path:** leads to the **Sunken Hatching Grounds**. Kill the **Awakened Vessel**.
  4. **The Coffin:** the coffin at the end of the Mausoleum Hall opens. Unlock the door with the Token of Rebirth, kill the **Wraithmother** in her throne room and take the Homeward Idol.
  5. **Pit of Rejects:** cross the tar pit by its cages while Grave Guardians shoot darts at you. An altar on a side island holds a torn journal page for a later bonus.
  6. **The Undercity:** the wraiths here revive once after death. Meet the note-writer, Richter, at the top of the temple stairs.
  7. **Gravewind Study:** read *On Mortality* and the *Prayer to Orkey*, then activate the totem in the hidden shrine to open the temple.
- **Journal milestones:** You find "the writer of the notes, dead" in front of the Temple and must close a barrier from a building opposite it. You defeat the Sentinel, but "the Wraithmother dismounted it and disappeared". The quest ends with "I'm back in Tamriel. Herrah has been consumed by the void, leaving everything with me. Lifesurge, her Axe, her life-stealing Scarlet Cloak... And Gravewind." [1]
- **Key choice, the Fingerbone Necklace:** Richter offers it. If you carry it into the temple, you get his ending but miss most of the "ruler of Gravewind" perks. If you leave it behind, you get the full lordship. You can take it and drop it before entering the temple [5].

### Lost to Oblivion
- **Giver / trigger:** the post-game for the necklace ending (`GRVEDestroyRealm01`). You activate Arkay's Light, the "light left by Richter" [1][5].
- **Steps:** 1. Escape before it's too late. The realm falls "into the abyss", freeing the enthralled souls. The quest ends with "The house is gone… Gravewind is no more." [1]
- **Rewards:** "permanent protection against damage inflicted by undead opponents", plus a decorative trophy if you kill "the guy" [5].

## Locations
- **Cemetery Homestead:** the entry house (cell name). Its map marker is roughly 1.6 cells west-southwest of Evergreen Grove and about 2.75 cells northwest of the Roadside Ruins. These distances are derived from plugin coordinates [1][8].
- **Pine-shrouded Cemetery, Gravetender's House, Gravewind Mausoleum, Gravewind Depths:** the new LCTN location names [1].
- **Gravewind:** the new worldspace (`GRVECemeteryWorld`) [1].
- **Interior cells:** Herrah's Catacombs, Mausoleum Hall, Mausoleum Throne, Hall of Rebirth, Corpse Fissure, Vessel Incubation Hall, Sunken Hatching Grounds, Pit of Rejects, The Undercity, Gravewind Study, Gravewind Temple, The Way Home, The Void, Scuttling, Gravewind Apothecary and Unbarred House [1].

## Rewards & notable items
- **Ruler ending (no necklace in the temple):** you can demand offerings from Undercity servants, which grants **Mark of the Tyrant** (an Illusion buff). You can instead give them health for **Mark of Benevolence** (a Conjuration buff). Two servants can be turned into spells. You can also use Gravewind's containers [1][5].
- **Either ending:** you can teleport between the Mausoleum and Undercity thrones. You get the Conjure Putrid Mass and Conjure Shade tomes in the Mausoleum throne room. Expel Greater Spirit, Conjure Walking Mound and Grasp Soul are in the three boss arenas [5].
- **Spell schools:** [1][5]
  - Scarlet Lightning: Spark of Life, Scarlet Shock, Scarlet Cloak, Lifesurge.
  - Heavy Fire: Heavy Flame, Overbearing Flames.
  - Shadow: Expel Shade, Expel Greater Spirit, Grasp Soul, Gravewind Servant, Gravewind Wisp.
  - Other: Infuse Ingredient.
- **Gear:** Richter's enchanted **Arkayn Armor** and **Arkayn Mace**. Unenchanted versions can be crafted at a forge if you carry an Amulet of Arkay and have the Steel Plate smithing perk. Herrah's **Infused Battleaxe**, plus the **Unliving Visage** and **Fingerbone Necklace** [1][5].
- **Bonus:** if you took the torn journal page, Falion has a short dialogue branch about it [5].

## LoreRim notes
- **Start gate:** the locked door, the Vighar key and the Scrawled Warning note come from LoreRim's own patches, not from the Nexus mod [2][3][4].
- **Other changes in GravewindBetterSuitedPatch.esp:** it adds and edits object references in the Pit of Rejects and the Vessel Incubation Hall. What these do in game is unverified [3].
- **Landscape Patch:** `GravewindLandscapePatch.esp` overrides two rock/cliff statics from the mod [7].
- **Draugrs by Xtudo – Gravewind:** retextures the "Wraithmothers of Gravewind and Herrah" (assets only) [7].
- **Not in this list:** the import does not record LoreRim's Dark Ancestor edit as a vanilla-quest override. Plugin records are the evidence for it [2].
- **Mod page cautions:** set Object Fade high or use the author's non-animated sludge option. Mods that move the house are incompatible, for example Fabled Forests (one tree) [5].

## Related
- [areas/gravewind-area.md](../areas/gravewind-area.md)
- [areas/falkreath-hold.md](../areas/falkreath-hold.md)
- [vanilla-changes/side-quests-and-misc.md](../vanilla-changes/side-quests-and-misc.md) (Dark Ancestor)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal, locations, cells, items, spells, unlocked original door | LoreRim install: `FalkreathShades.esp` QUST/LCTN/CELL/REFR records (Gravewind - ESMIFIED, profile Default) | mod v1.2.0.0 | 2026-10-02 |
| 2 | locked door, Cemetery Homestead Key, key on the Vighar alias of Dark Ancestor | LoreRim install: `LoreRim Gravewind Start Tweak.esp` (mod folder "LoreRim - xEdit64 Output") | file dated 2025-09-04 | 2026-10-02 |
| 3 | Scrawled Warning note; Pit of Rejects / Vessel Incubation Hall edits | LoreRim install: `GravewindBetterSuitedPatch.esp` (LoreRim - xEdit64 Output) | file dated 2025-09-04 | 2026-10-02 |
| 4 | LoreRim start instruction (key from Vighar) | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 5 | start location, level, full guide, endings, spells, rewards | [Nexus mod page 129582](https://www.nexusmods.com/skyrimspecialedition/mods/129582) via meta.ini cache | 2024-11-24 (nexusLastModified) | 2026-01-11 cache |
| 6 | Dark Ancestor giver, prerequisite, Bloodlet Throne, level | [UESP — Skyrim:Dark Ancestor](https://en.uesp.net/wiki/Skyrim:Dark_Ancestor) | n/a | 2026-10-02 |
| 7 | landscape patch / Xtudo patch contents | LoreRim install: `GravewindLandscapePatch.esp` records; meta.ini of "Draugrs - SE by Xtudo - Gravewind - 2K" (Nexus 123225) | 2026-01-22 (nexusLastModified) | 2026-10-02 |
| 8 | relative position of the homestead | Derived: map-marker coordinates in `FalkreathShades.esp` vs `Skyrim.esm` markers | n/a | 2026-10-02 |
