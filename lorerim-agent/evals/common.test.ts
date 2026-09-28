import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { AGENT_ROOT, checkDist, isInside, loadScenarios, parseScenarios, resolveCliPath, samePath } from "./common.ts";

const BASELINE_SUFFIX = ". End your answer with the final share code.";
const FIXED_REPLY = "Use your own assumptions.";

describe("scenarios.json", () => {
  const scenarios = loadScenarios();

  it("holds the four eval scenarios with their checks", () => {
    expect(scenarios.map(({ id, levelTarget, forbiddenSkills, supernatural }) => ({ id, levelTarget, forbiddenSkills, supernatural }))).toEqual([
      { id: "stealth-archer-vampire", levelTarget: 40, forbiddenSkills: [], supernatural: "vampire" },
      { id: "lich-no-destruction", levelTarget: 40, forbiddenSkills: ["destruction"], supernatural: "lich" },
      { id: "werewolf-two-hander", levelTarget: 30, forbiddenSkills: [], supernatural: "werewolf" },
      { id: "spellsword-mortal", levelTarget: 25, forbiddenSkills: [], supernatural: "none" },
    ]);
  });

  it("gives the run sheet's exact lines for both folders, and the fixed reply", () => {
    const sheet = readFileSync(join(AGENT_ROOT, "evals", "RUN_SHEET.md"), "utf8").replace(/\r\n/g, "\n");
    for (const scenario of scenarios) {
      expect(sheet).toContain(`\n/lorerim-build ${scenario.prompt}\n`);
      expect(sheet).toContain(`\n${scenario.prompt}${BASELINE_SUFFIX}\n`);
    }
    // On a line of its own (a code block inside a list item).
    expect(sheet.split(/\r?\n/).map((line) => line.trim())).toContain(FIXED_REPLY);
  });
});

describe("parseScenarios", () => {
  const scenario = { id: "a", prompt: "an archer, level 10", levelTarget: 10, forbiddenSkills: [], supernatural: "none" };

  it("rejects duplicate ids, nested prompts, and unknown fields or paths", () => {
    expect(() => parseScenarios({ scenarios: [scenario, scenario] })).toThrow(/duplicate/);
    expect(() => parseScenarios({ scenarios: [scenario, { ...scenario, id: "b", prompt: "archer" }] })).toThrow(/ambiguous/);
    expect(() => parseScenarios({ scenarios: [{ ...scenario, supernatural: "ghost" }] })).toThrow();
    expect(() => parseScenarios({ scenarios: [{ ...scenario, extra: 1 }] })).toThrow();
    expect(parseScenarios({ scenarios: [scenario] })).toEqual([scenario]);
  });
});

describe("paths", () => {
  it("compares Windows paths case-insensitively", () => {
    expect(isInside("C:\\Repo\\sub\\x", "c:\\repo", "win32")).toBe(true);
    expect(isInside("C:\\Repo2", "C:\\Repo", "win32")).toBe(false);
    expect(samePath("C:\\Evals\\Skill\\", "c:\\evals\\skill", "win32")).toBe(true);
  });

  it("resolves CLI paths from where npm was run, not the package folder", () => {
    expect(resolveCliPath("out", { INIT_CWD: AGENT_ROOT })).toBe(join(AGENT_ROOT, "out"));
    expect(resolveCliPath(join(AGENT_ROOT, "abs"), { INIT_CWD: "/elsewhere" })).toBe(join(AGENT_ROOT, "abs"));
  });

  it("reports missing dist files with the build hint", () => {
    expect(checkDist(join(AGENT_ROOT, "no-such-dist"))).toMatch(/server\.js not found\. Run `npm run agent:build` first\./);
  });
});
