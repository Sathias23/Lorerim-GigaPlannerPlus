---
id: revealing-rune
title: Revealing Rune (Rune's Scope)
kind: mod-added
category: new-quests
summary: The quest "Rune's Scope" lets you keep Rune's vanilla promise. Search the Solitude coast for a shipwreck letter that reveals Rune's parents and his uncle Gallus. If you later meet Gallus's spirit, you can tell Rune for a second reward.
mods:
  - name: Revealing Rune
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/120935
    version: 1.1.0.0
plugins: [Revealing Rune.esp]
quests: [Rune's Scope]
locations: [Thieves Guild (Riften), Solitude coast (shipwreck)]
region: Riften (Thieves Guild) and the coast near Solitude
start: In the Thieves Guild, ask Rune how he got his unusual name and agree to look into his past.
related: [vanilla-changes/thieves-guild.md, mod-added/unmasking-sybille.md, areas/haafingar-and-solitude.md]
sources: [1, 2, 3, 4]
confidence: high
updated: 2026-10-02
---

# Revealing Rune (Rune's Scope)

In vanilla, Rune of the Thieves Guild tells you he was found shipwrecked with only rune-carved stones in his pocket, and you can promise to look into it, but nothing comes of it. Revealing Rune lets you actually find out [1]. It adds one small miscellaneous quest, **Rune's Scope**, with voiced dialogue spliced from vanilla lines [1][2].

## Starting in LoreRim
- Talk to **Rune** in the Thieves Guild. Ask "How did you get your unusual name?", then "So who gave you the name?", then agree with "I'll see what I can find out about your past." [1][2]
- LoreRim's New Quests page lists it with no extra gate [3].
- No new game is needed, and you don't have to be Guild Master [1].

## Quests
### Rune's Scope
- **Giver / trigger:** Rune (Thieves Guild, Riften) [1][2].
- **Steps (plugin objectives):** 1. "Search along the coast of Solitude for a clue to Rune's past". 2. "Return to Rune" [2].
- **The clue:** a **Drenched Note** from Rune's mother, found in a shipwreck along the Solitude coast. It mentions the family's "protection stones" and tells him to "seek out my brother **Gallus** in Riften." [2]
- **Ending:** hand the letter to Rune ("I found this in a shipwreck along the coast of Solitude. (Give letter)"). You can tell him "Looks like Gallus was your uncle. You're a born thief." or point out "That wasn't easy to get, you know." He gives you a reward from the vanilla favor jewelry list (`FavorRewardJewelry`) [2].
- **Follow-up:** after the quest, if you have met Gallus's spirit at the Twilight Sepulcher, you can say "I met Gallus." / "I met his spirit at the Twilight Sepulcher." Rune gives you a potion from the favor reward list (`FavorRewardPotion`) "as a token my friendship" [2]. The Twilight Sepulcher and Nightingale content belong to the vanilla Thieves Guild quest *Darkness Returns* [4].
- **Choices & outcomes:** the quest can fail (stage 40 "Fail") [2].

## Rewards & notable items
- The mod page says helping Rune builds your relationship with him, "maybe even marry him!" The quest script references the vanilla `PotentialMarriageFaction` and `JobTrainerSpeechcraftFaction`, which suggests Rune can become marriageable (and possibly a trainer) after the quest. Not confirmed in game (medium) [1][2].

## Related
- [vanilla-changes/thieves-guild.md](../vanilla-changes/thieves-guild.md)
- [mod-added/unmasking-sybille.md](unmasking-sybille.md): same author's other vanilla-character quest
- [areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | concept, start, marriage mention | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/120935) via meta.ini cache | 2024-06-06 (nexusLastModified) | 2026-01-11 cache |
| 2 | quest name, objectives, dialogue, Drenched Note text, rewards (`FavorRewardJewelry`, `FavorRewardPotion`), script factions | LoreRim install: `Revealing Rune.esp` records; FormIDs resolved in `Skyrim.esm` | mod v1.1.0.0 | 2026-10-02 |
| 3 | LoreRim listing | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 4 | Twilight Sepulcher = Darkness Returns | imports/official-quests.json (`TG09` "Darkness Returns") | n/a | 2026-10-02 |
