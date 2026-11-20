import { useState } from 'react';
import { SERVING_STEPS } from '@/content/acolyte/servingSteps';
import { shuffle } from '@/domain/random';
import { Button, Card, FlipCard, Label, Row } from '@/ui';
import { StepDetails } from '../guide/StepDetails';
import styles from './ActionCards.module.css';

/** Flashcards: the moment of the Mass on the front, what the acolyte does on the back. */
export function ActionCards() {
  const [deck, setDeck] = useState(SERVING_STEPS);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const step = deck[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + deck.length) % deck.length);
    setFlipped(false);
  };

  const reshuffle = () => {
    setDeck(shuffle(SERVING_STEPS));
    setIndex(0);
    setFlipped(false);
  };

  if (!step) return null;

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
            <strong className={styles.moment}>{step.title}</strong>
          </>
        }
        back={
          <div className={styles.back}>
            <StepDetails step={step} showSilentBell />
          </div>
        }
        hint={
          flipped ? 'Toque para voltar' : 'Onde fico? Onde está o missal? O que faço? Toca o sino?'
        }
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
