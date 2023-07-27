import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { useAppSelector } from "../../../redux/redux-app/hooks";

interface Props {
  children: JSX.Element;
}

export const Modal: React.FC<Props> = (props) => {
  const modalState = useAppSelector((state) => state.modal.modalState);
  console.log(modalState);

  if (modalState === "hide") return null;
  return createPortal(
    <div className={styles.outer}>
      <div className={styles.modal}>{props.children}</div>
    </div>,
    document.getElementById("modal-portal") as HTMLDivElement
  );
};
