import { createHashRouter, Navigate, type RouteObject } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { SECTIONS } from './navigation';
import { ScrollToTop } from './ScrollToTop';
import { SectionLayout } from './SectionLayout';

const sectionRoutes: RouteObject[] = SECTIONS.map((section) => ({
  path: section.path,
  element: <SectionLayout section={section} />,
  children: [
    { index: true, element: <Navigate to={section.tabs[0]?.path ?? ''} replace /> },
    ...section.tabs.map(({ path, page: Page }) => ({
      path,
      element: (
        <>
          <ScrollToTop />
          <Page />
        </>
      ),
    })),
  ],
}));

/**
 * Hash routing (#/acolito/confiteor) needs no server configuration,
 * so the same build works on GitHub Pages, Cloudflare Pages or any static host.
 */
export const router = createHashRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to={SECTIONS[0]?.path ?? '/'} replace /> },
      ...sectionRoutes,
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
