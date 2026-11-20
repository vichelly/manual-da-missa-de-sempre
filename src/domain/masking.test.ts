import { maskText } from './masking';

const alwaysHide = () => 0;
const neverHide = () => 0.99;

describe('maskText', () => {
  it('shows everything in full mode', () => {
    expect(maskText('mea culpa,', 'full')).toEqual([
      { prefix: '', visible: 'mea', hidden: '', suffix: '' },
      { prefix: '', visible: 'culpa,', hidden: '', suffix: '' },
    ]);
  });

  it('keeps only the first letter in initials mode', () => {
    expect(maskText('culpa,', 'initials')).toEqual([
      { prefix: '', visible: 'c', hidden: 'ulpa', suffix: ',' },
    ]);
  });

  it('hides whole words in hidden mode but keeps punctuation', () => {
    expect(maskText('pater:', 'hidden')).toEqual([
      { prefix: '', visible: '', hidden: 'pater', suffix: ':' },
    ]);
  });

  it('hides words at random in gaps mode', () => {
    expect(maskText('mea culpa', 'gaps', alwaysHide).every((w) => w.hidden !== '')).toBe(true);
    expect(maskText('mea culpa', 'gaps', neverHide).every((w) => w.hidden === '')).toBe(true);
  });

  it('never hides symbols such as the sign of the cross', () => {
    expect(maskText('✠', 'hidden')).toEqual([{ prefix: '', visible: '✠', hidden: '', suffix: '' }]);
  });
});
