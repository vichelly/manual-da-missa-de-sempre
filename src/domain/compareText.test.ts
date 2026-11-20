import { compareText } from './compareText';

const EXPECTED = 'mea culpa, mea culpa, mea maxima culpa.';

describe('compareText', () => {
  it('accepts a perfect recitation regardless of punctuation and case', () => {
    const result = compareText(EXPECTED, 'Mea culpa mea culpa mea maxima culpa');
    expect(result.isPerfect).toBe(true);
    expect(result.matchedCount).toBe(7);
  });

  it('marks missing words', () => {
    const result = compareText(EXPECTED, 'mea culpa mea culpa culpa');
    expect(result.matchedCount).toBe(5);
    expect(result.words.filter((w) => !w.matched).map((w) => w.text)).toEqual(['mea', 'maxima']);
  });

  it('reports words that do not belong', () => {
    const result = compareText('verbo et opere', 'verbo et omissione opere');
    expect(result.extraWords).toEqual(['omissione']);
    expect(result.isPerfect).toBe(false);
  });

  it('handles an empty attempt', () => {
    expect(compareText(EXPECTED, '').matchedCount).toBe(0);
  });
});
