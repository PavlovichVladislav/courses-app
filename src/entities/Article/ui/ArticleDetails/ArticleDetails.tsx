import { classNames } from 'shared/lib/classNames/classNames';

import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { memo, ReactNode, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import ViewsIcon from 'shared/assets/icons/views.svg';
import DateIcon from 'shared/assets/icons/date.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { articleReducer } from '../../model/slice/articleDetailsSlice';
import styles from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsLoading,
  getArticleDetails,
  getArticleDetailsError,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

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
  const {
    title, subtitle, views, createdAt, img, blocks,
  } = useSelector(getArticleDetails);

  const { t } = useTranslation('articleDetails');

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent key={block.id} block={block} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent key={block.id} block={block} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent key={block.id} block={block} />;
    default:
      return null;
    }
  };

  let content: ReactNode;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} borderRadius="50%" />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </>
    );
  } else if (!id || error) {
    content = <Text align={TextAlign.CENTER} title={t('Ошибка при загрузке статьи')} />;
  } else {
    content = (
      <>
        <Avatar className={styles.avatar} src={img} />
        <Text size={TextSize.L} className={styles.title} title={title} text={subtitle} />
        <div className={styles.iconWrapper}>
          <Icon Svg={ViewsIcon} />
          <Text text={`${views}`} />
        </div>
        <div className={styles.iconWrapper}>
          <Icon Svg={DateIcon} />
          <Text text={`${createdAt}`} />
        </div>
        <div className={styles.blocksWrapper}>
          {blocks.map(renderBlock)}
        </div>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} reducerName="article">
      <div className={classNames(styles.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
