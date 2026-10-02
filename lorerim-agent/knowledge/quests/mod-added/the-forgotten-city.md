---
id: the-forgotten-city
title: The Forgotten City
kind: mod-added
category: new-lands
summary: Award-winning 6–8 hour time-loop murder mystery set in a hidden Dwemer city under the Reach; two quests ("The Forgotten City" and "Forget-me-not"). In the installed LoreRim the courier start is effectively disabled (level 200 gate), so you start it by finding the Forgotten Ruins yourself.
mods:
  - name: The Forgotten City
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/1179
    version: 1.8.0.0
  - name: Modpocalypse NPCs - The Forgotten City
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/56739
    version: 1.0.0.0
  - name: Ancient Dwemer Metal - My patches - The Forgotten City
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/38845
    version: TFC-v1
  - name: Forgotten City Music Fixer
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/54019
    version: 2.2.0.0
  - name: Forgotten City Music Fixer - Cassia's Plea Remover
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/54019
    version: 2.2.0.0
  - name: Tools of Kagrenac - Forgotten Cities Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/92206
    version: f1.01
plugins: [ForgottenCity.esp, Forgotten City Music Fix.esp, Modpocalypse NPCs (v3) The Forgotten City.esp, Tools of Kagrenac - Forgotten Cities patch.esp]
quests: [The Forgotten City, Forget-me-not]
locations: [Forgotten Ruins, The Forgotten City, Citadel, Lakehouse, Underground tunnels, Abandoned Palace, Dwarven Dome, The Golden Sentinel Tavern, Cave]
region: The Reach (southwest Skyrim), Forgotten Ruins between Purewater Run and Hag Rock Redoubt
start: Go to the Forgotten Ruins in the Reach (west of Purewater Run, east-southeast of Hag Rock Redoubt) and enter. The courier who normally brings "Cassia's Plea" at level 5 is gated behind player level 200 in LoreRim's World Fixes plugin, which you cannot reach under LoreRim's default level cap of 101. The LoreRim site says level 25; the installed files disagree.
level_hint: "Author: designed for level 5+, higher recommended"
related: [areas/the-forgotten-city-zenithar.md, areas/the-reach-and-markarth.md, mod-added/tools-of-kagrenac.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
confidence: medium
updated: 2026-10-02
---

# The Forgotten City

The Forgotten City is a quest mod by Nick Pearce, first released in 2015 [9]. It is a 6–8 hour murder mystery in an ancient underground city, solved through investigation and time travel. It has a non-linear story, multiple endings, voiced dialogue and an original score [2]. The entrance, the Forgotten Ruins, is in the Reach [7]. The mod is built for solo play; the author says you should not bring a follower [2]. LoreRim ships it under the "Quests - The Forgotten City" separator with five companion mods: an NPC appearance overhaul, texture, music and courier patches [12].

## Starting in LoreRim
- **Mod default:** at level 5 or higher, a courier approaches you when you enter any city and hands you "Cassia's Plea". You can also walk to the "Forgotten Ruins" in the southwest of Skyrim [2]. If you find the ruins first, the journal reads "I've discovered some forgotten ruins on my own..." (stage 15) [1]. Cassia then asks whether you got her letter, and the conversation branches on whether you did [7].
- **What the installed LoreRim does:** the Story Manager node `000FCBeginQuest` starts the courier quest `000FCQuestStart`. In `ForgottenCity.esp` its conditions are: `000FCQuest01` neither running nor completed, and player GetLevel >= 5. `LoreRim - World Fixes.esp` (an enabled LoreRim-generated plugin) overrides the node and changes the level check to **GetLevel >= 200** [4]. LoreRim's default `Experience.ini` caps player level at 101 (`iMaxPlayerLevel = 101`). The optional "[Easy] Faster Leveling and Double Level Cap" mod raises that to 201, but it is disabled in all three profiles [5]. **In practice the courier never comes, so walk to the Forgotten Ruins.** (The conclusion that the courier is effectively disabled is inferred from these records; confidence medium-high.) [4][5]
- **Contradiction:** the LoreRim site says "Lorerim uses the delayed start mod which increases this to level 25" [3]. The installed files contain no level-25 gate for this mod. The only override found is the level-200 one above, and no installed "delayed start" mod targets The Forgotten City [4]. The site may describe an older LoreRim version.
- **Where:** the Forgotten Ruins map marker is in Tamriel cell (-41, -6), in the Reach south of Markarth [6]. UESP: "just west of Purewater Run and east-southeast of Hag Rock Redoubt, between two waterfalls" [7].
- No other prerequisites. The author lists no dependencies and names one incompatible mod, M.H.A.R.P.I.N. [2].

## Quests
### The Forgotten City
- **Giver / trigger:** reading "Cassia's Plea" (from the courier), or finding the Forgotten Ruins yourself [1].
- **Where:** Forgotten Ruins → The Forgotten City [1][6].
- **Steps (plugin objectives):** [1]
  1. Read Cassia's Plea; meet Cassia in the forgotten ruins and listen to her request. She wants you to find her brother Altrius [7].
  2. Enter the Forgotten City ("take a leap of faith into the city"), explore it and look for a way out.
  3. Optional: read the old man's suicide note. Defeat Altrius's ghost in the Citadel and take the Lakehouse key from a chest on the Citadel balcony, then enter the Lakehouse. Its door leads into the past and on to *Forget-me-not* [1][7].
  4. Optional: drink the Elixir of Acrobatics and confront Deglund about it.
  5. Back in the present: talk to Altrius (alive), smash the cracked wall in the bathroom, and escape the city through the Citadel bathroom with him.
  6. Optional: travel back in time and show the Arbiter's helmet to him as proof of your deeds.
- **Choices & outcomes:** the journal records an ending where you "convinc[e] the Arbiter to wind back the Dwarves' Law" and return to your own time. You then bring Altrius to Cassia, she rewards you, and she enters the city (stages 4000–4050) [1].
- **Rewards:** "Cassia has rewarded me" (stage 4050) [1]. The plugin includes a "Treasure Hunter's Talisman" whose EditorID is `000FCCassiaAmulet01`, so it is likely Cassia's reward (unverified) [6]. UESP lists no reward [7].

### Forget-me-not
- **Giver / trigger:** passing through Metellus's portal in the Lakehouse; you arrive 20 years in the past, on "1 Last Seed 180E", in the journal's own words [1].
- **Where:** The Forgotten City in the past (Citadel, tunnels, Palace) [1][6].
- **Steps (plugin objectives):** [1]
  1. Find a way back to your original timeline. Follow your guide to Jarl Metellus on the top floor of the Citadel.
  2. Identify the person most likely to destroy the city and inform Jarl Metellus. Go through the city entrance gate to stop the looters coming down the shaft.
  3. Optional investigations:
     - Ulrin's missing wife Maisi: search his home, find the locked room in the Citadel, free Maisi, tell Ulrin.
     - Find "Quintus". Identify the human remains in the tunnels and show Ulrin the necklace.
     - Brol the Scholar: get into the abandoned Palace and show Brol the book proving the Dwarves' Law is real.
     - The Immaculate Dwarven armor: find someone who knows about it, protect yourself from the radiation, get it from Rykas and show it to Gaia, and get the Immaculate Helmet from the tunnels.
     - Vernon's threatening notes: confront Rykas, then tell Vernon.
     - Return Habiq's ring from the tunnels.
     - Read Dooley's letter, return it, and search for his hidden fortune.
     - Get Skooma for Dwemora and bring it to Asanshi.
  4. Accuse a suspect to Metellus: Domitus, Gulvar, Vernon, Ulrin, Marius, Rykas, Deglund, Metellus himself, or yourself. Optionally lure your suspect to the tunnels and kill them.
  5. Follow Metellus to the Lakehouse to use his portal again.
- **Choices & outcomes:** [1]
  - If you refuse Metellus's request to kill your suspect, you must find your own way home (stage 1500).
  - Metellus sacrifices himself to open a portal. His death creates a paradox that returns you to your timeline (stages 5200–5500).
  - Alternatively, the Arbiter returns you to your own time (stage 6000).
  - The city's rule is the Dwarves' Law: "The many shall suffer for the sins of the one." [8]
  - The author says the story responds to your character's history and that you can play a saint, a psychopath, or something in between [2].
- **Rewards:** none listed on UESP [8]. Items you can obtain are listed below.

## Locations
- **Forgotten Ruins** — the exterior entrance in the Reach, with its own map marker [6][7].
- **The Forgotten City** — the underground city interior, also with a map marker [6]. Named interiors: Citadel, Lakehouse, Underground tunnels, Abandoned Palace, Dwarven Dome, The Golden Sentinel Tavern, Cave, Lonely tower, Chambers, and the shops Vernon's Fresh Produce, Firefly Finery and The Honest Trader, plus residents' houses [6].
- Full area write-up: [areas/the-forgotten-city-zenithar.md](../areas/the-forgotten-city-zenithar.md).

## Rewards & notable items
All names below are from `ForgottenCity.esp` records [6]:
- **Immaculate Dwarven armor set:** Immaculate Dwarven Armor, Helmet, Gauntlets and Boots. There is also an Arbiter variant whose helmet is "The Arbiter's Helmet".
- **Unique items:** Talisman of the Silver Tongue, Treasure Hunter's Talisman, Gulvar's Axe, Habiq's Ring, and the Elixir of Acrobatics.
- **Spells and effects:** "Decree of the Arbiter" and "Radiation Poisoning" (the Dwarven Dome hazard behind the radiation objective).
- In LoreRim, the Requiem patchers rebalance some of these items and NPCs. `Requiem for the Indifferent.esp` overrides 1 weapon and 63 NPCs, and `LoreRim - Armor Merges.esp` overrides 12 armors [10].

## LoreRim notes
- **NPC and Requiem patching:** "Modpocalypse NPCs - The Forgotten City" (v3, KS hair) changes the residents' faces [11]. The LoreRim-generated `The Forgotten City - NPC Patch.esp` reconciles 66 NPCs and 4 factions with Requiem [10].
- **Music fix:** "Forgotten City Music Fixer" (needs SKSE) removes the city's soundtrack the first time you leave after completing the quest. This fixes the known bug where the music keeps playing [11]. Its optional "Cassia's Plea Remover" add-on, which LoreRim installs, also removes the "Cassia's Plea" quest note when you exit, because the note otherwise stays flagged as a quest item and can't be dropped [11].
- **Courier conflict patch:** `Tools of Kagrenac - Forgotten Cities patch.esp` overrides the vanilla `WICourierDeliveries` dialogue, so this mod's courier and Tools of Kagrenac's courier can both deliver [10]. See [mod-added/tools-of-kagrenac.md](tools-of-kagrenac.md).
- **Visual patches:** Ancient Dwemer Metal retexture patch [11]. Lux lighting (`Lux - Forgotten City.esp`, 27 cells), Natural Waterfalls, Water for ENB and Northern Roads patches are also enabled [10][12].
- **Start gate:** see Starting in LoreRim. The installed level-200 courier gate contradicts the site's "level 25" [3][4].
- **Verification correction (2026-10-02):** an earlier draft said "UESP says you then receive the letter when you arrive" at the ruins. UESP's walkthrough does not say that. Instead, Cassia asks "Didn't you get my letter?", and her dialogue branches on whether you did [7]. Whether the independent-discovery path hands you the note is unverified.

## Related
- [areas/the-forgotten-city-zenithar.md](../areas/the-forgotten-city-zenithar.md)
- [areas/the-reach-and-markarth.md](../areas/the-reach-and-markarth.md)
- [mod-added/tools-of-kagrenac.md](tools-of-kagrenac.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal stages | LoreRim install: `ForgottenCity.esp` QUST records `000FCQuest01`, `000FCQuest02` (profile Default) | mod v1.8.0.0 | 2026-10-02 |
| 2 | features, author's start method, level advice, solo play, incompatibility | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/1179) via meta.ini cache | 2017-08-31 (nexusLastModified) | 2026-01-11 cache |
| 3 | LoreRim's stated level-25 gate | [LoreRim site — New Lands](https://www.lorerim.com/guides/quests/new-lands) | n/a | 2026-10-02 |
| 4 | courier gate: SMQN `000FCBeginQuest` GetLevel >= 5 in `ForgottenCity.esp`, overridden to >= 200 by `LoreRim - World Fixes.esp` (mod "LoreRim - xEdit64 Output", enabled) | LoreRim install: plugin records parsed this run | n/a | 2026-10-02 |
| 5 | level cap 101; optional cap 201 disabled | LoreRim install: `LoreRim - MCM and INI Settings/SKSE/Plugins/Experience.ini`; `[Easy] Faster Leveling and Double Level Cap` (disabled in modlist.txt) | n/a | 2026-10-02 |
| 6 | cell, map-marker, item, NPC and spell names; marker coordinates | LoreRim install: `ForgottenCity.esp` CELL/REFR/ARMO/BOOK/NPC_/SPEL records | mod v1.8.0.0 | 2026-10-02 |
| 7 | ruins location, Cassia/Altrius setup, letter on independent discovery | [UESP — The Forgotten City (quest)](https://en.uesp.net/wiki/Skyrim_Mod:The_Forgotten_City/The_Forgotten_City_(quest)) | n/a | 2026-10-02 |
| 8 | Dwarves' Law, Forget-me-not outcomes, no listed reward | [UESP — Forget-me-not](https://en.uesp.net/wiki/Skyrim_Mod:The_Forgotten_City/Forget-me-not) | n/a | 2026-10-02 |
| 9 | author, release date | [UESP — Skyrim Mod:The Forgotten City](https://en.uesp.net/wiki/Skyrim_Mod:The_Forgotten_City) | n/a | 2026-10-02 |
| 10 | LoreRim patch plugins and their overrides (NPC Patch, Requiem, ToK courier INFO, Lux) | LoreRim install: plugin records parsed this run | n/a | 2026-10-02 |
| 11 | music fix, Cassia's Plea remover, NPC overhaul, Dwemer texture patch | Nexus pages [54019](https://www.nexusmods.com/skyrimspecialedition/mods/54019), [56739](https://www.nexusmods.com/skyrimspecialedition/mods/56739), [38845](https://www.nexusmods.com/skyrimspecialedition/mods/38845) via meta.ini cache | 2021-08-19 / 2021-10-08 (nexusLastModified) | 2026-01-11 cache |
| 12 | which mods and plugins ship and are enabled | LoreRim install: `profiles/Default/modlist.txt`, `plugins.txt` | n/a | 2026-10-02 |
