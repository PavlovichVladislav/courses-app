import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './AppButton.module.scss';

export const enum AppButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: AppButtonTheme;
  square?: boolean;
}

export const AppButton: FC<AppButtonProps> = ({
  className = '', children, theme = AppButtonTheme.PRIMARY, square, ...otherProps
}) => {
  const mods = {
    [styles.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(styles.appButton, mods, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
