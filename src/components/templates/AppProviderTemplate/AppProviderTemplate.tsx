import React from "react";
import { Modal } from "../../molecules/modals/Modal/Modal";

interface Props {
  children: JSX.Element;
}

export const AppProviderTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Modal />
      {children}
    </>
  );
};
