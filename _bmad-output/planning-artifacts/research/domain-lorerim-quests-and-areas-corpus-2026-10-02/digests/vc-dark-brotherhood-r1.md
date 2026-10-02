# Digest — vc-dark-brotherhood (r1)

The target file did not exist when this run started, so it was written fresh: `lorerim-agent/knowledge/quests/vanilla-changes/dark-brotherhood.md`.

## lorerim-agent/knowledge/quests/vanilla-changes/dark-brotherhood.md

### Baseline (vanilla)
- Innocence Lost starts from Windhelm rumors about a boy doing the Black Sacrament, or from talking to the Honorhall orphans. No level requirement. Rewards: Aretino Family Heirloom and a Mysterious Note — UESP Skyrim:Innocence Lost (UESP, n/a, accessed 2026-10-02) — high
- After Innocence Lost a courier brings a "We know" note, and Astrid kidnaps you at your next sleep and takes you to the Abandoned Shack. The captives are Fultheim the Fearless, Alea Quintus and Vasha. The Falkreath Sanctuary password is "Silence, my brother" — UESP With Friends Like These... (UESP, accessed 2026-10-02) — high
- Killing Astrid starts Destroy the Dark Brotherhood!: report to a guard, then Commander Maro at the Penitus Oculatus Outpost in Dragon Bridge. Rewards are 3,000 gold and a Marked for Death word. It permanently bars membership — UESP Destroy the Dark Brotherhood! (UESP, accessed 2026-10-02) — high
- The Dark Brotherhood Forever runs after Hail Sithis!. The Night Mother at Dawnstar sends you to one of 10 clients, who pay leveled gold up front, and it repeats forever — UESP The Dark Brotherhood Forever (UESP, accessed 2026-10-02) — high
- Delayed Burial: Cicero's broken wagon on the road north of Whiterun near Loreius Farm. You can persuade Loreius (Speech) or report Cicero to a guard; both pay leveled gold, and reporting him gets the Loreius couple killed. The original trigger, an overheard conversation at Whiterun Stables, was cut — UESP Delayed Burial (UESP, accessed 2026-10-02) — high
- The unused stables scene is Uthgerd and Skulvar ("A jester - funny suit and all…") — UESP Skulvar Sable-Hilt (UESP, accessed 2026-10-02) — high
- The main questline is 13+ quests ending in Hail Sithis!. Rewards include Shrouded Armor, Blade of Woe, Shadowmere and Marked for Death — UESP Skyrim:Dark Brotherhood (UESP, accessed 2026-10-02) — high
- Official objectives: DB01 "Talk to Aventus Aretino / Kill Grelod the Kind / Tell Aventus Aretino that Grelod is dead". DBDestroy "Report Astrid's death to a guard / Speak with Commander Maro / Kill everyone in the Sanctuary! / Report back to Commander Maro". DBSideContract01 "Kill Narfi / Report back to Nazir" — LoreRim install official-quests.json (plugin records, accessed 2026-10-02) — high

### Overrides (install)
- DB01 is overridden only by The Innocence Lost - Quest Expansion. DB01Misc: USSEP, The Choice is Yours, Whiterun Stables Scene. DB02, DB03 and DB05: USSEP only. DBDestroy: Destroy The Dark Brotherhood - Quest Expansion. DBrecurring: USMP and Listen. DBSideContract01: CC Farming. DBSideContract03/11: USSEP. DBEntranceQuest: USSEP and The Choice is Yours. WEJS28 ("Dark Brotherhood Assassin Sent to Kill the Player"): Update.esm, Timing is Everything SE and Requiem — vanilla-quest-overrides.json (LoreRim install, accessed 2026-10-02) — high
- Load order (Default profile): USSEP 88, Penitus_Oculatus 225, ACDB 919, TheChoiceIsYours 982, Whiterun Stables Scene 1001, Innocence Lost QE 1009, Destroy DB QE 1014, IL QE USSEP Patch 1018, Listen 1097, TimingIsEverything 1345, CC Farming 1434, Requiem 1679, Vittoria IL patch 1874, Lux IL USSEP patch 3004 — profiles/Default/loadorder.txt (LoreRim install, accessed 2026-10-02) — high

### Innocence Lost QE (v1.12.0.0)
- Adds misc quest DB01_OptionalObjectives with objectives "Ask a guard to arrest Grelod (Optional)", "Witness Grelod's arrest", "Poison Grelod's Wine (Optional)" and "Wait for Grelod to drink the poisoned wine" — install plugin records — high
- Routes:
  - Poison her wine (unlocked by listening to her talk about her favourite wine).
  - Push her off the Riften docks.
  - Have her arrested: bribe a guard or use Thane influence, after first seeing how she treats the children. Evidence from the orphanage unlocks a Speechcraft check.
  - On the arrest path the Brotherhood kills her in her cell and there is no kidnapping, which locks you out of the DB. You can still kill her in jail before talking to Aventus. Console fallback: `setstage db01 255`.

  — Nexus 80974 via meta.ini cache (nexusLastModified 2025-05-18, cache 2026-01-11) — high (author's claims)

### Destroy The Dark Brotherhood QE (f1.03, full version installed)
- Plan-B kidnapping:
  - Active only if Grelod was jailed through IL QE and the quest was finished with Constance.
  - Killing any vanilla Black Sacrament target yourself then triggers Astrid's kidnapping. Targets: Helvard, Lurbuk, Hern, Deekus, Ma'randru-jo, Anoriath, Alain Dufont, Narfi, Agnis, Beitild, Safia, plus Ennodius, Maluril and Vittoria Vici.
  - There is no kidnapping if someone else did the kill, or while Grelod is alive.

  — Nexus 118229 via meta.ini cache (nexusLastModified 2024-07-12) — high (author's claims)
- Expanded destroy quest: you must discover the password yourself; new voiced character Gaston Bellefort; assassins tracked outside the Sanctuary; new combat mechanics per member — same source — high
- Freed captives: Fultheim becomes a cowardly recruitable follower, Vasha joins bandits, Alea ends up jailed — same source — high
- The installed archive is the regular file with voice and meshes, not a "Kidnapping Only" name, so it is assumed to be the full version — install folder / installationFile — medium

### ACDB (v1.4.1.0)
- Nine contracts with exact names: Contract: Kill Nazeem, Braith, Taarie and Endarie, Rolff Stone-Fist, Lemkil, Serana, Erikur, Thonar Silver-Blood, Elenwen. Each is paid out by Nazir — install plugin records — high
- Contract boards sit in the Falkreath and Dawnstar Sanctuary dining rooms; read a contract to start it. Unlocks:
  - Thonar: after No One Escapes Cidhna Mine with Madanach killed
  - Elenwen: after Dragonslayer
  - Serana: after Kindred Judgment
  - Erikur: after The Dainty Sload and Diplomatic Immunity
  - Braith: needs a child-killing mod

  — Nexus 59211 via meta.ini cache (2024-02-05) — high
- Slayable Offspring SKSE (v2.1.0.0) is enabled in the Default modlist — modlist.txt — high

### Listen (v1.0.0.0)
- Five radiant quests named "Contract: Kill <Alias=Target>", one per dead drop: Riften, Solitude, Markarth, Whiterun Hold, Eastmarch. The delegation stage reads "tasked another Dark Drotherhood member" — install plugin records — high
- Triggers: the Night Mother talk activator fires when DB04a stage 200 is done and DB09 stage 200 is not, or when DB11 stage 200 is done — Listen Scripts/Source LTNTriggerScript(2).psc — medium (inferred from scripts)
- MCM defaults: Quest Chance 0.75 and Average Reward 500 (range 100–1000) — LTNMCMScript.psc — high
- 60 targets across the nine holds, up to five contracts per Night Mother talk, delegation — Nexus 59659 via web search excerpt (accessed 2026-10-02) — medium

### CC Farming (v1.5.6.0)
- If you hire Narfi as a farmhand (after his sister's quest), the DB contract won't start. If the contract is already active, Nazir can be persuaded (Speech 75) — Nexus 69029 via meta.ini cache (2025-12-02) — high

### Delayed Burial interplay
- The Choice is Yours: overhearing the Whiterun stables conversation will no longer trigger Delayed Burial — Nexus article 51711 via web search excerpt (accessed 2026-10-02) — medium
- Whiterun Stables Scene restores the Skulvar/Uthgerd scene and loads after TCIY — meta.ini cache (2024-04-29) + loadorder — medium on the net effect

### Other
- Timing is Everything sets the DB Assassin world encounter to min level 5 with 0 assaults and 0 murders (shipped defaults); no LoreRim override file was found. TIE has no other DB quest gate — TIE Settings Loader settings.ini + translations — medium
- Vittoria's Alternate Wedding IL patch: the alternate wedding plays out if Grelod was not killed — Vittoria patches meta.ini cache (2025-01-30) — high
- LoreRim site, Factions page: "More contracts…", Innocence Lost QE "new paths (both good and evil)", and Penitus Oculatus "expands on the destroy the dark brotherhood path with its own storyline" — lorerim.com/guides/quests/factions (accessed 2026-10-02) — high
- Penitus Oculatus starts after Destroy the DB! via Commander Maro. Quests include Unfinished Business, Bad Blood, Fool's Errand, A Nest of Vipers, Loose Ends, House Cleaning, Paperwork, Inquisition and Troubleshoot — install plugin records + Nexus 21061 cache — high

## Contradictions
- The DTDB author says "Only the quest DB02 ('With Friends Like These...') has been edited". The install override map instead lists DTDB against DBDestroy and not DB02. Both are cited in the file.
- TCIY removes the Whiterun stables trigger for Delayed Burial, while the Whiterun Stables Scene mod (loaded later, winning DB01Misc) restores the scene. The net in-game behaviour is undocumented.
- The IL QE page says the arrest path "locks you out from joining the Dark Brotherhood", but LoreRim ships DTDB, which restores a kidnapping route. Not a true contradiction: it is conditional on the second mod.

## Gaps (looked for, not found)
- The Listen Nexus page itself was not fetched (Nexus returns 403), so only a search excerpt was available. It is unknown whether vanilla DB Forever contracts still run alongside Listen.
- The Choice is Yours altered-quests article (Nexus 403): exact wording for Delayed Burial and DBEntranceQuest.
- Whiterun Stables Scene optional-file description (Nexus 403): whether the restored scene starts DB01Misc.
- Requiem's change to WEJS28 is undocumented.
- wiki.lorerim.com did not resolve (DNS failure).
- No LoreRim-specific level gate or Delayed Quest Starts module for the DB was found in the install.

## Leads
- Read DB01Misc / DBEntranceQuest records in xEdit to settle the TCIY vs Whiterun Stables Scene conflict, and the WEJS28 conditions (Requiem).
- Compare Listen's DBrecurring override with vanilla to see whether vanilla Night Mother contracts are suppressed.
- The DTDB helper quests DBAlternativeToGrelod and DBDestroyCaptives could show the plan-B kidnapping conditions directly.
- Check whether Redeeming Fultheim (Blades addon) interacts with the Abandoned Shack captive Fultheim.
