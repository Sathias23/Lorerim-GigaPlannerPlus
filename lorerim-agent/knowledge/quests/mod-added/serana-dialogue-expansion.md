---
id: serana-dialogue-expansion
title: Serana Dialogue Expansion (incl. Romance add-on)
kind: mod-added
category: follower-quests
summary: LoreRim ships Serana Dialogue Expansion (SDE) plus its Romance add-on — new AI-voiced Serana commentary across the Main Quest, Dawnguard and Dragonborn, one book-fetch side quest ("From Arena to Oblivion"), and a five-quest Serana romance arc ("The Bleeding Flower" → "Ambivalence").
mods:
  - name: Serana Dialogue Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/121920
    version: 1.2.22.0
  - name: Serana Dialogue Expansion - Romance ESL
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/121920
    version: 1.0.21.0
plugins: [SeranaDialogueExpansion.esp, SeranaDialogueExpansion - Romance.esp]
quests: [From Arena to Oblivion, The Bleeding Flower, Solitude in Company, At the Tempo of our Heartbeats, Mirrors of Youth, Ambivalence]
locations: []
region: Skyrim-wide (College of Winterhold, Solitude, Whiterun, Castle Volkihar)
start: Serana must be your follower (Dawnguard). "From Arena to Oblivion" unlocks after completing both "Beyond Death" (Dawnguard) and "Alduin's Wall" (main quest) — ask Serana via dialogue. Romance quests are triggered through Serana dialogue during/after the Dawnguard questline. No LoreRim-specific gate found.
related: [vanilla-changes/dawnguard.md, vanilla-changes/main-quest-and-alternate-start.md, mod-added/follower-dialogue-expansions.md, mod-added/seeking-the-cure.md]
sources: [1, 2, 3, 4, 5]
confidence: medium
updated: 2026-10-02
---

# Serana Dialogue Expansion (incl. Romance add-on)

Serana Dialogue Expansion (SDE) adds new, AI-voiced dialogue for Serana that makes her react to the Skyrim main quest, the Dawnguard questline and the Dragonborn questline, plus interactions with some vanilla followers (Meeko, Mjoll, J'zargo, Erandur, Erik the Slayer, Frea, Teldryn Sero) [3]. It adds one side quest, "From Arena to Oblivion" [1]. LoreRim also ships the separate Romance add-on, which adds a five-quest romance arc with Serana [2][5]. The LoreRim official site states LoreRim uses Serana Dialogue Expansion ("not to be confused with SDA") because it keeps Serana's original voice actress rather than revoicing her [4].

## Starting in LoreRim
- Recruit Serana through vanilla Dawnguard (she is found in Dimhollow Crypt during "Awakening"); SDE does not edit Serana as an NPC — only adds dialogue [3].
- **From Arena to Oblivion** becomes available once you have completed **both** "Beyond Death" and "Alduin's Wall"; you then get a new dialogue option with Serana [3] (author-stated; not independently verified against the plugin's dialogue conditions). The quest record is start-game-enabled in the plugin (it is waiting, not auto-started) [1].
- **Romance quests**: the plugin records do not expose trigger conditions. From the journal text, "The Bleeding Flower" happens while you travel with Serana before reaching her home (Castle Volkihar) [2], and "Mirrors of Youth" fires before visiting the Ancestor Glade to learn the location of Auriel's Bow (i.e. after gathering the Elder Scrolls) [2][3]. The author says to install the romance before starting "Bloodline" — LoreRim ships it from the start, so this is satisfied on a new game [3][5].
- No LoreRim site gate, delayed start, or LoreRim patch touching these plugins was found [4][5].

## Quests
### From Arena to Oblivion
- **Giver / trigger:** Serana (dialogue) after "Beyond Death" + "Alduin's Wall" [3].
- **Where:** College of Winterhold (Urag-gro-Shub at the Arcanaeum can sell the books) [1][3].
- **Steps** [1]:
  1. Ask Urag-gro-Shub for books.
  2. Find "A Brief History of the Empire V.4" and give it to Serana.
  3. Find "Where were you when the Dragon Broke?" and give it to Serana.
  4. Find "The Battle of the Red Mountain" and give it to Serana.
  5. Find "The Oblivion Crisis" and give it to Serana.
  6. Talk to Serana.
- **Rewards:** skill increases in Serana's specialties (Sneak, Light Armor, Conjuration, One-Handed), an enchanted ring, and Serana's relationship rank set to Ally [3]. (How LoreRim's skill/Requiem systems treat the skill increases is unverified.)
- **Note:** the author warns that with the vanilla Brand-Shei jail bug you cannot buy his copy of the book; USSEP is said to fix it [3].

### The Bleeding Flower (romance 1)
- **Trigger:** Serana tells you she hasn't fed in years and asks to feed on you while you sleep [2].
- **Steps** [2]: 1. Find a place to sleep (tavern recommended). 2. Talk to Serana.
- **Outcomes:** you sleep, have a strange dream, and Serana reports she is in top condition; if you reach her home before sleeping she reprimands you (alternate stage 250) [2].
- **Known issue:** with "Go to Bed" the quest may not advance on sleep (rare) [3].

### Solitude in Company (romance 2)
- **Trigger:** Serana wants to explore Solitude; you offer to guide her [2].
- **Steps** [2]: 1. Take Serana to Solitude. 2. Take her to the Solitude Windmill. 3. Take her to the Bards College. 4. Visit Taarie in the Radiant Raiment. 5. Find a job for Serana (Jarl Elisif in the Blue Palace). 6. Find the thief and retrieve Torygg's scroll (Kilkreath Temple — a corrupt Solitude Guard with two bandits). 7. Talk to Serana. 8. Return to Jarl Elisif. 9. Meet up with Taarie in the Radiant Raiment. 10. Talk to Serana outside the shop.
- **Rewards:** Elisif pays 500 septims each; Serana buys the circlet she wanted [2].
- **Known issue:** "Become High King of Skyrim" breaks Elisif's part (stuck at stage 35) — not reported as shipped in LoreRim [3].

### At the Tempo of our Heartbeats (romance 3)
- **Trigger:** you try to take Serana dancing and make her uncomfortable [2].
- **Steps** [2]: 1. Talk to Serana tomorrow. 2. Talk to Serana. 3. Take Serana to the Castle Courtyard (Castle Volkihar). 4. Talk to Serana.
- **Outcome:** you dance together in the courtyard [2].

### Mirrors of Youth (romance 4)
- **Trigger:** before going to the Ancestor Glade to learn the location of Auriel's Bow, Serana suggests buying potions in Whiterun [2].
- **Steps** [2]: 1. Talk to Arcadia. 2. Bring Serana up to speed. 3. Ask around about Braith. 4. Ask Mila Valentia about Braith. 5. Find Braith (Cloud District, outside Dragonsreach). 6. Let Serana handle it. 7. Return the potion to Arcadia.
- **Outcome / reward:** Serana helps Braith with her crush (Lars); Arcadia gives a potion discount [2].
- **Troubleshooting:** if it never starts (usually when installed after gathering the Elder Scrolls), the author's fix is `SetStage SDE_R004 5` [3].

### Ambivalence (romance 5)
- **Trigger:** you confess your feelings to Serana [2].
- **Steps** [2]: 1. Ask Fralia Grey-Mane (spelling as in the plugin) to craft you a ring for Serana. 2. Wait for Fralia to have the ring ready (about a day). 3. Pick up the ring. 4. Give the ring to Serana in Castle Volkihar's Courtyard.
- **Outcome:** Serana accepts the ring and kisses you, but says she is not yet ready for a relationship [2].

## Rewards & notable items
- Enchanted ring and skill increases (From Arena to Oblivion) [3]; circlet for Serana (Solitude in Company) — she can be asked to remove it via dialogue [3]; Arcadia's potion discount (Mirrors of Youth) [2].

## LoreRim notes
- Both plugins are enabled in LoreRim's Default profile; no LoreRim patch masters either plugin [5].
- The Nexus description is cached only in the Romance folder's meta.ini (same Nexus page, modid 121920) [3].
- Helper records (not journal quests) add scene/commentary hooks for main-quest, Dawnguard and Dragonborn moments (e.g. "Serana and Paarturnax", "With Serana in Skuldafn", "Serana's Warning about Mora") and a "Serana Map Marker" tracking objective [1].
- The author says SDE should be installed before meeting Serana; mid-game installation can cause bugs [3].
- The author lists Serana Dialogue Edit / Serana Dialogue Add-on as narratively conflicting; LoreRim site confirms it uses SDE, not SDA [3][4].

## Related
- [Dawnguard changes](../vanilla-changes/dawnguard.md)
- [Main quest changes](../vanilla-changes/main-quest-and-alternate-start.md)
- [Follower Dialogue Expansions (FDE)](follower-dialogue-expansions.md)
- [Seeking the Cure](seeking-the-cure.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | From Arena to Oblivion name, objectives, journal; helper records | LoreRim install: `SeranaDialogueExpansion.esp` QUST records (profile Default) | mod v1.2.22.0 | 2026-10-02 |
| 2 | Romance quest names, objectives, journal text | LoreRim install: `SeranaDialogueExpansion - Romance.esp` QUST records | mod v1.0.21.0 | 2026-10-02 |
| 3 | Features, unlock conditions, rewards, known issues | [Nexus page 121920](https://www.nexusmods.com/skyrimspecialedition/mods/121920) via meta.ini cache (Romance ESL folder) | 2026-01-28 (nexusLastModified) | 2026-01-28 cache |
| 4 | LoreRim uses SDE, keeps original VA | [LoreRim site — Followers](https://www.lorerim.com/guides/world/followers) | n/a | 2026-10-02 |
| 5 | Both plugins enabled; no LoreRim patch masters them | LoreRim install: `profiles/Default/plugins.txt`, `modlist.txt`; plugin master scan of `mods/` | n/a | 2026-10-02 |
