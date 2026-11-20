import type { RandomSource } from './random';
import { splitWord, tokenize } from './text';

/**
 * Memorization modes, from easiest to hardest:
 * full text, first letter only, about half the words hidden, everything hidden.
 */
export type MaskMode = 'full' | 'initials' | 'gaps' | 'hidden';

export const MASK_MODES: readonly MaskMode[] = ['full', 'initials', 'gaps', 'hidden'];

/** A word split into what stays visible and what the learner must recall. */
export interface MaskedWord {
  prefix: string;
  visible: string;
  hidden: string;
  suffix: string;
}

const GAP_PROBABILITY = 0.5;

function maskWord(token: string, mode: MaskMode, random: RandomSource): MaskedWord {
  const parts = splitWord(token);
  if (!parts || mode === 'full') {
    return { prefix: '', visible: token, hidden: '', suffix: '' };
  }
  const { prefix, core, suffix } = parts;
  switch (mode) {
    case 'initials':
      return { prefix, visible: core.charAt(0), hidden: core.slice(1), suffix };
    case 'hidden':
      return { prefix, visible: '', hidden: core, suffix };
    case 'gaps':
      return random() < GAP_PROBABILITY
        ? { prefix, visible: '', hidden: core, suffix }
        : { prefix, visible: core, hidden: '', suffix };
  }
}

export function maskText(
  text: string,
  mode: MaskMode,
  random: RandomSource = Math.random,
): MaskedWord[] {
  return tokenize(text).map((token) => maskWord(token, mode, random));
}
