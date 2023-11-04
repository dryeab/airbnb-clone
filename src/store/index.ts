import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
  // enhancers: [composeWithDevTools()],
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
