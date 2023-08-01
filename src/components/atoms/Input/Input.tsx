import React from "react";
import styles from "./Input.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "../Label/Label";
interface Props {
  register: UseFormRegisterReturn;
  placeholder: string;
  disabled?: boolean;
  error?: string;
}

export const Input: React.FC<Props> = (props) => {
  const { placeholder, register, disabled, error } = props;

  return (
    <Label name={register.name} error={error}>
      <input
        {...props}
        {...register}
        className={styles.input}
        placeholder={placeholder}
        disabled={disabled}
        data-is-error={error ? true : false}
      />
    </Label>
  );
};
