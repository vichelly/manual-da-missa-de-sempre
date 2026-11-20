/**
 * State machine for a round of practice questions, independent of the UI.
 * A round goes: question → answered (feedback shown) → next question … → finished.
 */
export interface PracticeSession<T> {
  items: readonly T[];
  index: number;
  correctCount: number;
  missed: T[];
  /** Result of the current question, or null while it is unanswered. */
  lastAnswerCorrect: boolean | null;
  finished: boolean;
}

export type PracticeAction<T> =
  { type: 'start'; items: readonly T[] } | { type: 'answer'; correct: boolean } | { type: 'next' };

export function createSession<T>(items: readonly T[]): PracticeSession<T> {
  return {
    items,
    index: 0,
    correctCount: 0,
    missed: [],
    lastAnswerCorrect: null,
    finished: items.length === 0,
  };
}

export function practiceReducer<T>(
  session: PracticeSession<T>,
  action: PracticeAction<T>,
): PracticeSession<T> {
  switch (action.type) {
    case 'start':
      return createSession(action.items);

    case 'answer': {
      if (session.finished || session.lastAnswerCorrect !== null) return session;
      const current = session.items[session.index];
      return {
        ...session,
        lastAnswerCorrect: action.correct,
        correctCount: session.correctCount + (action.correct ? 1 : 0),
        missed:
          action.correct || current === undefined ? session.missed : [...session.missed, current],
      };
    }

    case 'next': {
      if (session.lastAnswerCorrect === null) return session;
      const isLast = session.index >= session.items.length - 1;
      return isLast
        ? { ...session, finished: true }
        : { ...session, index: session.index + 1, lastAnswerCorrect: null };
    }
  }
}

export function currentItem<T>(session: PracticeSession<T>): T | undefined {
  return session.finished ? undefined : session.items[session.index];
}

export function percentage(correct: number, total: number): number {
  return total === 0 ? 0 : Math.round((correct / total) * 100);
}
