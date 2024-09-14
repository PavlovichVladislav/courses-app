import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/decorators/StyleDecorator';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';

import '../../src/app/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.Light),
  ],
};

export default preview;
