import { useState } from 'react';
import { ORDINAL } from '@/content/labels';
import { TEN_COMMANDMENTS } from '@/content/commandments';
import { usePracticeSession } from '@/hooks/usePracticeSession';
import { Button, ChoiceList, Feedback, Latin, ProgressHeader, Row, toneFor } from '@/ui';
import { PracticeResult } from '../../practice/PracticeResult';
import { buildCommandmentQuestions, type CommandmentQuestion } from '../commandmentQuestions';

const optionLabel = (question: CommandmentQuestion, index: number) =>
  question.kind === 'textForNumber'
    ? (TEN_COMMANDMENTS[index] ?? '')
    : `${ORDINAL[index]} mandamento`;

const promptFor = (question: CommandmentQuestion) =>
  question.kind === 'textForNumber'
    ? `Qual é o ${ORDINAL[question.index]} mandamento?`
    : `Que número é o mandamento “${TEN_COMMANDMENTS[question.index]}”?`;

function QuestionView({
  question,
  isLast,
  onAnswer,
  onNext,
}: {
  question: CommandmentQuestion;
  isLast: boolean;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const correct = optionLabel(question, question.index);

  return (
    <>
      <Latin>{promptFor(question)}</Latin>
      <ChoiceList
        choices={question.options.map((index) => optionLabel(question, index))}
        correctChoice={correct}
        selected={selected}
        onSelect={(choice) => {
          setSelected(choice);
          onAnswer(choice === correct);
        }}
      />
      {selected && (
        <>
          <Feedback tone={toneFor(selected === correct)}>
            <strong>{selected === correct ? 'Correto! ' : 'Ainda não. '}</strong>
            {ORDINAL[question.index]}: {TEN_COMMANDMENTS[question.index]}
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

export function RandomQuestions() {
  const newRound = () => buildCommandmentQuestions(TEN_COMMANDMENTS.length);
  const [round, setRound] = useState(0);
  const { session, current, answer, next, start } = usePracticeSession(newRound());

  const restart = (items: readonly CommandmentQuestion[] = newRound()) => {
    setRound((r) => r + 1);
    start(items);
  };

  return (
    <>
      <ProgressHeader
        position={session.index + 1}
        total={session.items.length}
        correct={session.correctCount}
        finished={session.finished}
      />
      {current ? (
        <QuestionView
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
              {ORDINAL[q.index]}: {TEN_COMMANDMENTS[q.index]}
            </p>
          )}
          onRetryMissed={restart}
          onRestart={() => restart()}
        />
      )}
    </>
  );
}
