import React from "react";
import styles from "./InputRadio.module.scss";
import {
  UseFormRegisterReturn,
  Controller,
  Control,
  FieldValues,
  useController,
  UseControllerProps,
  Path,
} from "react-hook-form";
interface Props<T extends { [key: string]: any }> {
  label: string;
  register: UseFormRegisterReturn<keyof typeof T>;
  control: Control<T>;
}

export const InputRadio = <T extends { [key: string]: any }>(
  props: Props<T>
) => {
  const { label, register, control } = props;
  const {
    field: { value, onasdf },
  } = useController<UseControllerProps<Path<T>>>({
    name: register.name,
    control: control,
  });
  return (
    <Controller
      name={register.name}
      control={control}
      render={({ field }) => (
        <div className={styles.customRadio}>
          <input {...field} type="radio" checked={field.value === value} />
          <label htmlFor={register.name}>{label}</label>
        </div>
      )}
    />
  );
};
