import React, { useEffect } from "react";
import styles from "./CalendarSidebarPanel.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-app/hooks";
import { DayDate } from "../../../redux/features/selectedDate/selected-date-slice";
import {
  getDayDateByDate,
  getDayDateByNumbers,
} from "../../../utils/date-calculate";
import Text from "../../atoms/Text/Text";
import { languages } from "../../../languages/languages";
import {
  postNewEvent,
  CalendarEvent,
} from "../../../redux/features/calendarEvents/event-slice";
export const CalendarSidebarPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { weekDays, monthsNames } = languages.PL;
  const selectedDay: DayDate | null = useAppSelector(
    (state) => state.slectedDate.selectedDay
  );

  const todayDate = getDayDateByDate(new Date());

  const { day, month, year, weekday } = selectedDay
    ? selectedDay.date
    : todayDate.date;

  const handleAddTodo = () => {
    const event: CalendarEvent = {
      date: getDayDateByNumbers(year, month, day),
      label: `todo ${Math.random()}`,
      type: "TODO",
    };
    dispatch(postNewEvent(event));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dateInfo}>
        <Text textLarge>{year}</Text>
        <Text primaryDefault xSmallBold>{`${day} ${monthsNames[month]}`}</Text>
        <Text textLarge>{weekDays[weekday]}</Text>
      </div>
      <button onClick={handleAddTodo}>add todo</button>
    </div>
  );
};
