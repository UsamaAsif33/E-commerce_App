import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {API} from '../../api';

const initialState = {
  userData: null,
  isLoading: false,
  isSucces: false,
  isError: false,
};

//login
export const login = createAsyncThunk('login', async (params, thunkApi) => {
  console.log('Auth Screen: ', params);
  try {
    const response = await API.post('auth/login', params);
    console.log('Response of API: ', response);
    return response.data;
  } catch (error) {
    console.log('Error of API: ', error);
    return thunkApi.rejectWithValue(error);
  }
});

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    clearLoginData: () => {
      return initialState;
    },
  },
  extraReducers: builder => {
    //login cases
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSucces = true;
      state.userData = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const {clearLoginData} = AuthSlice.actions;

export default AuthSlice.reducer;
