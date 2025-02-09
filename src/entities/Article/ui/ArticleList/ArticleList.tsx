import { classNames } from 'shared/lib/classNames/classNames';

import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import styles from './ArticleList.module.scss';

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
    <ArticleListItem article={article} view={view} key={article.id} />
  );

  if (isLoading) return 'загрузка';
  return (
    <div className={classNames(styles.articleList, {}, [className])}>
      {articles.length > 0 ? (
        articles.map(renderArticle)
      ) : null}
    </div>
  );
};
