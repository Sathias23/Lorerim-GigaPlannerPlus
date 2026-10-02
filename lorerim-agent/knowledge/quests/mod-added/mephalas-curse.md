---
id: mephalas-curse
title: Mephala's Curse - Whispering Door Quest Addon (The Fate of the Ebony Blade)
kind: mod-added
category: quest-expansion
summary: Picking up the Ebony Blade during "The Whispering Door" starts "The Fate of the Ebony Blade". Until you either kill a friend with the blade or reach the Aetherium Forge, Spider Daedra and Mephala Cultists periodically ambush you in Skyrim. In LoreRim the stress/madness add-on and the Forge "destroy it" mod are not installed, so reaching the Forge simply ends the quest.
mods:
  - name: Mephala's Curse - Whispering Door Quest Addon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/120650
    version: 2.6.0.0
  - name: Mephala's Curse - TWDQE - WSN
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/130774
    version: 1.0.0.0
  - name: Mephala Revoiced
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/157081
    version: 1.1.0.0
plugins: [EbonyBladeCurse.esp, Whispering_Door_Expansion_Addon.esp, Whispering_Door_Expansion_Addon_WSN.esp]
quests: [The Fate of the Ebony Blade]
locations: [Dragonsreach Dungeon, Dragonsreach, Aetherium Forge]
region: Whiterun (Dragonsreach), then Skyrim-wide ambushes; ends at the Aetherium Forge
start: Starts automatically when you first pick up the Ebony Blade at the end of the vanilla "The Whispering Door" (expanded in LoreRim by The Whispering Door - Quest Expansion; level 20 and Dragon Rising required). Mephala's line after pickup sets the quest to stage 10.
level_hint: "20"
related: [vanilla-changes/daedric-quests.md, mod-added/boethiahs-calling-alternate.md, mod-added/legends-of-aetherium.md, areas/whiterun-hold.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
confidence: medium
updated: 2026-10-02
---

# Mephala's Curse - Whispering Door Quest Addon (The Fate of the Ebony Blade)

Mephala's Curse adds consequences for taking the **Ebony Blade**. While you carry the blade without using it on a friend, Mephala is displeased and sends her servants after you [2]. The mod adds one journal quest, **The Fate of the Ebony Blade**, plus a new creature (the **Spider Daedra**), a **Mephala Cultist** enemy and a Conjure Spider Daedra spell [1]. The LoreRim site lists it with JaySerpa's *The Whispering Door - Quest Expansion*: "adds a functioning curse to the Ebony Blade and new world encounters. Now the player must find a way to destroy the Blade or succumbing to Mephala is inevitable." [3]

## Starting in LoreRim
- **Prerequisite:** reach the Ebony Blade in the vanilla Daedric quest **The Whispering Door**. UESP lists Required Level 20 and Dragon Rising as prerequisites [4].
  - LoreRim's *Timing is Everything* settings keep the level at **20** (`iTIE_TheWhisperingDoor=20`) [5].
  - In LoreRim the vanilla quest is expanded by **The Whispering Door - Quest Expansion** (v1.15.0.0). That mod adds a "good guy" route with Jarl Balgruuf, a deceive-the-Jarl route, and keeps the vanilla route [6][7].
- **Trigger:** the quest starts when you first hold the Ebony Blade and Mephala explains how to power it up [2]. In the plugin, Mephala's vanilla post-pickup line ("Excellent work. … It has languished too long outside the winds of alliance and betrayal.") runs a fragment that starts the quest at stage 10 [1][8].
- Trigger boxes in the **Dragonsreach Dungeon** and near the blade's door make you draw the Ebony Blade if you carry it but the quest hasn't started. The message reads: "A faint, insidious whisper enters your thoughts. Without realizing it, your hand moves on its own, drawing the Ebony Blade." [1][8]
- If the quest was installed mid-game, a backup quest starts the hunt when *The Whispering Door* is at stage 45 or 60 (and below 80) [8]. In LoreRim the mod is part of the list from the start, so this mostly does not apply [7].

## Quests
### The Fate of the Ebony Blade (`DA08MephalaHunt`)
- **Giver / trigger:** Mephala, on picking up the Ebony Blade [1][2].
- **Where:** Starts in Dragonsreach. The ambushes happen anywhere in the Skyrim worldspace. The quest can end at the Aetherium Forge [1][8].
- **Objective:** "Decide the fate of the Ebony Blade." [1]
- **Journal (stage 10):** "I have acquired the Ebony Blade, the legendary artifact of Mephala. I must decide whether to keep this powerful weapon or seek a means to destroy it. To destroy it, I would need a fire more intense than those that stoke the Skyforge." [1]
- **Endings.** Each of stages 20, 25 and 30 is flagged to complete the quest [9]:
  - **Keep the blade (stage 20):** kill a friend with the Ebony Blade. The mod's edit to the vanilla `DA08FriendKill` tracker sets stage 20 on the first such kill: "The Ebony Blade is mine. I will restore it to its full power." [1][8] UESP says ten kills fully power the blade [4].
  - **Reach the Aetherium Forge (stage 25):** "After much searching, I have found the Aetherium Forge, the only place where the Ebony Blade can be destroyed." [1] A trigger inside the Forge sets this stage only when *Aetherium Forge Destroys Items.esp* is **not** installed [8][9].
  - **Destroy it (stage 30):** "… I have cast it into the fires of the Forge and now feel liberated from its dark magic." [1] The author says the mod itself has no way to destroy the blade. That comes from *Aetherium Forge Destroys Items* [2], which LoreRim does not ship [7].
- **What this means in LoreRim:** without that mod, walking into the Aetherium Forge with the quest active completes it at stage 25 and stops the ambushes. The blade is **not** destroyed (inferred from the shipped scripts; not verified in play) [7][8][9].
- **Reaching the Forge:** the Aetherium Forge is behind the Dawnguard quest **Lost to the Ages**. You collect four Aetherium Shards, then open the Ruins of Bthalft [10]. See [legends-of-aetherium.md](legends-of-aetherium.md) for LoreRim's Aetherium additions.

### Mephala's ambushes (encounter system, no separate journal entry)
- While the quest is at stage 10 and the Ebony Blade is in your inventory, the hunt script periodically spawns either a **Spider Daedra** (with a summoning flash) or a **Mephala Cultist** about 500 units from you. It is a 50/50 roll [1][8].
- **Timing, per the shipped script source:**
  - The first check comes 168 game hours (7 days) after the quest starts.
  - Later checks come every 120–216 game hours (5–9 days) while you are in the Skyrim worldspace, and every 24 hours otherwise [8].
  - The mod page says "about once every 1-2 weeks (ADJUSTABLE IN FOMOD)" [2]. LoreRim's meta.ini records no FOMOD choices, but the installed compiled `madHuntedQuest.pex` carries the same 168 / 120–216 / 24-hour constants as the `.psc`, so the timing above is what ships [13].
- **Stopping them:**
  - Store the blade in a chest. The ambushes pause until you pick it up again [2].
  - Or end the quest (kill a friend, or reach the Forge).
  - The FOMOD also offers a "Hardcore" mode where you cannot drop the blade except at the Forge [2]. Whether LoreRim installed Hardcore mode was not verified.
- **Notes carried by attackers** [1]:
  - **Peculiar Note**, written in Daedric: "The blade bearer has displeased our Lady… Slay them in the name of Mephala".
  - **Cultist's Note**: "Our lady decrees that the Ebony Blade must be entrusted to the devout… Locate the blade bearer and unleash upon them the wrath of Mephala…".

### Giving the blade to the Vigilant (Whispering Door - Quest Expansion ending)
- *Whispering_Door_Expansion_Addon.esp* is the FOMOD patch for *The Whispering Door - Quest Expansion*. It changes the ending where you hand the blade to a Vigilant of Stendarr [1][2]:
  - The Vigilant says "Wise decision. The Vigilant of Stendarr will guard this against future temptation." [1]
  - Mephala then "intervenes directly and retaliates" [2]. In the plugin she speaks ("What in the...?", "I'd much rather it be in the hands of an ambitious and talented person.", "Now go forth, child. Drink the blood of deceit."), the Vigilant is killed, and a Spider Daedra is summoned at you [1][8].
- The author's intent is that the Vigilant ending is no longer "an easy-out" [2].

## Locations
- **Dragonsreach Dungeon / Dragonsreach (Whiterun):** where the Ebony Blade is found and the quest begins. UESP: the blade is behind the blood-covered locked door at the back of a closet below the Dragonsreach kitchen [1][4].
- **Aetherium Forge:** the Dwemer forge under the Ruins of Bthalft, reached through Lost to the Ages; this is where the quest ends [1][10].

## Rewards & notable items
- **Spell Tome: Conjure Spider Daedra**, found "in the same room the Ebony Blade is located in". It teaches **Conjure Spider Daedra**, which "Summons a Spider Daedra for <dur> seconds wherever the caster is pointing." [1][2]
- **Spider Daedra abilities in the plugin:** *Blood Cloak* ("opponents in melee range are drained of <10> life") and *Spider Daedra Drain* [1].
- No gold or item reward is scripted for ending the quest [8].

## LoreRim notes
- **Not shipped in LoreRim** [7]:
  - The **Stress and Fear** madness curse. The mod page's "every 24 hours … stress to rise" feature needs *Stress and Fear - A Dynamic Sanity System* (Nexus 116522) [2].
  - The **Aetherium Forge Destroys Items** letter and the destroy-it ending (Nexus 114021) [2].
  - So the curse in LoreRim is the ambush system only (inferred from the absent mods) [7].
- **Wintersun:** LoreRim adds **Mephala's Curse - TWDQE - WSN** (`Whispering_Door_Expansion_Addon_WSN.esp`). It rewrites the Vigilant hand-over dialogue so Wintersun's favor tracking applies [1][11]. It is an optional file from the *TWDQE - Wintersun patch* Nexus page (130774). That patch lets you become a follower of Mephala during the quest and applies Wintersun favor gains and losses for your choices [11].
- **Mephala Revoiced** replaces Mephala's voice (vanilla, this addon, and Aetherium Forge Destroys Items lines) with a new human-performed voice, "AI was NOT used" [12]. It also installs voice files for *Aetherium Forge Destroys Items.esp*, which are unused in LoreRim because that plugin is absent (inferred) [7][12].
- **Requiem:** the author offers a Requiem FOMOD patch to balance the new daedra and spells [2]. Whether LoreRim installed it was not verified, since there is no separate plugin [7]. LoreRim also runs Requiem's NPC patching.
- **Same author:** MadAborModding also made *Boethiah's Calling - Alternate Questline* and *Redeeming Fultheim*, which are also in LoreRim [2][3].

## Related
- [../vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md) (The Whispering Door and its Quest Expansion)
- [boethiahs-calling-alternate.md](boethiahs-calling-alternate.md)
- [legends-of-aetherium.md](legends-of-aetherium.md)
- [../areas/whiterun-hold.md](../areas/whiterun-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest name, objective, journal text, creatures, spells, notes, Vigilant/Mephala dialogue | LoreRim install: `EbonyBladeCurse.esp`, `Whispering_Door_Expansion_Addon.esp`, `Whispering_Door_Expansion_Addon_WSN.esp` records (QUST/BOOK/NPC_/SPEL/MGEF/INFO), profile Default | mod v2.6.0.0 | 2026-10-02 |
| 2 | features, trigger, ambush frequency claim, Hardcore mode, spell tome, requirements, Vigilant patch, Requiem patch | [Nexus mod page 120650](https://www.nexusmods.com/skyrimspecialedition/mods/120650) via meta.ini cache | 2024-10-10 (nexusLastModified) | 2026-01-11 cache |
| 3 | LoreRim framing | [LoreRim site — Quest Expansions](https://www.lorerim.com/guides/quests/quest-expansions) | n/a | 2026-10-02 |
| 4 | Whispering Door prerequisites, blade location, ten kills | [UESP — Skyrim:The Whispering Door](https://en.uesp.net/wiki/Skyrim:The_Whispering_Door); [UESP — Skyrim:Ebony Blade](https://en.uesp.net/wiki/Skyrim:Ebony_Blade) | n/a | 2026-10-02 |
| 5 | Whispering Door level 20 in LoreRim | LoreRim install: `Timing is Everything SE - Settings Loader/MCM/Config/TimingIsEverything/settings.ini` | n/a | 2026-10-02 |
| 6 | Whispering Door - Quest Expansion features | [TWDQE Nexus page 76606](https://www.nexusmods.com/skyrimspecialedition/mods/76606) via meta.ini cache | 2025-12-09 (nexusLastModified) | 2026-10-02 |
| 7 | what ships (plugins enabled; AFDI, Stress and Fear absent) | LoreRim install: `profiles/Default/plugins.txt`, `modlist.txt`, mods/*/meta.ini modid search | n/a | 2026-10-02 |
| 8 | start fragment, hunt timing, stage-25 trigger logic, Vigilant scripts, backup start | LoreRim install: `Mephala's Curse - Whispering Door Quest Addon/Scripts/source/*.psc` (madHuntedQuest, madSetStageTrigSCRIPT, madStartHunt, madForceEquipBlade, QF_DA08FriendKill_0010FAEE, madHuntStartBackup, madSpiderMephala) | mod v2.6.0.0 | 2026-10-02 |
| 9 | trigger properties (stage 25, prereq 10); stages 20/25/30 complete the quest | LoreRim install: `EbonyBladeCurse.esp` VMAD and QUST INDX/QSDT data (parsed) | mod v2.6.0.0 | 2026-10-02 |
| 10 | Aetherium Forge access via Lost to the Ages (Dawnguard) | [UESP — Skyrim:Lost to the Ages](https://en.uesp.net/wiki/Skyrim:Lost_to_the_Ages) | n/a | 2026-10-02 |
| 11 | WSN patch purpose | [Nexus mod page 130774](https://www.nexusmods.com/skyrimspecialedition/mods/130774) via meta.ini cache | 2026-02-05 (nexusLastModified) | 2026-02-09 cache |
| 12 | Mephala Revoiced | [Nexus mod page 157081](https://www.nexusmods.com/skyrimspecialedition/mods/157081) via meta.ini cache; install file listing | 2025-08-22 (nexusLastModified) | 2026-01-11 cache |
| 13 | shipped ambush timing (compiled script constants); no recorded FOMOD choices | LoreRim install: `Mephala's Curse - Whispering Door Quest Addon/Scripts/madHuntedQuest.pex` (integer constants checked) and `meta.ini` (`FOMOD Plusomod={}`) | mod v2.6.0.0 | 2026-10-02 |
