import { classNames } from 'shared/lib/classNames/classNames';

import { Code } from 'shared/ui/Code/Code';
import styles from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
      <Code>
        {block.code}
      </Code>
    </div>
  );
};
