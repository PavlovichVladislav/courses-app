import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CommentItem } from 'entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<CommentItem>();

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsComments',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    error: '',
    isLoading: false,
    ids: ['1', '2'],
    entities: {
      1: {
        id: '1',
        user: { id: '1', username: 'Vlad' },
        text: 'comment text',
      },
      2: {
        id: '2',
        user: { id: '1', username: 'Vlad' },
        text: 'comment text 2',
      },
    },
  }),
  reducers: {},
});

export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentsSlice;
