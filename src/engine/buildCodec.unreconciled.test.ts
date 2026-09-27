import { gzipSync } from "fflate";
import { describe, expect, it } from "vitest";
import {
  decodeBuild,
  decodeBuildPackage,
  decodeUnreconciledBuild,
  encodeBuild,
  encodeSavedBuild,
} from "@/engine/buildCodec";
import { createBuildCodecRegistryForVersion } from "@/engine/buildCodecRegistry";
import { createTestBuildState, getTestGameData } from "@/test/helpers";
import { createMilestone, createSavedBuild } from "@/store/savedBuilds";

function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function gzipPayload(payload: Record<string, unknown>): string {
  return toBase64Url(gzipSync(new TextEncoder().encode(JSON.stringify(payload))));
}

function encodeRawV3(payload: Record<string, unknown>): string {
  return `3.${gzipPayload(payload)}`;
}

function encodeRawV2(payload: Record<string, unknown>): string {
  return `2.${gzipPayload(payload)}`;
}

// The shared build link from buildCodec.crossVersion.test.ts (v2, modpack 5.0.3.6).
const USER_BUILD_CODE_V2 =
  "2.H4sIABLeSWoAAz2RsU6EIRCEX8VQTy4ssMBeae8T_LlCY2NyZ4yeNsZ39-M_YzEZZnZYWPhOX-lYlC5Q8kM-1ENPSmekZ6V3SOljjzylY4Wu6biVKjspPbBs6rIlLggbsq4pywoNzMcV9qWtId-QIzSzpmlOzVBQygWErNKq0qLRvi2mk1NztDfZMEBmUBvUaGWBH3iBF6HC-aU14GCtB5iAGr2K4zu-4zu-4_ei2geYIFRHBQ3ghQE059RwsDxynNW4c7MCXK1kMNQa7M6sZ2bldSznk7auvmgyLhTyRbzKJLkZY-0pY86d-19gaPiJXlf-YVv5zIVvO-1_tYa6rfbtxJ9e-cz7z5fz811JP7_NaJMC4wEAAA";

describe("decodeUnreconciledBuild", () => {
  const game = getTestGameData();

  it("keeps perk, trait, and race ids the current data does not know, which decodeBuild drops", () => {
    const code = encodeRawV3({
      v: 3,
      mv: game.manifest.version,
      lv: 10,
      r: "nord-of-atlantis",
      t: ["made-up-trait"],
      M: ["block"],
      p: ["block-improved-blocking", "block-made-up-perk"],
    });

    const raw = decodeUnreconciledBuild(code, game);
    const reconciled = decodeBuild(code, game);

    expect(raw.raceId).toBe("nord-of-atlantis");
    expect(raw.traitIds).toEqual(["made-up-trait"]);
    expect(raw.selectedPerkIds).toEqual(["block-improved-blocking", "block-made-up-perk"]);
    expect(raw.playerLevel).toBe(10);

    expect(reconciled.raceId).toBe("none");
    expect(reconciled.traitIds).toEqual([]);
    expect(reconciled.selectedPerkIds).toEqual(["block-improved-blocking"]);
  });

  it("matches decodeBuild on every id for a clean code", () => {
    const state = createTestBuildState({
      raceId: "nord",
      majorSkillIds: ["block"],
      minorSkillIds: ["one-handed"],
      playerLevel: 5,
      skillLevels: { block: 30 },
      selectedPerkIds: ["block-improved-blocking"],
    });
    const code = encodeBuild(state, game);

    const raw = decodeUnreconciledBuild(code, game);
    const reconciled = decodeBuild(code, game);

    expect(raw.raceId).toBe(reconciled.raceId);
    expect(raw.traitIds).toEqual(reconciled.traitIds);
    expect(raw.majorSkillIds).toEqual(reconciled.majorSkillIds);
    expect(raw.minorSkillIds).toEqual(reconciled.minorSkillIds);
    expect(raw.oghmaSkillIds).toEqual(reconciled.oghmaSkillIds);
    expect([...raw.selectedPerkIds].sort()).toEqual([...reconciled.selectedPerkIds].sort());
    expect(raw.playerLevel).toBe(reconciled.playerLevel);
  });

  it("decodes the v2 shared link from buildCodec.crossVersion.test.ts through the source registry", () => {
    const raw = decodeUnreconciledBuild(USER_BUILD_CODE_V2, game);
    const reconciled = decodeBuild(USER_BUILD_CODE_V2, game);

    expect(raw.playerLevel).toBe(50);
    expect(raw.majorSkillIds).toEqual(["one-handed", "evasion", "alchemy"]);
    expect(raw.selectedPerkIds).toContain("evasion-athletics-r2");
    expect(raw.selectedPerkIds).toContain("wayfarer-cheap-tricks");
    // Every id the reconciled build keeps is also in the raw decode.
    for (const perkId of reconciled.selectedPerkIds) {
      expect(raw.selectedPerkIds).toContain(perkId);
    }
  });

  it("keeps unknown ids a v2 code maps through its source registry, which decodeBuild drops", () => {
    const registry = createBuildCodecRegistryForVersion(game, "5.0.3.6");
    const staleIndex = registry.perks.findIndex((id) => !Object.hasOwn(game.perkById, id));
    expect(staleIndex).toBeGreaterThanOrEqual(0);
    const staleId = registry.perks[staleIndex]!;
    const code = encodeRawV2({ v: 2, mv: "5.0.3.6", lv: 20, p: [staleIndex] });

    expect(decodeUnreconciledBuild(code, game).selectedPerkIds).toEqual([staleId]);
    expect(decodeBuild(code, game).selectedPerkIds).toEqual([]);
  });

  it("keeps unknown ids in a v1 raw-JSON code, which decodeBuild drops", () => {
    const code = toBase64Url(
      new TextEncoder().encode(
        JSON.stringify({
          v: 1,
          mv: game.manifest.version,
          race: "nord",
          stone: null,
          blessing: null,
          traits: [],
          major: [],
          minor: [],
          attrs: [0, 0, 0],
          perks: ["block-improved-blocking", "block-made-up-perk"],
          desc: "",
        }),
      ),
    );

    expect(decodeUnreconciledBuild(code, game).selectedPerkIds).toEqual([
      "block-improved-blocking",
      "block-made-up-perk",
    ]);
    expect(decodeBuild(code, game).selectedPerkIds).toEqual(["block-improved-blocking"]);
  });

  it("keeps unknown ids in the active milestone of a v3 package, which the reconciled decode drops", () => {
    const code = encodeRawV3({
      v: 3,
      mv: game.manifest.version,
      bn: "Package",
      lv: 5,
      ms: [["Later", { lv: 12, t: ["made-up-trait"], p: ["block-improved-blocking", "block-made-up-perk"] }]],
      av: 1,
    });

    const raw = decodeUnreconciledBuild(code, game);
    const milestone = decodeBuildPackage(code, game).shared!.milestones[0]!.build;

    expect(raw.traitIds).toEqual(["made-up-trait"]);
    expect(raw.selectedPerkIds).toEqual(["block-improved-blocking", "block-made-up-perk"]);
    expect(milestone.traitIds).toEqual([]);
    expect(milestone.selectedPerkIds).toEqual(["block-improved-blocking"]);
  });

  it("returns the active variant of a shared package, as the planner opens it", () => {
    const base = createTestBuildState({ raceId: "nord", playerLevel: 5 });
    const milestone = createTestBuildState({ raceId: "breton", playerLevel: 12 });
    const saved = createSavedBuild("Package", base, [createMilestone("Later", milestone)]);
    const firstMilestoneId = saved.milestones[0]!.id;
    const code = encodeSavedBuild({ ...saved, activeMilestoneId: firstMilestoneId }, game);

    const decoded = decodeBuildPackage(code, game);
    expect(decoded.shared?.activeVariantIndex).toBe(1);

    const raw = decodeUnreconciledBuild(code, game);
    expect(raw.raceId).toBe("breton");
    expect(raw.playerLevel).toBe(12);
  });

  it("leaves decodeBuildPackage output unchanged", () => {
    const code = encodeRawV3({
      v: 3,
      mv: game.manifest.version,
      t: ["made-up-trait"],
      p: ["block-made-up-perk"],
    });

    decodeUnreconciledBuild(code, game);
    const decoded = decodeBuildPackage(code, game);

    expect(decoded.build.traitIds).toEqual([]);
    expect(decoded.build.selectedPerkIds).toEqual([]);
    expect(decoded.sourceModpackVersion).toBe(game.manifest.version);
  });

  it("throws on a string that is not a share code", () => {
    expect(() => decodeUnreconciledBuild("hello", game)).toThrow();
  });
});
