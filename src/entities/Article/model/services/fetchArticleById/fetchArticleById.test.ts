import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';
import { Article, ArticleType } from '../../types/article';

jest.mock('axios');

const article: Article = {
  id: 0,
  blocks: [],
  createdAt: '',
  img: '',
  subtitle: '',
  title: '',
  type: [ArticleType.ECONOMICS],
  views: 0,
};

describe('fetchArticleById test', () => {
  test('fetchArticleById 200', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchArticleById);
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve({
      data: article,
    }));

    const result = await testAsyncThunk.callThunk('1');

    expect(testAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(article);
  });

  test('fetchArticleById 403', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchArticleById);
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await testAsyncThunk.callThunk('1');

    expect(testAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Empty server response');
  });
});
