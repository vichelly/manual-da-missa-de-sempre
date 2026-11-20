import type { ReactNode } from 'react';
import styles from './Badge.module.css';

export type BadgeTone =
  'epistle' | 'gospel' | 'neutral' | 'bell' | 'outline' | 'standing' | 'kneeling' | 'sitting';

export function Badge({ tone, children }: { tone: BadgeTone; children: ReactNode }) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
