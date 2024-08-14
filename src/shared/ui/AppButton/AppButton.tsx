import { classNames } from 'shared/lib/classNames';

import styles from './AppButton.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export const enum AppButtonTheme {
  CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: AppButtonTheme;
}

export const AppButton = ({ className, children, theme, ...otherProps }: AppButtonProps) => {
  return (
    <button 
      className={classNames(styles.appButton, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}