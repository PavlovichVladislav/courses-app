import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
  test('should return readonly state', () => {
    const state: Partial<StateSchema> = {
      profile: {
        profileData: {},
        isLoading: true,
        readonly: true,
        error: 'error',
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  test('empty state test', () => {
    const state: Partial<StateSchema> = {};

    expect(getProfileReadonly(state as StateSchema)).toEqual(false);
  });
});
