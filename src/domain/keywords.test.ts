import { matchesByKeywords } from './keywords';

describe('matchesByKeywords', () => {
  it('accepts the commandment in the learner’s own words', () => {
    expect(matchesByKeywords('Amar a Deus sobre todas as coisas.', 'amar a deus')).toBe(true);
    expect(
      matchesByKeywords(
        'Guardar domingos e festas de guarda.',
        'guardar os domingos e festas de guarda',
      ),
    ).toBe(true);
  });

  it('rejects answers missing the key idea', () => {
    expect(matchesByKeywords('Não levantar falso testemunho.', 'não mentir')).toBe(false);
    expect(matchesByKeywords('Não matar.', '')).toBe(false);
  });
});
