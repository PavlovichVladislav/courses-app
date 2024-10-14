import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta = {
  title: 'shared/LoginForm',
  component: LoginForm,
  args: {
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Light: Story = {
  args: {
  },
};
