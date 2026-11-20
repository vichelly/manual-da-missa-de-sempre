import { useState } from 'react';
import { SERVER_ROLE_STEPS } from '@/content/acolyte/twoServers';
import { SERVING_STEPS } from '@/content/acolyte/servingSteps';
import { useStoredState } from '@/hooks/useStoredState';
import { Card, Intro, SegmentedControl, Toolbar } from '@/ui';
import { RoleStepDetails } from '../guide/RoleStepDetails';
import { StepDetails } from '../guide/StepDetails';
import { ROLE_OPTIONS, ROLE_STORAGE_KEY, type Role } from '../roles';
import { ActionCards } from './ActionCards';
import { SideQuiz } from './SideQuiz';

type View = 'cards' | 'quiz';

function RoleCards({ role }: { role: Role }) {
  if (role === 'single') {
    return (
      <ActionCards
        key={role}
        steps={SERVING_STEPS}
        getTitle={(step) => step.title}
        renderBack={(step) => <StepDetails step={step} showSilentBell />}
        hint="Onde fico? Onde está o missal? O que faço? Toca o sino?"
      />
    );
  }
  const steps = SERVER_ROLE_STEPS[role];
  if (steps.length === 0) {
    return (
      <Card>
        <Intro>As instruções deste acólito ainda não foram cadastradas.</Intro>
      </Card>
    );
  }
  return (
    <ActionCards
      key={role}
      steps={steps}
      getTitle={(step) => step.title}
      renderBack={(step) => <RoleStepDetails step={step} />}
      hint="Qual é o sinal? O que faço? Toca o sino?"
    />
  );
}

export function CardsPage() {
  const [view, setView] = useState<View>('cards');
  const [role, setRole] = useStoredState<Role>(ROLE_STORAGE_KEY, 'single');

  return (
    <>
      <Toolbar>
        <SegmentedControl
          label="Exercício"
          value={view}
          options={[
            { value: 'cards', label: 'Cartões' },
            { value: 'quiz', label: 'Quiz: de que lado?' },
          ]}
          onChange={setView}
        />
        {view === 'cards' && (
          <SegmentedControl label="Função" value={role} options={ROLE_OPTIONS} onChange={setRole} />
        )}
      </Toolbar>
      {view === 'cards' ? <RoleCards role={role} /> : <SideQuiz />}
    </>
  );
}
