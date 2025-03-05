import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import styles from './ArticleList.module.scss';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view: ArticleView;
}

export const ArticleList = ({
  className, articles, isLoading, view,
}: ArticleListProps) => {
  if (isLoading) {
    return (
      <div className={classNames(styles.articleList, {}, [className, styles[view]])}>
        {
          new Array(view === ArticleView.GRID ? 9 : 3)
            .fill(0)
            .map((_, index) => (
              <ArticleListItemSkeleton key={index} view={view} />
            ))
        }
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} key={article.id} />
  );

  if (isLoading) return 'загрузка';
  return (
    <div className={classNames(styles.articleList, {}, [className, styles[view]])}>
      {articles.length > 0 ? (
        articles.map(renderArticle)
      ) : null}
    </div>
  );
};
