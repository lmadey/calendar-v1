import { useForm, DefaultValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomSchema, useSchema } from "./useSchema";
import { Input } from "../components/atoms/Input/Input";
import { Option } from "../types/types";

export type FormSchema = { [key: string]: string | number | boolean };

export type FieldType =
  | { type: "INPUT_TEXT"; placeholder: string }
  | { type: "SELECT"; placeholder: string; options: Option[] };

export type FieldObject<T extends FormSchema> = {
  [key in keyof T]: FieldType;
};

interface Params<T extends FormSchema> {
  onSubmit: (data: T) => void;
  defaultValues: DefaultValues<T>;
  schema: CustomSchema<T>;
  fields: { [key in keyof T]: FieldType };
}

export function useCreateForm<T extends FormSchema>(params: Params<T>) {
  const { fields, defaultValues, schema, onSubmit } = params;

  const shemaRules = useSchema(schema);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues,
    resolver: yupResolver(shemaRules),
  });

  console.log(shemaRules);

  const form = (
    <form
      className="globalForm"
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
      <button type="submit">submit</button>
    </form>
  );

  return form;
}
