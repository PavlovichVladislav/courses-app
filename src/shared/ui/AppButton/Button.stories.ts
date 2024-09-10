import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AppButton, AppButtonTheme } from './AppButton';

const meta = {
  title: 'shared/AppButton',
  component: AppButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text'
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: AppButtonTheme.CLEAR
  },
};
