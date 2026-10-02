---
id: finding-velehk-sain
title: Finding Velehk Sain (Forgotten Names expansion)
kind: mod-added
category: quest-expansion
summary: Expands the unmarked vanilla Midden quest "Forgotten Names". The four apprentice rings are moved from the Arcanaeum chest to the four apprentices' death sites on the northern coast. Velehk Sain becomes a scaling enemy with a unique scimitar, and new Atronach Forge recipes make the Staff of Velehk Sain and the Fused Ring of the Black Gauntlet.
mods:
  - name: Finding Velehk Sain
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/19815
    version: 1.0.15.0
plugins: [Finding_VelehkSain.esp]
quests: [Forgotten Names]
locations: [The Midden Dark, The Arcanaeum, Journeyman's Nook, Northern Coast (Winterhold)]
region: College of Winterhold and the Winterhold/Pale northern coast
start: Find the black gauntlet in the Midden Dark under the College of Winterhold (and the Midden Incident Report). Then collect the four rings from the apprentices' death sites on the northern coast. The rings are no longer in the Arcanaeum chest.
related: [vanilla-changes/college-of-winterhold.md, mod-added/college-of-winterhold-quest-expansion.md, areas/winterhold.md]
sources: [1, 2, 3, 4]
confidence: medium
updated: 2026-10-02
---

# Finding Velehk Sain (Forgotten Names expansion)

Finding Velehk Sain reworks the content around the strange gauntlet in the Midden Dark and the College of Winterhold's missing apprentices [1][2]. It adds **no new quest record**. It changes the vanilla unmarked misc quest **Forgotten Names** (`dunMidden01QST`) by moving the rings, adding notes and items, and redesigning the Velehk Sain fight [1][3][4].

## Starting in LoreRim
- **Vanilla baseline:** the quest starts when you find the strange gauntlet in the Midden Dark and the incident report about a failed summoning. In vanilla, all four rings sit in a master-locked chest in the Arcanaeum [4].
- **With this mod:** the investigator's chest and key are removed. Each ring is placed at the site where an apprentice died, as a "Strange Ring" you inspect and choose to take, together with a note from that apprentice [1][3].
- LoreRim's Quest Expansions page lists the mod ("additional content surrounding the strange gauntlet in the Midden Dark, as well as the four missing Apprentices") with no extra gate [2].
- **Which version LoreRim ships:** `Finding_VelehkSain.esp` has only `Skyrim.esm` and `Dawnguard.esm` as masters, and the install contains neither *The Missing Apprentices Quest Fix* nor *Cutting Room Floor*. So LoreRim uses the **standalone** version. The author warns this version's content is "much more difficult to find and will lack context" [1][3].

## Quests
### Forgotten Names (vanilla, expanded)
- **Steps:**
  1. Read the **Midden Incident Report** (text revised: the bodies were found together, with "conjurer's burn"). In the complete version the history book sits on Urag's desk, but that is not LoreRim's standalone build [1][3].
  2. Collect the four rings from the death sites. The plugin edits cells `POINorthernCoast16`, `POINorthernCoast18`, `POINorthernCoast22` and `JourneymansNookExterior01`. The author's teleport hints are `coc poinortherncoast18`, `coc poinortherncoast16` and `coc journeymansnookexterior01`, and for the fourth: "coc yngvildexterior and then head due south to the coast" [1][3].
  3. Read the apprentices' notes (from Yisra, Rundi, Ilas-Tei and Borvir). Rundi gives the finger order: "From pointer finger to little finger, it's Katarina, Treoy, Balwen, and Pithiken" [3].
  4. Put the rings on the gauntlet. **Velehk Sain** appears [3][4].
- **Choices & outcomes:**
  - **Release him** (vanilla): he gives you his treasure map. The treasure is southeast of Pilgrim's Trench, on an island with a Shrine of Talos [4].
  - **Fight him:** the mod changes him from a level 4 enemy to **twice your level**, with a unique enchanted scimitar (**Velehk's Scimitar**). He drops **Velehk Sain's Heart** [1][3].
  - **Skip the gauntlet:** put the four rings in the **Atronach Forge** to make the **Fused Ring of the Black Gauntlet** [1].
- **Atronach Forge recipes:** Velehk Sain's Heart plus a **Staff of Daedric Command** (not included, you have to find one) makes the **Staff of Velehk Sain**. It summons a leveled Velehk for 30 seconds and holds only two charges before it needs recharging [1][3].

## Locations
- **The Midden Dark** (College of Winterhold): the gauntlet [3][4].
- **Northern coast POIs and Journeyman's Nook exterior**: the four death sites, which have no map markers [1][3].
- **The Arcanaeum**: the plugin edits it to remove the investigator's chest [1][3].

## Rewards & notable items
- **Fused Ring of the Black Gauntlet:** "Envelops the wearer in a protective field of magic. However, the effect is exhausting." The mod page says it gives strong elemental resistances and lowers Stamina regeneration [1][3].
- **Staff of Velehk Sain** ("Summon Velehk Sain.") and **Velehk's Scimitar** ("The scimitar of Velehk Sain, once called 'the Pirate King of the Abecean'…") [3].
- The rings are renamed **Ring of Katarina / Treoy / Balwen / Pithiken** (vanilla: "Katarina's Ring", "Pithi's Ring", etc.) and made lighter [1][3][4].

## LoreRim notes
- You can't get the heart from an already-killed Velehk without the console. Install before starting the content. The ESP-FE build doesn't work with saves made on the old ESP [1].
- This mod forwards USSEP fixes. Load-order advice on its page (after WACCF, Immersive Weapons, and college overhauls that move the investigator's chest) is handled by LoreRim's curated load order. How LoreRim's Requiem/college patches interact with Velehk's stats has not been checked (unverified) [1].

## Related
- [vanilla-changes/college-of-winterhold.md](../vanilla-changes/college-of-winterhold.md)
- [mod-added/college-of-winterhold-quest-expansion.md](college-of-winterhold-quest-expansion.md)
- [areas/winterhold.md](../areas/winterhold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, versions, Velehk level change, recipes, coc hints | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/19815) via meta.ini cache | 2020-03-27 (nexusLastModified) | 2026-01-11 cache |
| 2 | LoreRim listing | [LoreRim site — Quest Expansions](https://www.lorerim.com/guides/quests/quest-expansions) | n/a | 2026-10-02 |
| 3 | masters (standalone), item names, notes, edited cells | LoreRim install: `Finding_VelehkSain.esp` records; profile Default modlist/plugins | mod v1.0.15.0 | 2026-10-02 |
| 4 | vanilla baseline (rings in Arcanaeum chest, release/treasure, Velehk level 4) | [UESP — Forgotten Names](https://en.uesp.net/wiki/Skyrim:Forgotten_Names); [UESP — Velehk Sain](https://en.uesp.net/wiki/Skyrim:Velehk_Sain); imports/official-quests.json (`dunMidden01QST`) | n/a | 2026-10-02 |
