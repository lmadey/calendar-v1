import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  selectedDate: {
    year: number;
    month: number;
  };
  monthCounter: number;
}

const initialState: InitialState = {
  monthCounter: 0,
  selectedDate: {
    month: 0,
    year: 0,
  },
};

const calculateSlectedDateSlice = createSlice({
  name: "calculate calendar date",
  initialState,
  reducers: {
    incrementMonthCounter(state) {
      state.monthCounter = state.monthCounter + 1;
    },
    decrementMonthCounter(state) {
      state.monthCounter = state.monthCounter - 1;
    },
    selectSpecyficDate(
      state,
      action: PayloadAction<{ year: number; month: number }>
    ) {
      state.selectedDate = action.payload;
    },
  },
});

export const {
  incrementMonthCounter,
  decrementMonthCounter,
  selectSpecyficDate,
} = calculateSlectedDateSlice.actions;

export default calculateSlectedDateSlice.reducer;
