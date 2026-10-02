---
id: hammerfell-and-coldharbour-gray-cowl
title: Hammerfell (Alik'r Desert) and Coldharbour Island — The Gray Cowl of Nocturnal
kind: area
category: new-lands
summary: The Gray Cowl of Nocturnal adds a Coldharbour island and an isolated slice of Hammerfell's Alik'r Desert (city of Ben Erai, Al Shedim, Oasis of Mora Sul, a cursed "Forgotten City", a player home); Betalille's Hammerfell Quests Bundle adds Vulstad, Salas Kazas, a Blades temple, a Dark Brotherhood sanctuary and ~30 more quests there. In LoreRim the Gray Cowl only triggers after the Thieves Guild questline is finished.
mods:
  - name: The Gray Cowl of Nocturnal - 10th anniversary
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/141327
    version: 1.4.0.0
  - name: Under New Management Start
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/145535
    version: 1.0.0.0
  - name: Betalille's Hammerfell Quests Bundle - The Gray Cowl of Nocturnal
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/89977
    version: 1.0.4.0
  - name: Betalille's Hammerfell Quests Bundle - The Gray Cowl of Nocturnal - 10th Anniversary Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/89977
    version: n/a
  - name: Betalille's Hammerfell Quests Bundle - The Gray Cowl of Nocturnal - Hotfix
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/89977
    version: n/a
  - name: Gray Cowl of Nocturnal - Bounty fix
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/94939
    version: 1.0.0.0
  - name: Unmarked Locations Pack - The Gray Cowl of Nocturnal Addon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/159443
    version: 1.1.0.0
  - name: Missives - Gray Cowl Map
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/107271
    version: 1.0.0.0
plugins: [Gray Fox Cowl.esm, Gray Fox Cowl - Under New Management Start.esp, BetalillesHammerfellQuestBundle.esp, BetalilleBundle10YPatch.esp, BetalilleBundleHotfix040625.esp, Unmarked Locations Pack - The Gray Cowl of Nocturnal.esp, MissivesGrayCowlMap.esp]
quests: [The Call of Gray Cowl of Nocturnal, Reward of Coldharbour, The Curse of Sadraaka, Time for the Farewells, Bury Valen Dreth, The Experiment, Memories of the Umbranox, Claim Shanta Filibb, A Lost Temple in Hammerfell, Protecting What Was Lost, In need of Scouts, Sands of the Past, Dragonguard Archives, The Dark Brotherhood in Hammerfell, Merchant Problem, Argonian Hero, Wandering Monk, Alik'r No More, No Guard Is Safe, Disappearing in the Dark, The Crimson Eviscerator, Crimson Scar Believers, Ending the Dark Brotherhood in Hammerfell again, Black Marsh Maps, Cyrodilic Collections are Recruiting, Ancient Pottery, A Special Smell, Spectral Lamias in the Desert, "Is There a Necromancer in Town?", Weltan the Poet, From Solstheim to Hammerfell, The Library Lost to the Ages, The Ash'abah, Helping the Enemy]
locations: [Seviana's House, Hall of The Initiation, Old Way of the Thief, Coldharbour, Alik'r Desert, Ben Erai, Fortress of Ben Erai, Al Shedim, Oasis of Mora Sul, Cave of Mora Sul, Mausoleum, Forgotten City, Hamunaptra, Khenzedum, Shanta Filibb, Moonlight Home, The Pit, Great Agyrion Breach, Lair of the Ancestral Cheetahs, Salas Kazas, Vulstad, Wind Scour Temple, Alik'r Desert Sanctuary, Penitus Oculatus Outpost, Cyrodilic Collections, Ancient Library]
region: Alik'r Desert (Hammerfell) and a Coldharbour island — separate worldspaces reached through the Gray Cowl questline
start: Finish the Thieves Guild questline ("Under New Management", TGLeadership stage 200), then steal or pickpocket any item; a vision points you to Seviana's House. LoreRim replaces the mod's level-10 steal trigger.
level_hint: "Mod author: level 10 minimum to trigger, 15+ recommended, 30-35 ideal"
related: [mod-added/gray-cowl-of-nocturnal.md, mod-added/hammerfell-quests-bundle.md, vanilla-changes/thieves-guild.md, vanilla-changes/dark-brotherhood.md, mod-added/penitus-oculatus.md, areas/the-forgotten-city-zenithar.md, areas/vigilant-realms.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
confidence: high
updated: 2026-10-02
---

# Hammerfell (Alik'r Desert) and Coldharbour Island — The Gray Cowl of Nocturnal

The Gray Cowl of Nocturnal (10th anniversary edition) is a DLC-sized thief questline. The author describes it as 8-15+ hours across "two lands, including an island in Coldharbour realm, and a hidden and isolated area of Hammerfell" [3]. The plugin adds four worldspaces: Coldharbour, Alik'r Desert, Cave of Mora Sul and Lair of the Ancestral Cheetahs [2]. Betalille's Hammerfell Quests Bundle builds on that desert. It bundles five quest mods with 31 playable quests, a guard and crime system for Ben Erai, the new settlements of Vulstad and Salas Kazas, extra vendors and a new inn [7]. LoreRim also ships an Unmarked Locations Pack add-on with "more than 15 new locations" hidden in the Alik'r Desert [9].

**Do not confuse** the Gray Cowl's *Forgotten City* (a cursed Alik'r ruin full of ghosts, quest "The Curse of Sadraaka") [2] with the separate mod *The Forgotten City* (a Dwemer city in the Reach; see `areas/the-forgotten-city-zenithar.md`). Likewise, the Gray Cowl's Coldharbour island is a different worldspace from VIGILANT's Coldharbour (`areas/vigilant-realms.md`) [2].

## Starting in LoreRim
- **Mod default:** steal or pickpocket any item while you are at least level 10 [3]. Shipped `Gray Fox Cowl.esm` story-manager node `manny_GF_Steal` checks crime-event data and `GetLevel >= 10` [2].
- **LoreRim:** the mod *Under New Management Start* (`Gray Fox Cowl - Under New Management Start.esp`, enabled in the Default profile) overrides that node [12]. Its only condition is that `TGLeadership` ("Under New Management") is at stage 200 [4]. UESP lists stages 50 and 200 as that quest's completion stages [5]. The override drops the mod's level check [4]. The LoreRim site agrees: "complete the Thieves Guild faction questline and then steal an item" [1].
- After the trigger, you get the journal entry "I had a strange vision in my mind. Also I know where to go now." (stage 10) [2]. A secondary wiki places Seviana's House north-west of the Nordic ruin Valthume, where Seviana Umbranox hands you the Arrow of Extraction and the Key to Hall of the Initiation [11] (unverified against the plugin; the wiki's hold label for it is inconsistent).
- The 10th-anniversary edition added "a way to leave and go back to Skyrim in the early dungeons before leading to the desert" [3]. You can still back out before you are committed to Coldharbour or Hammerfell.
- **Bundle questlines** need Gray Cowl access to the desert. Per the bundle author, the extra start gates are [7]:
  - The *Desertic Dark Brotherhood* chain needs "Hail Sithis!" first.
  - The *From Solstheim to Hammerfell* quest needs the Gray Cowl's main ending at the Solitude docks.

## Quests
Full quest walkthroughs live in `mod-added/gray-cowl-of-nocturnal.md` and `mod-added/hammerfell-quests-bundle.md`. Area-relevant summary:

### The Call of Gray Cowl of Nocturnal (main quest)
- **Where:** Seviana's House → Hall of The Initiation → Coldharbour → Alik'r Desert → Oasis of Mora Sul / Mausoleum [2].
- **Steps:** Reach the place → Find the Hall of the Initiation → Reach the other side → Get the four keys → Follow/speak with Arenar → Speak with Syloria → Find a way to enter the Mausoleum → Shoot the Arrow → Return to Seviana [2].
- **Route detail (journal):**
  1. You escape Coldharbour, then meet Arenar and follow him to his village in the desert.
  2. Lady Syloria sends you for two items: the key to the Mora Sul entrance in Al Shedim, north of Ben Erai, and the *Alliance of Ancestral Cheetahs* amulet in the far north.
  3. The Mausoleum of the Champion of Cyrodiil is in the Oasis of Mora Sul, on the east side of the region.
  4. After taking the Cowl, "go back to Seviana by using the magic portal" [2].

### Reward of Coldharbour (Daedric)
- Escape Coldharbour; optional objective "Do not kill the Guardians of Coldharbour" [2].

### Side quests in the desert (Gray Cowl)
- **The Curse of Sadraaka:** free the ghost-filled Forgotten City by killing Sadraaka [2].
- **Claim Shanta Filibb:** after bandits attack you, kill the bandits at Shanta Filibb, check the Ben Erai notice board, then meet Crassius for the key. You must furnish it to obtain the home [2].
- **Memories of the Umbranox:** collect Caio's journals for Seviana; the reward is 1000 gold or a spell tome [2]. The 4th journal is only in chests in destroyed houses in Coldharbour [3].
- **The Experiment:** place Irlav's artifacts near Markarth, Falkreath, Windhelm and Dawnstar [2].
- **Time for the Farewells:** escort Seviana and Luvien to the Solitude docks [2].
- **Bury Valen Dreth:** bury his remains at Falkreath [2].

### Betalille's bundle (31 quests, five groups) [6][7]
| Group | Quests | Giver / where |
|---|---|---|
| Hammerfell Blades | A Lost Temple in Hammerfell; Protecting What Was Lost; In need of Scouts; Sands of the Past; Dragonguard Archives (+ Books 1-6) | Duarelm on a rooftop in Vulstad; later Azita (Azzin's Hideout) and Loremaster Za'kir (Wind Scour Temple) |
| Desertic Dark Brotherhood | The Dark Brotherhood in Hammerfell; Merchant Problem; Argonian Hero; Wandering Monk; Alik'r No More; No Guard Is Safe; Disappearing in the Dark; The Crimson Eviscerator; Crimson Scar Believers | "Unknown Initiate" on an islet north of the Dawnstar Sanctuary after "Hail Sithis!"; then Tenerio at the Alik'r Desert Sanctuary |
| Anti-Brotherhood alternative | Ending the Dark Brotherhood in Hammerfell again | Penitus Oculatus Outpost in Ben Erai, after destroying the Brotherhood in Skyrim |
| Cyrodilic Collections | Black Marsh Maps; Cyrodilic Collections are Recruiting; Ancient Pottery; A Special Smell | Jukka, in a house with two flagged towers north-west of Ben Erai |
| More to do in Hammerfell | Is There a Necromancer in Town? (Thaik); Weltan the Poet (Sharza); The Ash'abah (Honai); The Library Lost to the Ages (Dorian, Ben Erai); From Solstheim to Hammerfell (Lloros Reynel, Retching Netch); Helping the Enemy (final, after the Ash'abah, library and necromancer quests) | Ben Erai, Salas Kazas, and an unmarked temple north-west of the Lantern of the North |
| Desert Lamias | Spectral Lamias in the Desert | Oziriana, near two ruined houses north of the Ancient Alik'r Palace; she can then be recruited |

The Crimson Eviscerator also sends you briefly into the Dawnguard Soul Cairn (Soul Cairn Tower cell) [6].

## Locations
Names are from plugin LCTN/CELL/WRLD records [2][6].
- **Seviana's House**: the Skyrim-side hub, with a portal back from the desert after the main quest. Related cells are **Hall of The Initiation** and **Old Way of the Thief** [2]. The 10th-anniversary changelog mentions Oblivion dungeon music "in certain dungeons including the early ones" [3].
- **Coldharbour (island worldspace)**: escape route of "Reward of Coldharbour". The 10th edition added map view and markers; destroyed houses hold the 4th Caio's journal [2][3]. Other named cells include **Imperial City Prison**, **Sancre Tor** (four cells) and **Akavir**, used as vision or memory spaces in the questline (exact usage unverified) [2].
- **Alik'r Desert (worldspace)**: the 10th edition removed its square border and added shrines with unique blessings, new fauna and enemies, and a magic merchant in mid-desert [3]. That merchant is probably the **Three Peaks Staff and Magic** cell (inference) [2].
  - **Ben Erai**: walled city with a main and an eastern gate [3]. Interiors include the **Fortress of Ben Erai**, **Black Mesa Inn**, **Guard Barracks** / **Guards' Quarters**, **Watchtower**, **Sewers**, **Ben Erai Portal Room**, **Last Sentinel Emporium**, and several named houses (e.g. Livia and Metilius House, Cargas's House, Telrav's House) [2]. The bundle adds **Ben Erai Jail** plus guards and a crime system around Ben Erai [6][7]. A LoreRim-installed fix starts the Gray Cowl wanted level at a 500 non-violent bounty per hold, so guards don't attack on sight while you wear the Cowl [8].
  - **Al Shedim** (exterior and dungeon): holds the Mora Sul key, north of Ben Erai [2].
  - **Oasis of Mora Sul**, **Cave of Mora Sul** (now its own small worldspace) and the **Mausoleum**: the main-quest finale [2][3].
  - **Forgotten City**, **House of the Ancient Alik'r Warrior**, **Sayara's Tomb** and **Tomb of the Forgotten Draugr** (Sadraaka): Sadraaka's curse [2]. Al Shedim, Hamunaptra and Sadraaka Tomb got shortcut exits in the 10th edition [3].
  - **Hamunaptra**, **Khenzedum**, **Ancient Alik'r Temple**, **Draukiir (ex Dirij Tereur Temple)**, **Cave of Hollow Time**, **Halls of the West**, **Houses of the Tempted Centurions**, **Dunerippers Nest**, **Wild Oasis**: dungeons and landmarks [2].
  - **Great Agyrion Breach**: the "ancient and abandoned fortress" north of Ben Erai [2][3].
  - **The Pit**: arena where you can bet or fight. Related cells are **The Pit Keeper**, **The Pit Keeper House** and **The Pit Spectators House** [2][3].
  - **Lair of the Ancestral Cheetahs** (worldspace): far north, the amulet location [2].
  - **Unknown Gate**, **Another World**, **Oblivion**: probably the "new mindblowing area" from the 10th-anniversary list [3] (link between these unverified).
  - **Player homes:** **Shanta Filibb** (claim and furnish) and **Moonlight Home** (`manny_GF_L_AlikrPlayerHome`; how you get it is unverified) [2].
- **Bundle settlements and dungeons** [6]:
  - Salas Kazas (inn, Thaik's, Sharza's, Dorian's, Reynel's, Behsharah's and Daliah's houses).
  - Vulstad (Nahtil's, Majya's and Terinen's houses, Common House).
  - Wind Scour Temple, Wind Scour Towers, Azzin's Hideout, Azzin's Lair, Akaviri Ruins.
  - Alik'r Desert Sanctuary, Warehouse Basement, Soul Cavern, Vampire Hideout.
  - Penitus Oculatus Outpost, Cyrodilic Collections, Guard Houses.
  - Ash'abah Hideout, Ancient Ruins, Ancient Library, Archives.
- **Unmarked Locations Pack add-on:** 15+ unmarked desert locations built with Bethesda's resource pack, with loot and encounters [9].
- **Missives board:** LoreRim adds a map texture to the Alik'r Desert Missives board [10].

## Rewards & notable items
- The **Gray Cowl of Nocturnal** itself; quest-chain items like the Arrow of the Extrication [2].
- The **Shanta Filibb** home; 1000 gold or a spell tome for Caio's journals [2].
- Bundle: **Boneshaver Replica** (Protecting What Was Lost), **Crimson Eviscerator**, and Oziriana as a follower plus Spectral Lamia summons [6][7].

## LoreRim notes
- The start is gated by Thieves Guild completion instead of level 10 (Under New Management Start) [4][12]. Players often ask why the vision never fires: finish "Under New Management" first.
- Shipped companion mods [12]:
  - Gray Cowl Bounty fix: Cowl bounties behave like normal bounties; you can pay or go to jail [8].
  - Unmarked Locations Pack add-on [9].
  - Missives Gray Cowl Map and Missives - Gray Cowl Patch [10].
  - Visual mods: NPCs PLUS, retextures, NAT III weather patch, Daedric Shrines patch.
  - The Hammerfell bundle's 10th Anniversary Patch and Hotfix plugins.
- The author recommends good Sneak and Pickpocket; "some bosses are tough, especially those who are related to side quests" [3]. Under Requiem this matters more (unverified generalization).

## Related
- `mod-added/gray-cowl-of-nocturnal.md`, `mod-added/hammerfell-quests-bundle.md`
- `vanilla-changes/thieves-guild.md`, `vanilla-changes/dark-brotherhood.md`, `mod-added/penitus-oculatus.md`
- `areas/the-forgotten-city-zenithar.md` (different "Forgotten City"), `areas/vigilant-realms.md` (different Coldharbour)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | LoreRim start gate (Thieves Guild + steal) | [LoreRim site — New Lands](https://www.lorerim.com/guides/quests/new-lands) | n/a | 2026-10-02 |
| 2 | quest names, objectives, journal text, LCTN/WRLD/CELL names, original steal node (level ≥ 10) | LoreRim install: `Gray Fox Cowl.esm` QUST/LCTN/WRLD/SMQN records (profile Default) | mod v1.4.0.0 | 2026-10-02 |
| 3 | features, 10th-anniversary changes, start, recommended level, scale | [Nexus mod page 141327](https://www.nexusmods.com/skyrimspecialedition/mods/141327) via meta.ini cache | cache 2026-01-12 | 2026-10-02 |
| 4 | LoreRim override: `manny_GF_Steal` requires `TGLeadership` stage 200, no level check | LoreRim install: `Under New Management Start/Gray Fox Cowl - Under New Management Start.esp` SMQN record (Nexus 145535) | mod v1.0.0.0 (nexusLastModified 2025-05-11) | 2026-10-02 |
| 5 | TGLeadership = "Under New Management", stage 200 = completion | [UESP — Under New Management](https://en.uesp.net/wiki/Skyrim:Under_New_Management) | n/a | 2026-10-02 |
| 6 | bundle quest names, objectives, journal text, cell/LCTN names | LoreRim install: `BetalillesHammerfellQuestBundle.esp` (+ `BetalilleBundle10YPatch.esp`) records | mod v1.0.4.0 | 2026-10-02 |
| 7 | bundle scope, questgiver locations, gates | [Nexus mod page 89977](https://www.nexusmods.com/skyrimspecialedition/mods/89977) via meta.ini cache | cache 2026-02-09 | 2026-10-02 |
| 8 | bounty fix behaviour | [Nexus mod page 94939](https://www.nexusmods.com/skyrimspecialedition/mods/94939) via meta.ini cache | 2023-07-03 (nexusLastModified) | 2026-10-02 |
| 9 | Unmarked Locations add-on (15+ locations) | [Nexus mod page 159443](https://www.nexusmods.com/skyrimspecialedition/mods/159443) via meta.ini cache | 2026-01-12 (nexusLastModified) | 2026-10-02 |
| 10 | Missives map patch | [Nexus mod page 107271](https://www.nexusmods.com/skyrimspecialedition/mods/107271) via meta.ini cache | n/a | 2026-10-02 |
| 11 | Seviana's House near Valthume; Arrow and Hall key (secondary) | [TES Mods wiki (Fandom) — Seviana's House](https://tes-mods.fandom.com/wiki/Seviana's_House) (search snippet) | n/a | 2026-10-02 |
| 12 | which patches are enabled | LoreRim install: `profiles/Default/modlist.txt`, `plugins.txt` | n/a | 2026-10-02 |
