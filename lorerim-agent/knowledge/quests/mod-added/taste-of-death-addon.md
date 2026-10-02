---
id: taste-of-death-addon
title: A Bitter Aftertaste (The Taste of Death - Quest Addon)
kind: mod-added
category: quest-expansion
summary: An addon to Namira's quest "The Taste of Death". Kill Eola instead of joining her, read her journal, search Reachcliff Cave, and expose the cannibal coven hiding in Markarth (Hogni Red-Arm, Lisbet, Banning). You can arrest them with the Jarl's backing, kill them, or blackmail them. The quest also gives a non-cannibal route to the Ring of Namira, which in LoreRim carries a hunger curse.
mods:
  - name: The Taste of Death - Quest Addon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/123173
    version: 4.0.0.0
plugins: [TasteOfDeath_Addon_Dialogue.esp, TasteOfDeath_Addon_RingCurse_SMI.esp]
quests: [A Bitter Aftertaste, The Taste of Death]
locations: [Markarth, Hall of the Dead, Reachcliff Cave, Understone Keep]
region: The Reach (Markarth)
start: "During The Taste of Death, provoke Eola into attacking you. Options: 'Your tricks won't work on me, monster.' in the Hall of the Dead, 'I didn't come to help. I'm here to end you, monster!' outside Reachcliff Cave, or 'Helping you was a mistake…' after clearing the cave. Kill her and read Eola's Journal before agreeing to sacrifice Verulus."
related: [vanilla-changes/daedric-quests.md, mod-added/reforging-the-past.md, mod-added/mephalas-curse.md, mod-added/boethiahs-calling-alternate.md, areas/the-reach-and-markarth.md]
sources: [1, 2, 3, 4, 5]
confidence: high
updated: 2026-10-02
---

# A Bitter Aftertaste (The Taste of Death - Quest Addon)

This MadAborModding addon extends the vanilla Namira quest *The Taste of Death*. You can root out the **Cult of Namira** in Markarth and bring its members to justice. It also offers a route to the **Ring of Namira** for players who are not evil [1]. The LoreRim site lists it as "Confront the cult of Namira and bring them to justice" [3]. The new quest is **A Bitter Aftertaste** [2].

## Starting in LoreRim
- Eola carries a journal. **If you kill her and read it before agreeing to sacrifice Verulus**, *A Bitter Aftertaste* starts [1].
- As of v4 there are three dialogue options that make Eola attack you [1][2]:
  - In the Hall of the Dead: "Your tricks won't work on me, monster."
  - Outside Reachcliff Cave: "I didn't come to help. I'm here to end you, monster!"
  - After clearing Reachcliff Cave with her, when she asks for a victim: "Helping you was a mistake. I won't let you hurt anyone else."
- If you install mid-game and Eola is already dead, the quest starts on its own. The mod is safe to add mid-save [1].
- The quest record is start-game enabled and waits for the journal trigger [4]. LoreRim adds no gate [5].

## Quests
### A Bitter Aftertaste (`madNamiraAddonQuest`)
- **Giver / trigger:** reading Eola's Journal [1][4].
- **Where:** Markarth (Hall of the Dead, Understone Keep), Reachcliff Cave [4].
- **Steps** (objectives from the plugin) [4]:
  1. (Optional) Speak to Brother Verulus.
  2. Search for evidence in Reachcliff Cave. You find the previous Champion of Namira's journal (the "Vile Journal"). A ring slips out from between its pages [2][4].
  3. (Optional) Speak to Verulus for the Jarl's permission to confront the cannibals.
  4. Speak to the Jarl of Markarth. The journal says: "The Jarl tasked me with dealing with the cannibals as I see fit… I now have the proper jurisdiction to arrest them."
  5. Confront **Hogni Red-Arm**, **Lisbet** and **Banning**.
  6. Speak to the Jarl of Markarth for a reward.
- **Choices & outcomes** [1][2][4]:
  - **Fight:** confronting them directly ends in combat. The journal warns this "may be unlawful" without the Jarl's permission.
  - **Arrest:** with Verulus's and the Jarl's backing: "By order of the Jarl, you are under arrest."
  - **Blackmail (since v3):** "Pay me or this goes public." Each cultist pays **500 gold** [2].
  - You can lie to the Jarl that the cannibals have been dealt with ("(Lie)" option) [2].
- **Rewards:** **1,000 gold** from the Jarl [2]. The Ring of Namira comes from the Champion's journal in Reachcliff Cave. The final journal entry reads: "within Reachcliff Cave, I discovered a peculiar enchanted ring. It pulses with an unsettling hunger..." [4].

## Locations
- **Hall of the Dead, Markarth**: Eola and Brother Verulus (vanilla) [2].
- **Reachcliff Cave**: per Eola's journal, the coven's former hideout, with a Namira shrine linked to Nordic burial chambers [2].
- **Understone Keep**: the Jarl [4].

## Rewards & notable items
- Ring of Namira (non-cannibal route), 1,000 gold, up to 3 × 500 gold in blackmail [2][4].
- Eola's Journal and the Vile Journal: lore, including the names of the other coven members (Sanyon, Nimphaneth and the others) [2].

## LoreRim notes
- **Ring curse is on:** LoreRim enables `TasteOfDeath_Addon_RingCurse_SMI.esp`, the Survival Mode Improved version of the optional curse. **While the ring is in your inventory, the only way to reduce hunger is cannibalism** [1][5]. Plugin records show it adds "Restore Hunger" effects [5].
- **The new boss is probably absent:** the Nexus page describes an undead previous Champion with a Daedric Parasite second phase in Reachcliff Cave. The boss plugin is not in the LoreRim mod folder (only `TasteOfDeath_Addon_Dialogue.esp` and the ring-curse plugin are), and the Dialogue plugin has no "Parasite" records. Some boss meshes are present in the folder anyway [1][5]. Medium confidence.
- The Requiem patch for the boss in the FOMOD is not installed either, which fits the boss being absent [1][5].
- No vanilla records are modified [1].

## Related
- [../vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md)
- [reforging-the-past.md](reforging-the-past.md), [mephalas-curse.md](mephalas-curse.md), [boethiahs-calling-alternate.md](boethiahs-calling-alternate.md): other MadAborModding Daedric expansions
- [../areas/the-reach-and-markarth.md](../areas/the-reach-and-markarth.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, start options, boss/curse description, FOMOD options | [Nexus mod page 123173](https://www.nexusmods.com/skyrimspecialedition/mods/123173) via meta.ini cache | n/a (cache refreshed 2024-12-23) | 2026-10-02 |
| 2 | dialogue lines, journals, reward/extort scripts | LoreRim install: `TasteOfDeath_Addon_Dialogue.esp` strings + `scripts/Source/*.psc` | mod v4.0.0.0 | 2026-10-02 |
| 3 | LoreRim listing | [LoreRim site — Quest Expansions](https://www.lorerim.com/guides/quests/quest-expansions) | n/a | 2026-10-02 |
| 4 | quest name, objectives, journal stages, start-game flag | imports/mods/the-taste-of-death-quest-addon.md (plugin QUST records) | mod v4.0.0.0 | 2026-10-02 |
| 5 | shipped plugins (no boss esp), ring-curse strings | LoreRim install: `mods/The Taste of Death - Quest Addon/` listing; `profiles/Default/plugins.txt`; `TasteOfDeath_Addon_RingCurse_SMI.esp` | n/a | 2026-10-02 |
