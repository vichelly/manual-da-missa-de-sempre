import { shuffle, type RandomSource } from './random';
import { normalize } from './text';

/** Removes answers that are the same once normalized, keeping the first spelling. */
export function uniqueAnswers(answers: readonly string[]): string[] {
  const seen = new Set<string>();
  return answers.filter((answer) => {
    const key = normalize(answer);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const CANDIDATE_POOL_SIZE = 6;
const LENGTH_JITTER = 25;

/**
 * Picks wrong answers that look plausible: they are drawn from the answers closest
 * in length to the right one, so a long answer is not trivially spotted.
 */
export function pickDistractors(
  answer: string,
  pool: readonly string[],
  count: number,
  random: RandomSource = Math.random,
): string[] {
  const key = normalize(answer);
  const candidates = uniqueAnswers(pool)
    .filter((option) => normalize(option) !== key)
    .map((option) => ({
      option,
      distance: Math.abs(option.length - answer.length) + random() * LENGTH_JITTER,
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, CANDIDATE_POOL_SIZE)
    .map(({ option }) => option);
  return shuffle(candidates, random).slice(0, count);
}

/** The right answer mixed with plausible wrong ones. */
export function buildChoices(
  answer: string,
  pool: readonly string[],
  count = 4,
  random: RandomSource = Math.random,
): string[] {
  return shuffle([answer, ...pickDistractors(answer, pool, count - 1, random)], random);
}
