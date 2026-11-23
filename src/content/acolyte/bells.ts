import type { BellCue } from '../types';

/** When the acolyte rings the bell at Low Mass. Items marked "costume" vary by chapel. */
export const BELL_CUES: BellCue[] = [
  { moment: 'Sanctus', rings: '3 toques' },
  {
    moment: 'Hanc igitur (o sacerdote estende as mãos sobre o cálice)',
    rings: '1 toque de aviso (costume)',
  },
  { moment: 'Elevação da Hóstia', rings: '3 toques: genuflexão, elevação, genuflexão' },
  { moment: 'Elevação do Cálice', rings: '3 toques: genuflexão, elevação, genuflexão' },
  {
    moment: 'Pequena elevação, no fim do Cânon (Per omnia sæcula sæculorum)',
    rings: '1 toque (marcado no livro da capela)',
  },
  { moment: 'Domine, non sum dignus do sacerdote', rings: '3 toques, um a cada vez (costume)' },
];
