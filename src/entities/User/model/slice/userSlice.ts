import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LS_KEY } from 'shared/const/localStorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const userData = localStorage.getItem(USER_LS_KEY);

      if (userData) {
        state.authData = JSON.parse(userData);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LS_KEY);
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
