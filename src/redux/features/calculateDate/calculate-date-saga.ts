import { takeEvery, put, select } from "redux-saga/effects";
import { setSelectedMonth } from "../selectedDate/selected-date-slice";
import {
  decrementMonthCounter,
  incrementMonthCounter,
} from "./calculate-date-slice";
import { RootState } from "../../redux-app/store";

interface SelectedDate {
  year: number;
  month: number;
}

function* updateMonth() {
  const date: SelectedDate = yield select(
    (state: RootState) => state.calculateDate.selectedDate
  );
  const monthCounter: number = yield select(
    (state: RootState) => state.calculateDate.monthCounter
  );
  const { year, month } = date;
  yield put(setSelectedMonth({ year, month, monthCounter }));
}

export function* watchMonthCounter() {
  yield takeEvery(incrementMonthCounter.type, updateMonth);
  yield takeEvery(decrementMonthCounter.type, updateMonth);
}
