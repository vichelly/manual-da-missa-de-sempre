import type { OrdoLine, OrdoSection } from '@/content/types';
import { Card } from '@/ui';
import { PostureBadge } from './PostureBadge';
import { SpeakerTag } from './SpeakerTag';
import styles from './OrdoSectionView.module.css';

export type LanguageView = 'both' | 'latin' | 'translation';

const VIEW_CLASS: Record<LanguageView, string | undefined> = {
  both: undefined,
  latin: styles.latinOnly,
  translation: styles.translationOnly,
};

function OrdoLineView({ line }: { line: OrdoLine }) {
  switch (line.kind) {
    case 'rubric':
      return <p className={styles.rubric}>{line.text}</p>;
    case 'proper':
      return <p className={styles.proper}>{line.text}</p>;
    case 'priest':
    case 'server':
      return (
        <div className={[styles.line, line.emphasis && styles.emphasis].filter(Boolean).join(' ')}>
          <SpeakerTag speaker={line.kind} />
          <div className={styles.latin} lang="la">
            {line.latin}
          </div>
          <div className={styles.translation}>{line.translation}</div>
        </div>
      );
  }
}

interface OrdoSectionViewProps {
  section: OrdoSection;
  id: string;
  view: LanguageView;
}

export function OrdoSectionView({ section, id, view }: OrdoSectionViewProps) {
  return (
    <Card id={id} title={section.title} aside={<PostureBadge posture={section.posture} />}>
      {section.postureNote && <p className={styles.note}>{section.postureNote}</p>}
      <div className={VIEW_CLASS[view]}>
        {section.lines.map((line, index) => (
          <OrdoLineView line={line} key={index} />
        ))}
      </div>
    </Card>
  );
}
