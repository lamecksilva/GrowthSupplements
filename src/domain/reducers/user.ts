import { RootState } from '@domain/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface IUserState {
  data?: IUserData | {};
  isAuth: boolean;
  loading: boolean;
}

export interface IUserData {
  id: string;
  name: string;
  date: Date | number;
}

const initialState: IUserState = {
  isAuth: false,
  loading: false,
  data: {},
};

export const asyncGetUser = createAsyncThunk('user/asyncGetUser', async () => {
  await new Promise(f => setTimeout(f, 2000));

  return {
    id: (Math.random() * 100).toString(),
    name: 'John Doe',
    date: Date.now(),
  };
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(asyncGetUser.pending, state => {
        state.loading = true;
      })
      .addCase(asyncGetUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const selectUser = (state: RootState) => state.user.data;
export const selectUserLoading = (state: RootState) => state.user.loading;

export default userSlice.reducer;
