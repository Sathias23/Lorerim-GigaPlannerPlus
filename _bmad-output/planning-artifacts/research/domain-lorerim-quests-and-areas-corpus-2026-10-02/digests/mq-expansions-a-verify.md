# Verify — mq-expansions-a (normal level, fresh-context verifier, 2026-10-02)

Plugin conditions were parsed from the shipped .esp files with a local Python record reader. Vanilla form IDs were resolved against imports/official-quests.json.

## Claim checks
- VERIFIED: ACDB gates (Thonar/Elenwen/Serana/Erikur). The cited source was the Nexus cache. The independent check: the plugin SPEL `ExtraContracts_AddContractSpell` checks GetStage MS02>=100, MQ305>=200, DLC1VQ08>=200, MQ201>=250 and TGTQ02>=200. A web search only echoed the Nexus page (same publisher). New fact added: `MoreContractsActiScript.psc` closes the board once DBDestroy stage>=10. The reward is the leveled item `LItemReward` (QF_ExtraContracts_Script.psc).
- VERIFIED: Penitus Oculatus start (the cited source was the Nexus cache). The Penitus_Oculatus.esp INFO "Think you've got the mettle, eh?" requires DBDestroy (000934FB) at stage>=200.
- VERIFIED: College QE gates Under Saarthal (cited: Nexus cache). Cow_ThankYouParapets.psc sets MG01's MG02 property to COW_CentralQuest, and QF_COW_CentralQuest_05014C23.psc calls MG02.Start().
- VERIFIED (resolves a gap): Boethiah alt level gate of 30. Cited: TIE ini, with the FOMOD option unverified. meta.ini `FOMOD Plus\fomod` records "Quest Start At Any Level" with no plugin selected, and the Boethiah's Bidding patch is also unselected. The text now states this and confidence moves medium→high.
- VERIFIED: Destroy the Dragon Cult start (cited: Nexus cache). Defeat the Dragon Cult.esp overrides INFO 0003FA49 in DIAL MQ204PaarD1 "How does any of this help me?" (The Throat of the World), which is Paarthurnax's Elder Scroll / Tiid-Ahraan line. TIF__0003FA49.psc sets DCQuest stage 15.
- VERIFIED: Destroy the Acolyte Priests start via Storn/Frea (cited: Nexus cache). The SMQN `EnoAcolyteQuestNode` requires GetQuestCompleted DLC2MQ03 (The Fate of the Skaal) AND (DLC2MQ05 stage 500 not done OR DLC2MQ06 stage 600 done). The QF script courier-delivers the note via WICourierScript. Added to the file.
- VERIFIED: Storm the Thalmor Embassy level-75 gate lock and stage-170 jump (cited: .psc). The compiled QF_MQ201_00035D5F.pex and STE_MQ201ThalmorEmbassyGate.pex both contain int 75 and 170. The .psc also shows ElenwenRef.disable() on the MQ201-running branch.
- VERIFIED: Redeeming Fultheim gate after Alduin's Wall (cited: Nexus cache). The plugin's opening INFO "You do? Just who are you?" has GetQuestCompleted MQ203 (00036192 = Alduin's Wall).
- VERIFIED: Mephala's Curse ambush timing (cited: .psc only; compiled script and FOMOD unverified). The installed madHuntedQuest.pex holds int constants 168 (x2), 120, 216 and 24, matching the .psc. meta.ini `FOMOD Plus\fomod={}` records no choices. The caveat was replaced.
- VERIFIED: Whispering Door level 20 and Boethiah's Calling level 30 in LoreRim. Re-read `Timing is Everything SE - Settings Loader/.../settings.ini`: iTIE_TheWhisperingDoor=20, iTIE_BoethiahsCalling=30. This is the same source the writer cited, so it confirms what that file says but is not an independent second source.
- VERIFIED: LoreRim site quotes (ACDB/PO/CoW: Factions; Storm, Dragon Cult, Fultheim: Main; Mephala, Boethiah: Quest Expansions), checked against imports/lorerim-site. The Dragon Cult file's quote "expands the later half of the main quest… and lengthens it with the added Dragon Cult" joins two site sentences with an ellipsis. Its wording is accurate.

## Mechanical pass
- All 9 files: id = file name, required frontmatter present, every [n] resolves and no orphan rows. Quest names match the imports/mods/*.md QUST headers.
- FIXED: destroy-the-dragon-cult.md frontmatter was invalid YAML, because `start:` began with a quoted phrase followed by more text. The value is now wrapped in single quotes.
- FIXED: additional-contracts-dark-brotherhood.md frontmatter `sources` omitted 4 and 5. college-of-winterhold-quest-expansion.md omitted 6.
- NOTE (not fixed; other units' files): related links to areas/winterhold.md, areas/eastmarch-and-windhelm.md and areas/solstheim.md do not exist yet.

## Not checked (left as written)
- Listen start triggers, which cite the shipped .psc (primary). The Listen Nexus page is still unreachable.
- How ACDB Kill Elenwen interacts with Storm's Elenwen disable. Still unverified, already marked.
