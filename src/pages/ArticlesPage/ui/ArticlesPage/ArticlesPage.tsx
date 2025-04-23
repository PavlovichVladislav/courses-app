import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
  getArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const articles = useSelector(getArticles.selectAll);
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const page = useSelector(getArticlesPageNumber);

  const onLoadNextPart = () => {
    dispatch(fetchNextArticlesPage());
  };

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticleList({ page }));
  });

  const onViewClick = (view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} reducerName="articlesPage">
      <Page onScrollEnd={onLoadNextPart} className={classNames(styles.articlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onViewClick} />
        <ArticleList isLoading={isLoading} articles={articles} view={view} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
