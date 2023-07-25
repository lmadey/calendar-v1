import React from "react";
import styles from "./CalendarSidebarPanel.module.scss";
import { useAppSelector } from "../../../redux-app/hooks";
import { DayDate } from "../../../redux-app/features/calendar/selected-date-slice";
import { getDayDateByDate } from "../../../utils/date-calculate";
import Text from "../../atoms/Text/Text";
import { languages } from "../../../languages/languages";
export const CalendarSidebarPanel: React.FC = () => {
  const { weekDays, monthsNames } = languages.PL;
  const selectedDay: DayDate | null = useAppSelector(
    (state) => state.slectedDateSlice.selectedDay
  );

  const todayDate = getDayDateByDate(new Date());

  const { day, month, year, weekday } = selectedDay
    ? selectedDay.date
    : todayDate.date;

  return (
    <div className={styles.wrapper}>
      <div className={styles.dateInfo}>
        <Text textLarge>{year}</Text>
        <Text primaryDefault xSmallBold>{`${day} ${monthsNames[month]}`}</Text>
        <Text textLarge>{weekDays[weekday]}</Text>
      </div>
    </div>
  );
};
