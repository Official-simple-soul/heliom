import { configureStore } from '@reduxjs/toolkit';
import meterReducer from './slices/meterSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import generalReducer from './slices/generalSlice';

export const store = configureStore({
  reducer: {
    meter: meterReducer,
    auth: authReducer,
    general: generalReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
