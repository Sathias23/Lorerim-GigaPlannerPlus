---
id: more-to-say-quests
title: More to Say — small quests
kind: mod-added
category: town-quests
summary: More to Say is mainly a dialogue mod (spliced vanilla voice lines for Whiterun, Riverwood, Falkreath, Rorikstead, Winterhold, Riften and more). It also adds about 15 small misc quests — bounty-style clears for Belethor, Hulda, Severio Pelagia, Solaf, Lucan and the Karthwasten/Dragon Bridge folk, errands for Zaria, Lynly and Birna, Angi's camp, The Heart Will Go On, and The Secret of Rorikstead.
mods:
  - name: More to Say - Main
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/22622
    version: 9.0.2.0
plugins: [moretodo.esp, moretosayriverwood.esp, moretosaywinterhold.esp, secretofrorikstead.esp, moretosayrorikstead.esp, moretosayfalkreath.esp, moretosaywhiterun.esp, moretosayriften.esp, moretosaykarthwasten.esp, moretosayshorsstone.esp, moretosaygeneric.esp, moretosaycityguards.esp, guardencounters.esp, mtsfollowerbanter.esp]
quests: [Bandits of Whiterun Hold, Giants of Whiterun Hold, Vampires of Whiterun Hold, Embershard Bandits, Chaos in Falkreath, Forsworn of Haafingar, Forsworn of the Reach, Shriekwind Bastion, Ingredient Collection, More to Say Find Angi, More to Say Find Golldir, Birna's Shipment, The Heart Will Go On, More to Say Winterhold Dialogue, The Secret of Rorikstead]
locations: []
region: Whiterun Hold, Riverwood, Falkreath Hold, Rorikstead, Ivarstead, Dragon Bridge, Karthwasten, Winterhold
start: 'No LoreRim gate. Each quest is offered in dialogue by a local NPC once you are in their town (Story Manager change-location nodes). Mod-author prerequisites — Riverwood: finish The Golden Claw and A Lovely Letter; Rorikstead: finish Before the Storm and talk to everyone in Rorikstead; Jarl Korir: become Arch-Mage, then talk to Tolfdir; Shriekwind Bastion: level 10+.'
related: [mod-added/sissels-book.md, mod-added/capital-whiterun-expansion-quests.md, mod-added/follower-dialogue-expansions.md, vanilla-changes/side-quests-and-misc.md, areas/whiterun-hold.md, areas/falkreath-hold.md, areas/winterhold.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: medium
updated: 2026-10-02
---

# More to Say — small quests

More to Say mostly adds "inconsequential" dialogue built from each NPC's existing voice lines, with some new splices. It covers Whiterun, Riften, Falkreath, Winterhold, Riverwood, Shor's Stone, Karthwasten, Ivarstead, Dragon Bridge, Whistling Mine and Rorikstead, plus guards and followers [2]. It also adds "a few additional small quests" from local NPCs and *The Secret of Rorikstead* [2]. In LoreRim, all 14 module plugins of the main FOMOD are enabled [5]. Sissel's book quest is a separate module that LoreRim installs as its own mod; see [sissels-book.md](sissels-book.md) [5].

## Starting in LoreRim
- **No LoreRim gate:** No LoreRim-specific gate was found. The LoreRim site does not mention More to Say [6].
- **How quests appear:** Each quest is attached to a Story Manager change-location node for its town, for example `ACFMoreToSayWhiterunChangeLocationNode`, `ACFMTSFalkreathQuestsNode` and `ACFSecretOfRoriksteadChangeLocationNode`. So the giver offers it in dialogue once you have arrived there [3].
- **Prerequisites from the author's FAQ** [2]:
  - **Riverwood:** finish *The Golden Claw* and *A Lovely Letter*. Lucan then gives one quest, and Faendal or Sven gives the other. In `moretodo.esp`, Lucan's bandit-trouble line is conditioned on `GetQuestCompleted` of *The Golden Claw* (MS13) [3].
  - **Rorikstead:** finish *Before the Storm* and talk to everyone in Rorikstead at least once. Reldith and Sissel each give a quest. After the Secret of Rorikstead, Jouane or Rorik gives a repeating quest.
  - **Jarl Korir:** become Arch-Mage, then ask Tolfdir whether you'll be a good Arch-Mage. A courier then comes to summon you.
  - **Angi:** Faendal, Valdr or Legate Skulnar can point you to Angi's Camp.
- **Shriekwind Bastion:** the plugin's global `ACFMTSShriekwindBastionMinLevel` is 10 [3].

## Quests
Quests marked "radiant" fill their target camp from `<Alias=…>` placeholders, so the location varies between games [1].

### Bandits of Whiterun Hold (radiant)
- **Giver:** Belethor (Whiterun) [1].
- **Steps:** Kill the bandit leader at a camp in Whiterun Hold, then tell Belethor [1].

### Giants of Whiterun Hold (radiant)
- **Giver:** Severio Pelagia [1].
- **Steps:** Kill the giant at a giant camp in Whiterun Hold, then tell Severio [1].

### Vampires of Whiterun Hold (radiant)
- **Giver:** Hulda (Whiterun) [1].
- **Steps:** Kill the vampires at a den in Whiterun Hold, then tell Hulda [1].

### Embershard Bandits
- **Giver:** Lucan (Riverwood), after The Golden Claw [1][2].
- **Steps:** Kill the bandit leader at the quest location (Embershard Mine, by the quest name), then tell Lucan [1].

### Chaos in Falkreath (radiant)
- **Giver:** Solaf (Falkreath) [1].
- **Steps:** Kill the warlord at a bandit camp in the hold, then tell Solaf [1].

### Forsworn of Haafingar (radiant)
- **Giver:** An NPC in Dragon Bridge, according to the quest's Story Manager node [1][3].
- **Steps:** Kill the Forsworn leader at a Forsworn camp, then report back [1].

### Forsworn of the Reach (radiant)
- **Giver:** Karthwasten's leader [1].
- **Steps:** Kill the Forsworn leader at a camp in the Reach, then report back [1].

### Shriekwind Bastion
- **Giver:** The Falkreath court. You report to the steward [1].
- **Steps:** Clear Shriekwind Bastion of the restless dead, then inform the steward of Falkreath [1].
- **Gate:** Level 10 minimum. In `moretosayfalkreath.esp`, the Falkreath steward's offer line ("You were helpful before. I have need of your help again…") requires `GetLevel >= 10` [3].

### Ingredient Collection
- **Giver:** Zaria (Falkreath) [1].
- **Steps:** Bring 5 sabre cat eyes to Zaria, which the objective tracks with a counter. Then return to her [1].

### More to Say Find Angi
- **Giver:** Legate Skulnar (Falkreath) asks you to find and kill a dangerous fugitive. You may also simply hear "a tale of a skilled, but dangerous, hunter" [1].
- **Steps:**
  - Train with the seasoned hunter (Angi), who trains you in Archery [1].
  - Or kill her, or tell her you will spare her [1].
  - Report back to Legate Skulnar [1].
- **Tip:** To clear the objective marker, finish her archery tutorial and thank her, or kill her and tell Skulnar [2].

### More to Say Find Golldir
- **Giver:** Lynly (Ivarstead) [1][3].
- **Steps:** Find Golldir, then tell Lynly you found him, or that he has died [1].

### Birna's Shipment
- **Giver:** Birna (Winterhold) [1].
- **Steps:** Track down her shipment, lost on the roads near Winterhold and stolen by Falmer. Return it to her for a reward [1].

### The Heart Will Go On
- **Giver:** Faendal or Sven (Riverwood), after *A Lovely Letter* [1][2].
- **Steps:** Deliver Faendal's letter OR Sven's ballad to Camilla, then talk to the sender. This lets you repair your relationship with whichever man you crossed earlier [1][2].

### More to Say Winterhold Dialogue
- **Trigger:** A courier summons the Arch-Mage. You then talk to Jarl Korir [1][2].
- **Notes:** You get different options if you sided with the Imperials. A global named `ACFMTSJarlPayoff` is set to 5000 [2][3]. Its role is unverified, possibly a payment in this conversation.

### The Secret of Rorikstead
- **Trigger:** Ask Erik the Slayer, away from Rorikstead, why Rorikstead's fields are so fertile [2].
- **Steps:**
  1. Discover the secret behind Rorikstead's fruitful harvests [1].
  2. Find evidence of suspicious activity in Rorikstead. The FAQ says this is a suspicious book in Rorik's Manor [1][2].
  3. Confront Jouane Manette about consorting with daedra [1].
- **Outcome:** After you decide what to do, Jouane or Rorik offers a repeating quest [2].

## Locations
More to Say adds no new locations. Its quests use vanilla places such as Embershard Mine, Shriekwind Bastion, and radiant bandit, giant, vampire and Forsworn camps [1].

## Rewards & notable items
- **Quest rewards:** Rewards for the radiant clears are not stated in the records (unverified). The author notes that bounty-reward mods do not affect them [2].
- **Rocksplinter:** The mod gives an "immersive way to acquire Rocksplinter", Bethesda's unused unique pickaxe [2].
- **Archery:** Angi trains your Archery [1].

## Other More to Say features (no journal entry)
These features are listed on the Nexus page [2]:
- brawl Nazeem
- priests grant Divine blessings
- guards talk about their town
- followers give skill tips and early-quest dialogue
- treats for dog followers
- Jouane cures disease
- gossip at Dead Man's Drink
- proclaiming Ulfric High King in Siddgeir's court gets you jailed

The named "Obnoxious"/"Belligerent" Windhelm guards and "Corrupt" Riften guards can harass you. Walking away or staying meek avoids consequences; being pushy can lead to a fight, a bounty or jail [2]. These come from `guardencounters.esp`, which LoreRim enables [5].

## LoreRim notes
- **A Bad Trade:** `moretodo.esp` and `moretosaywinterhold.esp` override Birna's vanilla misc quest **A Bad Trade** (`FreeformWinterholdA`) [4]. What the override changes was not diffed.
- **LoreRim - Dialogue Patch:** LoreRim's `LoreRim - Dialogue Patch.esp` overrides the *Ingredient Collection* record and some Whiterun dialogue (Nelkir topics). The quest-record diff shows only master-index remapping of its count globals, not a gameplay change [3].
- **Context mismatches:** LoreRim also ships quest-expansion mods for vanilla Riverwood and Whiterun content, such as `LovelyLetter.esp`, a master of the Dialogue Patch [3]. The author warns that mods which change Riverwood, the Main Quest or the Civil War can make some lines feel out of context [2].
- **Mid-save install:** Since version 9.0, adding the mod does not require a new game [2].

## Related
- [Sissel's Book quest](sissels-book.md) (separate More to Say module)
- [Capital Whiterun Expansion quests](capital-whiterun-expansion-quests.md)
- [Follower dialogue expansions](follower-dialogue-expansions.md)
- [Vanilla side quests and misc changes](../vanilla-changes/side-quests-and-misc.md)
- [Whiterun Hold](../areas/whiterun-hold.md), [Falkreath Hold](../areas/falkreath-hold.md), [Winterhold](../areas/winterhold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal stages, givers | LoreRim install: More to Say plugins' QUST records (profile Default), via imports/mods/more-to-say-main.md | mod v9.0.2.0 | 2026-10-02 |
| 2 | features, FAQ start conditions, Angi/Korir/Rorikstead tips, compatibility notes | [Nexus mod page 22622](https://www.nexusmods.com/skyrimspecialedition/mods/22622) via meta.ini cache | 2023-02-14 (nexusLastModified) | 2026-01-11 cache |
| 3 | Story Manager nodes, level-10 global and GetLevel condition, Golden Claw condition, Jarl payoff global, LoreRim Dialogue Patch diff | LoreRim install: `moretodo.esp`, `moretosayfalkreath.esp`, `moretosaywinterhold.esp`, `secretofrorikstead.esp`, `moretosayriverwood.esp` SMQN/GLOB/QUST records and `LoreRim - Dialogue Patch.esp`, parsed this run | n/a | 2026-10-02 |
| 4 | A Bad Trade override | imports/vanilla-quest-overrides.json + imports/official-quests.json | n/a | 2026-10-02 |
| 5 | enabled plugins, Sissel's Book Quest as separate mod | LoreRim install: profile Default modlist.txt / plugins.txt; `More To Say - Sissel's Book Quest` meta.ini (Nexus 22622, v9.0.0.0) | n/a | 2026-10-02 |
| 6 | no LoreRim-specific gate listed | LoreRim site pre-fetch (all six pages) — no mention | n/a | 2026-10-02 |
