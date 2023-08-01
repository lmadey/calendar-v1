import { put, takeLatest } from "redux-saga/effects";
import { backToChooseEvent } from "../calendarEvents/create-event-step-slice";
import { closeModal } from "./modal-slice";

function* resetEventStep() {
  yield put(backToChooseEvent());
}

export function* watchCloseModal() {
  yield takeLatest(closeModal.type, resetEventStep);
}
