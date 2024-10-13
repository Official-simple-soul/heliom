import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: { user: null, isAuthenticated: false },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
    clearUserProfile: (state) => {
      state.userProfile = { user: null, isAuthenticated: false };
    },
  },
});

export const { setUserProfile, clearUserProfile } = authSlice.actions;
export default authSlice.reducer;
