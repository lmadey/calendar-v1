import React, { ChangeEvent } from "react";
import styles from "./InputRadio.module.scss";
interface Props {
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const InputRadio: React.FC<Props> = (props) => {
  const { label, name, value, onChange } = props;

  return (
    <div data-is-checked={value === name} className={styles.customRadio}>
      <input
        value={value}
        className={styles.input}
        onChange={(e) => onChange(e)}
        checked={name === value}
        name={name}
        type="radio"
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};
