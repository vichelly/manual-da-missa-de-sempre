import { SERVING_STEPS } from '@/content/acolyte/servingSteps';
import { buildSideQuestions } from './sideQuestions';

describe('buildSideQuestions', () => {
  it('only asks about moments with a single, definite side', () => {
    const questions = buildSideQuestions(SERVING_STEPS);
    expect(questions.length).toBeGreaterThan(20);
    expect(questions.every((q) => q.answer === 'epistle' || q.answer === 'gospel')).toBe(true);
  });
});
