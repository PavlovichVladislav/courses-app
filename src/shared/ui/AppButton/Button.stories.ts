import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AppButton, AppButtonTheme } from './AppButton';

import 'app/styles/index.scss';

const meta = {
  title: 'shared/AppButton',
  component: AppButton,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  args: { onClick: fn() },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: AppButtonTheme.PRIMARY,
  },
};

export const Clear: Story = {
  args: {
    children: 'CLEAR',
    theme: AppButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'OUTLINE',
    theme: AppButtonTheme.OUTLINE,
  },
};
