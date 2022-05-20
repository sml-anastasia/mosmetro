import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./reducers/eventReducer";

const store = configureStore({
  reducer: { events: eventsReducer },
});

export default store;
