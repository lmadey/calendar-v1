import { CalendarEvent, PostDataStatus } from "./../../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchDataStatus } from "../../../types/types";

interface MonthEvent {
  day: string;
  eventTotal: number;
}

interface InitialState {
  selectedDayEvents: FetchDataStatus<CalendarEvent[]>;
  selectedMonthEvents: FetchDataStatus<MonthEvent[]>;
  postDayEvent: PostDataStatus<CalendarEvent>;
}

const initialState: InitialState = {
  selectedDayEvents: { type: "REST" },
  selectedMonthEvents: { type: "REST" },
  postDayEvent: { type: "REST" },
};

const eventSlice = createSlice({
  name: "events in current month",
  initialState,
  reducers: {
    setDayEvents(
      state,
      action: PayloadAction<FetchDataStatus<CalendarEvent[]>>
    ) {
      state.selectedDayEvents = action.payload;
    },
    setMonthEvents(
      state,
      action: PayloadAction<FetchDataStatus<MonthEvent[]>>
    ) {
      state.selectedMonthEvents = action.payload;
    },
    getMonthEvents(state) {
      state.selectedMonthEvents = { type: "LOADING" };
    },
    getDayEvents(state) {
      state.selectedDayEvents = { type: "LOADING" };
    },
    postNewEvent(state, action: PayloadAction<CalendarEvent>) {
      state.postDayEvent = { type: "LOADING", payload: action.payload };
    },
  },
});

export const {
  setDayEvents,
  setMonthEvents,
  getDayEvents,
  getMonthEvents,
  postNewEvent,
} = eventSlice.actions;

export default eventSlice.reducer;
