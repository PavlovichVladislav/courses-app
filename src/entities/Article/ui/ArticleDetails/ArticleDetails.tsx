import { classNames } from 'shared/lib/classNames/classNames';

import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { memo, ReactNode, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { articleReducer } from '../../model/slice/articleDetailsSlice';
import styles from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsLoading,
  getArticleDetails,
  getArticleDetailsError,
} from '../../model/selectors/articleDetails';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  article: articleReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetails);

  const { t } = useTranslation('articleDetails');

  let content: ReactNode;

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (isLoading) {
    content = <div>{t('Загрузка...')}</div>;
  } else if (!id || error) {
    content = <Text align={TextAlign.CENTER} title={t('Ошибка при загрузке статьи')} />;
  } else {
    content = <div>{article.title}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} reducerName="article">
      <div className={classNames(styles.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
