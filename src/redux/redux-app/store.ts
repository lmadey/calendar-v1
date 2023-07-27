import { configureStore } from "@reduxjs/toolkit";
import calculateDateReducer from "../features/calculateDate/calculate-date-slice";
import slectedDateReducer from "../features/selectedDate/selected-date-slice";
import calendarEventsReducer from "../features/calendarEvents/event-slice";
import modalReducer from "../features/modal/modal-slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    calculateDate: calculateDateReducer,
    slectedDate: slectedDateReducer,
    calendarEvents: calendarEventsReducer,
    modal: modalReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
