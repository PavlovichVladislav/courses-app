import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/decorators/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

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
  decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({
    login: { password: 'password', username: 'login', isLoading: false },
  })],
};

export const Light: Story = {
  decorators: [StoreDecorator({
    login: { password: 'password', username: 'login', isLoading: false },
  })],
};

export const withError: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({
    login: {
      password: 'password', username: 'login', isLoading: false, error: 'ошибка',
    },
  })],
};

export const loading: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({
    login: {
      password: 'password', username: 'login', isLoading: true,
    },
  })],
};
