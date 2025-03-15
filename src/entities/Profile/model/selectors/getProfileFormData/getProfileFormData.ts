import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export const getProfileFormData = (state: StateSchema) => state.profile?.formData || {
  firstname: '',
  lastname: '',
  age: 0,
  currency: Currency.RUB,
  country: Country.Russia,
  city: '',
  username: '',
  avatar: '',
  id: '1',
};
