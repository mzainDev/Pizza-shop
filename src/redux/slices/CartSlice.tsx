import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },

    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    incrementQty: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },

    decrementQty: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
      );
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  CartSlice.actions;
export default CartSlice.reducer;
