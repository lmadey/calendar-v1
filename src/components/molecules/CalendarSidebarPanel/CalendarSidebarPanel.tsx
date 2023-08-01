import React from "react";
import styles from "./CalendarSidebarPanel.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-app/hooks";
import { getDayDateByDate } from "../../../utils/date-calculate";
import Text from "../../atoms/Text/Text";
import { languages } from "../../../languages/languages";
import { CalendarEvent, DayDate, QueriesKeys } from "../../../types/types";
import { CreateEventModal } from "../modals/CreateEventModal/CreateEventModal";
import { openModal } from "../../../redux/features/modal/modal-slice";
import { Button } from "../../atoms/Button/Button";
import { useQuery } from "react-query";
import { endpoints } from "../../../endpoints/endpoints";
import { getData } from "../../../utils/getData";

export const CalendarSidebarPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { weekDays, monthsNames, labels } = languages.PL;
  const { addNewEvent } = labels;
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

  const events = useQuery<CalendarEvent[]>({
    queryKey: [QueriesKeys.DAY_EVENTS, selectedDay.dateString],
    queryFn: () =>
      getData(`${endpoints.eventsByDate}/${selectedDay.dateString}`),
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.dateInfo}>
        <Text textLarge>{year}</Text>
        <Text primaryDefault xSmallBold>{`${day} ${monthsNames[month]}`}</Text>
        <Text textLarge>{weekDays[weekday]}</Text>
      </div>
      <Button variant="primarySmall" onClick={showModal}>
        {addNewEvent}
      </Button>
      <div className={styles.events}></div>
    </div>
  );
};
