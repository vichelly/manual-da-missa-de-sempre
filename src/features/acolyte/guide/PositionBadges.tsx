import { ACOLYTE_POSITION_LABEL, MISSAL_POSITION_LABEL } from '@/content/labels';
import type { AcolytePosition, ServingStep } from '@/content/types';
import { Badge, type BadgeTone } from '@/ui';

const ACOLYTE_TONE: Record<AcolytePosition, BadgeTone> = {
  epistle: 'epistle',
  gospel: 'gospel',
  moving: 'neutral',
  center: 'neutral',
};

/** Where the acolyte is, where the missal is and whether the bell rings. */
export function PositionBadges({
  step,
  showSilentBell = false,
}: {
  step: ServingStep;
  showSilentBell?: boolean;
}) {
  return (
    <div>
      <Badge tone={ACOLYTE_TONE[step.acolyte]}>
        Acólito: {ACOLYTE_POSITION_LABEL[step.acolyte]}
      </Badge>
      <Badge tone="outline">{MISSAL_POSITION_LABEL[step.missal]}</Badge>
      {(step.bell || showSilentBell) && <Badge tone="bell">Sino: {step.bell ?? 'não toca'}</Badge>}
    </div>
  );
}
