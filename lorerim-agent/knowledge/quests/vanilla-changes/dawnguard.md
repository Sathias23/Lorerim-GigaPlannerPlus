---
id: dawnguard
title: Dawnguard (DLC questline) — LoreRim changes
kind: vanilla-changes
category: questline
summary: In LoreRim the Dawnguard recruiter and guard rumors only begin after you complete the Morthal side quest "Laid to Rest" (Sensible Dawnguard Prerequisite), though walking into Dayspring Canyon / Fort Dawnguard still starts the questline. The Vampire Lord tutorial is skipped, Serana's cure becomes a real ritual, Requiem reworks vampire enemies and the Harkon/Vyrthur fights, and the questline itself is otherwise vanilla plus bug fixes.
mods:
  - name: Sensible Dawnguard Prerequisite
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/121948
    version: 1.3.0.0
  - name: Timing is Everything SE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/25464
    version: 2.2.0.0
  - name: Timing is Everything SE - Settings Loader
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/57754
    version: 1.0.1.0
  - name: Skip Vampire Lord Tutorial
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/44433
    version: 1.0.0.0
  - name: SeranaCureQuestPlus
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/105091
    version: 1.0.0.0
  - name: Serana's Tomb Blood Curse
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/26852
    version: 1.1.0.0
  - name: The Choice is Yours
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/3850
    version: 2.7.0.0
  - name: Requiem - The Roleplaying Overhaul (No Messages ESLIFIED)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/60888
    version: 6.0.2.0
  - name: Requiem - ST - Vampires
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/42633
    version: 1.0.0.0
  - name: Seeking The Cure - A Rising At Dawn Quest Overhaul - Incurable Vampirism
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/85923
    version: 1.0.0.0
  - name: Seeking the Cure - COTN Morthal Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/89174
    version: 1.0.0.0
  - name: A Forlorn Hope - an addon for Seeking The Cure
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/107939
    version: 1.0.0.0
  - name: VIGILANT - Delayed Start
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/57961
    version: 2.3.0.0
  - name: Unofficial Skyrim Special Edition Patch
plugins: [Dawnguard.esm, DawnguardQuestPrerequisite.esp, TimingIsEverything.esp, Skip Vampire Lord Tutorial.esp, SeranaCureQuestPlus.esp, SeranasTombBloodCurse.esp, TheChoiceIsYours.esp, Requiem.esp, Requiem_VampireCollection.esp, LoreRim - Global Modifiers.esp, RisingAtDawnQuestOverhaul.esp, RADQO_COTN_Patch.esp]
quests: [Dawnguard, Awakening, Bloodline, A New Order, The Bloodstone Chalice, Prophet, Seeking Disclosure, Scroll Scouting, Chasing Echoes, Beyond Death, Unseen Visions, Touching the Sky, Kindred Judgment, Power of the Blood, Bolstering the Ranks, Impatience of a Saint, Lost to the Ages, Durnehviir]
locations: [Fort Dawnguard, Dayspring Canyon, Hall of the Vigilant, Dimhollow Crypt, Castle Volkihar, Morthal]
region: Skyrim — Fort Dawnguard in Dayspring Canyon, southeast of Riften; Castle Volkihar off the coast of Haafingar
start: Complete "Laid to Rest" (Morthal; enter the burned-down house) and reach the recruitment level, then Durak approaches you / guards spread the rumor. Shortcut at any time — go to Dayspring Canyon / Fort Dawnguard and the questline starts.
related: [areas/the-rift-and-riften.md, areas/hjaalmarch-and-morthal.md, areas/haafingar-and-solitude.md, mod-added/seeking-the-cure.md, mod-added/serana-dialogue-expansion.md, mod-added/vigilant.md, mod-added/more-to-do-in-the-soul-cairn.md, mod-added/requiem-quests.md, vanilla-changes/side-quests-and-misc.md, vanilla-changes/daedric-quests.md, vanilla-changes/main-quest-and-alternate-start.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
confidence: medium
updated: 2026-10-02
---

# Dawnguard (DLC questline) — LoreRim changes

Dawnguard is the vampire DLC questline: you meet the Dawnguard vampire hunters at Fort Dawnguard, wake Serana in Dimhollow Crypt, and at Castle Volkihar you choose between Isran's Dawnguard and Lord Harkon's vampires [6][7][8]. Both paths go through the same main quests: the Elder Scrolls, the Soul Cairn, and Auriel's Bow. They end in **Kindred Judgment** [7]. LoreRim keeps that structure. Its design changes are a later start (a story prerequisite plus a level gate), a skipped Vampire Lord tutorial, a reworked Serana cure ritual, a harmful curse at Serana's tomb, and Requiem combat changes to vampires and the Harkon and Vyrthur fights [1][2][10][11][13][14]. The LoreRim site calls the questline "not early game content" and warns that "vampires are dangerous enemies and it is not for the low levelled" [1].

## Starting in LoreRim

**Vanilla baseline:** at level 10 or higher an Orc named Durak approaches you and recruits you. Guards spread the rumor "Heard they're reforming the Dawnguard…". Agmaer greets you in Dayspring Canyon. You cannot start the quest while you have a bounty in The Rift [6]. If you go straight to Fort Dawnguard you can skip the "Dawnguard" quest and begin **Awakening** directly [6].

**LoreRim gate 1 — "Laid to Rest" (Sensible Dawnguard Prerequisite).** You must complete the Morthal side quest **Laid to Rest** before the recruitment event fires [1][3]. The LoreRim site says "You can start this quest by entering the burned down house in Morthal" [1]. The plugin records confirm this. `DawnguardQuestPrerequisite.esp` adds a `GetQuestCompleted MS14` ("Laid to Rest") condition to the story-manager node `DLC1VQ00Node` that starts the recruiter event. It adds the same condition to the guard rumor line "Heard they're reforming the Dawnguard. Vampire hunters or something, in the old fort near Riften…" [2][17]. No later plugin in the Default load order overrides that node, so the condition is live [2][20]. The mod author says it does not change the minimum level, so it works alongside Timing is Everything [3].

**LoreRim gate 2 — level (conflicting values; see LoreRim notes).** The node also requires player level ≥ the global `DLC1VQMinLevel` [2]. In the plugin records that global is 10 in Dawnguard.esm and Timing is Everything, and **30** in Requiem.esp. LoreRim's own `LoreRim - Global Modifiers.esp` (mod "LoreRim - xEdit64 Output") carries the 30 [4]. However, the Timing is Everything SE MCM loader script sets `DLC1VQMinLevel` from its "Dawnguard Recruitment" MCM value at config init and on every game load. The shipped default for that value is **10**, and no LoreRim override of that setting was found in the install [5]. So the effective recruitment level is most likely **10** unless you change it in the Timing is Everything MCM. Recruitment levels above 100 disable the recruitment event [5]. (Confidence: medium. This is inferred from the script source; it was not tested in game.)

**Shortcut — no gates.** The LoreRim site says "the quick solution is to just head straight to Dayspring Canyon where the quest will auto start" [1]. Timing is Everything's MCM text agrees: "You can still begin the quest prior to this level by visiting Dayspring Canyon" [5]. The prerequisite plugin edits only the recruiter node and the rumor dialogue [2]. Visiting the fort therefore also bypasses the Laid to Rest requirement (inferred from the records).

**Recruiter behavior (The Choice is Yours).** LoreRim ships The Choice is Yours, which stops forced encounters and rumors from adding quests you have not agreed to [15]. It overrides the Durak recruiter quest `DLC1VQ00ChangeLocation` and its script fragments, adding a `TCIY_DLC1VQ00PlayerTalkedtoDurak` global and a `DurakFollowChance` property [15]. The author's quest list (Nexus article 52, seen only as a search-result summary) says Dawnguard rumors no longer add "Speak with the leader of the Dawnguard" (you still get the map marker), and talking to Durak or asking about the Dawnguard does not start the quest until you agree; if you decline, Durak shows up again only 20% of the time [22]. That 20% matches the plugin's `DurakFollowChance` property [15]. The Choice is Yours also overrides **Laid to Rest** itself, so you may need to actively accept that quest in Morthal (unverified) [15].

**Vampire city attacks** stay disabled. Timing is Everything ships `bTIE_EnableVampireAttacks=0`, and its MCM notes that Bethesda disabled them in SE [5].

**Downstream gate:** in LoreRim, the Vigilant questline requires Dawnguard to be complete, along with the main quest and House of Horrors [21]. The installed `Vigilant - Delayed Start.esp` start node checks a level global plus completion of **Kindred Judgment** and **The House of Horrors**, but no main-quest condition was found in it (disputed: site vs. plugin) [23]. See `mod-added/vigilant.md`.

## Quests

Quest names and objectives below come from the plugin records [17]. Quests not listed are vanilla apart from bug fixes (see LoreRim notes).

### Dawnguard (DLC1VQ01MiscObjective)
- **Vanilla:** a misc objective, "Speak with the leader of the Dawnguard" [17].
- **In LoreRim:** Requiem rewrites the objective to give directions: "Speak with the leader of the Dawnguard, located within Fort Dawnguard, which is southeast of Riften and inside of Dayspring Canyon." [12]. The start gates are described above [2][5].

### Awakening (DLC1VQ01)
- **Vanilla:** "Find out what the vampires are seeking", then "Speak to the mysterious woman" (Serana, in Dimhollow Crypt) [17].
- **In LoreRim:** **Serana's Tomb Blood Curse** applies when you press the sarcophagus button that impales your hand. If you are neither a vampire nor a werewolf, you can catch the **Corrupted Blood Curse**: no health regeneration, and healing spells and items damage you instead. Disease Resistance lowers the chance; for example, 75% resistance leaves a 25% chance [14]. It cures like any disease (Cure Disease potion or a shrine). Becoming a vampire or werewolf also removes it [14]. The plugin is enabled in the Default profile [20].

### Bloodline (DLC1VQ02) → Power of the Blood (DLC1VampireTutorial)
- **Vanilla:** at Castle Volkihar Harkon offers his blood. If you accept, you wake in the cathedral and Harkon walks you through the Vampire Lord form (the **Power of the Blood** tutorial: "Tranform into the Vampire Lord", "Enter melee mode"), and the next quest is **The Bloodstone Chalice**. If you refuse, you are banished outside and return to Isran, which leads to **A New Order** [8][17].
- **In LoreRim:** **Skip Vampire Lord Tutorial** overrides `DLC1VampireTutorial`. You skip the tutorial when you accept Harkon's gift. Harkon still gives his exposition, which you can also skip [11].

### A New Order (DLC1HunterBaseIntro)
- **Vanilla:** "Meet Tolan at Stendarr's Beacon", "Speak with Isran", recruit Sorine Jurard, Gunmar (help him defeat the bear) and Florentius Baenius, then "Return to Isran" [17].
- **In LoreRim:** Requiem overrides the record. The changes seen are alias and script-property edits plus the journal text, which names where Gunmar ("hunting a bear near <location>") and Sorine ("searching for a Dwemer ruin somewhere in the Reach") were last seen [12]. The steps are unchanged [12][17]. Requiem - ST - Vampires also edits the related background quest `DLC1HunterBaseIntroAmbush` [13][16].

### Kindred Judgment (DLC1VQ08)
- **Vanilla:** "Speak to Serana", "Speak to Isran", "Confront Harkon with Auriel's Bow", "Slay Harkon" [17].
- **In LoreRim:**
  - **Requiem.esp** changes the gear of the Dawnguard NPC aliases who join the assault on Castle Volkihar. Their vanilla crossbow and 15 bolts become Requiem's **Dawnguard Crossbow** and **50 Silver Bolts** [12].
  - **Requiem - ST - Vampires** (`Requiem_VampireCollection.esp`, described as "Add more variation into vampire enemy") overrides the quest last. It adds aliases for the Harkon battle (`Alias_HarkonBattleRealHarkon`, `Alias_HarkonBattleHoldPositionMarker`) and ships a replacement `DLC1dunHarkonBossBattle` script, new Harkon drain spells and effects, a Harkon gargoyle summon, and two Harkon notes [13]. Expect a different, harder Harkon fight. The exact mechanics are not documented in any source found (confidence: medium).

### Touching the Sky (DLC1VQ07)
- **Vanilla:** "Locate Auriel's Bow" … "Slay Arch-Curate Vyrthur" … "Retrieve Auriel's Bow" [17].
- **In LoreRim:** the quest record is changed only by USSEP [16]. However, Requiem - ST - Vampires changes the boss: a Vyrthur outfit and combat style, an enchanted dagger, an enchanted necklace, a Vyrthur shout, an auto-cast script, and a sun-resistance trait [13]. The fight details are unverified (confidence: medium).

### Serana's cure (DLC1SeranaCureSelfQuest)
- **Vanilla:** after Kindred Judgment, if you sided with the Dawnguard and are not a vampire, you can ask "Have you thought about getting cured of vampirism?". Two of the three persuasion answers succeed. She then spends three days with Falion in Morthal and comes back human [9]. She refuses for good if you earlier asked "Have you always been a vampire?" and then asked about the cure [9].
- **In LoreRim:** **SeranaCureQuestPlus** turns this into a visible ritual. Serana goes to Falion in Morthal and stays about two days, then performs the ritual at the summoning circle in the swamp while you watch. The ritual completes after a day even if you are not there [10]. The start conditions are unchanged from vanilla [10]. The mod author gives `setstage DLC1SeranaCureSelfQuest 10` as a console fallback if Serana refuses [10].

### Curing your own vampirism (Rising at Dawn → "Seeking A Cure", VC01)
- **Vanilla:** Falion's **Rising at Dawn** ritual cures you [17].
- **In LoreRim:** **Seeking The Cure** renames the quest **"Seeking A Cure"** and makes Falion's ritual **fail**, so vampirism is not curable this way [18]. You start it via Urag gro-Shub at the College or by going straight to Falion's house. You must find your own Black Soul Gem [18]. The add-on **A Forlorn Hope** continues the story toward a real cure [18]. Isran may still tell you to "get yourself cured" [18]. Full details: `mod-added/seeking-the-cure.md`.

### Other Dawnguard quests
The following quests are touched only by USSEP bug fixes [16]:
- Prophet (both the Dawnguard and the vampire versions)
- Chasing Echoes
- Beyond Death
- Unseen Visions
- Seeking Disclosure
- Bolstering the Ranks
- Impatience of a Saint
- Lost to the Ages
- Durnehviir
- the radiant quests Hide and Seek, Preemptive Strike, Rescue, A Jarl's Justice, Lost Relic, Deceiving the Herd, The Gift, New Allegiances, Rings of Blood Magic and Destroying the Dawnguard

The Bloodstone Chalice and Scroll Scouting have no LoreRim overrides [16][17].

## Locations
- **Fort Dawnguard / Dayspring Canyon**: the Dawnguard headquarters, "southeast of Riften and inside of Dayspring Canyon" [12]. Visiting it starts the questline regardless of the LoreRim gates [1][5].
- **Morthal**: Laid to Rest (the prerequisite) starts at the burned-down house [1]. Falion's house is where both cure rituals happen [10][18].
- **Dimhollow Crypt**: Serana's tomb. This is where the blood curse can strike [14].
- **Castle Volkihar**: Harkon's seat. The Kindred Judgment finale takes place here [8][17].

## LoreRim notes
- **Contradiction, recruitment level:** the record value is 30 (Requiem, carried forward by LoreRim's xEdit output plugin) [4], but the Timing is Everything SE Settings Loader script pushes its MCM value, 10 by default, into the same global on every load [5]. The LoreRim site gives no number; it says only that the questline is "immersively delayed" and not for low levels [1]. Check the Timing is Everything MCM ("Dawnguard Recruitment") in game to see the live value.
- **Naming:** the LoreRim site calls the gating mod "Sensible Quest Prerequisites". The installed mod folder is **Sensible Dawnguard Prerequisite** v1.3.0.0 [1][2].
- **Bug-fix overrides:** USSEP overrides almost every Dawnguard quest record. "Multilayer Parallax Soulgems and Azura's Star Realm HD SE" touches the Beyond Death soul gem handler, a visual or asset change [16]. These are fixes, not design changes.
- **Vampire ecosystem:** these mods are enabled but do not change the questline:
  - Sacrilege - Minimalistic Vampires of Skyrim (overrides the player-vampire quests) [16][20]
  - Assorted Vampire Fixes And Tweaks: vampire scouts attack only at night, and some lair beds become coffins [16]
  - Vampire Lines Expansion, Bloodbond, and Serana Dialogue Expansion [20]
- **Listed with this unit but not Dawnguard quests:** Harvest Your Blood for Septimus lets elf and Orc players use their own blood in *Discerning the Transmundane* [19]. Illia leaves Darklight Tower moves Illia to the Bee and Barb after *Repentance* [19]. See `vanilla-changes/daedric-quests.md` and `vanilla-changes/side-quests-and-misc.md`.

## Related
- `areas/the-rift-and-riften.md` (Fort Dawnguard)
- `areas/hjaalmarch-and-morthal.md` (Laid to Rest, Falion)
- `areas/haafingar-and-solitude.md` (Castle Volkihar)
- `mod-added/seeking-the-cure.md`
- `mod-added/serana-dialogue-expansion.md`
- `mod-added/vigilant.md` (requires Dawnguard)
- `mod-added/more-to-do-in-the-soul-cairn.md`
- `mod-added/requiem-quests.md`
- `vanilla-changes/side-quests-and-misc.md`
- `vanilla-changes/daedric-quests.md`
- `vanilla-changes/main-quest-and-alternate-start.md`

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Dawnguard start gates (Laid to Rest, Dayspring Canyon shortcut), cure mods | [LoreRim site — Main Quests](https://www.lorerim.com/guides/quests/main), pre-fetched copy | n/a | 2026-10-02 |
| 2 | Laid to Rest condition on `DLC1VQ00Node` and the rumor INFO; GetLevel ≥ `DLC1VQMinLevel` | LoreRim install: `DawnguardQuestPrerequisite.esp` SMQN/INFO records (Sensible Dawnguard Prerequisite), compared with Dawnguard.esm and USSEP | mod v1.3.0.0 | 2026-10-02 |
| 3 | mod intent: Laid to Rest prerequisite, level unchanged | [Nexus — Sensible Dawnguard Prerequisite](https://www.nexusmods.com/skyrimspecialedition/mods/121948) via meta.ini cache | 2026-01-29 (nexusLastModified) | 2026-02-05 cache |
| 4 | `DLC1VQMinLevel` = 10 / 10 / 30 / 30 | LoreRim install: GLOB records in Dawnguard.esm, TimingIsEverything.esp, Requiem.esp, LoreRim - Global Modifiers.esp | n/a | 2026-10-02 |
| 5 | TIE MCM defaults (recruitment 10, vampire attacks off), the loader script resetting the global on load, MCM help text | LoreRim install: Timing is Everything SE - Settings Loader (`settings.ini`, `tie_mcmscript.psc`, translations) | mod v1.0.1.0 | 2026-10-02 |
| 6 | vanilla start (level 10, Durak, Agmaer, Rift bounty, bypass) | [UESP — Skyrim:Dawnguard (quest)](https://en.uesp.net/wiki/Skyrim:Dawnguard_(quest)) | n/a | 2026-10-02 |
| 7 | questline structure | [UESP — Skyrim:Dawnguard Quests](https://en.uesp.net/wiki/Skyrim:Dawnguard_Quests) | n/a | 2026-10-02 |
| 8 | Bloodline choice and tutorial baseline | [UESP — Skyrim:Bloodline](https://en.uesp.net/wiki/Skyrim:Bloodline) | n/a | 2026-10-02 |
| 9 | vanilla Serana cure | [UESP — Skyrim:Serana § Curing](https://en.uesp.net/wiki/Skyrim:Serana) | n/a | 2026-10-02 |
| 10 | ritual changes, start unchanged, setstage fallback | [Nexus — SeranaCureQuestPlus](https://www.nexusmods.com/skyrimspecialedition/mods/105091) via meta.ini cache; override of `DLC1SeranaCureSelfQuest` | cache 2026-01-11 | 2026-10-02 |
| 11 | Vampire Lord tutorial skipped | [Nexus — Skip Vampire Lord Tutorial](https://www.nexusmods.com/skyrimspecialedition/mods/44433) via meta.ini cache; override of `DLC1VampireTutorial` | cache 2026-06-08 | 2026-10-02 |
| 12 | Requiem edits to DLC1VQ01MiscObjective, DLC1HunterBaseIntro, DLC1VQ08 | LoreRim install: `Requiem.esp` QUST records compared with USSEP/Dawnguard.esm | Requiem 6.0.2.0 | 2026-10-02 |
| 13 | Harkon/Vyrthur rework, DLC1VQ08 and Ambush overrides | LoreRim install: `Requiem_VampireCollection.esp` (Requiem - ST - Vampires) header and records | file 2.4 (meta 1.0.0.0) | 2026-10-02 |
| 14 | Corrupted Blood Curse | [Nexus — Serana's Tomb Blood Curse](https://www.nexusmods.com/skyrimspecialedition/mods/26852) via meta.ini cache | 2019-06-22 (nexusLastModified) | 2026-10-02 |
| 15 | recruiter and Laid to Rest overrides, mod intent | LoreRim install: The Choice is Yours (plugin, script fragments, [Nexus 3850](https://www.nexusmods.com/skyrimspecialedition/mods/3850) meta.ini cache) | cache 2026-01-11 | 2026-10-02 |
| 16 | which mods override which Dawnguard quests | LoreRim install: `imports/vanilla-quest-overrides.json` | n/a | 2026-10-02 |
| 17 | exact quest names and objectives | Official quest catalog `imports/official-quests.json` (Dawnguard.esm/Skyrim.esm strings) | n/a | 2026-10-02 |
| 18 | Seeking A Cure / A Forlorn Hope | LoreRim install: Seeking The Cure (Nexus 85923) and A Forlorn Hope (Nexus 107939) imports, plugin records + meta.ini cache | cache 2026-01-11 | 2026-10-02 |
| 19 | Harvest Your Blood, Illia | LoreRim install: imports for Nexus 69861 and 108292 (meta.ini cache) | cache 2024-05-29 / 2026-01-11 | 2026-10-02 |
| 20 | enabled plugins and load order | LoreRim install: `profiles/Default/plugins.txt`, `loadorder.txt`, `modlist.txt` | n/a | 2026-10-02 |
| 21 | Vigilant requires Dawnguard complete | [LoreRim site — New Lands](https://www.lorerim.com/guides/quests/new-lands), pre-fetched copy | n/a | 2026-10-02 |
| 22 | The Choice is Yours behavior for Dawnguard rumors and Durak | [Nexus article 52 — Quests Altered by The Choice is Yours](https://www.nexusmods.com/skyrimspecialedition/articles/52), web-search result summary (page itself returns 403) | n/a | 2026-10-02 |
| 23 | Vigilant start node conditions (level global, DA10 House of Horrors, DLC1VQ08 Kindred Judgment) | LoreRim install: `Vigilant - Delayed Start.esp` SMQN `VigilantDelayedStart` (VIGILANT - Delayed Start, Nexus 57961 v2.3.0.0) | n/a | 2026-10-02 |
