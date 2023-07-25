import React from "react";
import styles from "./Text.module.scss";

interface Props {
  children: React.ReactNode | undefined;
  displayLarge?: boolean;
  displayMedium?: boolean;
  displaySmall?: boolean;
  displayLargeBold?: boolean;
  displayMediumBold?: boolean;
  displaySmallBold?: boolean;
  textLarge?: boolean;
  textMedium?: boolean;
  textSmall?: boolean;
  textXsmall?: boolean;
  xSmallBold?: boolean;
  linkLarge?: boolean;
  linkMedium?: boolean;
  linkSmall?: boolean;
  linkXsmall?: boolean;
  mobileTextLarge?: boolean;
  mobileLinkSmall?: boolean;
  mobileLinkXsmall?: boolean;
  primaryDefault?: boolean;
  primaryDark?: boolean;
  errorDefault?: boolean;
  errorDark?: boolean;
  secondaryDefault?: boolean;
  gradientAccent?: boolean;
  placeholder?: boolean;
  black?: boolean;
  white?: boolean;
  titleActive?: boolean;
  center?: boolean;
  opacity?: boolean;
  dontBrakeLine?: boolean;
}

type ObjectWithKey = {
  [key: string]: React.ReactNode | boolean | undefined;
};

const Text: React.FC<Props> = (props) => {
  const currentProps: ObjectWithKey = { ...props };
  const concatClassNames = () => {
    return Object.entries(styles)
      .filter(
        ([key]) =>
          Object.prototype.hasOwnProperty.call(currentProps, key) &&
          currentProps[key]
      )
      .map(([_, value]) => value)
      .join(" ");
  };

  return (
    <p
      style={{
        whiteSpace: props.dontBrakeLine ? "nowrap" : "pre-wrap",
        wordBreak: "break-word",
        textAlign: props.center ? "center" : "left",
      }}
      className={`${styles.text} ${concatClassNames()}`}
    >
      {props.children}
    </p>
  );
};

export default Text;
