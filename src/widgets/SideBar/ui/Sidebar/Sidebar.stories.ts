import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/decorators/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: { id: '1', username: 'name' }, _inited: true,
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
      user: {
        authData: { id: '1', username: 'name' }, _inited: true,
      },
    }),
  ],
};

export const NoAuth: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
    StoreDecorator({
      user: {
        authData: undefined,
        _inited: true,
      },
    }),
  ],
};
