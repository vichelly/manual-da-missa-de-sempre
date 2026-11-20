export type FeedbackTone = 'success' | 'error' | 'neutral';

export function toneFor(correct: boolean): FeedbackTone {
  return correct ? 'success' : 'error';
}
