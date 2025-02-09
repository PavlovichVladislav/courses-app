import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import ViewsIcon from 'shared/assets/icons/views.svg';
import { Card } from 'shared/ui/Card';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = ({ className, article, view }: ArticleListItemProps) => {
  if (view === ArticleView.GRID) {
    return (
      <div className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.imageWrapper}>
            <img src={article.img} alt="Изображение статьи" className={styles.img} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <div className={styles.infoWrapper}>
            <Text text={article.type.join(', ')} className={styles.types} />
            <Text text={String(article.views)} className={styles.views} />
            <Icon Svg={ViewsIcon} />
          </div>
          <Text text={article.title} className={styles.title} />
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className])} />
  );
};
