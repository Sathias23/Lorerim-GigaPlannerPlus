---
id: after-the-civil-war
title: Repairing the Cities (After the Civil War - Siege Damage Repairs)
kind: mod-added
category: quest-expansion
summary: Once the Civil War ends, a short quest, "Repairing the Cities", rebuilds the cities damaged in the sieges. You can donate gold at the Temple of the Divines in Solitude to speed it up, or steal the donations.
mods:
  - name: After the Civil War - Siege Damage Repairs
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/20668
    version: 2.6.5.0
plugins: [CWRepairs.esp, CWR_JKTemple_Patch.esp]
quests: [Repairing the Cities]
locations: [Temple of the Divines, Solitude, Windhelm, Whiterun]
region: Haafingar (Solitude), Eastmarch (Windhelm), Whiterun Hold
start: Automatic. Two or three days after the Civil War ends (Ulfric or Tullius dead), once you have left Solitude or Windhelm after the final battle.
related: [vanilla-changes/civil-war.md, mod-added/vittorias-alternate-wedding.md, areas/haafingar-and-solitude.md, areas/eastmarch-and-windhelm.md, areas/whiterun-hold.md]
sources: [1, 2, 3]
confidence: high
updated: 2026-10-02
---

# Repairing the Cities (After the Civil War - Siege Damage Repairs)

After the Civil War, this mod repairs the siege damage to **Solitude/Windhelm and Whiterun** and restores them to their pre-siege state. A small quest, **Repairing the Cities**, runs a fundraising drive at the Temple of the Divines in Solitude [1][2].

## Starting in LoreRim
- The quest starts after the final siege, once **Ulfric or Tullius is dead** and the war is over. That is the only thing the mod checks, and it does not otherwise touch the Civil War [1].
- It is meant to start **two or three days after the war ends**, but only once you have **gone away from Solitude or Windhelm** after the battle [1].
- The mod can be installed before, during or after the war [1]. LoreRim adds no extra gate [3].

## Quests
### Repairing the Cities (`CWRepairs`)
- **Giver / trigger:** automatic notification [1][2].
- **Where:** Temple of the Divines, Solitude (donation box) [1][2].
- **Steps** (objectives and journal from the plugin) [2]:
  1. "During the next two days, the Temple of the Divines in Solitude will be collecting donations to accelerate the reconstruction."
  2. "Works are underway, now it's just a matter of waiting."
  3. The quest completes when you enter any interior cell after the timer has run out. Journal: "After many days of intensive work, the damage to the cities has been repaired." [1][2].
- **Choices & outcomes** (repair time by donation) [1]:
  - No donation: about 20/21 days. If you do not contribute within the two days, the box is removed.
  - 5,000 gold: 15/16 days. 10,000: 10/11 days. 15,000: 5/6 days.
  - **Steal the donations** (the box is locked and has a key): you get your gold back plus other citizens' offerings, "and much shame". Repairs take about 30/31 days.
- **Rewards:** repaired cities. Optional add-ons in the original mod (a tenant for Heimskr's house, Nimriel inheriting Pelagia's house) are separate files [1].

## Locations
- **Temple of the Divines (Solitude)**: donation box. LoreRim ships the JK's Temple of the Divines patch (`CWR_JKTemple_Patch.esp`), which moves the box to a proper place [1][3].
- **Solitude, Windhelm, Whiterun**: repaired [1].

## LoreRim notes
- Patches in LoreRim's load order: `CWR_JKTemple_Patch.esp` (in the mod folder), **Snazzy Interiors - Solitude AIO - CWRepairs patch** and **RedBag's Solitude - CWRepairs patch** [3].
- Repair timers are globals: No_Gold 492 h, Five_K_Gold 336, Ten_K_Gold 216, Fifteen_K_Gold 96, Steal_Gold 720. Change them only before the quest starts [1][2]. LoreRim ships them at these defaults [2].
- See [vittorias-alternate-wedding.md](vittorias-alternate-wedding.md) for the other post-conflict Solitude content.

## Related
- [../vanilla-changes/civil-war.md](../vanilla-changes/civil-war.md)
- [../areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md), [../areas/eastmarch-and-windhelm.md](../areas/eastmarch-and-windhelm.md), [../areas/whiterun-hold.md](../areas/whiterun-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | start conditions, donation tiers, globals, patches | [Nexus mod page 20668](https://www.nexusmods.com/skyrimspecialedition/mods/20668) via meta.ini cache | n/a (cache refreshed 2026-01-11) | 2026-10-02 |
| 2 | quest name, objectives, journal, GLOB timer values | LoreRim install: `CWRepairs.esp` QUST + GLOB records | mod v2.6.5.0 | 2026-10-02 |
| 3 | shipped patches, enabled plugins | LoreRim install: `profiles/Default/plugins.txt`; `Snazzy Interiors Patch Collection/`, `RedBag's Solitude Patch Collection/` | n/a | 2026-10-02 |
