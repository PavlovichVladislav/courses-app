import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import avatar from './avatar.png';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    src: avatar,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAvatar: Story = {};
export const SmallAvatar: Story = {
  args: {
    size: 50,
  },
};
