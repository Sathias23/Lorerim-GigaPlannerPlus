---
id: additional-contracts-dark-brotherhood
title: ACDB - Additional Contracts for the Dark Brotherhood
kind: mod-added
category: quest-expansion
summary: Adds nine extra Dark Brotherhood kill contracts (Nazeem, Braith, Taarie and Endarie, Rolff Stone-Fist, Lemkil, Serana, Erikur, Thonar Silver-Blood, Elenwen). You take them from contract boards in the Falkreath and Dawnstar Sanctuaries and collect the reward from Nazir.
mods:
  - name: ACDB - Additional Contracts for the Dark Brotherhood
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/59211
    version: 1.4.1.0
  - name: Slayable Offspring SKSE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/46826
    version: 2.1.0.0
plugins: [Additional Contracts For the Dark Brotherhood.esp]
quests: ["Contract: Kill Nazeem", "Contract: Kill Braith", "Contract: Kill Taarie and Endarie", "Contract: Kill Rolff Stone-Fist", "Contract: Kill Lemkil", "Contract: Kill Serana", "Contract: Kill Erikur", "Contract: Kill Thonar Silver-Blood", "Contract: Kill Elenwen"]
locations: [Dark Brotherhood Sanctuary (Falkreath), Dawnstar Sanctuary, Whiterun, Solitude, Windhelm, Rorikstead, Markarth, Thalmor Embassy]
region: Skyrim-wide (targets in Whiterun, Solitude, Windhelm, Rorikstead, Markarth, Thalmor Embassy)
start: Be a Dark Brotherhood member with access to the Falkreath or Dawnstar Sanctuary. Take a contract from the board in the sanctuary dining room and read it. Some contracts are locked until other quests are done (Thonar, Elenwen, Serana, Erikur).
related: [mod-added/listen-dark-brotherhood-radiant.md, mod-added/penitus-oculatus.md, vanilla-changes/dark-brotherhood.md, mod-added/storm-the-thalmor-embassy.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: high
updated: 2026-10-02
---

# ACDB - Additional Contracts for the Dark Brotherhood

ACDB adds nine optional Dark Brotherhood assassination contracts. Each one targets a well-known vanilla NPC [1][2]. Each contract is its own small quest: kill the target, then talk to Nazir for payment [1]. The LoreRim site sums up the Dark Brotherhood changes as "more contracts are available with some of your most hated NPC named for death" [3].

## Starting in LoreRim
- Contracts are posted on **contract boards in the dining rooms of the Falkreath and Dawnstar Sanctuaries**. Take a contract and read it to start its quest [2].
- When you accept, the target loses essential status. Most targets also get three dialogue options like the vanilla contracts. Elenwen is the exception, because she is aggressive when you enter the Embassy [2].
- Gated contracts, per the mod author [2]. The plugin's contract-adding spell checks matching quest stages: No One Escapes Cidhna Mine (`MS02`) stage 100+, Dragonslayer (`MQ305`) 200+, Kindred Judgment (`DLC1VQ08`) 200+, and for Erikur both Diplomatic Immunity (`MQ201`) 250+ and The Dainty Sload (`TGTQ02`) 200+ [6]:
  - **Thonar Silver-Blood**: available after *No One Escapes Cidhna Mine* if you killed Madanach.
  - **Elenwen**: available after *Dragonslayer*.
  - **Serana**: available after *Kindred Judgment*.
  - **Erikur**: available after *The Dainty Sload* and *Diplomatic Immunity*.
- **Braith** is a child, and killing her needs a child-killing mod. LoreRim ships and enables **Slayable Offspring SKSE**, the mod the author recommends, so this contract can be completed in LoreRim [2][4].
- LoreRim does not document any extra LoreRim-specific gate for these contracts [3].
- Once **Destroy the Dark Brotherhood!** has started (`DBDestroy` stage 10 or later), the contract board shows a "no contracts" message instead of opening [6].

## Quests
All nine follow the same pattern. Objective 10 is "Kill <target>", objective 100 is "Talk to Nazir", and the journal records the kill and then the payment [1].

### Contract: Kill Nazeem
- **Where:** Whiterun [1].
- **Steps:** 1. Kill Nazeem. 2. Talk to Nazir [1].

### Contract: Kill Braith
- **Where:** Whiterun [1].
- **Steps:** 1. Kill Braith. 2. Talk to Nazir [1]. Requires a child-killing mod, which LoreRim provides [2][4].

### Contract: Kill Taarie and Endarie
- **Where:** Solitude (Radiant Raiment) [1][2].
- **Steps:** 1. Kill Taarie and Endarie (the objective tracks a kill counter). 2. Talk to Nazir [1].
- **Outcome:** Gisli takes over the Radiant Raiment shop afterward [2].

### Contract: Kill Rolff Stone-Fist
- **Where:** Windhelm [1].
- **Steps:** 1. Kill Rolff. 2. Talk to Nazir [1].

### Contract: Kill Lemkil
- **Where:** Rorikstead [1].
- **Steps:** 1. Kill Lemkil. 2. Talk to Nazir [1].

### Contract: Kill Serana
- **Where:** No fixed location; the journal just says "kill Serana" [1].
- **Gate:** Available after Kindred Judgment [2].

### Contract: Kill Erikur
- **Where:** Solitude [1].
- **Gate:** Available after The Dainty Sload and Diplomatic Immunity [2].

### Contract: Kill Thonar Silver-Blood
- **Where:** Markarth [1].
- **Gate:** Available after No One Escapes Cidhna Mine with Madanach killed [2].

### Contract: Kill Elenwen
- **Where:** Thalmor Embassy [1].
- **Gate:** Available after Dragonslayer [2].
- **Tip:** The Embassy doors have high-level locks. A master key sits on a wooden table upstairs in the Thalmor barracks. With the Wax Key perk, picking the first door also gives you the key [2].

## Rewards & notable items
- Gold from Nazir for each contract [1][2]. The shipped script hands the reward out as a leveled-item list (`LItemReward`) when you talk to Nazir; its contents were not inspected [6]. The author calls the contracts "ways to make a bit more gold" [2]. The exact amounts were not found in any source read.

## LoreRim notes
- All contracts are optional, and none is needed to progress the questline [2].
- LoreRim also ships *Storm the Thalmor Embassy*. If you storm the Embassy during *Diplomatic Immunity*, that mod disables Elenwen. How this interacts with the later Elenwen contract was not verified [5]. See [storm-the-thalmor-embassy.md](storm-the-thalmor-embassy.md).
- The plugin is ESPFE (light), and the author says it is safe to add mid-save [2].
- A background control quest (`ExtraContractsControlQuest`) handles setup and has no journal text [1].

## Related
- [listen-dark-brotherhood-radiant.md](listen-dark-brotherhood-radiant.md) (radiant Night Mother contracts)
- [penitus-oculatus.md](penitus-oculatus.md) (the anti-Brotherhood path)
- [../vanilla-changes/dark-brotherhood.md](../vanilla-changes/dark-brotherhood.md)
- [storm-the-thalmor-embassy.md](storm-the-thalmor-embassy.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal text | LoreRim install: `Additional Contracts For the Dark Brotherhood.esp` QUST records (profile Default) | mod v1.4.1.0 | 2026-10-02 |
| 2 | targets, gates, contract boards, Braith requirement, Embassy key tip | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/59211) via meta.ini cache | 2024-02-05 (nexusLastModified) | 2026-01-11 cache |
| 3 | LoreRim summary of the Dark Brotherhood changes | [LoreRim site — Factions](https://www.lorerim.com/guides/quests/factions) | n/a | 2026-10-02 |
| 4 | Slayable Offspring SKSE is enabled in LoreRim | LoreRim install: `profiles/Default/modlist.txt` | n/a | 2026-10-02 |
| 5 | Storm the Thalmor Embassy disables Elenwen | LoreRim install: `Storm the Thalmor Embassy` script source `STE_MQ201ThalmorEmbassyGate.psc` | mod v1.0.2.0 | 2026-10-02 |
| 6 | gate stage checks, board closed after Destroy the Dark Brotherhood!, reward mechanism | LoreRim install: `Additional Contracts For the Dark Brotherhood.esp` SPEL `ExtraContracts_AddContractSpell` conditions (parsed; quest form IDs resolved via official-quests.json) and `Scripts/Source/MoreContractsActiScript.psc`, `QF_ExtraContracts_Script.psc` | mod v1.4.1.0 | 2026-10-02 |
