import { classNames } from 'shared/lib/classNames/classNames';

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import { memo } from 'react';
import ThemeDarkSvg from '../assets/theme-dark.svg';
import ThemeLightSvg from '../assets/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.Dark ? <ThemeLightSvg /> : <ThemeDarkSvg />}
    </Button>
  );
});
