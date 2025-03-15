import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  args: {},
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comments: [
      {
        id: '1',
        user: { id: '1', username: 'Vlad' },
        text: 'comment text',
      },
      {
        id: '2',
        user: { id: '1', username: 'Vlad' },
        text: 'comment text 2',
      },
    ],
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};
