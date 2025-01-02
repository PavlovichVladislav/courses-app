import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  return (
    <div className={classNames(styles.articleDetailsPage, {}, [className])}>
      <ArticleDetails />
    </div>
  );
};

export default memo(ArticleDetailsPage);
