import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppButton, AppButtonSize, AppButtonTheme } from './AppButton';

const meta = {
  title: 'shared/AppButton',
  component: AppButton,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  args: { onClick: fn() },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const Clear: Story = {
  args: {
    children: 'CLEAR',
    theme: AppButtonTheme.CLEAR,
  },
};

export const OutlineLight: Story = {
  args: {
    children: 'OUTLINE',
    theme: AppButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'OUTLINE-dark',
    theme: AppButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Background: Story = {
  args: {
    children: 'Background',
    theme: AppButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const InvertedBackground: Story = {
  args: {
    children: 'Inverted Background',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const PrimaryM: Story = {
  args: {
    children: 'Primary M',
  },
};

export const PrimaryL: Story = {
  args: {
    children: 'Primary L',
    size: AppButtonSize.L,
  },
};

export const PrimaryXL: Story = {
  args: {
    children: 'Primary XL',
    size: AppButtonSize.XL,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.Light)],
};

export const SquareL: Story = {
  args: {
    children: '>',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    size: AppButtonSize.L,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.Light)],
};

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    size: AppButtonSize.XL,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.Light)],
};

export const Disabled: Story = {
  args: {
    children: 'disabled',
    theme: AppButtonTheme.BACKGROUND_INVERTED,
    size: AppButtonSize.XL,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.Light)],
};
