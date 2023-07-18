
import { createSlice } from "@reduxjs/toolkit";

//su kien ma an-hien cart
const cartUiSlice = createSlice({
  name: "cartUi",
  initialState: { cartIsVisible: false },

  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const cartUiActions = cartUiSlice.actions;
export default cartUiSlice;