# Verification — unit mq-new-c (normal level), 2026-10-02

Independent checks (each against a source different from the one cited):

- belethors-sister — level 20 start gate (cited NX-cache) — VERIFIED: `Belethor's Sister.esp` SMBN `belethorSisterBranchNode` CTDA GetLevel >= 20.
- belethors-sister — "must already have Soul Cairn unlocked (Chasing Echoes)" as a start gate (cited NX-cache) — DISPUTED (nuance): no condition in the plugin references Chasing Echoes; the start node checks only level. Soul Cairn access is needed to progress. Both noted inline.
- belethors-sister — radiant unlocks at business level 9 / 19 (cited NX-cache) — DISPUTED: plugin QUST conditions are GetGlobalValue `belethorSisterBusinessLevel` >= 10 (Fetch) and >= 20 (Bandit); the GLOB starts at 0. Both cited inline.
- the-welkynar-knight — level 25 start gate (cited NX-cache) — VERIFIED: `ksws04_quest.esp` SMQN `ksws04MainQuestNode` GetLevel >= 25.
- fists-of-fury — 3 brawl wins required (cited script props) — VERIFIED: GLOB `FOFBrawlWinsRequired` FLTV 3.0 in `Fists of Fury - Skyrim.esp`; no override in the AE Integration or Brawl Lines patches; LR-site says "a number of vanilla brawls".
- fists-of-fury — LoreRim gloves names and base values (cited script source) — VERIFIED: `Fists Rewards.esp` ARMO "Gloves of Winter/Stillness/the Falling Blow"; GLOBs WinterMag 10 (+5), StillnessChance 15 (+2), FallingChance 10 (+2); `Fists_WonBrawlScript.psc` updates when 3 < stat < 8 and stops at >= 7.
- the-gift-of-saturalia — start: trader camping outside Dawnstar (cited LR-site) — VERIFIED: meta.ini Nexus FAQ "Talk to the guy camping outside of Dawnstar."
- the-gift-of-saturalia — "LoreRim pins f1.03, f1.04 deliberately ignored" (cited INST) — OVERTURNED (partly): meta.ini version=f1.03, newestversion=f1.04, but ignoredversion=f1.03. Text corrected; the claim of a deliberate skip was removed.
- knight-of-the-north — start near the Tower Stone in Winterhold (cited LR-site) — VERIFIED: web search summary of the Nexus article "Quest Guide" (nexusmods.com/skyrimspecialedition/articles/3005): start "west of Winterhold, just north of the Tower Stone". Added as source [7].
- knight-of-the-north — overrides CC quest "Relics of the Crusader" — VERIFIED: imports/vanilla-quest-overrides.json (`ccMTYSSE001_DES_RelicsoftheCrusader` overridden by Knight of the North.esp).
- revealing-rune — start by asking Rune about his name (cited NX + INST) — VERIFIED: LR-site New Quests "Help Rune search for information on his past" plus the plugin objective "Search along the coast of Solitude…".
- unmasking-sybille — Dialogue Tweak copy wins (cited NX 163004) — VERIFIED: profile Default modlist.txt lists the Dialogue Tweak above Unmasking Sybille (higher priority); the tweak plugin contains the topics "Is there a reason you don't trust Sybille?", "Can you provide evidence of Sybille's secret?" and the notes "Scribbled Note" / "Sybille's Note".
- finding-velehk-sain — standalone build (cited INST + NX) — VERIFIED: the plugin header masters are only Skyrim.esm and Dawnguard.esm; no Missing Apprentices fix or Cutting Room Floor folder in mods/.
- ascend-hidden-peaks — 9 collectible peaks (no Shrine To Kyne) vs LR-site "10" — VERIFIED (contradiction stands): no Shrine To Kyne mod folder or plugin in Default plugins.txt; Stress and Fear is also absent; Skyrim's Paraglider and EVG Animated Traversal are present. No GetLevel condition in the plugin (no level gate).
- more-to-do-in-the-soul-cairn — quest names / ESPFE build — VERIFIED: meta.ini installationFile "More to do in the Soul Cairn - ESPFE Version-115962-1-1-1"; quest names match the import QUST records.

Mechanical pass: all 10 files have valid YAML, the template's fields, and id = file name; every [n] resolves, with no orphan rows. Fixed: fists-of-fury frontmatter `sources` was missing 6 (now [1..7]). Added source rows: fists-of-fury [7] (brawl-fix mods shipped, replacing an "not checked" line), knight-of-the-north [7]. The quest names in the files match the plugin records in the imports.
Web calls: 2 (one failed fetch, one search).
