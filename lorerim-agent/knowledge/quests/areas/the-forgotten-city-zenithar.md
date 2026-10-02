---
id: the-forgotten-city-zenithar
title: The Forgotten City (Forgotten Ruins, the Reach)
kind: area
category: new-lands
summary: The Forgotten City adds the Forgotten Ruins behind a waterfall in the south-west Reach and, beneath them, a Dwemer-built underground city where you travel 20 years into the past to solve who triggers the Dwarves' Law. In LoreRim the courier start is effectively disabled, so walk to the ruins yourself.
mods:
  - name: The Forgotten City
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/1179
    version: 1.8.0.0
  - name: Forgotten City Music Fixer
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/54019
    version: 2.2.0.0
  - name: Forgotten City Music Fixer - Cassia's Plea Remover
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/54019
    version: 2.2.0.0
  - name: Tools of Kagrenac - Forgotten Cities Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/92206
    version: f1.01
  - name: LoreRim - xEdit64 Output (LoreRim - World Fixes.esp)
    nexus: n/a (LoreRim-generated)
    version: n/a
plugins: [ForgottenCity.esp, Forgotten City Music Fix.esp, Tools of Kagrenac - Forgotten Cities patch.esp, LoreRim - World Fixes.esp]
quests: [The Forgotten City, Forget-me-not]
locations: [Forgotten Ruins, The Forgotten City, Citadel, Lakehouse, The Golden Sentinel Tavern, Underground tunnels, Dwarven Dome, Abandoned Palace, Cave]
region: The Reach — far south-west Skyrim, west of Purewater Run, between two waterfalls
start: Travel to the Forgotten Ruins (west of Purewater Run, south-west Reach) and enter. The courier who delivers "Cassia's Plea" needs player level 200 in LoreRim, so in practice he never comes.
level_hint: "Mod author: designed for level 5+, higher level recommended"
related: [mod-added/the-forgotten-city.md, areas/the-reach-and-markarth.md, areas/hammerfell-and-coldharbour-gray-cowl.md, mod-added/tools-of-kagrenac.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8]
confidence: medium
updated: 2026-10-02
---

# The Forgotten City (Forgotten Ruins, the Reach)

The Forgotten City is an award-winning 6-8 hour murder-mystery expansion "set in an ancient underground city", with time travel, multiple endings and 1200+ voiced lines [2]. All of it lives in new interior cells under the **Forgotten Ruins** in the Reach. The plugin edits the nearby Purewater Run exterior and has no new LCTN or worldspace records [3]. The mod is designed to be played solo, without followers [2].

**Disambiguation:** this is not the *Forgotten City* of the Alik'r Desert in The Gray Cowl of Nocturnal (quest "The Curse of Sadraaka"). That one is in `areas/hammerfell-and-coldharbour-gray-cowl.md`. The file id contains "zenithar", but no Zenithar content was found in `ForgottenCity.esp` (see LoreRim notes).

## Starting in LoreRim
- **Mod default:** "If you're Level 5 or above, you'll be approached automatically by a courier when you enter any city. Alternatively, you can make your way to the 'Forgotten Ruins' in the south-west corner of Skyrim" [2]. The shipped plugin's story-manager node `000FCBeginQuest` requires `GetLevel >= 5` [3].
- **LoreRim site:** LoreRim "uses the delayed start mod which increases this to level 25" [1].
- **LoreRim install (contradicts the site):**
  - No Forgotten City delayed-start mod is enabled in the Default profile [8].
  - `LoreRim - World Fixes.esp`, the last plugin to override that node, rewrites it to `GetLevel >= 200` [4]. No later plugin overrides it [8].
  - Practical answer: **don't wait for the courier — walk to the Forgotten Ruins.** The quest supports this path; the stage 15 journal reads "I've discovered some forgotten ruins on my own..." [3].
- **Getting there:** per UESP the ruins are in the Reach, "just west of Purewater Run and east-southeast of Hag Rock Redoubt, between two waterfalls" [5]. A secondary wiki adds that the entrance is hidden behind a waterfall, south of Markarth [6].
- **Followers:** leave them behind [2].

## Quests
Full walkthrough: `mod-added/the-forgotten-city.md`.

### The Forgotten City (`000FCQuest01`)
- **Giver / trigger:** Cassia's Plea (courier), or discovering the ruins yourself [3].
- **Where:** Forgotten Ruins → The Forgotten City → Lakehouse → Citadel [3].
- **Steps (objectives):**
  1. Meet Cassia in the forgotten ruins and listen to her request.
  2. Enter the Forgotten City ("take a leap of faith into the city"), explore for a way out, and optionally read the old man's suicide note.
  3. Optionally get the Lakehouse key from Altrius's ghost on the Citadel balcony and enter the Lakehouse.
  4. Talk to Altrius, smash the cracked wall in the bathroom, escape through the bathroom.
  5. Optionally travel back in time and show the Arbiter his helmet as proof [3].
- **Outcomes (journal):** return Altrius to Cassia. "Cassia has rewarded me for returning Altrius to her, and has entered the city" [3].

### Forget-me-not (`000FCQuest02`, start-game-enabled)
- **Setup:** you arrive 20 years in the past, on 1 Last Seed 180E. Jarl Metellus asks you to identify who will trigger the city's destruction [3].
- **Optional threads [3]:**
  - Ulrin's missing wife Maisi.
  - The locked Citadel room.
  - "Quintus".
  - Remains in the underground tunnels.
  - Brol the Scholar and the abandoned Palace.
  - The Immaculate Dwarven armor (Rykas, Gaia).
  - Vernon's threatening notes (Rykas).
  - Habiq's ring in the tunnels.
  - Dooley's letter and hidden fortune.
  - Skooma for Dwemora and Asanshi.
- **Accusations:** you can name Domitus, Gulvar, Vernon, Metellus, Ulrin, Marius, Rykas, Deglund, or yourself. You can lure your suspect into the tunnels and kill them [3].
- **Endings:** follow Metellus to the Lakehouse portal. A paradox, or the Arbiter, returns you to your own time [3].

## Locations
Cell names from `ForgottenCity.esp` [3].
- **Forgotten Ruins**: Dwemer entrance hall where Cassia waits. In the Reach, between two waterfalls west of Purewater Run [3][5].
- **The Forgotten City**: the main underground city, guarded by City Guards [3]. Interiors:
  - **Shops and tavern:** **The Golden Sentinel Tavern**, **Vernon's Fresh Produce**, **Firefly Finery**, **The Honest Trader**.
  - **Houses and chambers:** Brandas', Ulrin's, Gulvar's, Habiq and Miranda's, Rastasia's, Deglund's, Rykas', Ysmar's, Vernon's, Jeshol's; **Sunken house**, **Chambers**, **Lonely tower**, **Brol the Scholar's chambers**, **Luki's chambers**.
- **Citadel**: Jarl Metellus' seat, with the balcony where Altrius's ghost guards the Lakehouse key [3].
- **Lakehouse**: the time portal [3].
- **Underground tunnels**: radiation hazard; remains, Habiq's ring, the Immaculate Helmet [3].
- **Dwarven Dome**, **Abandoned Palace**: Dwemer areas proving the Dwarves' Law [3].
- **Cave**: home of the Cave Dweller "hermit" twins [3].
- **Hostiles:**
  - City entrance: Looters and a Dark Brotherhood Warlock come down the shaft.
  - Ruined, future city: Burnt Horrors / Burnt Corpses.
  - Elsewhere: Decayed Horrors, Narnabus the Necromancer / Narnabus the Returned, a Giant Skeever, Dwarven Spider Workers [3].

## Rewards & notable items
- Cassia's reward for returning Altrius (unspecified in the records) [3].
- Optional gear: the **Immaculate Dwarven armor** and **Immaculate Helmet** [3].
- UESP leaves the rewards section unwritten [5].

## LoreRim notes
- **Start-gate contradiction:** site says level 25 courier [1]; install says level 200 courier (effectively never) [4]. Go to the ruins manually.
- **Shipped patches** [8]:
  - Forgotten City Music Fixer: removes the city soundtrack after you leave, fixing the "music keeps playing" bug.
  - Its Cassia's Plea Remover option: removes the undroppable Cassia's Plea note when you first exit the city [7].
  - Modpocalypse NPCs, Ancient Dwemer Metal patch, a LoreRim NPC patch, and Requiem NPC rebalancing in Requiem for the Indifferent.
- **Courier patch:** `Tools of Kagrenac - Forgotten Cities patch.esp` edits the vanilla courier ("WICourierDeliveries") so letters from both The Forgotten City and The Tools of Kagrenac can be delivered [4].
- **"Zenithar" in the file id:** no Zenithar reference exists in `ForgottenCity.esp` (byte search) [3]. The nearest match in this unit is VIGILANT's *Anvil of Zenithar* crafting stations (see `areas/vigilant-realms.md`).

## Related
- `mod-added/the-forgotten-city.md`
- `areas/the-reach-and-markarth.md`
- `areas/hammerfell-and-coldharbour-gray-cowl.md` (the other "Forgotten City")

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | site claim: delayed start to level 25 | [LoreRim site — New Lands](https://www.lorerim.com/guides/quests/new-lands) | n/a | 2026-10-02 |
| 2 | scale, default start (level 5, courier or ruins), solo play | [Nexus 1179](https://www.nexusmods.com/skyrimspecialedition/mods/1179) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 3 | quest names, objectives, journal, cell/NPC names, base start node (level 5), absence of "Zenithar" | LoreRim install: `ForgottenCity.esp` QUST/SMQN/CELL/NPC_ records | mod v1.8.0.0 | 2026-10-02 |
| 4 | LoreRim override `000FCBeginQuest` → GetLevel ≥ 200; ToK courier patch | LoreRim install: `LoreRim - xEdit64 Output/LoreRim - World Fixes.esp` SMQN; `Tools of Kagrenac - Forgotten Cities patch.esp` INFO | n/a | 2026-10-02 |
| 5 | ruins location; rewards not documented | [UESP — The Forgotten City (quest)](https://en.uesp.net/wiki/Skyrim_Mod:The_Forgotten_City/The_Forgotten_City_(quest)) | n/a | 2026-10-02 |
| 6 | entrance hidden behind waterfall, south of Markarth (secondary) | [TES Mods wiki (Fandom) — The Forgotten City (Quest)](https://tes-mods.fandom.com/wiki/The_Forgotten_City_(Quest)) (search snippet) | n/a | 2026-10-02 |
| 7 | music fixer + Cassia's Plea remover behaviour | [Nexus 54019](https://www.nexusmods.com/skyrimspecialedition/mods/54019) via meta.ini cache | 2021-08-19 (nexusLastModified) | 2026-10-02 |
| 8 | enabled mods; load order (no later override) | LoreRim install: `profiles/Default/modlist.txt`, `plugins.txt` | n/a | 2026-10-02 |
