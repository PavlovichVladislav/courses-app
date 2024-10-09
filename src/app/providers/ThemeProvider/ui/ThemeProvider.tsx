import {
  FC, PropsWithChildren, useEffect, useMemo, useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.Light;

// @to-do как - то вынести куда - то тип корявый
const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  useEffect(() => {
    document.body.setAttribute('class', theme);
  }, []);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
