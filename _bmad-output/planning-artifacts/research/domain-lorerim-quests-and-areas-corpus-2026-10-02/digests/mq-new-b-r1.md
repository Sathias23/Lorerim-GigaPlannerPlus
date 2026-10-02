# Digest — unit mq-new-b (mod-added), round 1

Resumed run. gravewind, sirenroot, legends-of-aetherium, heart-of-the-reach and miasma already existed, were complete and followed the template, so they were kept unchanged. Their claims are listed below from the sources they cite. sleepwalking-into-a-nightmare and demon-of-dream were missing and were researched and written in this run. Plugin records were read with a small ad-hoc Python ESP parser (scratch, outside the repo) against `C:/mods/LoreRim`.

## gravewind.md
- Gravewind has three quests: In the Pines (GRVEMainQuest01), Lost in the Woods (GRVEMainQuest02) and Lost to Oblivion (GRVEDestroyRealm01). Its worldspace is Gravewind — LoreRim install: FalkreathShades.esp (mod v1.2.0.0, accessed 2026-10-02) — high
- The LoreRim gate: `LoreRim Gravewind Start Tweak.esp` locks the Cemetery Homestead door and puts the Cemetery Homestead Key on the Vighar alias of Dark Ancestor (FreeformFalkreathQuest03B) — LoreRim install: LoreRim - xEdit64 Output (file 2025-09-04) — high
- "Get the key from Vighar the vampire (from the Falkreath quest)" — LoreRim site, New Quests (n/a, accessed 2026-10-02) — high
- Dark Ancestor: Dengeir of Stuhn gives it after Some Light Theft; Vighar is at Bloodlet Throne; level 10 — UESP Skyrim:Dark Ancestor (accessed 2026-10-02) — high
- Start northwest of the Roadside Ruins; you are trapped once inside; recommended level "25ish+"; two endings (ruler, or collapse the realm) — Nexus 129582 via meta.ini (nexusLastModified 2024-11-24) — high
- A Scrawled Warning note is placed by GravewindBetterSuitedPatch.esp — LoreRim install (2025-09-04) — high

## sirenroot.md
- One quest, Deluge of Deceit (EVGSirenrootQuest), in evgSIRENROOT.esm; Honrich ruins cells — LoreRim install (mod v1.21.0.0) — high
- Start: Frissa Black-Briar at Elgrim's Elixirs, Riften — LoreRim site, New Quests; Nexus 70917 (2024-09-17) — high
- No level or quest requirements; enemies scale; best for levels 3–15; 2–5 hours; multiple endings — Nexus 70917 — high
- LoreRim ships only visual patches (HD textures, CBBE/HIMBO, Sirene Wispmother, Lux) plus a traversal patch; no start gate — LoreRim install meta.ini / plugins.txt — high
- Siren's Coronet drops on Larelleis' death — web search summary only — low (unverified)

## legends-of-aetherium.md
- One quest, Legends Of Aetherium (aaaLOAQuest); Itharzel cells; boss is the Aetherial Colossus — LoreRim install LegendsOfAetherium.esp (v1.1.3.0) — high
- Start from a Hiring Notice in The Bee and Barb, The Frozen Hearth, Candlehearth Hall or The Bannered Mare, or go to the site south of Riften near Crystaldrift Cave — LoreRim site; Nexus 69807 (2025-01-19) — high
- `Legends of Aetherium - Requiem Patch.esp` cuts the leveled lists to the Ascended items and the Master creatures — LoreRim install (2025-09-04) — high
- Author's recommended level is 10–15+ — thelootist.com (accessed 2026-10-02) — medium

## heart-of-the-reach.md
- One quest, Heart Of The Reach (aaaHOTRQuest); the giver is Gwilym at the Silver-Blood Inn in Markarth; the choice is to heal the heart (remedy) or kill it (poison, Vinillian) — LoreRim install HeartOfTheReach.esp (v1.0.7.0); LoreRim site — high
- Requiem - Heart of the Reach (f1.03) unlevels the mod: level 30 Forsworn bosses, level 55 Spider Queen, level 35 Hagraven — Nexus 76940 via meta.ini (2023-01-25) — high
- The Ring of the Tree is the reward for siding with Gwilym — Nexus 76494 (2024-04-27) / thelootist.com — medium

## miasma.md
- One quest, Miasma (RE01MiasmaQst); the giver is Haj-Xul at The Retching Netch in Raven Rock; the boss is the dragon priest Durvith; rewards include Haj-Xul's Bow and nine Miasma spells, among them the shout Miasmic Breath — LoreRim install Miasma.esp (v1.1.6.1) — high
- Level 20+ — LoreRim site; Nexus 149879 (2026-01-31) — high
- `LoreRim - Miasma Patch.esp` is a Requiem balance and compatibility patch that does not touch the quest record, so there is no start gate — LoreRim install (2025-09-04) — high

## sleepwalking-into-a-nightmare.md
- The quest is "Sleepwalking Into A Nightmare" (aaaMBQuest, Daedric type, run-once, not start-game-enabled) in NightmarePlane.esp. It has objectives at stages 1–330 and journal entries as recorded — LoreRim install NightmarePlane.esp (mod v1.0.9.0, accessed 2026-10-02) — high
- Start: speak to Ralforn at Green-Tip Cabin, northeast of Ivarstead, about his missing wife Gretska — LoreRim site, New Quests (n/a, accessed 2026-10-02); Nexus 141047 via meta.ini (nexusLastModified 2025-02-12) — high
- No LoreRim start gate: no LoreRim plugin overrides the QUST record. The Requiem patch only overrides ARMO, NPC_, COBJ, ENCH, WEAP, LVLI, DOOR, CONT, SPEL, BOOK, AMMO, LVLN, one CELL and one REFR — LoreRim install `Sleepwalking - Requiem Patch.esp` (2025-09-04) — high
- Locations: The Nightmare and Nightmare Of Bereavement (worldspaces); Nightmare Of Anguish, Nightmare of Self Doubt, Awakening Chambers and Hall Of Awakening (LCTN); Green-Tip Cabin (cell) — plugin records — high
- Ending choice after defeating the Lotus. Accept Vaermina's offer: kill Gretska and become her champion ("take my lullaby"). Refuse: wake Gretska, who gives you her father's heirloom — plugin QUST/INFO text — high
- Reward lists: aaaMBLitemBowReward (Vaermina's Lullaby) and aaaMBLitemRingReward (Daybreak's Embrace). The bow goes to the Vaermina ending and the ring to the Gretska ending — plugin records plus dialogue — medium (inference)
- Requiem patch reduces the bow, ring and six helmet lists to the top-tier (…40) item only — LoreRim install — high
- Requiem patch lowers the top-tier ring and helmet enchantments to the level-1 magnitudes (ring regeneration 80 → 30; Heavy Night's Guard 100/30/50 → 50/15/20); the bow's top-tier enchantment is not overridden — LoreRim install — high
- Spells: Detect Sleeping, and Encase In Nightmare (Lesser/standard/Greater); helmets: Night's Guard, Night's Edge, Night Haunter (light and heavy) — plugin records; Nexus — high
- The Enigma patch is 25 Vaermina voice .wav files with no plugin — LoreRim install folder listing; Nexus 33084 (2026-01-25) — high
- The Nightmare Paper Map for FWMF (Nexus 143113) ships a terrain map for aaaMBWorld — LoreRim install meta.ini (2025-02-28) — high

## demon-of-dream.md
- The plugin RuneDreamstrides.esp has no QUST records, so the quest is unmarked. Its LCTNs are Dreamer Dwelling and Realm of Dream — LoreRim install (mod v1.1.0.0) — high
- Start: the Idol of Vaermina in Cragwallow Slope; the note beside it marks the dreamers; recommended level 15+; Greenwall is designed to be the last dream — Nexus 118719 via meta.ini (2024-10-26); LoreRim site — high
- LoreRim moves the Courier dreamer from Riverside Shack to Boulderfall Cave. It disables the Riverside refs, places a new body, bed, notes and dagger in BoulderfallCave01, and retargets the Endless Dark exit ladder's XTEL to a LoreRim load door in Boulderfall — LoreRim install `LoreRim Dreamstride.esp` (2025-09-04) — high
- LoreRim rewrites the note text to list "Boulderfall Cave", but the NTMROnReadMarkMap property MapMarkerCourier still points at Skyrim.esm REFR 000ECF4F (x≈121265, y≈6841, next to the Riverside Shack refs), so the map marker probably still points to Riverside Shack — install records — medium
- The Riverside Shack Key to Greenwall Cell is disabled in LoreRim (its XESP enable-parent was removed) and has no replacement; Hroldar's key remains — install records — medium
- Evolving Locations - Riverside Shack is enabled in LoreRim's modlist, and the mod page names it as a conflict, which is the probable reason for the move — modlist.txt; Nexus 118719 — medium (inference)
- The Throne of Trade is reworked. LoreRimDreamstrideBenchScript adds `DA16SkullDreamCount` as "Staff of Corruption Charges" when you sit and writes the remainder back when you get up. New prices: Conjure Shadow Knight 10, Warm Slumber 15, Conjure Lesser Shadow Omen 15, Night Terror 15, Scroll 5. Seven Frostbitten Dreams (IceBloomNightmare.esl) tomes cost 15–30 and are hidden if the spell is known or the tome is carried. Six item swaps are removed — LoreRim install script source + COBJ records — high
- DA16 is Waking Nightmare — official-quests.json import — high. The Skull of Corruption collects dreams from sleepers — UESP Skull of Corruption (accessed 2026-10-02) — high
- Renames: Conjure Loyal Knight → Conjure Shadow Knight; Conjure Lesser Omen → Conjure Lesser Shadow Omen — LoreRim install — high
- Location holds: Cragwallow Slope is in Eastmarch, southeast of Windhelm; Autumnshade Clearing is in the Rift, north of Goldenglow; Fort Greenwall is in the Rift and has Greenwall Cave; Boulderfall Cave is in the Rift, northwest of Riften, with necromancers in vanilla — UESP pages (accessed 2026-10-02) — high

## Contradictions
- **Demon of Dream, Courier location.** The Nexus page (meta.ini cache, 2024-10-26) says Riverside Shack. LoreRim's `LoreRim Dreamstride.esp` moves the body to Boulderfall Cave and rewrites the note. The LoreRim site New Quests page says nothing about it. The install wins for what ships. Inside the install, the note text says Boulderfall Cave, but its map-marker script still targets the Riverside Shack marker.
- **Demon of Dream, spell names.** The mod and Nexus say "Conjure Loyal Knight" and "Conjure Lesser Omen". LoreRim renames them "Conjure Shadow Knight" and "Conjure Lesser Shadow Omen". The tome's inner text still reads "Conjure Straw Knight".
- **Sleepwalking, reward power.** The mod's leveled rewards scale by level. LoreRim always gives the top-tier items, but with level-1 enchantment strength. Not a contradiction in sources, but the mod page's implied scaling no longer applies.
- (From earlier files) The Heart of the Reach mod page recommends level 10–15+, but in LoreRim the Requiem patch sets static enemy levels of 30–55.

## Gaps (looked for, not found)
- How the Sleepwalking helmet is chosen (Hollow Essence Gem plus Essence items). Its mechanism is not documented in the sources read.
- Which Sleepwalking ending awards which item. The bow and ring assignment is inferred from dialogue; the stage scripts were not decompiled.
- Whether the Courier's Greenwall key has any replacement in LoreRim. None was found in `LoreRim Dreamstride.esp`.
- Exact Requiem stat changes for the Demon of Dream NPCs, weapons and spells, and for the Sleepwalking NPCs. Not itemized.
- No recommended level for Sleepwalking in any source.
- wiki.lorerim.com was not consulted (budget: 6 web calls used in this run).

## Leads
- Decompile the NightmarePlane.esp quest fragment scripts (stages 250/330) to confirm which ending gives Vaermina's Lullaby and which gives Daybreak's Embrace.
- vanilla-changes/daedric-quests.md should mention that LoreRim's Demon of Dream rework spends Skull of Corruption dream charges (DA16SkullDreamCount).
- areas/the-rift-and-riften.md: Boulderfall Cave now holds a Demon of Dream dreamer in LoreRim.
- areas/eastmarch-and-windhelm.md: Riverside Shack is overhauled by Evolving Locations, and the Demon of Dream refs there are disabled.
- Frostbitten Dreams Magic (IceBloomNightmare.esl, Nexus 108653) tomes are sold only through the Throne of Trade. That may matter to spell-acquisition questions.
