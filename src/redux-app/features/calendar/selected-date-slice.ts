import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getMonth } from "../../../utils/date-calculate";
export type MonthType = "CURRENT" | "NEXT" | "PREV";

export interface CalendarDay {
  type: MonthType;
  date: SelectedDay;
  dateString: string;
}

export interface SelectedDay {
  year: number;
  month: number;
  day: number;
  weekday: number;
}

export interface DayDate {
  date: SelectedDay;
  dateString: string;
}

interface InitialState {
  selectedMonth: CalendarDay[];
  selectedDay: DayDate | null;
}

const initialState: InitialState = {
  selectedMonth: getMonth(0, 0, 0),
  selectedDay: null,
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
