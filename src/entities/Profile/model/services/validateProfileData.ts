import { Profile } from '../types/profile';

export enum ValidateProfileError {
  EMPTY_PROFILE_DATA = 'EMPTY_PROFILE_DATA',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  SERVER_ERROR = 'SERVER_ERROR'
}

export const validateProfileData = (profile?: Profile) => {
  const errors: ValidateProfileError[] = [];

  if (!profile) {
    errors.push(ValidateProfileError.EMPTY_PROFILE_DATA);
  }

  if (!profile.firstname || !profile.firstname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!profile.age || !Number(profile.age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!profile.country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
