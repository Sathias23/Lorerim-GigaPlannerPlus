# Digest — mq-expansions-b (round 1)

Unit: mod-added vanilla-expansion quests, batch B. Resumed attempt. None of the 12 target files existed at the start, so all 12 were written fresh. Accessed 2026-10-02. "Install" = C:/mods/LoreRim (profile Default; Extreme and Ultra enable the same plugins). Plugin strings, records and scripts were read directly with Python byte parsing this run.

## seeking-the-cure.md
- In LoreRim, VC01's FULL name is "Seeking A Cure" (vanilla: "Rising at Dawn"). — install `RisingAtDawnQuestOverhaul.esp` QUST FULL (mod v1.0.0.0) — high
- Objectives: Speak to Urag / Speak to Falion / Wait three days while Falion gets ready / Speak to Falion / Bring a filled Black Soul Gem to Falion / Meet Falion at dawn / Speak to Falion / Stand in the center of the circle / Enact the ritual with Falion / Speak to Falion / Kill Falion. — install plugin QOBJ strings — high
- The ritual always fails. Journal: "…the ritual failed. I must find a different means of curing myself." Optional kill-Falion variant. — install plugin + Nexus 85923 (meta.ini cache refreshed 2026-01-11) — high
- Start: book "Undeath Undone" drops a note to Urag, OR ask Urag for reading on a cure, OR enter Falion's house as a vampire. No innkeeper rumours. Falion does not sell a Black Soul Gem. — plugin journal/dialogue + Nexus — high
- "Don't be Blood-Starved or he won't trust me". — plugin journal — high
- The COTN Morthal patch moves the trigger, cannot be added to an existing game, and is the last override of VC01 (load pos 2596, after the main plugin at 2595). — Nexus 89174 cache; plugins.txt; vanilla-quest-overrides.json — high
- "Experimental Potion" debug cure in Falion's inventory. Falion's essential flag is removed from the base actor, and he is buffed. — Nexus + plugin — high
- LoreRim site: "Seeking The Cure repurposes 'Rising At Dawn' into a non-repeatable… Falion's ritual… fails. Serana Cure Quest Plus adds more…" — lorerim.com/guides/quests/main (n/a) — high
- A Forlorn Hope (`OK_FH_Quest`): courier letter from Falion after the 3rd level-up following the failure, Falion alive. Objectives: Find a way to create daedric essence / Bring the essence to Phinis Gestor / Wait till Phinis contacts me / Create a potion to remove vampirism. Stage 70: "I have created a potion. Should I drink it?" — plugin + Nexus 107939 + scripts (CounterQuest decrements a global, then starts the quest) — high
- Falion's letter: extract daedric essence from a Daedric artifact using the Aetherium Forge. Book on the Aetherium wars is in the College library or the Bards College. Phinis's letter: use the Atronach Forge under the College, sacrificing vampire dust + another daedric essence. — plugin BOOK text — high
- `Forlorn Hope_FLM.ini` adds two forms to the AtronachForge formlist. FormList Manipulator is shipped ("FormList Manipulator - FLM"). — install — high
- SeranaCureQuestPlus: Serana stays ~2 days with Falion, then does the ritual at the swamp circle. Objectives Follow Serana / See how Serana is doing / Talk to Serana. Outcome: cured. The vanilla start is unchanged. — plugin + Nexus 105091 — high
- LoreRim also ships `LoreRim Artifact Sacrifice.esp` ("Aetherium Forge" / "Convert artifacts to perk points"). Interaction with Forlorn Hope is unverified. — install (LoreRim - MCM and INI Settings) — medium
- Aetherium Forge (vanilla) is reached via Ruins of Bthalft in Lost to the Ages. — UESP search summary — medium

## soldier-of-stendarr.md
- No journal quest. Hidden dialogue quest "Soldier of Stendarr". — imports + plugin — high
- Conditions: GetEquipped ReligiousStendarrMercy (Amulet of Stendarr) and GetInFaction VigilantOfStendarrFaction. — plugin CTDA, Skyrim.esm EDIDs — high
- Trades: 5 vampire dust → 200 gold. 2 WerewolfPelt (vanilla MISC 0FE6A9) → 300. 1 daedra heart → 500. Repeatable. — scripts TIF__*.psc + Nexus 97984 — high
- The voiced add-on (Nexus 128739) is enabled. — plugins.txt — high

## leaps-of-faith.md
- `Leap_MiscQuest` "Leaps Of Faith" is start-game enabled. Objectives count down 11→1, then "All Leaps of Faith completed." — plugin — high
- Edge message: "I could probably land in the water from here..." — plugin MESG — high
- 12 jumps, +4% fall-damage resistance each, 50% total. Must jump from the top and land swimming. Doable at speedmult 100. — Nexus 53074 cache — high
- Cells edited (hints to spots): Kagrenzel, ValtheimKeepExterior01/02, DoomstoneSnowy01, POIReach27, TrevasWatchExterior01/StalleosCamp, RockjointIslandExteriorOld, BardsLeapSummitExterior, MarkarthWorld, SolitudeWorld, plus unnamed exterior cells. — plugin CELL records — medium (edited ≠ jump spot)
- LoreRim ships Valtheim 2.0 - Leaps Of Faith Patch. — install — high
- LoreRim site lists it under New Quests. — lorerim.com new-quests — high

## sissels-book.md
- Quest "Sissel's Book" (`ACFRoriksteadFreeform02`). Objectives: Find one <book> / Bring one <book> to Sissel. — plugin — high
- Start (More To Say FAQ): finish Before the Storm and talk to everyone in Rorikstead once. — Nexus 22622 cache — medium (general More To Say FAQ)
- The alias is forced to Skyrim.esm REFR 001067B9 = BOOK 000EF53E `Book1CheapKolbAndTheDragon`, in cell POITundra31 (−21,3). — Skyrim.esm parse — high
- UESP: Kolb & the Dragon is at the Shrine of Akatosh north of Frostfruit Inn, Rorikstead. Matching it to the quest copy is medium. — UESP — medium
- Reward: a few gold (`RewardAmount` default 3). — script — medium

## caught-red-handed.md
- The expansion's FreeformRiften11 adds stages 11/12/13 and objectives "Speak to Haelga" and "Get your Mark of Dibella". The new misc quest "A Strong Nord Woman" (`FreeformRiften11b`): Talk to Tythis / Win the brawl against Tythis / Threaten Tythis / Talk to Svana. — plugin — high
- Features: refuse to shame Haelga, Dibellan Arts (Speech or Agent of Dibella), "Experienced Lover's Comfort", Mark of Dibella necklace (20% better prices), lessons every 24h. — Nexus 65708 (cache 2026-01-26) — high
- **Conflict:** Requiem.esp (load 1599) overrides FreeformRiften11 after CRH (928) with the vanilla-shaped stage list (10,20,30,40,50,60,70,200,250) and 5 objectives (Requiem wording, e.g. "…from Bolli, a Riften fisherman"). No later override exists. The CRH Haelga-route stages are likely missing in LoreRim. — install record comparison + overrides json — medium (records, not play-tested)
- NGCDT - Caught Red Handed - QE Patch is shipped. — install — high
- LoreRim site lists CRH under JaySerpa expansions. — lorerim.com quest-expansions — high

## after-the-civil-war.md
- Quest "Repairing the Cities" (`CWRepairs`). Objectives: 2-day donation drive at the Temple of the Divines, Solitude → wait. Completes on entering an interior after the timer. — plugin — high
- Start: 2–3 days after the war ends (Ulfric or Tullius dead), once you have left Solitude/Windhelm. — Nexus 20668 — high
- Donation tiers: none ~20/21 days, 5k 15/16, 10k 10/11, 15k 5/6, steal 30/31. — Nexus — high
- Patches shipped: CWR_JKTemple_Patch, Snazzy Interiors Solitude AIO CWRepairs patch, RedBag's Solitude CWRepairs patch. — plugins.txt — high

## return-aegisbane.md
- Quest "Return Aegisbane". Objectives: Retrieve the Shatter-Shield family warhammer / Speak to Torbjorn Shatter-Shield about Aegisbane. — plugin — high
- Start via Windhelm guard lines or by carrying Aegisbane to Torbjorn. — Nexus 108242 + plugin — high
- Outcomes: give → leveled reward, Torbjorn relationship 3, he equips it. Sell → 500 coin. Keep → relationship −4. — scripts — high
- LoreRim site lists it. — lorerim.com quest-expansions — high

## reforging-the-past.md
- Quest "Reforging the Past" (`DA07PlayerHasReforged`, start-game enabled). Objectives: Reforge the Razor at any forge / (Optional) Return the Razor to Silus. Journal stages 5/20/25/30. — plugin — high
- Recipe: 3 Daedra Hearts + Razor pieces (item-count conditions) + perks 0xCB413 and 0x5218E, at a smithing forge. — plugin COBJ — high
- Perk names in LoreRim's final load order: 0xCB413 "Daedric Smithing" (Requiem, Requiem Smithing Books Give Perks). 0x5218E "Advanced Blacksmithing" in Requiem but "Arcane Blacksmith" in the later Ordinator - Perks of Skyrim.esp (load 2630, enabled). — install PERK scan — medium-high
- Shrine entry: Master lock, Silus's spare key (SPID + NonSPID esp both enabled), Silus's Journal enabling persuade/intimidate. — Nexus 119502 (cache 2026-02-05) — high
- All optional plugins are shipped, including COTN Dawnstar and Ryn's shrine patches. — plugins.txt — high
- LoreRim site describes it under Daedric Quests. — lorerim.com — high

## vittorias-alternate-wedding.md
- Quest "A Healing Wedding" (`DB05Alt`). Objectives: Attend the wedding / Talk to the guests and newly weds (count) / Listen To Vittoria's speech / Stay or leave the reception. — plugin — high
- Start: Destroy the Dark Brotherhood! complete + Roggvir's execution seen. Courier after ~2 days. Reading the note starts it. — Nexus 62466 + VAW_InvitationNoteScript (DBDestroy.IsCompleted) — high
- LoreRim-specific: the Innocence Lost QE patch is shipped. Its note starts the quest when DB01 stage 199 is done (the "don't kill Grelod" path per the patch page). — patch script + Nexus 72240 — high
- The DB Reformation patch and the optional perk-point file are NOT shipped. — install — high
- Rewards: Vittoria/Asgeir disposition rank 1, rare items in Vittoria's shop. — Nexus — high

## taste-of-death-addon.md
- Quest "A Bitter Aftertaste" (`madNamiraAddonQuest`). Objectives include Search for evidence in Reachcliff Cave; Speak to the Jarl of Markarth; Confront Hogni Red-Arm / Lisbet / Banning; reward from the Jarl. — plugin — high
- Start: kill Eola and read her journal before agreeing to sacrifice Verulus. Three provoke lines (v4). — Nexus 123173 + plugin — high
- Rewards: Jarl 1000 gold. Blackmail 500 each. The ring slips out of the Champion's journal. — scripts — high
- Ring curse (SMI version) is enabled: while carrying the ring, hunger only drops through cannibalism. — plugins.txt + Nexus — high
- The boss plugin (undead Champion + Daedric Parasite) is not shipped. There are no Parasite records; boss meshes are present. — install listing — medium

## bards-college-excavation.md
- Quest "Clear Dead Men's Respite" (`DMRClearQ`): Clear Dead Men's Respite / Inform the bards that the tomb is clear. Repeatable after each 30-day respawn. 300 gold. — plugin + scripts + Nexus 36950 — high
- The camp appears after Tending the Flames. NPCs Rothen and Birinna. Weekend Solitude trips; Moorside Inn after Laid to Rest. — Nexus — high
- LoreRim site (Factions): "After clearing Dead Men's Respite a excavation team will appear with a repeatable quest" — lorerim.com factions — high
- Open Cities is not in the LoreRim install. — install — high

## morihaus-refuge.md
- No player quest. The dungeon "Morihaus' Refuge" (LCTN `JELMorihausRefugeLocation`) has its exterior at Tamriel (−5,−23), next to PeaksShadeTowerExterior (−5,−22). — plugin CELL/LCTN — high
- Peak's Shade Tower is in Falkreath Hold, east of Falkreath. — UESP — high
- The CC SeedQuest flags change 0x119 (vanilla, start-game enabled) → 0x0, so Gift of Kynareth no longer starts. — plugin vs ccbgssse021-lordsmail.esl — high
- The boss wears the Lord's Mail (Absorb Health). Minotaurs. — Nexus 68558 + plugin strings — high
- LoreRim site: removes the existing quest and adds a dungeon. The Lux patch is shipped. — lorerim.com creation-club; plugins.txt — high

## Contradictions
- Caught Red Handed: the mod page and the LoreRim site present the expanded quest as working, but LoreRim's load order lets Requiem.esp's vanilla-shaped `FreeformRiften11` override win over the expansion's added stages 11–13. Both sides are cited in the file. Not play-tested.
- Reforging the Past: the Nexus page says "Daedric & Arcane Blacksmith perks". The Requiem name for 0x5218E is "Advanced Blacksmithing", but Ordinator (later in the load order) renames it "Arcane Blacksmith". The final name matches the mod page.
- The task brief notes that the LoreRim site mentions Beyond Skyrim: Bruma, but the imported site pages contain no "Bruma" text. The install ships only Morihaus' No Bruma version. No contradiction for this unit.
- Taste of Death: the LoreRim site says the addon "adds new… enemies". The boss plugin is absent from the install.

## Gaps (looked for, not found)
- The full list of 12 Leaps of Faith spots. It is behind a spoiler on Nexus, and the live page and schaken-mods mirror both returned HTTP 403.
- The exact Aetherium Forge recipe for Daedric Essence (Forlorn Hope). COBJ records not parsed.
- The exact rewards on the Haelga/Svana branches of Caught Red Handed beyond the Nexus text.
- Whether LoreRim's Requiem/Reqtificator output changes Falion's stats from Seeking the Cure.
- What Morihaus' Refuge changes in Castle Dour.
- The Return Aegisbane leveled reward contents.
- wiki.lorerim.com was not consulted (budget). No LoreRim MCM/INI settings were found for any of these mods.

## Leads
- Play-test or xEdit-check Caught Red Handed in LoreRim. If confirmed broken, flag it for vanilla-changes/side-quests-and-misc.md and requiem-quests.md.
- `LoreRim Artifact Sacrifice.esp` (Aetherium Forge artifacts → perk points) belongs in lorerim-specific-quests.md and legends-of-aetherium.md, and may interact with A Forlorn Hope.
- `Ordinator - Perks of Skyrim.esp` is enabled at load 2630 and renames vanilla perk 0x5218E. That matters for the planner's perk data and naming.
- The Innocence Lost - Quest Expansion is shipped. The vanilla-changes/dark-brotherhood.md writer should cover it, since it gates Vittoria's wedding.
- The Leaps of Faith spot list could come from the LE page (nexusmods.com/skyrim/mods/108535) or the showcase video if it is reachable.
