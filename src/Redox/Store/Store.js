import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import Slice from "../Features/Slice/Slice";

const rootReducer = combineReducers({
  slice: Slice,
});

///

export const store = configureStore({
  reducer: rootReducer,
});
