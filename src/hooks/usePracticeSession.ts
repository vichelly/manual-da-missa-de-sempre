import { useCallback, useReducer } from 'react';
import {
  createSession,
  currentItem,
  practiceReducer,
  type PracticeAction,
  type PracticeSession,
} from '@/domain/practiceSession';

export function usePracticeSession<T>(initialItems: readonly T[]) {
  const [session, dispatch] = useReducer(
    practiceReducer as (state: PracticeSession<T>, action: PracticeAction<T>) => PracticeSession<T>,
    initialItems,
    createSession,
  );

  return {
    session,
    current: currentItem(session),
    answer: useCallback((correct: boolean) => dispatch({ type: 'answer', correct }), []),
    next: useCallback(() => dispatch({ type: 'next' }), []),
    start: useCallback((items: readonly T[]) => dispatch({ type: 'start', items }), []),
  };
}
