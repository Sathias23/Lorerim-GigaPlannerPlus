# Digest — vc-main-quest (round 1)

File: lorerim-agent/knowledge/quests/vanilla-changes/main-quest-and-alternate-start.md

## Load-bearing claims
- A new game starts in an isolated cell that resembles a room in The Resting Pilgrim. You talk to the little dragon on a lantern to pick a start. If you ignore it or use `coc` to leave, you get the "Default" start. — Alternate Perspective Nexus 50307 via meta.ini cache (Scrab/KrisV777, nexusLastModified 2025-12-10, accessed 2026-10-02) — high
- The main quest starts at Helgen's inn. The innkeeper has the option "I'd like to rent a room. (Start Intro (10 gold))", and the intro plays the next time you sleep there. — AP Nexus cache (same) + LoreRim site Main Quests (lorerim.com, n/a, accessed 2026-10-02) — high
- The menu's Dragonborn option starts the main quest immediately (LoreRim: "not recommended"). With any other start, Helgen is not destroyed. — LoreRim site Main Quests — high
- The installed Dragonborn sub-options are Vanilla Start, Helgen Keep (Start), Helgen Keep (End) and High Hrothgar. The full base menu is Regular (Inn) with 17 inns, From Overseas, Wanted Criminal, Left for Dead, Shipwrecked, My own Home, Vampire, Werewolf, Forsworn (Druadach Redoubt), Guilds and Dragonborn. — LoreRim install: AlternatePerspective.json + English translation strings in AlternatePerspective0.bsa — high
- The LoreRim FAQ says you can go behind the Helgen inn and talk to a dragon to skip the intro, and that dragons spawn only as the main quest progresses (e.g. via Bleak Falls Barrow). — lorerim.com/support/faqs (n/a, accessed 2026-10-02) — medium (the wording is loose)
- The innkeeper is Matlara. — Gate to Sovngarde wiki (wiki.gg, n/a, accessed 2026-10-02) — medium (a different modlist that shares the AP Voiced Addon)
- New Beginnings menu: Addict, Dwemer Ruin, Alchemist, At Angis Camp, Beggar, Jailed, Mercenary, Merchant, Pilgrim (Shrine), Pilgrim (Temple), Thalmor Prisoner, Vampire, Warlock, Werewolf. The "Attacked by a Dragon" start (quest "The Bodies of Men on His Wings") is in the plugin but not in NewBeginnings.json. — LoreRim install — medium (whether it can be selected was inferred from the JSON)
- Adventurer's Start menu: Roadside Ambush, Fell in a Spike Pit, Bounty Hunter, Prisoner in a Bandit Fort, Orc Stronghold (Blood-Kin), Saved by Vigilants, Out in the Wilderness. The Bruma variants need BS:Bruma, which LoreRim does not ship. — LoreRim install JSON + Nexus 145599 cache (2025-07-02) — high
- Delay Bleak Falls Barrow - Voiced (mod 97490, plugin author header "agd25") overrides MQ103. Balgruuf's reward line now says "Come back in a few nights and go talk to him", and there is a new Farengar topic "Have you learned anything about the Dragons? Do you need any help?". The dialogue conditions only check quest stages, so how the delay is enforced was not found. — LoreRim install: Delay Bleak Falls Barrow.esp records — high for the dialogue, low for the mechanism
- Unique Thane Weapons overrides MQ104 and ships "Blade of Whiterun" / "Gilded Blade of Whiterun". Vanilla rewards the Axe of Whiterun. — install plugin strings + Nexus 35497 cache (2021-06-12) + UESP Dragon Rising — high
- Requiem overrides MQ202. Since 2.0.0, A Cornered Rat points you to the local innkeeper instead of the Thieves Guild. — Requiem documentation/Changelog.md in install (v6.0.2 folder) — high
- Requiem 2.0.1: Alduin has no magic resistance and 33% resistance to all elements, and no special Sovngarde regeneration without Dragonrend. Requiem 2.0.0: Way of the Voice perks unlock as you progress the main quest. — Requiem changelog — medium (old entries, may be superseded)
- Requiem MQ104 edit: an old (1.6 or earlier) changelog says Balgruuf gives potions during Dragon Rising. — Requiem old changelog — low
- Storm the Thalmor Embassy overrides MQ201. You can storm the Embassy instead of attending the party, and the original route still works. Elenwen is disabled on that route. Non-Dragonborn characters can storm it before Diplomatic Immunity, which breaks the main quest. You can skip Delphine and go straight to Riften. — Nexus 104936 cache (2026-04-26) + LoreRim site — high
- Defeat the Dragon Cult adds "Destroy the Dragon Cult" (DCQuest). Objectives: defeat Hevnoraak, Krosis, Morokei, Nahkriin, Otar the Mad, Rahgot, Vokun, Volsung, and Investigate Labyrinthian. It starts with a note from Esbern after Paarthurnax tells you to find an Elder Scroll, and is roleplay only. — install plugin records + Nexus 86625 cache (2023-03-09) — high
- Cult of the World Eater: Alduin gets +3500 health, 6 health/s regeneration and 90% magic resistance. Per-priest buffs: Morokei/Vokun 20% MR each, Rahgot/Volsung 1500 health each, Nahkriin 500 health, Krosis/Hevnoraak/Otar 2 health/s each. A book next to Dragonbane hints at this. — Nexus 83274 cache (2023-01-27) — high
- Paarthurnax - Quest Expansion overrides MQPaarthurnax (plus FreeformSkyHaven A-D). About 60 new vanilla-spliced lines. Sparing him means forcing Delphine to recite the oath, then persuading or shouting down Esbern, and keeps both factions. Killing him is a boss fight against him plus 2 dragons. — Nexus 51711 cache (2023-04-30) + LoreRim site — high
- Dragon Hunting: Blessing of the Blades (+25% enchantments vs dragons for 8h) after Rebuilding the Blades. Dragon Hunting repeatable every 24h. Dragon Research needs Dragon Blood/Bile/Rheum for Dragon Infusion (-10% damage from dragons). Body-part ingredients need Kahvozein's Fang. Farengar buys parts. — Nexus 99193 cache (2025-06-05) — high
- A Forgotten Blade (Redeeming Fultheim) appears after Alduin's Wall. — install QUST + Nexus 136788 cache (2024-12-21) — high
- TIE Settings Loader defaults: Thalmor squad min level 8 with quest requirement off; dragon attacks at least 3 days apart at 100% chance. No LoreRim override found in "LoreRim - MCM and INI Settings". — install settings.ini — medium
- Override map: MQ102/MQ204/MQ205/MQ301/MQ303/MQ304 get only USSEP/cleaned-master fixes. Vittorias Alternate Wedding overrides MQ201Party. — imports/vanilla-quest-overrides.json — high
- Vanilla baselines (quest order, Unbound, Bleak Falls Barrow, Dragon Rising, Diplomatic Immunity, A Cornered Rat, Paarthurnax). — UESP (en.uesp.net, n/a, accessed 2026-10-02) — high

## Contradictions
- Alduin's base magic resistance: Cult of the World Eater assumes 50% base (so 90% with all priests alive), while Requiem's changelog (2.0.1) says Alduin has no magic resistance. The effective value in LoreRim was not verified.
- Bleak Falls Barrow delay: the GTS wiki says "until level 14" (another modlist; possibly a different version or config). The installed plugin only shows a "few nights" line and conditions on quest stages.
- Intro skip: the LoreRim FAQ says the dragon you talk to is "behind the inn at Helgen", while the AP Nexus page puts it in the start cell. They may be different features; not resolved.
- Requiem folder meta says v6.0.2, but documentation/Changelog.md is headed 5.4.5 (the docs may lag).

## Gaps (looked for, not found)
- The mechanism and length of the Bleak Falls Barrow delay (Nexus 97490 returned 403; schaken-mods mirror returned 403; no level condition in the plugin's dialogue CTDAs).
- What Requiem's current MQ104 edit is.
- What AP's "Messenger Spawn" optional file does in gameplay (the script only disables a shrine exterior and the start cell on a trigger).
- The live Storm the Thalmor Embassy page, for the exact trigger and dialogue (403). Plugin strings show only keys and guard markers.
- What the AP helper quest "Kawoosh!" (objective "Survive") is for. Left out of the file.
- Helgen's radiant quests mentioned on the Voiced Addon page: names not identified.

## Leads
- Open Delay Bleak Falls Barrow.esp and the vanilla MQ103 in xEdit to find the delay (scene/package conditions, or a GameDaysPassed or level check).
- Compare Requiem.esp's MQ104 against Skyrim.esm in xEdit.
- Check wiki.lorerim.com for an Alternate Perspective or Main Quest page (not reached this run).
- Read the AP GitHub wiki (linked from the Nexus forum) for the Messenger option and the Dragonborn sub-option behaviour.
