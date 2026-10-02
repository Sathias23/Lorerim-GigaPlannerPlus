# Digest: mq-requiem-lorerim (r1)

## requiem-quests.md
- On Hogithum (REQ_HOGITHUM, type side, Requiem.esp) objectives: [10] Find more information about the missing fragment; [50] Find all six missing fragments; [100] Talk to Giraud; [110] Read the complete "On Hogithum"; stage 120 journal is a verse ending "And you can brew it too". Source: LoreRim install, Requiem.esp QUST records (accessed 2026-10-02). Confidence: high.
- Six "Fragment of a poem" notes are placed (REFR) in these cells: Pelagius Wing, Wolfskull Cave, Frostmere Crypt, Robber's Cove, Darklight Tower, and a Tamriel exterior cell (EDID REQ_Note_Hogithum_MorthalSwamp). Adonato's Report is in the Bards College cell. Source: Requiem.esp REFR/CELL parse. Confidence: high.
- Each fragment's subtitle (CNAM) is a "Verses of ..." name: Good Cheer, Introductory Charm, Odd Familiarity, Pretended Dismay, Regretful Epiphany, Soft Applause. Source: Requiem.esp BOOK records. Confidence: high.
- Adonato's Report sets a quest stage when read (DefaultOnReadSetQuestStageNotAlias) and names Robber's Gorge/Brodir, Frostmere Crypt, Darklight Tower and Pelagius's rooms. Source: Requiem.esp BOOK. Confidence: high (that the stage set is 50 is inferred from the journal).
- Talking to Giraud: topic "I've collected some fragments of poetry that I think you're looking for." He rewards the book "On Hogithum", collated by Giraud Gemane at the Bards College, Solitude. Source: Requiem.esp DIAL/INFO/BOOK. Confidence: high.
- Reward recipe COBJ REQ_Cook_Drink_CinnabarBeer: Ale + Jazbay Grapes + Creep Cluster (workbench keyword 0xA5CB3, likely the cookpot). It has a condition (func 543) on REQ_HOGITHUM, which appears to be GetQuestCompleted. Cinnabar Beer has the Alcohol and Inebriation effects. Source: Requiem.esp. Confidence: medium (function index and keyword were not resolved against Skyrim.esm).
- No LoreRim plugin overrides REQ_HOGITHUM: grepped all esp/esl/esm in the install for the EDID and found it only in Requiem.esp. Confidence: high.
- Requiem changelog 2.0.0 introduced "A Curious Quest… On Hogithum"; 2.0.2 moved the quest items to more obvious places. Source: Requiem bundled documentation/Changelog.md (install). Confidence: high.
- Requiem changelog 4.0.0: in-game installation triggers the first time you close the inventory or magic menu. Confidence: high.
- ISL overrides REQ_Quest_Spellchoices_PlayerCheck. Its stage numbers (e.g. 70, 230) match ISL_Quest_SpellLearning, not Requiem's 100–580 scheme. Source: ISL esp strings + REQ_QF_SpellchoicePlayerCheck.psc. Confidence: medium-high.
- ISL mechanism: fills a dummy actor with unknown tomes from that school/tier leveled list, opens a gift menu, and shows a confirmation box (keep or redo). Source: ISL_Script_SpellLearning.psc / ISL_Script_Fornication.psc. Confidence: high.
- Customizable Spells Per Perk globals: Novice/Apprentice/Adept/Expert = 2, Master = 1. MCM "Requiem - Spell Learning" range 0–20. It overrides the ISL_QF_SpellLearning script. No LoreRim MCM preset was found. Source: CSPP esp GLOB parse, config.json, scripts. Confidence: high (plugin default); medium (runtime, since a later plugin could override).
- Requiem's default: 2 spells per perk, 1 for master. Source: CSPP Nexus description cache (nexusLastModified 2024-07-23). Confidence: medium.
- Profane Divinity (Trad_001_ProfaneDivinityQuest): [20] Use the profane heart; stage 50 completion text. Source: Trad esp QUST. Confidence: high.
- Profane ritual requirements: 4 Tribunal/Dagoth masks + 1 heartstone; Wraithguard, Sunder and Keening equipped; Lesser Corpus or Nerevarine; craft at a smelter; 50 damage/sec until used; divine power usable 3 times. Source: Trad Nexus page via meta.ini cache (nexusLastModified 2023-12-15). Confidence: medium (author page; not record-verified).
- Requiem - Creation Club.esp disabled some CC quests. The "Trad - CC Quests Re-Enabled" files are not in the install. Source: Trad Nexus cache + mod folder listing. Confidence: high.
- Ghosts of the Tribunal = ccasvsse001-almsivi.esm (ccASVSSE001_Quest); Legends Lost = ccbgssse008-wraithguard.esl (Retrieve Sunder and Wraithguard). Source: official-quests.json. Confidence: high.
- Requiem meta.ini version=6.0.2.0, but installationFile = "Requiem 5.4.5 - Towers and Shadows Bugfix Pack", and Changelog.md tops out at 5.4.5. Confidence: high (for the mismatch itself).
- Robbers' Cove is the single interior zone of Robber's Gorge, WSW of Morthal. Source: UESP Skyrim:Robber's Gorge (search summary). Confidence: medium-high.

## lorerim-specific-quests.md
- LoreRimStartupQuest ("LoreRim Startup Quest") runs on RaceSex Menu close. Order: welcome message → Requiem install (inventory open/close) → SkySigns birthsign → Starting Skills → Wintersun free deity → Traits → mode message (Naaktiid/Konahrik) → keybind spell. Source: LoreRim Startup.esp + LoreRimStartUp.psc (LoreRim - MCM and INI Settings). Confidence: high.
- Naaktiid enables Requiem Lite and gives +3 perk points (VMAD int property Naaktiid_Extra_Perks = 3). LoreRim's preset MCM/Settings/Requiem Lite.ini has bEnableLite = 0. Confidence: high.
- Requiem Lite gives starting armor rating, magic resistance, regen and lockpicking expertise, toggleable. Source: Nexus 120272 cache (nexusLastModified 2024-12-22). Confidence: medium.
- LoreRim Startup.esp overrides REQ_Quest_Installation and REQ_CoreScripts. Confidence: high.
- Spirit Tutors (ORD_SpiritTutors_Quest) objective "Find the Spirit Teacher". The perk Spirit Tutors (Restoration 30) gives two blessings, each "Restoration spells 1% stronger per 20 points of Magicka". The ghosts use conditioned exterior marker aliases. Source: Ordinator esp (LoreRim xEdit output copy + Nexus original v9.31) + Nexus 1137 cache. Confidence: high (records); low (whether the perk is reachable in LoreRim's tree).
- LoreRim adds Ordinator perks as appendages to Requiem's perks. Source: Icy Veins article, search snippet only (fetch got 403), date unknown. Confidence: low-medium.
- Second Breath: an INFO on the line "Zu'u unslaad! Zu'u nis oblaan!" adds LoreRim_SecondBreathAb, which grants one extra trait ("This choice is final"). Source: LoreRim Second Breath.esp + psc. Confidence: high (that this is the Alduin defeat line is inferred from the spell text "The fall of Alduin...").
- Oghma Infinium override: choices "Quickly put the book away..." / "Select Skills". The menu is configured for 6 skills with reward 5, capped at 100. Source: LoreRim Oghma Reward.esp + LoreRim_OghmaBookReward.psc. Confidence: medium (UI semantics inferred).
- Artifact Sacrifice: removing a Daedric artifact into the Aetherium Forge blocks Wintersun worship of that prince and ends current worship. Source: LoreRim Artifact Sacrifice.esp + psc. Confidence: high.
- All of the above plugins are active in profiles/Default/plugins.txt. Confidence: high.

## Contradictions
- Requiem version: meta.ini version=6.0.2.0 versus installationFile "Requiem 5.4.5 - Towers and Shadows Bugfix Pack 5" and Changelog.md top entry 5.4.5 (both in the install).
- Location naming: the Hogithum fragment's EDID and cell name say "Robber's Cove" (Requiem.esp), while Adonato's Report says "Robber's Gorge". UESP says Robbers' Cove is the Robber's Gorge interior, so this is consistent, not a contradiction.
- Requiem's own records list REQ_Quest_Spellchoices as the spell-choice system, but in LoreRim ISL redirects PlayerCheck to ISL_Quest_SpellLearning. This is a layering difference, not a source conflict.

## Gaps (looked for, not found)
- No wiki.lorerim.com or UESP Mod: page for On Hogithum. The Requiem Confluence 2.0.0 page appeared only as a search result and echoes the changelog.
- Exact Spirit Tutor spawn locations: alias conditions only, no forced refs.
- Whether Spirit Tutors (Ordinator Restoration 30) is in LoreRim's actual Restoration perk tree (AVIF not parsed).
- Whether Trad's profane-heart recipe accepts Tools of Kagrenac's Sunder/Wraithguard, and whether "Legends Lost" runs under Requiem - Creation Club.esp in LoreRim.
- The third Cinnabar Beer magic effect (Update.esm 0x1002ee1) was not resolved.
- No LoreRim-site text on the startup quest or Naaktiid/Konahrik modes was found (site files and web search).

## Leads
- Parse AVIF/perk-tree records across the load order (or the project's data/ perks, outside this firewall) to confirm Spirit Tutors is reachable.
- Check Requiem - Creation Club.esp for which CC quests it disables (e.g. ccBGSSSE008_Quest, ccASVSSE001_Quest), for vanilla-changes/creation-club.md.
- LoreRim Gravewind Start Tweak.esp (xEdit output) and LoreRim Dreamstride.esp (MCM and INI Settings): hand to the gravewind / sleepwalking or demon-of-dream owners.
- Oghma reward change belongs in vanilla-changes/daedric-quests.md; Second Breath belongs in vanilla-changes/main-quest-and-alternate-start.md.
