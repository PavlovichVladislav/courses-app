import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleView } from 'entities/Article/model/types/article';
import { Card } from 'shared/ui/Card';
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView;
}

export const ArticleListItemSkeleton = ({ className, view }: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
        {/* <Card>
          <div className={styles.header}>
            <Avatar src={article.user.avatar} className={styles.avatar} size={30} />
            <Text text={article.user.username} className={styles.username} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.title} />
          <img className={styles.img} alt={article.title} src={article.img} />
          <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
          <div className={styles.footer}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
              {t('Читать далее')}
            </Button>
          </div>
        </Card> */}
      </div>
    );
  }

  if (view === ArticleView.GRID) {
    return (
      <div
        className={classNames(styles.articleListItem, {}, [className, styles[view]])}
      >
        <Card>
          <div className={styles.imageWrapper}>
            <Skeleton width={200} height={200} className={styles.img} />
          </div>
          <div className={styles.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} className={styles.title} />
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className])} />
  );
};
