import { useMemo, useState } from 'react';
import type { MemoryBlock } from '@/content/types';
import { maskText, type MaskMode } from '@/domain/masking';
import { range } from '@/domain/random';
import {
  Button,
  CheckboxField,
  MaskedText,
  SegmentedControl,
  SelectField,
  Tip,
  Toolbar,
  Translation,
} from '@/ui';
import styles from './MemoryDrill.module.css';

const MODE_OPTIONS = [
  { value: 'full', label: 'Texto completo' },
  { value: 'initials', label: 'Só iniciais' },
  { value: 'gaps', label: 'Lacunas' },
  { value: 'hidden', label: 'Tudo oculto' },
] as const satisfies readonly { value: MaskMode; label: string }[];

interface MemoryDrillProps {
  blocks: readonly MemoryBlock[];
  /** Lets the learner work on blocks 1..N, adding one block at a time. */
  cumulative?: boolean;
}

/**
 * Progressive memorization: the text fades from complete to first letters,
 * then gaps, then nothing. Hidden words are revealed by tapping them.
 */
export function MemoryDrill({ blocks, cumulative = false }: MemoryDrillProps) {
  const [mode, setMode] = useState<MaskMode>('full');
  const [upTo, setUpTo] = useState(blocks.length);
  const [showTranslation, setShowTranslation] = useState(true);
  const [revealAll, setRevealAll] = useState(false);
  const [drawCount, setDrawCount] = useState(0);

  const masked = useMemo(
    () => blocks.map((block) => maskText(block.latin, mode)),
    // drawCount forces a new random draw of the gaps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [blocks, mode, drawCount],
  );

  const redraw = () => {
    setRevealAll(false);
    setDrawCount((count) => count + 1);
  };

  return (
    <>
      <Toolbar>
        <SegmentedControl
          label="Modo de memorização"
          value={mode}
          options={MODE_OPTIONS}
          onChange={(value) => {
            setMode(value);
            redraw();
          }}
        />
        {cumulative && (
          <SelectField
            label="Até o bloco:"
            value={String(upTo)}
            options={range(blocks.length).map((i) => ({
              value: String(i + 1),
              label: String(i + 1),
            }))}
            onChange={(value) => setUpTo(Number(value))}
          />
        )}
        <CheckboxField label="Tradução" checked={showTranslation} onChange={setShowTranslation} />
        <Button variant="ghost" size="small" onClick={redraw}>
          Sortear de novo
        </Button>
        <Button variant="ghost" size="small" onClick={() => setRevealAll(true)}>
          Revelar tudo
        </Button>
      </Toolbar>

      {blocks.slice(0, upTo).map((block, index) => (
        <div className={styles.block} key={index}>
          <div>
            <span className={styles.number}>{index + 1}</span>
            {block.title && <strong>{block.title}</strong>}
          </div>
          {block.cue && (
            <div className={styles.cue}>
              <span className={styles.cueSpeaker}>Sacerdote: </span>
              <i lang="la">{block.cue}</i>
            </div>
          )}
          {block.tip && <Tip>Dica: {block.tip}</Tip>}
          {showTranslation && block.translation && <Translation>{block.translation}</Translation>}
          <MaskedText
            key={`${drawCount}-${mode}`}
            words={masked[index] ?? []}
            revealAll={revealAll}
            lead={block.cue ? <span className={styles.response}>℟. </span> : undefined}
          />
        </div>
      ))}
    </>
  );
}
