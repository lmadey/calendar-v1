import { SelectEffect, select } from "redux-saga/effects";
import { RootState } from "../redux-app/store";

export function selectState<T>(selector: (s: RootState) => T): SelectEffect {
  return select(selector);
}
