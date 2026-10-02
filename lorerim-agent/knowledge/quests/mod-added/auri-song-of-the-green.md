---
id: auri-song-of-the-green
title: Auri — Song of the Green
kind: mod-added
category: follower-quests
summary: Song of the Green adds Auri, a fully voiced Bosmer archer follower found at Auri's Pod in Falkreath Hold, with an approval system, a mini-quest ("Song of the Green") that tours five natural landmarks, and a romance path that unlocks after it.
mods:
  - name: Song of the Green (Auri Follower)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/11278
    version: 2.2.0.0
  - name: Song of the Green (Auri Follower) - VIGILANT
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/11278
    version: 0.2.0.0
  - name: Song of the Green (Auri Follower) - Inigo Banter
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/101336
    version: 1.0.0.0
  - name: Snazzy Items for Auri (Song of the Green)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/57195
    version: 2.0.0.0
  - name: Auri's Unique Pod - Song of the Green Addon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/128016
    version: 1.0.0.0
  - name: (ESL) Pure Auri Replacer - Song of the Green
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/163620
    version: f1.01
  - name: "FDE banter patches: Follower Dialogue Expansion - Aela the Huntress - Auri / Brelyna Maryon - Auri / Jenassa - Auri"
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/114801
    version: 5.0.0.0 / 1.0.0.0 / 2.0.0.0
plugins: [018Auri.esp, 018AuriVIGILANTpatch.esp, 018InigoBanterPatch.esp, Snazzy_Auri_Items.esp, Auri's House - Unique Bark.esp, Pure Auri Replacer.esp, FDE Aela Auri.esp, FDE Brelyna Auri.esp, FDE Jenassa Auri.esp]
quests: [Song of the Green]
locations: [Auri's Pod, Moss Mother Cavern, Eldergleam Sanctuary, Ancestor Glade, Bloated Man's Grotto, Shadowgreen Cavern]
region: Falkreath Hold (Auri's Pod); quest stops are vanilla caves/groves across Skyrim
start: Find Auri at Auri's Pod in Falkreath Hold (map marker) and recruit her. Talk to her about Bosmer culture to open the friendship path; "Song of the Green" (Auri is homesick) then becomes available via her dialogue. No LoreRim-specific gate.
related: [mod-added/follower-dialogue-expansions.md, mod-added/inigo.md, mod-added/vigilant.md, areas/falkreath-hold.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: medium
updated: 2026-10-02
---

# Auri — Song of the Green

Song of the Green is a fully voiced follower and quest mod centred on Bosmer culture: Auri, a traditionalist Wood Elf archer, has over 1,000 voiced lines, a simple approval system, scenes with vanilla NPCs, banter with other custom voiced followers, a mini-quest, her own mount (Thistlefoot) and a romance independent of vanilla marriage [2]. The LoreRim official site lists Auri among its featured followers [3]. LoreRim adds patches for VIGILANT commentary, Inigo banter, FDE banter, item visuals, a face replacer and a Requiem stats patch [1][5][6].

## Starting in LoreRim
- **Where:** in Falkreath Hold — "Look for Auri's Pod on your map" (same wording on the mod page and the LoreRim site) [2][3].
- **Friendship path:** expressing interest in Bosmer culture and Auri herself makes her open up; the Bosmer-culture conversations set her friendship to "Friendship path started" (choosing hostile options — e.g. accusing her of being a Thalmor spy — puts her on an "Enemy" path) [2][4].
- **Song of the Green** is a start-game-enabled quest record whose objectives are revealed through Auri's dialogue once she is homesick; the exact dialogue condition was not decoded [1][4].
- Some conversations only appear at night by a campfire (e.g. the camp by Evergreen Grove) [2].
- No LoreRim site gate, delayed start, or level requirement found [3].

## Quests
### Song of the Green
- **Giver / trigger:** Auri, when she is homesick — "Perhaps taking her to the most beautiful places in Skyrim might relieve her longing?" [1]
- **Steps** [1]:
  1. Take Auri to Moss Mother Cavern.
  2. Take Auri to Eldergleam Sanctuary.
  3. Take Auri to Ancestor Glade.
  4. Take Auri to Bloated Man's Grotto.
  5. Take Auri to Shadowgreen Cavern.
  6. Follow Auri.
  7. Talk to Auri.
- **Outcome:** "Auri opened up to me about why she came to Skyrim. I feel like we've gotten closer." [1] Finishing sets her friendship to "Friend" and starts the romance quest (internal `018AuriRomance`, stage 1) [4]; it also unlocks more idle commentary and conversations [2].
- **Notes:** a scene plays the song "Song of the Green" (the author also wrote "Dreams of Valenwood") [2][4].

### Romance (no journal quest name)
- After the friend quest, a series of flirt conversations moves her to "Romance path started" and finally "Romanced"; a break-up option returns her to "Friend" [4]. The internal quest has no player-facing journal entries in the plugin [1]. The author will not add vanilla marriage [2].

## Locations
- **Auri's Pod** — Auri's home in Falkreath Hold, marked on the map [2][3]; "Auri's Unique Pod" changes its exterior bark texture to match the interior [5].
- Quest stops (all vanilla locations): Moss Mother Cavern, Eldergleam Sanctuary, Ancestor Glade, Bloated Man's Grotto, Shadowgreen Cavern [1].

## Rewards & notable items
- Unique items given new models by Snazzy Items for Auri: Jagga and Auri's books ("A Bosmeri Sleeping Song", "The Spinners of Y'ffre", "The Ooze: A Fable", "The Wilderking Legend", "The Green Pact and the Dominion", "The Eldest: A Pilgrim's tale.", "War Customs of the Tribal Bosmer") [5].
- Auri uses bone arrows; she can buy 20 at the Drunken Huntsman, or craft them at a tanning rack [2].

## LoreRim notes
- **Requiem patch:** LoreRim's xEdit output contains "Auri Patch.esp" (masters 018Auri.esp, Pure Auri Replacer.esp and the Requiem plugins) that overrides only Auri's NPC record — presumably Requiem stats plus the replacer face; the field-level changes were not diffed [6].
- **Gear:** Auri has two inventories — give usable gear via "Let's talk about traveling together" → "Let me check your gear." If she punches dragons she is out of arrows [2].
- **Mount:** Thistlefoot only appears if you have a horse and "may sometimes appear where he shouldn't" [2]. LoreRim also installs "Auri's Mount Thistlefoot Texture Fix" [6].
- **Other patches shipped:** VIGILANT commentary (`018AuriVIGILANTpatch.esp`, "Auri Vigilant commentary") [1]; ESL Inigo banter [5]; FDE Aela/Brelyna/Jenassa ↔ Auri banter plugins and an "FDE Mjoll Auri patch" [6]; Pure Auri Replacer (new face, High Poly Head) [5]; and further LoreRim-installed add-ons "Auri Reacts To Your Music" (v1.76) and "Auri - Wintersun Patch", plus Lux / Lux Orbis / Nature of the Wild Lands / Riften Docks / occlusion compatibility plugins [6].

## Related
- [Follower Dialogue Expansions](follower-dialogue-expansions.md) · [Inigo](inigo.md) · [VIGILANT](vigilant.md) · [Falkreath Hold](../areas/falkreath-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Quest name, objectives, journal; VIGILANT commentary record | LoreRim install: `018Auri.esp`, `018AuriVIGILANTpatch.esp` QUST records (profile Default) | mod v2.2.0.0 / 0.2.0.0 | 2026-10-02 |
| 2 | Features, location, FAQ, known issues | [Nexus page 11278](https://www.nexusmods.com/skyrimspecialedition/mods/11278) via meta.ini cache | 2025-11-27 (nexusLastModified) | 2026-01-11 cache |
| 3 | LoreRim's listing and location of Auri | [LoreRim site — Followers](https://www.lorerim.com/guides/world/followers) | n/a | 2026-10-02 |
| 4 | Friendship/romance state machine; quest completion effects | LoreRim install: `Song of the Green (Auri Follower)/Scripts/A18_AuriFriendQuestFunctions.psc`, `A18_AuriRomanceFunctions.psc`, `A18_AuriBosmerCultureFunctions.psc` | mod v2.2.0.0 | 2026-10-02 |
| 5 | Add-on contents (Snazzy items, pod, replacer, Inigo banter) | Nexus pages [57195](https://www.nexusmods.com/skyrimspecialedition/mods/57195), [128016](https://www.nexusmods.com/skyrimspecialedition/mods/128016), [163620](https://www.nexusmods.com/skyrimspecialedition/mods/163620), [101336](https://www.nexusmods.com/skyrimspecialedition/mods/101336) via meta.ini cache | caches 2026-01 → 2026-07 | 2026-10-02 |
| 6 | LoreRim "Auri Patch.esp" (NPC override), extra installed Auri add-ons/patches | LoreRim install: `LoreRim - xEdit64 Output/Auri Patch.esp` record dump; `modlist.txt`/`plugins.txt`; plugin master scan | n/a | 2026-10-02 |
