---
id: the-gift-of-saturalia
title: The Gift of Saturalia
kind: mod-added
category: new-quests
summary: A holiday quest from JaySerpa, given by Niklas the Trader, who camps outside Dawnstar. It has five dialogue-driven good deeds across Skyrim (orphanage gifts in Riften, making seven people in Dawnstar laugh, a dog for Olava, an audition for blind Diane, a nudge for Captain Lonely-Gale). The reward is a choice of "Spirit of Saturalia" blessings that work in cold regions.
mods:
  - name: The Gift Of Saturalia
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/105697
    version: f1.03
plugins: [TheGiftofSaturalia.esp, TheGiftOfSaturalia_CC_Patch.esp, TheGiftOfSaturalia_SGT_Patch.esp, Snazzy Interiors - Windhelm AIO - Gift of Saturalia patch.esp]
quests: [The Gift of Saturalia, Three Wise Men, The Joy of Dawnstar, Windhelm By The Sea, Lending a Paw, A Song in the Dark]
locations: [Dawnstar (Niklas's camp), Honorhall Orphanage, Riften, Windhelm, Whiterun, Solitude, Bards College]
region: Skyrim-wide; starts outside Dawnstar (the Pale)
start: Talk to the bearded old trader, Niklas, camping outside Dawnstar just south of the main entrance. LoreRim has the Saturalia CC installed, so he is the CC merchant "Niklas Peryval". No level or date requirement is documented.
related: [vanilla-changes/creation-club.md, areas/the-pale-and-dawnstar.md, areas/the-rift-and-riften.md, mod-added/book-of-love-fastreds-awakening.md]
sources: [1, 2, 3, 4]
confidence: high
updated: 2026-10-02
---

# The Gift of Saturalia

The Gift of Saturalia is a fully voiced holiday quest by JaySerpa. A bearded old trader teaches you about Saturalia and asks you to help people across Skyrim who are having a hard time [1][2]. It is one main quest with five sub-quests that you can do in any order. It is all talking, persuading and socializing, with no dungeons or combat, and takes about 1–2 hours. The author compares it to the vanilla quest *The Book of Love* [1]. After it ends, several NPCs' routines, relationships and homes change for good [1].

## Starting in LoreRim
- LoreRim's Creation Club page: "begin this quest by finding a bearded old trader camping outside of Dawnstar, south of the main entrance." It notes the mod doesn't need the CC content but was built around the **Saturalia Holiday Pack** [2].
- LoreRim ships `ccvsvsse001-winter.esl` and `TheGiftOfSaturalia_CC_Patch.esp`. The patch renames the CC merchant to **Niklas Peryval** and gives him new lines, including about his reindeer [1][3].
- If Niklas doesn't respond, the author advises saving and reloading on the spot [1].
- The main quest is flagged start-game-enabled and progresses when you agree to help Niklas. No level gate or calendar restriction is stated (none found) [1][3].

## Quests
### The Gift of Saturalia
- **Objective:** "Help Niklas with his Saturalia gifts". He has "five tasks for me to help people around Skyrim." When all five are done he rewards you "in kind" [3].

### Three Wise Men (Riften orphanage)
- **Steps:** "Get toys from Bersi Honey-Hand in Riften" → "Get food from Talen-Jei" → "Convince Maramal to Donate (Optional)" → "Visit the Orphanage" → "Speak to Constance" (Grelod refuses the donation) → "Return to Niklas" [3].
- **Options:** for each donation you can persuade, or pay: 500 gold for Bersi's toys, 500 gold for Talen-Jei's meals, or a promise to pay later. Giving Constance **2000 septims** gets you **Constance's Amulet** [3].

### The Joy of Dawnstar
- **Objective:** "Make 7 people laugh in Dawnstar (n/7)" → "Speak to Niklas". There is also a dialogue option to bribe someone 50 septims to laugh [3].

### Windhelm By The Sea
- **Steps:** "Speak to Captain Lonely-Gale" (persuade him to visit the Riften orphanage) → "Return to Niklas". Afterwards he "might have adopted a child". This sub-quest overrides two vanilla Viola/Lonely-Gale scenes [3][4].

### Lending a Paw
- **Steps:** "Bring Santus to Olava the Feeble", taking Niklas's dog to Whiterun → "Return to Niklas" [3].

### A Song in the Dark
- **Steps:** "Speak to Diane the Blind in Solitude" (you can give her 250 septims for clothes) → "Speak to Viarmo" → "Speak to Diane" → "Take Diane to Viarmo" → "Talk to Diane" → "Return to Niklas". She auditions and is accepted into the Bards College [3].

## Rewards & notable items
- **Spirit of Saturalia blessing** (pick one; each works only in cold regions): +30 Health, +30 Stamina, +30 Magicka, +50 Carry Weight, or +15% Frost Resistance [3].
- A dialogue option reads "I'm after wealth, what else? (5000 Septims)" (seen in plugin text; it isn't clear which step it belongs to, medium) [3].
- **Constance's Amulet:** Fortify Health "while under the effects of the Gift of Charity". The author says it costs either very high Speech or 2000 septims [1][3].
- Toys (Toy Dragon, Toy Ship, Toy Gingerbread House, dolls and more) that "Can be used as present for your children." [3]

## LoreRim notes
- **Installed version:** LoreRim installs **f1.03**. meta.ini lists f1.04 as the newest Nexus version, but its `ignoredVersion` field holds f1.03, not f1.04, so whether f1.04 was deliberately skipped isn't recorded [3].
- **Patches active:** the CC patch (above). The **Skyrim's Got Talent** patch is "a small easter egg" that gives instrument XP. A **Snazzy Interiors – Windhelm AIO** patch also ships [1][3].
- The FOMOD offers the sub-quests as MISC quests instead. LoreRim's plugin has them typed as side quests, each with its own journal entry [1][3].

## Related
- [vanilla-changes/creation-club.md](../vanilla-changes/creation-club.md): Saturalia Holiday Pack
- [areas/the-pale-and-dawnstar.md](../areas/the-pale-and-dawnstar.md), [areas/the-rift-and-riften.md](../areas/the-rift-and-riften.md)
- [mod-added/book-of-love-fastreds-awakening.md](book-of-love-fastreds-awakening.md): the vanilla Book of Love that the author compares it to

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | concept, scope, CC optional, FAQ (start, amulet, cold rewards), patches | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/105697) via meta.ini cache (`nexusdescription`) | 2024-01-01 (nexuslastmodified) | 2026-01-23 cache |
| 2 | LoreRim start location | [LoreRim site — Creation Club](https://www.lorerim.com/guides/quests/creation-club) | n/a | 2026-10-02 |
| 3 | quest names, objectives, journal, dialogue options, rewards, Niklas Peryval | LoreRim install: `TheGiftofSaturalia.esp`, `TheGiftOfSaturalia_CC_Patch.esp`, `TheGiftOfSaturalia_SGT_Patch.esp` records; `TheGiftOfSaturalia_DESC.ini`; profile Default plugins/loadorder | mod vf1.03 | 2026-10-02 |
| 4 | vanilla scene overrides | imports/vanilla-quest-overrides.json (`DialogueWindhelmViolaLonelyGaleScene2/4`) | n/a | 2026-10-02 |
