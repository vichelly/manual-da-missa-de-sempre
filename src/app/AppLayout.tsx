import { NavLink, Outlet } from 'react-router-dom';
import { SECTIONS } from './navigation';
import styles from './AppLayout.module.css';

export function AppLayout() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.cross} aria-hidden>
          ✠
        </div>
        <h1 className={styles.title}>Manual da Missa de Sempre</h1>
        <p className={styles.subtitle}>Missa tradicional · Missal Romano de 1962</p>
      </header>
      <nav className={styles.sections} aria-label="Seções">
        {SECTIONS.map((section) => (
          <NavLink
            key={section.path}
            to={section.path}
            className={({ isActive }) =>
              [styles.section, isActive && styles.active].filter(Boolean).join(' ')
            }
          >
            <strong>{section.title}</strong>
            <span>{section.description}</span>
          </NavLink>
        ))}
      </nav>
      <Outlet />
      <footer className={styles.footer}>
        Textos segundo o Missal Romano de 1962. Se o livro da sua capela trouxer alguma diferença,
        siga o livro e o costume local.
      </footer>
    </>
  );
}
