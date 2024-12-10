import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return error', () => {
    const state: Partial<StateSchema> = {
      profile: {
        profileData: {},
        isLoading: false,
        readonly: true,
        error: 'error',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('error');
  });

  test('empty state test', () => {
    const state: Partial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual('');
  });
});
