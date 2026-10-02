# LoreRim quest & area corpus

Markdown knowledge for the `lorerim-agent`: quests and areas as they ship in LoreRim. Start at [`index.md`](index.md) (human-readable) or `index.json` (one entry per file: path, title, kind, category, summary, quest and location names, start conditions, mods).

| Folder | Contents |
|---|---|
| `mod-added/` | Quests added by mods in the list: DLC-sized quest mods, new quests, follower quests, town quests, radiant systems, Requiem/LoreRim-specific quests |
| `vanilla-changes/` | One overlay per official questline (base game, DLC, Creation Club): a short baseline, then what LoreRim changes and which mod changes it |
| `areas/` | New lands, dungeons and landmarks, and town/hold expansions |

## File format

Every file has YAML frontmatter (`id`, `title`, `kind`, `category`, `summary`, `mods`, `plugins`, `quests`, `locations`, `region`, `start`, `related`, `sources`, `confidence`, `updated`) followed by fixed sections: *Starting in LoreRim*, *Quests*, *Locations*, *Rewards & notable items*, *LoreRim notes*, *Related*, *Sources*. Every factual sentence cites a numbered row in that file's Sources table; claims nobody could check independently are marked `(unverified)`.

## Provenance

Built 2026-10-02 against the LoreRim install at `C:/mods/LoreRim`, profile `Default`. Sources in trust order:

1. **The install.** Exact quest and location names, objectives, and journal text come from the plugin records (`QUST`, `LCTN`, `WRLD`) of every enabled plugin, including the 69 Creation Club plugins loaded through `Skyrim.ccc`. Names for localized plugins come from the `_english` strings files inside the BSAs. Mod versions and Nexus descriptions come from each mod's `meta.ini`; that cache was last refreshed around 2026-01.
2. **The LoreRim site** ([lorerim.com quest guides](https://www.lorerim.com/guides/quests)) for LoreRim-specific start gates. Where the site and the install disagree, the install decides what ships, and the file reports both.
3. **UESP and the Elder Scrolls Fandom wiki** for official quest baselines.
4. **Live Nexus pages and mod-author documentation.**

The research run that produced the corpus is in `_bmad-output/planning-artifacts/research/domain-lorerim-quests-and-areas-corpus-2026-10-02/`. It holds the inventory and strings scripts, the import extracts, per-unit digests and verification logs, `research.md`, and the decision log (`.memlog.md`).

## Refreshing after a LoreRim update

From the run folder:

```sh
uv run --with lz4 scripts/extract_strings.py C:/mods/LoreRim     # strings from BSAs
node scripts/build-inventory.mjs --install C:/mods/LoreRim        # imports/inventory.json, imports/mods/*.md
node scripts/plan-units.mjs                                       # work-units.json
node scripts/build-index.mjs                                      # index.md / index.json + format check
```

Compare the new `imports/inventory.json` with the old one to find added, removed, or updated mods. Then re-research only the corpus files those mods feed; each file's `mods` frontmatter lists them.

## Not covered yet

- Full walkthroughs of unchanged vanilla quests (planned as Phase 2). Today the `vanilla-changes/` files carry only short baselines.
- Mods that add no player-facing quest or location: map-marker helpers, MCM quests, the paraglider, and similar.
