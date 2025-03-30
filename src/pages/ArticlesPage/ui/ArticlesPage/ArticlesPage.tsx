import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
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

  useInitialEffect(() => {
    dispatch(fetchArticleList());
  });

  return (
    <DynamicModuleLoader reducers={reducers} reducerName="articlesPage">
      <div className={classNames(styles.articlesPage, {}, [className])}>
        {/* @ts-ignore */}
        <ArticleList isLoading={false} articles={articles} view={ArticleView.LIST} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
