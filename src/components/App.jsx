import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Customers from "./Customers";
import { addCashAction, getCashAction } from "../toolkitStore/cashReduser";

const App = () => {
	const dispatch = useDispatch();
	const cash = useSelector(state => state.casher.cash);

	const addCash = (cash) => {
		dispatch(addCashAction(cash));
	};

	const getCash = (cash) => {
		dispatch(getCashAction(cash));
	};

	return (
		<div className="wrapper">
			<h1>Банк</h1>
			<div className="buttons-wrapper">
				<button onClick={addCash.bind(null, 100)} type="button">Положить 100$</button>
				<button onClick={addCash.bind(null, 50)} type="button">Положить 50$</button>
				<button onClick={addCash.bind(null, 10)} type="button">Положить 10$</button>
			</div>
			<div className="buttons-wrapper">
				<button onClick={getCash.bind(null, 100)} type="button">Снять 100$</button>
				<button onClick={getCash.bind(null, 50)} type="button">Снять 50$</button>
				<button onClick={getCash.bind(null, 10)} type="button">Снять 10$</button>
			</div>
			<h2>Счет в банке: {cash}$</h2>

			{<hr /> /* =========================================== */}

			<Customers />
		</div>
	);
};

export default App;