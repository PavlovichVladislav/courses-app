import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';

import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  const { paragraphs, title } = block;

  return (
    <div className={classNames(styles.articleTextBlockComponent, {}, [className])}>
      {title && <Text title={title} className={styles.title} />}
      {paragraphs.map((paragraph, index) => <Text text={paragraph} key={index} className={styles.paragraph} />)}
    </div>
  );
});
