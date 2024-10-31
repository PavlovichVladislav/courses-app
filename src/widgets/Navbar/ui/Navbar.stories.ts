import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/decorators/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta = {
  title: 'shared/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightWithAuth: Story = {
  decorators: [StoreDecorator({
    user: { authData: { id: 'id', username: 'name' } },
  })],
};

export const DarkWithAuth: Story = {
  decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({
    user: { authData: { id: 'id', username: 'name' } },
  })],
};

export const DarkWhitoutAuth: Story = {
  decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({
    user: { authData: undefined },
  })],
};
