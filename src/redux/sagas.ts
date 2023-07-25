import { watchMonthCounter } from "./features/calculateDate/calculate-date-saga";
import { watchGetEvents } from "./features/calendarEvents/event-saga";

function* rootSaga() {
  //   yield watchMonthCounter();
  yield watchGetEvents();
}

export default rootSaga;
