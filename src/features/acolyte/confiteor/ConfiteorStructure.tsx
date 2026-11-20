import { CONFITEOR_ENDING_SHIFTS, CONFITEOR_STRUCTURE } from '@/content/acolyte/confiteor';
import { Intro } from '@/ui';
import styles from './ConfiteorStructure.module.css';

/** The Confiteor drawn as three lines: whom I confess to, what I did, whom I ask to pray. */
export function ConfiteorStructure() {
  return (
    <>
      {CONFITEOR_STRUCTURE.map((line) => (
        <div className={styles.line} key={line.lead}>
          <span className={styles.key}>{line.lead}</span>
          {line.items.map((item) => (
            <span className={styles.item} key={item}>
              {item}
            </span>
          ))}
          {line.result && (
            <>
              <span className={styles.arrow}>→</span>
              <span className={styles.key}>{line.result}</span>
            </>
          )}
        </div>
      ))}
      <Intro>
        A segunda lista é <strong>a mesma da primeira, sem Deus</strong>, com as terminações
        trocadas:{' '}
        <em lang="la">
          {CONFITEOR_ENDING_SHIFTS.map(([from, to]) => `${from} → ${to}`).join(', ')}
        </em>
        .
      </Intro>
    </>
  );
}
