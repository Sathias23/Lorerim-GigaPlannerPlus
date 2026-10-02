# Verify — mq-followers-b (normal level, 2026-10-02)

Fresh-context verifier. Web calls used: 3 (1 WebFetch, 2 WebSearch).

## Spot-checked claims
- VERIFIED — the-frozen-heart: start = buy Snow Elf Mirror at Belethor's, read, Slow Time, equip, Fire Breath at the door. Independent: live LoreRim site Followers page (lorerim.com/guides/world/followers, fetched 2026-10-02) states this procedure (writer cited Nexus cache + site; site was not in the pre-fetched imports, re-fetched live).
- VERIFIED — the-frozen-heart: LoreRim patch makes Othriel fixed level 50. Independent: my own binary parse of ACBS in `ksws07_quest.esm` vs `LoreRim - xEdit64 Output/The Frozen Heart - Quest Mod - LoreRim Patch.esp`: NPC_ ksws07Waifu flags 0x8f1 (PC-level-mult, 1.0x) -> 0x871, level 50.
- VERIFIED — the-frozen-heart: Rimeweld Heavy->Light, AR Cuirass 275 / Shield 165 / Circlet 110 / Gauntlets 82 / Greaves 83, Pauldrons -> clothing 0 AR; swords dmg 14->78, value 1000->1800. Independent: same binary parse (BOD2 armor type 1->0, DNAM; WEAP DATA). (Patch also changes ksws07Ghost and ksws07Boss levels — not in file, not load-bearing.)
- VERIFIED — taliesin-thalmors-shadow: location "hidden statue of Talos near Lake Illinalta", VA Pat Mahoney. Independent of plugin records: live LoreRim site Followers page. Quest name/objectives match imports `00TallyMeet`.
- VERIFIED — auri-song-of-the-green: location Falkreath Hold / Auri's Pod map marker. Independent: live LoreRim site Followers page ("In Falkreath Hold. Look for Auri's Pod on your map.").
- VERIFIED — auri-song-of-the-green: completing Song of the Green sets AuriFriendship 4 and starts AuriRomance stage 1. Read `Song of the Green (Auri Follower)/Scripts/A18_AuriFriendQuestFunctions.psc` lines 62–63 directly.
- VERIFIED — serana-dialogue-expansion: LoreRim uses SDE "not to be confused with SDA", keeps original VA. Live LoreRim site Followers page. Quest names (From Arena to Oblivion; The Bleeding Flower; Solitude in Company; At the Tempo of our Heartbeats; Mirrors of Youth; Ambivalence) match import plugin records.
- UNVERIFIED — serana-dialogue-expansion: "From Arena to Oblivion" unlocks after Beyond Death + Alduin's Wall. Only the author's page (meta.ini cache; live Nexus search snippet = same publisher). Marked inline "(author-stated; not independently verified…)".
- UNVERIFIED — follower-dialogue-expansions: Fura recruit gate (Clan Volkihar + Bloodstone Chalice + Moth Priest speech). Cache text confirmed; web search only returned the same Nexus page / mirrors (same publisher). Table already labels the column "per mod page"; no text change.
- VERIFIED — book-of-love-fastreds-awakening: branch starts at vanilla t02 stage 20; jumps to 200 if t02 hits 30 before branch stage 90. Read `TTFA_MainController.psc` directly. Fallback timings 6/6/12/24 in `TTFA_Utils.psc`; no TT_FastredsAwakening config.json anywhere under mods/ or overwrite/. Outcome journals (Bassianus to Riften, Klimmek stays; stages 90/200/300) match import records.
- OVERTURNED — follower-dialogue-expansions: "Only six of the shipped plugins carry journal quests". Import plugin records show journal quests in five plugins (FDE Erik, Faralda, Jenassa, Mjoll, Fura). Corrected to "five".

## Mechanical pass (all 6 files)
- Frontmatter parses as YAML, all template fields present, id = filename, frontmatter `sources` = table rows, every inline [n] resolves, no orphan rows.
- taliesin-thalmors-shadow: "no cached Nexus description" was cited [1] (plugin records); re-cited to [6] (meta.ini row); the HTTP 403 note is the writer's fetch, now labelled as such.

## Notes
- The LoreRim site Followers page is NOT in imports/lorerim-site/; claims citing it were verified by a live fetch.
