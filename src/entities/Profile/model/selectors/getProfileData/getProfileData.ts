import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export const getProfileData = (state: StateSchema) => state.profile?.profileData || {
  firstname: '',
  lastname: '',
  age: 0,
  currency: Currency.RUB,
  country: Country.Russia,
  city: '',
  username: '',
  avatar: '',
};
