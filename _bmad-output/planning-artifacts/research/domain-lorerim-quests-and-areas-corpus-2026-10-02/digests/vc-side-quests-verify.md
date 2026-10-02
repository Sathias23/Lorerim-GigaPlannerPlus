# Verify — vc-side-quests (side-quests-and-misc.md + vc-side-quests-r1.md)

Verifier: fresh context, 2026-10-02. Validation level: normal.

- verified — Forsworn Conspiracy delay GLOB `ANDR_MS01_LevelReq` = 40.0 in `The Forsworn Conspiracy - Delayed Start.esp`, overridden to 20.0 by `LoreRim - Global Modifiers.esp` — parsed both plugins' GLOB FLTV myself; Global Modifiers loads later (loadorder.txt 3438 vs 2704; plugins.txt 3358 vs 2624, both enabled). The corpus quotes loadorder.txt lines and the digest quotes plugins.txt lines; both are correct.
- verified — Kibell start dialogue "Bent a few folks' arms the wrong way?" — DQS plugin strings (`DialogueMarkarthKibellForswornTopic`). The 8 am to 8 pm window is still sourced only from the Nexus page.
- verified — the vanilla Forsworn Conspiracy has no level gate and starts with the market attack — UESP The Forsworn Conspiracy (fetched).
- verified — Ebony Warrior: vanilla 80 (UESP Dragonborn:The Ebony Warrior, fetched); LoreRim 40 (Global Modifiers GLOB `DLC2EbonyWarriorMinLevel_KRY` = 40.0 parsed, and TiE settings.ini `iTIE_EbonyWarrior=40`).
- verified — TiE settings.ini: `iTIE_TheWolfQueenAwakened=10`, `iTIE_UnfathomableDepths=14` — read directly from the install.
- verified — Only five Delayed Quest Starts modules ship (CC Fishing, Forsworn Conspiracy, House of Horrors, Mind of Madness, Taste of Death) — C:/mods/LoreRim/mods folder listing.
- verified — Laid to Rest is the Dawnguard prerequisite (cited to the LoreRim site Main page) — independent check: the install ships "Sensible Dawnguard Prerequisite" (DawnguardQuestPrerequisite.esp, Nexus 121948); its meta.ini says "the quest 'Laid to Rest' is now a prerequisite to starting Dawnguard".
- verified — Seeking A Cure (VC01 renamed): starts via Urag or Falion's house; three-day wait; the ritual fails; an option to kill Falion — RisingAtDawnQuestOverhaul.esp strings ("Seeking A Cure", "Speak to Urag", "Wait three days while Falion gets ready", "the ritual failed", "Kill Falion"). Note: the plugin still contains the purchase line "I want to purchase your black soul gem (<BribeCost> gold)", which is probably a retained vanilla line with its conditions turned off. "No longer sells" is left as the Nexus page states it, and is not contradicted.
- verified — Heart of Dibella QE alternate start: a Thane-of-the-Reach courier letter, or help 5 people in the Reach — plugin strings ("Letter from Mother Hamal" / "Thane of the Reach," / "Friend of the Reach," / `FriendsCountReach`, `WICourier`).
- verified — A Strong Nord Woman (FreeformRiften11b) objectives and The Choice is Yours "must meet at night" / "must visit home at night" — import plugin records + meta.ini cache text.
- fix — The Heart Will Go On is in `moretosayriverwood.esp`, not `moretodo.esp` (imports/mods/more-to-say-main.md). Added it to frontmatter `plugins` and to Sources row 21.
- fix — "Extracting an Argonian": official-quests.json has name null for DarkwaterCrossingDerkeethusRescueQuest. Added an inline caveat that this is the UESP title.

Mechanical: YAML frontmatter has all the template fields; id matches the file name; inline citations [1]–[34] all resolve, with no orphan rows; the vanilla quest names match official-quests.json for all 19 EditorIDs checked. Web calls: 2.
