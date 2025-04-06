import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlePageSelectors';

interface FetchArticleListProps {
  page?: number;
}

export const fetchArticleList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
  'article/fetchArticleList',
  async ({ page }, { rejectWithValue, extra, getState }) => {
    try {
      const { api } = extra;
      const limit = getArticlesPageLimit(getState());

      const response = await api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      });

      if (!response.data) {
        throw new Error('Empty server response');
      }

      return response.data;
    } catch (error) {
      const e = error as unknown as AxiosError;
      console.error(e);

      return rejectWithValue(e.message);
    }
  },
);
