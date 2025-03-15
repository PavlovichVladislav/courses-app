import { StateSchema } from 'app/providers/StoreProvider';
import { getValidatePorfileErrors } from './getValidatePorfileErrors';
import { ValidateProfileError } from '../../services/validateProfileData/validateProfileData';

describe('getProfileReadonly', () => {
  test('should return validateErrors state with one error', () => {
    const state: Partial<StateSchema> = {
      profile: {
        profileData: {},
        isLoading: true,
        readonly: true,
        validateErrors: [ValidateProfileError.EMPTY_PROFILE_DATA],
      },
    };

    expect(getValidatePorfileErrors(state as StateSchema)).toEqual([ValidateProfileError.EMPTY_PROFILE_DATA]);
  });

  test('should return validateErrors state with many errors', () => {
    const state: Partial<StateSchema> = {
      profile: {
        profileData: {},
        isLoading: true,
        readonly: true,
        validateErrors: [ValidateProfileError.EMPTY_PROFILE_DATA, ValidateProfileError.INCORRECT_AGE],
      },
    };

    expect(getValidatePorfileErrors(state as StateSchema)).toEqual(
      [ValidateProfileError.EMPTY_PROFILE_DATA, ValidateProfileError.INCORRECT_AGE],
    );
  });

  test('empty state test', () => {
    const state: Partial<StateSchema> = {};

    expect(getValidatePorfileErrors(state as StateSchema)).toEqual([]);
  });
});
