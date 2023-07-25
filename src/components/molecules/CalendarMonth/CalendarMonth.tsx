import React, { useEffect } from "react";
import styles from "./CalendarMonth.module.scss";
import { languages } from "../../../languages/languages";
import { useAppDispatch, useAppSelector } from "../../../redux-app/hooks";
import { selectSpecyficDate } from "../../../redux-app/features/calendar/calculate-selected-date-slice";
import { setSelectedMonth } from "../../../redux-app/features/calendar/selected-date-slice";
import { CalendarCell } from "../../atoms/CalendarCell/CalendarCell";

export const CalendarMonth: React.FC = () => {
  const { shortWeekDays } = languages.PL;
  const month = useAppSelector((state) => state.slectedDateSlice.selectedMonth);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    dispatch(selectSpecyficDate({ year, month }));
    dispatch(setSelectedMonth({ year, month, monthCounter: 0 }));
  }, [dispatch]);

  return (
    <div className={styles.calendarWrapper}>
      {shortWeekDays.map((day) => (
        <div key={day}>{day}</div>
      ))}
      {month.map((day) => (
        <CalendarCell day={day} key={day.dateString} />
      ))}
    </div>
  );
};