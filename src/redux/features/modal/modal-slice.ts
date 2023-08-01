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
    openModal(state, action: PayloadAction<{ component: JSX.Element }>) {
      state.modalComponent = action.payload.component;
    },
    closeModal(state) {
      state.modalComponent = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
