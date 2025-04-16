import { configureStore } from '@reduxjs/toolkit';
import navReducer from './slices/NavSlice';

const store = configureStore({
  reducer: {
    nav: navReducer
  }
});

export default store;