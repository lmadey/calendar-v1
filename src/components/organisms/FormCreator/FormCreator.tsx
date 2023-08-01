import styles from "./FormCreator.module.scss";
import { DefaultValues, useForm } from "react-hook-form";
import { Option } from "../../../types/types";
import { CustomSchema, useSchema } from "../../../hooks/useSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../atoms/Input/Input";
import { Button } from "../../atoms/Button/Button";
import { Select } from "../../atoms/Select/Select";
import { useLanguage } from "../../../hooks/useLanguage";

export type FormSchema = { [key: string]: string | number | boolean | object };

export type FieldType =
  | { type: "INPUT_TEXT"; placeholder: string }
  | { type: "SELECT"; placeholder: string; options: Option[] }
  | { type: "INPUT_TIME" }
  | { type: "NO_FIELD" };

export type FieldObject<T extends FormSchema> = {
  [key in keyof T]: FieldType;
};

interface Props<T extends FormSchema> {
  onSubmit: (data: T) => void;
  defaultValues: DefaultValues<T>;
  schema: CustomSchema<T>;
  fields: { [key in keyof T]: FieldType };
  cancelButton?: {
    text: string;
    onClick: () => void;
  };
}

export const FormCreator = <T extends FormSchema>(props: Props<T>) => {
  const { fields, defaultValues, schema, cancelButton, onSubmit } = props;
  const shemaRules = useSchema(schema);
  const { submit } = useLanguage().labels;
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm({
    mode: "onTouched",
    defaultValues,
    resolver: yupResolver(shemaRules),
  });

  const getField = (singleField: FieldType, key: string) => {
    switch (singleField.type) {
      case "INPUT_TEXT":
        return (
          <Input
            register={register(key)}
            placeholder={singleField.placeholder}
            error={errors[key]?.message}
          />
        );
      case "SELECT":
        return (
          <Select
            placeholder={singleField.placeholder}
            control={control}
            options={singleField.options}
            error={errors[key]?.message}
            register={register(key)}
          />
        );
      case "INPUT_TIME":
        return <input type="time" />;
      case "NO_FIELD":
        return null;
      default:
        return null;
    }
  };

  const fieldsToRender = Object.keys(defaultValues).map((defaultValueKey) =>
    getField(fields[defaultValueKey], defaultValueKey)
  );

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => {
        const formData = data as T;
        onSubmit(formData);
      })}
    >
      {fieldsToRender}
      <div className={styles.buttons}>
        {cancelButton && (
          <Button onClick={cancelButton.onClick} variant="secondarySmall">
            {cancelButton.text}
          </Button>
        )}
        <Button type="submit" variant="primarySmall">
          {submit}
        </Button>
      </div>
    </form>
  );
};
