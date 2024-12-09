import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/decorators/StoreDecorator/StoreDecorator';
import avatar from 'shared/ui/Avatar/avatar.png';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import ProfilePage from './ProfilePage';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        profileData: {
          firstname: 'Vladislav',
          lastname: 'Pavlovich',
          age: 22,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: 'main admin',
          avatar,
        },
        isLoading: false,
        readonly: true,
      },
    })
  ],
};

export const Dark: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        profileData: {
          firstname: 'Vladislav',
          lastname: 'Pavlovich',
          age: 22,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: 'main admin',
          avatar,
        },
        isLoading: false,
        readonly: true,
      },
    }),
    ThemeDecorator(Theme.Dark), 
  ],
};
