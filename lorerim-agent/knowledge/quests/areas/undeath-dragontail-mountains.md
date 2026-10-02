---
id: undeath-dragontail-mountains
title: Undeath — Dragontail Mountains, Scourg Barrow, Apocrypha and the Necromancer Lairs
kind: area
category: new-lands
summary: Undeath (with Classical Lichdom) adds the Dragontail Mountains worldspace with the crypt Scourg Barrow, a private Apocrypha black-book dungeon, the lairs Ravenscorn Spire and the Solitude Sewers, a Temple of Arkay in Falkreath and The Broker's Shack. In LoreRim the questline starts after you finish Blood on the Ice and The Wolf Queen Awakened, with no level requirement.
mods:
  - name: Undeath Remastered - CLEANED ESMIFIED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/6180
    version: 1.7.0.0
  - name: Undeath - Classical Lichdom - ESMIFIED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/40802
    version: 3.60.0.0
  - name: Undeath - Classical Lichdom Cleaned and Enhanced Textures
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/55803
    version: 1.0.0.0
  - name: Sensible Undeath Prerequisite - No Level
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/121948
    version: 1.2.0.0
  - name: Requiem - Undeath
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/69009
    version: f1.01
  - name: "[LoreRim] Undeath Apocrypha Skip"
    nexus: n/a (LoreRim-authored)
    version: d2025.5.24
  - name: Undeath - Phylactery Limits
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/97490
    version: 1.2.0.0
  - name: Apocryphal Library and Undeath Remastered Integration
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/128168
    version: 1.2.0.0
plugins: [Undeath.esp, Undeath0.esp, UndeathFixes.esp, UndeathQuestPrerequisiteNoLevel.esp, Requiem - Undeath.esp, Undeath Apocrypha Skip.esp, Undeath - Phylactery Limits.esp, LB_Undeath_Apocrypha.esp]
quests: [In their Footsteps, Exhuming Power, Arkay the Enemy, Infernal Alchemy, Scourg Barrow, "Black Book: Whispers of the Veil", The Path of Transcendance]
locations: [Dragontail Mountains, Scourg Barrow, Apocrypha, Ravenscorn Spire, Temple of Arkay, The Broker's Shack, Solitude Sewers]
region: Dragontail Mountains (separate worldspace, reached by fast-travel marker or the "Barrows of the Mountains" book) plus sites in Eastmarch, Falkreath, Winterhold, the Reach and Solitude
start: LoreRim — after completing both Blood on the Ice (MS11) and The Wolf Queen Awakened (MS06), a note at Markarth's Silver-Blood Inn starts "In their Footsteps"; no level needed (mod default is level 30).
level_hint: "Mod default start level 30 (removed in LoreRim)"
related: [mod-added/undeath.md, vanilla-changes/side-quests-and-misc.md, areas/the-reach-and-markarth.md, areas/eastmarch-and-windhelm.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
confidence: high
updated: 2026-10-02
---

# Undeath — Dragontail Mountains, Scourg Barrow, Apocrypha and the Necromancer Lairs

Undeath is a necromancy questline. You chase the necromancer Antioch, who stole a tome from the Vigil of Stendarr, "to the frigid peaks of the Dragontail Mountains themselves, and beyond". Then you either stop his ritual or perform it yourself and become a Lich [1][3]. The mod adds three dungeons, two lairs and a vendor:
- **Dungeons:** the Solitude Sewers, Hermaeus Mora's Apocrypha, and Scourg Barrow in the Dragontail Mountains (a Daggerfall callback).
- **Lairs:** two necromancer lairs you can claim and upgrade.
- **Vendor:** the vendor "the Broker" [3].

Classical Lichdom is LoreRim's bug-fix and overhaul layer. It reworks lich progression and adds an immersive note-based start [4].

## Starting in LoreRim
- **Mod defaults:**
  - Base Undeath starts "automatically when you have reached level 30 or higher" [3].
  - Classical Lichdom's Immersive Start instead spawns a traveler's note at Markarth's **Silver-Blood Inn** at level 30; reading it begins Undeath [4].
  - The shipped `UndeathFixes.esp` start node `NecroQuestStart` checks `GetLevel >= 30` [5].
- **LoreRim:** `UndeathQuestPrerequisiteNoLevel.esp` (*Sensible Undeath Prerequisite - No Level*) loads later and replaces that node's conditions [5]:
  - **Blood on the Ice** (`MS11`) completed [10].
  - **The Wolf Queen Awakened** (`MS06`) completed [10].
  - The questline not already running or completed.
  - **No level check.**
- So in LoreRim: finish both of those vanilla quests, then visit the Silver-Blood Inn in Markarth for the note. That the note mechanism is still active under the override is inferred from Classical Lichdom's design [4][5].
- The LoreRim site describes the story but gives no start conditions [1].

## Quests
Full walkthrough in `mod-added/undeath.md`. All Undeath quests are in the plugin's "dark-brotherhood" quest category, a journal-tab quirk [2].
1. **In their Footsteps:**
   - Rumour of a Vigil of Stendarr caravan attacked in the Reach; search the ambush site and read the Ambush Orders.
   - Travel to **Ravenscorn Spire** and search the tower and its basement. There, Antioch's journal reveals the lich ritual and that he "has already departed for the Dragontail Mountains" [2].
2. Three side errands, any order [2]:
   - **Exhuming Power**: Archmage Vyngald's grave near Winterhold. Re-cover the grave, or take the Shroud of Vyngald and fight his apparition.
   - **Arkay the Enemy**: a Temple of Arkay in Falkreath Hold. Free the surviving Priest of Arkay, or kill him and take his heart.
   - **Infernal Alchemy**: a ritual site "on a plateau overlooking the Reach". Destroy the cauldron, or complete it to get *Namira's Corrosion* or *Embalming Essence*.
3. **Scourg Barrow:** search the necromancer's orders, travel to the Dragontail Mountains, find and enter **Scourg Barrow**, defeat Antioch [2].
4. **Black Book: Whispers of the Veil:** read the black book deep in Scourg Barrow to enter **Apocrypha** and learn the ritual (read again to escape) [2].
5. **The Path of Transcendance** (in-game spelling): construct the Phylactery, brew the Elixir of Defilation, establish a ritual site, perform the Ritual of Transcendence and become a Lich [2]. Ravenscorn Spire is one of the two hideouts where the ritual can be performed [6].
- **Choices:** the good-path choices (freeing the priest, re-covering the grave) lock you out of lichdom [4]. Apocrypha is reachable only on the evil path [7].

## Locations
- **Dragontail Mountains** (worldspace `NecroDragontailMountains`): frigid cliffside trail leading to Scourg Barrow [2]. Base Undeath only reached it by fast travel. Classical Lichdom makes the book *Barrows of the Mountains* move you in and out [4]. A secondary wiki says the fast-travel marker sits in a clouded area in the west of the map [6].
- **Scourg Barrow**: the crypt network once used by the King of Worms. Antioch's boss fight is here, and under Classical Lichdom so is the Staff of the Worm Lord from its lich [3][4].
- **Apocrypha** (`NecroBook01DungeonLocation`): Undeath's own black-book dungeon [2]. Classical Lichdom stops the vanilla quests "Lost Knowledge" and the radiant "Black Book" from sending you there [4].
- **Ravenscorn Spire**: necromancer tower. A secondary wiki places it in Eastmarch [6]. It is a claimable lair, upgradeable with deeds from the Broker [6], and has Poison Bloom/Bloodroot nodes outside [3].
- **Solitude Sewers**: second lair and dungeon. Entrances are in the basements of the Winking Skeever, the Bards College and Castle Dour, plus openings south-east and north-east of the city [3].
- **Temple of Arkay** (Falkreath Hold), **Vyngald's grave** (Winterhold), **Reach plateau ritual site**: quest sites [2].
- **The Broker's Shack**: the Broker sells poisons, black soul gems, flesh and hearts, plus deeds [3][6]. Under Classical Lichdom she always stocks black pearls [4].
- **Necromantic altars / Shade of the Revenant altars** across Skyrim: blacken soul gems [3]. Classical Lichdom sets altar requirements to 50 Enchanting + 75 Conjuration by default [4].

## Rewards & notable items
- **Lichdom** (Classical Lichdom version) [4]:
  - Resurrect at your phylactery on death.
  - Cast any spell in lich form.
  - Feed up to 50 black souls to the phylactery to unlock abilities, e.g. Mass Reanimate, Summon Diilonthur and Devour Soul.
- **Quest items** [2][4]: Shroud of Vyngald, Priest of Arkay's heart, Namira's Corrosion / Embalming Essence, Antioch's artifacts, Staff of the Worm Lord.

## LoreRim notes
- **Start:** LoreRim removes the level-30 start and gates the questline on Blood on the Ice + The Wolf Queen Awakened [5]. The LoreRim site doesn't mention this [1].
- **Requiem - Undeath** [8]:
  - Removes Undeath's spells (in favour of Expanded Grimoire).
  - Raises artifact values.
  - Rebalances all NPCs.
  - Adds +150 health to Lich Form.
- **`[LoreRim] Undeath Apocrypha Skip`** (`Undeath Apocrypha Skip.esp`): a LoreRim-made plugin that edits the Black Book activator and portal references (`NecroBlackBookActivatorRef*`, `NecroApocryphaBook01Ref002`) in Undeath's Apocrypha [9]. Its name suggests it lets you skip the Apocrypha maze; exact in-game behaviour is unverified.
- **Undeath - Phylactery Limits** is installed; it has no cached description, so its effect is unverified [9].
- **Apocryphal Library integration** adds a readable *Whispers of the Veil* book next to the Apocrypha book activator [7].
- **Other installed patches:** lich-can-fly, XPMSSE/Strange Runes skeleton patch, and Draugr retextures for both Undeath plugins [9].

## Related
- `mod-added/undeath.md`
- `vanilla-changes/side-quests-and-misc.md` (Blood on the Ice, The Wolf Queen Awakened)
- `areas/the-reach-and-markarth.md`, `areas/eastmarch-and-windhelm.md`, `areas/haafingar-and-solitude.md`

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | LoreRim description (no start gate given) | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 2 | quest names, objectives, journal, LCTN/WRLD/CELL names | LoreRim install: `Undeath.esp` / `UndeathFixes.esp` records | Undeath 1.7.0.0 / UCL 3.60.0.0 | 2026-10-02 |
| 3 | features, dungeons, Solitude Sewer entrances, default level-30 start, Broker | [Nexus 6180](https://www.nexusmods.com/skyrimspecialedition/mods/6180) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 4 | Classical Lichdom fixes, Immersive Start note at Silver-Blood Inn, lich system | [Nexus 40802](https://www.nexusmods.com/skyrimspecialedition/mods/40802) via meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 5 | start node conditions (base level 30; LoreRim override MS11 + MS06, no level) | LoreRim install: `UndeathFixes.esp` and `UndeathQuestPrerequisiteNoLevel.esp` SMQN `NecroQuestStart`; `plugins.txt` order | mod v1.2.0.0 | 2026-10-02 |
| 6 | Ravenscorn Spire in Eastmarch, ritual hideout, deeds; Dragontail fast-travel marker (secondary) | [TES Mods wiki (Fandom) — Ravenscorn Spire / Undeath](https://tes-mods.fandom.com/wiki/Ravenscorn_Spire) (search snippets) | n/a | 2026-10-02 |
| 7 | Apocrypha only on evil path; readable black book | [Nexus 128168](https://www.nexusmods.com/skyrimspecialedition/mods/128168) via meta.ini cache | 2024-12-06 (nexusLastModified) | 2026-10-02 |
| 8 | Requiem - Undeath changes | [Nexus 69009](https://www.nexusmods.com/skyrimspecialedition/mods/69009) via meta.ini cache | 2023-02-08 (nexusLastModified) | 2026-10-02 |
| 9 | LoreRim Apocrypha Skip records; installed patch list | LoreRim install: `[LoreRim] Undeath Apocrypha Skip/Undeath Apocrypha Skip.esp` REFR records; `profiles/Default/modlist.txt` | d2025.5.24 | 2026-10-02 |
| 10 | quest names MS11/MS06 | `imports/official-quests.json` (Skyrim.esm strings) | n/a | 2026-10-02 |
