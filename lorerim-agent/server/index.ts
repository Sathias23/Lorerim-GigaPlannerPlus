import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { loadAppData } from "@/data/loader";
import { run } from "./main";
import { PLANNER_URL_ENV, resolvePlannerBase } from "./plannerLink";
import { createProcessExit } from "./processExit";

run({
  loadAppData,
  config: { plannerBaseUrl: resolvePlannerBase(process.env[PLANNER_URL_ENV]) },
  transport: new StdioServerTransport(),
  writeStderr: (text) => {
    process.stderr.write(text);
  },
  exit: createProcessExit(process),
});
