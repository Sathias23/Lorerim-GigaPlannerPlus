/** The deployed web planner (GitHub Pages), without a trailing slash. */
export const DEFAULT_PLANNER_URL = "https://sathias23.github.io/Lorerim-GigaPlannerPlus";

/** Environment variable that overrides the planner base, e.g. a local `npm run dev` server. */
export const PLANNER_URL_ENV = "LORERIM_PLANNER_URL";

/**
 * The planner base to link to: `configured` with trailing slashes removed, or
 * `DEFAULT_PLANNER_URL` when it is unset or blank.
 */
export function resolvePlannerBase(configured: string | undefined): string {
  const base = (configured?.trim() ?? "").replace(/\/+$/, "");
  return base === "" ? DEFAULT_PLANNER_URL : base;
}

/**
 * The link that opens `code` in the web planner. Same shape as the web app's
 * `buildShareUrl` (`<base>/planner?build=<code>`), which needs `window` and so
 * cannot run in the server.
 */
export function buildPlannerUrl(base: string, code: string): string {
  return `${resolvePlannerBase(base)}/planner?build=${encodeURIComponent(code)}`;
}
