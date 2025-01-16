import { CommentItem } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema {
  isLoading: boolean;
  error: string;
  data: CommentItem[]
}
