import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', loginData);

      if (!response.data) {
        throw new Error('Empty server response');
      }

      return response.data;
    } catch (error) {
      console.error(error);
      rejectWithValue(error);
    }
  },
);
