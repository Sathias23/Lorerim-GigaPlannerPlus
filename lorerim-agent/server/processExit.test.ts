import { describe, expect, it } from "vitest";
import { createProcessExit, type ExitableProcess } from "./processExit";

function createFakeProcess() {
  const exits: number[] = [];
  const pendingCallbacks: Array<() => void> = [];
  const proc: ExitableProcess = {
    exitCode: undefined,
    exit: (code) => exits.push(code),
    stderr: {
      write: (_text, callback) => {
        pendingCallbacks.push(callback);
        return true;
      },
    },
  };
  const flushStderr = () => pendingCallbacks.splice(0).forEach((callback) => callback());
  return { proc, exits, flushStderr };
}

describe("createProcessExit", () => {
  it.each([1, 0])("sets exitCode %i and exits only after stderr flushes", (code) => {
    const { proc, exits, flushStderr } = createFakeProcess();

    createProcessExit(proc)(code);

    expect(proc.exitCode).toBe(code);
    expect(exits).toEqual([]);

    flushStderr();

    expect(exits).toEqual([code]);
  });
});
