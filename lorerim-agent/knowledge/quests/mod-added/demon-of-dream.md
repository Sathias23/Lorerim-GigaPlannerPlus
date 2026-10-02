---
id: demon-of-dream
title: Demon of Dream
kind: mod-added
category: new-quests
summary: An unmarked Vaermina quest with no journal entries. You use the Idol of Vaermina, found in Cragwallow Slope, to enter the dreams of three ex-cultists. In LoreRim the Courier's body is moved from Riverside Shack to Boulderfall Cave, and the Throne of Trade is reworked to spend Skull of Corruption dream charges on spell tomes.
mods:
  - name: Demon of Dream
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/118719
    version: 1.1.0.0
  - name: LoreRim - MCM and INI Settings (LoreRim Dreamstride.esp)
    nexus: n/a (LoreRim-authored)
    version: n/a
plugins: [RuneDreamstrides.esp, LoreRim Dreamstride.esp, Demon of Dream Occlusion addon.esp, Lux - Demon of Dreams patch.esp]
quests: []
locations: [Cragwallow Slope, Boulderfall Cave, Autumnshade Clearing, Fort Greenwall, Greenwall Cave, Greenwall Hideout, Realm of Dream, Dreamer Dwelling, The Endless Dark, Path of Treasures, Hroldar's Castle, Castle Depths, Hroldar's Keep, The Abandoned Garden, Conquered Quagmire]
region: Eastmarch (Cragwallow Slope) and the Rift (Boulderfall Cave, Autumnshade Clearing, Fort Greenwall); the dreams themselves are pocket realms of Oblivion
start: Unmarked, with no journal. Go to Cragwallow Slope (Eastmarch, southeast of Windhelm), take the Idol of Vaermina and read the note beside it. In LoreRim the Courier dreamer is in Boulderfall Cave (northwest of Riften), not Riverside Shack. The mod page recommends level 15+.
level_hint: "15+"
related: [areas/nightmare-and-dream-realms.md, areas/the-rift-and-riften.md, areas/eastmarch-and-windhelm.md, mod-added/sleepwalking-into-a-nightmare.md, vanilla-changes/daedric-quests.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8]
confidence: medium
updated: 2026-10-02
---

# Demon of Dream

"Demon of Dream is an unmarked quest centered around 3 ex-cultists of Vaermina, all trapped in their own minds after an attempt to get back at the Mistress of Dream" [3]. Like Oblivion Gates or Black Books, each dream is "a small, dungeon-like pocket of Oblivion" built around its dreamer's fears and desires. "You cannot leave the dream until it is resolved." [3] The plugin has **no quest (QUST) records**, so nothing appears in your journal [1]. Its new location names are **Realm of Dream** and **Dreamer Dwelling** [1].

## Starting in LoreRim
- **The mod's start:** get the **Idol of Vaermina** in **Cragwallow Slope** and read the note beside it, *On the Idol of Vaermina*. Reading it marks the dreamers' locations on your map [1][2][3]. Cragwallow Slope is a conjurers' cave in **Eastmarch**, southeast of Windhelm and south of Narzulbur [6].
- **To enter a dream:** activate a dreamer's body while carrying the Idol. Without the Idol you get a "lack the item" message [1].
- **Recommended level:** 15+ [3].
- **LoreRim change: the Courier is moved.** `LoreRim Dreamstride.esp` disables the Courier's body, bed, note and key at **Riverside Shack**. It places a new body, bed, *Courier's Pre-Ritual Notes* and dagger inside **Boulderfall Cave**, and the Courier dream's exit ladder now returns you to Boulderfall Cave [4].
  - LoreRim also rewrites the note's location list to read "Fort Greenwall, Autumnshade Clearing, **Boulderfall Cave**" [4].
  - However, the note's map-marker script still points at the vanilla map marker next to Riverside Shack, so reading the note probably still adds Riverside Shack to your map (inference from records, medium confidence) [1][4].
  - Boulderfall Cave is in **the Rift**, northwest of Riften and southeast of Clearspring Tarn. In vanilla it holds necromancers [7].
- **Why it moved (inference):** the mod page lists *Evolving Locations - Riverside Shack* as incompatible, and LoreRim ships that mod enabled [3][5].
- The LoreRim site repeats the mod page's start (the Idol at Cragwallow Slope) and does not mention the relocation [2].

## Quests
### Demon of Dream (unmarked)
- **Giver / trigger:** the Idol of Vaermina and its note at Cragwallow Slope. The note is signed "Sister Ivela" and says "The mages at Cragwallow Slope have agreed to house you" [1][4].
- **Order:** the dreams "can be tackled in any order, but the one at Greenwall is designed to be the final of the three" [3].
- **The Courier** (Riverside Shack in the mod; **Boulderfall Cave** in LoreRim) [3][4]:
  1. Read the note by the body, then activate it with the Idol.
  2. Take the Delivery Bag and follow the trail of torches through **The Endless Dark** and **Path of Treasures**.
  3. Trade the bag to the **Omen of Possibilities**. Sit in the **Throne of Trade** to trade dream items, then leave by the ladder.
  4. The power **Dreamstride (Courier)** returns you to this dream "once a day" [3].
  5. In the mod, a key to the Greenwall cell then appears on the bed. LoreRim disables that key and places no replacement at Boulderfall, so expect to get the key from Hroldar's dream instead (inference) [1][3][4].
- **The King, Hroldar** (Autumnshade Clearing, the Rift, north of Goldenglow Estate) [3][6]:
  1. Read the note on the practice dummy and activate the body. This leads to **Hroldar's Castle**.
  2. Kill **Lesser Omens** for the First and Second Keys to the Depths. Take the Gatekeeper's Key from **The Gatekeeper**.
  3. Go through the **Castle Depths** and **Hroldar's Keep**, pulling the levers in three abandoned bedrooms and **The Abandoned Garden**.
  4. In the treasury, defeat the **Omen of Abandonment** and take the **Head of the King** and **Wooden Crown**.
  5. Activate the garden chair and leave by the portal.
  6. The power **Dreamstride (Hroldar)** returns you "once a day". A key replaces Hroldar's body on the chair [1][3].
- **The Leader, Nilarion** (Fort Greenwall, the Rift) [3][6]:
  1. Enter **Greenwall Cave**, through its side entrance or the well, and take the trapdoor to **Greenwall Hideout**.
  2. Open the cell with a key from a previous dream (in game, **Key to Greenwall Cell**), or pick the lock.
  3. Activate the body to enter the **Conquered Quagmire**.
  4. Kill **Nilarion, Traitor of Vaermina**. He has a second phase, **Nightstrider's Manifestation**.
  5. Take **Nilarion's Skull**. You can trade it to the Omen of Possibilities or keep it as decoration [1][3].
- **Outcome:** the author frames the motive as either "to end their suffering, or to find valuable artifacts and spells" [3]. There are no quest stages or rewards beyond the items and trades [1].

## Locations
- **Cragwallow Slope** (Eastmarch): the Idol and note [1][6].
- **Boulderfall Cave** (the Rift; in LoreRim only): the Courier dreamer [4][7].
- **Autumnshade Clearing** (the Rift): Hroldar's body [3][6].
- **Fort Greenwall → Greenwall Cave → Greenwall Hideout** (the Rift): Nilarion's cell [1][6].
- **Dream cells:** [1]
  - The Endless Dark and Path of Treasures (the Courier).
  - Hroldar's Castle, Castle Rooftop, Castle Depths, Hroldar's Keep and The Abandoned Garden (the King).
  - Conquered Quagmire (the Leader).

## Rewards & notable items
- **Throne of Trade, as shipped by the mod** (one item for one item) [1]:
  - Servant's Mask → **Oath to Hroldar** (sword)
  - Wooden Crown → Spell Tome: Conjure Loyal Knight
  - Giant Draugr's Bone → Spell Tome: Warm Slumber
  - Ruined Spell Tome → Spell Tome: Night Terror
  - Spell Tome: Conjure Seeker → Spell Tome: Conjure Lesser Omen
  - Nilarion's Skull → **Nightstrider's Token** (ring, *Daedric Lucidity*)
  - Smaller swaps: Omen Horn, Bear Claws, Straw, the Wooden Blade and Shield, and *Sixteen Accords of Madness*.
- **Throne of Trade in LoreRim:** see LoreRim notes. The trades change substantially [4].
- **Other gear:** Nightstrider's Staff, Staff of Warm Slumber, Omenfear, Chill Night, Nightstrider's Robe, Straw Knight's Helmet, and Scroll of Night Terror [1].
- **Powers:** Dreamstride (Courier) and Dreamstride (Hroldar) [1].

## LoreRim notes
- **Throne of Trade reworked** (`LoreRim Dreamstride.esp`) [4]:
  - Sitting in the throne converts the vanilla global `DA16SkullDreamCount` into **Staff of Corruption Charges**. These are the dreams stored in Vaermina's **Skull of Corruption** from *Waking Nightmare*, which UESP says it collects by casting on sleeping people. When you get up, the unspent charges go back into the global [4][8].
  - **New charge prices:** Spell Tome: Conjure Shadow Knight (10), Warm Slumber (15), Conjure Lesser Shadow Omen (15), Night Terror (15), Scroll of Night Terror (5) [4].
  - **New Frostbitten Dreams tomes** (`IceBloomNightmare.esl`), each offered only if you don't already know the spell or carry the tome:
    - Colors of Nightmare (30)
    - Insomnia (20)
    - Shadow Familiar (15)
    - Aura of Dark Dreams (15)
    - Fluttering Shadows (15)
    - Midnight Globe (20)
    - Mind Terror (20)
  - **Unchanged item trades:** Servant's Mask → Oath to Hroldar, and Nilarion's Skull → Nightstrider's Token.
  - **Removed:** the Omen Horn, Sixteen Accords, Straw, Bear Claws, Wooden Blade and Wooden Shield trades [1][4].
  - **Practical upshot (inference):** in LoreRim the spell tomes need a Skull of Corruption with stored dreams. You may want to finish *Waking Nightmare* first.
- **Renamed spells:** Conjure Loyal Knight → **Conjure Shadow Knight**, and Conjure Lesser Omen → **Conjure Lesser Shadow Omen** [4].
- **Requiem rebalance:** the same plugin overrides the mod's NPCs, spells, magic effects, weapons and armor, and has Requiem masters. The values were not checked [4]. Further LoreRim patches also touch the mod, including NPCs and Races, Alchemy Tweaks, Scroll and Staves patches, and Synthesis outputs. Their changes were not itemized [5].
- **Courier relocation:** Riverside Shack → Boulderfall Cave (see Starting in LoreRim) [4].
- **Lighting and occlusion:** a Lux lighting patch and an Occlusion addon ship [5].

## Related
- [areas/nightmare-and-dream-realms.md](../areas/nightmare-and-dream-realms.md)
- [areas/the-rift-and-riften.md](../areas/the-rift-and-riften.md), [areas/eastmarch-and-windhelm.md](../areas/eastmarch-and-windhelm.md)
- [mod-added/sleepwalking-into-a-nightmare.md](sleepwalking-into-a-nightmare.md) (another Vaermina quest)
- [vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md) (*Waking Nightmare* / Skull of Corruption)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | no QUST records; locations, cells, NPCs, items, notes, keys, original trade recipes, entry and map-marker scripts | LoreRim install: `RuneDreamstrides.esp` records and `Demon of Dream/Source/Scripts/*.psc` (profile Default) | mod v1.1.0.0 | 2026-10-02 |
| 2 | LoreRim start text (Idol at Cragwallow Slope) | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 3 | premise, guide, dream order, level, compatibility (Evolving Locations - Riverside Shack) | [Nexus mod page 118719](https://www.nexusmods.com/skyrimspecialedition/mods/118719) via meta.ini cache | 2024-10-26 (nexusLastModified) | 2026-01-11 cache |
| 4 | Courier relocation, rewritten note, disabled key, reworked Throne of Trade, charge currency, renamed spells | LoreRim install: `LoreRim Dreamstride.esp` records and `Scripts/Source/LoreRimDreamstrideBenchScript.psc` / `LoreRimDreamstrideGetUpScript.psc` (mod "LoreRim - MCM and INI Settings") | file dated 2025-09-04 | 2026-10-02 |
| 5 | other patches; Evolving Locations - Riverside Shack enabled; Frostbitten Dreams Magic (Nexus 108653) supplies `IceBloomNightmare.esl` | LoreRim install: profile Default `modlist.txt` / `plugins.txt`; binary master scan of plugins | n/a | 2026-10-02 |
| 6 | holds and positions of Cragwallow Slope, Autumnshade Clearing, Fort Greenwall / Greenwall Cave | [UESP — Cragwallow Slope](https://en.uesp.net/wiki/Skyrim:Cragwallow_Slope), [Autumnshade Clearing](https://en.uesp.net/wiki/Skyrim:Autumnshade_Clearing), [Fort Greenwall](https://en.uesp.net/wiki/Skyrim:Fort_Greenwall) | n/a | 2026-10-02 |
| 7 | Boulderfall Cave hold, position, vanilla occupants | [UESP — Boulderfall Cave](https://en.uesp.net/wiki/Skyrim:Boulderfall_Cave) | n/a | 2026-10-02 |
| 8 | Skull of Corruption collects dreams from sleepers; DA16 = *Waking Nightmare* | [UESP — Skull of Corruption](https://en.uesp.net/wiki/Skyrim:Skull_of_Corruption); research import `official-quests.json` (DA16, formId 0242af) | n/a | 2026-10-02 |
