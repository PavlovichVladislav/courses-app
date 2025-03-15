import { lazy } from 'react';

// const MainPageAsync = lazy(() => import('./ui/MainPage'));

export const MainPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ui/MainPage')), 100);
}));

export { MainPageAsync as MainPage };
