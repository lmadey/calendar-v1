import React from "react";
import styles from "./CalendarCell.module.scss";
import {
  CalendarDay,
  DayDate,
  setSelectedDay,
} from "../../../redux-app/features/calendar/selected-date-slice";
import {
  getDayDateByDate,
  getDayDateByNumbers,
} from "../../../utils/date-calculate";
import { useAppDispatch, useAppSelector } from "../../../redux-app/hooks";
import {
  decrementMonthCounter,
  incrementMonthCounter,
} from "../../../redux-app/features/calendar/calculate-selected-date-slice";
import Text from "../Text/Text";

interface Props {
  day: CalendarDay;
}

export const CalendarCell: React.FC<Props> = (props) => {
  const selectedDay: DayDate | null = useAppSelector(
    (state) => state.slectedDateSlice.selectedDay
  );
  const { date, dateString, type } = props.day;
  const isTodayDate = getDayDateByDate(new Date()).dateString === dateString;
  const isDaySelected = selectedDay?.dateString === dateString;
  const dispatch = useAppDispatch();

  const handleOnClick = (calendarDay: CalendarDay) => {
    const { year, month, day } = calendarDay.date;
    dispatch(setSelectedDay(getDayDateByNumbers(day, month, year)));
    if (calendarDay.type === "PREV") {
      dispatch(decrementMonthCounter());
    } else if (calendarDay.type === "NEXT") {
      dispatch(incrementMonthCounter());
    }
  };

  return (
    <div
      data-is-current-day={isTodayDate}
      data-with-opacity={type !== "CURRENT"}
      data-is-selected-day={isDaySelected}
      className={styles.calendarCell}
      onClick={() => handleOnClick(props.day)}
    >
      <Text textSmall>{date.day}</Text>
      <span className={styles.notify}>
        <Text textXsmall>{2}</Text>
      </span>
    </div>
  );
};
