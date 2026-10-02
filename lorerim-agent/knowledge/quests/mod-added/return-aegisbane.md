---
id: return-aegisbane
title: Return Aegisbane
kind: mod-added
category: quest-expansion
summary: A short misc quest in Windhelm. Take Aegisbane, the Shatter-Shield family warhammer, from Alain Dufont and either return it to Torbjorn Shatter-Shield (for thanks or for coin) or tell him you are keeping it.
mods:
  - name: Return Aegisbane
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/108242
    version: 1.2.0.0
plugins: [ReturnAegisbane.esp]
quests: [Return Aegisbane]
locations: [Windhelm]
region: Eastmarch (Windhelm)
start: Talk to Torbjorn Shatter-Shield with Aegisbane in your inventory. Without it, Windhelm guards sometimes mention the lost warhammer, which starts a misc quest to retrieve it. Aegisbane is carried by Alain Dufont, a Dark Brotherhood contract target.
related: [vanilla-changes/dark-brotherhood.md, areas/eastmarch-and-windhelm.md, mod-added/additional-contracts-dark-brotherhood.md]
sources: [1, 2, 3, 4]
confidence: high
updated: 2026-10-02
---

# Return Aegisbane

Aegisbane is the Shatter-Shield clan's iron warhammer, which Alain Dufont carries. In vanilla you can kill Alain and take it, but you cannot return it [1]. This mod adds that option. You can give it back honourably, sell it back, or declare you are keeping it, and Torbjorn's attitude toward you changes accordingly [1][2]. The LoreRim site lists it under "Other Quests" [3].

## Starting in LoreRim
- **You already have Aegisbane:** speak to Torbjorn Shatter-Shield in Windhelm with it in your inventory. Guards who see it also send you to him: "That hammer... Why that's Aegisbane, heirloom of Clan Shatter-Shield!" [1][2].
- **You don't have it yet:** Windhelm guards occasionally mention the stolen warhammer ("My heart goes out to Clan Shatter-Shield. Kin murdered, family warhammer stolen…"), which starts the misc quest [1][2].
- Aegisbane is the vanilla item `DBAlainAegisbane`, carried by Alain Dufont (Dark Brotherhood contract) [1][2].
- No new game is needed. LoreRim adds no gate [1][4].

## Quests
### Return Aegisbane (`ReturnAegisbaneQuest`)
- **Giver / trigger:** Windhelm guard dialogue, or Torbjorn when you carry the hammer [1][2].
- **Steps** (objectives from the plugin) [2]:
  1. Retrieve the Shatter-Shield family warhammer.
  2. Speak to Torbjorn Shatter-Shield about Aegisbane.
- **Choices & outcomes** (dialogue and scripts) [2]:
  - **"Here, it's all yours. (Give Aegisbane)"**: honourable return. You get a leveled reward item, Torbjorn's relationship rank toward you becomes 3, and he equips Aegisbane.
  - **"Gold solves most problems, doesn't it?"**: sell it back for **500** of a misc item (coin), per the script.
  - **"I'm keeping it for myself."**: Torbjorn's relationship rank becomes **−4** (enemy). The dialogue includes "Try and take it from me."
  - You can backpedal: "I'm only joking, it's all yours."
  - There are also dialogue lines for having sold or lost the hammer.
- **Rewards:** see above [2].

## Locations
- **Windhelm**: Torbjorn Shatter-Shield and the city guards [1][2].

## LoreRim notes
- All dialogue is vanilla audio with light splicing, and no AI voices [1].
- ESL-flagged. It does not edit base actors or Aegisbane itself [1].
- The mod is enabled in all three LoreRim profiles [4].

## Related
- [../vanilla-changes/dark-brotherhood.md](../vanilla-changes/dark-brotherhood.md)
- [../areas/eastmarch-and-windhelm.md](../areas/eastmarch-and-windhelm.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, how to start, FAQ | [Nexus mod page 108242](https://www.nexusmods.com/skyrimspecialedition/mods/108242) via meta.ini cache | n/a (cache refreshed 2026-01-11) | 2026-10-02 |
| 2 | quest name, objectives, dialogue, reward/relationship scripts | LoreRim install: `ReturnAegisbane.esp` strings + `Source/Scripts/*.psc` | mod v1.2.0.0 | 2026-10-02 |
| 3 | LoreRim listing | [LoreRim site — Quest Expansions](https://www.lorerim.com/guides/quests/quest-expansions) | n/a | 2026-10-02 |
| 4 | enabled plugin | LoreRim install: `profiles/*/plugins.txt` | n/a | 2026-10-02 |
