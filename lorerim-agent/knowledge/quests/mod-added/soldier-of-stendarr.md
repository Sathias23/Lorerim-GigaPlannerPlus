---
id: soldier-of-stendarr
title: Soldier of Stendarr
kind: mod-added
category: radiant
summary: A repeatable dialogue-only bounty, not a quest. While you wear an Amulet of Stendarr, any Vigilant of Stendarr will buy vampire dust, werewolf pelts and daedra hearts for gold. Nothing appears in the journal.
mods:
  - name: Soldier of Stendarr
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/97984
    version: 1.0.3.0
  - name: Soldier of Stendarr - Voiced
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/128739
    version: 1.0.1.0
plugins: [soldier_of_stendarr.esp, soldier_of_stendarr - Voiced.esp]
quests: []
locations: []
region: Anywhere Vigilants of Stendarr are found
start: Wear an Amulet of Stendarr and talk to any member of the Vigilant of Stendarr faction. No quest starts and there is no tracker.
related: [mod-added/vigilant.md, mod-added/seeking-the-cure.md, vanilla-changes/dawnguard.md]
sources: [1, 2, 3, 4]
confidence: high
updated: 2026-10-02
---

# Soldier of Stendarr

Soldier of Stendarr adds a **repeatable trade-in** with the Vigilants of Stendarr. You hand over trophies from vampires, werewolves and daedra and get gold back [1][2]. The author states: "It does not activate a quest, so there is no tracker. Either you have the stuff or you don't." [1]. **There is no journal quest content.** The only quest record is a hidden dialogue holder named "Soldier of Stendarr" [2]. LoreRim also ships a voiced add-on [3].

## Starting in LoreRim
- Equip an **Amulet of Stendarr**. The dialogue checks that `ReligiousStendarrMercy` is equipped [2].
- Talk to any NPC in `VigilantOfStendarrFaction` [2]. A dialogue branch opens with the line "Fellow Vigilant…" [2].
- Nothing else is required and LoreRim adds no gate [1][4].

## Quests
No journal quest. The dialogue works like this [1][2]:
- **Trigger:** "Fellow Vigilant…" → the Vigilant answers "Bring us either five vampire dust, two werewolf pelts, or one daedra heart. Show them the mercy of Stendarr."
- **Trade-ins** (taken from the plugin's dialogue scripts) [2]:
  - "I have the vampire dust." → takes 5 Vampire Dust and gives **200 gold**.
  - "I have the werewolf pelts." → takes 2 Werewolf Pelts (the vanilla `WerewolfPelt` misc item) and gives **300 gold**.
  - "I have a daedra heart." → takes 1 Daedra Heart and gives **500 gold**.
- Repeatable without limit. The option only appears when you carry enough of the item [1][2].

## Rewards & notable items
- Gold only: 200, 300 or 500 per turn-in [2].

## LoreRim notes
- The Voiced add-on is installed and enabled in all three profiles. It voices the existing lines and adds nothing new [3][4].
- The base plugin does not edit any NPC records, so it should not conflict with LoreRim's Vigilant content (see [vigilant.md](vigilant.md)) [1].
- The gold values are hard-coded in the dialogue fragment scripts, with no global to adjust them. Nothing in this file shows LoreRim rescaling them for Requiem's economy (unverified) [2].

## Related
- [vigilant.md](vigilant.md): the Vigilant questline mod
- [seeking-the-cure.md](seeking-the-cure.md): vampire dust is also used for the vampirism cure potion there
- [../vanilla-changes/dawnguard.md](../vanilla-changes/dawnguard.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, prices, "no tracker" | [Nexus mod page 97984](https://www.nexusmods.com/skyrimspecialedition/mods/97984) via meta.ini cache | n/a (cache refreshed 2026-01-11) | 2026-10-02 |
| 2 | dialogue lines, conditions (amulet, faction, item counts), gold values | LoreRim install: `soldier_of_stendarr.esp` DIAL/INFO conditions + `source/Scripts/TIF__*.psc` | mod v1.0.3.0 | 2026-10-02 |
| 3 | voiced add-on | [Nexus mod page 128739](https://www.nexusmods.com/skyrimspecialedition/mods/128739) via meta.ini cache | n/a (cache refreshed 2026-01-11) | 2026-10-02 |
| 4 | plugins enabled | LoreRim install: `profiles/Default/plugins.txt` (also Extreme, Ultra) | n/a | 2026-10-02 |
