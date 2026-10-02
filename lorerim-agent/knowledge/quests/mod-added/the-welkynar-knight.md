---
id: the-welkynar-knight
title: The Welkynar Knight
kind: mod-added
category: new-quests
summary: From level 25, a courier's note sends you to Nirenoore at the Bannered Mare. You steal a painting from the Thalmor Headquarters for her, are drugged and jailed in the "Solitude Observaton Station", escape through cipher puzzles and rescue her. Depending on your choices she leaves, becomes a follower or a spouse, and finishing the quest unlocks Welkynar Hussar crafting.
mods:
  - name: The Welkynar Knight - Quest
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/89510
    version: 0.4.1.0
  - name: Welkynar Hussar Armor
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/89496
    version: 1.2.0.0
plugins: [ksws04_quest.esp, ksws04.esp, ksws4.esp]
quests: [The Welkynar Knight, A Welkynar Legend, "<item> (Welkynar artifact radiant)", Drinking with Nirenoore]
locations: [Solitude Observaton Station, The Bannered Mare, Thalmor Headquarters (Solitude), Embershard Mine, College of Winterhold]
region: Whiterun, Solitude, and a new Thalmor prison worldspace
start: Be level 25 or higher, then travel between cities until a courier brings "Mysterious Request". Meet the stranger at the Bannered Mare in Whiterun.
level_hint: "25+"
related: [mod-added/belethors-sister.md, mod-added/storm-the-thalmor-embassy.md, areas/haafingar-and-solitude.md, areas/whiterun-hold.md]
sources: [1, 2, 3]
confidence: high
updated: 2026-10-02
---

# The Welkynar Knight

The Welkynar Knight (by Kreiste and wSkeever) is a choice-heavy quest built around **Nirenoore**, an elven Welkynar knight working against the Thalmor. It has about 150 lines of AI-generated (ElevenLabs) dialogue, a disposition system, puzzles and several endings [1]. Finishing the quest unlocks crafting for the companion **Welkynar Hussar** armor and weapons, which LoreRim installs alongside it [1][2].

## Starting in LoreRim
- **Requirement:** level 25. The plugin's story-manager node `ksws04MainQuestNode` checks GetLevel ≥ 25 [1][2].
- **Trigger:** a courier note ("Mysterious Request"). You may need to travel between several cities to make the courier show up [1][2].
- First objective: "Meet with the stranger who sent the note." at the Bannered Mare in Whiterun [2].
- LoreRim's quest pages don't list this mod, so there's no LoreRim-specific gate (looked for, not found).

## Quests
### The Welkynar Knight
- **Steps (plugin objectives):** 1. "Meet with the stranger who sent the note." 2. "Retrieve the painting of Nirenoore." (from the Thalmor Headquarters in Solitude) 3. "Return to Nirenoore." 4. "Have a drink with Nirenoore." (the mead is drugged) 5. "Escape." / "Retrieve your items. (Optional)" 6. "Rescue Nirenoore." / "Retrieve the painting of Nirenoore." 7. "Speak to Nirenoore." 8. "Follow Nirenoore." 9. "Speak to Nirenoore." 10. "Recover Nirenoore's Items." 11. "Speak to Nirenoore." [2]
- **Prison escape puzzles (author's walkthrough):** take **Phrase Book I-III** (left of your cell) and the **Scrawled Cipher** from the dead prisoner (right of your cell). The cell password is **CUT**. The armory key is in the commander's room, and that room's key is on a table in the barracks. The exit key is on the Thalmor Commander. **Phrase Book IV-V** plus the cipher gives the portal password **SCUTTLE** [1][2].
- **Choices & outcomes:**
  - Report Nirenoore to any non-hostile Thalmor: you get gold and the quest fails (stage 9000) [1][2].
  - Fail to rescue her (stage 9100) [2].
  - If you picked up her belongings during the escape, give them back or lie and keep them [1].
  - At her stash, her chest has been looted. Either she pays you with her **hammer and circlet** (if you returned her items) or she has nothing left. Or you agree to recover the items together from bandits in **Embershard Mine**, then accept or refuse her reward [1][2].
  - With enough friendly choices she can become a **follower or marriage candidate**. If she dislikes you, she leaves Skyrim for good [1].

### A Welkynar Legend
- **Trigger:** after the main quest, travel to any city with Nirenoore as your follower. She tells you about **Siralys Featherwing**, a 2nd-era Welkynar explorer [1][2].
- **Steps:** "Acquire a book about the Welkynar explorer." (buy **Skies of the North** from Urag gro-Shub at the College of Winterhold) → "Read 'Skies of the North'." → "Show 'Skies of the North' to Nirenoore." Saying you're not interested fails it [1][2].

### Welkynar artifacts (radiant, titled with the artifact's name)
- **Trigger:** Nirenoore is your follower and has Skies of the North in her inventory. Travel to a city and ask about her research [1].
- **Objective:** "Retrieve the <artifact>" from the dungeon she names. You can tell her you couldn't find it, which fails the quest [1][2]. The plugin defines **Ancient Welkynar** armor pieces (Helmet, Armor, Bracers, Boots, Pauldrons, Cape, Wings, Shield, Circlet), the **Saber of Siralys** and the hammer **Iron Fist** (which items come from the radiant quest and which from the ending is not confirmed) [2].

### Drinking with Nirenoore (misc, radiant)
- At any inn with Nirenoore as follower: "Purchase wine from <innkeeper>." (plain wine, not Alto wine) → "Drink with Nirenoore." Then ask her questions and get drunken answers [1][2].

## Locations
- **Solitude Observaton Station** (spelled this way in game): a new Thalmor prison in its own worldspace, with cells, barracks, a commander's room, an armory and a portal exit [2].
- **The Bannered Mare** (Whiterun), **Thalmor Headquarters** (Solitude), **Embershard Mine** [1].
- No vanilla cells or worldspaces are edited [1].

## Rewards & notable items
- **Welkynar Armory Plans** and crafting recipes for the **Welkynar Hussar** set: Helmet, Armor, Bracers, Boots, Pauldrons, Cape, Wings, Shield, Circlet, Hammer and Saber. The mod page says it "Locks Winged Hussar armor and weapons crafting behind quest completion" [1][2].
- Gold from Nirenoore, and optionally her hammer and circlet [2].
- Nirenoore herself as a follower or spouse. The page says follower dialogue needs Relationship Dialogue Overhaul or Missing Follower Dialogue Edit, or force-recruiting her with a follower manager [1].

## LoreRim notes
- LoreRim loads `ksws04.esp` (armor), `ksws04_quest.esp` and `ksws4.esp` (an empty plugin, presumably there so the armor BSAs load) [2][3].
- Known issue from the mod page: broken navmeshes elsewhere can make the quest's NPCs get stuck while traveling [1].

## Related
- [mod-added/belethors-sister.md](belethors-sister.md): both mod pages credit wSkeever; also a Whiterun quest with a courier-started sequel
- [mod-added/storm-the-thalmor-embassy.md](storm-the-thalmor-embassy.md)
- [areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md), [areas/whiterun-hold.md](../areas/whiterun-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | requirements (level 25, courier), walkthrough, puzzle answers, endings, crafting lock | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/89510) via meta.ini cache | 2025-09-22 (nexusLastModified) | 2026-01-23 cache |
| 2 | quest names, objectives, journal stages, books, items, location names | LoreRim install: `ksws04_quest.esp`, `ksws04.esp` records (profile Default) | quest v0.4.1.0; armor v1.2.0.0 | 2026-10-02 |
| 3 | active plugins | LoreRim install: profile Default plugins.txt | n/a | 2026-10-02 |
