---
id: ascend-hidden-peaks
title: Ascend - Hidden Peaks of Skyrim
kind: mod-added
category: new-quests
summary: An exploration challenge rather than a journal quest. Climb hidden mountain paths to secret summits (5 in Skyrim, 4 on Solstheim in LoreRim) and meditate at each one. Each meditation reveals a map marker and adds a small fire, frost or shock resistance that works only in cold areas. Hidden extras include Golden Feathers, the Ice-Breaker hammer, the Frost Dagger of Self-Doubt and the Wayfarer Scarf.
mods:
  - name: Ascend - Hidden Peaks of Skyrim
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/120802
    version: f1.01
plugins: [Ascend - Hidden Peaks of Skyrim.esp]
quests: []
locations: [Mount Anthor Peak, Skyborn Range Peak, Brittleshin Peak, Forelhost Peak, Monahven Peak (Throat of the World), Frykte Peak, Hvitkald Peak, Mortrag Peak, Mount Moesring]
region: Skyrim (Mount Anthor, the Throat of the World, above Labyrinthian, near Bleak Falls Barrow, Forelhost) and Solstheim
start: There is no quest giver or journal entry. Find the start of a hidden path (a small cairn with a red cloth, then follow the wind) and climb to the summit. At the top, use the "Meditate" spot to collect the peak.
related: [mod-added/leaps-of-faith.md, areas/new-landmarks-and-shrines.md, areas/solstheim.md, areas/whiterun-hold.md, areas/the-rift-and-riften.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: high
updated: 2026-10-02
---

# Ascend - Hidden Peaks of Skyrim

Ascend, by JaySerpa [6] (its records use the prefix "Haiku"), turns mountain climbing into a collectible challenge. Hidden paths lead to remote summits, and at the top you meditate while a flute song plays and a haiku about the place appears [1][2]. Each summit you conquer adds a small elemental resistance that applies only in cold places [1][2]. The mod adds no journal quest. Its only quest record, `Haiku_HiddenPeaks` "Find The Hidden Peaks", has no objectives or journal text, so nothing appears in your quest log [2].

## Starting in LoreRim
- **No trigger or level gate.** Every peak is available from the start of the game. LoreRim's New Quests page: "Climb your way up the 10 hidden mountain peaks of Skyrim. Let the wind guide you to the summit. Meditate on top of the highest spots of Skyrim to become one with the land." [3]
- **Finding a path:** "The start of the designated path is usually marked with a small cairn with a red flying cloth pointing the way." If you get lost while climbing, "look for any sort of wind nearby. The wind shows the way." [1]
- **Collecting a peak:** activate the **Meditate** furniture at the summit. This plays the flute music, shows the peak's haiku, lights a candle, **enables the peak's map marker** and adds the reward spell. Each peak counts toward your total only once [2].
- **Traversal:** the Skyrim paths are built around EVG Animated Traversal ledges. `EVGAnimatedTraversal.esl` is a hard master of the plugin, and LoreRim has it active [1][2][4]. The author says the four Solstheim peaks were left close to vanilla, mostly without traversal markers, and all can be done on foot [1].
- **Shortcuts:** the author doesn't mind you skipping his paths ("you can use paraglider… or the console command TCL"). LoreRim ships *Skyrim's Paraglider* [1][4].
- **LoreRim count:** the site says "10 hidden mountain peaks", but in LoreRim only **9** can be collected. See *LoreRim notes* [3][4].

## Quests
There are no journal quests. The activity is the set of peaks below, each collected by meditating at its summit [2].

### The peaks and what each one grants
Peak → resistance mapping comes from each summit trigger's script properties [2]. The "near" hints are from the mod page [1].

| Peak (map marker) | Where (mod page hint) | Meditation title | Resistance line |
|---|---|---|---|
| **Mount Anthor Peak** | near the Shrine of Azura | Mount Anthor Meditation | Frost |
| **Monahven Peak** | High Hrothgar, at the Throat of the World | High Hrothgar Meditation | Frost |
| **Forelhost Peak** | near Forelhost | (reuses "Mount Anthor Meditation" title; Forelhost haiku) | Frost |
| **Skyborn Range Peak** | near Labyrinthian | Skyborn Range Meditation | Shock |
| **Brittleshin Peak** | "Brittleshin Hills", after exiting Bleak Falls Barrow | Brittleshin Meditation | Shock |
| **Frykte Peak** (Solstheim) | near Saering's Watch | Frykte Peak Meditation | Fire |
| **Hvitkald Peak** (Solstheim) | near Fahlbtharz | Hvitkald's Peak Meditation | Fire |
| **Mortrag Peak** (Solstheim) | near White Ridge Barrow | Mortrag's Peak Meditation | Fire |
| **Mount Moesring** (Solstheim) | near Moesring Pass | Mount Moesring Meditation | Fire |

- The Skyrim summits get new map markers. The High Hrothgar one is named **Monahven Peak** in the plugin. The Solstheim summits reuse Dragonborn's existing markers (Frykte Peak, Hvitkald Peak, Mortrag Peak, Mount Moesring) [2][5].
- The Forelhost summit message reuses the title "Mount Anthor Meditation", but its haiku is about Forelhost and Lake Honrich. This is a cosmetic slip in the plugin [2].

## Locations
- **Skyrim summits:** Mount Anthor Peak, Monahven Peak (Throat of the World), Forelhost Peak, Skyborn Range Peak (above Labyrinthian), Brittleshin Peak (above Bleak Falls Barrow). The paths are "practically invisible", and the mod makes no vanilla landscape edits [1][2].
- **Solstheim summits:** Frykte Peak, Hvitkald Peak, Mortrag Peak, Mount Moesring. These are vanilla Dragonborn "hidden peaks" [1][5].
- **Shrine to Kyne** (mountain north of Windhelm): a tenth, optional peak that needs the separate *Shrine To Kyne* mod plus a patch. **LoreRim doesn't ship either**, so this peak isn't in the game. The main plugin still contains its unused "Shrine to Kyne Meditation" message [1][2][4].

## Rewards & notable items
**Peak resistances.** These are ability spells that scale with how many peaks of each type you've done and apply only in cold regions [1][2]:
- **Kyne's Warm Embrace** (frost; Mount Anthor, Monahven, Forelhost): Resist Frost 5% / 10% / 15% after 1 / 2 / 3 frost peaks [2].
- **Kyne's Storm Veil** (shock; Skyborn Range, Brittleshin): Resist Shock 5% / 10% / 15% after 1 / 2 / 3 shock peaks. LoreRim has only two shock peaks, so the most you can get is **10%** (derived from records; medium) [2][4].
- **Kyne's Rainfall Ward** (fire; the four Solstheim peaks): Resist Fire 3% / 6% / 10% / 15% after 1 / 2 / 3 / 4 fire peaks [2].
- The effect text reads "Your <Fire/Frost/Shock> Resistance is increased by <mag>% while in cold regions." The author describes the cap as 15% per element [1][2].
- **Turning rewards off:** console `set Haiku_DisableRewards to 1` [1][2].
- Meditating also casts a **Reduce Stress** spell, which only matters with the *Stress and Fear* mod. LoreRim doesn't ship that mod, so this does nothing there (medium) [1][2][4].

**Hidden extras** (the mod page's spoiler section, located from the plugin's placed references) [1][2]:
- **Golden Feathers** (ingredient): one or two at each peak. The plugin places 17 across all nine peak areas (two each, one at the Throat of the World). They're for jumping down safely. In LoreRim, `LoreRim - Alchemy Tweaks.esp` gives them **Resist Fall Damage** ("Reduces 99% of Fall Damage", 120 s), **Resist Frost** (120 s), **Cure Disease** and **Invisibility** (4 s). The original mod uses a 30 s fall-damage window [2][4].
- **Bjoric's Journal** and the **Frost Dagger of Self-Doubt**: under a snow mound below the Forelhost summit (cell `ForelhostExterior04`). Hit the mound with fire or a torch to uncover the frozen skeleton. The journal is Bjoric the Bold's last entry, dated 4E 132 [1][2].
- **Ice-Breaker** (silver warhammer; enchantment "Ice-Breaker", "Especially effective against Frost Atronachs and Ice-Wraiths."): held by a frozen corpse in a cauldron. Its placed reference sits in the same exterior cell as the Skyborn Range summit, far below it (inferred from coordinates; medium) [1][2].
- **Wayfarer Scarf** ("Increases your movement speed by 10 points outside combat."): worn by a corpse frozen in ice on Solstheim, next to the Frykte Peak summit. Hit the ice with Ice-Breaker to free it. Activating the corpse before that shows "Only a special tool could break through it." [1][2]

## LoreRim notes
- **Installed:** v f1.01 (the latest on Nexus per the meta.ini cache), active in the Default profile [4].
- **No Shrine to Kyne peak** (see Locations). The site's "10 hidden mountain peaks" matches the mod page's count including the optional addon, not what LoreRim actually ships [1][3][4].
- **Requiem rebalance of the weapons:** `Synthesis - Gameplay Overwrite.esp`, which loads after the other overrides, changes the **Frost Dagger of Self-Doubt** from 25 weight / 5 damage to **2.5 weight / 30 damage**. That removes the author's "heavy dagger" joke. It changes **Ice-Breaker** from 20 weight / 20 damage to **25 weight / 120 damage** (Requiem-scale). Read from the plugin records; how Requiem's damage formula uses them was not checked (medium) [4].
- **Tempering:** `LoreRim - Recipes.esp` adds a sharpening-wheel temper recipe for Ice-Breaker using a Silver Ingot [4].
- `LoreRim - Doors and Containers.esp` overrides the frozen corpse container ("Frozen Corpse") that holds Ice-Breaker [4].
- **Compatibility:** the author lists only "Improved Mountain Lod and Z fight patch" as incompatible. LoreRim doesn't ship it (not found in the mod list) [1][4].
- **Add-ons not shipped:** a separate Nexus translation, *Ascend - Hidden Peaks of Wyrmstooth (CHT)*, implies a Wyrmstooth add-on exists. No Wyrmstooth peak add-on is in LoreRim's mod list, so Wyrmstooth has no Ascend peak in LoreRim [4][6].
- **Dynamic content:** the mod page says it was tested with Majestic Mountains and Skyclimb, and that DynDOLOD doesn't need re-running. LoreRim's own DynDOLOD output has this plugin as a master [1][4].

## Related
- [mod-added/leaps-of-faith.md](leaps-of-faith.md): the same author's companion exploration challenge, recommended on the mod page
- [areas/new-landmarks-and-shrines.md](../areas/new-landmarks-and-shrines.md)
- [areas/solstheim.md](../areas/solstheim.md): the four Solstheim peaks
- [areas/whiterun-hold.md](../areas/whiterun-hold.md) (Throat of the World, Bleak Falls Barrow), [areas/the-rift-and-riften.md](../areas/the-rift-and-riften.md) (Forelhost)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | concept, peak list and "near" hints, path markers (cairn/wind), cold-only rewards, 15% cap, disable command, easter eggs (feathers, dagger, Ice-Breaker, scarf), Shrine to Kyne addon, compatibility, FAQ | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/120802) via meta.ini cache (`nexusDescription`) | 2024-08-29 (nexusLastModified) | 2026-01-11 cache |
| 2 | quest record (no journal), MESG titles/haiku, map marker names, spell names and tiers (GetGlobalValue conditions), MGEF texts, item names, script behavior (`Haiku_Activation`, `Haiku_SnowMound`, `Haiku_ActivateCorpse`), placed reference cells | LoreRim install: `Ascend - Hidden Peaks of Skyrim.esp` records + `Source/Scripts/*.psc` | mod vf1.01 | 2026-10-02 |
| 3 | LoreRim listing and description | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 4 | installed version, active plugins, absent mods (Shrine To Kyne, Stress and Fear, Improved Mountain LOD), LoreRim overrides (`LoreRim - Alchemy Tweaks.esp`, `LoreRim - Recipes.esp`, `LoreRim - Doors and Containers.esp`, `Synthesis - Gameplay Overwrite.esp`), vanilla FormIDs resolved in `Skyrim.esm` | LoreRim install: meta.ini; profile Default plugins.txt / modlist.txt; plugin records | n/a | 2026-10-02 |
| 5 | Solstheim map markers are vanilla Dragonborn markers (`DLC2FryktePeakMapMarker`, `DLC2HvitkaldPeakMapMarker`, `DLC2MortragPeakMapMarker`, `DLC2MountMoesringMapMarker`) | LoreRim install: `Dragonborn.esm` REFR records | n/a | 2026-10-02 |
| 6 | author (JaySerpa); existence of a Wyrmstooth add-on translation | [Destructoid — "Discover Skyrim's hidden peaks with this mountaineering mod"](https://www.destructoid.com/discover-skyrims-hidden-peaks-with-this-mountaineering-mod/); [Nexus search results](https://www.nexusmods.com/skyrimspecialedition/mods/125159) (web search listing) | n/a | 2026-10-02 |
