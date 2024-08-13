import { classNames } from 'shared/lib/classNames';

import styles from './ThemeButton.module.scss';
import { ReactNode } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import ThemeDarkSvg from '../../assets/theme-dark.svg';
import ThemeLightSvg from '../../assets/theme-light.svg';

interface ThemeButtonProps {
  className?: string;
  // children: ReactNode;
}

export const ThemeButton = ({ className }: ThemeButtonProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={classNames(styles.ThemeButton, {}, [className])} onClick={toggleTheme}>
      {theme === Theme.Dark ? <ThemeLightSvg/> : <ThemeDarkSvg />} 
      {/* {children} */}
    </button>
  )
}