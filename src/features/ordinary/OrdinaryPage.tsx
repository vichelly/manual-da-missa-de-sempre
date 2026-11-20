import { useState } from 'react';
import { ORDO_MISSAE } from '@/content/ordinary/ordo';
import type { Posture } from '@/content/types';
import { Card, Intro, SegmentedControl, SelectField, Toolbar } from '@/ui';
import { OrdoSectionView, type LanguageView } from './OrdoSectionView';
import { PostureBadge } from './PostureBadge';
import { SpeakerTag } from './SpeakerTag';
import styles from './OrdinaryPage.module.css';

const POSTURES: Posture[] = ['standing', 'kneeling', 'sitting'];
const sectionId = (index: number) => `ordo-${index + 1}`;

export function OrdinaryPage() {
  const [view, setView] = useState<LanguageView>('both');

  const jumpTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <Card title="Como ler">
        <Intro>
          O texto completo do Ordinário da Missa rezada, com o latim e a tradução. As partes que
          mudam a cada dia (Intróito, Coleta, Epístola, Evangelho, etc.) estão indicadas como{' '}
          <em>próprio do dia</em>: procure-as no missal.
        </Intro>
        <div className={styles.legend}>
          {POSTURES.map((posture) => (
            <PostureBadge posture={posture} key={posture} />
          ))}
          <SpeakerTag speaker="priest" /> Sacerdote
          <SpeakerTag speaker="server" /> Ministro (acólito)
        </div>
        <Intro>
          As posições indicadas são as mais comuns na Missa rezada. Na Missa cantada fica-se mais
          tempo de pé e senta-se quando o sacerdote se senta. Siga sempre o costume da sua capela.
        </Intro>
        <Toolbar>
          <SelectField
            label="Ir para:"
            value=""
            options={[
              { value: '', label: 'escolha uma parte…' },
              ...ORDO_MISSAE.map((section, index) => ({
                value: sectionId(index),
                label: `${index + 1}. ${section.title}`,
              })),
            ]}
            onChange={jumpTo}
          />
          <SegmentedControl
            label="Idioma"
            value={view}
            options={[
              { value: 'both', label: 'Latim e português' },
              { value: 'latin', label: 'Só latim' },
              { value: 'translation', label: 'Só português' },
            ]}
            onChange={setView}
          />
        </Toolbar>
      </Card>
      {ORDO_MISSAE.map((section, index) => (
        <OrdoSectionView key={section.title} section={section} id={sectionId(index)} view={view} />
      ))}
    </>
  );
}
