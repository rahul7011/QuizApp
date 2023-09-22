import { configureStore } from "@reduxjs/toolkit";
import questionsSlice from "./questionsSlice";
import timeSlice from "./timeSlice";
// Create the Redux store with reducers
const store = configureStore({
  reducer: {
    questions: questionsSlice,
    timeOver:timeSlice,
  },
});

export default store;
