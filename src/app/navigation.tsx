import type { ComponentType } from 'react';
import { CardsPage } from '@/features/acolyte/cards/CardsPage';
import { ConfiteorPage } from '@/features/acolyte/confiteor/ConfiteorPage';
import { DialoguePage } from '@/features/acolyte/DialoguePage';
import { GuidePage } from '@/features/acolyte/guide/GuidePage';
import { PrayersAtFootPage } from '@/features/acolyte/PrayersAtFootPage';
import { CommandmentsPage } from '@/features/commandments/CommandmentsPage';
import { ExaminationPage } from '@/features/examination/ExaminationPage';
import { OrdinaryPage } from '@/features/ordinary/OrdinaryPage';

export interface Tab {
  path: string;
  title: string;
  page: ComponentType;
}

export interface Section {
  path: string;
  title: string;
  description: string;
  tabs: Tab[];
}

/** Single source of truth for the app's sections, tabs and routes. */
export const SECTIONS: Section[] = [
  {
    path: '/acolito',
    title: 'Missa do acólito',
    description: 'Respostas, Confiteor, movimentos e sinos da Missa rezada',
    tabs: [
      { path: 'respostas', title: 'Respostas', page: DialoguePage },
      { path: 'pe-do-altar', title: 'Ao pé do altar', page: PrayersAtFootPage },
      { path: 'confiteor', title: 'Confiteor', page: ConfiteorPage },
      { path: 'guia', title: 'Guia de movimentos', page: GuidePage },
      { path: 'cartoes', title: 'Cartões e quiz', page: CardsPage },
    ],
  },
  {
    path: '/missa',
    title: 'Ordinário da Missa',
    description: 'Latim e português com as posições dos fiéis · Exame de consciência · Mandamentos',
    tabs: [
      { path: 'ordinario', title: 'Ordinário da Missa', page: OrdinaryPage },
      { path: 'exame', title: 'Exame de consciência', page: ExaminationPage },
      { path: 'mandamentos', title: '10 Mandamentos', page: CommandmentsPage },
    ],
  },
];
