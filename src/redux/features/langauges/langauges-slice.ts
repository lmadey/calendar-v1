import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { languages } from "./../../../languages/languages";

interface InitialState {
  currentLanguage: keyof typeof languages;
}

const initialState: InitialState = {
  currentLanguage: "PL",
};

const languagesSlice = createSlice({
  name: "handle current langage",
  initialState,
  reducers: {
    setCurrentLanguage(state, action: PayloadAction<keyof typeof languages>) {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setCurrentLanguage } = languagesSlice.actions;
export default languagesSlice.reducer;
