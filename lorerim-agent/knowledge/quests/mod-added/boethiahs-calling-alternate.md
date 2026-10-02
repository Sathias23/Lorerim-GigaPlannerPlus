---
id: boethiahs-calling-alternate
title: Boethiah's Calling - Alternate Questline (The Man in Black)
kind: mod-added
category: quest-expansion
summary: A voiced alternate route to the Ebony Mail. Rudin Filaro, a Dark Elf posing as a priest of Mara at the Braidwood Inn in Kynesgrove, tricks you into being sacrificed to Boethiah. You survive, track him to Knifepoint Ridge and kill him. Carrying the Ebony Mail with fewer than 5 murders later sends an assassin named Mia after you.
mods:
  - name: Boethiah's Calling - Alternate Questline
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/121499
    version: 2.3.0.0a
plugins: [BoethiahCalling_AlternativeQuest.esp, Great Village of Kynesgrove - Alt Boethiah's Calling patch.esp]
quests: [The Man in Black]
locations: [Braidwood Inn, Kynesgrove, Shrine of Boethiah, Knifepoint Ridge]
region: Eastmarch (Kynesgrove) to the Shrine of Boethiah and Knifepoint Ridge
start: Talk to Rudin Filaro at the Braidwood Inn in Kynesgrove. By default this is available at the same level as Boethiah's Calling, which LoreRim's Timing is Everything settings put at level 30.
level_hint: "30"
related: [vanilla-changes/daedric-quests.md, mod-added/mephalas-curse.md, areas/eastmarch-and-windhelm.md]
sources: [1, 2, 3, 4, 5, 6, 7]
confidence: high
updated: 2026-10-02
---

# Boethiah's Calling - Alternate Questline (The Man in Black)

This mod adds a new quest, **The Man in Black**, as an alternative way to complete Boethiah's Calling and get the **Ebony Mail** without sacrificing a friend [1][2]. It has 70+ lines of voiced dialogue built from vanilla assets and cut Bethesda content, with no AI voices [2]. The LoreRim site lists it among MadAborModding's Daedric quest improvements: "Now a 'friend' can trick and try to sacrifice you!" [3]

## Starting in LoreRim
- **Giver:** **Rudin Filaro**, a Dark Elf at the **Braidwood Inn in Kynesgrove**. He poses as a friendly priest of Mara and asks you to escort him [2].
- **Level:** The mod page says that by default the quest starts "at same level as when Boethiah's Calling starts". It is customizable in the FOMOD, and the vanilla level is 30, changeable with Timing is Everything [2].
  - LoreRim's *Timing is Everything SE - Settings Loader* sets `iTIE_BoethiahsCalling=30` [4].
  - LoreRim's recorded FOMOD choices leave the optional **"Quest Start At Any Level"** setting unselected, so the default level gate applies: **level 30** in LoreRim [7].
- LoreRim ships the **Great Village of Kynesgrove** patch from the FOMOD (`Great Village of Kynesgrove - Alt Boethiah's Calling patch.esp`), since LoreRim overhauls Kynesgrove [5].
- The mod does not touch the original Boethiah's Calling, so the vanilla route stays available [2]. In LoreRim the vanilla quest is separately edited by other mods (e.g. "The Choice is Yours"); see the vanilla-changes file [6].

## Quests
### The Man in Black
- **Giver / trigger:** Rudin Filaro, Braidwood Inn, Kynesgrove [2].
- **Where:** The journey goes from Kynesgrove toward the "Temple of Mara located in the mountains northeast of Kynesgrove", which is actually a Shrine of Boethiah. It ends at **Knifepoint Ridge** [1].
- **Steps:**
  1. Escort Rudin to the Shrine.
  2. A rune paralyzes you, and you wake hours later "barely alive, next to a shrine of Boethiah".
  3. Investigate the nearby area and search for clues on Rudin's whereabouts, dealing with traps along the way.
  4. Leave the shrine.
  5. Find Rudin Filaro at Knifepoint Ridge.
  6. Kill Rudin Filaro [1][2].
- **Story:** Rudin lured you to be sacrificed. He then went to Knifepoint Ridge, killed Boethiah's previous Champion and claimed the title. Your fight with him is to the death [1].
- **Rewards:** The **Ebony Mail** [2].

### Mia's ambush (v2.0+ encounter, not a journal quest)
- If the Ebony Mail is in your inventory and your **Murders** stat is below 5, a Dark Elf named **Mia** hunts you down. The ambush happens at random in the Skyrim wilderness 2–3 weeks after the mail is detected [2].
- This can happen even if you took the vanilla Boethiah's Calling route [2].
- The author's intent: a "good guy" Ebony Mail owner faces a harder consequence [2].

## LoreRim notes
- NPCs use vanilla templates, and the author says the mod is Requiem-compatible out of the box [2]. LoreRim also runs *Requiem - Auto NPC Patcher* [5].
- The FOMOD offers a **Boethiah's Bidding** patch, but Boethiah's Bidding (Nexus 18854) is not in the LoreRim install, and LoreRim's recorded FOMOD choices leave that patch unselected, so that interaction does not apply [5][7].
- The author says it is safe to install mid-game since v1.4 [2].

## Related
- [../vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md)
- [mephalas-curse.md](mephalas-curse.md) (same author's Daedric-artifact consequence design)
- [../areas/eastmarch-and-windhelm.md](../areas/eastmarch-and-windhelm.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest name, objectives, journal text | LoreRim install: `BoethiahCalling_AlternativeQuest.esp` QUST records (profile Default) | mod v2.3.0.0a | 2026-10-02 |
| 2 | giver, level default, Mia condition, Ebony Mail, compatibility | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/121499) via meta.ini cache | 2024-12-23 (nexusLastModified) | 2026-01-23 cache |
| 3 | LoreRim framing | [LoreRim site — Quest Expansions](https://www.lorerim.com/guides/quests/quest-expansions) | n/a | 2026-10-02 |
| 4 | Boethiah's Calling level 30 | LoreRim install: `Timing is Everything SE - Settings Loader/MCM/Config/TimingIsEverything/settings.ini` | n/a | 2026-10-02 |
| 5 | shipped plugins, Kynesgrove overhaul, absence of Boethiah's Bidding | LoreRim install: `profiles/Default/plugins.txt`, `modlist.txt`, mods/*/meta.ini modid search | n/a | 2026-10-02 |
| 6 | DA02 also overridden by The Choice is Yours | Project import: `vanilla-quest-overrides.json` (from LoreRim install) | n/a | 2026-10-02 |
| 7 | FOMOD choices LoreRim installed (Kynesgrove patch selected; Boethiah's Bidding patch and "Quest Start At Any Level" not selected) | LoreRim install: `Boethiah's Calling - Alternate Questline/meta.ini` (`FOMOD Plusomod` record) | n/a | 2026-10-02 |
