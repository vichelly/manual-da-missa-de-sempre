import { normalizedWords } from './text';

const PORTUGUESE_STOPWORDS = new Set([
  'a',
  'o',
  'as',
  'os',
  'e',
  'de',
  'do',
  'da',
  'dos',
  'das',
  'em',
  'no',
  'na',
  'seu',
  'sua',
  'sobre',
  'todas',
  'coisas',
  'contra',
]);

const DEFAULT_THRESHOLD = 0.75;

function keywords(text: string): string[] {
  return normalizedWords(text).filter((word) => !PORTUGUESE_STOPWORDS.has(word));
}

/**
 * Accepts an answer written in the learner's own words when it contains
 * most of the meaningful words of the expected sentence, in any order.
 */
export function matchesByKeywords(
  expected: string,
  attempt: string,
  threshold = DEFAULT_THRESHOLD,
): boolean {
  const expectedKeywords = keywords(expected);
  if (expectedKeywords.length === 0) return false;
  const attemptKeywords = new Set(keywords(attempt));
  const found = expectedKeywords.filter((word) => attemptKeywords.has(word)).length;
  return found / expectedKeywords.length >= threshold;
}
