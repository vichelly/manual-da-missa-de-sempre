import type { ReactNode } from 'react';
import styles from './FlipCard.module.css';

interface FlipCardProps {
  flipped: boolean;
  onFlip: () => void;
  front: ReactNode;
  back: ReactNode;
  hint?: string;
}

export function FlipCard({ flipped, onFlip, front, back, hint }: FlipCardProps) {
  return (
    <button type="button" className={styles.card} onClick={onFlip} aria-pressed={flipped}>
      {flipped ? back : front}
      {hint && <span className={styles.hint}>{hint}</span>}
    </button>
  );
}
