import { BELL_CUES } from '@/content/acolyte/bells';
import styles from './BellTable.module.css';

export function BellTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Momento</th>
          <th>Toques</th>
        </tr>
      </thead>
      <tbody>
        {BELL_CUES.map((cue) => (
          <tr key={cue.moment}>
            <td>{cue.moment}</td>
            <td>{cue.rings}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
