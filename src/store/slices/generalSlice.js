import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formValues: {},
  isLoading: false,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      state.formValues = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setFormValues, setLoading } = generalSlice.actions;
export default generalSlice.reducer;
