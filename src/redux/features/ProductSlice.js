import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API} from '../../api';

const initialState = {
  products: null,
  isLoading: false,
  isSucces: false,
  isError: false,
};

//All Products
export const getAllProducts = createAsyncThunk(
  'getAllProducts',
  async thunkApi => {
    try {
      const response = await API.get('products');
      console.log('Response of Products: ', response);
      return response.data;
    } catch (error) {
      console.log('Error of Products: ', error);
      return thunkApi.rejectWithValue(error);
    }
  },
);

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //login cases
    builder.addCase(getAllProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSucces = true;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default ProductSlice.reducer;
