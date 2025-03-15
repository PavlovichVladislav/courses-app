import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/test/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

describe('loginByUsername test', () => {
  const testAsyncThunk = new TestAsyncThunk(loginByUsername);
  test('loginByUsername 200', async () => {
    const returnedUserData = {
      id: '1',
      username: 'admin',
    };
    const authData = { password: '123', username: 'admin' };

    testAsyncThunk.api.post.mockReturnValue(Promise.resolve({
      data: returnedUserData,
    }));

    const result = await testAsyncThunk.callThunk(authData);

    expect(testAsyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(testAsyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(returnedUserData));
    expect(testAsyncThunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(returnedUserData);
  });

  test('loginByUsername 403', async () => {
    const authData = { password: '12', username: 'admin' };

    testAsyncThunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await testAsyncThunk.callThunk(authData);

    expect(testAsyncThunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(testAsyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toBe('Empty server response');
  });
});
