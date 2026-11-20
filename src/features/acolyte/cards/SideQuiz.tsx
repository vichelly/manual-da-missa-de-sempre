import { useState } from 'react';
import { SERVING_STEPS } from '@/content/acolyte/servingSteps';
import { ACOLYTE_POSITION_LABEL, MISSAL_POSITION_LABEL } from '@/content/labels';
import type { AltarSide } from '@/content/types';
import { shuffle } from '@/domain/random';
import { usePracticeSession } from '@/hooks/usePracticeSession';
import {
  Button,
  Card,
  ChoiceList,
  Feedback,
  Label,
  Latin,
  ProgressHeader,
  Row,
  toneFor,
} from '@/ui';
import { PracticeResult } from '../../practice/PracticeResult';
import { buildSideQuestions, type SideQuestion } from './sideQuestions';

const QUESTIONS = buildSideQuestions(SERVING_STEPS);
const SIDES: AltarSide[] = ['epistle', 'gospel'];
const SUBJECT_PROMPT = { acolyte: 'Onde fica o acólito?', missal: 'Onde está o missal?' } as const;

function SideQuestionView({
  question,
  isLast,
  onAnswer,
  onNext,
}: {
  question: SideQuestion;
  isLast: boolean;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const label = (side: AltarSide) => ACOLYTE_POSITION_LABEL[side];
  const correctLabel = label(question.answer);

  return (
    <>
      <Label>{question.step.title}</Label>
      <Latin>{SUBJECT_PROMPT[question.subject]}</Latin>
      <ChoiceList
        choices={SIDES.map(label)}
        correctChoice={correctLabel}
        selected={selected}
        onSelect={(choice) => {
          setSelected(choice);
          onAnswer(choice === correctLabel);
        }}
      />
      {selected && (
        <>
          <Feedback tone={toneFor(selected === correctLabel)}>
            <strong>{selected === correctLabel ? 'Correto. ' : 'Ainda não. '}</strong>
            {question.step.where} {MISSAL_POSITION_LABEL[question.step.missal]}.
          </Feedback>
          <Row>
            <span />
            <Button onClick={onNext}>{isLast ? 'Ver resultado' : 'Próxima'}</Button>
          </Row>
        </>
      )}
    </>
  );
}

export function SideQuiz() {
  const [round, setRound] = useState(0);
  const { session, current, answer, next, start } = usePracticeSession(shuffle(QUESTIONS));

  const restart = (items: readonly SideQuestion[] = shuffle(QUESTIONS)) => {
    setRound((r) => r + 1);
    start(items);
  };

  return (
    <Card>
      <ProgressHeader
        position={session.index + 1}
        total={session.items.length}
        correct={session.correctCount}
        finished={session.finished}
      />
      {current ? (
        <SideQuestionView
          key={`${round}-${session.index}`}
          question={current}
          isLast={session.index === session.items.length - 1}
          onAnswer={answer}
          onNext={next}
        />
      ) : (
        <PracticeResult
          correct={session.correctCount}
          total={session.items.length}
          missed={session.missed}
          renderMissed={(q) => (
            <p>
              {q.step.title}: {SUBJECT_PROMPT[q.subject]}{' '}
              <strong>{ACOLYTE_POSITION_LABEL[q.answer]}</strong>
            </p>
          )}
          onRetryMissed={restart}
          onRestart={() => restart()}
        />
      )}
    </Card>
  );
}
