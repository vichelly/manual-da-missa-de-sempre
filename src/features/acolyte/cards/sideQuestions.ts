import type { AltarSide, ServingStep } from '@/content/types';

export interface SideQuestion {
  step: ServingStep;
  subject: 'acolyte' | 'missal';
  answer: AltarSide;
}

const isAltarSide = (value: string): value is AltarSide =>
  value === 'epistle' || value === 'gospel';

/** Builds "which side?" questions from the steps where the answer is a single side. */
export function buildSideQuestions(steps: readonly ServingStep[]): SideQuestion[] {
  return steps.flatMap((step) => {
    const questions: SideQuestion[] = [];
    if (isAltarSide(step.acolyte))
      questions.push({ step, subject: 'acolyte', answer: step.acolyte });
    if (isAltarSide(step.missal)) questions.push({ step, subject: 'missal', answer: step.missal });
    return questions;
  });
}
