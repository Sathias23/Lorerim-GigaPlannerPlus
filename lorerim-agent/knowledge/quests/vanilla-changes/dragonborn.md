---
id: dragonborn
title: Dragonborn (DLC) — LoreRim changes
kind: vanilla-changes
category: questline
summary: The Dragonborn DLC (Solstheim, Miraak) is mostly vanilla in LoreRim. The cultist ambush that starts it needs "The Way of the Voice" done AND level 25, and only rolls a 5% chance per check (Timing is Everything). Miraak gets stronger from four Solstheim dragon priests (Cult of the True Dragonborn). You can turn down The Ebony Warrior, who shows up from level 40. Severin Manor costs 10,000 gold, and "An Axe to Find" can be refused.
mods:
  - name: Timing is Everything SE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/25464
    version: 2.2.0.0
  - name: Timing is Everything SE - Settings Loader
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/57754
    version: 1.0.1.0
  - name: Cult of the True Dragonborn - Immersive Miraak Difficulty
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/83458
    version: 1.0.1.0
  - name: Mr. Ebony... Get Lost
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/52510
    version: 2.0.0.0
  - name: The Choice is Yours
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/3850
    version: 2.7.0.0
  - name: Severin Manor Has A price
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/62165
    version: 1.0.0.0
  - name: Bow of Shadows - Reduced Cut
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/81188
    version: 1.3.0.0
  - name: Requiem - Dragonborn Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/34829
    version: 5.0.1.0
  - name: Undeath - Classical Lichdom - ESMIFIED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/40802
    version: 3.60.0.0
  - name: Bloodskal Blade - Tweaks and Enhancements
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/55988
    version: 1.3.1.0
  - name: DLC2BlackBookCount Fix
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/164355
    version: 1.1.0.0
  - name: LoreRim - xEdit64 Output
    nexus: n/a (LoreRim output)
    version: n/a
plugins: [Dragonborn.esm, TimingIsEverything.esp, ImmersiveMiraakDifficulty.esp, EbonyGetLost.esp, TheChoiceIsYours.esp, Severin Manor Has A Price.esp, Bow of Shadows - Reduced Cut.esp, Fozars_Dragonborn_-_Requiem_Patch.esp, UndeathFixes.esp, Bloodskal Blade - Tweaks and Enhancements.esp, BlackBookFix.esp, LoreRim - Global Modifiers.esp]
quests: [Dragonborn, The Temple of Miraak, The Fate of the Skaal, Cleansing the Stones, The Path of Knowledge, The Gardener of Men, At the Summit of Apocrypha, The Ebony Warrior, Served Cold, An Axe to Find, The Final Descent, Deathbrand, Lost Knowledge, Black Book]
locations: [Solstheim, Raven Rock, Severin Manor, Kolbjorn Barrow, White Ridge Sanctum, Raven Rock Mine, Vahlok's Tomb, Apocrypha]
region: Solstheim (reached by ship from Windhelm docks)
start: Finish main quest "The Way of the Voice" and reach level 25. After that, each time the trigger checks there is a 5% chance that Miraak's cultists ambush you on the mainland. Read "Cultists' Orders" on their bodies, then take the Northern Maiden from the Windhelm docks to Raven Rock. On Solstheim itself the level gate does not apply. All of this can be changed in the Timing is Everything MCM.
level_hint: "25+ (Timing is Everything minimum level for the cultist attack)"
related: [vanilla-changes/main-quest-and-alternate-start.md, vanilla-changes/dawnguard.md, vanilla-changes/creation-club.md, vanilla-changes/daedric-quests.md, areas/solstheim.md, mod-added/miasma.md, mod-added/undeath.md, mod-added/destroy-the-dragon-cult.md, mod-added/requiem-quests.md, mod-added/missives.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
confidence: high
updated: 2026-10-02
---

# Dragonborn (DLC) — LoreRim changes

Dragonborn is the second DLC questline. Miraak, the first Dragonborn, is returning from Apocrypha. The quests take you to Solstheim (Raven Rock, Skaal Village, Tel Mithryn, Thirsk Mead Hall) and into Hermaeus Mora's Black Books [16][17]. The main quests are "Dragonborn", "The Temple of Miraak", "The Fate of the Skaal", "Cleansing the Stones", "The Path of Knowledge", "The Gardener of Men" and "At the Summit of Apocrypha" [15][17].

LoreRim keeps the story. Its changes are concentrated in four places [1][2][7][8]:
- **When the DLC starts:** it is delayed by level and only rolls a small chance.
- **Miraak's strength:** it depends on the Solstheim dragon priests.
- **The Ebony Warrior:** you can refuse him.
- **Raven Rock side quests:** a few have small choice and economy tweaks.

## Starting in LoreRim

- **LoreRim's guide:** the Dragonborn questline starts after you complete "The Way of the Voice", when Miraak's cultists attack you [1]. The guide groups it with the main quest and Dawnguard as content that has been "immersively delayed" because it is not early-game [1].
- **The gate that actually ships** is Timing is Everything SE, set through its MCM Helper "Settings Loader". Its shipped settings are `iStartingQuest=1` ("After Way of the Voice (default)"), `iTIE_MinimumLevel=25` and `iTIE_CultistAttackChance=5` [2][3]. The winning records are TIE's story-manager nodes, carried forward by LoreRim's xEdit output `LoreRim - Global Modifiers.esp` (`DLC2CultistAmbushNode001`). Outside Solstheim, they require all of these [4]:
  - MQ105 "The Way of the Voice" at stage 160 or later
  - player level ≥ `DLC2CultistAttackMinLevel_KRY` (25)
  - the "Dragonborn" quest not yet started
  - a random roll under `DLC2WE09Chance` (5)
- **How this compares to vanilla:** vanilla `Dragonborn.esm` uses the same Way of the Voice and level 25 gates, but sets the cultist chance global to 100 [5]. In LoreRim the ambush is therefore a 5% roll each time it is checked, so it can come well after you qualify. That reading of the 5% is an inference from the records and TIE's description of "the percent chance that the player will be attacked by cultists" [2][3][5].
- **On Solstheim:** TIE's README says the quest triggers from the main-quest stage plus the random chance only, with no level requirement. Setting Cultist Attack Chance to 0 lets you explore Solstheim without starting it [2]. UESP notes the same vanilla behaviour: if you sail to Solstheim before the ambush, cultists can attack you there instead and carry the note [16].
- **Changing it:** in the "Timing is Everything" MCM you can move the trigger to one of nine main-quest points, from "After the Graybeards summon the Dragonborn" to "After Dragonslayer", or pick "Timing Unknown". You can also change the minimum level and the chance. A chance of 0 stops the questline from starting [3].
- **Going to Solstheim:** read "Cultists' Orders" on a cultist's body, then talk to Gjalund Salt-Sage on the *Northern Maiden* at the Windhelm docks for passage to Raven Rock [16].

## Quests

### Dragonborn (DLC2MQ01) / Cultists vs Player (DLC2WE09)
- **Vanilla:** cultists ambush you after "The Way of the Voice" (the vanilla record also requires level 25, or being on Solstheim). Objectives: "Find out who sent the Cultists" → "Read Cultists' Orders" → "Travel to Solstheim" → "Search for information about Miraak" → "Investigate the shrine" → "Reach the Temple of Miraak" [5][15][16].
- **In LoreRim:** the ambush trigger is gated by Timing is Everything as described above (level 25, 5% chance, configurable) [2][3][4]. Requiem and the Requiem - Dragonborn Patch also edit DLC2WE09. The patch's Nexus page says the questline "should start after completing the quest 'Blade in the Dark'", and its plugin does condition on MQ106 [6]. Both load before `LoreRim - Global Modifiers.esp`, which keeps TIE's conditions, so the "A Blade in the Dark" gate does **not** apply in LoreRim [4][6]. The USSEP edit to DLC2MQ01 is a bug fix [14].

### At the Summit of Apocrypha (DLC2MQ06) and Miraak's strength
- **Vanilla:** you read "Waking Dreams", tame Sahrotaar with Bend Will and fight Miraak at his temple in Apocrypha. Hermaeus Mora kills Miraak and you absorb his dragon souls [15][22].
- **In LoreRim:** Cult of the True Dragonborn - Immersive Miraak Difficulty (no vanilla records touched) gives Miraak +500 health, +500 magicka, +50% magic resistance, +25% fortify Destruction and +25% fortify shouts [7]. (Disputed: the shipped `ImmersiveMiraakDifficulty.esp` spell "Miraak Buff" gives its "Zam's Fortify Shouts" effect magnitude 20, not 25; the other magnitudes match the page [7].) Killing his three allied priests removes these buffs [7]:
  - **Dukaan:** −500 health, −25% magic resistance
  - **Zahkriisos:** −500 magicka, −25% magic resistance
  - **Ahzidal:** −25% Destruction, −25% shouts

  Killing **Vahlok**, the priest who sealed Miraak away, instead *adds* +25% magic resistance, +1000 health, +75% Destruction and +25% One-Handed [7]. LoreRim's guide summarizes this as: "Kill Miraak's dragon priests to break his influence and weaken him... or kill his challenger to strengthen him" [1].

  Priest locations per UESP [23]:
  - Ahzidal: Kolbjorn Barrow
  - Dukaan: White Ridge Sanctum
  - Zahkriisos: Raven Rock Mine
  - Vahlok the Jailor: Vahlok's Tomb

  The mod adds no reward and no in-game buff readout [7]. The USSEP edit to DLC2MQ06 is a bug fix [14].

### The Ebony Warrior (DLC2EbonyWarriorQuest)
- **Vanilla:** at level 80, a warrior in ebony approaches you in a city and challenges you to fight him at his "Last Vigil", a camp northeast of Fort Greenwall. He drops heavily enchanted ebony gear [18].
- **In LoreRim:**
  - **When he appears:** the level gate comes from TIE's `DLC2EbonyWarriorMinLevel_KRY`. The Settings Loader's MCM defaults to 80, but the `settings.ini` shipped in the LoreRim install sets `iTIE_EbonyWarrior=40`. The loader applies that file when the game starts and on every reload, so he can appear from **level 40** [3].
  - **Refusing him:** Mr. Ebony... Get Lost adds three replies to his challenge [8]:
    - "Very well, I'll be there." — the normal duel.
    - "Sorry. You'll have to find some other way to stroke your ego."
    - "I have no time for trifles."

    A new journal stage 250 records "I dismissed the Ebony Warrior's challenge -- he looked quite dejected." The mod also adds the objective "Tell him to get lost" [8]. Its page describes this as letting you skip the quest "or accept it, in case you're fond of epic duels" [8]. LoreRim's guide lists it as "Skip or play the silly Ebony Warrior quest" [24].

### Served Cold (DLC2RR02)
- **Vanilla:** Captain Veleth sends you to Adril Arano to stop an Ulen-family assassination plot against Councilor Morvayn. The reward is leveled gold plus Severin Manor and everything in it [20].
- **In LoreRim:** with Severin Manor Has A price, the manor is no longer free. After the quest, a "Notice" appears at the manor's entrance. Read it, then ask Cindiri Arano "I would like to buy Severin Manor? (10000 gold)". She gives you the "Deed of Severin Manor" and the "Severin Manor Master Key". The price is the global `ANDR_SeverinManorPrice` [10].
- **Bow of Shadows:** Bow of Shadows - Reduced Cut disables the Creation Club Bow of Shadows quest. The bow is placed as loot in the Severin family chest inside Severin Manor, and the safe needs Mirri Severin's key, "most easily available as part of the Served Cold quest" [11]. LoreRim's site describes this as part of "the Raven Rock/Morag Tong questline" [24].

### An Axe to Find (DLC2RR03Intro) and The Final Descent (DLC2RR03)
- **Vanilla:** Glover Mallory, Raven Rock's blacksmith, wants his Ancient Nordic Pickaxe back from Crescius Caerellius. You can return it, or lie to Glover so Crescius keeps it and take leveled gold instead. Crescius only discusses the pickaxe once "The Final Descent" has begun [21].
- **In LoreRim:** The Choice is Yours stops the quest starting until you agree. Glover's request gets "Sure." / "I don't have time for this." options, a new stage 17 is added, and Crescius gets a refusal line: "I'd like to help, but I have more urgent matters to deal with." [9]. Objectives are unchanged: "Retrieve the Ancient Nordic Pickaxe" / "Return the Ancient Nordic Pickaxe to Glover Mallory" / "Tell Glover Mallory a lie about the Ancient Nordic Pickaxe" [9]. The Choice is Yours says a declined quest can still be taken up later [9].

### Lost Knowledge (DLC2TTR1) and Black Book (DLC2WE06)
- **Vanilla:** these are Tel Mithryn and miscellaneous Black Book quests [17].
- **In LoreRim:** Undeath's fix plugin edits both so they "can no longer send you to Undeath's black book location" in Apocrypha, which would otherwise break them [12]. DLC2BlackBookCount Fix edits the Black Book controller so that other mods can read how many Black Books you have read. It also includes an Apocrypha exit-bug fix [25]. See [Undeath](../mod-added/undeath.md) for Undeath's own Black Book "Whispers of the Veil".

### Deathbrand (DLC2dunHaknirTreasureQST)
- **Vanilla:** from level 36, reading the *Deathbrand* book (or asking Geldis Sadri for rumors) starts the treasure hunt. Rewards are Deathbrand armor, Bloodscythe and Soulrender [19].
- **In LoreRim:** TIE's shipped Deathbrand minimum is 36, the same as vanilla [3]. The USSEP edit is a bug fix [14].

## Rewards & notable items
- **Bloodskal Blade:** Bloodskal Blade - Tweaks and Enhancements reworks the sword [13]:
  - The beams have a 5-second cooldown and scale with Destruction.
  - They deal extra damage to Dragon Priests and Miraak.
  - The enchantment, "Bloodskal Strike", can be disenchanted.
- **Requiem - Dragonborn Patch** rebalances Solstheim for Requiem [6]:
  - static-level actors
  - reworked Apocrypha loot
  - Seekers and Lurkers made "very serious opponents"
  - Stalhrim gear with worse stats but 25% better enchantments
  - higher crime fines in Raven Rock

  Later LoreRim patchers may override individual records [6].

## LoreRim notes
- **Bug-fix-only overrides:** USSEP edits Deathbrand, Unearthed, Retaking Thirsk, The Chief of Thirsk Hall, Dragonborn, The Fate of the Skaal, At the Summit of Apocrypha, March of the Dead, Served Cold, The Final Descent, An Axe to Find, Lost Legacy, A New Source of Stalhrim, Halbarn Favor Quest, Reluctant Steward, A New Debt, Azra's Staffs, Hunting and Gathering, Filial Bonds and Black Book. These are fixes, not design changes [14].
- **No new Dragonborn-questline quests:** none of the Dragonborn-specific mods in this unit adds a playable quest [14]. New Solstheim content comes from separate mods, for example [Miasma](../mod-added/miasma.md), started from Haj-Xul in the Retching Netch, recommended level 20+ [24].
- **Saint Jiub mods are Dawnguard, not Dragonborn:** "Saint Jiub's Bookmarks" and "Honor Thy Word - Saint Jiub Opus Epilogue" were listed as candidates for this unit, but they concern the Soul Cairn. The quest they extend, "Impatience of a Saint", is in Dawnguard.esm. In brief:
  - Bookmarks adds swirling-paper markers at the Opus pages.
  - Honor Thy Word lets you sell the Opus to Viarmo at the Bards College for reprinting. He only believes you if you completed "Tending the Flames".

  See [Dawnguard](dawnguard.md) [15][24].
- **Contradiction, resolved by the install:** the Requiem - Dragonborn Patch page says the DLC starts after "A Blade in the Dark", while the LoreRim site says "The Way of the Voice". The winning records in the install follow TIE's "After Way of the Voice" with level 25 [1][4][6].

## Related
- [Main quest & alternate start](main-quest-and-alternate-start.md)
- [Dawnguard](dawnguard.md)
- [Creation Club](creation-club.md) (Bow of Shadows)
- [Solstheim](../areas/solstheim.md)
- [Miasma](../mod-added/miasma.md)
- [Undeath](../mod-added/undeath.md)
- [Destroy the Dragon Cult](../mod-added/destroy-the-dragon-cult.md)
- [Requiem quests](../mod-added/requiem-quests.md)
- [Missives](../mod-added/missives.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | LoreRim start gate, Miraak dragon-priest summary | [LoreRim site — Main Quests](https://www.lorerim.com/guides/quests/main) (imports/lorerim-site/main.md) | n/a | 2026-10-02 |
| 2 | TIE features, Solstheim behaviour, chance semantics | LoreRim install: `Timing is Everything SE` README + `TimingIsEverything.esp` (SMQN `DLC2CultistAmbushNode001`, GLOBs); [Nexus 25464](https://www.nexusmods.com/skyrimspecialedition/mods/25464) via meta.ini cache | 2021-09-14 (nexusLastModified) | 2026-10-02 |
| 3 | Shipped TIE values (start point, level 25, chance 5, Ebony Warrior 40, Deathbrand 36), MCM options | LoreRim install: `Timing is Everything SE - Settings Loader` `MCM/Config/TimingIsEverything/settings.ini`, `config.json`, translations, `tie_mcmscript.psc`; [Nexus 57754](https://www.nexusmods.com/skyrimspecialedition/mods/57754) | 2023-04-06 (nexusLastModified) | 2026-10-02 |
| 4 | Winning DLC2WE09 / SMQN records | LoreRim install: `LoreRim - xEdit64 Output/LoreRim - Global Modifiers.esp` (load position 3438 of 3491, profile Default) | n/a | 2026-10-02 |
| 5 | Vanilla DLC2WE09 conditions, `DLC2WE09Chance`=100 | LoreRim install: `Stock Game/Data/Dragonborn.esm` records | n/a | 2026-10-02 |
| 6 | Requiem patch claims and its DLC2WE09 edit | `Requiem - Dragonborn Patch` (`Fozars_Dragonborn_-_Requiem_Patch.esp` records); [Nexus 34829](https://www.nexusmods.com/skyrimspecialedition/mods/34829) via meta.ini | 2022-01-20 (nexusLastModified) | 2026-10-02 |
| 7 | Miraak buffs and priests | LoreRim install: `ImmersiveMiraakDifficulty.esp`; [Nexus 83458](https://www.nexusmods.com/skyrimspecialedition/mods/83458) via meta.ini cache | 2026-01-11 cache | 2026-10-02 |
| 8 | Ebony Warrior skip dialogue and stages | LoreRim install: `EbonyGetLost.esp` QUST/DIAL records; [Nexus 52510](https://www.nexusmods.com/skyrimspecialedition/mods/52510) via meta.ini | 2025-02-17 (nexusLastModified) | 2026-10-02 |
| 9 | An Axe to Find opt-in | LoreRim install: `TheChoiceIsYours.esp` records; [Nexus 3850](https://www.nexusmods.com/skyrimspecialedition/mods/3850) via meta.ini | 2026-01-11 cache | 2026-10-02 |
| 10 | Severin Manor purchase | LoreRim install: `Severin Manor Has A Price.esp` records; [Nexus 62165](https://www.nexusmods.com/skyrimspecialedition/mods/62165) via meta.ini | 2022-01-18 (nexusLastModified) | 2026-10-02 |
| 11 | Bow of Shadows in Severin chest | [Nexus 81188](https://www.nexusmods.com/skyrimspecialedition/mods/81188) via meta.ini (plugin enabled in profile Default) | 2023-11-22 (nexusLastModified) | 2026-10-02 |
| 12 | Lost Knowledge / Black Book edits | LoreRim install: `UndeathFixes.esp`; [Nexus 40802](https://www.nexusmods.com/skyrimspecialedition/mods/40802) via meta.ini | 2026-01-11 cache | 2026-10-02 |
| 13 | Bloodskal Blade rework | [Nexus 55988](https://www.nexusmods.com/skyrimspecialedition/mods/55988) via meta.ini | 2024-09-17 (nexusLastModified) | 2026-10-02 |
| 14 | Override map (which mods touch which quests) | imports/vanilla-quest-overrides.json + unit brief vc-dragonborn.json | 2026-10-02 | 2026-10-02 |
| 15 | Official quest names and objectives | imports/official-quests.json (Dragonborn.esm, Dawnguard.esm) | n/a | 2026-10-02 |
| 16 | Vanilla Dragonborn start, Northern Maiden, early-Solstheim note | [UESP — Dragonborn (quest)](https://en.uesp.net/wiki/Dragonborn:Dragonborn_(quest)) | n/a | 2026-10-02 |
| 17 | Main-quest list, side-quest groups | [UESP — Dragonborn:Quests](https://en.uesp.net/wiki/Dragonborn:Quests) | n/a | 2026-10-02 |
| 18 | Vanilla Ebony Warrior (level 80, Last Vigil) | [UESP — The Ebony Warrior](https://en.uesp.net/wiki/Dragonborn:The_Ebony_Warrior) | n/a | 2026-10-02 |
| 19 | Vanilla Deathbrand (level 36) | [UESP — Deathbrand (quest)](https://en.uesp.net/wiki/Dragonborn:Deathbrand_(quest)) | n/a | 2026-10-02 |
| 20 | Vanilla Served Cold | [UESP — Served Cold](https://en.uesp.net/wiki/Dragonborn:Served_Cold) | n/a | 2026-10-02 |
| 21 | Vanilla An Axe to Find | [UESP — An Axe to Find](https://en.uesp.net/wiki/Dragonborn:An_Axe_to_Find) | n/a | 2026-10-02 |
| 22 | Vanilla Miraak finale | [UESP — At the Summit of Apocrypha](https://en.uesp.net/wiki/Dragonborn:At_the_Summit_of_Apocrypha) | n/a | 2026-10-02 |
| 23 | Solstheim dragon-priest tombs | [UESP — Dragon Priest (Dragonborn)](https://en.uesp.net/wiki/Dragonborn:Dragon_Priest) | n/a | 2026-10-02 |
| 24 | LoreRim site lists (Ebony Warrior, Bow of Shadows, Miasma); Saint Jiub mods | LoreRim site — Quest Expansions / Creation Club / New Quests (imports/lorerim-site); `Honor Thy Word` [Nexus 150138](https://www.nexusmods.com/skyrimspecialedition/mods/150138), `Saint Jiub's Bookmarks` [Nexus 165897](https://www.nexusmods.com/skyrimspecialedition/mods/165897) via meta.ini | 2026-01 cache | 2026-10-02 |
| 25 | Black Book controller fix | [Nexus 164355](https://www.nexusmods.com/skyrimspecialedition/mods/164355) via meta.ini | 2025-11-13 (nexusLastModified) | 2026-10-02 |
