# Digest — ar-new-lands-a (areas), round 1

Unit: ar-new-lands-a. The earlier attempt had written no target files and no digest, so all four files were written fresh this run.
Files:
- lorerim-agent/knowledge/quests/areas/wyrmstooth-island.md
- lorerim-agent/knowledge/quests/areas/hjorkvild-isles.md
- lorerim-agent/knowledge/quests/areas/vvardenfell-and-baan-malur.md
- lorerim-agent/knowledge/quests/areas/shivering-isles-saints-and-seducers.md

Method notes:
- Map markers (REFR with XMRK + FULL, grouped by worldspace), interior CELL FULL names, WRLD names/cell counts and GLOB values were parsed directly from the plugins in C:/mods/LoreRim/mods this run, using small Python TES4 parsers.
- Enabled state was checked against profiles/Default modlist.txt and plugins.txt.

## wyrmstooth-island.md
- Wyrmstooth.esp defines two worldspaces: "Wyrmstooth" (formid 0x2000d62) and "Dimfrost" (0x20825e1). — LoreRim install: Wyrmstooth.esp WRLD (mod v1.20.3.0), accessed 2026-10-02 — high
- The Wyrmstooth worldspace has 51 map markers, including Stonehollow, Fort Valus, Imperial Docks, Wyrmstooth Barrow, Dimfrost, Krakevisa, Kazmalgur, Oblivion Gate, Dark Brotherhood Sanctuary and four "Dwemer Lift" markers. — install plugin REFR parse — high
- Interior cells include The Handsome Hermit (+ Cellar), East Empire Company Tradehouse, Fort Valus Barracks/Common House/Muster, the Dimfrost Animonculatory/Aularium/Boilery/Boletarium/Luminatory, five Wyrmstooth Barrow interiors and Red Wave. — install CELL parse — high
- 20 journal quests; names and steps are in imports/mods/wyrmstooth.md. Default start per Nexus: level 10 + "Way of the Voice"; the courier Theodyn Bienne finds you starting from the Bannered Mare. — Nexus 45565 via meta.ini (nexusLastModified 2025-09-29, cache 2026-01-12) — high
- LoreRim additionally requires Rise in the East. — LoreRim site New Lands (accessed 2026-10-02) — high
- That gate is implemented by Sensible Wyrmstooth Prerequisite (Rise of Wyrmstooth.esp, modid 121948 v1.2.0.0). Its script WT_QF__02AC9830 requires MS10 stage >= 100 on every WTQuestSelectGlobal option, including "Immediately". — install script source + Nexus via meta.ini (nexusLastModified 2026-01-29) — high
- MS10 = "Rise in the East" and MQ105 = "The Way of the Voice". — imports/official-quests.json — high
- Wyrmstooth - Settings Loader defaults: iMainQuestList=4 (Way of the Voice), min level 10, boss health multiplier 12. LoreRim - MCM and INI Settings contains no Wyrmstooth.ini override. — install settings.ini + WT_MCMScript.psc — high
- Requiem - Wyrmstooth (Updated) f1.01: the description says "Player level requirement from 10 to 20", and the plugin GLOB WTStartLevel = 20.0 (Wyrmstooth.esp has 10.0). — Nexus 116468 via meta.ini (2024-06-12) + plugin parse — high (that it is set) / medium (effective value)
- WT_MCMScript OnConfigInit → LoadSettings → Load() writes the INI default (10) into WTStartLevel. The effective start level is therefore probably 10. — install script source — medium
- Red Wave: the FAQ says it is the only base-game cell edited. The readme says you "No longer need to sleep on Red Wave", Holmar's dialogue moves you between Wyrmstooth and Skyrim, encounter zones have min level 10, and the Barrow and Dimfrost have min 24. — readme pastebin sZ7JAV9W (Jonx0r), accessed 2026-10-02 — high (verbatim quotes)
- Readme also says: a Thieves Guild fence was added to The Hermit Inn; a merchant with a large amount of gold was added; the Fort Valus cook, blacksmith and gardener trade; Ja'Shavi-Dar and Hulgard keep business hours. — same — high
- WTUniqueStonehollow.esp adds an LCTN "Chapel of Zenithar" and edits the Chapel of Zenithar, Hall of the Dead and Saeglopur Farm cells. — install — high
- The Hall of the Dead becomes the undercroft of a new chapel; farmhouses get unified roofs. — web search snippet (GitHub TateTaylorOH / Nexus 131619), accessed 2026-10-02 — medium-low
- Unmarked Locations Pack - Wyrmstooth Addon: "More than 15 new locations", unmarked. — Nexus 169188 via meta.ini (2026-01-10) — high
- Missives board outside the Stonehollow inn, after the main quest and once the town is rebuilt. — Nexus 26788 via meta.ini (2025-08-23) — high
- Installed and enabled: Skyrim Ferries "Ferries - Wyrmstooth Addon.esp"; "GTS - Wyrmstooth Adoption.esp" (Bluesky Hall and Fort Valus Allow Adoptions, no cached description); Wyrmstooth - Rare Curios Patch (spiddal sticks → The Cause); Wyrmstooth Uses The Cause Style Oblivion Gate. — install modlist/plugins — high (presence) / low (adoption details)
- UESP's Wyrmstooth/Locations list matches the plugin's map markers. — UESP (page updated 2026-05-22) — high

## hjorkvild-isles.md
- Siege at Icemoth.esp worldspace "Hjorkvild Isles" (0x5005900). Markers in Skyrim's worldspace: "Hjorkvild Isles" and "Old Wooden Jetty". Island markers: Abandoned Fishing Hut, Eyndis' Folly, Fjolgen, Fort Icemoth, Freezewater Plunge, Frostcaller Cave, Ghoruun Hall, Hjaalskar's Point, Rimewind Grotto, Saervild's Trench, Winter Shroud Sanctum, Wreck of The Northern Grace, 5× Sailboat, Skyrim. — install parse (v1.4.2.0) — high
- Quests: Siege at Icemoth (start-game-enabled), The Topaz Claw, Black Book: The Font of Memory, Caches of Skorjan Iron-Beard. — install QUST — high
- To travel: go to the Old Wooden Jetty at the most north-western beach (west of Northwatch Keep) and read the waterlogged journal on the dead mercenary; this starts the quest and makes the boat usable. — Nexus 109541 via meta.ini (2025-12-31) + LoreRim site — high
- Lore: Marus Antonius, the Band of the Wraith, Silas Marceau, the fort abandoned about 20 years ago; Crimson Kiss location; "Fully navmeshed and follower friendly". — Nexus via meta.ini — high
- The plugin edits interior cells named Dragonsreach and The Arcanaeum, and has an LCTN "East Empire Company Warehouse" and a cell "The Mearl Pearl". Their purpose is undocumented. — install parse — high (presence)
- Shipped patches: Fishing Patch (HYORFishingIntegrationPatch.esp), Metallurgy, Lux, occlusion, GKB waves, FWMF map, Skyrim Ferries add-on. No Requiem patch was found. — install — high

## vvardenfell-and-baan-malur.md
- Journey to Baan Malur.esp sets the FULL name of the Solstheim worldspace (DLC2SolstheimWorld) to "Morrowind" and adds 5,757 cells there. It defines a new WRLD VvardenfellWorld "Vvardenfell" with 5,350 cells and no map markers. Masters include ccBGSSSE001-Fish.esm and ccBGSSSE037-Curios.esl. — install parse (vi1.1.9b) — high
- LoreRim's "LoreRim - xEdit64 Output/Journey to Baan Malur - Patched.esp" (load index 1645) names the worldspace "Solstheim". Baan Malur Landscape Updates.esp (231) keeps "Morrowind". — install parse — medium (later overrides not exhaustively checked)
- The Morrowind-side map markers (23) are listed in the file; "Western Kalbthurz" is in Tamriel. — install parse + MapMarkers/*.json — high
- The Nexus description is cached in meta.ini (the import file wrongly said none): region the size of a hold; Cormar Valley/Cormaris and Baan Malur; 100+ NPCs; overland via Kalbthurz east of Windhelm, or the ferry from Raven Rock; ferry system (Cormaris, Baan Malur, Raven Rock); scarab currency exchanged at the bank; quest starts (Struggle for Justice, Daedra and Deceit, Hlervan's Ashes, Something in the rafters, bounties from Goyes Velen at the Drol Taverna); no map markers for quests; bBorderRegionsEnabled=0 required; add-ons list. — Nexus 114518 via meta.ini (nexuslastmodified 2025-05-29, cache 2026-01-11) — high
- Plugin ferry dialogue: "Pryai. (30 Septims)", "Raven Rock. (30 Septims)", "Llethrin Fel. (30 Septims)". Cells include Fort Pryai, Pryai Cornerclub, Pryai Potions and Llethrin Fel Caverns. — install string parse — high
- The add-ons Pryai, Llethrin Fel, Silgrad, Vvardenfell: The New South, West Gash Projekt and Blacklight are NOT installed. — install modlist/plugins grep — high
- Several journal quests have DefunctQuest* editor IDs (The Bruska Pogrom, The New Temple, The Amulet of Old, The Secrets of Oblivion, A Grand Venture) and are not on the mod page. Whether they can be started is unverified. — install + Nexus — medium
- Vvardenfell worldspace reached "by taking a boat near Baan Malur". — web search summary for Vvardenfell The New South (Nexus 129761 returned 403) — low
- Baan Malur Landscape Overhaul (f0.04RC) covers the road from Kalbthurz to Baan Malur's north entrance; "VERY incomplete", "not fully navmeshed". — Nexus 152707 via meta.ini — high

## shivering-isles-saints-and-seducers.md
- Start: level 20 + The Mind of Madness, then sleep 6h or re-enter Solitude. — Nexus 72772 via meta.ini (2025-11-11) + LoreRim site Creation Club page — high (they agree)
- First quest "The Route of Madness" (EC_SS_MQ100Int): investigate the source of the quake, then the strange tunnel. Then The Isle of Madness, The Roots of Madness, The Merchant's Masterpiece, The Lunatic's Treasure. — install QUST — high
- The quake leads down into the sewers, where an altered final encounter takes you to the Isles. Level 30+ suggested. Staff of Sheogorath enchanter is in Thoron's final lair, which cannot be revisited after killing him. — Tuxborn overview (published 2026-04-25) — medium (third-party)
- The worldspace ECSSShiveringIsles is "Shivering Isles". Markers: Borogove, Doors of Denial, Drowned Ruin, Glimmering Hollow, Grove of Insanity, Root Canal, Root to Nirn, Sees-the-Moon's Shack, Skyrim, Stopgap, Stopgap Penitentiary, The Asylum, The Near Corgi Shop, Tower of Xedex. Regions are ECSSManiaRegion and ECSSDementiaRegion. Cells include Solitude Sewers, Solitude Wasteworks, Impromptous Hall and Flesh Laboratory. — install parse (v1.1.1.0) — high
- Place descriptions (Stopgap, Borogove, Xedex, Near Corgi Shop, Root to Nirn, Doors of Denial, Glimmering Hollow, Grove of Insanity). — UESP Skyrim Mod:Saints and Seducers/Places, accessed 2026-10-02 — high
- ECSS overrides the ccBGSSSE025 quests (Balance of Power, Restoring Order, Staada Quest, Nerveshatter, the smithing misc quests) plus the Ruin's Edge, Shadowrend and Staff of Sheogorath CC records. — imports/vanilla-quest-overrides.json + import — high
- Armory Extended S&S + LoreRim patch: added weapon types, leveled lists in the Isles, and crafting prerequisites. — Nexus 167859 via meta.ini (2025-12-23) — high

## Contradictions
- Wyrmstooth start level:
  - The LoreRim site says "By default ... level 10" and does not mention Requiem.
  - The Requiem - Wyrmstooth patch claims, and its plugin sets, level 20.
  - The MCM Settings Loader script reapplies its INI default of 10 at MCM init.
  - Effective value unverified; the file states the probable value (10) and tells the agent to check the MCM.
- The JtBM worldspace display name is "Morrowind" in the mod but "Solstheim" in LoreRim's generated patch, which loads later. This is a naming difference, not a factual dispute.
- The import file for JtBM says "(no cached description)", but meta.ini does contain a nexusDescription (lowercase keys). The writer used the cached description. This is an import-tool gap; flag it for the import script.

## Gaps (looked for, not found)
- Wyrmstooth: the exact Skyrim Ferries routes for the Wyrmstooth and Icemoth add-ons; the Stonehollow Overhaul full description (GitHub README not rendered; no meta cache); the adoption mod's description; the full Fort Valus upgrade list; where Holmar is.
- Siege at Icemoth: where the Black Book "The Font of Memory" is found; any level guidance; what the Dragonsreach/Arcanaeum cell edits do.
- JtBM: whether LoreRim disables border regions (bBorderRegionsEnabled); whether the "Morrowind Map Fix" optional file is included; what, if anything, populates the Vvardenfell worldspace in LoreRim; whether the DefunctQuest* quests can be started; vendor inventories.
- ECSS: the identity of the second shop; how to return to the Asylum after completion (the mod page says you can; mechanism not sourced); recommended level from a primary source.
- wiki.lorerim.com had no pages for these mods in search results. Fandom tes-mods returned 402. Nexus live pages returned 403.

## Leads
- Check in game, or via the MCM Helper user-settings path, what the effective WTStartLevel is in a fresh LoreRim save.
- Fix the importer so it reads lowercase meta.ini keys (nexusdescription/nexuslastmodified). JtBM and Sensible Wyrmstooth Prerequisite were affected.
- UESP has a Skyrim Mod:Saints and Seducers namespace (Quests, Places, Staada) and Skyrim Mod:Wyrmstooth/Locations and /Magic. These are good for deeper NPC and merchant lists.
- The Tuxborn quest-mod overviews may also cover Wyrmstooth and Journey to Baan Malur.
- The Wyrmstooth Official Guide (Google Drive link on the Nexus page) is a full walkthrough; it was not fetched.
