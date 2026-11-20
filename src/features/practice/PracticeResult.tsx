import type { ReactNode } from 'react';
import { percentage } from '@/domain/practiceSession';
import { Button, Label, Latin, Row, Tip, Translation } from '@/ui';

interface PracticeResultProps<T> {
  correct: number;
  total: number;
  best?: number;
  missed: readonly T[];
  renderMissed: (item: T) => ReactNode;
  onRetryMissed: (items: readonly T[]) => void;
  onRestart: () => void;
}

export function PracticeResult<T>({
  correct,
  total,
  best,
  missed,
  renderMissed,
  onRetryMissed,
  onRestart,
}: PracticeResultProps<T>) {
  return (
    <div>
      <Label>Resultado</Label>
      <Latin>
        {correct} de {total} ({percentage(correct, total)}%)
      </Latin>
      {best !== undefined && <Translation>Melhor resultado neste aparelho: {best}%</Translation>}
      {missed.length > 0 ? (
        <>
          <Label>Para revisar</Label>
          {missed.map((item, index) => (
            <div key={index}>{renderMissed(item)}</div>
          ))}
        </>
      ) : (
        <Tip>Nenhum erro. Muito bem!</Tip>
      )}
      <Row>
        <Button variant="ghost" onClick={onRestart}>
          Recomeçar
        </Button>
        {missed.length > 0 && (
          <Button onClick={() => onRetryMissed(missed)}>Treinar só estes ({missed.length})</Button>
        )}
      </Row>
    </div>
  );
}
