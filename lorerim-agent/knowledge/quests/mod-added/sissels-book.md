---
id: sissels-book
title: Sissel's Book
kind: mod-added
category: town-quests
summary: A small Rorikstead misc quest from More To Say. The girl Sissel has lost her book about a dragon. Find her copy and bring it back for a few gold and her friendship.
mods:
  - name: More To Say - Sissel's Book Quest
    nexus: https://www.nexusmods.com/skyrimspecialedition/mods/22622
    version: 9.0.0.0
plugins: [sisselbookquest.esp]
quests: [Sissel's Book]
locations: [Rorikstead]
region: Whiterun Hold (Rorikstead)
start: "Finish Before the Storm and talk to everyone in Rorikstead at least once. Then ask Sissel 'Do you need help with something?' and offer to find her book."
related: [mod-added/more-to-say-quests.md, areas/whiterun-hold.md]
sources: [1, 2, 3, 4]
confidence: medium
updated: 2026-10-02
---

# Sissel's Book

**Sissel's Book** is one of the small Rorikstead quests from the *More To Say* dialogue mod. LoreRim ships it as its own module, "More To Say - Sissel's Book Quest" [1][2]. Sissel, a child in Rorikstead, likes legends and has lost her book. It's "about a dragon." [2].

## Starting in LoreRim
- The More To Say author's FAQ says: "Finish Before the Storm and talk to everyone in Rorikstead at least once. … Sissel can give you another quest." [1]. The plugin agrees on the first part: two of Sissel's dialogue lines check `GetStageDone` on `MQ102` (Before the Storm) [2].
- Dialogue [2]: Sissel says "Do you need help with something?". You answer "I like learning about legends. Jouane says I'm good at learning, but I can't find my book. Maybe you can help me." → "I can help you find your book." The other option is "I'm afraid I can't help you."
- LoreRim adds no extra gate [3].

## Quests
### Sissel's Book (`ACFRoriksteadFreeform02`)
- **Giver / trigger:** Sissel, Rorikstead [2].
- **Steps** (objectives from the plugin) [2]:
  1. Find one <the book>. The objective uses an alias, so the in-game text names the book.
  2. Bring the book to Sissel.
- **Which book:** the quest alias is forced to one particular copy of **Kolb & the Dragon** placed in Skyrim.esm (base `Book1CheapKolbAndTheDragon`, 000EF53E), in an exterior cell of the Whiterun Hold tundra (`POITundra31`) [2][4]. UESP lists a copy of *Kolb & the Dragon* "at the Shrine of Akatosh located north of Frostfruit Inn" in Rorikstead. That is probably the quest's copy (medium confidence) [4].
- **Choices & outcomes:** give the book ("Here is your book.") and Sissel replies "Thanks! Here - this is for you." [2].
- **Rewards:** a small amount of gold (the shared Rorikstead script's `RewardAmount` defaults to 3) [2]. The More To Say Rorikstead dialogue scripts also raise the speaker's relationship rank to at least 1 on some lines. Exactly which lines do this here is unverified [2].

## Locations
- **Rorikstead**: Sissel's home (vanilla) [1].
- **The book**: in the tundra near Rorikstead. Probably the Shrine of Akatosh north of Frostfruit Inn [2][4].

## Rewards & notable items
- A few gold and Sissel's goodwill [2].
- After the quest she has extra Helgen/dragon dialogue: "I had a dream about it…" [2].

## LoreRim notes
- LoreRim installs this quest as its own plugin (`sisselbookquest.esp`, ESL-flagged, needs HearthFires.esm) rather than through the full More To Say FOMOD [2][3]. The meta.ini cache for this mod shows the general More To Say description [1].
- See [more-to-say-quests.md](more-to-say-quests.md) for the other More To Say quests in LoreRim.

## Related
- [more-to-say-quests.md](more-to-say-quests.md)
- [../areas/whiterun-hold.md](../areas/whiterun-hold.md)

## Sources
| # | What it supports | Publisher / source | Published | Accessed |
|---|---|---|---|---|
| 1 | start condition (FAQ), mod context | [Nexus mod page 22622](https://www.nexusmods.com/skyrimspecialedition/mods/22622) via meta.ini cache | n/a (cache refreshed 2026-01-11) | 2026-10-02 |
| 2 | quest name, objectives, dialogue, alias forced reference, reward script | LoreRim install: `sisselbookquest.esp` QUST/INFO records + `source/scripts/*.psc`; Skyrim.esm REFR 001067B9 / BOOK 000EF53E / CELL POITundra31 | mod v9.0.0.0 | 2026-10-02 |
| 3 | plugin enabled | LoreRim install: `profiles/Default/plugins.txt` | n/a | 2026-10-02 |
| 4 | book title and Rorikstead location | [UESP — Kolb & the Dragon](https://en.uesp.net/wiki/Skyrim:Kolb_%26_the_Dragon) | n/a | 2026-10-02 |
