# Digest — unit mq-new-a (mod-added), round 1

Resumed run: all four target files existed from the interrupted attempt and were complete against the template (frontmatter, section order, inline [n], Sources table, each under 2,500 words). This run re-verified the load-bearing claims against the import files and the pre-fetched LoreRim site pages, added one LoreRim note to meridias-order.md (generic dialogue overrides), and wrote this digest. No new web calls were made; web sources below (UESP, annathepiper review, Gate To Sovngarde wiki) were consulted by the earlier attempt and are carried over as cited in the files.

Abbreviations: IMP = `imports/mods/<slug>.md` (LoreRim install plugin records, profile Default); SITE = `imports/lorerim-site/*.md` (LoreRim site, accessed 2026-10-02); NX = Nexus page via meta.ini cache (2026-01-11 cache).

## journey-to-baan-malur.md
- Titled quest records in `Journey to Baan Malur.esp`: The Struggle for Justice (`SOMRSaxhleelQuestMain`), Daedra and Deceit (`SOMRLlynelisDaedricQuest`), Hlervan's Ashes (`SOMRHlervansAshesQuest` + duplicate `DefunctQuest05`), Morrowind Boat Travel System (`DefunctQuest09`) — IMP journey-to-baan-malur-and-morrowind (LoreRim install, mod v i1.1.9b, accessed 2026-10-02) — high
- Cut/defunct titled records: The Bruska Pogrom, The Amulet of Old, The New Temple, A Grand Venture, The Secrets of Oblivion; not start-game-enabled, probably unreachable — IMP (same) — medium (reachability unverified)
- "Something in the Rafters" (Scrambling Scrib Cornerclub) and Goyes Velen bounties (Koemia, Maighan) exist as untitled records / mod-page names — IMP + NX 114518 (nexusLastModified 2025-05-29) — medium
- Access: walk through Dwemer ruin Kalbthurz east of Windhelm, or ferry from Raven Rock; no quest markers (Morrowind style); Scarab currency — NX 114518 — high
- LoreRim site lists it under New Lands with no start gate — SITE new-lands — high
- No LoreRim quest overrides; skyrim.ini `bBorderRegionsEnabled=0` already set (required by the mod) — LoreRim install profile/plugin scan — high
- Worldspace record `VvardenfellWorld` named "Vvardenfell"; 22 new LCTN incl. Baan Malur, Cormaris, Kalbthurz, Saxhleel Camp, Fort Blacklight, Ashimmidarum, Dunnashammipuri — IMP — high
- LoreRim Requiem patch `Journey to Baan Malur - Patched.esp` overrides ~163 ARMO / 158 COBJ / 34 SPEL / 28 WEAP — LoreRim install xEdit output — high
- Baan Malur Landscape Overhaul UNDELETED f0.04RC is an incomplete beta (main road Kalbthurz to Baan Malur) — NX 152707 (2025-12-10) — high
- LOD mod has no plugin — NX/install — high

## siege-at-icemoth.md
- Quests: Siege at Icemoth (`HYORdunIcemothQST`, start-game-enabled), The Topaz Claw, Caches of Skorjan Iron-Beard (misc, start-game-enabled), Black Book: The Font of Memory — IMP siege-at-icemoth (mod v1.4.2.0) — high
- Start: travel west from Northwatch Keep, find dead mercenary, read Waterlogged Journal, use boat at Old Wooden Jetty (NW beach) — SITE new-lands + NX 109541 (2025-12-31) — high; LoreRim adds no gate — SITE + install scan — high
- Necromancer Silas Marceau holds Band of the Wraith; dragon priest Tovinaan ends Winter Shroud Sanctum — IMP journal text + NX — high
- 16 LCTN incl. Hjorkvild Isles (worldspace `BSKHyorkerIsle`), Fort Icemoth, Fjolgen, Winter Shroud Sanctum, Apocrypha (Black Book) — IMP — high
- LoreRim Band of the Wraith text: magicka regen 50% (base mod 30%) via `LoreRim - ISC Patches.esp` — LoreRim install — high
- Plague Breath shout, 3 words — install WOOP records + UESP Skyrim Mod:Siege at Icemoth (updated 2025-11-25) — high
- Ferries addon `Ferries - Siege At Icemoth Addon.esp` enabled, places rowboat/plank activators; route specifics unverified — install — medium
- Fishing patch adds ~67 refs in 31 isle cells (CC Fishing master) — install — medium (purpose inferred)
- Metallurgy add-on is textures only (Mithril Ingot) — NX 124223 — high

## tools-of-kagrenac.md
- Quests: Kagrenac's Tools (`TOK_QUST_KagrenacTools`), Lost Heritage, My Precious, Vivec's Trial of Wisdom, Darkest Depths — IMP the-tools-of-kagrenac-esmified (mod v1.62.0.0) — high
- Start: after Arniel's Endeavor (Keening) + The Way of the Voice, a few in-game days later a courier letter — SITE new-quests + NX 14168 (2024-01-04) — high
- MCM "Alternate Start Check" bypasses requirements; LoreRim MCM settings mod has no ToK preset — NX + install grep — medium-high
- Keep Keening; drop/pick up fix if courier never comes — NX 14168 — medium
- LoreRim CC guide: Sunder and Wraithguard come from this mod (CC versions removed) — SITE creation-club — high
- Arniel's Endeavor in LoreRim overridden by [LoreRim] Economy Overhaul and College of Winterhold Quest Start Fixes — vanilla-quest-overrides.json — high
- Main arc: Mathis Valen (Silver-Blood Inn) -> Vonos Dreloth (College) -> Yassour Tansumiran (Raven Rock) / Nchardak -> Rkulftzul, Sealed Vault (Sunder) -> three Bal am as Aedra stones in Ayleid ruins -> Blackreach portal -> Silent Ruins; Mathis is Sixth House leader — IMP journal — high
- Ayleid ruins Aba-Malatar, Oio-Lalor, Atalatar — install CELL/BOOK + annathepiper review (2025-11-16) — high
- Vivec's Trial answer 348 (Sermons 1, 13, 29) — NX 14168 — medium
- LoreRim Wraithguard: 20% elemental resistance (mod 10%) via Armor Merges — install — high
- LoreRim patches: Forgotten City courier patch (WICourierDeliveries only), JK's College, Navigator, Northern Roads, Lux — install — high

## meridias-order.md
- 17 titled quests from `Meridia.esp` (`NMeridia01`..`09`, member quests Laracin/Garin/Asger/Una/Valrar) — IMP meridias-order-esmified (mod v1.5.0.0) — high
- Start: after The Break of Dawn; greeted by Paladin Marith in a major city, or visit Meridia's Sanctum near Rimerock Burrow far west of Solitude — SITE new-quests + NX 102584 (2024-01-18) — high
- LoreRim recommended level 25+, Requiem undead warning — SITE new-quests — high
- DA09 (The Break of Dawn) overridden in LoreRim by USSEP, Requiem, Wintersun/Daedric Shrines replacer — vanilla-quest-overrides.json — high
- Only one new LCTN: Meridia's Sanctum; other places are cells — IMP + install CELL — high
- Meridia.esp overrides only generic dialogue quests DialogueGenericCommanded / DialogueFavorGeneric — IMP — high
- Finale reward "Ring of Khajiiti"; LoreRim renames the two ring records to "Lesser Ring of Khajiiti" / "Ring of Khajiiti" — IMP + install Aetherium Forge plugin — high (which record is granted: unverified)
- LoreRim Artifact Sacrifice counts the ring as a Meridia relic; Aetherium Forge recipe converts it to Insight of Aetherius — install script/plugin — high
- Patches enabled: Northern Roads, Old Hroldan, TGC Winterhold, COTN Dawnstar, Ivy Stendarr's Beacon, Lux — install plugins.txt + NX 106422 — high
- Malfyur the Unliving details (Bone Colossus, 1,000 bounty) — Gate To Sovngarde wiki (different modlist) — low

## Contradictions
- Baan Malur worldspace: plugin record names it "Vvardenfell" (`VvardenfellWorld`) while the mod page says its LOD is for the Solstheim worldspace "as this is where the new region is". Both sides reported in the file; not reconciled.
- Tools of Kagrenac note text reads "Sliver-Blood Inn" (plugin typo) vs. Silver-Blood Inn in the journal objectives — cosmetic.
- Meridia's Order: LoreRim renames the ring records, so in-game names differ from the plugin/mod-page names.
- Site vs install: no conflicts found for these four mods (site start text matches install and mod pages).

## Gaps (looked for, not found)
- Where Siege at Icemoth's Black Book (The Font of Memory) is found; Plague Breath word-wall locations; Ferries route destinations.
- Exact trigger for the Lucan Valerius courier letter (Caches of Skorjan Iron-Beard).
- Whether the Baan Malur "Defunct" quests are reachable; in-game title of "Something in the Rafters".
- Which Khajiiti ring record the Meridia finale grants; how Mighty Dawnbreaker is obtained.
- Interaction between Meridia's Order "Stendarr's Mercy" and the Vigilant mod at Stendarr's Beacon.
- No source states a level recommendation for Baan Malur, Icemoth, or Tools of Kagrenac.

## Leads
- UESP Skyrim Mod: pages for Journey to Baan Malur / Meridia's Order (if they exist) for item locations.
- Tools of Kagrenac MCM script defaults in the mod folder to confirm the Alternate Start Check default.
- Ferries addon script properties to resolve the Icemoth ferry route.
- wiki.lorerim.com for any LoreRim-specific notes on these four mods.
