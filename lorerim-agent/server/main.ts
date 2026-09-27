import type { Transport } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import type { AppData } from "@/data/schemas";
import { createServer, SERVER_NAME } from "./createServer";

export interface RunDeps {
  /** Loads and Zod-validates game data; throws when the data is invalid. */
  loadAppData: () => AppData;
  /** Wire transport; stdio in production. It carries protocol only. */
  transport: Transport;
  /** Diagnostics sink (stderr in production). Never the protocol stream. */
  writeStderr: (text: string) => void;
  exit: (code: number) => void;
}

/** The single stderr line printed once game data has loaded. */
export function formatReadyLine(appData: AppData): string {
  const { version } = appData.game.manifest;
  const perkCount = Object.keys(appData.game.perkById).length;
  return `${SERVER_NAME} MCP server ready: data version ${version}, ${perkCount} perks\n`;
}

function describeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

/**
 * Starts the server: load data, report readiness on stderr, then serve MCP on
 * the transport. Exits 1 when the data fails to load (before anything touches
 * the transport) and 0 when the transport closes (the client went away).
 */
export function run(deps: RunDeps): void {
  const { transport, writeStderr, exit } = deps;

  let appData: AppData;
  try {
    appData = deps.loadAppData();
  } catch (error) {
    writeStderr(`${SERVER_NAME}: failed to load game data: ${describeError(error)}\n`);
    exit(1);
    return;
  }

  writeStderr(formatReadyLine(appData));

  // serveStdio serves both protocol eras (2026-07-28 and a 2025 `initialize`
  // opening) from one factory, and owns the transport from here on.
  serveStdio(() => createServer(appData), {
    transport,
    onerror: (error) => writeStderr(`${SERVER_NAME}: ${describeError(error)}\n`),
  });

  // serveStdio installs its own close handler synchronously; chain onto it.
  const sdkOnClose = transport.onclose;
  transport.onclose = () => {
    sdkOnClose?.();
    exit(0);
  };
}
