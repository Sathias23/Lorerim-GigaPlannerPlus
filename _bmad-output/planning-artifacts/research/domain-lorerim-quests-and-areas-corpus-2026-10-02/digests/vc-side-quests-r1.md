# Digest — vc-side-quests (r1)

Unit: vc-side-quests (vanilla-changes). Resumed attempt: the target file did not exist, so it was written from scratch. The digest is new.
File written: `lorerim-agent/knowledge/quests/vanilla-changes/side-quests-and-misc.md`

## side-quests-and-misc.md — load-bearing claims

- The Forsworn Conspiracy delay mod (`The Forsworn Conspiracy - Delayed Start.esp`) holds GLOB `ANDR_MS01_LevelReq` = 40.0 (bytes `00 00 20 42`) — LoreRim install, plugin record (Delayed Quest Starts - Forsworn Conspriracy v1.3.0.0, accessed 2026-10-02) — high
- `LoreRim - Global Modifiers.esp` (LoreRim - xEdit64 Output) overrides `ANDR_MS01_LevelReq` = 20.0. The plugin is enabled at plugins.txt line 3358 and loads after the DQS plugin (line 2624), so **the Forsworn Conspiracy starts at level 20 in LoreRim** — LoreRim install, plugin record + profile Default load order (accessed 2026-10-02) — high
- The same Global Modifiers plugin also sets ANDR_HouseOfHorrorsLevelReq, ANDR_DA11_LevelReq (Taste of Death), ANDR_DA15_LevelReq (Mind of Madness), DA02/DA09/DA10/DA14MinLevel to 20, DLC2EbonyWarriorMinLevel_KRY to 40, and DLC1VQMinLevel to 30 — LoreRim install (accessed 2026-10-02) — high (lead for daedric/dawnguard/dragonborn units)
- Forsworn start procedure: reach the level, ask Kibell "What do you know about Markarth?" then "Bent a few folks' arms the wrong way?", and enter Markarth between 8am and 8pm. Margret is not present before the attack — Nexus 72751 via meta.ini cache (cache 2026-01-11) — high
- Vanilla Forsworn Conspiracy: triggered by the market attack (Weylin/Margret) or Eltrys's note; no level requirement — UESP (accessed 2026-10-02) — high
- Only five Delayed Quest Starts modules ship (Forsworn Conspiracy, House of Horrors, Mind of Madness, Taste of Death, CC Fishing); there is no Blood on the Ice/Meeko/Black Star/Waking Nightmare delay — `C:/mods/LoreRim/mods` folder listing — high
- TiE Settings Loader settings.ini: WolfQueenAwakened 10, UnfathomableDepths 14, KilltheGiant 22, DungeonDelving 20, KilltheVampire 10, GrimseversReturn 14, Deathbrand 36, EbonyWarrior 40, BoethiahsCalling 30, etc. The TiE README says defaults are vanilla — LoreRim install (accessed 2026-10-02) — medium (the in-game MCM state could differ)
- Vanilla levels: Wolf Queen Awakened 10, Unfathomable Depths 14, Ebony Warrior 80 — UESP (accessed 2026-10-02) — high
- The Choice is Yours: rumors and forced encounters no longer start quests. Its overrides include MS09, MS10, MS14, FreeformRiften01/20, Soljund's Sinkhole, Wizard Duel, A Lovely Letter, and Buy Dwarven artifact. Forsworn Conspiracy "must meet at night"; Missing In Action "must visit home at night" — Nexus 3850 via meta.ini + plugin overrides — high
- Silence is Golden: lie to Lucan, keep the claw, get no reward. Buyable Golden Claw: 500–1,500 gold from Lucan or Camilla. Golden Claw - More Choices is the compatibility patch — Nexus pages via meta.ini; LoreRim site Quest Expansions — high
- A Lovely Letter Alternate Routes: refuse both men; dialogue hidden if Camilla is your lover; expose both by pickpocketing back the first note — Nexus 21916 via meta.ini — high
- Save the Icerunner: four return conditions; evidence route via Ahtar → Broken Oar Grotto → Captain Aldis; the crash route makes Jaree-Ra a follower (Rogue, max level 50) or Jaree-Ra/Deeja a spouse; Istar Cairn-Breaker substitutes for Aldis — Nexus 34681 via meta.ini — high
- Seeking the Cure renames VC01 to "Seeking A Cure". Falion's ritual fails (incurable). Start via Urag or Falion's house; a 3-day wait; no Black Soul Gem sold; option to kill Falion. The COTN Morthal patch is installed — Nexus 85923/89174 via meta.ini; override name in brief; LoreRim site Main — high
- Heart of Dibella QE: become Thane of the Reach and sleep → courier letter; or help 5 people in the Reach; the Madanach favor resolves it if you sided with the Forsworn; blessing can be customized — Nexus 94863 via meta.ini — high
- Caught Red Handed QE adds misc quest "A Strong Nord Woman" (FreeformRiften11b): Talk to Tythis / Win the brawl against Tythis / Threaten Tythis / Talk to Svana — plugin records — high
- Infiltration QE: side with Stalleo or Brurid, save everyone or kill everyone; the lever can no longer be used from outside — Nexus 114054 — high
- Search and Seizure QE: four endings, including warning Ogmund — Nexus 67066 — high
- Nilheim QE: hear Telrav's pitch, intimidate him for gold, bandits aggro on approach, Telrav's journal — Nexus 53792; the No Infighting Bandits fix — Nexus 155217 — high
- Toying With The Dead mQE: promoted to a side quest; optional report to the Jarl of the Pale (Skald/Brina) before giving the journals to Vekel, for gold and Thane progress — Nexus 124659 — high
- Collecting the Edda: restored cut quest from Giraud after Tending the Flames; five bards; leveled gold plus Speech bonus — Nexus 52081 — high
- Dragon Hunting: Blessing of the Blades after Rebuilding the Blades (+25% vs dragons, 8h); Dragon Hunting repeatable every 24h; Dragon Research needs Dragon Blood/Bile/Rheum (Infusion: 10% less damage from dragons) — Nexus 99193 — high
- Finding Derkeethus: the vanilla quest has no in-game name (official-quests.json name null); the "Extracting an Argonian" title comes from UESP per the mod author — official-quests.json + Nexus 19550 — high
- Saadia to Iman renames Saadia after her reveal (MS08) — Nexus 172364 — high
- IDE Thalmor expands the Forelhost Thalmor impostor plot (Siege on the Dragon Cult) with new paths and endings — Nexus 168432 — medium (marketing text)
- All key plugins are enabled in profile Default (plugins.txt) — LoreRim install — high

## Contradictions
- The brief (vanilla-quest-overrides) names DarkwaterCrossingDerkeethusRescueQuest "Extracting an Argonian", but official-quests.json has name null and the Finding Derkeethus author says the title exists only on wikis. The file uses the wiki name with this caveat implied.
- The Delayed Quest Starts mod page says the Forsworn Conspiracy default is level 40; LoreRim's Global Modifiers sets 20. These are not contradictory, but an agent quoting the Nexus page would be wrong. The file states 20 and explains why.
- LoreRim site (Main) and Seeking the Cure agree that the cure fails. No contradiction found with the site for this unit.

## Gaps (looked for, not found)
- What Requiem changes in BQ01–04, WE100Obj*, FreeformIvarstead04, FreeformRiften10/11/13. Its import file lists only overrides, with no description. Unverified.
- What More to Say changes in FreeformWinterholdA "A Bad Trade" specifically (it adds Birna's Shipment; the override's exact edit is not documented).
- Whether the TiE settings.ini values are LoreRim-tuned or the loader's shipped defaults (timestamps are install-time). Ebony Warrior 40 is corroborated by Global Modifiers.
- UESP Missing in Action page (URL 404 with "in" lowercase); the baseline was taken from the Side Quests list.
- The Choice is Yours article 52 (exact per-quest changes) was not fetched.

## Leads
- Daedric unit: Global Modifiers sets House of Horrors / Taste of Death / Mind of Madness delays to level 20 (mod defaults 35/40/35), and DA02/DA09/DA10/DA14 MinLevel to 20.
- Dawnguard unit: DLC1VQMinLevel 30; vampire attacks disabled (999).
- Dragonborn unit: Ebony Warrior level 40; Mr. Ebony... Get Lost; TiE Dragonborn min level 25.
- Thieves Guild unit: Don't Hate Me - Taking Care of Business; Uncanny Luck (100% max pickpocket after Darkness Returns); Deceive Degaine.
- Thane/favors unit: Toying With The Dead gives Pale Thane progress; Heart of Dibella alt-start keyed on Thane of the Reach; TiE Kill the Giant 22.
- Requiem unit: decode Requiem.esp QUST overrides for bounty/treasure-hunter quests.
