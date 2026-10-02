---
id: fists-of-fury
title: Fists of Fury - Skyrim
kind: mod-added
category: new-quests
summary: A Witcher-3-style brawling tournament in three holds. Fight your way to the champion of the Ratway Arena (Riften), the Brawler's Camp east of Windhelm (Eastmarch) and the ghostly Summoning Stones tourney near Morthal (Hjaalmarch). LoreRim adds a unique enchanted pair of gloves as each champion's prize, and the gloves get stronger as you win more brawls.
mods:
  - name: Fists of Fury - Skyrim
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/73835
    version: 1.3.1.0
  - name: "[LoreRim] Fisting Rewards"
    nexus: n/a (LoreRim-authored, version d2025.12.14)
    version: d2025.12.14
  - name: Daedric Shrines - All in One - My Patches by Xtudo - Fists of Fury - Skyrim patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/78809
    version: 2.2.0.0
plugins: [Fists of Fury - Skyrim.esp, Fists of Fury - AE Integration.esp, Fists of Fury - Brawl Lines Expanded Patch.esp, Northern Roads - Fists of Fury Patch.esp, Fists Rewards.esp, man_DaedricShrines - Fists of Fury - Skyrim patch by Xtudo.esp]
quests: [Fists of Fury - The Rift, Fists of Fury - Eastmarch, Fists of Fury - Hjaalmarch]
locations: [Ratway Arena, Brawler's Camp (east of Windhelm), Summoning Stones (outside Morthal)]
region: Riften (the Rift), Windhelm (Eastmarch), Morthal (Hjaalmarch)
start: Win 3 vanilla brawls (the Brawls Won stat). About 16 in-game hours later a courier delivers "An Invitation to Fight" from The Organizer, pointing you to Maul (Riften), Falion (Morthal) and Niranye (Windhelm).
related: [areas/the-rift-and-riften.md, areas/eastmarch-and-windhelm.md, areas/hjaalmarch-and-morthal.md]
sources: [1, 2, 3, 4, 5, 6, 7]
confidence: high
updated: 2026-10-02
---

# Fists of Fury - Skyrim

Fists of Fury, by Missile, is a brawling tournament inspired by the Witcher 3 quest of the same name. It has three brawling quests (Riften, Windhelm and Morthal), a small arena in the Ratway with spectators and fighters, and a brawler's camp near Windhelm [1][2]. In each hold you beat three contenders and then that hold's champion. Afterwards the fighters keep post-quest routines and will spar with you [1][2].

## Starting in LoreRim
- **Gate:** win **3 vanilla brawls**. The script checks the game's "Brawls Won" stat against the global `FOFBrawlWinsRequired` (default 3), which the author says can be changed in the console [1][3].
- **Delay:** after you reach the threshold, the script waits **16 game hours** and then gives the note to the vanilla courier. LoreRim's site says "After a day, you will receive a letter" [3][4].
- **The letter, "An Invitation to Fight"** (signed "The Organizer"): "talk to any of these people: Maul in Riften, Falion in Morthal, Niranye in Windhelm." [3]
- After the Riften tourney, a second letter, "Another Opportunity", points you to Falion and Niranye [3].
- LoreRim's New Quests page: "To start, you need to win a number of vanilla brawls. After a day, you will receive a letter." [4]

## Quests
### Fists of Fury - The Rift
- **Steps:** talk to **Maul** ("Down in the Ratway, look around.") → "Find the Ratway Arena down in the Ratway Vaults" → "Talk to The Organizer" (entry fee **150 gold**) → "Defeat the first contender, Drackis" → "Defeat the second contender, Fights-With-Fists" → "Defeat the last contender, Barin" → "Defeat The Rift's Champion, Gian the Fist" (or "Come back later and defeat Gian the Fist") → "Talk to Gian" → "Talk to The Organizer" for your reward [3].
- **LoreRim reward:** Gian gives you the **Gloves of Stillness** (see Rewards) [5].

### Fists of Fury - Eastmarch
- **Steps:** Niranye (Windhelm) → "Go to the Brawler's Camp East of Windhelm" → "Talk to Reggr" → "Talk to Erdith" (entry fee **100 gold**) → "Defeat Kjer" → "Defeat Maljorn" → "Defeat Ulthyn" → "Talk to Erdith" → "Defeat the Champion, Erdith The Bear" → "Talk to Erdith" → "Get your earnings from Reggr" [3].
- **LoreRim reward:** Reggr gives you the **Gloves of the Falling Blow** [5].

### Fists of Fury - Hjaalmarch
- **Steps:** Falion (Morthal) → "Go to the Summoning Stones outside of Morthal and talk to Falion there". Falion summons ghost opponents: "Defeat Erel Pure-Heart", "Defeat the Forgotten Captain", "Defeat the Lost Blade" → "Talk to Falion" → "Defeat the Champion, Captain Grimm" → "Talk to Falion" [3].
- The journal calls it "by far the weirdest brawling tourney" [3].
- **LoreRim reward:** Falion gives you the **Gloves of Winter** [5].

## Locations
- **Ratway Arena** (new location, reached through the Ratway Vaults under Riften). It works as an arena and an inn and has spectators [1][2][3].
- **Brawler's Camp**, east of Windhelm. It is enabled once the Eastmarch quest starts [1][3].
- **Summoning Stones**, outside Morthal [3].

## Rewards & notable items
LoreRim's own mod **[LoreRim] Fisting Rewards** (`Fists Rewards.esp`, which has Fists of Fury as a master) makes each champion's reward dialogue also give a unique pair of gloves [5]:
- **Gloves of Winter** (Morthal): "Unarmed attacks deal <n> points of frost damage". Base 10, +5 per upgrade [5].
- **Gloves of Stillness** (Riften): "Unarmed attacks have <n>% chance to paralyze enemies". Base 15%, +2% per upgrade [5].
- **Gloves of the Falling Blow** (Windhelm): "Unarmed attacks have <n>% chance to knock back enemies". Base 10%, +2% per upgrade [5].
- **Scaling:** a monitor effect reads the "Brawls Won" stat each time you win a brawl. For each win while the stat is between 4 and 7, every glove bonus goes up by its per-level amount (so up to 4 upgrades). Monitoring stops at 7 or more wins (read from the script source; medium confidence on the exact in-game numbers) [5].

## LoreRim notes
- **Active add-ons:** *AE Integration* (the author says it needs several Creation Club assets), the *Brawl Lines Expanded* patch, the *Northern Roads* patch, plus Lux / Lux Orbis patches and a combined "Northern Roads - Fists of Fury - Unique Border Gates Fixes - Daedric Shrines - Lux Orbis" patch [2][3].
- Xtudo's **Daedric Shrines – All in One** patch for Fists of Fury is installed in the same separator. It only handles compatibility with the shrine statues and adds no quest content [3][6].
- The author recommends a brawl bug-fix mod for vanilla brawling problems [2]. LoreRim ships *Brawl Lines Expansion and Fixes* (Nexus 94070, by JaySerpa; fixes brawl dialogue and bystander behavior) and *Brawling - No Hitting Bystanders* (Nexus 116941) [7]. Whether either is the fix the author recommends is unverified.

## Related
- [areas/the-rift-and-riften.md](../areas/the-rift-and-riften.md), [areas/eastmarch-and-windhelm.md](../areas/eastmarch-and-windhelm.md), [areas/hjaalmarch-and-morthal.md](../areas/hjaalmarch-and-morthal.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | concept, three tourneys, Ratway Arena, post-quest sparring | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/73835) (search-result summary; page returned 403, no meta.ini cache) | n/a | 2026-10-02 |
| 2 | author, version, wins-required default, patches list, brawl bug fix advice | [GGMods mirror of the Nexus description](https://ggmods.com/game/the-elder-scrolls-v-skyrim-special-edition/mod/356/) (same publisher text) | n/a | 2026-10-02 |
| 3 | quest names, objectives, journal, letters, NPC names, entry fees, wins/hours globals, active plugins | LoreRim install: `Fists of Fury - Skyrim.esp` records + script properties (`FOFTrackingScript`: WinsRequired=`FOFBrawlWinsRequired`=3, WaitHours=16); profile Default plugins.txt | mod v1.3.1.0 | 2026-10-02 |
| 4 | LoreRim start description | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 5 | LoreRim glove rewards, values, scaling | LoreRim install: `[LoreRim] Fisting Rewards` (`Fists Rewards.esp` records; `Fists_WonBrawlScript.psc`) | d2025.12.14 | 2026-10-02 |
| 6 | Xtudo patch scope | [Nexus page 78809](https://www.nexusmods.com/skyrimspecialedition/mods/78809) via meta.ini cache | n/a | 2026-01-11 cache |
| 7 | brawl-fix mods shipped | LoreRim install: `Brawl Lines Expansion and Fixes` meta.ini (modid 94070, vf1.02, cached description); `Brawling - No Hitting Bystanders` meta.ini (modid 116941, v1.0.0.0) | n/a | 2026-10-02 |
