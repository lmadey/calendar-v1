import {
  CalendarDay,
  DayDate,
  MonthType,
} from "../redux/features/selectedDate/selected-date-slice";

export const getDayDateByDate = (date: Date): DayDate => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const weekday = date.getDay();
  return {
    date: {
      day,
      month,
      year,
      weekday,
    },
    dateString: `${day}-${month}-${year}`,
  };
};

export const getDayDateByNumbers = (
  day: number,
  month: number,
  year: number
): DayDate => {
  const weekday = new Date(year, month, day).getDay();
  return {
    date: {
      day,
      month,
      year,
      weekday,
    },
    dateString: `${day}-${month}-${year}`,
  };
};

export const getDaysOfMonth = (
  year: number,
  month: number,
  monthType: MonthType
): CalendarDay[] => {
  const days = new Date(year, month + 1, 0).getDate();
  const daysInMonth: CalendarDay[] = [];
  const date = new Date(year, month, 1);
  for (let i = 0; i < days; i++) {
    daysInMonth.push({
      type: monthType,
      dateString: `${i + 1}-${date.getMonth()}-${date.getFullYear()}`,
      date: {
        day: i + 1,
        month: date.getMonth(),
        year: date.getFullYear(),
        weekday: date.getDay() + 1,
      },
    });
    date.setDate(date.getDate() + 1);
  }
  return daysInMonth;
};

const getLastDayOfMonth = (year: number, month: number): number => {
  const weekDay = new Date(year, month, 0).getDay();
  return weekDay;
};

const getFirstDayOfMonth = (year: number, month: number): number => {
  const weekDay = new Date(year, month, 0).getDay();
  return weekDay;
};

const getLastDaysOfLastMonth = (
  days: CalendarDay[],
  fistWeekdayOfCurrentMonth: number
): CalendarDay[] => {
  const daysOfLastMonth: CalendarDay[] = days.splice(
    days.length - fistWeekdayOfCurrentMonth
  );

  return daysOfLastMonth;
};

const getFirstDaysOfNextMonth = (
  days: CalendarDay[],
  lastWeekdayOfCurrentMonth: number
): CalendarDay[] => {
  const daysOfNextMonth: CalendarDay[] = days.splice(
    0,
    7 - lastWeekdayOfCurrentMonth
  );

  return daysOfNextMonth;
};

export const getMonth = (
  year: number,
  month: number,
  monthCounter: number
): CalendarDay[] => {
  const monthWithCounter = month + monthCounter;
  const prevMonthDays: CalendarDay[] = getDaysOfMonth(
    year,
    monthWithCounter - 1,
    "PREV"
  );
  const currentDays: CalendarDay[] = getDaysOfMonth(
    year,
    monthWithCounter,
    "CURRENT"
  );
  const nextMonthDays: CalendarDay[] = getDaysOfMonth(
    year,
    monthWithCounter + 1,
    "NEXT"
  );

  const firstWeekdayOfCurrentMonth: number = getFirstDayOfMonth(
    year,
    monthWithCounter
  );
  const lastWeekdayOfCurrentMonth: number = getLastDayOfMonth(
    year,
    monthWithCounter + 1
  );
  const lastDaysOfLastMont: CalendarDay[] = getLastDaysOfLastMonth(
    prevMonthDays,
    firstWeekdayOfCurrentMonth
  );
  const firstDaysOfNextMonth: CalendarDay[] = getFirstDaysOfNextMonth(
    nextMonthDays,
    lastWeekdayOfCurrentMonth
  );

  return [...lastDaysOfLastMont, ...currentDays, ...firstDaysOfNextMonth];
};
