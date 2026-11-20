import { CONFITEOR_BLOCKS, CONFITEOR_TEXT } from '@/content/acolyte/confiteor';
import { Callout, Card, Intro, NumberedSteps } from '@/ui';
import { MemoryDrill } from '../../practice/MemoryDrill';
import { WritingTest } from '../../practice/WritingTest';
import { ConfiteorStructure } from './ConfiteorStructure';

export function ConfiteorPage() {
  return (
    <>
      <Card title="Como decorar o Confiteor">
        <Intro>
          O Confiteor parece longo, mas é uma lista que se repete. Entendida a estrutura, metade
          dele você já sabe:
        </Intro>
        <ConfiteorStructure />
        <Callout>
          <strong>Atenção:</strong> o acólito diz <em>tibi, pater</em> e <em>te, pater</em> (a vós,
          padre). O sacerdote, no Confiteor dele, diz <em>vobis, fratres</em> e{' '}
          <em>vos, fratres</em>. Na Missa tradicional são só três coisas:{' '}
          <em>cogitatione, verbo et opere</em>.
        </Callout>
      </Card>

      <Card title="Método em uma semana">
        <NumberedSteps>
          <li>Leia os 7 blocos com a tradução até entender a ordem da lista.</li>
          <li>
            Cada dia, aumente “Até o bloco” em um e recite <strong>sempre desde o começo</strong>.
          </li>
          <li>Avance os modos: Texto completo → Só iniciais → Lacunas → Tudo oculto.</li>
          <li>
            Faça os gestos enquanto recita: inclinado profundamente, voltar-se um pouco para o
            sacerdote no <em>tibi, pater</em> e no <em>te, pater</em>, bater no peito três vezes no{' '}
            <em>mea culpa</em>.
          </li>
          <li>Quando conseguir de olhos fechados, faça a prova escrita.</li>
        </NumberedSteps>
      </Card>

      <Card title="Treino por blocos">
        <MemoryDrill blocks={CONFITEOR_BLOCKS} cumulative />
      </Card>

      <Card title="Prova escrita">
        <Intro>
          Escreva o Confiteor inteiro de memória. Acentos, maiúsculas, pontuação e j/i não contam.
          As palavras que faltaram ou saíram fora de ordem ficam em vermelho.
        </Intro>
        <WritingTest
          expected={CONFITEOR_TEXT}
          scoreKey="confiteor-writing"
          placeholder="Confiteor Deo omnipotenti…"
        />
      </Card>
    </>
  );
}
