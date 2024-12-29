import { configureStore } from '@reduxjs/toolkit';
import column from '@/slices/columnSlice';



export const store = configureStore({
  reducer: {
    column,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});
