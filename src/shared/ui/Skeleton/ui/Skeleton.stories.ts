import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    width: '100%',
    height: '200px',
  },
};

export const Circle: Story = {
  args: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },
};

export const PrimaryDark: Story = {
  args: {
    width: '100%',
    height: '200px',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const CircleDark: Story = {
  args: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};
