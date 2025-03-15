import { EntityState } from '@reduxjs/toolkit';
import { CommentItem } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<CommentItem, string> {
  isLoading: boolean;
  error: string;
}
