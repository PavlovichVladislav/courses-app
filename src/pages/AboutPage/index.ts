import { lazy } from 'react';

const AboutPageAsync = lazy(() => import('./ui/AboutPage'));

export { AboutPageAsync as AboutPage };
