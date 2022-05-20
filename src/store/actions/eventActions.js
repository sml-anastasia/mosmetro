import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/49b8fbae-13e6-4aac-a8d1-644e3881cc62"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
});