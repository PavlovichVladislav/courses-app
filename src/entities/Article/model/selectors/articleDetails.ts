import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsLoading = (state: StateSchema) => state.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error || '';
export const getArticleDetails = (state: StateSchema) => state.articleDetails?.article || {
  id: 0,
  blocks: [],
  createdAt: '',
  img: '',
  subtitle: '',
  title: '',
  type: '',
  views: 0,
};
