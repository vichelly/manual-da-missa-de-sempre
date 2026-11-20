import { useState, type ReactNode } from 'react';
import { ORDINAL } from '@/content/labels';
import styles from './CommandmentList.module.css';

export function CommandmentItem({ position, children }: { position: number; children: ReactNode }) {
  return (
    <div className={styles.item}>
      <span className={styles.ordinal}>{ORDINAL[position]}</span>
      {children}
    </div>
  );
}

function HiddenText({ text }: { text: string }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <button
      type="button"
      className={[styles.hidden, revealed && styles.revealed].filter(Boolean).join(' ')}
      onClick={() => setRevealed((r) => !r)}
      aria-label={revealed ? text : 'Revelar mandamento'}
    >
      {text}
    </button>
  );
}

interface CommandmentListProps {
  items: readonly string[];
  /** Hide the text so the learner recites it from the number. */
  hideText?: boolean;
}

export function CommandmentList({ items, hideText = false }: CommandmentListProps) {
  return (
    <>
      {items.map((text, position) => (
        <CommandmentItem position={position} key={text}>
          {hideText ? <HiddenText text={text} /> : <span>{text}</span>}
        </CommandmentItem>
      ))}
    </>
  );
}
