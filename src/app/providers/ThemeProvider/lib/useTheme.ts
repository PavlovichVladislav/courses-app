import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeOutput {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeOutput => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.body.setAttribute('class', newTheme);
  };

  return { theme, toggleTheme };
};
