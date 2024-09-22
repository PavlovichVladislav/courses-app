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

export const enum AppButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: AppButtonTheme;
  square?: boolean;
  size?: AppButtonSize;
}

export const AppButton: FC<AppButtonProps> = ({
  className = '',
  children,
  square,
  theme = AppButtonTheme.PRIMARY,
  size = AppButtonSize.M,
  ...otherProps
}) => {
  const mods = {
    [styles.square]: square,
  };

  return (
    <button
      type="button"
      className={
        classNames(
          styles.appButton,
          mods,
          [className, styles[theme], styles[size]],
        )
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};
