---
id: college-of-winterhold-quest-expansion
title: College of Winterhold - Quest Expansion
kind: mod-added
category: quest-expansion
summary: Adds a "College Curriculum" of seven voiced apprentice lessons, one from each College scholar (Tolfdir/Arniel, Faralda, Drevis, Sergius, Phinis, Colette, Urag). You must finish them after joining the College before the vanilla questline continues to Saarthal.
mods:
  - name: College of Winterhold - Quest Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/66666
    version: 1.16.0.0
  - name: OMEAR Addition - CoW Quest Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/67968
    version: 1.8.2.0
  - name: Gonz - Stonehills ReRe - College Quest Expan Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/133572
    version: 1.0.0.0
plugins: [College Of Winterhold - Quest Expansion.esp, Gonz - Stonehills ReRe - Jay College.esp]
quests: [College Curriculum, Rapture of the Deep, A Test of Ice and Fire, Back-Stabbing Rodents, Enchanted To Meet You, I Choose You, Familiar, None Escape The Light, Reading Comprehension 101]
locations: [College of Winterhold, The Midden, Stonehills, sunken Dwemer ruins north of the College (Sea of Ghosts)]
region: Winterhold
start: Join the College of Winterhold (First Lessons). Afterwards talk to Tolfdir, who starts "College Curriculum". All seven lessons must be done (or declined through dialogue) before Under Saarthal continues.
related: [vanilla-changes/college-of-winterhold.md, mod-added/finding-velehk-sain.md, mod-added/tools-of-kagrenac.md, areas/winterhold.md]
sources: [1, 2, 3, 4, 5, 6, 7]
confidence: high
updated: 2026-10-02
---

# College of Winterhold - Quest Expansion

This mod inserts an apprentice phase into the vanilla College questline. Each scholar teaches you a spell, gives a short lecture and then sets a practical task [2]. The quests are small, fully voiced with spliced dialogue, completable in any order, and have objective markers throughout [2]. The LoreRim site cites the mod as the reason "you will get actual lessons on each school of magic" [3].

## Starting in LoreRim
- Join the College through **First Lessons** (`MG01`). This mod edits one scene and one property in MG01 [1][2].
- In LoreRim, MG01 is also edited by **Improved College Entry - Questline Tweaks** [4]:
  - Faralda will not sell the entry spell and sends you to the court wizards instead.
  - You can enter by shouting after The Way of the Voice.
  - You can pick a favored school.
- The quest **College Curriculum** (`COW_CentralQuest`) opens with "As a new member of the College of Winterhold, I'm expected to learn more about magic. I should talk to Tolfdir for my next lesson." [1]
- **Gate:** You must complete these seven quests to unlock the continuation of the vanilla questline ("Going to Saarthal") [2]. The scripts swap First Lessons' follow-up quest for College Curriculum, and College Curriculum's last stage starts Under Saarthal (`MG02`) [7]. Some lessons can be declined through clearly marked dialogue, and the journal records the refusal [1][2].
- If you can't find a scholar, ask **Tolfdir**, who can turn on markers to the scholars you have not talked to yet [2].
- The author says the mod can be installed mid-playthrough only if you haven't joined the College yet [2]. LoreRim ships it from the start.

## Quests
### College Curriculum
- **Giver:** Tolfdir [1].
- **Steps:**
  1. Talk to Tolfdir for more lessons.
  2. Learn Waterbreathing and talk to Tolfdir.
  3. Complete lessons for all college scholars (x/7).
  4. Complete the last lesson.
  5. Talk to Tolfdir [1].

### Rapture of the Deep (Alteration)
- **Giver:** Tolfdir teaches Waterbreathing, then Arniel Gane runs the test [1][2].
- **Steps:**
  1. Talk to Arniel Gane, then follow him north of the College.
  2. "Dive and find the crystal" in sunken Dwemer ruins.
  3. Return it to Arniel.
  4. Speak with Tolfdir [1].
- **Tip:** The crystal is in a brownish Dwemer chest, one of two underwater chests. It is in the furthest, northern part of the ruins near a half-buried Dwemer centurion head. An optional "easy mode" patch adds a marker [2], but whether LoreRim installs it is unverified.

### A Test of Ice and Fire (Destruction)
- **Giver:** Faralda teaches Firebolt [1][2].
- **Steps:** 1. Learn the spell. 2. Pass Faralda's test using Firebolt against an Ice Wraith. 3. Return to Faralda [1].

### Back-Stabbing Rodents (Illusion)
- **Giver:** Drevis teaches a Fury spell [2].
- **Steps:** 1. Learn the spell. 2. Use it on a nearby skeever den so they fight each other. 3. Return to Drevis [1].

### Enchanted To Meet You (Enchanting)
- **Giver:** Sergius, who is very busy and has to be convinced [1][2].
- **Steps:**
  1. Find an Arcane Enchanter, disenchant the old dagger, find a filled soul gem and enchant the client's sword.
  2. Talk to Sergius and read the note.
  3. Deliver the sword to **Gretilde in Stonehills**.
  4. Find the actual client. It turns out the order was sent by her daughter **Adara**, who wants to be a mage.
  5. Talk to Adara and her mother.
  6. Escort Adara to the College, where Faralda tests her.
  7. Return to Sergius [1].

### I Choose You, Familiar (Conjuration)
- **Giver:** Phinis, the Conjuration scholar [1][2].
- **Steps:** 1. Learn Conjure Familiar. 2. Follow Phinis. 3. Summon a familiar, which his Atronach destroys. 4. Talk to him [1].
- **Lesson:** Familiars are a distraction that buys you time to retreat [1].

### None Escape The Light (Restoration)
- **Giver:** Colette teaches Turn Lesser Undead [1][2].
- **Steps:** 1. Talk to Tolfdir. 2. Deal with the draugr in **the Midden**, using Turn Lesser Undead on one of them. 3. Talk to Colette [1].

### Reading Comprehension 101 (Knowledge)
- **Giver:** Urag gro-Shub. No spell is taught [2].
- **Steps:** 1. Read *Olaf and the Dragon* and talk to Urag. 2. If you fail, "Actually read the book and try again" [1].
- **Lesson:** Judge the credibility of sources [1].

## Rewards & notable items
- At least one basic spell in each school (delivered as spell tomes, so the lessons work with spell-learning mods) [2].
- **Apprentice's Boon:** +5% skill gain for 3 in-game days. You get it only if you complete every quest without skipping any and use the intended spell in each one [2].

## LoreRim notes
- Supporting mods shipped with it:
  - **OMEAR Addition - CoW Quest Expansion** replaces OnMagicEffectApply script events with PO3 Papyrus Extender code for this mod, to reduce script load. It has no plugin and no gameplay change [5].
  - **Gonz - Stonehills ReRe - College Quest Expan Patch** "adjusts NPC positions" for LoreRim's Stonehills overhaul, where the Enchanting lesson ends [4][6].
- **College of Winterhold Quest Start Fixes** is also present. It fixes later vanilla College quests (e.g. Containment, The Staff of Magnus) that may fail to start because of reserved aliases [4].
- The author says the mod is incompatible with "Not So Fast - Mage Guild" [2]. That mod was not checked against the LoreRim list.

## Related
- [../vanilla-changes/college-of-winterhold.md](../vanilla-changes/college-of-winterhold.md)
- [finding-velehk-sain.md](finding-velehk-sain.md)
- [tools-of-kagrenac.md](tools-of-kagrenac.md)
- [../areas/winterhold.md](../areas/winterhold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal text, MG01 override | LoreRim install: `College Of Winterhold - Quest Expansion.esp` QUST records (profile Default) | mod v1.16.0.0 | 2026-10-02 |
| 2 | features, gate on Saarthal, lessons, reward, tips | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/66666) via meta.ini cache | 2025-04-13 (nexusLastModified) | 2026-01-11 cache |
| 3 | LoreRim framing | [LoreRim site — Factions](https://www.lorerim.com/guides/quests/factions) | n/a | 2026-10-02 |
| 4 | other College mods in LoreRim (Improved College Entry, Quest Start Fixes, Stonehills patch) | LoreRim install: `profiles/Default/modlist.txt`, `plugins.txt`, and those mods' meta.ini caches (Improved College Entry nexusLastModified 2020-10-13) | n/a | 2026-10-02 |
| 5 | OMEAR addition purpose | [OMEAR Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/67968) via meta.ini cache | 2025-12-28 (nexusLastModified) | 2026-01-11 cache |
| 6 | Stonehills patch purpose | [Stonehills ReRe Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/133572) via meta.ini cache | 2026-01-04 (nexusLastModified) | 2026-10-02 |
| 7 | Saarthal gate mechanism | LoreRim install: `College Of Winterhold - Quest Expansion/Source/Scripts/Cow_ThankYouParapets.psc`, `QF_COW_CentralQuest_05014C23.psc` | mod v1.16.0.0 | 2026-10-02 |
