---
id: dark-brotherhood
title: Dark Brotherhood (LoreRim changes)
kind: vanilla-changes
category: questline
summary: The vanilla Dark Brotherhood questline as shipped in LoreRim. Innocence Lost gains hitman and arrest paths, a sparing route can still bring Astrid to you, Destroy the Dark Brotherhood! becomes a longer hunt, the Brotherhood gets nine extra Nazir contracts and Listener radiant contracts, and Penitus Oculatus continues the destroy path.
mods:
  - name: The Innocence Lost - Quest Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/80974
    version: 1.12.0.0
  - name: Destroy The Dark Brotherhood - Quest Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/118229
    version: f1.03
  - name: ACDB - Additional Contracts for the Dark Brotherhood
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/59211
    version: 1.4.1.0
  - name: Listen - Dark Brotherhood Radiant Quests
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/59659
    version: 1.0.0.0
  - name: CC Farming - Tweaks Enhancements and Quest Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/69029
    version: 1.5.6.0
  - name: The Choice is Yours
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/3850
    version: 2.7.0.0
  - name: Skyrim Cut Content Restoration - Whiterun Stables Scene
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/90744
    version: 1.0.0.0
  - name: Timing is Everything SE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/25464
    version: 2.2.0.0
  - name: Vittorias Alternate Wedding - Patches
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/72240
    version: 1.4.0.0
  - name: Penitus Oculatus
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/21061
    version: 0.18.4.0
  - name: Lux (patch hub)
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/113002
    version: 7.1.0.0
plugins: [Innocence Lost - Quest Expansion.esp, Innocence Lost QE - USSEP Patch.esp, Destroy the Dark Brotherhood - Quest Expansion.esp, Additional Contracts For the Dark Brotherhood.esp, Listen.esp, CC Farming - Tweaks and Enhancements.esp, TheChoiceIsYours.esp, CutContentRestoration - Whiterun Stables Scene.esp, TimingIsEverything.esp, Vittoria's Alternate Wedding - Innocence Lost Expansion Patch.esp, Lux - Innocence Lost USSEP patch.esp]
quests: [Innocence Lost, Delayed Burial, With Friends Like These..., Destroy the Dark Brotherhood!, The Dark Brotherhood Forever, "Contract: Kill Narfi", "Contract: Kill Nazeem", "Contract: Kill Braith", "Contract: Kill Taarie and Endarie", "Contract: Kill Rolff Stone-Fist", "Contract: Kill Lemkil", "Contract: Kill Serana", "Contract: Kill Erikur", "Contract: Kill Thonar Silver-Blood", "Contract: Kill Elenwen", "Contract: Kill <Alias=Target>"]
locations: [Honorhall Orphanage, Aretino Residence, Abandoned Shack, Dark Brotherhood Sanctuary, Dawnstar Sanctuary, Loreius Farm, Penitus Oculatus Outpost]
region: Skyrim-wide (Riften, Windhelm, Falkreath Sanctuary, Dawnstar Sanctuary)
start: As in vanilla, overhear the Windhelm rumors about Aventus Aretino or talk to the Honorhall orphans to start Innocence Lost. In LoreRim you can kill Grelod in new ways (poisoned wine, a shove off the Riften docks) or have her arrested. If you have her arrested, Astrid can still kidnap you later, after you kill one of the vanilla contract targets yourself.
related: [mod-added/additional-contracts-dark-brotherhood.md, mod-added/listen-dark-brotherhood-radiant.md, mod-added/penitus-oculatus.md, mod-added/vittorias-alternate-wedding.md, vanilla-changes/thieves-guild.md, vanilla-changes/side-quests-and-misc.md, areas/falkreath-hold.md, areas/the-pale-and-dawnstar.md, areas/the-rift-and-riften.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
confidence: medium
updated: 2026-10-02
---

# Dark Brotherhood (LoreRim changes)

In vanilla Skyrim the Dark Brotherhood questline starts with Innocence Lost and runs through 13 main quests to Hail Sithis!, after which The Dark Brotherhood Forever offers endless contracts. Nazir also hands out side contracts, and killing Astrid in the Abandoned Shack starts Destroy the Dark Brotherhood! instead [1]. LoreRim keeps that structure. The biggest changes are to the first quest and to the destroy path, plus two contract add-ons [8]. The rest of the core quests (Mourning Never Comes through Hail Sithis!) are touched only by bug-fix patches in the shipped load order [9].

## Starting in LoreRim
- **Vanilla trigger:** you start Innocence Lost by hearing rumors in Windhelm about a boy performing the Black Sacrament, or by talking to the children at Honorhall Orphanage in Riften. Vanilla sets no level requirement [2].
- **LoreRim adds more ways to deal with Grelod.** The Innocence Lost - Quest Expansion lets you kill her the vanilla way, poison her wine, or lure her to the Riften docks and push her. You can also have her arrested [10]. If you kill her by any method, Astrid kidnaps you and With Friends Like These... continues as in vanilla [10].
- **Arrest path and the Brotherhood:** on the mod's own terms, the arrest path locks you out of the Dark Brotherhood [10]. LoreRim also ships Destroy The Dark Brotherhood - Quest Expansion, which adds a "plan B" kidnapping, described under Innocence Lost below [11].
- **Time and level gates:** LoreRim ships no Delayed Quest Starts module for the Dark Brotherhood. No Dark Brotherhood start gate turned up in the Timing is Everything settings either [18].
  - The only Dark Brotherhood setting in Timing is Everything is the world encounter "Dark Brotherhood Assassin Sent to Kill the Player". It has a minimum level of 5 by default, and the shipped MCM defaults require 0 assaults and 0 murders [18].
  - No LoreRim override of those values was found, so the shipped defaults are assumed (medium confidence) [18].

## Quests

### Innocence Lost (DB01)
- **Vanilla:** talk to Aventus Aretino in Windhelm, kill Grelod the Kind at Honorhall Orphanage, then report back. The rewards are the Aretino Family Heirloom and a Mysterious Note [2]. A courier then delivers a "We know" note, and Astrid kidnaps you the next time you sleep [3].
- **In LoreRim:** *The Innocence Lost - Quest Expansion* changes the quest, and is the only mod that overrides DB01 [9][10]. It adds a misc quest `DB01_OptionalObjectives` with these objectives [10]:
  - *Ask a guard to arrest Grelod (Optional)*
  - *Witness Grelod's arrest*
  - *Poison Grelod's Wine (Optional)*
  - *Wait for Grelod to drink the poisoned wine*

  The mod's routes [10]:
  - **Poison:** listen to Grelod talk about her favourite wine to unlock the poisoning option. A custom scene plays when she drinks it.
  - **Docks:** lure her to a secluded part of the Riften docks and push her off.
  - **Arrest:** first see how Grelod treats the children. Then bribe a guard, or use your influence as Thane, to have her arrested. Exploring the orphanage turns up evidence that unlocks a Speechcraft check.
    - You can visit Grelod in prison. After you tell Aventus and return to Riften, you hear she was found dead in her cell, killed by the Brotherhood, so there is no kidnapping.
    - If you have arrested her but have not yet spoken to Aventus, you can still kill her in jail to get back on the Brotherhood path.
    - The author's console fallback if you regret the arrest: `setstage db01 255`.
  - Constance reacts to every ending, and the mod adds other small reactive touches.

  **LoreRim extras:**
  - *Destroy The Dark Brotherhood - Quest Expansion* adds the "plan B" kidnapping. It works only if you had Grelod jailed and then spoke to Constance to finish the quest. After that, killing any of the vanilla Black Sacrament targets yourself makes Astrid kidnap you, and she asks why you stole a kill from the Brotherhood [11].
    - Targets that can trigger it: Helvard, Lurbuk, Hern, Deekus, Ma'randru-jo, Anoriath, Alain Dufont, Narfi, Agnis, Beitild and Safia. Ennodius, Maluril and Vittoria Vici can also trigger it [11].
    - If one of them dies but you did not kill them, there is no kidnapping. While Grelod is alive, killing these targets does nothing [11].
  - *Vittoria's Alternate Wedding - Innocence Lost Expansion Patch* lets that mod's alternate wedding play out if you chose not to kill Grelod [19]. See [mod-added/vittorias-alternate-wedding.md](../mod-added/vittorias-alternate-wedding.md).

### Delayed Burial (DB01Misc)
- **Vanilla:** Cicero's wagon breaks down on the road north of Whiterun near Loreius Farm, and the quest starts when you pass by.
  - You can persuade Vantus Loreius (easy Speech check) to fix the wheel, or report Cicero to a guard. Both pay leveled gold.
  - If you report him, the Loreius couple is later found slaughtered.
  - The quest was meant to start from an overheard conversation at Whiterun Stables, but that scene was cut [6]. The unused scene is between Uthgerd the Unbroken and Skulvar Sable-Hilt ("A jester - funny suit and all. Just north, by the Loreius Farm…") [7].
- **In LoreRim:** three plugins override this record: USSEP, *The Choice is Yours* and *Skyrim Cut Content Restoration - Whiterun Stables Scene* [9].
  - *The Choice is Yours* stops random greetings, rumors and forced encounters from adding quests to your journal until you choose to pursue them [16]. A search-engine excerpt of its altered-quests article says that overhearing the Whiterun stables conversation "will no longer trigger" Delayed Burial (medium confidence, article not readable directly) [16].
  - *Whiterun Stables Scene* restores the Skulvar/Uthgerd scene outside Whiterun Stables [17]. It loads after The Choice is Yours in the shipped order, so it wins the DB01Misc record conflict [21].
  - Net effect, unverified in play: you may hear the restored stables scene. Whether it adds Delayed Burial to the journal or only points you to the jester is not documented. Meeting Cicero on the road still works [6][17].

### With Friends Like These... (DB02)
- **Vanilla:** you wake in the Abandoned Shack with three captives: Fultheim the Fearless, Alea Quintus and Vasha. Kill one to join, then go to the Falkreath Sanctuary (password "Silence, my brother"). Killing Astrid instead starts Destroy the Dark Brotherhood! [3].
- **In LoreRim:** the only plugin that overrides this record is USSEP, a bug fix [9]. The Destroy The Dark Brotherhood author's page says its mod edits only DB02, but the install's override map lists that mod against DBDestroy, not DB02 [9][11]. That mod also changes what happens to the captives on the destroy path (below).

### Destroy the Dark Brotherhood! (DBDestroy)
- **Vanilla:** report Astrid's death to a guard, then speak with Commander Maro at the Penitus Oculatus Outpost in Dragon Bridge. He gives you the password; you clear the Sanctuary and return to him for 3,000 gold and a Marked for Death word. Completing it permanently bars you from joining [4]. Vanilla objectives: *Report Astrid's death to a guard*, *Speak with Commander Maro*, *Kill everyone in the Sanctuary!*, *Report back to Commander Maro* [9].
- **In LoreRim:** *Destroy The Dark Brotherhood - Quest Expansion* (full version, voiced) overrides this quest [9][11]. Per the mod page [11]:
  - you have to discover the Sanctuary password yourself instead of being handed it;
  - you meet a new character, Gaston Bellefort, author of the in-game book "The Night Mother's Truth";
  - you track down a couple of assassins outside the Sanctuary, and Brotherhood members may be seen at work or disguised among townsfolk;
  - each member fights with new combat mechanics and lines.

  **Captives:** if you free the Abandoned Shack prisoners, they later turn up in the world [11]:
  - Fultheim the Fearless becomes a recruitable but cowardly follower;
  - Vasha joins a bandit gang;
  - Alea ends up in jail.

  **Continuation:** after this quest you can join the Penitus Oculatus through Commander Maro, which LoreRim lists as its own storyline [8][20]. See [mod-added/penitus-oculatus.md](../mod-added/penitus-oculatus.md).

### Contract: Kill Narfi (DBSideContract01)
- **Vanilla:** a Nazir side contract, with the objectives *Kill Narfi* and *Report back to Nazir* [9].
- **In LoreRim:** *CC Farming - Tweaks Enhancements and Quest Expansion* overrides it [9][15].
  - After you complete his sister's quest, you can hire Narfi as a farmhand. Once he is a farmhand, the Brotherhood contract on him no longer starts [15].
  - If the contract is already running and you have hired him, you can persuade Nazir (Speech 75) that Narfi has been dealt with. You can still kill him instead [15].

### The Dark Brotherhood Forever (DBrecurring)
- **Vanilla:** after Hail Sithis!, the Night Mother in the Dawnstar Sanctuary sends you to one of ten clients. The client pays a leveled gold sum up front and names a target, and the contracts repeat forever [5].
- **In LoreRim:** *Listen - Dark Brotherhood Radiant Quests* overrides DBrecurring and adds five radiant contracts named "Contract: Kill <Alias=Target>", one per dead drop: Whiterun Hold, Eastmarch, outside Riften, Solitude and Markarth [9][13].
  - **Steps:** *Kill <Alias=Target>.*, then *Retrieve payment from the … Dead Drop*. The journal tells you to "return to the Night Mother for more tasks" [13].
  - **Delegation:** a journal stage records that "I have tasked another Dark Drotherhood member with killing the target. They have collected the payment" [13]. This matches the mod page's description of handing the job to another member [14].
  - **When contracts are offered:** the scripts give contracts when you approach the Night Mother. That works after The Silence Has Been Broken is complete and before To Kill an Empire is done, and again after Hail Sithis! (medium confidence, inferred from script source) [13].
  - **MCM:** "Quest Chance" defaults to 0.75 per contract, and "Average Reward" defaults to 500 gold [13].
  - The mod page says it has 60 targets across all nine holds (unverified) [14].
  - Whether vanilla Night Mother contracts also still run alongside it was not verified.

### Contract: Kill Beitild (DBSideContract03), Contract: Kill Helvard (DBSideContract11), Mourning Never Comes (DB03), Bound Until Death (DB05)
- **In LoreRim:** only bug-fix patches override these quests (USSEP), so they play as in vanilla [9]. Vittoria Vici (the Bound Until Death target) also has an alternate wedding quest elsewhere; see [mod-added/vittorias-alternate-wedding.md](../mod-added/vittorias-alternate-wedding.md) [19].

### New: Additional contracts from the Sanctuary contract boards
*ACDB - Additional Contracts for the Dark Brotherhood* adds contract boards in the dining rooms of the Falkreath and Dawnstar Sanctuaries [12]. Take a contract from a board and read it to start the quest; each pays out through Nazir [12]. Accepting a contract makes the target non-essential [12].

| Contract (exact name) | Target location | Unlock condition |
|---|---|---|
| Contract: Kill Nazeem | Whiterun | none listed |
| Contract: Kill Braith | Whiterun | needs a mod that makes children killable [12] |
| Contract: Kill Taarie and Endarie | Solitude | none listed (Gisli then takes over Radiant Raiment) |
| Contract: Kill Rolff Stone-Fist | Windhelm | none listed |
| Contract: Kill Lemkil | Rorikstead | none listed |
| Contract: Kill Thonar Silver-Blood | Markarth | after No One Escapes Cidhna Mine with Madanach killed |
| Contract: Kill Elenwen | Thalmor Embassy | after Dragonslayer |
| Contract: Kill Serana | — | after Kindred Judgment |
| Contract: Kill Erikur | Solitude | after The Dainty Sload and Diplomatic Immunity |

Quest names and locations come from the plugin records; unlock conditions come from the mod page [12]. LoreRim ships and enables *Slayable Offspring SKSE*, the child-killing mod ACDB recommends, so Braith's contract should be completable [12][21]. For full details see [mod-added/additional-contracts-dark-brotherhood.md](../mod-added/additional-contracts-dark-brotherhood.md).

## Locations
- **Honorhall Orphanage** (Riften) — Grelod's orphanage, with the new arrest, poison and docks routes [2][10].
- **Aretino Residence** (Windhelm) — where Aventus performs the Black Sacrament [2].
- **Loreius Farm** (north of Whiterun) — where Delayed Burial happens [6].
- **Abandoned Shack** — where Astrid holds you and the three captives [3].
- **Dark Brotherhood Sanctuary** (west of Falkreath) and **Dawnstar Sanctuary** — the ACDB contract boards are in both dining rooms [3][12].
- **Penitus Oculatus Outpost** (Dragon Bridge) — Commander Maro, the hub for the destroy path [4][20].
- **Listen dead drops** — Whiterun Hold, Eastmarch, outside Riften, Solitude and Markarth [13].

## Rewards & notable items
- Vanilla membership rewards are unchanged: Shrouded Armor, Blade of Woe, Shadowmere, and the Marked for Death shout [1].
- Each ACDB contract pays out through Nazir [12]. Listen contracts pay from the dead drops, averaging 500 gold by default [13].
- On the destroy path, Fultheim can become a follower if freed [11].

## LoreRim notes
- **Fixes only:** USSEP overrides Delayed Burial, With Friends Like These..., Mourning Never Comes, Bound Until Death, Contract: Kill Beitild and Contract: Kill Helvard. The Unofficial Skyrim Modder's Patch overrides The Dark Brotherhood Forever. These are bug fixes, not design changes [9].
- *Innocence Lost QE - USSEP Patch.esp* and *Lux - Innocence Lost USSEP patch.esp* are compatibility patches [10][21].
- Requiem and Timing is Everything both override the "Dark Brotherhood Assassin Sent to Kill the Player" world encounter (WEJS28). Requiem's specific change is undocumented [9][18].
- Load order (profile Default): The Choice is Yours → Whiterun Stables Scene → Innocence Lost QE → Destroy the Dark Brotherhood QE → Innocence Lost QE USSEP Patch. This follows the Innocence Lost author's advice to load the expansion after any mod touching the same quest [10][21].
- The LoreRim site's Factions page sums up the changes: more contracts, the Innocence Lost good and evil paths, and Penitus Oculatus expanding the destroy path [8].
- The Destroy the Dark Brotherhood author says its mod is incompatible with Dark Brotherhood Rising Revengeance and needs its "Kidnapping Only" version alongside Unfaltered Virtue [11]. Neither appears in LoreRim's mod list (checked by folder name) [21].

## Related
- [mod-added/additional-contracts-dark-brotherhood.md](../mod-added/additional-contracts-dark-brotherhood.md)
- [mod-added/listen-dark-brotherhood-radiant.md](../mod-added/listen-dark-brotherhood-radiant.md)
- [mod-added/penitus-oculatus.md](../mod-added/penitus-oculatus.md)
- [mod-added/vittorias-alternate-wedding.md](../mod-added/vittorias-alternate-wedding.md)
- [areas/falkreath-hold.md](../areas/falkreath-hold.md), [areas/the-pale-and-dawnstar.md](../areas/the-pale-and-dawnstar.md), [areas/the-rift-and-riften.md](../areas/the-rift-and-riften.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | questline structure, rewards | [UESP — Skyrim:Dark Brotherhood](https://en.uesp.net/wiki/Skyrim:Dark_Brotherhood) | n/a | 2026-10-02 |
| 2 | Innocence Lost baseline | [UESP — Skyrim:Innocence Lost](https://en.uesp.net/wiki/Skyrim:Innocence_Lost) | n/a | 2026-10-02 |
| 3 | With Friends Like These... baseline | [UESP — Skyrim:With Friends Like These...](https://en.uesp.net/wiki/Skyrim:With_Friends_Like_These...) | n/a | 2026-10-02 |
| 4 | Destroy the Dark Brotherhood! baseline | [UESP — Skyrim:Destroy the Dark Brotherhood!](https://en.uesp.net/wiki/Skyrim:Destroy_the_Dark_Brotherhood!) | n/a | 2026-10-02 |
| 5 | The Dark Brotherhood Forever baseline | [UESP — Skyrim:The Dark Brotherhood Forever](https://en.uesp.net/wiki/Skyrim:The_Dark_Brotherhood_Forever) | n/a | 2026-10-02 |
| 6 | Delayed Burial baseline, cut stables trigger | [UESP — Skyrim:Delayed Burial](https://en.uesp.net/wiki/Skyrim:Delayed_Burial) | n/a | 2026-10-02 |
| 7 | unused Skulvar/Uthgerd scene | [UESP — Skyrim:Skulvar Sable-Hilt](https://en.uesp.net/wiki/Skyrim:Skulvar_Sable-Hilt) | n/a | 2026-10-02 |
| 8 | LoreRim summary of DB changes | [LoreRim site — Factions](https://www.lorerim.com/guides/quests/factions) | n/a | 2026-10-02 |
| 9 | official quest objectives; which mods override which DB quests | LoreRim install: official-quests.json + vanilla-quest-overrides.json (plugin records, profile Default) | n/a | 2026-10-02 |
| 10 | Innocence Lost QE objectives and routes | LoreRim install: `Innocence Lost - Quest Expansion.esp` QUST records; [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/80974) via meta.ini cache | 2025-05-18 (nexusLastModified) | 2026-01-11 cache |
| 11 | DTDB kidnapping path, expanded destroy quest, captives | [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/118229) via meta.ini cache; install folder (voice/meshes present) | 2024-07-12 (nexusLastModified) | 2026-01-11 cache |
| 12 | ACDB contract names and unlocks | LoreRim install: `Additional Contracts For the Dark Brotherhood.esp` QUST records; [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/59211) via meta.ini cache | 2024-02-05 (nexusLastModified) | 2026-01-11 cache |
| 13 | Listen quests, dead drops, triggers, MCM defaults | LoreRim install: `Listen.esp` QUST records + `Scripts/Source` (LTNTriggerScript, LTNMCMScript, LTNQuestHandlerScript) | mod v1.0.0 | 2026-10-02 |
| 14 | Listen features (60 targets, delegation) | [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/59659) via web search excerpt (page not fetched) | n/a | 2026-10-02 |
| 15 | Narfi farmhand / contract change | [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/69029) via meta.ini cache | 2025-12-02 (nexusLastModified) | 2026-01-11 cache |
| 16 | The Choice is Yours behavior; Delayed Burial stables trigger | [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/3850) via meta.ini cache; [altered-quests article](https://www.nexusmods.com/skyrim/articles/51711) via web search excerpt | 2023-06-14 (nexusLastModified) | 2026-10-02 |
| 17 | Whiterun Stables Scene restoration | [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/90744) via meta.ini cache (parent Cut Content Restoration description) | 2024-04-29 (nexusLastModified) | 2026-01-11 cache |
| 18 | DB assassin encounter settings | LoreRim install: Timing is Everything SE + Settings Loader (`MCM/Config/TimingIsEverything/settings.ini`, translation strings) | 2021-09-14 / 2023-04-06 | 2026-10-02 |
| 19 | Vittoria alternate wedding / Innocence Lost patch | LoreRim install: Vittorias Alternate Wedding (+ Patches) meta.ini cache and plugin records | 2025-08-03 / 2025-01-30 | 2026-01-22 cache |
| 20 | Penitus Oculatus continuation | LoreRim install: `Penitus_Oculatus.esp` QUST records; [Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/21061) via meta.ini cache | 2023-11-25 (nexusLastModified) | 2026-01-11 cache |
| 21 | load order, presence/absence of mods | LoreRim install: `profiles/Default/loadorder.txt`, `modlist.txt`, `mods/` folder list | n/a | 2026-10-02 |
