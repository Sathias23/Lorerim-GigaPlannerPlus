# Digest — vc-dawnguard (round 1)

The target file did not exist at resume time; it was written from scratch.
- **File:** `lorerim-agent/knowledge/quests/vanilla-changes/dawnguard.md`
- **Web calls used:** 8 (6 fetches, 2 failed: wiki.lorerim.com DNS failure, Nexus article 403; plus 1 search).

## vanilla-changes/dawnguard.md — load-bearing claims

### Start gates
- Dawnguard start in LoreRim needs "Laid to Rest" completed. Shortcut: head straight to Dayspring Canyon, where the quest auto-starts. — LoreRim site main.md (lorerim.com, n/a, accessed 2026-10-02) — high
- `DawnguardQuestPrerequisite.esp` adds the condition `GetQuestCompleted MS14 (Laid to Rest) == 1` to SMQN `DLC1VQ00Node` (Dawnguard.esm 0x00D911). It also adds the condition to the guard rumor INFO 0x0100D057 ("Heard they're reforming the Dawnguard…"). — LoreRim install: plugin records, diffed against Dawnguard.esm and USSEP (accessed 2026-10-02) — high
- The SMQN node is overridden only by Dawnguard.esm → USSEP → DawnguardQuestPrerequisite.esp (scan of the whole Default load order), so the prerequisite plugin wins. — LoreRim install load-order scan — high
- USSEP's own node edit adds `GetStage DLC2MQ01 >= 5 OR GetStage MQ105 < 160`. Its purpose was not verified. — LoreRim install — medium
- The node also has `GetLevel >= global DLC1VQMinLevel (0x0100D912)`. — LoreRim install — high
- `DLC1VQMinLevel` values: Dawnguard.esm 10, TimingIsEverything.esp 10, Requiem.esp 30, `LoreRim - Global Modifiers.esp` (mod "LoreRim - xEdit64 Output") 30. — LoreRim install GLOB records — high
- The TIE Settings Loader `tie_mcmscript.psc` `Load()` runs on OnConfigInit and OnGameReload. It sets `DLC1VQMinLevel` to the MCM value `iTIE_DawnguardRecruitment` (default 10 in `MCM/Config/TimingIsEverything/settings.ini`). No LoreRim `MCM/Settings/TimingIsEverything.ini` was found anywhere under `C:/mods/LoreRim`. The effective level is therefore probably 10. — LoreRim install (script source) — medium; inferred, not tested in game
- TIE MCM help text: "You can still begin the quest prior to this level by visiting Dayspring Canyon". Values >100 set the level to 999, which disables recruitment. `bTIE_EnableVampireAttacks=0` (city vampire attacks off). — LoreRim install TIE loader translations/config — high
- Sensible Dawnguard Prerequisite "doesn't change the minimum level requirement". — Nexus 121948 via meta.ini cache (nexusLastModified 2026-01-29) — high
- Vanilla start: level ≥10, Durak approaches; guard rumor; Agmaer in Dayspring Canyon; cannot start with a Rift bounty; you can bypass straight to Awakening. — UESP Skyrim:Dawnguard (quest) (UESP, n/a, accessed 2026-10-02) — high
- The Choice is Yours overrides `DLC1VQ00ChangeLocation` (Durak recruiter) and its script fragments. It adds global `TCIY_DLC1VQ00PlayerTalkedtoDurak` and property `DurakFollowChance` (=20). It also overrides MS14 Laid to Rest. — LoreRim install (plugin + pex strings) — high for the overrides; low for the inferred behavior
- Vigilant requires the main quest, Dawnguard and House of Horrors. — LoreRim site new-lands.md — high

### Quest changes
- DLC1VQ01MiscObjective: Requiem objective text is "Speak with the leader of the Dawnguard, located within Fort Dawnguard, which is southeast of Riften and inside of Dayspring Canyon." — Requiem.esp record — high
- DLC1HunterBaseIntro (A New Order): Requiem edits aliases, VMAD and journal text. The steps are unchanged. — Requiem.esp record diff — high
- DLC1VQ08 (Kindred Judgment): Requiem swaps the alias inventory to REQ_Weapon_Dawnguard_Crossbow "Dawnguard Crossbow" ×1 and REQ_Bolt_Silver "Silver Bolt" ×50. Vanilla was a Dawnguard.esm crossbow plus 15 bolts. — Requiem.esp records — high
- Requiem - ST - Vampires (`Requiem_VampireCollection.esp`, author sunny333456, header "Add more variation into vampire enemy"):
  - overrides DLC1VQ08 last and DLC1HunterBaseIntroAmbush
  - adds Harkon battle aliases, `dlc1dunharkonbossbattle.pex`, Harkon drain spells, a gargoyle summon, and notes REQ_Note_Harkon / REQ_Note_Harkon1
  - adds Vyrthur gear, combat style, shout and a sun-resistance perk
  - also adds 371 NPC_ and 171 LVLI vampire-variation records
  - Source: LoreRim install — high for the records; medium for "harder fight"
- Skip Vampire Lord Tutorial overrides DLC1VampireTutorial "Power of the Blood". The tutorial is skipped when you accept Harkon's gift. — Nexus 44433 via meta.ini cache (2026-06-08) + override list — high
- SeranaCureQuestPlus overrides DLC1SeranaCureSelfQuest. Serana stays with Falion about 2 days, then performs a ritual at the swamp summoning circle; it completes after 1 day even if you are absent. Start is unchanged (vanilla). Fallback: `setstage DLC1SeranaCureSelfQuest 10`. — Nexus 105091 via meta.ini cache (2026-01-11) — high
- Vanilla Serana cure: after Kindred Judgment, Dawnguard side, player not a vampire; 3 days with Falion. — UESP Skyrim:Serana — high
- Serana's Tomb Blood Curse (enabled): pressing the sarcophagus as a non-vampire, non-werewolf can give the "Corrupted Blood Curse" (no health regen, healing harms you). Disease resistance reduces the chance; curable like a disease. — Nexus 26852 via meta.ini cache (2019-06-22) — high
- Bloodline baseline: accept → tutorial → The Bloodstone Chalice; refuse → A New Order. — UESP Skyrim:Bloodline — high
- VC01 is renamed "Seeking A Cure" by Seeking The Cure; Falion's ritual fails; the A Forlorn Hope add-on follows. — imports for Nexus 85923/107939 (cache 2026-01-11) — high
- All other Dawnguard quest overrides are USSEP-only. — vanilla-quest-overrides.json — high

## Contradictions
- **Recruitment level.** Requiem plus LoreRim's xEdit output set the `DLC1VQMinLevel` record to 30. The TIE Settings Loader script resets it to its MCM value (default 10) on every load. The LoreRim site gives no number. Both sides are cited in the file; the file says the effective value is probably 10.
- **Mod name.** The LoreRim site says "Sensible Quest Prerequisites"; the install ships "Sensible Dawnguard Prerequisite" v1.3.0.0. This is a naming difference only.
- **Dayspring Canyon.** The LoreRim site and the TIE MCM text say visiting Dayspring Canyon starts the quest early. UESP (via the fetch summary) says Dayspring Canyon "doesn't independently trigger the quest", but that going to the fort lets you start Awakening directly. These are compatible in practice.

## Gaps (looked for, not found)
- The exact behavior of The Choice is Yours for Durak/Dawnguard: the Nexus article 52 returned 403.
- wiki.lorerim.com: DNS failure.
- Requiem - ST - Vampires: there is no Nexus description in meta.ini, and the meta version (1.0.0.0) disagrees with the file name (2-4). The concrete Harkon/Vyrthur fight mechanics are undocumented.
- Whether LoreRim intends 30 or 10 as the Dawnguard level. In-game verification is needed.

## Leads
- Read the TIE MCM in a LoreRim save to confirm the live "Dawnguard Recruitment" value.
- Decompile `dlc1dunharkonbossbattle.pex` (Requiem - ST - Vampires) to describe the Harkon fight changes.
- Fetch The Choice is Yours article 52 from a non-blocked mirror (Bethesda.net or the LE page, nexus 26359) for the Dawnguard entry.
- The Bloodbond and Vampire Lines Expansion imports exist and may add vampire-side dialogue or quests relevant to Dawnguard.
