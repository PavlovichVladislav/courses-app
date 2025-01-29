import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  args: {},
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comment: {
      id: '1',
      user: { id: '1', username: 'Vlad' },
      text: 'comment text',
    },
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    comment: {
      id: '1',
      user: { id: '1', username: 'Vlad' },
      text: 'comment text',
    },
    isLoading: true,
  },
};
