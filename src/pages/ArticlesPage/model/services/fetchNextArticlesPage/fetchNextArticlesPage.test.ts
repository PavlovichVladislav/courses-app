import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

jest.mock('axios');
jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticlesPage test', () => {
  test('fetchArticleList called', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        error: '',
        view: ArticleView.GRID,
      },
    });
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve({}));

    await testAsyncThunk.callThunk();

    expect(testAsyncThunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 });
  });

  test('fetchArticleList not called', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        error: '',
        view: ArticleView.GRID,
      },
    });
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve({}));

    await testAsyncThunk.callThunk();

    expect(testAsyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticleList).not.toHaveBeenCalled();
  });
});
