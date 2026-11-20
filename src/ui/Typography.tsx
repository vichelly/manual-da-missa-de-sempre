import type { ReactNode } from 'react';
import styles from './Typography.module.css';

type TextProps = { children: ReactNode };

export const Intro = ({ children }: TextProps) => <p className={styles.intro}>{children}</p>;

export const Latin = ({ children, small = false }: TextProps & { small?: boolean }) => (
  <p className={small ? styles.latinSmall : styles.latin} lang="la">
    {children}
  </p>
);

export const Translation = ({ children }: TextProps) => (
  <p className={styles.translation}>{children}</p>
);

/** Small uppercase label, in the red of liturgical rubrics. */
export const Label = ({ children }: TextProps) => <div className={styles.label}>{children}</div>;

/** A description of an action, printed in red as in a missal. */
export const Rubric = ({ children }: TextProps) => <p className={styles.rubric}>{children}</p>;

export const Tip = ({ children }: TextProps) => <p className={styles.tip}>{children}</p>;

export const Callout = ({ children }: TextProps) => (
  <div className={styles.callout}>{children}</div>
);

export const NumberedSteps = ({ children }: TextProps) => (
  <ol className={styles.steps}>{children}</ol>
);
