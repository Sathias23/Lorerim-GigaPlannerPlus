---
id: caught-red-handed
title: Caught Red Handed - Quest Expansion (and "A Strong Nord Woman")
kind: mod-added
category: quest-expansion
summary: JaySerpa's expansion of the Riften misc quest "Caught Red Handed". You can refuse to shame Haelga and side with her (Dibellan Arts, Mark of Dibella necklace), or help Svana deal with the harasser Tythis in the new misc quest "A Strong Nord Woman". In LoreRim, Requiem's later override of the main quest record may block the Haelga-side stages.
mods:
  - name: Caught Red Handed - Quest Expansion
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/65708
    version: f1.07
  - name: NGCDT - Caught Red Handed - QE Patch
    nexus: null
    version: null
plugins: [Caught Red Handed - Quest Expansion.esp, NGCDT - Caught Red Handed - QE Patch.esp]
quests: [Caught Red Handed, A Strong Nord Woman]
locations: [Riften, Haelga's Bunkhouse]
region: The Rift (Riften)
start: Start vanilla "Caught Red Handed" by talking to Svana Far-Shield at Haelga's Bunkhouse in Riften. The new choices branch off her conversations and Haelga's.
related: [vanilla-changes/side-quests-and-misc.md, vanilla-changes/thieves-guild.md, areas/the-rift-and-riften.md, mod-added/requiem-quests.md]
sources: [1, 2, 3, 4, 5, 6]
confidence: medium
updated: 2026-10-02
---

# Caught Red Handed - Quest Expansion (and "A Strong Nord Woman")

The vanilla Riften misc quest **Caught Red Handed** has you collect three Marks of Dibella so Svana can shame her aunt Haelga [2]. This expansion keeps that route and adds alternatives. You can refuse to embarrass Haelga, take her side, or help Svana stand up to a harassing customer, Tythis, through a new misc quest called **A Strong Nord Woman** [1][3]. The LoreRim site lists it among JaySerpa's quest expansions [4].

## Starting in LoreRim
- Same as vanilla: Svana Far-Shield at Haelga's Bunkhouse in Riften offers the quest [1][2].
- Tythis has 3–4 new interactions with Svana around the bunkhouse. These lead into A Strong Nord Woman [1].
- **LoreRim load-order caveat:** see LoreRim notes. Requiem.esp loads after the expansion and carries its own version of the `FreeformRiften11` quest record. That version lacks the expansion's added stages [5].

## Quests
### Caught Red Handed (`FreeformRiften11`, expanded)
- **Vanilla:** collect Marks of Dibella from Bolli, Hofgrir and Indaryn, confront Haelga with them, then speak to Svana [2].
- **Expansion's version of the record** [3]: objectives "Obtain a Mark of Dibella from Bolli", "**Speak to Haelga**", "**Get your Mark of Dibella**", "Obtain a Mark of Dibella from Hofgrir", "Obtain a Mark of Dibella from Indaryn", "Confront Haelga with the Marks of Dibella", "Speak to Svana". New stages are 11, 12 and 13 [3].
- **Choices & outcomes** [1]:
  - **Vanilla path:** shame Haelga for Svana. This is still available, with a few extra dialogue choices.
  - **Refuse / protect Haelga's reputation:** gets you on Haelga's good side.
  - **Dibellan Arts:** with a Speech check or as an Agent of Dibella (wearing an amulet of Dibella may help), Haelga may "teach" you. This is a short fade-to-black with voiced lines that gives a temporary **"Experienced Lover's Comfort"** bonus, slightly better than the normal Lover's Comfort. After that, "new lessons" are available every 24 hours if Haelga likes you enough.
  - You **cannot get every reward**. Siding with Svana or with Haelga gives different rewards.

### A Strong Nord Woman (`FreeformRiften11b`)
- **Giver / trigger:** Svana, who confides that Tythis keeps annoying her [1][3].
- **Steps** (objectives from the plugin) [3]: Talk to Tythis → Win the brawl against Tythis *or* Threaten Tythis → Talk to Svana.
- **Choices & outcomes:** beat Tythis in a brawl or convince him to leave her alone, and he stops. Alternatively, encourage Svana to stand up for herself and she confronts Tythis herself [1].

## Locations
- **Haelga's Bunkhouse, Riften**: the mod also edits the vanilla scene "Haelga's Bunkhouse Scene 03" [3][6].

## Rewards & notable items
- **Mark of Dibella** that can be crafted into an enchanted necklace with 20% better prices (Haelga route) [1].
- **Experienced Lover's Comfort**, a temporary bonus [1].

## LoreRim notes
- **Possible conflict (found in plugin records, not play-tested):** LoreRim's load order has `Caught Red Handed - Quest Expansion.esp` at position 928 and `Requiem.esp` at 1599. Requiem.esp overrides `FreeformRiften11` with a record that has the vanilla/USSEP stage list (10, 20, 30, 40, 50, 60, 70, 200, 250) and five objectives with Requiem's longer wording, e.g. "Obtain a Mark of Dibella from Bolli, a Riften fisherman". The expansion's stages 11–13 and its objectives "Speak to Haelga" and "Get your Mark of Dibella" are missing from it [3][5]. No later plugin in the override list forwards them [6]. The Haelga-side route therefore may not progress correctly in LoreRim. The vanilla route and the separate quest **A Strong Nord Woman** use other records and are not affected [3][5].
- LoreRim ships **NGCDT - Caught Red Handed - QE Patch** for Narrative Gameplay Consistent Dialogue Tweaks [5].
- The USSEP patch from the Nexus optional files is not installed. The author says it is not required [1][5].
- The content is suggestive but not explicit: a 10-second fade to black with vanilla voice files [1].

## Related
- [../vanilla-changes/side-quests-and-misc.md](../vanilla-changes/side-quests-and-misc.md)
- [../areas/the-rift-and-riften.md](../areas/the-rift-and-riften.md)
- [requiem-quests.md](requiem-quests.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | features, choices, rewards, FAQ | [Nexus mod page 65708](https://www.nexusmods.com/skyrimspecialedition/mods/65708) via meta.ini cache | n/a (cache refreshed 2026-01-26) | 2026-10-02 |
| 2 | vanilla objectives baseline | imports/official-quests.json (Skyrim.esm `FreeformRiften11`) | n/a | 2026-10-02 |
| 3 | expansion stages/objectives, A Strong Nord Woman objectives | LoreRim install: `Caught Red Handed - Quest Expansion.esp` QUST records | mod vf1.07 | 2026-10-02 |
| 4 | LoreRim listing | [LoreRim site — Quest Expansions](https://www.lorerim.com/guides/quests/quest-expansions) | n/a | 2026-10-02 |
| 5 | load order, Requiem.esp `FreeformRiften11` record, NGCDT patch | LoreRim install: `profiles/Default/plugins.txt`; `Requiem - The Roleplaying Overhaul (No Messages ESLIFIED)/Requiem.esp`; `NGCDT - Caught Red Handed - QE Patch/` | n/a | 2026-10-02 |
| 6 | override chain (USSEP → CRH → Requiem), bunkhouse scene override | imports/vanilla-quest-overrides.json | n/a | 2026-10-02 |
