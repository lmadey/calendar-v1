import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  modalComponent: null | JSX.Element;
}

const initialState: InitialState = {
  modalComponent: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalVisible(state, action: PayloadAction<{ component: JSX.Element }>) {
      state.modalComponent = action.payload.component;
    },
  },
});

export const { setModalVisible } = modalSlice.actions;
export default modalSlice.reducer;
