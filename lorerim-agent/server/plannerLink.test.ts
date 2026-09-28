import { describe, expect, it } from "vitest";
import { encodeBuild } from "@/engine/buildCodec";
import { createTestBuildState, getTestGameData } from "@/test/helpers";
import {
  DEFAULT_PLANNER_URL,
  buildPlannerUrl,
  resolvePlannerBase,
} from "./plannerLink";

const game = getTestGameData();
const code = encodeBuild(
  createTestBuildState({ raceId: "nord", playerLevel: game.mechanics.leveling.baseLevel }),
  game,
);

describe("buildPlannerUrl", () => {
  it("links to /planner on the base with a build param that decodes to the code", () => {
    const url = new URL(buildPlannerUrl(DEFAULT_PLANNER_URL, code));

    expect(url.origin + url.pathname).toBe(`${DEFAULT_PLANNER_URL}/planner`);
    expect(url.searchParams.get("build")).toBe(code);
    expect([...url.searchParams.keys()]).toEqual(["build"]);
  });

  it("percent-encodes characters that are not safe in a query value", () => {
    const awkward = "3.a+b/c=d&e f";
    const url = buildPlannerUrl(DEFAULT_PLANNER_URL, awkward);

    expect(url).toBe(`${DEFAULT_PLANNER_URL}/planner?build=3.a%2Bb%2Fc%3Dd%26e%20f`);
    expect(new URL(url).searchParams.get("build")).toBe(awkward);
  });

  it("uses a custom base with a trailing slash without doubling the slash", () => {
    const url = buildPlannerUrl("http://localhost:5173/Lorerim-GigaPlannerPlus/", code);

    expect(url.startsWith("http://localhost:5173/Lorerim-GigaPlannerPlus/planner?build=")).toBe(true);
    expect(url).not.toContain("//planner");
    expect(new URL(url).searchParams.get("build")).toBe(code);
  });
});

describe("resolvePlannerBase", () => {
  it("defaults to the deployed planner when unset or blank", () => {
    expect(resolvePlannerBase(undefined)).toBe(DEFAULT_PLANNER_URL);
    expect(resolvePlannerBase("")).toBe(DEFAULT_PLANNER_URL);
    expect(resolvePlannerBase("   ")).toBe(DEFAULT_PLANNER_URL);
  });

  it("defaults when the base is only slashes, never producing a relative link", () => {
    expect(resolvePlannerBase("/")).toBe(DEFAULT_PLANNER_URL);
    expect(resolvePlannerBase("///")).toBe(DEFAULT_PLANNER_URL);
    expect(buildPlannerUrl("/", "3.x")).toBe(`${DEFAULT_PLANNER_URL}/planner?build=3.x`);
  });

  it("removes trailing slashes and surrounding whitespace", () => {
    expect(resolvePlannerBase(" http://localhost:5173/Lorerim-GigaPlannerPlus// ")).toBe(
      "http://localhost:5173/Lorerim-GigaPlannerPlus",
    );
  });

  it("has a default without a trailing slash", () => {
    expect(DEFAULT_PLANNER_URL.endsWith("/")).toBe(false);
  });
});
