import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading', () => {
  test('should return loading state', () => {
    const state: Partial<StateSchema> = {
      profile: {
        profileData: {},
        isLoading: true,
        readonly: true,
        error: 'error',
      },
    };

    expect(getProfileLoading(state as StateSchema)).toEqual(true);
  });

  test('empty state test', () => {
    const state: Partial<StateSchema> = {};

    expect(getProfileLoading(state as StateSchema)).toEqual(false);
  });
});
