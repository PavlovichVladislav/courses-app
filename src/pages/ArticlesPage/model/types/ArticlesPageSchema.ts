import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article, number> {
  isLoading: boolean;
  error: string;

  view: ArticleView;
}
