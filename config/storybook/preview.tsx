import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from 'shared/config/decorators/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';

import '../../src/app/styles/index.scss';
import { RouterDecorator } from 'shared/config/decorators/RouterDecorator/RouterDecorator';

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
    RouterDecorator,
  ],
};

export default preview;
