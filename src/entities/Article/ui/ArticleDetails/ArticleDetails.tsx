import { classNames } from 'shared/lib/classNames/classNames';

import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { articleReducer } from '../../model/slice/articleDetailsSlice';
import styles from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';

interface ArticleDetailsProps {
  className?: string
}

const reducers: ReducersList = {
  article: articleReducer,
};

export const ArticleDetails = memo(({ className }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleById('1'));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} reducerName="article">
      <div className={classNames(styles.ArticleDetails, {}, [className])}>
        article details
      </div>
    </DynamicModuleLoader>

  );
});
