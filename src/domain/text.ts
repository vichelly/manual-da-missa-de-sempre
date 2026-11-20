const LETTERS = 'A-Za-zÀ-ÿæœÆŒ';
const WORD_PARTS = new RegExp(`^([^${LETTERS}]*)([${LETTERS}]+)(.*)$`);

/**
 * Normalizes Latin or Portuguese text for lenient comparison:
 * case, accents, punctuation, æ/œ ligatures and j/i spelling are ignored.
 */
export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/œ/g, 'oe')
    .replace(/j/g, 'i')
    .replace(/[^a-z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function normalizedWords(text: string): string[] {
  const normalized = normalize(text);
  return normalized ? normalized.split(' ') : [];
}

export function isSameText(a: string, b: string): boolean {
  return normalize(a) === normalize(b);
}

/** Splits text on whitespace, keeping punctuation attached to its word. */
export function tokenize(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}

export interface WordParts {
  prefix: string;
  core: string;
  suffix: string;
}

/** Separates a token into leading punctuation, the word itself and trailing punctuation. */
export function splitWord(token: string): WordParts | null {
  const match = WORD_PARTS.exec(token);
  if (!match) return null;
  const [, prefix = '', core = '', suffix = ''] = match;
  return { prefix, core, suffix };
}
