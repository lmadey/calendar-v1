import React from "react";
import { AppProviderTemplate } from "../../templates/AppProviderTemplate/AppProviderTemplate";
import { HomeTemplate } from "../../templates/HomeTemplate/HomeTemplate";

export const HomePage: React.FC = () => {
  return (
    <AppProviderTemplate>
      <HomeTemplate />
    </AppProviderTemplate>
  );
};
