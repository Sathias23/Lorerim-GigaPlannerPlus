---
id: more-to-do-in-the-soul-cairn
title: More to do in the Soul Cairn
kind: mod-added
category: new-quests
summary: Three voiced side quests for lost souls in the Dawnguard Soul Cairn. Find Glendora's hidden "Chapel of Love", relive Angarion the Bold's memories ("Grief"), and recover Gavo's black soul gem. Each ends with judgement by an Ideal Master.
mods:
  - name: More to do in the Soul Cairn
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/115962
    version: 1.1.1.0
plugins: [MoreToDoSoulCairn.esp]
quests: [Chapel of Love, Grief, Black Soul Cairn Gem]
locations: [Soul Cairn, Chapel of Love, Denial, Anger, Bargaining, Depression]
region: Soul Cairn (Dawnguard realm)
start: Inside the Soul Cairn, talk to the three new souls, Glendora Messenia, Angarion the Bold and Gavo Antonius. Each starts their own quest. You need Soul Cairn access from the Dawnguard questline.
related: [mod-added/belethors-sister.md, vanilla-changes/dawnguard.md]
sources: [1, 2, 3]
confidence: high
updated: 2026-10-02
---

# More to do in the Soul Cairn

More to do in the Soul Cairn adds three fully voiced quests for souls trapped in the Soul Cairn: **Glendora Messenia**, **Gavo Antonius** and **Angarion the Bold** [1][2]. It includes a revoiced version of the author's earlier mod *Grief*, so don't install both [1].

## Starting in LoreRim
- The three NPCs are in the Soul Cairn. Talk to them to start the quests. The mod page has a map showing where they are [1]. All three quests are flagged start-game-enabled [2].
- **Prerequisite:** you need to be able to enter the Soul Cairn. In Dawnguard that happens during *Chasing Echoes* ("Enter the Soul Cairn"), and other LoreRim mods use the same gate [3].
- LoreRim's site doesn't list this mod on its quest pages, so no LoreRim-specific gate is documented (looked for, not found).

## Quests
### Chapel of Love
- **Giver:** Glendora Messenia [1][2].
- **Steps:** "Find the Chapel of Love in the Soul Cairn" (the journal hints "somewhere north west… close to the borders of the realm") → "Talk to Glendora" → "Figure out how the portal works" → "Tell Glendora that the portal does not work" → "Talk to the Ideal Master" [2].
- **Hint:** the author says to roam the northern and western "limits" of the map [1].
- **Outcome:** Glendora tries to teleport out shouting "Shade Perilous", vanishes, and is "punished by an Ideal Master for trying to escape" [2].

### Grief
- **Giver:** Angarion the Bold, who has no memory of how he got there [2].
- **Steps:** follow him into four Memory Shards in turn. After each one, "Talk to Angarion". Then "Talk to Angarion again" [2]. The memory cells are named **Denial, Anger, Bargaining, Depression** [2].
- **Story:** he was badly hurt in an arena fight and, knowing he was dying, asked a mage to put his soul in a soul gem for his family [2].

### Black Soul Cairn Gem
- **Giver:** Gavo Antonius [2].
- **Steps:** "Find Gavo's black soul gem" → "Bring the soul gem back to Gavo" → "Defeat Gavo" (he attacks and tries to "steal my body") → "Talk to the Ideal Master" [2].
- **Outcome:** an Ideal Master deals with him [2].

## Locations
- **Chapel of Love**: a new interior reached from the edges of the Soul Cairn's north-west [1][2].
- **Angarion's memories**: interior cells Denial, Anger, Bargaining, Depression [2].

## Rewards & notable items
- **Angarion's Mace** ("A reflection of Angarion the Bold's old mace that helped him become the champion of the arena.") [2].
- **Gavo's Shiv** ("This shiv belonged to an ill-intentioned man who was stuck in the Soul Cairn.") [2].
- Which quest step awards each item was not determined (unverified).

## LoreRim notes
- LoreRim installs the **ESPFE** build (`More to do in the Soul Cairn - ESPFE Version`, v1.1.1) [2].
- LoreRim also runs other Soul Cairn mods (Praedy's Soul Cairn visuals, NOTWL – Soul Cairn, Revenant Spirits of the Soul Cairn). No known conflict with this mod is documented (none found) [2].

## Related
- [mod-added/belethors-sister.md](belethors-sister.md): its rescue also goes through the Soul Cairn
- [vanilla-changes/dawnguard.md](../vanilla-changes/dawnguard.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | concept, NPCs, start, Chapel hint, Grief merge | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/115962) via meta.ini cache | 2025-12-20 (nexusLastModified) | 2026-01-12 cache |
| 2 | quest names, objectives, journal, cells, items, installed file | LoreRim install: `MoreToDoSoulCairn.esp` records; meta.ini; profile Default plugins.txt | mod v1.1.1.0 | 2026-10-02 |
| 3 | Soul Cairn access via Chasing Echoes | imports/official-quests.json (`DLC1VQ04` "Chasing Echoes") | n/a | 2026-10-02 |
