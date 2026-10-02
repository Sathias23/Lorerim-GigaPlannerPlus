---
id: civil-war
title: The Civil War (Imperial Legion / Stormcloaks)
kind: vanilla-changes
category: questline
summary: LoreRim keeps the vanilla Civil War questline but removes the Season Unending truce (Balgruuf helps trap Odahviing without one), replaces the Creation Club "Battle of the Champions" duel with a champion-armor pickup before the final siege, and adds post-war consequences (city repairs, Talos statue swap, dismantled camps, crown display) plus script fixes and new soldier dialogue.
mods:
  - name: Civil War F Off - No Season Unending
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/33067
    version: 1.0.0.0
  - name: Civil War Champions - Reduced Cut
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/94999
    version: 2.0.0.0
  - name: After the Civil War - Siege Damage Repairs
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/20668
    version: 2.6.5.0
  - name: Military Camps Begone
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/68520
    version: 1.2.0.0
  - name: Civil War Lines Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/77566
    version: 1.1.0.0
  - name: The Jagged Crown Tweaks
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/85699
    version: 1.0.0.0
  - name: Kynareth Replaces Talos - Civil War Consequence
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/91440
    version: 2.1.0.0
  - name: Dvs' Civil War Fixes
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/172831
    version: 1.2.0.0
  - name: Neutral Whiterun Guards
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/70197
    version: 4.2.0.0
  - name: Whiterun Imperial Camp Fixes
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/96646
    version: 0.1.0.0
  - name: REBEL NORTH - Immersive Dialogue Expansion - Stormcloaks
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/178880
    version: 3.0.1.0
  - name: Dialogue Expansion - Imperial Soldiers
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/113208
    version: 1.0.0.0
plugins: [CWFO_TheFallen.esp, Civil War Champions - Reduced Cut.esp, ccFFBSSE001-ImperialDragon.esl, CWRepairs.esp, CWR_JKTemple_Patch.esp, MilitaryCampsBegone.esp, Civil War Lines Expansion.esp, The Jagged Crown Tweaks.esp, Kynareth Replaces Talos - Civil War Consequence.esp, Neutral Whiterun Guards.esp, Whiterun Imperial Camp Fixes.esp, IDE Stormcloaks.esp, ImperialSoldiersDialogueExpansion.esp]
quests: [Joining the Legion, Joining the Stormcloaks, The Jagged Crown, Message to Whiterun, Compelling Tribute, A False Front, "Rescue from <Alias=AttackPoint>", "The Battle for <Alias=Fort>", "Battle for <Alias=City>", Season Unending, The Fallen, Battle of the Champions, Civil War Champion Armor, Repairing the Cities]
locations: [Castle Dour, Palace of the Kings, The Drunken Huntsman, Korvanjund, Fort Hraggstad, Whiterun Imperial Camp, Temple of the Divines]
region: Skyrim (all holds); HQs in Solitude (Legion) and Windhelm (Stormcloaks)
start: Same as vanilla — join the Legion via Legate Rikke in Solitude (Castle Dour) or the Stormcloaks via Galmar in Windhelm (Palace of the Kings). LoreRim adds no new gate, but Message to Whiterun still waits on Dragon Rising, and Season Unending never fires.
related: [vanilla-changes/main-quest-and-alternate-start.md, mod-added/after-the-civil-war.md, mod-added/penitus-oculatus.md, vanilla-changes/creation-club.md, areas/haafingar-and-solitude.md, areas/eastmarch-and-windhelm.md, areas/whiterun-hold.md, mod-added/capital-whiterun-expansion-quests.md, mod-added/capital-windhelm-expansion-quests.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
confidence: high
updated: 2026-10-02
---

# The Civil War (Imperial Legion / Stormcloaks)

The vanilla Civil War is the Skyrim questline in which you join the Imperial Legion or the Stormcloaks. You take the Jagged Crown, deliver the Message to Whiterun, fight the Battle for Whiterun and a hold-by-hold campaign of fort battles and missions, and end with the Battle for Windhelm (Imperial) or the Battle for Solitude (Stormcloak) [1]. All the official quest records ship unchanged in name in LoreRim [6]. The only overrides of the quest records themselves come from the Unofficial Skyrim Special Edition Patch [6]. LoreRim's design changes live elsewhere: Balgruuf's dialogue in the main quest (no Season Unending), the Creation Club "Battle of the Champions" quest (removed and replaced), and a set of post-war consequence and dialogue mods [7][8][9][10].

## Starting in LoreRim
- **How to join (vanilla, unchanged):** in vanilla, the Helgen escape with Ralof or Hadvar only decides which side first recruits you. You formally join in Windhelm (Stormcloaks) or Solitude (Imperial Legion) through the initiation quest [1]. The initiation objectives in the shipped records are "Clear out Fort Hraggstad / Report to Legate Rikke / Take the oath" (Joining the Legion) and "Kill the Ice Wraith / Return to Galmar / Take the oath" (Joining the Stormcloaks) [6].
- **Alternate start:** LoreRim uses Alternate Perspective. Under it, the Helgen intro (where Ralof and Hadvar appear) begins only when you rent a room at Helgen's inn, "The Resting Pilgrim", and Helgen is a living town until then [19]. Nothing in the evidence shows Alternate Perspective adding a Legion or Stormcloak start. Walk into Solitude or Windhelm to join (inference from [1][6][19]). See [vanilla-changes/main-quest-and-alternate-start.md](main-quest-and-alternate-start.md).
- **Main-quest gate on Whiterun (vanilla, unchanged):** Balgruuf will not read the war message until **Dragon Rising** is complete. Message to Whiterun carries the objective "Assist Jarl Balgruuf with the dragon threat" [3][6].
- **No extra LoreRim prerequisite** for the questline was found on the LoreRim site or in the install. The LoreRim site's only Civil War mention is the Champions change below [7].
- **XP:** LoreRim's tuned `Experience.ini` (in "LoreRim - MCM and INI Settings") awards `iXPQuestCivilWar = 150` per completed Civil War-type quest. That compares with 200 for main, Daedric and DLC quests and 100 for guild and side quests [20]. Confidence: medium. The value is read from the ini, and it is not verified in game.

## Quests

### Joining the Legion (CW01A) / Joining the Stormcloaks (CW01B)
- **Vanilla:** initiation quests: clear Fort Hraggstad for Legate Rikke, or kill an ice wraith for Galmar, then take the oath [1][6].
- **In LoreRim:** no design change found. The records are not overridden in the override map [6].

### The Jagged Crown (CW02A / CW02B)
- **Vanilla:** retrieve the Jagged Crown from Korvanjund with Rikke or Galmar, then deliver it to Tullius or Ulfric [1][6].
- **In LoreRim:** The Jagged Crown Tweaks puts the crown on display after the quest instead of letting it vanish. It appears in Castle Dour (Imperial) or the Palace of the Kings (Stormcloak), depending on your side [11]. USSEP also fixes the quest records [6].

### Message to Whiterun (CW03)
- **Vanilla:** deliver Tullius's message (or Ulfric's axe) to Balgruuf. He will not respond until Dragon Rising is done. The quest leads into the Battle for Whiterun [3][6].
- **In LoreRim:** the quest is unchanged apart from USSEP fixes [6]. Neutral Whiterun Guards keeps Whiterun Hold guards out of the Imperial factions **until Balgruuf sides with the Empire**. Before that, roaming Stormcloak NPCs no longer brawl with them. The mod does not change how the guards treat the player [14]. Whiterun Imperial Camp Fixes moves misplaced objects and fixes the navmesh at the Whiterun Imperial Camp, for example letting the Legate into his tent [16].

### Battle for Whiterun / city sieges — "Battle for <Alias=City>" (CWSiegeObj)
- **Vanilla:** radiant siege template. Its objectives run from "Get your Orders from <Alias=General>" through "Force Jarl <Alias=Jarl> to surrender", plus the defend variants. The capital finales end with "Execute Ulfric Stormcloak" or "Execute General Tullius" [6].
- **In LoreRim:**
  - **Dvs' Civil War Fixes** patches 10 Papyrus scripts. It fixes soldier respawns being dropped, so battles no longer thin out. It adds timeouts so sieges and fort battles stop softlocking. Balgruuf's post-defense victory speech, which needs 10 living defenders, gets a 30-second safety net. It also fixes the missing "Report for Duty" dialogue with Rikke and Galmar, and battle music that loops forever [12].
  - **Kynareth Replaces Talos - Civil War Consequence:** after the Battle for Whiterun **on the Imperial side**, the Talos statue and shrine in Whiterun are removed after 2–5 days. A Kynareth statue and shrine go up 5–7 days after that. Danica gets two new lines about it [13].
  - LoreRim also ships the Capital Whiterun patch for that mod [13][20].

### Fort battles — "The Battle for <Alias=Fort>" (CWFortSiegeFort / CWFortSiegeCapital)
- **Vanilla:** radiant fort assault and defense battles, for example "Take over <Alias=Fort> by defeating the enemy" and "Force <Alias=Jarl>'s surrender" [6].
- **In LoreRim:** USSEP fixes these records [6], and Dvs' Civil War Fixes adds timeouts and null-safety to fort-battle scripts [12]. Medieval Towers - Unique Civil War Forts adds tower turrets to Helgen and the civil war quest forts. This is a visual change only [20].

### Missions: Compelling Tribute (CWMission07), A False Front (CWMission03), Rescue from <Alias=AttackPoint> (CWMission04)
- **Vanilla:** radiant campaign missions. Compelling Tribute: "Find evidence / Blackmail <Alias=Steward>" or ambush a caravan. A False Front: retrieve a courier's documents. Rescue from <Alias=AttackPoint>: free prisoners from a fort [6].
- **In LoreRim:** USSEP fixes only [6]. Dvs' Civil War Fixes addresses the "Report for Duty" dialogue that can fail to appear after a mission [12].

### Hold campaign — "<Alias=QuestNameLocation>" (CWObj)
- **Vanilla:** the campaign tracker for each hold ("Liberate Haafingar", "Regain the Reach" and so on, ending with "Report to General Tullius" or "Report to Ulfric Stormcloak") [6].
- **In LoreRim:** USSEP fixes only [6]. **Military Camps Begone:** 7–10 days after you kill an enemy camp's commander, that military camp is taken down. If the commander was already dead when the mod was installed, the camp is removed when its cell loads [10].

### Season Unending (MQ302) and The Fallen (MQ301) — the truce is removed
- **Vanilla:** during The Fallen, the Jarl of Whiterun refuses to let you trap a dragon in Dragonsreach while the war threatens his hold. That refusal triggers Season Unending, where the Greybeards broker a truce [2][5]. The negotiation always trades holds between the sides [2]. Season Unending is skipped if the Battle for Windhelm or Solitude is already complete, or if either city is the only one left to take [2]. Its progress is disabled while Message to Whiterun or Battle for Whiterun is active [2]. "Once Season Unending is complete, the Civil War will be on hold until the Main Quest is complete." [2]
- **In LoreRim:** **Civil War F Off - No Season Unending** (`CWFO_TheFallen.esp`) adds a global, `CWFOisCivilWarFuckOff` (shipped value 0), and edits two of the Jarl's MQ301 dialogue topics, `MQ301JarlTrapDragonA1` and `MQ301JarlReadyToTrapTopic` [9]. Per the mod author, the truce negotiations **never come up**: Balgruuf agrees to trap the dragon straight away ("Then... Whiterun will stand with you, Dragonborn…") [9]. The mod also says:
  - The Paarthurnax quest still starts, because it triggers off The Fallen rather than Season Unending [9].
  - You can restore the negotiations by changing the global from its default [9].
- **Consequences:**
  - No hold trades happen (inference from [2][9]).
  - The vanilla rule that the war goes "on hold until the Main Quest is complete" after the truce never applies (inference from [2][9]).
  - Not verified: whether the edit also covers a Stormcloak Jarl of Whiterun (Vignar) if Whiterun has already fallen. The mod page names Balgruuf only [9].

### Battle of the Champions (ccFFBSSE001_Quest) — removed; replaced by "Civil War Champion Armor" (CWCRQuest)
- **Vanilla (Creation Club "Civil War Champions", `ccFFBSSE001-ImperialDragon.esl`):** a note at The Drunken Huntsman, or a courier letter, starts a champion contest. Imperial candidates pose as a soldier or persuade the Legate. Stormcloak candidates deliver five snow bear pelts to Yrsarald in Windhelm, or steal Klija's from Kynesgrove. The quest ends in a battle against the opposing champion and their soldiers on the plains of Whiterun Hold, directly west of Shimmermist Cave, and the reward is the Imperial Dragon or Storm-Bear armor set [4][6].
- **In LoreRim:** **Civil War Champions - Reduced Cut** overrides `ccFFBSSE001_Quest` and `ccFFBSSE001_CorpseCheck` and the Drunken Huntsman trigger, removing the quest [7][8]. Instead, a misc quest, **Civil War Champion Armor**, with the objective "Pick up champion armor from your commanding officer", starts shortly after **Battle for Solitude** or **Battle for Windhelm** begins, depending on your side [7][8].
  - You tell your commanding officer "I want to fight as your champion." Your follow-up line depends on your side: "…champion of the Imperial Legion and defeat Ulfric Stormcloak" or "…champion of the Stormcloaks and defeat General Tullius" [8].
  - Armor and weapon stats are unchanged [8].
  - Since v2, you can also take the **opposing** champion's set from a hidden chest in Castle Dour or the Palace of the Kings [8].
  - If the quest does not start, the mod author gives the console fallback `setstage cwcrquest 10`. The mod should not be added while "Battle of Champions" is running [8].
  - LoreRim ships JK's Palace of the Kings and JK's Drunken Huntsman compatibility patches for it [20].

### Repairing the Cities (CWRepairs) — new post-war quest
- **Added by After the Civil War - Siege Damage Repairs.** It starts 2–3 days after the war ends, once Ulfric or Tullius is dead, and only after you have left Solitude or Windhelm [10].
  - Objectives: "During the next two days, the Temple of the Divines in Solitude will be collecting donations to accelerate the reconstruction" → "Works are underway, now it's just a matter of waiting" [10].
  - Repair time depends on your donation [10]:

    | Donation | Repairs done in about |
    |---|---|
    | none | 20–21 days |
    | 5,000 | 15–16 days |
    | 10,000 | 10–11 days |
    | 15,000 | 5–6 days |
    | steal the donations | 30–31 days |

  - Solitude or Windhelm, and Whiterun, revert to their pre-siege state [10].
  - The quest completes when you enter any interior after the timer expires [10].
  - LoreRim ships the JK's Temple patch (`CWR_JKTemple_Patch.esp`) plus Snazzy Interiors and RedBag's Solitude patches [10][20].
  - See [mod-added/after-the-civil-war.md](../mod-added/after-the-civil-war.md).

## Locations
- **Castle Dour (Solitude) / Palace of the Kings (Windhelm)** — faction HQs. After the war they hold the displayed Jagged Crown and the hidden chest with the opposing champion set [8][11].
- **Temple of the Divines (Solitude)** — the donation box for Repairing the Cities [10].
- **The Drunken Huntsman (Whiterun)** — the vanilla CC start point, neutralized by Reduced Cut [4][8].
- **Whiterun Imperial Camp** — fixed by Whiterun Imperial Camp Fixes [16].
- **Military camps** — removed 7–10 days after their commander dies [10].

## Rewards & notable items
- **Imperial Dragon Armor** (Legion) or **Storm-Bear Armor** (Stormcloak), with weapons, collected from your commanding officer just before the final siege. The other side's set is in the hidden HQ chest [4][6][8].
- Vanilla faction rewards and achievements are unchanged: Taking Sides, War Hero, Hero of Skyrim [1].

## LoreRim notes
- **Bug-fix overrides:** USSEP overrides CW02A/B, CW03, CWFortSiegeCapital/Fort, CWMission03/04/07, CWObj, CWSiegeObj and several hidden CW controller quests. Official Master Files - Cleaned Plugins touches CWSiege, and the Unofficial Skyrim Creation Club Content Patches touch the CC Corpse Check quest. All of these are fixes, not design changes [6]. Dvs' Civil War Fixes (loose scripts, no plugin) is meant to load below USSEP and other CW mods [12].
- **Dialogue and flavor:**
  - Civil War Lines Expansion adds about 500 conditional lines spliced from vanilla audio for Imperial and Stormcloak soldiers. The lines react to who holds which city and to your race [17].
  - Dialogue Expansion - Imperial Soldiers adds greetings and 13 scenes for Imperial soldiers [18].
  - REBEL NORTH - Immersive Dialogue Expansion - Stormcloaks adds about 500 AI-voiced lines, camp banter and battlefield reports, plus Galmar dialogue. It also gives the Gray-Mane brothers a Civil War role after "Missing in Action", with a Civil War epilogue. If Missing in Action was already done when the mod was installed, Geirlund and Vidrald are left out [15].
- **Visual only:** New Legion (Legion armor replacer), Sons of Skyrim (with a Requiem patch), Imperial Castles of Skyrim and Medieval Towers forts change looks, not quests [20].
- **Verifier correction (2026-10-02):** the vanilla Battle of the Champions location originally read "a duel against the opposing champion's garrison east of Whiterun"; UESP places it "on the plains of Whiterun Hold directly west of Shimmermist Cave" [4].
- **Not found:** no Requiem-specific Civil War quest changes, and no LoreRim delayed-start gate for the questline [7][20].

## Related
- [vanilla-changes/main-quest-and-alternate-start.md](main-quest-and-alternate-start.md) — The Fallen, Alternate Perspective start
- [mod-added/after-the-civil-war.md](../mod-added/after-the-civil-war.md)
- [mod-added/penitus-oculatus.md](../mod-added/penitus-oculatus.md)
- [vanilla-changes/creation-club.md](creation-club.md)
- [areas/haafingar-and-solitude.md](../areas/haafingar-and-solitude.md), [areas/eastmarch-and-windhelm.md](../areas/eastmarch-and-windhelm.md), [areas/whiterun-hold.md](../areas/whiterun-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | vanilla questline structure, joining, final battles, achievements | [UESP — Skyrim:Civil War](https://en.uesp.net/wiki/Skyrim:Civil_War) | n/a | 2026-10-02 |
| 2 | Season Unending trigger, skip conditions, hold trades, "on hold" rule | [UESP — Skyrim:Season Unending](https://en.uesp.net/wiki/Skyrim:Season_Unending) | n/a | 2026-10-02 |
| 3 | Message to Whiterun prerequisites (Dragon Rising) | [UESP — Skyrim:Message to Whiterun (Imperial)](https://en.uesp.net/wiki/Skyrim:Message_to_Whiterun_(Imperial)) | n/a | 2026-10-02 |
| 4 | vanilla CC Battle of the Champions start/rewards | [UESP — Skyrim:Battle of the Champions](https://en.uesp.net/wiki/Skyrim:Battle_of_the_Champions) | n/a | 2026-10-02 |
| 5 | The Fallen: Jarl demands truce | [UESP — Skyrim:The Fallen](https://en.uesp.net/wiki/Skyrim:The_Fallen) | n/a | 2026-10-02 |
| 6 | exact quest names/objectives; override map | LoreRim install: Skyrim.esm / ccFFBSSE001-ImperialDragon.esl QUST records (official-quests.json) + vanilla-quest-overrides.json | n/a | 2026-10-02 |
| 7 | LoreRim's stated Champions change | [LoreRim site — Creation Club](https://www.lorerim.com/guides/quests/creation-club) | n/a | 2026-10-02 |
| 8 | Civil War Champion Armor quest, dialogue, chests, console fallback | LoreRim install: `Civil War Champions - Reduced Cut.esp` records + bundled readme; [Nexus 94999](https://www.nexusmods.com/skyrimspecialedition/mods/94999) via meta.ini cache | 2023-07-04 (nexusLastModified) | 2026-10-02 |
| 9 | no Season Unending; global; MQ301 topics | LoreRim install: `CWFO_TheFallen.esp` records; [Nexus 33067](https://www.nexusmods.com/skyrimspecialedition/mods/33067) via meta.ini cache | 2020-02-26 (nexusLastModified) | 2026-10-02 |
| 10 | Repairing the Cities; Military Camps Begone | LoreRim install: `CWRepairs.esp` records; [Nexus 20668](https://www.nexusmods.com/skyrimspecialedition/mods/20668) (2025-10-08) and [Nexus 68520](https://www.nexusmods.com/skyrimspecialedition/mods/68520) (2025-10-25) via meta.ini cache | see row | 2026-10-02 |
| 11 | Jagged Crown display | [Nexus 85699 — The Jagged Crown Tweaks](https://www.nexusmods.com/skyrimspecialedition/mods/85699) via meta.ini cache | 2023-03-02 (nexusLastModified) | 2026-10-02 |
| 12 | script fixes (sieges, respawns, Report for Duty, music) | [Nexus 172831 — Dvs' Civil War Fixes](https://www.nexusmods.com/skyrimspecialedition/mods/172831) via meta.ini cache + bundled TESTING_INSTRUCTIONS.txt | 2026-02-20 (nexusLastModified) | 2026-10-02 |
| 13 | Talos → Kynareth statue in Whiterun | [Nexus 91440 — Kynareth Replaces Talos](https://www.nexusmods.com/skyrimspecialedition/mods/91440) via meta.ini cache | 2024-09-19 (nexusLastModified) | 2026-10-02 |
| 14 | neutral Whiterun guards before Balgruuf picks a side | [Nexus 70197 — Neutral Whiterun Guards](https://www.nexusmods.com/skyrimspecialedition/mods/70197) via meta.ini cache | 2024-11-30 (nexusLastModified) | 2026-10-02 |
| 15 | Stormcloak dialogue, Gray-Mane plot | [Nexus 178880 — REBEL NORTH](https://www.nexusmods.com/skyrimspecialedition/mods/178880) via meta.ini cache | 2026-05-19 (nexusLastModified) | 2026-10-02 |
| 16 | Whiterun Imperial Camp fixes | [Nexus 96646 — Whiterun Imperial Camp Fixes](https://www.nexusmods.com/skyrimspecialedition/mods/96646) via meta.ini cache | 2023-07-25 (nexusLastModified) | 2026-10-02 |
| 17 | soldier line expansion | [Nexus 77566 — Civil War Lines Expansion](https://www.nexusmods.com/skyrimspecialedition/mods/77566) via meta.ini cache | 2024-07-22 (nexusLastModified) | 2026-10-02 |
| 18 | Imperial soldier dialogue | [Nexus 113208 — Dialogue Expansion - Imperial Soldiers](https://www.nexusmods.com/skyrimspecialedition/mods/113208) via meta.ini cache | 2024-03-06 (nexusLastModified) | 2026-10-02 |
| 19 | Alternate Perspective Helgen start | [Nexus 50307 — Alternate Perspective](https://www.nexusmods.com/skyrimspecialedition/mods/50307) via meta.ini cache | 2025-12-10 (nexusLastModified) | 2026-10-02 |
| 20 | enabled mods/plugins & patches; Experience.ini XP; visual mods | LoreRim install: profiles/Default modlist.txt + plugins.txt; "LoreRim - MCM and INI Settings" SKSE/Plugins/Experience.ini; Medieval Towers (Nexus 132923) meta.ini cache | n/a | 2026-10-02 |
