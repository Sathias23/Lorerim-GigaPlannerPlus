---
id: nightmare-and-dream-realms
title: Vaermina's Nightmare and Dream Realms — Sleepwalking Into A Nightmare and Demon of Dream
kind: area
category: new-lands
summary: Two Vaermina quest mods add dream pocket-realms. Sleepwalking Into A Nightmare (start - Ralforn at the new Green-Tip Cabin north-east of Ivarstead) adds The Nightmare worldspace, the Awakening Chambers and three themed nightmares. Demon of Dream (start - the Idol of Vaermina in Cragwallow Slope) adds three explorable dreams entered from sleepers at Autumnshade Clearing, Fort Greenwall and (in LoreRim) Boulderfall Cave, which replaces the original Riverside Shack. LoreRim adds its own patch that turns the Demon of Dream trading throne into a Skull of Corruption dream-charge shop.
mods:
  - name: Sleepwalking Into A Nightmare - New Daedric Prince Quest
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/141047
    version: 1.0.9.0
  - name: Demon of Dream
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/118719
    version: 1.1.0.0
  - name: LoreRim - MCM and INI Settings (LoreRim Dreamstride.esp)
    nexus: n/a (LoreRim-authored)
    version: n/a
plugins: [NightmarePlane.esp, NightmarePlane0.esp, RuneDreamstrides.esp, LoreRim Dreamstride.esp]
quests: [Sleepwalking Into A Nightmare]
locations: [Green-Tip Cabin, The Nightmare, Awakening Chambers, Hall Of Awakening, Nightmare Of Anguish, Nightmare of Self Doubt, Nightmare Of Bereavement, Cragwallow Slope, Realm of Dream, Dreamer Dwelling, The Endless Dark, Path of Treasures, Hroldar's Castle, Castle Depths, Hroldar's Keep, The Abandoned Garden, Castle Rooftop, Greenwall Cave, Greenwall Hideout, Conquered Quagmire]
region: Dream/Oblivion pocket realms entered from north-east of Ivarstead and from sites across Skyrim (Cragwallow Slope in Eastmarch, Boulderfall Cave (LoreRim; originally Riverside Shack), Autumnshade Clearing, Fort Greenwall)
start: "Sleepwalking: talk to Ralforn at Green-Tip Cabin, north-east of Ivarstead. Demon of Dream (unmarked): take the Idol of Vaermina and read the note beside it in Cragwallow Slope."
level_hint: "Demon of Dream author: 15+"
related: [mod-added/sleepwalking-into-a-nightmare.md, mod-added/demon-of-dream.md, vanilla-changes/daedric-quests.md, areas/the-rift-and-riften.md, areas/eastmarch-and-windhelm.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8]
confidence: high
updated: 2026-10-02
---

# Vaermina's Nightmare and Dream Realms — Sleepwalking Into A Nightmare and Demon of Dream

LoreRim ships two Vaermina-themed quest mods that take you into dreams. *Sleepwalking Into A Nightmare* is a single Daedric quest. You track a missing woman, Gretska, into her nightmares. It has multiple endings, a new bow, ring, helmet and spells [1][2]. *Demon of Dream* is an unmarked quest about three ex-cultists of Vaermina trapped in their own minds. Its dreams are "small, dungeon-like pockets of Oblivion" that hold you "hostage until you conquer them" [4]. Both are listed on the LoreRim site's New Quests page [1].

## Starting in LoreRim
- **Sleepwalking Into A Nightmare:** speak with **Ralforn** in **Green-Tip Cabin**, a new location north-east of Ivarstead. He asks you to find his wife Gretska [1][2]. The cabin is a plugin cell, `aaaMBCabin01` [3]. No LoreRim gate was found [1].
- **Demon of Dream:** acquire the **Idol of Vaermina** inside **Cragwallow Slope** and read the note beside it [1][4].
  - The note, *On the Idol of Vaermina*, lists the three hideouts: **Fort Greenwall**, **Autumnshade Clearing**, **Boulderfall Cave**. It adds that "the mages at Cragwallow Slope have agreed to house you" [5].
  - Cragwallow Slope is in Eastmarch, south-east of Windhelm and south of Narzulbur [6].
  - Recommended level 15+ [4]. The quest has no journal entries [4][5].
- **LoreRim moves the Courier dreamer:**
  - In the original `RuneDreamstrides.esp`, the note lists Fort Greenwall, Autumnshade Clearing and **Riverside Shack** [7]. The author's guide also sends you to Riverside Shack [4].
  - LoreRim's patch rewrites the note to list **Boulderfall Cave** instead. It also edits references in both the Boulderfall Cave and Riverside Shack cells [5].
  - So in LoreRim, look for the Courier's sleeping body in **Boulderfall Cave** (medium confidence; not verified in-game).

## Quests

### Sleepwalking Into A Nightmare (`aaaMBQuest`, Daedric)
- **Giver:** Ralforn, Green-Tip Cabin [2][3].
- **Steps (objectives)** [3]:
  1. Find Gretska: search her fishing spot, archery target and the path; search the knapsack; read Gretska's journal.
  2. Tell Ralforn. Her nightmares "always start with falling asleep somewhere in northern Skyrim".
  3. Find the nightmare location and try to wake Gretska.
  4. In **The Nightmare**, investigate the cave and the **Awakening Chambers**. Loot the Omens of Anguish, Self Doubt and Bereavement.
  5. Overcome the three nightmares:
     - **Bereavement**: kill the werewolf that killed her father.
     - **Anguish**: fix the vase and tell her mother.
     - **Self Doubt**.
  6. Sleep on the stone bed, defeat **the Lotus**, and speak with the statue.
- **Choice:** accept Vaermina's offer and kill Gretska ("becoming her champion"), or refuse and wake Gretska, who reunites with Ralforn [3].
- **Rewards:** new bow and ring (potential quest rewards), a helmet (light or heavy variants) and spells [2]: Detect Sleeping; Encase In Nightmare in Lesser, normal and Greater versions [3].

### Demon of Dream (unmarked)
Per the author's guide [4]:
- **Courier dream (Boulderfall Cave in LoreRim; Riverside Shack in the original):** activate the courier's body with the Idol in your inventory. Follow the torch trail through **The Endless Dark** / **Path of Treasures** and trade the Delivery Bag to the **Omen of Possibilities**. Sit on the **Throne of Trade** to exchange dream items, then exit by the ladder. Afterwards the **Dreamstride (Courier)** power returns you once a day [4][5].
- **King dream (Autumnshade Clearing):** Hroldar's dream runs **Hroldar's Castle** → **Castle Depths** → **Hroldar's Keep** → **The Abandoned Garden**. You defeat Lesser Omens and the Gatekeeper, then the **Omen of Abandonment** in the treasury; take Hroldar's head and crown. **Dreamstride (Hroldar)** lets you return [4][5].
- **Leader dream (Fort Greenwall, intended last):** enter **Greenwall Cave** and use the trapdoor to **Greenwall Hideout**. Open the cell with a key from the earlier dreamers or a lockpick, then kill **Nilarion** in his dream (*Conquered Quagmire*). Trade **Nilarion's Skull** to the Omen, or keep it [4][5].

## Locations
- **Green-Tip Cabin**: Ralforn and Gretska's home, north-east of Ivarstead [1][3].
- **The Nightmare** (worldspace): Gretska's dream, entered by sleeping at the location from her journal. It contains the **Awakening Chambers** (lit sconces and a stone bed) and the **Hall Of Awakening** (the Lotus fight) [3].
- **Nightmare Of Anguish**, **Nightmare of Self Doubt** (cells) and **Nightmare Of Bereavement** (worldspace): the three themed sub-nightmares [3].
- **Cragwallow Slope**: Eastmarch cave holding the Idol of Vaermina [4][6].
- **Dreamer Dwelling** / **Realm of Dream** (LCTNs) [7]:
  - Courier: **The Endless Dark**, **Path of Treasures** (with the Throne of Trade).
  - King: **Hroldar's Castle**, **Castle Rooftop**, **Castle Depths**, **Hroldar's Keep**, **The Abandoned Garden**.
  - Leader: **Greenwall Cave**, **Greenwall Hideout**, **Conquered Quagmire**.
  - Dreams cannot be left until resolved [4].
- **Enemies:** Omens (Lesser Omen, Vivid Omen, Omen of Abandonment, Enthralled Omen), Straw Servants/Knights, a Draugr Goliath, and shadow versions of wolves, spiders, thieves and scavengers. The boss is Nightstrider's Manifestation [5].

## Rewards & notable items
- **Sleepwalking:** bow, ring, helmet, the Encase In Nightmare spells, Detect Sleeping [2][3].
- **Demon of Dream:** **Oath to Hroldar** (sword, traded from the Servant's Mask), **Nightstrider's Token** (traded from Nilarion's Skull), the Servant's Mask, the Straw Knight's Helmet, and spell tomes (Warm Slumber, Night Terror, conjure-Omen/Knight spells) [5].

## LoreRim notes
- **LoreRim Dreamstride.esp** (inside *LoreRim - MCM and INI Settings*, loaded after `RuneDreamstrides.esp`) reworks Demon of Dream's economy [5]:
  - Sitting on the **Throne of Trade** gives you **Staff of Corruption Charges** equal to the vanilla global `DA16SkullDreamCount`, the dreams stored in the Skull of Corruption. When you stand up, unspent charges are written back [5].
  - Throne prices in charges [5]:
    - Spell Tome: Conjure Shadow Knight: 10
    - Spell Tome: Warm Slumber: 15
    - Spell Tome: Conjure Lesser Shadow Omen: 15
    - Spell Tome: Night Terror: 15
    - Scroll of Night Terror: 5
  - It adds seven Frostbitten Dreams tomes for 15-30 charges: Colors of Nightmare, Insomnia, Shadow Familiar, Aura of Dark Dreams, Fluttering Shadows, Midnight Globe, Mind Terror [5].
  - It removes several original trade recipes [5].
  - It renames spells ("Conjure Loyal Knight" → "Conjure Shadow Knight"; "Conjure Lesser Omen" → "Conjure Lesser Shadow Omen") and adds an exit load door in the Courier dream [5].
  - Practical answer: Demon of Dream's shop is fed by dreams collected with the Skull of Corruption, the reward of Vaermina's vanilla quest *Waking Nightmare* (`DA16`) [8]. Do that quest and gather dreams first. This is an inference from the `DA16SkullDreamCount` global; see `vanilla-changes/daedric-quests.md`.
- Sleepwalking's quest type is "daedric" [3].

## Related
- `mod-added/sleepwalking-into-a-nightmare.md`, `mod-added/demon-of-dream.md`
- `vanilla-changes/daedric-quests.md` (Vaermina, Skull of Corruption)
- `areas/the-rift-and-riften.md`, `areas/eastmarch-and-windhelm.md`

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | LoreRim descriptions and starts for both mods | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 2 | Sleepwalking start, rewards, endings | [Nexus 141047](https://www.nexusmods.com/skyrimspecialedition/mods/141047) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 3 | Sleepwalking quest, objectives, journal, cells/LCTN/WRLD, spells | LoreRim install: `NightmarePlane.esp` records | mod v1.0.9.0 | 2026-10-02 |
| 4 | Demon of Dream start, guide, dreams, level 15+ | [Nexus 118719](https://www.nexusmods.com/skyrimspecialedition/mods/118719) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 5 | LoreRim patch: throne/charges, recipes, renamed spells, note text, NPC names, edited cells | LoreRim install: `LoreRim - MCM and INI Settings/LoreRim Dreamstride.esp` records + `Scripts/Source/LoreRimDreamstride*.psc` | n/a | 2026-10-02 |
| 6 | Cragwallow Slope in Eastmarch | [UESP — Cragwallow Slope](https://en.uesp.net/wiki/Skyrim:Cragwallow_Slope) | n/a | 2026-10-02 |
| 7 | Demon of Dream cell/LCTN/spell names | LoreRim install: `RuneDreamstrides.esp` records | mod v1.1.0.0 | 2026-10-02 |
| 8 | DA16 = "Waking Nightmare" | `imports/official-quests.json` (Skyrim.esm strings) | n/a | 2026-10-02 |
