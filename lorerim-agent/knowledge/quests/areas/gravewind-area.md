---
id: gravewind-area
title: Gravewind — the Pine-shrouded Cemetery and the Realm of Gravewind (Falkreath)
kind: area
category: new-lands
summary: Gravewind adds an abandoned cemetery homestead north-west of Roadside Ruins in Falkreath that drops you into Gravewind, a pocket realm of undead with a forest, a mausoleum, the Pit of Rejects, an Undercity and a temple. In LoreRim the homestead is locked; its key comes from Vighar during Falkreath's "Dark Ancestor" quest.
mods:
  - name: Gravewind - ESMIFIED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/129582
    version: 1.2.0.0
  - name: Gravewind - Landscape Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/129582
    version: 1.0.0.0
  - name: LoreRim - xEdit64 Output (LoreRim Gravewind Start Tweak.esp)
    nexus: n/a (LoreRim-generated)
    version: n/a
plugins: [FalkreathShades.esp, FalkreathShades0.esp, GravewindLandscapePatch.esp, LoreRim Gravewind Start Tweak.esp, GravewindBetterSuitedPatch.esp]
quests: [In the Pines, Lost in the Woods, Lost to Oblivion]
locations: [Pine-shrouded Cemetery, Cemetery Homestead, Gravetender's House, Herrah's Catacombs, Gravewind, Gravewind Apothecary, Gravewind Mausoleum, Mausoleum Hall, Mausoleum Throne, Hall of Rebirth, Corpse Fissure, Vessel Incubation Hall, Sunken Hatching Grounds, Gravewind Depths, Pit of Rejects, The Undercity, Gravewind Study, Gravewind Temple, The Way Home]
region: Falkreath Hold (entrance just north-west of Roadside Ruins); Gravewind is its own worldspace
start: In LoreRim, get the Cemetery Homestead Key from Vighar (the vampire in Falkreath's "Dark Ancestor" quest from Dengeir of Stuhn), then enter the abandoned homestead north-west of Roadside Ruins. You are trapped once inside, so prepare.
level_hint: "Author: 25ish+, 'probably an emphasis on +'"
related: [mod-added/gravewind.md, areas/falkreath-hold.md, vanilla-changes/side-quests-and-misc.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: high
updated: 2026-10-02
---

# Gravewind — the Pine-shrouded Cemetery and the Realm of Gravewind (Falkreath)

Gravewind is "an expansive multi-layered dungeon littered with unique forms of undead". It has abandoned homesteads, catacombs, traps, and "an underground city populated entirely by ghosts and golems" [2]. The story ties a Nordic legend of the enemy god Orkey to the Wraithmother, a forgotten witch who conjured an afterlife realm [2]. It ships three new schools of magic (Scarlet Lightning, Heavy Fire, Shadow), unique bosses and two endings [1][2].

## Starting in LoreRim
- **Mod default:** "Travel just northwest of the Roadside Ruins in Falkreath, and enter the abandoned homestead." The author warns "you WILL be trapped from the moment the quest begins, so stock up on supplies beforehand" [2].
- **LoreRim gate (install):** `LoreRim Gravewind Start Tweak.esp` changes three things [3]:
  - It adds a key, **Cemetery Homestead Key**.
  - It locks the homestead's exterior door so the key is required.
  - It overrides the vanilla Falkreath quest **"Dark Ancestor"** (`FreeformFalkreathQuest03B`) so the **Vighar** alias carries 1× Cemetery Homestead Key.
- **The LoreRim site agrees:** "Get the key from Vighar the vampire (from the Falkreath quest)" [1].
- **Vanilla context:** Dark Ancestor is given by Dengeir of Stuhn in Falkreath. Vighar, his vampire ancestor, is found at Bloodlet Throne, "a military fort hidden in the mountains southwest of Helgen" [4].
- **So:** do Dark Ancestor, loot the key from Vighar, then go to the homestead north-west of Roadside Ruins.
- **Followers:** take this one alone. Followers have trouble keeping up [2].

## Quests
Full walkthrough: `mod-added/gravewind.md`.

### In the Pines
- **Steps:** explore the strange homestead; find a way out [5].
- **Journal:** the front door locks behind you. The basement turns into flooded catacombs (**Herrah's Catacombs**), where you pull a lever, beat the boss and take the key. Unlocking the door puts you in "a landscape that doesn't match the one I came from" [2][5].

### Lost in the Woods
- **Steps:** find a way home → catch up with the author of the notes → escape Gravewind [5].
- **Route** [2]:
  1. Forest, then the Mausoleum. Complete both paths in either order:
     - Right path: the Corpse Fissure boss, the **Walking Mound**, drops the Token of Rebirth.
     - Left path: the **Awakened Vessel** in the Sunken Hatching Grounds.
  2. Open the coffin and fight the **Wraithmother** in her throne room; take the Homeward Idol.
  3. Cross the **Pit of Rejects** (dodge Grave Guardian darts).
  4. Ride the elevator up to the burning **Undercity**, where the note-writer Richter waits by the temple.
  5. Go through the **Gravewind Study** and its hidden shrine to open the **Gravewind Temple**.
  6. Defeat the Sentinel; a red portal returns you to Tamriel [2][5].
- **Choice:** taking Richter's **Fingerbone Necklace** into the temple decides the ending [2]:
  - Take it in: Richter's ending, but you lose most "ruler of Gravewind" perks.
  - Leave it outside: you become lord of Gravewind.
- **Reward (journal):** "Herrah has been consumed by the void, leaving everything with me. Lifesurge, her Axe, her life-stealing Scarlet Cloak... And Gravewind" [5].

### Lost to Oblivion
- **Trigger:** Richter's-ending postgame. Activate **Arkay's Light** to collapse the realm and free the souls, then "Escape before it's too late" [2][5].
- **Outcome:** "The house is gone, as if none of it ever happened. Gravewind is no more." You gain permanent protection against undead damage [2][5].

## Locations
From `FalkreathShades.esp` LCTN/CELL/WRLD records [5]. Order follows the author's guide [2].
- **Pine-shrouded Cemetery** / **Gravetender's House** → **Cemetery Homestead** (Skyrim side), with **Herrah's Catacombs** below [5].
- **Gravewind** (worldspace): a mirror-forest with blocked-off houses [2]. **Unbarred House** and **Gravewind Apothecary** (alchemy shop in the wheat-farm house) are inside [2][5]. Shade merchants and a court mage sell goods and spells (dialogue "What spells do you offer?") [5].
- **Gravewind Mausoleum** [5]:
  - **Mausoleum Hall**, **Mausoleum Throne**.
  - Right path: **Hall of Rebirth** → **Corpse Fissure**.
  - Left path: **Vessel Incubation Hall** → **Sunken Hatching Grounds**.
- **Gravewind Depths** [5]: **Pit of Rejects** → **The Undercity** (wraiths revive once each) → **Gravewind Study** → **Gravewind Temple** → **The Way Home** / **The Void, Scuttling** (finale cells) [2].
- **Post-game:** balls of darkness teleport between the Mausoleum throne and the Undercity throne. As ruler you can safely store items in most containers, except the two shopkeepers' houses, which respawn [2].

## Rewards & notable items
- **Spells (author list)** [2]:
  - Scarlet Lightning: Spark of Life, Scarlet Shock, Scarlet Cloak, Lifesurge.
  - Heavy Fire: Heavy Flame, Overbearing Flames.
  - Shadow: Expel Shade, Expel Greater Spirit, Grasp Soul, Gravewind Servant, Gravewind Wisp.
  - Other: Conjure Walking Mound, Conjure Shade, Conjure Putrid Mass, Infuse Ingredient.
- **Herrah's Axe**; **Richter's gear** (unenchanted copies craftable with an Amulet of Arkay and Steel Plate smithing) [2].
- **Lordship ending:** Mark of the Tyrant (Illusion buff) or Mark of Benevolence (Conjuration buff) from the Undercity servants [2].
- **Torn journal page** (Pit of Rejects) unlocks a dialogue branch with Falion — topic "I found this in Gravewind... I think it belongs to you." [2][5].

## LoreRim notes
- **Start gate:** the locked homestead and Vighar key are LoreRim-specific [1][3]. Without Dark Ancestor you cannot enter.
- **Other installed patches:**
  - `Gravewind - Landscape Patch` (by the Gravewind author) [6].
  - A LoreRim-generated `GravewindBetterSuitedPatch.esp`, a Lux patch, and Draugr retextures [6].
- Under Requiem, take the author's "25ish+" advice seriously (assessment, unverified).

## Related
- `mod-added/gravewind.md`
- `areas/falkreath-hold.md`
- `vanilla-changes/side-quests-and-misc.md` (Dark Ancestor)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | LoreRim start (key from Vighar), feature summary | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 2 | default start, guide, endings, spells, level hint | [Nexus 129582](https://www.nexusmods.com/skyrimspecialedition/mods/129582) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 3 | Cemetery Homestead Key, locked door, Dark Ancestor/Vighar alias override | LoreRim install: `LoreRim - xEdit64 Output/LoreRim Gravewind Start Tweak.esp` KEYM/REFR/QUST records | n/a | 2026-10-02 |
| 4 | Dark Ancestor giver (Dengeir of Stuhn), Vighar at Bloodlet Throne | [UESP — Dark Ancestor](https://en.uesp.net/wiki/Skyrim:Dark_Ancestor) | n/a | 2026-10-02 |
| 5 | quest names, objectives, journal, LCTN/CELL/WRLD/DIAL names | LoreRim install: `FalkreathShades.esp` records | mod v1.2.0.0 | 2026-10-02 |
| 6 | installed patches | LoreRim install: `profiles/Default/modlist.txt`, `plugins.txt`; `Gravewind - Landscape Patch/meta.ini` | n/a | 2026-10-02 |
