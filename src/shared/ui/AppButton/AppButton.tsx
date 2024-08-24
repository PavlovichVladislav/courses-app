import { classNames } from 'shared/lib/classNames'

import styles from './AppButton.module.scss'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

export const enum AppButtonTheme {
  CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  theme?: AppButtonTheme
}

export const AppButton: FC = ({ className = '', children, theme = AppButtonTheme.CLEAR, ...otherProps }: AppButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(styles.appButton, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
