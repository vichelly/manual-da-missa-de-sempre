import { PRAYERS_AT_FOOT } from '@/content/acolyte/prayersAtFoot';
import { Card, Intro } from '@/ui';
import { MemoryDrill } from '../practice/MemoryDrill';

export function PrayersAtFootPage() {
  return (
    <Card title="Orações ao pé do altar">
      <Intro>
        É a parte mais longa que o acólito diz de cor. A frase do sacerdote fica sempre visível; a
        sua resposta (℟) vai sumindo conforme o modo escolhido. Toque numa palavra escondida para
        revelá-la.
      </Intro>
      <Intro>
        No Tempo da Paixão e nas Missas de Réquiem o Salmo 42 é omitido: depois do primeiro{' '}
        <em>Introibo</em> vai-se direto ao <em>Adjutorium</em> (blocos 2 a 6 não se dizem).
      </Intro>
      <MemoryDrill blocks={PRAYERS_AT_FOOT} />
    </Card>
  );
}
