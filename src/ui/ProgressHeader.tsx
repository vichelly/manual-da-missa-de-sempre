import styles from './ProgressHeader.module.css';

interface ProgressHeaderProps {
  position: number;
  total: number;
  correct: number;
  finished?: boolean;
}

/** "Item 3 of 10 · 2 right" with a progress bar. */
export function ProgressHeader({
  position,
  total,
  correct,
  finished = false,
}: ProgressHeaderProps) {
  const progress = total === 0 ? 0 : finished ? 1 : (position - 1) / total;
  return (
    <div>
      <div className={styles.stats}>
        <span>{finished ? 'Concluído' : `Item ${position} de ${total}`}</span>
        <span>Acertos: {correct}</span>
      </div>
      <div
        className={styles.track}
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={styles.fill} style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  );
}
