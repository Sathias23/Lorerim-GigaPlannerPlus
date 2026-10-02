---
id: book-of-love-fastreds-awakening
title: The Book of Love — Fastred's Awakening
kind: mod-added
category: quest-expansion
summary: Adds an alternative branch to the vanilla Temple of Mara quest "The Book of Love" — instead of picking Bassianus or Klimmek, you invite Fastred of Ivarstead to adventure with you ("The Book of Love - Fastred's Choice"), which can end in romance and marriage, friendship as a follower, or her returning home.
mods:
  - name: The Book of Love - Fastred's Awakening
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/170043
    version: 1.0.2.0
plugins: [TT_FastredsAwakening.esp]
quests: [The Book of Love - Fastred's Choice]
locations: [Ivarstead, Temple of Mara]
region: The Rift (Ivarstead; Temple of Mara in Riften)
start: Start vanilla "The Book of Love" (Dinya Balu, Temple of Mara, Riften) and talk to Fastred in Ivarstead; after hearing her dilemma, talk to her again and suggest she come adventuring with you. The branch also auto-starts if you are already in The Book of Love but Fastred has not yet settled with a suitor. No LoreRim-specific gate.
related: [vanilla-changes/side-quests-and-misc.md, mod-added/follower-dialogue-expansions.md, areas/the-rift-and-riften.md]
sources: [1, 2, 3, 4, 5]
confidence: high
updated: 2026-10-02
---

# The Book of Love — Fastred's Awakening

A small, focused expansion of the vanilla quest "The Book of Love": it lets Fastred leave Ivarstead with you instead of choosing between Bassianus and Klimmek, with AI-voiced dialogue, four timed travel conversations and a romance or friendship outcome [2]. It runs in parallel with the vanilla quest, which you can still finish the vanilla way at any point [2][3]. It sits in LoreRim's "Quests - Vanilla Expansions" separator [1].

## Starting in LoreRim
- **Vanilla baseline:** "The Book of Love" (`t02`) begins with "Talk to Fastred", then "Talk to Fastred's parents", "Talk to Bassianus or Klimmek", "Return to Dinya Balu" [4].
- **Branch trigger:** after hearing Fastred's romantic crisis, don't go to her parents — talk to her again and suggest she come adventuring with you [2]. Mechanically, the branch quest starts when vanilla `t02` reaches stage 20 (first talk with Fastred), or immediately on load if that stage is already done and `t02` is below stage 30 [3].
- **Point of no return for the branch:** if vanilla `t02` reaches stage 30 (Fastred settled with a suitor) before the branch reaches stage 90, the branch jumps to stage 200 (she stays in Ivarstead) [3].
- **Warning:** once she joins, she won't act like a regular follower until her personal journey is complete [2].
- No LoreRim site mention, gate, or LoreRim patch was found [1][5].

## Quests
### The Book of Love - Fastred's Choice
- **Giver / trigger:** Fastred (Ivarstead), during vanilla "The Book of Love" [1][2].
- **Where:** Ivarstead → travel anywhere → Ivarstead → Temple of Mara, Riften [1].
- **Steps** [1]:
  1. Suggest an alternative to Fastred.
  2. Convince Fastred's parents (Jofthor asks you to keep her safe).
  3. Travel with Fastred — four conversations trigger after in-game hours of travel.
  4. Talk to Fastred (she confesses romantic feelings).
  5. Return to Ivarstead.
  6. Speak with Fastred about her future.
  7. Accompany Fastred while she tells her parents.
  8. Accompany Fastred while she tells Bassianus and Klimmek.
  9. Return to Dinya Balu (Temple of Mara, Riften).
- **Choices & outcomes** [1][2]:
  - **Romance:** accept her confession → permanent follower; marriage unlocked via the vanilla marriage system; Dinya Balu gives Mara's blessing to you both.
  - **Friendship:** turn her down → keep her as a follower, or send her back to the vanilla suitors (Dinya accepts she "found her own path").
  - **Stay:** Fastred decides to stay in Ivarstead (stage 200); you then help her resolve things with Bassianus and Klimmek (stage 300).
  - If she leaves: her mother supports her, her father lets her go; Bassianus leaves for Riften alone and Klimmek stays in Ivarstead [1].
- **Rewards:** Fastred as a follower (Farmer class); with SkyPatcher she levels with you [2]; you can then continue vanilla "The Book of Love" as normal [2].

## LoreRim notes
- **Timing:** the mod page says the default is 48 in-game hours of travel, adjustable in `SKSE\Plugins\TT_FastredsAwakening\config.json` [2]. LoreRim's install contains **no** such config file, so the script fallbacks apply: 6, 6, 12 and 24 in-game hours before the four travel conversations (48 h total) [3][5].
- **Vanilla overrides:** the plugin overrides four Ivarstead scene quests (`DialogueIvarsteadInnScene03`, `DialogueIvarsteadFellstarFarmScene01–03`) to block the parents-arguing and Bassianus/Velemir side scenes [1][2]; USSEP also touches `FellstarFarmScene02` [4].
- **Script dependencies:** the scripts call PapyrusUtil (`JsonUtil`) and powerofthree's Papyrus Extender (`PO3_Events_Form`) [3].
- **Known incompatibility:** Skyrim Vocal Diversity silences Jofthor's new lines [2]; whether LoreRim ships it was not checked.
- The author advises finishing the branch promptly once started and not finishing the quest the vanilla way after reaching the romance stage [2].

## Related
- [Side quests and misc (vanilla changes)](../vanilla-changes/side-quests-and-misc.md)
- [The Rift and Riften](../areas/the-rift-and-riften.md) · [Follower Dialogue Expansions](follower-dialogue-expansions.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Quest name, objectives, journal outcomes, overridden vanilla scenes, separator | LoreRim install: `TT_FastredsAwakening.esp` QUST records (profile Default) | mod v1.0.2.0 | 2026-10-02 |
| 2 | Features, start step, outcomes, config, compatibility | [Nexus page 170043](https://www.nexusmods.com/skyrimspecialedition/mods/170043) via meta.ini cache | 2026-01-19 (nexusLastModified) | 2026-01-25 cache |
| 3 | Start/abort logic, timing fallbacks, dependencies | LoreRim install: `Scripts/Source/TTFA_MainController.psc`, `TTFA_JourneyQuest.psc`, `TTFA_Utils.psc` | mod v1.0.2.0 | 2026-10-02 |
| 4 | Vanilla "The Book of Love" objectives; USSEP override | Official quest catalog (Skyrim.esm `t02`) and vanilla-quest override map | n/a | 2026-10-02 |
| 5 | No config.json shipped; no LoreRim site mention or LoreRim patch | LoreRim install: mod folder listing, plugin master scan; LoreRim site pages (imports) | n/a | 2026-10-02 |
