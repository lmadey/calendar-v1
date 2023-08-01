import React from "react";
import styles from "./CreateEventModal.module.scss";
import { useAppSelector } from "../../../../redux/redux-app/hooks";
import { FieldObject, FormSchema } from "../../../../hooks/useCreateForm";
import { CustomSchema } from "../../../../hooks/useSchema";
import { FormCreator } from "../../../organisms/FormCreator/FormCreator";

interface Form extends FormSchema {
  email: string;
  password: string;
}

export const EventForm: React.FC = () => {
  const step = useAppSelector((state) => state.createEvent.step);

  const defaultValues: Form = {
    email: "",
    password: "",
  };

  const schema: CustomSchema<Form> = {
    email: "required",
    password: "required",
  };

  const forms: FieldObject<Form> = {
    email: { type: "INPUT_TEXT", placeholder: "email" },
    password: { type: "INPUT_TEXT", placeholder: "password" },
  };

  if (step.type !== "EVENT_FORM") return null;
  return (
    <div className={styles.wrapper}>
      <FormCreator<Form>
        fields={forms}
        schema={schema}
        defaultValues={defaultValues}
        onSubmit={() => {}}
      />
    </div>
  );
};
