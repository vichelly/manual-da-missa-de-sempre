import { useEffect, useMemo, useState } from 'react';
import type { DialogueItem } from '@/content/types';
import { uniqueAnswers } from '@/domain/choices';
import { percentage } from '@/domain/practiceSession';
import { shuffle } from '@/domain/random';
import { useBestScore } from '@/hooks/useStoredState';
import { usePracticeSession } from '@/hooks/usePracticeSession';
import {
  Button,
  Card,
  Latin,
  ProgressHeader,
  Row,
  SegmentedControl,
  SelectField,
  Toolbar,
  Translation,
} from '@/ui';
import { DialogueQuestion, type AnswerMode } from './DialogueQuestion';
import { PracticeResult } from './PracticeResult';

type Order = 'inOrder' | 'shuffled';

const ALL_PHASES = '';

interface DialogueQuizProps {
  items: readonly DialogueItem[];
  speakerLabel: string;
  answerLabel: string;
  scoreKey: string;
}

interface Settings {
  phase: string;
  order: Order;
}

function selectItems(items: readonly DialogueItem[], { phase, order }: Settings): DialogueItem[] {
  const filtered = items.filter((item) => phase === ALL_PHASES || item.phase === phase);
  return order === 'shuffled' ? shuffle(filtered) : filtered;
}

/** Practice the answers of a dialogue (priest ↔ acolyte), by phase of the Mass. */
export function DialogueQuiz({ items, speakerLabel, answerLabel, scoreKey }: DialogueQuizProps) {
  const [settings, setSettings] = useState<Settings>({ phase: ALL_PHASES, order: 'inOrder' });
  const [mode, setMode] = useState<AnswerMode>('choice');
  const [round, setRound] = useState(0);
  const [isFullRound, setIsFullRound] = useState(true);
  const [best, recordBest] = useBestScore(scoreKey);
  const { session, current, answer, next, start } = usePracticeSession(
    selectItems(items, settings),
  );

  const phases = useMemo(() => [...new Set(items.map((item) => item.phase))], [items]);
  const answerPool = useMemo(() => uniqueAnswers(items.map((item) => item.answer)), [items]);

  const restart = (nextSettings: Settings = settings, subset?: readonly DialogueItem[]) => {
    setSettings(nextSettings);
    setIsFullRound(!subset && nextSettings.phase === ALL_PHASES);
    setRound((r) => r + 1);
    start(subset ?? selectItems(items, nextSettings));
  };

  useEffect(() => {
    if (session.finished && isFullRound) {
      recordBest(percentage(session.correctCount, session.items.length));
    }
  }, [session.finished, session.correctCount, session.items.length, isFullRound, recordBest]);

  return (
    <>
      <Toolbar>
        <SelectField
          label="Parte:"
          value={settings.phase}
          options={[
            { value: ALL_PHASES, label: 'Toda a Missa' },
            ...phases.map((p) => ({ value: p, label: p })),
          ]}
          onChange={(phase) => restart({ ...settings, phase })}
        />
        <SegmentedControl
          label="Ordem"
          value={settings.order}
          options={[
            { value: 'inOrder', label: 'Em ordem' },
            { value: 'shuffled', label: 'Embaralhado' },
          ]}
          onChange={(order) => restart({ ...settings, order })}
        />
        <SegmentedControl
          label="Modo de resposta"
          value={mode}
          options={[
            { value: 'choice', label: 'Múltipla escolha' },
            { value: 'recite', label: 'Recitar' },
          ]}
          onChange={(value) => {
            setMode(value);
            restart();
          }}
        />
      </Toolbar>
      <Card>
        <ProgressHeader
          position={session.index + 1}
          total={session.items.length}
          correct={session.correctCount}
          finished={session.finished}
        />
        {current ? (
          <DialogueQuestion
            key={`${round}-${session.index}`}
            item={current}
            mode={mode}
            answerPool={answerPool}
            speakerLabel={speakerLabel}
            answerLabel={answerLabel}
            isLast={session.index === session.items.length - 1}
            onAnswer={answer}
            onNext={next}
          />
        ) : (
          <PracticeResult
            correct={session.correctCount}
            total={session.items.length}
            best={best}
            missed={session.missed}
            renderMissed={(item) => (
              <>
                <Translation>{item.prompt}</Translation>
                <Latin small>{item.answer}</Latin>
              </>
            )}
            onRetryMissed={(missed) => restart(settings, missed)}
            onRestart={() => restart()}
          />
        )}
        {current && (
          <Row>
            <Button variant="ghost" onClick={() => restart()}>
              Recomeçar
            </Button>
          </Row>
        )}
      </Card>
    </>
  );
}
