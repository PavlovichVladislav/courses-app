import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  args: {
    label: 'Значение',
    options: [
      {
        content: 'rub',
        value: 'rub',
      },
      {
        content: 'usd',
        value: 'usd',
      },
      {
        content: 'kzt',
        value: 'kzt',
      },
    ],
    value: 'rub',
    setValue: () => {},
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const select: Story = {};
