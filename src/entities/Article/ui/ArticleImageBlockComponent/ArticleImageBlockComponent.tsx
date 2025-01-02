import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
      text
    </div>
  );
};
