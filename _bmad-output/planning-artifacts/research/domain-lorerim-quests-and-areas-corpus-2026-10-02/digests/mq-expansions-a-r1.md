# Digest — mq-expansions-a (r1, resumed run)

Run note: this run resumed an interrupted attempt. Eight of the nine target files already existed, were complete, met the template and were correctly sourced. This run kept them unchanged after spot-checking their quest names against the imports/mods/*.md plugin records (all matched). `mephalas-curse.md` was missing and was researched and written in this run. Claims for the eight kept files below are re-derived from those files' own cited sources.

All "accessed" dates are 2026-10-02 unless noted. "Install" = C:/mods/LoreRim, profile Default.

## additional-contracts-dark-brotherhood.md
- Nine quests: "Contract: Kill Nazeem / Braith / Taarie and Endarie / Rolff Stone-Fist / Lemkil / Serana / Erikur / Thonar Silver-Blood / Elenwen" (EDIDs ExtraContracts_Kill*_Quest) — install: Additional Contracts For the Dark Brotherhood.esp QUST (mod v1.4.1.0) — high
- Objective pattern: 10 "Kill <target>", 100 "Talk to Nazir" — same — high
- Contracts come from contract boards in the Falkreath and Dawnstar Sanctuary dining rooms — Nexus 59211 via meta.ini cache (nexusLastModified 2024-02-05, cache 2026-01-11) — high
- Gates: Thonar after No One Escapes Cidhna Mine with Madanach killed; Elenwen after Dragonslayer; Serana after Kindred Judgment; Erikur after The Dainty Sload + Diplomatic Immunity — Nexus 59211 cache — high (author claim)
- Braith needs a child-killing mod; LoreRim enables Slayable Offspring SKSE — Nexus 59211 cache; install modlist.txt — high
- LoreRim site: "more contracts are available with some of your most hated NPC named for death" — LoreRim site Factions — high
- Storm the Thalmor Embassy disables Elenwen on the storm route — install STE_MQ201ThalmorEmbassyGate.psc — high. How this interacts with the Kill Elenwen contract is unverified.

## listen-dark-brotherhood-radiant.md
- Five radiant quests, all named "Contract: Kill <Alias=Target>" (LTNQuestWhiterun/Windhelm/Riften/Solitude/Markarth). The handler LTNQuestHandler is start-game-enabled — install Listen.esp QUST (v1.0.0.0) — high
- Dead Drops: "Dead Drop outside of Riften", "Solitude Dead Drop", "Markarth Dead Drop", "Whiterun Hold Dead Drop", "Dead Drop in Eastmarch" — Listen.esp — high
- The Night Mother prompt fires when DB04a is complete and DB09 is not, or after DB11 is complete — install script sources LTNTriggerScript*.psc — high
- Quest chance default 0.75; reward averages 500 gold ±100 (MCM range 100–1000) — LTNMCMScript / QuestHandler psc — medium (plugin global not cross-checked)
- The delegation option kills the target and removes the Dead Drop payment — QF_LTNQuest*.psc — high
- Thonar joins the Markarth list after MS02 stage 250 — psc — high
- LoreRim ships the JK's Sanctuary – Listen patch; no LoreRim MCM override exists — install plugins.txt; LoreRim - MCM and INI Settings — high
- Mod page claims (60 targets, vanilla voices) come from a web search summary only. The Nexus page returned 403 and there is no cached description — medium

## penitus-oculatus.md
- Quests: Penitus Oculatus (zzzPO00), Inquisition, Unfinished Business (radiant and informant), Paperwork, House Cleaning, Troubleshoot, Bad Blood, Fool's Errand, A Nest of Vipers, Loose Ends — install Penitus_Oculatus.esp QUST (v0.18.4.0) — high
- Start: complete Destroy the Dark Brotherhood!, then talk to Commander Maro — Nexus 21061 cache (2023-11-25) — high
- Maro is at the Penitus Oculatus Outpost (Dragon Bridge) — UESP Skyrim:Commander_Maro — high
- Mission order is Inquisition → Unfinished Business → Paperwork → informant story, then random radiants. Joining gives PO armor. Turn-ins pay 1,000 gold — install zzzPO00script.psc + TIF fragments — high
- LoreRim's Destroy The Dark Brotherhood - Quest Expansion is compatible and adds a kidnapping path that doesn't need Grelod's death — Nexus 118229 cache (2024-07-12) — high
- Patches shipped: Andrealphus Scene Tweaks, JK's Sanctuary, COTN Morthal, Lux/Lux Orbis — install plugins.txt — high
- LoreRim site: "a big change … expands on the destroy the dark brotherhood path with its own storyline" — Factions page — high

## college-of-winterhold-quest-expansion.md
- Quests: College Curriculum, Rapture of the Deep, A Test of Ice and Fire, Back-Stabbing Rodents, Enchanted To Meet You, I Choose You, Familiar, None Escape The Light, Reading Comprehension 101 — install College Of Winterhold - Quest Expansion.esp (v1.16.0.0) — high
- Start: after joining (First Lessons), talk to Tolfdir. All seven lessons gate the continuation to Saarthal — Nexus 66666 cache (2025-04-13) + plugin journal — high
- Apprentice's Boon (+5% skill gain for 3 days) for completing every lesson without skipping — Nexus 66666 cache — high (author claim)
- Improved College Entry edits MG01 in LoreRim: Faralda won't sell the spell, you can enter by shouting, and you pick a favored school — install meta.ini cache (2020-10-13) — high
- OMEAR Addition - CoW QE is a script-performance change only, with no plugin — Nexus 67968 cache — high
- The Gonz Stonehills ReRe patch adjusts NPC positions for Stonehills — Nexus 133572 cache — high
- LoreRim site: "you will get actual lessons on each school of magic" — Factions page — high

## boethiahs-calling-alternate.md
- Quest: The Man in Black (DA02AltQuest) — install BoethiahCalling_AlternativeQuest.esp (v2.3.0.0a) — high
- Giver is Rudin Filaro at the Braidwood Inn, Kynesgrove. The quest ends at Knifepoint Ridge and rewards the Ebony Mail — Nexus 121499 cache (2024-12-23) + plugin — high
- Level gate matches Boethiah's Calling; LoreRim's TIE sets iTIE_BoethiahsCalling=30 — install TIE settings.ini — medium (FOMOD timing option unverified)
- Mia ambushes you if you carry the Ebony Mail with Murders < 5 — Nexus cache — high (author claim)
- The Great Village of Kynesgrove patch ships; Boethiah's Bidding is absent — install plugins/modlist — high

## destroy-the-dragon-cult.md
- Quests: Destroy the Dragon Cult (DCQuest, Defeat the Dragon Cult.esp) and Destroy the Acolyte Priests (EnoAcolyteQuest) — install — high
- Esbern sends a note after Paarthurnax says to find an Elder Scroll — Nexus 86625 cache (2023-03-09) — high
- Objectives: Defeat Hevnoraak/Krosis/Morokei/Nahkriin/Otar the Mad/Rahgot/Vokun/Volsung; Investigate Labyrinthian — plugin — high
- Cult of the World Eater makes each priest buff Alduin (per-priest values in the file) — Nexus 83274 cache (2023-01-27) — high
- Acolyte quest starts with a courier note from Storn after freeing the Wind Stone / starting The Path of Knowledge, or from Frea after the questline. The author recommends Better Courier, which LoreRim does not ship — Nexus 145580 cache (2025-03-23); install modid search — high. Courier delivery on Solstheim is unverified.
- Cult of the True Dragonborn buffs Miraak per acolyte; killing Vahlok strengthens Miraak — Nexus 83458 cache — high
- The LoreRim site Main Quests page mentions both — high

## storm-the-thalmor-embassy.md
- No new quest. It overrides MQ201 Diplomatic Immunity and adds objective 5 "Meet Delphine in Riverwood or storm the Thalmor Embassy" — install Storm the Thalmor Embassy.esp (v1.0.2.0) — high
- The gate gets a level-75 lock. Unlocking it jumps to stage 170, disables Elenwen and makes the Thalmor hostile — install QF_MQ201 / STE_* psc — high
- A non-Dragonborn character can use it before MQ201 to kill Elenwen, but that breaks the main quest — Nexus 104936 cache (2026-04-26, cache 2026-06-02) + psc — high
- LoreRim site: storming lets you "skip the 'party'" — Main Quests page — high

## redeeming-fultheim.md
- Quest: A Forgotten Blade (madFultheimQuest) — install Redeeming Fultheim - Blades Quest Addon.esp (v1.2.0.0) — high
- Start: Fultheim's Akaviri sword dialogue after Alduin's Wall, once the Blades are in Sky Haven Temple — Nexus 136788 cache (2024-12-21) — high
- Fultheim lives at the Nightgate Inn — UESP Skyrim:Fultheim — high
- Bring a Dragon Bone (honor) or Thalmor Justiciar's Robes (revenge). Insulting him makes him hostile — plugin + Nexus cache — high

## mephalas-curse.md (researched this run)
- Quest "The Fate of the Ebony Blade" (DA08MephalaHunt, EbonyBladeCurse.esp), objective 10 "Decide the fate of the Ebony Blade.", with journal text at stages 10/20/25/30 — install EbonyBladeCurse.esp QUST (mod v2.6.0.0) — high
- Stages 20, 25 and 30 all carry the Complete Quest flag — install EbonyBladeCurse.esp QUST INDX/QSDT, parsed this run — high
- The quest starts when Mephala's vanilla post-pickup line (INFO 00062CEF "Excellent work…") runs madStartHunt, which sets stage 10 — install plugin INFO VMAD + madStartHunt.psc — high
- Trigger boxes in Dragonsreach Dungeon force-draw the blade with the message "A faint, insidious whisper enters your thoughts…" — madForceEquipBlade.psc + REFR records — high
- Killing a friend with the blade (vanilla DA08FriendKill, overridden here) sets stage 20 — QF_DA08FriendKill_0010FAEE.psc; vanilla-quest-overrides.json — high
- A trigger in the Aetherium Forge (cell DLC1Bthalft01) sets stage 25 only when "Aetherium Forge Destroys Items.esp" is NOT installed and stage 10 is done — madSetStageTrigSCRIPT.psc + VMAD properties (stage 25, prereqStageOPT 10) — high
- Aetherium Forge Destroys Items (114021) and Stress and Fear (116522) are NOT in the LoreRim install — install modid search + plugins.txt grep — high
- So in LoreRim, reaching the Forge completes the quest at stage 25 without destroying the blade, and there is no stress/madness curse — inferred from scripts + absent mods — medium (not play-tested)
- Ambushes: at stage 10, with the blade in inventory and you in the Skyrim worldspace, the script spawns either a Spider Daedra (EncSpider_Daedra) or a Mephala Cultist about 500 units away (50/50). The first check comes after 168 game hours, then every 120–216 h (every 24 h outside the Skyrim worldspace) — madHuntedQuest.psc — medium (shipped .psc vs compiled .pex and FOMOD timing unverified)
- Mod page: ambushes come "about once every 1-2 weeks (ADJUSTABLE IN FOMOD)". Storing the blade in a chest pauses them, and there is a Hardcore mode option — Nexus 120650 cache (nexusLastModified 2024-10-10, cache 2026-01-11) — high (author claim)
- Spell Tome: Conjure Spider Daedra sits in the blade's room. The plugin adds the Blood Cloak and Spider Daedra Drain spells and two notes, "Peculiar Note" (Daedric) and "Cultist's Note" — plugin BOOK/SPEL/MGEF + Nexus cache — high
- Whispering_Door_Expansion_Addon.esp: handing the blade to the Vigilant sets DA08 stage 45. Mephala speaks, the Vigilant is killed, and a Spider Daedra is summoned — plugin INFO + madDA08_Vigilant*.psc, madSpiderMephala.psc, madSpawnSpider.psc; Nexus cache "intervening directly and retaliating" — high
- Mid-game backup: the hunt starts if DA08 is at stage 45 or 60 (and below 80) — madHuntStartBackup.psc — high
- The Whispering Door stays at level 20 in LoreRim (iTIE_TheWhisperingDoor=20) — install TIE settings.ini — high
- Vanilla prerequisites are level 20 and Dragon Rising. The blade is behind a bloody locked door in a closet below the Dragonsreach kitchen — UESP Skyrim:The_Whispering_Door — high
- Ten kills fully power the Ebony Blade — UESP Skyrim:Ebony_Blade — high
- The Aetherium Forge is reached through the Dawnguard quest Lost to the Ages (four shards, Ruins of Bthalft) — UESP Skyrim:Lost_to_the_Ages — high
- In LoreRim, DA08 is overridden by USSEP, The Whispering Door - Quest Expansion, Wintersun, and the TWDQE - Wintersun patch — vanilla-quest-overrides.json — high
- TWDQE (76606, v1.15.0.0) adds a good-guy Jarl route and a deceive route, keeps the vanilla route, and needs no Requiem patch — Nexus 76606 cache (2025-12-09) — high
- Mephala's Curse - TWDQE - WSN (130774) adds Wintersun favor scripting to the Vigilant topic. Its page says you can become a Mephala follower and get favor changes — install WSN esp + Nexus 130774 cache (2026-02-05) — high
- Mephala Revoiced (157081) is human-voiced ("AI was NOT used"). It installs voice files for AFDI (unused in LoreRim) and for the addon esp — Nexus 157081 cache (2025-08-22) + install file listing — high
- LoreRim site: Mephala's Curse "adds a functioning curse to the Ebony Blade and new world encounters…" — LoreRim site Quest Expansions — high

## Unit mods not given their own file
- OMEAR Addition - Skyrim Extended Cut S-and-S (Nexus 67968, v1.8.2.0) has no plugin. It replaces OnMagicEffectApply script events with PO3 Papyrus Extender code for performance — meta.ini cache — high. It belongs in mod-added/saints-and-seducers-extended-cut.md (another agent's file) and was not written into any file of this unit.
- OMEAR Addition - CoW Quest Expansion, the Penitus Oculatus Andrealphus patch, Destroy the Acolyte Priests and Mephala Revoiced were folded into their quest mod's file.

## Contradictions
- Mephala's Curse ambush frequency: the mod page says "about once every 1-2 weeks". The shipped script source waits 7 days for the first check, then 5–9 days (120–216 game hours), and only spawns on a check made in the Skyrim worldspace. Both are cited; the FOMOD-installed compiled script was not decompiled.
- The Mephala's Curse page advertises a madness/stress curse and a destroy-the-blade ending. Neither works in LoreRim because Stress and Fear and Aetherium Forge Destroys Items are not shipped (install). The LoreRim site still says "the player must find a way to destroy the Blade".
- The Penitus Oculatus page lists "Amaund Motierre and Rexus" as targets. The plugin's Loose Ends quest names only the man plotting the assassination. The file cites both.

## Gaps (looked for, not found)
- Which FOMOD options LoreRim chose for Mephala's Curse (ambush interval, Hardcore mode, Requiem patch, SkyPatcher spider INI). meta.ini has no FOMOD choice record ("FOMOD Plus\fomod={}").
- Whether the Ebony Blade actually stays undestroyed at the Forge in LoreRim (no play test).
- ACDB contract gold amounts; the Listen plugin's global value vs the MCM default; the Listen Nexus page (403, no cache).
- Whether Destroy the Acolyte Priests' courier reaches you on Solstheim without Better Courier.
- How ACDB's Kill Elenwen contract interacts with Storm the Thalmor Embassy disabling Elenwen.
- How hard a level-75 lock is under Requiem lockpicking.

## Leads
- Decompile madHuntedQuest.pex (Champollion) to confirm the shipped ambush timing.
- Check LoreRim's Lost to the Ages / Legends of Aetherium changes, which affect reaching the Forge — legends-of-aetherium.md.
- wiki.lorerim.com pages for Daedric quests / Dark Brotherhood may give LoreRim-specific tips.
- The Whispering Door - Quest Expansion stage numbers (45, 60, 80) are useful to the vanilla-changes/daedric-quests.md writer.
