import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string
}

export const ArticleCodeBlockComponent = ({ className }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
      code
    </div>
  );
};
