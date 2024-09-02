import { classNames } from 'shared/lib/classNames';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './AppButton.module.scss';

export const enum AppButtonTheme {
  CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: AppButtonTheme;
}

export const AppButton: FC<AppButtonProps> = ({
  className = '', children, theme = AppButtonTheme.CLEAR, ...otherProps
}) => (
  <button
    type="button"
    className={classNames(styles.appButton, {}, [className, styles[theme]])}
    {...otherProps}
  >
    {children}
  </button>
);
