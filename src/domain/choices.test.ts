import { buildChoices, pickDistractors, uniqueAnswers } from './choices';

const POOL = ['Amen.', 'Deo gratias.', 'Et cum spiritu tuo.', 'Habemus ad Dominum.', 'amen'];

describe('uniqueAnswers', () => {
  it('drops answers that are equal once normalized', () => {
    expect(uniqueAnswers(POOL)).toEqual(POOL.slice(0, 4));
  });
});

describe('pickDistractors', () => {
  it('never offers the right answer as a wrong one', () => {
    const distractors = pickDistractors('Amen.', POOL, 3);
    expect(distractors).toHaveLength(3);
    expect(distractors.map((d) => d.toLowerCase())).not.toContain('amen.');
    expect(distractors).not.toContain('amen');
  });

  it('returns fewer options when the pool is small', () => {
    expect(pickDistractors('Amen.', ['Amen.', 'Deo gratias.'], 3)).toEqual(['Deo gratias.']);
  });
});

describe('buildChoices', () => {
  it('always contains the right answer exactly once', () => {
    for (let i = 0; i < 20; i++) {
      const choices = buildChoices('Deo gratias.', POOL);
      expect(choices.filter((c) => c === 'Deo gratias.')).toHaveLength(1);
      expect(choices).toHaveLength(4);
    }
  });
});
