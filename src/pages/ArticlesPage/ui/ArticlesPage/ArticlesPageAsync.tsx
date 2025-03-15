import { lazy } from 'react';

const ArticlePageAsync = lazy(() => import('./ArticlesPage'));

export { ArticlePageAsync as ArticlesPage };
