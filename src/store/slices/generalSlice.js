import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formValues: {},
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setFormValues: (state, action) => {
      state.formValues = action.payload;
    },
  },
});

export const { setFormValues } = generalSlice.actions;
export default generalSlice.reducer;
