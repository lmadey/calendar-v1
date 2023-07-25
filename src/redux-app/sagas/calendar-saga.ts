import { takeEvery, put, select } from "redux-saga/effects";
import { setSelectedMonth } from "../features/calendar/selected-date-slice";
import {
  decrementMonthCounter,
  incrementMonthCounter,
} from "../features/calendar/calculate-selected-date-slice";
import { RootState } from "../store";

interface SelectedDate {
  year: number;
  month: number;
}

function* updateMonth() {
  const date: SelectedDate = yield select(
    (state: RootState) => state.calculateSlectedDateSlice.selectedDate
  );
  const monthCounter: number = yield select(
    (state: RootState) => state.calculateSlectedDateSlice.monthCounter
  );
  const { year, month } = date;
  yield put(setSelectedMonth({ year, month, monthCounter }));
}

export function* watchMonthCounter() {
  yield takeEvery(incrementMonthCounter.type, updateMonth);
  yield takeEvery(decrementMonthCounter.type, updateMonth);
}
