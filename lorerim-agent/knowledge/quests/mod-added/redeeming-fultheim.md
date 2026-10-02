---
id: redeeming-fultheim
title: Redeeming Fultheim - A Blades Quest Addon (A Forgotten Blade)
kind: mod-added
category: quest-expansion
summary: Once the Blades are in Sky Haven Temple, point out Fultheim's Akaviri sword at the Nightgate Inn to start "A Forgotten Blade". You convince the former Blade to rejoin by appealing to honor (bring a Dragon Bone) or to revenge (bring Thalmor Justiciar Robes).
mods:
  - name: Redeeming Fultheim - A Blades Quest Addon
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/136788
    version: 1.2.0.0
plugins: [Redeeming Fultheim - Blades Quest Addon.esp]
quests: [A Forgotten Blade]
locations: [Nightgate Inn, Sky Haven Temple]
region: Eastmarch (Nightgate Inn) and the Reach (Sky Haven Temple)
start: After completing "Alduin's Wall" (Blades moved into Sky Haven Temple), talk to Fultheim at the Nightgate Inn and choose the new dialogue about his Akaviri sword.
related: [vanilla-changes/main-quest-and-alternate-start.md, mod-added/dragon-hunting.md, mod-added/destroy-the-dragon-cult.md, areas/eastmarch-and-windhelm.md]
sources: [1, 2, 3, 4, 5]
confidence: high
updated: 2026-10-02
---

# Redeeming Fultheim - A Blades Quest Addon (A Forgotten Blade)

Fultheim is a vanilla NPC who carries a rare Blades sword but has no story [2][3]. This mod adds the quest **A Forgotten Blade** to explain his past and lets you bring him back into the Blades [1][2]. It has 90+ new lines for Delphine, Esbern and Fultheim, voiced with ElevenLabs [2]. The LoreRim site recommends it among the Blades expansions [4].

## Starting in LoreRim
- **Trigger:** A new dialogue option with **Fultheim** about his Akaviri sword [2].
- UESP places Fultheim at the **Nightgate Inn**; he "never even leaves the Nightgate Inn" [3].
- **Gate:** The topic only appears once the Blades have moved into **Sky Haven Temple**, i.e. after completing **Alduin's Wall** [2]. The plugin's opening Fultheim line checks that Alduin's Wall (`MQ203`) is completed [5].
- No other LoreRim-specific gate was found [4].

## Quests
### A Forgotten Blade
- **Giver / trigger:** Fultheim (Akaviri sword dialogue) [2].
- **Steps:**
  1. Speak to Delphine about Fultheim.
  2. (Optional) Speak to Esbern about Fultheim.
  3. Recruit Fultheim into the Blades.
  4. Bring him proof of what the Blades can do, depending on your appeal:
     - Bring a Dragon Bone to Fultheim, or
     - Bring a Thalmor Justiciar's Robes to Fultheim [1].
- **Choices & outcomes** [1][2]:
  - **Honor appeal (Dragon Bone):** "he seeks to redeem himself as a Dragonslayer."
  - **Revenge appeal (Thalmor Justiciar's Robes):** he rejoins "Not for honor, but for vengeance against Thalmor and all that they have done to the blades."
  - **Insult him:** he attacks you, and he can no longer be recruited.
  - The mod page says your choice shapes what kind of person Fultheim is in the Blades, and changes Delphine's and Esbern's opinions of him.
- **Rewards:** No item reward is documented. Turning him into a follower is listed only as a future plan, not a current feature [2].

## LoreRim notes
- No vanilla records are modified, and the author says it is safe to install or update mid-game [2].
- All NPCs use vanilla templates, so the author calls it Requiem-compatible. The mod has no combat with the new NPC [2].
- Dragon Bones come from slain dragons; LoreRim's Dragon Hunting changes are covered in [dragon-hunting.md](dragon-hunting.md).

## Related
- [../vanilla-changes/main-quest-and-alternate-start.md](../vanilla-changes/main-quest-and-alternate-start.md)
- [dragon-hunting.md](dragon-hunting.md)
- [destroy-the-dragon-cult.md](destroy-the-dragon-cult.md)
- [../areas/eastmarch-and-windhelm.md](../areas/eastmarch-and-windhelm.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | quest name, objectives, journal text | LoreRim install: `Redeeming Fultheim - Blades Quest Addon.esp` QUST records (profile Default) | mod v1.2.0.0 | 2026-10-02 |
| 2 | start trigger, Alduin's Wall gate, choices, compatibility | [Nexus mod page](https://www.nexusmods.com/skyrimspecialedition/mods/136788) via meta.ini cache | 2024-12-21 (nexusLastModified) | 2026-01-11 cache |
| 3 | Fultheim lives at the Nightgate Inn; carries a Blades sword | [UESP — Skyrim:Fultheim](https://en.uesp.net/wiki/Skyrim:Fultheim) | n/a | 2026-10-02 |
| 4 | LoreRim mention | [LoreRim site — Main Quests](https://www.lorerim.com/guides/quests/main) | n/a | 2026-10-02 |
| 5 | start-dialogue condition (GetQuestCompleted MQ203) | LoreRim install: `Redeeming Fultheim - Blades Quest Addon.esp` INFO conditions (parsed; MQ203 036192 resolved via official-quests.json) | mod v1.2.0.0 | 2026-10-02 |
