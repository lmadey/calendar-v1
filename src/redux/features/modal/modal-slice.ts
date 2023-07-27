import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModalState = "visible" | "hide";

interface InitialState {
  modalState: ModalState;
}

const initialState: InitialState = {
  modalState: "hide",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalVisible(state, action: PayloadAction<ModalState>) {
      state.modalState = action.payload;
    },
  },
});

export const { setModalVisible } = modalSlice.actions;
export default modalSlice.reducer;
