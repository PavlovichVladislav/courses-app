import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: undefined,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
