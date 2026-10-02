---
id: listen-dark-brotherhood-radiant
title: Listen - Dark Brotherhood Radiant Quests
kind: mod-added
category: radiant
summary: As the Listener, you can speak to the Night Mother to get repeatable radiant kill contracts in five city regions (Whiterun, Windhelm/Eastmarch, Riften, Solitude, Markarth). Payment waits in a Dead Drop, and you can hand a contract to another Brotherhood member instead.
mods:
  - name: Listen - Dark Brotherhood Radiant Quests
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/59659
    version: 1.0.0.0
plugins: [Listen.esp]
quests: ["Contract: Kill <Alias=Target>"]
locations: [Dark Brotherhood Sanctuary (Falkreath), Dawnstar Sanctuary, Dead Drop outside of Riften, Solitude Dead Drop, Markarth Dead Drop, Whiterun Hold Dead Drop, Dead Drop in Eastmarch]
region: Skyrim-wide
start: Complete "The Silence Has Been Broken", then talk to the Night Mother. Contracts are offered until "To Kill an Empire" is finished and again after "Hail Sithis!" (per the shipped script triggers).
related: [mod-added/additional-contracts-dark-brotherhood.md, mod-added/penitus-oculatus.md, vanilla-changes/dark-brotherhood.md]
sources: [1, 2, 3, 4]
confidence: medium
updated: 2026-10-02
---

# Listen - Dark Brotherhood Radiant Quests

Listen makes the Listener role meaningful by having the Night Mother hand out radiant kill contracts [2]. There are five region-specific contract quests: Whiterun, Windhelm (Eastmarch), Riften, Solitude and Markarth. Each puts payment in a Dead Drop in that region [1]. According to the mod page, the 60 possible targets are vanilla NPCs in cities, towns, farms and dungeons across all nine holds [2].

## Starting in LoreRim
- The mod page says you can speak with the Night Mother after completing **The Silence Has Been Broken** [2].
- The shipped trigger scripts make the Night Mother talk prompt fire under two conditions [3]:
  - The Silence Has Been Broken (`DB04a`) is complete and To Kill an Empire (`DB09`) is not.
  - Hail Sithis! (`DB11`) is complete. This covers the post-questline Dawnstar Sanctuary, where the Night Mother moves.
- Each time you speak to her, each of the five contracts not already running starts with the probability set by a global. The MCM slider defaults to **0.75**. If none rolls, the first available one is given anyway [3].
- No LoreRim-specific gate or LoreRim MCM override for this mod was found in "LoreRim - MCM and INI Settings", so the mod's own defaults apply [4] (unverified that the plugin's global matches the MCM default).

## Quests
### Contract: Kill <Alias=Target>
This is a radiant template with five copies: `LTNQuestWhiterun`, `LTNQuestWindhelm`, `LTNQuestRiften`, `LTNQuestSolitude` and `LTNQuestMarkarth` [1].
- **Giver / trigger:** The Night Mother, through the start-game-enabled handler quest `LTNQuestHandler` [1][3].
- **Where:** The target is a random NPC from that region's list. Payment goes to the region's Dead Drop: "Dead Drop outside of Riften", "Solitude Dead Drop", "Markarth Dead Drop", "Whiterun Hold Dead Drop" or "Dead Drop in Eastmarch" [1].
- **Steps:**
  1. Kill <Alias=Target>.
  2. Retrieve payment from the Dead Drop. You can do the two steps in either order, and the quest completes once both are done [1][3].
- **Choices & outcomes:** You can delegate the contract through dialogue. The journal reads "I have tasked another Dark Brotherhood member with killing the target. They have collected the payment." The script then kills the target and removes the Dead Drop gold, so you get no payment [1][3].
- **Completion:** "I have killed the target, and retrieved my payment. I should return to the Night Mother for more tasks." [1]
- **Markarth:** Thonar Silver-Blood joins the Markarth target list once *No One Escapes Cidhna Mine* (`MS02`) reaches stage 250 [3].

## Rewards & notable items
- Gold in the Dead Drop equal to the reward global ±100 (in steps of 10). The MCM default is an average of **500 gold**, adjustable from 100 to 1000 [3].
- MCM options are "Quest Chance" and "Average Reward" [2][3].

## LoreRim notes
- Listen also edits the vanilla radiant quest **The Dark Brotherhood Forever** (`DBrecurring`) [1].
- LoreRim ships a JK's Dark Brotherhood Sanctuaries compatibility patch for Listen (`JKs Dark Brotherhood Sanctuary - Listen DB Radiant Quests patch.esp`) [4].
- All dialogue uses vanilla voice lines [2].
- The mod page itself was not reachable (HTTP 403), and the install has no cached description. The page claims here come from a search-engine summary of the Nexus page [2].

## Related
- [additional-contracts-dark-brotherhood.md](additional-contracts-dark-brotherhood.md)
- [penitus-oculatus.md](penitus-oculatus.md)
- [../vanilla-changes/dark-brotherhood.md](../vanilla-changes/dark-brotherhood.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest records, objectives, Dead Drop names, DBrecurring override | LoreRim install: `Listen.esp` QUST records (profile Default) | mod v1.0.0.0 | 2026-10-02 |
| 2 | features (Night Mother, 60 targets, delegation, MCM, vanilla voice) | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/59659) via a web search result summary (page itself returned 403) | n/a | 2026-10-02 |
| 3 | start triggers, quest-chance logic, reward formula, delegation, Thonar | LoreRim install: `Listen - Dark Brotherhood Radiant Quests/Scripts/Source/*.psc` (LTNTriggerScript, LTNTriggerScript2, LTNQuestHandlerScript, LTNMCMScript, QF_LTNQuest*) | mod v1.0.0.0 | 2026-10-02 |
| 4 | LoreRim patches and settings | LoreRim install: `profiles/Default/plugins.txt`; `LoreRim - MCM and INI Settings/MCM/Settings` (no Listen file) | n/a | 2026-10-02 |
