export type FetchDataStatus<T> =
  | { type: "REST" }
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: T }
  | { type: "ERROR"; error: string };

export type PostDataStatus<T> =
  | { type: "REST" }
  | { type: "LOADING"; payload: T }
  | { type: "SUCCESS"; data: T }
  | { type: "ERROR"; error: string };

export interface DayDate {
  date: SelectedDay;
  dateString: string;
}

export interface SelectedDay {
  year: number;
  month: number;
  day: number;
  weekday: number;
}

export type CalendarEvent =
  | { type: "BIRTHDAY"; label: string; date: DayDate }
  | { type: "ANNIVERSARY"; label: string; date: DayDate }
  | { type: "REMINDER"; label: string; date: DayDate }
  | { type: "TODO"; label: string; date: DayDate }
  | { type: "ACTIVITY"; label: string; date: DayDate; time: number }
  | {
      type: "EVENT";
      label: string;
      date: DayDate;
      time: {
        hour: number;
        minute: number;
      };
    }
  | {
      type: "MEETING";
      label: string;
      date: DayDate;
      time: {
        hour: number;
        minute: number;
      };
    };

export interface Option {
  value: string | number;
  label: string;
}
