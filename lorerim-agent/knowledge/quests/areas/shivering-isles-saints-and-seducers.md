---
id: shivering-isles-saints-and-seducers
title: "The Shivering Isles: the Asylum (Saints & Seducers Extended Cut)"
kind: area
category: new-lands
summary: Skyrim Extended Cut - Saints and Seducers replaces the Saints & Seducers Creation with a fully voiced Daedric questline. It takes you from Solitude's sewers to the Asylum, a new region of Sheogorath's Shivering Isles split into Mania and Dementia, with shops, Root caves and ruins. To start in LoreRim you need level 20 and The Mind of Madness completed.
mods:
  - name: Skyrim Extended Cut - Saints and Seducers
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/72772
    version: 1.1.1.0
  - name: Armory Extended - Saints and Seducers
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/164993
    version: f1.02
  - name: Armory Extended - Saints and Seducers Patch for LoreRim
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/167859
    version: 1.0.0.0
plugins: [Skyrim Extended Cut - Saints and Seducers.esp, ECSS - Ruin's Edge Patch.esp, ECSS - Shadowrend Patch.esp, ECSS - Staff of Sheogorath Patch.esp, ECSS - Book Covers Skyrim Patch.esp, PrvtI_SaintsSeducersArmory.esp]
quests: [The Route of Madness, The Isle of Madness, The Roots of Madness, The Merchant's Masterpiece, The Lunatic's Treasure]
locations: [Shivering Isles, The Asylum, Stopgap, Stopgap Penitentiary, Borogove, Xedex, Root Canal, Root Nexus, Root to Nirn, The Near Corgi Shop, Sees-the-Moon's Shack, Glimmering Hollow, Grove of Insanity, Grove of Reflection, Doors of Denial, Drowned Ruin, Decrepit House]
region: Shivering Isles (own worldspace), entered from beneath Solitude
start: Reach level 20 and complete The Mind of Madness, then sleep 6 in-game hours or re-enter Solitude. A quake in Solitude starts "The Route of Madness". Investigate it in the sewers to reach the Isles.
level_hint: "20 required; UESP suggests 25; 30+ suggested by a third-party guide"
related: [mod-added/saints-and-seducers-extended-cut.md, vanilla-changes/creation-club.md, vanilla-changes/daedric-quests.md, areas/haafingar-and-solitude.md, mod-added/lucien.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
confidence: high
updated: 2026-10-02
---

# The Shivering Isles: the Asylum (Saints & Seducers Extended Cut)

*Skyrim Extended Cut - Saints and Seducers* (ECSS) is an "overhaul and expansion" of the official Saints & Seducers Creation, and it "entirely replaces the preexisting quests" [3][4]. It sends you to **the Asylum**, a new region of the Shivering Isles "on the fringe of the Fringe", split into sunny **Mania** and grim **Dementia** [3]. The plugin has its own worldspace named "Shivering Isles", with Mania and Dementia region records [1][2]. The mod page promises three new dungeons, two new shops, a main Daedric quest and two side quests, taking roughly 1–3 hours. You can return to the realm after the story ends [3].

## Starting in LoreRim
- **Requirements:** at least **level 20**, and the Daedric quest **The Mind of Madness** (Sheogorath's quest) completed. The LoreRim site and the mod page agree on this [3][4][10]. The plugin's global `EC_SS_StartLevel` is 20, and the start quest `EC_SS_MQ100Int` checks player level against it [2].
- **Trigger:** once you qualify, "sleeping for 6 in-game hours or coming back later and reentering Solitude" begins the events [3]. A small earthquake hits Solitude and you get **The Route of Madness**: investigate the source of the quake, then the strange tunnel [1][7].
- **Route in:** the quake leads "down into the sewers", where an altered final encounter takes you into the Shivering Isles [7]. The plugin includes Solitude Sewers and Solitude Wasteworks interiors [2]. **Root to Nirn** is "A medium-sized root cave that connects Tamriel to the Shivering Isles" [5].
- **New game required:** the mod page says to start a new game, because adding ECSS to a save that already has Saints & Seducers can break the mod [3].

## Quests
Full detail is in [mod-added/saints-and-seducers-extended-cut.md](../mod-added/saints-and-seducers-extended-cut.md).

### The Isle of Madness
- **Giver:** Staada [1][6].
- **Steps:** enter the Asylum → follow Staada → rescue her counterpart **Dylora** (investigate **Stopgap** for signs of her) → defeat **Thoron**, leader of the rioting prisoners → return to Staada [1].
- Thoron escapes. Dylora reveals he is hiding in the **Root Nexus** behind an amber barrier [1].

### The Roots of Madness
- **Steps:** find an artifact from the Shivering Isles that can break the barrier → return to Staada → destroy the barrier → enter the Nexus → defeat Thoron [1].
- **Optional objectives:** retrieve Nerveshatter; burn the **Grove of Insanity** or the laboratory; steal a Soul Tomato or a Void Essence; frame the Priests or the Apostles [1].
- Thoron flees into the **Well of Inversion** and makes copies of Staada and Dylora. After his final defeat he becomes a crystal, and Staada says you are welcome to return to the Asylum [1].

### The Merchant's Masterpiece
- **Giver:** Theodor Gorlash, "a strangely familiar merchant" [1].
- **Task:** retrieve the Sheogorath-shaped amber from the **Root Canal**. The reward is an amber smithing manual [1].

### The Lunatic's Treasure
- **Giver:** Sees-the-Moon, an Argonian in the marsh [1].
- **Task:** fetch his "treasure" from the **Drowned Ruin**. It turns out he wanted the Cast Iron Pot. The reward is his journal, which teaches madness-ore smithing. If he dies, the smithing secret is lost [1].

## Locations
Names come from the plugin's location records and map markers [1][2]. Descriptions are from UESP [5].
- **The Asylum:** the new region where the questline takes place [2][3].
- **Stopgap:** "A ruined town on the Dementia coast, inhabited by Exiled Priests". **Stopgap Penitentiary** is a separate marker [2][5].
- **Borogove:** "A small ruin on the Mania coast that currently serves as the home of the Exiled Apostles". **Borogove Outgrabe** is an interior [1][5].
- **Xedex** (map marker "Tower of Xedex"): "A medium-sized ruin in sinking into the Dementia marsh" [2][5].
- **The Near Corgi Shop:** "A small house in Mania containing Theodor Gorlash's store" [1][5].
- **Sees-the-Moon's Shack:** his home in the marsh [1][5].
- **Root caves:** Root Canal ("growing at an alarming rate"), Root to Nirn, and the **Root Nexus**, Thoron's final lair [1][5].
- **Landmarks:** Glimmering Hollow ("A small excavation housing an Obelisk of Order"), Grove of Insanity (grows Soul Tomatoes), Grove of Reflection, the Drowned Ruin, the Decrepit House, and the **Doors of Denial**, "An enchanted doorway between the Asylum and the Fringe" [1][2][5].
- **Other interiors:** Impromptous Hall and Flesh Laboratory [2].

## Rewards & notable items
- The Golden, Dark, Amber and Madness gear sets are integrated. So are many Rare Curios items and Nerveshatter [3].
- The FOMOD integration patches shipped in LoreRim (Ruin's Edge, Shadowrend, Staff of Sheogorath) place those Creation Club items in the new worldspace [1][4].
- **Missable:** a third-party guide warns that the enchanter needed for the **Staff of Sheogorath** is in Thoron's final lair. "You will not be able to return there after you kill him", so finish the side content before the final fight [7].
- Amber and madness smithing are taught by the two side quests [1].

## Dangers and level hints
- Level 20 is required. UESP gives a suggested level of 25 for The Isle of Madness [6]. The Tuxborn guide suggests aiming for 30+ and warns that "Thoron is a powerful mage, and can do strong shock damage" [7].
- Creatures with dialogue records include grummites, flesh atronachs, scalons and the Hunger [1].

## LoreRim notes
- ECSS overrides the original Creation's quest records, including *Balance of Power*, *Restoring Order*, *Staada Quest*, *Nerveshatter* and the smithing quests. It also overrides the Ruin's Edge, Shadowrend ("Through a Glass, Darkly") and Staff of Sheogorath Creations [1][10].
- *Armory Extended - Saints and Seducers*, with a LoreRim-specific patch, adds spears, pikes, halberds, shortswords and quarterstaffs for the four sets. These appear in Shivering Isles leveled lists [8].
  - Crafting needs the matching books plus prerequisites [8]:
    - Golden/Dark: Daedric + Aureal/Mazken smithing knowledge.
    - Amber: Glass smithing + the amber quest.
    - Madness: Ebony smithing + the madness quest.
- LoreRim also ships *Metallurgy - Saints and Seducers*, a Northern Roads CC patch, Lux lighting patches, 3D Shivering Isles grass, retextures and the FWMF paper map [9].
- Built-in integrations named by the mod page: Lucien, Shirley and Merlin the Corgi [3]. The plugin carries a Lucien dialogue helper record [1]. Lucien is in LoreRim; see [mod-added/lucien.md](../mod-added/lucien.md).

## Related
- [mod-added/saints-and-seducers-extended-cut.md](../mod-added/saints-and-seducers-extended-cut.md)
- [vanilla-changes/creation-club.md](../vanilla-changes/creation-club.md): what happens to the original Creation
- [vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md): The Mind of Madness prerequisite
- [areas/haafingar-and-solitude.md](haafingar-and-solitude.md): Solitude and its sewers
- [mod-added/lucien.md](../mod-added/lucien.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal text, LCTN names, overridden CC quests | LoreRim install: `Skyrim Extended Cut - Saints and Seducers.esp` QUST/LCTN/WRLD records (profile Default), via imports/mods/skyrim-extended-cut-saints-and-seducers.md | mod v1.1.1.0 | 2026-10-02 |
| 2 | map markers, interior cells, Mania/Dementia region records, start-level GLOB/conditions | LoreRim install: same plugin, REFR map markers + CELL/REGN records parsed this run | mod v1.1.1.0 | 2026-10-02 |
| 3 | features, start conditions, new-game warning, integrations | [Nexus: Skyrim Extended Cut - Saints and Seducers](https://www.nexusmods.com/skyrimspecialedition/mods/72772) via meta.ini cache | 2025-11-11 (nexusLastModified) | 2026-01-11 cache |
| 4 | LoreRim start gate, CC integration | [LoreRim site: Creation Club](https://www.lorerim.com/guides/quests/creation-club) (imports/lorerim-site/creation-club.md) | n/a | 2026-10-02 |
| 5 | place descriptions | [UESP: Skyrim Mod:Saints and Seducers/Places](https://en.uesp.net/wiki/Skyrim_Mod:Saints_and_Seducers/Places) | n/a | 2026-10-02 |
| 6 | quest list, giver, suggested level | [UESP: Skyrim Mod:Saints and Seducers/Quests](https://en.uesp.net/wiki/Skyrim_Mod:Saints_and_Seducers/Quests), [The Isle of Madness](https://en.uesp.net/wiki/Skyrim_Mod:Saints_and_Seducers/The_Isle_of_Madness) | n/a | 2026-10-02 |
| 7 | quake/sewer route, level advice, missable staff | [Tuxborn: Mod overview: Saints and Seducers Extended Cut](https://tuxborn.org/wiki/quest-mod-overviews/mod-overview-saints-and-seducers-extended-cut/) | 2026-04-25 | 2026-10-02 |
| 8 | Armory Extended LoreRim patch | [Nexus 167859](https://www.nexusmods.com/skyrimspecialedition/mods/167859) via meta.ini cache | 2025-12-23 (nexusLastModified) | 2026-02-10 cache |
| 9 | other shipped patches | LoreRim install: profile Default `modlist.txt` / `plugins.txt` | n/a | 2026-10-02 |
| 10 | DA15 = The Mind of Madness; CC quest overrides | imports/official-quests.json, imports/vanilla-quest-overrides.json | n/a | 2026-10-02 |
