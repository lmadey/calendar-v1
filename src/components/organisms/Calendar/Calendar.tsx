import React from "react";
import styles from "./Calendar.module.scss";
import { CalendarSidebarPanel } from "../../molecules/CalendarSidebarPanel/CalendarSidebarPanel";
import { CalendarMonth } from "../../molecules/CalendarMonth/CalendarMonth";

export const Calendar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <CalendarMonth />
      <CalendarSidebarPanel />
    </div>
  );
};
