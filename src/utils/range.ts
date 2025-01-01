export function range(start: number, end: number, step = 1): number[] {
  if (end < start) {
    return [];
  }

  return Array.from(
    { length: Math.max(Math.ceil((end - start) / Math.abs(step)), 0) },
    (_, i) => start + i * step,
  );
}
