---
id: missives
title: Missives (Missive Board radiant quests)
kind: mod-added
category: radiant
summary: Missive Boards in every hold capital (plus Raven Rock, Stonehollow and Ben Erai in LoreRim) post hold-local radiant jobs — couriers, gathering, bounties, retrievals, manhunts and, via the Voice and Quest Expansion, 20 extra job types. Read a missive to accept; read it again to drop it.
mods:
  - name: Missives
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/17576
    version: f2.03
  - name: Missives - Voice and Quest Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/166094
    version: 1.6.0.0
  - name: Missives - Solstheim Patch SE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/26788
    version: 2.11.1.0
  - name: Missives - Wyrmstooth Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/26788
    version: f2.05
  - name: Missives - Gray Cowl Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/26788
    version: 2.11.0.0
  - name: Missives - Gray Cowl Map
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/107271
    version: 1.0.0.0
  - name: Missives - Settings Loader
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/69617
    version: 1.0.0.0
  - name: Missives Quests Raise Disposition - For Harder Thaneships
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/61934
    version: 1.0.0.0
  - name: Missives - Quest Edits for Unique Missive Board Mods
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/112095
    version: 1.1.2.0
  - name: Missives - Carriage and Ferry Travel Overhaul Patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/44498
    version: 1.0.0.0
  - name: The Gray Cowl of Nocturnal - We Don't Need Two Boards
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/107288
    version: 1.0.0.0
  - name: LoreRim - MCM and INI Settings
    nexus: n/a (LoreRim-authored)
    version: n/a
plugins: [Missives.esp, MissivesExpansion.esp, Missives - Solstheim.esp, Missives - Wyrmstooth.esp, Missives - Gray Cowl Patch.esp, MissivesGrayCowlMap.esp, Missives Quests Raise Disposition.esp, Missives - Quest Edits for Unique Missive Boards.esp, Missives - Carriage and Ferry Travel Overhaul Patch.esp, GrayCowlMissivesNoNoticeBoard.esp]
quests: [Deliver a Letter Near, Deliver a Letter Medium, Deliver a Letter Distant, Deliver a Weapon Near, Deliver a Weapon Medium, Deliver a Weapon Distant, Deliver a Potion Near, Deliver a Potion Medium, Deliver a Potion Far, Gather Some Common Ingredients, Gather Some Uncommon Ingredients, Gather Some Rare Ingredients, Collect Some Food, Collect Some Weak Soul Gems, Collect Some Standard Soul Gems, Find a Powerful Soul Gem, Gather Common Ore, Gather Uncommon Ore, Gather Rare Ore, Gather Very Rare Ore, Kill Some Things, Kill Some Bandits, Kill Some Forsworn, Kill a Giant, Kill a Dragon, Kill Rieklings, Kill Some Marauders, Retrieve From the Wilderness, Recover From a Hideout, Retrieve From a Ruin, Track Thief, Track Fugitive, Track Vampire, Find Common Book, Find Uncommon Book, Find Rare Book, Find Apprentice Spell Tome, Find Adept Spell Tome, Find Expert Spell Tome, Find Common Accessory, Find Rare Accessory, Catch Fish, Find Toy, Find Item From Solstheim, Find Dwemer Rarity, Gather Firewood, Gather Nord Mead, Gather Steel Swords, Kill The Draugr, Kill Pests, Find The Missing Dog, Find The Missing Goat, Heal the Sick]
locations: [Whiterun, Windhelm, Solitude, Markarth, Riften, Falkreath, Dawnstar, Morthal, Winterhold, Raven Rock, Stonehollow, Ben Erai]
region: All nine holds of Skyrim; Solstheim; Wyrmstooth; Alik'r Desert (Gray Cowl)
start: Walk up to the Missive Board in any hold capital and read a missive; there is no quest prerequisite. Stonehollow's board needs the Wyrmstooth main quest done and the town rebuilt.
related: [mod-added/favor-quests-separated.md, mod-added/radiant-and-world-events.md, mod-added/wyrmstooth.md, mod-added/gray-cowl-of-nocturnal.md, vanilla-changes/thane-hearthfire-and-favors.md, areas/solstheim.md, areas/wyrmstooth-island.md, areas/hammerfell-and-coldharbour-gray-cowl.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
confidence: high
updated: 2026-10-02
---

# Missives (Missive Board radiant quests)

Missives places a Missive Board in each of the nine hold capitals. Each board posts radiant jobs that lead only to dungeons or NPCs inside that hold [2]. The base plugin holds 264 radiant quest records: every job type is duplicated once per hold [1][2]. The Voice and Quest Expansion adds 20 more job types and extra spliced voice lines for hand-ins [5]. LoreRim also ships patches that add boards at Raven Rock (Solstheim), Stonehollow (Wyrmstooth) and Ben Erai (Gray Cowl of Nocturnal) [3][4][6].

## Starting in LoreRim
- **How:** read a missive on any Missive Board. The missive says where the job leads or what you must collect before you accept it [2]. Boards are in all nine hold capitals [2].
- **Dropping a job:** read the missive in your inventory again and choose to drop it. Any job can be abandoned at any time [2][5].
- **Refresh:** the board offers a new set of jobs every 3 days. That is the mod default (`fQuestRefresh=3`), and LoreRim's settings file does not change it [7][8].
- **LoreRim difficulty mix:** LoreRim's `Missives.ini` sets Easy, Normal, Hard and Very Hard jobs to 25% each. The mod defaults are 50/35/20/5, so harder jobs come up far more often than in an unmodded install [7][8].
- **LoreRim bounty rewards:** LoreRim's MCM file raises the animal bounty to 250 gold (default 150) and the dragon bounty to 3,000 gold (default 1,000) [7][8]. All other MCM reward values keep the mod defaults [7][8]. (Disputed: `LoreRim - Leveled List Patch.esp` sets lower reward globals; see LoreRim notes [14].)
- **Extra boards:**
  - **Raven Rock:** outside Morvayn Manor [3].
  - **Stonehollow:** outside the inn. It appears only after the Wyrmstooth main quest is complete and the town is fully rebuilt. Few jobs spawn there because Stonehollow has few NPCs [4].
  - **Ben Erai:** a Missive Board in the Alik'r Desert [6]. *We Don't Need Two Boards* removes the Gray Cowl's own Notice Board and pins its 4–5 quest-starting notes on this board instead [12]. This works only on a save started with the patch installed [12].
- **Known issue (LoreRim site):** "Missives sometimes bugs out with gathering quests. I recommend not picking them up." [9]

## Quests

Every quest below is a radiant template. Placeholders such as `<Alias=Item>` are filled in when the job is generated, so the same name shows up once per hold [1]. Rewards are gold unless noted; the gather rewards come from the mod description [2].

### Courier — Deliver a Letter / Weapon / Potion (Near, Medium, Distant/Far)
- **Giver / trigger:** a citizen of the hold capital, via the board [2].
- **Steps:** (20) Collect the item, from the quest giver for weapons → (30) Recover the item if you lost it → (40) Deliver it by a set day of the month [1].
- **Difficulty tiers:** Near = a small settlement in the same hold. Medium = another hold capital. Distant = a small settlement in a different hold [2].
- **Rewards / failure:** half the pay up front and half on delivery. Missing the deadline, losing the item or dropping the missive fails the job and puts a bounty on you in the sender's hold [2]. The potion variants (`Deliver a Potion Near/Medium/Far`) are in the plugin but not in the cached mod description; their rewards default to 100/200/300 [1][8].
- **Naming quirk:** some potion records are named inconsistently in the plugin. For example, `_M_QuestFalkreathCourierPotionLow` is titled "Deliver a Potion Far", and one record is titled "Deliver a Potion Med" [1].

### Gather — Ingredients, Food, Soul Gems, Ore
- **Quest names:** Gather Some Common Ingredients, Gather Some Uncommon Ingredients, Gather Some Rare Ingredients, Collect Some Food, Collect Some Weak Soul Gems, Collect Some Standard Soul Gems, Find a Powerful Soul Gem, Gather Common Ore, Gather Uncommon Ore, Gather Rare Ore, Gather Very Rare Ore [1].
- **Steps:** (20) Gather N items (the counter is shown) → (40) Bring them to the quest giver; food goes to the inn [1].
- **Givers and rewards:**
  - Apothecaries want ingredients and pay with leveled potions.
  - Blacksmiths want ore and pay with leveled weapons or armor.
  - Innkeepers want raw meat and pay with a meal.
  - Court wizards want soul gems and pay with scrolls.
  - Gold is paid on top of each reward [2].
- **LoreRim:** this is the job family the LoreRim known-issues page warns against [9].

### Kill — Kill Some Things / Kill Some Bandits / Kill Some Forsworn / Kill a Giant / Kill a Dragon
- **Steps:** (20) Clear out the dungeon, kill its leader, or slay the giant or dragon there → (40/41) Collect the bounty from the hold's Steward or Jarl [1].
- **Coverage:**
  - Kill Some Things (animal den) and Kill a Dragon exist for all nine holds.
  - Kill Some Bandits exists for eight holds; the Reach gets Kill Some Forsworn instead.
  - Kill a Giant exists only for Whiterun, Eastmarch and the Pale [1].
- **Rewards:** tougher enemies pay more. In LoreRim's MCM settings: animal 250, bandit 500, giant 1,000, dragon 3,000 [2][7][8]. (Disputed: LoreRim's plugin-level globals are lower; see LoreRim notes [14].)

### Retrieve — Retrieve From the Wilderness / Recover From a Hideout / Retrieve From a Ruin
- **Steps:** (20) Retrieve the item → (40) Return it or bring it to the quest giver [1].
- **Variants:**
  - Wilderness: a ring or necklace lost in an animal den (250).
  - Hideout: a stolen weapon held by bandits, Forsworn, Falmer, warlocks or vampires (500).
  - Ruin: a scroll or staff for the Court Wizard in a Nordic or Dwarven ruin (1,000) [2][8].
- **Choice:** you can drop the missive and keep the item without penalty [2].

### Hunt — Track Thief / Track Fugitive / Track Vampire
- **Track Thief:** (10) Find the thief in the other hold and retrieve the item → (40) Return it. Reward 250 [1][8].
- **Track Fugitive:** (20) Track down and kill the fugitive in the other hold → (40/41) Collect the bounty from the Steward or Jarl. Reward 500 [1][8].
- **Track Vampire:** (20) Track down and kill the Vampire in the hold → (40) Report its death to a Vigilant of Stendarr. The reward is a Cure Disease potion, a leveled potion, three scrolls and a random Divine's amulet [1][2].
- **How hunts work:** you get only a few places the target may visit, so you have to search [2].

### Region-patch variants
- **Solstheim (Raven Rock):** the same families, but **Kill Rieklings** replaces Kill a Giant [3][6].
- **Wyrmstooth (Stonehollow):** **Kill Some Marauders** replaces the bandit job; there is no giant job [4].
- **Alik'r (Ben Erai):** the standard set, including Kill a Giant and Kill Some Bandits [6].

### Voice and Quest Expansion jobs (MissivesExpansion.esp)
- **Find Common / Uncommon / Rare Book:** a reader asks for a specific book. There is no quest marker, so check bookshelves and libraries [5][10].
- **Find Apprentice / Adept / Expert Spell Tome:** the same idea for a mage NPC [5][10].
- **Find Common / Rare Accessory:** "Find or craft" a ring, necklace or circlet. Crafting it yourself is the easy route [5][10].
- **Catch Fish:** uses the fishing system [5][10].
- **Find Toy:** a child wants a toy [5][10].
- **Find Item From Solstheim:** a Dunmer craves a Solstheim food [5][10].
- **Find Dwemer Rarity:** a collector wants a Dwemer spoon, cog or similar [5][10].
- **Gather Firewood / Gather Nord Mead:** supplies for the inn [5][10].
- **Gather Steel Swords:** swords for the guard captain [5][10].
- **Kill The Draugr:** clear a draugr-infested dungeon, then (40/41) collect from the Steward or Jarl. Reward 350 [5][10].
- **Kill Pests:** exterminate skeevers in a farm "Den" and collect from the quest giver. Reward 75 [5][10].
- **Find The Missing Dog / Find The Missing Goat:** the clue is "old ruins" for the dog and "giant camps" for the goat. No marker appears until you are close; Clairvoyance leads you straight to the animal [5][10].
- **Heal the Sick:** give the recipient a Cure Disease potion or cure them with a spell, then speak to them [5][10].
- **Rewards:** most of these reuse the base mod's MCM reward values. For example, Find Expert Spell Tome uses the Ruins Retrieval reward and Gather Steel Swords uses the Very Hard Ore reward [5].
- **Not real jobs:** the "… Board" records (for example "Find Rare Book Board") are helper quests, not player jobs [10].

## Locations
- **Missive Boards:** one in each of the nine hold capitals [2].
- **Raven Rock:** outside Morvayn Manor [3].
- **Stonehollow (Wyrmstooth):** outside the inn, after the Wyrmstooth main quest and the town rebuild [4].
- **Ben Erai (Alik'r Desert):** the board added by the Gray Cowl patch [6].
- **Alik'r Desert Basin board map:** *Missives - Gray Cowl Map* adds a map texture to that board [11].

## Rewards & notable items
Payouts are gold plus potions, gear, scrolls or meals, depending on who posted the job [2]. Gold values follow the MCM table, with LoreRim's bounty overrides [7][8]. Track Vampire also pays a random Divine's amulet [2].

## LoreRim notes
- **Settings:** LoreRim's MCM values live in `LoreRim - MCM and INI Settings/MCM/Settings/Missives.ini`. *Missives - Settings Loader* loads them automatically through MCM Helper [7][13].
- **Reward values — two LoreRim sources disagree.** `LoreRim - Leveled List Patch.esp` overrides Missives' reward globals at roughly half the mod defaults, e.g. animal 75, bandit 250, giant 500, letter 20/40/60, weapon 30/60/90, potion 50/100/150, wilderness 125, hideout 250, ruins 500, thief 125, fugitive 250; dragon stays 1,000 [14]. The MCM file instead gives animal 250, dragon 3,000 and default values elsewhere [7][8]. The Settings Loader's script writes MCM values into these globals, but its "load settings on reload" option is off by default, so which values a LoreRim save actually pays is unverified [14]. (Verifier note: the original text stated the MCM values as the LoreRim rewards without this caveat.)
- **Thaneships:** *Missives Quests Raise Disposition* makes NPCs you finish Missives jobs for count toward the "people helped" needed for thaneships [13].
- **Excluded NPCs:** *Missives - Carriage and Ferry Travel Overhaul Patch* adds carriage drivers, ferrymen and Klimmek to Missives' forbidden list. Courier jobs therefore never target NPCs whose dialogue CFTO replaces [13].
- **Reskinned boards:** *Missives - Quest Edits for Unique Missive Board Mods* makes boards that were reskinned by base-object swaps still generate missives. In LoreRim this covers the Diverse Witcher Missives Boards, which add board variants in Falkreath, Dawnstar, Morthal and Riften [13]. That mod's author warns that a board which has already tried to generate missives can stay empty until its cooldown ends [13].
- **City overhauls:** LoreRim also loads Missives patches for The Great City of Falkreath, Cities of the North – Falkreath, The Great City of Winterhold, RedBag's Solitude, JK's Raven Rock, and S.T.A.R. (Ryften Pathway / JK's Bee and Barb). These move or keep the boards reachable inside the overhauled cities [1].
- **Missing patches:** the patch collection's page also lists boards for Bruma, Amber Creek (Falskaar), Evermore (Beyond Reach), Florin (Midwood Isle) and Northpoint. LoreRim installs only the Solstheim, Wyrmstooth and Gray Cowl plugins, so those other boards are **not** in LoreRim [3][1].

## Related
- [Favor Quests Separated](favor-quests-separated.md) — the vanilla favor and bounty jobs.
- [Radiant and world events](radiant-and-world-events.md) — Hunter's Mark animal dens, Dragons Awaken.
- [Wyrmstooth](wyrmstooth.md), [Gray Cowl of Nocturnal](gray-cowl-of-nocturnal.md)
- [Thane, Hearthfire & favors](../vanilla-changes/thane-hearthfire-and-favors.md)
- [Solstheim](../areas/solstheim.md), [Wyrmstooth Island](../areas/wyrmstooth-island.md), [Hammerfell & Coldharbour (Gray Cowl)](../areas/hammerfell-and-coldharbour-gray-cowl.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest names, objectives, per-hold coverage, installed patches | LoreRim install: `Missives.esp` QUST records + Default profile modlist/plugin masters (Missives f2.03) | mod v f2.03 | 2026-10-02 |
| 2 | board mechanics, quest families, rewards, drop/abandon | [Missives Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/17576) via meta.ini cache | 2019-07-03 (nexusLastModified) | 2026-01-11 cache |
| 3 | Raven Rock board, Kill Rieklings, list of other boards | [Missives – Worldspace Additions (26788)](https://www.nexusmods.com/skyrimspecialedition/mods/26788) via meta.ini cache (Solstheim Patch) + `Missives - Solstheim.esp` QUST records | 2025-08-23 (nexusLastModified) | 2026-01-11 cache |
| 4 | Stonehollow board gate, Kill Some Marauders | LoreRim install: `Missives - Wyrmstooth.esp` QUST records + 26788 page via meta.ini cache | 2025-08-23 | 2026-01-11 cache |
| 5 | expansion job types, reward mapping | [Missives – Voice and Quest Expansion](https://www.nexusmods.com/skyrimspecialedition/mods/166094) via meta.ini cache | 2026-01-25 (nexusLastModified) | 2026-01-28 cache |
| 6 | Ben Erai board, Alik'r quest set | LoreRim install: `Missives - Gray Cowl Patch.esp` QUST records + 26788 page via meta.ini cache | 2025-08-23 | 2026-01-11 cache |
| 7 | LoreRim tuned values | LoreRim install: `LoreRim - MCM and INI Settings/MCM/Settings/Missives.ini` | n/a | 2026-10-02 |
| 8 | default MCM values (refresh 3 days, reward table) | LoreRim install: `Missives - Settings Loader/MCM/Config/Missives/settings.ini` | v1.0.0.0 | 2026-10-02 |
| 9 | gathering-quest bug warning | [LoreRim site — Known Issues](https://www.lorerim.com/support/known-issues) | n/a | 2026-10-02 |
| 10 | expansion quest names and objectives | LoreRim install: `MissivesExpansion.esp` QUST records | mod v1.6.0.0 | 2026-10-02 |
| 11 | Alik'r board map texture | [Missives – Gray Cowl Map](https://www.nexusmods.com/skyrimspecialedition/mods/107271) via meta.ini cache | 2023-12-18 | 2026-01-11 cache |
| 12 | Gray Cowl notice notes moved to Missive Board | [We Don't Need Two Boards](https://www.nexusmods.com/skyrimspecialedition/mods/107288) via meta.ini cache | 2025-02-24 | 2026-10-02 (install) |
| 13 | Settings Loader, Raise Disposition, CFTO patch, Unique Boards edits, Diverse boards | LoreRim install meta.ini caches for mods 69617, 61934, 44498, 112095, 111770 | 2021-01-18 – 2025-10-08 | 2026-10-02 |
| 14 | plugin-level reward globals; Settings Loader script/defaults | LoreRim install: `LoreRim - xEdit64 Output/LoreRim - Leveled List Patch.esp` and `Missives.esp` GLOB records (parsed); `Missives - Settings Loader` `_M_MCM.pex` strings and `settings.ini` `[Maintenance] bLoadSettingsonReload=0` | n/a | 2026-10-02 |
