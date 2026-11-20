import { useState } from 'react';
import { TEN_COMMANDMENTS } from '@/content/commandments';
import { range, shuffle } from '@/domain/random';
import { Button, ChoiceList, Feedback, Intro } from '@/ui';
import { ORDINAL } from '@/content/labels';
import { CommandmentItem } from '../CommandmentList';

const WRONG_FLASH_MS = 600;

/** Tap the shuffled commandments in the right order, from the first to the tenth. */
export function OrderExercise() {
  const [pool, setPool] = useState(() => shuffle(range(TEN_COMMANDMENTS.length)));
  const [placed, setPlaced] = useState(0);
  const [errors, setErrors] = useState(0);
  const [wrongPick, setWrongPick] = useState<string | null>(null);

  const finished = placed === TEN_COMMANDMENTS.length;
  const remaining = pool.filter((index) => index >= placed);

  const pick = (text: string) => {
    if (text === TEN_COMMANDMENTS[placed]) {
      setPlaced((p) => p + 1);
      return;
    }
    setErrors((e) => e + 1);
    setWrongPick(text);
    window.setTimeout(() => setWrongPick(null), WRONG_FLASH_MS);
  };

  const reset = () => {
    setPool(shuffle(range(TEN_COMMANDMENTS.length)));
    setPlaced(0);
    setErrors(0);
  };

  return (
    <>
      <Intro>Toque nos mandamentos na ordem certa, do 1º ao 10º.</Intro>
      {TEN_COMMANDMENTS.slice(0, placed).map((text, position) => (
        <CommandmentItem position={position} key={text}>
          <span>{text}</span>
        </CommandmentItem>
      ))}
      {!finished && (
        <ChoiceList
          key={`${placed}-${wrongPick ?? ''}`}
          choices={remaining.map((index) => TEN_COMMANDMENTS[index] ?? '')}
          correctChoice={TEN_COMMANDMENTS[placed] ?? ''}
          selected={null}
          onSelect={pick}
        />
      )}
      {wrongPick && (
        <Feedback tone="error">
          “{wrongPick}” não é o {ORDINAL[placed]}. Erros: {errors}
        </Feedback>
      )}
      {finished && (
        <Feedback tone="success">
          {errors === 0
            ? 'Perfeito, sem nenhum erro!'
            : `Completo, com ${errors} erro(s). Tente de novo até zerar.`}
        </Feedback>
      )}
      <Button variant="ghost" onClick={reset}>
        Embaralhar de novo
      </Button>
    </>
  );
}
