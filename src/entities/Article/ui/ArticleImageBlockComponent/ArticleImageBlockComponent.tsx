import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { ArticleImageBlock } from '../../model/types/article';

import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(styles.articleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt="картинка" />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});
