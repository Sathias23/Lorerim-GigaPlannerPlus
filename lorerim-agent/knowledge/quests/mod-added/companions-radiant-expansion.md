---
id: companions-radiant-expansion
title: Companions Radiant Expansion
kind: mod-added
category: radiant
summary: Reworks how the Companions hand out their vanilla radiant jobs — you pick the job type in dialogue ("Do you need anyone killed?", "Does anyone need to be rescued?" …), the acceptance line names the target, and several different job types can run at once. LoreRim ships the Requiem build. No new quests.
mods:
  - name: Companions Radiant Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/169920
    version: 1.1.0.0 (Requiem file)
  - name: Customizable Companions Questline Progression Requirements
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/78308
    version: 1.3.0.0
plugins: [Companions Radiant Expansion.esp, CompanionsProgressionRequirements.esp]
quests: [Animal Extermination, Hired Muscle, Trouble in Skyrim, Family Heirloom, Escaped Criminal, Rescue Mission, Animal Pelt Collection, Striking the Heart, Stealing Plans, Retrieval, Totems of Hircine, Purity, Dragon Seekers]
locations: [Jorrvaskr, Whiterun]
region: Whiterun (Jorrvaskr); jobs go anywhere in Skyrim
start: Join the Companions (finish Take Up Arms), then ask a Circle member at Jorrvaskr "I'm looking for work." and pick the job type. In LoreRim you need 3 radiant jobs before Proving Honor, 5 before The Silver Hand and 4 before Blood's Honor.
related: [vanilla-changes/companions.md, mod-added/requiem-quests.md, areas/whiterun-hold.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
confidence: medium
updated: 2026-10-02
---

# Companions Radiant Expansion

Companions Radiant Expansion does **not** add new quests. It overrides eleven vanilla Companions radiant quests and adds dialogue so that you choose which kind of job to take and see the target before accepting [1][2]. The Nexus summary describes it as letting you take multiple Companions radiant quests at once and naming the target location. For example, instead of "I'll take care of it" you say "I'll clear out the bandit camp at …" [2]. LoreRim installed the separate **Requiem** file of v1.1 [3].

## Starting in LoreRim
- **Prerequisite:** the vanilla radiant pool opens after Take Up Arms [4]. The Silver Hand jobs open after The Silver Hand, and the post-questline jobs after Glory of the Dead [4].
- **How:** talk to a Circle member (Aela, Farkas, Vilkas or Skjor) and choose "I'm looking for work." The mod then offers one prompt per job type [1]:
  - "Are there any Animals that need to be killed?" / "Are there any animals that need to be hunted?"
  - "Do any Animal Dens need cleared?"
  - "Do you need anyone to be intimidated?"
  - "Do you need anyone killed?"
  - "Do you have anything you need recovered?"
  - "Do you have anyone you need hunted down?"
  - "Does anyone need to be rescued?"
- **Accepting:** the reply names the target, for example "I can clear out `<Location>` in `<Hold>`." or "I can kill the escaped prisioner in `<Hold>`." [1]
- **Limit per job type:** each job type is still a single quest record. If that type is already running for another Circle member, you hear "Aren't you already running a job for Aela? Come talk to me when you finish that up." [1]
- **LoreRim progression gate:** LoreRim ships *Customizable Companions Questline Progression Requirements* with its JSON set to **3** radiant jobs before Proving Honor, **5** before The Silver Hand and **4** before Blood's Honor [5]. Vanilla needs 1, 1 and 2 [6]. The LoreRim site confirms the questline needs more radiant jobs through this mod and *Improved Companions - Questline Tweaks* [7].

## Quests
Each entry gives the vanilla quest name (EditorID), what it asks, and the mod's new dialogue hook. Objectives come from the vanilla records. CRE overrides all of these except CR01, CR02 and CR04, which it hooks through dialogue only [1][4][8].

### Animal Extermination (CR01 / CR02)
- **CR01:** kill the beast. New prompt: "Are there any Animals that need to be killed?" [1][8]
- **CR02:** clear out the animal den. New prompt: "Do any Animal Dens need cleared?" [1][8]

### Hired Muscle (CR04)
- **Objective:** intimidate the brute in their town [8].
- **New prompt:** "Do you need anyone to be intimidated?" [1]

### Trouble in Skyrim (CR05)
- **Objective:** kill the leader of the location [8].
- **New prompt:** "Do you need anyone killed?" [1]

### Family Heirloom (CR06)
- **Objective:** retrieve the heirloom from the location [8].
- **New prompt:** "Do you have anything you need recovered?" [1]

### Escaped Criminal (CR07)
- **Objective:** kill the escaped criminal [8].
- **New prompt:** "Do you have anyone you need hunted down?" [1]

### Rescue Mission (CR08)
- **Objective:** rescue the victim, then escort them home [8].
- **New prompt:** "Does anyone need to be rescued?" [1]

### Animal Pelt Collection (CR03)
- **Objective:** collect N pelts [8].
- **Status:** vanilla has this quest only as unfinished content, and it never runs in the base game [9]. CRE overrides it and adds the prompt "Are there any animals that need to be hunted?" [1]. Whether this makes it obtainable in LoreRim is **unverified**.

### Striking the Heart / Stealing Plans / Retrieval (CR09–CR11)
- **What they are:** the Silver Hand jobs from Aela [4][8].
- **New lead-ins:**
  - Striking the Heart: "What's the next target? Do you know of any Silver Hand strongholds?"
  - Stealing Plans: "… Do you know what the Silver Hand are planning?"
  - Retrieval: "… Have you located any more fragments of Wuuthrad?" [1]

### Totems of Hircine / Purity / Dragon Seekers (CR12–CR14)
- **What they are:** post-questline jobs [4].
- **New prompts:** [1]
  - Totems of Hircine: "Is there any work to be done? Do you have anything you need found?"
  - Purity: "… You look troubled."
  - Dragon Seekers: "… You look like your planning something." with the reply "Let's go kill a dragon."
- **Purity dialogue:** the installed plugin also has Purity lines about the Glenmoril witch-head and hagraven-head requirement. Whether these lines are specific to the Requiem build was not checked [1].

## Rewards & notable items
Rewards are unchanged from the vanilla quests as far as the plugin shows. It contains only QUST, DIAL and INFO records: no new items, leveled lists or globals [1].

## LoreRim notes
- **Requiem build:** the installed archive is `Companions Radiant Expansion - Requiem 1.1` [3].
- **Overrides:** the plugin masters USSEP. Of the overridden quests, Requiem also overrides Trouble in Skyrim, Family Heirloom and Rescue Mission, and NGCDT also overrides Dragon Seekers [10].
- **Compatibility:** the author lists as compatible every Companions mod LoreRim ships alongside it [2][3]:
  - Customizable Companions Questline Progression Requirements
  - Improved Companions - Questline Tweaks
  - Proving Honor Companions Quest Progression Fix
  - Companions Dialogue Bundle
  - CAM - Companions at Mirmulnir
  - The Choice is Yours
  - NGCDT
- **At Your Own Pace:** the author says CRE is not compatible with *At Your Own Pace*, which LoreRim does not install [2][3].
- **Werewolf cure:** the plugin also touches a Dawnguard Aela topic, "I wish to regain the gift of beast blood." [1]

## Related
- [Companions (vanilla changes)](../vanilla-changes/companions.md)
- [Requiem quests](requiem-quests.md)
- [Whiterun Hold](../areas/whiterun-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | dialogue prompts, overridden quests, record types | LoreRim install: `Companions Radiant Expansion.esp` QUST/DIAL/INFO records (parsed) | mod v1.1.0.0 | 2026-10-02 |
| 2 | feature summary, compatibility list | [Nexus page 169920](https://www.nexusmods.com/skyrimspecialedition/mods/169920) via meta.ini cache (compat only) + web-search summary of same page (direct fetch blocked, 403) | 2026-06-09 (nexusLastModified) | 2026-10-02 |
| 3 | Requiem file installed; co-installed Companions mods | LoreRim install: meta.ini `installationFile`; Default profile modlist | n/a | 2026-10-02 |
| 4 | vanilla radiant pools and unlock points | [UESP — Skyrim:Companions](https://en.uesp.net/wiki/Skyrim:Companions) | n/a | 2026-10-02 |
| 5 | LoreRim requirement values 3/5/4 | LoreRim install: `Customizable Companions Questline Progression Requirements/SKSE/Plugins/StorageUtilData/CompanionsProgressionReqs.json` | v1.3.0.0 | 2026-10-02 |
| 6 | vanilla 1/1/2 requirements | [Nexus page 78308](https://www.nexusmods.com/skyrimspecialedition/mods/78308) via meta.ini cache | 2024-07-13 | 2026-10-02 |
| 7 | LoreRim raises radiant requirements | [LoreRim site — Factions](https://www.lorerim.com/guides/quests/factions) | n/a | 2026-10-02 |
| 8 | vanilla quest names/objectives | corpus import `official-quests.json` (Skyrim.esm strings) | n/a | 2026-10-02 |
| 9 | Animal Pelt Collection unfinished in vanilla | web search summary of UESP Unfinished Quests / CRF pages | n/a | 2026-10-02 |
| 10 | other overriders of CR quests | corpus import `vanilla-quest-overrides.json` | n/a | 2026-10-02 |
