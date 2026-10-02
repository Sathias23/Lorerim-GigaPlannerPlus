---
id: favor-quests-separated
title: Favor Quests Separated
kind: mod-added
category: radiant
summary: Splits seven shared vanilla favor quests (Delivery, A Few Words with You, Some Light Theft, Kill the Bandit Leader, Rare Gifts, Dungeon Delving (Bandits/Caves)) into 32 per-town copies so every townsperson's favor can be active at once. Its separated bounty quests ship dormant in LoreRim (optional bounty file not installed).
mods:
  - name: Favor Quests Separated
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/73903
    version: 2.11.1.0
  - name: Favor Quests Separated - The Choice Is Yours Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/73903
    version: 2.8.0.0
  - name: NGCDT - Favor Quests Separated Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/64667
    version: 1.16.0.0
plugins: [Favor Quests Seperated.esp, Favor Quests Separated - The Choice Is Yours Patch.esp, Narrative Gameplay Consistent Dialogue Tweaks - Favor Quests Separated Patch.esp]
quests: [Delivery, A Few Words with You, Some Light Theft, Kill the Bandit Leader, Rare Gifts, Dungeon Delving (Bandits), Dungeon Delving (Caves)]
locations: [Whiterun, Windhelm, Solitude, Markarth, Falkreath, Dawnstar, Morthal, Winterhold, Kynesgrove, Darkwater Crossing, Anga's Mill, Skaal Village]
region: Skyrim towns + Skaal Village (Solstheim)
start: Same as vanilla — talk to the townsperson who offers the favor; with this mod each town's copy is its own quest, so starting one no longer locks out the others.
related: [mod-added/missives.md, vanilla-changes/thane-hearthfire-and-favors.md, vanilla-changes/side-quests-and-misc.md, mod-added/requiem-quests.md]
sources: [1, 2, 3, 4, 5]
confidence: high
updated: 2026-10-02
---

# Favor Quests Separated

In vanilla Skyrim several favor quests are a single quest record shared between towns. Starting one locks out every other town's version. For example, Amren's family sword in Whiterun and Shahvee's Amulet of Zenithar in Windhelm cannot be active at the same time [2]. Favor Quests Separated makes a separate quest for each town: 32 favor quests that can all run at once, where vanilla allowed only 7 [2]. The quest names, objectives and rewards stay as in vanilla [1][3].

## Starting in LoreRim
- **How to start:** talk to the townsperson who offers the favor, exactly as in vanilla. The split copies are started per town by the game's change-location story-manager nodes, which the plugin rewires (for example `FavorChangeLocationWhiterun` and `DLC2FavorSkaalVillage`) [1].
- **No LoreRim gate:** neither the LoreRim settings nor the LoreRim site adds a prerequisite for these favors [1][5].
- **The Choice Is Yours:** LoreRim loads *The Choice is Yours* plus the official FQS compatibility patch, in the order the author specifies [1][2].
- **Bounty quests are not separated in LoreRim.** The FQS plugin contains split copies of the four Jarl bounty quests (36 records, for example `BQ01Haafingar`). The author says they only become active with the optional *Bounty Quests* file [2]. LoreRim installs only the main file. The only story-manager nodes in the plugin are favor nodes, and the vanilla `BQ01`–`BQ04` records are overridden by `Requiem.esp`, not by FQS [1][4]. In LoreRim, the Steward/Jarl bounties therefore run as vanilla-as-modified-by-Requiem, one per type at a time. Treat the FQS "Bounty: Draugr / Warlock / Spriggan / Falmer / Hagraven / Vampire" variants and their level gates as **not active** (inference from the install; medium confidence).

## Quests

The giver and target lists below are the vanilla ones from UESP. Each one maps to its own FQS record (`Favor###<Town>`) [1][3].

### Delivery (Favor001 → 6 copies)
- **Steps:** (10) Deliver the item to the target [1].
- **Givers:** [3]
  - Adonato Leotelli (Windhelm) → Adonato's Book to Giraud Gemane, Solitude.
  - Sondas Drenim (Darkwater Crossing) → note to Quintus Navale, Windhelm.
  - Thadgeir (Falkreath) → Berit's Ashes to Runil.
  - Idgrod the Younger (Morthal) → note to Danica Pure-Spring, Whiterun.
  - Aeri (Anga's Mill) → note to Skald, Dawnstar.
  - Banning (Markarth) → Spiced Beef to Voada.

### A Few Words with You (Favor013 → 6 copies)
- **Steps:** (10) Talk to the target about the quest giver → (15) Tell the quest giver it is taken care of [1].
- **Givers → targets:** [3]
  - Carlotta Valentia (Whiterun) → Mikael.
  - Haran (Winterhold) → Ranmir.
  - Iddra (Kynesgrove) → Roggi Knot-Beard.
  - Octieve San (Solitude) → Irnskar Ironhand.
  - Omluag (Markarth) → Mulush gro-Shugurz.
  - Scouts-Many-Marshes (Windhelm) → Torbjorn Shatter-Shield.

### Some Light Theft (Favor018 → 3 copies)
- **Steps:** (10) Steal the item → (15) Bring it to the quest giver [1].
- **Givers:** [3]
  - Dengeir of Stuhn (Falkreath) → Private Letter from Lod's House.
  - Malur Seloth (Winterhold) → Staff of Arcane Authority from The Frozen Hearth.
  - Stands-In-Shallows (Windhelm) → Double-Distilled Skooma from the New Gnisis Cornerclub.

### Kill the Bandit Leader (Favor104 → 4 copies)
- **Steps:** (10) Kill the leader of the dungeon → (15) Tell the quest giver the bandit is dead [1].
- **Givers:** [3]
  - Annekke Crag-Jumper (Darkwater Crossing): +1 Light Armor, and she becomes a follower.
  - Brunwulf Free-Winter (Windhelm): +1 Heavy Armor and leveled gold.
  - Ahtar (Solitude): leveled gold, and he becomes a follower.
  - Fanari Strong-Voice (Skaal Village): leveled gold.

### Rare Gifts (Favor110 → 6 copies)
- **Steps:** (10) Bring one of the item to the quest giver [1].
- **Givers:** [3]
  - Torbjorn Shatter-Shield (Windhelm): Amulet of Arkay.
  - Siddgeir (Falkreath): Black-Briar Mead.
  - Captain Aldis (Solitude): *The Mirror*.
  - Lami (Morthal): *Song of the Alchemists*.
  - Rustleif (Dawnstar): *Night Falls on Sentinel*.
  - Ysolda (Whiterun): Mammoth Tusk.

### Dungeon Delving (Bandits) (Favor204 → 2 copies)
- **Steps:** (10) Find the item inside the dungeon → (15) Return it to the quest giver [1].
- **Givers:** Amren (Whiterun) → Amren's Family Sword; Shahvee (Windhelm) → Amulet of Zenithar [2][3].

### Dungeon Delving (Caves) (Favor205 → 5 copies)
- **Steps:** same as above [1].
- **Givers:** [3]
  - Roggi Knot-Beard (Kynesgrove): Ancestral Shield.
  - Oengul War-Anvil (Windhelm): Queen Freydis's Sword.
  - Runil (Falkreath): Runil's Journal.
  - Noster Eagle-Eye (Solitude): Noster's Helmet.
  - Frida (Dawnstar): Ring of Pure Mixtures.

### Bounty: … (dormant in LoreRim)
- **What the plugin contains:**
  - Bounty: Bandit Boss, for all 9 holds.
  - Bounty: Forsworn, for the Reach only. The other holds get Beast, Draugr or Warlock.
  - Bounty: Giant, for Whiterun, Eastmarch and the Pale. The other holds get Beast, Spriggan, Falmer, Draugr, Hagraven or Vampire.
  - Bounty: Dragon, for all 9 holds [1].
- **Author's design:** level gates from 15 to 30. The dragon bounty requires Dragon Rising, level 30 and an unfinished main quest. Rewards are leveled gold [2].
- **LoreRim:** see Starting in LoreRim. These copies are not wired up without the optional file [1][2].

## Locations
These are the vanilla towns, unchanged: Whiterun, Windhelm, Solitude, Markarth, Falkreath, Dawnstar, Morthal, Winterhold, Kynesgrove, Darkwater Crossing, Anga's Mill and Skaal Village [1][3]. The mod adds no new locations [1].

## Rewards & notable items
The rewards are the vanilla ones: skill increases, leveled gold or potions, and Annekke or Ahtar becoming a follower [3]. FQS does not change favor rewards; its own reward change applies only to bounties [2].

## LoreRim notes
- **Bounties:** for the Jarl/Steward bounty jobs actually in LoreRim, see the Requiem notes ([Requiem quests](requiem-quests.md)). Missive Board bounties are covered in [Missives](missives.md).
- **Thaneships:** favor quests count toward thaneship "people helped" (unverified); see [Thane, Hearthfire & favors](../vanilla-changes/thane-hearthfire-and-favors.md).
- **Dialogue patch:** *NGCDT - Favor Quests Separated Patch* is a compatibility plugin that masters on FQS. Judging by its name and masters, it reconciles Narrative Gameplay Consistent Dialogue Tweaks' line fixes with the split records; its record contents were not inspected [1].
- **Ship as-is:** USSEP is loaded, which the FQS author strongly recommends. A separate USSEP compatibility patch is offered on the mod page [2]. No such USSEP patch plugin is in LoreRim's FQS folders [1]. Whether LoreRim folded it into its own patches is not verified.

## Related
- [Missives](missives.md)
- [Thane, Hearthfire & favors](../vanilla-changes/thane-hearthfire-and-favors.md)
- [Side quests & misc](../vanilla-changes/side-quests-and-misc.md)
- [Requiem quests](requiem-quests.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest records, story-manager nodes, BQ copies, installed files/patches | LoreRim install: `Favor Quests Seperated.esp` QUST/SMQN records; Default profile modlist; mod folder contents | mod v2.11.1.0 | 2026-10-02 |
| 2 | design, 32/7 counts, optional bounty file, compatibility | [FQS Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/73903) via meta.ini cache | 2025-01-18 (nexusLastModified) | 2026-01-12 cache |
| 3 | per-town givers, targets, items, rewards (vanilla baseline) | UESP: [Delivery](https://en.uesp.net/wiki/Skyrim:Delivery), [A Few Words with You](https://en.uesp.net/wiki/Skyrim:A_Few_Words_with_You), [Some Light Theft](https://en.uesp.net/wiki/Skyrim:Some_Light_Theft), [Kill the Bandit Leader](https://en.uesp.net/wiki/Skyrim:Kill_the_Bandit_Leader), [Rare Gifts](https://en.uesp.net/wiki/Skyrim:Rare_Gifts), [Dungeon Delving (Bandits)](https://en.uesp.net/wiki/Skyrim:Dungeon_Delving_(Bandits)), [Dungeon Delving (Caves)](https://en.uesp.net/wiki/Skyrim:Dungeon_Delving_(Caves)) | n/a | 2026-10-02 |
| 4 | BQ01–BQ04 overridden only by Requiem.esp | corpus import `vanilla-quest-overrides.json` (derived from LoreRim install) | n/a | 2026-10-02 |
| 5 | no LoreRim-specific gate mentioned | LoreRim site imports (main, factions, quest-expansions, new-quests) — no mention of favor quests | n/a | 2026-10-02 |
