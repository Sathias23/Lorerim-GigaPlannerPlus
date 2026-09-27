import { McpServer } from "@modelcontextprotocol/server";
import type { AppData } from "@/data/schemas";
import { version } from "../package.json";
import { registerGetEntityTool } from "./tools/getEntity";
import { registerSearchPerksTool } from "./tools/searchPerks";

export const SERVER_NAME = "lorerim";
export const SERVER_VERSION: string = version;

/**
 * Builds the LoreRim MCP server over already-validated game data and registers
 * the `lorerim_*` tools, all of which read from `appData`.
 */
export function createServer(appData: AppData): McpServer {
  const server = new McpServer(
    { name: SERVER_NAME, version: SERVER_VERSION },
    { capabilities: { tools: {} } },
  );
  registerSearchPerksTool(server, appData);
  registerGetEntityTool(server, appData);
  return server;
}
