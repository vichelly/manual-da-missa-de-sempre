import type { ReactNode } from 'react';
import styles from './GuidePage.module.css';

interface StepListProps<T> {
  steps: readonly T[];
  getTitle: (step: T) => string;
  renderDetails: (step: T) => ReactNode;
}

/** Numbered list of the moments of the Mass for one role. */
export function StepList<T>({ steps, getTitle, renderDetails }: StepListProps<T>) {
  return (
    <>
      {steps.map((step, index) => (
        <article className={styles.step} key={getTitle(step)}>
          <span className={styles.number}>{index + 1}</span>
          <h3 className={styles.title}>{getTitle(step)}</h3>
          {renderDetails(step)}
        </article>
      ))}
    </>
  );
}
