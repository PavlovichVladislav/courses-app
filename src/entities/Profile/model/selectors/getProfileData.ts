import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'shared/const/common';

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
