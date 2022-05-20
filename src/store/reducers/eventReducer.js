import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents } from "../actions/eventActions";

const initialState = {
  events: [],
  isLoading: false,
  choosenEvent: null
};

export const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  extraReducers: {
    [fetchEvents.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    },
    [fetchEvents.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const eventsReducer = eventsSlice.reducer;
