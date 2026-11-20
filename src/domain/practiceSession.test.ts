import { createSession, currentItem, percentage, practiceReducer } from './practiceSession';

describe('practiceReducer', () => {
  const start = createSession(['a', 'b']);

  it('counts right answers and remembers the missed ones', () => {
    let session = practiceReducer(start, { type: 'answer', correct: true });
    session = practiceReducer(session, { type: 'next' });
    session = practiceReducer(session, { type: 'answer', correct: false });
    session = practiceReducer(session, { type: 'next' });
    expect(session.finished).toBe(true);
    expect(session.correctCount).toBe(1);
    expect(session.missed).toEqual(['b']);
  });

  it('ignores a second answer to the same question', () => {
    const once = practiceReducer(start, { type: 'answer', correct: true });
    expect(practiceReducer(once, { type: 'answer', correct: true })).toBe(once);
  });

  it('does not advance before the question is answered', () => {
    expect(practiceReducer(start, { type: 'next' })).toBe(start);
    expect(currentItem(start)).toBe('a');
  });

  it('restarts with new items', () => {
    const restarted = practiceReducer(start, { type: 'start', items: ['b'] });
    expect(currentItem(restarted)).toBe('b');
  });
});

describe('percentage', () => {
  it('rounds and handles zero', () => {
    expect(percentage(2, 3)).toBe(67);
    expect(percentage(0, 0)).toBe(0);
  });
});
