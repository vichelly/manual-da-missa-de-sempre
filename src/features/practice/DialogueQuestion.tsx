import { useMemo, useState } from 'react';
import { buildChoices } from '@/domain/choices';
import { isSameText } from '@/domain/text';
import type { DialogueItem } from '@/content/types';
import {
  Button,
  ChoiceList,
  Feedback,
  Label,
  Latin,
  Row,
  Rubric,
  Tip,
  Translation,
  toneFor,
  type FeedbackTone,
} from '@/ui';

export type AnswerMode = 'choice' | 'recite';

interface DialogueQuestionProps {
  item: DialogueItem;
  mode: AnswerMode;
  answerPool: readonly string[];
  speakerLabel: string;
  answerLabel: string;
  isLast: boolean;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}

/** One prompt of the dialogue, answered by multiple choice or by reciting and self-grading. */
export function DialogueQuestion({
  item,
  mode,
  answerPool,
  speakerLabel,
  answerLabel,
  isLast,
  onAnswer,
  onNext,
}: DialogueQuestionProps) {
  const choices = useMemo(() => buildChoices(item.answer, answerPool), [item, answerPool]);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const choose = (choice: string) => {
    setSelected(choice);
    onAnswer(isSameText(choice, item.answer));
  };

  const grade = (correct: boolean) => {
    onAnswer(correct);
    onNext();
  };

  const feedbackTone: FeedbackTone | null =
    selected !== null ? toneFor(isSameText(selected, item.answer)) : revealed ? 'neutral' : null;

  return (
    <div>
      <Label>{item.phase}</Label>
      {item.isRubric ? (
        <Rubric>{item.prompt}</Rubric>
      ) : (
        <>
          <Translation>{speakerLabel}</Translation>
          <Latin>{item.prompt}</Latin>
        </>
      )}
      {item.promptTranslation && <Translation>{item.promptTranslation}</Translation>}

      <Label>{answerLabel}</Label>
      {mode === 'choice' ? (
        <ChoiceList
          choices={choices}
          correctChoice={item.answer}
          selected={selected}
          onSelect={choose}
          latin
        />
      ) : (
        !revealed && <Button onClick={() => setRevealed(true)}>Mostrar resposta</Button>
      )}

      {feedbackTone && (
        <Feedback tone={feedbackTone}>
          {feedbackTone === 'success' && <strong>Correto! </strong>}
          {feedbackTone === 'error' && <strong>Ainda não. </strong>}
          Resposta: <em lang="la">{item.answer}</em>
          {item.answerTranslation && <Translation>{item.answerTranslation}</Translation>}
          {item.note && <Tip>{item.note}</Tip>}
        </Feedback>
      )}

      {mode === 'recite' && revealed && (
        <Row align="start">
          <Button onClick={() => grade(true)}>Acertei</Button>
          <Button variant="ghost" onClick={() => grade(false)}>
            Errei
          </Button>
        </Row>
      )}
      {mode === 'choice' && selected !== null && (
        <Row>
          <span />
          <Button onClick={onNext}>{isLast ? 'Ver resultado' : 'Próxima'}</Button>
        </Row>
      )}
    </div>
  );
}
