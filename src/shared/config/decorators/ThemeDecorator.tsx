import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator: (theme: Theme) => Decorator = (theme) => (
  (Story) => <div className={`app ${theme}`}><Story /></div>
);
