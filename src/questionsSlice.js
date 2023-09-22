import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions", // The name of the slice
  initialState: { taken: null }, // The initial state of the slice with a "taken" property initialized to null
  reducers: {
    choiceTaken: (state, action) => {
      const obj = action.payload.payload; // Extract the "payload" property from the action payload
      state.taken = [...obj]; // Update the "taken" property of the state with a new array
    },
  },
});

export const { choiceTaken } = questionsSlice.actions; // Export the action creator
export default questionsSlice.reducer; // Export the reducer function
