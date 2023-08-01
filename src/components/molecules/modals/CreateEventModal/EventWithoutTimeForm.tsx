import React from "react";
import styles from "./CreateEventModal.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/redux-app/hooks";
import { CustomSchema } from "../../../../hooks/useSchema";
import {
  FieldObject,
  FormCreator,
  FormSchema,
} from "../../../organisms/FormCreator/FormCreator";
import {
  CalendarEventWithoutTime,
  DayDate,
  QueriesKeys,
} from "../../../../types/types";
import { backToChooseEvent } from "../../../../redux/features/calendarEvents/create-event-step-slice";
import Text from "../../../atoms/Text/Text";
import { useMutation, useQueryClient } from "react-query";
import { eventRepository } from "../../../../repositories/event.repository";
import { closeModal } from "../../../../redux/features/modal/modal-slice";
import { useLanguage } from "../../../../hooks/useLanguage";

interface Form extends FormSchema {
  label: string;
  date: DayDate;
  type: CalendarEventWithoutTime["type"];
}

export const EventWithoutTimeForm: React.FC = () => {
  const { events, labels } = useLanguage();
  const { addTitle, back, add } = labels;
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.createEvent.step);
  const selectedDay = useAppSelector((state) => state.slectedDate.selectedDay);
  const choosenEventType = useAppSelector(
    (state) => state.createEvent.choosenEventType
  );
  const defaultValues: Form = {
    label: "",
    date: selectedDay,
    type: choosenEventType as CalendarEventWithoutTime["type"],
  };

  const schema: CustomSchema<Form> = {
    label: "required",
    date: "noValidation",
    type: "noValidation",
  };

  const labelForm: FieldObject<Form> = {
    label: { type: "INPUT_TEXT", placeholder: addTitle },
    date: { type: "NO_FIELD" },
    type: { type: "NO_FIELD" },
  };

  const handleBackToChooseEvent = () => {
    dispatch(backToChooseEvent());
  };

  const queryClient = useQueryClient();

  const newEvent = useMutation({
    mutationFn: (data: Form) => eventRepository.createNewEventWithoutTime(data),
    onSuccess: () => {
      queryClient.invalidateQueries([
        QueriesKeys.DAY_EVENTS,
        selectedDay.dateString,
      ]);
      dispatch(closeModal());
    },
  });

  if (step.type !== "EVENT_FORM_WITHOUT_TIME") return null;
  return (
    <div className={styles.formWrapper}>
      <Text textSmall>{`${add} ${events[choosenEventType]}`}</Text>
      <FormCreator<Form>
        fields={labelForm}
        schema={schema}
        defaultValues={defaultValues}
        cancelButton={{
          text: back,
          onClick: handleBackToChooseEvent,
        }}
        onSubmit={newEvent.mutate}
      />
    </div>
  );
};
