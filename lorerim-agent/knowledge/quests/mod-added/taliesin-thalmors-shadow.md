---
id: taliesin-thalmors-shadow
title: The Thalmor's Shadow — Taliesin
kind: mod-added
category: follower-quests
summary: Adds Taliesin, a custom-voiced (Pat Mahoney) ex-Thalmor follower. His intro quest "The Thalmor's Shadow" starts with rumors of a hidden statue of Talos near Lake Ilinalta in Falkreath Hold, where you find him wounded and choose to heal him (recruit) or let him die.
mods:
  - name: The Thalmor's Shadow - Taliesin (Custom Voiced Follower)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/93413
    version: f1.05
  - name: Aurea Umbra - SerketHetyt's Taliesin Overhaul
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/124589
    version: 1.0.0.0
plugins: [00Taliesin.esp, Aurea Umbra - SerketHetyt's Taliesin Overhaul.esp]
quests: [The Thalmor's Shadow]
locations: [00NaomiHoldingCell]
region: Falkreath Hold — hidden statue of Talos near Lake Ilinalta
start: Go to the hidden statue of Talos near Lake Ilinalta (Falkreath Hold; from the Guardian Stones follow the path up and take the right fork). The quest "The Thalmor's Shadow" starts at game start with the objective "Find the hidden Statue of Talos." No LoreRim-specific gate.
related: [mod-added/follower-dialogue-expansions.md, mod-added/storm-the-thalmor-embassy.md, areas/falkreath-hold.md, areas/new-landmarks-and-shrines.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: medium
updated: 2026-10-02
---

# The Thalmor's Shadow — Taliesin

The Thalmor's Shadow adds Taliesin, a custom-voiced Thalmor follower (voice actor Pat Mahoney): "A former member of the Thalmor wants a clean start, and only you can save him from his past life." [2] His recruitment quest, "The Thalmor's Shadow", is a short intro: you find the Thalmor party that raided a hidden Talos statue dead except for one wounded survivor using the alias "Taliesin" [1]. LoreRim pairs it with the "Aurea Umbra" visual overhaul and LoreRim-generated Requiem patches [1][5][6].

## Starting in LoreRim
- **Where:** "You can find him at a hidden statue of Talos near Lake Illinalta" (LoreRim site wording) [2]. A fan guide gives directions: start at the three Guardian Stones, follow the path up and take a right at the fork [3].
- **Trigger:** the quest record is start-game-enabled and opens with "I heard rumors about a statue of Talos hidden somewhere in the Falkreath area." [1]
- No LoreRim site gate, delayed start, or level requirement found [2].

## Quests
### The Thalmor's Shadow
- **Giver / trigger:** rumor (journal entry at stage 0) [1].
- **Where:** hidden statue of Talos, Falkreath area (near Lake Ilinalta) [1][2].
- **Steps** [1]:
  1. Find the hidden Statue of Talos.
  2. Talk to Taliesin.
  3. Give Taliesin a potion.
- **Choices & outcomes:** "I can either heal him as promised, or leave him to bleed to death." Healing him (a small potion is enough) makes him offer to travel with you as thanks; "his loyalty and true intentions have yet to surface" [1].
- **Rewards:** Taliesin as a follower [1].

### Later content (no further journal quests in the plugin)
- The plugin's other quest records are helper/dialogue systems with no journal text, including "Taliesin Main Quest" (`0TallyMQ`), companion/faction reactions (`VV_TallyCompanions`, `VV_TallyDarkBrotherHood`, `VV_TallyBardsCollege`), relationships (`VV_TallyRelationships`, `VV_TallyConfession`), a Sleeping Tree Sap topic, a Berwhale (his weapon) topic, questions and a summon function [1].
- The author's blog describes companion quest commentary, Dark Brotherhood interactions, personal quests, a barebones romance (complete "Diplomatic Immunity" and discuss his upbringing), and a locked cabin near Half-Moon Mill whose purpose is "to be revealed" (medium-low confidence: fetched through an AI page summary) [4].

## Locations
- **00NaomiHoldingCell** — an internal holding cell; Naomi is the name of Taliesin's horse record [1][6]. Not a player destination.

## Rewards & notable items
- Taliesin's gear records patched by LoreRim include Taliesin's Robes/Boots/Gloves, a black Dark Brotherhood-style "Taliesin's Armor" set, Wolf Armor/Boots/Gauntlets, **Berwhale the Avenger** (his weapon, with a tempering recipe), Skjor's Dagger and an Altmeri Calian [6]. NPCs in the patch: Taliesin, his horse Naomi, a horse "Peaches", Nelarel and Ophelia [6]. How each item is obtained was not verified.

## LoreRim notes
- **Requiem patch:** LoreRim's xEdit output includes "Taliesin Patches.esp" (masters 00Taliesin.esp, Aurea Umbra and the Requiem plugins) overriding Taliesin's NPC and gear records and the Valtheim Towers location record — presumably Requiem balancing; the individual field changes were not diffed [6].
- **Visuals:** Aurea Umbra (SerketHetyt) reworks his look toward "a seasoned Thalmor" with a custom hairstyle and custom Berwhale dagger; LoreRim ships v1.0.0.0 (Vanilla Body file) while the author lists v2.0 as current (updated 2026-03-12) [5][6].
- **Shrine compatibility:** LoreRim installs "Environs - The Shrines of Talos - Patch Collection", which includes a "Taliesin Patch" plugin for the Talos shrine he is found at [6].
- The installed mod has no cached Nexus description [6]; the live Nexus page returned HTTP 403 (writer's fetch, 2026-10-02).

## Related
- [Follower Dialogue Expansions](follower-dialogue-expansions.md) · [Storm the Thalmor Embassy](storm-the-thalmor-embassy.md)
- [Falkreath Hold](../areas/falkreath-hold.md) · [New landmarks and shrines](../areas/new-landmarks-and-shrines.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Quest name, objectives, journal text, helper records, location record | LoreRim install: `00Taliesin.esp` QUST/LCTN records (profile Default) | mod vf1.05 (nexusLastModified 2025-11-27) | 2026-10-02 |
| 2 | Description, VA, location wording | [LoreRim site — Followers](https://www.lorerim.com/guides/world/followers) | n/a | 2026-10-02 |
| 3 | Directions from the Guardian Stones | [dynamite124 Tumblr — "help I can't find Tally"](https://dynamite124.tumblr.com/post/720564298171269120/help-i-cant-find-tally) (mod author's blog) | 2023-06-19 | 2026-10-02 |
| 4 | Romance trigger, personal content, Half-Moon Mill cabin | [dynamite124 Tumblr — mod post](https://dynamite124.tumblr.com/post/778226830992883712/the-thalmors-shadow-taliesin-custom-voiced) | n/a (mentions March 2025 update) | 2026-10-02 |
| 5 | Aurea Umbra overhaul description and current version | [Nexus 124589](https://www.nexusmods.com/skyrimspecialedition/mods/124589) (search-result snippet) | 2024-07-22 / updated 2026-03-12 | 2026-10-02 |
| 6 | LoreRim "Taliesin Patches.esp" contents; Environs Taliesin patch; installed versions | LoreRim install: `LoreRim - xEdit64 Output/Taliesin Patches.esp` record dump; meta.ini; plugin master scan | n/a | 2026-10-02 |
