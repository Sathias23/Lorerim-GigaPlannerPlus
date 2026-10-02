#!/usr/bin/env node
// Builds lorerim-agent/knowledge/quests/index.md and index.json from corpus frontmatter,
// and reports format problems (missing fields, id/file mismatch, dangling [n], broken related links).
import { readFile, readdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../../../../../lorerim-agent/knowledge/quests");
const KINDS = [
  ["mod-added", "Quests added by mods"],
  ["vanilla-changes", "Official quests — LoreRim changes"],
  ["areas", "New areas"],
];
const REQUIRED = ["id", "title", "kind", "category", "summary", "sources", "confidence", "updated"];

// Minimal YAML reader for the corpus frontmatter shape (scalars, inline [a, b] lists, block lists, list-of-maps).
function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const out = {};
  let key = null;
  let item = null;
  const scalar = (v) => {
    v = v.trim();
    if (/^\[.*\]$/.test(v)) return v.slice(1, -1).split(",").map((s) => scalar(s)).filter((s) => s !== "");
    return v.replace(/^["']|["']$/g, "").replace(/\s+#.*$/, "");
  };
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const top = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (top) {
      key = top[1];
      item = null;
      out[key] = top[2].trim() === "" ? [] : scalar(top[2]);
      continue;
    }
    const li = line.match(/^\s+-\s+(.*)$/);
    if (li && key) {
      const kv = li[1].match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
      if (!Array.isArray(out[key])) out[key] = [];
      if (kv) { item = { [kv[1]]: scalar(kv[2]) }; out[key].push(item); }
      else { item = null; out[key].push(scalar(li[1])); }
      continue;
    }
    const cont = line.match(/^\s+([A-Za-z_][\w-]*):\s*(.*)$/);
    if (cont && item) item[cont[1]] = scalar(cont[2]);
  }
  return out;
}

const entries = [];
const problems = [];
for (const [kind] of KINDS) {
  let files = [];
  try { files = (await readdir(path.join(root, kind))).filter((f) => f.endsWith(".md")); } catch { continue; }
  for (const f of files.sort()) {
    const rel = `${kind}/${f}`;
    const text = await readFile(path.join(root, kind, f), "utf8");
    const fm = parseFrontmatter(text);
    if (!fm) { problems.push(`${rel}: no frontmatter`); continue; }
    for (const k of REQUIRED) if (fm[k] == null || fm[k] === "" || (Array.isArray(fm[k]) && !fm[k].length && k !== "sources")) problems.push(`${rel}: missing ${k}`);
    if (fm.id && fm.id !== f.replace(/\.md$/, "")) problems.push(`${rel}: id "${fm.id}" != file name`);
    if (fm.kind && fm.kind !== (kind === "areas" ? "area" : kind)) problems.push(`${rel}: kind "${fm.kind}" != folder`);
    const body = text.slice(text.indexOf("---", 3) + 3);
    const cited = new Set([...body.matchAll(/\[(\d+)\](?!\()/g)].map((x) => x[1]));
    const srcSection = body.split(/^## Sources\s*$/m)[1] ?? "";
    const rows = new Set([...srcSection.matchAll(/^\|\s*(\d+)\s*\|/gm)].map((x) => x[1]));
    const dangling = [...cited].filter((n) => !rows.has(n));
    const orphan = [...rows].filter((n) => !cited.has(n));
    if (!srcSection) problems.push(`${rel}: no "## Sources" section`);
    if (dangling.length) problems.push(`${rel}: dangling citations [${dangling.join(",")}]`);
    if (orphan.length) problems.push(`${rel}: uncited source rows ${orphan.join(",")}`);
    for (const r of Array.isArray(fm.related) ? fm.related : []) {
      try { await access(path.join(root, r)); } catch { problems.push(`${rel}: related link missing: ${r}`); }
    }
    entries.push({
      path: rel, id: fm.id, title: fm.title, kind: fm.kind ?? kind, category: fm.category, summary: fm.summary,
      quests: Array.isArray(fm.quests) ? fm.quests : [], locations: Array.isArray(fm.locations) ? fm.locations : [],
      region: fm.region || null, start: fm.start || null,
      mods: (Array.isArray(fm.mods) ? fm.mods : []).map((m) => (typeof m === "string" ? m : m.name)).filter(Boolean),
      confidence: fm.confidence, words: body.split(/\s+/).length,
    });
  }
}

const lines = [
  "# LoreRim quest & area corpus — index",
  "",
  "Generated from each file's frontmatter by the corpus build script; do not edit by hand.",
  `Files: ${entries.length} · quests named: ${entries.reduce((a, e) => a + e.quests.length, 0)} · locations named: ${entries.reduce((a, e) => a + e.locations.length, 0)}`,
  "",
];
for (const [kind, heading] of KINDS) {
  const list = entries.filter((e) => e.path.startsWith(`${kind}/`));
  if (!list.length) continue;
  lines.push(`## ${heading}`, "", "| File | Category | Summary | Start |", "|---|---|---|---|");
  for (const e of list.sort((a, b) => (a.category ?? "").localeCompare(b.category ?? "") || a.title.localeCompare(b.title))) {
    const esc = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\s+/g, " ");
    lines.push(`| [${esc(e.title)}](${e.path}) | ${esc(e.category)} | ${esc(e.summary)} | ${esc(e.start)} |`);
  }
  lines.push("");
}
lines.push("## Quest name lookup", "", "| Quest | File |", "|---|---|");
const qmap = entries.flatMap((e) => e.quests.map((q) => [q, e.path])).sort((a, b) => a[0].localeCompare(b[0]));
for (const [q, p] of qmap) lines.push(`| ${q.replace(/\|/g, "\\|")} | [${p}](${p}) |`);
lines.push("");

await writeFile(path.join(root, "index.md"), lines.join("\n"));
await writeFile(path.join(root, "index.json"), JSON.stringify(entries, null, 1));
console.log(JSON.stringify({ files: entries.length, quests: qmap.length, problems: problems.length }, null, 1));
for (const p of problems) console.log("  " + p);
