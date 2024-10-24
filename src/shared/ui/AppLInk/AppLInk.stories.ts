import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLInk',
  component: AppLink,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  args: {
    to: '/',
    children: 'Ссылка',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
};

export const INVERTED: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
};

export const PRIMARY_DARK: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const INVERTED_DARK: Story = {
  args: {
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};
