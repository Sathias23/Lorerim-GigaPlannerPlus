# Digest — vc-dragonborn (r1)

Unit: vc-dragonborn (vanilla-changes). This is a fresh write: no target file existed when the run started.
File written: `lorerim-agent/knowledge/quests/vanilla-changes/dragonborn.md`

## dragonborn.md — load-bearing claims

### Start conditions

- **LoreRim site:** the Dragonborn questline starts after "The Way of the Voice", when Miraak's cultists attack. The site groups it with the main quest and Dawnguard as "immersively delayed" — LoreRim site, Main Quests (lorerim.com, n/a, accessed 2026-10-02) — high
- **Shipped TIE settings:** the Settings Loader's `MCM/Config/TimingIsEverything/settings.ini` sets [Dragonborn] `iStartingQuest=1`, `iTIE_MinimumLevel=25` and `iTIE_CultistAttackChance=5`. Option index 1 is "After Way of the Voice (default)" — LoreRim install: Timing is Everything SE - Settings Loader v1.0.1.0 (config.json enum + translation strings) — high
- **Winning trigger records:** the winning SMQN `DLC2CultistAmbushNode001` (0x035472) and `DLC2WEPriorityQuests001` (0x0331C1) come from `LoreRim - Global Modifiers.esp` (xEdit64 Output, loadorder line 3438/3491) and mirror TimingIsEverything.esp. Off Solstheim, the conditions are:
  - GetLevel ≥ GLOB `DLC2CultistAttackMinLevel_KRY`
  - `DLC2QuestStartSelection_KRY` == 1
  - not in DLC2SolstheimLocation
  - MQ105 stage ≥ 160
  - DLC2MQ01 stage < 5
  - DLC2WE09 stage 1 not done
  - GetRandomPercent < `DLC2WE09Chance`

  Source: LoreRim install plugin records, parsed this run — high
- **Winning DLC2WE09 quest record** (also Global Modifiers): GetRandomPercent < DLC2WE09Chance; DLC2MQ06 < 550; GetLevel ≥ TIE global. There is no "A Blade in the Dark" condition — LoreRim install records — high
- **Global defaults:** TIE.esp sets `DLC2WE09Chance`=5, `DLC2QuestStartSelection_KRY`=1, `DLC2CultistAttackMinLevel_KRY`=25 and `DLC2EbonyWarriorMinLevel_KRY`=80 — LoreRim install records — high
- **Vanilla Dragonborn.esm DLC2WE09:** GetRandomPercent ≤ DLC2WE09Chance (=100); MQ105 ≥ 160; DLC2MQ06 < 550; (GetLevel ≥ 25 OR in DLC2SolstheimLocation) — LoreRim install: Stock Game/Data/Dragonborn.esm — high
- **TIE README on Solstheim:** "If you are in Solstheim, the quest will instead trigger based on just the main quest stage and a random percent chance"; set Cultist Attack Chance to 0 to roam Solstheim without triggering it — TIE SE README in install (kryptopyr; Nexus 25464, nexusLastModified 2021-09-14) — high
- **What the 5% means:** in LoreRim it is a 5% roll per story-manager check, versus 100 in vanilla. This is an inference: the check frequency (location-change events) was not verified — records + TIE description — medium
- **MCM options:** the start can move to any of nine main-quest points, from "After the Graybeards summon the Dragonborn" to "After Dragonslayer", or "Timing Unknown". Chance 0 disables the start — TIE translation strings and config.json — high
- **Vanilla travel:** "Cultists' Orders" leads to Gjalund Salt-Sage on the Northern Maiden at the Windhelm docks, then Raven Rock. Going to Solstheim early means cultists attack there — UESP Dragonborn (quest) (UESP, n/a, accessed 2026-10-02) — high

### Miraak and his dragon priests

- **Miraak's buffs:** Cult of the True Dragonborn gives Miraak +500 health, +500 magicka, +50% magic resistance, +25% fortify Destruction and +25% fortify Shouts. Killing a priest changes them:
  - Dukaan: −500 health, −25% magic resistance
  - Zahkriisos: −500 magicka, −25% magic resistance
  - Ahzidal: −25% Destruction, −25% Shouts
  - Vahlok: adds +25% magic resistance, +1000 health, +75% Destruction, +25% One-Handed

  The mod has no rewards and touches no vanilla records — Nexus 83458 via meta.ini cache (2026-01-11); plugin `ImmersiveMiraakDifficulty.esp` has SPEL "Miraak Buff" and QUST aaa_MiraakBuff_Quest — high
- **Site summary:** "Kill Miraak's dragon priests to break his influence and weaken him... or kill his challenger to strengthen him" — LoreRim site Main Quests — high
- **Priest tombs:** Ahzidal in Kolbjorn Barrow, Dukaan in White Ridge Sanctum, Zahkriisos in Raven Rock Mine, Vahlok in Vahlok's Tomb. Vahlok guarded the traitor Miraak — UESP Dragonborn:Dragon Priest — high

### The Ebony Warrior

- **Level gate:** the shipped Settings Loader `settings.ini` has `iTIE_EbonyWarrior=40`, while config.json and the MCM script default to 80. The loader's LoadSettings() runs on OnConfigInit and OnGameReload, so the Ebony Warrior can appear from level 40 in LoreRim. TIE's `DLC2EbonyWarriorNode` uses GetLevel ≥ `DLC2EbonyWarriorMinLevel_KRY` — LoreRim install — medium-high. Uncertainty: whether LoreRim or the loader's author set 40.
- **Vanilla:** level 80; Last Vigil is a camp northeast of Fort Greenwall; drops enchanted ebony gear — UESP The Ebony Warrior — high
- **Mr. Ebony... Get Lost (`EbonyGetLost.esp`):** adds three replies — "Very well, I'll be there." / "Sorry. You'll have to find some other way to stroke your ego." / "I have no time for trifles." It also adds:
  - stage 250, log text "I dismissed the Ebony Warrior's challenge -- he looked quite dejected."
  - stage 300
  - the objective "Tell him to get lost"

  Source: LoreRim install plugin records; Nexus 52510 (nexusLastModified 2025-02-17) — high
- **Site listing:** "Mr. Ebony... Get Lost - Skip or play the silly Ebony Warrior quest." — LoreRim site Quest Expansions — high

### Raven Rock side quests

- **Served Cold, vanilla:** the reward is Severin Manor plus leveled gold; giver is Captain Veleth, then Adril Arano — UESP Served Cold — high
- **Severin Manor Has A price:** after Served Cold, read the "Notice" at the manor, then buy from Cindiri Arano with "I would like to buy Severin Manor? (<Global=ANDR_SeverinManorPrice> gold)". The price is 10,000 by default. You get the "Deed of Severin Manor" and the "Severin Manor Master Key". The mod overrides DLC2RR02 — plugin records + Nexus 62165 (nexusLastModified 2022-01-18) — high
- **Bow of Shadows - Reduced Cut:** disables the CC quest. The bow is in the Severin family chest in Severin Manor, and the safe needs Mirri Severin's key from Served Cold — Nexus 81188 via meta.ini (2023-11-22); plugin enabled; LoreRim site Creation Club page — high
- **The Choice is Yours on An Axe to Find (DLC2RR03Intro):** adds topics `DLC2RR03IntroAgree` "Sure." and `DLC2RR03IntroRefuse` "I don't have time for this.", Crescius's refusal "I'd like to help, but I have more urgent matters to deal with.", and a new stage 17. Objectives are unchanged — plugin records; Nexus 3850 — high
- **An Axe to Find, vanilla:** Glover Mallory's pickaxe is held by Crescius. You can return it, which gives you the pickaxe, or lie, which gives leveled gold. It needs The Final Descent started — UESP An Axe to Find — high

### Other quests and items

- **Undeath fixes:** UndeathFixes.esp edits Lost Knowledge (DLC2TTR1) and Black Book (DLC2WE06) so they cannot send you to Undeath's Apocrypha location — Nexus 40802 via meta.ini — high
- **Black Book controller:** DLC2BlackBookCount Fix (BlackBookFix.esp) edits DLC2BookDungeonController to expose a Black Book read count and includes an Apocrypha exit-bug fix — Nexus 164355 (2025-11-13) — high
- **Deathbrand:** the vanilla gate is level 36, and TIE's shipped Deathbrand value is also 36, so it is unchanged — UESP Deathbrand (quest) + settings.ini — high
- **Bloodskal Blade - Tweaks and Enhancements:** 5-second beam cooldown, Destruction scaling, extra damage vs Dragon Priests and Miraak, disenchantable as "Bloodskal Strike" — Nexus 55988 (2024-09-17) — high
- **Requiem - Dragonborn Patch:** static-level actors, reworked Apocrypha loot, tougher Seekers and Lurkers, weaker Stalhrim stats with 25% better enchants, higher Raven Rock fines. It claims the DLC starts after "Blade in the Dark", and its DLC2WE09 does use GetStageDone MQ106 200 — but that is overridden (see Contradictions) — Nexus 34829 (2022-01-20) + plugin records — high for the content, medium for whether all its rebalancing survives later patchers

### Bug fixes and unit scope

- **USSEP-only overrides (bug fixes):** Deathbrand, Unearthed, Retaking Thirsk, The Chief of Thirsk Hall, Dragonborn, The Fate of the Skaal, At the Summit of Apocrypha, March of the Dead, Served Cold, The Final Descent, An Axe to Find, Lost Legacy, A New Source of Stalhrim, Halbarn Favor Quest, Reluctant Steward, A New Debt, Azra's Staffs, Hunting and Gathering, Filial Bonds, Black Book — vanilla-quest-overrides.json — high
- **Saint Jiub mods are Dawnguard:** "Saint Jiub's Bookmarks" and "Honor Thy Word - Saint Jiub Opus Epilogue" relate to "Impatience of a Saint" (Dawnguard.esm DLC1VQSaint) and the Soul Cairn, not Dragonborn. Bookmarks adds swirling-paper markers. Honor Thy Word lets you sell the Opus to Viarmo, who believes you only if "Tending the Flames" is done — official-quests.json + Nexus 165897 / 150138 via meta.ini — high
- **Solstheim content from other mods:** Miasma, started from Haj-Xul in the Retching Netch, recommended level 20+ — LoreRim site New Quests — high

## Contradictions

- **When the Dragonborn questline starts:**
  - The Requiem - Dragonborn Patch Nexus page says it "should start after completing the quest 'Blade in the Dark'", and Fozars_Dragonborn_-_Requiem_Patch.esp's DLC2WE09 and SMQN carry an MQ106 gate.
  - The LoreRim site says "after completing 'The Way of the Voice'".
  - **Resolution:** the install's winning records (`LoreRim - Global Modifiers.esp`, loaded after Fozars at line 1698 and after Requiem.esp at line 1679) carry TIE's "After Way of the Voice" plus level 25. The site matches the install, and the Requiem patch's gate is overridden.
- **Ebony Warrior level:** TIE and Settings Loader documentation say "Default: 80", but the shipped settings.ini is 40. Both are in the install, and the shipped ini is what loads. The site does not state a level.
- **Minor:** UESP's Dragonborn (quest) page states no level requirement, but the vanilla Dragonborn.esm record has GetLevel ≥ 25 (OR on Solstheim). Install records were used for the vanilla baseline.

## Gaps (looked for, not found)

- How often the cultist story-manager event fires — needed to turn "5% chance" into expected time — not established.
- Whether LoreRim edited the Settings Loader settings.ini (Ebony 40) or shipped it stock — no LoreRim doc found. Not checked against the loader's Nexus file contents.
- What the third Ebony Warrior reply ("I have no time for trifles." → "I don't feel... right... I'm going to lay down... for a while...") does in practice: stage 300 and a new NPC record EbonyWarrior01 exist, but the outcome is not traced.
- Details of Requiem - Dragonborn Patch's DLC2HirelingQuest (Teldryn Sero) and DLC2Init edits — not examined.
- wiki.lorerim.com and the live Nexus pages were not consulted; the meta.ini caches were sufficient.
- No LoreRim-specific gate found for Deathbrand beyond vanilla 36.

## Leads

- Decompile `EbonyGetLost` fragments (source in `mods/Mr. Ebony... Get Lost/source/Scripts`) to describe the "trifles" branch outcome.
- Check `Timing is Everything SE - Settings Loader` on Nexus (files tab) to confirm whether `iTIE_EbonyWarrior=40` is the loader author's default or a LoreRim edit.
- The areas/solstheim.md writer should check Solstheim mods in the install: Rally's Solstheim AIO, Solstheim Abandoned Lodge Overhaul, Solstheim Skaal Fishing Camp, Solstheim Earthquakes, Missives Solstheim Patch.
- The TIE Settings Loader settings.ini also carries LoreRim-relevant values for Dawnguard (recruitment 10), Hearthfire (min 9) and the Daedric quests (e.g. Boethiah 30). Useful to the dawnguard, daedric and hearthfire units.
