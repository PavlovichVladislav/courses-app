import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  loading: true,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<Profile>) => {
      state.profileData = action.payload;
    },
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
