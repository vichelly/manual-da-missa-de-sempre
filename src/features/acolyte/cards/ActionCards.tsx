import { useState, type ReactNode } from 'react';
import { shuffle } from '@/domain/random';
import { Button, Card, FlipCard, Label, Row } from '@/ui';
import styles from './ActionCards.module.css';

interface ActionCardsProps<T> {
  steps: readonly T[];
  getTitle: (step: T) => string;
  renderBack: (step: T) => ReactNode;
  hint: string;
}

/** Flashcards: the moment of the Mass on the front, what the acolyte does on the back. */
export function ActionCards<T>({ steps, getTitle, renderBack, hint }: ActionCardsProps<T>) {
  const [deck, setDeck] = useState<readonly T[]>(steps);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const step = deck[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + deck.length) % deck.length);
    setFlipped(false);
  };

  const reshuffle = () => {
    setDeck(shuffle(steps));
    setIndex(0);
    setFlipped(false);
  };

  if (step === undefined) return null;

  return (
    <Card>
      <Row>
        <span>
          Cartão {index + 1} de {deck.length}
        </span>
        <Button variant="ghost" size="small" onClick={reshuffle}>
          Embaralhar
        </Button>
      </Row>
      <FlipCard
        flipped={flipped}
        onFlip={() => setFlipped((f) => !f)}
        front={
          <>
            <Label>Momento</Label>
            <strong className={styles.moment}>{getTitle(step)}</strong>
          </>
        }
        back={
          <div className={styles.back}>
            <Label>{getTitle(step)}</Label>
            {renderBack(step)}
          </div>
        }
        hint={flipped ? 'Toque para voltar' : hint}
      />
      <Row>
        <Button variant="ghost" onClick={() => go(-1)}>
          Anterior
        </Button>
        <Button onClick={() => go(1)}>Próximo</Button>
      </Row>
    </Card>
  );
}
