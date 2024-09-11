import { classNames } from 'shared/lib/classNames/classNames';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './AppButton.module.scss';

export const enum AppButtonTheme {
  PRIMARY = 'primary',
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: AppButtonTheme;
}

export const AppButton: FC<AppButtonProps> = ({
  className = '', children, theme = AppButtonTheme.PRIMARY, ...otherProps
}) => (
  <button
    type="button"
    className={classNames(styles.appButton, {}, [className, styles[theme]])}
    {...otherProps}
  >
    {children}
  </button>
);
