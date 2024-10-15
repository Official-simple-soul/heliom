import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeneralState {
  formValues: Record<string, unknown>;
  isLoading: boolean;
  openCreateAccountModal: boolean;
}

const initialState: GeneralState = {
  formValues: {},
  isLoading: false,
  openCreateAccountModal: false,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setFormValues: (state, action: PayloadAction<Record<string, unknown>>) => {
      state.formValues = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setOpenCreateAccountModal: (state, action: PayloadAction<boolean>) => {
      state.openCreateAccountModal = action.payload;
    },
  },
});

export const { setFormValues, setLoading, setOpenCreateAccountModal } =
  generalSlice.actions;
export default generalSlice.reducer;
