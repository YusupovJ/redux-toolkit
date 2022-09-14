import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cashReduser } from "./cashReduser";
import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
	casher: cashReduser,
	customer: customerReducer.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
});