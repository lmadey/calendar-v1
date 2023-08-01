import React, { ReactNode } from "react";
import styles from "./Button.module.scss";

const classNames = {
  primaryBig: styles.primaryBig,
  primarySmall: styles.primarySmall,
  ghost: styles.ghost,
};

interface Props {
  children: ReactNode;
  variant: keyof typeof classNames;
  onClick?: () => void;
  type?: "submit";
  disabled?: boolean;
  additionalClassName?: string;
}

export const Button: React.FC<Props> = (props) => {
  const { children, variant, disabled, type, additionalClassName, onClick } =
    props;
  return (
    <button
      className={`${classNames[variant]} ${
        additionalClassName ? additionalClassName : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      type={type ? type : "button"}
    >
      {children}
    </button>
  );
};
