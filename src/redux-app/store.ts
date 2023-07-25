import { configureStore } from "@reduxjs/toolkit";
import calculateSlectedDateSlice from "./features/calendar/calculate-selected-date-slice";
import slectedDateSlice from "./features/calendar/selected-date-slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    calculateSlectedDateSlice,
    slectedDateSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
