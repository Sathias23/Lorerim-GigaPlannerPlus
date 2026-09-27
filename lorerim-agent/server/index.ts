import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { loadAppData } from "@/data/loader";
import { run } from "./main";
import { createProcessExit } from "./processExit";

run({
  loadAppData,
  transport: new StdioServerTransport(),
  writeStderr: (text) => {
    process.stderr.write(text);
  },
  exit: createProcessExit(process),
});
