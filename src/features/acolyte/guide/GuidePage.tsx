import { SERVER_ROLE_LABEL, SERVER_ROLE_STEPS } from '@/content/acolyte/twoServers';
import { SERVING_STEPS } from '@/content/acolyte/servingSteps';
import type { ServerRole } from '@/content/types';
import { useStoredState } from '@/hooks/useStoredState';
import { Callout, Card, Intro, SegmentedControl, Toolbar } from '@/ui';
import { ROLE_OPTIONS, ROLE_STORAGE_KEY, type Role } from '../roles';
import { AltarDiagram } from './AltarDiagram';
import { BellTable } from './BellTable';
import { RoleStepDetails } from './RoleStepDetails';
import { StepDetails } from './StepDetails';
import { StepList } from './StepList';

function SingleServerGuide() {
  return (
    <>
      <Card title="Quando tocar o sino">
        <BellTable />
        <Intro>Os toques marcados como costume variam de capela para capela.</Intro>
      </Card>
      <Card title="Passo a passo: um acólito">
        <StepList
          steps={SERVING_STEPS}
          getTitle={(step) => step.title}
          renderDetails={(step) => <StepDetails step={step} />}
        />
      </Card>
    </>
  );
}

function TwoServersGuide({ role }: { role: ServerRole }) {
  const steps = SERVER_ROLE_STEPS[role];
  return (
    <Card title={`Passo a passo: ${SERVER_ROLE_LABEL[role]}`}>
      <Intro>
        Missa com dois acólitos, segundo o costume da capela, na ordem em que as coisas acontecem.
      </Intro>
      {steps.length === 0 ? (
        <Intro>As instruções deste acólito ainda não foram cadastradas.</Intro>
      ) : (
        <StepList
          steps={steps}
          getTitle={(step) => step.title}
          renderDetails={(step) => <RoleStepDetails step={step} />}
        />
      )}
    </Card>
  );
}

export function GuidePage() {
  const [role, setRole] = useStoredState<Role>(ROLE_STORAGE_KEY, 'single');

  return (
    <>
      <Toolbar>
        <SegmentedControl label="Função" value={role} options={ROLE_OPTIONS} onChange={setRole} />
      </Toolbar>

      <Card title="Os dois lados do altar">
        <AltarDiagram />
        <Callout>
          <strong>Regra de ouro (um acólito):</strong> o acólito fica sempre do lado{' '}
          <strong>oposto ao livro</strong> que o sacerdote está lendo. Missal na Epístola → acólito
          no Evangelho. Missal no Evangelho → acólito na Epístola.
        </Callout>
        <Intro>O mestre de cerimônias e o padre da sua capela têm a palavra final.</Intro>
      </Card>

      {role === 'single' ? <SingleServerGuide /> : <TwoServersGuide role={role} />}
    </>
  );
}
