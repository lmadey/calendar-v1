import React from "react";
import styles from "./CreateEventModal.module.scss";
import Text from "../../../atoms/Text/Text";
import { languages } from "../../../../languages/languages";
import { ChooseEvent } from "./ChooseEvent";
import { EventWithoutTimeForm } from "./EventWithoutTimeForm";
import { EventWithTimeForm } from "./EventWithTimeForm";
import { useLanguage } from "../../../../hooks/useLanguage";

export const CreateEventModal: React.FC = () => {
  const { addNewEvent } = useLanguage().labels;

  return (
    <div className={styles.wrapper}>
      <Text displaySmallBold>{addNewEvent}</Text>
      <>
        <ChooseEvent />
        <EventWithoutTimeForm />
        <EventWithTimeForm />
      </>
    </div>
  );
};
