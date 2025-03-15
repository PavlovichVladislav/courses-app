import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { CommentItem } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetails } from 'entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

interface SendCommentProps {
  text: string;
}

export const addCommentForArticle = createAsyncThunk<CommentItem, SendCommentProps, ThunkConfig<string>>(
  'article/addCommentForArticle',
  async (props, {
    rejectWithValue, extra, getState, dispatch,
  }) => {
    try {
      const { api } = extra;
      const { text } = props;

      const article = getArticleDetails(getState());
      const user = getUserAuthData(getState());

      if (!text || !article.id || !user) {
        throw new Error('Incorrect request data');
      }

      const response = await api.post<CommentItem>('/comments', {
        text,
        articleId: article.id,
        userId: user.id,
      });

      if (!response.data) {
        throw new Error('Empty server response');
      }

      dispatch(fetchCommentsByArticleId(String(article.id)));
      return response.data;
    } catch (error) {
      const e = error as unknown as AxiosError;
      console.error(e);

      return rejectWithValue(e.message);
    }
  },
);
