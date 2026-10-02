---
id: college-of-winterhold
title: College of Winterhold (LoreRim changes)
kind: vanilla-changes
category: questline
summary: In LoreRim the College of Winterhold questline is gated behind seven new apprentice lessons ("College Curriculum", from College of Winterhold - Quest Expansion) that must be finished before Under Saarthal; Improved College Entry reworks the entry test (Faralda no longer sells the test spell, Dragonborn shout entry after The Way of the Voice, favored-school robes), and Choose Your Own Arch-Mage lets you hand the Arch-Mage post to another member.
mods:
  - name: College of Winterhold - Quest Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/66666
    version: 1.16.0.0
  - name: Improved College Entry - Questline Tweaks
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/22184
    version: 2.8.0.0
  - name: Choose Your Own Arch-Mage
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/30887
    version: 1.0.1.0
  - name: College of Winterhold Quest Start Fixes
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/53817
    version: 0.4.0.0
  - name: OMEAR Addition - CoW Quest Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/67968
    version: 1.8.2.0
  - name: Gonz - Stonehills ReRe - College Quest Expan Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/133572
    version: 1.0.0.0
  - name: Faction Ranks
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/170776
    version: 1.0.3.0
  - name: "[LoreRim] Economy Overhaul"
    nexus: n/a (LoreRim-internal)
    version: n/a
plugins: [College Of Winterhold - Quest Expansion.esp, CollegeEntry.esp, CYA_ChooseYourOwnArchMage.esp, College of Winterhold Quest Start Fixes.esp, Gonz - Stonehills ReRe - Jay College.esp, Faction Ranks.esp, LoreRim - Economy Overhaul.esp]
quests: [College Objective Quest, First Lessons, College Curriculum, Rapture of the Deep, A Test of Ice and Fire, Back-Stabbing Rodents, Enchanted To Meet You, I Choose You, Familiar, None Escape The Light, Reading Comprehension 101, Under Saarthal, Hitting the Books, Good Intentions, Revealing the Unseen, Containment, The Staff of Magnus, The Eye of Magnus, Arniel's Endeavor, Shalidor's Insights, Aftershock]
locations: [College of Winterhold, Winterhold, Saarthal, The Midden, Stonehills, Labyrinthian, Mzulft]
region: Winterhold Hold
start: Walk onto the College bridge in Winterhold and talk to Faralda (First Lessons). In LoreRim she will NOT sell you the test spell (buy it from a court wizard first), you may pick a favored school, or shout your way in once The Way of the Voice is done. After joining, finish all seven College Curriculum lessons (Tolfdir tracks them) before Under Saarthal unlocks.
related: [mod-added/college-of-winterhold-quest-expansion.md, mod-added/finding-velehk-sain.md, mod-added/tools-of-kagrenac.md, mod-added/bards-college-excavation.md, areas/winterhold.md, vanilla-changes/main-quest-and-alternate-start.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
confidence: high
updated: 2026-10-02
---

# College of Winterhold (LoreRim changes)

The College of Winterhold is Skyrim's mages' guild questline: join via Faralda's entry test (First Lessons), then Under Saarthal → Hitting the Books → Good Intentions → Revealing the Unseen → Containment → The Staff of Magnus → The Eye of Magnus, ending with the player as Arch-Mage [1]. LoreRim keeps the vanilla story beats but inserts a mandatory block of seven apprentice lessons between joining and Saarthal, reworks the entry test and early quests, and lets you abdicate the Arch-Mage seat [4][5][6][7][9]. The LoreRim site sums it up as making "the college … now actually a college" [4].

## Starting in LoreRim
- **Finding it:** the vanilla "College Objective Quest" (MG01Pointer) points you to the College ("Visit the College of Winterhold") [1][19]. No "Delayed Quest Starts" mod in the install targets the College questline (the shipped Delayed Quest Starts modules are CC Fishing, Forsworn Conspiracy, House of Horrors, Mind of Madness and Taste of Death) [11].
- **Entry test (First Lessons) — LoreRim differs from vanilla** (Improved College Entry):
  - Vanilla: Faralda picks one of Firebolt, Conjure Flame Atronach, Fear, Healing Hands or Magelight and, if you lack it, teaches it for 30 gold; you may also bypass with a high-Speech persuasion or, during Elder Knowledge, by declaring you are Dragonborn and shouting [2].
  - LoreRim: Faralda **will not sell you the spell** and instead sends you to a court wizard to buy it [7]; the controlling global `MGI_FaraldaSellsSpells` ships at 0 in LoreRim's `CollegeEntry.esp` and no later plugin overrides it [8]. You can ask to join straight away, choose a **favored school of magic** at the gate, and you can enter by **shouting after completing The Way of the Voice** (MQ105) [7].
  - Mirabelle gives robes matching your entry-test school; the tour is skippable; Tolfdir will not start his lesson until you have spoken with Mirabelle; Lesser Ward is not auto-added if you already know Steadfast or Greater Ward [7].
- **New gate after joining:** you must complete the seven College of Winterhold - Quest Expansion lessons before the vanilla line continues to Saarthal; the mod's author states the vanilla quests are otherwise unchanged [6]. The tracker quest is **College Curriculum** — "Talk to Tolfdir for more lessons" → "Complete lessons for all college scholars (1/7 … 6/7)" → "Complete the last lesson" → "Talk to Tolfdir" [5]. Full lesson walkthroughs: [mod-added/college-of-winterhold-quest-expansion.md](../mod-added/college-of-winterhold-quest-expansion.md).
- **Experience:** LoreRim levels via the Experience mod; its LoreRim INI grants 100 XP per completed College quest (`iXPQuestCollege = 100`) and 0 XP for misc-type quests [14]. The curriculum lessons are tagged mages-guild type in the plugin [5], so they likely count as College quests (inference, unverified in-game).

## Quests

### First Lessons (MG01)
- **Vanilla:** pass Faralda's casting test, get robes from Mirabelle Ervine, take the tour, attend Tolfdir's Lesser Ward lesson; rewards membership and Lesser Ward [2].
- **In LoreRim:** Improved College Entry rewrites the entry (see above), plus fixes: Faralda's force-greet moved back to the bridge, journal-entry errors fixed, Faralda finishes lighting the wells, Magelight can light the bridge wells [7]. College of Winterhold - Quest Expansion edits "one scene and one property" of MG01 to hand off into its curriculum [6]. Overridden also by USSEP (fixes) [16].

### College Curriculum (COW_CentralQuest) — new, mandatory before Under Saarthal
- **Giver / trigger:** starts on joining: "As a new member of the College of Winterhold, I'm expected to learn more about magic. I should talk to Tolfdir for my next lesson." [5]
- **Lessons (exact names, scholar, spell):** Rapture of the Deep (Tolfdir/Arniel Gane, Waterbreathing — dive for a crystal in sunken ruins north of the College); A Test of Ice and Fire (Faralda, Firebolt vs an Ice Wraith); Back-Stabbing Rodents (Drevis, Fury on skeevers); Enchanted To Meet You (Sergius, enchant and deliver a sword to Stonehills, then escort the girl Adara to the College); I Choose You, Familiar (Phinis, Conjure Familiar); None Escape The Light (Colette, Turn Lesser Undead on draugr in the Midden); Reading Comprehension 101 (Urag gro-Shub, a reading test on "Olaf and the Dragon") [5][6].
- **Choices & outcomes:** lessons can be done in any order; most can be declined by dialogue (the journal records the refusal, e.g. "I refused to take Drevis' class on Illusion") [5][6]. If lost, Tolfdir can mark scholars you have not yet visited [6].
- **Rewards:** at least one basic spell per school; "Apprentice's Boon" (3 in-game days, +5% skill gain) only if you do every lesson the intended way without skipping [6].
- **LoreRim patches:** a Stonehills ReRe patch adjusts NPC positions for the Stonehills delivery [18]; OMEAR Addition - CoW Quest Expansion replaces a script event to cut script load (loose scripts, no plugin) [17].

### Under Saarthal (MG02)
- **Vanilla:** follows First Lessons; Tolfdir leads apprentices into Saarthal; Savos Aren rewards a Staff of Magelight and points you to Urag [3].
- **In LoreRim:** unlocks only after College Curriculum [5][6]. Improved College Entry: Savos Aren gives a **leveled Staff of Turning** instead of the Staff of Magelight; Tolfdir/apprentice greetings no longer stop their walk; Nerien no longer greets you with generic lines; reduced mist in the burial shaft [7].

### Hitting the Books (MG03), Revealing the Unseen (mg06), Aftershock (MGR30)
- **Vanilla:** Hitting the Books identifies the Saarthal artifact with Urag; Revealing the Unseen follows Good Intentions and leads to Mzulft [1].
- **In LoreRim:** no design changes found — only Unofficial Skyrim Special Edition Patch overrides [16]. Choose Your Own Arch-Mage edits Aftershock dialogue to drop references to your rank [9].

### Good Intentions (MG04)
- **Vanilla:** Tolfdir/Ancano lead to Quaranir and the Augur of Dunlain in the Midden [1][19].
- **In LoreRim:** Improved College Entry fully blocks entering the Arch-Mage's Quarters at quest start (where entering would break the game) and makes the Augur's approach lines fire more consistently [7].

### Containment (MG05), The Staff of Magnus (MG07), The Eye of Magnus (MG08)
- **Vanilla:** Containment follows Revealing the Unseen; you retrieve the Staff from Labyrinthian and defeat Ancano to become Arch-Mage [1].
- **In LoreRim:** College of Winterhold Quest Start Fixes makes non-essential aliases (Arniel Gane, Faralda, the Winterhold location) optional/reservable so these quests no longer fail to start when another quest has reserved those NPCs [13]. No narrative change.

### Becoming (and un-becoming) Arch-Mage — Choose Your Own Arch-Mage
- **Vanilla:** completing The Eye of Magnus makes you Arch-Mage with the Arch-Mage's Quarters and Archmage's Robes [1].
- **In LoreRim:** once Arch-Mage, every College member gains dialogue about taking the role; some accept, some need convincing, some refuse. The successor gets their own robes and a key (you keep yours) and a new schedule; **the choice is permanent** [9]. Its Obscure's College quarters-variation feature does not apply because Obscure's College of Winterhold is not in the LoreRim modlist [9][11]. The LoreRim site lists this as a headline College tweak [4].

### Arniel's Endeavor (MGRArniel01–04)
- **Vanilla:** Arniel Gane's four-part side quest (starts with "Deliver ten cogs to Arniel Gane"), available after Hitting the Books [1][19].
- **In LoreRim:** `LoreRim - Economy Overhaul.esp` overrides MGRArniel01; its script properties reference `FavorRewardGoldSmall`/`FavorRewardSmall`, suggesting a reward retune — the exact change is unverified [15]. Part 3 (MGRArniel03) gets the Quest Start Fixes alias fix [13]. Keening from this line is the hook for The Tools of Kagrenac (starts after you have Keening and have finished The Way of the Voice, by courier letter) [12] — see [mod-added/tools-of-kagrenac.md](../mod-added/tools-of-kagrenac.md).

### Shalidor's Insights (MGR21)
- **In LoreRim:** overridden by Improved College Entry and USSEP; the mod page does not list a specific MGR21 change [7][16]. Improved College Entry also makes a book Urag reports missing no longer findable on College grounds, and keeps Phinis's Saarthal-object lecture until after Under Saarthal [7].

## Locations
- **College of Winterhold** — Winterhold town, Winterhold Hold; entered over the bridge where Faralda waits [1][2].
- **Sunken Dwemer ruins north of the College** (Sea of Ghosts) — Rapture of the Deep dive site [6].
- **Stonehills** — delivery destination in Enchanted To Meet You [5]; reworked by Stonehills ReRe in LoreRim [18].
- **The Midden** — draugr infestation in None Escape The Light [5]; Augur of Dunlain in Good Intentions [1].

## Rewards & notable items
- Staff of Turning (leveled) replaces the Staff of Magelight from Savos Aren [7].
- Apprentice's Boon (3 days, +5% skill rate) for completing all seven lessons properly [6].
- **Faction Ranks** (enabled in LoreRim): guild ranks appear in the Stats menu; each guild has 5 ranks and its 4-piece attire grows stronger per rank. Mages Guild set: Robes (+50% Magicka regen, +10%/rank), Gloves (novice spells 15% stronger, applies to higher tiers as you rank up), Hood (+30 Magicka, +10/rank), Boots (5% spell absorb, +3%/rank); full set adds "Mages Guild's Boon" (next spell after a kill 10% stronger) [10][11]. Which in-game items count as the "Mages Guild" set is not named on the cached page.

## LoreRim notes
- **Fix-only overrides (not design changes):** Unofficial Skyrim Special Edition Patch touches MG01, MG01Pointer, MG02–MG05, mg06, MGR21, MGR30, MGRArniel03 and the Illusion/Conjuration/Restoration ritual quests; Official Master Files - Cleaned Plugins touches Onmund's Request, MGR20 (Fetch me that Book!) and MGRArniel03 [16].
- **Other LoreRim overrides of College quests (what they change is unverified):** `[LoreRim] Economy Overhaul` also overrides MGR01 (Tolfdir the Absent-Minded) and MGR20B (Fetch me that Book!); Requiem overrides MGR22 (Shalidor's Insights Rewards); Dragon Hunting overrides MGRitual05 (Alteration Ritual Spell) [16].
- **Not shipped despite the site:** the LoreRim Factions page says you get "a welcome gift" on joining [4]. The likely referent, *College of Winterhold's Welcome Gift* (Nexus 127453 — Mirabelle hands two spell vouchers redeemable with Urag) [12], is not in the Default profile, and no LoreRim plugin contains voucher strings [11]. Treat the welcome gift as absent from the current install (Improved College Entry's school-matched robes are the only joining gift verified) [7][11].
- **Incompatibility to know:** the Quest Expansion author lists *Not So Fast - Mage Guild* as incompatible; it is not in LoreRim [6][11].
- **Not College of Winterhold:** the Bards College (Solitude) activities that LoreRim groups nearby — Tome Trials history exams, Typography Training (Daedric alphabet from Viarmo), and the Bards College Excavation repeatable quest "Clear Dead Men's Respite" — reward Speech, not College progress [4][19]; see [mod-added/bards-college-excavation.md](../mod-added/bards-college-excavation.md).
- The four missing apprentices / Midden Dark gauntlet storyline is a separate mod: [mod-added/finding-velehk-sain.md](../mod-added/finding-velehk-sain.md) [12].

## Related
- [mod-added/college-of-winterhold-quest-expansion.md](../mod-added/college-of-winterhold-quest-expansion.md) — full curriculum walkthrough
- [mod-added/finding-velehk-sain.md](../mod-added/finding-velehk-sain.md)
- [mod-added/tools-of-kagrenac.md](../mod-added/tools-of-kagrenac.md)
- [mod-added/bards-college-excavation.md](../mod-added/bards-college-excavation.md)
- [areas/winterhold.md](../areas/winterhold.md)
- [vanilla-changes/main-quest-and-alternate-start.md](main-quest-and-alternate-start.md) — The Way of the Voice (shout entry)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | vanilla questline order, Arch-Mage, Arniel prerequisite | [UESP — Skyrim:College of Winterhold (faction)](https://en.uesp.net/wiki/Skyrim:College_of_Winterhold_(faction)) | n/a | 2026-10-02 |
| 2 | vanilla First Lessons entry test | [UESP — Skyrim:First Lessons](https://en.uesp.net/wiki/Skyrim:First_Lessons) | n/a | 2026-10-02 |
| 3 | vanilla Under Saarthal start/reward | [UESP — Skyrim:Under Saarthal](https://en.uesp.net/wiki/Skyrim:Under_Saarthal) | n/a | 2026-10-02 |
| 4 | LoreRim College/Bards College framing, welcome gift claim | [LoreRim site — Factions](https://www.lorerim.com/guides/quests/factions) | n/a | 2026-10-02 |
| 5 | curriculum quest names, objectives, journal | LoreRim install: `College Of Winterhold - Quest Expansion.esp` QUST records (profile Default) | mod v1.16.0.0 | 2026-10-02 |
| 6 | curriculum gate, lesson summaries, Apprentice's Boon, compatibility | [Nexus — College of Winterhold - Quest Expansion](https://www.nexusmods.com/skyrimspecialedition/mods/66666) via meta.ini cache | 2025-04-13 (nexusLastModified) | 2026-01-11 cache |
| 7 | entry-test and MG01/MG02/MG04 changes | [Nexus — Improved College Entry](https://www.nexusmods.com/skyrimspecialedition/mods/22184) via meta.ini cache | 2020-10-13 (nexusLastModified) | 2026-01-11 cache |
| 8 | Faralda does not sell spells (global = 0) | LoreRim install: `CollegeEntry.esp` GLOB `MGI_FaraldaSellsSpells`; no other plugin references it | mod v2.8.0.0 | 2026-10-02 |
| 9 | Arch-Mage succession | [Nexus — Choose Your Own Arch-Mage](https://www.nexusmods.com/skyrimspecialedition/mods/30887) via meta.ini cache | 2019-12-29 (nexusLastModified) | 2026-01-11 cache |
| 10 | Faction Ranks guild ranks and attire | [Nexus — Faction Ranks](https://www.nexusmods.com/skyrimspecialedition/mods/170776) via meta.ini cache | 2026-06-26 (nexusLastModified) | 2026-07-09 cache |
| 11 | which mods are enabled; no voucher strings in any plugin | LoreRim install: `profiles/Default/modlist.txt`, `plugins.txt`, plugin string search | n/a | 2026-10-02 |
| 12 | Welcome Gift mod contents; Tools of Kagrenac / Finding Velehk Sain hooks | [Web search — College of Winterhold's Welcome Gift (Nexus 127453)](https://www.nexusmods.com/skyrimspecialedition/mods/127453); [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests); [LoreRim site — Quest Expansions](https://www.lorerim.com/guides/quests/quest-expansions) | n/a | 2026-10-02 |
| 13 | MG05/MG07/MG08/MGRArniel03 start fixes | [Nexus — College of Winterhold Quest Start Fixes](https://www.nexusmods.com/skyrimspecialedition/mods/53817) via meta.ini cache | 2022-07-30 (nexusLastModified) | 2026-01-11 cache |
| 14 | quest XP values | LoreRim install: `LoreRim - MCM and INI Settings/SKSE/Plugins/Experience.ini` | n/a | 2026-10-02 |
| 15 | MGRArniel01 override | LoreRim install: `LoreRim - Economy Overhaul.esp` QUST MGRArniel01 | n/a | 2026-10-02 |
| 16 | which mods override which official quests | LoreRim install: vanilla-quest-overrides map (`imports/vanilla-quest-overrides.json`; unit brief vc-college) | n/a | 2026-10-02 |
| 17 | OMEAR script fix | [Nexus — OMEAR](https://www.nexusmods.com/skyrimspecialedition/mods/67968) via meta.ini cache | n/a | 2026-01-11 cache |
| 18 | Stonehills patch | [Nexus — Stonehills ReRe-imagined patches](https://www.nexusmods.com/skyrimspecialedition/mods/133572) via meta.ini cache | 2026-01-04 (nexusLastModified) | 2026-10-02 |
| 19 | vanilla objective strings; Bards mods | LoreRim install: official quest catalog (Skyrim.esm strings); `BardExcavation.esp`, Tome Trials and Typography Training meta.ini caches | n/a | 2026-10-02 |
