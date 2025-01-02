import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'article/fetchArticleById',
  async (articleId, { rejectWithValue, extra }) => {
    try {
      const { api } = extra;

      const response = await api.get<Article>(`/articles/${articleId}`);

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
