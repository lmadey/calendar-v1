import React from "react";
import styles from "./CreateEventModal.module.scss";
import Text from "../../../atoms/Text/Text";
import { languages } from "../../../../languages/languages";

export const CreateEventModal: React.FC = () => {
  const { addNewEvent } = languages.PL.labels;

  return (
    <div className={styles.wrapper}>
      <Text displayLargeBold>{addNewEvent}</Text>
    </div>
  );
};
