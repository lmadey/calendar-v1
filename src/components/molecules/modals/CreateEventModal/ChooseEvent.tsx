import React, { ChangeEvent } from "react";
import styles from "./CreateEventModal.module.scss";
import { languages } from "../../../../languages/languages";
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
} from "../../../../redux/features/calendarEvents/create-event-slice";

interface EventInput {
  name: CalendarEvent["type"];
  label: string;
}

export const ChooseEvent: React.FC = () => {
  const {
    activity,
    todo,
    meeting,
    event,
    reminder,
    birthday,
    anniversary,
    chooseEventType,
    next,
  } = languages.PL.labels;

  const events: EventInput[] = [
    { name: "ACTIVITY", label: activity },
    { name: "TODO", label: todo },
    { name: "MEETING", label: meeting },
    { name: "EVENT", label: event },
    { name: "REMINDER", label: reminder },
    { name: "BIRTHDAY", label: birthday },
    { name: "ANNIVERSARY", label: anniversary },
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
    dispatch(setNextEventStep({ calendarEventType: currentChoosenEvent }));
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
