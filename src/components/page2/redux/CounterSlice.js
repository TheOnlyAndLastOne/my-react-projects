import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  num: 0,
};

export const counterSlice = createSlice({
  name: "myCounter",
  initialState: initialState,
  reducers: {
    plus: (state) => {
      state.num += 1;
    },
    minus: (state) => {
      state.num -= 1;
    },
    incrementByAmount: (state, action) => {
      state.num += action.payload;
    },
  },
});

export const selector = (state) => state.counter.num;

export const { plus, minus, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
