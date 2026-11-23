import { EPISTLE_SERVER_STEPS, GOSPEL_SERVER_STEPS } from './acolyte/twoServers';
import { CONFITEOR_TEXT } from './acolyte/confiteor';
import { ACOLYTE_DIALOGUE } from './acolyte/dialogue';
import { SERVING_STEPS } from './acolyte/servingSteps';
import { CHURCH_COMMANDMENTS, TEN_COMMANDMENTS } from './commandments';
import { ORDO_MISSAE } from './ordinary/ordo';
import { normalize } from '@/domain/text';

describe('liturgical content', () => {
  it('uses the acolyte’s form of the traditional Confiteor', () => {
    const text = normalize(CONFITEOR_TEXT);
    expect(text).toContain('et tibi pater');
    expect(text).toContain('et te pater');
    expect(text).toContain('cogitatione verbo et opere');
    expect(text).not.toContain('omissione');
  });

  it('answers the Last Gospel with Deo gratias', () => {
    const lastGospel = ACOLYTE_DIALOGUE.find((item) =>
      normalize(item.prompt).includes('plenum gratiae'),
    );
    expect(lastGospel?.answer).toBe('Deo gratias.');
  });

  it('keeps the acolyte opposite the missal during the Canon', () => {
    const consecration = SERVING_STEPS.find((step) => step.title === 'Consagração');
    expect(consecration).toMatchObject({ acolyte: 'epistle', missal: 'gospel' });
  });

  it('has ten commandments of God and five of the Church', () => {
    expect(TEN_COMMANDMENTS).toHaveLength(10);
    expect(CHURCH_COMMANDMENTS).toHaveLength(5);
  });

  it('gives every spoken line of the Ordinary both Latin and Portuguese', () => {
    for (const section of ORDO_MISSAE) {
      for (const line of section.lines) {
        if (line.kind === 'priest' || line.kind === 'server') {
          expect(line.latin.trim(), section.title).not.toBe('');
          expect(line.translation.trim(), section.title).not.toBe('');
        }
      }
    }
  });
});

describe('two acolytes', () => {
  it('lists the Epistle-side duties in order, each with at least one action', () => {
    expect(EPISTLE_SERVER_STEPS.length).toBeGreaterThan(10);
    expect(EPISTLE_SERVER_STEPS[0]?.title).toBe('Confiteor do sacerdote');
    expect(EPISTLE_SERVER_STEPS.every((step) => step.actions.length > 0)).toBe(true);
  });

  it('lists the Gospel-side duties, from the Offertory to the veil and burse', () => {
    expect(GOSPEL_SERVER_STEPS[0]?.title).toContain('Ofertório');
    expect(GOSPEL_SERVER_STEPS.at(-1)?.title).toBe('Véu e bolsa do cálice');
    expect(GOSPEL_SERVER_STEPS.every((step) => step.actions.length > 0)).toBe(true);
  });
});

describe('rubrics of St. Pius X (Divino Afflatu, before 1955)', () => {
  const allLatin = ORDO_MISSAE.flatMap((section) =>
    section.lines.flatMap((line) => ('latin' in line ? [normalize(line.latin)] : [])),
  );

  it('does not name St. Joseph in the Communicantes (added only in 1962)', () => {
    const communicantes = allLatin.find((latin) => latin.startsWith('communicantes'));
    expect(communicantes).toBeDefined();
    expect(communicantes).not.toContain('ioseph');
  });

  it('prescribes the Confiteor before the Communion of the faithful', () => {
    const communion = ORDO_MISSAE.find((section) => section.title === 'Comunhão dos fiéis');
    const serverLines = communion?.lines.filter((line) => line.kind === 'server') ?? [];
    expect(serverLines.some((line) => 'latin' in line && line.latin.startsWith('Confiteor'))).toBe(
      true,
    );
    expect(ACOLYTE_DIALOGUE.some((item) => item.prompt.startsWith('Misereatur vestri'))).toBe(true);
  });

  it('includes the prayers prescribed after Low Mass', () => {
    expect(ORDO_MISSAE.at(-1)?.title).toBe('Orações depois da Missa rezada');
    expect(allLatin.some((latin) => latin.startsWith('sancte michael archangele'))).toBe(true);
  });

  it('says Benedicamus Domino on days without Gloria', () => {
    const ite = ACOLYTE_DIALOGUE.find((item) => item.prompt === 'Ite, missa est.');
    expect(ite?.note).toContain('Benedicamus Domino');
  });
});

describe('chapel book', () => {
  it('uses the book’s Latin spelling (J and æ)', () => {
    const confiteor = ORDO_MISSAE[1]?.lines.find(
      (line) => 'latin' in line && line.latin.startsWith('Confiteor'),
    );
    expect(confiteor && 'latin' in confiteor ? confiteor.latin : '').toContain(
      'beato Joanni Baptistæ',
    );
    expect(ACOLYTE_DIALOGUE[0]?.answer).toBe('Ad Deum qui lætificat juventutem meam.');
  });

  it('prints the Trinity Preface', () => {
    const preface = ORDO_MISSAE.find((section) => section.title === 'Prefácio e Sanctus');
    const text = preface?.lines.map((line) => ('latin' in line ? line.latin : '')).join(' ') ?? '';
    expect(normalize(text)).toContain('in unius trinitate substantiae');
  });

  it('keeps the qu digraph intact', () => {
    const allText = JSON.stringify([ORDO_MISSAE, ACOLYTE_DIALOGUE]);
    expect(allText).not.toMatch(/qu[jJ]/);
  });
});
