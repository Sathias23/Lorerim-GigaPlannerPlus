---
id: belethors-sister
title: Belethor's Sister
kind: mod-added
category: new-quests
summary: Belethor in Whiterun admits he sold his sister Lelaegh. You trace her through Ysolda, Ma'dran, a bandit camp and a necromancer camp to the Soul Cairn and buy her freedom from Morven Stroud. In the follow-up, "Hostile Takeover", she can take over Belethor's General Goods and pay you weekly dividends.
mods:
  - name: Belethor's Sister - Quest
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/92381
    version: 0.3.5.0
  - name: Belethor's General Goods WeelBones' Replacers
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/119993
    version: 2.0.0.0
plugins: [Belethor's Sister.esp, Belethor General Goods WeelBones Replacers.esp]
quests: [Belethor's Sister, Hostile Takeover, "Delivery for <npc>", "<item> (shipment fetch)", "<item> (bandit retrieval)"]
locations: [Belethor's General Goods, The Bannered Mare, Soul Cairn]
region: Whiterun (with trips to a radiant bandit camp, a radiant necromancer camp, and the Soul Cairn)
start: Talk to Belethor at Belethor's General Goods in Whiterun once you are level 20. You must already have the Soul Cairn unlocked through the Dawnguard quest Chasing Echoes, and Nazeem and the other Whiterun NPCs must be alive.
level_hint: "20+"
related: [mod-added/more-to-do-in-the-soul-cairn.md, vanilla-changes/dawnguard.md, areas/whiterun-hold.md, mod-added/the-welkynar-knight.md]
sources: [1, 2, 3, 4]
confidence: high
updated: 2026-10-02
---

# Belethor's Sister

Belethor's Sister is a Whiterun quest mod with two story quests and three radiant side quests [1]. Belethor sold his sister Lelaegh. You follow the chain of sales across Skyrim and into the Soul Cairn to rescue her. Afterwards she can win a shareholder vote and take over Belethor's General Goods, which pays you weekly dividends [1][2].

## Starting in LoreRim
- Talk to Belethor at Belethor's General Goods once you are **level 20**. If you are already inside the shop when you reach level 20, leave and come back [1].
- **Prerequisite:** the **Soul Cairn** must be unlocked by completing the Dawnguard quest *Chasing Echoes* [1]. The plugin's start node (`belethorSisterBranchNode`) checks only GetLevel ≥ 20, and no condition checks Chasing Echoes, so the quest can start before you have Soul Cairn access. You just can't finish it until you do [2].
- **Prerequisite:** Nazeem and the other Whiterun NPCs involved (Ysolda, Hulda, Ma'dran) must be alive [1].
- LoreRim's New Quests page lists it as "Find Belethor's Sister and take over Belethor's store." It gives no extra LoreRim gate [3].
- **Caveat from the mod author:** a mod that replaces Soul Husks on pickup (the author names CACO) can stop the husk counter. If the count doesn't go up, check for such a feature (unverified whether anything in LoreRim does this) [1].

## Quests
### Belethor's Sister
- **Giver / trigger:** Belethor, Belethor's General Goods, Whiterun [1][2].
- **Steps (plugin objectives):** 1. "Ask Ysolda about Lelaegh." 2. "Ask Ma'dran about Lelaegh." You can bribe, persuade or intimidate Ma'dran [1]. 3. "Read Ma'dran's Sales Contract." 4. "Search for Lelaegh at <bandit location>." Kill the leader and read their journal. 5. "Search for Lelaegh at <necromancer location>." Kill the leader and read their journal. 6. "Search for Lelaegh in the Soul Cairn." 7. "Ask Morven Stroud about Lelaegh." 8. "Collect Soul Husks for Morven Stroud (n/30)". 9. "Return to Morven Stroud." 10. "Speak to Lelaegh." 11. "Return to Belethor." 12. "Speak to Lelaegh." [1][2]
- The bandit and necromancer camps are chosen at random. If either one can't be reached, the author's documented console fixes are `setstage belethorSisterQuest01 300` (skip the bandit dungeon) and `setstage belethorSisterQuest01 500` (skip the warlock dungeon) [1].
- **Rewards:** a gold reward from Belethor, raised if you persuade or intimidate him, and Speech training from Lelaegh [1].

### Hostile Takeover
- **Trigger:** wait 3 or more days after the first quest and change locations a few times. A courier then delivers "Letter from Lelaegh" [1][2].
- **Steps:** 1. "Meet with Lelaegh at the Bannered Mare." 2. "Acquire Ysolda's / Nazeem's / Hulda's share of Belethor's General Store." You can pickpocket, persuade, intimidate or pay market rate for each share [1]. 3. "Return to Lelaegh at the Bannered Mare." 4. "Follow Lelaegh." 5. "Speak to Lelaegh." [2]
- **Choices & outcomes:** at the shareholders' meeting you either vote for Belethor, which ends the questline for a 10 gold reward, or for Lelaegh, which makes her store manager and pays 200 gold [1][2].
- **Afterwards:** visit Lelaegh weekly for a dividend. You can give her your stock certificates for safekeeping [1].

### Radiant store jobs (Lelaegh)
The amount of each dividend depends on the business level these jobs raise [1]:
- **Delivery for <npc>:** deliver goods to a Whiterun NPC. At a high business rating the delivery may go to Elisif in Solitude instead. Available right away, refreshes every 8 h, gives +1 business level (+2 for Elisif) [1][2].
- **Shipment (fetch, "<item>"):** collect a crate from Orthus Endario (Windhelm) or Vittoria Vici (Solitude). Unlocks at business level 9 per the mod page [1]. The plugin's quest condition is `belethorSisterBusinessLevel` ≥ 10 (the global starts at 0), so the two sources disagree by one (disputed) [2]. Refreshes every 16 h, gives +2 [1][2].
- **Bandits ("<item>"):** get back a stolen shipment crate from a bandit camp. Unlocks at business level 19 per the mod page [1]. The plugin's condition is `belethorSisterBusinessLevel` ≥ 20 (disputed) [2]. Refreshes every 24 h, gives +3 [1][2].
- You can fail any of these on purpose by talking to Lelaegh [1].

## Locations
- **Belethor's General Goods** and **The Bannered Mare** (Whiterun): the quest hub [1].
- **Soul Cairn** (Dawnguard): where Lelaegh and Morven Stroud are found [1][2].

## Rewards & notable items
- Belethor's General Goods Stock Certificates 3–5, Ma'dran's Sales Contract, and the bandit and necromancer leaders' journals [2].
- After the rescue, Belethor's double bed is replaced with two single beds [1].
- Lelaegh cannot become a follower or a spouse [1].

## LoreRim notes
- LoreRim also installs **Belethor's General Goods WeelBones' Replacers**, an appearance replacer for Belethor, Sigurd and Lelaegh that depends on `Belethor's Sister.esp`. It adds no quest content [4].
- The mod page says the mod makes zero edits to vanilla records apart from Belethor's line about selling his sister [1].

## Related
- [mod-added/more-to-do-in-the-soul-cairn.md](more-to-do-in-the-soul-cairn.md): more Soul Cairn quests
- [vanilla-changes/dawnguard.md](../vanilla-changes/dawnguard.md): Chasing Echoes / Soul Cairn access
- [areas/whiterun-hold.md](../areas/whiterun-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | requirements, walkthrough, radiant rules, FAQ | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/92381) via meta.ini cache | 2026-01-27 (nexusLastModified) | 2026-01-28 cache |
| 2 | quest names, objectives, journal stages, item/NPC names, start-node and radiant-quest conditions (SMBN GetLevel ≥ 20; GetGlobalValue business level ≥ 10 / ≥ 20) | LoreRim install: `Belethor's Sister.esp` QUST/SMBN/GLOB/NPC_/BOOK records (profile Default) | mod v0.3.5.0 | 2026-10-02 |
| 3 | LoreRim listing | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 4 | WeelBones replacer contents | LoreRim install: `Belethor General Goods WeelBones Replacers.esp` records | mod v2.0.0.0 | 2026-10-02 |
