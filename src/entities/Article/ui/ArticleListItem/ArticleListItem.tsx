import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import ViewsIcon from 'shared/assets/icons/views.svg';
import { Card } from 'shared/ui/Card';
import { useHover } from 'shared/lib/hooks/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = ({ className, article, view }: ArticleListItemProps) => {
  const [isHover, bindHover] = useHover();
  console.log(isHover);

  if (view === ArticleView.LIST) {
    return (
      <div {...bindHover} className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
        <Card>
          <Avatar src={article.user.avatar} className={styles.avatar} />
          <Text text={article.user.username} className={styles.username} />
          <Text text={article.createdAt} className={styles.date} />
        </Card>
      </div>
    );
  }

  if (view === ArticleView.GRID) {
    return (
      <div {...bindHover} className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
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
