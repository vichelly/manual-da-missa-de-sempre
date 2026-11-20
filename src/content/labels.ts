import type { AcolytePosition, MissalPosition, Posture } from './types';

export const ACOLYTE_POSITION_LABEL: Record<AcolytePosition, string> = {
  epistle: 'Lado da Epístola',
  gospel: 'Lado do Evangelho',
  moving: 'Mudança de lado',
  center: 'Centro / com o sacerdote',
};

export const MISSAL_POSITION_LABEL: Record<MissalPosition, string> = {
  epistle: 'Missal: Epístola',
  gospel: 'Missal: Evangelho',
  epistleToGospel: 'Missal: Epístola → Evangelho',
  gospelToEpistle: 'Missal: Evangelho → Epístola',
};

export const POSTURE_LABEL: Record<Posture, string> = {
  standing: 'De pé',
  kneeling: 'De joelhos',
  sitting: 'Sentado',
};

export const ORDINAL = ['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '10º'] as const;
