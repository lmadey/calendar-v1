import { put, takeLatest } from "redux-saga/effects";
import { getApiData, postApiData } from "../../../data/api";
import { CalendarEvent, postNewEvent } from "./event-slice";
import { PayloadAction } from "@reduxjs/toolkit";

// function* fetchEvents() {
//   const data: CalendarEvent[] = yield getApiData<CalendarEvent[]>("/events");
//   yield put(setEvents({ type: "SUCCESS", data: data }));
// }

function* postEvent(action: PayloadAction<CalendarEvent>) {
  yield postApiData("/events", action.payload);
}

export function* watchGetEvents() {
  yield takeLatest(postNewEvent.type, postEvent);
}
