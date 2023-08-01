import React from "react";
import Text from "../Text/Text";
import styles from "./Label.module.scss";

interface Props {
  children: JSX.Element;
  name: string;
  error?: string;
}

export const Label: React.FC<Props> = (props) => {
  const { name, error, children } = props;

  return (
    <label className={styles.label} htmlFor={name}>
      {children}
      {error && (
        <Text textXsmall errorDefault>
          {error}
        </Text>
      )}
    </label>
  );
};
