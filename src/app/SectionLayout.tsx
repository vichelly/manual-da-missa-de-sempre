import { NavLink, Outlet } from 'react-router-dom';
import type { Section } from './navigation';
import styles from './SectionLayout.module.css';

/** Tabs of one section (acolyte or Mass) and the page of the selected tab. */
export function SectionLayout({ section }: { section: Section }) {
  return (
    <>
      <nav className={styles.tabs} aria-label={section.title}>
        {section.tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={`${section.path}/${tab.path}`}
            className={({ isActive }) =>
              [styles.tab, isActive && styles.active].filter(Boolean).join(' ')
            }
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
}
