import React, { useState } from "react";
import { addCustomerAction, removeCustomerAction } from "../toolkitStore/customerReducer";
import { useDispatch, useSelector } from "react-redux";

const Customers = () => {
	const dispatch = useDispatch();
	const customers = useSelector(state => state.customer);
	const [name, setName] = useState("");

	const addCustomer = (name) => {
		setName("");
		dispatch(addCustomerAction({ name, id: Date.now() }));
	};

	const addCustomerOnPressEnter = (e) => {
		if (e.code === "Enter") addCustomer(e.target.value);
	};

	const removeCustomer = () => {
		dispatch(removeCustomerAction());
	};

	return (
		<>
			<h1>Клиенты</h1>
			<input
				onKeyDown={addCustomerOnPressEnter}
				value={name}
				type="text"
				onChange={(e) => setName(e.target.value)}
			/>
			<button

				onClick={addCustomer.bind(null, name)} type="button"
			>
				Добавить клиента
			</button>
			<button

				onClick={removeCustomer} type="button"
			>
				Удалить последнего клиента
			</button>
			<div>
				{customers.length > 0
					? customers.map(customer => (
						<p key={customer.id}>{customer.name}</p>
					))
					: <p style={{ textAlign: "center" }}>Клиентов нет</p>
				}
			</div>
		</>
	);
};

export default Customers;