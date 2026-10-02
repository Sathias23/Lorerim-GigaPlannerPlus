---
id: reforging-the-past
title: Reforging the Past (Mehrunes Dagon's Shrine Unlocked)
kind: mod-added
category: quest-expansion
summary: An alternative to the Daedric quest "Pieces of the Past". You can get into Mehrunes Dagon's Shrine without serving Dagon (pick the lock, pickpocket or persuade Silus for his key), and a master smith can reforge Mehrunes' Razor at any forge. That starts the new quest "Reforging the Past" and ends Pieces of the Past.
mods:
  - name: Mehrunes Dagon's Shrine Unlocked - Pieces of the Past Quest Alternative - Voiced
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/119502
    version: 4.4.0.0
plugins: [SilusJournal.esp, SilusJournal_NonSPID.esp, SilusJournal_COTN.esp, SilusJournal_Dialogue.esp, SilusJournal_RynShrine.esp, SilusJournal_ReforgeRazor.esp, SilusJournal_Reforge_COTN.esp]
quests: [Reforging the Past, Pieces of the Past]
locations: [Shrine of Mehrunes Dagon, Dawnstar, Mythic Dawn Museum]
region: The Pale (Dawnstar; shrine in the Pale mountains)
start: "Read Silus's journal in his house in Dawnstar, then confront him for the shrine key. Or pick the shrine's Master lock, or pickpocket his spare key. To reforge: gather the three Razor pieces, then persuade Silus ('There is another way, I can reforge it.') or just craft it at a forge. You need 3 Daedra Hearts plus the Daedric Smithing and Advanced Blacksmithing perks (Skyrim.esm perks 0xCB413 and 0x5218E as named in LoreRim)."
related: [vanilla-changes/daedric-quests.md, mod-added/taste-of-death-addon.md, mod-added/boethiahs-calling-alternate.md, mod-added/mephalas-curse.md, areas/the-pale-and-dawnstar.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: high
updated: 2026-10-02
---

# Reforging the Past (Mehrunes Dagon's Shrine Unlocked)

This mod by MadAborModding is aimed at characters who are not evil but still want Mehrunes' Razor or the loot in Dagon's shrine. It adds several ways into the **Shrine of Mehrunes Dagon** that don't involve helping Silus Vesuius or siding with Dagon. A skilled smith can also **reforge the Razor themselves**, which is tracked by the new quest **Reforging the Past** [1][3]. The LoreRim site describes it as designed "for player characters that aren't evil but still want to loot the shrine or purge the Daedra within" [3].

## Starting in LoreRim
- **Vanilla baseline:** *Pieces of the Past* (DA07) starts with Silus in Dawnstar. You collect the pommel, the blade shards and the hilt, meet Silus at the shrine, speak to Dagon, kill Silus, then reforge and claim the Razor [2].
- **Ways into the shrine** [1]:
  - The shrine door now has a **Master** lock and can be picked. The Dremora's key still works.
  - Silus carries a **spare key** you can pickpocket or loot.
  - **Silus's Journal** in his house explains where the key came from. After reading it you can demand the key: persuade ("The shrine is dangerous. I can clear it out."), intimidate, or offer a bribe, which he refuses.
  - You can also tell Silus to close the museum. Persuading fails politely. Intimidating makes him attack, and he can then be killed **without a bounty**.
- **Reforging route** [1][4]:
  - Persuade Silus with "There is another way, I can reforge it." This needs a Speech check *or* the Daedric smithing perk. On success he pays you if you bring the Razor back. On failure he goes to the shrine as in vanilla.
  - You can also skip Silus entirely. The Razor pieces spawn after Silus invites you into the museum (vanilla behaviour), and Silus carries a copy of *The Keepers of the Razor* that lists their locations [1].
- LoreRim adds no extra gate. It ships every optional plugin (key via both SPID and a non-SPID esp, the COTN Dawnstar patches, the Ryn's Shrine patch, and the reforge module) [5].

## Quests
### Reforging the Past (`DA07PlayerHasReforged`)
- **Giver / trigger:** start-game enabled, and advances when you agree the reforge with Silus or when you craft the Razor [4].
- **Steps** (objectives and journal from the plugin) [4]:
  1. Reforge the Razor at any forge. Journal: "Successfully reforging the Razor will require me being skilled in working with both enchanted and Daedric materials."
  2. (Optional) Return the Razor to Silus.
- **Recipe** (two constructible-object records, both made at a normal smithing forge) [4]:
  - Needs **3 Daedra Hearts**, all three vanilla Razor pieces, and two perks: Skyrim.esm `0xCB413` and `0x5218E`. In LoreRim's final load order these are named **"Daedric Smithing"** and **"Advanced Blacksmithing"**. The last plugin to override both is `Requiem Smithing Books Give Perks.esp` (Requiem names). LoreRim's xEdit-output copy of `Ordinator - Perks of Skyrim.esp` does not override `0x5218E`, so Ordinator's "Arcane Blacksmith" name does not apply [6].
  - The second recipe uses the Silus-quest versions of the pieces [4].
- **Choices & outcomes** [1][4]:
  - Give it to Silus ("Here it is.") for a "substantial reward" in gold. Journal stage 25.
  - Keep it ("I reclaimed the fragments… The Razor is mine."). Silus tries to take it by force unless you pass an intimidation check. Journal stage 30.
  - If you never agreed to help him, Silus offers to buy it, and you can refuse.
  - Reforging this way automatically ends or fails *Pieces of the Past* [1].
- **Side option:** if you did not agree to help Silus and carry *The Keepers of the Razor*, you can warn **Jorgen**, the keeper of the hilt. A persuasion check gets you his house key and the hilt from a chest [1].

## Locations
- **Shrine of Mehrunes Dagon** ("the Shrine in the Pale Mountains" in Silus's journal): LoreRim uses *Ryn's Mehrunes Dagon's Shrine* and ships its patch [1][5].
- **Silus Vesuius's house / Mythic Dawn Museum, Dawnstar**: holds the journal. COTN Dawnstar patches are installed [1][5].

## Rewards & notable items
- **Mehrunes' Razor** (player-reforged version), without a Daedric pact [1][4].
- Gold from Silus if you sell it [1].
- **Silus's Journal**, with Silus's backstory of retrieving a page of the Mysterium Xarxes [1].

## LoreRim notes
- In LoreRim the perk requirements show up with whatever names the final load order gives them. See the Recipe step for the names verified in this install's plugins [6]. The mod page calls them "Daedric & Arcane Blacksmith perks" (the Ordinator name for `0x5218E`) [1]. *Verifier note (2026-10-02): an earlier draft said Ordinator renames `0x5218E` to "Arcane Blacksmith" in LoreRim. That holds for the original Ordinator plugin, but MO2 serves the higher-priority `LoreRim - xEdit64 Output` copy of the plugin, which carries no record for either perk.*
- `SilusJournal_ReforgeRazor.esp` loads early (position 180) and the other Silus plugins load late (2518–2522). There are no conflicts on the new quest record [5].
- *Pieces of the Past* itself (DA07) is also overridden by the cleaned master files and the Wintersun/Daedric Shrines replacer [2].
- Every response is a reused vanilla line. No AI or splicing [1].

## Related
- [../vanilla-changes/daedric-quests.md](../vanilla-changes/daedric-quests.md)
- [taste-of-death-addon.md](taste-of-death-addon.md), [boethiahs-calling-alternate.md](boethiahs-calling-alternate.md), [mephalas-curse.md](mephalas-curse.md): other MadAborModding Daedric expansions
- [../areas/the-pale-and-dawnstar.md](../areas/the-pale-and-dawnstar.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, dialogue options, patches | [Nexus mod page 119502](https://www.nexusmods.com/skyrimspecialedition/mods/119502) via meta.ini cache | n/a (cache refreshed 2026-02-05) | 2026-10-02 |
| 2 | vanilla DA07 baseline; override chain | imports/official-quests.json; imports/vanilla-quest-overrides.json | n/a | 2026-10-02 |
| 3 | LoreRim description | [LoreRim site — Quest Expansions](https://www.lorerim.com/guides/quests/quest-expansions) | n/a | 2026-10-02 |
| 4 | quest name, objectives, journal, COBJ recipes | LoreRim install: `SilusJournal_ReforgeRazor.esp` QUST + COBJ records | mod v4.4.0.0 | 2026-10-02 |
| 5 | shipped/enabled plugins, load positions, Ryn's shrine present | LoreRim install: `profiles/Default/plugins.txt`; `mods/Ryn's Mehrunes Dagon's Shrine/` | n/a | 2026-10-02 |
| 6 | perk names in final load order | LoreRim install: PERK 0xCB413/0x5218E in `Requiem.esp`, `Requiem Smithing Books Give Perks.esp` (LoreRim - MCM and INI Settings); `Ordinator - Perks of Skyrim.esp` as served from `mods/LoreRim - xEdit64 Output/` (higher MO2 priority in `profiles/Default/modlist.txt`, no override of either perk) | n/a | 2026-10-02 |
