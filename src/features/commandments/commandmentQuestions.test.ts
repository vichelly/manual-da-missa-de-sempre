import { buildCommandmentQuestions } from './commandmentQuestions';

describe('buildCommandmentQuestions', () => {
  it('asks about every commandment once', () => {
    const questions = buildCommandmentQuestions(10);
    expect(questions.map((q) => q.index).sort((a, b) => a - b)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it('offers four distinct options including the right one', () => {
    for (const question of buildCommandmentQuestions(10)) {
      expect(new Set(question.options).size).toBe(4);
      expect(question.options).toContain(question.index);
    }
  });
});
