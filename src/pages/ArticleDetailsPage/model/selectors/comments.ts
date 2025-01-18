import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsComments?.error || '';
export const getArticleCommentsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading || false;
