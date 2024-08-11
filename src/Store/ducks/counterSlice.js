import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, { type, payload }) => state + payload?.value,
    decrement: (state, { type, payload }) => state - payload?.value,
  },
});

export const { increment, decrement, getRandomNumber } = counterSlice.actions;
export default counterSlice.reducer; //we will be importing as counterReducer in store.js
