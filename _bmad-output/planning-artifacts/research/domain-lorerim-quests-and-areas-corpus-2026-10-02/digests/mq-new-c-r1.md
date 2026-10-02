# Research digest — unit mq-new-c (mod-added), run r1 (resumed)

Resume note: the earlier writer (cut off by a usage limit) had finished 9 of the 10 target files. I re-read all 9 against the template and spot-checked their key start gates against the import files: Welkynar level 25 and courier; Belethor level 20, Chasing Echoes and courier after 3+ days; quest names for Rune's Scope, Hostile Takeover and the three Fists of Fury quests. All were consistent, so I kept them unchanged. This run wrote `ascend-hidden-peaks.md` from scratch and (re)wrote this digest. Web calls this run: 1.

Abbreviations: **INST** = LoreRim install (plugin records / meta.ini / profile Default), accessed 2026-10-02. **NX-cache** = Nexus page via meta.ini `nexusDescription` cache (cache dates per file). **LR-site** = lorerim.com guides, pre-fetched 2026-10-02.

---

## knight-of-the-north.md (kept from prior run)
- Overrides the Divine Crusader CC quest "Relics of the Crusader" (`ccMTYSSE001_DES_RelicsoftheCrusader`). Relics are hidden across Skyrim instead of at Four Skull Lookout — INST `Knight of the North.esp` (mod v3.0.1.0); NX-cache 45869 (nexusLastModified 2024-08-24) — high
- Start: find any relic or the note beside it; the author recommends starting near the Tower Stone in Winterhold — LR-site Creation Club — high
- Help message: "Begin the quest by locating one of the lost Relics of the Divine Crusader." — INST — high
- Objectives include Serve Arkay / Steal (Sword) and Serve Dibella / Steal (Helm). Sword is in Solitude Hall of the Dead, Boots at Eldergleam, Cuirass at Northwatch Keep, Gauntlets at Stendarr's Beacon, Helm in the Markarth Inner Sanctum, Mace and Shield in the Winterhold ice fields — INST book riddles + edited cells — medium-high
- Honor ranks (Peerless…Infamous) replace the CC Infamy trigger. The Pilgrim's Path triggers at Infamous — NX-cache — high
- LoreRim ships the generated `LoreRim - Divine Crusader.esp` (Requiem masters, relic copies + forge/temper recipes) and the Ivy Stendarr's Beacon patch — INST — medium (stats not extracted)

## belethors-sister.md (kept)
- Start: Belethor, level 20, Soul Cairn unlocked (Chasing Echoes), Whiterun NPCs alive — NX-cache 92381 (2026-01-27) — high
- Quests "Belethor's Sister" (`belethorSisterQuest01`) and "Hostile Takeover" (`belethorSisterQuest02`, courier "Letter from Lelaegh" after 3+ days), plus 3 radiant store jobs — INST `Belethor's Sister.esp` v0.3.5.0 — high
- Console skips for unreachable radiant dungeons: setstage 300 and 500 — NX-cache — high
- LR-site lists it with no extra gate — LR-site New Quests — high
- WeelBones replacer is appearance only — INST v2.0.0.0 — high

## unmasking-sybille.md (kept)
- Unmarked: no journal or objective text. Controller `UnmaskingSybille` with stage notes — INST (Dialogue Tweak copy of `Unmasking Sybille.esp`) — high
- Start: ask Melaran or Odar, or find evidence ("Scribbled Note" on the Drained Prisoner in Solitude jail, "Sybille's Note" in her room) — NX-cache 109265 (2024-01-17) + INST — high
- Outcomes: keep the secret (Diamond), make her stop hunting, report her to Falk (arrest, gem from `LootVampireGems100`), or fight her — INST — high
- Dialogue Tweak (163004) hides evidence topics after resolution — NX-cache (2025-10-31) — high

## revealing-rune.md (kept)
- Quest "Rune's Scope" (`Rune01`, misc): "Search along the coast of Solitude for a clue to Rune's past" → "Return to Rune" — INST v1.1.0.0 — high
- Start: ask Rune about his name in the Thieves Guild — NX-cache 120935 (2024-06-06) + INST — high
- Drenched Note names uncle Gallus. Rewards come from `FavorRewardJewelry`, plus a `FavorRewardPotion` follow-up if you met Gallus's spirit — INST — high
- Rune possibly becomes marriageable (script references `PotentialMarriageFaction`) — INST + NX-cache — medium

## finding-velehk-sain.md (kept)
- No new quest; expands vanilla "Forgotten Names" (`dunMidden01QST`) — INST `Finding_VelehkSain.esp` v1.0.15.0; official-quests.json — high
- The rings move from the Arcanaeum chest to the apprentices' death sites on the northern coast (edited POINorthernCoast16/18/22, JourneymansNookExterior01) — INST + NX-cache 19815 (2020-03-27) — high
- LoreRim ships the standalone version (masters only Skyrim/Dawnguard; no Missing Apprentices fix or CRF) — INST — high
- Velehk becomes twice your level with Velehk's Scimitar and drops Velehk Sain's Heart. Atronach Forge makes the Staff of Velehk Sain and the Fused Ring — NX-cache + INST — high

## the-gift-of-saturalia.md (kept)
- Giver: Niklas (renamed Niklas Peryval by the CC patch) camping south of Dawnstar's main entrance — LR-site Creation Club + INST `TheGiftOfSaturalia_CC_Patch.esp` — high
- Quests: The Gift of Saturalia, Three Wise Men, The Joy of Dawnstar, Windhelm By The Sea, Lending a Paw, A Song in the Dark — INST vf1.03 — high
- Reward: one Spirit of Saturalia blessing (cold regions only). Constance's Amulet costs 2000 septims — INST + NX-cache 105697 (2024-01-01) — high
- LoreRim installs f1.03; meta.ini lists f1.04 as newest, but ignoredVersion=f1.03, so a deliberate skip of f1.04 is not recorded — INST meta.ini — high (corrected by verifier)

## more-to-do-in-the-soul-cairn.md (kept)
- Quests: Chapel of Love (Glendora Messenia), Grief (Angarion the Bold; cells Denial/Anger/Bargaining/Depression), Black Soul Cairn Gem (Gavo Antonius) — INST `MoreToDoSoulCairn.esp` v1.1.1.0 (ESPFE build) — high
- Prerequisite: Soul Cairn access (Dawnguard "Chasing Echoes") — official-quests.json + NX-cache 115962 (2025-12-20) — high
- Items: Angarion's Mace, Gavo's Shiv — INST — high (which step awards them is unverified)

## the-welkynar-knight.md (kept)
- Start: level 25, then a courier note "Mysterious Request" (may need several city trips); meet at the Bannered Mare — NX-cache 89510 (2025-09-22) + INST `ksws04_quest.esp` v0.4.1.0 — high
- Quests: The Welkynar Knight, A Welkynar Legend, a radiant artifact quest titled with the item name, Drinking with Nirenoore — INST — high
- Prison worldspace "Solitude Observaton Station" (in-game spelling). Passwords CUT and SCUTTLE — INST + NX-cache — high
- Completion unlocks Welkynar Hussar crafting (`ksws04.esp` armor v1.2.0.0) — NX-cache + INST — high

## fists-of-fury.md (kept)
- Gate: win 3 vanilla brawls (`FOFBrawlWinsRequired`=3). The courier comes 16 game hours later with "An Invitation to Fight" — INST script properties v1.3.1.0 — high; LR-site New Quests: "After a day, you will receive a letter" — high
- Quests: Fists of Fury - The Rift / Eastmarch / Hjaalmarch (Ratway Arena, Brawler's Camp, Summoning Stones) — INST — high
- LoreRim-authored "[LoreRim] Fisting Rewards" (`Fists Rewards.esp`, d2025.12.14) adds the Gloves of Stillness / of the Falling Blow / of Winter, which scale with brawls won from 4 to 7 — INST script source — medium on the exact numbers
- No Nexus description is cached in meta.ini (checked again this run). The file's sources 1–2 are a web search summary and a GGMods mirror — noted

## ascend-hidden-peaks.md (new this run)
- Author JaySerpa — Destructoid article (n/a date, accessed 2026-10-02) — high
- No journal quest: the only QUST `Haiku_HiddenPeaks` "Find The Hidden Peaks" has no journal or objective text — INST `Ascend - Hidden Peaks of Skyrim.esp` vf1.01 — high
- No start gate. Path starts are marked by a small cairn with a red cloth; "the wind shows the way" — NX-cache 120802 (nexusLastModified 2024-08-29; cache 2026-01-11) — high
- LR-site: "Climb your way up the 10 hidden mountain peaks of Skyrim…" — LR-site New Quests — high
- Meditating (furniture "Meditate", script `Haiku_Activation`) enables the peak's map marker, lights a candle, raises a counter global and adds the resistance spell once per peak — INST script source — high
- Peak → element: Frost = Mount Anthor Peak, Monahven Peak (High Hrothgar trigger), Forelhost Peak. Shock = Skyborn Range Peak, Brittleshin Peak. Fire = Frykte Peak, Hvitkald Peak, Mortrag Peak, Mount Moesring (vanilla DLC2 markers) — INST trigger VMAD + map marker REFRs; Dragonborn.esm EDIDs — high
- Spells: Kyne's Warm Embrace (frost 5/10/15 at 1/2/3), Kyne's Storm Veil (shock 5/10/15 at 1/2/3), Kyne's Rainfall Ward (fire 3/6/10/15 at 1–4). Text: "…increased by <mag>% while in cold regions." — INST SPEL/MGEF — high
- Shrine To Kyne (addon peak) isn't installed, so LoreRim has 9 collectible peaks and shock caps at 10% — INST mod list (no Shrine To Kyne plugin) — medium-high (derived)
- Disable rewards: `set Haiku_DisableRewards to 1` — NX-cache + INST GLOB — high
- Extras: Golden Feathers (17 placed, at all 9 peak areas); Bjoric's Journal and Frost Dagger of Self-Doubt under a snow mound in ForelhostExterior04 (fire reveals them); Ice-Breaker hammer on a frozen corpse in the Skyborn Range summit's exterior cell, far below it; Wayfarer Scarf on an ice-locked corpse next to the Frykte Peak summit (Ice-Breaker frees it) — INST REFR placements + scripts + NX-cache — medium-high (positions inferred from coordinates)
- LoreRim overrides: Alchemy Tweaks changes Golden Feathers (Resist Fall Damage 120 s, Resist Frost, Cure Disease, Invisibility 4 s). Synthesis - Gameplay Overwrite (last loaded) sets the dagger to 2.5 wt / 30 dmg and Ice-Breaker to 25 wt / 120 dmg. LoreRim - Recipes adds an Ice-Breaker temper recipe (silver ingot, sharpening wheel). Doors and Containers overrides the Frozen Corpse container — INST plugin records + plugins.txt order — medium (in-game numbers not verified)
- Stress and Fear isn't installed, so the Reduce Stress cast is inert. LoreRim ships Skyrim's Paraglider. EVG Animated Traversal is a master and active — INST — high

---

## Contradictions
- **Ascend peak count.** LR-site says "10 hidden mountain peaks". The mod page counts 10 only with the optional Shrine To Kyne addon. LoreRim's install has no Shrine To Kyne mod or patch, so only 9 peaks are collectible. Both sides are cited in the file; the site seems to repeat the mod page's headline.
- **Ascend dagger weight.** The mod page says the Dagger of Self-Doubt "weighs significantly more than a traditional dagger" (plugin: 25). LoreRim's Synthesis - Gameplay Overwrite sets it to 2.5, removing the joke. Not an error, but the mod page is misleading for LoreRim players.
- **Ascend Forelhost message.** The plugin reuses the "Mount Anthor Meditation" title for the Forelhost summit (a cosmetic data slip, not a source conflict).
- **Fists of Fury timing.** LR-site says "After a day", but the script waits 16 game hours. These are compatible approximations, not a real conflict.
- None others found among the kept files.

## Gaps (looked for, not found)
- Ascend: the exact path-start positions per peak (only summit coordinates come from records). Whether Requiem changes the meaning of the `AlchResistFrost` / fall-damage magnitudes. The cell names of the Skyrim summits (unnamed exterior cells). Whether a later plugin than Synthesis - Gameplay Overwrite touches the weapons (none of the plugins that master Ascend load later, apart from DynDOLOD/PG outputs).
- None of these mods appears on wiki.lorerim.com (not searched this run; budget kept for the new file). The LoreRim site covers Belethor's Sister, Unmasking Sybille, Revealing Rune, Fists of Fury and Ascend (New Quests), Knight of the North and Gift of Saturalia (Creation Club), and Finding Velehk Sain (Quest Expansions). More to do in the Soul Cairn and The Welkynar Knight are not on the LR-site quest pages.
- Fists of Fury: no meta.ini Nexus description is cached. Live Nexus returned 403 in the prior run.
- More to do in the Soul Cairn: which quest step awards Angarion's Mace and Gavo's Shiv.
- Knight of the North: Requiem stats in `LoreRim - Divine Crusader.esp` were not extracted.

## Leads
- Extract the relic stats from `LoreRim - Divine Crusader.esp` (Knight of the North) and the Ascend weapon stats as they appear in game under Requiem, to give confident numbers.
- An "Ascend - Hidden Peaks of Wyrmstooth" add-on exists on Nexus (a CHT translation, id 125159). LoreRim doesn't ship it. Worth a line in `mod-added/wyrmstooth.md` if anyone asks.
- `areas/solstheim.md` and `areas/new-landmarks-and-shrines.md` could cross-link the Ascend peaks (the Solstheim map markers are vanilla, so collecting them reveals vanilla markers).
- Fists of Fury: check whether LoreRim ships a vanilla brawl bug-fix mod (the author recommends one).
