import React from "react";
import styles from "./Home.module.scss";
import { Calendar } from "../../components/organisms/Calendar/Calendar";

export const Home: React.FC = () => {
  return (
    <main>
      <Calendar />
    </main>
  );
};
