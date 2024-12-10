import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, { rejectWithValue, extra }) => {
    try {
      const { api } = extra;

      const response = await api.get<Profile>('/profile');

      if (!response.data) {
        throw new Error('Empty server response');
      }

      return response.data;
    } catch (error) {
      const e = error as unknown as AxiosError;
      console.error(e);

      return rejectWithValue(e.message);
    }
  },
);
