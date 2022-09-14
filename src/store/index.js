import { combineReducers, createStore } from "redux";
import { cashReduser } from "./cashReduser";
import { customerReducer } from "./customerReducer";

const rootReducer = combineReducers({
	casher: cashReduser,
	customer: customerReducer,
});

export const store = createStore(rootReducer);