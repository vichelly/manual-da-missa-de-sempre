import { useState } from 'react';
import { SegmentedControl, Toolbar } from '@/ui';
import { ActionCards } from './ActionCards';
import { SideQuiz } from './SideQuiz';

type View = 'cards' | 'quiz';

export function CardsPage() {
  const [view, setView] = useState<View>('cards');
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
      </Toolbar>
      {view === 'cards' ? <ActionCards /> : <SideQuiz />}
    </>
  );
}
