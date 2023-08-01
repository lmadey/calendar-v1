import { endpoints } from "../endpoints/endpoints";
import {
  CalendarEventWithTime,
  CalendarEventWithoutTime,
} from "../types/types";

async function createNewEventWithoutTime(body: CalendarEventWithoutTime) {
  const response = await fetch(endpoints.events, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

async function createNewEventWithTime(body: CalendarEventWithTime) {
  const response = await fetch(endpoints.events, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

export const eventRepository = {
  createNewEventWithoutTime,
  createNewEventWithTime,
};
