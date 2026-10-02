---
id: vittorias-alternate-wedding
title: A Healing Wedding (Vittoria's Alternate Wedding)
kind: mod-added
category: quest-expansion
summary: If Vittoria Vici survives (you destroyed the Dark Brotherhood, or spared Grelod in Innocence Lost), a courier invites you to her wedding to Asgeir Snow-Shod at the Temple of the Divines in Solitude. The side quest is "A Healing Wedding".
mods:
  - name: Vittorias Alternate Wedding
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/62466
    version: 1.3.3.0
  - name: Vittorias Alternate Wedding - Patches
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/72240
    version: 1.4.0.0
plugins: [Vittorias Alternate Wedding.esp, Vittoria's Alternate Wedding - Innocence Lost Expansion Patch.esp, Vittorias Alternate Wedding - AI Overhaul Patch.esp, Vittorias Alternate Wedding - GDO Patch.esp]
quests: [A Healing Wedding]
locations: [Temple of the Divines, Solitude]
region: Haafingar (Solitude)
start: "In LoreRim either (a) complete 'Destroy the Dark Brotherhood!', or (b) take the Innocence Lost - Quest Expansion path where Grelod is not killed. You also need to have seen Roggvir's execution in Solitude. About 2 days later a courier brings the invitation, and reading it starts the quest."
related: [vanilla-changes/dark-brotherhood.md, mod-added/after-the-civil-war.md, mod-added/additional-contracts-dark-brotherhood.md, areas/haafingar-and-solitude.md]
sources: [1, 2, 3, 4, 5]
confidence: high
updated: 2026-10-02
---

# A Healing Wedding (Vittoria's Alternate Wedding)

In vanilla, Vittoria Vici dies at her own wedding in the Dark Brotherhood quest *Bound Until Death* [2]. This mod lets the wedding go ahead when the Brotherhood never gets to her. You attend the reception at the **Temple of the Divines in Solitude**, talk to the guests and listen to Vittoria's speech [1][3]. The quest is called **A Healing Wedding** [3].

## Starting in LoreRim
- **Base mod trigger:** finish *Destroy the Dark Brotherhood!* **and** have visited Solitude at least once, with Roggvir's execution scene played out fully. About **2 days** later a courier arrives with the invitation. **Reading it** starts the quest [1]. In the script, the note starts the quest only if the Destroy quest is complete [4].
- **LoreRim-specific second trigger:** LoreRim ships the **Innocence Lost Expansion patch**. With it, the alternate wedding "plays out if the player chooses not to kill Grelod". The patch's own invitation note starts the quest when Innocence Lost (DB01) stage 199 is done [4][5]. LoreRim includes *The Innocence Lost - Quest Expansion* [5].
- The Dark Brotherhood Reformation patch, which triggers the wedding after *Bound Until Death* if Vittoria lives, is **not** shipped. That mod's patch plugin is not in the install [5].

## Quests
### A Healing Wedding (`DB05Alt`)
- **Giver / trigger:** courier invitation [1][4].
- **Where:** Temple of the Divines, Solitude [3].
- **Steps** (objectives and journal from the plugin) [3]:
  1. Attend the wedding. Journal: "I have been invited to attend the wedding reception of Vittoria Vici and Asgeir Snow-Shod, at the Temple of the Divines in Solitude."
  2. Talk to the guests and newly weds (counter: X/total).
  3. Listen to Vittoria's speech.
  4. Stay or leave the reception.
  5. Journal at completion: "…This is a great step to achieve peace in Skyrim, between the Stormcloaks and the Empire."
- **Rewards** [1]:
  - Vittoria's and Asgeir's disposition rises to rank 1.
  - Vittoria's merchant inventory gains some rare items.
  - An optional perk point from a separate optional file. That file is **not** among LoreRim's plugins, so there is no perk point in LoreRim [1][5].

## Locations
- **Temple of the Divines (Solitude)**: the reception [3].
- **Vittoria Vici's house, Solitude**: Asgeir moves in afterwards and works at the East Empire Company. The mod also gives Aquillius Aeresius his own bed [1].

## LoreRim notes
- Shipped patches: Innocence Lost Expansion, AI Overhaul, Guard Dialogue Overhaul [5].
- Vanilla records changed: `MQ201Party`, `TGTQ02` "The Dainty Sload", `WEDL03` "On the way to the Wedding", `WEDL04` "Lost after the Wedding". In LoreRim's load order this mod is the last to override each of them, after USSEP [2][5].
- Salonia and Plautis Carvain do not attend. Their "Lost after the Wedding" radiant still runs [1].
- No MCM. The courier delay is a global (`VWT_AmountDaysWeddingAfterDestroyDB`) [4].

## Related
- [../vanilla-changes/dark-brotherhood.md](../vanilla-changes/dark-brotherhood.md)
- [after-the-civil-war.md](after-the-civil-war.md)
- [../areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | trigger conditions, rewards, FAQ | [Nexus mod page 62466](https://www.nexusmods.com/skyrimspecialedition/mods/62466) via meta.ini cache | n/a (cache refreshed 2026-01-22) | 2026-10-02 |
| 2 | vanilla DB05 baseline; overridden vanilla quests | imports/official-quests.json; imports/vanilla-quest-overrides.json | n/a | 2026-10-02 |
| 3 | quest name, objectives, journal | LoreRim install: `Vittorias Alternate Wedding.esp` QUST records | mod v1.3.3.0 | 2026-10-02 |
| 4 | start scripts (invitation note, courier timer) | LoreRim install: `Vittorias Alternate Wedding/Scripts/Source/VAW_InvitationNoteScript.psc`, `VittoriasWeddingTriggerScript.psc`; `Vittorias Alternate Wedding - Patches/Scripts/Source/VAW_InvitationNoteScriptJaySerpa.psc` | mod v1.3.3.0 / patches v1.4.0.0 | 2026-10-02 |
| 5 | shipped patches; Innocence Lost QE present; load order | [Nexus mod page 72240](https://www.nexusmods.com/skyrimspecialedition/mods/72240) via meta.ini cache; LoreRim install `profiles/Default/plugins.txt` | n/a (cache refreshed 2026-01-22) | 2026-10-02 |
