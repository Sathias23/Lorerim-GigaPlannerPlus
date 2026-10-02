# LoreRim levelling index — quests by level

This index sorts the quests and quest groups in this corpus into **early game**, **mid game** and **end game**, with the level each one opens at or should be played at. It is derived from the corpus files only; the linked file carries the citations, the exact start steps and any disputes. Built 2026-10-02.

## How to read it

| Band | Levels | What it means in LoreRim |
|---|---|---|
| Early game | 1–14 | Ungated content, vanilla low-level gates (Hearthfire 9, Wolf Queen 10, Unfathomable Depths 14) and quests authors pitch at low levels |
| Mid game | 15–29 | LoreRim's own delayed starts cluster here: most "Delayed Quest Starts" gates are set to 20, and DLC-sized mods open at 25 |
| End game | 30+ | Level 30+ gates, Requiem-unlevelled dungeons with statically high enemies, and questlines their authors call endgame |

The **Basis** column says where the level comes from:

- **Gate** — the installed plugins enforce it. The quest will not start before this level.
- **Rec.** — a recommendation from the mod author, the LoreRim site or a guide. Nothing stops you starting earlier.
- **Est.** — no level appears in the corpus. The placement is inferred from the quest's prerequisites, enemies or rewards, and the note says why.

Many gates are set through the **Timing is Everything** (TIE) MCM, which rewrites them on every game load. Where the install disagrees with itself, this index uses the value most likely to apply in a running game and lists the dispute under [Conflicting gates](#conflicting-gates). LoreRim's default level cap is 101.

---

## Early game (levels 1–14)

| Quest / group | Level | Basis | Also needs | File |
|---|---|---|---|---|
| LoreRim Startup Quest (birthsign, skills, deity, traits, mode) | 1 | Gate | Runs on a new game | [lorerim-specific-quests](mod-added/lorerim-specific-quests.md) |
| Alternate Perspective start scenarios (New Beginnings, Adventurer's Start) | 1 | Gate | Chosen in the start room | [main-quest-and-alternate-start](vanilla-changes/main-quest-and-alternate-start.md) |
| Main quest: Unbound → Before the Storm → Bleak Falls Barrow → Dragon Rising → The Way of the Voice | 1+ | Est. | Rent a room at Helgen's inn to begin; Bleak Falls Barrow waits "a few nights" after Before the Storm | [main-quest-and-alternate-start](vanilla-changes/main-quest-and-alternate-start.md) |
| The Thalmor's Shadow (Taliesin) | 1+ | Gate | Starts at game start; hidden Talos statue near Lake Ilinalta | [taliesin-thalmors-shadow](mod-added/taliesin-thalmors-shadow.md) |
| Gore — Raven's Flight and follow-ups | 1+ | Rec. | Author recommends recruiting him at a low level | [gore](mod-added/gore.md) |
| Ill Met By Moonlight, The Black Star, Waking Nightmare | 1 | Gate | No LoreRim delay; The Black Star needs you to accept the lead | [daedric-quests](vanilla-changes/daedric-quests.md) |
| Sirenroot: Deluge of Deceit | 3–15 | Rec. | Enemies scale; author pitches it at early adventurers | [sirenroot](mod-added/sirenroot.md) |
| Fists of Fury (Ratway Arena, Brawler's Camp, Summoning Stones) | 1+ | Est. | Win 3 vanilla brawls first | [fists-of-fury](mod-added/fists-of-fury.md) |
| The Forgotten City | 5+ | Rec. | Walk to the Forgotten Ruins; the courier start is disabled (level 200) | [the-forgotten-city](mod-added/the-forgotten-city.md) |
| Dark Brotherhood assassin world encounter | 5 | Gate | TIE default | [dark-brotherhood](vanilla-changes/dark-brotherhood.md) |
| Thalmor squad world encounter | 8 | Gate | TIE default | [main-quest-and-alternate-start](vanilla-changes/main-quest-and-alternate-start.md) |
| Hearthfire (Build Your Own Home letter) | 9 | Gate | Friendly with the Jarl of Falkreath, Hjaalmarch or the Pale | [thane-hearthfire-and-favors](vanilla-changes/thane-hearthfire-and-favors.md) |
| The Cursed Tribe (+ Quest Expansion) | 9–10 | Gate | Be an Orc or Blood-Kin, then ask another stronghold chief for rumors | [daedric-quests](vanilla-changes/daedric-quests.md) |
| A Daedra's Best Friend | 10 | Gate | — | [daedric-quests](vanilla-changes/daedric-quests.md) |
| The Wolf Queen Awakened | 10 | Gate | TIE value | [side-quests-and-misc](vanilla-changes/side-quests-and-misc.md) |
| Kill the Vampire (Sybille, Thane of Haafingar) | 10 | Gate | TIE value | [thane-hearthfire-and-favors](vanilla-changes/thane-hearthfire-and-favors.md) |
| More to Say: Shriekwind Bastion bounty | 10 | Gate | Other More to Say quests have quest prerequisites only | [more-to-say-quests](mod-added/more-to-say-quests.md) |
| Lucan as a follower (FDE) | 10 | Gate | Finish The Golden Claw and the Riverwood love triangle | [follower-dialogue-expansions](mod-added/follower-dialogue-expansions.md) |
| A Plea From Granite Hill | ~5–10 | Est. | Courier comes after Dragon Rising | [granite-hill-quests](mod-added/granite-hill-quests.md) |
| The Only Cure (+ Quest Expansion) | 12 | Gate | TIE default | [daedric-quests](vanilla-changes/daedric-quests.md) |
| The Break of Dawn | 12 (or 20) | Gate | Disputed; see [conflicts](#conflicting-gates). Can't start while a vampire if the LoreRim value applies | [daedric-quests](vanilla-changes/daedric-quests.md) |
| A Night To Remember | 14 (or 20) | Gate | Disputed; see [conflicts](#conflicting-gates) | [daedric-quests](vanilla-changes/daedric-quests.md) |
| Unfathomable Depths | 14 | Gate | TIE value | [side-quests-and-misc](vanilla-changes/side-quests-and-misc.md) |
| Town quests: Capital Whiterun Expansion, Capital Windhelm Expansion, More to Say, Sissel's Book, Arena – Markarth Side | 1+ | Est. | Quest prerequisites only (e.g. Before the Storm for Rorikstead); none has a level gate | [capital-whiterun](mod-added/capital-whiterun-expansion-quests.md), [capital-windhelm](mod-added/capital-windhelm-expansion-quests.md), [more-to-say](mod-added/more-to-say-quests.md), [sissels-book](mod-added/sissels-book.md), [arena-markarth-side](mod-added/arena-markarth-side-quests.md) |
| Small vanilla expansions: Caught Red Handed, The Book of Love (Fastred), Return Aegisbane, Unmasking Sybille, Revealing Rune, On Hogithum | 1+ | Est. | Start from the vanilla quest or NPC; no level gate | [caught-red-handed](mod-added/caught-red-handed.md), [book-of-love](mod-added/book-of-love-fastreds-awakening.md), [return-aegisbane](mod-added/return-aegisbane.md), [unmasking-sybille](mod-added/unmasking-sybille.md), [revealing-rune](mod-added/revealing-rune.md), [requiem-quests](mod-added/requiem-quests.md) |
| Laid to Rest (Morthal) | 1+ | Est. | Do it early: it is LoreRim's prerequisite for the Dawnguard recruiter | [dawnguard](vanilla-changes/dawnguard.md) |

## Mid game (levels 15–29)

| Quest / group | Level | Basis | Also needs | File |
|---|---|---|---|---|
| Discerning the Transmundane | 15 | Gate | — | [daedric-quests](vanilla-changes/daedric-quests.md) |
| The Unquiet Dead → Goldenhills Plantation (CC) | 15 | Gate | Ask a Rorikstead or Whiterun innkeeper; buying the plantation costs 10,000 | [creation-club](vanilla-changes/creation-club.md) |
| Demon of Dream (Vaermina, unmarked) | 15+ | Rec. | Idol of Vaermina in Cragwallow Slope | [demon-of-dream](mod-added/demon-of-dream.md) |
| Sleepwalking Into A Nightmare (Vaermina) | ~15 | Est. | No level stated; placed beside Demon of Dream | [sleepwalking-into-a-nightmare](mod-added/sleepwalking-into-a-nightmare.md) |
| Dawnguard questline | 10 gate; play ~15–20 | Gate + Rec. | Laid to Rest first (or walk into Dayspring Canyon). The LoreRim site warns vampires are "not for the low levelled" | [dawnguard](vanilla-changes/dawnguard.md) |
| The House of Horrors (+ Tyranus route) | 20 | Gate | Ask Kleppr or Frabbi in Markarth for news | [daedric-quests](vanilla-changes/daedric-quests.md) |
| The Taste of Death + A Bitter Aftertaste | 20 | Gate | Ask the Silver-Blood Inn innkeeper for rumors | [daedric-quests](vanilla-changes/daedric-quests.md), [taste-of-death-addon](mod-added/taste-of-death-addon.md) |
| The Mind of Madness | 20 | Gate | Ask the Winking Skeever innkeeper for rumors | [daedric-quests](vanilla-changes/daedric-quests.md) |
| The Whispering Door + The Fate of the Ebony Blade | 20 | Gate | Dragon Rising; ambushes follow until the blade is dealt with | [daedric-quests](vanilla-changes/daedric-quests.md), [mephalas-curse](mod-added/mephalas-curse.md) |
| Pieces of the Past / Reforging the Past | 20 | Gate | Reforging needs 3 Daedra Hearts and the Daedric smithing perks | [daedric-quests](vanilla-changes/daedric-quests.md), [reforging-the-past](mod-added/reforging-the-past.md) |
| The Forsworn Conspiracy | 20 | Gate | Ask Kibell, the Markarth carriage driver, about Markarth | [side-quests-and-misc](vanilla-changes/side-quests-and-misc.md) |
| Dungeon Delving (Jarl – Hagravens) → Thane of the Reach | 20 | Gate | TIE value | [thane-hearthfire-and-favors](vanilla-changes/thane-hearthfire-and-favors.md) |
| Kill the Giant (Jarl) → Heljarchen Hall land, Thane of the Pale | 22 | Gate | Waking Nightmare first | [thane-hearthfire-and-favors](vanilla-changes/thane-hearthfire-and-favors.md) |
| Belethor's Sister → Hostile Takeover | 20 | Gate | Soul Cairn unlocked (Dawnguard: Chasing Echoes); Nazeem and the Whiterun NPCs alive | [belethors-sister](mod-added/belethors-sister.md) |
| More to do in the Soul Cairn | ~20 | Est. | Soul Cairn access from Dawnguard | [more-to-do-in-the-soul-cairn](mod-added/more-to-do-in-the-soul-cairn.md) |
| Guests for Dinner (Bloodchill Manor, CC) | ~20 | Est. | Dawnguard's Bloodline | [creation-club](vanilla-changes/creation-club.md) |
| Saints and Seducers Extended Cut (the Asylum) | 20 gate; 30+ for the final boss | Gate + Rec. | The Mind of Madness completed | [saints-and-seducers-extended-cut](mod-added/saints-and-seducers-extended-cut.md) |
| Main quest middle: Diplomatic Immunity (or Storm the Thalmor Embassy) → Alduin's Wall → The Throat of the World | ~15–25 | Est. | — | [main-quest-and-alternate-start](vanilla-changes/main-quest-and-alternate-start.md), [storm-the-thalmor-embassy](mod-added/storm-the-thalmor-embassy.md) |
| A Forgotten Blade (Fultheim), Dragon Hunting (repeatable) | ~20+ | Est. | Alduin's Wall; Blades in Sky Haven Temple | [redeeming-fultheim](mod-added/redeeming-fultheim.md), [dragon-hunting](mod-added/dragon-hunting.md) |
| Dragonborn DLC (Solstheim) | 25 | Gate | The Way of the Voice; the cultist ambush is only a 5% roll per check, so it can come much later | [dragonborn](vanilla-changes/dragonborn.md) |
| Miasma (Solstheim) | 20+ (Solstheim at 25) | Rec. | Solstheim access, which in practice follows the Dragonborn start | [miasma](mod-added/miasma.md) |
| Lucien: The Oblivion Engine, Intruders (Solstheim) | ~25 | Est. | Solstheim access and Lucien's approval | [lucien](mod-added/lucien.md) |
| Wyrmstooth (island, Stonehollow, Dimfrost) | 10 gate; 24–25 rec. | Gate + Rec. | The Way of the Voice **and** Rise in the East; the barrow and Dimfrost have a minimum encounter level of 24 | [wyrmstooth](mod-added/wyrmstooth.md), [wyrmstooth-island](areas/wyrmstooth-island.md) |
| The Welkynar Knight | 25 | Gate | Travel between cities until the courier arrives | [the-welkynar-knight](mod-added/the-welkynar-knight.md) |
| Meridia's Order | 25+ | Rec. | The Break of Dawn completed; Requiem makes its undead dangerous | [meridias-order](mod-added/meridias-order.md) |
| Gravewind | 25+ | Rec. | Cemetery Homestead Key from Vighar (Dark Ancestor); you are trapped once inside | [gravewind](mod-added/gravewind.md) |
| Siege at Icemoth (Hjorkvild Isles) | ~20–25 | Est. | No level stated; dragon priest barrow and a Black Book | [siege-at-icemoth](mod-added/siege-at-icemoth.md) |
| Morihaus' Refuge (Lord's Mail dungeon) | ~20–25 | Est. | No level stated; "moderately challenging" armored boss | [morihaus-refuge](mod-added/morihaus-refuge.md) |
| Journey to Baan Malur (Julan-Shar region) | ~20+ | Est. | No gate; Requiem-patched hold-sized region with no quest markers | [journey-to-baan-malur](mod-added/journey-to-baan-malur.md) |
| Penitus Oculatus | ~20–30 | Est. | Destroy the Dark Brotherhood! completed | [penitus-oculatus](mod-added/penitus-oculatus.md) |
| Hendraheim (CC) | ~25 | Est. | The Silver Hand and the Circle (disputed); the hall costs 25,000 | [creation-club](vanilla-changes/creation-club.md) |

## End game (levels 30+)

| Quest / group | Level | Basis | Also needs | File |
|---|---|---|---|---|
| Boethiah's Calling / The Man in Black | 30 (or 20) | Gate | Disputed; see [conflicts](#conflicting-gates) | [daedric-quests](vanilla-changes/daedric-quests.md), [boethiahs-calling-alternate](mod-added/boethiahs-calling-alternate.md) |
| Heart of the Reach (Ever-Bog) | 30–55 | Rec. | Requiem unlevels it: level 30 Forsworn bosses, level 35 Hagraven, level 55 Spider Queen | [heart-of-the-reach](mod-added/heart-of-the-reach.md) |
| The Gray Cowl of Nocturnal (Hammerfell, Coldharbour) | 30–35 | Rec. | Finish the Thieves Guild (Under New Management), then steal anything | [gray-cowl-of-nocturnal](mod-added/gray-cowl-of-nocturnal.md) |
| Betalille's Hammerfell Quests Bundle (~31 quests) | 30+ | Rec. | Reached through the Gray Cowl; the Hammerfell Brotherhood quests also need Hail Sithis! | [hammerfell-quests-bundle](mod-added/hammerfell-quests-bundle.md) |
| Undeath (Lichdom questline) | ~30 | Rec. | Blood on the Ice + The Wolf Queen Awakened. LoreRim removes the mod's level-30 gate, so it can open earlier | [undeath](mod-added/undeath.md) |
| Legends of Aetherium (Itharzel) | ~30 | Est. | No gate. Author says 10–15+, but under Requiem enemies are always Master variants and loot is always top tier | [legends-of-aetherium](mod-added/legends-of-aetherium.md) |
| Main quest finale: Destroy the Dragon Cult → Sovngarde | ~30+ | Est. | Each of the 8 named Dragon Priests left alive buffs Alduin | [destroy-the-dragon-cult](mod-added/destroy-the-dragon-cult.md), [main-quest-and-alternate-start](vanilla-changes/main-quest-and-alternate-start.md) |
| Destroy the Acolyte Priests → Miraak (Dragonborn finale) | ~30+ | Est. | Each Solstheim dragon priest buffs Miraak | [destroy-the-dragon-cult](mod-added/destroy-the-dragon-cult.md), [dragonborn](vanilla-changes/dragonborn.md) |
| The Tools of Kagrenac (Sunder, Wraithguard, Silent Passage) | ~30–60 | Est. | Arniel's Endeavor (keep Keening) + The Way of the Voice; one reviewer played it at 63 | [tools-of-kagrenac](mod-added/tools-of-kagrenac.md) |
| Deathbrand (Dragonborn) | 36 | Gate | Read *Deathbrand* or ask Geldis Sadri | [dragonborn](vanilla-changes/dragonborn.md) |
| VIGILANT (Coldharbour) | 25 gate; ~40 rec. | Gate + Rec. | The House of Horrors + Kindred Judgment; Act 4 is endgame and LoreRim buffs its bosses | [vigilant](mod-added/vigilant.md) |
| The Ebony Warrior (can be declined) | 40 | Gate | LoreRim lowers it from 80 | [dragonborn](vanilla-changes/dragonborn.md) |
| The Cause / The Consequences (CC, Deadlands) | ~40+ | Est. | Note in the destroyed Hall of the Vigilant; vanilla gate is 46 and may still apply; Mythic Dawn use deadly poisons | [creation-club](vanilla-changes/creation-club.md) |
| The Frozen Heart (Crag Spire Wastes) | ~40–50 | Est. | No level gate, but Othriel is fixed at level 50 if you fight him; needs Slow Time and Fire Breath words | [the-frozen-heart](mod-added/the-frozen-heart.md) |
| Myrwatch (CC) | — | Est. | Shalidor's Maze or the College questline, then 20,000 gold | [creation-club](vanilla-changes/creation-club.md) |
| Second Breath | — | Gate | Granted when Alduin is defeated | [lorerim-specific-quests](mod-added/lorerim-specific-quests.md) |

## Questlines that span the bands

None of the guild questlines has a level gate. They start early and finish wherever the player gets to them; the levels below are estimates for pacing.

| Questline | Start | Middle | Finale | File |
|---|---|---|---|---|
| Main quest | Early (rent a room at Helgen's inn) | Mid: Diplomatic Immunity → Alduin's Wall | End: Dragon Cult cleared → Sovngarde | [main-quest-and-alternate-start](vanilla-changes/main-quest-and-alternate-start.md) |
| Companions | Early (Kodlak, Jorrvaskr) | Needs 3 / 5 / 4 radiant jobs before Proving Honor / The Silver Hand / Blood's Honor | Mid; unlocks Hendraheim | [companions](vanilla-changes/companions.md), [companions-radiant-expansion](mod-added/companions-radiant-expansion.md) |
| College of Winterhold | Early (buy the test spell first, or shout in after The Way of the Voice) | Seven College Curriculum lessons before Under Saarthal | Mid–End; unlocks Myrwatch and, with Arniel's Endeavor, Tools of Kagrenac | [college-of-winterhold](vanilla-changes/college-of-winterhold.md), [college-quest-expansion](mod-added/college-of-winterhold-quest-expansion.md) |
| Thieves Guild | Early (Brynjolf, Riften) | Radiant jobs: 25 for trophies and the safe | Mid; finishing it opens the Gray Cowl (End) | [thieves-guild](vanilla-changes/thieves-guild.md) |
| Dark Brotherhood | Early (Innocence Lost) | Nazir contracts + ACDB | Mid; Listener contracts after, or Penitus Oculatus on the destroy path | [dark-brotherhood](vanilla-changes/dark-brotherhood.md), [additional-contracts](mod-added/additional-contracts-dark-brotherhood.md), [listen](mod-added/listen-dark-brotherhood-radiant.md) |
| Civil War | Early (Rikke or Galmar) | Message to Whiterun waits on Dragon Rising | Mid; then Repairing the Cities and the champion armor | [civil-war](vanilla-changes/civil-war.md), [after-the-civil-war](mod-added/after-the-civil-war.md) |
| Dawnguard | Mid (gate 10 + Laid to Rest) | Unlocks the Soul Cairn quests and Belethor's Sister | Mid–End; Kindred Judgment is half of Vigilant's gate | [dawnguard](vanilla-changes/dawnguard.md) |
| Dragonborn | Mid (gate 25) | Solstheim side content, Miasma | End: Miraak, Deathbrand, the Ebony Warrior | [dragonborn](vanilla-changes/dragonborn.md) |

## Any level (systems, followers, towns)

These have no level and no difficulty that ties them to a band. Pick them up whenever you are nearby.

| Group | Notes | File |
|---|---|---|
| Followers: Auri, Inigo, Katana / Megara / Shale, Remiel, FDE followers, Serana Dialogue Expansion | Personal quests start from dialogue or approval. Katana's group start at level 10 and level with you. Serana's content follows Dawnguard | [auri](mod-added/auri-song-of-the-green.md), [inigo](mod-added/inigo.md), [katana](mod-added/katana.md), [remiel](mod-added/remiel.md), [fde](mod-added/follower-dialogue-expansions.md), [serana](mod-added/serana-dialogue-expansion.md) |
| Radiant: Missives, Favor Quests Separated, Hunter's Mark dens, Soldier of Stendarr | Missive jobs come in four difficulty tiers (25% each); tougher jobs pay more | [missives](mod-added/missives.md), [favor-quests-separated](mod-added/favor-quests-separated.md), [radiant-and-world-events](mod-added/radiant-and-world-events.md), [soldier-of-stendarr](mod-added/soldier-of-stendarr.md) |
| Dragons Awaken named dragons | Follow main-quest progress as mounds open | [dragons-awaken-lairs](areas/dragons-awaken-lairs.md) |
| Exploration: Ascend (hidden peaks), Leaps of Faith (high dives) | Always available; the Leaps of Faith author frames it as a late-game completionist goal | [ascend](mod-added/ascend-hidden-peaks.md), [leaps-of-faith](mod-added/leaps-of-faith.md) |
| Knight of the North (Crusader relics) | No level gate; start near the Tower Stone in Winterhold | [knight-of-the-north](mod-added/knight-of-the-north.md) |
| Finding Velehk Sain | Velehk is now twice your level, so fighting him is equally hard at any level | [finding-velehk-sain](mod-added/finding-velehk-sain.md) |
| The Gift of Saturalia, Clear Dead Men's Respite | Saturalia has no gate; the Bards College clear needs Tending the Flames | [the-gift-of-saturalia](mod-added/the-gift-of-saturalia.md), [bards-college-excavation](mod-added/bards-college-excavation.md) |
| A Healing Wedding | After destroying the Brotherhood or sparing Grelod, and seeing Roggvir's execution | [vittorias-alternate-wedding](mod-added/vittorias-alternate-wedding.md) |
| Seeking A Cure / A Forlorn Hope | Whenever you are a vampire; the follow-up comes after your third level-up | [seeking-the-cure](mod-added/seeking-the-cure.md) |
| Spirit Tutors | Skill-based: needs Ordinator's Restoration 30 perk | [lorerim-specific-quests](mod-added/lorerim-specific-quests.md) |
| Town and hold expansions, player homes | No quests of their own beyond those listed above | [areas/](areas/) |

## Removed or unreachable in LoreRim

| Content | What happens instead | File |
|---|---|---|
| The Forgotten City courier ("Cassia's Plea") | Gated at level 200; walk into the Forgotten Ruins instead | [the-forgotten-city](mod-added/the-forgotten-city.md) |
| Gift of Kynareth (CC) | Replaced by the Morihaus' Refuge dungeon | [morihaus-refuge](mod-added/morihaus-refuge.md) |
| Relics of the Crusader (CC) | Replaced by Knight of the North | [knight-of-the-north](mod-added/knight-of-the-north.md) |
| Battle of the Champions (CC) | Champion armor pickup during the final Civil War siege | [creation-club](vanilla-changes/creation-club.md) |
| In the Shadows (CC) | Bow of Shadows is static loot in Severin Manor | [creation-club](vanilla-changes/creation-club.md) |
| Arms of Chaos, Stendarr's Hammer, Chrysamere, Nordic Jewelry, Alternative Armors quests | Removed; items moved to NPCs, bosses or crafting | [creation-club](vanilla-changes/creation-club.md) |
| Season Unending | Never fires | [civil-war](vanilla-changes/civil-war.md) |

## Conflicting gates

The corpus records these disagreements. The index uses the "likely in game" value.

| Quest | Values found | Likely in game |
|---|---|---|
| Boethiah's Calling | 20 (LoreRim Global Modifiers) vs 30 (TIE ini) | 30, because the TIE loader rewrites the global on every load. Check MCM → Timing is Everything → Daedric Quests |
| A Night To Remember | 20 vs 14 | 14, same reason |
| The Break of Dawn | 20 vs 12 | 12, same reason |
| Dawnguard recruitment | 30 (Requiem / Global Modifiers) vs 10 (TIE MCM) | 10, same reason |
| Wyrmstooth | 20 (Requiem patch) vs 10 (Wyrmstooth MCM) | 10; check Wyrmstooth → Requirements in the MCM |
| The House of Horrors | 35 (the Delayed Start plugin's own value) vs 20 (LoreRim Global Modifiers) | 20, which `daedric-quests.md` reports. The Vigilant files cite 35, so check this before relying on it |
| The Forgotten City | LoreRim site: 25 vs install: 200 | Walk in at any level |
| Bleak Falls Barrow delay | Level 14 (another modlist's wiki) vs "a few nights" in the installed plugin | Time-based, not level-based |
| Vigilant | Site adds the main quest; the plugin checks only level 25, House of Horrors and Kindred Judgment | Plugin conditions |
| Hendraheim | Silver Hand + Circle gate may be overridden by Hendraheim TnE | Untested |
