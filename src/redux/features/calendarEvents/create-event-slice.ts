import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CalendarEvent } from "../../../types/types";

type Step =
  | { type: "CHOOSE_EVENT" }
  | { type: "EVENT_FORM"; event: CalendarEvent["type"] };

interface InitialState {
  step: Step;
  choosenEventType: CalendarEvent["type"];
}

const initialState: InitialState = {
  step: { type: "CHOOSE_EVENT" },
  choosenEventType: "ACTIVITY",
};

const createEventSlice = createSlice({
  name: "create new event",
  initialState,
  reducers: {
    setNextEventStep(
      state,
      action: PayloadAction<{ calendarEventType: CalendarEvent["type"] }>
    ) {
      state.step = {
        type: "EVENT_FORM",
        event: action.payload.calendarEventType,
      };
    },
    backToChooseEvent(state) {
      state.step = { type: "CHOOSE_EVENT" };
    },
    setChoosenEvent(state, action: PayloadAction<CalendarEvent["type"]>) {
      state.choosenEventType = action.payload;
    },
  },
});

export const { backToChooseEvent, setNextEventStep, setChoosenEvent } =
  createEventSlice.actions;
export default createEventSlice.reducer;
