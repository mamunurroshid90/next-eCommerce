import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface UserInfo {
  name?: string;
  email?: string;
  // Add other user properties as needed
}

interface InitialState {
  cart: ProductType[];
  favorite: ProductType[];
  userInfo: UserInfo | null;
}

const initialState: InitialState = {
  cart: [],
  favorite: [],
  userInfo: null,
};

export const eCommerceSlice = createSlice({
  name: "eCommerce",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existingProduct && existingProduct.quantity! > 1) {
        existingProduct.quantity! -= 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
    addToFavorite: (state, action: PayloadAction<ProductType>) => {
      const existingProduct = state.favorite.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        state.favorite = state.favorite.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favorite.push(action.payload);
      }
    },
    resetFavorite: (state) => {
      state.favorite = [];
    },
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart,
  addToFavorite,
  resetFavorite,
  setUserInfo,
} = eCommerceSlice.actions;

export default eCommerceSlice.reducer;
