import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { Article, ArticleType } from '../types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const article: Article = {
  id: 0,
  blocks: [],
  createdAt: '',
  img: '',
  subtitle: '',
  user: {
    id: '1',
    username: 'admin',
  },
  title: '',
  type: [ArticleType.ECONOMICS],
  views: 0,
};

describe('articleDetailsSlice.test', () => {
  test('test fetch article by id pending', () => {
    const state: Partial<ArticleDetailsSchema> = {
      isLoading: false,
    };
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.pending('', '1'),
    )).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test('test fetch article by id fulfilled', () => {
    const state: Partial<ArticleDetailsSchema> = {
      isLoading: true,
    };
    expect(articleDetailsReducer(
      state as ArticleDetailsSchema,
      fetchArticleById.fulfilled(article, '', '1'),
    )).toEqual({
      isLoading: false, article,
    });
  });
});
