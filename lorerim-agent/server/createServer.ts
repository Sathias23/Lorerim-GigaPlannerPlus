import { McpServer } from "@modelcontextprotocol/server";
import type { AppData } from "@/data/schemas";
import { version } from "../package.json";
import { DEFAULT_PLANNER_URL } from "./plannerLink";
import { registerApplyChangesTool } from "./tools/applyChanges";
import { registerEvaluateBuildTool } from "./tools/evaluateBuild";
import { registerGetEntityTool } from "./tools/getEntity";
import { registerSearchPerksTool } from "./tools/searchPerks";

export const SERVER_NAME = "lorerim";
export const SERVER_VERSION: string = version;

/** Deployment settings the entry point reads from the environment. */
export interface ServerConfig {
  /** Web planner base that `plannerUrl` links point at, without a trailing slash. */
  plannerBaseUrl: string;
}

export const DEFAULT_SERVER_CONFIG: ServerConfig = { plannerBaseUrl: DEFAULT_PLANNER_URL };

/**
 * Builds the LoreRim MCP server over already-validated game data and registers
 * the `lorerim_*` tools, all of which read from `appData`.
 */
export function createServer(appData: AppData, config: ServerConfig = DEFAULT_SERVER_CONFIG): McpServer {
  const server = new McpServer(
    { name: SERVER_NAME, version: SERVER_VERSION },
    { capabilities: { tools: {} } },
  );
  registerSearchPerksTool(server, appData);
  registerGetEntityTool(server, appData);
  registerEvaluateBuildTool(server, appData, config.plannerBaseUrl);
  registerApplyChangesTool(server, appData, config.plannerBaseUrl);
  return server;
}
