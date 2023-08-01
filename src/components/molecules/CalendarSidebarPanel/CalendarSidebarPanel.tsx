import React from "react";
import styles from "./CalendarSidebarPanel.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-app/hooks";
import { getDayDateByDate } from "../../../utils/date-calculate";
import Text from "../../atoms/Text/Text";
import { languages } from "../../../languages/languages";
import { DayDate } from "../../../types/types";
import { CreateEventModal } from "../modals/CreateEventModal/CreateEventModal";
import { openModal } from "../../../redux/features/modal/modal-slice";

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

  const showModal = () => {
    dispatch(openModal({ component: <CreateEventModal /> }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dateInfo}>
        <Text textLarge>{year}</Text>
        <Text primaryDefault xSmallBold>{`${day} ${monthsNames[month]}`}</Text>
        <Text textLarge>{weekDays[weekday]}</Text>
      </div>
      <button onClick={showModal}>add todo</button>
    </div>
  );
};
