---
id: thieves-guild
title: Thieves Guild (LoreRim changes)
kind: vanilla-changes
category: questline
summary: The vanilla Thieves Guild questline (Riften, Brynjolf) plays largely unchanged in LoreRim. The quest steps themselves are not redesigned. LoreRim changes the edges instead. Guild trophies and the Guildmaster's safe need 25 radiant jobs instead of 125 (Less Tedious Thieves Guild), the Cistern is gradually rebuilt as you progress (GG's Thieves Guild Headquarters), and Darkness Returns now grants extra rewards (Nocturnal's Favor, a permanent Uncanny Luck ability, reworked Nightingale powers). LoreRim's balance plugin adds stealth bonuses to Thieves Guild and Nightingale armor.
mods:
  - name: Less Tedious Thieves Guild
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/6581
    version: 1.1.0.0
  - name: GG's Thieves Guild Headquarters
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/64018
    version: 1.3.1.0
  - name: Nocturnal's Favor
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/128928
    version: 1.0.0.0
  - name: Uncanny Luck - 100 Max Pickpocket Chance After Returning Skeleton Key
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/130008
    version: 0.1.2.0
  - name: Nightingale Powers Redone
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/144539
    version: 1.1.0.0
  - name: Stuff of Shadows - 3D Nightingale Stone - Nightingale and Twilight Sepulcher Improvements and Bug Fixes
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/130481
    version: 0.3.0.0
  - name: Respectful Ravyn
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/143950
    version: 1.0.0.0
  - name: Vittorias Alternate Wedding
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/62466
    version: 1.3.3.0
  - name: Wintersun and Daedric Shrines replacer
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/81577
    version: 1.0.0.0
  - name: "[LoreRim] Thieving XP"
    nexus: n/a (LoreRim-made, no meta.ini)
    version: n/a
  - name: LoreRim - xEdit64 Output
    nexus: n/a (LoreRim output)
    version: n/a
  - name: Unofficial Skyrim Special Edition Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/266
    version: d2025.12.21.0
  - name: LoreRim - MCM and INI Settings
    nexus: n/a (LoreRim settings mod)
    version: n/a
  - name: The Gray Cowl of Nocturnal - 10th anniversary
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/141327
    version: 1.4.0.0
plugins: [Less Tedious Thieves Guild.esp, GG's Thieves Guild Headquarters.esp, Nocturnal's Favor.esp, ConditionalMaxPickpocketChance.esp, NightingalePowersRedone.esp, Nightingale Stuff.esp, Respectful Ravyn.esp, Vittorias Alternate Wedding.esp, Wintersun - Faiths of Skyrim.esp, Thieving XP.esp, Big Tweaks.esp, Unofficial Skyrim Special Edition Patch.esp]
quests: [A Chance Arrangement, Taking Care of Business, Loud and Clear, Dampened Spirits, Scoundrel's Folly, Speaking With Silence, Hard Answers, The Pursuit, Trinity Restored, Blindsighted, Darkness Returns, Under New Management, No Stone Unturned, Silver Lining, The Dainty Sload, Imitation Amnesty, Summerset Shadows, The Numbers Job, The Fishing Job, The Bedlam Job, The Burglary Job, The Shill Job, The Sweep Job, The Heist Job]
locations: [Riften, The Ragged Flagon - Cistern, Nightingale Hall, Twilight Sepulcher]
region: The Rift (Riften), with jobs in Whiterun, Markarth, Windhelm and Solitude
start: "Same as vanilla. No delayed start or extra prerequisite was found in LoreRim. Brynjolf approaches you in Riften's marketplace by day (or at the Bee and Barb at night) and starts A Chance Arrangement. LoreRim's Alternate Perspective also lists a Thieves Guild start option (behavior unverified)."
related: [mod-added/revealing-rune.md, mod-added/gray-cowl-of-nocturnal.md, mod-added/hammerfell-quests-bundle.md, mod-added/vittorias-alternate-wedding.md, mod-added/caught-red-handed.md, vanilla-changes/side-quests-and-misc.md, vanilla-changes/dark-brotherhood.md, vanilla-changes/daedric-quests.md, areas/the-rift-and-riften.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
confidence: medium
updated: 2026-10-02
---

# Thieves Guild (LoreRim changes)

The Thieves Guild is Skyrim's base-game faction questline based in the Ragged Flagon under Riften. It runs 12 main quests, from A Chance Arrangement to Under New Management. Alongside them come four city "reputation" special jobs, No Stone Unturned, and repeatable radiant jobs from Delvin and Vex [1]. LoreRim does not rewrite any main-quest stage. The vanilla TG quest records are overridden only by bug-fix plugins, plus small compatibility hooks from Wintersun and Vittorias Alternate Wedding [18]. LoreRim's changes are to progression pacing, the guild hideout, the Darkness Returns rewards, and Requiem-style item balance [4][7][8][9][10][11][17].

## Starting in LoreRim

- **Vanilla start, no LoreRim gate found.** In vanilla, Brynjolf approaches you at Riften's market stalls by day, or the Bee and Barb by night. He questions your wealth and invites you into the plot that becomes A Chance Arrangement [1]. LoreRim's Factions guide does not describe a delayed start for the Thieves Guild [4]. The install has no "Delayed Quest Starts" or "Sensible … Prerequisite" mod for any TG quest (the installed ones cover other quests), and no mod overrides `TG00` (A Chance Arrangement) [18]. *Confidence: medium (absence of evidence).*
- **Becoming Guild Master is unchanged.** Under New Management has no giver. It starts automatically after Darkness Returns plus all four reputation jobs (Whiterun, the Reach, Eastmarch, Haafingar) [2]. You unlock each reputation job by completing five radiant jobs in that city [1]. Less Tedious Thieves Guild changes only the trophy and safe counter, not these requirements [7].
- **The Gray Cowl of Nocturnal (mod-added) is gated on finishing this questline in LoreRim.** The LoreRim site says that quest requires completing the Thieves Guild questline and then stealing an item [5]. The install backs this up: `Gray Fox Cowl - Under New Management Start.esp` replaces the mod's start condition with `GetStage TGLeadership == 200`, which is the end of Under New Management [25]. The mod's own default, from its Nexus page, is any theft at level 10+ [23]. That default does not apply in LoreRim. See `mod-added/gray-cowl-of-nocturnal.md`.
- **Alternate-start option.** LoreRim's Alternate Perspective settings list a "Guilds → Thieves Guild" start option (`$AltPersp_ThievesGuild`, form 0x3CE5E5) [24]. What it does in-game (e.g. where you spawn, whether it advances A Chance Arrangement) was not checked *(unverified)*.

## Quests

Main-quest baseline (vanilla order) [1]: A Chance Arrangement → Taking Care of Business → Loud and Clear → Dampened Spirits → Scoundrel's Folly → Speaking With Silence → Hard Answers → The Pursuit → Trinity Restored → Blindsighted → Darkness Returns → Under New Management. Quests not listed below have no design change in LoreRim. Taking Care of Business (TG01), Dampened Spirits (TG03), Speaking With Silence (TG05), Hard Answers (TG06), The Pursuit (TG07), Blindsighted (TG08B), No Stone Unturned (TGCrown), Imitation Amnesty (TGTQ03) and Summerset Shadows (TGTQ04) are touched only by the Unofficial Patch or the cleaned master files [18].

### Trinity Restored (TG08A)
- **Vanilla:** You receive the Nightingale Armor, Nightingale Blade and Nightingale Bow on completing it [1].
- **In LoreRim:** *Stuff of Shadows* replaces the quest's "Nightingale Armor Stone" with a Nightingale Armory Chest. You take the armor from the chest instead of receiving it by magic, and the chests work as safe storage afterward [12]. It also changes a small piece of TG08A objective text through Papyrus Extender, and swaps the standing stone in front of Nightingale Hall for a 3D model [12]. The Unofficial Patch also fixes this quest [18].

### Darkness Returns (TG09)
- **Vanilla:** Karliah leads you into the Twilight Sepulcher. You return the Skeleton Key to the Ebonmere (it leaves your inventory permanently) and choose one Nightingale power: Agent of Stealth, Agent of Subterfuge or Agent of Strife. You can change the choice by returning to the Sepulcher, with a 24-hour cooldown. A Shrine of Nocturnal then appears in the Ragged Flagon - Cistern [1][3].
- **In LoreRim:**
  - **Nocturnal's Favor** (made by a LoreRim contributor "intended for LoreRim") adds a scene line to TG09: *"Farewell, Nightingale. See to it the Key stays this time, won't you?"* That line grants the ability **Nocturnal's Favor**: *"When you successfully pickpocket someone, you deal 10% more against them for a short while."* [9] *(Speaker inferred to be Nocturnal from the line; the record only shows it is a TG09 scene topic. Confidence: medium.)*
  - **Uncanny Luck** ships as its "Option 2 - Permanent Ability". After you complete Darkness Returns and return the Skeleton Key, you immediately get a permanent ability named "Uncanny Luck". It raises the *maximum* pickpocket success chance from vanilla's 90% to 100%; you still need the skill to reach the cap [10]. Plugin text: *"<Maximum> pickpocket success chance is increased to <100%>."* [10]. The LoreRim changelog lists it as added in V2.2.11 [20].
  - **Nightingale Powers Redone** rebuilds the three powers you choose here [11]:
    - **Agent of Stealth** (utility): for 10 seconds, crimes you commit are forgotten. Bounties revert and aggroed NPCs calm down. It can only be cast before combat starts.
    - **Agent of Strife** (offense): paralyzes targets for 2 seconds. It deals Health, Stamina and Magicka damage in proportion to the caster's missing attributes, and the caster absorbs half.
    - **Agent of Subterfuge** (defense): frenzies targets for 30 seconds. The caster gets 20% speed and invulnerability for 30 seconds, which ends if you attack or cast.
  - **Wintersun** (via *Wintersun and Daedric Shrines replacer*) overrides TG09 and the Nightingale Power Handler. It adds script properties tying them into its faith system (`WSN_Temptation_Global_Nocturnal`, `WSN_Peryite_Quest`) [13]. *The exact in-game effect was not documented in any source read. Confidence: low.*
  - *Stuff of Shadows* fixes the shaft in the Twilight Sepulcher reappearing after a cell reset. Re-enter the Sepulcher to apply the fix [12].

### Under New Management (TGLeadership)
- **Vanilla:** Starts automatically after Darkness Returns plus all four reputation jobs. Rewards are Guild Master's Armor, the Tribute Chest Key and the Amulet of Articulation [2].
- **In LoreRim:** The quest record is touched only by the Unofficial Patch [18]. LoreRim's balance plugin gives **Guild Master Armor** a stealth set bonus: *"…making them <mag>% harder to detect (20% per piece)"* [17]. GG's Thieves Guild Headquarters gives Mercer his own office and Brynjolf his own room in the Cistern [8].

### The Dainty Sload (TGTQ02)
- **Vanilla:** The Solitude reputation job [1]. Erikur asks the guild to frame Volf, captain of the Dainty Sload, by planting Balmora Blue in the captain's footlocker [14].
- **In LoreRim:** *Vittorias Alternate Wedding* overrides the quest. Its version adds references to its own `DB05Alt` ("A Healing Wedding") and the vanilla `DB05` quest to the TGTQ02 quest script. The objectives keep the vanilla text: "Speak to Erikur", "Acquire Balmora Blue", "Plant the Balmora Blue", "Return to Erikur" [14]. This appears to be a compatibility hook for the wedding happening or not happening. *Confidence: medium. The script's exact behavior was not decompiled.*

### Radiant jobs — The Numbers / Fishing / Bedlam / Burglary / Shill / Sweep / Heist Job (TGR*)
- **Vanilla:** Delvin (Numbers, Fishing, Bedlam) and Vex (Burglary, Shill, Sweep, Heist) give repeatable jobs [1]. Trophies appear behind the Guildmaster's desk after 5, 15, 25, 35, 45, 55 and 75 jobs, and a safe after 125 [1].
- **In LoreRim:** *Less Tedious Thieves Guild* replaces `TGREnablerHandlerQuestScript.pex` [7]. The new thresholds are below [7]. The LoreRim site describes this as cutting the 125-job requirement to 25 [4].

  | Trophy | Jobs needed in LoreRim | Vanilla |
  |---|---|---|
  | Jeweled Candlestick | 5 | 5 |
  | Ornate Drinking Horn | 10 | 15 |
  | Golden Ship Model | 11 | 25 |
  | Golden Urn | 13 | 35 |
  | Jeweled Goblet | 15 | 45 |
  | Jeweled Pitcher | 17 | 55 |
  | Jeweled Flagon | 20 | 75 |
  | Safe | 25 | 125 |

  The mod author warns it may not work on a save that has already done more than 5 jobs [7]. The script ships in `Less Tedious Thieves Guild.bsa`, and the plugin loads after the Unofficial Patch (load order position 412 vs 88), so the replacement script should win [7]. The Fishing Job is also edited by *Carriage and Ferry Travel Overhaul* (travel, not design) [18].

## Locations
- **The Ragged Flagon - Cistern** (Riften Ratway) — the guild hideout. *GG's Thieves Guild Headquarters* reworks the whole Cistern cell and leaves the Ragged Flagon tavern itself alone [8]. The guild is "entirely rebuilt with TG quest progression": the treasure room is dynamic and Nocturnal's final-quest reward gets its own room [8]. Other additions are an alchemy lab with mushroom crops, a training area with lockpicking practice, traps and secret passages, and a stolen-goods warehouse at the Flagon entrance [8]. The LoreRim site confirms the HQ "gets better as you progress through the faction's main story" [4].
- **New Cistern NPCs (GG's HQ):** Smell-Fish, a female Khajiit speechcraft trainer and potential follower/spouse. Smells-like-Guar, an Argonian fence for miscellaneous goods who runs the warehouse. Plants-Dream, an Argonian apothecary vendor who runs the alchemy lab [8].
- **Nightingale Hall** and **Twilight Sepulcher** — see Trinity Restored and Darkness Returns above [12].

## Rewards & notable items
- **Thieves Guild Armor:** *"…<mag>% harder to detect (10% per piece)."* **Guild Master Armor:** 20% per piece [17]. The LoreRim changelog V2.2.11 lists these under "Armor Buffs" [20].
- **Nightingale armor set bonus "Nocturnal's Embrace":** *"You move <mag%> quicker and have <mag%> more magic resist (2% per piece)."* [17]. Changelog V2.2.11 words it as "½% per piece" [20]. The installed plugin text is what ships.
- **Thieves Guild passive (balance plugin text):** *"Anywhere gems might be found, members of the Thieves Guild always seem to find a few more. Also gain 5% more armor penetration while sneaking."* [17] *(The record this description belongs to was not identified. Confidence: medium.)*
- **Nocturnal's Favor** ability and the permanent **Uncanny Luck** (100% max pickpocket chance), both from Darkness Returns [9][10].

## LoreRim notes
- **Bug fixes only:** the Unofficial Skyrim Special Edition Patch and "Official Master Files - Cleaned Plugins" override TG01, TG03, TG05, TG06, TG07, TG08A, TG08B, TGCrown, TGLeadership, TGRGF, TGRNT and TGTQ02–04. These are fixes, not design changes [18].
- **Respectful Ravyn:** Ask Ravyn Imyan where he hails from to get new dialogue. You can force him to respect you by threatening to hand him to the Dark Brotherhood, by pulling rank as Guild Master, or, as a Brotherhood member, by threatening or killing him "in Sithis' name" [15]. This adds dialogue, not a journal quest [15].
- **Revealing Rune:** A new quest, **Rune's Scope**. Ask Rune about his unusual name and agree to look out for clues; you then "Search along the coast of Solitude for a clue to Rune's past" [19][6]. See `mod-added/revealing-rune.md`.
- **[LoreRim] Thieving XP:** A LoreRim-made script that awards character XP through the Experience framework. Pickpocketing pays XP scaled by the stolen items' value, within min/max limits, once per target. Picking a lock pays a flat amount by tier, from Novice to Master [16].
- **Cosmetic/voice:** *Nocturnal Revoiced* replaces Nocturnal's voice files [21]. *JK's The Ragged Flagon*, *A makeover for Brynjolf* and *Axarien's Animations - The Nightingales - Karliah Brynjolf* are also installed; they appear to be visual-only from their names (not researched) [22].
- **Not part of this questline:** The candidate mods *Silence is Golden*, *Buyable Golden Claw*, *Golden Claw - More Choices*, *Save the Icerunner*, *Infiltration*, *Search and Seizure* and *Deceive Degaine* change side quests outside the guild (Golden Claw, Lights Out!, Trevas Watch, Markarth). *Vittorias Alternate Wedding* also adds its own quest. See `vanilla-changes/side-quests-and-misc.md` and `mod-added/vittorias-alternate-wedding.md`.

## Related
- `mod-added/revealing-rune.md` — Rune's Scope (Thieves Guild member backstory)
- `mod-added/gray-cowl-of-nocturnal.md`, `mod-added/hammerfell-quests-bundle.md` — post-guild Nocturnal content
- `mod-added/caught-red-handed.md`
- `vanilla-changes/dark-brotherhood.md` (Respectful Ravyn's Brotherhood branch)
- `vanilla-changes/side-quests-and-misc.md`, `vanilla-changes/daedric-quests.md`
- `areas/the-rift-and-riften.md`

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | vanilla quest list, joining via Brynjolf, side/radiant jobs, 5 jobs per city, trophy thresholds, Nightingale rewards, Shrine of Nocturnal | [UESP — Skyrim:Thieves Guild (faction)](https://en.uesp.net/wiki/Skyrim:Thieves_Guild_(faction)) | n/a | 2026-10-02 |
| 2 | Under New Management prerequisites and rewards | [UESP — Skyrim:Under New Management](https://en.uesp.net/wiki/Skyrim:Under_New_Management) | n/a | 2026-10-02 |
| 3 | Darkness Returns giver, Skeleton Key, Nightingale power choice and cooldown | [UESP — Skyrim:Darkness Returns](https://en.uesp.net/wiki/Skyrim:Darkness_Returns) | n/a | 2026-10-02 |
| 4 | LoreRim TG tweaks: Less Tedious (125→25), GG's HQ | LoreRim site — Factions (`imports/lorerim-site/factions.md`) | n/a | 2026-10-02 |
| 5 | Gray Cowl gate on TG completion | LoreRim site — New Lands (`imports/lorerim-site/new-lands.md`) | n/a | 2026-10-02 |
| 6 | Revealing Rune summary | LoreRim site — New Quests (`imports/lorerim-site/new-quests.md`) | n/a | 2026-10-02 |
| 7 | trophy thresholds, script replaced, new-game caveat, BSA content, load order | LoreRim install: Less Tedious Thieves Guild (`Less Tedious Thieves Guild.bsa`, `profiles/Default/loadorder.txt`) + [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/6581) via meta.ini cache | 2017-07-26 (nexusLastModified) | 2026-01-11 cache |
| 8 | Cistern rework, new NPCs, dynamic rebuild | LoreRim install: GG's Thieves Guild Headquarters (+ Updated Plugin) + [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/64018) via meta.ini cache | 2024-08-14 (nexusLastModified) | 2026-10-02 |
| 9 | Nocturnal's Favor ability text, TG09 scene line, "intended for LoreRim" | LoreRim install: `Nocturnal's Favor.esp` records (topic QNAM = TG09 0x021555) + scripts + [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/128928) via meta.ini | 2025-04-21 (nexusLastModified) | 2026-10-02 |
| 10 | Uncanny Luck Option 2 permanent ability, 90%→100% cap | LoreRim install: `ConditionalMaxPickpocketChance.esp` (installationFile "Option 2 - Permanent Ability") + [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/130008) via meta.ini | 2024-12-02 (nexusLastModified) | 2026-01-12 cache |
| 11 | reworked Nightingale powers | LoreRim install: Nightingale Powers Redone + [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/144539) via meta.ini | 2025-03-15 (nexusLastModified) | 2026-10-02 |
| 12 | Armory Chest, 3D stone, Sepulcher shaft fix, TG08A text change | LoreRim install: Stuff of Shadows (`Nightingale Stuff.esp`) + [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/130481) via meta.ini | 2024-10-25 (nexusLastModified) | 2026-10-02 |
| 13 | Wintersun TG09 / Nightingale Power Handler override properties | LoreRim install: `Wintersun - Faiths of Skyrim.esp` in "Wintersun and Daedric Shrines replacer" (QUST records) | mod v1.0.0.0 | 2026-10-02 |
| 14 | TGTQ02 override, objectives and stage text | LoreRim install: `Vittorias Alternate Wedding.esp` TGTQ02 record + [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/62466) via meta.ini | 2025-08-03 (nexusLastModified) | 2026-10-02 |
| 15 | Respectful Ravyn dialogue paths | LoreRim install: Respectful Ravyn + [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/143950) via meta.ini | 2025-03-08 (nexusLastModified) | 2026-01-11 cache |
| 16 | Thieving XP behavior | LoreRim install: `[LoreRim] Thieving XP/Source/Scripts/ThievingXP_Script.psc` | n/a | 2026-10-02 |
| 17 | armor stealth bonuses, Nocturnal's Embrace, TG gem passive | LoreRim install: `LoreRim - xEdit64 Output/Big Tweaks.esp` (record strings) | n/a | 2026-10-02 |
| 18 | which mods override which TG quests | LoreRim install: `imports/vanilla-quest-overrides.json` + `imports/official-quests.json` | n/a | 2026-10-02 |
| 19 | Rune's Scope objectives | LoreRim install: `Revealing Rune.esp` QUST `Rune01` (`imports/mods/revealing-rune.md`) | mod v1.1.0.0 | 2026-10-02 |
| 20 | Uncanny Luck added; armor buffs wording | [LoreRim Changelog.md (GitHub, biggie-boss)](https://github.com/biggie-boss/LoreRim/blob/main/Changelog.md), V2.2.11 | n/a | 2026-10-02 |
| 21 | Nocturnal voice replacement | LoreRim install: Nocturnal Revoiced (`sound/voice/skyrim.esm/femaleuniquenocturnal`), Nexus mod 166332 | 2025-12-10 (nexusLastModified) | 2026-10-02 |
| 22 | presence of cosmetic TG mods | LoreRim install: `profiles/Default/modlist.txt` / `mods/` folder list | n/a | 2026-10-02 |
| 23 | Gray Cowl start condition per mod author (level 10 + steal/pickpocket) | [Nexus page — The Gray Cowl of Nocturnal - 10th anniversary](https://www.nexusmods.com/skyrimspecialedition/mods/141327) via meta.ini cache in LoreRim install: `The Gray Cowl of Nocturnal - 10th anniversary/meta.ini` | n/a | 2026-10-02 |
| 24 | Alternate Perspective Thieves Guild start option | LoreRim install: `LoreRim - MCM and INI Settings/SKSE/AlternatePerspective/AlternatePerspective.json` | n/a | 2026-10-02 |
| 25 | Gray Cowl start-trigger override (SMQN `manny_GF_Steal` condition `GetStage TGLeadership == 200`) | LoreRim install: `Gray Fox Cowl - Under New Management Start.esp` records (parsed for `mod-added/gray-cowl-of-nocturnal.md`) | v1.0.0.0 | 2026-10-02 |
