import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from '../services/validateProfileData/validateProfileData';

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
  validateErrors?: ValidateProfileError[];
}
