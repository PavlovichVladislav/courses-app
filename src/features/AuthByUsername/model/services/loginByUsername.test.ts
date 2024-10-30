import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios from 'axios';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

describe('loginByUsername test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('loginByUsername 200', async () => {
    const userValue = {
      id: '1',
      username: 'admin',
    };

    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: userValue,
    }));

    const action = loginByUsername({ password: '123', username: 'admin' });
    const result = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userValue);
  });

  test('loginByUsername 403', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = loginByUsername({ password: '12', username: 'admin' });
    const result = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toBe('Empty server response');
  });
});
