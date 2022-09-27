import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0, //items count in cart
    total: 0,
  },

  reducers: {
    addProduct(state, action) {
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
      state.products.push(action.payload.product);
    },

    // reset() {
    //   state.quantity = 0;
    //   state.total = 0;
    //   state.products = [];
    // },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
