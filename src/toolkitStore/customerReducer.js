import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const customerReducer = createSlice({
	name: "customers",
	initialState,
	reducers: {
		addCustomerAction(state, action) {
			state.push(action.payload);
		},
		removeCustomerAction(state) {
			state.pop();
		},
	},
});

export const { addCustomerAction, removeCustomerAction } = customerReducer.actions;