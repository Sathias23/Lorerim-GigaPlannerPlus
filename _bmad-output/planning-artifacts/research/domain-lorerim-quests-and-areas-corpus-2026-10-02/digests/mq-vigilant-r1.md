# Digest — mq-vigilant (r1)

Unit: mq-vigilant (mod-added). File written: `lorerim-agent/knowledge/quests/mod-added/vigilant.md`.

## vigilant.md — load-bearing claims

### Start gate and prerequisites
- **Shipped start gate** — LoreRim install: `Vigilant - Delayed Start.esp`, parsed this run (mod v2.3.0.0, accessed 2026-10-02) — **high**.
  - The SMQN `VigilantDelayedStart` has three CTDA conditions:
    1. GetLevel >= GLOB `zzzVigilantMinLevel` (FormID 03000800, FLTV 0x41C80000 = 25.0).
    2. GetQuestCompleted Skyrim.esm 022F08 (DA10, The House of Horrors) == 1.
    3. GetQuestCompleted Dawnguard.esm 007C25 (DLC1VQ08, Kindred Judgment) == 1.
  - This matches Nexus "Option 2". There is no main-quest condition.
- **Quest FormID mapping** (DA10 = The House of Horrors, 022f08; DLC1VQ08 = Kindred Judgment, 007c25) — `imports/official-quests.json` (accessed 2026-10-02) — **high**.
- **Delayed Start behavior** (Altano/Orlando absent from the Windpeak Inn until conditions are met; new game required; author recommends ~level 40, calling 25 the "absolute earliest") — Nexus 57961 via meta.ini cache (refreshed 2026-01-11, accessed 2026-10-02) — **high**.
- **LoreRim site** ("added to LoreRim in V4"; start requires "the main quest, Dawnguard and Molag's daedric quest (House of Horrors)"; Altano recruits at the Dawnstar inn) — LoreRim site, New Lands (no pub date, accessed 2026-10-02) — **high** that the site says this.
- **House of Horrors delayed to level 35** in LoreRim:
  - `House of Horrors - Delayed Start.esp` GLOB `ANDR_HouseOfHorrorsLevelReq` = 35.0 — LoreRim install (accessed 2026-10-02) — **high**.
  - Trigger is to ask Kleppr or Frabbi "Anything noteworthy happening?" — Nexus 72751 via meta.ini cache — **high**.
- **Dawnguard gated behind "Laid to Rest"** (Sensible Quest Prerequisites) — LoreRim site, main.md (accessed 2026-10-02) — **high** that the site says this.
- **Effective earliest start ≥ level 35** — derived from the two gates above — **medium**.

### Quest content
- **49 player-facing quests and about 185 new locations; 11 worldspaces** (Stuhn Ravine, Lamae's Dream, Bruiant Estate, Blood Curse of Jealousy, White Wasteland, Coldharbour, Elder Field, Arena, Witch's Pond, Old Forest, Whale Graveyard) — LoreRim install: `Vigilant.esm` records via `imports/mods/vigilant-english-translation-plus-voiced-addon.md` (v1.8.0.0) — **high**.
- **Exact quest names and objectives** as listed in the file (Vigilant of Stendarr … The Landing; Empty Cells, Remnants, The Blood Matron; Child of Oblivion, Successor; Sacred Anatomancer; Legacy of Belharza; 8 Bounty quests; 5 Radiance quests; Coldharbour memory quests) — same source — **high**.
- **Act I order** (Vigilant of Stendarr, Bloodsucker, He Who Cannot Be Touched, Lazy Afternoon, The Eye of Madness, Dine and Dash, Thus Spoke Khajiit, Old Guilts [= Old Regrets in plugin], No Mercy, The Endless Fall, The Landing) — Elder Scrolls Mods Wiki (tes-mods.fandom), search snippet only, page 402 (accessed 2026-10-02) — **medium**. It matches the EditorID numbering zzzAoMMq00–10.
- **Stuhn Ravine is "just south of Nightcaller Temple"** — same fandom snippet — **medium**.
- **Episodes** (1 The Summoner, started by Altano at the Windpeak Inn; 2 Bloody Matron auto-starts after Act 1; 3 Child of Oblivion auto-starts after Act 2; 4 Oblivion begins immediately after Ep 3 and is non-journal; Anatomancer epilogue via the Librarian's rumor) — Nexus 11849 via meta.ini cache (refreshed 2026-01-11) — **high**.
- **Radiants** (8 bounties at the board in front of the Temple; 5 temple-dungeon radiants; Vigil dispatch via a map flag) — Nexus 11849 cache — **high**.
  - Dispatch helper quests exist for Windhelm, Dawnstar, Markarth, Falkreath, Winterhold and Morthal — Vigilant.esm records — **high**.
- **Act 3 martyr-or-corruption choice and The Landing curse journal line** — Vigilant.esm objectives and journal — **high**.
- **Ending specifics** (karma, 11 Khajiit parts, Lute) — web search summaries of Steam/TV Tropes (pages not retrievable) — **low**. Not written into the file.

### LoreRim changes
- **Immersion Tweaks AIO ships:**
  - Orlando ACHR `AomOrlandRef` set initially disabled, with an opposite-of-player enable parent.
  - Spinner's Needle quests (`zzzAoMqOwl`, `zzzCOqOwl`) blanked.
  - Debug Owl Statue and Venerable One corpse emptied.
  - `zzzAoMgRate` = 30.0.
  - Anvil renamed "Anvil" with the forge keyword.
  - Source: LoreRim install plugin records + Nexus 131649 cache — **high**.
- **LoreRim patch overrides the anvil and the debug containers:**
  - `Lorerim - Vigilant Patch.esp` (load order 1652) loads after Immersion Tweaks (290) and restores FURN `zzzCHCraftingZenitharAnvil` as "Anvil of Zenithar" with keyword 070B1CCD.
  - 576 of its 1,230 COBJ records use that keyword.
  - It keeps the debug containers empty.
  - It has no QUST records and is a Requiem-mastered balance patch.
  - Source: LoreRim install — **high** on the records, **medium** on the interpretation that crafting works.
- **`LoreRim - Vigilant Boss.esp`** overrides Molag Bal boss NPC 0208DE94 and adds perks "Stgger Improved" and `zzzCHcrMolagCombat` — LoreRim install — **high**.
- **Boss difficulty preset** (`[BossDifficulty]` iVigDiffLvl = 50, iVigIncAttack = 10; defaults 0/0; MCM help says "Increase health and attack power of bosses") — LoreRim install: LoreRim - MCM and INI Settings + Settings Loader config — **high**.
  - The percentage mapping (+10% health per point, +20% attack per point) is from the older Nexus description and may not match the new slider semantics — **low/medium**.
- **NG+ file reset**: `ElderScroll_Global.json` ships with all counters at 0 — LoreRim install — **high**.
- **Revised Scripts for MCO installs scripts only** (no Rebalanced Rewards or No Boss Summons plugin) — install folder listing — **high**.
- **Boss Moveset** is Payload Interpreter configs only — install folder — **high**.
- **Not installed:** DAc0da, GLENMORIL, Unslaad — install mod-folder listing — **high**.

## Contradictions
- **Start gate:** the LoreRim site New Lands page requires the main quest, Dawnguard and House of Horrors. The installed Delayed Start plugin requires level ≥ 25, House of Horrors (DA10) and Kindred Judgment (DLC1VQ08), with no main-quest check. Both are reported in the file.
- **Quest name:** the fan wiki calls a quest "Old Guilts"; the installed English plugin calls it "Old Regrets". The plugin name is used.
- **Anvil of Zenithar:** Immersion Tweaks (the installed AIO) removes it, but LoreRim's later patch restores it. The load order resolves this in favor of the anvil working.

## Gaps (looked for, not found)
- **Endings:** exact ending conditions (karma, good/bad/true ending) could not be verified. Fandom returned 402; TV Tropes, NamuWiki and the Nexus article returned 403.
- **Rewards:** no per-quest reward lists. The plugin import has no reward data.
- **Stuhn Ravine entrance:** the exact entrance location and map marker is only known from the fan wiki snippet.
- **Boss multipliers:** whether iVigDiffLvl = 50 means +500% health was not verified (the semantics changed between the Nexus text and the MCM).
- **Shared chests and Altar of Nocturnal:** whether the Immersion Tweaks removals are overridden by any later plugin was not checked. Only the debug containers and the anvil were checked.
- **LoreRim wiki:** a search found no Vigilant page on wiki.lorerim.com.

## Leads
- **Ivy Stendarr's Beacon Overhaul - Vigilant Patch, JK's Bee and Barb, and Snazzy Palace of the Kings patches** touch Act 1 locations (Stendarr's Beacon, Bee and Barb, Candlehearth/Palace). They are worth a line in `areas/vigilant-realms.md` or the hold area files.
- **Nexus SE videos** 10056 (Act 4 Greymarch) and 15508 (Act 4 All Endings Guide) are author-adjacent sources for endings.
- **CC "Stendarr's Hammer":** the LoreRim site says its quest was removed and the hammer moved to Vigilant Tyranus. This is relevant to `vanilla-changes/creation-club.md`, not this mod.
- **The Cause CC:** LoreRim ships The Cause Tweaks (alternate start at the Hall of the Vigilant). It thematically ties in with Delayed Start option 4, but that option is not installed.
