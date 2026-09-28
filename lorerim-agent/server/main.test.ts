import type { JSONRPCMessage, Transport } from "@modelcontextprotocol/server";
import { describe, expect, it, vi } from "vitest";
import type { AppData } from "@/data/schemas";
import { getTestAppData } from "@/test/helpers";
import { DEFAULT_SERVER_CONFIG } from "./createServer";
import { formatReadyLine, run, type RunDeps } from "./main";

class FakeTransport implements Transport {
  started = false;
  sent: JSONRPCMessage[] = [];
  onclose?: () => void;
  onerror?: (error: Error) => void;
  onmessage?: (message: JSONRPCMessage) => void;

  async start(): Promise<void> {
    this.started = true;
  }

  async send(message: JSONRPCMessage): Promise<void> {
    this.sent.push(message);
  }

  async close(): Promise<void> {
    this.onclose?.();
  }
}

function createHarness(loadAppData: () => AppData) {
  const transport = new FakeTransport();
  const stderr: string[] = [];
  const exits: number[] = [];
  const deps: RunDeps = {
    loadAppData,
    config: DEFAULT_SERVER_CONFIG,
    transport,
    writeStderr: (text) => stderr.push(text),
    exit: (code) => exits.push(code),
  };
  return { deps, transport, stderr, exits };
}

describe("formatReadyLine", () => {
  it("names the data version and perk count on one line", () => {
    const appData = getTestAppData();
    const perkCount = Object.keys(appData.game.perkById).length;

    const line = formatReadyLine(appData);

    expect(perkCount).toBeGreaterThan(0);
    expect(line).toContain(appData.game.manifest.version);
    expect(line).toContain(`${perkCount} perks`);
    expect(line.endsWith("\n")).toBe(true);
    expect(line.trimEnd()).not.toContain("\n");
  });
});

describe("run", () => {
  it("prints exactly the ready line to stderr and starts serving", async () => {
    const appData = getTestAppData();
    const { deps, transport, stderr, exits } = createHarness(() => appData);

    run(deps);
    await vi.waitFor(() => expect(transport.started).toBe(true));

    expect(stderr).toEqual([formatReadyLine(appData)]);
    expect(transport.sent).toEqual([]);
    expect(exits).toEqual([]);
  });

  it("exits 0 when the transport closes (the client left)", async () => {
    const { deps, transport, exits } = createHarness(getTestAppData);

    run(deps);
    await transport.close();

    expect(exits).toEqual([0]);
  });

  it("reports invalid data on stderr, exits 1, and never touches the transport", () => {
    const { deps, transport, stderr, exits } = createHarness(() => {
      throw new Error("Failed to validate manifest.json: version is required");
    });

    run(deps);

    expect(exits).toEqual([1]);
    expect(stderr).toHaveLength(1);
    expect(stderr[0]).toContain("Failed to validate manifest.json: version is required");
    expect(transport.started).toBe(false);
    expect(transport.sent).toEqual([]);
  });

  it("reports a non-Error load failure too", () => {
    const { deps, stderr, exits } = createHarness(() => {
      throw "data directory missing";
    });

    run(deps);

    expect(exits).toEqual([1]);
    expect(stderr[0]).toContain("data directory missing");
  });
});
