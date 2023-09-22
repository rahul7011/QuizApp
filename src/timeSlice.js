import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "timeOver", // The name of the slice
  initialState: { isOver: false }, // The initial state of the slice
  reducers: {
    timeUpdate: (state, action) => {
      const check = action.payload;
      state.isOver = check; // Update the "isOver" property of the state
    },
  },
});

export const { timeUpdate } = timeSlice.actions; // Export the action creator
export default timeSlice.reducer; // Export the reducer function
