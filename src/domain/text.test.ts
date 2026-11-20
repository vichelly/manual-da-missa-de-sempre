import { isSameText, normalize, splitWord, tokenize } from './text';

describe('normalize', () => {
  it('ignores case, accents, punctuation and ligatures', () => {
    expect(normalize('Ætérnum, CÆLI!')).toBe('aeternum caeli');
  });

  it('treats j and i as the same letter', () => {
    expect(normalize('Joanni')).toBe(normalize('Ioanni'));
  });
});

describe('isSameText', () => {
  it('matches answers that differ only in punctuation', () => {
    expect(isSameText('Et cum spiritu tuo.', 'et cum spiritu tuo')).toBe(true);
  });
});

describe('splitWord', () => {
  it('keeps punctuation apart from the word', () => {
    expect(splitWord('pater:')).toEqual({ prefix: '', core: 'pater', suffix: ':' });
    expect(splitWord('“Spera”')).toEqual({ prefix: '“', core: 'Spera', suffix: '”' });
  });

  it('returns null for tokens without letters', () => {
    expect(splitWord('✠')).toBeNull();
  });
});

describe('tokenize', () => {
  it('splits on any whitespace', () => {
    expect(tokenize(' mea  culpa,\nmea ')).toEqual(['mea', 'culpa,', 'mea']);
  });
});
