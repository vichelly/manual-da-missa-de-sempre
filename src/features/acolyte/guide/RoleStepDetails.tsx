import type { RoleStep } from '@/content/types';
import { Badge } from '@/ui';
import styles from './RoleStepDetails.module.css';

export function RoleStepDetails({ step }: { step: RoleStep }) {
  return (
    <>
      {step.bell && <Badge tone="bell">Sino: {step.bell}</Badge>}
      {step.cue && (
        <p className={styles.cue}>
          <span className={styles.cueLabel}>Quando: </span>
          {step.cue}
        </p>
      )}
      <ul className={styles.actions}>
        {step.actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ul>
      {step.says && <p className={styles.says}>Diz: {step.says}</p>}
      {step.attention && (
        <p className={styles.attention}>
          <strong>Não esquecer:</strong> {step.attention}
        </p>
      )}
    </>
  );
}
