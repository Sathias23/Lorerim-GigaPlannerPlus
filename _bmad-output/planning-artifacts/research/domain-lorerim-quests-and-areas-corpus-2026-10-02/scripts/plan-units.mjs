#!/usr/bin/env node
// Builds ../work-units.json: the fan-out plan for the corpus run, derived from imports/.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const run = path.resolve(here, "..");
const imports = path.join(run, "imports");
const inv = JSON.parse(await readFile(path.join(imports, "inventory.json"), "utf8"));
const overrides = JSON.parse(await readFile(path.join(imports, "vanilla-quest-overrides.json"), "utf8"));
const official = JSON.parse(await readFile(path.join(imports, "official-quests.json"), "utf8"));
const byName = new Map(inv.mods.map((m) => [m.name, m]));
const modFile = (m) => path.join(imports, "mods", `${m.slug}.md`).replace(/\\/g, "/");

const used = new Set();
function pick(patterns, { separator } = {}) {
  const out = [];
  for (const m of inv.mods) {
    const hit = patterns.some((p) => (p instanceof RegExp ? p.test(m.name) : m.name === p));
    const sepHit = separator && separator.test(m.separator ?? "");
    if (hit || sepHit) out.push(m);
  }
  return out;
}
function modEntry(m) {
  used.add(m.name);
  return {
    name: m.name, separator: m.separator, nexus: m.nexus?.url ?? null, version: m.nexus?.version ?? null,
    importFile: modFile(m), playableQuests: m.newPlayableQuests.length,
    newLocations: m.newNamedLocations.length + m.newWorldspaces.length,
  };
}

// ---------- mod-added quest units ----------
const modUnits = [
  { id: "mq-wyrmstooth", files: ["wyrmstooth"], mods: pick([], { separator: /^Quests - Wyrmstooth/ }) },
  { id: "mq-vigilant", files: ["vigilant"], mods: pick([], { separator: /^Quests - VIGILANT/ }) },
  { id: "mq-gray-cowl", files: ["gray-cowl-of-nocturnal", "hammerfell-quests-bundle"], mods: pick([], { separator: /^Quests - The Gray Cowl/ }) },
  { id: "mq-forgotten-city-saints", files: ["the-forgotten-city", "saints-and-seducers-extended-cut"], mods: pick([], { separator: /^Quests - (The Forgotten City|Saints & Seducers)/ }) },
  { id: "mq-undeath", files: ["undeath"], mods: pick([], { separator: /^Quests - Undeath/ }) },
  { id: "mq-new-a", files: ["journey-to-baan-malur", "siege-at-icemoth", "tools-of-kagrenac", "meridias-order"],
    mods: pick([/Baan Malur/, /Icemoth/, /Kagrenac/, /Meridia's Order/]) },
  { id: "mq-new-b", files: ["gravewind", "sirenroot", "legends-of-aetherium", "heart-of-the-reach", "miasma", "sleepwalking-into-a-nightmare", "demon-of-dream"],
    mods: pick([/Gravewind/, /SIRENROOT|Sirene/i, /Legends of Aetherium/, /Heart of the Reach/, /^Miasma/, /Sleep ?walking Into A Nightmare/i, /Demon of Dream/]) },
  { id: "mq-new-c", files: ["knight-of-the-north", "belethors-sister", "unmasking-sybille", "revealing-rune", "finding-velehk-sain", "the-gift-of-saturalia", "more-to-do-in-the-soul-cairn", "the-welkynar-knight", "fists-of-fury", "ascend-hidden-peaks"],
    mods: pick([/Knight of the North/, /Belethor's Sister|Belethor's General/, /Unmasking Sybille/, /Revealing Rune/, /Velehk Sain/, /Saturalia/, /More to do in the Soul Cairn/, /Welkynar/, /Fists of Fury/, /^Ascend/]) },
  { id: "mq-expansions-a", files: ["additional-contracts-dark-brotherhood", "listen-dark-brotherhood-radiant", "penitus-oculatus", "college-of-winterhold-quest-expansion", "boethiahs-calling-alternate", "destroy-the-dragon-cult", "storm-the-thalmor-embassy", "redeeming-fultheim", "mephalas-curse"],
    mods: pick([/^ACDB/, /^Listen - Dark Brotherhood/, /^Penitus Oculatus/, /^College of Winterhold - Quest Expansion|^OMEAR Addition/, /Boethiah's Calling - Alternate/, /Defeat the Dragon Cult|Destroy the Acolyte/, /Storm the Thalmor/, /Redeeming Fultheim/, /Mephala's Curse|Mephala Revoiced/]) },
  { id: "mq-expansions-b", files: ["seeking-the-cure", "soldier-of-stendarr", "leaps-of-faith", "sissels-book", "caught-red-handed", "after-the-civil-war", "return-aegisbane", "reforging-the-past", "vittorias-alternate-wedding", "taste-of-death-addon", "bards-college-excavation", "morihaus-refuge"],
    mods: pick([/Seeking the Cure|Seeking The Cure|Forlorn Hope|SeranaCureQuestPlus/, /Soldier of Stendarr/, /Leaps of Faith/, /Sissel's Book/, /Caught Red Handed/, /After the Civil War/, /Return Aegisbane/, /Pieces of the Past Quest Alternative/, /Vittorias Alternate Wedding/, /Taste of Death - Quest Addon/, /Bards College Excavation/, /Morihaus' Refuge/]) },
  { id: "mq-followers-a", files: ["inigo", "katana", "remiel", "gore", "lucien"],
    mods: pick([/^INIGO/, /^Katana/, /^Remiel/, /^Gore - A Companion/, /^Lucien/]) },
  { id: "mq-followers-b", files: ["serana-dialogue-expansion", "follower-dialogue-expansions", "auri-song-of-the-green", "taliesin-thalmors-shadow", "the-frozen-heart", "book-of-love-fastreds-awakening"],
    mods: pick([/^Serana Dialogue Expansion/, /^Follower Dialogue Expansion|Fura Bloodmouth/, /Song of the Green/, /Taliesin/, /The Frozen Heart/, /Book of Love/]) },
  { id: "mq-town-quests", files: ["capital-windhelm-expansion-quests", "capital-whiterun-expansion-quests", "arena-markarth-side-quests", "granite-hill-quests", "more-to-say-quests"],
    mods: pick([/^Capital Windhelm Expansion$/, /Capital Whiterun Expansion$/, /^Arena - Markarth Side Town$/, /^Granite Hill - ESLIFIED LUX PATCH$/, /^More to Say - Main$/]) },
  { id: "mq-radiant", files: ["missives", "favor-quests-separated", "companions-radiant-expansion", "dragon-hunting", "radiant-and-world-events"],
    mods: pick([/^Missives/, /Favor Quests Separated/, /Companions Radiant Expansion/, /^Dragon Hunting$|Quantity Trade - Dragon Hunting/, /Hunters Mark/, /Solstheim Earthquakes/, /^Dragons Awaken$/]) },
  { id: "mq-requiem-lorerim", files: ["requiem-quests", "lorerim-specific-quests"],
    mods: pick([/^Requiem - The Roleplaying Overhaul/, /^Requiem - Improved Spell Learning/, /^Trad - AE - CC - Collection - Requiem Patch/, /^LoreRim - xEdit64 Output/, /^Lorerim Lorebox/]) },
];

// ---------- vanilla-change units ----------
const officialByEdid = new Map(official.map((q) => [q.edid, q]));
function questline(o) {
  if (/^cc/i.test(o.origin)) return "creation-club";
  if (/^(C0\d|C\d\d|CR\d)/.test(o.edid)) return "companions";
  if (/^(Bard|MS05)/i.test(o.edid)) return "side-quests";
  const t = { main: "main-quest", "mages-guild": "college-of-winterhold", "thieves-guild": "thieves-guild", "dark-brotherhood": "dark-brotherhood", "civil-war": "civil-war", "civil-war-side": "civil-war", daedric: "daedric-quests", dawnguard: "dawnguard", dragonborn: "dragonborn" }[o.type];
  if (t) return t;
  if (/^MQ/.test(o.edid)) return "main-quest";
  if (/^DLC1/.test(o.edid)) return "dawnguard";
  if (/^DLC2/.test(o.edid)) return "dragonborn";
  if (/^(TG|DB|MG|CW|DA)\d/.test(o.edid)) return { TG: "thieves-guild", DB: "dark-brotherhood", MG: "college-of-winterhold", CW: "civil-war", DA: "daedric-quests" }[o.edid.slice(0, 2)];
  if (/^BYOH|^Favor\d|Thane/i.test(o.edid)) return "thane-hearthfire-and-favors";
  return "side-quests";
}
const playerFacing = (o) => {
  const base = officialByEdid.get(o.edid);
  return Boolean(o.name) && (!base || base.journalStages > 0 || base.objectives.length > 0);
};
const linesMap = {};
for (const o of overrides) (linesMap[questline(o)] ??= []).push(o);

const EXPANSION_SEPARATORS = /^(Quests - Vanilla Expansions|Gameplay - Lines Expansions|Quests$)/;
const expansionMods = inv.mods.filter((m) => EXPANSION_SEPARATORS.test(m.separator ?? ""));
const vanillaUnits = [
  ["vc-main-quest", "main-quest", ["main-quest-and-alternate-start"], [/Alternate Perspective|New Beginnings|Adventurer's Start|Helgen|Paarthurnax|Cult of the|Dragon Hunting|Delayed Quest Starts/]],
  ["vc-companions", "companions", ["companions"], [/Companions|Proving Honor|Vilkas Spar/]],
  ["vc-college", "college-of-winterhold", ["college-of-winterhold"], [/College|Arch-Mage|OMEAR|Tome Trials|Typography/]],
  ["vc-thieves", "thieves-guild", ["thieves-guild"], [/Thieves|Golden Claw|Uncanny Luck|Infiltration|Search and Seizure|Silence is Golden|Save the Icerunner|Respectful Ravyn|Deceive Degaine/]],
  ["vc-dark-brotherhood", "dark-brotherhood", ["dark-brotherhood"], [/Dark Brotherhood|Innocence Lost|Lovely Letter|Septimus|Destroy The Dark/]],
  ["vc-civil-war", "civil-war", ["civil-war"], [/Civil War|Military Camps|Siege Damage/]],
  ["vc-daedric", "daedric-quests", ["daedric-quests"], [/House of Horrors|Only Cure|Whispering Door|Boethiah|Mephala|Taste of Death|Mind of Madness|Heart of Dibella|Mehrunes|Peryite|Choice is Yours|Spare Anise|Toying With The Dead/]],
  ["vc-dawnguard", "dawnguard", ["dawnguard"], [/Dawnguard|Serana|Seeking the Cure|Illia|Harvest Your Blood|Skip Vampire Lord/]],
  ["vc-dragonborn", "dragonborn", ["dragonborn"], [/Dragonborn|Solstheim|Miraak|Saint Jiub|Honor Thy Word|Tel Mithryn/]],
  ["vc-side-quests", "side-quests", ["side-quests-and-misc"], [/Derkeethus|Ebony|Sissel|Nilheim|Caught Red|Ysolda|Fastred|Book of Love|Katria|Leaps|Dying Nurelion|Skeleton Key|Bards College|Poetic Duel|Edda|Wedding|Taking Care of Business|Brawl|Whiterun Stables|Forsworn Conspriracy|Faction Ranks/]],
  ["vc-thane-hearthfire", "thane-hearthfire-and-favors", ["thane-hearthfire-and-favors"], [/Favor|Thane|Hearthfire|In My Time Of Need/]],
  ["vc-creation-club", "creation-club", ["creation-club"], [/^CC |Creation Club|Bittercup|Myrwatch|Hendraheim|Goldenhills|The Cause|Civil War Champions|Bow of Shadows|Land of Razors|Tundra Homestead|Farming|Knight of the North|Delayed Quest Starts - CC Fishing/]],
].map(([id, line, files, patterns]) => {
  const list = (linesMap[line] ?? []).filter(playerFacing);
  const overridingMods = new Set(list.flatMap((o) => o.overriddenBy.map((b) => b.mod)));
  const mods = inv.mods.filter((m) =>
    (EXPANSION_SEPARATORS.test(m.separator ?? "") || /Creation Club - Gameplay/.test(m.separator ?? "") || (line === "creation-club" && /Knight of the North/.test(m.name)))
    && (overridingMods.has(m.name) || patterns.some((p) => p.test(m.name))));
  return {
    id, kind: "vanilla-changes", files, questline: line,
    mods,
    overrides: list.map((o) => ({ edid: o.edid, name: o.name, origin: o.origin, overriddenBy: [...new Set(o.overriddenBy.map((b) => b.mod))] })),
    overridesDroppedNonPlayerFacing: (linesMap[line] ?? []).length - list.length,
  };
});

// ---------- area units ----------
const areaUnits = [
  { id: "ar-new-lands-a", files: ["wyrmstooth-island", "hjorkvild-isles", "vvardenfell-and-baan-malur", "shivering-isles-saints-and-seducers"],
    mods: pick([/^Wyrmstooth$/, /Stonehollow Overhaul/, /^Siege at Icemoth$/, /^Journey to Baan Malur and Morrowind$/, /^Baan Malur - A Landscape/, /^Skyrim Extended Cut - Saints and Seducers$/]) },
  { id: "ar-new-lands-b", files: ["hammerfell-and-coldharbour-gray-cowl", "vigilant-realms", "the-forgotten-city-zenithar", "undeath-dragontail-mountains", "frozen-heart-areas", "gravewind-area", "tools-of-kagrenac-areas", "nightmare-and-dream-realms"],
    mods: pick([/^The Gray Cowl of Nocturnal - 10th anniversary$/, /^Betalille's Hammerfell Quests Bundle - The Gray Cowl of Nocturnal$/, /^VIGILANT - English/, /^The Forgotten City$/, /^Undeath Remastered/, /^Undeath - Classical/, /The Frozen Heart - Quest Mod/, /^Gravewind - ESMIFIED$/, /^The Tools of Kagrenac ESMIFIED$/, /Sleepwalking Into A Nightmare - New/, /^Demon of Dream$/]) },
  { id: "ar-dungeons-landmarks", files: ["new-dungeons", "new-landmarks-and-shrines", "dragons-awaken-lairs"],
    mods: pick([/^Forsaken Crypt$/, /^Dragon's Teeth Prison/, /^Snowpoint/, /^Dovahkiin's Vault/, /^Morihaus' Refuge/, /^Ascend/, /^Dragons Awaken$/, /^Ryn's Azura's Shrine$/, /^Ryn's Snazzy Last Vigill$/, /^Fort Dunstad$/, /^Solstheim Abandoned Lodge - Overhaul$/, /^Legends of Aetherium - New Dungeon/, /^Heart of the Reach - New Quest/, /^SIRENROOT - Deluge/, /^Miasma$/, /^Environs - /, /^Luscious Mara's Eye|^Redwater Brewery - An|^The Chantry - An|^Ivy's Stendarr's Beacon/]) },
  { id: "ar-towns-north-east", files: ["whiterun-hold", "eastmarch-and-windhelm", "winterhold", "the-pale-and-dawnstar", "hjaalmarch-and-morthal"],
    mods: pick([], { separator: /^(Whiterun|Windhelm|Winterhold|Dawnstar|Morthal)$/ }).concat(pick([/TGC Kynesgrove|Great City of Rorikstead|TGC Mixwater/])) },
  { id: "ar-towns-south-west", files: ["haafingar-and-solitude", "the-reach-and-markarth", "the-rift-and-riften", "falkreath-hold", "solstheim"],
    mods: pick([], { separator: /^(Solitude|Markarth|Riften|Falkreath|Solstheim)$/ }).concat(pick([/TGC Shor's Stone|Great Town of Ivarstead|Great Town of Karthwasten|TGC Dragon Bridge|TGC Old Hroldan|^Arena - Markarth Side Town$|^Granite Hill - ESLIFIED LUX PATCH$/])) },
];

const units = [
  ...modUnits.map((u) => ({ ...u, kind: "mod-added" })),
  ...vanillaUnits,
  ...areaUnits.map((u) => ({ ...u, kind: "areas" })),
].map((u) => ({ ...u, mods: u.mods.map(modEntry) }));

// Mods with playable quests or new locations that no unit claimed — reported, never silently dropped.
const unclaimed = inv.mods.filter((m) => !used.has(m.name) && (m.newPlayableQuests.length || m.newNamedLocations.length || m.newWorldspaces.length))
  .map((m) => ({ name: m.name, separator: m.separator, quests: m.newPlayableQuests.length, locations: m.newNamedLocations.length + m.newWorldspaces.length }));
const allFiles = units.flatMap((u) => u.files.map((f) => `${u.kind}/${f}.md`));
await writeFile(path.join(run, "work-units.json"), JSON.stringify({ allFiles, unclaimed, units }, null, 1));
console.log(JSON.stringify({ units: units.length, files: allFiles.length, unclaimed: unclaimed.length,
  perUnit: units.map((u) => `${u.id}:${u.mods.length}m${u.overrides ? "/" + u.overrides.length + "q" : ""}`).join(" ") }, null, 1));
console.log(unclaimed.map((m) => `${m.separator} | ${m.name} | q${m.quests} l${m.locations}`).join("\n"));
