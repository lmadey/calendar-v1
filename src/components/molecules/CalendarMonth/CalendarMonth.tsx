import React from "react";
import styles from "./CalendarMonth.module.scss";
import { languages } from "../../../languages/languages";
import { useAppSelector } from "../../../redux/redux-app/hooks";
import { CalendarCell } from "../../atoms/CalendarCell/CalendarCell";
import { CalendarWeekdayName } from "../../atoms/CalendarWeekdayName/CalendarWeekdayName";
import { useLanguage } from "../../../hooks/useLanguage";

export const CalendarMonth: React.FC = () => {
  const { shortWeekDays } = useLanguage();
  const month = useAppSelector((state) => state.slectedDate.selectedMonth);

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
