import React from "react";
import styles from "./HomeTemplate.module.scss";
import { Calendar } from "../../organisms/Calendar/Calendar";

export const HomeTemplate: React.FC = () => {
  return (
    <main className={styles.main}>
      <Calendar />
    </main>
  );
};
