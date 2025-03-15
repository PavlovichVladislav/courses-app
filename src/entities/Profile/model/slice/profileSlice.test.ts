import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { ValidateProfileError } from '../services/validateProfileData/validateProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const profileData = {
  firstname: 'Vladislav',
  lastname: 'Pavlovich',
  age: 22,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'main admin',
  avatar: 'avatar',
  id: '1',
};

const formData = {
  firstname: 'Vladislav1',
  lastname: 'Pavlovich1',
  age: 22,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'main admin',
  avatar: 'avatar',
  id: '1',
};

describe('profileSlice.test', () => {
  test('test setReadonly', () => {
    const state: Partial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setProfileReadOnly(true),
    )).toEqual({ readonly: true });
  });

  test('test canelEdit', () => {
    const state: Partial<ProfileSchema> = { readonly: false, profileData, formData };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.canelEdit(),
    )).toEqual({ readonly: true, profileData, formData: profileData });
  });

  test('test setFormData', () => {
    const state: Partial<ProfileSchema> = { formData: profileData };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setFormData({ firstname: 'Vladislav1', lastname: 'Pavlovich1' }),
    )).toEqual({ formData });
  });

  test('test update profile service pending', () => {
    const state: Partial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending(''),
    )).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test('test update profile service fulfilled', () => {
    const state: Partial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
      profileData,
      formData: profileData,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(formData, ''),
    )).toEqual({
      isLoading: false, readonly: true, profileData: formData, formData,
    });
  });
});
