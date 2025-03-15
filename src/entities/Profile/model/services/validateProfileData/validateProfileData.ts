import { Profile } from '../../types/profile';

export enum ValidateProfileError {
  EMPTY_PROFILE_DATA = 'EMPTY_PROFILE_DATA',
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  SERVER_ERROR = 'SERVER_ERROR'
}

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.EMPTY_PROFILE_DATA];
  }

  const errors: ValidateProfileError[] = [];
  const {
    age, firstname, lastname, country,
  } = profile;

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
