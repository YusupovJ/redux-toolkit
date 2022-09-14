export const cashReduser = (state = { cash: 0, payload: 0 }, action) => {
	switch (action.type) {
		case "add_cash":
			return { ...state, cash: state.cash + action.payload };
		case "get_cash":
			return { ...state, cash: state.cash - action.payload };
		default:
			return state;
	}
};