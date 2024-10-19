import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текст',
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Заголовок',
  },
};

export const TextOnly: Story = {
  args: {
    text: 'Текст',
  },
};

export const DefaultDark: Story = {
  args: {
    title: 'Заголовок',
    text: 'Текст',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const TitleOnlyDark: Story = {
  args: {
    title: 'Заголовок',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const TextOnlyDark: Story = {
  args: {
    text: 'Текст',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Error: Story = {
  args: {
    title: 'Заголовок',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const ErrorDark: Story = {
  args: {
    text: 'Текст',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};
