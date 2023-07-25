import React, { useEffect } from "react";
import styles from "./CalendarMonth.module.scss";
import { languages } from "../../../languages/languages";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-app/hooks";
import { selectSpecyficDate } from "../../../redux/features/calculateDate/calculate-date-slice";
import { setSelectedMonth } from "../../../redux/features/selectedDate/selected-date-slice";
import { CalendarCell } from "../../atoms/CalendarCell/CalendarCell";
import { CalendarWeekdayName } from "../../atoms/CalendarWeekdayName/CalendarWeekdayName";

export const CalendarMonth: React.FC = () => {
  const { shortWeekDays } = languages.PL;
  const month = useAppSelector((state) => state.slectedDate.selectedMonth);

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
        <CalendarWeekdayName weekname={day} key={day} />
      ))}
      {month.map((day) => (
        <CalendarCell day={day} key={day.dateString} />
      ))}
    </div>
  );
};
