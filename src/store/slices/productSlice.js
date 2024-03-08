import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  itemQuantity: 0,
  totalQuantity: localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items")).reduce((accumulator, item) => {
        return (accumulator += item.itemQuantity);
      }, 0)
    : 0,
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, itemQuantity: 1 });
      localStorage.setItem("items", JSON.stringify(state.items));
      state.totalQuantity += 1;
    },
    removeItem: (state, action) => {
      const existItems = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      state.items = existItems;
      localStorage.setItem("items", JSON.stringify(state.items));
      state.totalQuantity -= 1;
    },
    increaseItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.items[itemIndex].itemQuantity += 1;
      localStorage.setItem("items", JSON.stringify(state.items));
      state.totalQuantity += 1;
    },
    decreaseItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      state.items[itemIndex].itemQuantity -= 1;
      localStorage.setItem("items", JSON.stringify(state.items));
      state.totalQuantity -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, increaseItem, decreaseItem } =
  productSlice.actions;

export default productSlice.reducer;
