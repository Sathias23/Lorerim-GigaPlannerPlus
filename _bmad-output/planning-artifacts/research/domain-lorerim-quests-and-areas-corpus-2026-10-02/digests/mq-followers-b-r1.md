# Digest — mq-followers-b (r1)

Unit: mq-followers-b (mod-added). Accessed 2026-10-02 unless noted. "Install" = C:/mods/LoreRim (profile Default) and the unit's imports/mods/*.md derived from it.

## serana-dialogue-expansion.md
- SeranaDialogueExpansion.esp (v1.2.22.0) adds side quest "From Arena to Oblivion" (SDE_TheElderScrolls): Ask Urag-gro-Shub for books; give Serana "A Brief History of the Empire V.4", "Where were you when the Dragon Broke?", "The Battle of the Red Mountain", "The Oblivion Crisis"; Talk to Serana — install plugin records — high
- Unlock: after completing both "Beyond Death" and "Alduin's Wall"; rewards: skill increases (Sneak, Light Armor, Conjuration, One-Handed), enchanted ring, relationship rank Ally — Nexus 121920 via meta.ini cache (Romance ESL folder; nexusLastModified 2026-01-28) — high
- Romance ESL (v1.0.21.0) adds "The Bleeding Flower", "Solitude in Company", "At the Tempo of our Heartbeats", "Mirrors of Youth", "Ambivalence" with objectives/journals as written — install plugin records — high
- Romance trigger timing inferred from journal: Bleeding Flower before reaching Serana's home; Mirrors of Youth before Ancestor Glade (after Elder Scrolls) — install records + Nexus troubleshooting note — medium
- Solitude in Company reward 500 septims each from Elisif; Kilkreath Temple thief = corrupt Solitude Guard + 2 bandits — install journal — high
- LoreRim uses SDE ("not to be confused with SDA"), keeps original VA — LoreRim site Followers page (lorerim.com/guides/world/followers, n/a) — high
- Both plugins enabled; no LoreRim patch masters them — install plugins.txt + master scan — high
- Known issues: Go to Bed (Bleeding Flower), Become High King (Elisif), `SetStage SDE_R004 5` fix — Nexus cache — high (as author claims)

## follower-dialogue-expansions.md
- 24 FDE mods in "Gameplay - Followers" + Olfina in "Gameplay - Lines Expansions & Dialogue", plus banter patches (Aela/Brelyna/Jenassa × Auri/Inigo/Lucien/Remi, Illia–Inigo, Mjoll–Remi) — install modlist/brief — high
- Journal quests only in: Faralda ("With Love, Eilonwy, Part 1/2"), Erik ("Erik the Shield Brother"), Mjoll ("Aerin the Man"), Jenassa ("Shadows of the Past"), Fura ("Blood Ties", "Bloodmouth", plus test record "Kindred Judgment" DLC1VQ08Test) — install plugin records — high
- Faralda Part 2: Merandil is Thalmor; kill him or let him take Faralda to Alinor; meet at Lost Prospect Mine; letter via Vekel the Man (Ragged Flagon) — install records — high
- Faralda recruit after "Containment" + research-notes quest; FDE Faralda overrides FreeformWinterholdCollegeA "Research Thief" — Nexus 155510 cache + override map — high/medium (link between the two is inference)
- Fura recruit: join Clan Volkihar, finish "The Bloodstone Chalice", talk after Harkon's Moth Priest speech; Castle Volkihar — Nexus 165839 cache — high
- Bloodmouth: Vampire's Seduction on Legate Cipius (Whiterun) → Cold Rock Pass; spare or let Death Hounds kill — install records — high
- Recruitment table (Camilla: Golden Claw + love triangle + Level 10 + persuade Lucan; Ysolda: Sleeping Tree Sap + mammoth tusk; Olfina: Missing in Action conditions, leaves if you join Imperials; Saadia: In My Time of Need in her favor; Lisette: Tending the Flames; Sapphire: Loud and Clear; Eola: Taste of Death for Namira; Aranea: Black Star for Azura; Illia: Repentance; Rayya: Thane of Falkreath; Jordis: Thane of Haafingar; Lydia: Dragon Rising; Brelyna: Brelyna's Practice; Aela: after Companions; Jenassa/Marcurio 500 gold) — Nexus caches (2026-01-11 → 2026-07-06) — medium-high
- LoreRim site describes expanded vanilla followers generally, no FDE names — LoreRim site Followers — high
- No LoreRim patch masters any FDE quest plugin — install master scan — high
- FDE Elisif the Fair (v1.0.8.0) and FDE Mjoll Auri patch also installed, outside this unit — install modlist — high

## auri-song-of-the-green.md
- Quest "Song of the Green" (018AuriFriendQuest): take Auri to Moss Mother Cavern, Eldergleam Sanctuary, Ancestor Glade, Bloated Man's Grotto, Shadowgreen Cavern; Follow Auri; Talk to Auri; final journal "Auri opened up to me about why she came to Skyrim" — install records — high
- Location: Falkreath Hold, Auri's Pod map marker — Nexus 11278 cache (2025-11-27) and LoreRim site — high
- Completing the friend quest sets AuriFriendship=4 (Friend) and starts 018AuriRomance stage 1; Bosmer culture talks set 3 (friendship path) or 1 (enemy path); romance states 5/6, breakup → 4 — install scripts (.psc) — high
- LoreRim "Auri Patch.esp" (xEdit output) overrides only Auri's NPC record (masters incl. Requiem, Pure Auri Replacer) — install record dump — high (contents not diffed)
- Add-ons installed: VIGILANT commentary, Inigo banter ESL, Snazzy Items, Unique Pod, Pure Auri Replacer, Thistlefoot fix, Auri Reacts To Your Music, Wintersun patch, Lux/Lux Orbis/Nature of the Wild Lands/RTDocks/occlusion patches, FDE Auri banter — install modlist + master scan — high
- No vanilla marriage; two inventories; bone arrows from Drunken Huntsman — Nexus cache — high

## taliesin-thalmors-shadow.md
- Quest "The Thalmor's Shadow" (00TallyMeet, start-game-enabled): Find the hidden Statue of Talos; Talk to Taliesin; Give Taliesin a potion; heal (recruit) or let him bleed out — install records — high
- Location: hidden statue of Talos near Lake Illinalta; VA Pat Mahoney — LoreRim site Followers — high
- Directions: from the three Guardian Stones follow the path up, right at the fork — dynamite124 Tumblr (mod author), 2023-06-19 — medium
- Romance after "Diplomatic Immunity" + discussing his upbringing; cabin near Half-Moon Mill — dynamite124 Tumblr mod post (via AI page summary) — medium-low
- LoreRim "Taliesin Patches.esp" overrides Taliesin NPC/gear (Berwhale the Avenger, Taliesin's Robes, Wolf Armor, Skjor's Dagger…), horse Naomi, NPCs Nelarel/Ophelia, Valtheim Towers LCTN — install record dump — high (field changes not diffed)
- Environs - The Shrines of Talos - Taliesin Patch enabled — install plugins.txt — high
- Aurea Umbra: LoreRim ships v1.0.0.0 (2024 Vanilla Body file); author's current v2.0 (2026-03-12) — install meta.ini + Nexus search snippet — medium

## the-frozen-heart.md
- 4 quests: "The Frozen Heart", "Seeking Out Shards", "A Book for Othriel", "Another Book for Othriel"; locations Crag Spire Wastes, Othriel's Cabin, Whispering Walls, Frostskarn Vault, Wisp Light Crevasse, Whispering Walls Catacombs, Labyrinthine Passages, Gallery of Mirrors — install records — high
- Start: buy Snow Elf Mirror (Labyrinthian Passages) at Belethor's General Goods; read; Slow Time; equip — Nexus 159911 cache (2026-02-03) + LoreRim site (verbatim) — high
- Mirror pickup sets main quest stage 100; mirror refuses to work without Slow Time effect; string "Snow Elf Mirrors will only activate with the use of Slow Time." — install scripts/strings — high
- Requires ≥1 word Slow Time + ≥1 word Fire Breath (FOMOD option removes the know-requirement, not the need) — Nexus cache — high; LoreRim's FOMOD choice — unknown
- Walkthrough details (maze answers, pillar code 1189, shard locations, Rimeweld from 5 Stalhrim + Armorer's Challenge, Gallery portals to discovered cities) — Nexus cache — high
- LoreRim patch: Othriel fixed level 50 (was PC-level ×1.0) with ~49 added perks + 3 spells; Rimeweld armor Heavy→Light, AR Cuirass 275/Shield 165/Circlet 110/Gauntlets 82/Greaves 83, Pauldrons → clothing type 0 AR; swords dmg 14→78, value 1000→1800; Seeking Out Shards gets condition GetStage(ksws07MainQuest) ≥ 100 — install record diff — high
- Belethor's General Goods is in Whiterun — UESP — high
- Vanilla word walls: Slow Time (Hag's End, Korvanjund, Labyrinthian), Fire Breath (Throat of the World via Paarthurnax, Sunderstone Gorge, Dustman's Cairn) — UESP (AI-summarized) — medium

## book-of-love-fastreds-awakening.md
- Quest "The Book of Love - Fastred's Choice" (TTFA_JourneyQuest) objectives: Suggest an alternative to Fastred; Convince Fastred's parents; Travel with Fastred; Talk to Fastred; Return to Ivarstead; Speak with Fastred about her future; Accompany her to tell parents / Bassianus and Klimmek; Return to Dinya Balu — install records — high
- Starts when vanilla t02 hits stage 20; aborts to stage 200 if t02 hits 30 before branch stage 90 — install script TTFA_MainController.psc — high
- Outcomes: romance (vanilla marriage), friendship follower, or return to suitors; Bassianus → Riften, Klimmek stays — install journal + Nexus 170043 cache (2026-01-19) — high
- No config.json shipped → fallbacks 6/6/12/24 game hours (48 h total) — install TTFA_Utils.psc + folder listing — high
- Overrides 4 Ivarstead scene quests — install override map — high

## Contradictions
- Fastred timing: mod page says conversations 1–2 every 12 h and 3–4 every 24 h (48 h total); script fallbacks (used in LoreRim, no config.json) are 6, 6, 12, 24 h (also 48 h). Both cited; file states the script values.
- Serana Dialogue Expansion main folder's meta.ini has no cached description while the Romance ESL folder (same modid 121920) does — not a contradiction of content, just provenance.
- Aurea Umbra: LoreRim ships v1.0.0.0 while author's page lists v2.0 (2026-03-12) — version lag, not a conflict.

## Gaps (looked for, not found)
- Exact dialogue conditions that start SDE romance quests and Auri's "Song of the Green" (not in scripts; would need CK/xEdit INFO condition decoding).
- Which Frozen Heart FOMOD option LoreRim chose (shout-knowledge requirement on/off).
- Field-level contents of LoreRim "Auri Patch.esp" and "Taliesin Patches.esp".
- Taliesin's live Nexus page (HTTP 403) and his later personal quests; wiki.lorerim.com unreachable (DNS failure).
- Whether LoreRim/Requiem changes follower hire prices (Jenassa/Marcurio 500 gold) or word-wall placement for Slow Time / Fire Breath.
- Whether FDE Fura's "Kindred Judgment" (DLC1VQ08Test) is ever player-facing.

## Leads
- FDE Elisif the Fair (modid 167954, v1.0.8.0) and FDE Mjoll Auri patch are installed but in no unit — may carry quests.
- Decode INFO/QUST conditions with xEdit for SeranaDialogueExpansion - Romance.esp and 018Auri.esp to give exact triggers.
- Diff Taliesin Patches.esp / Auri Patch.esp against originals for Requiem stat changes (follower levels).
- Check LoreRim word-wall changes (e.g. dragons/word-wall mods) for Slow Time and Fire Breath availability — relevant to Frozen Heart access.
- LoreRim site Followers page (lorerim.com/guides/world/followers) also covers Katana, Inigo, Lucien, Remiel, Gore, Welkynar Knight, ZEUS — useful for sibling units.
