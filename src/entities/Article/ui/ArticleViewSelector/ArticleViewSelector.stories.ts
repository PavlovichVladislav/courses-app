import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '../../model/types/article';

const meta = {
  title: 'entities/Comment/ArticleViewSelector',
  component: ArticleViewSelector,
  args: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    view: ArticleView.GRID,
    onViewClick: () => {},
  },
};
