import { Client } from "@modelcontextprotocol/client";
import { InMemoryTransport } from "@modelcontextprotocol/server";
import type { AppData } from "@/data/schemas";
import { getTestAppData } from "@/test/helpers";
import { createServer } from "./createServer";

export interface ToolCallOutcome {
  isError: boolean;
  text: string;
  structured: Record<string, unknown> | undefined;
}

export interface TestClient {
  call: (name: string, args: Record<string, unknown>) => Promise<ToolCallOutcome>;
  client: Client;
  close: () => Promise<void>;
}

/** Connects a real MCP client to `createServer(appData)` over an in-memory transport pair. */
export async function connectTestClient(appData: AppData = getTestAppData()): Promise<TestClient> {
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  const server = createServer(appData);
  await server.connect(serverTransport);
  const client = new Client({ name: "lorerim-agent-test", version: "0.0.0" });
  await client.connect(clientTransport);

  return {
    client,
    call: async (name, args) => {
      const result = await client.callTool({ name, arguments: args });
      const content = (result.content ?? []) as Array<{ type: string; text?: string }>;
      return {
        isError: result.isError === true,
        text: content
          .filter((block) => block.type === "text")
          .map((block) => block.text ?? "")
          .join("\n"),
        structured: result.structuredContent as Record<string, unknown> | undefined,
      };
    },
    close: async () => {
      await client.close().catch(() => {});
      await server.close().catch(() => {});
    },
  };
}
