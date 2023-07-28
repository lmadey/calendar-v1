import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CalendarEvent } from "../../../types/types";

type Step =
  | { type: "CHOOSE_EVENT" }
  | { type: "EVENT_FORM"; event: CalendarEvent };

interface InitialState {
  step: Step;
}

const initialState: InitialState = {
  step: { type: "CHOOSE_EVENT" },
};

const createEventSlice = createSlice({
  name: "create new event",
  initialState,
  reducers: {
    setCreateEventStep(state, action: PayloadAction<Step>) {
      state.step = action.payload;
    },
  },
});

export const { setCreateEventStep } = createEventSlice.actions;
export default createEventSlice.reducer;
