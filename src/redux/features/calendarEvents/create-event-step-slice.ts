import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  CalendarEventWithTime,
  CalendarEventWithoutTime,
} from "../../../types/types";

export type FormStep =
  | { type: "EVENT_FORM_WITH_TIME"; event: CalendarEventWithTime["type"] }
  | {
      type: "EVENT_FORM_WITHOUT_TIME";
      event: CalendarEventWithoutTime["type"];
    };

type Step = { type: "CHOOSE_EVENT" } | FormStep;

type ChoosenEvent =
  | CalendarEventWithTime["type"]
  | CalendarEventWithoutTime["type"];

interface InitialState {
  step: Step;
  choosenEventType: ChoosenEvent;
}

const initialState: InitialState = {
  step: { type: "CHOOSE_EVENT" },
  choosenEventType: "EVENT",
};

const getStepByEvent = (event: FormStep["event"]): Step => {
  switch (event) {
    case "ANNIVERSARY":
      return {
        event: event,
        type: "EVENT_FORM_WITHOUT_TIME",
      };
    case "BIRTHDAY":
      return {
        event: event,
        type: "EVENT_FORM_WITHOUT_TIME",
      };
    case "REMINDER":
      return {
        event: event,
        type: "EVENT_FORM_WITHOUT_TIME",
      };
    case "TODO":
      return {
        event: event,
        type: "EVENT_FORM_WITHOUT_TIME",
      };
    case "EVENT":
      return {
        event: event,
        type: "EVENT_FORM_WITH_TIME",
      };
    case "MEETING":
      return {
        event: event,
        type: "EVENT_FORM_WITH_TIME",
      };
  }
};

const createEventSlice = createSlice({
  name: "create new event",
  initialState,
  reducers: {
    setNextEventStep(state, action: PayloadAction<FormStep["event"]>) {
      state.step = getStepByEvent(action.payload);
    },
    backToChooseEvent(state) {
      state.step = { type: "CHOOSE_EVENT" };
    },
    setChoosenEvent(state, action: PayloadAction<ChoosenEvent>) {
      state.choosenEventType = action.payload;
    },
  },
});

export const { backToChooseEvent, setNextEventStep, setChoosenEvent } =
  createEventSlice.actions;
export default createEventSlice.reducer;
