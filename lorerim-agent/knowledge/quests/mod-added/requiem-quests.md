---
id: requiem-quests
title: Requiem Quests (On Hogithum, spell-choice system, Profane Divinity)
kind: mod-added
category: requiem
summary: Requiem adds one real side quest, "On Hogithum" (collect six poem fragments for Giraud Gemane at the Bards College in Solitude; reward is a Cinnabar Beer recipe). Its other quest records are systems that show up in the journal. In LoreRim, Requiem - Improved Spell Learning takes over the spell choice you get with each magic perk. The Trad CC Requiem patch adds the hidden "Profane Divinity" ritual.
mods:
  - name: Requiem - The Roleplaying Overhaul (No Messages ESLIFIED)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/60888
    version: 6.0.2.0
  - name: Requiem - Improved Spell Learning
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/74010
    version: 1.5.0.0
  - name: Requiem - Customizable Spells Per Perk
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/124891
    version: 1.0.1.0
  - name: Trad - AE - CC - Collection - Requiem Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/64829
    version: 2.3.2.0
plugins: [Requiem.esp, Requiem - Creation Club.esp, Requiem - No Messages.esp, Requiem - Improved Spell Learning.esp, Requiem - Customizable Spells Per Perk.esp, Trad_AE_CC_Collection_Requiem_Patch.esp]
quests: [On Hogithum, A Requiem of better times, Requiem - Spellchoices, Requiem - Spellchoices (PlayerCheck), Requiem - Improved Spell Learning, Profane Divinity]
locations: [Bards College, Pelagius Wing, Wolfskull Cave, Frostmere Crypt, Robber's Cove, Darklight Tower]
region: Skyrim (Haafingar, Hjaalmarch, the Reach, the Pale area); Profane Divinity needs Morrowind-themed Creation Club items
start: On Hogithum starts when you find any "Fragment of a poem" note (one is in each of six vanilla locations); then read Adonato's Report at the Bards College in Solitude. The spell-choice "quests" fire on their own when you take a Novice-to-Master perk in a magic school. Profane Divinity starts when you craft the profane heart at a smelter.
related: [mod-added/lorerim-specific-quests.md, mod-added/tools-of-kagrenac.md, vanilla-changes/creation-club.md, vanilla-changes/main-quest-and-alternate-start.md, areas/haafingar-and-solitude.md, areas/hjaalmarch-and-morthal.md, areas/the-reach-and-markarth.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
confidence: high
updated: 2026-10-02
---

# Requiem Quests (On Hogithum, spell-choice system, Profane Divinity)

Requiem is the gameplay overhaul LoreRim is built on. It is a systems mod and adds very little quest content. Its only story quest is **On Hogithum**, a fragment hunt for the Bards College [1][2]. Requiem's other quest records with journal text are systems: an installation prompt and the spell-choice handler [1]. In LoreRim, *Requiem - Improved Spell Learning* replaces that spell-choice handler [3][4]. The Trad Creation Club Requiem patch adds one hidden ritual quest, **Profane Divinity** [6][7].

## Starting in LoreRim
- **On Hogithum:** this is not a start-game quest (type "side") [1]. It begins when you find one of six notes titled "Fragment of a poem" [1]. Its stage-10 journal entry reads: "I have discovered the fragment of a poem… Perhaps I should explore at the Bard's College" [1]. Requiem 2.0.2 moved the quest items "to more obvious places to make it easier to start and complete the quest" [2]. LoreRim adds no extra gate that we could find: no LoreRim plugin overrides `REQ_HOGITHUM` (searched every plugin in the install for the editor ID) [1].
- **Spell choices:** no action is needed. Taking a magic-school perk (Novice, Apprentice, Adept, Expert or Master) opens the choice menu [3][5].
- **A Requiem of better times:** this is Requiem's in-game installation prompt [1]. LoreRim's own startup quest runs it for you after character creation. See [lorerim-specific-quests.md](lorerim-specific-quests.md) [8].
- **Profane Divinity:** there is no quest giver. You need Lesser Corpus or the Nerevarine ability. Carry all four Tribunal/Dagoth masks and a heartstone, equip Wraithguard, Sunder and Keening, then craft the profane heart at a smelter [7].

## Quests

### On Hogithum
- **Giver / trigger:** pick up and read any "Fragment of a poem" note. The quest then points you to **Giraud Gemane** at the Bards College [1].
- **Where:** Adonato's Report is in the **Bards College** cell in Solitude [1]. The six fragments are placed in these cells: **Pelagius Wing**, **Wolfskull Cave**, **Frostmere Crypt**, **Robber's Cove** (the cave at Robber's Gorge; UESP spells the interior cell "Robbers' Cove" [10]), **Darklight Tower**, and an exterior cell in the Morthal swamp (editor ID `REQ_Note_Hogithum_MorthalSwamp`) [1].
- **Steps (objectives from the plugin):**
  1. Stage 10: Find more information about the missing fragment.
  2. Stage 50: Find all six missing fragments. Reading *Adonato's Report* at the Bards College sets this stage. The report names places such as Robber's Gorge (the bandit "Brodir"), Pelagius's rooms, Frostmere Crypt and Darklight Tower [1].
  3. Stage 100: Talk to Giraud. Dialogue: "I've collected some fragments of poetry that I think you're looking for." [1]
  4. Stage 110: Read the complete "On Hogithum" [1].
- **Fragments:** each note has an in-game subtitle: Verses of Good Cheer (Wolfskull Cave), Verses of Introductory Charm (Frostmere Crypt), Verses of Odd Familiarity (Robber's Cove), Verses of Pretended Dismay (Darklight Tower), Verses of Regretful Epiphany (Morthal swamp), Verses of Soft Applause (Pelagius Wing) [1].
- **Choices & outcomes:** there are no choices. The journal warns that "it might be risky to read the complete version" [1]. The final stage (120) reads: "A tale of old has now been told, A bard's reward is due; A queen once brewed a lethal food, And you can brew it too." [1]
- **Rewards:** the book **On Hogithum** ("Collated by Giraud Gemane and <player>, at the Bards College, Solitude"). You also unlock the cooking recipe **Cinnabar Beer**: Ale + Jazbay Grapes + Creep Cluster. The recipe has a condition on the On Hogithum quest state (it appears to require quest completion) [1]. Cinnabar Beer is a drink with Requiem's Alcohol and Inebriation effects [1].

### Requiem - Spellchoices / Requiem - Spellchoices (PlayerCheck)
- **What it is:** two start-game-enabled helper quests in `Requiem.esp`. Their "journal" stages are just labels: illusion/conjuration/destruction/restoration/alteration × novice to master [1].
- **Vanilla Requiem behavior:** when you take a magic perk "you're given a choice of spells to learn automatically". By default you pick 2 per perk, or 1 for Master perks [5].
- **In LoreRim:** *Requiem - Improved Spell Learning* overrides `REQ_Quest_Spellchoices_PlayerCheck`. It sends each perk to its own quest, `ISL_Quest_SpellLearning` [3]. Requiem's original Spellchoices quest is no longer used for this. The ISL page says "the default spell learning system will be no longer a thing" [4].

### Requiem - Improved Spell Learning
- **Giver / trigger:** start-game-enabled. It fires each time you take a school's Novice, Apprentice, Adept, Expert or Master perk. Its stages are labeled e.g. "Destruction - Adept" [3].
- **How it works:** the script fills a hidden container with every spell tome from that school-and-tier leveled list (`LItemSpellTomes00/25/50/75/100…`) that you don't already know. It then opens a gift-style menu where you take tomes [3]. A confirmation box lets you keep your picks or redo them [3]. The mod page notes that you "see the tome/spell strength before taking it" and there is no cap on how many spells a tier can offer [4].
- **How many:** *Requiem - Customizable Spells Per Perk* replaces ISL's quest script and reads the counts from its globals. The plugin defaults are 2 tomes each for Novice, Apprentice, Adept and Expert, and 1 for Master [5]. You can change these in the MCM page "Requiem - Spell Learning" (0–20; 0 turns the free spells off) [5]. We found no LoreRim MCM preset that overrides them [5].
- **Rewards:** spell tomes, which you then read [3].

### A Requiem of better times
- **What it is:** Requiem's installation quest. Its objective is "Open and close the magic or inventory menu to install Requiem". Journal: "The twisted turns of fate have brought you into your current situation…" [1]. In Requiem 4.0+, the in-game installation triggers the first time you close the inventory or magic menu [2].
- **In LoreRim:** `LoreRim Startup.esp` overrides this quest. LoreRim's startup script opens and closes the inventory for you, then runs the rest of character setup [8].

### Profane Divinity (Trad CC Requiem patch)
- **Giver / trigger:** you read *Erden Relvel's Profane Ritual notes*. These come from the Creation Club quest "Ghosts of the Tribunal" (`ccasvsse001-almsivi.esm`), where Erden Relvel is the final boss [7][11]. The patch's Nexus page lists the requirements: all four Tribunal/Dagoth masks and 1 heartstone in your inventory; Wraithguard, Sunder and Keening equipped at the same time; and Lesser Corpus or the Nerevarine ability. Then craft the profane heart at a smelter [7].
- **Steps:**
  1. Stage 20: Use the profane heart. Journal: you have removed your own heart "with the tools of Kagrenac" and "there is no way forward but to place my tainted heart back in its place" [6]. While this stage is active you take 50 damage per second [7].
  2. Stage 50: "It is done… your body is now fused with a semblance of divinity or perhaps a corrupted mockery..." [6]
- **Rewards:** the benefits of Corpus plus a "divine power" ability that you can use three times [7].
- **Requirements from other content:** Ash zombies (Ghosts of the Tribunal) can give you Lesser Corpus [7]. Sunder and Wraithguard come from the Creation Club quest "Legends Lost" (`ccbgssse008-wraithguard.esl`) [11]. LoreRim also ships *The Tools of Kagrenac*, which starts after you get Keening from Arniel Gane's quests and complete the main quest "The Way of the Voice"; a courier letter arrives a few in-game days later [12]. We did not verify whether this patch's check accepts the Tools of Kagrenac versions of the items.

## Locations
All Hogithum fragment sites are vanilla locations [1]:
- **Bards College** (Solitude): Adonato's Report and quest giver Giraud Gemane [1].
- **Pelagius Wing** (Blue Palace, Solitude) [1].
- **Wolfskull Cave**, **Frostmere Crypt**, **Darklight Tower** [1].
- **Robber's Cove**: the interior of Robber's Gorge, a bandit camp west-southwest of Morthal in Hjaalmarch; UESP gives the interior cell name as "Robbers' Cove" [10].
- **Morthal swamp**: an exterior cell in Hjaalmarch [1].

## Rewards & notable items
- *On Hogithum* (book), the Cinnabar Beer recipe, and Cinnabar Beer [1].
- Spell tomes chosen through ISL [3][5].
- Profane heart → Corpus benefits plus the "divine power" ability [7].

## LoreRim notes
- **Version mismatch:** the Requiem `meta.ini` records version 6.0.2.0. Its `installationFile`, however, is "Requiem 5.4.5 - Towers and Shadows Bugfix Pack 5", and the same `meta.ini` sets `ignoredversion=6.0.2.0` (the 6.0.2.0 update was marked ignored in MO2) [9]. The bundled `Changelog.md` also ends at 5.4.5 ("Towers and Shadows" Bugfix Pack #5) [2]. Treat the shipped Requiem as 5.4.5-based unless confirmed otherwise.
- **Requiem's CC plugin disables some CC quests.** According to the Trad page, *Requiem - Creation Club.esp* (shipped and active in LoreRim) "disabled a number of CC Quests". Getting them back needs a separate "CC Quests Re-Enabled" download [7]. That download is **not** in the LoreRim install: there is no such mod folder, and the Trad folder has only `Trad_AE_CC_Collection_Requiem_Patch.esp` [6]. For which CC quests actually run in LoreRim, see [vanilla-changes/creation-club.md](../vanilla-changes/creation-club.md).
- The Trad patch also overrides the CC quests "The Lost Library", "Tilted Scales", "Missing Merchant" and the Zombie Attack events, rebalancing them for Requiem. These belong in the Creation Club file [6].
- In Requiem 2.0.0, Requiem disabled Dragonborn content "without a suitable patch" [2]. LoreRim ships `Fozars_Dragonborn_-_Requiem_Patch.esp` [8]. See [vanilla-changes/dragonborn.md](../vanilla-changes/dragonborn.md).

## Related
- [lorerim-specific-quests.md](lorerim-specific-quests.md): LoreRim's startup quest, Spirit Tutors, Second Breath
- [tools-of-kagrenac.md](tools-of-kagrenac.md), [../vanilla-changes/creation-club.md](../vanilla-changes/creation-club.md)
- [../areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md), [../areas/hjaalmarch-and-morthal.md](../areas/hjaalmarch-and-morthal.md), [../areas/the-reach-and-markarth.md](../areas/the-reach-and-markarth.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Quest names, objectives, journal, fragment books, placements, recipe | LoreRim install: `Requiem.esp` QUST/BOOK/DIAL/INFO/COBJ/ALCH/REFR records (mod folder "Requiem - The Roleplaying Overhaul (No Messages ESLIFIED)", profile Default) | mod v6.0.2.0 per meta.ini | 2026-10-02 |
| 2 | Hogithum history, installation trigger, Dragonborn note | LoreRim install: Requiem `documentation/Changelog.md` (2.0.0, 2.0.2, 4.0.0 entries; top entry 5.4.5) | n/a | 2026-10-02 |
| 3 | ISL quest, gift-menu mechanism, PlayerCheck override | LoreRim install: `Requiem - Improved Spell Learning.esp` + `Source/Scripts/*.psc` + `Documentation.txt` | mod v1.5.0.0 | 2026-10-02 |
| 4 | ISL features | [Nexus mod 74010](https://www.nexusmods.com/skyrimspecialedition/mods/74010) via meta.ini cache | 2025-08-27 (nexusLastModified) | 2026-01-11 cache |
| 5 | Spells per perk counts, MCM, Requiem default | LoreRim install: `Requiem - Customizable Spells Per Perk.esp` GLOB values, scripts, MCM config; [Nexus 124891](https://www.nexusmods.com/skyrimspecialedition/mods/124891) via meta.ini cache; LoreRim MCM Settings folder | 2024-07-23 (nexusLastModified) | 2026-10-02 |
| 6 | Profane Divinity records, CC overrides | LoreRim install: `Trad_AE_CC_Collection_Requiem_Patch.esp` QUST records | mod v2.3.2.0 | 2026-10-02 |
| 7 | Profane ritual requirements, CC quests disabled | [Nexus mod 64829](https://www.nexusmods.com/skyrimspecialedition/mods/64829) via meta.ini cache | 2023-12-15 (nexusLastModified) | 2026-01-31 cache |
| 8 | LoreRim startup overriding installation quest; active plugins | LoreRim install: `LoreRim - MCM and INI Settings/LoreRim Startup.esp` + `LoreRimStartUp.psc`; `profiles/Default/plugins.txt` | n/a | 2026-10-02 |
| 9 | Installed Requiem archive | LoreRim install: Requiem `meta.ini` (installationfile, version, ignoredversion) | n/a | 2026-10-02 |
| 10 | Robbers' Cove = Robber's Gorge interior; location | [UESP: Robber's Gorge](https://en.uesp.net/wiki/Skyrim:Robber's_Gorge) | n/a | 2026-10-02 |
| 11 | Ghosts of the Tribunal / Legends Lost quest data | Official quest catalog `imports/official-quests.json` (ccasvsse001-almsivi.esm, ccbgssse008-wraithguard.esl) | n/a | 2026-10-02 |
| 12 | Tools of Kagrenac start | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
