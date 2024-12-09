import type { Meta, StoryObj } from '@storybook/react';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import avatar from 'shared/ui/Avatar/avatar.png';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      firstname: 'Vladislav',
      lastname: 'Pavlovich',
      age: 22,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'main admin',
      avatar,
    },
    loaading: false,
  },
};

export const Loading: Story = {
  args: {
    data: {},
    loaading: true,
  },
};

export const Error: Story = {
  args: {
    data: {},
    loaading: false,
    error: 'Some error',
  },
};
