import type { ServingStep } from '@/content/types';
import { PositionBadges } from './PositionBadges';
import styles from './StepDetails.module.css';

export function StepDetails({
  step,
  showSilentBell,
}: {
  step: ServingStep;
  showSilentBell?: boolean;
}) {
  return (
    <>
      <PositionBadges step={step} showSilentBell={showSilentBell} />
      <p className={styles.where}>Onde: {step.where}</p>
      <p className={styles.actions}>{step.actions}</p>
      {step.says && <p className={styles.says}>Diz: {step.says}</p>}
    </>
  );
}
