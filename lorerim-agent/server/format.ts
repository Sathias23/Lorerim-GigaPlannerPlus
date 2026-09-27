/** Longest one-line summary any catalog row carries. */
export const SUMMARY_MAX_CHARS = 120;

const ELLIPSIS = "…";

/**
 * Collapses whitespace and cuts `text` to at most `max` characters at a word
 * boundary, marking a cut with an ellipsis.
 */
export function summarize(text: string, max: number = SUMMARY_MAX_CHARS): string {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;

  const room = flat.slice(0, max - ELLIPSIS.length);
  const lastSpace = room.lastIndexOf(" ");
  const cut = lastSpace > 0 ? room.slice(0, lastSpace) : room;
  return `${cut.replace(/[\s,;:.–—-]+$/u, "")}${ELLIPSIS}`;
}

export interface Page<T> {
  total: number;
  offset: number;
  limit: number;
  /** Offset of the next page, or null when this page reaches the end. */
  nextOffset: number | null;
  items: T[];
}

export function paginate<T>(items: readonly T[], offset: number, limit: number): Page<T> {
  const pageItems = items.slice(offset, offset + limit);
  const end = offset + pageItems.length;
  return {
    total: items.length,
    offset,
    limit,
    nextOffset: end < items.length && pageItems.length > 0 ? end : null,
    items: pageItems,
  };
}
