import { EPISTLE_SERVER_STEPS } from './acolyte/twoServers';
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
    const last = ACOLYTE_DIALOGUE.at(-1);
    expect(last?.answer).toBe('Deo gratias.');
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
});
