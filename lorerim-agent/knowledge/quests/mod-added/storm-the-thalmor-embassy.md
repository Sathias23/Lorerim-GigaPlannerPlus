---
id: storm-the-thalmor-embassy
title: Storm the Thalmor Embassy
kind: mod-added
category: quest-expansion
summary: Adds no new quest. It edits the main quest "Diplomatic Immunity" so you can skip Delphine's party plan and break into the Thalmor Embassy by force. You pick the Embassy gate lock and fight your way in to find the Esbern intel. Elenwen is disabled so the main quest stays intact.
mods:
  - name: Storm the Thalmor Embassy
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/104936
    version: 1.0.2.0
plugins: [Storm the Thalmor Embassy.esp]
quests: [Diplomatic Immunity]
locations: [Thalmor Embassy, Riverwood, Solitude]
region: Haafingar (Thalmor Embassy, in the mountains near Solitude)
start: Reach "Diplomatic Immunity" in the main quest (after A Blade in the Dark). The first objective becomes "Meet Delphine in Riverwood or storm the Thalmor Embassy". Pick the Embassy front gate lock to take the storming route.
related: [vanilla-changes/main-quest-and-alternate-start.md, mod-added/destroy-the-dragon-cult.md, mod-added/additional-contracts-dark-brotherhood.md, areas/haafingar-and-solitude.md]
sources: [1, 2, 3, 4]
confidence: high
updated: 2026-10-02
---

# Storm the Thalmor Embassy

This mod has **no new quest**. It edits the vanilla main quest **Diplomatic Immunity** (`MQ201`) to add a direct-assault option [1][2]. The LoreRim site: "you can now Storm the Thalmor Embassy which allows you to skip the 'party' and go straight to the Thalmor Embassy during 'Diplomatic Immunity'" [3].

## Starting in LoreRim
- This applies once Diplomatic Immunity begins, at the transition from **A Blade in the Dark** [4].
- At that point the script does several things [4]:
  - Shows the new first objective, **"Meet Delphine in Riverwood or storm the Thalmor Embassy"** [1].
  - Closes the Embassy front gate and gives it a level-75 lock (Expert in vanilla lock terms).
  - Adds the Thalmor Embassy to your map.
- **To storm it:** unlock the Embassy front gate [4]. As soon as the gate is unlocked [4]:
  - The quest jumps to stage 170, and "Search for information about the dragons returning" becomes active.
  - Elenwen is disabled.
  - Malborn and Razelan lose essential status.
  - The Thalmor guard factions turn hostile.
  - The party and kitchen doors unlock.
- **Requires a new game** according to the author. LoreRim ships it from the start [2].
- The vanilla party route still works [2].

## Quests
### Diplomatic Immunity (MQ201), as changed
- **Objectives in the shipped plugin** [1]:
  - 5: Meet Delphine in Riverwood or storm the Thalmor Embassy *(new)*
  - 10: Meet Malborn in Solitude
  - 20: Give Malborn the equipment
  - 30: Meet Delphine at the Solitude stables
  - 40: Talk to Malborn
  - 50: Create a distraction and get away from the party
  - 55: (Optional) Retrieve your gear
  - 60: Search for information about the dragons returning
  - 70: Search the torture chamber
  - 80: Escape the Thalmor Embassy
  - 90: Talk to Delphine or search for Esbern *(reworded so you can go straight to Riften)*
- **Storming route:** pick the gate, then fight through the hostile Thalmor. Search Elenwen's office and the torture chamber for what the Thalmor know about Esbern, and escape [1][4].
- **After escaping:** you may skip Delphine in Riverwood and go straight to Riften, as in vanilla [2].
- The plugin also adds an item named **"Thalmor Embassy Key"** [1]. Where it is placed was not determined.

## Non-Dragonborn characters
- If you never start the main quest, the gate script also works **before Diplomatic Immunity** [2][4]. You can then enter the Embassy and kill everything inside, **including Elenwen**: the script makes her non-essential and aggressive [4].
- The author warns that this **breaks the main quest** [2]. In LoreRim, characters who never trigger the main quest (an alternate start where Helgen isn't destroyed) are the intended audience [2][3].

## LoreRim notes
- The author says it is Requiem compatible and asks to be loaded after "Better Quest Objectives", "Skyrim Souls" and "Requiem - general_NPC_tweaks" [2].
- Elenwen is disabled on the storming route "since she is needed later in Main Quest" [2]. ACDB's later **Contract: Kill Elenwen** (after Dragonslayer) may interact with this, but that was not verified in play. See [additional-contracts-dark-brotherhood.md](additional-contracts-dark-brotherhood.md).
- How hard a level-75 lock is under LoreRim's Requiem lockpicking rework was not checked.

## Related
- [../vanilla-changes/main-quest-and-alternate-start.md](../vanilla-changes/main-quest-and-alternate-start.md)
- [destroy-the-dragon-cult.md](destroy-the-dragon-cult.md)
- [additional-contracts-dark-brotherhood.md](additional-contracts-dark-brotherhood.md)
- [../areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | MQ201 objective text, new key item, MQ201 override | LoreRim install: `Storm the Thalmor Embassy.esp` (QUST MQ201 objective/FULL strings) | mod v1.0.2.0 | 2026-10-02 |
| 2 | notes: new game, load order, Elenwen disabled, non-Dragonborn use, Riften skip | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/104936) via meta.ini cache | 2026-04-26 (nexusLastModified) | 2026-06-02 cache |
| 3 | LoreRim framing, alternate start | [LoreRim site — Main Quests](https://www.lorerim.com/guides/quests/main) | n/a | 2026-10-02 |
| 4 | gate lock, stage 170 jump, hostility, Elenwen handling | LoreRim install: script sources `QF_MQ201_00035D5F.psc`, `STE_MQ201ThalmorEmbassyGate.psc`, `STE_enableOutsideGuards.psc` | mod v1.0.2.0 | 2026-10-02 |
