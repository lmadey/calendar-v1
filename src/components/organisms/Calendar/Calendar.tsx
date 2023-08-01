import React, { useEffect } from "react";
import styles from "./Calendar.module.scss";
import { CalendarSidebarPanel } from "../../molecules/CalendarSidebarPanel/CalendarSidebarPanel";
import { CalendarMonth } from "../../molecules/CalendarMonth/CalendarMonth";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-app/hooks";
import { selectSpecyficDate } from "../../../redux/features/calculateDate/calculate-date-slice";
import {
  setSelectedDay,
  setSelectedMonth,
} from "../../../redux/features/selectedDate/selected-date-slice";
import { getDayDateByDate } from "../../../utils/date-calculate";

export const Calendar: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    dispatch(selectSpecyficDate({ year, month }));
    dispatch(setSelectedMonth({ year, month, monthCounter: 0 }));
    dispatch(setSelectedDay(getDayDateByDate(date)));
  }, [dispatch]);

  const selectedDate = useAppSelector((state) => state.slectedDate.selectedDay);

  return (
    <div className={styles.wrapper}>
      {selectedDate.date.year !== 0 ? (
        <>
          <CalendarMonth />
          <CalendarSidebarPanel />
        </>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};
