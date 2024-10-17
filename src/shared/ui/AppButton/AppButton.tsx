import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './AppButton.module.scss';

export const enum AppButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
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
  disabled?: boolean;
}

export const AppButton: FC<AppButtonProps> = ({
  className = '',
  children,
  square,
  theme,
  size = AppButtonSize.M,
  disabled,
  ...otherProps
}) => {
  const mods = {
    [styles.square]: square,
    [styles.disabled]: disabled,
  };

  return (
    <button
      disabled={disabled}
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
