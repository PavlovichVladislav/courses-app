import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'shared/const/common';

export const getProfileFormData = (state: StateSchema) => state.profile?.formData || {
  firstname: '',
  lastname: '',
  age: 0,
  currency: Currency.RUB,
  country: Country.Russia,
  city: '',
  username: '',
  avatar: '',
};
