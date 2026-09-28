// Test helper: real share codes and real tool results from the in-memory server.
import { getTestGameData } from "@/test/helpers";
import { connectTestClient, type TestClient } from "../server/testClient";
import type { ApplyChangesOutput } from "../server/tools/applyChanges";
import { createLookups, TOOLS, type Lookups } from "./score.ts";

export interface EvalServer {
  harness: TestClient;
  lookups: Lookups;
  /** Runs `lorerim_apply_changes` and returns its structured result; throws on isError. */
  apply: (ops: Array<Record<string, unknown>>, code?: string) => Promise<ApplyChangesOutput>;
  /** Runs a tool and returns its raw outcome, as a transcript would record it. */
  call: TestClient["call"];
}

export async function startEvalServer(): Promise<EvalServer> {
  const harness = await connectTestClient();
  return {
    harness,
    lookups: createLookups(harness.call),
    call: harness.call,
    apply: async (ops, code) => {
      const result = await harness.call(TOOLS.applyChanges, code === undefined ? { ops } : { code, ops });
      if (result.isError) throw new Error(result.text);
      return result.structured as unknown as ApplyChangesOutput;
    },
  };
}

/** A non-default choice of a character option, from game data. */
export function activeChoice(optionId: string): string {
  const option = getTestGameData().characterOptions.find((entry) => entry.id === optionId);
  const choice = option?.choices.find((entry) => entry.id !== option.defaultChoice);
  if (!choice) throw new Error(`option ${optionId} has no non-default choice`);
  return choice.id;
}

/** The first perk of a skill's tree that needs nothing (no prerequisites, skill requirement 0). */
export function entryPerk(skillId: string): string {
  const perk = getTestGameData().perkTrees[skillId]?.perks.find(
    (entry) => entry.prerequisites.length === 0 && (entry.prerequisitesAny ?? []).length === 0 && (entry.skillReq ?? 0) === 0,
  );
  if (!perk) throw new Error(`no entry perk in ${skillId}`);
  return perk.id;
}
