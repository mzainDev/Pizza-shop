import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  
  reducers: {
    addToCart: (state: any, action) => {
      const existingItem = state.cart.find(
        (item: any) => item.id === action.payload.id
      );

      if (existingItem) {
        state.cart = state.cart.map((item: any) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },

    removeFromCart: (state: any, action: any) => {
      state.cart = state.cart.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
    incrementQty: (state: any, action: any) => {
      state.cart = state.cart.map((item: any) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state: any, action: any) => {
      state.cart = state.cart.map((item: any) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;
