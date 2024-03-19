import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cartData: [],
  totalAmount: 0,
};

const CartSlice = createSlice({
  name: 'CartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {cartData} = state;
      const itemPresentIndex = cartData.findIndex(
        item => item.id === action.payload.id,
      );
      const updatedCartData = [...cartData];
      if (itemPresentIndex !== -1) {
        updatedCartData[itemPresentIndex] = {
          ...updatedCartData[itemPresentIndex],
          quantity: updatedCartData[itemPresentIndex].quantity + 1,
        };
        const total = updatedCartData.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.price * currentItem.quantity,
          0,
        );
        return {
          ...state,
          cartData: updatedCartData,
          totalAmount: total,
        };
      } else {
        const finalData = [...cartData, {...action.payload, quantity: 1}];
        const total = finalData.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.price * currentItem.quantity,
          0,
        );
        return {
          ...state,
          cartData: finalData,
          totalAmount: total,
        };
      }
    },
    removeToCart: (state, action) => {
      const {cartData} = state;
      const itemPresentIndex = cartData.findIndex(
        item => item.id === action.payload,
      );
      if (itemPresentIndex !== -1) {
        const updatedCartData = [...cartData];
        if (updatedCartData[itemPresentIndex].quantity > 1) {
          updatedCartData[itemPresentIndex] = {
            ...updatedCartData[itemPresentIndex],
            quantity: updatedCartData[itemPresentIndex].quantity - 1,
          };
        } else {
          updatedCartData.splice(itemPresentIndex, 1);
        }
        const total = updatedCartData.reduce(
          (accumulator, currentItem) =>
            accumulator + currentItem.price * currentItem.quantity,
          0,
        );
        return {
          ...state,
          cartData: updatedCartData,
          totalAmount: total,
        };
      }
    },
    clearCart: () => {
      return initialState;
    },
  },
});

export const {addToCart, removeToCart, clearCart} = CartSlice.actions;

export default CartSlice.reducer;
