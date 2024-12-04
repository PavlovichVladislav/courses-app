import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from '../../model/types';
import { CurrencySelect } from './CurrencySelect';

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  args: {
    value: Currency.RUB,
    onChange: () => {},
    readonly: false,
  },
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const select: Story = {};
