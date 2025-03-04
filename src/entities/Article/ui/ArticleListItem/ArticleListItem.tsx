import { classNames } from 'shared/lib/classNames/classNames';

import {
  Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import ViewsIcon from 'shared/assets/icons/views.svg';
import { Card } from 'shared/ui/Card';
import { useHover } from 'shared/lib/hooks/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import styles from './ArticleListItem.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string
  article: Article;
  view: ArticleView;
}

export const ArticleListItem = ({ className, article, view }: ArticleListItemProps) => {
  const { t } = useTranslation();
  const [isHover, bindHover] = useHover();
  console.log(isHover);

  const types = <Text text={article.type.join(', ')} className={styles.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={ViewsIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = article.blocks.find((block: ArticleTextBlock) => (
      block.type === ArticleBlockType.TEXT
    )) as ArticleTextBlock;

    return (
      <div {...bindHover} className={classNames(styles.articleListItem, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.header}>
            <Avatar src={article.user.avatar} className={styles.avatar} size={30} />
            <Text text={article.user.username} className={styles.username} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.title} />
          {types}
          <img className={styles.img} alt={article.title} src={article.img} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
          )}
          <div className={styles.footer}>
            <Button theme={ButtonTheme.OUTLINE}>
              {t('Читать далее')}
            </Button>
            {views}
          </div>
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
            {types}
            {views}
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
