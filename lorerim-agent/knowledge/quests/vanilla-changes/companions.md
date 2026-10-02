---
id: companions
title: The Companions (LoreRim changes)
kind: vanilla-changes
category: questline
summary: The vanilla Companions questline (Take Up Arms through Glory of the Dead) is still there in LoreRim. You need 3 radiant jobs before Proving Honor, 5 before The Silver Hand and 4 before Blood's Honor, where vanilla asks for 1, 1 and 2. You can now turn down Aela's blood in the Underforge, and several small mods add dialogue, skips and fixes.
mods:
  - name: Customizable Companions Questline Progression Requirements
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/78308
    version: 1.3.0.0
  - name: Improved Companions - Questline Tweaks
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/22300
    version: 1.1.0.0
  - name: Proving Honor Companions Quest Progression Fix
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/66128
    version: 1.0.0.0
  - name: Vilkas Spar Skip
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/127292
    version: 1.0.0.0
  - name: Companions Dialogue Bundle
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/93592
    version: 1.6.0.0
  - name: CAM - Companions at Mirmulnir
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/125920
    version: 1.3.0.0
  - name: Companions Radiant Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/169920
    version: 1.1.0.0
  - name: Narrative Gameplay Consistent Dialogue Tweaks
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/64667
    version: 1.16.3.0
  - name: ArteFakes Updated Plugin
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/41254
    version: 2.0.0.0
  - name: Skyforge Immersion Addon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/144420
    version: 1.0.0.0a
  - name: Dustman's Cairn Boss - Thohild the Inferno
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/131502
    version: 1.0.0.0
  - name: HOUSE OF WARRIORS - Immersive Dialogue Expansion - Jorrvaskr (Companions)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/173134
    version: 1.0.1.0
  - name: Requiem - The Roleplaying Overhaul (No Messages ESLIFIED)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/60888
    version: 6.0.2.0
  - name: Growl - Werebeasts of Skyrim
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/31245
    version: 3.7.2.0
plugins: [CompanionsProgressionRequirements.esp, CompanionsTweaks.esp, Proving Honor Companions Quest Progression Fix.esp, Vilkas Spar Skip.esp, Companions Dialogue Bundle.esp, Companions at Mirmulnir.esp, Companions Radiant Expansion.esp, Narrative Gameplay Consistent Dialogue Tweaks.esp, ArteFake.esp, SkyforgeImmersionAddon.esp, Dustman's Cairn Boss - Requiem.esp, IDE Jorrvaskr.esp, Requiem.esp, Growl - Werebeasts of Skyrim.esp]
quests: [Take Up Arms, Proving Honor, Brotherhood, The Silver Hand, Blood's Honor, Purity of Revenge, Glory of the Dead, Animal Extermination, Animal Pelt Collection, Hired Muscle, Trouble in Skyrim, Family Heirloom, Escaped Criminal, Rescue Mission, Striking the Heart, Stealing Plans, Retrieval, Totems of Hircine, Purity, Dragon Seekers]
locations: [Jorrvaskr, Skyforge, Underforge, Dustman's Cairn, Gallows Rock, Western Watchtower]
region: Whiterun Hold (Jorrvaskr, Whiterun)
start: Same as vanilla. Join by talking to Kodlak Whitemane in Jorrvaskr, Whiterun; the giant fight outside Whiterun with Aela, Ria and Farkas points you there. No delayed-start gate was found. LoreRim's gates sit between quests instead, at 3/5/4 radiant jobs before Proving Honor, The Silver Hand and Blood's Honor.
related: [mod-added/companions-radiant-expansion.md, vanilla-changes/main-quest-and-alternate-start.md, mod-added/follower-dialogue-expansions.md, mod-added/requiem-quests.md, areas/whiterun-hold.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
confidence: high
updated: 2026-10-02
---

# The Companions (LoreRim changes)

In vanilla Skyrim the Companions are a warrior guild based in Jorrvaskr, Whiterun. The questline has six main quests: **Take Up Arms**, **Proving Honor**, **The Silver Hand**, **Blood's Honor**, **Purity of Revenge** and **Glory of the Dead**, and it ends with you as Harbinger, holding Wuuthrad and the Shield of Ysgramor [1]. You run radiant jobs between the story quests. Vanilla asks for 1 before Proving Honor, 1 before The Silver Hand, and 2 before Blood's Honor, the first of those from Aela [1]. LoreRim keeps the vanilla story but raises those radiant counts, lets you refuse lycanthropy without breaking the quest, and adds fixes, skips and extra dialogue [5][6][7].

## Starting in LoreRim
- **Same start as vanilla.** Speak to **Kodlak Whitemane** in **Jorrvaskr** [1]. The giant fight near Pelagia Farm outside Whiterun with Aela, Ria and Farkas sends you to Kodlak, and Whiterun citizens can point you to him too [2].
- **No delayed-start or level gate on joining.** The install ships "Delayed Quest Starts" mods only for other quests (CC Fishing, Forsworn Conspiracy, House of Horrors, Mind of Madness, Taste of Death). None of them is for the Companions [18].
- **The giant encounter is changed.**
  - Improved Companions makes the giant fight last longer so you can join in [7].
  - Narrative Gameplay Consistent Dialogue Tweaks (NGCDT) shrinks the event's trigger box so it fires later. It also adds roleplay lines for Aela [13].
  - With NGCDT, Farkas's "you look strong" lines only play if you have 30+ in One-Handed, Two-Handed, Block or Archery, or 150+ Health or Stamina [13].
- **LoreRim's own gate is the radiant job count.** The LoreRim site says the Companions use Improved Companions - Questline Tweaks and Customizable Companions Questline Progression Requirements to "increase and allow to customize" the number of radiant quests needed [5].
  - The shipped settings are the **"(3-5-4)" preset**: **3 radiant jobs before Proving Honor, 5 before The Silver Hand, 4 before Blood's Honor** [6]. Vanilla is 1/1/2 [1].
  - The values are read from `SKSE/Plugins/StorageUtilData/CompanionsProgressionReqs.json` once, about 15 seconds after a new game starts or after the mod first loads on a save. Editing the file later does nothing on a save that has already initialised it [6].

## Quests

### Take Up Arms (C00)
- **Vanilla:** Kodlak has Vilkas spar with you. You then carry Vilkas's sword to Eorlund Gray-Mane at the Skyforge and take a shield back to Aela, and Farkas shows you the living quarters [2].
- **In LoreRim:**
  - **The spar can be skipped (Vilkas Spar Skip).** In the yard, choose **"So you're supposed to train me?"** and Vilkas hands you his sword with the next objective, with no fist fight. The mod's script sets the training quest to its done stage [9]. "Attack Vilkas" is still offered if you want to fight [9].
  - **The spar is cleaner (Improved Companions).** Vilkas no longer uses combat alerts and taunts while training you, and Ria no longer panics if she sees the fight in Jorrvaskr [7].
  - **New dialogue (Companions Dialogue Bundle).** You can tell Aela you couldn't reach the giant in time, tell her you already know who the Companions are, and ask the Circle where Kodlak is [10].
    - It adds 7 new scenes between Companions, Skjor's Great War stories, and 6 daily "advice" lines from Skjor [10].
    - It fixes questgivers standing by the door after giving you a job [10].
    - It overrides `C00` and `C00GiantAttack` [10][18].
  - **Better quest items (ArteFakes).** Aela's Shield and Vilkas's sword become upgraded unique items. Vilkas's sword "can be redeemed after being handed over to Eorlund" [14].
  - **Requiem** also overrides `C00` [18]. What Requiem changes there was not determined.

### Proving Honor (C01)
- **Vanilla:** Skjor sends you to **Dustman's Cairn** for a Fragment of Wuuthrad with **Farkas** as your Shield-Brother and observer. Back in Whiterun, Vilkas leads you to the Skyforge for your initiation [3].
  - Rewards are a Skyforge Steel weapon of your choice, a Word for Fire Breath, and the right to buy Skyforge Steel and Wolf Armor [3].
- **In LoreRim:**
  - **Gate:** 3 radiant jobs first, where vanilla needs 1 [6][1]. Journal text from the plugin: *"The Companions leaders say they don't have any more work for me, but that I should speak to Skjor about 'the next steps.'"* [7]
  - **Observer (Improved Companions).**
    - The mod page says Aela can be your Shield-Sibling if she is your "favorite quest giver" [7].
    - The meet-at-the-cairn line ("I'll meet you at Dustman's Cairn.") now appears below the other dialogue options [7].
    - It fixes a script error that let the observer do favours after reverting from werewolf form [7].
  - **Objectives (plugin records):** Speak to Skjor → Speak to <Observer> → Retrieve the fragment → Return to Jorrvaskr → Follow Vilkas [7].
  - **Fixed return trigger (Proving Honor Companions Quest Progression Fix).** In vanilla, Vilkas only waits at Jorrvaskr if you come in through the main gate or the top of the Dragonsreach stairs. Otherwise talking to Skjor ends the quest without starting the next one.
    - With this mod, entering Whiterun any way at all sets up the ending [8]. It is an ESL plugin and makes no quest edits [8].
  - **Harder dungeon (Dustman's Cairn Boss - Thohild the Inferno).** The central coffin now always holds **Thohild the Inferno**, a Draugr Death Overlord, where vanilla puts a random enemy [16].
    - She uses Fire Breath, Unrelenting Force and Disarm, a Flame Cloak, a Potent Flame Thrall, and summoned Flaming Wolves that explode [16].
    - She carries a fire-enchanted Ancient Nord mace, and her health and magicka are raised [16]. The installed file is the Requiem version [16].
  - **Requiem** also overrides `C01` [18]. Its changes were not determined.

### Brotherhood (C02)
- **Vanilla:** the initiation at the Skyforge after Proving Honor [3].
- **In LoreRim:** only cleaned-master edits; no design change [18].

### The Silver Hand (C03)
- **Vanilla:** Skjor meets you at night outside the **Underforge**. There you drink Aela's blood, which makes you a werewolf, then go on a rampage, wake with Aela, and clear **Gallows Rock**, where Skjor has died [4].
  - Rewards are lycanthropy and a seat in the Circle [4]. In vanilla UESP does not present the blood as optional [4].
- **In LoreRim:**
  - **Gate:** 5 radiant jobs first, where vanilla needs 1 [6][1].
  - **You can refuse (Improved Companions).** The LoreRim site highlights this: you can "back out of becoming a werewolf without leaving Skjor and Aela stuck in the Underforge forever" [5]. The new plugin dialogue [7]:
    - **"What if I don't want to be a werewolf?"** Skjor answers: *"That is your choice. We will not force you. But to join the Circle, your blood must be as ours… Meet us here when you're ready."*
    - When you return, Skjor asks *"Are you prepared?"*, offering **"Yes, I'm prepared."** or **"No, I need more time."**
  - **What happens if you leave:** Skjor and Aela go back to their daily lives and return at night, and the Companions' radiant jobs reopen [7].
    - The plugin scripts reopen radiant quests when you leave. They push the Blood's Honor minimum-level gate up by 1000 while you are away and remove it again when you come back [7].
  - **Schedule fixes:** Skjor no longer waits until 8pm, Aela doesn't go down to the Underforge until 6pm, and Skjor no longer thinks it is day at night [7].
  - **Skyforge access (Skyforge Immersion Addon).** LoreRim installs the default **"Skyforge cannot be used until it has been earned"** option [15].
    - You ask Eorlund **"May I use the Skyforge?"**. He agrees only after you finish **The Silver Hand** (joining the Circle) or the side quest **Missing In Action** [15].
    - Near the Skyforge, weapons and armour improve 5% better. That rises to 10% after a certain Companion dies [15].

### Blood's Honor (C04)
- **Vanilla:** claim a Glenmoril Witch's head for Kodlak [1]. You need 2 radiant jobs first, the first from Aela [1].
- **In LoreRim:**
  - **Gate:** 4 radiant jobs first [6].
  - The quest itself has only Unofficial Patch fixes [18].

### Purity of Revenge (C05) and Glory of the Dead (C06)
- **Vanilla:**
  - In Purity of Revenge you recover the Wuuthrad fragments and wipe out the Silver Hand [1].
  - In Glory of the Dead you cure Kodlak's spirit at Ysgramor's Tomb and become Harbinger [1].
- **In LoreRim:** only cleaned-master and Unofficial Patch edits; no design change [18].

### Radiant jobs (CR01–CR14)
- **Vanilla:** Aela, Farkas, Vilkas and Skjor hand out jobs.
  - **After Take Up Arms:** *Animal Extermination*, *Hired Muscle*, *Trouble in Skyrim*, *Family Heirloom*, *Escaped Criminal* and *Rescue Mission* [1].
  - **After The Silver Hand, from Aela:** *Striking the Heart*, *Stealing Plans* and *Retrieval* [1].
  - **After the questline:** *Totems of Hircine* (only while a werewolf, 3 times), *Purity* (Farkas and Vilkas only) and *Dragon Seekers* [1].
- **In LoreRim (Companions Radiant Expansion, Requiem version installed):**
  - The mod overrides CR03, CR05–CR14 [12][18]. It is described as letting you **hold several Companions radiant jobs at once**, as **showing the target before you accept**, and as script-free [12].
  - The plugin replaces the generic "I'll take care of it" with job-specific options [12]. Examples:
    - "I'm looking for work. Do any Animal Dens need cleared?" / "I can clear out <Alias=Location> in <Alias=LocationHold>."
    - "I can intimidate <Alias=Brute> in <Alias=BruteTown>."
    - "I can kill the escaped prisioner in <Alias=LocationHold>." (sic)
  - The mod was built as a slimmed port of *At Your Own Pace* [12].
  - Full details are in [mod-added/companions-radiant-expansion.md](../mod-added/companions-radiant-expansion.md).
- **Dragon Seekers (CR14), changed by NGCDT.** It now requires that you have finished **Unbound**, where vanilla checks "dragons returned" (this suits alternate starts). You still need to have completed the Companions questline [13].
  - Farkas and Vilkas also get alternate lines that admit dragons are back [13].
- **Requiem** overrides CR05, CR06 and CR08 [18]. Its changes were not determined.

## Related Main Quest change: Companions at Mirmulnir
**CAM - Companions at Mirmulnir** changes *Dragon Rising*. After the Jarl sends you to the **Western Watchtower**, you can ask Skjor in Jorrvaskr: **"A Dragon has been sighted near the Western Watchtower. Will the Companions offer aid?"** [11]
- You win him over with a **Persuade** ("Whiterun is your hometown, isn't it?…") or a **bribe** ("<BribeCost> gold") [11].
- The option only appears once the giant fight and the Athis–Njada sparring scene have finished [11].
- If you have already finished **Proving Honor**, the Companions always come [11].
- Two Circle members and two Newbloods show up. They are essential for the fight and carry bows [11].
- See [vanilla-changes/main-quest-and-alternate-start.md](main-quest-and-alternate-start.md).

## Locations
- **Jorrvaskr** (Whiterun): the guild hall. HOUSE OF WARRIORS – Immersive Dialogue Expansion – Jorrvaskr adds 463 AI-voiced lines [17]:
  - questline commentary and toasts
  - banter between Shield-Siblings
  - the ability to assign tasks to Companions after you become Harbinger
- **Skyforge / Underforge**: initiation and transformation sites. Skyforge use is gated in LoreRim (see The Silver Hand) [15].
- **Dustman's Cairn**: the Proving Honor dungeon. It has a new boss, Thohild the Inferno [16].

## Rewards & notable items
- The vanilla rewards are unchanged as far as the sources say: a Skyforge Steel weapon, a Fire Breath word, Wuuthrad, the Shield of Ysgramor and the Harbinger title [1][3].
- ArteFakes upgrades **Aela's Shield** (you can collect it from Aela after the quest) and **Vilkas's Sword** [14].
- Skyforge Immersion Addon adds the "Power of the Skyforge" improvement bonus near the forge [15].

## LoreRim notes
- **Name note (verifier).** The Skyforge Immersion Addon page writes "Missing in Action"; the Skyrim.esm quest record name is "Missing In Action", used above [15][18].
- **Fix-only overrides:**
  - Official Master Files - Cleaned Plugins and the Unofficial Skyrim Special Edition Patch touch C00–C06 and CR01–CR14.
  - Requiem overrides C00, C01, C03Rampage, CR05, CR06 and CR08.
  - These are treated as fixes or balance and are not described quest by quest [18].
- **Lycanthropy is overhauled.** Growl - Werebeasts of Skyrim (v3.7.2) is installed [19]:
  - Beast Form becomes a 150-second power with a 90-second cooldown.
  - Beastblood gives disease immunity and +75 armour but 25% fire weakness and extra silver damage.
  - Each race gets its own perk.
  - "Call of the Blood" can force you to transform at night, with a 15-second warning; Hircine's Ring disables it [19].
  - This makes the Silver Hand choice weightier in LoreRim (editorial inference, unsourced).
- **Compatibility.** Companions Radiant Expansion lists compatibility with all of the Companions mods above. It is "NOT COMPATIBLE" with *At Your Own Pace*, which LoreRim does not ship [12][18]. Customizable Progression Requirements likewise doesn't work with At Your Own Pace [6].
- **Mod-page caveat.** CAM's author notes that having four warriors at the Mirmulnir fight can trivialise it [11].

## Related
- [mod-added/companions-radiant-expansion.md](../mod-added/companions-radiant-expansion.md)
- [vanilla-changes/main-quest-and-alternate-start.md](main-quest-and-alternate-start.md) (Dragon Rising / Mirmulnir)
- [mod-added/follower-dialogue-expansions.md](../mod-added/follower-dialogue-expansions.md) (FDE Aela the Huntress)
- [mod-added/requiem-quests.md](../mod-added/requiem-quests.md)
- [areas/whiterun-hold.md](../areas/whiterun-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | vanilla questline, radiant counts 1/1/2, radiant list, rewards | [UESP — Skyrim:Companions](https://en.uesp.net/wiki/Skyrim:Companions) | n/a | 2026-10-02 |
| 2 | Take Up Arms baseline | [UESP — Skyrim:Take Up Arms](https://en.uesp.net/wiki/Skyrim:Take_Up_Arms) | n/a | 2026-10-02 |
| 3 | Proving Honor baseline, Vilkas bug, rewards | [UESP — Skyrim:Proving Honor](https://en.uesp.net/wiki/Skyrim:Proving_Honor) | n/a | 2026-10-02 |
| 4 | The Silver Hand baseline | [UESP — Skyrim:The Silver Hand](https://en.uesp.net/wiki/Skyrim:The_Silver_Hand) | n/a | 2026-10-02 |
| 5 | LoreRim Companions tweaks summary | [LoreRim site — Factions](https://www.lorerim.com/guides/quests/factions) | n/a | 2026-10-02 |
| 6 | 3/5/4 radiant gates, JSON mechanics | LoreRim install: Customizable Companions Questline Progression Requirements (`CompanionsProgressionReqs.json`, script source, FOMOD choice "(3-5-4) More Radiant Quests for the Companions, Option 2") + [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/78308) via meta.ini cache | 2024-07-13 (nexusLastModified) | 2026-01-11 cache |
| 7 | Questline tweaks, Underforge refusal dialogue, C01 objectives | LoreRim install: `CompanionsTweaks.esp` records + script sources; [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/22300) via meta.ini cache | 2019-01-02 | 2026-01-11 cache |
| 8 | Proving Honor return fix | [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/66128) via meta.ini cache | 2022-04-07 | 2026-01-11 cache |
| 9 | Vilkas spar skip | LoreRim install: `Vilkas Spar Skip.esp` records + script; [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/127292) via meta.ini cache | 2024-08-21 | 2026-01-11 cache |
| 10 | Companions Dialogue Bundle features | LoreRim install: Companions Dialogue Bundle meta.ini cache ([Nexus](https://www.nexusmods.com/skyrimspecialedition/mods/93592)) + override list | 2025-05-02 | 2026-01-12 cache |
| 11 | Mirmulnir option | LoreRim install: `Companions at Mirmulnir.esp` records; [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/125920) via meta.ini cache | 2025-04-07 | 2026-01-11 cache |
| 12 | Radiant expansion | LoreRim install: `Companions Radiant Expansion.esp` records, meta.ini (Requiem 1.1 file, compatibility list); Nexus page summary via web search (page itself returned 403) | 2026-06-09 | 2026-10-02 |
| 13 | Giant encounter + Dragon Seekers changes | [NGCDT Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/64667) via meta.ini cache | 2025-12-29 | 2026-01-11 cache |
| 14 | Aela's Shield / Vilkas's sword | [ArteFakes Updated Plugin Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/41254) via meta.ini cache | 2021-09-09 | 2026-01-11 cache |
| 15 | Skyforge gate | LoreRim install: Skyforge Immersion Addon (FOMOD choice, `SkyforgeImmersionAddon.esp` records); [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/144420) via meta.ini cache | 2025-03-12 | 2026-01-11 cache |
| 16 | Dustman's Cairn boss | [Dustman's Cairn Boss Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/131502) via meta.ini cache | 2024-10-14 | 2026-01-11 cache |
| 17 | Jorrvaskr dialogue expansion | [IDE Jorrvaskr Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/173134) via meta.ini cache | 2026-02-22 | 2026-05-24 cache |
| 18 | which plugins override which quests; enabled plugins; DQS mods present; official quest names | LoreRim install: `vanilla-quest-overrides.json` + `official-quests.json` imports + `profiles/Default/plugins.txt` + mods folder listing | n/a | 2026-10-02 |
| 19 | Werewolf mechanics | [Growl Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/31245) via meta.ini cache | 2026-06-08 | 2026-06-08 cache |
