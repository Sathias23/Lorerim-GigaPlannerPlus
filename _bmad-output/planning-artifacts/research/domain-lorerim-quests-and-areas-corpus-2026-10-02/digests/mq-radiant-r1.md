# Digest — unit mq-radiant (round 1)

Accessed 2026-10-02 unless noted. "Install" = C:/mods/LoreRim (profile Default), plugin records parsed directly or via imports/mods/*.md.

## missives.md
- Missives.esp holds 264 radiant QUST records; each job type is duplicated once per hold — install (Missives.esp, v f2.03) + Nexus 17576 via meta.ini cache (nexusLastModified 2019-07-03) — high
- Boards stand in all 9 hold capitals; jobs lead only to dungeons/NPCs in the board's own hold; any job can be dropped by re-reading the missive; boards reset after 3 days — Nexus 17576 cache — high
- Quest families and names from the records:
  - Courier: Deliver a Letter/Weapon/Potion Near/Medium/Distant(Far).
  - Gather: Some Common/Uncommon/Rare Ingredients; Collect Some Food; Collect Some Weak/Standard Soul Gems; Find a Powerful Soul Gem; Gather Common/Uncommon/Rare/Very Rare Ore.
  - Kill: Kill Some Things (9 holds); Kill Some Bandits (8 holds); Kill Some Forsworn (Reach only); Kill a Giant (Whiterun, Eastmarch, Pale only); Kill a Dragon (9 holds).
  - Retrieve: From the Wilderness / Recover From a Hideout / From a Ruin.
  - Hunt: Track Thief / Fugitive / Vampire.
  - Source: install Missives.esp — high
- Potion courier jobs are in the plugin but absent from the cached 2019 description — install vs Nexus cache — high
- LoreRim Missives.ini overrides:
  - Easy/Normal/Hard/VeryHard chance 25/25/25/25 (default 50/35/20/5).
  - iAnimalBountyReward 250 (default 150); iDragonBountyReward 3000 (default 1000).
  - Everything else (refresh 3 days, other rewards) is default.
  - Source: install `LoreRim - MCM and INI Settings/MCM/Settings/Missives.ini` vs `Missives - Settings Loader/MCM/Config/Missives/settings.ini` — high
- Default rewards: letter 25/50/75; weapon 50/100/150; potion 100/200/300; bandit 500; giant 1000; wilderness 250; hideout 500; ruins 1000; thief 250; fugitive 500 — install settings.ini — high
- Extra boards (Missives – Worldspace Additions 26788 page; patch QUST records):
  - Raven Rock, outside Morvayn Manor; Kill Rieklings replaces giants.
  - Stonehollow, outside the inn; needs the Wyrmstooth MQ done and the town rebuilt; Kill Some Marauders.
  - Ben Erai (Gray Cowl).
  - Source: Nexus 26788 cache (2025-08-23) + install — high
- Patch page also lists Bruma, Amber Creek, Evermore, Florin and Northpoint boards; LoreRim installs only the Solstheim, Wyrmstooth and Gray Cowl plugins — install modlist — high
- Voice & Quest Expansion adds 20 job types; "… Board" records are helpers (type none, "QuickStart"); Kill Pests 75 gold; Kill The Draugr 350 gold; the other rewards reuse base MCM values — install MissivesExpansion.esp + Nexus 166094 cache (2026-01-25) — high
- LoreRim Known Issues: "Missives sometimes bugs out with gathering quests. I recommend not picking them up." — lorerim.com/support/known-issues (no date) — high
- Missives Quests Raise Disposition makes Missives clients count toward thaneship favors — Nexus 61934 cache (2022-01-14) — medium (effect in LoreRim depends on thane rules)
- CFTO patch excludes carriage drivers, ferrymen and Klimmek from Missives — Nexus 44498 cache — high
- We Don't Need Two Boards moves the Gray Cowl Notice Board notes onto the Ben Erai Missive Board (new save only) — Nexus 107288 cache (2025-02-24) — high
- Unique Missive Board edits plus Diverse Witcher boards give variant boards in Falkreath, Dawnstar, Morthal and Riften — Nexus 112095 / 111770 caches — high

## favor-quests-separated.md
- 32 split favor quests (vanilla allows 7 at once):
  - Delivery: Windhelm, Anga's Mill, Markarth, Morthal, Darkwater Crossing, Falkreath.
  - A Few Words with You: Whiterun, Windhelm, Winterhold, Kynesgrove, Solitude, Markarth.
  - Some Light Theft: Falkreath, Winterhold, Windhelm.
  - Kill the Bandit Leader: Solitude, Darkwater Crossing, Windhelm, Skaal Village.
  - Rare Gifts: Solitude, Morthal, Dawnstar, Falkreath, Windhelm, Whiterun.
  - Dungeon Delving (Bandits): Whiterun, Windhelm.
  - Dungeon Delving (Caves): Dawnstar, Solitude, Windhelm, Kynesgrove, Falkreath.
  - Source: install FQS esp QUST + Nexus 73903 cache (2025-01-18) — high
- Per-town givers and items from UESP favor pages; they map 1:1 to the FQS copies — UESP — high
- The FQS plugin contains 36 BQ copies (BQ01–04 × 9 holds), but its only SMQN nodes are favor change-location nodes. The optional Bounty Quests file is not installed (single plugin, fileid 584837). Vanilla BQ01–04 are overridden only by Requiem.esp. So separated bounties are dormant in LoreRim — install SMQN parse + overrides json + Nexus note — medium-high (inference)
- LoreRim installs The Choice is Yours + the FQS TCIY patch, and the NGCDT FQS patch — install modlist — high
- No LoreRim-specific gate on favors — LoreRim site imports (silence) — medium

## companions-radiant-expansion.md
- No new quests; overrides CR03, CR05–CR14 and adds per-job-type "I'm looking for work. …" prompts plus target-naming accept lines — install esp parse (QUST/DIAL/INFO only) — high
- Nexus summary: take multiple Companions radiants at once; shows target location; script-free; requires USSEP; by biggieboss — Nexus 169920 via web search snippet (direct fetch 403) — medium
- A job type already running for another Circle member blocks a repeat ("Aren't you already running a job for Aela?…") — install INFO — high
- LoreRim installed the Requiem file v1.1 — meta.ini installationFile — high
- LoreRim progression requirements: Proving Honor 3, The Silver Hand 5, Blood's Honor 4 (vanilla 1/1/2) — install CompanionsProgressionReqs.json + Nexus 78308 cache — high
- LoreRim site: more radiant jobs required via Improved Companions + Customizable Progression — lorerim.com factions — high
- Vanilla radiant pools: initial (after Take Up Arms), Silver Hand (CR09–11), post-Glory of the Dead (CR12–14) — UESP Skyrim:Companions — high
- CR03 Animal Pelt Collection is unfinished/unused in vanilla; CRE adds a prompt for it; obtainability in LoreRim unverified — search summary (UESP/CRF) + install — low

## dragon-hunting.md
- Dragon Hunting repeats every 24 in-game hours; via an SMQN SkyHavenTempleNode override plus a controller quest (FreeformSkyHavenTempleB record itself not overridden) — Nexus 99193 cache (2025-06-05) + esp parse — high
- Dragon Research now needs Dragon Blood + Bile + Rheum; Dragon Infusion = 10% less damage from dragons (vanilla: bone + scale; 25% less melee damage) — esp + Nexus + UESP — high
- Blessing of the Blades (after Rebuilding the Blades; ask Esbern "Any advice for fighting dragons?") = weapon enchantments 25% stronger vs dragons for 8 h; vanilla Dragonslayer's Blessing = +10% crit for 5 days — esp/Nexus/UESP — high
- Six ingredients (Blood, Bile, Rheum, Claw, Heartscales, Horn); "body part" ones need Kahvozein's Fang in inventory — Nexus — high
- Farengar sell prices: mod 150/200/250 → LoreRim 75/100/125 (LoreRim - Leveled List Patch.esp, no later override) — install parse + loadorder — high
- LoreRim - Alchemy Tweaks.esp rebalances all six ingredients' magnitudes and durations (generally higher) — install parse (effect names unresolved: localized strings) — medium
- Only the PaarthurnaxQE FOMOD patch is installed; Quantity Trade adds a sell slider — meta.ini FOMOD notes + Nexus 167959 cache — high
- LoreRim site main quests page highlights Dragon Hunting — lorerim.com main — high
- MGRitual05 (Alteration Ritual Spell) is overridden; exact change unverified — install — medium

## radiant-and-world-events.md
- Hunter Marks Animal Den (HMADQ01, same-hold den) and Hunter Marks Animal Den 02 (HMADQ02, Skyrim-wide); 10-gold fee (GLOB HMADg = 10); max 2 active; cleared when the boss dies; no reward — install esp + Nexus 128450 cache (2024-09-14) — high
- Dragons Awaken:
  - Named dragons at 26 mounds, which open with main-quest progress.
  - Map markers; radiant-eligible; no respawn; v2 vanilla difficulties, Mirmulnir Easy.
  - 22 LCTN records, 5 tagged UNUSED.
  - Overrides dunLabyrinthian.
  - Source: install esp/readme + Nexus 44550 cache (2023-04-13) — high
- Solstheim Earthquakes: mannyEQ controller ("Show settings"/"Test Quake"); 5% chance every 120 s; NPCs stagger, player cowers; dragons immune; the "With idles - With moving objects" variant is installed — install + Nexus 22884 cache (2021-10-31) — high
- LoreRim patches master these plugins: World Fixes, Synthesis NPC / Water & Vertex, Occlusion (Dragons Awaken); Spells and Magic Effects (Earthquakes) — install master scan — high (existence) / unknown (content)

## Contradictions
- Missives cached Nexus description (2019) lists only Letter/Weapon couriers; the installed plugin also has Potion couriers. The description is stale versus the plugin; the plugin wins.
- Missives – Worldspace Additions page lists 8 extra boards; LoreRim ships only 3 of them (Solstheim, Wyrmstooth, Gray Cowl). Not a true contradiction, but an agent reading the Nexus page would over-claim.
- Dragon Hunting Nexus page says "Farengar pays more for dragon parts than they're worth"; LoreRim halves its price globals (75/100/125 vs 150/200/250).
- FQS Nexus page advertises separated bounty quests with level gates; in LoreRim they are inactive (optional file absent, BQ01–04 only Requiem-overridden).
- Companions Radiant Expansion Nexus summary says "take multiple radiant quests at once"; plugin dialogue still blocks the same job type from a second Circle member. Both are true at different granularity.

## Gaps (looked for, not found)
- Full Companions Radiant Expansion description, and Requiem-file differences (Nexus 403; schaken-mods 403).
- wiki.lorerim.com unreachable (DNS); no LoreRim-specific notes on Hunter's Mark, Dragons Awaken, earthquakes, FQS or CRE beyond the factions/main/known-issues pages.
- Whether CR03 Animal Pelt Collection is actually obtainable with CRE.
- Exact per-effect names for LoreRim's dragon ingredient rebalance (Skyrim.esm MGEF names are localized string IDs; not resolved).
- Which main-quest stages open which Dragons Awaken mounds.
- Content of LoreRim - Dialogue Patch / Spells and Magic Effects / Synthesis edits to these plugins.
- Whether LoreRim folded the FQS USSEP patch into its own patches.

## Leads
- Resolve Skyrim.esm localized strings (Strings/*.STRINGS) to name the effects in LoreRim - Alchemy Tweaks for the dragon ingredients.
- Parse Skyrim.esm SMQN for the Companions radiant node to check whether CR03 is wired in.
- Check whether "Harder Thaneships" logic exists in LoreRim (thane file owner), to confirm Missives Raise Disposition matters.
- Dragons Awaken full dragon/mound table belongs in areas/dragons-awaken-lairs.md (other agent).
- Missives "Kill a Dragon" and Dragons Awaken mounds interact (mounds are radiant-eligible locations).
