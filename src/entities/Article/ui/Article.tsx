import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import styles from './Article.module.scss';

interface ArticleProps {
  className?: string
}

export const Article = ({ className }: ArticleProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.article, {}, [className])}>
      {t('article')}
    </div>
  );
};
