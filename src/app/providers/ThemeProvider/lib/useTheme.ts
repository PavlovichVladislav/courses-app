import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeOutput {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeOutput => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
    case Theme.Dark:
      newTheme = Theme.Light;
      break;
    case Theme.Light:
      newTheme = Theme.ORANGE;
      break;
    case Theme.ORANGE:
      newTheme = Theme.Dark;
      break;
    default:
      newTheme = Theme.Light;
      break;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.body.setAttribute('class', newTheme);
  };

  return { theme, toggleTheme };
};
