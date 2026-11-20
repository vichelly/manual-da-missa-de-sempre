/** A source of random numbers in [0, 1). Injected so that logic stays testable. */
export type RandomSource = () => number;

/** Returns a new array with the items in random order (Fisher–Yates). */
export function shuffle<T>(items: readonly T[], random: RandomSource = Math.random): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j] as T, result[i] as T];
  }
  return result;
}

/** Picks `count` distinct items at random. */
export function sample<T>(
  items: readonly T[],
  count: number,
  random: RandomSource = Math.random,
): T[] {
  return shuffle(items, random).slice(0, count);
}

/** Integers from 0 to length - 1. */
export function range(length: number): number[] {
  return Array.from({ length }, (_, index) => index);
}
