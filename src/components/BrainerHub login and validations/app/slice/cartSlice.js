// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState:  [] ,
//   reducers: {
//     addItemToCart: (state, { payload }) => {
//       console.log("payload:", payload);
//       console.log("state,:", state);
//       state.push(payload);

//     },
//     removeToCart: (state, { payload }) => {
//       state.items = state.items.filter((item) => item.id !== payload);
//     },
//   },
// });

// export const { addItemToCart, removeToCart } = cartSlice?.actions;

// export const selectCart = (state) => state?.cart;

// export default cartSlice?.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, { payload }) => {
      console.log("payload:", payload);
      const { product } = payload;
      const existingItem = state.find(
        (item) => item?.product?.id === product.id
      );

      if (existingItem) {
        // If the product is already in the cart, increment its quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add a new item to the cart
        state.push({ product, quantity: 1 });
      }
      console.log("state,:", state);
    },
    removeToCart: (state, { payload }) => {
      // Remove the item with the matching product id
      return state.filter((item) => item.product.id !== payload);
    },
  },
});

export const { addItemToCart, removeToCart } = cartSlice.actions;

export const selectCart = (state) => state?.cart;

export default cartSlice.reducer;
