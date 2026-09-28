// `npm run agent:eval:score -- [--root <dir>] [--out <dir>] [--seed <text>]`: scores
// the saved sessions of both eval folders through the bundled server. It never
// calls a model.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { parseArgs } from "node:util";
import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";
import {
  DEFAULT_EVAL_ROOT,
  DEFAULT_RESULTS_DIR,
  DIST_DIR,
  SERVER_FILE,
  VARIANTS,
  checkDist,
  isMainModule,
  loadScenarios,
  resolveCliPath,
  toJson,
  type Scenario,
  type Variant,
} from "./common.ts";
import {
  DEFAULT_SEED,
  OUTPUT_FILES,
  buildPairs,
  buildScoresFile,
  renderPairwise,
  renderReport,
  type PairwiseKey,
  type ScoresFile,
  type UnmatchedSession,
} from "./report.ts";
import { createLookups, matchScenario, scoreSession, type Lookups, type SessionScore, type ToolCallOutcome } from "./score.ts";
import { defaultProjectsDir, readSessions } from "./transcript.ts";

export interface ScoreOptions {
  root: string;
  outDir: string;
  projectsDir: string;
  seed: string;
  scenarios: Scenario[];
}

/** Fails loudly when a scenario names a skill or supernatural option the server does not know. */
export async function checkScenarioIds(scenarios: readonly Scenario[], lookups: Lookups): Promise<string[]> {
  const problems: string[] = [];
  for (const scenario of scenarios) {
    for (const skill of scenario.forbiddenSkills) {
      if (!(await lookups.entity("skill", skill)).ok) problems.push(`${scenario.id}: unknown skill "${skill}"`);
    }
    if (scenario.supernatural !== "none" && !(await lookups.entity("option", scenario.supernatural)).ok) {
      problems.push(`${scenario.id}: unknown option "${scenario.supernatural}"`);
    }
  }
  return problems;
}

/** Scores every session of both folders and writes the four output files. */
export async function runScore(
  options: ScoreOptions,
  lookups: Lookups,
): Promise<{ scores: ScoresFile; key: PairwiseKey }> {
  const problems = await checkScenarioIds(options.scenarios, lookups);
  if (problems.length > 0) throw new Error(`scenarios.json names ids the server does not know:\n${problems.join("\n")}`);

  const folders = Object.fromEntries(VARIANTS.map((variant) => [variant, join(options.root, variant)])) as Record<Variant, string>;
  const scored: SessionScore[] = [];
  const unmatched: UnmatchedSession[] = [];
  for (const variant of VARIANTS) {
    for (const session of readSessions(folders[variant], options.projectsDir)) {
      const scenario = matchScenario(session, options.scenarios);
      if (!scenario) {
        unmatched.push({ variant, sessionId: session.sessionId, startedAt: session.startedAt, firstPrompt: session.firstPrompt });
        continue;
      }
      scored.push(await scoreSession(session, scenario, variant, lookups));
    }
  }

  const scores = buildScoresFile(options.root, folders, options.scenarios, scored, unmatched);
  const key = buildPairs(scores.sessions, options.seed);
  mkdirSync(options.outDir, { recursive: true });
  writeFileSync(join(options.outDir, OUTPUT_FILES.scores), toJson(scores));
  writeFileSync(join(options.outDir, OUTPUT_FILES.key), toJson(key));
  writeFileSync(join(options.outDir, OUTPUT_FILES.pairwise), renderPairwise(scores, key));
  writeFileSync(join(options.outDir, OUTPUT_FILES.report), renderReport(scores));
  return { scores, key };
}

/** Connects to the bundled `dist/server.js` over stdio, exactly as Claude Code launches it. */
export async function connectServer(serverPath: string): Promise<{ lookups: Lookups; close: () => Promise<void> }> {
  const transport = new StdioClientTransport({ command: process.execPath, args: [serverPath], stderr: "pipe" });
  const client = new Client({ name: "lorerim-evals", version: "0.0.0" });
  await client.connect(transport);
  const callTool = async (name: string, args: Record<string, unknown>): Promise<ToolCallOutcome> => {
    const result = await client.callTool({ name, arguments: args });
    const content = (result.content ?? []) as Array<{ type: string; text?: string }>;
    return {
      isError: result.isError === true,
      text: content.filter((block) => block.type === "text").map((block) => block.text ?? "").join("\n"),
      structured: result.structuredContent as Record<string, unknown> | undefined,
    };
  };
  return { lookups: createLookups(callTool), close: () => client.close().catch(() => {}) };
}

export async function main(argv: readonly string[], distDir: string = DIST_DIR): Promise<number> {
  let values: { root?: string; out?: string; seed?: string };
  try {
    ({ values } = parseArgs({
      args: [...argv],
      options: { root: { type: "string" }, out: { type: "string" }, seed: { type: "string" } },
      strict: true,
    }));
  } catch (error) {
    console.error(`${error instanceof Error ? error.message : String(error)}\nUsage: npm run agent:eval:score -- [--root <dir>] [--out <dir>] [--seed <text>]`);
    return 1;
  }
  const distProblem = checkDist(distDir);
  if (distProblem) {
    console.error(distProblem);
    return 1;
  }

  const options: ScoreOptions = {
    root: values.root === undefined ? DEFAULT_EVAL_ROOT : resolveCliPath(values.root),
    outDir: values.out === undefined ? DEFAULT_RESULTS_DIR : resolveCliPath(values.out),
    projectsDir: defaultProjectsDir(),
    seed: values.seed ?? DEFAULT_SEED,
    scenarios: loadScenarios(),
  };
  const server = await connectServer(join(distDir, SERVER_FILE));
  try {
    const { scores, key } = await runScore(options, server.lookups);
    console.log(
      `Scored ${scores.sessions.length} session(s), ${scores.unmatched.length} unmatched, ${key.pairs.length} pair(s). Wrote ${Object.values(OUTPUT_FILES).join(", ")} to ${options.outDir}`,
    );
    for (const session of scores.unmatched) {
      console.log(`  unmatched ${session.variant} ${session.sessionId}: ${JSON.stringify(session.firstPrompt?.slice(0, 120) ?? null)}`);
    }
    return 0;
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  } finally {
    await server.close();
  }
}

if (isMainModule(import.meta.url)) {
  process.exitCode = await main(process.argv.slice(2));
}
