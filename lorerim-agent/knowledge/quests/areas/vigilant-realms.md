---
id: vigilant-realms
title: VIGILANT — Stuhn Ravine, Bruiant Estate and Coldharbour
kind: area
category: new-lands
summary: VIGILANT adds the Vigilants' base in Stuhn Ravine (Temple of Stendarr), new dungeons under Windhelm, dream and curse pocket-worlds (Lamae's Dream, Bruiant Estate, Witch's Pond), and a huge Coldharbour realm with districts, charnels, priories and memory spaces. In LoreRim, Altano appears in Dawnstar's Windpeak Inn only at level 25+ after House of Horrors and Kindred Judgment, and bosses are buffed via LoreRim's MCM preset.
mods:
  - name: VIGILANT SE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/11849
    version: 1.8.0.0
  - name: VIGILANT - English Translation (Plus Voiced Addon)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/11894
    version: 1.8.0.0
  - name: VIGILANT - Delayed Start
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/57961
    version: 2.3.0.0
  - name: VIGILANT SE - Settings Loader
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/69353
    version: 1.2.0.0
  - name: LoreRim - MCM and INI Settings
    nexus: n/a (LoreRim-authored)
    version: n/a
  - name: Stendarr Rising - The Hall of the Vigilant Rebuild
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/49346
    version: 1.6.0.0
plugins: [Vigilant.esm, Vigilant - Delayed Start.esp, Stendarr Rising.esp]
quests: [Vigilant of Stendarr, Bloodsucker, He Who Cannot Be Touched, Lazy Afternoon, The Eye of Madness, Dine and Dash, Thus Spoke Khajiit, Old Regrets, No Mercy, Art of Mercy, The Endless Fall, The Landing, Empty Cells, Remnants, The Blood Matron, Child of Oblivion, Successor, Legacy of Belharza, Sacred Anatomancer]
locations: [Stuhn Ravine, Temple of Stendarr, Stendarr's Beacon Underground, Windhelm Dungeon, Old Windhelm, Blood Mist Castle, Lamae's Dream, Bruiant Estate, Bruiant Mansion, Witch's Pond, Hidden Minotaur Village, Jo'vanni's Dream Theater, Coldharbour, White Wasteland, Old Forest, Whale Graveyard, Arena, Elder Field, Aetherius, Abyss of Molag Bal]
region: Skyrim (Dawnstar start; Stuhn Ravine south of Nightcaller Temple) plus several Oblivion/dream worldspaces
start: Level 25+ AND The House of Horrors completed AND Kindred Judgment (Dawnguard finale) completed; then Altano and Orlando appear in the Windpeak Inn, Dawnstar.
level_hint: "Delayed Start author: 25 absolute minimum, ~40 recommended (endgame mod, especially Act 4)"
related: [mod-added/vigilant.md, vanilla-changes/daedric-quests.md, vanilla-changes/dawnguard.md, mod-added/soldier-of-stendarr.md, mod-added/auri-song-of-the-green.md, areas/hammerfell-and-coldharbour-gray-cowl.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
confidence: high
updated: 2026-10-02
---

# VIGILANT — Stuhn Ravine, Bruiant Estate and Coldharbour

VIGILANT, by Vicn, is "a dark story for Vigilants of Stendarr". You join the Vigil and hunt a summoner of Molag Bal, then go through four episodes. The last one strands you in Oblivion [3]. Its plugin defines 11 worldspaces and roughly 175 named locations [2]. Most of the "new land" is Coldharbour: a ruined imperial-style city of districts, charnels, priories and inquisition courts, ringed by wastelands and memory spaces. LoreRim ships the English translation with voice addon, so in-game names are the English strings below [2].

## Starting in LoreRim
- **Mod default:** speak with Altano in the Windpeak Inn in Dawnstar. He is present from the start of the game [3][4].
- **LoreRim (install):** `Vigilant - Delayed Start.esp` overrides the start [4]:
  - It adds a story-manager node `VigilantDelayedStart` with three conditions: `GetLevel >= zzzVigilantMinLevel` (global = **25**), `DA10` **The House of Horrors** completed, and `DLC1VQ08` **Kindred Judgment** completed [4].
  - This matches the patch's "Option 2" ("level 25+, finish House of Horrors, finish Kindred Judgement — side does not matter") [5].
  - Altano and Orlando are not in the inn until those conditions hold [5]. The patch only works on a new game [5].
- **LoreRim site wording:** "complete the main quest, Dawnguard and Molag's daedric quest (House of Horrors). A Vigilant named Altano will recruit from the inn in Dawnstar" [1]. The installed plugin has no main-quest condition (see LoreRim notes).
- **Knock-on gate:** The House of Horrors is itself delayed in LoreRim. `House of Horrors - Delayed Start.esp` ships global `ANDR_HouseOfHorrorsLevelReq = 35` [7]. In practice Vigilant may not open before about level 35 (inference). The delayed-start mod has no MCM; its page says the default is 35 and it can be changed only by console (`set ANDR_HouseOfHorrorsLevelReq to X`) [7].
- **Recommended level:** the Delayed Start author calls 25 "the sweet spot … at absolute earliest" and recommends "somewhere around level 40, as Vigilant is meant to be an endgame mod, especially act 4" [5].

## Quests
Quest-by-quest detail is in `mod-added/vigilant.md`. Episode structure (mod author) [3]:
1. **Episode 1 — The Summoner (tutorial):** become a Vigilant and chase a Summoner of Molag Bal. Quests [2]:
   - *Vigilant of Stendarr*: join the Vigilants; follow Altano to the Temple of Stendarr; talk to Thorondir.
   - *Bloodsucker*: Whiterun's Hall of the Dead.
   - *He Who Cannot Be Touched* and *Lazy Afternoon*: start at the Bannered Mare, then Candlehearth Hall.
   - *The Eye of Madness*: hunt Balor; optional Meridia cultist.
   - *Dine and Dash*: Stendarr's Beacon, then the Bee and Barb (Keerava, 1000 gold).
   - *Thus Spoke Khajiit*: Ragged Flagon; Jo'vanni and Campaner'Ra.
   - *Old Regrets*: Jacob; defeat Bal; the Mace of Molag Bal.
   - *No Mercy* / *Art of Mercy*: the Ivarstead witches, Carene; you can negotiate with or defeat Altano.
   - *The Endless Fall*: defeat Molag Bal.
   - *The Landing*: destroy the Mace of Molag Bal. Journal: "Molag Bal left his curse on me. If even a spot of further corruption touches my soul, I will be dragged into his realm."
2. **Episode 2 — Bloody Matron (small dungeon):** prisoners vanish from the Windhelm dungeons; starts automatically after Act 1 [3]. Quests: *Empty Cells* (investigate the Windhelm dungeons, find the Windhelm Report in the Temple of Stendarr, eliminate the vampires under Windhelm), *Remnants*, *The Blood Matron* [2].
3. **Episode 3 — Child of Oblivion (horror, hide and seek):** rescue the owners of a noble mansion [3]. *Child of Oblivion*: talk to Gwyneth → Bruiant Mansion → defeat Julius → escape → "Die in flames as a martyr or accept Molag Bal's corruption in exchange for help". *Successor* follows [2].
4. **Episode 4 — Oblivion (new world, non-journal):** "The Player is trapped in Oblivion, and must wander the wasteland in order to find a way out." It begins immediately after Episode 3 [3]. Coldharbour content is mostly unjournaled; the plugin's misc "memory" quests include The Grand Inquisitor, The Mad King, Knight of Hounds, Johan the Fool, Adabal, Remains of the Miracle, Temptation of Marukh, The Nameless Bard, Beyond the Shores of Madness, plus Broken Horns, Maggot and Feral Soul-Shriven [2].
5. **Epilogue / after exile:** *Sacred Anatomancer*. A librarian rumour points you to the Anatomancer, with an evil "grinder" path or a good path [2][3]. *Legacy of Belharza* covers the Minotaur chief [2].
- **Radiant:** 8 bounty quests from the board in front of the Temple of Stendarr and 5 more in the temple's dungeon [3]:
  - Bounties: Piper, Chick Trader, Summoner, Daedric Relic, Vampire, Horn, Book, Witch.
  - "Radiance in the …": Spawn, Duplicate, Dead, Witch Hunter, Vampire [2].
- You can dispatch Vigils to Dawnstar, Windhelm or Markarth via the map flag in the temple. They defend citizens but attack you if you commit crimes [2][3].

## Locations
Names come from Vigilant.esm LCTN/WRLD records [2]. Episode grouping follows editor-ID prefixes (AoM = Act 1, BM = Blood Matron, CO = Child of Oblivion, CH = Coldharbour), so it is an inference.
- **Stuhn Ravine** (worldspace): the Vigilants' base. Per a secondary wiki it lies south of Nightcaller Temple and works as a player home once you join [6]. Contents [2]:
  - **Temple of Stendarr**, with its storage room. The Debug Room is reached through it (cell `zzzAoMDebugRoom`) and sells all VIGILANT gear via the White and Black Owls [3].
  - **Stendarr's Beacon Underground**, **Dark Tunnel**, **Dungeon**, **Actor Room**, **Altar of Molag Bal**.
- **Skyrim-side and Act 1 spaces** [2]:
  - **Witch's Pond** (worldspace) with **Pond House**.
  - **Hidden Minotaur Village**.
  - **Jo'vanni's Dream Theater**.
  - **Anatomancer's Room** / **Piper Temple**.
- **Act 2 (under Windhelm)** [2]:
  - **Windhelm Dungeon**, **Old Windhelm**, **Asylum**, **Bloody Well**, **Old Well**, **Old Sewers**, **Solitary Cell**.
  - **Blood Mist Castle**, **Matron's Chamber**, **Enchantress' Palace**.
  - **Lamae's Dream** (worldspace).
- **Act 3** [2]:
  - **Bruiant Estate** (worldspace) with **Bruiant Mansion** (North and South Wing, Basement, Hidden Room).
  - The **Blood Curse** rooms of Shivers, Corruption, Chains and Froth, plus the **Blood Curse of Jealousy** worldspace.
- **Coldharbour** (worldspace, Act 4) [2]:
  - **City districts:** Front Gate, Central District, Waterfront District, Slums / Slums Bridge, Prison District, Eight Saints District, Malatar District, Curia District, Inquisition Court District, Arena District, Emperor Gorieus' Charnel District, Torture Garden, Great Bridge, Road of Penitence, Road of Condemnation, Pass of Arkay, Order-Occupied Territory.
  - **Outer territories:** Kh-Utta's Territory, Varla's Territory, Mitta Village, Tele Village, Malada.
  - **Notable interiors:**
    - Charnels: Sard's, Ultar's, Emperor Gorieus', St. Dulsa's, Belharza's Hidden Charnel.
    - Courts and priories: Adabal Inquisition Court, Curia Morimath / Golden Sanctuary, Mathmalatu Priory, Nenyond's Underground Priory, Silorn's Priory, Holy Brothers of Marukh Priory.
    - Temples and towers: Temple of Mara, Old Temple of the Eight Divines, Chapel of Arkay, Prison Tower, Throne of Order, Sancremor towers, Barrier Towers of Agea and Bala.
    - Forts and other places: Fort Sepredia, Fort Verin, Fort Welkynd / Varla's Hall, Jhunal's Library, Wellspring Cave, Lipsand Cave.
  - **Waterfront village shops/houses:** Rusty Blacksmith, Highwayman's General Store, Sandman Inn, Thrassian Apothecary, Chestnut Handy Stables, Heretic's House, Bandit Kanra's Lair [2]. Unvoiced NPCs such as Saklas the Man-Ape and Bandit Kanra live in "the starting village" [8].
  - **Endgame spaces:** **Abyss of Molag Bal**, **Aetherius**, **White-Gold Tower** memories, multiple **Memory** cells [2].
- **Other worldspaces** [2]: **White Wasteland**, **Old Forest**, **Whale Graveyard**, **Arena** (Colosseum), **Elder Field** (true-ending area).
- **Revisiting:** in the Debug Room, the painting "Death" begins Episode 4. The Red Stone lets you re-enter Coldharbour after Episode 4, and the Tree of Life reaches the Elder Field after the true ending [3].

## Rewards & notable items
- Many unique armor sets, weapons and jewelry [3]. Unique variants are crafted at an **Anvil of Zenithar**, unlocked by objectives, bosses and new areas [3]. Anvils stand in the Temple of Stendarr, Beacon of Stendarr Basement, Waterfront District blacksmith, Colosseum, Library of Jhunal and Debug Room [3].
- NG+: since 1.8.0, clear flags are saved to `skse/plugins/VIGILANT/ElderScroll_Global.json` and shared across characters [3]. LoreRim ships this file with all counters at 0 [9].

## LoreRim notes
- **Start-gate contradiction:** the site says main quest + Dawnguard + House of Horrors [1]. The shipped plugin checks only level ≥ 25 + House of Horrors + Kindred Judgment [4]. Treat the plugin as authoritative; finishing the main quest is not checked.
- **Boss difficulty:** LoreRim's `MCM/Settings/Vigilant.ini` sets `[BossDifficulty] iVigDiffLvl = 50` and `iVigIncAttack = 10` [9]. The mod defaults are 0 and 0; the slider ranges are -9..100 and 0..10 [9]. VIGILANT's MCM text says each point of the health setting raises boss health 10% and each attack step raises boss attack 20% [3]. By that formula LoreRim's bosses are far tankier than default (inference; the actual scaling script is not inspected).
- **Shipped companions** [2]: Vigilant Boss Moveset, TrueHUD boss bars, Revised Scripts for MCO, NPC Overhaul/NPCs Refined, Immersion Tweaks, retextures and soundtrack, plus patches for Auri (Song of the Green), Daedric Shrines (Meridia), JS Common Cages, Nature of the Wild Lands and Rally's Banners.
- **Stendarr Rising** is also installed. It lets you rebuild the burned vanilla Hall of the Vigilant over time into a home with chapel, crafting areas, barracks and a vault [10]. It is a vanilla-location rebuild, not part of Vigil's Stuhn Ravine.
- After **The Landing** you carry Molag Bal's curse: further corruption drags you to Coldharbour [2]. Prepare before advancing.

## Related
- `mod-added/vigilant.md`
- `vanilla-changes/daedric-quests.md` (House of Horrors), `vanilla-changes/dawnguard.md` (Kindred Judgment)
- `areas/hammerfell-and-coldharbour-gray-cowl.md` (a different Coldharbour)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | LoreRim site start wording | [LoreRim site — New Lands](https://www.lorerim.com/guides/quests/new-lands) | n/a | 2026-10-02 |
| 2 | quest names, objectives, journal text, LCTN/WRLD names, shipped patch list | LoreRim install: `Vigilant.esm` (English translation, v1.8.0.0) records; `profiles/Default/modlist.txt` | mod v1.8.0.0 | 2026-10-02 |
| 3 | episodes, radiant quests, Anvil of Zenithar, Debug Room, MCM meaning, NG+ | [VIGILANT SE Nexus 11849](https://www.nexusmods.com/skyrimspecialedition/mods/11849) via meta.ini cache | 2025-08-19 (nexusLastModified) | 2026-10-02 |
| 4 | installed start conditions (level ≥ global 25, DA10, DLC1VQ08) | LoreRim install: `Vigilant - Delayed Start.esp` GLOB + SMQN records | mod v2.3.0.0 | 2026-10-02 |
| 5 | Delayed Start options, recommended level, new-game note | [Nexus 57961](https://www.nexusmods.com/skyrimspecialedition/mods/57961) via meta.ini cache | 2025-08-23 (nexusLastModified) | 2026-10-02 |
| 6 | Stuhn Ravine south of Nightcaller Temple; base/home (secondary) | [TES Mods wiki (Fandom) — Stuhn Ravine](https://tes-mods.fandom.com/wiki/Stuhn_Ravine) (search snippet) | n/a | 2026-10-02 |
| 7 | House of Horrors level requirement global = 35; changeable by console, no MCM | LoreRim install: `Delayed Quest Starts - House of Horrors/House of Horrors - Delayed Start.esp` GLOB records + the mod's `meta.ini` cached Nexus description | n/a | 2026-10-02 |
| 8 | unvoiced NPC locations | [Nexus 11894](https://www.nexusmods.com/skyrimspecialedition/mods/11894) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 9 | LoreRim boss difficulty values; slider ranges/defaults; NG+ json | LoreRim install: `LoreRim - MCM and INI Settings/MCM/Settings/Vigilant.ini`, `.../SKSE/Plugins/VIGILANT/ElderScroll_Global.json`; `VIGILANT SE - Settings Loader/MCM/Config/Vigilant/{config.json,settings.ini}` | n/a | 2026-10-02 |
| 10 | Stendarr Rising features | [Nexus 49346](https://www.nexusmods.com/skyrimspecialedition/mods/49346) via meta.ini cache | 2023-06-16 (nexusLastModified) | 2026-10-02 |
