import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

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
    theme: ButtonTheme.CLEAR,
  },
};

export const OutlineLight: Story = {
  args: {
    children: 'OUTLINE',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'OUTLINE-dark',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const OutlineRed: Story = {
  args: {
    children: 'OUTLINE',
    theme: ButtonTheme.OUTLINE_RED,
  },
};

export const Background: Story = {
  args: {
    children: 'Background',
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const InvertedBackground: Story = {
  args: {
    children: 'Inverted Background',
    theme: ButtonTheme.BACKGROUND_INVERTED,
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
    size: ButtonSize.L,
  },
};

export const PrimaryXL: Story = {
  args: {
    children: 'Primary XL',
    size: ButtonSize.XL,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.Light)],
};

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.Light)],
};

export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    square: true,
  },
  decorators: [ThemeDecorator(Theme.Light)],
};

export const Disabled: Story = {
  args: {
    children: 'disabled',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.Light)],
};
