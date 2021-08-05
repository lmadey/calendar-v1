import { combineReducers } from "redux";
import { isEventReducer } from "./isEventReducer";
import { eventElementsReducer } from "./eventElementsReducer";
import { eventNameReducer } from "./eventNameReducer";
import { eventColorReducer } from "./eventColorReducer";
import { setEventCardsReducer } from "./setEventCardsRducer";

export const rootReducer = combineReducers({
     isEvent: isEventReducer,
     setEvent: eventElementsReducer,
     eventName: eventNameReducer,
     eventColor: eventColorReducer,
     setEventCards: setEventCardsReducer,
})