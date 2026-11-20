import { range, sample, shuffle, type RandomSource } from '@/domain/random';

export type CommandmentQuestionKind = 'textForNumber' | 'numberForText';

export interface CommandmentQuestion {
  /** Zero-based position of the commandment being asked about. */
  index: number;
  kind: CommandmentQuestionKind;
  /** Positions offered as options, the right one included. */
  options: number[];
}

const OPTION_COUNT = 4;

/** One question per commandment, in random order, alternating at random between both directions. */
export function buildCommandmentQuestions(
  total: number,
  random: RandomSource = Math.random,
): CommandmentQuestion[] {
  return shuffle(range(total), random).map((index) => {
    const others = sample(
      range(total).filter((i) => i !== index),
      OPTION_COUNT - 1,
      random,
    );
    return {
      index,
      kind: random() < 0.5 ? 'textForNumber' : 'numberForText',
      options: shuffle([index, ...others], random),
    };
  });
}
