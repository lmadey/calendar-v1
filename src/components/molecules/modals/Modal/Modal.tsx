import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux/redux-app/hooks";
import { Button } from "../../../atoms/Button/Button";
import { icons } from "../../../../assets/icons";
import { closeModal } from "../../../../redux/features/modal/modal-slice";

export const Modal: React.FC = () => {
  const modalComponent = useAppSelector((state) => state.modal.modalComponent);
  const dispatch = useAppDispatch();
  if (modalComponent === null) return null;
  return createPortal(
    <div className={styles.outer}>
      <div className={styles.modal}>
        {modalComponent}
        <Button
          onClick={() => dispatch(closeModal())}
          variant="ghost"
          additionalClassName={styles.exit}
        >
          {icons.exit}
        </Button>
      </div>
    </div>,
    document.getElementById("modal-portal") as HTMLDivElement
  );
};
