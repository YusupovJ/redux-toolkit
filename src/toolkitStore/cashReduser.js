import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const initialState = {
	cash: 0,
};

export const addCashAction = createAction("add_cash");
export const getCashAction = createAction("get_cash");

export const cashReduser = createReducer(initialState, {
	[addCashAction]: (state, action) => {
		state.cash += action.payload;
	},
	[getCashAction]: (state, action) => {
		state.cash -= action.payload;
	},
});