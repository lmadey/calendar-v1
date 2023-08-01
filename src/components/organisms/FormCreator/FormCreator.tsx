import styles from "./FormCreator.module.scss";
import { DefaultValues, useForm } from "react-hook-form";
import { Option } from "../../../types/types";
import { CustomSchema, useSchema } from "../../../hooks/useSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../atoms/Input/Input";
import { languages } from "../../../languages/languages";
import { Button } from "../../atoms/Button/Button";

export type FormSchema = { [key: string]: string | number | boolean };

export type FieldType =
  | { type: "INPUT_TEXT"; placeholder: string }
  | { type: "SELECT"; placeholder: string; options: Option[] };

export type FieldObject<T extends FormSchema> = {
  [key in keyof T]: FieldType;
};

interface Props<T extends FormSchema> {
  onSubmit: (data: T) => void;
  defaultValues: DefaultValues<T>;
  schema: CustomSchema<T>;
  fields: { [key in keyof T]: FieldType };
}

export const FormCreator = <T extends FormSchema>(props: Props<T>) => {
  const { fields, defaultValues, schema, onSubmit } = props;
  const shemaRules = useSchema(schema);
  const { submit } = languages.PL.labels;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues,
    resolver: yupResolver(shemaRules),
  });

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit((data) => {
        const formData = data as T;
        onSubmit(formData);
      })}
    >
      {Object.keys(defaultValues).map((el) => (
        <Input
          register={register(el)}
          placeholder={fields[el].placeholder}
          error={errors[el]?.message}
        />
      ))}
      <Button type="submit" variant="primarySmall">
        {submit}
      </Button>
    </form>
  );
};
