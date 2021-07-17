import { combineReducers } from "redux";
import { isEventReducer } from "./isEventReducer";
import { eventElementsReducer } from "./eventElementsReducer"
import { eventNameReducer } from "./eventNameReducer"

export const rootReducer = combineReducers({
     isEvent: isEventReducer,
     setEvent: eventElementsReducer,
     eventName: eventNameReducer,
})