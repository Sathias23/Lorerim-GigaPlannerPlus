---
id: dragon-hunting
title: Dragon Hunting (Blades rewards and dragon ingredients)
kind: mod-added
category: radiant
summary: Makes Esbern's radiant "Dragon Hunting" quest repeat every 24 in-game hours, replaces the Blades' rewards (Blessing of the Blades, a reworked Dragon Infusion), and adds six dragon alchemy ingredients you can loot and sell to Farengar (prices halved in LoreRim).
mods:
  - name: Dragon Hunting
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/99193
    version: 2.0.3.0
  - name: Quantity Trade - Dragon Hunting
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/167959
    version: 1.0.0.0
plugins: [DragonHunting.esp, DragonHuntingPaarthurnaxQE.esp, Quantity Trade - Dragon Hunting.esp]
quests: [Dragon Hunting, Dragon Research, Alteration Ritual Spell]
locations: [Sky Haven Temple, Dragonsreach]
region: Sky Haven Temple (the Reach); Farengar in Dragonsreach, Whiterun
start: Do the main quest through Alduin's Wall and Rebuilding the Blades, then ask Esbern at Sky Haven Temple about dragons; the hunt repeats every 24 in-game hours. Dragon parts can be looted from any dragon and sold to Farengar at any time.
related: [vanilla-changes/main-quest-and-alternate-start.md, mod-added/redeeming-fultheim.md, mod-added/destroy-the-dragon-cult.md, mod-added/radiant-and-world-events.md, mod-added/missives.md, areas/dragons-awaken-lairs.md]
sources: [1, 2, 3, 4, 5, 6, 7, 8]
confidence: high
updated: 2026-10-02
---

# Dragon Hunting

Dragon Hunting is a Blades and dragon-economy add-on built to make dragon kills worth hunting under a dragon overhaul [2]. It does four things [2]:
- Esbern's radiant **Dragon Hunting** quest repeats on a 24-hour timer.
- The Blades' rewards are replaced with **Blessing of the Blades** and a reworked **Dragon Infusion**.
- Dragons drop six ESO-inspired alchemy ingredients.
- **Farengar** buys dragon parts.

The LoreRim site lists it among the main quest's Blades improvements: "improved rewards from the Blades and exclusive alchemy ingredients from dragons for a worthwhile hunting" [3].

## Starting in LoreRim
- **Dragon Hunting (Esbern):** vanilla gives this quest after *Alduin's Wall* and *Rebuilding the Blades*. Rebuilding the Blades needs three Blades recruits. The quest is not offered while *Paarthurnax* is active [4]. The mod makes it repeatable every 24 in-game hours [2]. It does not edit the quest record itself. Instead it overrides the Sky Haven Temple story-manager node (`SkyHavenTempleNode`) and adds a controller quest [1].
- **Blessing of the Blades:** after Rebuilding the Blades, ask Esbern "Any advice for fighting dragons?" [1][2].
- **Dragon Research:** Esbern now wants **3 Dragon Blood, 3 Dragon Bile and 3 Dragon Rheum** before he brews Dragon Infusion. Vanilla asked for a dragon bone and a dragon scale [1][2][4].
- **Selling parts to Farengar:** not gated. Farengar in Dragonsreach has a "Buy Dragon Parts" dialogue for Dragon Bone, Dragon Scales and the six new ingredients [1].
- **LoreRim patches:** LoreRim installs the bundled *Paarthurnax - Quest Expansion* patch (`DragonHuntingPaarthurnaxQE.esp`, which overrides Dragon Research) [5]. LoreRim also halves Farengar's prices (see LoreRim notes) [6].

## Quests
### Dragon Hunting (FreeformSkyHavenTempleB)
- **Giver:** Esbern, Sky Haven Temple [4].
- **Steps:** Kill the dragon in the named lair → Return to Esbern. The objective text is unchanged from vanilla [7].
- **Change:** repeatable every 24 in-game hours [2]. The hand-in line is "The dragon of `<DragonLair>` is dead." [1]

### Dragon Research (FreeformSkyHavenTempleD)
- **Giver:** Esbern [4].
- **Steps:** "Bring 3 Dragon Blood, 3 Dragon Bile and 3 Dragon Rheum to Esbern" (objective text in both `DragonHunting.esp` and `DragonHuntingPaarthurnaxQE.esp`). The hand-in topic is "Here are your dragon blood, dragon bile and dragon rheum." [1][2]
- **Reward:** **Dragon Infusion**, "You take 10% less damage from Dragons." [1][2] Vanilla's infusion gave 25% less melee damage from dragons [4]. A SPID file gives every dragon a matching Dragon Infusion perk, which is how the reduction is applied [1][8].

### Alteration Ritual Spell (MGRitual05)
- **What it is:** Tolfdir's College ritual quest. Vanilla objectives: use Kahvozein's Fang to collect heartscales, then bring Dragon Heartscales to Tolfdir [7].
- **Change:** Dragon Hunting overrides the quest record and its script, presumably to use the new **Dragon Heartscales** ingredient. The hand-in line is "Here's your heartscales." [1] The exact behavior change is **unverified**.

## Rewards & notable items
- **Blessing of the Blades:** "Your weapon enchantments are 25% stronger against Dragons" for 8 hours [1][2]. It replaces vanilla's Dragonslayer's Blessing, which gave +10% critical chance against dragons for 5 days after Alduin's Wall [4].
- **Dragon Infusion:** a permanent 10% damage reduction against dragons [1][2].
- **Dragon ingredients:** looted from dead dragons alongside bone and scales [2].
  - Dragon Blood: Frenzy, Fortify Health/Magicka/Stamina Regeneration.
  - Dragon Bile: Weakness to Fire/Frost/Shock/Poison.
  - Dragon Rheum: Poison Damage, Restore Health/Magicka/Stamina.
  - Dragon Claw: Fortify One-handed, Two-handed, Marksman, Destruction.
  - Dragon Heartscales: Resist Fire/Frost/Shock/Poison.
  - Dragon Horn: Fortify Heavy Armor, Health, Magicka, Stamina.
  - **Kahvozein's Fang:** the "body-part" ingredients can only be looted while it is in your inventory. It is found in one of the Dragon Priest dungeons [2].

## LoreRim notes
- **Farengar's prices are halved.** `LoreRim - Leveled List Patch.esp` lowers the price globals to [6]:
  - **75** for common parts (Dragon Bone, Dragon Scales).
  - **100** for uncommon parts (Blood, Bile, Rheum).
  - **125** for rare parts (Claw, Heartscales, Horn).
  - The mod's own values are 150/200/250 [1].
  - The common/uncommon/rare grouping comes from which global each sell topic quotes [1].
  - No later plugin overrides these globals [6].
- **Ingredient rebalance.** `LoreRim - Alchemy Tweaks.esp` rewrites all six ingredients' magnitudes and durations, generally stronger and longer [6]. Examples, assuming the effect order in the mod description:
  - Dragon Blood: regeneration 5 → 32 for 300 s.
  - Dragon Horn: first effect 2 → 48 for 120 s.
  - Dragon Heartscales: resists 3–4 → 8–12 for 120 s.
  - Treat per-effect numbers as approximate (medium confidence).
- **Quantity slider.** *Quantity Trade - Dragon Hunting* replaces the one-at-a-time sell dialogue with a slider when selling dragon parts to Farengar [5].
- **Dialogue patch.** `LoreRim - Dialogue Patch.esp` also masters DragonHunting.esp, for dialogue conflict resolution; its contents were not inspected [6].
- **Patches not installed.** The FOMOD offered patches for Apothecary, At Your Own Pace – College of Winterhold, Missing Follower Dialogue – Esbern and Run For Your Lives. LoreRim installed only the Paarthurnax – Quest Expansion one [5].

## Related
- [Main quest & alternate start](../vanilla-changes/main-quest-and-alternate-start.md) — Blades, Paarthurnax Quest Expansion.
- [Redeeming Fultheim](redeeming-fultheim.md), [Destroy the Dragon Cult](destroy-the-dragon-cult.md)
- [Radiant and world events](radiant-and-world-events.md) — Dragons Awaken named dragons.
- [Dragons Awaken lairs](../areas/dragons-awaken-lairs.md)
- [Missives](missives.md) — "Kill a Dragon" board bounties (3,000 gold in LoreRim).

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | records: quests, SM node, spells/effects text, ingredients, Farengar topics, price globals, DISTR ini | LoreRim install: `DragonHunting.esp` (parsed), `DragonHunting_DISTR.ini` | mod v2.0.3.0 | 2026-10-02 |
| 2 | features, 24h repeat, reward stats, ingredient effects, Kahvozein's Fang | [Dragon Hunting Nexus page](https://www.nexusmods.com/skyrimspecialedition/mods/99193) via meta.ini cache | 2025-06-05 (nexusLastModified) | 2026-01-12 cache |
| 3 | LoreRim highlights Dragon Hunting | [LoreRim site — Main quests](https://www.lorerim.com/guides/quests/main) | n/a | 2026-10-02 |
| 4 | vanilla baselines (prereqs, Dragon Research, Dragonslayer's Blessing) | UESP: [Dragon Hunting](https://en.uesp.net/wiki/Skyrim:Dragon_Hunting), [Dragon Research](https://en.uesp.net/wiki/Skyrim:Dragon_Research), [Dragonslayer's Blessing](https://en.uesp.net/wiki/Skyrim:Dragonslayer%27s_Blessing) | n/a | 2026-10-02 |
| 5 | installed FOMOD patches; Quantity Trade feature | LoreRim install: Dragon Hunting meta.ini FOMOD notes; [Quantity Trade page](https://www.nexusmods.com/skyrimspecialedition/mods/167959) via meta.ini cache | 2026-01-01 | 2026-01-11 cache |
| 6 | LoreRim price and alchemy overrides, load order | LoreRim install: `LoreRim - Leveled List Patch.esp`, `LoreRim - Alchemy Tweaks.esp` (parsed), Default `loadorder.txt` | n/a | 2026-10-02 |
| 7 | vanilla objective text | corpus import `official-quests.json` | n/a | 2026-10-02 |
| 8 | quests overridden (MGRitual05, FreeformSkyHavenTempleD) | corpus import `vanilla-quest-overrides.json` + `imports/mods/dragon-hunting.md` | n/a | 2026-10-02 |
