import { useState } from 'react';
import { CHURCH_COMMANDMENTS, TEN_COMMANDMENTS } from '@/content/commandments';
import { Card, CheckboxField, Intro, SegmentedControl, Toolbar } from '@/ui';
import { CommandmentList } from './CommandmentList';
import { OrderExercise } from './exercises/OrderExercise';
import { RandomQuestions } from './exercises/RandomQuestions';
import { WriteExercise } from './exercises/WriteExercise';

type Exercise = 'random' | 'order' | 'write';

const EXERCISES: Record<Exercise, () => React.JSX.Element> = {
  random: RandomQuestions,
  order: OrderExercise,
  write: WriteExercise,
};

export function CommandmentsPage() {
  const [hideText, setHideText] = useState(false);
  const [exercise, setExercise] = useState<Exercise>('random');
  const ExerciseView = EXERCISES[exercise];

  return (
    <>
      <Card title="Os 10 Mandamentos da Lei de Deus">
        <Toolbar>
          <CheckboxField
            label="Esconder o texto (toque em cada um para conferir)"
            checked={hideText}
            onChange={setHideText}
          />
        </Toolbar>
        <CommandmentList key={String(hideText)} items={TEN_COMMANDMENTS} hideText={hideText} />
        <Intro>
          Os dez se resumem em dois: <strong>amar a Deus sobre todas as coisas</strong> (1º ao 3º) e{' '}
          <strong>amar o próximo como a nós mesmos</strong> (4º ao 10º).
        </Intro>
      </Card>

      <Card title="Exercício de memória">
        <Toolbar>
          <SegmentedControl
            label="Exercício"
            value={exercise}
            options={[
              { value: 'random', label: 'Perguntas aleatórias' },
              { value: 'order', label: 'Pôr em ordem' },
              { value: 'write', label: 'Escrever de memória' },
            ]}
            onChange={setExercise}
          />
        </Toolbar>
        <ExerciseView />
      </Card>

      <Card title="Os 5 Mandamentos da Igreja">
        <Intro>
          Para não confundir: os mandamentos <em>da Lei de Deus</em> são dez; os mandamentos{' '}
          <em>da Igreja</em> são cinco.
        </Intro>
        <CommandmentList items={CHURCH_COMMANDMENTS} />
      </Card>
    </>
  );
}
