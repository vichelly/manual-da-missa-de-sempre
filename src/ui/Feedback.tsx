import type { ReactNode } from 'react';
import type { FeedbackTone } from './feedbackTone';
import styles from './Feedback.module.css';

export function Feedback({ tone, children }: { tone: FeedbackTone; children: ReactNode }) {
  return (
    <div className={`${styles.feedback} ${styles[tone]}`} role="status">
      {children}
    </div>
  );
}
