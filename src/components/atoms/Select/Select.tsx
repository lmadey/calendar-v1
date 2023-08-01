import React from "react";
import styles from "./Select.module.scss";
import ReactSelect from "react-select";
import { Option } from "../../../types/types";
import { Label } from "../Label/Label";
import { UseFormRegisterReturn, Control, useController } from "react-hook-form";

interface Props {
  options: Option[];
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  control: Control;
  error?: string;
}

export const Select: React.FC<Props> = (props) => {
  const { options, control, placeholder, register, error } = props;
  const {
    field: { onChange },
  } = useController({ name: register.name, control });
  return (
    <Label name="" error={error}>
      <ReactSelect
        {...register}
        placeholder={placeholder}
        options={options}
        onChange={(e) => onChange(e?.label)}
        styles={styles}
        classNames={{
          menu: () => `${styles.selectMenu}`,
          control: (props) =>
            `${styles.selectControl} ${props.isFocused ? styles.focused : ""} ${
              error ? styles.error : ""
            } `,
          option: (props) =>
            `${styles.selectOption} ${
              props.isFocused ? styles.optionFocuesd : ""
            } ${props.isSelected ? styles.optionSelected : ""}`,
          placeholder: () => `${error ? styles.placeholderError : ""}`,
        }}
      />
    </Label>
  );
};
