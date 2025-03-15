import { lazy } from 'react';

const AddCommentFormAsync = lazy(() => import('./AddCommentForm'));

export { AddCommentFormAsync as AddCommentForm };
