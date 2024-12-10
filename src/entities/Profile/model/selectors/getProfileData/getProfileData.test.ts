import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return login state', () => {
    const state: Partial<StateSchema> = {
      profile: {
        profileData: {
          firstname: 'Vladislav',
          lastname: 'Pavlovich',
          age: 22,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Moscow',
          username: 'main admin',
          avatar: 'avatar',
        },
        isLoading: false,
        readonly: true,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual({
      firstname: 'Vladislav',
      lastname: 'Pavlovich',
      age: 22,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'main admin',
      avatar: 'avatar',
    });
  });

  test('empty state test', () => {
    const state: Partial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual({
      firstname: '',
      lastname: '',
      age: 0,
      currency: Currency.RUB,
      country: Country.Russia,
      city: '',
      username: '',
      avatar: '',
    });
  });
});
