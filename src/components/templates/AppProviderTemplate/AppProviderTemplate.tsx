import React from "react";
import { Modal } from "../../molecules/modals/Modal/Modal";
import { Header } from "../../organisms/Header/Header";

interface Props {
  children: JSX.Element;
}

export const AppProviderTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Modal />
      <Header />
      {children}
    </>
  );
};
