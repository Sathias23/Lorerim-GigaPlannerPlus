# Digest — vc-thieves (round 1)

Unit: vanilla-changes / Thieves Guild. Resumed attempt: the target file did not exist and no digest existed, so everything was written fresh.
File written: `lorerim-agent/knowledge/quests/vanilla-changes/thieves-guild.md`

## thieves-guild.md — load-bearing claims

### Baseline
- The vanilla questline has 12 main quests, in this order: A Chance Arrangement, Taking Care of Business, Loud and Clear, Dampened Spirits, Scoundrel's Folly, Speaking With Silence, Hard Answers, The Pursuit, Trinity Restored, Blindsighted, Darkness Returns, Under New Management — UESP Skyrim:Thieves Guild (faction) (UESP, n/a, accessed 2026-10-02) — high
- Brynjolf recruits you in Riften's market by day or the Bee and Barb by night, which starts A Chance Arrangement — UESP faction page (accessed 2026-10-02) — high
- Radiant jobs: Delvin gives Numbers, Fishing and Bedlam; Vex gives Burglary, Shill, Sweep and Heist. Five jobs in a city unlock that city's reputation quest — UESP faction page plus a UESP search snippet (accessed 2026-10-02) — high
- Vanilla trophy thresholds are 5, 15, 25, 35, 45, 55 and 75 jobs, plus the safe at 125 — UESP faction page (search snippet) (accessed 2026-10-02) — high (matches the "old amounts" on the Less Tedious Nexus page)
- Under New Management has no giver. It starts automatically after Darkness Returns plus all four reputation jobs. Rewards are Guild Master's Armor, the Tribute Chest Key and the Amulet of Articulation — UESP Skyrim:Under New Management (accessed 2026-10-02) — high
- In Darkness Returns (giver Karliah), the Skeleton Key is returned to the Ebonmere and you choose Agent of Stealth, Subterfuge or Strife. You can change the choice at the Sepulcher (24h cooldown). Afterwards the Shrine of Nocturnal appears in the Cistern — UESP Skyrim:Darkness Returns (accessed 2026-10-02) — high

### Start gates
- No LoreRim delayed start or extra prerequisite applies to the Thieves Guild. The LoreRim site's Factions section mentions none. The install has no Delayed Quest Starts or Sensible-Prerequisite mod for any TG quest (only CC Fishing, Forsworn Conspiracy, House of Horrors, Mind of Madness, Taste of Death, Bleak Falls, Dawnguard, Undeath, Wyrmstooth). No mod overrides TG00 — LoreRim site factions.md + install mod folder list + vanilla-quest-overrides.json (accessed 2026-10-02) — medium (absence of evidence)
- Gray Cowl of Nocturnal requires completing the TG questline and then stealing an item — LoreRim site new-lands.md (accessed 2026-10-02) — medium

### LoreRim changes
- Less Tedious Thieves Guild replaces TGREnablerHandlerQuestScript.pex; the script ships inside `Less Tedious Thieves Guild.bsa`. New thresholds: Candlestick 5, Horn 10, Ship 11, Urn 13, Goblet 15, Pitcher 17, Flagon 20, Safe 25. The author warns it may not work if more than 5 jobs were already done — Nexus 6581 via meta.ini (nexusLastModified 2017-07-26, cache 2026-01-11) + install BSA listing — high
- LTTG.esp loads at position 412, after USSEP at 88, so its BSA script should win over USSEP's TGREnablerHandler changes — install profiles/Default/loadorder.txt — medium (BSA precedence inferred from plugin order)
- The LoreRim site says LTTG cuts the "125 job requirement" to 25 and that GG's HQ "gets better as you progress through the faction's main story" — LoreRim site factions.md (accessed 2026-10-02) — high. (LTTG affects only trophies and the safe; Guild Master still needs the 4 reputation quests. See Contradictions.)
- GG's Thieves Guild Headquarters v1.3.1.0 reworks the Cistern (not the Ragged Flagon), rebuilding it dynamically with TG progression. It gives Mercer an office and Brynjolf a room, adds a dedicated Nocturnal-reward room, an alchemy lab, a training area and a warehouse. New NPCs: Smell-Fish (Khajiit speechcraft trainer, follower/spouse), Smells-like-Guar (Argonian misc fence), Plants-Dream (Argonian apothecary) — Nexus 64018 via meta.ini (nexusLastModified 2024-08-14) — high. Plugin EDIDs show PlantsDreams, SmellsLikeGuar and FishSmell — install plugin strings — high
- Nocturnal's Favor.esp (Nexus 128928, "intended for LoreRim") adds a scene-type dialogue topic in quest 0x021555 (TG09 Darkness Returns) with the line "Farewell, Nightingale. See to it the Key stays this time, won't you?". Its fragment adds the ability "Nocturnal's Favor": "When you successfully pickpocket someone, you deal 10% more against them for a short while." — install plugin records + scripts (nexusLastModified 2025-04-21) — high for the effect and quest; medium that the speaker is Nocturnal
- Uncanny Luck ships as Option 2 (installationFile "Uncanny Luck Option 2 - Permanent Ability"). It grants the permanent ability "Uncanny Luck" after Darkness Returns and the Skeleton Key return, raising the max pickpocket chance from 90% to 100% — install meta.ini + plugin text + Nexus 130008 via meta.ini (nexusLastModified 2024-12-02) — high. It appears in the LoreRim changelog V2.2.11 "Added" — GitHub biggie-boss/LoreRim Changelog.md (accessed 2026-10-02) — high
- Nightingale Powers Redone (NightingalePowersRedone.esp, enabled) reworks the three powers:
  - Stealth: crimes forgotten for 10s, bounty reset, pre-combat only.
  - Strife: 2s paralysis plus damage proportional to the caster's missing attributes, half absorbed.
  - Subterfuge: 30s frenzy, plus caster +20% speed and invulnerability for 30s that breaks on attack.
  Source: Nexus 144539 via meta.ini (nexusLastModified 2025-03-15) — high (author's page)
- Stuff of Shadows (Nightingale Stuff.esp) replaces Trinity Restored's "Nightingale Armor Stone" with a Nightingale Armory Chest that works as storage afterwards. It also adds a 3D Nightingale stone, fixes the Twilight Sepulcher shaft reappearing after a cell reset, and changes a small piece of TG08A objective text — Nexus 130481 via meta.ini (nexusLastModified 2024-10-25) — high
- Wintersun - Faiths of Skyrim.esp (from "Wintersun and Daedric Shrines replacer") overrides TG09 and TGNightingalePowerHandler, adding script properties WSN_Temptation_Global_Nocturnal and WSN_Peryite_Quest — install QUST record strings — high for the fact; the gameplay effect is unknown (low)
- Vittorias Alternate Wedding overrides TGTQ02 The Dainty Sload, adding DB05Alt and DB05 properties to the quest script. The objectives keep their vanilla text (Speak to Erikur / Acquire Balmora Blue / Plant the Balmora Blue / Return to Erikur) — install record strings — high for the fact; medium for the "compat hook" interpretation
- Respectful Ravyn adds dialogue only: threaten Ravyn with the Brotherhood, use Guild Master authority, or as a DB member threaten or kill him — Nexus 143950 via meta.ini (nexusLastModified 2025-03-08) — high
- Revealing Rune adds the quest "Rune's Scope" (Rune01): "Search along the coast of Solitude for a clue to Rune's past" / "Return to Rune". Start by asking Rune about his name — imports/mods/revealing-rune.md (plugin records + Nexus 120935) — high
- [LoreRim] Thieving XP (LoreRim-made) gives Experience-framework XP for pickpocketing (scaled by item value, with min/max, once per target via a "pickpocketed" spell) and for unlocking locks (flat XP by lock tier) — install script source — high
- Big Tweaks.esp (LoreRim - xEdit64 Output) gives Thieves Guild Armor 10% per piece harder to detect, Guild Master Armor 20% per piece, Blackguard's Armor 15% per piece. The Nightingale set bonus "Nocturnal's Embrace" is "move quicker and more magic resist (2% per piece)". A TG passive text reads "Anywhere gems might be found, members of the Thieves Guild always seem to find a few more. Also gain 5% more armor penetration while sneaking." — install plugin strings — high for the text; medium for which record carries the passive
- Bug-fix-only overrides: USSEP or the Cleaned Masters override TG01, TG03, TG05, TG06, TG07, TG08A, TG08B, TGCrown, TGLeadership, TGRGF, TGRNT and TGTQ02–04. CFTO also touches TGRGF — vanilla-quest-overrides.json — high

## Contradictions
- **Severity of the job requirement:** The LoreRim site says LTTG removes the "125 job requirement for the full experience". Per UESP, 125 jobs only ever gated the safe and trophies. Guild Master (Under New Management) needs 4 reputation quests (5 jobs per city, so 20 jobs minimum), which LTTG doesn't change. This isn't a real conflict, but players may misread the site. The file states both.
- **Nightingale armor bonus wording:** LoreRim changelog V2.2.11 says "twice that much more resistance to magic (1/2% per piece)". The installed Big Tweaks.esp says "<mag%> more magic resist (2% per piece)". The file follows the install text.
- **GitHub changelog version:** The GitHub Changelog.md (main) tops out at V2.2.11, and a separate branch is titled "CHANGELOG FOR V5.0". The installed LoreRim version was not determined, so the changelog may lag the install.

## Gaps (looked for, not found)
- The exact speaker and trigger of the Nocturnal's Favor line (scene topic in TG09; the scene record was not decoded).
- What Wintersun's TG09 / Nightingale Power Handler properties actually do in game.
- The exact behavior of Vittoria's TGTQ02 script change (not decompiled).
- Display names of GG's HQ NPCs in the plugin (NPC records probably compressed; names taken from the Nexus text).
- Any LoreRim MCM setting affecting TG radiant counts (none found in "LoreRim - MCM and INI Settings" by grep).
- wiki.lorerim.com page for the Thieves Guild (not found in search).
- Whether Requiem or LoreRim changes fPickPocketMaxChance in a way that interacts with Uncanny Luck.
- Which record the "gems / 5% armor penetration" TG passive description belongs to.

## Leads
- Decode the Nocturnal's Favor DIAL/INFO (SCEN topic) and TG09 scene in xEdit to confirm the speaker.
- Check Wintersun's Nexus 22506 documentation for "Temptation" mechanics for Nocturnal/Peryite.
- Check GG's Thieves Guild HQ for scripted stage-based enable states (which TG stages unlock which rooms).
- The Nightingale Powers Redone description was truncated after Agent of Subterfuge. The full page may list power-changing or MCM options.
- Check whether "Thieves Guild Requirements SE" (Nexus 33256) ships under another folder name — not found by name in the install.
