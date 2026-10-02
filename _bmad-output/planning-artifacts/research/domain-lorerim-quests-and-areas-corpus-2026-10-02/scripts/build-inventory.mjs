#!/usr/bin/env node
// Research tool for the quest-corpus run: inventories a LoreRim MO2 install.
// For every enabled plugin it reads QUST / LCTN / WRLD records (new vs override),
// and for every enabled mod it captures the meta.ini Nexus cache (modid, url,
// version, description). Output lands in ../imports/.
//
// Usage (from repo root): node <run>/scripts/build-inventory.mjs --install C:/mods/LoreRim [--profile Default]
import { readFile, readdir, writeFile, mkdir, open, stat } from "node:fs/promises";
import { inflateSync } from "node:zlib";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "../../../../..");
const { getRecordBufferAsync, visitAsync, mapConcurrent } = await import(
  pathToFileURL(path.join(repoRoot, "tools/import/lib/plugin-io.mjs")).href
);

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const install = arg("install", "C:/mods/LoreRim");
const profile = arg("profile", "Default");
const outDir = path.resolve(here, "../imports");

const RELEVANT_SEPARATORS =
  /^(Quests|Locations - New|Visuals - Worldspace|Solstheim|Gameplay - Lines Expansions|Dawnguard and Dragonborn|Creation Club - Gameplay|Gameplay - Followers)/;
const VANILLA_MASTERS = new Set(["skyrim.esm", "update.esm", "dawnguard.esm", "hearthfires.esm", "dragonborn.esm"]);
const OFFICIAL = new Set(VANILLA_MASTERS); // + Skyrim.ccc Creation Club plugins, filled at load
const QUEST_TYPES = ["none", "main", "mages-guild", "thieves-guild", "dark-brotherhood", "civil-war", "misc", "daedric", "side", "civil-war-side", "dawnguard", "dragonborn"];

// ---------- record parsing ----------
function zstr(buf) {
  if (!buf) return "";
  const nul = buf.indexOf(0);
  return buf.toString("utf8", 0, nul === -1 ? buf.length : nul).trim();
}

function subrecords(recordBuffer) {
  const flags = recordBuffer.readUInt32LE(8);
  let data = recordBuffer.subarray(24);
  if (flags & 0x00040000) data = inflateSync(data.subarray(4));
  const subs = [];
  let i = 0;
  let bigSize = null;
  while (i + 6 <= data.length) {
    const type = data.toString("ascii", i, i + 4);
    let size = data.readUInt16LE(i + 4);
    if (bigSize != null) { size = bigSize; bigSize = null; }
    const value = data.subarray(i + 6, i + 6 + size);
    i += 6 + size;
    if (type === "XXXX") { bigSize = value.readUInt32LE(0); continue; }
    subs.push([type, value]);
  }
  return subs;
}

// Localized plugins store FULL/NNAM/CNAM as uint32 ids into <plugin>_english.(dl|il)strings,
// extracted from BSAs by extract_strings.py into ../imports/strings/.
const stringsDir = path.resolve(here, "../imports/strings");
async function loadStrings(pluginName) {
  const base = pluginName.toLowerCase().replace(/\.es[mpl]$/, "");
  const table = new Map();
  for (const ext of ["strings", "dlstrings", "ilstrings"]) {
    let buf;
    try { buf = await readFile(path.join(stringsDir, `${base}_english.${ext}`)); } catch { continue; }
    const count = buf.readUInt32LE(0);
    const dataStart = 8 + count * 8;
    for (let i = 0; i < count; i++) {
      const id = buf.readUInt32LE(8 + i * 8);
      let at = dataStart + buf.readUInt32LE(12 + i * 8);
      if (ext !== "strings") at += 4; // length-prefixed
      const end = buf.indexOf(0, at);
      table.set(id, buf.toString("utf8", at, end === -1 ? buf.length : end).trim());
    }
  }
  return table;
}

function textReader(localized, table) {
  return (v) => {
    if (!localized) return zstr(v);
    if (!table || v.length < 4) return null;
    return table.get(v.readUInt32LE(0)) || null;
  };
}

function parseQuest(subs, text) {
  const q = { edid: "", name: null, flags: 0, type: null, objectives: [], stages: [] };
  let stage = null;
  let objective = null;
  let seenAlias = false;
  for (const [type, v] of subs) {
    if (type === "ANAM" || type === "ALST" || type === "ALLS") seenAlias = true;
    if (seenAlias) continue;
    if (type === "EDID") q.edid = zstr(v);
    else if (type === "FULL") q.name = text(v);
    else if (type === "DNAM" && v.length >= 12) {
      q.flags = v.readUInt16LE(0);
      q.type = QUEST_TYPES[v.readUInt32LE(8)] ?? String(v.readUInt32LE(8));
    } else if (type === "INDX") {
      stage = { index: v.readUInt16LE(0), log: [] };
      q.stages.push(stage);
    } else if (type === "CNAM" && stage) {
      const t = text(v);
      if (t) stage.log.push(t);
    } else if (type === "QOBJ") {
      objective = { index: v.readUInt16LE(0), text: null };
      q.objectives.push(objective);
    } else if (type === "NNAM" && objective) {
      objective.text = text(v);
    }
  }
  q.startGameEnabled = Boolean(q.flags & 0x0001);
  q.stages = q.stages.filter((s) => s.log.length > 0);
  return q;
}

function parseNamed(subs, text) {
  let edid = "";
  let name = null;
  for (const [type, v] of subs) {
    if (type === "EDID") edid = zstr(v);
    else if (type === "FULL") name = text(v);
  }
  return { edid, name };
}

function parseHeader(recordBuffer) {
  const masters = [];
  for (const [type, v] of subrecords(recordBuffer)) if (type === "MAST") masters.push(zstr(v).toLowerCase());
  return { masters, localized: Boolean(recordBuffer.readUInt32LE(8) & 0x80) };
}

async function scanPlugin(pluginPath, pluginName) {
  const fh = await open(pluginPath, "r");
  try {
    const seenOffsets = new Set();
    const offsets = (await visitAsync(fh.fd)).filter(([o]) => !seenOffsets.has(o) && seenOffsets.add(o));
    const headerOffset = offsets.find(([, t]) => t === "TES4");
    if (!headerOffset) return null;
    const header = parseHeader(await getRecordBufferAsync(fh.fd, headerOffset[0]));
    const text = textReader(header.localized, header.localized ? await loadStrings(pluginName) : null);
    const out = { masters: header.masters, localized: header.localized, quests: [], locations: [], worldspaces: [], errors: 0 };
    for (const [offset, type] of offsets) {
      if (type !== "QUST" && type !== "LCTN" && type !== "WRLD") continue;
      try {
        const buf = await getRecordBufferAsync(fh.fd, offset);
        const formId = buf.readUInt32LE(12) >>> 0;
        const masterIndex = formId >>> 24;
        const origin = masterIndex < header.masters.length ? header.masters[masterIndex] : pluginName.toLowerCase();
        const isNew = masterIndex >= header.masters.length;
        const subs = subrecords(buf);
        const base = { formId: (formId & 0xffffff).toString(16).padStart(6, "0"), origin, isNew };
        if (type === "QUST") out.quests.push({ ...base, ...parseQuest(subs, text) });
        else if (type === "LCTN") out.locations.push({ ...base, ...parseNamed(subs, text) });
        else out.worldspaces.push({ ...base, ...parseNamed(subs, text) });
      } catch {
        out.errors++;
      }
    }
    return out;
  } finally {
    await fh.close();
  }
}

// ---------- MO2 metadata ----------
function parseIni(text) {
  const out = {};
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9\\]+)=(.*)$/);
    if (m && !(m[1].toLowerCase() in out)) out[m[1].toLowerCase()] = m[2]; // MO2 writes some keys lowercase
  }
  return out;
}

function unquoteIni(value) {
  if (!value) return "";
  let v = value;
  if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
  return v.replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}

export function bbcodeToText(raw) {
  return raw
    .replace(/<br\s*\/?>/gi, "")
    .replace(/\[img[^\]]*\][\s\S]*?\[\/img\]/gi, "")
    .replace(/\[youtube\][\s\S]*?\[\/youtube\]/gi, "")
    .replace(/\[url=([^\]]+)\]([\s\S]*?)\[\/url\]/gi, (_, url, label) => {
      const l = label.replace(/\[[^\]]*\]/g, "").trim();
      return l ? `${l} <${url}>` : "";
    })
    .replace(/\[\*\]/g, "- ")
    .replace(/\[\/?[a-z]+(=[^\]]*)?\]/gi, "")
    .replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/[\u200b\ufeff]/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function slugify(s) {
  return s.toLowerCase().replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}

async function readModlist() {
  const lines = (await readFile(path.join(install, "profiles", profile, "modlist.txt"), "utf8")).split(/\r?\n/);
  // modlist.txt is highest-priority first; separators sit after (below) their mods in the file.
  const mods = [];
  let separator = null;
  for (const line of lines.reverse()) {
    if (!/^[+-]/.test(line)) continue;
    const name = line.slice(1);
    if (name.endsWith("_separator")) { separator = name.replace(/_separator$/, "").trim(); continue; }
    if (line[0] === "+") mods.push({ name, separator, priority: mods.length });
  }
  return mods;
}

async function readEnabledPlugins() {
  const text = await readFile(path.join(install, "profiles", profile, "plugins.txt"), "latin1");
  const order = (await readFile(path.join(install, "profiles", profile, "loadorder.txt"), "latin1"))
    .split(/\r?\n/).filter((l) => l && !l.startsWith("#"));
  const enabled = new Set(text.split(/\r?\n/).filter((l) => l.startsWith("*")).map((l) => l.slice(1).toLowerCase()));
  for (const m of VANILLA_MASTERS) enabled.add(m);
  try {
    const ccc = await readFile(path.join(install, "Stock Game", "Skyrim.ccc"), "latin1");
    for (const l of ccc.split(/\r?\n/)) if (l.trim()) { enabled.add(l.trim().toLowerCase()); OFFICIAL.add(l.trim().toLowerCase()); }
  } catch {}
  return order.filter((p) => enabled.has(p.toLowerCase()));
}

// ---------- main ----------
const mods = await readModlist();
const enabledPlugins = await readEnabledPlugins();
const pluginOwner = new Map(); // lower plugin name -> { mod, path }

const stockData = path.join(install, "Stock Game", "Data");
for (const f of await readdir(stockData)) {
  if (/\.es[mpl]$/i.test(f)) pluginOwner.set(f.toLowerCase(), { mod: "(Stock Game)", path: path.join(stockData, f) });
}

for (const mod of mods) {
  const dir = path.join(install, "mods", mod.name);
  let files = [];
  try { files = await readdir(dir); } catch { continue; }
  mod.plugins = files.filter((f) => /\.es[mpl]$/i.test(f));
  for (const f of mod.plugins) pluginOwner.set(f.toLowerCase(), { mod: mod.name, path: path.join(dir, f) }); // later = higher priority
  try {
    const ini = parseIni(await readFile(path.join(dir, "meta.ini"), "utf8"));
    mod.nexus = {
      modid: Number(ini.modid) > 0 ? Number(ini.modid) : null,
      url: ini.url || (Number(ini.modid) > 0 ? `https://www.nexusmods.com/skyrimspecialedition/mods/${ini.modid}` : null),
      version: ini.version || null,
      lastNexusQuery: ini.lastnexusquery || null,
      nexusLastModified: ini.nexuslastmodified || null,
    };
    mod.description = bbcodeToText(unquoteIni(ini.nexusdescription));
  } catch {
    mod.nexus = null;
    mod.description = "";
  }
}

const toScan = enabledPlugins
  .map((p, loadIndex) => ({ name: p, loadIndex, owner: pluginOwner.get(p.toLowerCase()) }))
  .filter((p, i, all) => p.owner && all.findIndex((x) => x.name.toLowerCase() === p.name.toLowerCase()) === i);
let done = 0;
const scans = await mapConcurrent(toScan, 8, async (p) => {
  const r = await scanPlugin(p.owner.path, p.name).catch(() => null);
  if (++done % 250 === 0) process.stderr.write(`scanned ${done}/${toScan.length}\n`);
  return { ...p, scan: r };
});

const modByName = new Map(mods.map((m) => [m.name, m]));
const vanillaQuestOverrides = new Map(); // origin|formId -> {edid, name, origin, overriddenBy: [{plugin, mod, separator}]}
const officialQuests = [];
for (const { name: plugin, owner, scan } of scans) {
  if (!scan) continue;
  const mod = modByName.get(owner.mod);
  const target = mod ?? null;
  if (target) {
    target.newQuests ??= [];
    target.newLocations ??= [];
    target.newWorldspaces ??= [];
    target.questOverrides ??= [];
    target.localizedPlugins ??= [];
    if (scan.localized) target.localizedPlugins.push(plugin);
  }
  for (const q of scan.quests) {
    if (q.isNew) {
      target?.newQuests.push({ plugin, ...q });
    } else {
      target?.questOverrides.push({ plugin, edid: q.edid, origin: q.origin, name: q.name });
      if (OFFICIAL.has(q.origin)) {
        const key = `${q.origin}|${q.formId}`;
        const e = vanillaQuestOverrides.get(key) ?? { edid: q.edid, origin: q.origin, formId: q.formId, name: null, type: q.type, overriddenBy: [] };
        if (q.name && !e.name) e.name = q.name;
        if (mod) e.overriddenBy.push({ plugin, mod: mod.name, separator: mod.separator });
        vanillaQuestOverrides.set(key, e);
      }
    }
    if (q.isNew && OFFICIAL.has(plugin.toLowerCase())) officialQuests.push({ plugin, ...q });
  }
  for (const l of scan.locations) if (l.isNew) target?.newLocations.push({ plugin, edid: l.edid, name: l.name });
  for (const w of scan.worldspaces) if (w.isNew) target?.newWorldspaces.push({ plugin, edid: w.edid, name: w.name });
}

const named = (list) => (list ?? []).filter((x) => x.name);
// A player-facing quest has journal text or objective text; MCM/helper quests have neither.
const playable = (list) => named(list).filter((q) => q.stages?.length || q.objectives?.some((o) => o.text));
for (const m of mods) {
  m.relevance = [];
  if (m.separator && RELEVANT_SEPARATORS.test(m.separator)) m.relevance.push("separator");
  if (playable(m.newQuests).length) m.relevance.push("new-playable-quests");
  if (named(m.newLocations).length || named(m.newWorldspaces).length) m.relevance.push("new-locations");
  m.slug = slugify(m.name);
}
const relevant = mods.filter((m) => m.relevance.length);

await mkdir(path.join(outDir, "mods"), { recursive: true });
for (const m of relevant) {
  const lines = [
    `# ${m.name}`,
    "",
    `- Separator: ${m.separator ?? "(none)"}`,
    `- Relevance: ${m.relevance.join(", ")}`,
    `- Nexus: ${m.nexus?.url ?? "(none in meta.ini)"} (modid ${m.nexus?.modid ?? "?"}, version ${m.nexus?.version ?? "?"}, Nexus cache refreshed ${m.nexus?.lastNexusQuery ?? "?"})`,
    `- Plugins: ${(m.plugins ?? []).join(", ") || "(none)"}${m.localizedPlugins?.length ? ` (localized: ${m.localizedPlugins.join(", ")})` : ""}`,
    `- Source: local install ${install}/mods/${m.name} (meta.ini + plugin records), profile ${profile}`,
    "",
  ];
  const nq = playable(m.newQuests);
  if (nq.length) {
    lines.push("## New player-facing quests (QUST records with journal or objective text)", "");
    for (const q of nq) {
      lines.push(`### ${q.name} — \`${q.edid}\` (${q.plugin}, type ${q.type}${q.startGameEnabled ? ", start-game-enabled" : ""})`);
      const objs = q.objectives.filter((o) => o.text);
      if (objs.length) lines.push("Objectives:", ...objs.map((o) => `- [${o.index}] ${o.text}`));
      if (q.stages.length) lines.push("Journal entries by stage:", ...q.stages.flatMap((s) => s.log.map((t) => `- (${s.index}) ${t.replace(/\s+/g, " ")}`)));
      lines.push("");
    }
  }
  const unnamed = (m.newQuests ?? []).filter((q) => !nq.includes(q)).map((q) => q.name ? `${q.edid} "${q.name}"` : q.edid);
  if (unnamed.length) lines.push(`Background/helper quest records (no journal text): ${unnamed.slice(0, 40).join(", ")}${unnamed.length > 40 ? ` … (+${unnamed.length - 40})` : ""}`, "");
  const vo = (m.questOverrides ?? []).filter((o) => OFFICIAL.has(o.origin));
  if (vo.length) lines.push("## Overrides of vanilla/Creation Club quests", "", ...[...new Set(vo.map((o) => `- \`${o.edid}\` (${o.origin})${o.name ? ` "${o.name}"` : ""}`))], "");
  const locs = [...named(m.newLocations), ...named(m.newWorldspaces).map((w) => ({ ...w, name: `${w.name} [worldspace]` }))];
  if (locs.length) lines.push("## New locations / worldspaces", "", ...locs.map((l) => `- ${l.name} — \`${l.edid}\``), "");
  lines.push("## Nexus description (cached in meta.ini)", "", m.description || "(no cached description)", "");
  await writeFile(path.join(outDir, "mods", `${m.slug}.md`), lines.join("\n"));
}

const summary = relevant.map((m) => ({
  name: m.name, slug: m.slug, separator: m.separator, relevance: m.relevance, nexus: m.nexus,
  plugins: m.plugins ?? [],
  newPlayableQuests: playable(m.newQuests).map((q) => ({ name: q.name, edid: q.edid, type: q.type, plugin: q.plugin, stagesWithJournal: q.stages.length })),
  newNamedLocations: named(m.newLocations).map((l) => l.name),
  newWorldspaces: named(m.newWorldspaces).map((w) => w.name),
  vanillaQuestOverrides: [...new Set((m.questOverrides ?? []).filter((o) => OFFICIAL.has(o.origin)).map((o) => o.edid))],
  descriptionChars: m.description.length,
}));
await writeFile(path.join(outDir, "inventory.json"), JSON.stringify({
  generated: new Date().toISOString(), install, profile,
  totals: { enabledMods: mods.length, enabledPlugins: enabledPlugins.length, scannedPlugins: toScan.length, relevantMods: relevant.length },
  mods: summary,
}, null, 1));
const overrides = [...vanillaQuestOverrides.values()]
  .map((e) => ({ ...e, overriddenBy: e.overriddenBy.filter((o) => !/^(LoreRim - |Synthesis|Reqtificator)/.test(o.mod)) }))
  .filter((e) => e.overriddenBy.length)
  .sort((a, b) => a.edid.localeCompare(b.edid));
const officialByKey = new Map(officialQuests.map((q) => [`${q.plugin.toLowerCase()}|${q.formId}`, q]));
for (const e of overrides) {
  const base = officialByKey.get(`${e.origin}|${e.formId}`);
  if (base) { e.name = base.name ?? e.name; e.type = base.type; }
}
await writeFile(path.join(outDir, "official-quests.json"), JSON.stringify(
  officialQuests.filter((q) => q.name || q.stages.length).map((q) => ({
    plugin: q.plugin, edid: q.edid, formId: q.formId, name: q.name, type: q.type,
    objectives: q.objectives.filter((o) => o.text).map((o) => o.text),
    journalStages: q.stages.length,
  })), null, 1));
await writeFile(path.join(outDir, "vanilla-quest-overrides.json"), JSON.stringify(overrides, null, 1));
console.log(JSON.stringify({ relevantMods: relevant.length, vanillaQuestsOverridden: overrides.length, scanned: toScan.length, failedScans: scans.filter((s) => !s.scan).length }));
