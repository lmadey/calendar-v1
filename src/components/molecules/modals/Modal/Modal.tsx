import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { useAppSelector } from "../../../../redux/redux-app/hooks";

export const Modal: React.FC = () => {
  const modalComponent = useAppSelector((state) => state.modal.modalComponent);

  if (modalComponent === null) return null;
  return createPortal(
    <div className={styles.outer}>
      <div className={styles.modal}>{modalComponent}</div>
    </div>,
    document.getElementById("modal-portal") as HTMLDivElement
  );
};
