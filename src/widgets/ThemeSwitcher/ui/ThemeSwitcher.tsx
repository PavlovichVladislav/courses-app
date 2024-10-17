import { classNames } from 'shared/lib/classNames/classNames';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton';

import ThemeDarkSvg from '../assets/theme-dark.svg';
import ThemeLightSvg from '../assets/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={AppButtonTheme.CLEAR}
    >
      {theme === Theme.Dark ? <ThemeLightSvg /> : <ThemeDarkSvg />}
    </AppButton>
  );
};
