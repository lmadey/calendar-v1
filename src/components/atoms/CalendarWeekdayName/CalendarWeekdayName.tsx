import React from "react";
import styles from "./CalendarWeekdayName.module.scss";
import Text from "../Text/Text";

interface Props {
  weekname: string;
}

export const CalendarWeekdayName: React.FC<Props> = ({ weekname }) => {
  return (
    <div className={styles.wrapper}>
      <Text>{weekname}</Text>
    </div>
  );
};
