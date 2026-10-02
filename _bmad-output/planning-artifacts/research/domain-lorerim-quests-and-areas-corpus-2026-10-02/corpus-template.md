# Corpus file format — lorerim-agent/knowledge/quests

Every corpus file is one markdown document with YAML frontmatter, written for an AI agent that answers player questions about LoreRim. Optimize for retrieval: precise names, explicit start conditions, no filler. Spoilers are fine — this is a reference.

## Frontmatter (required)

```yaml
---
id: wyrmstooth                      # = file name without .md; kebab-case
title: Wyrmstooth                    # player-facing name
kind: mod-added | vanilla-changes | area
category: new-lands | new-quests | quest-expansion | follower-quests | town-quests | radiant | requiem | lorerim-specific | questline | creation-club | dungeons | towns | region
summary: One or two sentences an agent can quote.
mods:                                # every mod (incl. patches) this file draws on, as shipped in LoreRim
  - name: Wyrmstooth                 # exact MO2 mod folder name
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/1234
    version: 1.19.1                  # from meta.ini
plugins: [Wyrmstooth.esp]
quests: [Reclaiming the Past, Barrow of the Wyrm]      # exact in-game quest names (from plugin records)
locations: [Wyrmstooth, Stonehollow]                    # exact in-game location names
region: Sea of Ghosts (north of Solitude)               # hold/region/worldspace, if applicable
start: Short answer to "how do I start this in LoreRim?"  # include LoreRim-specific gates
level_hint: "25+"                    # only if a source states one
related: [mod-added/missives.md, areas/wyrmstooth-island.md]  # paths relative to lorerim-agent/knowledge/quests/
sources: [1, 2, 3]
confidence: high | medium | low      # overall; per-claim confidence goes inline
updated: 2026-10-02
---
```

## Body (sections in this order; omit a section only when nothing is known — never pad)

```markdown
# <title>

<2–4 sentence overview: what it is, scale, where it happens.> [n]

## Starting in LoreRim
How to start, prerequisites, quest giver, location — and every LoreRim-specific gate (delayed starts, extra prerequisites, Requiem interactions). Say explicitly when LoreRim differs from the mod's default. [n]

## Quests
### <Exact quest name>
- **Giver / trigger:** …
- **Where:** …
- **Steps:** short numbered outline of the objectives (from plugin objective/journal text where available).
- **Choices & outcomes:** …
- **Rewards:** …

(vanilla-changes files instead use one `### <Quest name> (<EditorID>)` section per changed quest: **Vanilla:** one-line baseline; **In LoreRim:** what changes and which mod does it.)

## Locations
- **<Location>** — what it is, where, how to reach it. [n]

## Rewards & notable items
## LoreRim notes
Patches, compatibility fixes, Requiem balance, known issues, anything that differs from the mod page. [n]
## Related
Links to other corpus files (relative paths).

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | start conditions | [LoreRim site — New Lands](https://www.lorerim.com/guides/quests/new-lands) | n/a | 2026-10-02 |
| 2 | quest names, objectives | LoreRim install: `Wyrmstooth.esp` QUST records (profile Default) | mod v1.19.1 | 2026-10-02 |
| 3 | features | [Nexus mod page](https://www.nexusmods.com/…) via meta.ini cache | 2024-08-24 (nexusLastModified) | 2026-01-11 cache |
```

## Rules

- **Every factual sentence carries `[n]`** resolving to the Sources table. No source → don't write it, or mark it `(unverified)`.
- **The install is ground truth for what ships**: quest/location names and objectives come from plugin records (the `imports/mods/*.md` files). The LoreRim site is ground truth for LoreRim-specific start gates unless the install contradicts it — report contradictions with both sides cited.
- Never conclude from training data alone; prior knowledge only proposes what to look up.
- Quest names: use the exact strings from the plugin records; drop helper/background records (MCM, trackers, `<alias=…>` radiant templates unless they are the radiant system itself).
- Placeholders like `<Alias=Target>` mean radiant quests — describe the radiant system once.
- Keep each file self-contained (an agent may retrieve only this file), but under ~2,500 words; split guidance belongs in `related`.
