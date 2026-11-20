import styles from './ChoiceList.module.css';

interface ChoiceListProps {
  choices: readonly string[];
  correctChoice: string;
  /** The learner's pick, or null while unanswered. */
  selected: string | null;
  onSelect: (choice: string) => void;
  latin?: boolean;
}

/** Multiple-choice options that reveal the right answer once one is picked. */
export function ChoiceList({
  choices,
  correctChoice,
  selected,
  onSelect,
  latin = false,
}: ChoiceListProps) {
  const answered = selected !== null;
  const stateClass = (choice: string) => {
    if (!answered) return undefined;
    if (choice === correctChoice) return styles.correct;
    if (choice === selected) return styles.wrong;
    return undefined;
  };

  return (
    <div className={styles.list}>
      {choices.map((choice) => (
        <button
          key={choice}
          type="button"
          className={[styles.choice, latin && styles.latin, stateClass(choice)]
            .filter(Boolean)
            .join(' ')}
          disabled={answered}
          onClick={() => onSelect(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
}
