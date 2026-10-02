---
id: seeking-the-cure
title: Seeking A Cure (Seeking The Cure, A Forlorn Hope, Serana Cure Quest Plus)
kind: mod-added
category: quest-expansion
summary: In LoreRim, Falion's vampirism cure ("Seeking A Cure", the reworked vanilla "Rising at Dawn") always fails. A follow-up quest, "A Forlorn Hope", gives a slower real cure through daedric essence, the Aetherium Forge, Phinis Gestor and the Atronach Forge. Serana's own cure is a separate ritual with Falion, and hers succeeds.
mods:
  - name: Seeking The Cure - A Rising At Dawn Quest Overhaul - Incurable Vampirism
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/85923
    version: 1.0.0.0
  - name: Seeking the Cure - COTN Morthal Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/89174
    version: 1.0.0.0
  - name: A Forlorn Hope - an addon for Seeking The Cure
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/107939
    version: 1.0.0.0
  - name: SeranaCureQuestPlus
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/105091
    version: 1.0.0.0
plugins: [RisingAtDawnQuestOverhaul.esp, RADQO_COTN_Patch.esp, Forlorn Hope.esp, SeranaCureQuestPlus.esp]
quests: [Seeking A Cure, A Forlorn Hope, Serana's cure vampirism]
locations: [Morthal, Falion's House, College of Winterhold, Arcanaeum, Aetherium Forge, Atronach Forge]
region: Hjaalmarch (Morthal marshes); Winterhold (College)
start: "Seeking A Cure: as a vampire, read 'Undeath Undone' (a note to Urag falls out) or ask Urag gro-Shub at the College about a cure, or go straight to Falion's house in Morthal. A Forlorn Hope: after the ritual fails, with Falion still alive, a courier brings Falion's letter after your third level-up."
related: [mod-added/legends-of-aetherium.md, mod-added/serana-dialogue-expansion.md, vanilla-changes/dawnguard.md, vanilla-changes/side-quests-and-misc.md, mod-added/vigilant.md, areas/hjaalmarch-and-morthal.md, areas/winterhold.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
confidence: high
updated: 2026-10-02
---

# Seeking A Cure (Seeking The Cure, A Forlorn Hope, Serana Cure Quest Plus)

LoreRim replaces the vanilla quest that cures your vampirism ("Rising at Dawn", VC01) with **Seeking The Cure**. The quest record is renamed **Seeking A Cure**, can only be done once, and ends with Falion's ritual **failing** [1][2][4]. The LoreRim site describes it the same way: it "repurposes 'Rising At Dawn' into a non-repeatable, story-focused quest where Falion's ritual to cure your vampirism fails" [3]. A real cure is still possible through the follow-up quest **A Forlorn Hope** [5][6]. **SeranaCureQuestPlus** separately turns Serana's cure into a visible ritual at the same summoning circle [7][3].

## Starting in LoreRim
- **Seeking A Cure:** you must be a vampire. There are two ways in [1][2]:
  - **College route:** reading the book *Undeath Undone* drops a note to Urag that Falion wrote. Alternatively, ask Urag gro-Shub in the Arcanaeum for reading on a cure. Urag sends you to Falion in Morthal. The first objective is "Speak to Urag" [2].
  - **Direct route:** walk into Falion's house in Morthal. Falion recognises you as a vampire and confronts you in a scene [1][2].
- Innkeepers no longer pass on rumours about Falion the moment you turn [1].
- The journal warns more than once: "I should be careful not to be Blood-Starved when I return to him or he won't trust me enough to help" [2].
- **LoreRim ships the Cities of the North – Morthal patch**, which moves the quest's trigger into Falion's COTN interior. If the quest does not start when you enter his house as a vampire, walk around a little and let Falion talk to you first [4]. The patch "cannot be added to an existing game" [4].
- In LoreRim's load order, `RADQO_COTN_Patch.esp` is the last plugin to override VC01 (Seeking The Cure loads after USSEP), so its version of the quest is the one in effect [8][9].
- **A Forlorn Hope** starts from a courier letter, "A Letter From Falion". It arrives after you go through the ritual, it fails, and you level up three more times. Falion must be alive [5][6]. The plugin's `OK_FH_Counter` global starts at 2, and the counter quest decrements it on each run before starting the quest, so the letter comes on the third run [6].
- **Serana's cure** starts as in vanilla: after the Dawnguard questline, ask Serana "Have you thought about getting cured of vampirism?" [7].

## Quests
### Seeking A Cure (VC01, overhauled "Rising at Dawn")
- **Giver / trigger:** Urag gro-Shub (College of Winterhold) or Falion (Morthal) [2].
- **Where:** College of Winterhold, then Falion's house in Morthal, then the summoning circle in the marsh outside Morthal [1][2].
- **Steps** (objectives from the plugin) [2]:
  1. Speak to Urag (College route only).
  2. Speak to Falion.
  3. Wait three days while Falion gets ready. He needs three days of research first [1].
  4. Speak to Falion.
  5. Bring a filled Black Soul Gem to Falion. **Falion no longer sells one**, and no quest marker shows you where to find one [1][2].
  6. Meet Falion at dawn at the summoning circle.
  7. Speak to Falion → Stand in the center of the circle → Enact the ritual with Falion.
  8. Speak to Falion. Optionally: Kill Falion.
- **Choices & outcomes:** the ritual always fails. The journal reads: "Falion in Morthal attempted to cure me of vampirism, but the ritual failed. I must find a different means of curing myself." [2]. Falion suggests the Cult of Molag Bal, or living with the curse [2]. You can then kill Falion ("he knew too much"), which is aimed at evil characters [1][2]. Killing him also locks you out of A Forlorn Hope, because that quest needs Falion alive [5].
- **Debug:** Falion carries an "Experimental Potion" that cures vampirism. The author describes it as a non-diegetic debug fallback [1][2].

### A Forlorn Hope (`OK_FH_Quest`)
- **Giver / trigger:** a courier delivers "A Letter From Falion" [5][6].
- **Where:** the Aetherium Forge, then the College of Winterhold (Phinis Gestor), then the Atronach Forge beneath the College [5][6].
- **Steps** (objectives and journal from the plugin) [5]:
  1. Find a way to create daedric essence. Falion's letter explains that daedric essence can probably be extracted from a **Daedric artifact** using the **Aetherium Forge**. A book about the Aetherium wars, found in the library of the College of Winterhold or at the Bards College, tells you where to start looking [5][6].
  2. Bring the essence to Phinis Gestor at the College of Winterhold.
  3. Wait until Phinis contacts you. He sends a second courier letter, "A Letter From Phinis" [5][6].
  4. Create a potion to remove vampirism. Phinis tells you to use the **Atronach Forge** under the College and to sacrifice **a pile of vampire dust and another daedric essence** [6].
  5. Journal: "I have created a potion. Should I drink it?" The potion is "A Potion to Remove Vampirism" [5][6].
- **Notes:** the cure needs FormList Manipulator, which LoreRim ships and which the mod uses to add the recipe to the Atronach Forge (`Forlorn Hope_FLM.ini`) [5][6]. This file does not record the exact Aetherium Forge recipe for daedric essence (unverified).

### Serana's cure vampirism (`DLC1SeranaCureSelfQuest`, SeranaCureQuestPlus)
- **Giver / trigger:** Serana, after the Dawnguard story, using the vanilla dialogue [7].
- **Steps** (objectives from the plugin) [7]: Follow Serana → See how Serana is doing → Talk to Serana. Serana goes to Falion in Morthal and stays about two days, then performs the ritual at the summoning circle in the swamp while you watch. If you are not there, the ritual completes after a day anyway [7].
- **Outcome:** Serana is cured ("All clean. I feel like I can breathe again…") [7]. The Seeking The Cure author confirms that Serana can still be cured [1].

## Locations
- **Falion's House (Morthal)**: LoreRim uses the Cities of the North – Morthal interior [4].
- **Summoning circle in the marsh outside Morthal**: Seeking The Cure adds a light source and a trigger box [1].
- **College of Winterhold, Arcanaeum and Atronach Forge**: Urag's dialogue, Phinis Gestor, and where you craft the potion [2][6].
- **Aetherium Forge**: a vanilla Dwemer forge. In vanilla you reach it through the Ruins of Bthalft during *Lost to the Ages* [10]. LoreRim also ships mods that touch it (see LoreRim notes).

## Rewards & notable items
- *Undeath Undone*, the "Note to Urag", and *Institutionalized Vampirism* by Claudio Marcellus, all lore texts added by Seeking The Cure [2].
- "Experimental Potion": a debug cure in Falion's inventory [1][2].
- Daedric Essence; A Potion to Remove Vampirism (A Forlorn Hope) [5][6].

## LoreRim notes
- Every plugin here is enabled in all three LoreRim profiles (Default, Extreme, Ultra) [8].
- **Falion's stats change:** Seeking The Cure removes his base-actor essential flag (the quest sets it instead), buffs his health and magicka, and gives him combat spells. This overrides USSEP's changes to Falion [1].
- LoreRim delays the Dawnguard recruiter (Sensible Quest Prerequisites) until *Laid to Rest* is complete. You can still start Dawnguard early by going straight to Dayspring Canyon. That affects when Serana's cure can come up [3]. *Verifier note (2026-10-02): an earlier draft said Dawnguard itself is gated behind Laid to Rest. The LoreRim site gates only the recruiter approach.*
- LoreRim also adds an "Aetherium Forge" option to "Convert artifacts to perk points" through `LoreRim Artifact Sacrifice.esp` (in the mod *LoreRim - MCM and INI Settings*) [8]. Its interaction with A Forlorn Hope's artifact step is unverified.
- The Forlorn Hope Nexus page mentions optional patches that make Serana's and Carcette's cure dialogue require the potion. No such patch plugin is in the LoreRim install [5][8].

## Related
- [legends-of-aetherium.md](legends-of-aetherium.md): Aetherium content in LoreRim
- [serana-dialogue-expansion.md](serana-dialogue-expansion.md)
- [../vanilla-changes/dawnguard.md](../vanilla-changes/dawnguard.md)
- [../areas/hjaalmarch-and-morthal.md](../areas/hjaalmarch-and-morthal.md), [../areas/winterhold.md](../areas/winterhold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, start routes, Falion edits, COTN incompatibility | [Nexus mod page 85923](https://www.nexusmods.com/skyrimspecialedition/mods/85923) via meta.ini cache | n/a (cache refreshed 2026-01-11) | 2026-10-02 |
| 2 | quest name "Seeking A Cure", objectives, journal, dialogue, books | LoreRim install: `RisingAtDawnQuestOverhaul.esp` QUST/DIAL/BOOK strings | mod v1.0.0.0 | 2026-10-02 |
| 3 | LoreRim description; Dawnguard gate | [LoreRim site — Main quests](https://www.lorerim.com/guides/quests/main) | n/a | 2026-10-02 |
| 4 | COTN patch behaviour | [Nexus mod page 89174](https://www.nexusmods.com/skyrimspecialedition/mods/89174) via meta.ini cache; `RADQO_COTN_Patch.esp` | n/a (cache refreshed 2026-01-11) | 2026-10-02 |
| 5 | A Forlorn Hope objectives, journal, start, FLM requirement | LoreRim install: `Forlorn Hope.esp` QUST records + [Nexus 107939](https://www.nexusmods.com/skyrimspecialedition/mods/107939) via meta.ini cache | mod v1.0.0.0 | 2026-10-02 |
| 6 | letters' text, items, Atronach Forge recipe hook, quest scripts | LoreRim install: `Forlorn Hope.esp` strings, `Forlorn Hope_FLM.ini`, `Source/Scripts/*.psc` | mod v1.0.0.0 | 2026-10-02 |
| 7 | Serana ritual, start, objectives | LoreRim install: `SeranaCureQuestPlus.esp` strings + [Nexus 105091](https://www.nexusmods.com/skyrimspecialedition/mods/105091) via meta.ini cache | mod v1.0.0.0 | 2026-10-02 |
| 8 | plugins enabled in profiles; Artifact Sacrifice strings; absence of Serana/Carcette patches | LoreRim install: `profiles/*/plugins.txt`; `LoreRim - MCM and INI Settings/LoreRim Artifact Sacrifice.esp` | n/a | 2026-10-02 |
| 9 | VC01 override chain | imports/vanilla-quest-overrides.json (derived from install) | n/a | 2026-10-02 |
| 10 | Aetherium Forge vanilla access | [UESP — Lost to the Ages / The Aetherium Forge](https://en.uesp.net/wiki/Skyrim:Lost_to_the_Ages) (search result summary) | n/a | 2026-10-02 |
