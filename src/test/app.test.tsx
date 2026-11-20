import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from '@/app/AppLayout';
import { SECTIONS } from '@/app/navigation';
import { SectionLayout } from '@/app/SectionLayout';
import { WritingTest } from '@/features/practice/WritingTest';
import { DialogueQuiz } from '@/features/practice/DialogueQuiz';

function renderAt(path: string) {
  const router = createMemoryRouter(
    [
      {
        element: <AppLayout />,
        children: SECTIONS.map((section) => ({
          path: section.path,
          element: <SectionLayout section={section} />,
          children: section.tabs.map(({ path, page: Page }) => ({ path, element: <Page /> })),
        })),
      },
    ],
    { initialEntries: [path] },
  );
  return render(<RouterProvider router={router} />);
}

describe('navigation', () => {
  it('renders every tab without crashing', () => {
    for (const section of SECTIONS) {
      for (const tab of section.tabs) {
        const { unmount } = renderAt(`${section.path}/${tab.path}`);
        expect(screen.getByRole('link', { name: tab.title })).toHaveAttribute(
          'aria-current',
          'page',
        );
        unmount();
      }
    }
  });
});

describe('DialogueQuiz', () => {
  const items = [
    { phase: 'Fim', prompt: 'Ite, missa est.', answer: 'Deo gratias.' },
    { phase: 'Fim', prompt: 'Dominus vobiscum.', answer: 'Et cum spiritu tuo.' },
    { phase: 'Fim', prompt: 'Sursum corda.', answer: 'Habemus ad Dominum.' },
  ];

  it('marks the right answer and moves on', async () => {
    const user = userEvent.setup();
    render(
      <DialogueQuiz
        items={items}
        speakerLabel="Sacerdote"
        answerLabel="Resposta"
        scoreKey="test"
      />,
    );
    await user.click(screen.getByRole('button', { name: 'Deo gratias.' }));
    expect(screen.getByRole('status')).toHaveTextContent('Correto!');
    expect(screen.getByText('Acertos: 1')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Próxima' }));
    expect(screen.getByText('Dominus vobiscum.')).toBeInTheDocument();
  });

  it('lets the learner self-grade when reciting', async () => {
    const user = userEvent.setup();
    render(
      <DialogueQuiz
        items={items}
        speakerLabel="Sacerdote"
        answerLabel="Resposta"
        scoreKey="test"
      />,
    );
    await user.click(screen.getByRole('radio', { name: 'Recitar' }));
    await user.click(screen.getByRole('button', { name: 'Mostrar resposta' }));
    await user.click(screen.getByRole('button', { name: 'Errei' }));
    expect(screen.getByText('Dominus vobiscum.')).toBeInTheDocument();
    expect(screen.getByText('Acertos: 0')).toBeInTheDocument();
  });
});

describe('WritingTest', () => {
  it('highlights missing words', async () => {
    const user = userEvent.setup();
    render(<WritingTest expected="mea culpa, mea maxima culpa." scoreKey="test-writing" />);
    await user.type(screen.getByRole('textbox'), 'mea culpa mea culpa');
    await user.click(screen.getByRole('button', { name: 'Verificar' }));
    const status = screen.getByRole('status');
    expect(within(status).getByText(/4 de 5 palavras/)).toBeInTheDocument();
  });
});
