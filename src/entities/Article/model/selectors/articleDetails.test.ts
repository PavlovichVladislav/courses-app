import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetails, getArticleDetailsError, getArticleDetailsLoading } from './articleDetails';
import { Article, ArticleType } from '../types/article';

const article: Article = {
  id: 0,
  blocks: [],
  createdAt: '',
  user: {
    id: '1',
    username: 'admin',
  },
  img: '',
  subtitle: '',
  title: '',
  type: [ArticleType.ECONOMICS],
  views: 0,
};

describe('getArticleDetails', () => {
  test('should return article state', () => {
    const state: Partial<StateSchema> = {
      articleDetails: {
        article,
        isLoading: false,
      },
    };

    expect(getArticleDetails(state as StateSchema)).toEqual(article);
  });

  test('empty state test', () => {
    const state: Partial<StateSchema> = {};

    expect(getArticleDetails(state as StateSchema)).toEqual({
      id: 0,
      blocks: [],
      createdAt: '',
      img: '',
      subtitle: '',
      title: '',
      type: '',
      views: 0,
    });
  });
});

describe('getArticleDetailsError', () => {
  test('should return error', () => {
    const state: Partial<StateSchema> = {
      articleDetails: {
        isLoading: false,
        error: 'error',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('empty state test', () => {
    const state: Partial<StateSchema> = {};

    expect(getArticleDetailsError(state as StateSchema)).toEqual('');
  });
});

describe('getArticleDetailsLoading', () => {
  test('should return loading state', () => {
    const state: Partial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true);
  });

  test('empty state test', () => {
    const state: Partial<StateSchema> = {};

    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(false);
  });
});
