import { Currency } from 'entities/Currency';
import { Country } from 'shared/const/common';

export interface Profile {
  firstname?: string,
  lastname?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string
}

export interface ProfileSchema {
  profileData?: Profile,
  formData?: Profile,
  error?: string,
  isLoading: boolean;
  readonly: boolean;
}
