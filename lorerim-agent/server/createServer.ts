import { McpServer } from "@modelcontextprotocol/server";
import type { AppData } from "@/data/schemas";
import { version } from "../package.json";

export const SERVER_NAME = "lorerim";
export const SERVER_VERSION: string = version;

/**
 * Builds the LoreRim MCP server over already-validated game data.
 *
 * Declares the `tools` capability so `tools/list` is answered; later stories
 * register the `lorerim_*` tools here, reading from `appData`.
 */
export function createServer(_appData: AppData): McpServer {
  return new McpServer(
    { name: SERVER_NAME, version: SERVER_VERSION },
    { capabilities: { tools: {} } },
  );
}
