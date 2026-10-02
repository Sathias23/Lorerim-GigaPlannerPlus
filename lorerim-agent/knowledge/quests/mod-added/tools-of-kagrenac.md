---
id: tools-of-kagrenac
title: The Tools of Kagrenac
kind: mod-added
category: new-quests
summary: A voiced questline that brings Sunder and Wraithguard back to Skyrim and restores all three of Kagrenac's Tools. It starts with a courier's Anonymous Note a few days after you claim Keening from Arniel's Endeavor, provided you have also finished The Way of the Voice. It runs through Markarth, the College, Raven Rock, Nchardak, three Ayleid ruins on the Cyrodiil border, and a Sixth House plot beyond a portal in Blackreach.
mods:
  - name: The Tools of Kagrenac ESMIFIED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/14168
    version: 1.62.0.0
  - name: Tools of Kagrenac - Forgotten Cities Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/92206
    version: f1.01
  - name: Draugrs - SE by Xtudo - Tools of Kagrenac 2K
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/123225
    version: 4.6.0.0
plugins: [Tools of Kagrenac.esp, Tools of Kagrenac - Forgotten Cities patch.esp, JKs College of Winterhold - Tools of Kagrenac Patch.esp, Navigator - Tools of Kagrenac Patch.esp, Northern Roads - Tools of Kagrenac patch.esp]
quests: [Kagrenac's Tools, Lost Heritage, My Precious, Vivec's Trial of Wisdom, Darkest Depths]
locations: ["Rkulftzul, Sealed Vault", Aba-Malatar, Oio-Lalor, Atalatar, Silent Passage, Silent Ruins]
region: Multi-region — Markarth (the Reach), College of Winterhold, Raven Rock and Nchardak (Solstheim), Ayleid ruins near the Cyrodiil border, Blackreach
start: Finish the College of Winterhold side questline Arniel's Endeavor (and keep Keening) and the main quest The Way of the Voice. A couple of in-game days later, a courier brings an Anonymous Note asking you to meet Mathis Valen at the Silver-Blood Inn in Markarth. You can skip the requirements with the mod's MCM "Alternate Start Check" toggle.
related: [vanilla-changes/college-of-winterhold.md, vanilla-changes/main-quest-and-alternate-start.md, vanilla-changes/dragonborn.md, vanilla-changes/creation-club.md, mod-added/the-forgotten-city.md, areas/tools-of-kagrenac-areas.md, areas/the-reach-and-markarth.md, areas/solstheim.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8]
confidence: high
updated: 2026-10-02
---

# The Tools of Kagrenac

The Tools of Kagrenac brings back the rest of Lord Kagrenac's artifacts. **Keening** is already in vanilla Skyrim at the end of the College of Winterhold's *Arniel's Endeavor*; this mod adds **Sunder** and **Wraithguard** and lets you restore all three to "their former glory" [2]. The mod page describes it as fully voiced with 300+ lines of dialogue and "sprawling new dungeons" [2]. In LoreRim it is the source of Sunder and Wraithguard. LoreRim's Creation Club guide lists them under removed items and points to this quest instead [3].

## Starting in LoreRim
- **Requirements (mod default, restated by LoreRim):**
  1. Join the College of Winterhold and finish **Arniel's Endeavor**, obtaining **Keening**.
  2. Finish **The Way of the Voice**.
  3. "A couple of days" later, a courier delivers a letter (the **Anonymous Note**) and the quest begins [2][3].
- **Keep Keening in your inventory.** It turns into a quest item when the mod starts. If the courier never comes, the author's fix is to drop Keening, pick it up again, and leave the area [2].
- **Alternate start:** the mod's own MCM has an "Alternate Start Check" toggle. Turning it on starts the mod immediately (for example, the next time you pick up any item) and bypasses the College and main-quest requirements [2]. LoreRim's settings mod (*LoreRim - MCM and INI Settings*) contains no Tools of Kagrenac preset, so the mod's defaults apply unless you change them [6].
- **LoreRim-specific interactions:**
  - In LoreRim, *Arniel's Endeavor* records are overridden by **[LoreRim] Economy Overhaul** (MGRArniel01) and **College of Winterhold Quest Start Fixes** (MGRArniel03), so check the College file for how that questline behaves in LoreRim [7].
  - LoreRim ships a patch for **The Forgotten City**. Its only content is a `WICourierDeliveries` dialogue record, apparently so that the two mods' courier deliveries do not block each other (inferred from the contents) [6]. Mod 92206's author lists it among patches for "Requiem, Wildlander, Hidden Hideouts of Skyrim, Forgotten Cities" [5].
- **No LoreRim quest overrides:** no LoreRim output plugin overrides the `TOK_QUST_*` quest records [6].

## Quests
Quest names and objectives come from the plugin records [1].

### Kagrenac's Tools (main quest)
- **Giver / trigger:** the Anonymous Note from the courier [1]. Its text reads "Meet me at the Sliver-Blood Inn in Markarth" [8].
- **Steps:**
  1. Read the Anonymous Note, then meet **Mathis Valen** at the **Silver-Blood Inn in Markarth**. He tells you where the lost tools are [1].
  2. Find and speak to **Vonos Dreloth** at the **College of Winterhold**. He gives you a cursed key to Sunder's hiding place [1].
  3. Find and speak to **Yassour Tansumiran** in **Raven Rock**. A thief stole Wraithguard from him and took it to the Dwemer ruin of **Nchardak**, directly east of Raven Rock [1].
  4. Acquire **Sunder** and **Wraithguard** [1]. Sunder is in **Rkulftzul, Sealed Vault** (see *Vivec's Trial of Wisdom*) [1][4].
  5. Both tools are "severely weakened". Find three **Bal am as Aedra stones** in Ayleid ruins near the Cyrodilic border [1]. A 2025 reviewer names them **Aba-Malatar** (south-eastern corner), **Oio-Lalor**, and the outdoor ruin **Atalatar** [4].
  6. Return to Mathis Valen at the Silver-Blood Inn [1].
  7. Travel to **Blackreach** and find the entrance. Enter the mysterious portal, which leads to an "unfamiliar region not belonging to Skyrim". Find and enter the Dwarven ruins, which include a colossal Dwarven lift you must jump down [1].
  8. Meet Mathis Valen in the ruins. He turns out to be the leader of the remnants of the **Sixth House**, scheming to use the Tools to reclaim Morrowind [1].
  9. Defeat Mathis Valen and both of his bodyguards [1].
  10. Restore power to the tools at the ancient pedestal [1]. A prompt asks: "Do you wish to activate the pedestal to restore power to the Tools of Kagrenac?" [8]
- **Outcome:** the tools are restored, and the journal leaves you with "the fate of these tools" [1]. No later quest or branching ending was found in the records.

### Lost Heritage
- **Giver:** Vonos Dreloth (College of Winterhold) [1].
- **Steps:** find Vonos's missing ring, then return to him [1].
- **Where:** the ring spawns at random in one of five spots in the **Arcanaeum**:
  - Urag gro-Shub's desk
  - the right-side table in the centre
  - under a pile of books on the far right
  - in a cup on the far-left table nearest Urag's desk
  - under a bench near the entrance [2]

  LoreRim's `JKs College of Winterhold - Tools of Kagrenac Patch.esp` moves two of these spawn references (`TOK_WindRingRef_03` and `_05`) to fit JK's Arcanaeum interior [6]. Those reference names suggest the ring is the **Ring of the Wind** (inference) [6][8].

### My Precious
- **Giver:** Yassour Tansumiran (Raven Rock) [1].
- **Steps:** (Optional) Retrieve Wraithguard for Yassour, then (Optional) return to him [1].

### Vivec's Trial of Wisdom
- **Where:** the Sunder vault, **Rkulftzul, Sealed Vault**: a lava chamber with Sunder at the end of a metal walkway [1][4].
- **Steps:** 1) Find the three **Stanzas of Kagrenac**. 2) Place them on the receptacles. 3) Disable the magical barrier, using a number prompt titled "Vivec's Trial of Wisdom: Choose the number you want to enter." [1][8]
- **Puzzle hints (mod page):** read the journal at the end of the walkway first. The note's titles map to Sermons **1, 13 and 29** of the *36 Lessons of Vivec* found at the vault entrance. Take the 349th word of Sermon 1, the 129th of Sermon 13 and the 56th of Sermon 29. **The full answer is 348** [2]. A failed attempt raises the lava [4].

### Darkest Depths
- **Where:** **Oio-Lalor**: Oio-Lalor, The Labyrinthian; Main Chamber; Depths of Oio-Lalor [1][8].
- **Steps:** 1) Lower the western portcullis. 2) Lower the eastern portcullis. 3) Find the key to the Main Chamber. 4) Enter the Main Chamber. 5) Defeat the **Ayleid Lich** [1].

## Locations
- **Rkulftzul, Sealed Vault**: Sunder's vault [1].
- **Aba-Malatar** (cells: Sacred Grove, Sealed Sanctum), **Oio-Lalor** and **Atalatar**: the three Ayleid ruins near the Cyrodiil border that hold the Bal am as Aedra stones [1][4][8]. The Oio-Lalor note calls it "The Lost City of Oio-Lalor" [8].
- **Silent Passage** (worldspace) and **Silent Ruins**: the region and Dwemer ruin past the Blackreach portal. Its cells are Silent Ruin, Silent Halls, Silent Antechamber, Silent Storeroom, Silent Chamber and a Hall of Attainment [1][8]. LoreRim's Navigator patch edits the navmesh in the Blackreach cell named "Silent Ruin" that holds the portal entrance [6].
- Existing places the quest uses: Silver-Blood Inn (Markarth), The Arcanaeum (College), The Retching Netch (Raven Rock) and Nchardak (Solstheim) [1][8].

## Rewards & notable items
Item names come from the plugin [8]. Stats shown are LoreRim's winning records where they changed.
- **Sunder** (warhammer) and **Wraithguard** (gauntlets). Wraithguard in LoreRim (`LoreRim - Armor Merges.esp`): "Emits an impenetrable barrier that shields against both magical and physical harm and confers a 20% resistance to all elements. You may also wield Keening and/or Sunder." The mod's own text says 10% [6][8].
- **Keening**: the mod adds its own Keening weapon record [8]. Plugin messages "Keening has dealt you a mortal wound." and "Sunder has dealt you a mortal wound." suggest that wielding them without Wraithguard harms you. The exact mechanics are unverified [8].
- **Aetherial set** (Armor, Helmet, Gauntlets, Boots, Ring, Amulet) has set bonuses. LoreRim changes several [6][8]:
  - Aetherial Ring: +150 Armor with the full set, up from +50.
  - Aetherial Boots: +25 carry weight per piece, up from +10.
  - Aetherial Gauntlets: lose the "20% faster" two-handed clause.
  - Aetherial Amulet: armor penetration per piece, instead of improved smithing.
- **Ring of the Wind** ("Gradually increases movement speed by up to 50% while performing acrobatic feats") and **Madstone of the Ahemmusa** (grants the *Sound* spell) [8].
- **Sixth House Bell Hammer**, **Ayleid Staff of Chain Lightning**, **Ayleid Lich Helmet**, **Elven Shield** [8].
- *Shapeshift* spell tomes (Argonian, Breton, Dark Elf, High Elf, Imperial, Khajiit, Nord, Orc, Redguard, Wood Elf) and a *Lightning Breath* shout record [8].
- **Ayleid wells** grant "Boon of the Ayleids"; a depleted well recharges at midnight [8].
- In LoreRim, Requiem (Reqtificator) and Synthesis outputs override the mod's weapons (Sunder, Keening, Sixth House Bell Hammer, Ayleid Staff), so damage values follow Requiem [6].

## LoreRim notes
- LoreRim ships these Tools of Kagrenac patches [6]:
  - The Forgotten City courier patch (above)
  - `JKs College of Winterhold - Tools of Kagrenac Patch.esp`
  - `Navigator - Tools of Kagrenac Patch.esp`
  - `Northern Roads - Tools of Kagrenac patch.esp`
  - Lux and Lux Orbis lighting patches
- *Draugrs - SE by Xtudo - Tools of Kagrenac 2K* has no plugin. It is a texture and mesh option of Xtudo's draugr replacer [5][6].
- The mod's credits name Beyond Skyrim: Bruma among the asset sources [2]. That is an asset credit only; Bruma is not required.
- No level recommendation is given by LoreRim or the mod page [2][3].

## Related
- [vanilla-changes/college-of-winterhold.md](../vanilla-changes/college-of-winterhold.md): Arniel's Endeavor in LoreRim
- [vanilla-changes/main-quest-and-alternate-start.md](../vanilla-changes/main-quest-and-alternate-start.md): The Way of the Voice
- [vanilla-changes/dragonborn.md](../vanilla-changes/dragonborn.md): Raven Rock and Nchardak
- [vanilla-changes/creation-club.md](../vanilla-changes/creation-club.md): LoreRim's removed CC items
- [mod-added/the-forgotten-city.md](the-forgotten-city.md)
- [areas/tools-of-kagrenac-areas.md](../areas/tools-of-kagrenac-areas.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal text, location and worldspace names | LoreRim install: `Tools of Kagrenac.esp` QUST/LCTN/WRLD records (profile Default), via `imports/mods/the-tools-of-kagrenac-esmified.md` | mod v1.62.0.0 | 2026-10-02 |
| 2 | start requirements, MCM alternate start, Keening troubleshooting, ring spawns, puzzle hints and answer | [Nexus mod page 14168](https://www.nexusmods.com/skyrimspecialedition/mods/14168) via meta.ini cache | 2024-01-04 (nexusLastModified) | 2026-01-11 cache |
| 3 | LoreRim start description; Sunder and Wraithguard come from this mod | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests); [LoreRim site — Creation Club](https://www.lorerim.com/guides/quests/creation-club) | n/a | 2026-10-02 |
| 4 | Ayleid ruin names and order, Sunder vault description, lava on failure | [Mod review: The Tools of Kagrenac (annathepiper)](https://skyrim.annathepiper.org/2025/11/16/mod-review-the-tools-of-kagrenac/) | 2025-11-16 | 2026-10-02 |
| 5 | Forgotten Cities patch author note; Draugr texture mod scope | Nexus pages [92206](https://www.nexusmods.com/skyrimspecialedition/mods/92206) (nexusLastModified 2023-05-26) and [123225](https://www.nexusmods.com/skyrimspecialedition/mods/123225) via meta.ini cache | see row | 2026-01 cache |
| 6 | LoreRim patch contents, item overrides, no MCM preset, no quest overrides | LoreRim install: patch plugin record surveys; `LoreRim - xEdit64 Output` (Armor Merges, ISC Patches), Reqtificator and Synthesis scans; grep of `LoreRim - MCM and INI Settings` | LoreRim install | 2026-10-02 |
| 7 | LoreRim overrides of Arniel's Endeavor | `imports/vanilla-quest-overrides.json` (LoreRim install scan) | LoreRim install | 2026-10-02 |
| 8 | item, book, message and cell names; note text | LoreRim install: `Tools of Kagrenac.esp` WEAP/ARMO/BOOK/MESG/CELL records | mod v1.62.0.0 | 2026-10-02 |
