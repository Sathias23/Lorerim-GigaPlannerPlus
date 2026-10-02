---
title: 'domain research: LoreRim quests and areas corpus'
type: 'domain'
topic: 'LoreRim quests and areas corpus'
decision: 'Build a markdown quest/area knowledge corpus (lorerim-agent/knowledge/quests) for the lorerim-agent to answer non-character LoreRim questions'
source: 'native run (install inventory + LoreRim site + UESP/Fandom/Nexus), 64-agent fan-out'
status: complete
preset: 'standard'
validation: 'normal'
created: '2026-10-02'
updated: '2026-10-02'
claims: {verified: 334, unverified: 12, disputed: 13, overturned: 16}
---

# domain research: LoreRim quests and areas corpus

**Decision this research serves:** whether LoreRim's quest and area content can be captured as a corpus the `lorerim-agent` can answer from, and what that corpus says.

## Executive summary

**The corpus exists and is usable now.** `lorerim-agent/knowledge/quests/` holds 109 cited markdown files, about 208k words in total:

- 72 files on quests added by mods
- 12 overlays on official questlines (base game, DLC, Creation Club)
- 25 files on new areas

Together they name 792 quests. `index.md` and `index.json` are generated from each file's frontmatter, and the format check passes on every file [1][7].

**Three findings matter most to the agent that will use it:**

1. **For what ships, the install beats every published source.** 374 load-bearing claims were each checked against a second, independent source. Of those, 333 were verified, 16 overturned and corrected, 13 disputed (both sides cited), and 12 left flagged `(unverified)` [7]. Where corrections were needed, the plugin records disagreed with the wiki, the Nexus page or the LoreRim site [2][3][4].
2. **The LoreRim site lags the current build on start conditions.** Examples:
   - The Forgotten City: the site says a level-25 delayed start. In the install, `LoreRim - World Fixes.esp` sets the courier to level 200, above the level cap of 101, so you have to walk to the ruins [2][4].
   - VIGILANT: the site requires the main quest, Dawnguard and House of Horrors. The installed delayed-start plugin checks level 25, House of Horrors and Kindred Judgment, with no main-quest condition [2][4].
   - The Hendraheim home gate and Taste of Death's extra enemies are described on the site but don't ship as described [2][4].

   An agent that cites the site alone will give wrong start conditions.
3. **Many LoreRim changes are invisible on the mod pages.** LoreRim's own plugins re-tune quests in ways no mod page mentions [2]:
   - `LoreRim - Global Modifiers.esp` sets the Forsworn Conspiracy delay to level 20, where the mod page says 40.
   - House of Horrors, Taste of Death and Mind of Madness wait until level 20 and start from an innkeeper rumor.
   - LoreRim's settings file brings the Ebony Warrior at level 40, where the default is 80.
   - The Leveled List Patch halves Missives and Dragon Hunting payouts.
   - A dedicated plugin makes Wyrmstooth require *Rise in the East*.

**The biggest caveat:** the corpus describes one snapshot. That is profile Default as installed on 2026-10-02, with Nexus descriptions cached in `meta.ini` around 2026-01, which is already past its 6-month freshness window [3][8]. Several start levels depend on MCM settings loaders that apply at runtime. The effective value then can't be proven without an in-game check. Wyrmstooth (10 vs 20) and Dawnguard (10 vs 30) are the main cases, and both are marked disputed [2][7].

## What ships: the inventory

The Default profile enables 3,886 mods and 3,490 plugins, including 69 Creation Club plugins loaded implicitly through `Skyrim.ccc` [1]. Scanning every plugin's quest records (QUST, with names resolved from BSA strings files for localized plugins) found:

- 87 mods that add player-facing quests: 854 quest records that carry journal or objective text
- 790 official quests that LoreRim mods override
- 71 mods that add named locations or worldspaces [1]

That makes quest content far wider than the modlist's "Quests" separators:

- Town expansions carry 8–13 quests each (Capital Windhelm Expansion, Capital Whiterun Expansion).
- So do follower mods (Inigo, Katana, Gore, Remiel, Lucien).
- So does a Requiem patch: the Trad AE CC Requiem Patch carries *Profane Divinity* [1].

Nine mods with minor quest or location records weren't covered: map-marker helpers, the paraglider, the Respawn death marker, and three location helpers. They're listed in the run's decision log.

## Quests added by mods

The 72 `mod-added/` files have high confidence overall, and the DLC-sized mods are documented down to their gates [2][7]:

- **Wyrmstooth:** needs *Rise in the East* complete, enforced in every MCM start option by Sensible Wyrmstooth Prerequisite. It also needs *The Way of the Voice* by default.
- **VIGILANT:** level 25, House of Horrors and Kindred Judgment.
- **Gray Cowl of Nocturnal:** completing the Thieves Guild through *Under New Management* (`Gray Fox Cowl - Under New Management Start.esp`), then any theft.
- **Undeath:** the level check is removed, the requirements are instead set by Sensible Undeath Prerequisite, and the altar needs 80 Enchanting and 80 Conjuration.
- **The Forgotten City:** walk in, since the courier is effectively disabled.

The writers flagged several cases where a feature on the mod page doesn't work or doesn't ship in LoreRim [2][4]:

- **Caught Red Handed.** Its expansion loses to `Requiem.esp`'s vanilla-shaped override of the same quest.
- **Favor Quests Separated.** It is inactive because the optional file is absent.
- **Mephala's Curse.** Its "destroy the Blade" route needs mods LoreRim doesn't ship.

## Official quests: what LoreRim changes

The 12 `vanilla-changes/` overlays each start from a UESP-cited baseline, with Fandom and mod-author docs as backup, and then list each change with the mod that makes it [5][6][2]. Common patterns:

- **Delayed and gated starts:** Dawnguard's recruiter waits for *Laid to Rest*. Three Daedric quests (House of Horrors, Taste of Death, Mind of Madness) wait until level 20 and start from a rumor. Boethiah's Calling, A Night to Remember and The Break of Dawn have conflicting level gates in the install.
- **Questline progression tweaks:** Companions job counts are 3/5/4.
- **Additional routes:** The Choice is Yours, and Destroy The Dark Brotherhood QE's kidnapping route.
- **Requiem's balance changes:** Alduin's magic resistance, Hearthfire build time, and gold-only quest rewards after Requiem 3.2.0.

Requiem's own version is ambiguous. `meta.ini` says 6.0.2 while the bundled changelog ends at 5.4.5, and the files flag this where it matters [2].

## New areas

The 25 `areas/` files cover:

- **New lands:** Wyrmstooth island, the Hjorkvild Isles, Vvardenfell/Baan Malur, the Shivering Isles (Saints & Seducers Extended Cut), Hammerfell and Coldharbour (Gray Cowl), the VIGILANT realms, and the Forgotten City.
- **Dungeons and landmarks:** including 22 Dragons Awaken mound locations.
- **Towns and holds:** a file per hold built from the Great Cities, Cities of the North and Capital Expansion mods, plus Solstheim [1][2].

Location names come from plugin LCTN/WRLD records. The writers found several spelling conflicts inside single plugins, such as Kymesby vs Kynesby and Skulvar vs Sulvar, and they report each one rather than picking silently [1].

## Cross-dimension insights

- **Start conditions are the most common question and the least reliable published fact.** Many of the overturned and disputed claims concern how or when a quest starts. Answering them correctly needs the plugin record, the settings loader, and the LoreRim site together, which only this combined corpus provides [2][4][7].
- **Mod-added quests and vanilla overlays depend on each other.** VIGILANT's gate depends on Dawnguard's Kindred Judgment, Wyrmstooth's on Rise in the East, and Gray Cowl's on the Thieves Guild. The `related` links carry those dependencies across folders, so an agent answering one of these questions has to follow them [7].

## Recommendations

1. **Expose the corpus through the `lorerim-agent` as retrieval over `index.json` plus the file body.** One option is a `lorerim_search_knowledge` tool. Another is a new kind for `lorerim_get_entity`. Present each answer's `start` field together with its confidence and any `(unverified)` or disputed markers. *Basis:* high confidence. The format check passes and the `start` and `summary` fields exist in every file [7].
   *Feeds:* architecture and spec for the agent's next scope.
2. **Teach the agent's skill the precedence rule:** the install beats the LoreRim site, which beats the mod page, and disputes are reported rather than resolved. *Basis:* 16 overturned and 13 disputed claims, most of them site-versus-install or page-versus-plugin [7].
3. **Refresh after each LoreRim update with the bundled scripts, and re-research only the files whose `mods` changed.** Refresh MO2's Nexus metadata first, since the `meta.ini` cache is stale [8].
4. **Phase 2 (full vanilla walkthroughs) is optional.** UESP covers unchanged vanilla content well, and the overlays already carry the LoreRim delta. Do it only if the agent's answers about vanilla content prove thin. *Basis:* medium confidence; this is a judgement about value, not something the research measured.

## Open questions

- **Effective runtime values set by MCM settings loaders:** the Wyrmstooth start level (10 or 20), the Dawnguard recruiter level (10 or 30), and Missives rewards (the MCM values or the halved globals). Settling them needs an in-game check, for example the MCM pages on a new save [7].
- **Whether Hendraheim TnE silently removes the Creation Club Home Requirements gate.** Settling it needs an in-game test or a patch check [7].
- **The 197 gaps the writers reported**, mostly reward amounts and prices behind blocked pages. They're listed in `digests/*-r1.md`. Parsing dialogue records (INFO) from the plugins would close many of them.

## Sources

| # | What it supports | Publisher | Published | Accessed | Confidence |
|---|---|---|---|---|---|
| 1 | Mod, plugin, quest and location inventory; quest names, objectives, journal text | LoreRim install `C:/mods/LoreRim`, profile Default (plugin records via `scripts/build-inventory.mjs`, strings via `scripts/extract_strings.py`) | snapshot 2026-10-02 | 2026-10-02 | high |
| 2 | Per-mod quest content, LoreRim patches, gates and overrides | [Corpus files and per-unit digests](../../../../lorerim-agent/knowledge/quests/index.md), each citing install records, mod readmes and settings files | 2026-10-02 | 2026-10-02 | high |
| 3 | Mod descriptions and versions | Nexus Mods pages via MO2 `meta.ini` cache | cache ~2026-01-11 | 2026-10-02 | medium |
| 4 | LoreRim-specific start gates and claims | [LoreRim official site — quest guides](https://www.lorerim.com/guides/quests) (Main, Factions, Creation Club, Quest Expansions, New Lands, New Quests) | n/a | 2026-10-02 | medium |
| 5 | Vanilla, DLC and Creation Club quest baselines | [UESP](https://en.uesp.net/wiki/Skyrim:Quests) (cited per page inside the corpus files) | n/a | 2026-10-02 | high |
| 6 | Secondary baselines and mod pages | [Elder Scrolls Fandom](https://elderscrolls.fandom.com/) and mod-author docs (cited per page inside the corpus files) | n/a | 2026-10-02 | medium |
| 7 | Verification outcomes and format check | Run ledger: `digests/*-verify.md`, `digests/fanout-results.json`, `.memlog.md` claims; `scripts/build-index.mjs` | 2026-10-02 | 2026-10-02 | high |
| 8 | Freshness windows | `recon_kit.py staleness` over the ledger classes | 2026-10-02 | 2026-10-02 | high |

## Staleness map

Output of `recon_kit.py staleness`. The windows are 6 months for start conditions, LoreRim changes, the Nexus cache and the LoreRim site, and 18 months for quest content [8].

| Claim class | As of | Re-check by | Stale now |
|---|---|---|---|
| Start conditions (172 claims) | 2026-10-02 | 2027-04-02 | no |
| LoreRim changes (63 claims) | 2026-10-02 | 2027-04-02 | no |
| Quest content (139 claims) | 2026-10-02 | 2028-04-02 | no |
| Nexus descriptions (`meta.ini` cache) | 2026-01-11 | 2026-07-11 | **yes** |
| LoreRim site quest guides | 2026-10-02 | 2027-04-02 | no |

The earliest re-check date, 2026-07-11 for the Nexus cache, has already passed. In practice, any LoreRim update makes the whole snapshot stale sooner than these windows suggest, so refresh whenever LoreRim updates.
