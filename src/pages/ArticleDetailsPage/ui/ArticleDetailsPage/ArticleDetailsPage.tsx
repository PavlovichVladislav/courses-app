import { classNames } from 'shared/lib/classNames/classNames';

import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';

import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/Page';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slces/articleDetailsCommentsSlice';
import styles from './ArticleDetailsPage.module.scss';
import { getArticleCommentsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams();
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const sendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle({ text }));
  }, [dispatch]);

  const onGoBack = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  return (
    <DynamicModuleLoader reducers={reducers} reducerName="articleDetailsComments">
      <Page className={classNames(styles.articleDetailsPage, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onGoBack}>
          {t('Назад к списку')}
        </Button>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} />
        <AddCommentForm sendComment={sendComment} />
        <CommentList
          comments={comments}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
