---
id: capital-windhelm-expansion-quests
title: Capital Windhelm Expansion — Quests
kind: mod-added
category: town-quests
summary: Capital Windhelm Expansion (WindhelmSSE.esp) adds about a dozen small, voiced-with-vanilla-lines quests in and around Windhelm, from a vampire nest under the river ice (Severed Cold) to a Thalmor-hunting Talos zealot (The Talos Mistake), poem collecting, pelt and mead runs, an unranked Pit arena and the Graystone Lodge player home. None has a LoreRim-specific gate.
mods:
  - name: Capital Windhelm Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/42990
    version: 1.0.0.0
  - name: Capital Windhelm Expansion Eastern gate blackscreen and other fixes
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/93778
    version: 1.3.9.0hotfix
  - name: Capital Windhelm Expansion - USSEP
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/42990
    version: 1.0.0.0
  - name: Capital Windhelm Expansion Lite
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/114087
    version: 1.1.0.0
plugins: [WindhelmSSE.esp, CWE Taluri fix.esp, CapitalWindhelmExpansion - USSEP.esp]
quests: [Severed Cold, A Night You Can't Remember, The Talos Mistake, Collecting the Edda - Windhelm, Kyne's Trial, Hunting Trip, The Mead Must Flow, A Simple Delivery, Unusual Imports, Pit Fighter, Death Do Us Part, Graystone]
locations: [Frozen Caverns, Mustering Hall, Hall of Relics, The Iron Halls, Graystone Lodge, Dockside Warehouse, Battle-Brew Meadery, Bloodworks, The Pit, Somewhere in the Mountains, Wallside Inn, Wilhelm's Winter Wares, Audmund's Axes, Tormund's Tales, Mathendi's Magics and Imports, The Rooftop]
region: Windhelm and its outskirts (Eastmarch)
start: No LoreRim gate. Each quest starts by talking to the giver in Windhelm (Frida, Signy, Wilhelm, Huki, the meadery) or by reading a note (Hverung's Manifesto, the "For Sale" notice, the guard report about the Dunmer camp attack). Several QUST records are start-game-enabled.
related: [areas/eastmarch-and-windhelm.md, vanilla-changes/side-quests-and-misc.md, mod-added/capital-whiterun-expansion-quests.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: medium
updated: 2026-10-02
---

# Capital Windhelm Expansion — Quests

Capital Windhelm Expansion (author Surjamte) rebuilds Windhelm with new districts. These include a Dunmer shanty town east of the walls, a dock district, a restored Pit arena, a meadery, a museum and a Gray Quarter player home. It also adds small quests voiced with recycled vanilla lines [2]. LoreRim ships its plugin `WindhelmSSE.esp`, which contains 13 QUST records with journal or objective text [1], plus a third-party bug-fix plugin and several compatibility patches [4][5].

## Starting in LoreRim
- No LoreRim-specific start gate was found. The LoreRim site's quest pages do not mention this mod [6], and LoreRim's own patches do not override any of its quests [5]. Most quest records are flagged start-game-enabled and progress through dialogue [1].
- The author recommends a new game, because some NPCs and objects may misbehave if the mod is added mid-save [2]. LoreRim ships it from the start, so this does not apply to a normal LoreRim playthrough [5].
- The triggers below come from the plugin's dialogue-topic and book records, read this run [3].

## Quests
### Severed Cold
- **Giver / trigger:** The attack on the Dunmer camp outside Windhelm's East Gate. A guard's note, *Report: Attack on the Camp* (signed Frost-veins), describes a night attack that left only blood and no bodies [3]. The player asks a guard and a Dunmer at the camp "What happened here? There's blood all over." [3]
- **Where:** The camp outside the East Gate, then the **Frozen Caverns** under the ice outside Windhelm [1].
- **Steps:** 1. Explore the frozen caverns (you fall in through the ice) [1]. 2. (Optional) slay the Volkhair Brute, or (optional) run away [1]. 3. Speak to the guardsman [1]. 4. Report to Wuunferth, the court mage in the Palace of the Kings [1]. 5. Speak to Wuunferth again [1].
- **Choices & outcomes:** You learn that Volkihar vampires (spelled "Volkhair" in the plugin) came up through the ice and dragged the Dunmer into the caverns [1]. If you fight, you kill the vampire lord, but the Dunmer have all been turned and cannot be saved. Wuunferth then seals the nest [1]. If you flee, Wuunferth deals with the nest later, too late to save the guards who went in [1]. A vampire's diary in the plugin is addressed to Harkon by an exiled vampire [3]. The Nexus page mentions a secret, unmarked mini-quest tied to Severed Cold [2].
- **Follow-up:** *A Night You Can't Remember* (`0WindhelmSceneGuardVampireAftermath`) is a drinking scene in Candlehearth Hall that ends in a blackout with the objective "Get some fresh air" [1]. The record's stage notes are developer placeholders [1]. Its link to Severed Cold is inferred from the EditorID only (unverified).

### The Talos Mistake
- **Giver / trigger:** A man named Beorn hands you *Hverung's Manifesto*, which calls Talos loyalists to arms against the Dominion [1][3].
- **Where:** Hverung's headquarters (the **Mustering Hall**, location `0WHSonsOfTalosHQLocation`) and the rooftop lofts of the Gray Quarter [1][3].
- **Steps:** 1. Speak to Hverung [1]. 2. Kill the Thalmor agent hiding in the Gray Quarter, OR warn him [1]. *Hverung's Note* places the agent in a rooftop loft on the Gray Quarter's upper level [3]. 3. Return to Hverung with the agent's ears and the *Thalmor Dossier*, OR kill Hverung [1].
- **Choices & outcomes:** If you side with Hverung, he trusts you and you may use his headquarters. The journal says he "might have more tasks in the future" [1]. If you side with the Thalmor, you kill Hverung and his plans die with him [1].

### Collecting the Edda - Windhelm
- **Giver / trigger:** Read Higil's unfinished edda book (stage 10: "Player has read the book"), then tell Higil "Happened to have a look at your book upstairs..." [1][3]. Higil lives in his clan's home in the Upper Valunstrad, west of the Palace [1][3]. He gives you the list *Writers of Windhelm* [3].
- **Where:** Across Windhelm [1].
- **Steps:** Get a verse from each of these, then return all of them to Higil [1]:
  - Thane Alarik (Higher Valunstrad, or at court)
  - Jorn Scarred-Skald (Iron Hall in the evenings)
  - Hellte (serving maid at Iron Hall)
  - Audmund (his axe shop near the Pit)
  - Tormund Tall-Tale (the old bookshop beside Candlehearth Hall)
  - Skulvar/Sulvar (Old Wheelhouse outside the city)
  - Frida the Younger (Valunstrad)
  - Hjarrandi (Hall of Relics)
- **Rewards:** Each verse is a readable book, such as *Alarik's verse* and *Hjarrandi's Verse* [3]. No item reward is named in the records (unverified).

### Kyne's Trial
- **Giver / trigger:** Frida. Ask "Any work that needs doing around here?" [3]. The Nexus page says she has heard of "a bear the size of a mammoth" [2].
- **Steps:** 1. Take a carriage from the Windhelm Stables to the hills. This leads to a mini-worldspace, **Somewhere in the Mountains** [1]. 2. Find and slay the great bear [1]. 3. Talk to Frida [1]. 4. Take the carriage back to Windhelm [1].
- **Rewards:** You keep the bear's pelt [1].

### Hunting Trip (repeatable)
- **Giver:** Frida in Windhelm. After Kyne's Trial, offer "If you need any more pelts, I could go hunting." [1][3]
- **Steps:** She asks for one batch at a time [1]:
  - 6 Wolf, 3 Sabre Cat or 3 Bear pelts
  - 4 Ice Wolf, 2 Snow Sabre Cat or 2 Snow Bear pelts
  - 3 Cave Bear pelts

### The Mead Must Flow (one-off and repeatable)
- **Giver:** The Battle-Brew Meadery. Ask "How's the meadery working out? Need any help?" [3]. The Nexus page names the giver as Manheim [2].
- **Steps:** The one-off version is a mead delivery to the Frozen Hearth in Winterhold [1]. The repeatable version (`0WHQuestMeadRepeating`) delivers Battle-Brew reserve to the Bannered Mare (Whiterun), the Frozen Hearth (Winterhold) or Candlehearth Hall (Windhelm) [1].

### A Simple Delivery
- **Giver:** Wilhelm (Wilhelm's Winter Wares). Ask "Looking for work." [1][3]
- **Steps:** Deliver a purchase agreement to Higil's home in the Upper Valunstrad, west of the Palace. You can leave it on his second-floor desk if he is out. Then tell Wilhelm [1][3]. The Nexus page calls this quest "Delivery" [2].

### Unusual Imports
- **Giver:** Signy, who is boarding up the **Dockside Warehouse**. Ask "Why are you boarding up the warehouse?" [1][3]
- **Steps:** 1. Enter the warehouse and kill the rieklings that stowed away on a shipment from Solstheim [1]. 2. Speak to Signy when you are done. You can lie that the job is finished [1]. 3. Talk to Signy about your reward [1].
- **Outcomes:** You can accept for free, ask for pay, or decline. The quest also ends if Signy dies [1][3].

### Pit Fighter (repeatable)
- **Giver:** Ask Benkum "Who do I talk to if I want to fight in the pit?" He sends you to Huki in the Bloodworks. Tell Huki "I want to fight in an unranked match." [1][3]
- **Steps:** Head down to the Pit, fight in the arena worldspace (**The Pit**), then return to Huki for pay [1].
- **Note:** The Nexus page says the restored Pit is compatible with the Faction Pit Fighter mod [2]. That mod is not in the LoreRim modlist [5].

### Death Do Us Part
- **Trigger:** A *Torn page* note shows a map to a scenic point overlooking Windhelm and says "Remember the rings". A related *Farewell Note* comes from a Dunmer whose beloved Daelha died in the camp attack [3].
- **Step:** Activate the spot with both rings in your inventory to "reunite two dead lovers" [1]. The quest has no objective marker beyond the note [1].

### Graystone (player home)
- **Trigger:** The *For Sale* notice. Buy the deed from Sadri at Sadri's Used Wares for 1000 gold [3].
- **Steps:** Inspect your new property, **Graystone Lodge** in the Gray Quarter [1].
- **LoreRim:** The bundled fix mod repairs the "missing completion flag" for this home and overrides the `0WHQuestBuyHouse` record [4].

## Locations
- **Frozen Caverns** — the vampire nest under the ice outside Windhelm (Severed Cold) [1].
- **Mustering Hall** — Hverung's headquarters (The Talos Mistake) [1].
- **Hall of Relics** — a small Windhelm-history museum where Hjarrandi lives [1][2].
- **The Iron Halls** — a tavern that hosts poetry nights in the evening [1][2].
- **Graystone Lodge** — a cheap player home in the Gray Quarter [1][2].
- **Battle-Brew Meadery**, **Dockside Warehouse**, **Wallside Inn** (dock tavern), **Bloodworks** and **The Pit** (arena worldspace) [1].
- **Shops:**
  - Wilhelm's Winter Wares
  - Audmund's Axes
  - Bread & Salt
  - The Bakeship Valand
  - Tormund's Tales
  - Mathendi's Magics and Imports
  - The Rooftop, a Thieves Guild safehouse according to the Nexus page [1][2]
- **Somewhere in the Mountains** — the mini-worldspace for Kyne's Trial [1].

## Rewards & notable items
- You keep the giant bear pelt from Kyne's Trial [1]. Pit Fighter pays out from Huki [1]. Signy pays for Unusual Imports if you ask [1][3].
- The Talos Mistake grants use of Hverung's headquarters [1].

## LoreRim notes
- **Bug fixes:** LoreRim loads *Capital Windhelm Expansion Eastern gate blackscreen and other fixes* (`CWE Taluri fix.esp`) [4]. Its fixes include:
  - the infinite-load bug at the East Gate (Taluri Moren's knife)
  - a void-fall wall at the Pit exterior
  - Graystone's completion flag
  - Benkum's unvoiced lines being blocked
  - leftovers of the incomplete vanilla jail-arena quest being removed

  The plugin overrides dialogue for the Pit, Severed Cold and The Talos Mistake [4].
- **Lite and patches:** *Capital Windhelm Expansion Lite* is installed. It is an INI for Base Object Swapper with no plugin, and it disables more than 150 objects for performance. Since it has no plugin, it cannot edit quest records [5]. Other patches only touch meshes, lighting, navmesh and NPC appearance: the USSEP patch, Collision Fixes, Icy Windhelm, Lux/Lux Orbis, JK's Interiors, Northern Roads, eFPS and Embers XD [5].
- **Description vs plugin:** The cached Nexus description names the edda collector "Hoki", but the plugin's quest text names Higil [1][2]. Both NPCs exist in the plugin: a note is signed "Hoki and Higil" and a relationship record `0WHNordNobleBros` pairs them, so the page likely names the other brother [3]. The plugin also spells the poet both "Skulvar" and "Sulvar" [1][3].
- The Nexus page says Imperial victory in the Civil War changes Windhelm, for example by removing Talos shrines [2].

## Related
- [Eastmarch and Windhelm](../areas/eastmarch-and-windhelm.md)
- [Vanilla side quests and misc changes](../vanilla-changes/side-quests-and-misc.md)
- [Capital Whiterun Expansion quests](capital-whiterun-expansion-quests.md) (same author)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, journal stages, location names | LoreRim install: `WindhelmSSE.esp` QUST/LCTN records (profile Default), via imports/mods/capital-windhelm-expansion.md | mod v1.0.0.0 | 2026-10-02 |
| 2 | features, quest blurbs, install advice | [Nexus mod page 42990](https://www.nexusmods.com/skyrimspecialedition/mods/42990) via meta.ini cache (no nexusLastModified recorded) | n/a | 2026-10-02 |
| 3 | start notes, dialogue-topic prompts, house price | LoreRim install: `WindhelmSSE.esp` BOOK and DIAL records, parsed this run | mod v1.0.0.0 | 2026-10-02 |
| 4 | LoreRim bug-fix plugin contents | LoreRim install: *Capital Windhelm Expansion Eastern gate blackscreen and other fixes* (Nexus 93778) meta.ini description + `CWE Taluri fix.esp` override records | 2025-10-10 (nexusLastModified) | 2026-10-02 |
| 5 | which patches ship / no quest overrides by LoreRim plugins | LoreRim install: profile Default modlist.txt / plugins.txt, plus a scan of every enabled plugin mastering `WindhelmSSE.esp`; Lite mod meta.ini (Nexus 114087) | 2024-03-15 (Lite nexusLastModified) | 2026-10-02 |
| 6 | no LoreRim-specific gate listed | LoreRim site pre-fetch (main, new-quests, quest-expansions, new-lands, factions, creation-club) — no mention | n/a | 2026-10-02 |
