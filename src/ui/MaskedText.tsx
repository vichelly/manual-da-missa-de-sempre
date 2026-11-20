import { Fragment, useState, type ReactNode } from 'react';
import type { MaskedWord } from '@/domain/masking';
import styles from './MaskedText.module.css';

interface MaskedTextProps {
  words: readonly MaskedWord[];
  revealAll?: boolean;
  /** Shown before the text, e.g. the response sign ℟. */
  lead?: ReactNode;
}

/**
 * Renders text with some letters hidden. Each hidden part is a button:
 * tapping it reveals (or hides again) that word.
 */
export function MaskedText({ words, revealAll = false, lead }: MaskedTextProps) {
  const [revealed, setRevealed] = useState<ReadonlySet<number>>(new Set());

  const toggle = (index: number) =>
    setRevealed((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <p className={styles.text} lang="la">
      {lead}
      {words.map((word, index) => (
        <Fragment key={index}>
          <span className={styles.word}>
            {word.prefix}
            {word.visible}
            {word.hidden && (
              <button
                type="button"
                className={[styles.hidden, (revealAll || revealed.has(index)) && styles.revealed]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => toggle(index)}
                aria-label={revealAll || revealed.has(index) ? word.hidden : 'Revelar palavra'}
              >
                {word.hidden}
              </button>
            )}
            {word.suffix}
          </span>{' '}
        </Fragment>
      ))}
    </p>
  );
}
