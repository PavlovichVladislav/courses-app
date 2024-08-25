import { classNames } from 'shared/lib/classNames';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';
import styles from './ThemeButton.module.scss';

import ThemeDarkSvg from '../assets/icons/theme-dark.svg';
import ThemeLightSvg from '../assets/icons/theme-light.svg';

interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton = ({ className = '' }: ThemeButtonProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      className={classNames(styles.ThemeButton, {}, [className])}
      onClick={toggleTheme}
      theme={AppButtonTheme.CLEAR}
    >
      {theme === Theme.Dark ? <ThemeLightSvg /> : <ThemeDarkSvg />}
    </AppButton>
  );
};
