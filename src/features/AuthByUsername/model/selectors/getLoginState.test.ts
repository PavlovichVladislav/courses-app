import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return login state', () => {
    const state: Partial<StateSchema> = {
      login: {
        username: 'name',
        password: 'password',
        isLoading: true,
        error: undefined,
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'name',
      password: 'password',
      isLoading: true,
      error: undefined,
    });
  });

  test('empty state test', () => {
    const state: Partial<StateSchema> = {};

    expect(getLoginState(state as StateSchema)).toEqual({
      isLoading: false,
      password: '',
      username: '',
    });
  });
});
