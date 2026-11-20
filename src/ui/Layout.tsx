import type { ReactNode } from 'react';
import styles from './Layout.module.css';

/** Horizontal group of actions; spreads items apart unless `align="start"`. */
export function Row({ children, align }: { children: ReactNode; align?: 'start' }) {
  return (
    <div className={[styles.row, align === 'start' && styles.start].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}

/** Group of controls above an exercise. */
export function Toolbar({ children }: { children: ReactNode }) {
  return <div className={styles.toolbar}>{children}</div>;
}
