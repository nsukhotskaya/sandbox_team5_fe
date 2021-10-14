import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
