import { configureStore } from '@reduxjs/toolkit';
import albumSlice from './albums/albumSlice';

export const store = configureStore({
  reducer: {
    albumReducer: albumSlice.reducer,
  },
});
