import { useState } from 'react';
import { TEN_COMMANDMENTS } from '@/content/commandments';
import { ORDINAL } from '@/content/labels';
import { matchesByKeywords } from '@/domain/keywords';
import { Button, Feedback, Intro, Row } from '@/ui';
import { CommandmentItem } from '../CommandmentList';
import styles from './WriteExercise.module.css';

const emptyAnswers = () => TEN_COMMANDMENTS.map(() => '');

/** Write each commandment from memory; the learner's own wording is accepted. */
export function WriteExercise() {
  const [answers, setAnswers] = useState<string[]>(emptyAnswers);
  const [results, setResults] = useState<boolean[] | null>(null);

  const update = (position: number, value: string) =>
    setAnswers((current) => current.map((answer, i) => (i === position ? value : answer)));

  const check = () =>
    setResults(
      TEN_COMMANDMENTS.map((expected, i) => matchesByKeywords(expected, answers[i] ?? '')),
    );

  const clear = () => {
    setAnswers(emptyAnswers());
    setResults(null);
  };

  const rightCount = results?.filter(Boolean).length ?? 0;

  return (
    <>
      <Intro>
        Escreva cada mandamento de memória. Não precisa ser palavra por palavra: conta como certo se
        as palavras principais estiverem lá.
      </Intro>
      {TEN_COMMANDMENTS.map((expected, position) => {
        const result = results?.[position];
        const stateClass = result === undefined ? '' : result ? styles.right : styles.wrong;
        return (
          <CommandmentItem position={position} key={expected}>
            <div className={styles.answer}>
              <input
                className={`${styles.input} ${stateClass}`}
                value={answers[position]}
                onChange={(e) => update(position, e.target.value)}
                aria-label={`${ORDINAL[position]} mandamento`}
                autoComplete="off"
              />
              {result === false && <div className={styles.solution}>Certo: {expected}</div>}
            </div>
          </CommandmentItem>
        );
      })}
      <Row>
        <Button variant="ghost" onClick={clear}>
          Limpar
        </Button>
        <Button onClick={check}>Verificar</Button>
      </Row>
      {results && (
        <Feedback tone={rightCount === TEN_COMMANDMENTS.length ? 'success' : 'error'}>
          {rightCount} de {TEN_COMMANDMENTS.length} corretos.
        </Feedback>
      )}
    </>
  );
}
