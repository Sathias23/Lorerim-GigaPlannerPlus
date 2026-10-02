---
id: undeath
title: Undeath (Lichdom questline)
kind: mod-added
category: new-quests
summary: A seven-quest necromancer storyline (Undeath Remastered, with the Classical Lichdom fix/overhaul). You hunt the necromancer Antioch across Skyrim to Scourg Barrow in the Dragontail Mountains, then can either stop there or use his stolen knowledge to perform the Ritual of Transcendence and become a Lich. In LoreRim it starts only after you complete Blood on the Ice and The Wolf Queen Awakened. There is no level gate, and by default you start it by reading a note in Markarth's Silver-Blood Inn.
mods:
  - name: Undeath Remastered - CLEANED ESMIFIED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/6180
    version: 1.7.0.0
  - name: Undeath - Classical Lichdom - ESMIFIED
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/40802
    version: 3.60.0.0
  - name: Sensible Undeath Prerequisite - No Level
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/121948
    version: 1.2.0.0
  - name: Requiem - Undeath
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/69009
    version: f1.01
  - name: "[LoreRim] Undeath Apocrypha Skip"
    nexus: n/a (LoreRim-authored, modid 0)
    version: d2025.5.24
  - name: Undeath - Phylactery Limits
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/97490
    version: 1.2.0.0
  - name: Undeath Lich Can Fly (With Collisions)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/136151
    version: 1.1.0.0
  - name: Apocryphal Library and Undeath Remastered Integration
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/128168
    version: 1.2.0.0
  - name: Undeath - Classical Lichdom Cleaned and Enhanced Textures
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/55803
    version: 1.0.0.0
  - name: Draugrs - SE by Xtudo - Undeath Remastered
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/123225
    version: 4.9.0.0
  - name: Draugrs - SE by Xtudo - Undeath Classical Lichdom
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/123225
    version: 5.3.0.0
  - name: LoreRim - xEdit64 Output (LoreRim - Undeath Patches.esp)
    nexus: n/a (LoreRim-generated patch)
    version: n/a
plugins: [Undeath.esp, Undeath0.esp, UndeathFixes.esp, UndeathQuestPrerequisiteNoLevel.esp, Requiem - Undeath.esp, Undeath Apocrypha Skip.esp, Undeath - Phylactery Limits.esp, Undeath Litch Can Fly.esp, LB_Undeath_Apocrypha.esp, LoreRim - Undeath Patches.esp]
quests: [In their Footsteps, Exhuming Power, Arkay the Enemy, Infernal Alchemy, Scourg Barrow, "Black Book: Whispers of the Veil", The Path of Transcendence]
locations: [Ravenscorn Spire, Temple of Arkay, Scourg Barrow, Dragontail Mountains, Apocrypha, Solitude Sewers, The Broker's Shack]
region: The Reach, Falkreath Hold, Winterhold, then the separate Dragontail Mountains worldspace
start: "In LoreRim, complete Blood on the Ice (Windhelm) and The Wolf Queen Awakened (Solitude) first. There is no level requirement. On a later skill increase, a note called 'Torn Page from Traveler's Diary' appears in the Silver-Blood Inn in Markarth (immersive start is on by default). Reading it starts In their Footsteps."
related: [areas/undeath-dragontail-mountains.md, areas/the-reach-and-markarth.md, areas/haafingar-and-solitude.md, areas/falkreath-hold.md, areas/winterhold.md, vanilla-changes/side-quests-and-misc.md, vanilla-changes/dragonborn.md, mod-added/requiem-quests.md, mod-added/lorerim-specific-quests.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
confidence: high
updated: 2026-10-02
---

# Undeath (Lichdom questline)

Undeath is a short questline added by a mod. You follow the necromancer Antioch, who has stolen a necromantic tome from the Vigil of Stendarr. You stop his followers in the Reach, Falkreath Hold and Winterhold, and then follow him to Scourg Barrow in the Dragontail Mountains, a worldspace from TES: Daggerfall [1][4]. After you defeat him, you can either end the threat or use his knowledge to perform the Ritual of Transcendence and become an undead Lich [1][4]. LoreRim ships the original mod (v1.7) together with Classical Lichdom (v3.60), a third-party update that fixes bugs in the questline, adds an immersive start and overhauls the Lich (resurrection at your phylactery, a soul-fed progression system) [5]. The LoreRim site lists Undeath under "New Quests" but says nothing about how it starts [6].

## Starting in LoreRim
- **LoreRim differs from the mod's default.** By default, Undeath starts automatically at level 30 [4], and Classical Lichdom also starts it at level 30 [5]. LoreRim adds *Sensible Undeath Prerequisite - No Level*, which replaces Classical Lichdom's start condition, `NecroQuestStart`. Its plugin removes the `GetLevel >= 30` check and instead requires that **Blood on the Ice** (`MS11`) and **The Wolf Queen Awakened** (`MS06`) are both completed, and that In their Footsteps (`NecroQuest01`) is neither running nor finished [2][3][14]. The mod author describes this as the "No Level" version, which "removes" the level-30 requirement [3].
- **Trigger.** The start node fires when a skill increases, not the moment a quest finishes. The Classical Lichdom FAQ says the questline starts "when a skill increase event triggers", and that saving and reloading helps if it won't start [5]. The prerequisite mod's author says it "doesn't touch" the immersive-start option [3].
- **Immersive start is on by default.** Classical Lichdom's global `NecroUCLImmersiveStart` defaults to 1, and no LoreRim plugin overrides it [2]. With immersive start on, a note "left behind by a traveler" appears in Markarth's Silver-Blood Inn. Reading it begins Undeath [5]. The note is the book **"Torn Page from Traveler's Diary"**: a traveler on the road to Markarth saw a burned caravan and a glowing corpse in Vigilant of Stendarr robes [2]. Immersive start can be toggled in the mod's MCM [5].
- **DLC requirement:** Undeath requires Dawnguard and Dragonborn [4]. LoreRim includes both [16].
- **Vampires and werewolves:** you cannot be a Vampire Lord or Werewolf and a Lich at the same time. Becoming a Lich cures those conditions [4]. Classical Lichdom removes them each time you transform into Lich form [5].

## Quests
In-game names below are the winning overrides. UndeathFixes.esp renames "The Path of Transcendance" to **The Path of Transcendence** [1][2].

### In their Footsteps (`NecroQuest01`)
- **Giver / trigger:** the start described above. The journal begins: "I have heard a rumor that a Vigil of Stendarr caravan has been attacked on the road somewhere in the Reach" [1][2].
- **Where:** the Reach (the caravan ambush site), then Ravenscorn Spire [1].
- **Steps:** 1. Search for the Vigil of Stendarr caravan. 2. Investigate the scene of the attack. 3. Read the Ambush Orders. 4. Travel to Ravenscorn Spire. 5. Search Ravenscorn Spire for more information. 6. Search the Tower basement [1].
- **Outcome:** Antioch's journal shows he wants to become a Lich, has left for the Dragontail Mountains, and has sent followers across Skyrim to collect artifacts. This opens the next three quests [1].

### Exhuming Power (`NecroQuest02`)
- **Where:** Winterhold, at the grave of former Archmage Vyngald of the College of Winterhold [1].
- **Steps:** 1. Locate the grave of Archmage Vyngald. 2. Defeat the Necromancers. 3. Then either re-cover Archmage Vyngald's grave, **or** take the Shroud of Vyngald from the grave and defeat Archmage Vyngald's vengeful apparition [1].
- **Choices & outcomes:** re-covering the grave lets him rest. Taking the **Shroud of Vyngald** makes his spirit attack you [1]. The Ritual Notes say you need the Shroud with you during the Lich ritual, so leaving it closes off lichdom [1].

### Arkay the Enemy (`NecroQuest03`)
- **Where:** a Temple of Arkay in Falkreath Hold (cell "Temple of Arkay") [1][2].
- **Steps:** 1. Locate the Temple of Arkay. 2. Clear out the Necromancers from the Temple of Arkay. 3. Either free the captive Priest of Arkay, **or** slaughter him and take the Priest of Arkay's Heart [1].
- **Choices & outcomes:** Classical Lichdom fixed a bug where this quest would not complete if you freed the priest. Its author notes that freeing him is "the quest choice that locks the player out of the lich path" [5]. In Scourg Barrow there is a brazier inscribed: "When the hated enemy's faithful lie desecrated at this altar, the Revenant will cast His revered light upon the disciple's path" [1].

### Infernal Alchemy (`NecroQuest04`)
- **Where:** a ritual site "on a plateau overlooking the Reach" [1].
- **Steps:** 1. Locate the Ritual Site. 2. Defeat the Necromancers. 3. Either destroy the Cauldron, **or** complete the Concoction [1].
- **Choices & outcomes:** you can destroy the cauldron, or brew one of two elixirs: **Namira's Corrosion** or **Embalming Essence**. A failed brew ruins the cauldron [1]. Either elixir is an ingredient of the Elixir of Defilation, which the ritual needs [2]. Classical Lichdom puts a Deathbell in the alchemist's chest because Namira's Corrosion needs one [5].

### Scourg Barrow (`NecroQuest05`)
- **Trigger:** after you have defeated Antioch's followers across Skyrim [1].
- **Steps:** 1. Search the Necromancer's body. 2. Read the Orders. 3. Travel to the Dragontail Mountains. 4. Locate and enter Scourg Barrow. 5. Defeat Antioch [1].
- **Outcome:** with Antioch dead, the threat is over. The journal hints that "the secrets that he was searching for in these catacombs may still lie within" [1]. Classical Lichdom makes the **Staff of the Worm Lord** obtainable by defeating the lich in Scourg Barrow [5]. That NPC is named "Ancient Lich" [9].

### Black Book: Whispers of the Veil (`NecroBlackBookQuest01`)
- **Mod default:** reading the Black Book deep in Scourg Barrow takes you to an Undeath-specific part of Apocrypha. Learning its knowledge gives you the Lich ritual. Objective: "Learn the Black Book's hidden knowledge" [1].
- **In LoreRim (LoreRim-authored change):** *[LoreRim] Undeath Apocrypha Skip* disables the original Black Book in the Scourg Barrow cell, along with linked references and the Apocrypha location trigger. In its place, it puts the end-of-dungeon book "Black Book: Whispers of the Veil" in Scourg Barrow [7]. The replacement script, on activation, sets the quest to stages 10 and 20 one after the other and gives you **Ritual Notes**. You get the ritual knowledge **without going through the Apocrypha dungeon** [7]. (This is inferred from the plugin and script source, not from a LoreRim write-up. Confidence: medium-high.)

### The Path of Transcendence (`NecroLichRitualQuest`)
- **Steps:** 1. Construct the Phylactery. 2. Create the Elixir of Defilation. 3. Establish a Ritual Site. 4. Go to the Ritual Site. 5. Complete the Ritual of Transcendence [1].
- **Mod FAQ hint:** once it starts, fast travel back to any city and watch for a message. The Broker then contacts you [4].
- **Recipes** (all at a crafting station with the `WICraftingNecromancy` keyword; Classical Lichdom versions) [2]:
  - *Phylactery* = Crushed Black Pearl + Solution of Magicka Concentrate + Ensorcelled Vessel.
  - *Ensorcelled Vessel* = Flawless Amethyst + 3 Vampire Dust + Black Soul Gem + Purified Void Salts. *Purified Void Salts* = 5 Void Salts + filled Black Soul Gem + Crushed Black Pearl. *Crushed Black Pearl* = Black Pearl. *Solution of Magicka Concentrate* = 3 Nirnroot + 5 Moon Sugar + a Fortify Magicka potion.
  - *Elixir of Defilation* = a Damage Health poison + Nightshade Extract (8 Nightshade) + Poison Bloom + Finely Ground Bone Meal (10 Bone Meal) + Namira's Corrosion **or** Embalming Essence [2]. (Editor IDs: `DamageHealth05`, `DLC01PoisonBloom`.)
- **Ritual (from the in-game Ritual Notes):** draw the Circle of Apotheosis, set the Phylactery in place, have the Shroud of Vyngald with you, cast Unbind Soul inside the circle, then drink the Elixir of Defilation. If you get anything wrong, you die [1][2].
- **Health:** the mod FAQ says to have more than 100 Health [4]. LoreRim's *Undeath - Phylactery Limits* enforces this. Unbind Soul is conditioned on Health > 100 and otherwise shows "It's too dangerous to unbind your soul at your current health level (less than 100)" [10].
- **Outcome:** stage 100: "I have completed the Ritual of Transcendence and become a powerful undead Lich…", with an Illusion disguise for your mortal look [1]. Completing the ritual also unlocks Soul Cairn access (Classical Lichdom) [5].

## Locations
- **Ravenscorn Spire** — the necromancers' tower, reached during In their Footsteps. It can later be claimed as a lair, and the Broker sells a "Ravenscorn Spire - Laboratory" upgrade [1][2][4].
- **Solitude Sewers** — a new dungeon under Solitude and the second claimable lair, with a "Solitude Sewers - Ritual Chamber" upgrade [2][4]. Access holes are in the basements of The Winking Skeever, the Bards College and Castle Dour, with outside entrances southeast and northeast of the city [4]. LoreRim enables JK's patches for those three interiors [13].
- **Temple of Arkay** (Falkreath Hold), the ritual-site plateau (the Reach) and **Vyngald's grave** (Winterhold) — the sites of the side objectives [1][2].
- **Dragontail Mountains** — a separate worldspace [1]. Classical Lichdom lets you travel there and back by reading the book **"Barrows of the Mountains"** ("Travel to Dragontail Mountains?" / "Travel back to Skyrim?"). In the base mod it was reachable only by fast travel [2][5]. See `areas/undeath-dragontail-mountains.md`.
- **Scourg Barrow** — the crypt network of the King of Worms, Antioch's final location [1][4].
- **Apocrypha** — Undeath's custom Black Book dungeon (`NecroBook01DungeonLocation`) [1]. In LoreRim it appears to be bypassed (see Black Book above) [7].
- **The Broker's Shack** — home of "the Broker", a voiced vendor who sells poisons, black soul gems, flesh and hearts [1][4]. Classical Lichdom makes her always stock the Black Pearls the ritual needs [5]. Where the shack is in the world is not confirmed by any source read.

## Rewards & notable items
- **Lich form** (Classical Lichdom): when you die as a Lich, you resurrect at your phylactery. You can open the full spell menu with Sneak and use the favorites menu. Feed filled black soul gems to the phylactery (up to 50) to unlock abilities such as Bane of Life, Mind Flay, Enslave Mind, Enslave Undead, Mass Reanimate, Summon Diilonthur (dracolich) and Devour Soul. At 25 souls you can customize your Lich's appearance [5]. Drawbacks: 100% fire weakness, no natural health regeneration, and food or healing potions don't work [5].
- **Requiem rebalance:** *Requiem - Undeath* removes Undeath's spells (the author recommends Expanded Grimoire instead), raises artifact values, rebalances all NPCs and gives Lich Form +150 health [9].
- **Phylactery limits (LoreRim install):** besides the health check above, its tracking script kills you outright, with no resurrection, if you die as a Lich in an Oblivion plane or Dreamstride ("You can't reach your phylactery from this location") [10].
- **Flight:** *Undeath Lich Can Fly* lets Lich form fly by spamming jump, with no fall damage [11].
- **Artifacts:** Staff of the Worm Lord, the Shroud of Vyngald (dyeable black or green, plus white in Classical Lichdom) and Antioch's Robes [2][4][5].
- **Necromantic Altars / Shade of the Revenant:** blacken soul gems and receive the Dark Pact blessing [4][5]. **LoreRim sets the altar requirement to 80 Enchanting and 80 Conjuration.** Classical Lichdom's default is 50/75, and the original mod required maximum Enchanting [8][5][4].

## LoreRim notes
- Start gate replaced: Blood on the Ice and The Wolf Queen Awakened instead of level 30 [3].
- The Apocrypha portion of the Black Book is skipped by LoreRim's own mod [7]. *Apocryphal Library and Undeath Remastered Integration* is still enabled. It adds a readable "Whispers of the Veil" book inside Undeath's Apocrypha dungeon and swaps book piles there via `LB_ApocryphaUndeath_SWAP.ini` [12][13]. If the dungeon is bypassed, players may never see that book (inference).
- Classical Lichdom edits the Dragonborn quests **Lost Knowledge** (`DLC2TTR1`) and **Black Book** (`DLC2WE06`) so they can't send you to Undeath's Black Book location [2][5]. Undeath.esp also overrides `DLC2BookDungeonController` [1].
- The *LoreRim - Undeath Patches* plugin, built in LoreRim's xEdit output, also patches Unbind Soul, Lich spells (Lich Fire Storm, Incinerate, Woe of Lichdom), Undeath spell tomes, black-pearl leveled lists, the Dragontail Mountains worldspace and Brittleshin Pass for compatibility with Requiem, Meridia, Stendarr Rising, Lux and Lux Orbis [8].
- Cosmetic-only components with no quest content: the *Cleaned and Enhanced Textures* (upscaled Lich textures) [15], and the two *Draugrs - SE by Xtudo* Undeath entries, which ship only meshes under `meshes/actors/dragonpriest` and no plugin [15].
- All of these mods sit under the "Quests - Undeath Lichdom" separator and are enabled in the Default profile [13].

## Related
- `areas/undeath-dragontail-mountains.md`
- `areas/the-reach-and-markarth.md`, `areas/haafingar-and-solitude.md`, `areas/falkreath-hold.md`, `areas/winterhold.md`
- `vanilla-changes/side-quests-and-misc.md` (Blood on the Ice, The Wolf Queen Awakened)
- `vanilla-changes/dragonborn.md` (Lost Knowledge, Black Book)
- `mod-added/requiem-quests.md`, `mod-added/lorerim-specific-quests.md`

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal stages, locations, messages | LoreRim install: `Undeath.esp` QUST/CELL/LCTN/MESG records (Undeath Remastered - CLEANED ESMIFIED, profile Default) | mod v1.7.0.0 | 2026-10-02 |
| 2 | winning quest names, start node, immersive-start global, start note, recipes, travel messages | LoreRim install: `UndeathFixes.esp` records (Undeath - Classical Lichdom - ESMIFIED) | mod v3.60.0.0 | 2026-10-02 |
| 3 | LoreRim start gate (Blood on the Ice + Wolf Queen Awakened, no level) | LoreRim install: `UndeathQuestPrerequisiteNoLevel.esp` SMQN `NecroQuestStart` conditions + [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/121948) via meta.ini cache | 2026-01-29 (nexusLastModified) | 2026-02-05 cache |
| 4 | base mod features, FAQ (level 30, sewers, Broker, health >100) | [Undeath Remastered Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/6180) via meta.ini cache | 2016-12-18 (nexusLastModified) | 2026-01-11 cache |
| 5 | Classical Lichdom features, immersive start, fixes, Lich progression | [Classical Lichdom Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/40802) via meta.ini cache | 2022-11-25 (nexusLastModified) | 2026-01-11 cache |
| 6 | listed as a LoreRim new quest | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 7 | Apocrypha skip | LoreRim install: `[LoreRim] Undeath Apocrypha Skip` (`Undeath Apocrypha Skip.esp` refs + `necroblackbookscript.psc`) | d2025.5.24 | 2026-10-02 |
| 8 | altar requirement 80/80, compatibility patches | LoreRim install: `LoreRim - Undeath Patches.esp` (LoreRim - xEdit64 Output) GLOB/record list | n/a | 2026-10-02 |
| 9 | Requiem rebalance, NPC names | [Requiem - Undeath Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/69009) via meta.ini cache + `Requiem - Undeath.esp` records | 2023-02-08 (nexusLastModified) | 2026-01-11 cache |
| 10 | health check, no resurrection in Oblivion | LoreRim install: `Undeath - Phylactery Limits.esp` + `necrotrackingquestscript.psc` source | 2025-12-21 (nexusLastModified) | 2026-10-02 |
| 11 | Lich flight | [Undeath Lich Can Fly Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/136151) via meta.ini cache | 2024-12-16 (nexusLastModified) | 2026-01-11 cache |
| 12 | readable Whispers of the Veil, Apocrypha-only access | [Apocryphal Library – Undeath Integration Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/128168) via meta.ini cache | 2024-12-06 (nexusLastModified) | 2026-01-11 cache |
| 13 | enabled mods/plugins, JK's/Lux patches | LoreRim install: `profiles/Default/modlist.txt`, `plugins.txt` | n/a | 2026-10-02 |
| 14 | prerequisite quest identities (`MS11` Blood on the Ice, `MS06` The Wolf Queen Awakened) | official-quests.json (Skyrim.esm catalog import) | n/a | 2026-10-02 |
| 15 | texture/mesh-only components | LoreRim install: mod folders + meta.ini (modid 55803, 123225) | 2022-10-22 / 2026-01-22 (nexusLastModified) | 2026-10-02 |
| 16 | Dawnguard and Dragonborn present | LoreRim install: `Stock Game/Data/Dawnguard.esm`, `Dragonborn.esm` | n/a | 2026-10-02 |
