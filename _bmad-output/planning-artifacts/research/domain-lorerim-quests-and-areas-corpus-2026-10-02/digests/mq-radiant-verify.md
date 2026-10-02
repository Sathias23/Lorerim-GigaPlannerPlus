# Verify — unit mq-radiant (normal level, 2026-10-02)

Fresh-context verifier. Web calls used: 7.

## Claims checked
- missives.md — LoreRim Missives.ini: difficulty 25/25/25/25, animal 250, dragon 3000; defaults 50/35/20/5, 150/1000, refresh 3 — VERIFIED (re-read both ini files in install).
- missives.md — "LoreRim rewards = MCM values" — DISPUTED: `LoreRim - Leveled List Patch.esp` GLOB overrides set Missives reward globals to ~half the defaults (animal 75, bandit 250, giant 500, dragon 1000, letter 20/40/60, etc.; parsed from plugin); Settings Loader `_M_MCM.pex` writes MCM values to the globals but `bLoadSettingsonReload=0` by default. Both sides now cited in LoreRim notes [14]; inline reward lines flagged.
- missives.md — Known issue "Missives sometimes bugs out with gathering quests…" — VERIFIED (live fetch lorerim.com/support/known-issues, verbatim).
- missives.md — Raven Rock board outside Morvayn Manor; Kill Rieklings in place of giant; Stonehollow gate (Wyrmstooth MQ done + town rebuilt); Kill Some Marauders — VERIFIED (meta.ini cache of Solstheim patch + QUST name lists in imports/mods/missives-solstheim-patch-se.md, missives-wyrmstooth-patch.md). Note: Stonehollow gate has only the Nexus text as source (unverified in plugin conditions).
- missives.md — quest names and per-hold counts (Bandits 8, Forsworn 1, Giant 3, Potion Far 10 / Med 1 quirk; 20 expansion jobs + "… Board" helpers) — VERIFIED (imports/mods/missives.md, missives-voice-and-quest-expansion.md).
- favor-quests-separated.md — separated bounties dormant: only main file installed (installationFile FQS main 2-11-1), no Bounty Quests folder in mods, author says optional file needed, BQ01–04 overridden only by Requiem.esp — VERIFIED (install mods dir + meta.ini + vanilla-quest-overrides.json).
- companions-radiant-expansion.md — LoreRim reqs 3/5/4 — VERIFIED (CompanionsProgressionReqs.json in install) + LoreRim site factions page confirms more radiant jobs required. Vanilla 1/?/2 — VERIFIED via UESP Proving Honor ("After completing one radiant quest") and Blood's Honor ("two radiant quests"); UESP The Silver Hand gives no number.
- companions-radiant-expansion.md — Requiem file installed; overrides CR03, CR05–CR14; Requiem also on CR05/06/08; NGCDT on CR14 — VERIFIED (meta.ini installationFile; vanilla-quest-overrides.json).
- companions-radiant-expansion.md — CR03 Animal Pelt Collection unfinished in vanilla — VERIFIED (UESP Unfinished Quests via search). Cutting Room Floor not installed in LoreRim (mods dir), so obtainability stays unverified.
- dragon-hunting.md — Farengar prices 150/200/250 → 75/100/125 — VERIFIED (parsed GLOB DH_DragonPartsCost* in DragonHunting.esp and LoreRim - Leveled List Patch.esp).
- dragon-hunting.md — Dragon Research cost — OVERTURNED (refined): objective text in both DragonHunting.esp and DragonHuntingPaarthurnaxQE.esp is "Bring 3 Dragon Blood, 3 Dragon Bile and 3 Dragon Rheum to Esbern"; quantities added.
- dragon-hunting.md — vanilla prereq (Alduin's Wall + Rebuilding the Blades, blocked while Paarthurnax active) — VERIFIED (UESP Skyrim:Dragon_Hunting). "Any advice for fighting dragons?" + SkyHavenTempleNode — VERIFIED (esp strings).
- dragon-hunting.md — LoreRim site Blades/Dragon Hunting quote — VERIFIED (imports/lorerim-site/main.md).
- radiant-and-world-events.md — Hunter's Mark fee 10 (GLOB HMADg=10); earthquake eq_Timing 120 / eq_Percentage 5; no LoreRim MCM override — VERIFIED (parsed plugins; LoreRim - MCM and INI Settings has no earthquake file).
- radiant-and-world-events.md — Dragons Awaken 26 mounds, no respawn, Mirmulnir Easy, Timing Is Everything — VERIFIED (install readme Dragons Awaken.txt); dunLabyrinthian override VERIFIED (overrides json).
- companions-radiant-expansion.md — "take multiple Companions radiant quests at once", script-free, USSEP — VERIFIED only against the same publisher (web search summary of Nexus 169920); compat list VERIFIED vs meta.ini cache.

## Mechanical
- All five files: YAML parses, id = filename, all template fields present, every [n] resolves, no orphan rows.
- Fixed: companions-radiant-expansion.md frontmatter `sources` listed 1–7 but table has 1–10.
- Fixed: favor-quests-separated.md uncited thaneship sentence marked (unverified).
- missives.md exceeds the ~2,500-word guideline (≈2,840 after the dispute note; was ≈2,650). Not trimmed (out of verifier scope).
