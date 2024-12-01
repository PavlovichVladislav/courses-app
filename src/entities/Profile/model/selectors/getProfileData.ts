import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'shared/const/common';

export const getProfilehData = (state: StateSchema) => state.profile?.profileData || {
  firstname: '',
  lastname: '',
  age: 0,
  currency: Currency.RUB,
  country: Country.Russia,
  city: '',
  username: '',
  avatar: '',
};
