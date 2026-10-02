---
id: remiel
title: Remiel (Remi) — Dwemer Specialist follower
kind: mod-added
category: follower-quests
summary: Remiel ("Remi") is a voiced Breton Dwemer enthusiast found at the Silver-Blood Inn in Markarth. "The Dwemer Specialist" (Nchuand-Zel) recruits her and her dwemer spider Scrap. "Reunion of the Fallen" (her ex-fiancé Morvic) gives her the Arkngchal ruin as a workshop. Several project quests follow (crossbow, lantern, tuning fork, tension wrench, Chaurus Pie, Scrap upgrades), and a romance is possible.
mods:
  - name: Remiel-Custom Voiced Follower
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/51874
    version: 1.7.4.0
  - name: Radiant Remi - Remiel NPC Overhaul
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/116413
    version: 2.0.0.0
plugins: [HLIORemi.esp, RemielReplacer.esp, LoreRim - Remi Patch.esp, Remiel Occlusion Addon.esp, JKs College of Winterhold - Remiel patch.esp, JKs Bards College - Remiel patch.esp, Lux - Remiel patch.esp, Lux Orbis - Remiel patch.esp]
quests: [The Dwemer Specialist, Reunion of the Fallen, Exploring Arkngchal, We Who Challenge the Sun, Remi's Crossbow Crucible, Upgrades, Attuned Assassination, Picking Remi's Brain, Real Nord Food, Remi is Here!]
locations: [Arkngchal, Mercenaries' Ship, Nchuand-Zel]
region: Markarth / the Reach (start and Arkngchal); also Solitude, Riften, Windhelm, Winterhold
start: Find Remi at the Silver-Blood Inn in Markarth and agree to take her to Nchuand-Zel. Talk to Calcelmo about the giant spider Nimhe to begin "The Dwemer Specialist". No LoreRim-specific gate found.
related: [mod-added/gore.md, mod-added/follower-dialogue-expansions.md, mod-added/taste-of-death-addon.md, areas/the-reach-and-markarth.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: medium
updated: 2026-10-02
---

# Remiel (Remi) — Dwemer Specialist follower

Remiel, "Remi", is "a female Breton… follower well-suited for long playthroughs with over 4,500 lines of dialogue" [1]. She's obsessed with the Dwemer and wants to explore Nchuand-Zel under Markarth, but a giant spider blocks the way and she isn't much of a fighter [4]. Her plugin adds ten journal quests: a recruitment quest, a personal storyline about her ex-fiancé **Morvic**, a puzzle dungeon (**Arkngchal**) that becomes her workshop, and a string of "project" quests that give you gadgets [2].

## Starting in LoreRim
- **Where:** "You can find Remi at the Silver-Blood Inn in Markarth" [1][2].
- **Start:** agree to take her to see Nchuand-Zel. The first objective is "Speak to Calcelmo about the spider in the excavation site" [2]. If you've already killed Nimhe, the quest skips ahead to the guard's body ("since I had already killed the giant spider, Nimhe") [2].
- **She becomes a full follower** at the end of The Dwemer Specialist, once she has repaired her dwemer spider **Scrap** and asked to travel with you [2][4].
- **LoreRim gates:** I found no LoreRim delayed start or level gate [1][3]. LoreRim's own `LoreRim - Remi Patch.esp` overrides the *The Dwemer Specialist* quest record and Nimhe's spawn reference (`SpiderNimheREF` in the Nchuand-Zel Excavation Site). A raw comparison shows only plugin-index and script-property differences, with no objective or journal text changed [3].

## Quests
### The Dwemer Specialist
- **Giver:** Remi (Silver-Blood Inn) → Calcelmo [2].
- **Steps** [2]:
  1. Speak to Calcelmo; kill **Nimhe** (the giant spider).
  2. Read the note by the guard's body near the Nchuand-Zel entrance.
  3. "Look for the researchers and for interesting artifacts in Nchuand-Zel". You can find the **Unique Dwemer Cog**, **Interesting Dwemer Gear** and **Shimmering Dwemer Gyro**, plus the lost expedition's journals [2][3].
  4. The journals reveal that Nimhe "was the only thing keeping the falmer from invading Markarth from below". Pull the lever to reactivate Nchuand-Zel's defenses.
  5. Watch Remi; she repairs an oddly behaving dwemer spider. Talk to her, then talk again after leaving Nchuand-Zel.
- **Outcome:** Remi names the spider **Scrap** and joins you [2].

### Reunion of the Fallen (personal questline)
- **Trigger:** an assassin attacks you. A letter on the body outlines a hit on Remiel. If you're busy, you can postpone the investigation [2].
- **Steps** [2]:
  1. Investigate Solitude. A Breton sailor in the Winking Skeever hands over the key to a ship in the harbour (the **Mercenaries' Ship**).
  2. Discover who sent the assassin: her ex-fiancé **Morvic**, who "feels slighted by the impact Remiel had on his family name".
  3. Search Riften for news of her family. A smuggler wants his confiscated skooma back from the Riften guard. His note says her family moved to Skaven and are doing well.
  4. Remi writes an anonymous tip-off to the **Order of the Hour in Wayrest** framing Morvic as a daedra worshipper. Wait, then check with the smuggler.
  5. Search Markarth for Morvic, then head to **Arkngchal**, "a dwemer ruin she stayed in when first crossing the border". Remi runs into Morvic without you; kill Morvic.
  6. Leave Remi in Arkngchal and return later.
- **Choices & outcomes:** if you let her stay, she cleans up Arkngchal and makes it her workshop "and the site for any future projects". Alternatively, you can tell her "she was taking it too far" and talk her out of her revenge plotting (stage 230) [2].

### Exploring Arkngchal
- A puzzle run through the ruin [2]. Signal the lever order using a spell Remi gives you, which you cast at the stationary automaton prototypes. Find a heat source and a "kinetic jumpstart" to power the ruin. Brew a metal lubricant ("three golden bowls" and "two grey ferns" in the cauldron) for a stuck door. Then fill offering chests opposite automaton statues; the clue is found "somewhere the Dwemer inhabitants worked on their machines".

### Project and companion quests
- **We Who Challenge the Sun** — find Aetherium in Arkngchal for a "portable chandelier". She builds **Remi's Aetherial Lantern**, and you can ask her to stop using it [2][3].
- **Remi's Crossbow Crucible** — gather 2 dwemer cogs, 8 dwemer gears, a dwemer lever, 3 pieces of wood and 6 dwarven metal ingots, and bring them while she's relaxing. Result: **Remi's Crossbow** [2][3].
- **Attuned Assassination** — take Remi to the Bards College and then the College of Winterhold to find a book on Tonal Magic. She builds a **Tuning Fork** that shuts down automatons she can reach unnoticed [2][3].
- **Picking Remi's Brain** — give her an iron ingot at the Markarth Forge. Test the **Tension Wrench Prototype** by picking locks, then report back for the improved **Remi's Tension Wrench**, which makes lockpicking easier. You can refuse [2][3].
- **Real Nord Food** — after she reads about Chaurus Pie, gather chaurus chitin, a tomato, honey, salt, a potato, a carrot and an apple. She cooks it at **Candlehearth Hall** (Windhelm). She dislikes it, and you keep the **Chaurus Pie** [2][3].
- **Upgrades** — take Remi to four more dwemer ruins, then talk about your adventures. Scrap becomes more powerful (several *Conjure Scrap* spell tiers exist). Depending on regard, the ending stage is friendship, "Romance Available", or her leaving if you say you don't want her around [2][3].
- **Remi is Here!** — a map-marker tracker ("Where did Remi go?") [2].

## Locations
- **Nchuand-Zel** — vanilla dwemer ruin under Markarth, entered from the Nchuand-Zel Excavation Site [2][3].
- **Arkngchal** (`HLIOArkngchalLocation`) — a new dwemer ruin in the Reach (its exterior is the edited vanilla cell `POIReach17`). It becomes Remi's workshop after Reunion of the Fallen, and its chests are safe storage according to the author's patch notes [2][5].
- **Mercenaries' Ship** (`HLIOMercenaryShipLocation`) — docked in Solitude harbour during Reunion of the Fallen [2].

## Rewards & notable items
Scrap (a summonable dwemer spider, *Conjure Scrap*), the **Call Remi** spell, *Remi's Crossbow* with bolts, *Remi's Tuning Fork*, *Remi's Aetherial Lantern*, *Remi's Tension Wrench* and a *Chaurus Pie* [2][3]. Romance and marriage are tracked by the background quests `HLIORemiRomance` and `HLIORemiMarriage` [2].

## LoreRim notes
- **`LoreRim - Remi Patch.esp`** (LoreRim - xEdit64 Output) depends on Requiem, Requiem Weapons and Armor Redone, and Requiem Magic Redone. It overrides Remiel, all Scrap tiers, Morvic and his hired mercenaries, her weapons and armour, the Conjure Scrap spells, Scrap's damage perks and her lockpicking dialogue. This is Requiem balancing; exact stat values were not inspected [3].
- **Radiant Remi - Remiel NPC Overhaul** (`RemielReplacer.esp`) overrides only Remiel's NPC record (an appearance overhaul) [3].
- Also enabled: JK's College of Winterhold and Bards College patches (both relevant to Attuned Assassination), an Occlusion addon, Lux / Lux Orbis patches, the LoreRim Economy Overhaul hook, and Follower Dialogue Expansion banter with Aela and Mjoll (see `follower-dialogue-expansions.md`) [3].
- Remi has banter hooks for other followers (Gore, Auri, Redcap, Val, Zora/Rumarin and others) and for *Taste of Death*, per her background quest names [2]. Gore's author says Gore has "around 320 lines with her" [6] (see gore.md).
- The Nexus description isn't cached in the install and the live page returned 403. The overview here comes from the LoreRim site, the plugin records and search-engine summaries of the mod page [1][2][4][5].

## Related
- [Gore](gore.md) — ~320 lines of banter with Remi
- [Follower Dialogue Expansions](follower-dialogue-expansions.md)
- [Taste of Death addon](taste-of-death-addon.md)
- [The Reach and Markarth](../areas/the-reach-and-markarth.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Remi is a LoreRim follower; line count; Silver-Blood Inn | [LoreRim site — Followers](https://www.lorerim.com/guides/world/followers) | n/a | 2026-10-02 |
| 2 | quest names, objectives, journal text, LCTN names, helper-quest names | LoreRim install: `HLIORemi.esp` QUST/LCTN/CELL records (mod v1.7.4.0, profile Default) | mod v1.7.4.0 | 2026-10-02 |
| 3 | item/spell names; LoreRim patch scope; enabled patches | LoreRim install: `profiles/Default/plugins.txt`; record inspection of `LoreRim - Remi Patch.esp`, `RemielReplacer.esp`, `HLIORemi.esp` | n/a | 2026-10-02 |
| 4 | overview (author Maplespice; spider blocks Nchuand-Zel; Scrap upgradable) | WebSearch summaries of [Nexus page 51874](https://www.nexusmods.com/skyrimspecialedition/mods/51874) and TV Tropes "VideoGame/Remiel" (live pages 403) | n/a | 2026-10-02 |
| 5 | Arkngchal chests safe storage / gates don't reset | WebSearch summary of Nexus page 51874 patch notes (live page 403) | n/a | 2026-10-02 |
| 6 | Gore–Remi banter line count | [Gore Nexus page 85298](https://www.nexusmods.com/skyrimspecialedition/mods/85298) via meta.ini cache ("Gore has around 320 lines with her") | 2025-12-26 (nexusLastModified) | 2026-01-11 cache |
