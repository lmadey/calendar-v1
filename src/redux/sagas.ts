import { all } from "redux-saga/effects";
import { watchMonthCounter } from "./features/calculateDate/calculate-date-saga";
import { watchCloseModal } from "./features/modal/modal-saga";

function* rootSaga() {
  yield all([watchCloseModal(), watchMonthCounter()]);
}

export default rootSaga;
