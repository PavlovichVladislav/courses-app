import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading: boolean;
  view: ArticleView;
}

export const ArticleList = ({
  className, articles, isLoading, view,
}: ArticleListProps) => {
  const renderArticle = (article: Article) => (
    <ArticleListItem article={article} view={view} />
  );

  return (
    <div className={classNames(styles.ArticleList, {}, [className])}>
      {articles.length > 0 ? (
        articles.map(renderArticle)
      ) : null}
    </div>
  );
};
