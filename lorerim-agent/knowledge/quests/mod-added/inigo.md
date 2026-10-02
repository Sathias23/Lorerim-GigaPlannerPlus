---
id: inigo
title: Inigo (follower) — Bad Vibrations
kind: mod-added
category: follower-quests
summary: Inigo is a fully voiced, essential Khajiit follower found in Riften Jail; his one personal quest, "Bad Vibrations", takes you to Snowpoint Beacon and Langley's House and rewards the Summon Inigo spell. The rest of his content is hidden conversation trackers.
mods:
  - name: INIGO
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/1461
    version: 2.4.0.0C
  - name: Inigo Official Patch SE
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/62868
    version: 2.0.0.0fe
  - name: Inigo - Bloodchill Manor patch
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/58317
    version: 1.0.0.0
  - name: Inigo - BloodChill Manor Patch - Cave Entrance Navmesh Fix
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/138140
    version: 1.1.0.0
  - name: Snowpoint - Inigo
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/146533
    version: f1.01
  - name: DementedLulu's INIGO 2.0
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/126199
    version: 1.0.0.0
  - name: Inigo Reacts To Your Music
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/50357
    version: 1.75.0.0
plugins: [Inigo.esp, Inigo Official Patch SE (ESPFE).esp, Eli_InigoBloodchillPatch.esp, Inigo-Bloodchill-NavMeshFix.esp, Inigo - Snowpoint Patch.esp, Lulu's Inigo.esp, Lulu's Inigo - Reqtificated.esp, Requiem - Inigo.esp, SkyrimsGotTalent-Bards_inigo.esp, SetHomeInigoBugFix.esp]
quests: [Bad Vibrations, "INIGO, WHERE ARE YOU?"]
locations: [Riften Jail, Snowpoint Beacon, Langley's House]
region: Riften (recruitment); Winterhold Hold near Snowpoint Beacon (quest)
start: Talk to Inigo in Riften Jail (first cell on the left, next to Sibbi Black-Briar). Hear his past ("Tell me more about your past.") and learn his brother's name; Bad Vibrations then starts at random while travelling. No LoreRim-specific gate found.
related: [mod-added/lucien.md, mod-added/follower-dialogue-expansions.md, mod-added/auri-song-of-the-green.md, mod-added/vigilant.md, areas/winterhold.md, areas/the-rift-and-riften.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: high
updated: 2026-10-02
---

# Inigo (follower) — Bad Vibrations

Inigo is a custom-voiced Khajiit companion with over 7,000 lines; he is essential, levels with you, runs on his own follower framework and does not count against your follower limit [3]. LoreRim lists him on its official Followers page and places him in Riften Jail [1]. His story content in the shipped version (v2.4C) is one short personal quest, **Bad Vibrations**, which the author calls "an introduction to future events"; the planned V3 continuation is not part of this version [3].

## Starting in LoreRim
- **Where:** Riften Jail, in the first cell on your left, next to Sibbi Black-Briar [1][3]. He is technically not a prisoner: you don't have to pick the lock, and a letter on the table explains more [3]. Notes found while travelling can point you to the jail [3].
- **Recruit:** talk to him. The first time you talk to him in the main Skyrim worldspace he adds himself to your map, which creates the misc entry "INIGO, WHERE ARE YOU?" [2][3].
- **Quest trigger:** pick "Tell me more about your past." and listen to his story, in one go or in parts. Once you've heard it and learned his brother's name, Bad Vibrations "can begin at random while you're adventuring across Skyrim" [3].
- **LoreRim gates:** I found no delayed start, level gate or LoreRim-specific prerequisite. The LoreRim site gives only his location [1]. LoreRim does ship a Requiem integration patch and several compatibility patches (see LoreRim notes) [4].
- **Don't** put Inigo into another follower framework. The author warns this "will break his brain" [3].

## Quests
### Bad Vibrations
- **Giver / trigger:** starts on its own after his backstory conversation (see above) [3]. Inigo has "been suffering from strange and painful visions" [2].
- **Where:** Snowpoint Beacon, then a mountain path to Langley's House east of the Beacon [2][3][5].
- **Steps** (plugin objectives) [2]:
  1. Get to Snowpoint Beacon and talk to Inigo.
  2. Follow Inigo! Then find the cabin. Wooden posts from his visions lead the way.
  3. Find at least six Snow Thrush eggs in the area outside Langley's house. There are eight nests nearby.
  4. Check on the state of Inigo's mind.
  5. Get a copy of the Summon Inigo spell from Langley. Inigo suggests asking, and "maybe he can be persuaded".
  6. Learn the spell and cast it.
- **Choices & outcomes:** after the quest, sit somewhere safe with Inigo and talk. "There's a little more to take care of": you settle "the matter of your shared past", which unlocks more conversations. The author also suggests going back to Langley's cabin now and then [3].
- **Rewards:** *Spell Tome: Summon Inigo* / the **Summon Inigo** spell [2]. Finishing the quest "unlocks a lot of additional content" [3].

### INIGO, WHERE ARE YOU?
- Misc entry with the single objective "Inigo Map Marker": "Inigo marked himself on my map so I can always find him if we become separated." You can toggle it from the journal [2][3].

### Hidden conversation trackers (no journal quest)
- **Player-started conversations** (`InigoPlayerQuestions`) run in sequence: Fur → Life Goal (peace and happiness / power and wealth / "I don't want to be forgotten") → Destiny (believe / don't believe) → Bravery (player likes / dislikes fighting). Your answers shape later dialogue [2].
- **NPC scenes** (`InigoNpcChatMain`, `InigoNPCTalkedTo`) record his talks with Lydia, Kharjo, Mjoll, J'zargo, Erik, Derkeethus, Erandur and Jenassa [2]. The Nexus page also lists scenes with Meeko and Vigilance, plus random non-follower NPCs [3].

## Locations
- **Riften Jail** — vanilla jail where you recruit him [1][3].
- **Snowpoint Beacon** — a vanilla tower in Winterhold Hold, "Southwest of Winterhold. East of Fort Fellhammer" [5]. Inigo's quest changes it temporarily [3]. LoreRim ships the *Snowpoint* overhaul with a dedicated `Inigo - Snowpoint Patch.esp`, which edits the `LangleyPath1` cell [4].
- **Langley's House** (`LangleyHouseIntLoc`; exterior `Langley's House Ext`) — a new cabin up a permanently altered stretch of mountain "to the East of the Beacon just over the first rise" [2][3]. The plugin's Langley path and grounds cells sit between Snowpoint Beacon and Wayward Pass [6].

## Rewards & notable items
- **Summon Inigo** spell (Bad Vibrations) [2].
- **The Power of Whistling** (book) and the **Whistle to Inigo** power, given a short time after you share your opinion of his map marker. They let you control his aggression, wait/follow/relax and command mode [2][3].
- **Muffle Tongue Necklace** (silences his idle chatter) is found in his cell [2][3].
- **Mr Dragonfly** — put it in Inigo's inventory to unlock "hundreds of new potential lines" [2][3].
- Horse gifting: you can give him any horse you own [3].
- Recovery console commands (`setpqv InigoStatus Recover Inigo|MrD|Bow|Books`) are documented by the author [3].

## LoreRim notes
- **Requiem balance:** `Requiem - Inigo.esp` (Requiem Patch Central) overrides Inigo's and Langley's NPC records and adds a Requiem registration quest. LoreRim's generated `Lulu's Inigo - Reqtificated.esp` re-applies those changes on top of *DementedLulu's INIGO 2.0* and the Official Patch, overriding Inigo, Langley and three other NPCs, his weapons (including "Inigo's Ebony Bow") and his loot/gift leveled lists [4]. *DementedLulu's INIGO 2.0* overrides only Inigo's NPC record. Judging by its name it is an appearance overhaul (unverified) [4].
- **Inigo Official Patch SE (ESPFE) 2.0** is installed. The author calls it "strongly suggested": it fixes the riding bug under SKSE/RaceMenu and the CC Bards College song conflict [3][4].
- **Bloodchill Manor (CC):** the Manor's entrance conflicts with Inigo's quest path. LoreRim ships Elianora's patch plus a separate cave-entrance navmesh fix, both of which edit the `LangleyPath` cells [3][4].
- **Vigilant:** the author warns that some Vigilant areas are unsafe for Inigo and other followers and suggests leaving him behind for those quests. LoreRim ships Vigilant [3].
- Other patches enabled in the Default profile: *Inigo Reacts To Your Music*, a Settling of Squad set-home bug fix, a Great Village of Kynesgrove patch, Auri–Inigo banter, Lux / DynDOLOD / Synthesis outputs, and Follower Dialogue Expansion patches for Aela, Brelyna, Illia and Jenassa (covered in `follower-dialogue-expansions.md`) [4].
- **Lucien** has fully co-written and co-voiced Inigo interactions [3].
- If Inigo stays ill after Peryite-related events, let him heal himself in a temple without interrupting him. Fallback console fix: `prid xx0e7e0d` then `disable` [3].

## Related
- [Lucien](lucien.md) — co-voiced banter with Inigo
- [Follower Dialogue Expansions](follower-dialogue-expansions.md)
- [Auri — Song of the Green](auri-song-of-the-green.md)
- [Vigilant](vigilant.md)
- [Winterhold area](../areas/winterhold.md), [The Rift and Riften](../areas/the-rift-and-riften.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | Inigo is a LoreRim follower; location in Riften Jail | [LoreRim site — Followers](https://www.lorerim.com/guides/world/followers) | n/a | 2026-10-02 |
| 2 | quest names, objectives, journal text, location and item names | LoreRim install: `Inigo.esp` QUST/LCTN/BOOK/SPEL records (mod INIGO v2.4.0.0C, profile Default) | mod v2.4.0.0C | 2026-10-02 |
| 3 | recruitment, quest trigger, features, compatibility warnings, FAQ | [Nexus mod page 1461](https://www.nexusmods.com/skyrimspecialedition/mods/1461) via meta.ini cache | 2016-11-24 (nexusLastModified) | 2026-01-11 cache |
| 4 | which patches ship and what they override | LoreRim install: `profiles/Default/plugins.txt`, mod-folder meta.ini, and record inspection of `Requiem - Inigo.esp`, `Lulu's Inigo.esp`, `Lulu's Inigo - Reqtificated.esp` (LoreRim - xEdit64 Output), `Inigo Official Patch SE (ESPFE).esp`, `Eli_InigoBloodchillPatch.esp`, `Inigo-Bloodchill-NavMeshFix.esp`, `Inigo - Snowpoint Patch.esp` | n/a | 2026-10-02 |
| 5 | Snowpoint Beacon location | [UESP — Skyrim:Snowpoint Beacon](https://en.uesp.net/wiki/Skyrim:Snowpoint_Beacon) | n/a | 2026-10-02 |
| 6 | exterior cell layout of the quest path | LoreRim install: `Inigo.esp` CELL records (`SnowpointBeaconExterior01`, `LangleyPath0–3`, `LangleyGrounds1`, `LangleysHouse`, `WaywardPassExterior`) | mod v2.4.0.0C | 2026-10-02 |
