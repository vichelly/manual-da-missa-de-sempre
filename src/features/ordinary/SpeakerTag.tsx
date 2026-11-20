import styles from './SpeakerTag.module.css';

export type Speaker = 'priest' | 'server';

const INITIAL: Record<Speaker, string> = { priest: 'S', server: 'M' };
const NAME: Record<Speaker, string> = { priest: 'Sacerdote', server: 'Ministro' };

/** "S" for the priest, "M" for the server (minister), as in hand missals. */
export function SpeakerTag({ speaker }: { speaker: Speaker }) {
  return (
    <span className={`${styles.tag} ${styles[speaker]}`} title={NAME[speaker]}>
      {INITIAL[speaker]}
    </span>
  );
}
