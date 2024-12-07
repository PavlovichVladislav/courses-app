import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { Profile } from '../types/profile';
import { getProfileFormData } from '../selectors/getProfileFormData';
import { validateProfileData, ValidateProfileError } from './validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, { rejectWithValue, extra, getState }) => {
    try {
      const { api } = extra;
      const profileFormData = getProfileFormData(getState());
      const validateErrors = validateProfileData(profileFormData);

      if (validateErrors.length) {
        return rejectWithValue(validateErrors);
      }

      const response = await api.put<Profile>('/profile', profileFormData);

      if (!response.data) {
        throw new Error('Empty server response');
      }

      return response.data;
    } catch (error) {
      const e = error as unknown as AxiosError;
      console.error(e);

      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
