import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

// import 'app/styles/index.scss';

const meta = {
  title: 'shared/PageLoader',
  component: PageLoader,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // args: { onClick: fn() },
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)],
};
