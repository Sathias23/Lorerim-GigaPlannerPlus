---
id: wyrmstooth-island
title: Wyrmstooth (island)
kind: area
category: new-lands
summary: Wyrmstooth is a large island north of Solitude across the Sea of Ghosts, added by the Wyrmstooth mod. It has its own worldspaces (Wyrmstooth and the Dimfrost underground). You get there during the quest "Barrow of the Wyrm". The island holds the mining settlement Stonehollow, the buyable player stronghold Fort Valus, about 20 quests, and more than 40 map-marked locations.
mods:
  - name: Wyrmstooth
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/45565
    version: 1.20.3.0
  - name: Sensible Wyrmstooth Prerequisite
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/121948
    version: 1.2.0.0
  - name: Wyrmstooth - Settings Loader
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/56504
    version: 2.0.1.0
  - name: Requiem - Wyrmstooth (Updated)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/116468
    version: f1.01
  - name: Stonehollow Overhaul for Wyrmstooth
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/131619
    version: 1.0.2.0
  - name: Unmarked Locations Pack - Wyrmstooth Addon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/169188
    version: 1.0.0.0
  - name: Missives - Wyrmstooth Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/26788
    version: f2.05
  - name: Skyrim Ferries
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/109843
    version: 1.3.6.0
  - name: Bluesky Hall and Fort Valus Allow Adoptions
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/97490
    version: 1.5.0.0
plugins: [Wyrmstooth.esp, Wyrmstooth0.esp, Rise of Wyrmstooth.esp, Requiem - Wyrmstooth.esp, WTUniqueStonehollow.esp, Unmarked Locations Pack - Wyrmstooth Addon.esp, Missives - Wyrmstooth.esp, Ferries - Wyrmstooth Addon.esp, GTS - Wyrmstooth Adoption.esp]
quests: [Wyrmstooth, Barrow of the Wyrm, Reclaiming the Past, Stickler in the Mud, Unwanted Guests, Retrieving Embersunder, Repaying a Debt, Robbed Blind, A Howl Load of Trouble, Someone with Backbone, A Priceless Commodity, Wrap Me Up, The Naked Nord, A Debt Unpaid, Blind Robber's Cache, Animal Bounty, Bandit Bounty, Vampire Bounty, Warlock Bounty, Noticeboard Pointer]
locations: [Wyrmstooth, Stonehollow, Fort Valus, Dimfrost, Wyrmstooth Barrow, Fort Moonwatch, Krakevisa, Kazmalgur, Gronndal Grove, Tomb of Vulom, Bloodfrost Burrow, Cragwater Cavern, Hag's Perch, Chapel of Zenithar]
region: Sea of Ghosts, north of Solitude (own worldspaces "Wyrmstooth" and "Dimfrost")
start: Theodyn Bienne, a courier, finds you starting from the Bannered Mare in Whiterun once you are level 10+ (MCM default), have finished The Way of the Voice, AND (LoreRim gate) have completed Rise in the East. The chain "Wyrmstooth" leads into "Barrow of the Wyrm", which sails you from the Solitude docks on the Red Wave.
level_hint: "10+ (island encounter zones have minimum level 10; Wyrmstooth Barrow and Dimfrost have minimum level 24)"
related: [mod-added/wyrmstooth.md, mod-added/missives.md, vanilla-changes/main-quest-and-alternate-start.md, vanilla-changes/side-quests-and-misc.md, areas/haafingar-and-solitude.md, areas/whiterun-hold.md, areas/hjorkvild-isles.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
confidence: high
updated: 2026-10-02
---

# Wyrmstooth (island)

Wyrmstooth is an island in the Sea of Ghosts, north of Solitude. The mod that adds it bills itself as "DLC-sized" and fully voice-acted [3][5]. It defines two worldspaces of its own: **Wyrmstooth**, the island surface, and **Dimfrost**, an underground region with Dwemer-themed interiors [1][2]. The mod's only edit to a base-game cell is the interior of the Red Wave, the ship that carries you to the island [3]. LoreRim ships the mod with a Requiem balance patch, an extra quest prerequisite, a Stonehollow visual and layout overhaul, an add-on that places unmarked locations, a Missives board, and ferry and adoption add-ons [6][8][9][11][12][13].

## Starting in LoreRim
- **How the questline starts:** an Imperial courier, Theodyn Bienne, tracks you down starting from the Bannered Mare in Whiterun. That starts the quest **Wyrmstooth** [1][3].
- **Mod default:** you must be level 10 and have finished the main quest *The Way of the Voice*. The Wyrmstooth MCM lets you change both conditions [3]. LoreRim's tuned-settings mod contains no Wyrmstooth override, so the Settings Loader defaults apply: the quest-gate setting is 4 (Way of the Voice) and the minimum level is 10 [7].
- **LoreRim-specific gate: you must also complete *Rise in the East*.** This is the vanilla East Empire Company quest in Windhelm [5][6][15]. The *Sensible Wyrmstooth Prerequisite* plugin (`Rise of Wyrmstooth.esp`) replaces the starter script. Every MCM option, including "Immediately", now also requires the Rise in the East quest (`MS10`) to have reached stage 100 or higher [6].
- **Level caveat:** the Requiem patch states it raises the "Player level requirement from 10 to 20", and its plugin sets the global `WTStartLevel` to 20 [8]. However, the Settings Loader's MCM script writes its INI default of 10 into that same global when the MCM initialises [7]. The effective start level is therefore probably 10, but this has not been verified in game. Check *Wyrmstooth → Requirements* in the MCM. The LoreRim site says level 10 [5].
- **To reach the island:** in **Barrow of the Wyrm**, meet Lurius Liore at the Solitude docks, where "He should have a vessel ready" [1]. The mod's FAQ names that vessel as the Red Wave [3]. Since an update you no longer have to sleep aboard the Red Wave to sail [4].
- **Return trips:** Holmar's dialogue moves you between Wyrmstooth and Skyrim, and a fix made this work for overencumbered players too [4]. LoreRim also ships *Skyrim Ferries* with its `Ferries - Wyrmstooth Addon.esp` [13]. Its exact ferry routes were not verified.

## Quests
Full walkthroughs are in [mod-added/wyrmstooth.md](../mod-added/wyrmstooth.md). Quests that take place on the island or start there:

### Wyrmstooth
- **Giver / trigger:** the courier Theodyn Bienne. **Steps:** speak to Lurius Liore at the Bannered Mare → meet the mercenaries on the road to Falkreath → find and defeat the dragon at Ancient's Ascent, south-east of Falkreath → speak to Athir → return to Lurius. The dragon Vulthurkrah flees to Wyrmstooth [1].

### Barrow of the Wyrm
- **Steps:** meet Lurius at the Solitude docks → follow him to Stonehollow, which the dragon has destroyed → go to Wyrmstooth Barrow at the far end of the island → find the sword *Goreduster* to open the barrow → follow the mage Alberthor, who transfers your mind into a Draugr so you can find the gate switch → descend into the dragon's den in **Dimfrost** → defend Stonehollow from Vulthurkrah → collect your reward from Lurius [1].

### Island side quests and bounties
- **Reclaiming the Past:** buy the deed to **Fort Valus** from Lurius Liore. Talk to him again to upgrade the fort or hire a crew [1].
- **Someone with Backbone:** at the Tomb of Vulom, gather Vulom's bones from Nordic ruins across the island. Vulom turns out to be a lich [1].
- **A Priceless Commodity:** spriggans at Gronndal Grove. You choose between Bolmar and the Spriggan Matriarch [1].
- **A Howl Load of Trouble:** find Dunyick's wolf Faelor and kill the bandits. Afterwards Faelor can follow you [1].
- **The Naked Nord:** help Gjalrunn, whose pants a witch took. The trail leads to "an old castle on the island to the north-west of Wyrmstooth" and to the warlocks at Krakevisa, with several endings [1].
- **Unwanted Guests** (kill the Thalmor spies) and **Wrap Me Up** (8 wisp wrappings) are both for Alberthor [1].
- **Blind Robber's Cache:** recover Rolgar's key from Dimfrost [1].
- **Stickler in the Mud:** 30 spiddal sticks for Elmera [1]. In LoreRim, the Rare Curios / The Cause patch swaps the spiddal-stick plants to The Cause's versions [13].
- **Errands on the mainland for islanders:** Retrieving Embersunder (Athir; Forsworn camp at Hag's End), Repaying a Debt (Shargam; Ulfgar at the Silverblood Inn, Markarth), Robbed Blind (Daenlit; Erikur's necklace, Solitude), A Debt Unpaid (Signy; Erikur's ledger) [1].
- **Bounties from the notice board** (*Noticeboard Pointer*: "Check the notice board for work"): Animal Bounty (the bear south of Fort Valus), Bandit Bounty (the Marauder Clanlord at Cragwater Cavern), Vampire Bounty (the Master Vampire at Bloodfrost Burrow), Warlock Bounty (Krakevisa) [1].

## Locations
Location records (LCTN) and map markers come from `Wyrmstooth.esp` [1][2]. UESP's location list matches the map markers [14].
- **Stonehollow:** the Imperial mining settlement and the island's hub. Its interiors include Miner's House, Laenius Household, Nalion And Gildan's House, Hulgard And Svenja's House, Chalureel Farm, Saeglopur Farm, Guard Barracks, Stonehollow Well, Hall Of The Dead, the **East Empire Company Tradehouse** and the inn **The Handsome Hermit** with its cellar (location record "The Hermit") [1][2]. Frostvein Mine is also listed [1].
- **Stonehollow Overhaul (LoreRim):** `WTUniqueStonehollow.esp` adds a **Chapel of Zenithar** location and edits the Hall of the Dead and Saeglopur Farm cells [9]. The author's description, seen only via a search snippet, says the Hall of the Dead becomes the undercroft of a new chapel and that the farmhouses get unified models [10].
- **Fort Valus:** the purchasable player stronghold, with Muster, Common House and Barracks [1][2]. With *Bluesky Hall and Fort Valus Allow Adoptions* installed, adoption is allowed there. This is inferred from the mod and plugin names only; there is no cached description [13].
- **Imperial Docks:** where you arrive. Includes the Dockmaster's House [2][14].
- **Wyrmstooth Barrow:** a large Nordic barrow at the far end of the island, with Crypt, Altar, Refectory, Temple and Tower interiors [1][2].
- **Dimfrost:** a separate underground worldspace and the dragon's den, with the Animonculatory, Aularium, Boilery, Boletarium and Luminatory. It is reached through the barrow, and four "Dwemer Lift" markers appear on the island [1][2].
- **Other dungeons and sites:** Fort Moonwatch, Krakevisa (warlocks), Kazmalgur (Orc longhouse), Gronndal Grove (spriggans), Tomb of Vulom, Bloodfrost Burrow (vampires), Cragwater Cavern / Coldwave Crescent (marauders), Hag's Perch, Haetar's Cave, Herman's Holdout, Belonir's Borg, Blind Robber's Bluff, Frostwind Folly / Frostwind Bastion, Twinpeak Tower, Waylayer's Watch, Stendarr's Outpost, Chillwater Mill, Abandoned Lighthouse, Ruined Homestead, Bloodstone Camp, a **Dark Brotherhood Sanctuary**, and an **Oblivion Gate** marker [1][2]. In LoreRim, *Wyrmstooth Uses The Cause Style Oblivion Gate* changes how that gate looks [13].
- **Camps, wrecks and landmarks (map markers):** Abandoned Camp, Chillbone Camp, Cragwater Camp, Dunyick's Camp, Imperial Camp, Thalmor Camp, Wanderer's Camp, Hunter's Shack, Gravetender's House, Dead Ship Point, Horker Isle, Grimsfyr Peak, Frostwolf Crag, Southroad Pass, Wulfmere's Watch, Wreck of the Salty Knave, Wreck of the Winter Sparrow [2].
- **Unmarked Locations Pack, Wyrmstooth add-on:** "More than 15 new locations to visit" on the island. They have no map markers and offer loot, notes and encounters [11].

## Services, merchants and home
- **Inn:** The Handsome Hermit. A Thieves Guild fence was added there [2][4].
- **Traders:** "a new merchant with a large amount of gold". Fort Valus's cook, blacksmith and gardener trade. Ja'Shavi-Dar and Hulgard keep regular business hours [4].
- **Missives board:** placed just outside the Stonehollow inn. It "Requires the Wyrmstooth main quest to be completed and the town completely rebuil[t]", and few missives appear because Stonehollow has few NPCs [12].

## Dangers and level hints
- Encounter zones on the island have a minimum level of 10. **Wyrmstooth Barrow and Dimfrost have a minimum of 24** [4]. Bosses get health scaling with a multiplier of 12 by default in the MCM [7].
- The Requiem patch rebalances the dragon, the Dragon Priest and the werewolves "to be more in-line with Requiem". It also reworks the spells, ores and ingots, and the gear, and renames NPCs (for example "Marauder Berserker" becomes "Marauder") [8].
- Hostiles named in quest text include marauders, warlocks, witches and hagravens, vampires, spriggans, Thalmor spies, draugr, the dragon Vulthurkrah and the lich Vulom [1].

## LoreRim notes
- The Rise in the East prerequisite comes from *Sensible Wyrmstooth Prerequisite*, whose author credits the plugin to Jelidity [6].
- The FAQ says that if Lurius never reaches the Red Wave, a mod has probably deleted or broken the pathing to XMarker `0004C488`. Sleeping, or using the console `moveto player` on the Red Wave's deck, fixes it [3].
- The author advises against removing the mod mid-game while you are on the island [3].

## Related
- [mod-added/wyrmstooth.md](../mod-added/wyrmstooth.md): the full questline
- [areas/haafingar-and-solitude.md](haafingar-and-solitude.md): the Solitude docks, departure point
- [areas/whiterun-hold.md](whiterun-hold.md): the Bannered Mare, where the questline starts
- [vanilla-changes/side-quests-and-misc.md](../vanilla-changes/side-quests-and-misc.md): Rise in the East
- [mod-added/missives.md](../mod-added/missives.md)
- [areas/hjorkvild-isles.md](hjorkvild-isles.md): another Sea of Ghosts island group

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal text, LCTN/WRLD names | LoreRim install: `Wyrmstooth.esp` QUST/LCTN/WRLD records (profile Default), via imports/mods/wyrmstooth.md | mod v1.20.3.0 | 2026-10-02 |
| 2 | map markers per worldspace, interior cell names | LoreRim install: `Wyrmstooth.esp` REFR map markers + CELL FULL names, parsed this run | mod v1.20.3.0 | 2026-10-02 |
| 3 | features, default start, Red Wave, FAQ | [Nexus: Wyrmstooth](https://www.nexusmods.com/skyrimspecialedition/mods/45565) via meta.ini cache | 2025-09-29 (nexusLastModified) | 2026-01-12 cache |
| 4 | travel, merchants, inn fence, encounter-zone levels | [Wyrmstooth readme / changelog (Jonx0r)](https://pastebin.com/sZ7JAV9W), linked from the Nexus page | n/a | 2026-10-02 |
| 5 | LoreRim start gate (Rise in the East), level 10 | [LoreRim site: New Lands](https://www.lorerim.com/guides/quests/new-lands) | n/a | 2026-10-02 |
| 6 | Rise in the East gate mechanics | LoreRim install: Sensible Wyrmstooth Prerequisite (`Rise of Wyrmstooth.esp`, `WT_QF__02AC9830.psc`) + [Nexus 121948](https://www.nexusmods.com/skyrimspecialedition/mods/121948) via meta.ini cache | 2026-01-29 (nexusLastModified) | 2026-02-05 cache |
| 7 | MCM defaults (gate 4, level 10, boss health 12), loader overwrites globals | LoreRim install: Wyrmstooth - Settings Loader (`MCM/Config/Wyrmstooth/settings.ini`, `WT_MCMScript.psc`); no override in "LoreRim - MCM and INI Settings" | v2.0.1.0 | 2026-10-02 |
| 8 | Requiem rebalance, level 10→20 claim | [Nexus: Requiem - Wyrmstooth (Updated)](https://www.nexusmods.com/skyrimspecialedition/mods/116468) via meta.ini cache + `Requiem - Wyrmstooth.esp` GLOB WTStartLevel = 20 | 2024-06-12 (nexusLastModified) | 2026-01-11 cache |
| 9 | Chapel of Zenithar, edited cells | LoreRim install: `WTUniqueStonehollow.esp` LCTN/CELL records | v1.0.2.0 | 2026-10-02 |
| 10 | Stonehollow Overhaul intent (secondary) | Web search snippet of [GitHub TateTaylorOH/Unique-Stonehollow](https://github.com/TateTaylorOH/Unique-Stonehollow) / Nexus 131619 | n/a | 2026-10-02 |
| 11 | unmarked locations add-on | [Nexus 169188](https://www.nexusmods.com/skyrimspecialedition/mods/169188) via meta.ini cache | 2026-01-10 (nexusLastModified) | 2026-01-11 cache |
| 12 | Missives board at Stonehollow | [Nexus 26788](https://www.nexusmods.com/skyrimspecialedition/mods/26788) via meta.ini cache | 2025-08-23 (nexusLastModified) | 2026-01-11 cache |
| 13 | patch mods present (Ferries add-on, adoption, Cause/Curios, Oblivion gate style) | LoreRim install: profile Default `modlist.txt` / `plugins.txt`, mod folders; [Skyrim Ferries Nexus 109843](https://www.nexusmods.com/skyrimspecialedition/mods/109843) via meta.ini; Wyrmstooth - Rare Curios Patch meta.ini | various | 2026-10-02 |
| 14 | location list cross-check | [UESP: Skyrim Mod:Wyrmstooth/Locations](https://en.uesp.net/wiki/Skyrim_Mod:Wyrmstooth/Locations) | 2026-05-22 (page, v1.20.3) | 2026-10-02 |
| 15 | MS10 = Rise in the East; MQ105 = The Way of the Voice | imports/official-quests.json (Skyrim.esm strings) | n/a | 2026-10-02 |
