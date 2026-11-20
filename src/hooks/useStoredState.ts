import { useCallback, useState } from 'react';

function read<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

/**
 * useState that survives reloads in this browser. Storage can be missing or full
 * (private mode, embedded views); the app keeps working with in-memory state.
 */
export function useStoredState<T>(key: string, fallback: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => read(key, fallback));

  const update = useCallback(
    (next: T) => {
      setValue(next);
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        /* storage unavailable: keep the in-memory value */
      }
    },
    [key],
  );

  return [value, update];
}

/** Keeps the highest percentage reached for a given exercise. */
export function useBestScore(key: string): [number, (score: number) => void] {
  const [best, setBest] = useStoredState(`best:${key}`, 0);
  const record = useCallback(
    (score: number) => {
      if (score > best) setBest(score);
    },
    [best, setBest],
  );
  return [best, record];
}
