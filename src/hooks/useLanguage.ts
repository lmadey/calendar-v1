import { languages } from "../languages/languages";
import { useAppSelector } from "../redux/redux-app/hooks";

export const useLanguage = () => {
  const languagePrefix = useAppSelector(
    (state) => state.languages.currentLanguage
  );
  const currentLanguage = languages[languagePrefix];
  return currentLanguage;
};
