import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test setLogin', () => {
    const state: Partial<LoginSchema> = { username: 'Admin' };
    expect(loginReducer(state as LoginSchema, loginActions.setLogin('NotAdmin'))).toEqual({ username: 'NotAdmin' });
  });

  test('test setPassword', () => {
    const state: Partial<LoginSchema> = { password: '123' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('1234'))).toEqual({ password: '1234' });
  });
});
