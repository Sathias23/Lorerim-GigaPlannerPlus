---
id: penitus-oculatus
title: Penitus Oculatus
kind: mod-added
category: questline
summary: After "Destroy the Dark Brotherhood!", you can join the Penitus Oculatus through Commander Maro. You then run radiant missions against the Thalmor, rogue agents and Brotherhood remnants, followed by a short story chain that kills Babette and Cicero, clears the Dawnstar Sanctuary and ends with Amaund Motierre.
mods:
  - name: Penitus Oculatus
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/21061
    version: 0.18.4.0
  - name: Penitus Oculatus - Andrealphus Scene Tweaks Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/135150
    version: 1.0.0.0
plugins: [Penitus_Oculatus.esp, Penitus_Oculatus - Andrealphus Scene Tweaks Patch.esp]
quests: [Penitus Oculatus, Inquisition, Unfinished Business, Paperwork, House Cleaning, Troubleshoot, Bad Blood, Fool's Errand, A Nest of Vipers, Loose Ends]
locations: [Penitus Oculatus Outpost, Dawnstar Sanctuary, Dark Brotherhood Sanctuary (Falkreath)]
region: Haafingar (Dragon Bridge outpost) and Skyrim-wide radiant targets
start: Complete the vanilla "Destroy the Dark Brotherhood!" (in LoreRim this is expanded by Destroy The Dark Brotherhood - Quest Expansion), then talk to Commander Maro to join.
related: [vanilla-changes/dark-brotherhood.md, mod-added/additional-contracts-dark-brotherhood.md, mod-added/listen-dark-brotherhood-radiant.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9]
confidence: high
updated: 2026-10-02
---

# Penitus Oculatus

Penitus Oculatus adds a joinable Penitus Oculatus faction for characters who destroyed the Dark Brotherhood. Commander Maro gives you radiant assignments, and after a few of them a short questline wipes out the remaining Brotherhood [1][2]. The LoreRim site describes it as "a big change … which expands on the destroy the dark brotherhood path with its own storyline" [3].

## Starting in LoreRim
- **Prerequisite:** Complete **Destroy the Dark Brotherhood!**, then speak to **Commander Maro** to join [2]. In the plugin, Maro's join line ("Think you've got the mettle, eh?") requires `DBDestroy` at stage 200 or later [9].
- UESP places Maro at the **Penitus Oculatus Outpost**, with Dragon Bridge as his home town [4].
- In LoreRim the vanilla *Destroy the Dark Brotherhood!* is expanded by **Destroy The Dark Brotherhood - Quest Expansion**, which says it "remains compatible" with Penitus Oculatus without patches [5].
  - That mod also opens a way to be kidnapped by Astrid without killing Grelod. It applies when you had Grelod arrested through Innocence Lost - Quest Expansion and then kill another vanilla contract target. So the Penitus Oculatus path is reachable on non-evil playthroughs [5].
- Joining starts the quest **Penitus Oculatus**, with the objective "Speak to Commander Maro for assignments" [1].
- Joining gives you a set of Penitus Oculatus armor (cuirass, boots, gauntlets, helmet) and places you in the Penitus Oculatus faction [6].

## Quests
### Penitus Oculatus (zzzPO00)
- **Giver:** Commander Maro. "I've joined the Penitus Oculatus, The Empire's security and law enforcers, as well the Emperor's bodyguards." [1]
- **Mission order (shipped script):** the first three assignments are always **Inquisition**, **Unfinished Business**, then **Paperwork**. Next comes the story mission **Unfinished Business (informant)** until it is completed. After that, Maro hands out a random radiant from the five types [6].

### Radiant missions (from Commander Maro)
- **Inquisition:** "Eliminate the traitorous noble" working for the Aldmeri Dominion. This is a clandestine operation, so avoid entanglement with hold authorities [1].
- **Unfinished Business** (`zzzPORadiant01`): "Eliminate the Dark Brotherhood remnant" at a location [1].
- **Paperwork:** "Obtain the Thalmor documents" from a Thalmor agent, clandestinely [1].
- **House Cleaning:** "Eliminate the rogue Penitus Oculatus agents" [1].
- **Troubleshoot:** "Eliminate the Thalmor agent" interfering with Penitus Oculatus operations, clandestinely [1].
- All of them end with "Report to <Questgiver>" [1].

### Unfinished Business (informant, zzzPO01Informant)
- **Steps:** 1. Eliminate the Dark Brotherhood remnant. 2. Talk to the Dark Brotherhood informer at the Penitus Oculatus outpost. 3. Read the note. 4. Report [1].
- **Choices & outcomes:** The target may defect. If you escort them safely to the outpost, they give you a note with the locations of Cicero and Babette. If you kill them instead, you search their body for the same intel [1]. The mod page says an optional follower (a Dark Brotherhood Initiate) can be obtained [2]; that this is the defector is likely but unverified.

### Bad Blood
- **Steps:** Eliminate the escaped assassin (Babette, per the mod page), then report [1][2].

### Fool's Errand
- **Steps:** 1. Eliminate the target (Cicero, per the mod page). 2. Read his journal. 3. Report [1][2].
- **Outcome:** The journal reveals the Dawnstar Sanctuary passphrase [1].

### A Nest of Vipers
- **Steps:** 1. Investigate the Dawnstar Sanctuary (passphrase "innocence, my brother"). 2. Clear it out. 3. Read the journal. 4. Report [1].
- **Outcome:** "eliminated the Dark Brotherhood remnants … and foiled a plot to assassinate the emperor." [1]

### Loose Ends
- **Steps:** Eliminate the man plotting the Emperor's assassination (Amaund Motierre), who is hiding at a location. Then report [1].
- The mod page lists both **Amaund Motierre and Rexus** as targets [2].

## Locations
- **Penitus Oculatus Outpost:** Commander Maro's post, where the informer is escorted [1][4].
- **Dawnstar Sanctuary:** cleared in A Nest of Vipers [1].
- **Falkreath and Dawnstar Sanctuaries:** the mod page says both become accessible and are converted for Penitus Oculatus occupation [2].

## Rewards & notable items
- Several mission turn-in dialogues pay **1,000 gold** (the script gives Gold ×1000) [6].
- The mod page lists unique Dark Brotherhood questline items you can obtain [2]:
  - Jeweled Amulet, Olava's Token, Ancient Shrouded Armor, Cicero's Journal, Jarrin Root, Gourmet's Writ of Passage
  - Windshear, the wedding wreath, sandals and dress, Emperor's Robes, Cicero's Clothes
  - Gilded Wristguards, Muiri's Ring, Nightweaver's Band, Firiniel's End
- You can free the sanctuary torture victims for a reward [2].

## LoreRim notes
- LoreRim ships these patches for the mod [7]:
  - `Penitus_Oculatus - Andrealphus Scene Tweaks Patch.esp`, for Andrealphus Scene Tweaks [7][8]
  - `JKs Dark Brotherhood Sanctuary - Penitus Oculatus patch.esp`
  - `COTN Morthal - Penitus Oculatus Patch.esp`
  - Lux and Lux Orbis Penitus Oculatus patches
- Voices are AI-generated (ElevenLabs), according to the author [2].
- **Engine caveat from the author:** reloading earlier saves without restarting the game can break quests [2].
- Do not update the mod mid-quest (see the mod page's upgrade notes) [2].

## Related
- [../vanilla-changes/dark-brotherhood.md](../vanilla-changes/dark-brotherhood.md)
- [additional-contracts-dark-brotherhood.md](additional-contracts-dark-brotherhood.md)
- [listen-dark-brotherhood-radiant.md](listen-dark-brotherhood-radiant.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal text | LoreRim install: `Penitus_Oculatus.esp` QUST records (profile Default) | mod v0.18.4.0 | 2026-10-02 |
| 2 | prerequisite, mission types, story targets, items, upgrade/engine notes | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/21061) via meta.ini cache | 2023-11-25 (nexusLastModified) | 2026-01-11 cache |
| 3 | LoreRim framing | [LoreRim site — Factions](https://www.lorerim.com/guides/quests/factions) | n/a | 2026-10-02 |
| 4 | Commander Maro's location | [UESP — Skyrim:Commander Maro](https://en.uesp.net/wiki/Skyrim:Commander_Maro) | n/a | 2026-10-02 |
| 5 | DTDB QE compatibility and alternate kidnapping path | [Destroy The Dark Brotherhood - Quest Expansion Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/118229) via meta.ini cache | 2024-07-12 (nexusLastModified) | 2026-10-02 |
| 6 | mission order, join gear, 1,000-gold payouts | LoreRim install: `Penitus Oculatus/source/scripts/zzzPO00script.psc` and TIF fragments | mod v0.18.4.0 | 2026-10-02 |
| 7 | shipped patches | LoreRim install: `profiles/Default/plugins.txt` | n/a | 2026-10-02 |
| 8 | Andrealphus patch purpose | [Nexus mod page 135150](https://www.nexusmods.com/skyrimspecialedition/mods/135150) via meta.ini cache | 2024-11-29 (nexusLastModified) | 2026-01-11 cache |
| 9 | join-dialogue condition on Destroy the Dark Brotherhood! | LoreRim install: `Penitus_Oculatus.esp` INFO conditions (parsed; `DBDestroy` 000934FB resolved via official-quests.json) | mod v0.18.4.0 | 2026-10-02 |
