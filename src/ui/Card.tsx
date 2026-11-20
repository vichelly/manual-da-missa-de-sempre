import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  title?: string;
  /** Rendered next to the title, e.g. a badge. */
  aside?: ReactNode;
  id?: string;
  children: ReactNode;
}

export function Card({ title, aside, id, children }: CardProps) {
  return (
    <section className={styles.card} id={id}>
      {title && (
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {aside}
        </header>
      )}
      {children}
    </section>
  );
}
