import type { CallToolResult, ToolAnnotations } from "@modelcontextprotocol/server";

/** The catalog and evaluation tools only read static game data and their input. */
export const READ_ONLY_TOOL_ANNOTATIONS: ToolAnnotations = {
  readOnlyHint: true,
  idempotentHint: true,
  openWorldHint: false,
};

/** A successful result: `structuredContent` plus the same JSON as one text block. */
export function jsonResult(data: Record<string, unknown>): CallToolResult {
  return {
    structuredContent: data,
    content: [{ type: "text", text: JSON.stringify(data) }],
  };
}

/** A business-rule or input failure the agent can act on (not a protocol error). */
export function errorResult(text: string): CallToolResult {
  return {
    isError: true,
    content: [{ type: "text", text }],
  };
}
