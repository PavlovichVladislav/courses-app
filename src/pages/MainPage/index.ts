import { lazy } from 'react';

const MainPageAsync = lazy(() => import('./ui/MainPage'));

export { MainPageAsync as MainPage };
