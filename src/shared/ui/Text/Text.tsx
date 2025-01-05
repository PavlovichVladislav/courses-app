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

export enum TextSize {
  M = 'sizeM',
  L = 'sizeL',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo(({
  className,
  title,
  text,
  theme = TextTheme.PRIMARY,
  align = TextAlign.LEFT,
  size = TextSize.M,
}: TextProps) => {
  const additionalClasses = [
    className,
    styles[theme],
    styles[align],
    styles[size],
  ];

  return (
    <div className={classNames(styles.textWrapper, { }, additionalClasses)}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
});
