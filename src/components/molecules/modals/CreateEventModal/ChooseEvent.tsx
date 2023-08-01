import React, { ChangeEvent } from "react";
import styles from "./CreateEventModal.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/redux-app/hooks";
import { CalendarEvent } from "../../../../types/types";
import { Button } from "../../../atoms/Button/Button";
import { InputRadio } from "../../../atoms/InputRadio/InputRadio";
import Text from "../../../atoms/Text/Text";
import {
  setChoosenEvent,
  setNextEventStep,
} from "../../../../redux/features/calendarEvents/create-event-step-slice";
import { useLanguage } from "../../../../hooks/useLanguage";

interface EventInput {
  name: CalendarEvent["type"];
  label: string;
}

export const ChooseEvent: React.FC = () => {
  const { labels, events: eventLabels } = useLanguage();
  const { chooseEventType, next } = labels;

  const { EVENT, TODO, MEETING, REMINDER, BIRTHDAY, ANNIVERSARY } = eventLabels;

  const events: EventInput[] = [
    { name: "EVENT", label: EVENT },
    { name: "TODO", label: TODO },
    { name: "MEETING", label: MEETING },
    { name: "REMINDER", label: REMINDER },
    { name: "BIRTHDAY", label: BIRTHDAY },
    { name: "ANNIVERSARY", label: ANNIVERSARY },
  ];

  const currentChoosenEvent = useAppSelector(
    (state) => state.createEvent.choosenEventType
  );

  const dispatch = useAppDispatch();
  const currentStep = useAppSelector((state) => state.createEvent.step);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as CalendarEvent["type"];
    dispatch(setChoosenEvent(name));
  };

  const goToNextStep = () => {
    dispatch(setNextEventStep(currentChoosenEvent));
  };

  if (currentStep.type !== "CHOOSE_EVENT") {
    return null;
  }

  return (
    <>
      <Text textSmall>{`${chooseEventType}:`}</Text>
      <div className={styles.inputs}>
        {events.map((event) => (
          <InputRadio
            key={event.name}
            name={event.name}
            label={event.label}
            onChange={handleChange}
            value={`${currentChoosenEvent}`}
          />
        ))}
      </div>
      <Button onClick={goToNextStep} variant="primarySmall">
        {next}
      </Button>
    </>
  );
};
