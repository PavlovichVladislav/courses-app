import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { CommentItem } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<CommentItem[], string, ThunkConfig<string>>(
  'article/fetchCommentsByArticleId',
  async (articleId, { rejectWithValue, extra }) => {
    try {
      const { api } = extra;

      if (!articleId) {
        throw new Error('Empty articleId');
      }

      const response = await api.get<CommentItem[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
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
