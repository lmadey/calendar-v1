import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getMonth } from "../../../utils/date-calculate";
import { DayDate, SelectedDay } from "../../../types/types";
export type MonthType = "CURRENT" | "NEXT" | "PREV";

export interface CalendarDay {
  type: MonthType;
  date: SelectedDay;
  dateString: string;
}

interface InitialState {
  selectedMonth: CalendarDay[];
  selectedDay: DayDate;
}

const initialState: InitialState = {
  selectedMonth: getMonth(0, 0, 0),
  selectedDay: {
    dateString: "",
    date: { month: 0, day: 0, weekday: 0, year: 2000 },
  },
};

const selectedDateSlice = createSlice({
  name: "selected month data",
  initialState,
  reducers: {
    setSelectedMonth(
      state,
      action: PayloadAction<{
        month: number;
        year: number;
        monthCounter: number;
      }>
    ) {
      const { month, year, monthCounter } = action.payload;
      state.selectedMonth = getMonth(year, month, monthCounter);
    },
    setSelectedDay(state, action: PayloadAction<DayDate>) {
      state.selectedDay = action.payload;
    },
  },
});

export const { setSelectedMonth, setSelectedDay } = selectedDateSlice.actions;
export default selectedDateSlice.reducer;
