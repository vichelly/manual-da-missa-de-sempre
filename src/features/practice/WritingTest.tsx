import { useState } from 'react';
import { compareText, type TextComparison } from '@/domain/compareText';
import { percentage } from '@/domain/practiceSession';
import { useBestScore } from '@/hooks/useStoredState';
import { Button, Feedback, Row, TextArea, Translation } from '@/ui';
import styles from './WritingTest.module.css';

interface WritingTestProps {
  expected: string;
  scoreKey: string;
  placeholder?: string;
}

/** Write a text from memory and see, word by word, what was missed. */
export function WritingTest({ expected, scoreKey, placeholder }: WritingTestProps) {
  const [attempt, setAttempt] = useState('');
  const [result, setResult] = useState<TextComparison | null>(null);
  const [best, recordBest] = useBestScore(scoreKey);

  const check = () => {
    const comparison = compareText(expected, attempt);
    setResult(comparison);
    recordBest(percentage(comparison.matchedCount, comparison.total));
  };

  const clear = () => {
    setAttempt('');
    setResult(null);
  };

  return (
    <>
      <TextArea
        value={attempt}
        onChange={(e) => setAttempt(e.target.value)}
        placeholder={placeholder}
        aria-label="Texto escrito de memória"
      />
      <Row>
        <Button variant="ghost" onClick={clear}>
          Limpar
        </Button>
        <Button onClick={check}>Verificar</Button>
      </Row>
      {result && (
        <Feedback tone={result.isPerfect ? 'success' : 'error'}>
          <strong>
            {result.matchedCount} de {result.total} palavras certas e na ordem (
            {percentage(result.matchedCount, result.total)}%).
          </strong>
          {result.isPerfect && ' Perfeito!'}
          <p className={styles.result} lang="la">
            {result.words.map((word, index) => (
              <span key={index} className={word.matched ? styles.matched : styles.missing}>
                {word.text}{' '}
              </span>
            ))}
          </p>
          {result.extraWords.length > 0 && (
            <Translation>
              Palavras a mais ou com grafia diferente: {result.extraWords.join(', ')}
            </Translation>
          )}
          <Translation>
            Melhor resultado neste aparelho:{' '}
            {Math.max(best, percentage(result.matchedCount, result.total))}%
          </Translation>
        </Feedback>
      )}
    </>
  );
}
