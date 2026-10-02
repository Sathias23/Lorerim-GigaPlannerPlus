# Digest — vc-creation-club (round 1)

Unit: vc-creation-club (vanilla-changes). Earlier attempt left no files behind: the target and the digest were both missing, so everything was written fresh.
File written: `lorerim-agent/knowledge/quests/vanilla-changes/creation-club.md` (about 2,290 body words).
Web calls used: 18 (UESP ×13, LoreRim Player Homes ×1, Nexus fetch 403 ×1, searches ×2, plus 1 tool load).

## creation-club.md — load-bearing claims

### Start conditions / gates
- The Cause (vanilla): starts at level 46 when a courier delivers "Stranger's Plea" — UESP Skyrim:The_Cause (UESP, n/a, accessed 2026-10-02) — high
- The Cause in LoreRim: no courier; you start it from a note on the dead Vigilant on the table at the back of the destroyed Hall of the Vigilant, and the notes and journals are reworded — Nexus 112918 via meta.ini cache (author, cache 2026-01-11); LoreRim site Creation Club page (LoreRim, n/a, 2026-10-02); plugin enabled per plugins.txt (`CauseTweakAlternateStart.esp`) — high
- Alternate-start plugin text includes Skorvild's note asking you to meet at the Shrine to Stendarr between Fort Greymoor and Rorikstead — `CauseTweakAlternateStart.esp` strings (install) — high
- The Hall of the Vigilant is destroyed at level 10 or when Dawnguard starts — UESP Skyrim:Hall_of_the_Vigilant — high (vanilla); whether this holds in LoreRim (which has "Stendarr Rising - The Hall of the Vigilant Rebuild") is unverified
- Whether the level-46 gate still applies under the alternate start — NOT verified — low
- CC Fishing in LoreRim: Angler Acquaintances no longer starts when you visit the fishery; first catch a fish, then talk to Keerava at the Bee and Barb ("I'd like to learn about fishing. Could you help me?" / "Oh yes. Take a look at the Riften fishery.") — Nexus 72751 meta.ini cache (2026-01-11) + `CC Fishing - Delayed Start.esp` strings — high
- Vanilla Angler Acquaintances starts on the first visit to the Riften Fishery and leads to Viriya (In A Pinch) and Swims-In-Deep-Water (Catch of the Day) — UESP — high
- Hendraheim: summons comes only after The Silver Hand plus joining the Circle (Creation Club Home Requirements AIO) — Nexus 116032 meta.ini cache (2026-01-11); LoreRim Player Homes page ("letter after completing 'The Silverhand'") — medium-high (Hendraheim TnE loads later at plugins.txt line 2523 vs CCHR at 1264 and overrides the same QUST record; the gate was not tested in-game)
- Hendraheim vanilla: courier "Warrior's Challenge" at level 10, free after you defeat Eydvina — UESP — high
- Hendraheim TnE: loot the proof of worth from Eydvina, then buy from Markarth's steward (Raerek or Reburrus) for 25,000 (`cceejsse004_HousePrice`) — Nexus 98688 meta.ini cache (2026-01-12) — high
- Bloodchill Manor / Guests for Dinner: invitation only after Bloodline (vanilla: courier at level 12) — CCHR Nexus cache; LoreRim Player Homes; UESP — high
- Gallows Hall / Dreams of the Dead: locked until the Conjuration Ritual Spell quest is done — CCHR Nexus cache; LoreRim Player Homes — high
- Myrwatch: new misc quest `MyrwatchTNE_Quest` (no FULL name) with objectives "Speak to Tolfdir" and "Purchase Myrwatch"; you qualify via Shalidor's Maze (Diadem of the Savant), the College questline, or a very hard Persuasion check; price 20,000 (`MyrTE_GLOB_HousePrice`; plugin uses `ccEEJSSE002_HousePrice`) — plugin records + Nexus 97659 cache (2026-01-11) — high
- Goldenhills / The Unquiet Dead: level 15 (`CCFarmingLevelReq`); ask an innkeeper in Rorikstead or Whiterun "Are there any problems around town that need handling?"; afterward buy the plantation from Whiterun's steward for 10,000 — Nexus 69029 cache (2026-01-11) + plugin strings + LoreRim Player Homes — high
- Tundra Homestead becomes Wintersand Manor (Nazeem and Ahlam); it goes on sale after both are dead or after The Wintersand Deception — Nexus 149552 cache (2026-06-26) + plugin records — high
- The Wintersand Deception (`THTE_Quest_WintersandDeception`): starts from a Thalmor Dossier (Thalmor Embassy during Diplomatic Immunity, or on Agent Lorcalin after Elisif's Tribute); objectives Talk to the Jarl of Whiterun → Obtain additional evidence → Return to the Jarl of Whiterun — plugin records + Nexus cache — high
- A Soul Divided: the start note and activator move to a wooden pillar in the canal outside the Ratway; the ghost and trigger stay disabled until you use it — search snippet of Nexus 57609 (ggmods mirror, n/a) + plugin strings (`ccDNFQGhostEnableMarker`, `ccBGSSSE013_GhostQuestStartTrig`) — medium
- Vanilla A Soul Divided starts automatically from a ghostly apparition in the Ratway — UESP — high
- Knight of the North: a journal or note next to each relic starts it; the author recommends starting near the Tower Stone — LoreRim site — high (details in mod-added file)

### LoreRim-specific changes / removals
- Battle of the Champions is removed; the new misc quest "Civil War Champion Armor" (`CWCRQuest`, objective "Pick up champion armor from your commanding officer") starts soon after Battle for Solitude or Battle for Windhelm begins; fallback `setstage cwcrquest 10` — plugin records + Nexus 94999 cache (2026-01-11) + LoreRim site — high
- In the Shadows is disabled; the Bow of Shadows is in the Severin Family Chest in Severin Manor (Raven Rock) and needs Mirri Severin's key (Served Cold); it now counts as a Daedric weapon — Nexus 81188 cache + LoreRim site — high
- CC pet quests (My Pet Mudcrab, My Pet Nix-Hound, Let Sleeping Wolves Lie, Pets of Skyrim) run without journal entries and can still be completed — Nexus 169557 cache (2026-02-07) + LoreRim site; the installed file is the log-hiding optional — high
- Removed per the LoreRim site: the Alternative Armors quests (armors given to NPCs), Arms of Chaos, Stendarr's Hammer quest (hammer on Vigilant Tyranus), Chrysamere quest (weapon on the Ustengraav ghost boss "The Lost Paladin"), Nordic Jewelry quest (craftable with Craftsmanship); Umbra comes from another quest mod; Sunder and Wraithguard come from Tools of Kagrenac — LoreRim site Creation Club page — medium (mechanism partly located: `Requiem - Creation Club.esp` overrides `ccBGSSSE050`–`064_MiscQuest`)
- `Requiem - Creation Club.esp` "disabled a number of CC Quests"; the optional "Trad - CC Quests Re-Enabled" files are not in LoreRim's modlist — Nexus 64829 cache (2026-01-31) + modlist grep — medium
- Close the Gate: remove two sigil stones guarded by dremora → return to Tamriel permanently; the Transcendent Sigil Stone gives a perk point or an enchanting bonus (Enchanting 75); the console global lets you close it without the kills, at the cost of unfilled objectives — Nexus 112918 cache — high
- Land of Razors: Deadlands get more ruins and enemies, plus redone Valkyn arenas — Nexus 141691 cache — high
- Bittercup TnE: Giant's Tooth finished, The Pit's upper level made accessible, enchanted gear swapped for leveled items, Bittercup worth 1000 — Nexus 81665 cache — high
- Farming TnE: pre-quest family alive (Jonquil trains Alchemy to 50), haunted objects, farmhands 1,000, beggars recruitable, Narfi interaction with Contract: Kill Narfi (Speech 75 persuade Nazir) — Nexus 69029 cache — high
- LoreRim xEdit output `Tundra TNE - LoreRim Patch.esp` (masters THTE + Requiem) applies REQ_LockpickControl to THTE containers and doors — plugin strings — medium

## Contradictions
- Tundra Homestead: LoreRim Player Homes page says "Purchase the deed from the steward in Dragonsreach", but the installed THTE (v1.6.3.0, enabled) makes it Wintersand Manor, unavailable until Nazeem and Ahlam are dead or exposed. The site likely predates THTE (its cache is 2026-06-26).
- Stendarr's Hammer: the LoreRim site says the quest is removed and the hammer is on Vigilant Tyranus; the Trad Requiem patch (installed) says Calcelmo sells it via dialogue (`Trad_ccBGSSSE006_QuestBuyHammer` helper record exists). Which applies in LoreRim was not resolved.
- The Cause early start: the Trad patch says you can start it before level 46 by killing the slighted at the Arms of Chaos summoning circle; the LoreRim site says Arms of Chaos was removed, and The Cause Tweaks replaces the start with the Hall of the Vigilant note. The Trad route is likely unavailable; not verified in-game.
- Hendraheim: CCHR's description says its own TnE compatibility is a separate patch; LoreRim ships only `Creation Club Home Requirements - AIO.esp`, and Hendraheim TnE loads after it on the same QUST record. The LoreRim site still states the Silver Hand gate. Whether the gate survives is unverified.
- Hendraheim TnE description also lists Homes Under the Warhammer / Rebalancing AE patches, but neither is installed (irrelevant).

## Gaps (looked for, not found)
- Which plugin disables Chrysamere ("The Lost Paladin"), Arms of Chaos, Nordic Jewelry and Stendarr's Hammer quests: they are not in the player-facing QUST override list; the change may be done by disabling references (Requiem CC plugin?). Not found.
- The mod that makes CC pet collars and bags require the first Smithing perk (LoreRim site claim): not identified.
- The value of `optionalRequiredPlayerLevel` in `CC Pets - Hide Quest Logs - Sleeping Wolves Requirement.esp`: not read (binary property value).
- Whether the level-46 requirement still gates the alternate-start note for The Cause.
- Any LoreRim override of the console globals (`CCFarmingLevelReq`, `MyrTE_GLOB_HousePrice`, `cceejsse004_HousePrice`, `GoldenhillsPlantationPriceGlobal`): grep of "LoreRim - MCM and INI Settings" found none, so assume defaults.
- Nexus pages for 57609 (Dawnfang) and 112918 Alternate Start (no cached description) — the live Nexus page returned 403.
- Which Requiem-overridden CC quests (More than you can Chew, Night Hunter, Crypt of the Heart, Interception, Unholy Vigil) remain playable vs disabled.

## Leads
- Read `Requiem - Creation Club.esp` with xEdit/a record parser to list disabled CC quest-start references (would settle the "removed" list and the Stendarr's Hammer contradiction).
- Check whether "Stendarr Rising - The Hall of the Vigilant Rebuild" stops the Hall's destruction, which would affect The Cause alternate start note placement.
- wiki.lorerim.com was not reachable via search; the GitHub mirror `gouldsonium/lorerim-wiki` may hold newer CC text.
- Check the in-game Umbra location (Skyblivion Umbra description says Champion's Rest) against the Gray Cowl file author.
- Check that LoreRim's Player Homes page is current against THTE (possible site-lag report to LoreRim).
