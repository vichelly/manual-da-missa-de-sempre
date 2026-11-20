import { normalize, normalizedWords, tokenize } from './text';

export interface ComparedWord {
  text: string;
  matched: boolean;
}

export interface TextComparison {
  /** The expected text, word by word, marking which words were recalled in order. */
  words: ComparedWord[];
  matchedCount: number;
  total: number;
  /** Words the learner wrote that do not fit the expected sequence. */
  extraWords: string[];
  isPerfect: boolean;
}

/** Marks which positions of `a` and `b` belong to their longest common subsequence. */
function longestCommonSubsequence(a: string[], b: string[]): [boolean[], boolean[]] {
  const table = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  const at = (i: number, j: number) => table[i]?.[j] ?? 0;

  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      table[i]![j] = a[i] === b[j] ? at(i + 1, j + 1) + 1 : Math.max(at(i + 1, j), at(i, j + 1));
    }
  }

  const inA = new Array<boolean>(a.length).fill(false);
  const inB = new Array<boolean>(b.length).fill(false);
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      inA[i] = inB[j] = true;
      i++;
      j++;
    } else if (at(i + 1, j) >= at(i, j + 1)) {
      i++;
    } else {
      j++;
    }
  }
  return [inA, inB];
}

/** Compares a text written from memory with the expected one, word by word and in order. */
export function compareText(expected: string, attempt: string): TextComparison {
  const expectedTokens = tokenize(expected);
  const expectedWords = expectedTokens.map(normalize);
  const attemptWords = normalizedWords(attempt);
  const [matchedExpected, matchedAttempt] = longestCommonSubsequence(expectedWords, attemptWords);

  const words = expectedTokens.map((text, index) => ({
    text,
    matched: matchedExpected[index] ?? false,
  }));
  const matchedCount = words.filter((word) => word.matched).length;
  const extraWords = attemptWords.filter((_, index) => !matchedAttempt[index]);

  return {
    words,
    matchedCount,
    total: words.length,
    extraWords,
    isPerfect: matchedCount === words.length && extraWords.length === 0,
  };
}
