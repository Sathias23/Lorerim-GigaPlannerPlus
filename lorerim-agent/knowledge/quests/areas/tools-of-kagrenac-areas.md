---
id: tools-of-kagrenac-areas
title: The Tools of Kagrenac — Rkulftzul, the Ayleid Border Ruins and the Silent Passage
kind: area
category: dungeons
summary: The Tools of Kagrenac adds Sunder's sealed vault Rkulftzul, three Ayleid ruins along Skyrim's southern border with Cyrodiil (Aba-Malatar, Oio-Lalor, Atalatar) holding the Bal am as Aedra stones, and, through a portal in Blackreach, the Silent Passage worldspace with the Dwemer Silent Ruins where the finale happens. Starts by courier after Arniel's Endeavor (Keening) and The Way of the Voice.
mods:
  - name: The Tools of Kagrenac ESMIFIED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/14168
    version: 1.62.0.0
  - name: Tools of Kagrenac - Forgotten Cities Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/92206
    version: f1.01
plugins: [Tools of Kagrenac.esp, Tools of Kagrenac - Forgotten Cities patch.esp]
quests: [Kagrenac's Tools, Lost Heritage, My Precious, Vivec's Trial of Wisdom, Darkest Depths]
locations: [Rkulftzul, Sealed Vault, Aba-Malatar, Oio-Lalor, Atalatar, Silent Passage, Silent Ruins, Silent Ruin, Silent Antechamber, Silent Halls, Silent Storeroom, Silent Chamber]
region: Southern border of Skyrim (Ayleid ruins), Blackreach portal → Silent Passage worldspace; quest stops in Markarth, the College of Winterhold, Raven Rock and Nchardak
start: Finish Arniel's Endeavor (keep Keening in your inventory) and The Way of the Voice; a few days later a courier brings an anonymous note sending you to Mathis Valen at the Silver-Blood Inn, Markarth.
related: [mod-added/tools-of-kagrenac.md, vanilla-changes/college-of-winterhold.md, vanilla-changes/dragonborn.md, areas/solstheim.md, areas/the-forgotten-city-zenithar.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: high
updated: 2026-10-02
---

# The Tools of Kagrenac — Rkulftzul, the Ayleid Border Ruins and the Silent Passage

The Tools of Kagrenac brings back Sunder and Wraithguard and restores Keening (from Arniel Gane's College quests) to its Morrowind-era power. It is fully voiced (300+ lines) with "sprawling new dungeons" [2]. The plugin adds six new locations and one worldspace, **Silent Passage** [3]. The quest also routes you through existing places: Markarth's Silver-Blood Inn, the College's Hall of Attainment and Arcanaeum, Raven Rock's Retching Netch, Nchardak, and Blackreach [3].

## Starting in LoreRim
- **Requirements** [1][2]:
  - Obtain **Keening** by finishing Arniel Gane's questline (*Arniel's Endeavor*).
  - Finish **The Way of the Voice**.
- **Trigger:** a few in-game days later a courier delivers a letter [1][2]. Keening must be in your inventory; it becomes a quest item when the mod starts [2].
- The LoreRim site gives the same conditions [1]. No LoreRim-specific override of the start was found in the install [6].
- **Alternate start:** the mod's MCM has an "Alternate Start Check" that bypasses the requirements [2]. LoreRim ships no preset for it (not found in `LoreRim - MCM and INI Settings`) [6].
- **Courier fix:** LoreRim ships *Tools of Kagrenac - Forgotten Cities Patch*. It edits the vanilla courier dialogue (`WICourierDeliveries`) so Tools of Kagrenac and Forgotten City letters are delivered correctly [6].

## Quests
Full walkthrough: `mod-added/tools-of-kagrenac.md`.

### Kagrenac's Tools (main)
- **Steps (objectives)** [3]:
  1. Read the Anonymous Note.
  2. Meet **Mathis Valen** at the Silver-Blood Inn, Markarth.
  3. Speak to **Vonos Dreloth** at the College of Winterhold; his cursed key opens Sunder's hiding place.
  4. Speak to **Yassour Tansumiran** in Raven Rock. He says Wraithguard was taken to the Dwemer ruins of **Nchardak**, "Directly East, away from Raven Rock".
  5. Acquire **Sunder** and **Wraithguard**.
  6. Find three **Bal am as Aedra** stones in "Ayleid ruins near the Cyrodilic border".
  7. Return to Mathis.
  8. Travel to **Blackreach** and enter the mysterious portal.
  9. Find the Dwarven ruins and meet Mathis within.
  10. Defeat Mathis Valen and both bodyguards. Mathis is revealed as "the leader of the remnants of the Sixth House".
  11. Restore power to the tools at the ancient pedestal.
- **Outcome:** "The Tools of Kagrenac have lastly restored to their former glory!" [3].

### Lost Heritage
- Find Vonos's missing ring [3]. The ring spawns in one of five spots in the **Arcanaeum** [2]:
  - Urag's desk.
  - The central right table.
  - Under books on the far right.
  - In a cup on the left table.
  - Under a bench near the entrance.

### My Precious
- Optional: retrieve Wraithguard for Yassour and return it to him [3].

### Vivec's Trial of Wisdom
- In **Rkulftzul, Sealed Vault**: find the three Stanzas of Kagrenac, place them, and disable the barrier [3].
- Hints: the Sermons of Vivec volumes at the entrance; words 349/129/56 of Sermons 1/13/29. The combination is **348** [2].

### Darkest Depths
- In **Oio-Lalor**: lower the western and eastern portcullises, find the Main Chamber key, enter, and defeat the **Ayleid Lich** [3].

## Locations
From `Tools of Kagrenac.esp` LCTN/CELL/WRLD records [3]:
- **Rkulftzul, Sealed Vault**: Sunder's vault. A reviewer describes "a huge chamber full of lava", with Sunder at the end of a metal walkway [4]. Its outside location is not stated in the sources read. The cursed key comes from Vonos at the College [3].
- **Ayleid ruins** along "the southern edge of the map, Skyrim's border with Cyrodiil" [4]. Each holds a Bal am as Aedra stone [5]:
  - **Aba-Malatar** (cells *Aba-Malatar, Sacred Grove* and *Aba-Malatar, Sealed Sanctum*): in the south-eastern corner [3][4].
  - **Oio-Lalor** (cells *Oio-Lalor, The Labyrinthian*, *Depths of Oio-Lalor* and *Oio-Lalor, Main Chamber*): the Ayleid Lich, with the Ayleid Lich Helmet [3]. The Main Chamber stone has collision issues; knock it off its pedestal with a projectile [5].
  - **Atalatar**: an LCTN with no interior cell; a reviewer notes it is "outside" [3][4].
- **Silent Ruin** (a Blackreach cell, `BlackreachZcell02`): portal room inside Blackreach [3][4].
- **Silent Passage** (worldspace): "a long outdoor path" to a large Dwemer ruin; journal: "an unfamiliar region not belonging to Skyrim" [3][4].
- **Silent Ruins** (LCTN): cells **Silent Antechamber** (a colossal lift — "no way down but to jump below"), **Silent Halls**, **Silent Storeroom** and **Silent Chamber**. The Mathis fight and the restoration pedestal are here [3].
- **Existing locations used:** Silver-Blood Inn (Markarth), Hall of Attainment and The Arcanaeum (College of Winterhold), The Retching Netch (Raven Rock), Nchardak (east of Raven Rock, per the journal) [3].

## Rewards & notable items
- **Sunder**, **Wraithguard** and restored **Keening**; each tool has a weaker and a full-power version [3][5].
- The three **Bal am as Aedra** stones can be taken back from their sockets after charging the tools [5].
- **Ayleid Lich Helmet**; "many new items, spells, and other treasures" [2][3].

## LoreRim notes
- No LoreRim start-gate change was found [1][6].
- Shipped extras: Forgotten Cities courier patch and Draugr retextures for ToK [6].
- No level hint is stated by the author or the LoreRim site. One reviewer played it at level 63 [4]. The finale is a three-enemy fight (Mathis plus two bodyguards) [3].

## Related
- `mod-added/tools-of-kagrenac.md`
- `vanilla-changes/college-of-winterhold.md` (Arniel's Endeavor), `vanilla-changes/dragonborn.md` / `areas/solstheim.md` (Raven Rock, Nchardak)
- `areas/the-forgotten-city-zenithar.md` (shared courier patch)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | LoreRim start conditions | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 2 | start requirements, alternate start, ring spots, vault code, scope | [Nexus 14168](https://www.nexusmods.com/skyrimspecialedition/mods/14168) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 3 | quest names, objectives, journal, LCTN/CELL/WRLD/NPC/item names | LoreRim install: `Tools of Kagrenac.esp` records | mod v1.62.0.0 | 2026-10-02 |
| 4 | Ayleid ruins on southern border, Aba-Malatar SE corner, Atalatar outdoors, lava vault, Blackreach portal → outdoor path | [Anna the Piper — Mod review: The Tools of Kagrenac](https://skyrim.annathepiper.org/2025/11/16/mod-review-the-tools-of-kagrenac/) | 2025-11-16 | 2026-10-02 |
| 5 | stones retrievable; Oio-Lalor collision workaround | [Legacy of the Dragonborn wiki (Fandom) — Bal am as Aedra](https://legacy-of-the-dragonborn.fandom.com/wiki/Bal_am_as_Aedra) (search snippet) | n/a | 2026-10-02 |
| 6 | installed patches; courier-patch record; no LoreRim MCM preset | LoreRim install: `Tools of Kagrenac - Forgotten Cities patch.esp` INFO record; `profiles/Default/modlist.txt`; `LoreRim - MCM and INI Settings` file listing | n/a | 2026-10-02 |
