import { SERVING_STEPS } from '@/content/acolyte/servingSteps';
import { Callout, Card, Intro } from '@/ui';
import { AltarDiagram } from './AltarDiagram';
import { BellTable } from './BellTable';
import { StepDetails } from './StepDetails';
import styles from './GuidePage.module.css';

export function GuidePage() {
  return (
    <>
      <Card title="Os dois lados do altar">
        <AltarDiagram />
        <Callout>
          <strong>Regra de ouro:</strong> o acólito fica sempre do lado{' '}
          <strong>oposto ao livro</strong> que o sacerdote está lendo. Missal na Epístola → acólito
          no Evangelho. Missal no Evangelho → acólito na Epístola. Por isso, durante o Cânon,{' '}
          <strong>o sino é tocado do lado da Epístola</strong>.
        </Callout>
        <Intro>
          O guia descreve a Missa rezada com um acólito. Com dois acólitos, cada um fica de um lado
          e as tarefas são divididas conforme o costume. O mestre de cerimônias e o padre da sua
          capela têm a palavra final.
        </Intro>
      </Card>

      <Card title="Quando tocar o sino">
        <BellTable />
        <Intro>Os toques marcados como costume variam de capela para capela.</Intro>
      </Card>

      <Card title="Passo a passo">
        {SERVING_STEPS.map((step, index) => (
          <article className={styles.step} key={step.title}>
            <span className={styles.number}>{index + 1}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <StepDetails step={step} />
          </article>
        ))}
      </Card>
    </>
  );
}
