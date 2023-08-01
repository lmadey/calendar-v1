import React from "react";
import styles from "./Header.module.scss";
import { Button } from "../../atoms/Button/Button";
import { useAppDispatch } from "../../../redux/redux-app/hooks";
import { setCurrentLanguage } from "../../../redux/features/langauges/langauges-slice";
import { languages } from "../../../languages/languages";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLanguage = (prefix: keyof typeof languages) => {
    dispatch(setCurrentLanguage(prefix));
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Button onClick={() => handleLanguage("EN")} variant="ghost">
          eng
        </Button>
        <Button onClick={() => handleLanguage("PL")} variant="ghost">
          pl
        </Button>
      </div>
    </header>
  );
};
