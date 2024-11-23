import { classNames } from 'shared/lib/classNames/classNames';

import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign
}

export const Text = memo(({
  className, title, text, theme = TextTheme.PRIMARY, align,
}: TextProps) => {
  return (
    <div className={classNames(styles.textWrapper, { }, [className, styles[theme], styles[align]])}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
});
