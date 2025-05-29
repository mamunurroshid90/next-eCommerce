import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../type";

interface initialState {
  cart: ProductType[];
  favorite: ProductType[];
  userInfo: any;
}

const initialState: initialState = {
  cart: [],
  favorite: [],
  userInfo: null,
};

export const eCommerceSlice = createSlice({
  name: "eCommerce",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload?.id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});
export const { addToCart } = eCommerceSlice.actions;
export default eCommerceSlice.reducer;
