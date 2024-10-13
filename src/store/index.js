import { configureStore } from '@reduxjs/toolkit';
import meterReducer from './slices/meterSlice';
import authReducer from './slices/authSlice';
import generalReducer from './slices/generalSlice';

export const store = configureStore({
  reducer: {
    meter: meterReducer,
    auth: authReducer,
    general: generalReducer,
  },
});

export default store;
