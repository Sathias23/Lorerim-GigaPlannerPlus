# Verify — ar-towns-south-west (normal level, 2026-10-02)

- verified | falkreath-hold: Granite Hill quest starts after Dragon Rising (Western Watchtower) in LoreRim | install `aaaGraniteHill.esp` SMQN `GraniteHillSM` CTDA = GetQuestCompleted(0x0002610C = MQ104 in Skyrim.esm); meta.ini FOMOD "Playthrough Style: Dragonborn" agrees with Nexus cache text.
- verified | falkreath-hold: quest name "A Plea From Granite Hill", courier-note start | import file QUST record aaaGraniteHillDungeonQuest (stage 10 journal).
- disputed | falkreath-hold: Gravewind start — LoreRim site adds "Get the key from Vighar the vampire" | Nexus 129582 via meta.ini (Gravewind - ESMIFIED) gives only "travel just northwest of the Roadside Ruins…", no key, recommended level 25ish+. Both now cited in file.
- verified | the-reach-and-markarth: Markarth Side quests The Lost Family Relic / The Royal Relic, givers Varimo / Grit-dar, start-game-enabled | import QUST records.
- verified | the-reach-and-markarth (+haafingar): Markarth Side parent = Hjaalmarch Hold, Morvunskar Crypts parent = Eastmarch | re-parsed `Arena - Markarth Side.esp` LCTN PNAM 0x0001676E = HjaalmarchHoldLocation, 0x0001676A = EastmarchHoldLocation (Skyrim.esm); Lux patch plugin carries no LCTN overrides.
- verified | the-reach-and-markarth: Cliffside Manor 3000 gold, upgrades 800 gold each | MESG strings in `Arena - Markarth Side.esp`.
- overturned | the-rift-and-riften: overview called "Supply and Demand" a Thieves Guild quest | official-quests.json: FreeformRiften01 "Supply and Demand", type misc (skooma/Cragslane); `Environs - Riften Warehouse.esp` triggerQuest property = FreeformRiften01. Text corrected; meta.ini adds "wait at least 15 days" — added.
- verified | the-rift-and-riften: Sirenroot start (Frissa Black-Briar, Elgrim's Elixirs) | install `SIRENROOT - Deluge of Deceit/meta.ini` Nexus cache.
- verified | solstheim: Dragonborn questline starts after The Way of the Voice; Northern Maiden / Gjalund Salt-Sage / Windhelm | UESP Skyrim:Dragonborn (quest) (web, 2026-10-02); DLC2MQ01 overridden only by USSEP (vanilla-quest-overrides.json), consistent with no LoreRim change.
- verified | solstheim: Miasma start Haj-Xul at Retching Netch, level 20+ | install `Miasma/meta.ini` Nexus cache.
- verified | solstheim: earthquake default 5% | `earthquakes - MCM.esp` GLOB eq_Percentage = 5.0 (120 s timing from mod page only).
- verified | solstheim: Vintrhus key | `Eli_Skaal Village Overhaul.esp` KEYM "Key to Vintrhus", CONT "Torkilds' Knapsack" (Snowclad Ruins placement from mod page only).
- verified | the-reach-and-markarth: Heart of the Reach start (Gwilym, Silver-Blood Inn) | install Heart of the Reach meta.ini Nexus cache.
- mechanical | all five files: frontmatter fields present, ids match filenames, every [n] resolves, no orphan rows (reach omits #11 consistently). Quest names match plugin records.
