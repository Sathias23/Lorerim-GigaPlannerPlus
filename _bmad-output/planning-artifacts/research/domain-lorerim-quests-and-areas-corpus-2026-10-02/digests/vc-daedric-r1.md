# Digest — vc-daedric (round 1)

Unit: vc-daedric (vanilla-changes). Resumed attempt: no target file or digest existed, so the research was done fresh this run.
Method: I read the import files, the LoreRim install (meta.ini, readmes, plugins.txt and modlist.txt for profile Default) and the plugin records. I parsed the records with a throwaway Node ESP reader for QUST/GLOB/BOOK/NPC_ records, and scanned every active plugin in load order for DA-quest overrides. Web: UESP plus ggmods mirrors (Nexus returned 403).

## File: lorerim-agent/knowledge/quests/vanilla-changes/daedric-quests.md

### Baseline
- The vanilla Daedric quests, start locations, level gates and artifacts are: Black Star 1, Boethiah's Calling 30, A Daedra's Best Friend 10, Discerning the Transmundane 15, Ill Met By Moonlight 1, Cursed Tribe 9, Pieces of the Past 20, Whispering Door 20, Break of Dawn 12, House of Horrors 1, Taste of Death 1, The Only Cure 12, A Night To Remember 14, Mind of Madness 1, Waking Nightmare 1. Source: UESP Skyrim:Daedric_Quests (UESP, n/d, accessed 2026-10-02). Confidence: high.
- The Whispering Door needs level 20 plus Dragon Rising and starts from Hulda's rumor. Source: UESP Skyrim:The_Whispering_Door (accessed 2026-10-02). Confidence: high.
- Boethiah's Calling starts at level 30+ by reading Boethiah's Proving or visiting the Sacellum. You sacrifice a follower, then kill the Champion at Knifepoint Ridge for the Ebony Mail. Source: UESP Skyrim:Boethiah's_Calling (accessed 2026-10-02). Confidence: high.

### Start gates (LoreRim-specific)
- `LoreRim - Global Modifiers.esp` (LoreRim - xEdit64 Output, plugins.txt line 3358, i.e. loads late) sets these globals: DA02MinLevel=20, DA09MinLevel=20, DA14MinLevel_KRY=20, MeridiaNoVampire_KRY=1, ANDR_HouseOfHorrorsLevelReq=20, ANDR_DA11_LevelReq=20, ANDR_DA15_LevelReq=20, ANDR_MS01_LevelReq=20, plus a new global DA10MinLevel_KRY=20 that has no known consumer. Source: LoreRim install, plugin GLOB records (accessed 2026-10-02). Confidence: high.
- The plugin defaults are 35 for House of Horrors, 40 for Taste of Death and 35 for Mind of Madness. LoreRim lowers all three to 20. Source: LoreRim install, Delayed Start .esp GLOB records. Confidence: high.
- How each delayed quest starts (DQS Nexus description, meta.ini cache 2026-01-11). Confidence: high (mechanism) / high (plugin objective strings).
  - House of Horrors: ask Kleppr/Frabbi "Anything noteworthy happening?". Helper quest DA10PreQuest has the objective "Speak to the witchhunter about the abandoned house".
  - Taste of Death: ask the Silverblood Inn innkeeper for rumors.
  - Mind of Madness: ask the Winking Skeever innkeeper for rumors. The DA15Rumor objective reads "Investigate the man wandering the streets near the Bards College".
- LoreRim ships only the HoH, MoM and ToD modules of Delayed Quest Starts (plus Forsworn Conspiracy and CC Fishing). The Black Star, Waking Nightmare and A Daedra's Best Friend delays described on the DQS page are NOT installed: the HoH plugin contains only HoH globals. Source: LoreRim install mod folders and plugin records. Confidence: high.
- Timing is Everything SE 2.2 is enabled. Its plugin defaults are DA02MinLevel 30, DA09 12, DA14 14 and DA07 20. Source: LoreRim install, TimingIsEverything.esp GLOBs and README ("default settings … are the vanilla defaults"). Confidence: high.
- *Timing is Everything SE - Settings Loader* 1.0.1.0 is enabled.
  - Its `tie_mcmscript.psc` calls LoadSettings() on OnConfigInit and OnGameReload, which sets DA02MinLevel, DA09MinLevel, DA14MinLevel_KRY, DA06, DA13, DA04, DA08, DA07 and MeridiaNoVampire_KRY from its ModSetting values.
  - Its `settings.ini` holds 30/12/14/9/12/15/20/20 with NoVampires=0 and bEnabled=1.
  - No `MCM/Settings/TimingIsEverything.ini` exists in any mod or in overwrite.
  - So at runtime the Global Modifiers values of 20 for DA02/DA09/DA14 are probably overwritten back to vanilla.
  - Source: LoreRim install (accessed 2026-10-02). Confidence: medium (this is code reading, not an in-game test).
- The Cursed Tribe QE changes the start: you must be an Orc or Blood-Kin and ask the chief of another stronghold for rumors. You then receive the "Letter from Largashbur" (objective "Read the letter from Largashbur"). The page says "at least level 10". Source: Nexus 171220 via meta.ini (nexusLastModified 2026-02-07) and plugin records. Confidence: high.
- The Choice is Yours stops rumors and greetings from auto-adding quests. It edits DA01Intro (objective "Visit the Shrine of Azura to the south of Winterhold") and DA02. Source: Nexus 3850 via meta.ini cache 2026-01-11 and plugin records. Confidence: high.
- The Whispering Door QE overrides DA08RumorPointer (objective "Ask Balgruuf about his children"). Source: plugin records. Confidence: high.

### Per-quest content
- **The Choice is Yours, DA02 refusal route.** Refusing the sacrifice gets you cursed. Objective 300 "Visit a Shrine of Stendarr" leads to the Gauntlets of the Crusader; objective 310 "Visit the Altar of Molag Bal" leads to the Hands of Coldharbour. These are carried into the final record, `Wintersun - Reqtificated.esp`. Source: plugin records + load-order scan. Confidence: high.
- **The Man in Black (DA02AltQuest).**
  - Start: Rudin Filaro at the Braidwood Inn, Kynesgrove.
  - Objectives: "Escort Rudin to the Shrine." / "Investigate the nearby area." / "Search for clues on Rudin's whereabouts." / "Leave the shrine." / "Find Rudin Filaro." / "Kill Rudin Filaro."
  - It shares Boethiah's Calling's level gate.
  - The Mia ambush happens if you carry the Ebony Mail with fewer than 5 murders, 2–3 weeks later.
  - The Kynesgrove patch is installed.
  - Source: plugin records + Nexus 121499 via meta.ini cache 2026-01-23. Confidence: high.
- **The Cursed Tribe QE.**
  - Routes: the normal route (new shrine northwest of Largashbur, "Inspect the Skeleton", Dead Orc's Note, … "Defeat Garok Longstride") and the resto route ("Cast Bane of the Undead in Largashbur", defeat 10 ghosts).
  - The resto route's reward is the Necklace of the Wise Woman ("Wisdom of the Wise Woman"), with no Volendrung.
  - Giant's Grove is renamed Sanctum of Malacath.
  - With Wintersun, the resto route costs you Malacath favor.
  - The final DA06 record is `The Cursed Tribe - LoreRim Patch.esp`, which contains every new objective.
  - Source: plugin records + Nexus 171220 + LoreRim site. Confidence: high.
- **Mehrunes Dagon's Shrine Unlocked.**
  - Shrine access: the door is now a Master lock, Silus carries a spare key, and his journal enables a speech check.
  - New quest "Reforging the Past" (DA07PlayerHasReforged): "Reforge the Razor at any forge." / "(Optional) Return the Razor to Silus."
  - Reforging needs the fragments, 3 Daedra Hearts, and the Daedric and Arcane Blacksmith perks (mod page, vanilla perk names).
  - Source: plugin + Nexus 119502 cache 2026-02-05. Confidence: high for content, low for how the perk condition behaves under Requiem.
- **Whispering Door QE.**
  - Objectives: "Speak to Nelkir OR warn the Jarl", "Report to Jarl Balgruuf OR kill allies with the Ebony Blade", "Speak to a Vigilant of Stendarr OR kill allies with the Ebony Blade".
  - The good path disposes of the blade.
  - Source: plugin records; ggmods mirror. Confidence: high.
- **TWDQE Wintersun patch.** It prompts you to follow Mephala on either path and applies favor changes. Source: Nexus 130774 via meta.ini (2026-02-05). Confidence: high.
- **The Fate of the Ebony Blade (DA08MephalaHunt, EbonyBladeCurse.esp).**
  - Objective: "Decide the fate of the Ebony Blade"; the journal names the Aetherium Forge.
  - Spider Daedra and Mephala Cultist ambushes come every 1–2 weeks until the blade is appeased or destroyed.
  - A Spell Tome: Conjure Spider Daedra is added.
  - `Whispering_Door_Expansion_Addon.esp` is installed, so Mephala retaliates against the Vigilant ending.
  - Source: plugin + Nexus 120650 via meta.ini cache 2026-01-11. Confidence: high.
- **House of Horrors QE.**
  - New objectives (11–14): "Follow Tyranus", "Hit the altar to destroy it", "Escape the basement", "Talk to Tyranus".
  - Journal: "I helped Tyranus destroy Molag Bal's altar…"
  - Source: plugin records. Confidence: high.
  - The reward is Tyranus as a voiced follower, who refuses if he suspects you are a vampire or werewolf. Killing Tyranus before the ritual returns you to the vanilla path. Source: ggmods mirror of Nexus 57285 plus web search snippet (accessed 2026-10-02). Confidence: medium (mirror, not the author's page).
- **A Bitter Aftertaste (madNamiraAddonQuest).**
  - Objectives as listed in the corpus file; the Jarl's permission lets you arrest the cultists, or you can blackmail them.
  - You get the Ring of Namira without cannibalism.
  - RingCurse_SMI is active (Survival Mode Improved is in the load order), so with the ring only cannibalism reduces hunger.
  - Source: plugin + Nexus 123173 cache 2024-12-23. Confidence: high.
- **The Only Cure QE.**
  - Kesh's Journal lets you go to Bthardamz without summoning Peryite.
  - Objectives: "Kill or Talk to Orchendor", "Speak with Peryite or Destroy his Altar", "Destroy Peryite's Altar".
  - Destroying the altar after accepting Spellbreaker poisons the shield.
  - Source: plugin + Nexus 57683 cache 2026-01-11. Confidence: high.
- **Final records.** A load-order scan of active plugins found these final records: DA02 → Wintersun - Reqtificated.esp; DA06 → The Cursed Tribe - LoreRim Patch.esp; DA08 → TWDQE - Wintersun patch.esp; DA10 and DA13 and DA16 → Wintersun - Reqtificated.esp. All of them keep the expansion objectives. Source: LoreRim install. Confidence: high (records checked); scripts not inspected.
- **Cross-file prerequisites.** Meridia's Order unlocks after The Break of Dawn; Saints & Seducers EC needs Mind of Madness plus level 20. Source: LoreRim site New Quests / Creation Club (accessed 2026-10-02). Confidence: high.

## Contradictions
- **Level gates.** Global Modifiers.esp sets Boethiah's Calling, A Night To Remember and The Break of Dawn to 20 and enables "no Break of Dawn while a vampire". The TIE Settings Loader reapplies 30/14/12 and NoVampires=0 from settings.ini on every load. Both are LoreRim install evidence. The file reports both and tells players to check the in-game MCM.
- **Mind of Madness rumor.** The Delayed Quest Starts page says "distressed man walking near the Blue Palace"; the plugin objective says "near the Bards College". The corpus file quotes the plugin.
- **Cursed Tribe level.** The Cursed Tribe QE page says "at least level 10"; UESP and TIE say 9. This is minor and unresolved.
- **Spelling.** The objective spells "Garok Longstride" while the NPC record (LoreRim patch) says "Gorak Longstride". Both are mod strings.

## Gaps (looked for, not found)
- No in-game verification of which value wins in the TIE vs Global Modifiers conflict.
- The Choice is Yours article 52 (exact Boethiah alternate and Black Star intro details) was blocked (403). The corpus file relies on plugin journal text instead.
- No author page text for House of Horrors QE or TWDQE in the meta.ini cache; I used ggmods mirrors instead.
- Requiem's DA09 / DA03Start / WEJS14 edits were not diffed, so their content is unknown.
- The Aetherium Forge Destroys Items and Stress and Fear mods are absent from the Default profile. How Mephala's Curse ends in practice (whether the blade is actually destroyed) is unverified.
- The Taste of Death add-on's optional undead boss (Champion plus Daedric Parasite) was not found among the shipped plugin NPCs.
- Whether Razor reforging perk conditions map to Requiem's smithing perks is unverified.
- I did not research how to become Blood-Kin without doing The Cursed Tribe (needed for the new start).
- A few vanilla DA formIDs (DA03/04/05/07/09/11/15) were not covered by the load-order scan because my hardcoded IDs were wrong. The override list comes from vanilla-quest-overrides.json instead.

## Leads
- Test in game: run `help DA02MinLevel` and `help DA09MinLevel` in the console after loading a LoreRim save to settle the conflict.
- The Blood-Kin acquisition paths in LoreRim (Orc Strongholds AIO, Orc race) are a lead for the Cursed Tribe start.
- Fetch Nexus 171220, 57285 and 76606 posts or articles via a non-blocked mirror for the full reward lists.
- Side-quests unit: The Heart of Dibella QE (Thane of the Reach letter start), Toying With The Dead mQE, Spare Anise. These were in this brief's mod list but are not Daedric.
