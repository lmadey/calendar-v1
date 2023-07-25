import { watchMonthCounter } from "./calendar-saga";

function* rootSaga() {
  yield watchMonthCounter();
}

export default rootSaga;
