import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsLoading = (state: StateSchema) => state.article?.isLoading || false;
export const getArticleDetailsError = (state: StateSchema) => state.article?.error || '';
export const getArticleDetails = (state: StateSchema) => state.article?.article || {
  id: 0,
  blocks: [''],
  createdAt: '',
  img: '',
  subtitle: '',
  title: '',
  type: '',
  views: 0,
};
