import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

const classNames = {
  primary: styles.primary,
};

interface Props {
  children: ReactNode;
  variant: keyof typeof classNames;
}

export const Button: React.FC<Props> = () => {
  return <div></div>;
};
