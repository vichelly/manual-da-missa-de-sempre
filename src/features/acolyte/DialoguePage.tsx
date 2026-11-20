import { ACOLYTE_DIALOGUE } from '@/content/acolyte/dialogue';
import { Intro } from '@/ui';
import { DialogueQuiz } from '../practice/DialogueQuiz';

export function DialoguePage() {
  return (
    <>
      <Intro>
        Todas as respostas do acólito na Missa rezada, na ordem em que acontecem. Use “Recitar” para
        dizer em voz alta antes de ver a resposta.
      </Intro>
      <DialogueQuiz
        items={ACOLYTE_DIALOGUE}
        speakerLabel="Sacerdote"
        answerLabel="Resposta do acólito"
        scoreKey="acolyte-dialogue"
      />
    </>
  );
}
