const ADD_CUSTOMER = "add_customer";
const REMOVE_CUSTOMER = "remove_customer";

export const customerReducer = (state = { customers: [], payload: {} }, action) => {
	switch (action.type) {
		case ADD_CUSTOMER:
			return { ...state, customers: [...state.customers, action.payload] };
		case REMOVE_CUSTOMER:
			return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) };
		default:
			return state;
	}
};

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload });