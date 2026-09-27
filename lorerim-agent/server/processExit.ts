/** The slice of `process` the exit adapter needs; injectable for tests. */
export interface ExitableProcess {
  exitCode?: number | string | null | undefined;
  exit: (code: number) => void;
  stderr: { write: (text: string, callback: () => void) => unknown };
}

/**
 * Returns an exit function that records the code, then exits once earlier
 * stderr writes have flushed (pipes can be asynchronous), so the ready or
 * error line is never lost.
 */
export function createProcessExit(proc: ExitableProcess): (code: number) => void {
  return (code) => {
    proc.exitCode = code;
    proc.stderr.write("", () => proc.exit(code));
  };
}
