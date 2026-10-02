# Verify — mq-expansions-b (normal level, 2026-10-02)

Fresh-context verifier. Spot-checked 12 load-bearing claims. Three web calls were used.

## Claims
- reforging-the-past: perk 0x5218E is named "Arcane Blacksmith" in LoreRim's final load order (Ordinator renames it). **OVERTURNED.** Scanned the winning copy (by MO2 priority) of every enabled plugin for PERK 0x5218E/0xCB413. The only overrides are Requiem.esp and `Requiem Smithing Books Give Perks.esp` ("Advanced Blacksmithing" / "Daedric Smithing"). `modlist.txt` puts `LoreRim - xEdit64 Output` (line 130) above `Ordinator - Perks of Skyrim` (line 406), and that copy of Ordinator.esp has no record for either perk. Corrected `start`, the Recipe step and LoreRim notes. The original claim is kept in a verifier note.
- seeking-the-cure: "LoreRim gates Dawnguard itself behind Laid to Rest". **OVERTURNED (partial).** The cited source, lorerim-site/main.md (Dawnguard), says only the recruiter approach is delayed, and Dayspring Canyon auto-starts the quest. Text corrected, with a verifier note.
- seeking-the-cure: VC01 is renamed "Seeking A Cure"; Falion's ritual fails. **verified.** imports/mods/seeking-the-cure…md override list and the LoreRim site main.md quote.
- seeking-the-cure: A Forlorn Hope letter comes after the 3rd level-up. **verified.** Nexus cache. Independently, `Forlorn Hope.esp` GLOB OK_FH_Counter = 2 and the counter-quest script decrements, then starts on reaching 0 (3rd run). Added the evidence inline.
- caught-red-handed: Requiem.esp overrides FreeformRiften11 last, without the CRH stages 11–13. **verified.** Parsed both plugins. Requiem stages [10,20,30,40,50,60,70,200,250] / objs [10..50]. CRH stages add 11,12,13 and objs 11,13. plugins.txt: CRH 928, Requiem 1599. The NGCDT CRH patch (1691) has only a DIAL group, so it does not restore the quest.
- after-the-civil-war: repair-timer globals 492/336/216/96/720 h. **verified.** `CWRepairs.esp` GLOB records match the Nexus cache.
- soldier-of-stendarr: 5 dust→200, 2 pelts→300, 1 heart→500. **verified.** The Nexus cache in imports/mods/soldier-of-stendarr.md matches the script-derived values.
- leaps-of-faith: edge message "I could probably land in the water from here...". **verified** in the plugin (LeapsOfFaith.esp, not localized). **disputed** wording on the Nexus cache ("I could probably survive this fall"). Both are now cited in the file.
- vittorias-alternate-wedding: the IL patch starts DB05Alt when DB01 stage 199 is done; the DBReformation patch is not shipped. **verified.** VAW_InvitationNoteScriptJaySerpa.psc. The patches meta.ini FOMOD notes list installedPatchFor AI Overhaul/GDO/Innocence Lost and notInstalledPatchFor DBReformation. Innocence Lost QE is enabled in plugins.txt.
- taste-of-death-addon: the boss plugin is not shipped. **verified.** The mod folder holds only TasteOfDeath_Addon_Dialogue.esp + TasteOfDeath_Addon_RingCurse_SMI.esp. The LoreRim site still says "adds new … enemies" (the existing contradiction stays as written).
- bards-college-excavation: 300-gold reward and the LoreRim site quote. **verified.** TIF__05246FB1/FBA.psc `AddItem(Gold001,300)`; lorerim-site/factions.md line 52.
- morihaus-refuge: CC SeedQuest flags 0x119→0x0; Peak's Shade Tower is in Falkreath Hold. **verified.** Parsed ccbgssse021-lordsmail.esl (Official Master Files - Cleaned Plugins) against MorihausRefugeStandalone.esp. UESP Peak's Shade Tower: "East of Falkreath, Southwest of Pinewatch".
- sissels-book: start requires Before the Storm. **verified (partial).** sisselbookquest.esp INFO conditions GetStageDone on Skyrim.esm 0x04E50D = MQ102. "Talk to everyone in Rorikstead" remains FAQ-only. A web search shows the Nexus optional file "restores the accidentally removed quest". Kolb & the Dragon at the Rorikstead Shrine of Akatosh was re-checked on UESP and verified.

## Mechanical pass
- All 12 files: YAML parses, required template fields present, id = file name, frontmatter `sources` = table rows.
- after-the-civil-war: orphan Sources row 4 (never cited inline). Removed the row and its frontmatter entry. Row 2 now also covers the GLOB records.
- Quest names match the import plugin records: Seeking A Cure, A Forlorn Hope, Serana's cure vampirism, Leaps Of Faith, Sissel's Book, Caught Red Handed / A Strong Nord Woman, Repairing the Cities, Return Aegisbane, Reforging the Past, A Healing Wedding, A Bitter Aftertaste, Clear Dead Men's Respite.
- Minor: the leaps-of-faith `level_hint` "Late-game completionist (author)" paraphrases the author's "really a late game endeavour". It was left as is.
