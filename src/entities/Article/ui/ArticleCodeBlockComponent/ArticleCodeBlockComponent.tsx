import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
      code
    </div>
  );
};
