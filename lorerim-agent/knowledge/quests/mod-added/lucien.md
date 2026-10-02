---
id: lucien
title: Lucien Flavius (follower) — The Oblivion Engine & Intruders
kind: mod-added
category: follower-quests
summary: Lucien Flavius is a fully voiced Imperial scholar follower found in Dead Man's Drink, Falkreath. His two personal quests, "The Oblivion Engine" and "Intruders", take place in Dumzbthar, a new Dwemer ruin on Solstheim. They unlock his horse Clive and his riding system.
mods:
  - name: Lucien - Immersive Fully Voiced Male Follower
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/20035
    version: 1.6.3.0
  - name: Lucien - Anniversary Edition - All-In-One Creation Club Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/20035
    version: 1.6.3.0a
  - name: Lucien - A Visual Replacer
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/130080
    version: 1.0.0.0
  - name: Requiem - Lucien - Immersive Fully Voiced Male Follower patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/64050
    version: 1.0.0.0
plugins: [Lucien.esp, Lucien-AnniversaryEdition-Patch.esp, Lucien - visual replacer.esp, Requiem - Lucien.esp, LoreRim - Lucien Patch.esp, COTN Falkreath - Lucien Patch.esp, Lux - Lucien.esp]
quests: [The Oblivion Engine, Intruders, Lucien Map Marker, Lucien Main Quest]
locations: [Dumzbthar, Khythozec's Failure]
region: Falkreath (recruitment); Solstheim (Dumzbthar)
start: Recruit Lucien in Dead Man's Drink, Falkreath. The Oblivion Engine starts by itself once his approval is high enough (ask him if there's anywhere he'd like to see). Intruders starts about five in-game days after you next recruit him. Needs the Dragonborn DLC (Solstheim); no LoreRim-specific gate found.
related: [mod-added/inigo.md, mod-added/follower-dialogue-expansions.md, mod-added/auri-song-of-the-green.md, areas/solstheim.md, areas/falkreath-hold.md]
sources: [1, 2, 3, 4, 5]
confidence: high
updated: 2026-10-02
---

# Lucien Flavius (follower) — The Oblivion Engine & Intruders

Lucien Flavius is "a fully voiced Imperial follower with over 5000 lines of immersive, lore-friendly dialogue" [1]. He is a scholar on an expedition who starts out a coward and learns from you until he "grows into a hero in his own right" [3]. He uses his own follower system (he doesn't count toward your follower limit). He's essential while travelling with you, although you can choose to kill him. He has a stat-based Approval/Bravery personality system and a training system [3]. His story content is **two personal quests** set in a unique Dwemer ruin built by the Darkend level designer JKrojmal: **The Oblivion Engine** and **Intruders** [2][3].

## Starting in LoreRim
- **Where:** "He can be found at Dead man's drink in Falkreath" [1][3]. LoreRim ships a *COTN Falkreath - Lucien Patch* for the overhauled town [4].
- **The Oblivion Engine:** "It'll happen naturally once Lucien likes you enough. Ask him if there's anywhere in particular he'd like to see and then some time later, when he's ready, it'll be sprung upon you." [3] In-game, he receives a letter from his father with a key to a Dwemer ruin on Solstheim (*Letter to Lucien*, *Dumzbthar Key*) [2].
- **Intruders:** "the second one should start on its own around five in-game days after you next recruit Lucien" (after he stays behind at Dumzbthar) [3].
- **Prerequisite:** Dumzbthar is on Solstheim, so you need Dragonborn DLC access to the island [2]. One player blog says the invitation came after progressing the Dragonborn main quest. The author's FAQ doesn't say that, so treat it as unverified (low) [5].
- **LoreRim gates:** I found no LoreRim delayed start or level gate [1][4]. Lucien's MCM is left enabled in LoreRim's MCM menu configuration [4].

## Quests
### The Oblivion Engine
- **Trigger:** approval-based invitation (see above) [3].
- **Where:** Dumzbthar, Solstheim [2].
- **Steps** (plugin objectives) [2]:
  1. Take Lucien to Dumzbthar.
  2. Activate the first switch, then the second. You pass through vault doors that Lucien "assures me will open again for us on the way out".
  3. Explore Dumzbthar. A mysterious voice turns out to be the ruin's governing intelligence, and it seals you in.
  4. Turn the Valves (counter objective).
  5. Reach Dumzbthar's Core. The intelligence is Daedric. Distract it while Lucien shuts it down.
  6. Destroy Dumzbthar, then talk to Lucien.
- **Outcome:** "He stayed behind to set up a laboratory there, but will be happy to travel with me again whenever I need him." [2]
- **Loot (player report):** large amounts of dwarven metal ingots, chests in the sleeping quarters, a blank lexicon and soul gem shards (low–medium) [5]. *Dumzbthar Lexicon* is a real item record in the plugin [2].

### Intruders
- **Trigger:** about five days after you next recruit Lucien, his **resonant sphere** (*Lucien's Resonant Sphere*) makes a warning noise: Dumzbthar is under attack [2][3].
- **Steps** [2]:
  1. Return to Dumzbthar.
  2. Talk to Dumzbthar, whom Lucien has reactivated.
  3. Defeat the Daedra; talk to Dumzbthar again.
  4. Defeat the Daedra that came through the **Oblivion Gate** before they escape to the surface.
  5. Talk to Lucien about the strange horse.
- **Outcome / reward:** the horse **Clive** "is now going to travel with us, and will appear whenever Lucien needs it". This unlocks Lucien's horse-riding system [2][3].

### Lucien Map Marker
- A misc tracker with the objective "Find Lucien Flavius" [2].

### Lucien Main Quest (commentary tracker)
- A hidden misc quest that records his reactions to the vanilla main quest (Helgen, Bleak Falls Barrow, High Hrothgar, Sky Haven Temple, the Time-Wound, the Peace Council, Alduin). Its one visible objective is the side request **"Bring Lucien a Dragon Bone"**, which you can refuse [2].

## Locations
- **Dead Man's Drink** — vanilla inn in Falkreath where you recruit him [1][3].
- **Dumzbthar** (`JRDumzbtharLocation`) — a new, large Dwemer ruin on Solstheim governed by a Daedric intelligence. Lucien sets it up as his laboratory [2]. The plugin edits the Solstheim exterior cell `DLC2POIWestRJ01` [4]. A player report places it "very near the Stalhrim Source and White Ridge Barrow", reached by a lift (medium) [5]. The author warns that Dwemer texture/mesh mods can crash the game in Dumzbthar [3].
- **Khythozec's Failure** (`aaaLucOblivionRealm`, a worldspace) — an Oblivion-realm space behind the Oblivion Gate in Intruders (inferred from the gate door records, medium) [2][4].

## Rewards & notable items
- **Clive**, Lucien's horse (Intruders), and his riding system [2][3].
- Lucien learns from you. Skill lessons are available once per in-game day, and you can teach him spells from a select pool if you give him the tome. He starts with Frostbite, Flames and Healing [3].
- He can read certain books aloud and comments on many vanilla and Creation Club quests [3].

## LoreRim notes
- **Requiem - Lucien patch** (Plotinuz): gives Lucien low-to-mid perks in Evasion, Marksmanship and One-Handed (Sword), novice-to-expert perks in all spell schools, and a tempered Imperial steel sword "from his imperial officer mother". It also adds a Requiem registration quest [4].
- **`LoreRim - Lucien Patch.esp`** (LoreRim - xEdit64 Output) re-balances Lucien and the Dumzbthar population for Requiem. It overrides Lucien Flavius, Dwarven Sentinels/Commanders/Overseer/Tunnelers/Annihilator/Hunter, the Imps and *Grievous Twilight*, the Oblivion Gate and Massive Gate doors, the Dumzbthar chests and the *Jailer's Battle Axe*. It does not touch the quest records [4].
- **Lucien - Anniversary Edition - All-In-One Creation Club Patch** adds Lucien's commentary/interaction for CC content (Umbra, Arcane Archer, Stendarr's Hammer, Shadowrend, Plague of the Dead, Ruin's Edge, Staff of Sheogorath, Camping, Saints & Seducers, Rare Curios, Saturalia, Tundra Homestead, Backpacks, Myrwatch, Goblins, Forgotten Seasons and others). The author warns that it isn't compatible with saves that used the individual CC patches [2][3].
- **Lucien - A Visual Replacer** changes his appearance only. Lux and Follower Dialogue Expansion patches (Aela, Brelyna) are also enabled [4].
- **Inigo** banter is fully co-written and co-voiced with Inigo's author [3].
- **Don't** control Lucien with follower-management mods (EFF/NFF/AFT) or home-assignment mods, as these "are likely to break his brain" [3].
- The Nexus page lists *Beyond Skyrim: Bruma* interactions, but no Bruma plugin is enabled in LoreRim's Default profile, so those don't apply [3][4].

## Related
- [Inigo](inigo.md) — co-voiced banter with Lucien
- [Follower Dialogue Expansions](follower-dialogue-expansions.md), [Auri — Song of the Green](auri-song-of-the-green.md)
- [Solstheim](../areas/solstheim.md), [Falkreath Hold](../areas/falkreath-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Lucien is a LoreRim follower; Dead Man's Drink | [LoreRim site — Followers](https://www.lorerim.com/guides/world/followers) | n/a | 2026-10-02 |
| 2 | quest names, objectives, journal text, LCTN/WRLD names, item names, CC-patch quest list | LoreRim install: `Lucien.esp` and `Lucien-AnniversaryEdition-Patch.esp` QUST/LCTN/WRLD/BOOK/KEYM/MISC records (mod v1.6.3.0, profile Default) | mod v1.6.3.0 | 2026-10-02 |
| 3 | recruitment, quest triggers (FAQ), features, compatibility | [Nexus mod page 20035](https://www.nexusmods.com/skyrimspecialedition/mods/20035) via meta.ini cache | 2023-01-05 (nexusLastModified) | 2026-01-11 cache |
| 4 | Requiem/LoreRim patch scope; shipped patches; MCM state; Dumzbthar exterior cell | LoreRim install: `Requiem - Lucien` Readme.txt, record inspection of `Requiem - Lucien.esp`, `LoreRim - Lucien Patch.esp`, `Lucien.esp` CELL records; `profiles/Default/plugins.txt`; `LoreRim - MCM and INI Settings/SKSE/Plugins/MCM-Unlocked_UserData.json` | n/a | 2026-10-02 |
| 5 | Dumzbthar surroundings and loot (player reports) | [annathepiper blog, "In Which Elessir Takes Lucien to Dumzbthar"](https://skyrim.annathepiper.org/2025/04/02/in-which-elessir-takes-lucien-to-dumzbthar/); [lifethekway blog, "Notes from Skyrim: Lucien and Dumzbthar"](https://lifethekway.wordpress.com/2024/06/19/notes-from-skyrim-lucien-and-dumzbthar/) | 2025-04-02 / 2024-06-19 | 2026-10-02 |
