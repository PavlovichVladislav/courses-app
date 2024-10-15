import { createAsyncThunk } from "@reduxjs/toolkit"

export const loginByUsername = createAsyncThunk(
  'login/loginByUsername',
  async ({login: number, password: string}) => {
    const response = await userAPI.fetchById(userId);
    return response.data
  },
);