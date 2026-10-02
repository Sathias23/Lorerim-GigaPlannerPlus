---
id: sirenroot
title: "Sirenroot: Deluge of Deceit"
kind: mod-added
category: new-quests
summary: A voiced, dialogue-heavy puzzle and diving dungeon in Ayleid ruins under Lake Honrich near Riften, with several endings. Start it by speaking to Frissa Black-Briar at Elgrim's Elixirs in Riften. LoreRim adds no start gate.
mods:
  - name: SIRENROOT - Deluge of Deceit
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/70917
    version: 1.21.0.0
  - name: SIRENROOT - HD Texture Pack
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/70917
    version: 1.0.0.0
  - name: SIRENROOT CBBE 3BA and HIMBO Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/107792
    version: 1.0.0.0
  - name: Sirene Wispmother - A SIRENROOT Replacer
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/123252
    version: 1.0.0.0
plugins: [evgSIRENROOT.esm, evgSIRENROOTtraversalpatch.esp, SIRENROOT - HD Texture Pack.esp, Sirene Wispmother.esp, Lux - Sirenroot patch.esp]
quests: [Deluge of Deceit]
locations: [Elgrim's Elixirs, Honrich Lake Cave, Honrich Ruins, Honrich Atasel, Honrich Varlorsel, Honrich Welkeseli, Honrich Gordarseli, Honrich Buroseli, Honrich Gardens, Honrich Morbalseli, Honrich Aranseli]
region: The Rift, at Lake Honrich north of the Riften docks by Merryfair Farm
start: Speak to Frissa Black-Briar at Elgrim's Elixirs in Riften, or find the singing plant at the bottom of Lake Honrich. There are no level or quest prerequisites, and LoreRim adds none.
level_hint: "3-15 (narrative); enemies scale"
related: [areas/the-rift-and-riften.md, areas/new-dungeons.md]
sources: [1, 2, 3, 4, 5]
confidence: high
updated: 2026-10-02
---

# Sirenroot: Deluge of Deceit

Sirenroot is a "dialogue-heavy dungeon dive into Ayleid ruins with puzzles, platforming, and a focus on water mechanics" [3]. The Black-Briars hire you and a team of divers to harvest a singing plant at the bottom of Lake Honrich. The cave collapses and buries the team in Ayleid ruins below [3]. The author describes it as a 2–5 hour quest with multiple endings, about 1,000 voiced lines, and lead NPCs who "may live or die, according to the player's choices" [3]. Everything is a single quest, **Deluge of Deceit** [1].

## Starting in LoreRim
- Speak to **Frissa Black-Briar at Elgrim's Elixirs** in Riften [2][3]. The opening journal says the Black-Briars "sent out a notice for diving work to collect ingredients at the bottom of Lake Honrich" [1].
- **Alternative start:** find the singing plant at the bottom of Lake Honrich first (objective "Find the plant in the lake"). An alchemist in the city is suggested as the next lead [1].
- **No prerequisites:** "No level or quest requirements." Enemies scale with your level, and the story is "best suited to early (~level 3-15) adventurers" [3]. Enemies are drawn from the game's existing leveled lists, which in LoreRim means its Requiem-based lists. That last point is an inference [3].
- **LoreRim adds no gate.** The install has no delayed-start or Requiem patch for Sirenroot. The patches it ships are visual: HD textures, a body patch, the Wispmother replacer and a Lux lighting patch [4].
- **Preparation:** there are long underwater sections. Waterbreathing helps but is not required [3]. Followers are "bare bones" and may get lost [3].

## Quests
### Deluge of Deceit
- **Giver / trigger:** Frissa Black-Briar (`EVGSirenrootQuest`) [1].
- **Where:** Lake Honrich. The diving team waits north of the Riften docks by Merryfair Farm [1].
- **Steps (objective text):** [1]
  1. Accept the job from the Black-Briars. Meet with the diving team, then speak to Ingun's assistant (the Argonian) to start the job.
  2. Optional: speak to all four team members. Optional: give Yineel 1 Nordic Barnacle and 1 Histcarp.
  3. Investigate the cave. Uprooting the plant collapses the cavern. Find a way out.
  4. In the main hall, find the corresponding Varla Stone (a Topaz stone first). Optional: find Cayrice's Documents. Find a way onto the bridge. Placing Varla stones floods the **Atasel Hall** higher each time.
  5. Gather the team first, then accompany and loot with Peletius. Rest.
  6. A trance: a ghostly woman "who had ill intentions" appears. Speak to Yineel. Find Tilael. Solve the mirrored puzzle, then wait for Tilael to solve hers.
  7. Optional character routes: convince Cayrice to leave, help Peletius leave, convince Tilael to leave (go with Tilael to her Soul Gem), convince Yineel to leave.
  8. With all four Varla stones placed, a portal opens on the bridge. Beyond it lies "the resting place of the Ayleid haunting this place". Put it to rest, then escape the flooding halls.
  9. Return to Frissa Black-Briar, who "compensated me for the danger" [1].
- **Choices & outcomes:** each lead NPC (Cayrice Bentieve, Peletius Flonel, Tilael, Yineel "Primes-his-Poison") has a section with several ways to complete it. They live or die depending on your choices, and the others react [1][3]. The author sums up the choices as "Help, or refuse to help/ignore the problem." Skipping every character section is possible and changes the outcome [3]. The antagonist is **Larelleis**, "The Siren" [1][3].
- **Rewards:** Frissa's payment on completion [1]. Other reward items found in the plugin are listed below.

## Locations
- **Elgrim's Elixirs** (Riften): the mod places Frissa Black-Briar here [3].
- **Lake Honrich shore camp:** the diving team, north of the Riften docks by Merryfair Farm. Its quest objects are enabled only after the quest starts [1][3].
- **Honrich Lake Cave → Honrich Ruins:** the Ayleid ruin complex. Its named cells are Honrich Atasel (the flooding main hall), Varlorsel, Welkeseli, Gordarseli, Buroseli, Gardens, Morbalseli and Aranseli [1].

## Rewards & notable items
Defined in the plugin; how each is awarded is not documented in the sources read:
- **Siren's Coronet** (enchanted with **Siren's Harvested Souls**) and **Coronet of the Deep** [1].
- **Blessing of the Spring:** "Increases magic resist by 10% permanently." [1]
- **Clutches of the Siren** (debuff): "15% reduced magic resistance, 50% reduced magicka regeneration and 25% reduced stamina regeneration. You may see things that aren't truly there." [1]
- **Varla Stones** (Sapphire, Topaz, Amethyst, Ruby, Emerald, Citrine, Pearl, Prismatic) and Peletius' leaf necklaces are loot or quest items [1].
- A web search summary says the coronet spawns on a pedestal when Larelleis dies. That claim is unverified [5].

## LoreRim notes
- `evgSIRENROOTtraversalpatch.esp` ships. It edits cell Honrich Buroseli to use EVG Animated Traversal climbing [1].
- **Sirene Wispmother** gives Larelleis' wisp form a unique look ("she's an Ayleid rather than a Snow Elf") [4].
- **SIRENROOT CBBE 3BA and HIMBO Patch** adds BodySlide and mesh files [4]. The HD Texture Pack adds higher-resolution textures [4].
- **Mod page cautions:** Improved Camera's default INI conflicts with Sirenroot's camera scripting (set `bScripted=1`, `bThirdPerson=1`). Ambient light is "nearly pitch-black" by design. Do not uninstall the mod mid-save [3].

## Related
- [areas/the-rift-and-riften.md](../areas/the-rift-and-riften.md)
- [areas/new-dungeons.md](../areas/new-dungeons.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest name, objectives, journal, cells, NPCs, items, buff/debuff text | LoreRim install: `evgSIRENROOT.esm` / `evgSIRENROOTtraversalpatch.esp` records (profile Default) | mod v1.21.0.0 | 2026-10-02 |
| 2 | LoreRim start instruction | [LoreRim site — New Quests](https://www.lorerim.com/guides/quests/new-quests) | n/a | 2026-10-02 |
| 3 | premise, length, level, start, compatibility, cast | [Nexus mod page 70917](https://www.nexusmods.com/skyrimspecialedition/mods/70917) via meta.ini cache | 2024-09-17 (nexusLastModified) | 2026-01-11 cache |
| 4 | patches shipped and what they do | LoreRim install: meta.ini of SIRENROOT - HD Texture Pack, SIRENROOT CBBE 3BA and HIMBO Patch (Nexus 107792), Sirene Wispmother (Nexus 123252, 2025-02-20); profile plugins.txt | various | 2026-10-02 |
| 5 | coronet drop (unverified) | Web search result summary for "Sirenroot Deluge of Deceit ending reward Siren's Coronet" (source page not retrievable; Nexus 403) | n/a | 2026-10-02 |
