import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '../../model/types';
import { CountrySelect } from './CountrySelect';

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  args: {
    value: Country.Russia,
    onChange: () => {},
    readonly: false,
  },
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const select: Story = {};
