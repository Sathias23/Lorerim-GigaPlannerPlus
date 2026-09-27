import { describe, expect, it } from "vitest";
import { SUMMARY_MAX_CHARS, paginate, summarize } from "./format";

describe("summarize", () => {
  it("returns short text unchanged, with whitespace collapsed", () => {
    expect(summarize("  Fast   and\nquiet. ")).toBe("Fast and quiet.");
  });

  it("cuts long text at a word boundary within the limit and marks the cut", () => {
    const text = `${"word ".repeat(40)}end`;
    const summary = summarize(text);

    expect(summary.length).toBeLessThanOrEqual(SUMMARY_MAX_CHARS);
    expect(summary.endsWith("word…")).toBe(true);
  });

  it("drops trailing punctuation before the ellipsis", () => {
    expect(summarize("alpha, beta, gamma, delta", 16)).toBe("alpha, beta…");
  });

  it("hard-cuts a single word longer than the limit", () => {
    expect(summarize("x".repeat(30), 10)).toBe(`${"x".repeat(9)}…`);
  });
});

describe("paginate", () => {
  const items = [1, 2, 3, 4, 5];

  it("returns a page and the next offset", () => {
    expect(paginate(items, 0, 2)).toEqual({ total: 5, offset: 0, limit: 2, nextOffset: 2, items: [1, 2] });
  });

  it("has no next offset on the last page", () => {
    expect(paginate(items, 4, 2)).toEqual({ total: 5, offset: 4, limit: 2, nextOffset: null, items: [5] });
  });

  it("returns an empty page past the end", () => {
    expect(paginate(items, 9, 2)).toEqual({ total: 5, offset: 9, limit: 2, nextOffset: null, items: [] });
  });
});
