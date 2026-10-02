---
id: unmasking-sybille
title: Unmasking Sybille
kind: mod-added
category: new-quests
summary: A small, unmarked investigation in Solitude. Prove that court wizard Sybille Stentor is a vampire, then keep her secret, make her stop hunting, have her arrested through Falk Firebeard, or fight her. It adds no journal entries.
mods:
  - name: Unmasking Sybille
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/109265
    version: 1.2.0.0
  - name: Unmasking Sybille - Dialogue Tweak
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/163004
    version: 1.0.0.0
plugins: [Unmasking Sybille.esp]
quests: []
locations: [Blue Palace, Solitude jail]
region: Solitude (Haafingar)
start: There is no journal entry. Ask Melaran or Odar (Blue Palace, Solitude) about Sybille, or find evidence of her crimes around Solitude.
related: [areas/haafingar-and-solitude.md, mod-added/revealing-rune.md, vanilla-changes/side-quests-and-misc.md]
sources: [1, 2, 3, 4]
confidence: high
updated: 2026-10-02
---

# Unmasking Sybille

Unmasking Sybille adds a small **unmarked** quest: investigate Sybille Stentor, Solitude's court wizard, and decide what to do about her vampirism [1]. All dialogue is fully voiced using spliced vanilla lines [1]. The plugin's quest records have no journal or objective text, so nothing shows in the quest log. The controlling record is `UnmaskingSybille`, and its stage notes are "Player is told by Melaran and cook. Can confront Sybille or speak to Falk.", "Keep Sybille's secret", "Arrest" and "Fight Sybille" [2].

## Starting in LoreRim
- Talk to **Melaran** (the Blue Palace wizard) or **Odar** (the Blue Palace cook) about Sybille, or find evidence of her crimes around Solitude [1].
- LoreRim's New Quests page describes it with Odar's line ("Somethin' just ain't right about that Sybille…") and gives no extra gate [3].
- No new game is needed, and it works whatever your standing in Solitude [1].

## Quests
### Unmasking Sybille (unmarked; no journal title)
- **Leads:** Odar ("Is there a reason you don't trust Sybille?") says she never eats and tells you to "take a good look around". Melaran is reluctant to help, but you can persuade or intimidate him. He hints that "the headsman's axe may not be the worst way for a Solitude Jail prisoner to die." [2]
- **Evidence (two notes):** "Scribbled Note", carried by a **Drained Prisoner** in Solitude's jail ("The court wizard is a vampire…"). "Sybille's Note", found in her room (a letter addressed to "Sister Sybille") [2].
- **Confronting Sybille ("I know what you are."):**
  - "Don't worry, I'll keep your secret." She thanks you and gives you a **Diamond** [2].
  - "I won't tell anyone, but you need to stop hunting in Solitude." She agrees ("A risky game to play, friend.") [2].
  - "You'll pay for all the lives you've taken." She calls the guards on you as a trespasser [2].
  - Accusing her without proof only gets threats [2].
- **Reporting her:** Falk Firebeard wants proof. Show him either note ("I found this on a dead prisoner in the jail." / "I found this in her room."). An arrest scene follows: Falk, his housecarl and Bolgeir confront her, and she turns hostile ("Vampire! To arms!"). Falk then rewards you from the leveled vampire gem list (`LootVampireGems100`) [2].
- Elisif and Bolgeir brush off accusations made without proof [2].

## Rewards & notable items
- A Diamond from Sybille if you keep her secret, or a random gem from Falk if you expose her [2].
- The mod page says Sybille's attitude toward you depends on how you deal with her [1].

## LoreRim notes
- LoreRim also installs **Unmasking Sybille - Dialogue Tweak**. It ships a replacement `Unmasking Sybille.esp`, and its higher MO2 priority means it is the copy that loads. Once you've finished (kept her secret or killed her), the evidence and reporting topics stop appearing: "Sybille Stentor is a vampire." (Falk, Bolgeir, Elisif), "Can you provide evidence of Sybille's secret?" (Melaran) and "Is there a reason you don't trust Sybille?" (Odar) [4].
- Base actors are not edited, so conflicts should be rare [1].

## Related
- [areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md)
- [mod-added/revealing-rune.md](revealing-rune.md): another quest by the same author (TheOscar0) built from vanilla voice lines

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | start methods, features, compatibility | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/109265) via meta.ini cache | 2024-01-17 (nexusLastModified) | 2026-01-11 cache |
| 2 | dialogue topics, notes, rewards (Diamond `GemDiamond`; `LootVampireGems100`), quest stage notes | LoreRim install: `Unmasking Sybille.esp` (Dialogue Tweak copy) records; reward FormIDs resolved in `Skyrim.esm` | mod v1.2.0.0 + tweak 1.0.0.0 | 2026-10-02 |
| 3 | LoreRim listing | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 4 | Dialogue Tweak behavior, load priority | [Nexus page 163004](https://www.nexusmods.com/skyrimspecialedition/mods/163004) via meta.ini cache; profile Default modlist.txt | 2025-10-31 (nexusLastModified) | 2026-01-28 cache |
