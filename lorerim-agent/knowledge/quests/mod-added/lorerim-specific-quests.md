---
id: lorerim-specific-quests
title: LoreRim-Specific Quests and Quest Hooks (Startup, Spirit Tutors, Second Breath)
kind: mod-added
category: lorerim-specific
summary: LoreRim adds no story questline of its own. Its own plugins add a "LoreRim Startup Quest" (birthsign, major/minor skills, deity, traits, then a choice of Naaktiid or Konahrik mode), Ordinator's "Spirit Tutors" quest via LoreRim's rebuilt Ordinator plugin, and small hooks on vanilla quests (Second Breath after Alduin, an Oghma Infinium skill menu, artifact sacrifice at the Aetherium Forge).
mods:
  - name: LoreRim - MCM and INI Settings
    nexus: null
    version: null
  - name: LoreRim - xEdit64 Output
    nexus: null
    version: null
  - name: Ordinator - Perks of Skyrim
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/1137
    version: 9.31.0.0
  - name: Requiem - Lite
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/120272
    version: 1.0.0.0
plugins: [LoreRim Startup.esp, LoreRim Second Breath.esp, LoreRim Oghma Reward.esp, LoreRim Artifact Sacrifice.esp, Ordinator - Perks of Skyrim.esp (LoreRim - xEdit64 Output), Requiem Lite.esp]
quests: [LoreRim Startup Quest, Spirit Tutors]
locations: []
region: Skyrim (Spirit Tutors uses exterior markers in the Skyrim worldspace)
start: The LoreRim Startup Quest runs on its own when you close the race menu on a new game. Spirit Tutors needs Ordinator's 30-Restoration perk "Spirit Tutors". Second Breath is granted when Alduin is defeated.
related: [mod-added/requiem-quests.md, vanilla-changes/main-quest-and-alternate-start.md, vanilla-changes/daedric-quests.md, mod-added/legends-of-aetherium.md, mod-added/gravewind.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9]
confidence: medium
updated: 2026-10-02
---

# LoreRim-Specific Quests and Quest Hooks

LoreRim's own plugins (in the "LoreRim - MCM and INI Settings" and "LoreRim - xEdit64 Output" mod folders) add **no new story questline**. What they do add is a scripted **startup quest** that runs character creation, one perk-driven quest from Ordinator (**Spirit Tutors**), and small LoreRim-only hooks on vanilla quests [1][3][6][7][8]. This file collects them so an agent can answer "is that a LoreRim thing?". Requiem's own quests are covered in [requiem-quests.md](requiem-quests.md).

## Starting in LoreRim
- **LoreRim Startup Quest:** automatic. The script waits for the race/sex menu to close on a new game, then starts setup [1].
- **Spirit Tutors:** you must take Ordinator's Restoration perk **Spirit Tutors** (requires base Restoration 30 — the perk's condition in the plugin is GetBaseActorValue Restoration >= 30). The perk text: "Two spirit tutors roam Skyrim. Find them and speak with them to receive a permanent blessing…" [3][4].
- **Second Breath:** given automatically when Alduin's defeat line plays [6].
- **Oghma Infinium menu:** shows when you read the Oghma Infinium (reward from the vanilla Daedric quest "Discerning the Transmundane") [7].

## Quests

### LoreRim Startup Quest (`LoreRimStartupQuest`, LoreRim Startup.esp)
- **Giver / trigger:** closing the race menu (RaceSex Menu) [1].
- **Steps (from the `LoreRimStartUp` script, in order):**
  1. Message: "Welcome to LoreRim! The installation process will begin now. Make your choices to shape your character and start your destiny!" [1]
  2. Requiem installation runs automatically. The script opens and closes the inventory, which triggers Requiem's "A Requiem of better times" (this plugin overrides `REQ_Quest_Installation`) [1].
  3. **Birthsign** selection (SkySigns) [1].
  4. **Major/minor skills** (Starting Skills menu) [1].
  5. **Deity**: Wintersun's free starting deity [1].
  6. **Traits** selection [1].
  7. **Game mode** message: "Naaktiid (New to LoreRim)" or "Konahrik (Classic LoreRim Experience)". The message says Konahrik "is for experienced players, looking for an engaging combat and slow power fantasy" and Naaktiid "for those who look for a more relaxes experience", and that the choice "can be customized at any time through the Mod Configuration menu" [1].
  8. A "Shows Keybinds" (keybinding help) spell is added [1].
- **Choices & outcomes:** **Naaktiid** turns on Requiem Lite (`bEnableLite`) and gives **+3 perk points** (`Naaktiid_Extra_Perks` = 3 in the plugin) [1]. Requiem Lite "gives the player some starting stats that can be [en]abled/disabled at any time": extra armor rating, magic resistance, health/magicka/stamina regen, and lockpicking expertise [2]. **Konahrik** leaves Requiem Lite off. LoreRim's preset MCM file ships `bEnableLite = 0` [2].
- **Rewards:** none beyond the character setup itself.

### Spirit Tutors (`ORD_SpiritTutors_Quest`, Ordinator - Perks of Skyrim.esp)
- **Giver / trigger:** the Ordinator Restoration perk "Spirit Tutors" (30) [3][4].
- **Where:** two ghost aliases (`ORD_Ghost1`, `ORD_Ghost2`) are placed at exterior markers. The markers are chosen by alias conditions (exterior, in the Skyrim worldspace), not fixed references, so we could not pin a location from the records [3].
- **Steps:** Stage 0: Find the Spirit Teacher [3].
- **Rewards:** one permanent blessing per tutor (two in total). Each makes "Restoration spells 1% stronger per 20 points of Magicka" [3][4].
- **LoreRim specifics:** the copy that loads is LoreRim's rebuilt `Ordinator - Perks of Skyrim.esp` in "LoreRim - xEdit64 Output", which overrides the Nexus original: the plugin name is active once in the Default profile, and MO2 serves the copy from "LoreRim - xEdit64 Output" because that folder has higher priority than "Ordinator - Perks of Skyrim" in `profiles/Default/modlist.txt` [3][9]. LoreRim is reported to add Ordinator perks "as appendages to Requiem's perks" [5]. We did not check whether this perk is reachable in LoreRim's Restoration tree.

### Second Breath (LoreRim Second Breath.esp): quest hook, not a quest
- **Trigger:** the plugin attaches a script to the dialogue line "Zu'u unslaad! Zu'u nis oblaan!" ("I am eternal! I cannot end!"). That script adds the ability **Second Breath** to the player [6].
- **Effect:** "The fall of Alduin has reshaped your soul… You may choose one additional trait. This choice is final." Using it opens the Traits menu for one extra pick [6].

### Oghma Infinium reward (LoreRim Oghma Reward.esp): quest-reward change
- LoreRim overrides the Oghma Infinium book (`DA04OghmaInfinium`) with new text and two choices: "Quickly put the book away..." / "Select Skills" [7].
- "Select Skills" opens a Starting-Skills-style menu. The script sets it to 6 skills with a reward value of 5, capped at 100 [7]. Our reading is that you pick 6 skills and each gains +5 (inferred from script arguments). See [vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md).

### Artifact Sacrifice (LoreRim Artifact Sacrifice.esp): mechanic, not a quest
- If you put a Daedric artifact into the **Aetherium Forge**, the patron is recorded as betrayed. Examples: Azura's Star, Dawnbreaker, Ebony Blade, Wabbajack, Skeleton Key/Gray Cowl, Volendrung, and several CC artifacts [8].
- If you currently worship that prince through Wintersun, worship ends: "You have destroyed a sacred relic of your god… You are forsaken." That prince then refuses future worship [8]. See [legends-of-aetherium.md](legends-of-aetherium.md).

## Locations
No new locations. Spirit Tutors spawns at existing exterior markers [3].

## Rewards & notable items
- Naaktiid: +3 perk points and Requiem Lite stats [1][2].
- Spirit Tutors: two permanent Restoration blessings [3].
- Second Breath: one extra trait after Alduin [6].

## LoreRim notes
- "LoreRim - xEdit64 Output" also contains LoreRim tweaks to other quest mods. Examples: `LoreRim Gravewind Start Tweak.esp`, `Journey to Baan Malur - Patched.esp`, `The Frozen Heart - Quest Mod - LoreRim Patch.esp`, `LoreRim - Undeath Patches.esp`, `Lorerim - Vigilant Patch.esp`/`LoreRim - Vigilant Boss.esp`, `LoreRim - Miasma Patch.esp` [9]. Those are covered in each mod's own file ([gravewind.md](gravewind.md) etc.).
- The output plugin's other Ordinator "quests" (Performer, Mind Spiders, Daedric Plaything, etc.) are background perk scripts with no journal text [9].
- These LoreRim folders have no Nexus page. `LoreRim - MCM and INI Settings/meta.ini` is a Wabbajack no-match include [1].

## Related
- [requiem-quests.md](requiem-quests.md)
- [../vanilla-changes/main-quest-and-alternate-start.md](../vanilla-changes/main-quest-and-alternate-start.md) (Alduin / Second Breath context)
- [../vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md) (Oghma Infinium)
- [legends-of-aetherium.md](legends-of-aetherium.md), [gravewind.md](gravewind.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Startup quest records, messages, sequence, Naaktiid perks | LoreRim install: `LoreRim - MCM and INI Settings/LoreRim Startup.esp` (QUST/MESG records) + `Scripts/Source/LoreRimStartUp.psc` + meta.ini | n/a | 2026-10-02 |
| 2 | Requiem Lite effect; LoreRim preset | [Nexus mod 120272](https://www.nexusmods.com/skyrimspecialedition/mods/120272) via meta.ini cache; LoreRim install `MCM/Settings/Requiem Lite.ini` | 2024-12-22 (nexusLastModified) | 2026-01-11 cache |
| 3 | Spirit Tutors quest, aliases, perk text | LoreRim install: `LoreRim - xEdit64 Output/Ordinator - Perks of Skyrim.esp` and `Ordinator - Perks of Skyrim/Ordinator - Perks of Skyrim.esp` (QUST/PERK/SPEL records) | Ordinator v9.31.0.0 | 2026-10-02 |
| 4 | Spirit Tutors perk description | [Nexus mod 1137](https://www.nexusmods.com/skyrimspecialedition/mods/1137) via meta.ini cache | 2021-10-31 (nexusLastModified) | 2026-06-08 cache |
| 5 | Ordinator perks appended to Requiem perks | Icy Veins, "Meet the Modder Who Turned Skyrim Into a Full-Time Job" (search-result snippet; page returned 403) | unknown | 2026-10-02 |
| 6 | Second Breath | LoreRim install: `LoreRim Second Breath.esp` + `LoreRim_SecondBreath*.psc` | n/a | 2026-10-02 |
| 7 | Oghma Infinium change | LoreRim install: `LoreRim Oghma Reward.esp` + `LoreRim_OghmaBookReward.psc` | n/a | 2026-10-02 |
| 8 | Artifact Sacrifice | LoreRim install: `LoreRim Artifact Sacrifice.esp` + `LoreRimArtifactSacrifice_*.psc` | n/a | 2026-10-02 |
| 9 | Active plugins; mod priority; xEdit output plugin list; helper quests | LoreRim install: `profiles/Default/plugins.txt`, `profiles/Default/modlist.txt`; imports `lorerim-xedit64-output.md` | n/a | 2026-10-02 |
