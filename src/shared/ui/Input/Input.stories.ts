import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  args: {
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    value: 'value',
    placeholder: 'placeholder',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Light: Story = {
  args: {
    value: 'value',
    placeholder: 'placeholder',
  },
};
