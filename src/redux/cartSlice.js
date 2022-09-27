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
      state.total +=
        action.payload.product.price * action.payload.product.quantity;
      state.products.push(action.payload.product);
    },

    updateProductQuantity(state, action) {
      const index = action.payload.index;
      const product = state.products[index];
      const sign = action.payload.sign; // inc | dec

      if (sign === "inc") {
        product.quantity++;
        state.total += product.price;
      } else if (sign === "dec") {
        state.total -= product.price;

        if (product.quantity > 1) {
          product.quantity--;
        } else {
          //remove product from cart & dec cart item count
          state.products.splice(index, 1);
          state.quantity--;
        }
      }
    },

    reset(state) {
      state.quantity = 0;
      state.total = 0;
      state.products = [];
    },
  },
});

export const { addProduct, updateProductQuantity, reset } = cartSlice.actions;
export default cartSlice.reducer;
