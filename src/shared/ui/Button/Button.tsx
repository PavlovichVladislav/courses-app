import { classNames } from 'shared/lib/classNames/classNames';

import {
  ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import styles from './Button.module.scss';

export const enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outlineRed',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}
export const enum ButtonSize {
  M = 'sizeM',
  L = 'sizeL',
  XL = 'sizeXl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo(({
  className = '',
  children,
  square,
  theme = ButtonTheme.OUTLINE,
  size = ButtonSize.M,
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
          styles.button,
          mods,
          [className, styles[theme], styles[size]],
        )
      }
      {...otherProps}
    >
      {children}
    </button>
  );
});
