import { useRef, useState } from 'react';
import { EXAMINATION_OF_CONSCIENCE } from '@/content/examination';
import { Button, Callout, Card, Intro, Label, Row } from '@/ui';
import { ConfessionGuide } from './ConfessionGuide';
import styles from './ExaminationPage.module.css';

const questionKey = (sectionIndex: number, questionIndex: number) =>
  `${sectionIndex}:${questionIndex}`;

/**
 * Examination of conscience. Marks live only in memory on purpose:
 * nothing is stored, so closing the page erases them.
 */
export function ExaminationPage() {
  const [marked, setMarked] = useState<ReadonlySet<string>>(new Set());
  const [showSummary, setShowSummary] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const toggle = (key: string) =>
    setMarked((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const openSummary = () => {
    setShowSummary(true);
    requestAnimationFrame(() => summaryRef.current?.scrollIntoView({ behavior: 'smooth' }));
  };

  const markedSections = EXAMINATION_OF_CONSCIENCE.map((section, s) => ({
    title: section.title,
    questions: section.questions.filter((_, q) => marked.has(questionKey(s, q))),
  })).filter((section) => section.questions.length > 0);

  return (
    <>
      <Card title="Exame de consciência">
        <Intro>
          Reze antes de começar, pedindo luz ao Espírito Santo. Percorra as perguntas com calma e
          marque o que precisa levar à confissão. <strong>Nada do que você marca é guardado</strong>
          : ao fechar ou recarregar a página, tudo se apaga.
        </Intro>
        <Callout>
          <em>
            Vinde, Espírito Santo, iluminai a minha inteligência para que eu conheça os meus
            pecados, e movei o meu coração para que deles me arrependa sinceramente.
          </em>
        </Callout>
        <Row align="start">
          <Button variant="ghost" size="small" onClick={() => setMarked(new Set())}>
            Desmarcar tudo
          </Button>
          <Button variant="ghost" size="small" onClick={openSummary}>
            Ver só o que marquei
          </Button>
        </Row>
      </Card>

      {EXAMINATION_OF_CONSCIENCE.map((section, s) => (
        <Card title={section.title} key={section.title}>
          {section.questions.map((question, q) => {
            const key = questionKey(s, q);
            return (
              <label className={styles.question} key={key}>
                <input type="checkbox" checked={marked.has(key)} onChange={() => toggle(key)} />
                <span>{question}</span>
              </label>
            );
          })}
        </Card>
      ))}

      {showSummary && (
        <div ref={summaryRef}>
          <Card title="O que marquei">
            {markedSections.length === 0 && <Intro>Nada marcado.</Intro>}
            {markedSections.map((section) => (
              <div key={section.title}>
                <Label>{section.title}</Label>
                <ul>
                  {section.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>
        </div>
      )}

      <ConfessionGuide />
    </>
  );
}
