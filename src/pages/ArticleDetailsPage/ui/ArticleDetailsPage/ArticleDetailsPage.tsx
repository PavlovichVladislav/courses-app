import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';

import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.articleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text title={t('Комментарии')} />
      <CommentList
        comments={[
          {
            id: '1',
            user: { id: '1', username: 'Vlad' },
            text: 'comment text',
          },
          {
            id: '2',
            user: { id: '1', username: 'Vlad' },
            text: 'comment text 2',
          },
        ]}
        isLoading={false}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
