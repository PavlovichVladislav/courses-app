import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LS_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (loginData, { rejectWithValue, dispatch, extra }) => {
    try {
      const { api } = extra;

      const response = await api.post<User>('/login', loginData);

      if (!response.data) {
        throw new Error('Empty server response');
      }

      localStorage.setItem(USER_LS_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      const e = error as unknown as AxiosError;
      console.error(e);

      return rejectWithValue(e.message);
    }
  },
);
