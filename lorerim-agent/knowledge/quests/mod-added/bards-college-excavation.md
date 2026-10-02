---
id: bards-college-excavation
title: Clear Dead Men's Respite (Bards College Excavation)
kind: mod-added
category: quest-expansion
summary: After Tending the Flames, the Bards College sets up an excavation camp at Dead Men's Respite with two voiced bards, Rothen and Birinna. Each time the tomb respawns they offer a repeatable misc quest, "Clear Dead Men's Respite", for 300 gold.
mods:
  - name: Bards College Excavation
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/36950
    version: 1.0.0.0
plugins: [BardExcavation.esp]
quests: [Clear Dead Men's Respite]
locations: [Dead Men's Respite]
region: Hjaalmarch (near Morthal)
start: Complete Tending the Flames and become a bard. Then travel to Dead Men's Respite to find the camp. When the dungeon respawns (30 days after clearing), ask Rothen or Birinna "You look worried, is something wrong?" to get the repeatable clear quest.
related: [vanilla-changes/side-quests-and-misc.md, areas/hjaalmarch-and-morthal.md, areas/haafingar-and-solitude.md]
sources: [1, 2, 3, 4]
confidence: high
updated: 2026-10-02
---

# Clear Dead Men's Respite (Bards College Excavation)

Once you finish the Bards College quest *Tending the Flames*, the College puts your work to use. It sets up a full excavation site at **Dead Men's Respite** with two new voiced bard NPCs, **Rothen** and **Birinna**, and offers a repeatable misc quest to clear the tomb again [1][2]. The LoreRim site says: "After clearing Dead Men's Respite a excavation team will appear with a repeatable quest to clear it out." [3].

## Starting in LoreRim
- **Camp:** it appears the next time you travel to Dead Men's Respite after completing *Tending the Flames* and becoming a bard [1].
- **Quest:** once the dungeon respawns (30 days after clearing), talk to Rothen or Birinna and pick the new dialogue option [1]. In the plugin this is "You look worried, is something wrong?" → "Maybe you can help me. We've got our hands full dealing with draugr from Olaf's Tomb." [2].
- You can say no ("Sorry, I've been through that tomb once…"). No objective is added until you accept [1][2].
- LoreRim adds no gate [3][4].

## Quests
### Clear Dead Men's Respite (`DMRClearQ`)
- **Giver / trigger:** Rothen or Birinna at the excavation camp [1][2].
- **Steps** (objectives from the plugin) [2]:
  1. Clear Dead Men's Respite. That means killing the dungeon boss [1].
  2. Inform the bards that the tomb is clear ("Dead Men's Respite is once again cleared of draugr." / "Olaf's Tomb should be safe for you now.").
- **Rewards:** **300 gold** each time [2].
- **Repeatable:** no limit, once each time the dungeon respawns [1].

## Locations
- **Dead Men's Respite**: the vanilla tomb of King Olaf One-Eye, near Morthal according to Rothen's journal. The mod adds an exterior camp, a large tent reserved for Giraud Gemane, and a spare tent the player can use [1][2].
- The bards' schedule: they work the dig on weekdays and practise instruments for 30 minutes each weekday. After you introduce yourself, they spend weekends in **Solitude** (main square, then Saturday night at the Bards College). If *Laid to Rest* is done, they eat dinner at the **Moorside Inn** in Morthal on weekdays [1].

## Rewards & notable items
- 300 gold per clear [2].
- **Rothen's Journal**, **Birinna's Journal** and **Excavation Findings**: lore notes at the camp [2].

## LoreRim notes
- **Not compatible with Open Cities**, because the bards sandbox in the vanilla Solitude worldspace. Also not compatible with mods that significantly change the exterior or first room of Dead Men's Respite [1]. LoreRim does not ship Open Cities. No Open Cities mod folder or plugin is in the install, so this incompatibility does not apply [4].
- The author made sure the camp does not overlap LotD's fragment dig site [1].
- The LoreRim site describes other Bards College additions (playable instruments, Tome Trials, Poetic Duel, Typography Training) that come from other mods [3].

## Related
- [../vanilla-changes/side-quests-and-misc.md](../vanilla-changes/side-quests-and-misc.md)
- [../areas/hjaalmarch-and-morthal.md](../areas/hjaalmarch-and-morthal.md), [../areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, start, schedule, compatibility | [Nexus mod page 36950](https://www.nexusmods.com/skyrimspecialedition/mods/36950) via meta.ini cache | n/a (cache refreshed 2026-01-11) | 2026-10-02 |
| 2 | quest name, objectives, dialogue, journals, 300-gold reward | LoreRim install: `BardExcavation.esp` strings + `Source/Scripts/TIF__05246FB1.psc`, `TIF__05246FBA.psc` | mod v1.0.0.0 | 2026-10-02 |
| 3 | LoreRim description; other Bards College features | [LoreRim site — Factions](https://www.lorerim.com/guides/quests/factions) | n/a | 2026-10-02 |
| 4 | plugin enabled | LoreRim install: `profiles/Default/plugins.txt` | n/a | 2026-10-02 |
