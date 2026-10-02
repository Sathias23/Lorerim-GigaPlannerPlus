---
id: knight-of-the-north
title: Knight of the North (Relics of the Crusader overhaul)
kind: mod-added
category: creation-club
summary: Knight of the North replaces the Divine Crusader Creation's "Relics of the Crusader" quest. Instead of finding the gear at Four Skull Lookout, you follow Sir Areldur's trail and collect the seven relics hidden across Skyrim. It also swaps the CC's one-crime Infamy trigger for a visible, ranked Honor stat.
mods:
  - name: Knight of the North
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/45869
    version: 3.0.1.0
  - name: LoreRim - xEdit64 Output (LoreRim - Divine Crusader.esp)
    nexus: n/a (LoreRim-generated)
    version: n/a
  - name: Ivy's Stendarr's Beacon Overhaul (Knight of the North patch)
    nexus: n/a
    version: n/a
plugins: [Knight of the North.esp, ccmtysse001-knightsofthenine.esl, LoreRim - Divine Crusader.esp, Ivy Stendarrs Beacon Overhaul - Knight of the North Patch.esp]
quests: [Relics of the Crusader, The Pilgrim's Path]
locations: [Stendarr's Beacon, Eldergleam Sanctuary, Hall of the Dead (Solitude), Inner Sanctum (Temple of Dibella, Markarth), Northwatch Keep, Understone Keep]
region: Skyrim-wide (Winterhold, Haafingar, the Reach, Whiterun/Eastmarch, the Pale)
start: Find any Crusader relic, or the journal/note placed beside it; that starts the quest. LoreRim's site says the mod author recommends starting near the Tower Stone in Winterhold.
related: [vanilla-changes/creation-club.md, mod-added/morihaus-refuge.md, areas/winterhold.md, areas/the-reach-and-markarth.md]
sources: [1, 2, 3, 4, 5, 6, 7]
confidence: medium
updated: 2026-10-02
---

# Knight of the North (Relics of the Crusader overhaul)

Knight of the North overhauls the Divine Crusader Creation (`ccmtysse001-knightsofthenine.esl`). In the unmodded Creation you find the Crusader gear on bandits at Four Skull Lookout. In this mod, Sir Areldur, a Knight of the Nine running from the Thalmor, brought the Relics of the Crusader north and hid them, and you track them down across the province [1][2][3]. The mod overrides the Creation's "Relics of the Crusader" quest record (`ccMTYSSE001_DES_RelicsoftheCrusader`, FormID 0x83C). It also replaces the Creation's Infamy trigger with a ranked **Honor** stat [1][3].

## Starting in LoreRim
- LoreRim's Creation Club page lists Knight of the North as a "Quest Overhaul". It says a journal or note sits next to every relic in the world and starts the quest, and that the mod author recommends starting near the **Tower Stone in Winterhold** [2]. The author's Nexus quest guide says the same: start west of Winterhold, just north of the Tower Stone [7].
- The in-game help message for the Creation (rewritten by the mod) says: "Begin the quest by locating one of the lost Relics of the Divine Crusader." [3]
- A pointer quest (`ccMTY_DES_CrusaderPointerQuest`) has one objective: "Learn more about the Relics of the Crusader" [3].
- **Sir Areldur's Journal** is found beside a pile of bones "dying in the snow at the tip of the world". It holds a riddle for each of the other relics. A Thalmor dossier and orders say the Mace and Shield are "in the ice fields of Winterhold". Reading these together, the journal, Mace and Shield are most likely in Winterhold's northern ice fields (inference, medium) [3].
- No level gate is stated in any source found, and the plugin has no GetLevel condition [3].

## Quests
### Relics of the Crusader
- **Giver / trigger:** finding a relic or one of Sir Areldur's notes [2][3].
- **Where:** across Skyrim (see Locations) [3].
- **Objectives (plugin text):** "Find the Mace of the Crusader", "Find the Sword of the Crusader", "Serve Arkay to earn the Sword of the Crusader", "Steal the Sword of the Crusader", "Retrieve the Sword of the Crusader", "Find the Boots of the Crusader", "Find the Cuirass of the Crusader", "Find the Gauntlets of the Crusader", "Find the Helm of the Crusader", "Serve Dibella to earn the Helm of the Crusader", "Steal the Helm of the Crusader", "Retrieve the Helm of the Crusader", "Find the Shield of the Crusader" [3].
- **Journal:** "I've discovered the whereabouts of a powerful artifact that the once belonged to the fabled Divine Crusader. I should try and reunite all the missing relics." It ends with: "I have reunited the relics of the Divine Crusader. I must continue to follow an honorable path if I am to remain fit to wield them." [3]
- **Choices & outcomes:** the Sword and the Helm each have an honorable route ("Serve Arkay…" / "Serve Dibella…") and a "Steal…" route [3]. The mod page says your approach to parts of the quest can lower your starting Honor [1].
- **Rewards:** the Crusader relics: Mace, Sword, Shield, Helm, Cuirass, Gauntlets and Boots [3][4].

### The Pilgrim's Path
- This is the Creation's own quest (`ccMTYSSE001_Quest`), with the objective "Pray at the shrines (<Global=ccMTYSSE001_CrusaderGlobalShrines>/9)" [5].
- Knight of the North leaves the quest itself unchanged and changes only what triggers it. It starts when your Honor falls to **Infamous**. Completing the pilgrimage makes you fit to wield the relics again [1].

## Locations
Relic placements below come from the riddles and letters in the plugin's books, plus the cells the plugin edits [3]:
- **Sword:** "Upon the Great Arch / Arkay safeguards the dead / The Sword is hung in his humble Hall". The plugin edits Solitude's **Hall of the Dead** and adds a "Crusader Sword Display Case's Key". Areldur's note there is addressed to Styrr [3].
- **Boots:** "planted in the roots of beginning". The Kynareth note says the relic is "at the base of this great tree", and the plugin edits the **Eldergleam Sanctuary** worldspace [3].
- **Cuirass:** "At the hill above the Stead / The Dragon-God roosts". The Justiciar orders say the armor was found "north of the village of Rorikstead" and was to be taken to **Northwatch Keep**, a cell the plugin edits. The Thalmor dossier lists the Cuirass as already "Secured" there [3].
- **Gauntlets:** "Tall does Stendarr stand / A Beacon to the worthy". This is **Stendarr's Beacon** (exterior cells edited), with a note to its "Keeper" [3].
- **Helm:** "In the City of Stone / In the house of the Lover". This is the Temple of Dibella **Inner Sanctum** in Markarth, with a note to "Mother". Ondolemar's "Letter to the Jarl" (edited cell: Understone Keep) shows the Thalmor trying to seize it [3].
- **Mace & Shield:** "the ice fields of Winterhold" [3].

## Rewards & notable items
- **Honor ranks** (tracked in the Magic Passives window, like Survival Mode stats, and visible only while carrying a Crusader relic; not tracked until Relics of the Crusader is finished): Peerless, Respected, Questioned, Tarnished, Disgraced, Infamous. Crimes lower Honor, and some crimes cost more than others [1].
- The plugin tracks crime categories separately: misc, stealing, assault, murder and jail escape. It shows "Your honor has increased." / "Your honor has decreased." and a final warning: "Beware! The gods have taken note of your crimes!…" [3].
- Honor starts at maximum when the quest completes, regardless of past misdeeds [1].

## LoreRim notes
- **Requiem integration:** LoreRim ships `LoreRim - Divine Crusader.esp`, a generated plugin in the "LoreRim - xEdit64 Output" mod. Its masters are `Requiem.esp`, `Knight of the North.esp`, the CC plugin and `Trad_AE_CC_Collection_Requiem_Patch.esp`. It defines copies of all seven relics (Cuirass/Gauntlets/Boots/Helm/Shield of the Crusader, Sword and Mace of the Crusader) with forge and temper recipes. Read this as LoreRim rebalancing the relics for Requiem (exact stats not extracted; medium confidence) [4].
- **Stendarr's Beacon patch:** the mod page warns that anything editing Stendarr's Beacon probably needs a patch. LoreRim ships and activates `Ivy Stendarrs Beacon Overhaul - Knight of the North Patch.esp` [1][4].
- **Heart of Dibella:** this mod and *The Heart of Dibella – Quest Expansion* edit the same script, and that mod's author forwarded these changes so no patch is needed. LoreRim runs both (`The Heart Of Dibella - Quest Expansion.esp` is active) [1][4].
- LoreRim's weapon keyword config tags the Crusader Mace and Sword as Aedric artifacts (`OCF_ArtifactAedric_CrusaderMace/Sword` in `ABA_KW-OCF_WEAP_KID.ini`) [6].

## Related
- [vanilla-changes/creation-club.md](../vanilla-changes/creation-club.md)
- [mod-added/morihaus-refuge.md](morihaus-refuge.md) (the other CC "Quest Overhaul" on LoreRim's CC page)
- [areas/winterhold.md](../areas/winterhold.md), [areas/the-reach-and-markarth.md](../areas/the-reach-and-markarth.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, Honor ranks, Pilgrim's Path trigger, compatibility | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/45869) via meta.ini cache | 2024-08-24 (nexusLastModified) | 2026-01-11 cache |
| 2 | LoreRim start guidance (notes by every relic, Tower Stone) | [LoreRim site — Creation Club](https://www.lorerim.com/guides/quests/creation-club) | n/a | 2026-10-02 |
| 3 | quest name, objectives, journal, books, cells, messages | LoreRim install: `Knight of the North.esp` records (profile Default) | mod v3.0.1.0 | 2026-10-02 |
| 4 | LoreRim Requiem plugin, Stendarr's Beacon patch, Heart of Dibella active | LoreRim install: `LoreRim - Divine Crusader.esp`, `Ivy Stendarrs Beacon Overhaul - Knight of the North Patch.esp`, profile Default plugins.txt | n/a | 2026-10-02 |
| 5 | The Pilgrim's Path objective; original Creation baseline | imports/official-quests.json (`ccMTYSSE001_Quest`); [UESP — Divine Crusader](https://en.uesp.net/wiki/Skyrim:Divine_Crusader) | n/a | 2026-10-02 |
| 6 | Aedric artifact keywords | LoreRim install: LoreRim - MCM and INI Settings `ABA_KW-OCF_WEAP_KID.ini` | n/a | 2026-10-02 |
| 7 | recommended start point (Tower Stone) | [Nexus article — Quest Guide](https://www.nexusmods.com/skyrimspecialedition/articles/3005) (web search summary; page not fetched) | n/a | 2026-10-02 |
